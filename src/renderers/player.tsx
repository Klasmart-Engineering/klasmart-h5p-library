import ReactDOMServer from 'react-dom/server';
import React from 'react';
import { IPlayerModel } from '@lumieducation/h5p-server';

// tslint:disable-next-line: function-name
function Player(props: any):any {
    // console.log("render")
    // console.log(props.model.integration)

    return (
        <html className="h5p-iframe">
            <head>
                <meta charSet="utf-8" />
                {/* Prevent right-click/context-menu from showing */}
                <script>{"window.addEventListener(`contextmenu`, function(e){ e.preventDefault(); }, false)"}</script>
                { props.model.styles.map((style) => (
                    <link rel="stylesheet" href={style} />
                ))}

                <script
                    dangerouslySetInnerHTML={{
                        __html: `H5PIntegration = ${JSON.stringify(
                            props.model.integration,
                            null,
                            2
                        )}`
                    }}
                />

                {props.model.scripts.map((script, index) => (
                    <script src={script} key={index} />
                ))}
            </head>
            <body>
                <div className="h5p-content" data-content-id={props.model.contentId}></div>
            </body>
        </html>
    );
}

export default (model: IPlayerModel) => `${ReactDOMServer.renderToString(<Player model={model} />)}`