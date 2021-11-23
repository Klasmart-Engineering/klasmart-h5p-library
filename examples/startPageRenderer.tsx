import * as H5P from '../src';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

// tslint:disable-next-line: function-name
function ContentList(props: any): any {
    return (
        <html>
            <head>
                <meta charSet="utf-8" />
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
                    integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
                    crossOrigin="anonymous"
                />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css"
                    crossOrigin="anonymous"
                />
                <title>H5P NodeJs Demo</title>
            </head>
            <body>
                <div className="container">
                    <h1>H5P NodeJS Demo</h1>
                    <div className="alert alert-warning">
                        This demo is for debugging and demonstration purposes
                        only and not suitable for production use!
                    </div>

                    <a
                        className="btn btn-primary my-2"
                        href={`${props.editor.config.baseUrl}/new`}
                    >
                        <span className="fa fa-plus-circle m-2"></span>
                        Create new content
                    </a>

                    <h2>Existing Content</h2>
                    <div className="list-group">
                        {props.contentObjects.map((content) => (
                            <div className="list-group-item">
                                <div className="d-flex w-10">
                                    <div className="mr-auto p-2 align-self-center">
                                        <a
                                            href={`${props.editor.config.baseUrl}${props.editor.config.playUrl}/${content.id}`}
                                        >
                                            <h5>{content.content.title}</h5>
                                        </a>
                                        <div className="small d-flex">
                                            <div className="mr-2">
                                                <span className="fa fa-book-open" />{' '}
                                                {content.content.mainLibrary}
                                            </div>
                                            <div className="mr-2">
                                                <span className="fa fa-fingerprint" />{' '}
                                                {content.id}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-2">
                                        <a
                                            className="btn btn-secondary"
                                            href={`${props.editor.config.baseUrl}/edit/${content.id}`}
                                        >
                                            <span className="fa fa-pencil-alt m-1" />{' '}
                                            edit
                                        </a>
                                    </div>
                                    <div className="p-2">
                                        <a
                                            className="btn btn-info"
                                            href={`${props.editor.config.baseUrl}${props.editor.config.downloadUrl}/${content.id}`}
                                        >
                                            <span className="fa fa-file-download m-1" />{' '}
                                            download
                                        </a>
                                    </div>
                                    <div className="p-2">
                                        <a
                                            className="btn btn-danger"
                                            href={`${props.editor.config.baseUrl}/delete/${content.id}`}
                                        >
                                            <span className="fa fa-trash-alt m-1" />{' '}
                                            delete
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </body>
        </html>
    );
}

export default function render(
    editor: H5P.H5PEditor
): (req: any, res: any) => any {
    return async (req, res) => {
        const contentIds = await editor.contentManager.listContent();
        const contentObjects = await Promise.all(
            contentIds.map(async (id) => ({
                content: await editor.contentManager.getContentMetadata(
                    id,
                    req.user
                ),
                id
            }))
        );
        res.send(
            `${ReactDOMServer.renderToString(
                <ContentList editor={editor} contentObjects={contentObjects} />
            )}`
        );
    };
}
