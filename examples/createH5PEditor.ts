import * as H5P from '../src';
import dbImplementations from '../src/implementation/db';
import { TypeORMS3ContentStorage, TypeORMS3LibraryStorage } from 'h5p-typeorm'
import { S3Client } from '@aws-sdk/client-s3';
import fs from 'fs';
import { initH5PTypeormConnection } from 'h5p-typeorm'
import { Logger } from '@lumieducation/h5p-server';
import { Connection } from 'typeorm';

const log = new Logger('createH5PEditor');

/**
 * Create a H5PEditor object.
 * Which storage classes are used depends on the configuration values set in
 * the environment variables. If you set no environment variables, the local
 * filesystem storage classes will be used.
 *
 * CONTENTSTORAGE=mongos3 Uses MongoDB/S3 backend for content storage
 * CONTENT_MONGO_COLLECTION Specifies the collection name for content storage
 * CONTENT_AWS_S3_BUCKET Specifies the bucket name for content storage
 * TEMPORARYSTOAGE=s3 Uses S3 backend for temporary file storage
 * TEMPORARY_AWS_S3_BUCKET Specifies the bucket name for temporary file storage
 *
 * Further environment variables to set up MongoDB and S3 can be found in
 * docs/mongo-s3-content-storage.md and docs/s3-temporary-file-storage.md!
 * @param config the configuration object
 * @param localLibraryPath a path in the local filesystem in which the H5P libraries (content types) are stored
 * @param localContentPath a path in the local filesystem in which H5P content will be stored (only necessary if you want to use the local filesystem content storage class)
 * @param localTemporaryPath a path in the local filesystem in which temporary files will be stored (only necessary if you want to use the local filesystem temporary file storage class).
 * @param translationCallback a function that is called to retrieve translations of keys in a certain language; the keys use the i18next format (e.g. namespace:key).
 * @returns a H5PEditor object
 */
export default async function createH5PEditor(
    config: H5P.IH5PConfig,
    localLibraryPath?: string,
    localContentPath?: string,
    localTemporaryPath?: string,
    translationCallback?: H5P.ITranslationFunction
): Promise<H5P.H5PEditor> {
    log.info(`Creating H5P Editor`);
    
    // Depending on the environment variables we use different implementations
    // of the storage interfaces.
    const h5pEditor = new H5P.H5PEditor(
        new H5P.fsImplementations.InMemoryStorage(), // this is a general-purpose cache
        config,
        await getLibraryStorageImplementation(localLibraryPath),
        await getContentStorageImplementation(localContentPath),
        process.env.TEMPORARYSTORAGE === 's3'
            ? new dbImplementations.S3TemporaryFileStorage(
                  dbImplementations.initS3({
                      s3ForcePathStyle: true,
                      signatureVersion: 'v4'
                  }),
                  {
                      s3Bucket: process.env.TEMPORARY_AWS_S3_BUCKET,
                      maxKeyLength: process.env.AWS_S3_MAX_FILE_LENGTH
                          ? Number.parseInt(
                                process.env.AWS_S3_MAX_FILE_LENGTH,
                                10
                            )
                          : undefined
                  }
              )
            : new H5P.fsImplementations.DirectoryTemporaryFileStorage(
                  localTemporaryPath
              ),
        translationCallback
    );

    // Set bucket lifecycle configuration for S3 temporary storage to make
    // sure temporary files expire.
    if (
        h5pEditor.temporaryStorage instanceof
        dbImplementations.S3TemporaryFileStorage
    ) {
        await (h5pEditor.temporaryStorage as any).setBucketLifecycleConfiguration(
            h5pEditor.config
        );
    }

    log.info(`H5P Editor constructed`);
    return h5pEditor;
}

