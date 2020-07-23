// tslint:disable-next-line: no-submodule-imports
import ReactDOMServer from 'react-dom/server';
import React from "react";
import { IEditorModel } from "../types"
// import $ from "jquery"

// tslint:disable-next-line: function-name
function Editor(props: any):any {
    // console.log(props.model.integration)
    return (
        <html>
            <head>
                <meta charSet="utf-8" />

                <script dangerouslySetInnerHTML={{__html: `window.H5PIntegration = parent.H5PIntegration || ${JSON.stringify(props.model.integration, null, 2)}`}} />

                { props.model.styles.map((style) => (
                    <link rel="stylesheet" href={style} />
                ))}

                { props.model.scripts.map((script) => (
                    <script src={script} />
                ))}
            </head>
            <body>
                <form method="post" encType="multipart/form-data" id="h5p-content-form">
                    <div id="post-body-content">
                        <div className="h5p-create">
                            <div className="h5p-editor"></div>
                        </div>
                    </div>
                    <input type="submit" name="submit" value="Create" className="button button-primary button-large"/>
                </form>
            </body>
            <script dangerouslySetInnerHTML={{
            __html: `var ns = H5PEditor;

            (function($) {
                H5PEditor.init = function() {
                    H5PEditor.$ = H5P.jQuery;
                    H5PEditor.basePath = H5PIntegration.editor.libraryUrl;
                    H5PEditor.fileIcon = H5PIntegration.editor.fileIcon;
                    H5PEditor.ajaxPath = H5PIntegration.editor.ajaxPath;
                    H5PEditor.filesPath = H5PIntegration.editor.filesPath;
                    H5PEditor.apiVersion = H5PIntegration.editor.apiVersion;
            
                    // Semantics describing what copyright information can be stored for media.
                    H5PEditor.copyrightSemantics = H5PIntegration.editor.copyrightSemantics;
                    H5PEditor.metadataSemantics = H5PIntegration.editor.metadataSemantics;
            
                    // Required styles and scripts for the editor
                    H5PEditor.assets = H5PIntegration.editor.assets;
            
                    // Required for assets
                    H5PEditor.baseUrl = '';
            
                    if (H5PIntegration.editor.nodeVersionId !== undefined) {
                        H5PEditor.contentId = H5PIntegration.editor.nodeVersionId;
                    }
            
                    var h5peditor;
                    var $type = $('input[name="action"]');
                    var $upload = $('.h5p-upload');
                    var $create = $('.h5p-create').hide();
                    var $editor = $('.h5p-editor');
                    var $library = $('input[name="library"]');
                    var $params = $('input[name="parameters"]');
                    var library = $library.val();
            
                    // $type.change(function () {
                    //   if ($type.filter(':checked').val() === 'upload') {
                    //     $create.hide();
                    //     $upload.show();
                    //   }
                    //   else {
                    $upload.hide();
                    if (h5peditor === undefined) {
                        $.ajax({
                            error: function(res) {
                                h5peditor = new ns.Editor(undefined, undefined, $editor[0]);
                                $create.show();
                            },
                            success: function(res) {
                                h5peditor = new ns.Editor(
                                    res.library,
                                    JSON.stringify(res.params),
                                    $editor[0]
                                );
                                $create.show();
                                // $type.change();
                            },
                            type: 'GET',
                            url: '${props.model.urlGenerator.parameters()}/' + H5PEditor.contentId + window.location.search
                        });
                    }
                    $create.show();
                    //   }
                    // });
            
                    if ($type.filter(':checked').val() === 'upload') {
                        $type.change();
                    } else {
                        $type
                            .filter('input[value="create"]')
                            .attr('checked', true)
                            .change();
                    }
            
                    $('#h5p-content-form').submit(function(event) {
                        if (h5peditor !== undefined) {
                            var params = h5peditor.getParams();
            
                            if (params.params !== undefined) {
                                // Validate mandatory main title. Prevent submitting if that's not set.
                                // Deliberately doing it after getParams(), so that any other validation
                                // problems are also revealed
                                // if (!h5peditor.isMainTitleSet()) {
            
                                // }
            
                                // Set main library
                                $library.val(h5peditor.getLibrary());
            
                                // Set params
                                $params.val(JSON.stringify(params));
            
                                $.ajax({
                                    data: JSON.stringify({
                                        library: h5peditor.getLibrary(),
                                        params
                                    }),
                                    headers: {
                                        'Content-Type': 'application/json'
                                    },
                                    type: 'POST'
                                }).then((result) => {
                                    const parsedResult = JSON.parse(result)
                                    if(parsedResult.contentId) {
                                        window.location.href = '${props.model.urlGenerator.play()}/' + parsedResult.contentId;
                                    }
                                });
            
                                return event.preventDefault();
                                // TODO - Calculate & set max score
                                // $maxscore.val(h5peditor.getMaxScore(params.params));
                            }
                        }
                    });
            
                    // Title label
                    var $title = $('#h5p-content-form #title');
                    var $label = $title.prev();
                    $title
                        .focus(function() {
                            $label.addClass('screen-reader-text');
                        })
                        .blur(function() {
                            if ($title.val() === '') {
                                $label.removeClass('screen-reader-text');
                            }
                        })
                        .focus();
            
                    // Delete confirm
                    $('.submitdelete').click(function() {
                        return confirm(H5PIntegration.editor.deleteMessage);
                    });
                };
            
                H5PEditor.getAjaxUrl = function(action, parameters) {
                    var url = H5PIntegration.editor.ajaxPath + action;
            
                    if (parameters !== undefined) {
                        for (var property in parameters) {
                            if (parameters.hasOwnProperty(property)) {
                                url += '&' + property + '=' + parameters[property];
                            }
                        }
                    }
            
                    url += window.location.search.replace(/\\?/g, '&');
                    return url;
                };
            
                $(document).ready(H5PEditor.init);
            })(H5P.jQuery);`
            }} />
        </html>
    );
}

export default (model: IEditorModel) => `${ReactDOMServer.renderToString(<Editor model={model} />)}`

