import MongoS3ContentStorage from './MongoS3ContentStorage';
import MongoContentUserDataStorage from './MongoContentUserDataStorage';
import initS3 from './initS3';
import initMongo from './initMongo';
import S3TemporaryFileStorage from './S3TemporaryFileStorage';

export default {
    MongoS3ContentStorage,
    MongoContentUserDataStorage,
    initS3,
    initMongo,
    S3TemporaryFileStorage
};