let getTypeormConnection: () => Promise<Connection> = (() => {
    let typeormConnection: Connection;

    return async () => {
        if (!typeormConnection) {
            typeormConnection = await initH5PTypeormConnection({
                type: process.env.H5P_STORAGE_ENV === 'cockroach' ? 'cockroachdb' : 'postgres',
                host: process.env.H5P_PG_HOST,
                username: process.env.H5P_PG_USER,
                port: +(process.env.H5P_PG_PORT || 5432),
                database: process.env.H5P_PG_DATABASE || 'h5p',
                password: process.env.H5P_PG_PASSWORD,
                extra: {
                connectionLimit: 5
                },
                logging: true
            });
        }
        return typeormConnection;
    }
})();

async function getContentStorageImplementation(localContentPath?: string) : Promise<H5P.IContentStorage>{
    switch(process.env.CONTENTSTORAGE) {
        case 'mongos3':
            log.info(`Initializing MongoS3 content storage implementation`);
            return new dbImplementations.MongoS3ContentStorage(
                dbImplementations.initS3({
                    s3ForcePathStyle: true,
                    signatureVersion: 'v4'
                }),
                (await dbImplementations.initMongo()).collection(
                    process.env.CONTENT_MONGO_COLLECTION
                ),
                {
                    s3Bucket: process.env.CONTENT_AWS_S3_BUCKET,
                    maxKeyLength: process.env.AWS_S3_MAX_FILE_LENGTH
                        ? Number.parseInt(
                              process.env.AWS_S3_MAX_FILE_LENGTH,
                              10
                          )
                        : undefined
                }
            );

        case 'typeorms3':
            log.info(`Initializing TypeORMS3 content storage implementation`);

            return new TypeORMS3ContentStorage(new S3Client({
                endpoint: process.env.TYPEORM_CONTENT_S3_ENDPOINT || process.env.S3_ENDPOINT,
                region: process.env.TYPEORM_CONTENT_REGION || process.env.S3_REGION,
                forcePathStyle: true
            }), {
                s3Bucket: process.env.TYPEORM_CONTENT_S3_BUCKET || process.env.S3_BUCKET,
                typeormConnection: await getTypeormConnection()
            });

        case 'fs':
        default:
            log.info(`Initializing FS content storage implementation`);
            return new H5P.fsImplementations.FileContentStorage(localContentPath);

    }
}

async function getLibraryStorageImplementation(localLibraryPath?: string): Promise<H5P.ILibraryStorage> {
    switch(process.env.LIBRARYSTORAGE) {
        case 'typeorms3':
            log.info(`Initializing TypeORMS3 library storage implementation`);
            return new TypeORMS3LibraryStorage(new S3Client({
                endpoint: process.env.TYPEORM_LIBRARY_S3_ENDPOINT || process.env.S3_ENDPOINT,
                region: process.env.TYPEORM_LIBRARY_REGION || process.env.S3_REGION,
                forcePathStyle: true
            }), {
                s3Bucket: process.env.S3_STORAGE_BUCKET,
                typeormConnection: await getTypeormConnection()
            });

        case 'fs':
        default: {
            log.info(`Initializing default FS library storage implementation`);
            return new H5P.fsImplementations.FileLibraryStorage(
                localLibraryPath
            );
        }
    }
}

export async function syncLibraryFromFs(librariesPath: string, editor: H5P.H5PEditor) {
    const directoryItems = await fs.promises.readdir(librariesPath);
    log.info(`Syncing file system libraries to S3 storage`);

    const libraries: string[] = await Promise.all(
        directoryItems
            .map(async path => { return [path, await fs.promises.stat(`${librariesPath}/${path}`)] as [string, fs.Stats] })
            .filter(async payload => {
                const [path, stat]: [string, fs.Stats] = await payload;
                return stat.isDirectory();
            })
            .map(async payload => (await payload)[0])
    );

    log.info(`${libraries.length} libraries discovered in file system`);

    const promises = libraries.map(async (library, i) => {
        log.info(`Syncing library ${i+1}/${libraries.length}: ${library}`)
        return  editor.libraryManager.installFromDirectory(`${librariesPath}/${library}`)
    });

    try {
        await Promise.all(promises);
        log.info(`Libraries synced successfully`);
    } catch (err) {
        log.error(`Error syncing libraries: ${err}`)
        log.error(`Caused by: ${err.stack}`)
    }
}
