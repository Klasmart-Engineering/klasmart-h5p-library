import ReactDOMServer from 'react-dom/server';
import React, { useState, useEffect } from "react";
import { IPlayerModel } from "../types"

// tslint:disable-next-line: function-name
function Player(props: any):any {
    // console.log("render")
    // console.log(props.model.integration)

    return (
        <html className="h5p-iframe">
            <head>
                <meta charset="utf-8" />
                {/* <script src="http://localhost:8000/record.js" /> */}
                { props.model.styles.map((style) => (
                    <link rel="stylesheet" href={style} />
                ))}

                { props.model.scripts.map((script) => (
                    <script src={script} />
                ))}

                <script dangerouslySetInnerHTML={{__html: `H5PIntegration = ${JSON.stringify(props.model.integration, null, 2)}`}} />
                
                { props.model.customScripts.map((script) => (
                    <script src={script} />
                ))}
            </head>
            <body>
                <div className="h5p-content" data-content-id={props.model.contentId}></div>
                <a href={props.model.downloadPath}>Download</a>
            </body>
        </html>
    );
}

export default (model: IPlayerModel) => `${ReactDOMServer.renderToString(<Player model={model} />)}`