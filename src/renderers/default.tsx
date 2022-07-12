// tslint:disable-next-line: no-submodule-imports
import ReactDOMServer from 'react-dom/server';
import React from 'react';
import { IEditorModel } from '@lumieducation/h5p-server';
// import $ from "jquery"

// tslint:disable-next-line: function-name
function Editor(props: any): any {
  // console.log(props.model.integration)
  return (
    <html>
      <head>
        <meta charSet="utf-8" />

        <script
          dangerouslySetInnerHTML={{
            __html: `window.H5PIntegration = ${JSON.stringify(
              props.model.integration,
              null,
              2
            )}`
          }}
        />

        {props.model.styles.map((style, index) => (
          <link rel="stylesheet" href={style} key={index} />
        ))}

        {props.model.scripts.map((script, index) => (
          <script src={script} key={index} />
        ))}
      </head>
      <body>
        <form
          method="post"
          encType="multipart/form-data"
          id="h5p-content-form"
        >
          <div id="post-body-content">
            <div className="h5p-create">
              <div className="h5p-editor"></div>
            </div>
          </div>
          <input
            type="submit"
            name="submit"
            value="Create"
            className="button button-primary button-large"
          />
        </form>
      </body>
      <script
        dangerouslySetInnerHTML={{
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
                            url: (H5PEditor.contentId !== undefined  ) ? '${props.model.urlGenerator.parameters()}/' + H5PEditor.contentId + window.location.search : ""
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
                                if (!h5peditor.isMainTitleSet()) {
                                    return event.preventDefault();
                                }

                                /*
                                 * Try to open tab where error occurs after
                                 * validation.
                                 */
                                const openTabWithError = function(errorNode) {
                                  const vtabForm = errorNode.closest('fieldset.h5p-vtab-form');
                                  if (vtabForm && !vtabForm.classList.contains('h5p-current')) {
                                    /*
                                     * Error is in a tab that's not selected,
                                     * determine tab's index.
                                     */
                                    let tabIndex = -1;
                                    const vtabForms = vtabForm.parentNode;
                                    for (let i = 0; vtabForms.childNodes.length; i++) {
                                      if (vtabForm.parentNode.childNodes[i] === vtabForm) {
                                        tabIndex = i;
                                        break;
                                      }
                                    }

                                    // Try to find
                                    if (tabIndex !== -1) {
                                      const tabs = vtabForms.parentNode.querySelectorAll('.h5p-vtabs .h5p-vtab-li');
                                      if (tabs && tabs.length > tabIndex) {
                                        const anchor = tabs[tabIndex].querySelector('.h5p-vtab-a');
                                        if (anchor) {
                                          /*
                                           * Simulate mousedown and mouseup as
                                           * that's what the vertical tab
                                           * widget is listening to
                                           */
                                          const evtMouseDown = document.createEvent('MouseEvents');
                                          evtMouseDown.initEvent('mousedown', true, true);
                                          anchor.dispatchEvent(evtMouseDown);

                                          const evtMouseUp = document.createEvent('MouseEvents');
                                          evtMouseUp.initEvent('mouseup', true, true);
                                          anchor.dispatchEvent(evtMouseUp);
                                        }
                                      }
                                    }
                                  }
                                };

                                /**
                                 * Open group that contains error.
                                 * @param {HTMLElement} startNode Node to start looking at.
                                 */
                                const openGroupWithError = function(startNode) {
                                  const parentGroup = startNode.closest('.field.group:not(.expanded)');
                                  if (!parentGroup || parentGroup === startNode) {
                                    return;
                                  }

                                  const button = parentGroup.querySelector('div[role="button"]');
                                  if (!button) {
                                    return;
                                  }

                                  const evtMouseClick = document.createEvent('MouseEvents');
                                  evtMouseClick.initEvent('click', true, true);
                                  button.dispatchEvent(evtMouseClick);

                                  // Open further up...
                                  openGroupWithError(parentGroup);
                                }

                                /*
                                 * Don't proceed if H5P editor reports errors
                                 * - all error getMessages
                                 * - webm files (in existing content)
                                 */
                                if (
                                  h5peditor.iframeWindow &&
                                  h5peditor.iframeWindow.document
                                ) {

                                  // Retrieve all HTML elements that require input
                                  const requiredNodes = h5peditor.iframeWindow.document.querySelectorAll(
                                    '.h5peditor-label-wrapper > .h5peditor-label.h5peditor-required'
                                  );
                                  const relevantFields = [...requiredNodes]
                                    .map(requiredNode => {
                                      const parent = requiredNode.parentNode;
                                      if (!parent || !parent.nextSibling) {
                                        return null;
                                      }

                                      if (!parent.nextSibling.classList.contains('h5peditor-field-description')) {
                                        return parent.nextSibling;
                                      }

                                      return parent.nextSibling.nextSibling
                                    })
                                    .filter(field => {
                                      if (
                                        !field ||
                                        field.classList.contains('h5p-metadata-button-wrapper') ||
                                        field.tagName === 'OL' ||
                                        field.tagName === 'UL'
                                      ) {
                                        return false;
                                      }

                                      return true;
                                    });

                                  // Custom blocker for empty required images
                                  const emptyImages = relevantFields.filter((field) => {
                                    return (
                                      field.tagName === 'DIV' &&
                                      field.classList.contains('file') &&
                                      field.firstChild &&
                                      field.firstChild.id &&
                                      field.firstChild.id.substr(0, 11) === 'field-image' &&
                                      field.firstChild.classList.contains('add')
                                    );
                                  });
                                  if (emptyImages.length) {

                                    // Bad hack to show error message
                                    for (let i = 0; i < emptyImages.length; i++) {
                                      const errorField = Array.from(emptyImages[i].parentNode.childNodes)
                                        .find(node => node.classList.contains('h5p-errors'));
                                      if (errorField) {
                                        errorField.innerHTML = 'Image cannot be empty.';
                                      }
                                    }

                                    openTabWithError(emptyImages[0]);
                                    openGroupWithError(actualErrorNodes[0]);
                                    emptyImages[0].parentNode.parentNode.scrollIntoView(true);
                                    return event.preventDefault();
                                  }

                                  // This is a bad hack! But we cannot access the allow list or the file name here
                                  const webMNodes = h5peditor.iframeWindow.document.querySelectorAll('.h5p-type[title="video/webm"]');
                                  for (let i = 0; i < webMNodes.length; i++) {
                                    const videoField = webMNodes[i].closest('.field-name-files.video');
                                    if (videoField) {
                                      const errorField = Array.from(videoField.childNodes)
                                        .find(node => node.classList.contains('h5p-errors'));
                                      if (errorField) {
                                        errorField.innerHTML = 'Files in webM format are not allowed.';
                                      }
                                    }
                                  }

                                  const errorNodes = h5peditor.iframeWindow.document.querySelectorAll('.h5p-errors');
                                  if (errorNodes) {
                                    const actualErrorNodes = Array.from(errorNodes)
                                      .filter(node => {
                                        return (
                                          node.innerText !== '' &&
                                          // Bad hack for IV
                                          !node.closest('fieldset.field-name-summary') &&
                                          !node.closest('.field.interactiveVideo')
                                        );
                                      });

                                    if (actualErrorNodes.length !== 0) {
                                      openTabWithError(actualErrorNodes[0]);
                                      openGroupWithError(actualErrorNodes[0]);
                                      actualErrorNodes[0].parentNode.scrollIntoView(true);
                                      return event.preventDefault();
                                    }
                                  }
                                }

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
                                        window.parent.postMessage({contentId: parsedResult.contentId}, "*")
                                        window.location.href = '${props.model.urlGenerator.play()}/' + parsedResult.contentId;
                                    }
                                });

                                return event.preventDefault();
                                // TODO - Calculate & set max score
                                // $maxscore.val(h5peditor.getMaxScore(params.params));
                            }
                        }

                        // Prevent the user from submitting before a content type has been selected.
                        // Otherwise, the user is presented with a 'Malformed request' page.
                        return event.preventDefault();
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
        }}
      />
    </html>
  );
}

export default (model: IEditorModel): string =>
  `${ReactDOMServer.renderToString(<Editor model={model} />)}`;
