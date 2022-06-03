import { ObjectId, Collection, Document, WithId, MongoClient } from 'mongodb';

const SubContentBlackList = [
    'Image',
    'Audio',
    'Video',
    'Text',
    'AdvancedText',
    'ImageSlide',
    'ImageSlider'
];

export default class ContentInfoRetriever {
    constructor(private readonly mongoDb: Collection<Document>) {}

    async getContentInfo(contentIds: string[]): Promise<ContentInfoResponse> {
        const objectIds = contentIds.map((x) => new ObjectId(x));
        const documents = await this.mongoDb
            .find({
                _id: { $in: objectIds }
            })
            .toArray();
        const contents = documents.map((x) => this.mapDocumentToContentInfo(x));
        return { contents };
    }

    private mapDocumentToContentInfo(doc: WithId<Document>): ContentInfo {
        const rawh5p = (doc as unknown) as RawH5P;
        const contentInfo: ContentInfo = {
            id: rawh5p._id.toString(),
            // H5P.Column -> Column
            type: rawh5p.metadata.mainLibrary.substring(4)
        };
        this.buildRecursively(rawh5p.parameters, contentInfo);
        return contentInfo;
    }

    private buildRecursively(node: unknown, parent: ContentInfo) {
        if (node == null || typeof node !== 'object') {
            return;
        }
        if (Array.isArray(node)) {
            for (const x of node) {
                this.buildRecursively(x, parent);
            }
            return;
        }
        if (node.hasOwnProperty('subContentId')) {
            const subContentId = node['subContentId'];
            const rawLibrary = node['library'];
            let library = rawLibrary as string;
            if (library == null) {
                library = parent.type;
            } else {
                if (library.startsWith('H5P.')) {
                    // H5P.Blanks 1.12 -> Blanks
                    library = library.substring(4, rawLibrary.indexOf(' '));
                }
            }
            if (SubContentBlackList.includes(library)) {
                return;
            }
            const child: ContentInfo = {
                id: subContentId,
                type: library
            };
            const subContents = parent.subContents ?? [];
            parent.subContents = subContents;
            parent.subContents.push(child);
            this.buildRecursively(node['params'], child);
            return;
        }
        for (const value of Object.values(node)) {
            this.buildRecursively(value, parent);
        }
    }
}

type ContentInfoResponse = {
    contents: ContentInfo[];
};

type ContentInfo = {
    id: string;
    type: string;
    subContents?: ContentInfo[];
};

type RawH5P = {
    _id: ObjectId;
    metadata: { mainLibrary: string };
    parameters: Record<string, unknown>;
};
