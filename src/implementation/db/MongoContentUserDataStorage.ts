import MongoDB from 'mongodb';

import {
    ContentId,
    IAjaxResponse,
    IPreviousState,
    IContentUserData,
    IContentUserDataStorage
} from '../../types';

/**
 * The ContentUserDataStorage is used to store the state of a content type
 * for the current user.
 */
export default class MongoContentUserDataStorage
    implements IContentUserDataStorage {
    constructor(private mongoCollection: MongoDB.Collection) {
        this.mongoCollection = mongoCollection;
    }

    /**
     * Store data.
     * @param {IContentUserData} contentUserData Content user data.
     */
    async set(contentUserData: IContentUserData): Promise<void> {
        if (contentUserData.data !== '0') {
            await this.mongoCollection.replaceOne(
                {
                    userId: contentUserData.userId,
                    contentId: contentUserData.contentId,
                    subContentId: contentUserData.subContentId,
                    dataType: contentUserData.dataType
                },
                contentUserData,
                { upsert: true }
            );
        }
    }

    /**
     * Get raw data.
     * @param {ContentId} contentId Content id.
     * @param {string} userId User id.
     * @return {Promise<IContentUserData[]>} All data stored.
     */
    async getAll(
        contentId: ContentId,
        userId: string
    ): Promise<IContentUserData[]> {
        const result = await this.mongoCollection
            .find({
                userId: userId,
                contentId: contentId
            })
            .toArray();

        return result;
    }

    /**
     * Get data only.
     * @param {ContentId} contentId Content Id.
     * @param {string} userId User Id.
     * @param {string} subContentId Subcontent id.
     * @param {string} dataType Data type, usually 'state'.
     * @return {Promise<IAjaxResponse>} Data of single content user item.
     */
    async getData(
        contentId: ContentId,
        userId: string,
        subContentId: string,
        dataType: string
    ): Promise<IAjaxResponse> {
        const response: IAjaxResponse = { success: true };
        const entries = await this.getAll(contentId, userId);

        if (entries === null) {
            return response; // Nothing stored yet
        }

        const entry: IContentUserData = entries
            .filter((entryItem) => {
                return (
                    entryItem.dataType === dataType &&
                    entryItem.subContentId === subContentId
                );
            })
            .shift();

        if (entry?.data !== undefined) {
            response.data = entry.data; // Not all H5P integrations return data
        }

        return response;
    }

    /**
     * Get data ready for previous state usage.
     * @param {ContentId} contentId Content id.
     * @param {string} userId User id.
     * @return {Promise<IPreviousState[]>} Data ready for previous state usage.
     */
    async getPreviousState(
        contentId: ContentId,
        userId: string
    ): Promise<IPreviousState[]> {
        let response: IPreviousState[] = [{ state: '{}' }];

        let entries = await this.getAll(contentId, userId);

        if (entries === null) {
            return response; // Nothing stored yet
        }

        response = [];

        entries
            .filter((entry) => entry.preload === 1)
            .forEach((entry) => {
                response[entry.subContentId] = { state: '' };
                // Joubel using entry.dataType instead of 'state' hints to the future
                response[entry.subContentId][entry.dataType] = entry.data;
            });

        return response;
    }
}
