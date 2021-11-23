import path from 'path';

import {
    H5PEditor,
    IContentStorage,
    IContentUserDataStorage,
    IH5PConfig,
    IKeyValueStorage,
    ILibraryStorage,
    ITemporaryFileStorage
} from '../../src';
import H5PConfig from '../../src/implementation/H5PConfig';
import DirectoryTemporaryFileStorage from '../../src/implementation/fs/DirectoryTemporaryFileStorage';
import FileContentStorage from '../../src/implementation/fs/FileContentStorage';
import FileContentUserDataStorage from '../../src/implementation/fs/FileContentUserDataStorage';
import FileLibraryStorage from '../../src/implementation/fs/FileLibraryStorage';
import InMemoryStorage from '../../src/implementation/InMemoryStorage';

export function createH5PEditor(
    tempPath: string
): {
    config: IH5PConfig;
    contentStorage: IContentStorage;
    contentUserDataStorage: IContentUserDataStorage;
    h5pEditor: H5PEditor;
    keyValueStorage: IKeyValueStorage;
    libraryStorage: ILibraryStorage;
    temporaryStorage: ITemporaryFileStorage;
} {
    const keyValueStorage = new InMemoryStorage();
    const config = new H5PConfig(keyValueStorage);
    const libraryStorage = new FileLibraryStorage(
        path.join(tempPath, 'libraries')
    );
    const contentStorage = new FileContentStorage(
        path.join(tempPath, 'content')
    );
    const contentUserDataStorage = new FileContentUserDataStorage(
        path.join(tempPath, 'content-user-data')
    );
    const temporaryStorage = new DirectoryTemporaryFileStorage(
        path.join(tempPath, 'tmp')
    );

    const h5pEditor = new H5PEditor(
        keyValueStorage,
        config,
        libraryStorage,
        contentStorage,
        contentUserDataStorage,
        temporaryStorage
    );

    return {
        config,
        contentStorage,
        contentUserDataStorage,
        h5pEditor,
        keyValueStorage,
        libraryStorage,
        temporaryStorage
    };
}
