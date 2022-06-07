/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/entries/dist.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./src/styles/style.css":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./src/styles/style.css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".h5p-advanced-blanks {\n    font-family: 'Roboto', sans-serif;\n    position: relative;\n}\n\n\n/* Text */\n\n.h5p-advanced-blanks #h5p-cloze-container p,\n.h5p-advanced-blanks #h5p-cloze-container div {\n    line-height: 1.8em;\n    margin: 0 0 1em;\n    text-align: justify;\n}\n\n@media only screen and (min-width: 480px) {\n    .h5p-advanced-blanks #h5p-cloze-container p,\n    .h5p-advanced-blanks #h5p-cloze-container div {\n        text-align: unset;\n    }\n}\n\n\n/* Input */\n\n.h5p-advanced-blanks .h5p-input-wrapper {\n    display: inline-block;\n    position: relative;\n}\n\n.h5p-advanced-blanks .blank .h5p-text-input {\n    font-family: 'Roboto', sans-serif;\n    font-size: 1em;\n    border-radius: 0.25em;\n    border: 1px solid #a0a0a0;\n    padding: 0.1875em 0.5em 0.1875em 0.5em;\n    text-overflow: ellipsis;\n    overflow: hidden;\n}\n\n.h5p-advanced-blanks .blank input.h5p-text-input {\n  max-width: calc(100vw - 64px);\n}\n\n.h5p-advanced-blanks .blank select.h5p-text-input {\n  max-width: calc(100vw - 36px);\n}\n\n/* IE + Chrome specific fixes */\n\n.h5p-text-input::-ms-clear {\n    display: none;\n}\n\n:not(.correct).blank.has-tip button {\n    cursor: pointer;\n}\n\n\n/* Select mode */\n\nselect.h5p-text-input {\n    appearance: button;\n    -moz-appearance: none;\n    -webkit-appearance: button;\n}\n\n\n/* Showing solution input */\n\n.h5p-advanced-blanks .blank.showing-solution .h5p-text-input {\n    border: 1px dashed #9dd8bb;\n    color: #255c41;\n    background: #FFFFFF;\n}\n\n\n/* Focussed input */\n\n.h5p-advanced-blanks .blank .h5p-text-input:focus {\n    outline: none;\n    box-shadow: 0 0 0.5em 0 #7fb8ff;\n    border-color: #7fb8ff;\n}\n\n\n/* Correctly answered input */\n\n.h5p-advanced-blanks .blank.correct .h5p-text-input {\n    background: #9dd8bb;\n    border: 1px solid #9dd8bb;\n    color: #255c41;\n}\n\n.h5p-advanced-blanks .blank.correct .h5p-input-wrapper:after {\n    position: absolute;\n    right: 0.5em;\n    top: 50%;\n    transform: translateY(-50%);\n    text-decoration: none;\n    content: \"\\f00c\";\n    font-family: 'H5PFontAwesome4';\n    color: #255c41;\n}\n\n\n/* Incorrect answers */\n\n.h5p-advanced-blanks .blank.error .h5p-text-input {\n    background-color: #f7d0d0;\n    border: 1px solid #f7d0d0;\n    color: #b71c1c;\n    text-decoration: line-through;\n}\n\n.h5p-advanced-blanks .blank.error .h5p-input-wrapper:after {\n    position: absolute;\n    right: 0.5em;\n    top: 50%;\n    transform: translateY(-50%);\n    font-family: 'H5PFontAwesome4';\n    text-decoration: none;\n    content: \"\\f00d\";\n    color: #b71c1c;\n}\n\n\n/* Spelling errors */\n\n.h5p-advanced-blanks .blank.retry .h5p-text-input {\n    background-color: #ffff99;\n    border: 1px solid #ffff99;\n    color: black;\n}\n\n.h5p-advanced-blanks .blank.retry .h5p-input-wrapper:after {\n    position: absolute;\n    right: 0.5em;\n    top: 50%;\n    transform: translateY(-50%);\n    font-family: 'H5PFontAwesome4';\n    text-decoration: none;\n    content: \"\\f00d\";\n    color: #b71c1c;\n}\n\n\n/* Buttons */\n\n.h5p-advanced-blanks .blank button {\n    padding-left: 5px;\n    padding-right: 5px;\n    border: none;\n    background: none;\n}\n\n\n/* Highlight in spelling mistake marker */\n\n.spelling-mistake .missing-character,\n.spelling-mistake .mistaken-character {\n    color: red;\n    font-weight: bold;\n    -webkit-animation-duration: 500ms;\n            animation-duration: 500ms;\n    -webkit-animation-name: blink-color;\n            animation-name: blink-color;\n    -webkit-animation-iteration-count: 13;\n            animation-iteration-count: 13;\n    -webkit-animation-direction: alternate;\n            animation-direction: alternate;\n}\n\n@-webkit-keyframes blink-color {\n    from {\n        color: initial;\n    }\n    to {\n        color: red;\n    }\n}\n\n@keyframes blink-color {\n    from {\n        color: initial;\n    }\n    to {\n        color: red;\n    }\n}\n\n.spelling-mistake .mistaken-character {\n    text-decoration: line-through;\n}\n\n\n/* Highlights in text */\n\n.h5p-advanced-blanks .highlighted {\n    background-color: rgba(255, 0, 0, 0.2);\n    padding: 0.4em;\n    margin: -0.4em;\n    -webkit-animation-duration: 1000ms;\n            animation-duration: 1000ms;\n    -webkit-animation-name: blink-background-color;\n            animation-name: blink-background-color;\n    -webkit-animation-iteration-count: 3;\n            animation-iteration-count: 3;\n    -webkit-animation-direction: alternate;\n            animation-direction: alternate;\n}\n\n@-webkit-keyframes blink-background-color {\n    from {\n        background-color: initial;\n    }\n    to {\n        background-color: rgba(255, 0, 0, 0.2);\n    }\n}\n\n@keyframes blink-background-color {\n    from {\n        background-color: initial;\n    }\n    to {\n        background-color: rgba(255, 0, 0, 0.2);\n    }\n}\n\n\n/* Others */\n\n.h5p-advanced-blanks .invisible {\n    visibility: collapse;\n}\n\n\n/* Tips */\n\n.h5p-advanced-blanks .h5p-tip-container {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  right: 0.4em;\n  font-size: 1em;\n}\n\n.h5p-advanced-blanks .blank.has-tip:not(.correct):not(.error):not(.retry) .h5p-text-input {\n    padding-right: 2.25em;\n}\n\n.h5p-advanced-blanks .blank.has-tip.correct .h5p-input-wrapper:after,\n.h5p-advanced-blanks .blank.has-tip.error .h5p-input-wrapper:after,\n.h5p-advanced-blanks .blank.has-tip.retry .h5p-input-wrapper:after {\n    right: 2.25em;\n}\n\n.h5p-advanced-blanks .blank.correct.has-tip .h5p-text-input,\n.h5p-advanced-blanks .blank.error.has-tip .h5p-text-input,\n.h5p-advanced-blanks .blank.retry.has-tip .h5p-text-input {\n    padding-right: 3.5em;\n}\n\n/* improves appearance of h5p tip shadows */\n.h5p-advanced-blanks .joubel-icon-tip-normal .h5p-icon-shadow:before {\n  color: black;\n  opacity: 0.13;\n}\n\n/* pending feedback marker */\n\n.h5p-advanced-blanks .h5p-advanced-blanks-select-mode .blank:not(.has-pending-feedback) button.h5p-notification {\n    display: none;\n}\n\n.h5p-advanced-blanks .h5p-advanced-blanks-select-mode .blank.has-pending-feedback button.h5p-notification {\n    font-size: large;\n}\n\n.h5p-advanced-blanks .h5p-advanced-blanks-select-mode .blank.has-pending-feedback button.h5p-notification,\n.h5p-advanced-blanks .h5p-advanced-blanks-type-mode .blank.has-pending-feedback .h5p-input-wrapper:before {\n    font-family: 'H5PFontAwesome4';\n    text-decoration: none;\n    animation: shake 3s cubic-bezier(.36, .07, .19, .97) reverse;\n    -webkit-animation-iteration-count: 2;\n            animation-iteration-count: 2;\n    transform: translate3d(0, 0, 0);\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    perspective: 1000px;\n}\n\n.h5p-advanced-blanks .h5p-advanced-blanks-type-mode .blank.has-pending-feedback .h5p-input-wrapper:before {\n    position: absolute;\n    left: -0.4em;\n    top: -0.7em;\n    content: \"\\f05a\";\n}\n\n.h5p-advanced-blanks .h5p-advanced-blanks-select-mode .blank.error.has-pending-feedback button.h5p-notification,\n.h5p-advanced-blanks .h5p-advanced-blanks-type-mode .blank.error.has-pending-feedback .h5p-input-wrapper:before {\n    color: #b71c1c;\n}\n\n.h5p-advanced-blanks .h5p-advanced-blanks-select-mode .blank.retry.has-pending-feedback button.h5p-notification,\n.h5p-advanced-blanks .h5p-advanced-blanks-type-mode .blank.retry.has-pending-feedback .h5p-input-wrapper:before {\n    color: #ffff00;\n    text-shadow: 0px 0px 0.5em black;\n}\n\n.h5p-advanced-blanks .h5p-advanced-blanks-tmp-field {\n  position: absolute;\n  white-space: nowrap;\n  width: initial;\n}\n\n@-webkit-keyframes shake {\n    2%,\n    20% {\n        transform: translate3d(-0.5px, 0, 0);\n    }\n    4%,\n    17% {\n        transform: translate3d(1px, 0, 0);\n    }\n    6%,\n    10%,\n    15% {\n        transform: translate3d(-2px, 0, 0);\n    }\n    9%,\n    13% {\n        transform: translate3d(2px, 0, 0);\n    }\n}\n\n@keyframes shake {\n    2%,\n    20% {\n        transform: translate3d(-0.5px, 0, 0);\n    }\n    4%,\n    17% {\n        transform: translate3d(1px, 0, 0);\n    }\n    6%,\n    10%,\n    15% {\n        transform: translate3d(-2px, 0, 0);\n    }\n    9%,\n    13% {\n        transform: translate3d(2px, 0, 0);\n    }\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/diff/dist/diff.js":
/*!****************************************!*\
  !*** ./node_modules/diff/dist/diff.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? factory(exports) :
  undefined;
}(this, (function (exports) { 'use strict';

  function Diff() {}
  Diff.prototype = {
    diff: function diff(oldString, newString) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var callback = options.callback;

      if (typeof options === 'function') {
        callback = options;
        options = {};
      }

      this.options = options;
      var self = this;

      function done(value) {
        if (callback) {
          setTimeout(function () {
            callback(undefined, value);
          }, 0);
          return true;
        } else {
          return value;
        }
      } // Allow subclasses to massage the input prior to running


      oldString = this.castInput(oldString);
      newString = this.castInput(newString);
      oldString = this.removeEmpty(this.tokenize(oldString));
      newString = this.removeEmpty(this.tokenize(newString));
      var newLen = newString.length,
          oldLen = oldString.length;
      var editLength = 1;
      var maxEditLength = newLen + oldLen;
      var bestPath = [{
        newPos: -1,
        components: []
      }]; // Seed editLength = 0, i.e. the content starts with the same values

      var oldPos = this.extractCommon(bestPath[0], newString, oldString, 0);

      if (bestPath[0].newPos + 1 >= newLen && oldPos + 1 >= oldLen) {
        // Identity per the equality and tokenizer
        return done([{
          value: this.join(newString),
          count: newString.length
        }]);
      } // Main worker method. checks all permutations of a given edit length for acceptance.


      function execEditLength() {
        for (var diagonalPath = -1 * editLength; diagonalPath <= editLength; diagonalPath += 2) {
          var basePath = void 0;

          var addPath = bestPath[diagonalPath - 1],
              removePath = bestPath[diagonalPath + 1],
              _oldPos = (removePath ? removePath.newPos : 0) - diagonalPath;

          if (addPath) {
            // No one else is going to attempt to use this value, clear it
            bestPath[diagonalPath - 1] = undefined;
          }

          var canAdd = addPath && addPath.newPos + 1 < newLen,
              canRemove = removePath && 0 <= _oldPos && _oldPos < oldLen;

          if (!canAdd && !canRemove) {
            // If this path is a terminal then prune
            bestPath[diagonalPath] = undefined;
            continue;
          } // Select the diagonal that we want to branch from. We select the prior
          // path whose position in the new string is the farthest from the origin
          // and does not pass the bounds of the diff graph


          if (!canAdd || canRemove && addPath.newPos < removePath.newPos) {
            basePath = clonePath(removePath);
            self.pushComponent(basePath.components, undefined, true);
          } else {
            basePath = addPath; // No need to clone, we've pulled it from the list

            basePath.newPos++;
            self.pushComponent(basePath.components, true, undefined);
          }

          _oldPos = self.extractCommon(basePath, newString, oldString, diagonalPath); // If we have hit the end of both strings, then we are done

          if (basePath.newPos + 1 >= newLen && _oldPos + 1 >= oldLen) {
            return done(buildValues(self, basePath.components, newString, oldString, self.useLongestToken));
          } else {
            // Otherwise track this path as a potential candidate and continue.
            bestPath[diagonalPath] = basePath;
          }
        }

        editLength++;
      } // Performs the length of edit iteration. Is a bit fugly as this has to support the
      // sync and async mode which is never fun. Loops over execEditLength until a value
      // is produced.


      if (callback) {
        (function exec() {
          setTimeout(function () {
            // This should not happen, but we want to be safe.

            /* istanbul ignore next */
            if (editLength > maxEditLength) {
              return callback();
            }

            if (!execEditLength()) {
              exec();
            }
          }, 0);
        })();
      } else {
        while (editLength <= maxEditLength) {
          var ret = execEditLength();

          if (ret) {
            return ret;
          }
        }
      }
    },
    pushComponent: function pushComponent(components, added, removed) {
      var last = components[components.length - 1];

      if (last && last.added === added && last.removed === removed) {
        // We need to clone here as the component clone operation is just
        // as shallow array clone
        components[components.length - 1] = {
          count: last.count + 1,
          added: added,
          removed: removed
        };
      } else {
        components.push({
          count: 1,
          added: added,
          removed: removed
        });
      }
    },
    extractCommon: function extractCommon(basePath, newString, oldString, diagonalPath) {
      var newLen = newString.length,
          oldLen = oldString.length,
          newPos = basePath.newPos,
          oldPos = newPos - diagonalPath,
          commonCount = 0;

      while (newPos + 1 < newLen && oldPos + 1 < oldLen && this.equals(newString[newPos + 1], oldString[oldPos + 1])) {
        newPos++;
        oldPos++;
        commonCount++;
      }

      if (commonCount) {
        basePath.components.push({
          count: commonCount
        });
      }

      basePath.newPos = newPos;
      return oldPos;
    },
    equals: function equals(left, right) {
      if (this.options.comparator) {
        return this.options.comparator(left, right);
      } else {
        return left === right || this.options.ignoreCase && left.toLowerCase() === right.toLowerCase();
      }
    },
    removeEmpty: function removeEmpty(array) {
      var ret = [];

      for (var i = 0; i < array.length; i++) {
        if (array[i]) {
          ret.push(array[i]);
        }
      }

      return ret;
    },
    castInput: function castInput(value) {
      return value;
    },
    tokenize: function tokenize(value) {
      return value.split('');
    },
    join: function join(chars) {
      return chars.join('');
    }
  };

  function buildValues(diff, components, newString, oldString, useLongestToken) {
    var componentPos = 0,
        componentLen = components.length,
        newPos = 0,
        oldPos = 0;

    for (; componentPos < componentLen; componentPos++) {
      var component = components[componentPos];

      if (!component.removed) {
        if (!component.added && useLongestToken) {
          var value = newString.slice(newPos, newPos + component.count);
          value = value.map(function (value, i) {
            var oldValue = oldString[oldPos + i];
            return oldValue.length > value.length ? oldValue : value;
          });
          component.value = diff.join(value);
        } else {
          component.value = diff.join(newString.slice(newPos, newPos + component.count));
        }

        newPos += component.count; // Common case

        if (!component.added) {
          oldPos += component.count;
        }
      } else {
        component.value = diff.join(oldString.slice(oldPos, oldPos + component.count));
        oldPos += component.count; // Reverse add and remove so removes are output first to match common convention
        // The diffing algorithm is tied to add then remove output and this is the simplest
        // route to get the desired output with minimal overhead.

        if (componentPos && components[componentPos - 1].added) {
          var tmp = components[componentPos - 1];
          components[componentPos - 1] = components[componentPos];
          components[componentPos] = tmp;
        }
      }
    } // Special case handle for when one terminal is ignored (i.e. whitespace).
    // For this case we merge the terminal into the prior string and drop the change.
    // This is only available for string mode.


    var lastComponent = components[componentLen - 1];

    if (componentLen > 1 && typeof lastComponent.value === 'string' && (lastComponent.added || lastComponent.removed) && diff.equals('', lastComponent.value)) {
      components[componentLen - 2].value += lastComponent.value;
      components.pop();
    }

    return components;
  }

  function clonePath(path) {
    return {
      newPos: path.newPos,
      components: path.components.slice(0)
    };
  }

  var characterDiff = new Diff();
  function diffChars(oldStr, newStr, options) {
    return characterDiff.diff(oldStr, newStr, options);
  }

  function generateOptions(options, defaults) {
    if (typeof options === 'function') {
      defaults.callback = options;
    } else if (options) {
      for (var name in options) {
        /* istanbul ignore else */
        if (options.hasOwnProperty(name)) {
          defaults[name] = options[name];
        }
      }
    }

    return defaults;
  }

  //
  // Ranges and exceptions:
  // Latin-1 Supplement, 0080–00FF
  //  - U+00D7  × Multiplication sign
  //  - U+00F7  ÷ Division sign
  // Latin Extended-A, 0100–017F
  // Latin Extended-B, 0180–024F
  // IPA Extensions, 0250–02AF
  // Spacing Modifier Letters, 02B0–02FF
  //  - U+02C7  ˇ &#711;  Caron
  //  - U+02D8  ˘ &#728;  Breve
  //  - U+02D9  ˙ &#729;  Dot Above
  //  - U+02DA  ˚ &#730;  Ring Above
  //  - U+02DB  ˛ &#731;  Ogonek
  //  - U+02DC  ˜ &#732;  Small Tilde
  //  - U+02DD  ˝ &#733;  Double Acute Accent
  // Latin Extended Additional, 1E00–1EFF

  var extendedWordChars = /^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/;
  var reWhitespace = /\S/;
  var wordDiff = new Diff();

  wordDiff.equals = function (left, right) {
    if (this.options.ignoreCase) {
      left = left.toLowerCase();
      right = right.toLowerCase();
    }

    return left === right || this.options.ignoreWhitespace && !reWhitespace.test(left) && !reWhitespace.test(right);
  };

  wordDiff.tokenize = function (value) {
    // All whitespace symbols except newline group into one token, each newline - in separate token
    var tokens = value.split(/([^\S\r\n]+|[()[\]{}'"\r\n]|\b)/); // Join the boundary splits that we do not consider to be boundaries. This is primarily the extended Latin character set.

    for (var i = 0; i < tokens.length - 1; i++) {
      // If we have an empty string in the next field and we have only word chars before and after, merge
      if (!tokens[i + 1] && tokens[i + 2] && extendedWordChars.test(tokens[i]) && extendedWordChars.test(tokens[i + 2])) {
        tokens[i] += tokens[i + 2];
        tokens.splice(i + 1, 2);
        i--;
      }
    }

    return tokens;
  };

  function diffWords(oldStr, newStr, options) {
    options = generateOptions(options, {
      ignoreWhitespace: true
    });
    return wordDiff.diff(oldStr, newStr, options);
  }
  function diffWordsWithSpace(oldStr, newStr, options) {
    return wordDiff.diff(oldStr, newStr, options);
  }

  var lineDiff = new Diff();

  lineDiff.tokenize = function (value) {
    var retLines = [],
        linesAndNewlines = value.split(/(\n|\r\n)/); // Ignore the final empty token that occurs if the string ends with a new line

    if (!linesAndNewlines[linesAndNewlines.length - 1]) {
      linesAndNewlines.pop();
    } // Merge the content and line separators into single tokens


    for (var i = 0; i < linesAndNewlines.length; i++) {
      var line = linesAndNewlines[i];

      if (i % 2 && !this.options.newlineIsToken) {
        retLines[retLines.length - 1] += line;
      } else {
        if (this.options.ignoreWhitespace) {
          line = line.trim();
        }

        retLines.push(line);
      }
    }

    return retLines;
  };

  function diffLines(oldStr, newStr, callback) {
    return lineDiff.diff(oldStr, newStr, callback);
  }
  function diffTrimmedLines(oldStr, newStr, callback) {
    var options = generateOptions(callback, {
      ignoreWhitespace: true
    });
    return lineDiff.diff(oldStr, newStr, options);
  }

  var sentenceDiff = new Diff();

  sentenceDiff.tokenize = function (value) {
    return value.split(/(\S.+?[.!?])(?=\s+|$)/);
  };

  function diffSentences(oldStr, newStr, callback) {
    return sentenceDiff.diff(oldStr, newStr, callback);
  }

  var cssDiff = new Diff();

  cssDiff.tokenize = function (value) {
    return value.split(/([{}:;,]|\s+)/);
  };

  function diffCss(oldStr, newStr, callback) {
    return cssDiff.diff(oldStr, newStr, callback);
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var objectPrototypeToString = Object.prototype.toString;
  var jsonDiff = new Diff(); // Discriminate between two lines of pretty-printed, serialized JSON where one of them has a
  // dangling comma and the other doesn't. Turns out including the dangling comma yields the nicest output:

  jsonDiff.useLongestToken = true;
  jsonDiff.tokenize = lineDiff.tokenize;

  jsonDiff.castInput = function (value) {
    var _this$options = this.options,
        undefinedReplacement = _this$options.undefinedReplacement,
        _this$options$stringi = _this$options.stringifyReplacer,
        stringifyReplacer = _this$options$stringi === void 0 ? function (k, v) {
      return typeof v === 'undefined' ? undefinedReplacement : v;
    } : _this$options$stringi;
    return typeof value === 'string' ? value : JSON.stringify(canonicalize(value, null, null, stringifyReplacer), stringifyReplacer, '  ');
  };

  jsonDiff.equals = function (left, right) {
    return Diff.prototype.equals.call(jsonDiff, left.replace(/,([\r\n])/g, '$1'), right.replace(/,([\r\n])/g, '$1'));
  };

  function diffJson(oldObj, newObj, options) {
    return jsonDiff.diff(oldObj, newObj, options);
  } // This function handles the presence of circular references by bailing out when encountering an
  // object that is already on the "stack" of items being processed. Accepts an optional replacer

  function canonicalize(obj, stack, replacementStack, replacer, key) {
    stack = stack || [];
    replacementStack = replacementStack || [];

    if (replacer) {
      obj = replacer(key, obj);
    }

    var i;

    for (i = 0; i < stack.length; i += 1) {
      if (stack[i] === obj) {
        return replacementStack[i];
      }
    }

    var canonicalizedObj;

    if ('[object Array]' === objectPrototypeToString.call(obj)) {
      stack.push(obj);
      canonicalizedObj = new Array(obj.length);
      replacementStack.push(canonicalizedObj);

      for (i = 0; i < obj.length; i += 1) {
        canonicalizedObj[i] = canonicalize(obj[i], stack, replacementStack, replacer, key);
      }

      stack.pop();
      replacementStack.pop();
      return canonicalizedObj;
    }

    if (obj && obj.toJSON) {
      obj = obj.toJSON();
    }

    if (_typeof(obj) === 'object' && obj !== null) {
      stack.push(obj);
      canonicalizedObj = {};
      replacementStack.push(canonicalizedObj);

      var sortedKeys = [],
          _key;

      for (_key in obj) {
        /* istanbul ignore else */
        if (obj.hasOwnProperty(_key)) {
          sortedKeys.push(_key);
        }
      }

      sortedKeys.sort();

      for (i = 0; i < sortedKeys.length; i += 1) {
        _key = sortedKeys[i];
        canonicalizedObj[_key] = canonicalize(obj[_key], stack, replacementStack, replacer, _key);
      }

      stack.pop();
      replacementStack.pop();
    } else {
      canonicalizedObj = obj;
    }

    return canonicalizedObj;
  }

  var arrayDiff = new Diff();

  arrayDiff.tokenize = function (value) {
    return value.slice();
  };

  arrayDiff.join = arrayDiff.removeEmpty = function (value) {
    return value;
  };

  function diffArrays(oldArr, newArr, callback) {
    return arrayDiff.diff(oldArr, newArr, callback);
  }

  function parsePatch(uniDiff) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var diffstr = uniDiff.split(/\r\n|[\n\v\f\r\x85]/),
        delimiters = uniDiff.match(/\r\n|[\n\v\f\r\x85]/g) || [],
        list = [],
        i = 0;

    function parseIndex() {
      var index = {};
      list.push(index); // Parse diff metadata

      while (i < diffstr.length) {
        var line = diffstr[i]; // File header found, end parsing diff metadata

        if (/^(\-\-\-|\+\+\+|@@)\s/.test(line)) {
          break;
        } // Diff index


        var header = /^(?:Index:|diff(?: -r \w+)+)\s+(.+?)\s*$/.exec(line);

        if (header) {
          index.index = header[1];
        }

        i++;
      } // Parse file headers if they are defined. Unified diff requires them, but
      // there's no technical issues to have an isolated hunk without file header


      parseFileHeader(index);
      parseFileHeader(index); // Parse hunks

      index.hunks = [];

      while (i < diffstr.length) {
        var _line = diffstr[i];

        if (/^(Index:|diff|\-\-\-|\+\+\+)\s/.test(_line)) {
          break;
        } else if (/^@@/.test(_line)) {
          index.hunks.push(parseHunk());
        } else if (_line && options.strict) {
          // Ignore unexpected content unless in strict mode
          throw new Error('Unknown line ' + (i + 1) + ' ' + JSON.stringify(_line));
        } else {
          i++;
        }
      }
    } // Parses the --- and +++ headers, if none are found, no lines
    // are consumed.


    function parseFileHeader(index) {
      var fileHeader = /^(---|\+\+\+)\s+(.*)$/.exec(diffstr[i]);

      if (fileHeader) {
        var keyPrefix = fileHeader[1] === '---' ? 'old' : 'new';
        var data = fileHeader[2].split('\t', 2);
        var fileName = data[0].replace(/\\\\/g, '\\');

        if (/^".*"$/.test(fileName)) {
          fileName = fileName.substr(1, fileName.length - 2);
        }

        index[keyPrefix + 'FileName'] = fileName;
        index[keyPrefix + 'Header'] = (data[1] || '').trim();
        i++;
      }
    } // Parses a hunk
    // This assumes that we are at the start of a hunk.


    function parseHunk() {
      var chunkHeaderIndex = i,
          chunkHeaderLine = diffstr[i++],
          chunkHeader = chunkHeaderLine.split(/@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/);
      var hunk = {
        oldStart: +chunkHeader[1],
        oldLines: typeof chunkHeader[2] === 'undefined' ? 1 : +chunkHeader[2],
        newStart: +chunkHeader[3],
        newLines: typeof chunkHeader[4] === 'undefined' ? 1 : +chunkHeader[4],
        lines: [],
        linedelimiters: []
      }; // Unified Diff Format quirk: If the chunk size is 0,
      // the first number is one lower than one would expect.
      // https://www.artima.com/weblogs/viewpost.jsp?thread=164293

      if (hunk.oldLines === 0) {
        hunk.oldStart += 1;
      }

      if (hunk.newLines === 0) {
        hunk.newStart += 1;
      }

      var addCount = 0,
          removeCount = 0;

      for (; i < diffstr.length; i++) {
        // Lines starting with '---' could be mistaken for the "remove line" operation
        // But they could be the header for the next file. Therefore prune such cases out.
        if (diffstr[i].indexOf('--- ') === 0 && i + 2 < diffstr.length && diffstr[i + 1].indexOf('+++ ') === 0 && diffstr[i + 2].indexOf('@@') === 0) {
          break;
        }

        var operation = diffstr[i].length == 0 && i != diffstr.length - 1 ? ' ' : diffstr[i][0];

        if (operation === '+' || operation === '-' || operation === ' ' || operation === '\\') {
          hunk.lines.push(diffstr[i]);
          hunk.linedelimiters.push(delimiters[i] || '\n');

          if (operation === '+') {
            addCount++;
          } else if (operation === '-') {
            removeCount++;
          } else if (operation === ' ') {
            addCount++;
            removeCount++;
          }
        } else {
          break;
        }
      } // Handle the empty block count case


      if (!addCount && hunk.newLines === 1) {
        hunk.newLines = 0;
      }

      if (!removeCount && hunk.oldLines === 1) {
        hunk.oldLines = 0;
      } // Perform optional sanity checking


      if (options.strict) {
        if (addCount !== hunk.newLines) {
          throw new Error('Added line count did not match for hunk at line ' + (chunkHeaderIndex + 1));
        }

        if (removeCount !== hunk.oldLines) {
          throw new Error('Removed line count did not match for hunk at line ' + (chunkHeaderIndex + 1));
        }
      }

      return hunk;
    }

    while (i < diffstr.length) {
      parseIndex();
    }

    return list;
  }

  // Iterator that traverses in the range of [min, max], stepping
  // by distance from a given start position. I.e. for [0, 4], with
  // start of 2, this will iterate 2, 3, 1, 4, 0.
  function distanceIterator (start, minLine, maxLine) {
    var wantForward = true,
        backwardExhausted = false,
        forwardExhausted = false,
        localOffset = 1;
    return function iterator() {
      if (wantForward && !forwardExhausted) {
        if (backwardExhausted) {
          localOffset++;
        } else {
          wantForward = false;
        } // Check if trying to fit beyond text length, and if not, check it fits
        // after offset location (or desired location on first iteration)


        if (start + localOffset <= maxLine) {
          return localOffset;
        }

        forwardExhausted = true;
      }

      if (!backwardExhausted) {
        if (!forwardExhausted) {
          wantForward = true;
        } // Check if trying to fit before text beginning, and if not, check it fits
        // before offset location


        if (minLine <= start - localOffset) {
          return -localOffset++;
        }

        backwardExhausted = true;
        return iterator();
      } // We tried to fit hunk before text beginning and beyond text length, then
      // hunk can't fit on the text. Return undefined

    };
  }

  function applyPatch(source, uniDiff) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    if (typeof uniDiff === 'string') {
      uniDiff = parsePatch(uniDiff);
    }

    if (Array.isArray(uniDiff)) {
      if (uniDiff.length > 1) {
        throw new Error('applyPatch only works with a single input.');
      }

      uniDiff = uniDiff[0];
    } // Apply the diff to the input


    var lines = source.split(/\r\n|[\n\v\f\r\x85]/),
        delimiters = source.match(/\r\n|[\n\v\f\r\x85]/g) || [],
        hunks = uniDiff.hunks,
        compareLine = options.compareLine || function (lineNumber, line, operation, patchContent) {
      return line === patchContent;
    },
        errorCount = 0,
        fuzzFactor = options.fuzzFactor || 0,
        minLine = 0,
        offset = 0,
        removeEOFNL,
        addEOFNL;
    /**
     * Checks if the hunk exactly fits on the provided location
     */


    function hunkFits(hunk, toPos) {
      for (var j = 0; j < hunk.lines.length; j++) {
        var line = hunk.lines[j],
            operation = line.length > 0 ? line[0] : ' ',
            content = line.length > 0 ? line.substr(1) : line;

        if (operation === ' ' || operation === '-') {
          // Context sanity check
          if (!compareLine(toPos + 1, lines[toPos], operation, content)) {
            errorCount++;

            if (errorCount > fuzzFactor) {
              return false;
            }
          }

          toPos++;
        }
      }

      return true;
    } // Search best fit offsets for each hunk based on the previous ones


    for (var i = 0; i < hunks.length; i++) {
      var hunk = hunks[i],
          maxLine = lines.length - hunk.oldLines,
          localOffset = 0,
          toPos = offset + hunk.oldStart - 1;
      var iterator = distanceIterator(toPos, minLine, maxLine);

      for (; localOffset !== undefined; localOffset = iterator()) {
        if (hunkFits(hunk, toPos + localOffset)) {
          hunk.offset = offset += localOffset;
          break;
        }
      }

      if (localOffset === undefined) {
        return false;
      } // Set lower text limit to end of the current hunk, so next ones don't try
      // to fit over already patched text


      minLine = hunk.offset + hunk.oldStart + hunk.oldLines;
    } // Apply patch hunks


    var diffOffset = 0;

    for (var _i = 0; _i < hunks.length; _i++) {
      var _hunk = hunks[_i],
          _toPos = _hunk.oldStart + _hunk.offset + diffOffset - 1;

      diffOffset += _hunk.newLines - _hunk.oldLines;

      for (var j = 0; j < _hunk.lines.length; j++) {
        var line = _hunk.lines[j],
            operation = line.length > 0 ? line[0] : ' ',
            content = line.length > 0 ? line.substr(1) : line,
            delimiter = _hunk.linedelimiters[j];

        if (operation === ' ') {
          _toPos++;
        } else if (operation === '-') {
          lines.splice(_toPos, 1);
          delimiters.splice(_toPos, 1);
          /* istanbul ignore else */
        } else if (operation === '+') {
          lines.splice(_toPos, 0, content);
          delimiters.splice(_toPos, 0, delimiter);
          _toPos++;
        } else if (operation === '\\') {
          var previousOperation = _hunk.lines[j - 1] ? _hunk.lines[j - 1][0] : null;

          if (previousOperation === '+') {
            removeEOFNL = true;
          } else if (previousOperation === '-') {
            addEOFNL = true;
          }
        }
      }
    } // Handle EOFNL insertion/removal


    if (removeEOFNL) {
      while (!lines[lines.length - 1]) {
        lines.pop();
        delimiters.pop();
      }
    } else if (addEOFNL) {
      lines.push('');
      delimiters.push('\n');
    }

    for (var _k = 0; _k < lines.length - 1; _k++) {
      lines[_k] = lines[_k] + delimiters[_k];
    }

    return lines.join('');
  } // Wrapper that supports multiple file patches via callbacks.

  function applyPatches(uniDiff, options) {
    if (typeof uniDiff === 'string') {
      uniDiff = parsePatch(uniDiff);
    }

    var currentIndex = 0;

    function processIndex() {
      var index = uniDiff[currentIndex++];

      if (!index) {
        return options.complete();
      }

      options.loadFile(index, function (err, data) {
        if (err) {
          return options.complete(err);
        }

        var updatedContent = applyPatch(data, index, options);
        options.patched(index, updatedContent, function (err) {
          if (err) {
            return options.complete(err);
          }

          processIndex();
        });
      });
    }

    processIndex();
  }

  function structuredPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, options) {
    if (!options) {
      options = {};
    }

    if (typeof options.context === 'undefined') {
      options.context = 4;
    }

    var diff = diffLines(oldStr, newStr, options);
    diff.push({
      value: '',
      lines: []
    }); // Append an empty value to make cleanup easier

    function contextLines(lines) {
      return lines.map(function (entry) {
        return ' ' + entry;
      });
    }

    var hunks = [];
    var oldRangeStart = 0,
        newRangeStart = 0,
        curRange = [],
        oldLine = 1,
        newLine = 1;

    var _loop = function _loop(i) {
      var current = diff[i],
          lines = current.lines || current.value.replace(/\n$/, '').split('\n');
      current.lines = lines;

      if (current.added || current.removed) {
        var _curRange;

        // If we have previous context, start with that
        if (!oldRangeStart) {
          var prev = diff[i - 1];
          oldRangeStart = oldLine;
          newRangeStart = newLine;

          if (prev) {
            curRange = options.context > 0 ? contextLines(prev.lines.slice(-options.context)) : [];
            oldRangeStart -= curRange.length;
            newRangeStart -= curRange.length;
          }
        } // Output our changes


        (_curRange = curRange).push.apply(_curRange, _toConsumableArray(lines.map(function (entry) {
          return (current.added ? '+' : '-') + entry;
        }))); // Track the updated file position


        if (current.added) {
          newLine += lines.length;
        } else {
          oldLine += lines.length;
        }
      } else {
        // Identical context lines. Track line changes
        if (oldRangeStart) {
          // Close out any changes that have been output (or join overlapping)
          if (lines.length <= options.context * 2 && i < diff.length - 2) {
            var _curRange2;

            // Overlapping
            (_curRange2 = curRange).push.apply(_curRange2, _toConsumableArray(contextLines(lines)));
          } else {
            var _curRange3;

            // end the range and output
            var contextSize = Math.min(lines.length, options.context);

            (_curRange3 = curRange).push.apply(_curRange3, _toConsumableArray(contextLines(lines.slice(0, contextSize))));

            var hunk = {
              oldStart: oldRangeStart,
              oldLines: oldLine - oldRangeStart + contextSize,
              newStart: newRangeStart,
              newLines: newLine - newRangeStart + contextSize,
              lines: curRange
            };

            if (i >= diff.length - 2 && lines.length <= options.context) {
              // EOF is inside this hunk
              var oldEOFNewline = /\n$/.test(oldStr);
              var newEOFNewline = /\n$/.test(newStr);
              var noNlBeforeAdds = lines.length == 0 && curRange.length > hunk.oldLines;

              if (!oldEOFNewline && noNlBeforeAdds && oldStr.length > 0) {
                // special case: old has no eol and no trailing context; no-nl can end up before adds
                // however, if the old file is empty, do not output the no-nl line
                curRange.splice(hunk.oldLines, 0, '\\ No newline at end of file');
              }

              if (!oldEOFNewline && !noNlBeforeAdds || !newEOFNewline) {
                curRange.push('\\ No newline at end of file');
              }
            }

            hunks.push(hunk);
            oldRangeStart = 0;
            newRangeStart = 0;
            curRange = [];
          }
        }

        oldLine += lines.length;
        newLine += lines.length;
      }
    };

    for (var i = 0; i < diff.length; i++) {
      _loop(i);
    }

    return {
      oldFileName: oldFileName,
      newFileName: newFileName,
      oldHeader: oldHeader,
      newHeader: newHeader,
      hunks: hunks
    };
  }
  function formatPatch(diff) {
    var ret = [];

    if (diff.oldFileName == diff.newFileName) {
      ret.push('Index: ' + diff.oldFileName);
    }

    ret.push('===================================================================');
    ret.push('--- ' + diff.oldFileName + (typeof diff.oldHeader === 'undefined' ? '' : '\t' + diff.oldHeader));
    ret.push('+++ ' + diff.newFileName + (typeof diff.newHeader === 'undefined' ? '' : '\t' + diff.newHeader));

    for (var i = 0; i < diff.hunks.length; i++) {
      var hunk = diff.hunks[i]; // Unified Diff Format quirk: If the chunk size is 0,
      // the first number is one lower than one would expect.
      // https://www.artima.com/weblogs/viewpost.jsp?thread=164293

      if (hunk.oldLines === 0) {
        hunk.oldStart -= 1;
      }

      if (hunk.newLines === 0) {
        hunk.newStart -= 1;
      }

      ret.push('@@ -' + hunk.oldStart + ',' + hunk.oldLines + ' +' + hunk.newStart + ',' + hunk.newLines + ' @@');
      ret.push.apply(ret, hunk.lines);
    }

    return ret.join('\n') + '\n';
  }
  function createTwoFilesPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, options) {
    return formatPatch(structuredPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, options));
  }
  function createPatch(fileName, oldStr, newStr, oldHeader, newHeader, options) {
    return createTwoFilesPatch(fileName, fileName, oldStr, newStr, oldHeader, newHeader, options);
  }

  function arrayEqual(a, b) {
    if (a.length !== b.length) {
      return false;
    }

    return arrayStartsWith(a, b);
  }
  function arrayStartsWith(array, start) {
    if (start.length > array.length) {
      return false;
    }

    for (var i = 0; i < start.length; i++) {
      if (start[i] !== array[i]) {
        return false;
      }
    }

    return true;
  }

  function calcLineCount(hunk) {
    var _calcOldNewLineCount = calcOldNewLineCount(hunk.lines),
        oldLines = _calcOldNewLineCount.oldLines,
        newLines = _calcOldNewLineCount.newLines;

    if (oldLines !== undefined) {
      hunk.oldLines = oldLines;
    } else {
      delete hunk.oldLines;
    }

    if (newLines !== undefined) {
      hunk.newLines = newLines;
    } else {
      delete hunk.newLines;
    }
  }
  function merge(mine, theirs, base) {
    mine = loadPatch(mine, base);
    theirs = loadPatch(theirs, base);
    var ret = {}; // For index we just let it pass through as it doesn't have any necessary meaning.
    // Leaving sanity checks on this to the API consumer that may know more about the
    // meaning in their own context.

    if (mine.index || theirs.index) {
      ret.index = mine.index || theirs.index;
    }

    if (mine.newFileName || theirs.newFileName) {
      if (!fileNameChanged(mine)) {
        // No header or no change in ours, use theirs (and ours if theirs does not exist)
        ret.oldFileName = theirs.oldFileName || mine.oldFileName;
        ret.newFileName = theirs.newFileName || mine.newFileName;
        ret.oldHeader = theirs.oldHeader || mine.oldHeader;
        ret.newHeader = theirs.newHeader || mine.newHeader;
      } else if (!fileNameChanged(theirs)) {
        // No header or no change in theirs, use ours
        ret.oldFileName = mine.oldFileName;
        ret.newFileName = mine.newFileName;
        ret.oldHeader = mine.oldHeader;
        ret.newHeader = mine.newHeader;
      } else {
        // Both changed... figure it out
        ret.oldFileName = selectField(ret, mine.oldFileName, theirs.oldFileName);
        ret.newFileName = selectField(ret, mine.newFileName, theirs.newFileName);
        ret.oldHeader = selectField(ret, mine.oldHeader, theirs.oldHeader);
        ret.newHeader = selectField(ret, mine.newHeader, theirs.newHeader);
      }
    }

    ret.hunks = [];
    var mineIndex = 0,
        theirsIndex = 0,
        mineOffset = 0,
        theirsOffset = 0;

    while (mineIndex < mine.hunks.length || theirsIndex < theirs.hunks.length) {
      var mineCurrent = mine.hunks[mineIndex] || {
        oldStart: Infinity
      },
          theirsCurrent = theirs.hunks[theirsIndex] || {
        oldStart: Infinity
      };

      if (hunkBefore(mineCurrent, theirsCurrent)) {
        // This patch does not overlap with any of the others, yay.
        ret.hunks.push(cloneHunk(mineCurrent, mineOffset));
        mineIndex++;
        theirsOffset += mineCurrent.newLines - mineCurrent.oldLines;
      } else if (hunkBefore(theirsCurrent, mineCurrent)) {
        // This patch does not overlap with any of the others, yay.
        ret.hunks.push(cloneHunk(theirsCurrent, theirsOffset));
        theirsIndex++;
        mineOffset += theirsCurrent.newLines - theirsCurrent.oldLines;
      } else {
        // Overlap, merge as best we can
        var mergedHunk = {
          oldStart: Math.min(mineCurrent.oldStart, theirsCurrent.oldStart),
          oldLines: 0,
          newStart: Math.min(mineCurrent.newStart + mineOffset, theirsCurrent.oldStart + theirsOffset),
          newLines: 0,
          lines: []
        };
        mergeLines(mergedHunk, mineCurrent.oldStart, mineCurrent.lines, theirsCurrent.oldStart, theirsCurrent.lines);
        theirsIndex++;
        mineIndex++;
        ret.hunks.push(mergedHunk);
      }
    }

    return ret;
  }

  function loadPatch(param, base) {
    if (typeof param === 'string') {
      if (/^@@/m.test(param) || /^Index:/m.test(param)) {
        return parsePatch(param)[0];
      }

      if (!base) {
        throw new Error('Must provide a base reference or pass in a patch');
      }

      return structuredPatch(undefined, undefined, base, param);
    }

    return param;
  }

  function fileNameChanged(patch) {
    return patch.newFileName && patch.newFileName !== patch.oldFileName;
  }

  function selectField(index, mine, theirs) {
    if (mine === theirs) {
      return mine;
    } else {
      index.conflict = true;
      return {
        mine: mine,
        theirs: theirs
      };
    }
  }

  function hunkBefore(test, check) {
    return test.oldStart < check.oldStart && test.oldStart + test.oldLines < check.oldStart;
  }

  function cloneHunk(hunk, offset) {
    return {
      oldStart: hunk.oldStart,
      oldLines: hunk.oldLines,
      newStart: hunk.newStart + offset,
      newLines: hunk.newLines,
      lines: hunk.lines
    };
  }

  function mergeLines(hunk, mineOffset, mineLines, theirOffset, theirLines) {
    // This will generally result in a conflicted hunk, but there are cases where the context
    // is the only overlap where we can successfully merge the content here.
    var mine = {
      offset: mineOffset,
      lines: mineLines,
      index: 0
    },
        their = {
      offset: theirOffset,
      lines: theirLines,
      index: 0
    }; // Handle any leading content

    insertLeading(hunk, mine, their);
    insertLeading(hunk, their, mine); // Now in the overlap content. Scan through and select the best changes from each.

    while (mine.index < mine.lines.length && their.index < their.lines.length) {
      var mineCurrent = mine.lines[mine.index],
          theirCurrent = their.lines[their.index];

      if ((mineCurrent[0] === '-' || mineCurrent[0] === '+') && (theirCurrent[0] === '-' || theirCurrent[0] === '+')) {
        // Both modified ...
        mutualChange(hunk, mine, their);
      } else if (mineCurrent[0] === '+' && theirCurrent[0] === ' ') {
        var _hunk$lines;

        // Mine inserted
        (_hunk$lines = hunk.lines).push.apply(_hunk$lines, _toConsumableArray(collectChange(mine)));
      } else if (theirCurrent[0] === '+' && mineCurrent[0] === ' ') {
        var _hunk$lines2;

        // Theirs inserted
        (_hunk$lines2 = hunk.lines).push.apply(_hunk$lines2, _toConsumableArray(collectChange(their)));
      } else if (mineCurrent[0] === '-' && theirCurrent[0] === ' ') {
        // Mine removed or edited
        removal(hunk, mine, their);
      } else if (theirCurrent[0] === '-' && mineCurrent[0] === ' ') {
        // Their removed or edited
        removal(hunk, their, mine, true);
      } else if (mineCurrent === theirCurrent) {
        // Context identity
        hunk.lines.push(mineCurrent);
        mine.index++;
        their.index++;
      } else {
        // Context mismatch
        conflict(hunk, collectChange(mine), collectChange(their));
      }
    } // Now push anything that may be remaining


    insertTrailing(hunk, mine);
    insertTrailing(hunk, their);
    calcLineCount(hunk);
  }

  function mutualChange(hunk, mine, their) {
    var myChanges = collectChange(mine),
        theirChanges = collectChange(their);

    if (allRemoves(myChanges) && allRemoves(theirChanges)) {
      // Special case for remove changes that are supersets of one another
      if (arrayStartsWith(myChanges, theirChanges) && skipRemoveSuperset(their, myChanges, myChanges.length - theirChanges.length)) {
        var _hunk$lines3;

        (_hunk$lines3 = hunk.lines).push.apply(_hunk$lines3, _toConsumableArray(myChanges));

        return;
      } else if (arrayStartsWith(theirChanges, myChanges) && skipRemoveSuperset(mine, theirChanges, theirChanges.length - myChanges.length)) {
        var _hunk$lines4;

        (_hunk$lines4 = hunk.lines).push.apply(_hunk$lines4, _toConsumableArray(theirChanges));

        return;
      }
    } else if (arrayEqual(myChanges, theirChanges)) {
      var _hunk$lines5;

      (_hunk$lines5 = hunk.lines).push.apply(_hunk$lines5, _toConsumableArray(myChanges));

      return;
    }

    conflict(hunk, myChanges, theirChanges);
  }

  function removal(hunk, mine, their, swap) {
    var myChanges = collectChange(mine),
        theirChanges = collectContext(their, myChanges);

    if (theirChanges.merged) {
      var _hunk$lines6;

      (_hunk$lines6 = hunk.lines).push.apply(_hunk$lines6, _toConsumableArray(theirChanges.merged));
    } else {
      conflict(hunk, swap ? theirChanges : myChanges, swap ? myChanges : theirChanges);
    }
  }

  function conflict(hunk, mine, their) {
    hunk.conflict = true;
    hunk.lines.push({
      conflict: true,
      mine: mine,
      theirs: their
    });
  }

  function insertLeading(hunk, insert, their) {
    while (insert.offset < their.offset && insert.index < insert.lines.length) {
      var line = insert.lines[insert.index++];
      hunk.lines.push(line);
      insert.offset++;
    }
  }

  function insertTrailing(hunk, insert) {
    while (insert.index < insert.lines.length) {
      var line = insert.lines[insert.index++];
      hunk.lines.push(line);
    }
  }

  function collectChange(state) {
    var ret = [],
        operation = state.lines[state.index][0];

    while (state.index < state.lines.length) {
      var line = state.lines[state.index]; // Group additions that are immediately after subtractions and treat them as one "atomic" modify change.

      if (operation === '-' && line[0] === '+') {
        operation = '+';
      }

      if (operation === line[0]) {
        ret.push(line);
        state.index++;
      } else {
        break;
      }
    }

    return ret;
  }

  function collectContext(state, matchChanges) {
    var changes = [],
        merged = [],
        matchIndex = 0,
        contextChanges = false,
        conflicted = false;

    while (matchIndex < matchChanges.length && state.index < state.lines.length) {
      var change = state.lines[state.index],
          match = matchChanges[matchIndex]; // Once we've hit our add, then we are done

      if (match[0] === '+') {
        break;
      }

      contextChanges = contextChanges || change[0] !== ' ';
      merged.push(match);
      matchIndex++; // Consume any additions in the other block as a conflict to attempt
      // to pull in the remaining context after this

      if (change[0] === '+') {
        conflicted = true;

        while (change[0] === '+') {
          changes.push(change);
          change = state.lines[++state.index];
        }
      }

      if (match.substr(1) === change.substr(1)) {
        changes.push(change);
        state.index++;
      } else {
        conflicted = true;
      }
    }

    if ((matchChanges[matchIndex] || '')[0] === '+' && contextChanges) {
      conflicted = true;
    }

    if (conflicted) {
      return changes;
    }

    while (matchIndex < matchChanges.length) {
      merged.push(matchChanges[matchIndex++]);
    }

    return {
      merged: merged,
      changes: changes
    };
  }

  function allRemoves(changes) {
    return changes.reduce(function (prev, change) {
      return prev && change[0] === '-';
    }, true);
  }

  function skipRemoveSuperset(state, removeChanges, delta) {
    for (var i = 0; i < delta; i++) {
      var changeContent = removeChanges[removeChanges.length - delta + i].substr(1);

      if (state.lines[state.index + i] !== ' ' + changeContent) {
        return false;
      }
    }

    state.index += delta;
    return true;
  }

  function calcOldNewLineCount(lines) {
    var oldLines = 0;
    var newLines = 0;
    lines.forEach(function (line) {
      if (typeof line !== 'string') {
        var myCount = calcOldNewLineCount(line.mine);
        var theirCount = calcOldNewLineCount(line.theirs);

        if (oldLines !== undefined) {
          if (myCount.oldLines === theirCount.oldLines) {
            oldLines += myCount.oldLines;
          } else {
            oldLines = undefined;
          }
        }

        if (newLines !== undefined) {
          if (myCount.newLines === theirCount.newLines) {
            newLines += myCount.newLines;
          } else {
            newLines = undefined;
          }
        }
      } else {
        if (newLines !== undefined && (line[0] === '+' || line[0] === ' ')) {
          newLines++;
        }

        if (oldLines !== undefined && (line[0] === '-' || line[0] === ' ')) {
          oldLines++;
        }
      }
    });
    return {
      oldLines: oldLines,
      newLines: newLines
    };
  }

  // See: http://code.google.com/p/google-diff-match-patch/wiki/API
  function convertChangesToDMP(changes) {
    var ret = [],
        change,
        operation;

    for (var i = 0; i < changes.length; i++) {
      change = changes[i];

      if (change.added) {
        operation = 1;
      } else if (change.removed) {
        operation = -1;
      } else {
        operation = 0;
      }

      ret.push([operation, change.value]);
    }

    return ret;
  }

  function convertChangesToXML(changes) {
    var ret = [];

    for (var i = 0; i < changes.length; i++) {
      var change = changes[i];

      if (change.added) {
        ret.push('<ins>');
      } else if (change.removed) {
        ret.push('<del>');
      }

      ret.push(escapeHTML(change.value));

      if (change.added) {
        ret.push('</ins>');
      } else if (change.removed) {
        ret.push('</del>');
      }
    }

    return ret.join('');
  }

  function escapeHTML(s) {
    var n = s;
    n = n.replace(/&/g, '&amp;');
    n = n.replace(/</g, '&lt;');
    n = n.replace(/>/g, '&gt;');
    n = n.replace(/"/g, '&quot;');
    return n;
  }

  exports.Diff = Diff;
  exports.applyPatch = applyPatch;
  exports.applyPatches = applyPatches;
  exports.canonicalize = canonicalize;
  exports.convertChangesToDMP = convertChangesToDMP;
  exports.convertChangesToXML = convertChangesToXML;
  exports.createPatch = createPatch;
  exports.createTwoFilesPatch = createTwoFilesPatch;
  exports.diffArrays = diffArrays;
  exports.diffChars = diffChars;
  exports.diffCss = diffCss;
  exports.diffJson = diffJson;
  exports.diffLines = diffLines;
  exports.diffSentences = diffSentences;
  exports.diffTrimmedLines = diffTrimmedLines;
  exports.diffWords = diffWords;
  exports.diffWordsWithSpace = diffWordsWithSpace;
  exports.merge = merge;
  exports.parsePatch = parsePatch;
  exports.structuredPatch = structuredPatch;

  Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/entries/dist.ts":
/*!*****************************!*\
  !*** ./src/entries/dist.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ../styles/style.css */ "./src/styles/style.css");
var app_1 = __webpack_require__(/*! ../scripts/app */ "./src/scripts/app.ts");
// Load library
H5P = H5P || {};
H5P.AdvancedBlanks = app_1.default;


/***/ }),

/***/ "./src/lib/helpers.ts":
/*!****************************!*\
  !*** ./src/lib/helpers.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.shuffleArray = exports.getLongestString = void 0;
function getLongestString(strings) {
    return strings.reduce(function (prev, current) { return current.length > prev.length ? current : prev; }, "");
}
exports.getLongestString = getLongestString;
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
exports.shuffleArray = shuffleArray;


/***/ }),

/***/ "./src/lib/ractive-events-keys.ts":
/*!****************************************!*\
  !*** ./src/lib/ractive-events-keys.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.anykey = exports.uparrow = exports.downarrow = exports.rightarrow = exports.leftarrow = exports.space = exports.escape = exports.tab = exports.enter = void 0;
// TODO can we just declare the keydownHandler once? using `this`?
function makeKeyDefinition(code) {
    return function (node, fire) {
        function keydownHandler(event) {
            var which = event.which || event.keyCode;
            if (code && which === code) {
                event.preventDefault();
                fire({
                    node: node,
                    original: event
                });
            }
            else if (!code && [16, 17, 18, 35, 36, 13, 9, 27, 32, 37, 39, 40, 38].filter(function (c) { return c === which; }).length === 0) {
                fire({
                    node: node,
                    original: event
                });
            }
        }
        node.addEventListener('keydown', keydownHandler, false);
        return {
            teardown: function () {
                node.removeEventListener('keydown', keydownHandler, false);
            }
        };
    };
}
exports.enter = makeKeyDefinition(13);
exports.tab = makeKeyDefinition(9);
exports.escape = makeKeyDefinition(27);
exports.space = makeKeyDefinition(32);
exports.leftarrow = makeKeyDefinition(37);
exports.rightarrow = makeKeyDefinition(39);
exports.downarrow = makeKeyDefinition(40);
exports.uparrow = makeKeyDefinition(38);
exports.anykey = makeKeyDefinition();


/***/ }),

/***/ "./src/scripts/app.ts":
/*!****************************!*\
  !*** ./src/scripts/app.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var blank_loader_1 = __webpack_require__(/*! ./content-loaders/blank-loader */ "./src/scripts/content-loaders/blank-loader.ts");
var data_repository_1 = __webpack_require__(/*! ./services/data-repository */ "./src/scripts/services/data-repository.ts");
var cloze_controller_1 = __webpack_require__(/*! ./controllers/cloze-controller */ "./src/scripts/controllers/cloze-controller.ts");
var localization_1 = __webpack_require__(/*! ./services/localization */ "./src/scripts/services/localization.ts");
var settings_1 = __webpack_require__(/*! ./services/settings */ "./src/scripts/services/settings.ts");
var message_service_1 = __webpack_require__(/*! ./services/message-service */ "./src/scripts/services/message-service.ts");
var unwrapper_1 = __webpack_require__(/*! ./helpers/unwrapper */ "./src/scripts/helpers/unwrapper.ts");
var xapi_1 = __webpack_require__(/*! ./models/xapi */ "./src/scripts/models/xapi.ts");
var extend_1 = __webpack_require__(/*! ./helpers/extend */ "./src/scripts/helpers/extend.ts");
var States;
(function (States) {
    States["ongoing"] = "ongoing";
    States["checking"] = "checking";
    States["showingSolutions"] = "showing-solution";
    States["finished"] = "finished";
    States["showingSolutionsEmbedded"] = "showing-solution-embedded";
})(States || (States = {}));
var XAPI_ALTERNATIVE_EXTENSION = 'https://h5p.org/x-api/alternatives';
var XAPI_CASE_SENSITIVITY = 'https://h5p.org/x-api/case-sensitivity';
var XAPI_REPORTING_VERSION_EXTENSION = 'https://h5p.org/x-api/h5p-reporting-version';
var AdvancedBlanks = /** @class */ (function (_super) {
    __extends(AdvancedBlanks, _super);
    /**
     * @constructor
     *
     * @param {object} config
     * @param {string} contentId
     * @param {object} contentData
     */
    function AdvancedBlanks(config, contentId, contentData) {
        if (contentData === void 0) { contentData = {}; }
        var _this = _super.call(this, 'advanced-blanks') || this;
        /**
         * Indicates if user has entered any answer so far.
         */
        _this.answered = false;
        /**
         * Called from outside when the score of the cloze has changed.
         */
        _this.onScoreChanged = function (score, maxScore) {
            if (_this.clozeController.isFullyFilledOut) {
                _this.transitionState();
                if (_this.state !== States.finished)
                    _this.state = States.checking;
                _this.showFeedback();
                // Send screenshot to server
                setTimeout(function () {
                    if (H5P && H5P.KLScreenshot) {
                        H5P.KLScreenshot.takeScreenshot(_this, _this.getH5pContainer().get(0));
                    }
                }, 500); // Allow buttons to update
            }
            _this.transitionState();
            _this.toggleButtonVisibility(_this.state);
        };
        _this.onTyped = function () {
            if (_this.state === States.checking) {
                _this.state = States.ongoing;
                _this.toggleButtonVisibility(_this.state);
            }
            _this.triggerXAPI('interacted');
            _this.answered = true;
        };
        _this.onClozeRefreshed = function () {
            _this.trigger('kllStoreSessionState', undefined, { bubbles: true, external: true });
        };
        _this.onAutoChecked = function () {
            _this.triggerXAPI('interacted');
            if (_this.clozeController.isFullyFilledOut) {
                _this.triggerXAPIAnswered();
            }
        };
        /**
         * Called by H5P.Question.attach(). Creates all content elements and registers them
         * with H5P.Question.
         */
        _this.registerDomElements = function () {
            this.registerMedia();
            this.setIntroduction(this.repository.getTaskDescription());
            this.container = this.jQuery("<div/>", { "class": "h5p-advanced-blanks" });
            this.setContent(this.container);
            this.registerButtons();
            this.moveToState(States.ongoing);
            /*
             * When Ractive is initialized, it requires the DOM to have been rendered.
             * H5P.Question doesn't offer a callback or event to detect when that has
             * happened, so we use its resize call as a trigger and check for the DOM.
             */
            this.on('resize', this.checkDOMPresent);
        };
        /**
         * Check answer. Also updates states
         * @param {object} [params={}] Parameters.
         * @param {boolean} [params.skipXAPI] If true, will skip xAPI.
         */
        _this.onCheckAnswer = function (params) {
            if (params === void 0) { params = {}; }
            _this.clozeController.checkAll();
            if (!params.skipXAPI) {
                _this.triggerXAPIAnswered();
            }
            _this.transitionState();
            if (_this.state !== States.finished)
                _this.state = States.checking;
            _this.showFeedback();
            _this.toggleButtonVisibility(_this.state);
        };
        _this.transitionState = function () {
            if (_this.clozeController.isSolved) {
                _this.moveToState(States.finished);
            }
        };
        _this.onShowSolution = function (force) {
            if (!force && _this.settings.showSolutionsRequiresInput && !_this.clozeController.allBlanksEntered) {
                // Require answer before solution can be viewed
                _this.updateFeedbackContent(_this.localization.getTextFromLabel(localization_1.LocalizationLabels.notFilledOutWarning));
                _this.read(_this.localization.getTextFromLabel(localization_1.LocalizationLabels.notFilledOutWarning));
                return;
            }
            _this.moveToState(States.showingSolutions);
            _this.clozeController.showSolutions();
            _this.showFeedback();
        };
        _this.onRetry = function () {
            _this.removeFeedback();
            _this.clozeController.reset();
            _this.answered = false;
            _this.moveToState(States.ongoing);
        };
        _this.getCurrentState = function () {
            var state = {
                cloze: _this.clozeController.serializeCloze(),
                state: _this.state
            };
            return state;
        };
        /****************************************
         * Implementation of Question contract  *
         ****************************************/
        _this.getAnswerGiven = function () {
            return _this.answered || _this.clozeController.maxScore === 0;
        };
        _this.getScore = function () {
            return _this.clozeController.currentScore;
        };
        _this.getMaxScore = function () {
            return _this.clozeController.maxScore;
        };
        _this.showSolutions = function () {
            _this.onShowSolution(true);
            _this.moveToState(States.showingSolutionsEmbedded);
        };
        _this.resetTask = function () {
            _this.onRetry();
        };
        /***
         * XApi implementation
         */
        /**
         * Trigger xAPI answered event
         */
        _this.triggerXAPIAnswered = function () {
            _this.answered = true;
            var xAPIEvent = _this.createXAPIEventTemplate('answered');
            _this.addQuestionToXAPI(xAPIEvent);
            _this.addResponseToXAPI(xAPIEvent);
            _this.trigger(xAPIEvent);
        };
        /**
         * Get xAPI data.
         * Contract used by report rendering engine.
         *
         * @see contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-6}
         */
        _this.getXAPIData = function () {
            var xAPIEvent = _this.createXAPIEventTemplate('answered');
            _this.addQuestionToXAPI(xAPIEvent);
            _this.addResponseToXAPI(xAPIEvent);
            return {
                statement: xAPIEvent.data.statement
            };
        };
        /**
         * Generate xAPI object definition used in xAPI statements.
         * @return {Object}
         */
        _this.getxAPIDefinition = function () {
            var definition = new xapi_1.XAPIActivityDefinition();
            definition.description = {
                'en-US': '<p>' + _this.repository.getTaskDescription() + '</p>' + _this.repository.getClozeText().replace(/__(_)+/g, '__________')
            };
            definition.type = 'http://adlnet.gov/expapi/activities/cmi.interaction';
            definition.interactionType = 'fill-in'; // We use the 'fill-in' type even in select mode, as the xAPI format for selections doesn't really cater for sequences.
            var correctResponsesPatternPrefix = '{case_matters=' + _this.settings.caseSensitive + '}';
            var correctAnswerList = _this.clozeController.getCorrectAnswerList();
            // H5P uses extension instead of full correct responses pattern to counter complexity
            var firstAlternatives = correctAnswerList.reduce(function (result, list) {
                result.push(list[0]);
                return result;
            }, []).join('[,]');
            definition.correctResponsesPattern = ["" + correctResponsesPatternPrefix + firstAlternatives];
            // Add the H5P Alternative extension which provides all the combinations of different answers
            // Reporting software will need to support this extension for alternatives to work.
            definition.extensions = definition.extensions || {};
            definition.extensions[XAPI_CASE_SENSITIVITY] = _this.settings.caseSensitive;
            definition.extensions[XAPI_ALTERNATIVE_EXTENSION] = correctAnswerList;
            return definition;
        };
        /**
         * Add the question itself to the definition part of an xAPIEvent
         */
        _this.addQuestionToXAPI = function (xAPIEvent) {
            var definition = xAPIEvent.getVerifiedStatementValue(['object', 'definition']);
            _this.jQuery.extend(true, definition, _this.getxAPIDefinition());
            // Set reporting module version if alternative extension is used
            if (_this.clozeController.hasAlternatives) {
                var context = xAPIEvent.getVerifiedStatementValue(['context']);
                context.extensions = context.extensions || {};
                context.extensions[XAPI_REPORTING_VERSION_EXTENSION] = '1.0.0';
            }
        };
        /**
         * Add the response part to an xAPI event
         *
         * @param {H5P.XAPIEvent} xAPIEvent
         *  The xAPI event we will add a response to
         */
        _this.addResponseToXAPI = function (xAPIEvent) {
            xAPIEvent.setScoredResult(_this.clozeController.currentScore, _this.clozeController.maxScore, _this);
            xAPIEvent.data.statement.result.response = _this.getxAPIResponse();
        };
        /**
         * Generate xAPI user response, used in xAPI statements.
         * @return {string} User answers separated by the "[,]" pattern
         */
        _this.getxAPIResponse = function () {
            var usersAnswers = (_this.getCurrentState()).cloze;
            return usersAnswers.join('[,]');
        };
        // Set mandatory default values for editor widgets that create content type instances
        config = extend_1.extend({
            content: {
                blanksText: ''
            },
            behaviour: {
                mode: 'typing',
                selectAlternatives: 'alternatives'
            },
            contentId: contentId
        }, config);
        _this.jQuery = H5P.jQuery;
        _this.contentId = contentId;
        var unwrapper = new unwrapper_1.Unrwapper(_this.jQuery);
        _this.settings = new settings_1.H5PSettings(config);
        _this.localization = new localization_1.H5PLocalization(config);
        _this.repository = new data_repository_1.H5PDataRepository(config, _this.settings, _this.localization, _this.jQuery, unwrapper);
        _this.messageService = new message_service_1.MessageService(_this.jQuery);
        blank_loader_1.BlankLoader.initialize(_this.settings, _this.localization, _this.jQuery, _this.messageService);
        _this.clozeController = new cloze_controller_1.ClozeController(_this.repository, _this.settings, _this.localization, _this.messageService);
        _this.clozeController.onScoreChanged = _this.onScoreChanged;
        _this.clozeController.onSolved = _this.onSolved;
        _this.clozeController.onAutoChecked = _this.onAutoChecked;
        _this.clozeController.onTyped = _this.onTyped;
        _this.clozeController.onClozeRefreshed = _this.onClozeRefreshed;
        _this.previousState = (contentData && contentData.previousState) ?
            contentData.previousState :
            {};
        return _this;
    }
    AdvancedBlanks.prototype.onSolved = function () {
    };
    /**
     * Initialize clozeController/Ractive once DOM is present.
     */
    AdvancedBlanks.prototype.checkDOMPresent = function () {
        if (this.initialized || !document.querySelector('.h5p-question-content')) {
            return; // Required DOM element is not present yet
        }
        // Remove this handler, just needed once
        this.off('resize', this.checkDOMPresent);
        // Determine original $container for this content
        var $container = this.jQuery(this.container).closest('.h5p-question');
        // Initialize clozeController with Ractive
        this.clozeController.initialize(this.container.get(0), $container);
        if (this.clozeController.deserializeCloze(this.previousState.cloze)) {
            this.state = this.previousState.state || States.ongoing;
            if (this.state === States.checking || this.state === States.finished) {
                this.onCheckAnswer();
            }
            else if (this.state === States.showingSolutions) {
                this.onShowSolution(true);
            }
            this.answered = this.clozeController.isFilledOut;
            this.toggleButtonVisibility(this.state);
        }
        this.initialized = true;
    };
    /**
     * @returns JQuery - The outer h5p container. The library can add dialogues to this
     * element.
     */
    AdvancedBlanks.prototype.getH5pContainer = function () {
        var $content = this.jQuery('[data-content-id="' + this.contentId + '"].h5p-content');
        var $containerParents = $content.parents('.h5p-container');
        // select find container to attach dialogs to
        var $container;
        if ($containerParents.length !== 0) {
            // use parent highest up if any
            $container = $containerParents.last();
        }
        else if ($content.length !== 0) {
            $container = $content;
        }
        else {
            $container = this.jQuery(document.body);
        }
        return $container;
    };
    AdvancedBlanks.prototype.registerMedia = function () {
        var media = this.repository.getMedia();
        if (!media || !media.library)
            return;
        var type = media.library.split(' ')[0];
        if (type === 'H5P.Image') {
            if (media.params.file) {
                this.setImage(media.params.file.path, {
                    disableImageZooming: this.settings.disableImageZooming,
                    alt: media.params.alt
                });
            }
        }
        else if (type === 'H5P.Video') {
            if (media.params.sources) {
                this.setVideo(media);
            }
        }
    };
    AdvancedBlanks.prototype.registerButtons = function () {
        var _this = this;
        var $container = this.getH5pContainer();
        if (!this.settings.autoCheck) {
            // Check answer button
            this.addButton('check-answer', this.localization.getTextFromLabel(localization_1.LocalizationLabels.checkAllButton), function () {
                _this.onCheckAnswer({ answered: true });
            }, true, {}, {
                confirmationDialog: {
                    enable: this.settings.confirmCheckDialog,
                    l10n: this.localization.getObjectForStructure(localization_1.LocalizationStructures.confirmCheck),
                    instance: this,
                    $parentElement: $container
                }
            });
        }
        // Show solution button
        this.addButton('show-solution', this.localization.getTextFromLabel(localization_1.LocalizationLabels.showSolutionButton), this.onShowSolution, this.settings.enableSolutionsButton);
        // Try again button
        if (this.settings.enableRetry === true) {
            this.addButton('try-again', this.localization.getTextFromLabel(localization_1.LocalizationLabels.retryButton), this.onRetry, true, {}, {
                confirmationDialog: {
                    enable: this.settings.confirmRetryDialog,
                    l10n: this.localization.getObjectForStructure(localization_1.LocalizationStructures.confirmRetry),
                    instance: this,
                    $parentElement: $container
                }
            });
        }
    };
    AdvancedBlanks.prototype.showFeedback = function () {
        var scoreText = H5P.Question.determineOverallFeedback(this.localization.getObjectForStructure(localization_1.LocalizationStructures.overallFeedback), this.clozeController.currentScore / this.clozeController.maxScore).replace('@score', this.clozeController.currentScore).replace('@total', this.clozeController.maxScore);
        this.setFeedback(scoreText, this.clozeController.currentScore, this.clozeController.maxScore, this.localization.getTextFromLabel(localization_1.LocalizationLabels.scoreBarLabel));
    };
    /**
     * Shows are hides buttons depending on the current state and settings made
     * by the content creator.
     * @param  {States} state
     */
    AdvancedBlanks.prototype.moveToState = function (state) {
        this.state = state;
        this.toggleButtonVisibility(state);
        this.trigger('kllStoreSessionState', undefined, { bubbles: true, external: true });
    };
    AdvancedBlanks.prototype.toggleButtonVisibility = function (state) {
        if (this.settings.enableSolutionsButton) {
            if (((state === States.checking)
                || (this.settings.autoCheck && state === States.ongoing))
                && (!this.settings.showSolutionsRequiresInput || this.clozeController.allBlanksEntered)) {
                this.showButton('show-solution');
            }
            else {
                this.hideButton('show-solution');
            }
        }
        if (this.settings.enableRetry && (state === States.checking || state === States.finished || state === States.showingSolutions)) {
            this.showButton('try-again');
        }
        else {
            this.hideButton('try-again');
        }
        if (state === States.ongoing && this.settings.enableCheckButton) {
            this.showButton('check-answer');
        }
        else {
            this.hideButton('check-answer');
        }
        if (state === States.showingSolutionsEmbedded) {
            this.hideButton('check-answer');
            this.hideButton('try-again');
            this.hideButton('show-solution');
        }
        this.trigger('resize');
    };
    return AdvancedBlanks;
}(H5P.Question));
exports.default = AdvancedBlanks;


/***/ }),

/***/ "./src/scripts/content-loaders/blank-loader.ts":
/*!*****************************************************!*\
  !*** ./src/scripts/content-loaders/blank-loader.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BlankLoader = void 0;
var answer_1 = __webpack_require__(/*! ../models/answer */ "./src/scripts/models/answer.ts");
var blank_1 = __webpack_require__(/*! ../models/blank */ "./src/scripts/models/blank.ts");
var message_1 = __webpack_require__(/*! ../models/message */ "./src/scripts/models/message.ts");
var BlankLoader = /** @class */ (function () {
    function BlankLoader(settings, localization, jquery, messageService) {
        this.settings = settings;
        this.localization = localization;
        this.jquery = jquery;
        this.messageService = messageService;
    }
    BlankLoader.initialize = function (settings, localization, jquery, messageService) {
        this._instance = new BlankLoader(settings, localization, jquery, messageService);
        return this._instance;
    };
    Object.defineProperty(BlankLoader, "instance", {
        get: function () {
            if (this._instance)
                return this._instance;
            throw "BlankLoader must be initialized before use.";
        },
        enumerable: false,
        configurable: true
    });
    BlankLoader.prototype.decodeHtml = function (html) {
        var elem = document.createElement('textarea');
        elem.innerHTML = html;
        return elem.value;
    };
    BlankLoader.prototype.createBlank = function (id, correctText, hintText, incorrectAnswers, placeholders) {
        var blank = new blank_1.Blank(this.settings, this.localization, this.jquery, this.messageService, id, placeholders);
        if (correctText) {
            correctText = this.decodeHtml(correctText);
            blank.addCorrectAnswer(new answer_1.Answer(correctText, "", false, 0, this.settings));
        }
        blank.setHint(new message_1.Message(hintText ? hintText : "", false, 0));
        if (incorrectAnswers) {
            for (var _i = 0, incorrectAnswers_1 = incorrectAnswers; _i < incorrectAnswers_1.length; _i++) {
                var h5pIncorrectAnswer = incorrectAnswers_1[_i];
                blank.addIncorrectAnswer(this.decodeHtml(h5pIncorrectAnswer.incorrectAnswerText), h5pIncorrectAnswer.incorrectAnswerFeedback, h5pIncorrectAnswer.showHighlight, h5pIncorrectAnswer.highlight);
            }
        }
        return blank;
    };
    BlankLoader.prototype.replaceSnippets = function (blank, snippets) {
        var _this = this;
        blank.correctAnswers.concat(blank.incorrectAnswers)
            .forEach(function (answer) { return answer.message.text = _this.getStringWithSnippets(answer.message.text, snippets); });
        blank.hint.text = this.getStringWithSnippets(blank.hint.text, snippets);
    };
    BlankLoader.prototype.getStringWithSnippets = function (text, snippets) {
        if (!text || text === undefined)
            return "";
        if (!snippets)
            return text;
        for (var _i = 0, snippets_1 = snippets; _i < snippets_1.length; _i++) {
            var snippet = snippets_1[_i];
            if (snippet.name === undefined || snippet.name === "" || snippet.text === undefined || snippet.text === "")
                continue;
            text = text.replace("@" + snippet.name, snippet.text);
        }
        return text;
    };
    /**
     * Adds the highlight objects to the answers in the correct and incorrect answer list.
     * @param  {Highlight[]} highlightsBefore - All highlights coming before the blank.
     * @param  {Highlight[]} highlightsAfter - All highlights coming after the blank.
     */
    BlankLoader.prototype.linkHighlightIdToObject = function (blank, highlightsBefore, highlightsAfter) {
        for (var _i = 0, _a = blank.correctAnswers; _i < _a.length; _i++) {
            var answer = _a[_i];
            answer.linkHighlightIdToObject(highlightsBefore, highlightsAfter);
        }
        for (var _b = 0, _c = blank.incorrectAnswers; _b < _c.length; _b++) {
            var answer = _c[_b];
            answer.linkHighlightIdToObject(highlightsBefore, highlightsAfter);
        }
        blank.hint.linkHighlight(highlightsBefore, highlightsAfter);
    };
    return BlankLoader;
}());
exports.BlankLoader = BlankLoader;


/***/ }),

/***/ "./src/scripts/content-loaders/cloze-loader.ts":
/*!*****************************************************!*\
  !*** ./src/scripts/content-loaders/cloze-loader.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ClozeLoader = void 0;
var blank_loader_1 = __webpack_require__(/*! ./blank-loader */ "./src/scripts/content-loaders/blank-loader.ts");
var cloze_element_1 = __webpack_require__(/*! ../models/cloze-element */ "./src/scripts/models/cloze-element.ts");
var highlight_1 = __webpack_require__(/*! ../models/highlight */ "./src/scripts/models/highlight.ts");
var cloze_1 = __webpack_require__(/*! ../models/cloze */ "./src/scripts/models/cloze.ts");
/**
 * Loads a cloze object.
 */
var ClozeLoader = /** @class */ (function () {
    function ClozeLoader() {
    }
    /**
     * @param  {string} html - The html string that contains the cloze with blanks marking and highlight markings.
     * @param  {Blank[]} blanks - All blanks as entered by the content author.
     * @returns Cloze
     */
    ClozeLoader.createCloze = function (html, blanks) {
        var orderedAllElementsList = new Array();
        var highlightInstances = new Array();
        var blanksInstances = new Array();
        html = ClozeLoader.normalizeBlankMarkings(html);
        var conversionResult = ClozeLoader.convertMarkupToSpans(html, blanks);
        html = conversionResult.html;
        orderedAllElementsList = conversionResult.orderedAllElementsList;
        highlightInstances = conversionResult.highlightInstances;
        blanksInstances = conversionResult.blanksInstances;
        ClozeLoader.linkHighlightsObjects(orderedAllElementsList, highlightInstances, blanksInstances);
        var cloze = new cloze_1.Cloze();
        cloze.html = html;
        cloze.blanks = blanksInstances;
        cloze.highlights = highlightInstances;
        return cloze;
    };
    /**
    * Converts !!signal!! highlight markup and ___  blank markup into <span>...</span>.
    * Returns the resulting html string and three lists of all active elements used in the cloze:
    *    orderedAllElements: highlights and blanks in the order of appearance in the html.
    *    highlightInstances: only highlights in the order of appearance
    *    blanksInstances: only blanks in the order of appearance
    * @param  {string} html
    * @param  {Blank[]} blanks
    * @returns Lists of active elements (see description).
    */
    ClozeLoader.convertMarkupToSpans = function (html, blanks) {
        var orderedAllElementsList = new Array();
        var highlightInstances = new Array();
        var blanksInstances = new Array();
        var exclamationMarkRegExp = /!!(.{1,40}?)!!/i;
        var highlightCounter = 0;
        var blankCounter = 0;
        // Searches the html string for highlights and blanks and inserts spans. 
        do {
            var nextHighlightMatch = html.match(exclamationMarkRegExp);
            var nextBlankIndex = html.indexOf(ClozeLoader.normalizedBlankMarker);
            if (nextHighlightMatch && ((nextHighlightMatch.index < nextBlankIndex) || (nextBlankIndex < 0))) {
                // next active element is a highlight
                var highlight = new highlight_1.Highlight(nextHighlightMatch[1], "highlight_" + highlightCounter);
                highlightInstances.push(highlight);
                orderedAllElementsList.push(highlight);
                html = html.replace(exclamationMarkRegExp, "<span id='container_highlight_" + highlightCounter + "'></span>");
                highlightCounter++;
            }
            else if (nextBlankIndex >= 0) {
                // next active element is a blank
                if (blankCounter >= blanks.length) {
                    // if the blank is not in the repository (The content author has marked too many blanks in the text, but not entered correct answers.)
                    html = html.replace(ClozeLoader.normalizedBlankMarker, "<span></span>");
                }
                else {
                    var blank = blanks[blankCounter];
                    blanksInstances.push(blank);
                    orderedAllElementsList.push(blank);
                    html = html.replace(ClozeLoader.normalizedBlankMarker, "<span id='container_" + blank.id + "'></span>");
                    blankCounter++;
                }
            }
        } while (nextHighlightMatch || (nextBlankIndex >= 0));
        return {
            html: html,
            orderedAllElementsList: orderedAllElementsList,
            highlightInstances: highlightInstances,
            blanksInstances: blanksInstances
        };
    };
    /**
     * Looks for all instances of marked blanks and replaces them with ___.
     * @param  {string} html
     * @returns string
     */
    ClozeLoader.normalizeBlankMarkings = function (html) {
        var underlineBlankRegEx = /_{3,}/g;
        html = html.replace(underlineBlankRegEx, ClozeLoader.normalizedBlankMarker);
        return html;
    };
    /**
    * Iterates through all blanks and calls their linkHighlightIdsToObjects(...).
    * @param orderedAllElementsList
    * @param highlightInstances
    * @param blanksInstances
    */
    ClozeLoader.linkHighlightsObjects = function (orderedAllElementsList, highlightInstances, blanksInstances) {
        for (var _i = 0, blanksInstances_1 = blanksInstances; _i < blanksInstances_1.length; _i++) {
            var blank = blanksInstances_1[_i];
            var nextBlankIndexInArray = orderedAllElementsList.indexOf(blank);
            var highlightsBeforeBlank = orderedAllElementsList
                .slice(0, nextBlankIndexInArray)
                .filter(function (e) { return e.type === cloze_element_1.ClozeElementType.Highlight; })
                .map(function (e) { return e; })
                .reverse();
            var highlightsAfterBlank = orderedAllElementsList
                .slice(nextBlankIndexInArray + 1)
                .filter(function (e) { return e.type === cloze_element_1.ClozeElementType.Highlight; })
                .map(function (e) { return e; });
            blank_loader_1.BlankLoader.instance.linkHighlightIdToObject(blank, highlightsBeforeBlank, highlightsAfterBlank);
        }
    };
    ClozeLoader.normalizedBlankMarker = '___';
    return ClozeLoader;
}());
exports.ClozeLoader = ClozeLoader;


/***/ }),

/***/ "./src/scripts/controllers/cloze-controller.ts":
/*!*****************************************************!*\
  !*** ./src/scripts/controllers/cloze-controller.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ClozeController = void 0;
var blank_loader_1 = __webpack_require__(/*! ../content-loaders/blank-loader */ "./src/scripts/content-loaders/blank-loader.ts");
var cloze_loader_1 = __webpack_require__(/*! ../content-loaders/cloze-loader */ "./src/scripts/content-loaders/cloze-loader.ts");
var enums_1 = __webpack_require__(/*! ../models/enums */ "./src/scripts/models/enums.ts");
var answer_1 = __webpack_require__(/*! ../models/answer */ "./src/scripts/models/answer.ts");
var RactiveEventsKeys = __webpack_require__(/*! ../../lib/ractive-events-keys */ "./src/lib/ractive-events-keys.ts");
var ClozeController = /** @class */ (function () {
    function ClozeController(repository, settings, localization, MessageService) {
        var _this = this;
        this.repository = repository;
        this.settings = settings;
        this.localization = localization;
        this.MessageService = MessageService;
        // Storage of the ractive objects that link models and views
        this.highlightRactives = {};
        this.blankRactives = {};
        this.checkAll = function () {
            _this.cloze.hideAllHighlights();
            for (var _i = 0, _a = _this.cloze.blanks; _i < _a.length; _i++) {
                var blank = _a[_i];
                if ((!blank.isCorrect) && blank.enteredText !== "")
                    blank.evaluateAttempt(true, true);
            }
            _this.refreshCloze();
            _this.checkAndNotifyCompleteness();
        };
        this.textTyped = function (blank) {
            blank.onTyped();
            if (_this.onTyped)
                _this.onTyped();
            _this.refreshCloze();
        };
        this.focus = function (blank) {
            blank.onFocussed();
            _this.refreshCloze();
        };
        this.displayFeedback = function (blank) {
            blank.onDisplayFeedback();
            _this.refreshCloze();
        };
        this.showHint = function (blank) {
            _this.cloze.hideAllHighlights();
            blank.showHint();
            _this.refreshCloze();
        };
        this.requestCloseTooltip = function (blank) {
            blank.removeTooltip();
            _this.refreshCloze();
            _this.jquery.find("#" + blank.id).focus();
        };
        this.checkBlank = function (blank, cause) {
            if ((cause === 'blur' || cause === 'change')) {
                blank.lostFocus();
            }
            if (cause === 'change' && _this.onTyped) {
                _this.onTyped();
            }
            if (_this.settings.autoCheck) {
                if (!blank.enteredText || blank.enteredText === "")
                    return;
                _this.cloze.hideAllHighlights();
                blank.evaluateAttempt(false);
                _this.checkAndNotifyCompleteness();
                _this.refreshCloze();
                _this.onAutoChecked();
            }
            if ((cause === 'enter')
                && ((_this.settings.autoCheck && blank.isCorrect && !_this.isSolved)
                    || !_this.settings.autoCheck)) {
                // move to next blank
                var index = _this.cloze.blanks.indexOf(blank);
                var nextId;
                while (index < _this.cloze.blanks.length - 1 && !nextId) {
                    index++;
                    if (!_this.cloze.blanks[index].isCorrect)
                        nextId = _this.cloze.blanks[index].id;
                }
                if (nextId)
                    _this.jquery.find("#" + nextId).focus();
            }
        };
        this.reset = function () {
            _this.cloze.reset();
            _this.refreshCloze();
        };
        this.showSolutions = function () {
            _this.cloze.showSolutions();
            _this.refreshCloze();
        };
        this.checkAndNotifyCompleteness = function () {
            if (_this.onScoreChanged)
                _this.onScoreChanged(_this.currentScore, _this.maxScore);
            if (_this.cloze.isSolved) {
                if (_this.onSolved)
                    _this.onSolved();
                return true;
            }
            return false;
        };
    }
    Object.defineProperty(ClozeController.prototype, "maxScore", {
        get: function () {
            return this.cloze.blanks.length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClozeController.prototype, "hasAlternatives", {
        /**
         * Detect whether there are blanks with more than one solution.
         * @return {boolean} True if there is at least one blank with more than one solution.
         */
        get: function () {
            return this.cloze.blanks.some(function (b) { return b.correctAnswers[0].alternatives.length > 1; });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClozeController.prototype, "currentScore", {
        get: function () {
            var _this = this;
            var score = this.cloze.blanks.reduce(function (score, b) {
                var notShowingSolution = !b.isShowingSolution;
                var correctAnswerGiven = b.correctAnswers[0].alternatives.indexOf(b.enteredText || '') !== -1;
                // Detect small mistakes
                var closeCorrectMatches = b.correctAnswers
                    .map(function (answer) { return answer.evaluateAttempt(b.enteredText); })
                    .filter(function (evaluation) { return evaluation.correctness === answer_1.Correctness.CloseMatch; });
                var similarAnswerGiven = _this.settings.acceptSpellingErrors && closeCorrectMatches.length > 0;
                return score += (notShowingSolution && (correctAnswerGiven || similarAnswerGiven)) ? 1 : 0;
            }, 0);
            return Math.max(0, score);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClozeController.prototype, "allBlanksEntered", {
        get: function () {
            if (this.cloze)
                return this.cloze.blanks.every(function (blank) { return blank.isError || blank.isCorrect || blank.isRetry; });
            return false;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClozeController.prototype, "isSolved", {
        get: function () {
            return this.cloze.isSolved;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClozeController.prototype, "isFilledOut", {
        get: function () {
            if (!this.cloze || this.cloze.blanks.length === 0)
                return true;
            return this.cloze.blanks.some(function (b) { return b.enteredText !== ''; });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClozeController.prototype, "isFullyFilledOut", {
        get: function () {
            if (!this.cloze || this.cloze.blanks.length === 0)
                return true;
            return this.cloze.blanks.every(function (b) { return b.enteredText !== ''; });
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Sets up all blanks, the cloze itself and the ractive bindings.
     * @param  {HTMLElement} root
     */
    ClozeController.prototype.initialize = function (root, jquery) {
        this.jquery = jquery;
        this.isSelectCloze = this.settings.clozeType === enums_1.ClozeType.Select ? true : false;
        var blanks = this.repository.getBlanks();
        if (this.isSelectCloze && this.settings.selectAlternatives === enums_1.SelectAlternatives.All) {
            for (var _i = 0, blanks_1 = blanks; _i < blanks_1.length; _i++) {
                var blank = blanks_1[_i];
                var otherBlanks = blanks.filter(function (v) { return v !== blank; });
                blank.loadChoicesFromOtherBlanks(otherBlanks);
            }
        }
        var snippets = this.repository.getSnippets();
        blanks.forEach(function (blank) { return blank_loader_1.BlankLoader.instance.replaceSnippets(blank, snippets); });
        this.cloze = cloze_loader_1.ClozeLoader.createCloze(this.repository.getClozeText(), blanks);
        var containers = this.createAndAddContainers(root);
        containers.cloze.innerHTML = this.cloze.html;
        this.createRactiveBindings();
    };
    ClozeController.prototype.createAndAddContainers = function (addTo) {
        var clozeContainerElement = document.createElement('div');
        clozeContainerElement.id = 'h5p-cloze-container';
        if (this.settings.clozeType === enums_1.ClozeType.Select) {
            clozeContainerElement.className = 'h5p-advanced-blanks-select-mode';
        }
        else {
            clozeContainerElement.className = 'h5p-advanced-blanks-type-mode';
        }
        addTo.appendChild(clozeContainerElement);
        return {
            cloze: clozeContainerElement
        };
    };
    ClozeController.prototype.createHighlightBinding = function (highlight) {
        this.highlightRactives[highlight.id] = new Ractive({
            el: '#container_' + highlight.id,
            template: __webpack_require__(/*! ../views/highlight.ractive.html */ "./src/scripts/views/highlight.ractive.html"),
            data: {
                object: highlight
            }
        });
    };
    ClozeController.prototype.createBlankBinding = function (blank) {
        var ractive = new Ractive({
            el: '#container_' + blank.id,
            template: __webpack_require__(/*! ../views/blank.ractive.html */ "./src/scripts/views/blank.ractive.html"),
            data: {
                isSelectCloze: this.isSelectCloze,
                blank: blank
            },
            events: {
                enter: RactiveEventsKeys.enter,
                escape: RactiveEventsKeys.escape,
                anykey: RactiveEventsKeys.anykey
            }
        });
        ractive.on("checkBlank", this.checkBlank);
        ractive.on("showHint", this.showHint);
        ractive.on("textTyped", this.textTyped);
        ractive.on("closeMessage", this.requestCloseTooltip);
        ractive.on("focus", this.focus);
        ractive.on("displayFeedback", this.displayFeedback);
        this.blankRactives[blank.id] = ractive;
    };
    ClozeController.prototype.createRactiveBindings = function () {
        for (var _i = 0, _a = this.cloze.highlights; _i < _a.length; _i++) {
            var highlight = _a[_i];
            this.createHighlightBinding(highlight);
        }
        for (var _b = 0, _c = this.cloze.blanks; _b < _c.length; _b++) {
            var blank = _c[_b];
            this.createBlankBinding(blank);
        }
    };
    /**
     * Updates all views of highlights and blanks. Can be called when a model
     * was changed
     */
    ClozeController.prototype.refreshCloze = function () {
        for (var _i = 0, _a = this.cloze.highlights; _i < _a.length; _i++) {
            var highlight = _a[_i];
            var highlightRactive = this.highlightRactives[highlight.id];
            highlightRactive.set("object", highlight);
        }
        for (var _b = 0, _c = this.cloze.blanks; _b < _c.length; _b++) {
            var blank = _c[_b];
            var blankRactive = this.blankRactives[blank.id];
            blankRactive.set("blank", blank);
        }
        this.onClozeRefreshed();
    };
    ClozeController.prototype.serializeCloze = function () {
        return this.cloze.serialize();
    };
    ClozeController.prototype.deserializeCloze = function (data) {
        if (!this.cloze || !data)
            return false;
        this.cloze.deserialize(data);
        this.refreshCloze();
        return true;
    };
    ClozeController.prototype.getCorrectAnswerList = function () {
        if (!this.cloze || this.cloze.blanks.length === 0)
            return [[]];
        var result = [];
        for (var _i = 0, _a = this.cloze.blanks; _i < _a.length; _i++) {
            var blank = _a[_i];
            result.push(blank.getCorrectAnswers());
        }
        return result;
    };
    return ClozeController;
}());
exports.ClozeController = ClozeController;


/***/ }),

/***/ "./src/scripts/helpers/extend.ts":
/*!***************************************!*\
  !*** ./src/scripts/helpers/extend.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.extend = void 0;
/**
 * Extend an array just like JQuery's extend.
 * @param {object} arguments Objects to be merged.
 * @return {object} Merged objects.
 */
function extend() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    for (var i = 1; i < args.length; i++) {
        for (var key in args[i]) {
            if (args[i].hasOwnProperty(key)) {
                if (typeof args[0][key] === 'object' && typeof args[i][key] === 'object') {
                    this.extend(args[0][key], args[i][key]);
                }
                else {
                    args[0][key] = args[i][key];
                }
            }
        }
    }
    return args[0];
}
exports.extend = extend;


/***/ }),

/***/ "./src/scripts/helpers/unwrapper.ts":
/*!******************************************!*\
  !*** ./src/scripts/helpers/unwrapper.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Unrwapper = void 0;
/**
 * This class cleans html strings.
 */
var Unrwapper = /** @class */ (function () {
    function Unrwapper(jquery) {
        this.jquery = jquery;
    }
    /**
     * Cleans html strings by removing the outmost html tag of the string if there is only one tag.
     * Examples:  "<p>my text</p>"" becomes "my text"
     *            "<p>text 1</p><p>text 2</p2>" stays
     * @param html The html string
     * @returns the cleaned html string
     */
    Unrwapper.prototype.unwrap = function (html) {
        var parsed = this.jquery(html);
        if (parsed.length !== 1) {
            return html;
        }
        var unwrapped = parsed.unwrap().html();
        return unwrapped;
    };
    return Unrwapper;
}());
exports.Unrwapper = Unrwapper;


/***/ }),

/***/ "./src/scripts/models/answer.ts":
/*!**************************************!*\
  !*** ./src/scripts/models/answer.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Answer = exports.Evaluation = exports.Correctness = void 0;
var message_1 = __webpack_require__(/*! ./message */ "./src/scripts/models/message.ts");
var jsdiff = __webpack_require__(/*! diff */ "./node_modules/diff/dist/diff.js");
var Correctness;
(function (Correctness) {
    Correctness[Correctness["ExactMatch"] = 0] = "ExactMatch";
    Correctness[Correctness["CloseMatch"] = 1] = "CloseMatch";
    Correctness[Correctness["NoMatch"] = 2] = "NoMatch";
})(Correctness = exports.Correctness || (exports.Correctness = {}));
var Evaluation = /** @class */ (function () {
    function Evaluation(usedAnswer) {
        this.usedAnswer = usedAnswer;
        this.correctness = Correctness.NoMatch;
        this.characterDifferenceCount = 0;
        this.usedAlternative = "";
    }
    return Evaluation;
}());
exports.Evaluation = Evaluation;
/**
 * Represents a possible answer the content author enters for a blank, e.g. the correct or an incorrect answer.
 */
var Answer = /** @class */ (function () {
    /**
     * @param  {string} answerText - The expected answer. Alternatives are separated by | or ; . (e.g. "Alternative 1|Alternative 2|Alternative 3|..."  -or- "Alternative 1;Alternative 2;Alternative 3")
     * @param  {string} reaction - The tooltip that should be displayed. Format: Tooltip Text;!!-1!! !!+1!!
     */
    function Answer(answerText, reaction, showHighlight, highlight, settings) {
        this.settings = settings;
        this.alternatives = answerText.split(/\//).map(function (s) { return s.trim(); });
        this.message = new message_1.Message(reaction, showHighlight, highlight);
        if (answerText.trim() === "") {
            this.appliesAlways = true;
        }
        else {
            this.appliesAlways = false;
        }
    }
    /**
     * Looks through the object's message ids and stores the references to the highlight object for these ids.
     * @param  {Highlight[]} highlightsBefore
     * @param  {Highlight[]} highlightsAfter
     */
    Answer.prototype.linkHighlightIdToObject = function (highlightsBefore, highlightsAfter) {
        this.message.linkHighlight(highlightsBefore, highlightsAfter);
    };
    /**
     * Turns on the highlights set by the content author for this answer.
     */
    Answer.prototype.activateHighlight = function () {
        if (this.message.highlightedElement)
            this.message.highlightedElement.isHighlighted = true;
    };
    Answer.prototype.cleanString = function (text) {
        text = text.trim();
        return text.replace(/\s{2,}/g, " ");
    };
    /**
     * Looks through the diff and checks how many character change operations are needed to turn one string into the other. Should return the same results as the Levensthein distance.
     * @param  {[{added?:boolean, boolean: removed?, string: value}]} diff - as returned by jsdiff
     * @returns number - the count of changes (replace, add, delete) needed to change the text from one string to the other
     */
    Answer.prototype.getChangesCountFromDiff = function (diff) {
        var totalChangesCount = 0;
        var lastType = "";
        var lastCount = 0;
        for (var _i = 0, diff_1 = diff; _i < diff_1.length; _i++) {
            var element = diff_1[_i];
            if (element.removed) {
                totalChangesCount += element.value.length;
                lastType = "removed";
            }
            else if (element.added) {
                if (lastType === "removed") {
                    if (lastCount < element.value.length) {
                        totalChangesCount += element.value.length - lastCount;
                    }
                }
                else {
                    totalChangesCount += element.value.length;
                }
                lastType = "added";
            }
            else {
                lastType = "same";
            }
            lastCount = element.value.length;
        }
        return totalChangesCount;
    };
    /**
     * Returns how many characters can be wrong to still be counted as a spelling mistake.
     * If spelling mistakes are turned off through the settings, it will return 0.
     * @param  {string} text
     * @returns number
     */
    Answer.prototype.getAcceptableSpellingMistakes = function (text) {
        var acceptableTypoCount;
        if (this.settings.warnSpellingErrors || this.settings.acceptSpellingErrors) // TODO: consider removal
            acceptableTypoCount = Math.floor(text.length / 10) + 1;
        else
            acceptableTypoCount = 0;
        return acceptableTypoCount;
    };
    /**
     * Checks if the text entered by the user in an ettempt is matched by the answer,
     * @param  {string} attempt The text entered by the user.
     * @returns Evaluation indicates if the entered text is matched by the answer.
     */
    Answer.prototype.evaluateAttempt = function (attempt) {
        var cleanedAttempt = this.cleanString(attempt);
        var evaluation = new Evaluation(this);
        for (var _i = 0, _a = this.alternatives; _i < _a.length; _i++) {
            var alternative = _a[_i];
            var cleanedAlternative = this.cleanString(alternative);
            var diff = jsdiff.diffChars(cleanedAlternative, cleanedAttempt, { ignoreCase: !this.settings.caseSensitive });
            var changeCount = this.getChangesCountFromDiff(diff);
            if (changeCount === 0) {
                evaluation.usedAlternative = cleanedAlternative;
                evaluation.correctness = Correctness.ExactMatch;
                return evaluation;
            }
            if (changeCount <= this.getAcceptableSpellingMistakes(alternative)
                && (evaluation.characterDifferenceCount === 0 || changeCount < evaluation.characterDifferenceCount)) {
                evaluation.usedAlternative = cleanedAlternative;
                evaluation.correctness = Correctness.CloseMatch;
                evaluation.characterDifferenceCount = changeCount;
            }
        }
        return evaluation;
    };
    return Answer;
}());
exports.Answer = Answer;


/***/ }),

/***/ "./src/scripts/models/blank.ts":
/*!*************************************!*\
  !*** ./src/scripts/models/blank.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blank = void 0;
var cloze_element_1 = __webpack_require__(/*! ./cloze-element */ "./src/scripts/models/cloze-element.ts");
var answer_1 = __webpack_require__(/*! ./answer */ "./src/scripts/models/answer.ts");
var enums_1 = __webpack_require__(/*! ./enums */ "./src/scripts/models/enums.ts");
var localization_1 = __webpack_require__(/*! ../services/localization */ "./src/scripts/services/localization.ts");
var helpers_1 = __webpack_require__(/*! ../../lib/helpers */ "./src/lib/helpers.ts");
var jsdiff = __webpack_require__(/*! diff */ "./node_modules/diff/dist/diff.js");
var Blank = /** @class */ (function (_super) {
    __extends(Blank, _super);
    /**
     * Add incorrect answers after initializing the object. Call finishInitialization()
     * when done.
     * @param  {ISettings} settings
     * @param  {string} id
     * @param  {string} correctText?
     * @param  {string} hintText?
     */
    function Blank(settings, localization, jquery, messageService, id, placeholders) {
        var _this = _super.call(this) || this;
        _this.settings = settings;
        _this.localization = localization;
        _this.jquery = jquery;
        _this.messageService = messageService;
        _this.placeholders = placeholders;
        /**
         * Compute widest char.
         * @return {object} Result with char and width.
         */
        _this.computeWidestChar = function () {
            var allChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
            var result = {
                char: null,
                width: 0
            };
            for (var i = 0; i < allChars.length; i++) {
                var char = allChars.substr(i, 1);
                var width = this.computeFieldWidth(char);
                if (width > result.width) {
                    result = {
                        char: char,
                        width: width
                    };
                }
            }
            return result;
        };
        _this.enteredText = "";
        _this.correctAnswers = new Array();
        _this.incorrectAnswers = new Array();
        _this.choices = new Array();
        _this.type = cloze_element_1.ClozeElementType.Blank;
        _this.id = id;
        return _this;
    }
    /**
    * Call this method when all incorrect answers have been added.
    */
    Blank.prototype.finishInitialization = function () {
        if (this.settings.clozeType === enums_1.ClozeType.Select && this.settings.selectAlternatives === enums_1.SelectAlternatives.Alternatives) {
            this.loadChoicesFromOwnAlternatives();
        }
        this.calculateMinTextLength();
        this.updateWidth();
    };
    Blank.prototype.addCorrectAnswer = function (answer) {
        this.correctAnswers.push(answer);
    };
    Blank.prototype.getCorrectAnswers = function () {
        var result = [];
        for (var _i = 0, _a = this.correctAnswers; _i < _a.length; _i++) {
            var answer = _a[_i];
            result = result.concat(answer.alternatives);
        }
        return result;
    };
    Blank.prototype.setHint = function (message) {
        this.hint = message;
        this.hasHint = this.hint.text !== "";
    };
    /**
     * Adds the incorrect answer to the list.
     * @param text - What the user must enter.
     * @param reaction  - What the user gets displayed when he enteres the text.
     */
    Blank.prototype.addIncorrectAnswer = function (text, reaction, showHighlight, highlight) {
        this.incorrectAnswers.push(new answer_1.Answer(text, reaction, showHighlight, highlight, this.settings));
    };
    /**
     * Returns how many characters the input box must have be to allow for all correct answers.
     */
    // TODO: refactor
    Blank.prototype.calculateMinTextLength = function () {
        var answers = new Array();
        for (var _i = 0, _a = this.correctAnswers; _i < _a.length; _i++) {
            var correctAnswer = _a[_i];
            answers.push(helpers_1.getLongestString(correctAnswer.alternatives));
        }
        if (this.settings.clozeType === enums_1.ClozeType.Select) {
            for (var _b = 0, _c = this.incorrectAnswers; _b < _c.length; _b++) {
                var incorrectAnswer = _c[_b];
                answers.push(helpers_1.getLongestString(incorrectAnswer.alternatives));
            }
        }
        var longestAnswer = helpers_1.getLongestString(answers);
        var l = longestAnswer.length;
        this.minTextLength = Math.max(10, l - (l % 10) + 10);
    };
    /**
     * Creates a list of choices from all alternatives provided by
     * the correct and incorrect answers.
     */
    Blank.prototype.loadChoicesFromOwnAlternatives = function () {
        this.choices = new Array();
        for (var _i = 0, _a = this.correctAnswers; _i < _a.length; _i++) {
            var answer = _a[_i];
            for (var _b = 0, _c = answer.alternatives; _b < _c.length; _b++) {
                var alternative = _c[_b];
                this.choices.push(alternative);
            }
        }
        for (var _d = 0, _e = this.incorrectAnswers; _d < _e.length; _d++) {
            var answer = _e[_d];
            for (var _f = 0, _g = answer.alternatives; _f < _g.length; _f++) {
                var alternative = _g[_f];
                this.choices.push(alternative);
            }
        }
        this.choices = helpers_1.shuffleArray(this.choices);
        this.choices.unshift("");
        return this.choices;
    };
    /**
     * Creates a list of choices from all correct answers of the cloze.
     * @param otherBlanks All OTHER blanks in the cloze. (excludes the current one!)
     */
    Blank.prototype.loadChoicesFromOtherBlanks = function (otherBlanks) {
        var ownChoices = new Array();
        for (var _i = 0, _a = this.correctAnswers; _i < _a.length; _i++) {
            var answer = _a[_i];
            for (var _b = 0, _c = answer.alternatives; _b < _c.length; _b++) {
                var alternative = _c[_b];
                ownChoices.push(alternative);
            }
        }
        var otherChoices = new Array();
        for (var _d = 0, otherBlanks_1 = otherBlanks; _d < otherBlanks_1.length; _d++) {
            var otherBlank = otherBlanks_1[_d];
            for (var _e = 0, _f = otherBlank.correctAnswers; _e < _f.length; _e++) {
                var answer = _f[_e];
                for (var _g = 0, _h = answer.alternatives; _g < _h.length; _g++) {
                    var alternative = _h[_g];
                    otherChoices.push(alternative);
                }
            }
        }
        otherChoices = helpers_1.shuffleArray(otherChoices);
        var maxChoices = this.settings.selectAlternativeRestriction;
        if (maxChoices === undefined || maxChoices === 0)
            maxChoices = ownChoices.length + otherChoices.length;
        var leftOverChoices = maxChoices - ownChoices.length;
        for (var x = 0; x < leftOverChoices && x < otherChoices.length; x++) {
            if (ownChoices.indexOf(otherChoices[x]) >= 0) {
                leftOverChoices++;
            }
            else {
                ownChoices.push(otherChoices[x]);
            }
        }
        this.choices = helpers_1.shuffleArray(ownChoices);
        this.choices.unshift("");
        return this.choices;
    };
    /**
    * Clears the blank from all entered text and hides popups.
    */
    Blank.prototype.reset = function () {
        this.enteredText = "";
        this.lastCheckedText = "";
        this.removeTooltip();
        this.setAnswerState(enums_1.MessageType.None);
        this.hasPendingFeedback = false;
    };
    /**
     * Sets the blank to a state in which the correct solution if shown if the user
     * hasn't entered a correct one so far.
     */
    Blank.prototype.showSolution = function () {
        this.evaluateAttempt(true);
        this.removeTooltip();
        if (this.isCorrect)
            return;
        this.enteredText = this.correctAnswers[0].alternatives[0];
        this.setAnswerState(enums_1.MessageType.ShowSolution);
    };
    Blank.prototype.onFocussed = function () {
        if (this.hasPendingFeedback) {
            this.evaluateAttempt(false);
        }
        if (this.settings.clozeType === enums_1.ClozeType.Select) {
            this.setAnswerState(enums_1.MessageType.None);
            this.lastCheckedText = "";
        }
    };
    Blank.prototype.onDisplayFeedback = function () {
        if (this.hasPendingFeedback) {
            this.evaluateAttempt(false);
        }
    };
    Blank.prototype.displayTooltip = function (message, type, surpressTooltip, id) {
        if (!surpressTooltip)
            this.messageService.show(id ? id : this.id, message, this, type);
        else {
            this.hasPendingFeedback = true;
        }
    };
    Blank.prototype.removeTooltip = function () {
        this.messageService.hide();
    };
    Blank.prototype.setTooltipErrorText = function (message, surpressTooltip) {
        if (message.highlightedElement) {
            this.displayTooltip(message.text, enums_1.MessageType.Error, surpressTooltip, message.highlightedElement.id);
        }
        else {
            this.displayTooltip(message.text, enums_1.MessageType.Error, surpressTooltip);
        }
    };
    Blank.prototype.getSpellingMistakeMessage = function (expectedText, enteredText) {
        var message = this.localization.getTextFromLabel(localization_1.LocalizationLabels.typoMessage);
        var diff = jsdiff.diffChars(expectedText, enteredText, { ignoreCase: !this.settings.caseSensitive });
        var mistakeSpan = this.jquery("<span/>", { "class": "spelling-mistake" });
        for (var index = 0; index < diff.length; index++) {
            var part = diff[index];
            var spanClass = '';
            if (part.removed) {
                if (index === diff.length - 1 || !diff[index + 1].added) {
                    part.value = part.value.replace(/./g, "_");
                    spanClass = 'missing-character';
                }
                else {
                    continue;
                }
            }
            if (part.added) {
                spanClass = 'mistaken-character';
            }
            var span = this.jquery("<span/>", { "class": spanClass, "html": part.value.replace(" ", "&nbsp;") });
            mistakeSpan.append(span);
        }
        message = message.replace("@mistake", this.jquery("<span/>").append(mistakeSpan).html());
        return message;
    };
    /**
     * Checks if the entered text is the correct answer or one of the
     * incorrect ones and gives the user feedback accordingly.
     */
    Blank.prototype.evaluateAttempt = function (surpressTooltips, forceCheck) {
        var _this = this;
        if (!this.hasPendingFeedback && this.lastCheckedText === this.enteredText && !forceCheck)
            return;
        this.lastCheckedText = this.enteredText.toString();
        this.hasPendingFeedback = false;
        this.removeTooltip();
        var exactCorrectMatches = this.correctAnswers.map(function (answer) { return answer.evaluateAttempt(_this.enteredText); }).filter(function (evaluation) { return evaluation.correctness === answer_1.Correctness.ExactMatch; }).sort(function (evaluation) { return evaluation.characterDifferenceCount; });
        var closeCorrectMatches = this.correctAnswers.map(function (answer) { return answer.evaluateAttempt(_this.enteredText); }).filter(function (evaluation) { return evaluation.correctness === answer_1.Correctness.CloseMatch; }).sort(function (evaluation) { return evaluation.characterDifferenceCount; });
        var exactIncorrectMatches = this.incorrectAnswers.map(function (answer) { return answer.evaluateAttempt(_this.enteredText); }).filter(function (evaluation) { return evaluation.correctness === answer_1.Correctness.ExactMatch; }).sort(function (evaluation) { return evaluation.characterDifferenceCount; });
        var closeIncorrectMatches = this.incorrectAnswers.map(function (answer) { return answer.evaluateAttempt(_this.enteredText); }).filter(function (evaluation) { return evaluation.correctness === answer_1.Correctness.CloseMatch; }).sort(function (evaluation) { return evaluation.characterDifferenceCount; });
        if (exactCorrectMatches.length > 0) {
            this.setAnswerState(enums_1.MessageType.Correct);
            if (!this.settings.caseSensitive) {
                this.enteredText = exactCorrectMatches[0].usedAlternative;
            }
            return;
        }
        if (exactIncorrectMatches.length > 0) {
            this.setAnswerState(enums_1.MessageType.Error);
            this.showErrorTooltip(exactIncorrectMatches[0].usedAnswer, surpressTooltips);
            return;
        }
        if (closeCorrectMatches.length > 0) {
            if (this.settings.warnSpellingErrors) {
                this.displayTooltip(this.getSpellingMistakeMessage(closeCorrectMatches[0].usedAlternative, this.enteredText), enums_1.MessageType.Retry, surpressTooltips);
                this.setAnswerState(enums_1.MessageType.Retry);
                return;
            }
            if (this.settings.acceptSpellingErrors) {
                this.setAnswerState(enums_1.MessageType.Correct);
                this.enteredText = closeCorrectMatches[0].usedAlternative;
                return;
            }
        }
        if (closeIncorrectMatches.length > 0) {
            this.setAnswerState(enums_1.MessageType.Error);
            this.showErrorTooltip(closeIncorrectMatches[0].usedAnswer, surpressTooltips);
            return;
        }
        var alwaysApplyingAnswers = this.incorrectAnswers.filter(function (a) { return a.appliesAlways; });
        if (alwaysApplyingAnswers && alwaysApplyingAnswers.length > 0) {
            this.showErrorTooltip(alwaysApplyingAnswers[0], surpressTooltips);
        }
        this.setAnswerState(enums_1.MessageType.Error);
    };
    Blank.prototype.onTyped = function () {
        this.setAnswerState(enums_1.MessageType.None);
        this.lastCheckedText = "";
        this.removeTooltip();
        this.updateWidth();
    };
    Blank.prototype.lostFocus = function () {
        if (this.messageService.isActive(this)) {
            this.messageService.hide();
        }
    };
    Blank.prototype.updateWidth = function () {
        var _this = this;
        if (this.settings.clozeType === enums_1.ClozeType.Select) {
            return; // Only relevant for input fields
        }
        clearTimeout(this.updateWidthTimeout);
        this.updateWidthTimeout = setTimeout(function () {
            _this.inputDOM = _this.inputDOM || document.querySelector("#" + _this.id);
            if (!_this.inputDOM) {
                return;
            }
            _this.widestChar = _this.widestChar || _this.computeWidestChar();
            var width = Math.max(_this.placeholders * _this.widestChar.width, _this.computeFieldWidth());
            _this.inputDOM.style.width = width + "px";
        }, 0);
    };
    /**
     * Compute width of input field (for given text).
     * @param {string} [text=''] Text to set for field.
     * @return {number} Computed width.
     */
    Blank.prototype.computeFieldWidth = function (text) {
        if (text === void 0) { text = ''; }
        this.inputDOM = this.inputDOM || document.querySelector("#" + this.id);
        if (!this.inputDOM) {
            return;
        }
        var tmp = document.createElement('div');
        tmp.innerText = text || this.enteredText;
        tmp.classList.add('h5p-advanced-blanks-tmp-field');
        this.style = this.style || getComputedStyle(this.inputDOM);
        tmp.style.fontSize = this.style.getPropertyValue('font-size');
        tmp.style.fontFamily = this.style.getPropertyValue('font-family');
        tmp.style.padding = this.style.getPropertyValue('padding');
        this.inputDOM.parentNode.appendChild(tmp);
        var width = tmp.getBoundingClientRect().width -
            parseInt(this.style.getPropertyValue('padding-left')) -
            parseInt(this.style.getPropertyValue('padding-right'));
        tmp.parentNode.removeChild(tmp);
        return width;
    };
    /**
     * Sets the boolean properties isCorrect, is Error and isRetry according to thepassed  messageType.
     * @param messageType
     */
    Blank.prototype.setAnswerState = function (messageType) {
        this.isCorrect = false;
        this.isError = false;
        this.isRetry = false;
        this.isShowingSolution = false;
        switch (messageType) {
            case enums_1.MessageType.Correct:
                this.isCorrect = true;
                break;
            case enums_1.MessageType.Error:
                this.isError = true;
                break;
            case enums_1.MessageType.Retry:
                this.isRetry = true;
                break;
            case enums_1.MessageType.ShowSolution:
                this.isShowingSolution = true;
                break;
        }
    };
    Blank.prototype.showErrorTooltip = function (answer, surpressTooltip) {
        if (answer.message && answer.message.text) {
            this.setTooltipErrorText(answer.message, surpressTooltip);
        }
        if (!surpressTooltip) {
            answer.activateHighlight();
        }
    };
    /**
     * Displays the hint in the tooltip.
     */
    Blank.prototype.showHint = function () {
        if (this.isShowingSolution || this.isCorrect)
            return;
        this.removeTooltip();
        if (this.hint && this.hint.text !== "") {
            this.displayTooltip(this.hint.text, enums_1.MessageType.Retry, false);
            if (this.hint.highlightedElement) {
                this.hint.highlightedElement.isHighlighted = true;
            }
        }
    };
    Blank.prototype.serialize = function () {
        return this.lastCheckedText || this.enteredText;
    };
    Blank.prototype.deserialize = function (data) {
        this.enteredText = data;
    };
    return Blank;
}(cloze_element_1.ClozeElement));
exports.Blank = Blank;


/***/ }),

/***/ "./src/scripts/models/cloze-element.ts":
/*!*********************************************!*\
  !*** ./src/scripts/models/cloze-element.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ClozeElement = exports.ClozeElementType = void 0;
var ClozeElementType;
(function (ClozeElementType) {
    ClozeElementType[ClozeElementType["Blank"] = 0] = "Blank";
    ClozeElementType[ClozeElementType["Highlight"] = 1] = "Highlight";
})(ClozeElementType = exports.ClozeElementType || (exports.ClozeElementType = {}));
var ClozeElement = /** @class */ (function () {
    function ClozeElement() {
    }
    return ClozeElement;
}());
exports.ClozeElement = ClozeElement;


/***/ }),

/***/ "./src/scripts/models/cloze.ts":
/*!*************************************!*\
  !*** ./src/scripts/models/cloze.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Cloze = void 0;
/**
 * Represents the cloze. Instantiate with static createCloze().
 */
var Cloze = /** @class */ (function () {
    function Cloze() {
    }
    Object.defineProperty(Cloze.prototype, "isSolved", {
        /**
         * Returns true if all blanks were entered correctly.
         * @returns boolean
         */
        get: function () {
            return this.blanks.every(function (b) { return b.isCorrect === true; });
        },
        enumerable: false,
        configurable: true
    });
    Cloze.prototype.hideAllHighlights = function () {
        for (var _i = 0, _a = this.highlights; _i < _a.length; _i++) {
            var highlight = _a[_i];
            highlight.isHighlighted = false;
        }
    };
    Cloze.prototype.reset = function () {
        this.hideAllHighlights();
        for (var _i = 0, _a = this.blanks; _i < _a.length; _i++) {
            var blank = _a[_i];
            blank.reset();
        }
    };
    Cloze.prototype.showSolutions = function () {
        for (var _i = 0, _a = this.blanks; _i < _a.length; _i++) {
            var blank = _a[_i];
            blank.showSolution();
        }
        this.hideAllHighlights();
    };
    Cloze.prototype.serialize = function () {
        var cloze = [];
        for (var _i = 0, _a = this.blanks; _i < _a.length; _i++) {
            var blank = _a[_i];
            cloze.push(blank.serialize());
        }
        return cloze;
    };
    Cloze.prototype.deserialize = function (data) {
        for (var index = 0; index < data.length; index++) {
            if (index >= this.blanks.length)
                return;
            var blank = this.blanks[index];
            blank.deserialize(data[index]);
        }
    };
    return Cloze;
}());
exports.Cloze = Cloze;


/***/ }),

/***/ "./src/scripts/models/enums.ts":
/*!*************************************!*\
  !*** ./src/scripts/models/enums.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectAlternatives = exports.ClozeType = exports.MessageType = void 0;
var MessageType;
(function (MessageType) {
    MessageType[MessageType["Error"] = 0] = "Error";
    MessageType[MessageType["Correct"] = 1] = "Correct";
    MessageType[MessageType["Retry"] = 2] = "Retry";
    MessageType[MessageType["ShowSolution"] = 3] = "ShowSolution";
    MessageType[MessageType["None"] = 4] = "None";
})(MessageType = exports.MessageType || (exports.MessageType = {}));
var ClozeType;
(function (ClozeType) {
    ClozeType[ClozeType["Type"] = 0] = "Type";
    ClozeType[ClozeType["Select"] = 1] = "Select";
})(ClozeType = exports.ClozeType || (exports.ClozeType = {}));
var SelectAlternatives;
(function (SelectAlternatives) {
    SelectAlternatives[SelectAlternatives["Alternatives"] = 0] = "Alternatives";
    SelectAlternatives[SelectAlternatives["All"] = 1] = "All";
})(SelectAlternatives = exports.SelectAlternatives || (exports.SelectAlternatives = {}));


/***/ }),

/***/ "./src/scripts/models/highlight.ts":
/*!*****************************************!*\
  !*** ./src/scripts/models/highlight.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Highlight = void 0;
var cloze_element_1 = __webpack_require__(/*! ./cloze-element */ "./src/scripts/models/cloze-element.ts");
/**
 * Represents a highlight in the cloze.
 */
var Highlight = /** @class */ (function (_super) {
    __extends(Highlight, _super);
    function Highlight(text, id) {
        var _this = _super.call(this) || this;
        _this.type = cloze_element_1.ClozeElementType.Highlight;
        _this.text = text;
        _this.id = id;
        _this.isHighlighted = false;
        return _this;
    }
    return Highlight;
}(cloze_element_1.ClozeElement));
exports.Highlight = Highlight;


/***/ }),

/***/ "./src/scripts/models/message.ts":
/*!***************************************!*\
  !*** ./src/scripts/models/message.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
/**
 * Represents a message that the content author has specified to be a reaction
 * to an user's answer.
 */
var Message = /** @class */ (function () {
    function Message(text, showHighlight, relativeHighlightPosition) {
        var _this = this;
        this.text = text;
        this.relativeHighlightPosition = relativeHighlightPosition;
        this.linkHighlight = function (highlightsBefore, highlightsAfter) {
            if (!_this.relativeHighlightPosition)
                return;
            if (_this.relativeHighlightPosition < 0 && (0 - _this.relativeHighlightPosition - 1) < highlightsBefore.length) {
                _this.highlightedElement = highlightsBefore[0 - _this.relativeHighlightPosition - 1];
            }
            else if (_this.relativeHighlightPosition > 0 && (_this.relativeHighlightPosition - 1 < highlightsAfter.length)) {
                _this.highlightedElement = highlightsAfter[_this.relativeHighlightPosition - 1];
            }
        };
        if (!showHighlight)
            this.relativeHighlightPosition = undefined;
    }
    return Message;
}());
exports.Message = Message;


/***/ }),

/***/ "./src/scripts/models/snippet.ts":
/*!***************************************!*\
  !*** ./src/scripts/models/snippet.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Snippet = void 0;
/**
 * A snippet is a text block that is put into placed marked in feedback texts or hints.
 */
var Snippet = /** @class */ (function () {
    /**
     * Constructs the snippet.
     * @param name The name of the snippet that is used when it is referenced in a feedbacktext (without the snippet marker @)
     * @param text The snippet itself (html)
     */
    function Snippet(name, text) {
        this.name = name;
        this.text = text;
    }
    return Snippet;
}());
exports.Snippet = Snippet;


/***/ }),

/***/ "./src/scripts/models/xapi.ts":
/*!************************************!*\
  !*** ./src/scripts/models/xapi.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.XAPIActivityDefinition = void 0;
var XAPIActivityDefinition = /** @class */ (function () {
    function XAPIActivityDefinition() {
    }
    return XAPIActivityDefinition;
}());
exports.XAPIActivityDefinition = XAPIActivityDefinition;


/***/ }),

/***/ "./src/scripts/services/data-repository.ts":
/*!*************************************************!*\
  !*** ./src/scripts/services/data-repository.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.H5PDataRepository = void 0;
var blank_loader_1 = __webpack_require__(/*! ../content-loaders/blank-loader */ "./src/scripts/content-loaders/blank-loader.ts");
var snippet_1 = __webpack_require__(/*! ../models/snippet */ "./src/scripts/models/snippet.ts");
/**
 * Wraps around the h5p config object and provides access to the content.
 */
var H5PDataRepository = /** @class */ (function () {
    function H5PDataRepository(h5pConfigData, settings, localization, jquery, unwrapper) {
        this.h5pConfigData = h5pConfigData;
        this.settings = settings;
        this.localization = localization;
        this.jquery = jquery;
        this.unwrapper = unwrapper;
    }
    /**
     * Returns the blank text of the cloze (as HTML markup).
     */
    H5PDataRepository.prototype.getClozeText = function () {
        return this.h5pConfigData.content.blanksText;
    };
    // TODO: remove or implement
    H5PDataRepository.prototype.getFeedbackText = function () {
        return "";
    };
    H5PDataRepository.prototype.getMedia = function () {
        return this.h5pConfigData.media.type;
    };
    H5PDataRepository.prototype.getTaskDescription = function () {
        return this.h5pConfigData.content.task;
    };
    H5PDataRepository.prototype.getBlanks = function () {
        var blanks = new Array();
        if (!this.h5pConfigData.content.blanksList)
            return blanks;
        var blanksPlaceholders = this.h5pConfigData.content.blanksText
            .match(/(_{3,})/g)
            .map(function (underscores) { return underscores.length; });
        while (blanksPlaceholders.length < this.h5pConfigData.content.blanksList.length) {
            blanksPlaceholders.push(3); // Fill up
        }
        for (var i = 0; i < this.h5pConfigData.content.blanksList.length; i++) {
            var h5pBlank = this.h5pConfigData.content.blanksList[i];
            var correctText = h5pBlank.correctAnswerText;
            if (correctText === "" || correctText === undefined)
                continue;
            var blank = blank_loader_1.BlankLoader.instance.createBlank("advancedblanks-" + this.settings.contentId + "-cloze-" + i, correctText, h5pBlank.hint, h5pBlank.incorrectAnswersList, blanksPlaceholders[i]);
            blank.finishInitialization();
            blanks.push(blank);
        }
        return blanks;
    };
    H5PDataRepository.prototype.getSnippets = function () {
        var snippets = new Array();
        if (!this.h5pConfigData.snippets)
            return snippets;
        for (var i = 0; i < this.h5pConfigData.snippets.length; i++) {
            var raw_snippet = this.h5pConfigData.snippets[i];
            var snippet = new snippet_1.Snippet(raw_snippet.snippetName, this.unwrapper.unwrap(raw_snippet.snippetText));
            snippets.push(snippet);
        }
        return snippets;
    };
    return H5PDataRepository;
}());
exports.H5PDataRepository = H5PDataRepository;


/***/ }),

/***/ "./src/scripts/services/localization.ts":
/*!**********************************************!*\
  !*** ./src/scripts/services/localization.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.H5PLocalization = exports.LocalizationStructures = exports.LocalizationLabels = void 0;
var LocalizationLabels;
(function (LocalizationLabels) {
    LocalizationLabels["showSolutionButton"] = "showSolutions";
    LocalizationLabels["retryButton"] = "tryAgain";
    LocalizationLabels["checkAllButton"] = "checkAnswer";
    LocalizationLabels["notFilledOutWarning"] = "notFilledOut";
    LocalizationLabels["tipButton"] = "tipLabel";
    LocalizationLabels["typoMessage"] = "spellingMistakeWarning";
    LocalizationLabels["scoreBarLabel"] = "scoreBarLabel";
})(LocalizationLabels = exports.LocalizationLabels || (exports.LocalizationLabels = {}));
var LocalizationStructures;
(function (LocalizationStructures) {
    LocalizationStructures["confirmCheck"] = "confirmCheck";
    LocalizationStructures["confirmRetry"] = "confirmRetry";
    LocalizationStructures["overallFeedback"] = "overallFeedback";
})(LocalizationStructures = exports.LocalizationStructures || (exports.LocalizationStructures = {}));
/**
 * Provides localization services.
 */
var H5PLocalization = /** @class */ (function () {
    function H5PLocalization(h5pConfiguration) {
        this.h5pConfiguration = h5pConfiguration;
    }
    /**
     * Returns the localized string that is represented by the identifier.
     * @param  {string} localizableStringIdentifier
     * @returns string
     */
    H5PLocalization.prototype.getText = function (localizableStringIdentifier) {
        return this.h5pConfiguration[localizableStringIdentifier];
    };
    H5PLocalization.prototype.labelToString = function (label) {
        return label.toString();
    };
    /**
     * Returns the localized string for the label.
     * @param  {LocalizationLabels} label
     * @returns string
     */
    H5PLocalization.prototype.getTextFromLabel = function (label) {
        return this.getText(this.labelToString(label));
    };
    H5PLocalization.prototype.getObjectForStructure = function (structure) {
        return this.h5pConfiguration[structure.toString()];
    };
    return H5PLocalization;
}());
exports.H5PLocalization = H5PLocalization;


/***/ }),

/***/ "./src/scripts/services/message-service.ts":
/*!*************************************************!*\
  !*** ./src/scripts/services/message-service.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageService = void 0;
var enums_1 = __webpack_require__(/*! ../models/enums */ "./src/scripts/models/enums.ts");
var MessageService = /** @class */ (function () {
    function MessageService(jQuery) {
        this.jQuery = jQuery;
    }
    MessageService.prototype.show = function (elementId, message, blank, type) {
        if (!type)
            type = enums_1.MessageType.None;
        var elements = this.jQuery("#" + elementId);
        if (elements.length > 0) {
            this.speechBubble = new H5P.JoubelSpeechBubble(elements, message);
            this.associatedBlank = blank;
        }
    };
    MessageService.prototype.hide = function () {
        if (this.speechBubble) {
            try {
                this.speechBubble.remove();
            }
            catch (exception) {
            }
        }
        this.speechBubble = undefined;
        this.associatedBlank = undefined;
    };
    MessageService.prototype.isActive = function (blank) {
        return this.associatedBlank === blank;
    };
    return MessageService;
}());
exports.MessageService = MessageService;


/***/ }),

/***/ "./src/scripts/services/settings.ts":
/*!******************************************!*\
  !*** ./src/scripts/services/settings.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.H5PSettings = void 0;
var enums_1 = __webpack_require__(/*! ../models/enums */ "./src/scripts/models/enums.ts");
var H5PSettings = /** @class */ (function () {
    function H5PSettings(h5pConfigData) {
        this.clozeType = enums_1.ClozeType.Type;
        this.selectAlternatives = enums_1.SelectAlternatives.Alternatives;
        this.selectAlternativeRestriction = 5;
        this.enableRetry = true;
        this.enableSolutionsButton = true;
        this.enableCheckButton = true;
        this.autoCheck = false;
        this.caseSensitive = false;
        this.warnSpellingErrors = true;
        this.acceptSpellingErrors = false;
        this.showSolutionsRequiresInput = true;
        this.confirmCheckDialog = false;
        this.confirmRetryDialog = false;
        this.disableImageZooming = false;
        this.contentId = '';
        if (h5pConfigData.behaviour.mode === 'selection') {
            this.clozeType = enums_1.ClozeType.Select;
        }
        else {
            this.clozeType = enums_1.ClozeType.Type;
        }
        if (h5pConfigData.behaviour.selectAlternatives === 'all') {
            this.selectAlternatives = enums_1.SelectAlternatives.All;
        }
        else if (h5pConfigData.behaviour.selectAlternatives === 'alternatives') {
            this.selectAlternatives = enums_1.SelectAlternatives.Alternatives;
        }
        else {
            this.selectAlternatives = enums_1.SelectAlternatives.All;
        }
        this.selectAlternativeRestriction = h5pConfigData.behaviour.selectAlternativeRestriction;
        this.enableRetry = h5pConfigData.behaviour.enableRetry;
        this.enableSolutionsButton = h5pConfigData.behaviour.enableSolutionsButton;
        this.enableCheckButton = h5pConfigData.behaviour.enableCheckButton;
        this.autoCheck = h5pConfigData.behaviour.autoCheck;
        this.caseSensitive = h5pConfigData.behaviour.caseSensitive;
        this.warnSpellingErrors = h5pConfigData.behaviour.spellingErrorBehaviour === "warn";
        this.acceptSpellingErrors = h5pConfigData.behaviour.spellingErrorBehaviour === "accept";
        this.showSolutionsRequiresInput = h5pConfigData.behaviour.showSolutionsRequiresInput;
        this.confirmCheckDialog = h5pConfigData.behaviour.confirmCheckDialog;
        this.confirmRetryDialog = h5pConfigData.behaviour.confirmRetryDialog;
        this.disableImageZooming = h5pConfigData.media.disableImageZooming;
        this.contentId = h5pConfigData.contentId;
        this.enforceLogic();
    }
    /**
     * This method sets sensible default values for settings hidden with showWhen
     */
    H5PSettings.prototype.enforceLogic = function () {
        if (this.clozeType === enums_1.ClozeType.Type) {
            this.selectAlternatives = enums_1.SelectAlternatives.All;
            this.selectAlternativeRestriction = 0;
        }
        else {
            if (this.selectAlternativeRestriction === enums_1.SelectAlternatives.Alternatives) {
                this.selectAlternativeRestriction = 0;
            }
            this.warnSpellingErrors = false;
            this.acceptSpellingErrors = false;
            this.caseSensitive = false;
        }
    };
    return H5PSettings;
}());
exports.H5PSettings = H5PSettings;


/***/ }),

/***/ "./src/scripts/views/blank.ractive.html":
/*!**********************************************!*\
  !*** ./src/scripts/views/blank.ractive.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span id=\"container{{id}}\" class=\"blank {{#blank.hasPendingFeedback}}has-pending-feedback{{/if}} {{#blank.hasHint}}has-tip{{/if}} {{#blank.isCorrect}}correct{{/if}} {{#blank.isError}}error{{/if}} {{#blank.isRetry}}retry{{/if}} {{#blank.isShowingSolution}}showing-solution{{/if}}\">\n  {{#unless isSelectCloze}}\n    <span class=\"h5p-input-wrapper\">\n      <input id=\"{{blank.id}}\" type=\"text\" value=\"{{blank.enteredText}}\" \n             size=\"{{blank.minTextLength}}\" on-escape=\"@this.fire('closeMessage', blank)\" \n             on-enter=\"@this.fire('checkBlank', blank, 'enter')\" \n             on-blur=\"@this.fire('checkBlank', blank, 'blur')\" \n             on-focus=\"@this.fire('focus', blank)\"\n             on-anykey=\"@this.fire('textTyped', blank)\"\n             {{#(blank.isCorrect || blank.isShowingSolution)}}disabled=\"disabled\"{{/if}}\n             class=\"h5p-text-input\"\n             autocomplete=\"off\"\n             autocapitalize=\"off\"/>\n      {{#blank.hasHint}}\n        <span class=\"h5p-tip-container\">\n          <button on-click=\"@this.fire('showHint', blank)\" {{#(blank.isCorrect || blank.isShowingSolution)}}disabled=\"disabled\" {{/if}}>\n            <span class=\"joubel-tip-container\" title=\"Tip\" aria-label=\"Tip\" aria-expanded=\"true\" role=\"button\" tabindex=\"0\"><span class=\"joubel-icon-tip-normal \"><span class=\"h5p-icon-shadow\"></span><span class=\"h5p-icon-speech-bubble\"></span><span class=\"h5p-icon-info\"></span></span></span>\n          </button>\n        </span>\n        {{/if}}\n    </span>    \n  {{/unless}}\n  {{#if isSelectCloze}}\n      <button class=\"h5p-notification\" on-click=\"@this.fire('displayFeedback', blank)\">\n        &#xf05a;\n      </button>\n      <span class=\"h5p-input-wrapper\">      \n      <select id=\"{{blank.id}}\" type=\"text\" value=\"{{blank.enteredText}}\"\n              on-enter=\"@this.fire('checkBlank', blank, 'enter')\" \n              on-change=\"@this.fire('checkBlank', blank, 'change')\"\n              on-focus=\"@this.fire('focus', blank)\"              \n              {{#(blank.isCorrect || blank.isShowingSolution)}}disabled=\"disabled\"{{/if}} \n              size=\"1\"\n              class=\"h5p-text-input\">\n        {{#each blank.choices}}\n          <option>{{this}}</option>\n        {{/each}}\n      </select>                     \n      {{#blank.hasHint}}\n        <span class=\"h5p-tip-container\">\n          <button on-click=\"@this.fire('showHint', blank)\" {{#(blank.isCorrect || blank.isShowingSolution)}}disabled=\"disabled\"{{/if}}>\n            <span class=\"joubel-tip-container\" title=\"Tip\" aria-label=\"Tip\" aria-expanded=\"true\" role=\"button\" tabindex=\"0\"><span class=\"joubel-icon-tip-normal \"><span class=\"h5p-icon-shadow\"></span><span class=\"h5p-icon-speech-bubble\"></span><span class=\"h5p-icon-info\"></span></span></span>\n          </button>\n        </span>\n      {{/if}}     \n    </span>\n  {{/if}}\n</span>";

/***/ }),

/***/ "./src/scripts/views/highlight.ractive.html":
/*!**************************************************!*\
  !*** ./src/scripts/views/highlight.ractive.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span {{#object.isHighlighted}}class=\"highlighted\"{{/if}} id=\"{{object.id}}\">{{{object.text}}}</span>";

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/src!./style.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./src/styles/style.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGlmZi9kaXN0L2RpZmYuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9lbnRyaWVzL2Rpc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9oZWxwZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvcmFjdGl2ZS1ldmVudHMta2V5cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9hcHAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvY29udGVudC1sb2FkZXJzL2JsYW5rLWxvYWRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9jb250ZW50LWxvYWRlcnMvY2xvemUtbG9hZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NvbnRyb2xsZXJzL2Nsb3plLWNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvaGVscGVycy9leHRlbmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvaGVscGVycy91bndyYXBwZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbW9kZWxzL2Fuc3dlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tb2RlbHMvYmxhbmsudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbW9kZWxzL2Nsb3plLWVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbW9kZWxzL2Nsb3plLnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21vZGVscy9lbnVtcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tb2RlbHMvaGlnaGxpZ2h0LnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21vZGVscy9tZXNzYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21vZGVscy9zbmlwcGV0LnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21vZGVscy94YXBpLnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3NlcnZpY2VzL2RhdGEtcmVwb3NpdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9zZXJ2aWNlcy9sb2NhbGl6YXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc2VydmljZXMvbWVzc2FnZS1zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3NlcnZpY2VzL3NldHRpbmdzLnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3ZpZXdzL2JsYW5rLnJhY3RpdmUuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy92aWV3cy9oaWdobGlnaHQucmFjdGl2ZS5odG1sIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzPzE0MDgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFp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UztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxZQUFZLG9CQUFvQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTzs7O0FBR1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0Es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O0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0EscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsT0FBTztBQUNQOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBDQUEwQzs7QUFFMUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJDQUEyQzs7QUFFM0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxtQkFBbUIsV0FBVztBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLG9CQUFvQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbUJBQW1CLG9CQUFvQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCLDZCQUE2QjtBQUM3Qiw2QkFBNkI7QUFDN0IsK0JBQStCO0FBQy9CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnREFBZ0QsY0FBYzs7QUFFOUQsQ0FBQzs7Ozs7Ozs7Ozs7OztBQzdpRFk7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLHdCQUF3QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixLQUF3QyxHQUFHLHNCQUFpQixHQUFHLFNBQUk7O0FBRW5GO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLHFFQUFxRSxxQkFBcUIsYUFBYTs7QUFFdkc7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxHQUFHOztBQUVIOzs7QUFHQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLDRCQUE0QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxvQkFBb0IsNkJBQTZCO0FBQ2pEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7OztBQzVRQSx5RUFBNkI7QUFDN0IsOEVBQTRDO0FBRTVDLGVBQWU7QUFDZixHQUFHLEdBQUcsR0FBRyxJQUFJLEVBQUUsQ0FBQztBQUNoQixHQUFHLENBQUMsY0FBYyxHQUFHLGFBQWMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ0xwQyxTQUFnQixnQkFBZ0IsQ0FBQyxPQUFpQjtJQUNoRCxPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFJLEVBQUUsT0FBTyxJQUFLLGNBQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQTdDLENBQTZDLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDOUYsQ0FBQztBQUZELDRDQUVDO0FBRUQsU0FBZ0IsWUFBWSxDQUFDLEtBQVk7SUFDdkMsS0FBSyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3pDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUMsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEIsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztLQUNqQjtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQztBQVJELG9DQVFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDWkQsa0VBQWtFO0FBQ2xFLFNBQVMsaUJBQWlCLENBQUMsSUFBYTtJQUN0QyxPQUFPLFVBQUMsSUFBSSxFQUFFLElBQUk7UUFDaEIsU0FBUyxjQUFjLENBQUMsS0FBSztZQUMzQixJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFFekMsSUFBSSxJQUFJLElBQUksS0FBSyxLQUFLLElBQUksRUFBRTtnQkFDMUIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUV2QixJQUFJLENBQUM7b0JBQ0gsSUFBSTtvQkFDSixRQUFRLEVBQUUsS0FBSztpQkFDaEIsQ0FBQyxDQUFDO2FBQ0o7aUJBQ0ksSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxXQUFDLElBQUksUUFBQyxLQUFLLEtBQUssRUFBWCxDQUFXLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUMzRyxJQUFJLENBQUM7b0JBQ0gsSUFBSTtvQkFDSixRQUFRLEVBQUUsS0FBSztpQkFDaEIsQ0FBQyxDQUFDO2FBQ0o7UUFDSCxDQUFDO1FBRUQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFeEQsT0FBTztZQUNMLFFBQVE7Z0JBQ04sSUFBSSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDN0QsQ0FBQztTQUNGLENBQUM7SUFDSixDQUFDLENBQUM7QUFDSixDQUFDO0FBRVksYUFBSyxHQUFHLGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzlCLFdBQUcsR0FBRyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMzQixjQUFNLEdBQUcsaUJBQWlCLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDL0IsYUFBSyxHQUFHLGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBRTlCLGlCQUFTLEdBQUcsaUJBQWlCLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDbEMsa0JBQVUsR0FBRyxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNuQyxpQkFBUyxHQUFHLGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ2xDLGVBQU8sR0FBRyxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUVoQyxjQUFNLEdBQUcsaUJBQWlCLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFDMUMsZ0lBQTZEO0FBQzdELDJIQUFnRjtBQUNoRixvSUFBaUU7QUFDakUsa0hBQXNHO0FBQ3RHLHNHQUE2RDtBQUM3RCwySEFBNEQ7QUFDNUQsdUdBQWdEO0FBQ2hELHNGQUF1RDtBQUN2RCw4RkFBMEM7QUFFMUMsSUFBSyxNQU1KO0FBTkQsV0FBSyxNQUFNO0lBQ1QsNkJBQW1CO0lBQ25CLCtCQUFxQjtJQUNyQiwrQ0FBcUM7SUFDckMsK0JBQXFCO0lBQ3JCLGdFQUFzRDtBQUN4RCxDQUFDLEVBTkksTUFBTSxLQUFOLE1BQU0sUUFNVjtBQUVELElBQU0sMEJBQTBCLEdBQUcsb0NBQW9DLENBQUM7QUFDeEUsSUFBTSxxQkFBcUIsR0FBRyx3Q0FBd0MsQ0FBQztBQUN2RSxJQUFNLGdDQUFnQyxHQUFHLDZDQUE2QyxDQUFDO0FBRXZGO0lBQTRDLGtDQUF1QztJQW1CakY7Ozs7OztPQU1HO0lBQ0gsd0JBQVksTUFBVyxFQUFFLFNBQWlCLEVBQUUsV0FBcUI7UUFBckIsOENBQXFCO1FBQWpFLFlBQ0Usa0JBQU0saUJBQWlCLENBQUMsU0FvQ3pCO1FBakREOztXQUVHO1FBQ0ssY0FBUSxHQUFZLEtBQUssQ0FBQztRQWdEbEM7O1dBRUc7UUFDSyxvQkFBYyxHQUFHLFVBQUMsS0FBYSxFQUFFLFFBQWdCO1lBQ3ZELElBQUksS0FBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDekMsS0FBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUN2QixJQUFJLEtBQUksQ0FBQyxLQUFLLEtBQUssTUFBTSxDQUFDLFFBQVE7b0JBQ2hDLEtBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztnQkFDL0IsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUVwQiw0QkFBNEI7Z0JBQzVCLFVBQVUsQ0FBQztvQkFDVCxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsWUFBWSxFQUFFO3dCQUMzQixHQUFHLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FDN0IsS0FBSSxFQUNKLEtBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQzlCLENBQUM7cUJBQ0g7Z0JBQ0gsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsMEJBQTBCO2FBRXBDO1lBRUQsS0FBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxzQkFBc0IsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUMsQ0FBQztRQU1PLGFBQU8sR0FBRztZQUNoQixJQUFJLEtBQUksQ0FBQyxLQUFLLEtBQUssTUFBTSxDQUFDLFFBQVEsRUFBRTtnQkFDbEMsS0FBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO2dCQUM1QixLQUFJLENBQUMsc0JBQXNCLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3pDO1lBQ0QsS0FBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUMvQixLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUN2QixDQUFDO1FBRU8sc0JBQWdCLEdBQUc7WUFDekIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsRUFBRSxTQUFTLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3JGLENBQUM7UUFFTyxtQkFBYSxHQUFHO1lBQ3RCLEtBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7WUFFL0IsSUFBSSxLQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixFQUFFO2dCQUN6QyxLQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQzthQUM1QjtRQUNILENBQUM7UUFFRDs7O1dBR0c7UUFDSCx5QkFBbUIsR0FBRztZQUNwQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQztZQUUzRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLEVBQUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLENBQUMsQ0FBQztZQUMzRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7WUFFdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFakM7Ozs7ZUFJRztZQUNILElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUMxQyxDQUFDO1FBcUhEOzs7O1dBSUc7UUFDSyxtQkFBYSxHQUFHLFVBQUMsTUFBZ0I7WUFBaEIsb0NBQWdCO1lBQ3ZDLEtBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLENBQUM7WUFFaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7Z0JBQ3BCLEtBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO2FBQzVCO1lBRUQsS0FBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3ZCLElBQUksS0FBSSxDQUFDLEtBQUssS0FBSyxNQUFNLENBQUMsUUFBUTtnQkFDaEMsS0FBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO1lBRS9CLEtBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUVwQixLQUFJLENBQUMsc0JBQXNCLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFDLENBQUM7UUFFTyxxQkFBZSxHQUFHO1lBQ3hCLElBQUksS0FBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUU7Z0JBQ2pDLEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ25DO1FBQ0gsQ0FBQztRQUVPLG9CQUFjLEdBQUcsVUFBQyxLQUFjO1lBQ3RDLElBQUksQ0FBQyxLQUFLLElBQUksS0FBSSxDQUFDLFFBQVEsQ0FBQywwQkFBMEIsSUFBSSxDQUFDLEtBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQ2hHLCtDQUErQztnQkFDL0MsS0FBSSxDQUFDLHFCQUFxQixDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsaUNBQWtCLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO2dCQUN2RyxLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsaUNBQWtCLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO2dCQUV0RixPQUFPO2FBQ1I7WUFFRCxLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQzFDLEtBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDckMsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3RCLENBQUM7UUFFTyxhQUFPLEdBQUc7WUFDaEIsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3RCLEtBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDN0IsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDdEIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkMsQ0FBQztRQXVETSxxQkFBZSxHQUFHO1lBQ3ZCLElBQU0sS0FBSyxHQUFHO2dCQUNaLEtBQUssRUFBRSxLQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsRUFBRTtnQkFDNUMsS0FBSyxFQUFFLEtBQUksQ0FBQyxLQUFLO2FBQ2xCLENBQUM7WUFFRixPQUFPLEtBQUssQ0FBQztRQUNmLENBQUMsQ0FBQztRQUVGOztrREFFMEM7UUFDbkMsb0JBQWMsR0FBRztZQUN0QixPQUFPLEtBQUksQ0FBQyxRQUFRLElBQUksS0FBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEtBQUssQ0FBQyxDQUFDO1FBQzlELENBQUM7UUFFTSxjQUFRLEdBQUc7WUFDaEIsT0FBTyxLQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQztRQUMzQyxDQUFDO1FBRU0saUJBQVcsR0FBRztZQUNuQixPQUFPLEtBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDO1FBQ3ZDLENBQUM7UUFFTSxtQkFBYSxHQUFHO1lBQ3JCLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUNwRCxDQUFDO1FBRU0sZUFBUyxHQUFHO1lBQ2pCLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNqQixDQUFDO1FBRUQ7O1dBRUc7UUFHSDs7V0FFRztRQUNJLHlCQUFtQixHQUFHO1lBQzNCLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3JCLElBQUksU0FBUyxHQUFHLEtBQUksQ0FBQyx1QkFBdUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN6RCxLQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDbEMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ2xDLEtBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDMUIsQ0FBQyxDQUFDO1FBRUY7Ozs7O1dBS0c7UUFDSSxpQkFBVyxHQUFHO1lBQ25CLElBQUksU0FBUyxHQUFHLEtBQUksQ0FBQyx1QkFBdUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN6RCxLQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDbEMsS0FBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ2xDLE9BQU87Z0JBQ0wsU0FBUyxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUzthQUNwQyxDQUFDO1FBQ0osQ0FBQyxDQUFDO1FBRUY7OztXQUdHO1FBQ0ksdUJBQWlCLEdBQUc7WUFDekIsSUFBTSxVQUFVLEdBQUcsSUFBSSw2QkFBc0IsRUFBRSxDQUFDO1lBRWhELFVBQVUsQ0FBQyxXQUFXLEdBQUc7Z0JBQ3ZCLE9BQU8sRUFBRSxLQUFLLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLE1BQU0sR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDO2FBQ2pJLENBQUM7WUFFRixVQUFVLENBQUMsSUFBSSxHQUFHLHFEQUFxRCxDQUFDO1lBQ3hFLFVBQVUsQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDLENBQUMsdUhBQXVIO1lBRS9KLElBQU0sNkJBQTZCLEdBQUcsZ0JBQWdCLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFDO1lBRTNGLElBQU0saUJBQWlCLEdBQUcsS0FBSSxDQUFDLGVBQWUsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1lBRXRFLHFGQUFxRjtZQUNyRixJQUFNLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxVQUFDLE1BQU0sRUFBRSxJQUFJO2dCQUM5RCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNyQixPQUFPLE1BQU0sQ0FBQztZQUNoQixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25CLFVBQVUsQ0FBQyx1QkFBdUIsR0FBRyxDQUFDLEtBQUcsNkJBQTZCLEdBQUcsaUJBQW1CLENBQUMsQ0FBQztZQUU5Riw2RkFBNkY7WUFDN0YsbUZBQW1GO1lBQ25GLFVBQVUsQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUM7WUFDcEQsVUFBVSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDO1lBQzNFLFVBQVUsQ0FBQyxVQUFVLENBQUMsMEJBQTBCLENBQUMsR0FBRyxpQkFBaUIsQ0FBQztZQUV0RSxPQUFPLFVBQVUsQ0FBQztRQUNwQixDQUFDLENBQUM7UUFFRjs7V0FFRztRQUNJLHVCQUFpQixHQUFHLFVBQUMsU0FBUztZQUNuQyxJQUFJLFVBQVUsR0FBRyxTQUFTLENBQUMseUJBQXlCLENBQUMsQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUMvRSxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLEtBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUM7WUFFL0QsZ0VBQWdFO1lBQ2hFLElBQUksS0FBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLEVBQUU7Z0JBQ3hDLElBQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pFLE9BQU8sQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUM7Z0JBQzlDLE9BQU8sQ0FBQyxVQUFVLENBQUMsZ0NBQWdDLENBQUMsR0FBRyxPQUFPLENBQUM7YUFDaEU7UUFDSCxDQUFDLENBQUM7UUFFRjs7Ozs7V0FLRztRQUNJLHVCQUFpQixHQUFHLFVBQUMsU0FBUztZQUNuQyxTQUFTLENBQUMsZUFBZSxDQUFDLEtBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLEtBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLEtBQUksQ0FBQyxDQUFDO1lBQ2xHLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsS0FBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3BFLENBQUMsQ0FBQztRQUVGOzs7V0FHRztRQUNJLHFCQUFlLEdBQUc7WUFDdkIsSUFBSSxZQUFZLEdBQUcsQ0FBQyxLQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDbEQsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xDLENBQUMsQ0FBQztRQXhjQSxxRkFBcUY7UUFDckYsTUFBTSxHQUFHLGVBQU0sQ0FBQztZQUNkLE9BQU8sRUFBRTtnQkFDUCxVQUFVLEVBQUUsRUFBRTthQUNmO1lBQ0QsU0FBUyxFQUFFO2dCQUNULElBQUksRUFBRSxRQUFRO2dCQUNkLGtCQUFrQixFQUFFLGNBQWM7YUFDbkM7WUFDRCxTQUFTLEVBQUUsU0FBUztTQUNyQixFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRVgsS0FBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO1FBQ3pCLEtBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBRTNCLElBQUksU0FBUyxHQUFHLElBQUkscUJBQVMsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFM0MsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLHNCQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEMsS0FBSSxDQUFDLFlBQVksR0FBRyxJQUFJLDhCQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEQsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLG1DQUFpQixDQUFDLE1BQU0sRUFBRSxLQUFJLENBQUMsUUFBUSxFQUFFLEtBQUksQ0FBQyxZQUFZLEVBQWdCLEtBQUksQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDeEgsS0FBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLGdDQUFjLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RELDBCQUFXLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSSxDQUFDLFlBQVksRUFBRSxLQUFJLENBQUMsTUFBTSxFQUFFLEtBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUUzRixLQUFJLENBQUMsZUFBZSxHQUFHLElBQUksa0NBQWUsQ0FBQyxLQUFJLENBQUMsVUFBVSxFQUFFLEtBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSSxDQUFDLFlBQVksRUFBRSxLQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFbkgsS0FBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLEdBQUcsS0FBSSxDQUFDLGNBQWMsQ0FBQztRQUMxRCxLQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsR0FBRyxLQUFJLENBQUMsUUFBUSxDQUFDO1FBQzlDLEtBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUM7UUFDeEQsS0FBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQztRQUM1QyxLQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixHQUFHLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUU5RCxLQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsV0FBVyxJQUFJLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQzlELFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUMzQixFQUFFLENBQUM7O0lBQ1IsQ0FBQztJQTRCTyxpQ0FBUSxHQUFoQjtJQUVBLENBQUM7SUE2Q0Q7O09BRUc7SUFDSyx3Q0FBZSxHQUF2QjtRQUNFLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsdUJBQXVCLENBQUMsRUFBRTtZQUN4RSxPQUFPLENBQUMsMENBQTBDO1NBQ25EO1FBRUQsd0NBQXdDO1FBQ3hDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUV6QyxpREFBaUQ7UUFDakQsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBRXhFLDBDQUEwQztRQUMxQyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUVuRSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNuRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFFeEQsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLE1BQU0sQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxNQUFNLENBQUMsUUFBUSxFQUFFO2dCQUNwRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7YUFDdEI7aUJBQ0ksSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBQztnQkFDOUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUMzQjtZQUVELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUM7WUFDakQsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN6QztRQUVELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0lBQzFCLENBQUM7SUFFRDs7O09BR0c7SUFDSyx3Q0FBZSxHQUF2QjtRQUNFLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3JGLElBQUksaUJBQWlCLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBRTNELDZDQUE2QztRQUM3QyxJQUFJLFVBQVUsQ0FBQztRQUNmLElBQUksaUJBQWlCLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNsQywrQkFBK0I7WUFDL0IsVUFBVSxHQUFHLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3ZDO2FBQ0ksSUFBSSxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUM5QixVQUFVLEdBQUcsUUFBUSxDQUFDO1NBQ3ZCO2FBQ0k7WUFDSCxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDekM7UUFFRCxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDO0lBRU8sc0NBQWEsR0FBckI7UUFDRSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTztZQUMxQixPQUFPO1FBRVQsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkMsSUFBSSxJQUFJLEtBQUssV0FBVyxFQUFFO1lBQ3hCLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO29CQUNwQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFtQjtvQkFDdEQsR0FBRyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRztpQkFDdEIsQ0FBQyxDQUFDO2FBQ0o7U0FDRjthQUNJLElBQUksSUFBSSxLQUFLLFdBQVcsRUFBRTtZQUM3QixJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFO2dCQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3RCO1NBQ0Y7SUFDSCxDQUFDO0lBRU8sd0NBQWUsR0FBdkI7UUFBQSxpQkFrQ0M7UUFqQ0MsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXhDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUM1QixzQkFBc0I7WUFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxpQ0FBa0IsQ0FBQyxjQUFjLENBQUMsRUFDbEc7Z0JBQ0UsS0FBSSxDQUFDLGFBQWEsQ0FBQyxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1lBQ3ZDLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFO2dCQUNiLGtCQUFrQixFQUFFO29CQUNsQixNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0I7b0JBQ3hDLElBQUksRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLHFCQUFxQixDQUFDLHFDQUFzQixDQUFDLFlBQVksQ0FBQztvQkFDbEYsUUFBUSxFQUFFLElBQUk7b0JBQ2QsY0FBYyxFQUFFLFVBQVU7aUJBQzNCO2FBQ0YsQ0FBQyxDQUFDO1NBQ0o7UUFFRCx1QkFBdUI7UUFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxpQ0FBa0IsQ0FBQyxrQkFBa0IsQ0FBQyxFQUN2RyxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUU1RCxtQkFBbUI7UUFDbkIsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsS0FBSyxJQUFJLEVBQUU7WUFDdEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxpQ0FBa0IsQ0FBQyxXQUFXLENBQUMsRUFDNUYsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFO2dCQUN4QixrQkFBa0IsRUFBRTtvQkFDbEIsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsa0JBQWtCO29CQUN4QyxJQUFJLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxxQkFBcUIsQ0FBQyxxQ0FBc0IsQ0FBQyxZQUFZLENBQUM7b0JBQ2xGLFFBQVEsRUFBRSxJQUFJO29CQUNkLGNBQWMsRUFBRSxVQUFVO2lCQUMzQjthQUNGLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQWtETyxxQ0FBWSxHQUFwQjtRQUNFLElBQUksU0FBUyxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxxQkFBcUIsQ0FBQyxxQ0FBc0IsQ0FBQyxlQUFlLENBQUMsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaFQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxpQ0FBa0IsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQ3RLLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ssb0NBQVcsR0FBbkIsVUFBb0IsS0FBYTtRQUMvQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFbkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsRUFBRSxTQUFTLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3JGLENBQUM7SUFFTywrQ0FBc0IsR0FBOUIsVUFBK0IsS0FBYTtRQUMxQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMscUJBQXFCLEVBQUU7WUFDdkMsSUFBSSxDQUFDLENBQUMsS0FBSyxLQUFLLE1BQU0sQ0FBQyxRQUFRLENBQUM7bUJBQzNCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLElBQUksS0FBSyxLQUFLLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQzttQkFDdEQsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsMEJBQTBCLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO2dCQUN6RixJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2FBQ2xDO2lCQUNJO2dCQUNILElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUM7YUFDbEM7U0FDRjtRQUVELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLElBQUksQ0FBQyxLQUFLLEtBQUssTUFBTSxDQUFDLFFBQVEsSUFBSSxLQUFLLEtBQUssTUFBTSxDQUFDLFFBQVEsSUFBSSxLQUFLLEtBQUssTUFBTSxDQUFDLGdCQUFnQixDQUFDLEVBQUU7WUFDOUgsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUM5QjthQUNJO1lBQ0gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUM5QjtRQUdELElBQUksS0FBSyxLQUFLLE1BQU0sQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRTtZQUMvRCxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQ2pDO2FBQ0k7WUFDSCxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQ2pDO1FBRUQsSUFBSSxLQUFLLEtBQUssTUFBTSxDQUFDLHdCQUF3QixFQUFFO1lBQzdDLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQ2xDO1FBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBc0lILHFCQUFDO0FBQUQsQ0FBQyxDQXRlNEMsR0FBRyxDQUFDLFFBQWtDLEdBc2VsRjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxZkQsNkZBQTBDO0FBQzFDLDBGQUF3QztBQUd4QyxnR0FBNEM7QUFHNUM7SUFFRSxxQkFBNEIsUUFBbUIsRUFBVSxZQUE2QixFQUFVLE1BQW9CLEVBQVUsY0FBOEI7UUFBaEksYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFpQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQWM7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFBSSxDQUFDO0lBR25KLHNCQUFVLEdBQXhCLFVBQXlCLFFBQW1CLEVBQUUsWUFBNkIsRUFBRSxNQUFvQixFQUFFLGNBQThCO1FBQy9ILElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxXQUFXLENBQUMsUUFBUSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDakYsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxzQkFBa0IsdUJBQVE7YUFBMUI7WUFDRSxJQUFJLElBQUksQ0FBQyxTQUFTO2dCQUNoQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7WUFFeEIsTUFBTSw2Q0FBNkMsQ0FBQztRQUN0RCxDQUFDOzs7T0FBQTtJQUVPLGdDQUFVLEdBQWxCLFVBQW1CLElBQVk7UUFDN0IsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVNLGlDQUFXLEdBQWxCLFVBQW1CLEVBQVUsRUFBRSxXQUFtQixFQUFFLFFBQWdCLEVBQUUsZ0JBQXVCLEVBQUUsWUFBb0I7UUFDakgsSUFBSSxLQUFLLEdBQUcsSUFBSSxhQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUFFLEVBQUUsWUFBWSxDQUFDO1FBQzNHLElBQUksV0FBVyxFQUFFO1lBQ2YsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDM0MsS0FBSyxDQUFDLGdCQUFnQixDQUFDLElBQUksZUFBTSxDQUFDLFdBQVcsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztTQUM5RTtRQUNELEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxpQkFBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFL0QsSUFBSSxnQkFBZ0IsRUFBRTtZQUNwQixLQUErQixVQUFnQixFQUFoQixxQ0FBZ0IsRUFBaEIsOEJBQWdCLEVBQWhCLElBQWdCLEVBQUU7Z0JBQTVDLElBQUksa0JBQWtCO2dCQUN6QixLQUFLLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLGtCQUFrQixDQUFDLHVCQUF1QixFQUFFLGtCQUFrQixDQUFDLGFBQWEsRUFBRSxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUMvTDtTQUNGO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRU0scUNBQWUsR0FBdEIsVUFBdUIsS0FBWSxFQUFFLFFBQW1CO1FBQXhELGlCQUlDO1FBSEMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDO2FBQ2hELE9BQU8sQ0FBQyxnQkFBTSxJQUFJLGFBQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsRUFBL0UsQ0FBK0UsQ0FBQyxDQUFDO1FBQ3RHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBRU8sMkNBQXFCLEdBQTdCLFVBQThCLElBQVksRUFBRSxRQUFtQjtRQUM3RCxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksS0FBSyxTQUFTO1lBQzdCLE9BQU8sRUFBRSxDQUFDO1FBRVosSUFBRyxDQUFDLFFBQVE7WUFDVixPQUFPLElBQUksQ0FBQztRQUVkLEtBQW9CLFVBQVEsRUFBUixxQkFBUSxFQUFSLHNCQUFRLEVBQVIsSUFBUSxFQUFFO1lBQXpCLElBQUksT0FBTztZQUNkLElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxTQUFTLElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxFQUFFLElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxTQUFTLElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxFQUFFO2dCQUN4RyxTQUFTO1lBQ1gsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3ZEO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLDZDQUF1QixHQUE5QixVQUErQixLQUFZLEVBQUUsZ0JBQTZCLEVBQUUsZUFBNEI7UUFDdEcsS0FBbUIsVUFBb0IsRUFBcEIsVUFBSyxDQUFDLGNBQWMsRUFBcEIsY0FBb0IsRUFBcEIsSUFBb0IsRUFBRTtZQUFwQyxJQUFJLE1BQU07WUFDYixNQUFNLENBQUMsdUJBQXVCLENBQUMsZ0JBQWdCLEVBQUUsZUFBZSxDQUFDLENBQUM7U0FDbkU7UUFFRCxLQUFtQixVQUFzQixFQUF0QixVQUFLLENBQUMsZ0JBQWdCLEVBQXRCLGNBQXNCLEVBQXRCLElBQXNCLEVBQUU7WUFBdEMsSUFBSSxNQUFNO1lBQ2IsTUFBTSxDQUFDLHVCQUF1QixDQUFDLGdCQUFnQixFQUFFLGVBQWUsQ0FBQyxDQUFDO1NBQ25FO1FBRUQsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVILGtCQUFDO0FBQUQsQ0FBQztBQS9FWSxrQ0FBVzs7Ozs7Ozs7Ozs7Ozs7OztBQ1R4QixnSEFBNkM7QUFDN0Msa0hBQXlFO0FBRXpFLHNHQUFnRDtBQUNoRCwwRkFBd0M7QUFFeEM7O0dBRUc7QUFDSDtJQUFBO0lBdUhBLENBQUM7SUFwSEM7Ozs7T0FJRztJQUNXLHVCQUFXLEdBQXpCLFVBQTBCLElBQVksRUFBRSxNQUFlO1FBQ3JELElBQUksc0JBQXNCLEdBQW1CLElBQUksS0FBSyxFQUFFLENBQUM7UUFDekQsSUFBSSxrQkFBa0IsR0FBZ0IsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUNsRCxJQUFJLGVBQWUsR0FBWSxJQUFJLEtBQUssRUFBRSxDQUFDO1FBRTNDLElBQUksR0FBRyxXQUFXLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFaEQsSUFBSSxnQkFBZ0IsR0FBRyxXQUFXLENBQUMsb0JBQW9CLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3RFLElBQUksR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7UUFDN0Isc0JBQXNCLEdBQUcsZ0JBQWdCLENBQUMsc0JBQXNCLENBQUM7UUFDakUsa0JBQWtCLEdBQUcsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUM7UUFDekQsZUFBZSxHQUFHLGdCQUFnQixDQUFDLGVBQWUsQ0FBQztRQUVuRCxXQUFXLENBQUMscUJBQXFCLENBQUMsc0JBQXNCLEVBQUUsa0JBQWtCLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFFL0YsSUFBSSxLQUFLLEdBQUcsSUFBSSxhQUFLLEVBQUUsQ0FBQztRQUN4QixLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNsQixLQUFLLENBQUMsTUFBTSxHQUFHLGVBQWUsQ0FBQztRQUMvQixLQUFLLENBQUMsVUFBVSxHQUFHLGtCQUFrQixDQUFDO1FBRXRDLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVBOzs7Ozs7Ozs7TUFTRTtJQUNZLGdDQUFvQixHQUFuQyxVQUFvQyxJQUFZLEVBQUUsTUFBZTtRQUMvRCxJQUFJLHNCQUFzQixHQUFtQixJQUFJLEtBQUssRUFBRSxDQUFDO1FBQ3pELElBQUksa0JBQWtCLEdBQWdCLElBQUksS0FBSyxFQUFFLENBQUM7UUFDbEQsSUFBSSxlQUFlLEdBQVksSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUUzQyxJQUFJLHFCQUFxQixHQUFHLGlCQUFpQixDQUFDO1FBQzlDLElBQUksZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLElBQUksWUFBWSxHQUFHLENBQUMsQ0FBQztRQUVyQix5RUFBeUU7UUFDekUsR0FBRztZQUNELElBQUksa0JBQWtCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQzNELElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFFckUsSUFBSSxrQkFBa0IsSUFBSSxDQUFDLENBQUMsa0JBQWtCLENBQUMsS0FBSyxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQy9GLHFDQUFxQztnQkFDckMsSUFBSSxTQUFTLEdBQUcsSUFBSSxxQkFBUyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxFQUFFLGVBQWEsZ0JBQWtCLENBQUMsQ0FBQztnQkFDdEYsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUNuQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3ZDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLHFCQUFxQixFQUFFLG1DQUFpQyxnQkFBZ0IsY0FBVyxDQUFDLENBQUM7Z0JBQ3pHLGdCQUFnQixFQUFFLENBQUM7YUFDcEI7aUJBQU0sSUFBSSxjQUFjLElBQUksQ0FBQyxFQUFFO2dCQUM5QixpQ0FBaUM7Z0JBQ2pDLElBQUksWUFBWSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUU7b0JBQ2pDLHNJQUFzSTtvQkFDdEksSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLHFCQUFxQixFQUFFLGVBQWUsQ0FBQyxDQUFDO2lCQUN6RTtxQkFDSTtvQkFDSCxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQ2pDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQzVCLHNCQUFzQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDbkMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLHFCQUFxQixFQUFFLHlCQUF1QixLQUFLLENBQUMsRUFBRSxjQUFXLENBQUMsQ0FBQztvQkFDbkcsWUFBWSxFQUFFLENBQUM7aUJBQ2hCO2FBQ0Y7U0FDRixRQUNNLGtCQUFrQixJQUFJLENBQUMsY0FBYyxJQUFJLENBQUMsQ0FBQyxFQUFFO1FBRXBELE9BQU87WUFDTCxJQUFJLEVBQUUsSUFBSTtZQUNWLHNCQUFzQixFQUFFLHNCQUFzQjtZQUM5QyxrQkFBa0IsRUFBRSxrQkFBa0I7WUFDdEMsZUFBZSxFQUFFLGVBQWU7U0FDakMsQ0FBQztJQUNKLENBQUM7SUFFRDs7OztPQUlHO0lBQ1ksa0NBQXNCLEdBQXJDLFVBQXNDLElBQVk7UUFDaEQsSUFBSSxtQkFBbUIsR0FBRyxRQUFRLENBQUM7UUFDbkMsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLEVBQUUsV0FBVyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDNUUsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUE7Ozs7O01BS0U7SUFDWSxpQ0FBcUIsR0FBcEMsVUFBcUMsc0JBQXNDLEVBQUUsa0JBQStCLEVBQUUsZUFBd0I7UUFDcEksS0FBa0IsVUFBZSxFQUFmLG1DQUFlLEVBQWYsNkJBQWUsRUFBZixJQUFlLEVBQUU7WUFBOUIsSUFBSSxLQUFLO1lBQ1osSUFBSSxxQkFBcUIsR0FBRyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbEUsSUFBSSxxQkFBcUIsR0FBRyxzQkFBc0I7aUJBQy9DLEtBQUssQ0FBQyxDQUFDLEVBQUUscUJBQXFCLENBQUM7aUJBQy9CLE1BQU0sQ0FBQyxXQUFDLElBQUksUUFBQyxDQUFDLElBQUksS0FBSyxnQ0FBZ0IsQ0FBQyxTQUFTLEVBQXJDLENBQXFDLENBQUM7aUJBQ2xELEdBQUcsQ0FBQyxXQUFDLElBQUksUUFBYyxFQUFkLENBQWMsQ0FBQztpQkFDeEIsT0FBTyxFQUFFLENBQUM7WUFDYixJQUFJLG9CQUFvQixHQUFHLHNCQUFzQjtpQkFDOUMsS0FBSyxDQUFDLHFCQUFxQixHQUFHLENBQUMsQ0FBQztpQkFDaEMsTUFBTSxDQUFDLFdBQUMsSUFBSSxRQUFDLENBQUMsSUFBSSxLQUFLLGdDQUFnQixDQUFDLFNBQVMsRUFBckMsQ0FBcUMsQ0FBQztpQkFDbEQsR0FBRyxDQUFDLFdBQUMsSUFBSSxRQUFjLEVBQWQsQ0FBYyxDQUFDLENBQUM7WUFDNUIsMEJBQVcsQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsS0FBSyxFQUFFLHFCQUFxQixFQUFFLG9CQUFvQixDQUFDLENBQUM7U0FDbEc7SUFDSCxDQUFDO0lBckhjLGlDQUFxQixHQUFHLEtBQUssQ0FBQztJQXNIL0Msa0JBQUM7Q0FBQTtBQXZIWSxrQ0FBVzs7Ozs7Ozs7Ozs7Ozs7OztBQ1J4QixpSUFBOEQ7QUFDOUQsaUlBQThEO0FBSzlELDBGQUFnRTtBQUdoRSw2RkFBK0M7QUFFL0MscUhBQW1FO0FBc0JuRTtJQW1FRSx5QkFBb0IsVUFBMkIsRUFBVSxRQUFtQixFQUFVLFlBQTZCLEVBQVUsY0FBOEI7UUFBM0osaUJBQ0M7UUFEbUIsZUFBVSxHQUFWLFVBQVUsQ0FBaUI7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWlCO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBdkQzSiw0REFBNEQ7UUFDcEQsc0JBQWlCLEdBQXNDLEVBQUUsQ0FBQztRQUMxRCxrQkFBYSxHQUFzQyxFQUFFLENBQUM7UUFtRjlELGFBQVEsR0FBRztZQUNULEtBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUMvQixLQUFrQixVQUFpQixFQUFqQixVQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBakIsY0FBaUIsRUFBakIsSUFBaUIsRUFBRTtnQkFBaEMsSUFBSSxLQUFLO2dCQUNaLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLENBQUMsV0FBVyxLQUFLLEVBQUU7b0JBQ2hELEtBQUssQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ3JDO1lBQ0QsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3BCLEtBQUksQ0FBQywwQkFBMEIsRUFBRSxDQUFDO1FBQ3BDLENBQUM7UUFFRCxjQUFTLEdBQUcsVUFBQyxLQUFZO1lBQ3ZCLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNoQixJQUFJLEtBQUksQ0FBQyxPQUFPO2dCQUNkLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNqQixLQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdEIsQ0FBQztRQUVELFVBQUssR0FBRyxVQUFDLEtBQVk7WUFDbkIsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ25CLEtBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN0QixDQUFDO1FBRUQsb0JBQWUsR0FBRyxVQUFDLEtBQVk7WUFDN0IsS0FBSyxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFDMUIsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3RCLENBQUM7UUFFRCxhQUFRLEdBQUcsVUFBQyxLQUFZO1lBQ3RCLEtBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUMvQixLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDakIsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3RCLENBQUM7UUFFRCx3QkFBbUIsR0FBRyxVQUFDLEtBQVk7WUFDakMsS0FBSyxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3RCLEtBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNwQixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzNDLENBQUM7UUFFRCxlQUFVLEdBQUcsVUFBQyxLQUFZLEVBQUUsS0FBYTtZQUN2QyxJQUFJLENBQUMsS0FBSyxLQUFLLE1BQU0sSUFBSSxLQUFLLEtBQUssUUFBUSxDQUFDLEVBQUU7Z0JBQzVDLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUNuQjtZQUVELElBQUksS0FBSyxLQUFLLFFBQVEsSUFBSSxLQUFJLENBQUMsT0FBTyxFQUFFO2dCQUN0QyxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDaEI7WUFFRCxJQUFJLEtBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFO2dCQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsSUFBSSxLQUFLLENBQUMsV0FBVyxLQUFLLEVBQUU7b0JBQ2hELE9BQU87Z0JBRVQsS0FBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2dCQUMvQixLQUFLLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM3QixLQUFJLENBQUMsMEJBQTBCLEVBQUUsQ0FBQztnQkFDbEMsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUNwQixLQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7YUFDdEI7WUFDRCxJQUFJLENBQUMsS0FBSyxLQUFLLE9BQU8sQ0FBQzttQkFDbEIsQ0FBQyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxJQUFJLEtBQUssQ0FBQyxTQUFTLElBQUksQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDO3VCQUM3RCxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUU7Z0JBQ2hDLHFCQUFxQjtnQkFDckIsSUFBSSxLQUFLLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM3QyxJQUFJLE1BQU0sQ0FBQztnQkFDWCxPQUFPLEtBQUssR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO29CQUN0RCxLQUFLLEVBQUUsQ0FBQztvQkFDUixJQUFJLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUzt3QkFDckMsTUFBTSxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQztpQkFDeEM7Z0JBRUQsSUFBSSxNQUFNO29CQUNSLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUMxQztRQUNILENBQUM7UUFFRCxVQUFLLEdBQUc7WUFDTixLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ25CLEtBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN0QixDQUFDO1FBRUQsa0JBQWEsR0FBRztZQUNkLEtBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDM0IsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3RCLENBQUM7UUErRU8sK0JBQTBCLEdBQUc7WUFDbkMsSUFBSSxLQUFJLENBQUMsY0FBYztnQkFDckIsS0FBSSxDQUFDLGNBQWMsQ0FBQyxLQUFJLENBQUMsWUFBWSxFQUFFLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUV4RCxJQUFJLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFO2dCQUN2QixJQUFJLEtBQUksQ0FBQyxRQUFRO29CQUNmLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDbEIsT0FBTyxJQUFJLENBQUM7YUFDYjtZQUVELE9BQU8sS0FBSyxDQUFDO1FBQ2YsQ0FBQztJQTFNRCxDQUFDO0lBcERELHNCQUFXLHFDQUFRO2FBQW5CO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDbEMsQ0FBQzs7O09BQUE7SUFNRCxzQkFBVyw0Q0FBZTtRQUoxQjs7O1dBR0c7YUFDSDtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQUMsSUFBSSxRQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUEzQyxDQUEyQyxDQUFDLENBQUM7UUFDbEYsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyx5Q0FBWTthQUF2QjtZQUFBLGlCQWVDO1lBZEMsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQzlDLElBQU0sa0JBQWtCLEdBQUcsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUM7Z0JBQ2hELElBQU0sa0JBQWtCLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxXQUFXLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBRWhHLHdCQUF3QjtnQkFDeEIsSUFBTSxtQkFBbUIsR0FBRyxDQUFDLENBQUMsY0FBYztxQkFDekMsR0FBRyxDQUFDLGdCQUFNLElBQUksYUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLEVBQXJDLENBQXFDLENBQUM7cUJBQ3BELE1BQU0sQ0FBQyxvQkFBVSxJQUFJLGlCQUFVLENBQUMsV0FBVyxLQUFLLG9CQUFXLENBQUMsVUFBVSxFQUFqRCxDQUFpRCxDQUFDLENBQUM7Z0JBQzNFLElBQU0sa0JBQWtCLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsSUFBSSxtQkFBbUIsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2dCQUVoRyxPQUFPLEtBQUssSUFBSSxDQUFDLGtCQUFrQixJQUFJLENBQUMsa0JBQWtCLElBQUksa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3RixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFTixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzVCLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsNkNBQWdCO2FBQTNCO1lBQ0UsSUFBSSxJQUFJLENBQUMsS0FBSztnQkFDWixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxlQUFLLElBQUksWUFBSyxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsU0FBUyxJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQWpELENBQWlELENBQUMsQ0FBQztZQUM3RixPQUFPLEtBQUssQ0FBQztRQUNmLENBQUM7OztPQUFBO0lBRUQsc0JBQVcscUNBQVE7YUFBbkI7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO1FBQzdCLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsd0NBQVc7YUFBdEI7WUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQztnQkFDL0MsT0FBTyxJQUFJLENBQUM7WUFDZCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFDLElBQUksUUFBQyxDQUFDLFdBQVcsS0FBSyxFQUFFLEVBQXBCLENBQW9CLENBQUMsQ0FBQztRQUMzRCxDQUFDOzs7T0FBQTtJQUVELHNCQUFXLDZDQUFnQjthQUEzQjtZQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDO2dCQUMvQyxPQUFPLElBQUksQ0FBQztZQUNkLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQUMsSUFBSSxRQUFDLENBQUMsV0FBVyxLQUFLLEVBQUUsRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDO1FBQzVELENBQUM7OztPQUFBO0lBS0Q7OztPQUdHO0lBQ0gsb0NBQVUsR0FBVixVQUFXLElBQWlCLEVBQUUsTUFBYztRQUMxQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxLQUFLLGlCQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUVqRixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRXpDLElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixLQUFLLDBCQUFrQixDQUFDLEdBQUcsRUFBRTtZQUNyRixLQUFrQixVQUFNLEVBQU4saUJBQU0sRUFBTixvQkFBTSxFQUFOLElBQU0sRUFBRTtnQkFBckIsSUFBSSxLQUFLO2dCQUNaLElBQUksV0FBVyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBQyxJQUFJLFFBQUMsS0FBSyxLQUFLLEVBQVgsQ0FBVyxDQUFDLENBQUM7Z0JBQ2xELEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUMvQztTQUNGO1FBRUQsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM3QyxNQUFNLENBQUMsT0FBTyxDQUFDLGVBQUssSUFBSSxpQ0FBVyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxFQUFyRCxDQUFxRCxDQUFDLENBQUM7UUFFL0UsSUFBSSxDQUFDLEtBQUssR0FBRywwQkFBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRTdFLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuRCxVQUFVLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztRQUM3QyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBdUZPLGdEQUFzQixHQUE5QixVQUErQixLQUFrQjtRQUMvQyxJQUFJLHFCQUFxQixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUQscUJBQXFCLENBQUMsRUFBRSxHQUFHLHFCQUFxQixDQUFDO1FBQ2pELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEtBQUssaUJBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDaEQscUJBQXFCLENBQUMsU0FBUyxHQUFHLGlDQUFpQyxDQUFDO1NBQ3JFO2FBQU07WUFDTCxxQkFBcUIsQ0FBQyxTQUFTLEdBQUcsK0JBQStCLENBQUM7U0FDbkU7UUFDRCxLQUFLLENBQUMsV0FBVyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFFekMsT0FBTztZQUNMLEtBQUssRUFBRSxxQkFBcUI7U0FDN0IsQ0FBQztJQUNKLENBQUM7SUFFTyxnREFBc0IsR0FBOUIsVUFBK0IsU0FBb0I7UUFDakQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLE9BQU8sQ0FBQztZQUNqRCxFQUFFLEVBQUUsYUFBYSxHQUFHLFNBQVMsQ0FBQyxFQUFFO1lBQ2hDLFFBQVEsRUFBRSxtQkFBTyxDQUFDLG1GQUFpQyxDQUFDO1lBQ3BELElBQUksRUFBRTtnQkFDSixNQUFNLEVBQUUsU0FBUzthQUNsQjtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyw0Q0FBa0IsR0FBMUIsVUFBMkIsS0FBWTtRQUNyQyxJQUFJLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQztZQUN4QixFQUFFLEVBQUUsYUFBYSxHQUFHLEtBQUssQ0FBQyxFQUFFO1lBQzVCLFFBQVEsRUFBRSxtQkFBTyxDQUFDLDJFQUE2QixDQUFDO1lBQ2hELElBQUksRUFBRTtnQkFDSixhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7Z0JBQ2pDLEtBQUssRUFBRSxLQUFLO2FBQ2I7WUFDRCxNQUFNLEVBQUU7Z0JBQ04sS0FBSyxFQUFFLGlCQUFpQixDQUFDLEtBQUs7Z0JBQzlCLE1BQU0sRUFBRSxpQkFBaUIsQ0FBQyxNQUFNO2dCQUNoQyxNQUFNLEVBQUUsaUJBQWlCLENBQUMsTUFBTTthQUNqQztTQUNGLENBQUMsQ0FBQztRQUNILE9BQU8sQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMxQyxPQUFPLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3hDLE9BQU8sQ0FBQyxFQUFFLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3JELE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxPQUFPLENBQUMsRUFBRSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUVwRCxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUM7SUFDekMsQ0FBQztJQUVPLCtDQUFxQixHQUE3QjtRQUNFLEtBQXNCLFVBQXFCLEVBQXJCLFNBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFyQixjQUFxQixFQUFyQixJQUFxQixFQUFFO1lBQXhDLElBQUksU0FBUztZQUNoQixJQUFJLENBQUMsc0JBQXNCLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDeEM7UUFFRCxLQUFrQixVQUFpQixFQUFqQixTQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBakIsY0FBaUIsRUFBakIsSUFBaUIsRUFBRTtZQUFoQyxJQUFJLEtBQUs7WUFDWixJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDaEM7SUFDSCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssc0NBQVksR0FBcEI7UUFDRSxLQUFzQixVQUFxQixFQUFyQixTQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBckIsY0FBcUIsRUFBckIsSUFBcUIsRUFBRTtZQUF4QyxJQUFJLFNBQVM7WUFDaEIsSUFBSSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzVELGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDM0M7UUFFRCxLQUFrQixVQUFpQixFQUFqQixTQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBakIsY0FBaUIsRUFBakIsSUFBaUIsRUFBRTtZQUFoQyxJQUFJLEtBQUs7WUFDWixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNoRCxZQUFZLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNsQztRQUVELElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFlTSx3Q0FBYyxHQUFyQjtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRU0sMENBQWdCLEdBQXZCLFVBQXdCLElBQVM7UUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJO1lBQ3RCLE9BQU8sS0FBSyxDQUFDO1FBQ2YsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVNLDhDQUFvQixHQUEzQjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDO1lBQy9DLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNkLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNoQixLQUFrQixVQUFpQixFQUFqQixTQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBakIsY0FBaUIsRUFBakIsSUFBaUIsRUFBRTtZQUFoQyxJQUFJLEtBQUs7WUFDWixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUM7U0FDeEM7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDO0FBdFNZLDBDQUFlOzs7Ozs7Ozs7Ozs7Ozs7O0FDbEM1Qjs7OztHQUlHO0FBQ0gsU0FBZ0IsTUFBTTtJQUFDLGNBQWM7U0FBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1FBQWQseUJBQWM7O0lBQ25DLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3BDLEtBQUssSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3ZCLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDL0IsSUFBSSxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxRQUFRLElBQUksT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssUUFBUSxFQUFFO29CQUN4RSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztpQkFDekM7cUJBQ0k7b0JBQ0gsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDN0I7YUFDRjtTQUNGO0tBQ0Y7SUFDRCxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNqQixDQUFDO0FBZEQsd0JBY0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkQ7O0dBRUc7QUFDSDtJQUNFLG1CQUEyQixNQUFvQjtRQUFwQixXQUFNLEdBQU4sTUFBTSxDQUFjO0lBRS9DLENBQUM7SUFHRDs7Ozs7O09BTUc7SUFDSSwwQkFBTSxHQUFiLFVBQWMsSUFBWTtRQUN4QixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDdkIsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELElBQUksU0FBUyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN2QyxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBQ0gsZ0JBQUM7QUFBRCxDQUFDO0FBckJZLDhCQUFTOzs7Ozs7Ozs7Ozs7Ozs7O0FDSHRCLHdGQUFvQztBQUdwQyxpRkFBK0I7QUFFL0IsSUFBWSxXQUlYO0FBSkQsV0FBWSxXQUFXO0lBQ3JCLHlEQUFVO0lBQ1YseURBQVU7SUFDVixtREFBTztBQUNULENBQUMsRUFKVyxXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQUl0QjtBQUVEO0lBS0Usb0JBQW1CLFVBQWtCO1FBQWxCLGVBQVUsR0FBVixVQUFVLENBQVE7UUFDbkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0FBQztBQVZZLGdDQUFVO0FBWXZCOztHQUVHO0FBQ0g7SUFnQkU7OztPQUdHO0lBQ0gsZ0JBQVksVUFBa0IsRUFBRSxRQUFnQixFQUFFLGFBQXNCLEVBQUUsU0FBaUIsRUFBVSxRQUFtQjtRQUFuQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ3RILElBQUksQ0FBQyxZQUFZLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBUixDQUFRLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksaUJBQU8sQ0FBQyxRQUFRLEVBQUUsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQy9ELElBQUksVUFBVSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUM1QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztTQUMzQjthQUFNO1lBQ0wsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7U0FDNUI7SUFDSCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLHdDQUF1QixHQUE5QixVQUErQixnQkFBNkIsRUFBRSxlQUE0QjtRQUN4RixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsRUFBRSxlQUFlLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBQ0Q7O09BRUc7SUFDSSxrQ0FBaUIsR0FBeEI7UUFDRSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCO1lBQ2pDLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztJQUN6RCxDQUFDO0lBRU8sNEJBQVcsR0FBbkIsVUFBb0IsSUFBWTtRQUM5QixJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ25CLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUNEOzs7O09BSUc7SUFDSyx3Q0FBdUIsR0FBL0IsVUFBZ0MsSUFBcUI7UUFDbkQsSUFBSSxpQkFBaUIsR0FBRyxDQUFDLENBQUM7UUFDMUIsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQztRQUVsQixLQUFvQixVQUFJLEVBQUosYUFBSSxFQUFKLGtCQUFJLEVBQUosSUFBSSxFQUFFO1lBQXJCLElBQUksT0FBTztZQUNkLElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRTtnQkFDbkIsaUJBQWlCLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7Z0JBQzFDLFFBQVEsR0FBRyxTQUFTLENBQUM7YUFDdEI7aUJBQ0ksSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFO2dCQUN0QixJQUFJLFFBQVEsS0FBSyxTQUFTLEVBQUU7b0JBQzFCLElBQUksU0FBUyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO3dCQUNwQyxpQkFBaUIsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7cUJBQ3ZEO2lCQUNGO3FCQUFNO29CQUNMLGlCQUFpQixJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO2lCQUMzQztnQkFDRCxRQUFRLEdBQUcsT0FBTyxDQUFDO2FBQ3BCO2lCQUNJO2dCQUNILFFBQVEsR0FBRyxNQUFNLENBQUM7YUFDbkI7WUFDRCxTQUFTLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7U0FDbEM7UUFFRCxPQUFPLGlCQUFpQixDQUFDO0lBQzNCLENBQUM7SUFDRDs7Ozs7T0FLRztJQUVLLDhDQUE2QixHQUFyQyxVQUFzQyxJQUFZO1FBQ2hELElBQUksbUJBQTJCLENBQUM7UUFDaEMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsb0JBQW9CLEVBQUUseUJBQXlCO1lBQ25HLG1CQUFtQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7O1lBRXZELG1CQUFtQixHQUFHLENBQUMsQ0FBQztRQUUxQixPQUFPLG1CQUFtQixDQUFDO0lBQzdCLENBQUM7SUFDRDs7OztPQUlHO0lBQ0ksZ0NBQWUsR0FBdEIsVUFBdUIsT0FBZTtRQUNwQyxJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQy9DLElBQUksVUFBVSxHQUFHLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXRDLEtBQXdCLFVBQWlCLEVBQWpCLFNBQUksQ0FBQyxZQUFZLEVBQWpCLGNBQWlCLEVBQWpCLElBQWlCLEVBQUU7WUFBdEMsSUFBSSxXQUFXO1lBQ2xCLElBQUksa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUV2RCxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLGtCQUFrQixFQUFFLGNBQWMsRUFDNUQsRUFBRSxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7WUFDaEQsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxDQUFDO1lBRXJELElBQUksV0FBVyxLQUFLLENBQUMsRUFBRTtnQkFDckIsVUFBVSxDQUFDLGVBQWUsR0FBRyxrQkFBa0IsQ0FBQztnQkFDaEQsVUFBVSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsVUFBVSxDQUFDO2dCQUNoRCxPQUFPLFVBQVUsQ0FBQzthQUNuQjtZQUVELElBQUksV0FBVyxJQUFJLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxXQUFXLENBQUM7bUJBQzdELENBQUMsVUFBVSxDQUFDLHdCQUF3QixLQUFLLENBQUMsSUFBSSxXQUFXLEdBQUcsVUFBVSxDQUFDLHdCQUF3QixDQUFDLEVBQUU7Z0JBQ3JHLFVBQVUsQ0FBQyxlQUFlLEdBQUcsa0JBQWtCLENBQUM7Z0JBQ2hELFVBQVUsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDLFVBQVUsQ0FBQztnQkFDaEQsVUFBVSxDQUFDLHdCQUF3QixHQUFHLFdBQVcsQ0FBQzthQUNuRDtTQUNGO1FBQ0QsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQztJQUNILGFBQUM7QUFBRCxDQUFDO0FBbElZLHdCQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCbkIsMEdBQWlFO0FBQ2pFLHFGQUErQztBQUUvQyxrRkFBcUU7QUFDckUsbUhBQStFO0FBRS9FLHFGQUFtRTtBQUNuRSxpRkFBK0I7QUFPL0I7SUFBMkIseUJBQVk7SUEwQnJDOzs7Ozs7O09BT0c7SUFDSCxlQUFvQixRQUFtQixFQUFVLFlBQTZCLEVBQVUsTUFBb0IsRUFBVSxjQUE4QixFQUFFLEVBQVUsRUFBVSxZQUFvQjtRQUE5TCxZQUNFLGlCQUFPLFNBU1I7UUFWbUIsY0FBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLGtCQUFZLEdBQVosWUFBWSxDQUFpQjtRQUFVLFlBQU0sR0FBTixNQUFNLENBQWM7UUFBVSxvQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFBc0Isa0JBQVksR0FBWixZQUFZLENBQVE7UUE0VjlMOzs7V0FHRztRQUNLLHVCQUFpQixHQUFHO1lBQzFCLElBQU0sUUFBUSxHQUFHLHNEQUFzRCxDQUFDO1lBQ3hFLElBQUksTUFBTSxHQUFHO2dCQUNYLElBQUksRUFBRSxJQUFJO2dCQUNWLEtBQUssRUFBRSxDQUFDO2FBQ1QsQ0FBQztZQUNGLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUN4QyxJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDbkMsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUMzQyxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFO29CQUN4QixNQUFNLEdBQUc7d0JBQ1AsSUFBSSxFQUFFLElBQUk7d0JBQ1YsS0FBSyxFQUFFLEtBQUs7cUJBQ2I7aUJBQ0Y7YUFDRjtZQUVELE9BQU8sTUFBTSxDQUFDO1FBQ2hCLENBQUM7UUEvV0MsS0FBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDdEIsS0FBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1FBQ2xDLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1FBQ3BDLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUMzQixLQUFJLENBQUMsSUFBSSxHQUFHLGdDQUFnQixDQUFDLEtBQUssQ0FBQztRQUVuQyxLQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQzs7SUFDZixDQUFDO0lBRUQ7O01BRUU7SUFDSyxvQ0FBb0IsR0FBM0I7UUFDRSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxLQUFLLGlCQUFTLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsa0JBQWtCLEtBQUssMEJBQWtCLENBQUMsWUFBWSxFQUFFO1lBQ3hILElBQUksQ0FBQyw4QkFBOEIsRUFBRSxDQUFDO1NBQ3ZDO1FBQ0QsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFTSxnQ0FBZ0IsR0FBdkIsVUFBd0IsTUFBYztRQUNwQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRU0saUNBQWlCLEdBQXhCO1FBQ0UsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLEtBQW1CLFVBQW1CLEVBQW5CLFNBQUksQ0FBQyxjQUFjLEVBQW5CLGNBQW1CLEVBQW5CLElBQW1CLEVBQUU7WUFBbkMsSUFBSSxNQUFNO1lBQ2IsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQzdDO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVNLHVCQUFPLEdBQWQsVUFBZSxPQUFnQjtRQUM3QixJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztRQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLGtDQUFrQixHQUF6QixVQUEwQixJQUFZLEVBQUUsUUFBZ0IsRUFBRSxhQUFzQixFQUFFLFNBQWlCO1FBQ2pHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQ3hCLElBQUksZUFBTSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRUQ7O09BRUc7SUFDSCxpQkFBaUI7SUFDVCxzQ0FBc0IsR0FBOUI7UUFDRSxJQUFJLE9BQU8sR0FBYSxJQUFJLEtBQUssRUFBRSxDQUFDO1FBQ3BDLEtBQTBCLFVBQW1CLEVBQW5CLFNBQUksQ0FBQyxjQUFjLEVBQW5CLGNBQW1CLEVBQW5CLElBQW1CLEVBQUU7WUFBMUMsSUFBSSxhQUFhO1lBQ3BCLE9BQU8sQ0FBQyxJQUFJLENBQUMsMEJBQWdCLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7U0FDNUQ7UUFFRCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxLQUFLLGlCQUFTLENBQUMsTUFBTSxFQUFFO1lBQ2hELEtBQTRCLFVBQXFCLEVBQXJCLFNBQUksQ0FBQyxnQkFBZ0IsRUFBckIsY0FBcUIsRUFBckIsSUFBcUIsRUFBRTtnQkFBOUMsSUFBSSxlQUFlO2dCQUN0QixPQUFPLENBQUMsSUFBSSxDQUFDLDBCQUFnQixDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO2FBQzlEO1NBQ0Y7UUFFRCxJQUFJLGFBQWEsR0FBRywwQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDO1FBQzdCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRDs7O09BR0c7SUFDSyw4Q0FBOEIsR0FBdEM7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7UUFDM0IsS0FBbUIsVUFBbUIsRUFBbkIsU0FBSSxDQUFDLGNBQWMsRUFBbkIsY0FBbUIsRUFBbkIsSUFBbUIsRUFBRTtZQUFuQyxJQUFJLE1BQU07WUFDYixLQUF3QixVQUFtQixFQUFuQixXQUFNLENBQUMsWUFBWSxFQUFuQixjQUFtQixFQUFuQixJQUFtQixFQUFFO2dCQUF4QyxJQUFJLFdBQVc7Z0JBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ2hDO1NBQ0Y7UUFFRCxLQUFtQixVQUFxQixFQUFyQixTQUFJLENBQUMsZ0JBQWdCLEVBQXJCLGNBQXFCLEVBQXJCLElBQXFCLEVBQUU7WUFBckMsSUFBSSxNQUFNO1lBQ2IsS0FBd0IsVUFBbUIsRUFBbkIsV0FBTSxDQUFDLFlBQVksRUFBbkIsY0FBbUIsRUFBbkIsSUFBbUIsRUFBRTtnQkFBeEMsSUFBSSxXQUFXO2dCQUNsQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUNoQztTQUNGO1FBRUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxzQkFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUV6QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQUVEOzs7T0FHRztJQUNJLDBDQUEwQixHQUFqQyxVQUFrQyxXQUFvQjtRQUNwRCxJQUFJLFVBQVUsR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1FBQzdCLEtBQW1CLFVBQW1CLEVBQW5CLFNBQUksQ0FBQyxjQUFjLEVBQW5CLGNBQW1CLEVBQW5CLElBQW1CLEVBQUU7WUFBbkMsSUFBSSxNQUFNO1lBQ2IsS0FBd0IsVUFBbUIsRUFBbkIsV0FBTSxDQUFDLFlBQVksRUFBbkIsY0FBbUIsRUFBbkIsSUFBbUIsRUFBRTtnQkFBeEMsSUFBSSxXQUFXO2dCQUNsQixVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQzlCO1NBQ0Y7UUFFRCxJQUFJLFlBQVksR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1FBQy9CLEtBQXVCLFVBQVcsRUFBWCwyQkFBVyxFQUFYLHlCQUFXLEVBQVgsSUFBVyxFQUFFO1lBQS9CLElBQUksVUFBVTtZQUNqQixLQUFtQixVQUF5QixFQUF6QixlQUFVLENBQUMsY0FBYyxFQUF6QixjQUF5QixFQUF6QixJQUF5QixFQUFFO2dCQUF6QyxJQUFJLE1BQU07Z0JBQ2IsS0FBd0IsVUFBbUIsRUFBbkIsV0FBTSxDQUFDLFlBQVksRUFBbkIsY0FBbUIsRUFBbkIsSUFBbUIsRUFBRTtvQkFBeEMsSUFBSSxXQUFXO29CQUNsQixZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2lCQUNoQzthQUNGO1NBQ0Y7UUFFRCxZQUFZLEdBQUcsc0JBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUUxQyxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLDRCQUE0QixDQUFDO1FBQzVELElBQUksVUFBVSxLQUFLLFNBQVMsSUFBSSxVQUFVLEtBQUssQ0FBQztZQUM5QyxVQUFVLEdBQUcsVUFBVSxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDO1FBRXZELElBQUksZUFBZSxHQUFHLFVBQVUsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDO1FBQ3JELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxlQUFlLElBQUksQ0FBQyxHQUFHLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbkUsSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDNUMsZUFBZSxFQUFFLENBQUM7YUFDbkI7aUJBQU07Z0JBQ0wsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNsQztTQUNGO1FBRUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxzQkFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRXpCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBRUQ7O01BRUU7SUFDSyxxQkFBSyxHQUFaO1FBQ0UsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxjQUFjLENBQUMsbUJBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7O09BR0c7SUFDSSw0QkFBWSxHQUFuQjtRQUNFLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksSUFBSSxDQUFDLFNBQVM7WUFDaEIsT0FBTztRQUNULElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxtQkFBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFTSwwQkFBVSxHQUFqQjtRQUNFLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQzNCLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDN0I7UUFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxLQUFLLGlCQUFTLENBQUMsTUFBTSxFQUFFO1lBQ2hELElBQUksQ0FBQyxjQUFjLENBQUMsbUJBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztTQUMzQjtJQUNILENBQUM7SUFFTSxpQ0FBaUIsR0FBeEI7UUFDRSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUMzQixJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQztJQUVPLDhCQUFjLEdBQXRCLFVBQXVCLE9BQWUsRUFBRSxJQUFpQixFQUFFLGVBQXdCLEVBQUUsRUFBVztRQUM5RixJQUFJLENBQUMsZUFBZTtZQUNsQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQzlEO1lBQ0gsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQztTQUNoQztJQUNILENBQUM7SUFFTSw2QkFBYSxHQUFwQjtRQUNFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVPLG1DQUFtQixHQUEzQixVQUE0QixPQUFnQixFQUFFLGVBQXdCO1FBQ3BFLElBQUksT0FBTyxDQUFDLGtCQUFrQixFQUFFO1lBQzlCLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxtQkFBVyxDQUFDLEtBQUssRUFBRSxlQUFlLEVBQUUsT0FBTyxDQUFDLGtCQUFrQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3RHO2FBQ0k7WUFDSCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsbUJBQVcsQ0FBQyxLQUFLLEVBQUUsZUFBZSxDQUFDLENBQUM7U0FDdkU7SUFDSCxDQUFDO0lBRU8seUNBQXlCLEdBQWpDLFVBQWtDLFlBQW9CLEVBQUUsV0FBbUI7UUFDekUsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxpQ0FBa0IsQ0FBQyxXQUFXLENBQUM7UUFFaEYsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLEVBQUUsVUFBVSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1FBRXJHLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLENBQUMsQ0FBQztRQUMxRSxLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUNoRCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkIsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDO1lBQ25CLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDaEIsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRTtvQkFDdkQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7b0JBQzNDLFNBQVMsR0FBRyxtQkFBbUIsQ0FBQztpQkFDakM7cUJBQ0k7b0JBQ0gsU0FBUztpQkFDVjthQUNGO1lBQ0QsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNkLFNBQVMsR0FBRyxvQkFBb0IsQ0FBQzthQUNsQztZQUVELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNyRyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzFCO1FBRUQsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDekYsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVEOzs7T0FHRztJQUNJLCtCQUFlLEdBQXRCLFVBQXVCLGdCQUF5QixFQUFFLFVBQW9CO1FBQXRFLGlCQW9EQztRQW5EQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixJQUFJLElBQUksQ0FBQyxlQUFlLEtBQUssSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLFVBQVU7WUFDdEYsT0FBTztRQUVULElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNuRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUVyQixJQUFJLG1CQUFtQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLGdCQUFNLElBQUksYUFBTSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLEVBQXhDLENBQXdDLENBQUMsQ0FBQyxNQUFNLENBQUMsb0JBQVUsSUFBSSxpQkFBVSxDQUFDLFdBQVcsS0FBSyxvQkFBVyxDQUFDLFVBQVUsRUFBakQsQ0FBaUQsQ0FBQyxDQUFDLElBQUksQ0FBQyxvQkFBVSxJQUFJLGlCQUFVLENBQUMsd0JBQXdCLEVBQW5DLENBQW1DLENBQUMsQ0FBQztRQUN0TyxJQUFJLG1CQUFtQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLGdCQUFNLElBQUksYUFBTSxDQUFDLGVBQWUsQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLEVBQXhDLENBQXdDLENBQUMsQ0FBQyxNQUFNLENBQUMsb0JBQVUsSUFBSSxpQkFBVSxDQUFDLFdBQVcsS0FBSyxvQkFBVyxDQUFDLFVBQVUsRUFBakQsQ0FBaUQsQ0FBQyxDQUFDLElBQUksQ0FBQyxvQkFBVSxJQUFJLGlCQUFVLENBQUMsd0JBQXdCLEVBQW5DLENBQW1DLENBQUMsQ0FBQztRQUN0TyxJQUFJLHFCQUFxQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsZ0JBQU0sSUFBSSxhQUFNLENBQUMsZUFBZSxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsRUFBeEMsQ0FBd0MsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxvQkFBVSxJQUFJLGlCQUFVLENBQUMsV0FBVyxLQUFLLG9CQUFXLENBQUMsVUFBVSxFQUFqRCxDQUFpRCxDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFVLElBQUksaUJBQVUsQ0FBQyx3QkFBd0IsRUFBbkMsQ0FBbUMsQ0FBQyxDQUFDO1FBQzFPLElBQUkscUJBQXFCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxnQkFBTSxJQUFJLGFBQU0sQ0FBQyxlQUFlLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxFQUF4QyxDQUF3QyxDQUFDLENBQUMsTUFBTSxDQUFDLG9CQUFVLElBQUksaUJBQVUsQ0FBQyxXQUFXLEtBQUssb0JBQVcsQ0FBQyxVQUFVLEVBQWpELENBQWlELENBQUMsQ0FBQyxJQUFJLENBQUMsb0JBQVUsSUFBSSxpQkFBVSxDQUFDLHdCQUF3QixFQUFuQyxDQUFtQyxDQUFDLENBQUM7UUFFMU8sSUFBSSxtQkFBbUIsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxjQUFjLENBQUMsbUJBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxXQUFXLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDO2FBQzNEO1lBQ0QsT0FBTztTQUNSO1FBRUQsSUFBSSxxQkFBcUIsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3BDLElBQUksQ0FBQyxjQUFjLENBQUMsbUJBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN2QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLGdCQUFnQixDQUFDLENBQUM7WUFDN0UsT0FBTztTQUNSO1FBRUQsSUFBSSxtQkFBbUIsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ2xDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRTtnQkFDcEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxtQkFBVyxDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUNuSixJQUFJLENBQUMsY0FBYyxDQUFDLG1CQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3ZDLE9BQU87YUFDUjtZQUNELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsRUFBRTtnQkFDdEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxtQkFBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUN6QyxJQUFJLENBQUMsV0FBVyxHQUFHLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQztnQkFDMUQsT0FBTzthQUNSO1NBQ0Y7UUFFRCxJQUFJLHFCQUFxQixDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDcEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxtQkFBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztZQUM3RSxPQUFPO1NBQ1I7UUFFRCxJQUFJLHFCQUFxQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxhQUFhLEVBQWYsQ0FBZSxDQUFDLENBQUM7UUFDL0UsSUFBSSxxQkFBcUIsSUFBSSxxQkFBcUIsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzdELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1NBQ25FO1FBRUQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxtQkFBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFTSx1QkFBTyxHQUFkO1FBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxtQkFBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVNLHlCQUFTLEdBQWhCO1FBQ0UsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN0QyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQzVCO0lBQ0gsQ0FBQztJQUVPLDJCQUFXLEdBQW5CO1FBQUEsaUJBaUJDO1FBaEJDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEtBQUssaUJBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDaEQsT0FBTyxDQUFDLGlDQUFpQztTQUMxQztRQUVELFlBQVksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsVUFBVSxDQUFDO1lBQ25DLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSSxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQUksS0FBSSxDQUFDLEVBQUksQ0FBQyxDQUFDO1lBQ3ZFLElBQUksQ0FBQyxLQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNsQixPQUFPO2FBQ1I7WUFFRCxLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUksQ0FBQyxVQUFVLElBQUksS0FBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFDOUQsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLEtBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUM7WUFFNUYsS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFNLEtBQUssT0FBSSxDQUFDO1FBQzNDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsaUNBQWlCLEdBQWpCLFVBQWtCLElBQVM7UUFBVCxnQ0FBUztRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFJLElBQUksQ0FBQyxFQUFJLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQixPQUFPO1NBQ1I7UUFFRCxJQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDekMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsK0JBQStCLENBQUMsQ0FBQztRQUVuRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLElBQUksZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRTNELEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDOUQsR0FBRyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNsRSxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRTNELElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxQyxJQUFNLEtBQUssR0FBRyxHQUFHLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxLQUFLO1lBQzdDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ3JELFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7UUFDekQsR0FBRyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFaEMsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBMEJEOzs7T0FHRztJQUNLLDhCQUFjLEdBQXRCLFVBQXVCLFdBQXdCO1FBQzdDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7UUFFL0IsUUFBUSxXQUFXLEVBQUU7WUFDbkIsS0FBSyxtQkFBVyxDQUFDLE9BQU87Z0JBQ3RCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2dCQUN0QixNQUFNO1lBQ1IsS0FBSyxtQkFBVyxDQUFDLEtBQUs7Z0JBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNwQixNQUFNO1lBQ1IsS0FBSyxtQkFBVyxDQUFDLEtBQUs7Z0JBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNwQixNQUFNO1lBQ1IsS0FBSyxtQkFBVyxDQUFDLFlBQVk7Z0JBQzNCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7Z0JBQzlCLE1BQU07U0FDVDtJQUNILENBQUM7SUFFTyxnQ0FBZ0IsR0FBeEIsVUFBeUIsTUFBYyxFQUFFLGVBQXdCO1FBQy9ELElBQUksTUFBTSxDQUFDLE9BQU8sSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTtZQUN6QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxlQUFlLENBQUMsQ0FBQztTQUMzRDtRQUNELElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDcEIsTUFBTSxDQUFDLGlCQUFpQixFQUFFLENBQUM7U0FDNUI7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSSx3QkFBUSxHQUFmO1FBQ0UsSUFBSSxJQUFJLENBQUMsaUJBQWlCLElBQUksSUFBSSxDQUFDLFNBQVM7WUFDMUMsT0FBTztRQUVULElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssRUFBRSxFQUFFO1lBQ3RDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsbUJBQVcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDOUQsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFO2dCQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7YUFDbkQ7U0FDRjtJQUNILENBQUM7SUFFTSx5QkFBUyxHQUFoQjtRQUNFLE9BQU8sSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ2xELENBQUM7SUFFTSwyQkFBVyxHQUFsQixVQUFtQixJQUFTO1FBQzFCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0lBQzFCLENBQUM7SUFDSCxZQUFDO0FBQUQsQ0FBQyxDQWhkMEIsNEJBQVksR0FnZHRDO0FBaGRZLHNCQUFLOzs7Ozs7Ozs7Ozs7Ozs7O0FDZmxCLElBQVksZ0JBR1g7QUFIRCxXQUFZLGdCQUFnQjtJQUMxQix5REFBSztJQUNMLGlFQUFTO0FBQ1gsQ0FBQyxFQUhXLGdCQUFnQixHQUFoQix3QkFBZ0IsS0FBaEIsd0JBQWdCLFFBRzNCO0FBRUQ7SUFBQTtJQUVBLENBQUM7SUFBRCxtQkFBQztBQUFELENBQUM7QUFGWSxvQ0FBWTs7Ozs7Ozs7Ozs7Ozs7OztBQ0Z6Qjs7R0FFRztBQUNIO0lBS0U7SUFBdUIsQ0FBQztJQU14QixzQkFBVywyQkFBUTtRQUpuQjs7O1dBR0c7YUFDSDtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxTQUFTLEtBQUssSUFBSSxFQUFwQixDQUFvQixDQUFDLENBQUM7UUFDdEQsQ0FBQzs7O09BQUE7SUFHTSxpQ0FBaUIsR0FBeEI7UUFDRSxLQUFzQixVQUFlLEVBQWYsU0FBSSxDQUFDLFVBQVUsRUFBZixjQUFlLEVBQWYsSUFBZSxFQUFFO1lBQWxDLElBQUksU0FBUztZQUNoQixTQUFTLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztTQUNqQztJQUNILENBQUM7SUFFTSxxQkFBSyxHQUFaO1FBQ0UsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDekIsS0FBa0IsVUFBVyxFQUFYLFNBQUksQ0FBQyxNQUFNLEVBQVgsY0FBVyxFQUFYLElBQVcsRUFBRTtZQUExQixJQUFJLEtBQUs7WUFDWixLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDZjtJQUNILENBQUM7SUFFTSw2QkFBYSxHQUFwQjtRQUNFLEtBQWtCLFVBQVcsRUFBWCxTQUFJLENBQUMsTUFBTSxFQUFYLGNBQVcsRUFBWCxJQUFXLEVBQUU7WUFBMUIsSUFBSSxLQUFLO1lBQ1osS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3RCO1FBQ0QsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVNLHlCQUFTLEdBQWhCO1FBQ0UsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2YsS0FBa0IsVUFBVyxFQUFYLFNBQUksQ0FBQyxNQUFNLEVBQVgsY0FBVyxFQUFYLElBQVcsRUFBRTtZQUExQixJQUFJLEtBQUs7WUFDWixLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO1NBQy9CO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRU0sMkJBQVcsR0FBbEIsVUFBbUIsSUFBUztRQUMxQixLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUNoRCxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07Z0JBQzdCLE9BQU87WUFDVCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQy9CLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDaEM7SUFDSCxDQUFDO0lBQ0gsWUFBQztBQUFELENBQUM7QUFyRFksc0JBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNObEIsSUFBWSxXQU1YO0FBTkQsV0FBWSxXQUFXO0lBQ3JCLCtDQUFLO0lBQ0wsbURBQU87SUFDUCwrQ0FBSztJQUNMLDZEQUFZO0lBQ1osNkNBQUk7QUFDTixDQUFDLEVBTlcsV0FBVyxHQUFYLG1CQUFXLEtBQVgsbUJBQVcsUUFNdEI7QUFFRCxJQUFZLFNBR1g7QUFIRCxXQUFZLFNBQVM7SUFDbkIseUNBQUk7SUFDSiw2Q0FBTTtBQUNSLENBQUMsRUFIVyxTQUFTLEdBQVQsaUJBQVMsS0FBVCxpQkFBUyxRQUdwQjtBQUVELElBQVksa0JBR1g7QUFIRCxXQUFZLGtCQUFrQjtJQUM1QiwyRUFBWTtJQUNaLHlEQUFHO0FBQ0wsQ0FBQyxFQUhXLGtCQUFrQixHQUFsQiwwQkFBa0IsS0FBbEIsMEJBQWtCLFFBRzdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCRCwwR0FBaUU7QUFFakU7O0dBRUc7QUFDSDtJQUErQiw2QkFBWTtJQUsxQyxtQkFBWSxJQUFZLEVBQUUsRUFBVTtRQUFwQyxZQUNDLGlCQUFPLFNBS1A7UUFKQSxLQUFJLENBQUMsSUFBSSxHQUFHLGdDQUFnQixDQUFDLFNBQVMsQ0FBQztRQUN2QyxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixLQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLEtBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDOztJQUM1QixDQUFDO0lBQ0YsZ0JBQUM7QUFBRCxDQUFDLENBWjhCLDRCQUFZLEdBWTFDO0FBWlksOEJBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIdEI7OztHQUdHO0FBQ0g7SUFHRSxpQkFBbUIsSUFBWSxFQUFFLGFBQXNCLEVBQVUseUJBQWlDO1FBQWxHLGlCQUdDO1FBSGtCLFNBQUksR0FBSixJQUFJLENBQVE7UUFBa0MsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUFRO1FBS2xHLGtCQUFhLEdBQUcsVUFBQyxnQkFBNkIsRUFBRSxlQUE0QjtZQUMxRSxJQUFJLENBQUMsS0FBSSxDQUFDLHlCQUF5QjtnQkFDakMsT0FBTztZQUVQLElBQUksS0FBSSxDQUFDLHlCQUF5QixHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMseUJBQXlCLEdBQUcsQ0FBQyxDQUFDLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxFQUFFO2dCQUM1RyxLQUFJLENBQUMsa0JBQWtCLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyx5QkFBeUIsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUNwRjtpQkFDSSxJQUFJLEtBQUksQ0FBQyx5QkFBeUIsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMseUJBQXlCLEdBQUcsQ0FBQyxHQUFHLGVBQWUsQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDNUcsS0FBSSxDQUFDLGtCQUFrQixHQUFHLGVBQWUsQ0FBQyxLQUFJLENBQUMseUJBQXlCLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDL0U7UUFDTCxDQUFDO1FBZEMsSUFBRyxDQUFDLGFBQWE7WUFDZixJQUFJLENBQUMseUJBQXlCLEdBQUcsU0FBUyxDQUFDO0lBQy9DLENBQUM7SUFhSCxjQUFDO0FBQUQsQ0FBQztBQW5CWSwwQkFBTzs7Ozs7Ozs7Ozs7Ozs7OztBQ05wQjs7R0FFRztBQUNIO0lBQ0U7Ozs7T0FJRztJQUNILGlCQUFtQixJQUFZLEVBQVMsSUFBWTtRQUFqQyxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQVMsU0FBSSxHQUFKLElBQUksQ0FBUTtJQUVwRCxDQUFDO0lBQ0gsY0FBQztBQUFELENBQUM7QUFUWSwwQkFBTzs7Ozs7Ozs7Ozs7Ozs7OztBQ0hwQjtJQUFBO0lBT0EsQ0FBQztJQUFELDZCQUFDO0FBQUQsQ0FBQztBQVBZLHdEQUFzQjs7Ozs7Ozs7Ozs7Ozs7OztBQ0FuQyxpSUFBOEQ7QUFFOUQsZ0dBQTRDO0FBYzVDOztHQUVHO0FBQ0g7SUFDRSwyQkFBb0IsYUFBa0IsRUFBVSxRQUFtQixFQUN6RCxZQUE2QixFQUFVLE1BQW9CLEVBQzNELFNBQW9CO1FBRlYsa0JBQWEsR0FBYixhQUFhLENBQUs7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ3pELGlCQUFZLEdBQVosWUFBWSxDQUFpQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQWM7UUFDM0QsY0FBUyxHQUFULFNBQVMsQ0FBVztJQUU5QixDQUFDO0lBRUQ7O09BRUc7SUFDSCx3Q0FBWSxHQUFaO1FBQ0UsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7SUFDL0MsQ0FBQztJQUVELDRCQUE0QjtJQUM1QiwyQ0FBZSxHQUFmO1FBQ0UsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRUQsb0NBQVEsR0FBUjtRQUNFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO0lBQ3ZDLENBQUM7SUFFRCw4Q0FBa0IsR0FBbEI7UUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztJQUN6QyxDQUFDO0lBRUQscUNBQVMsR0FBVDtRQUNFLElBQUksTUFBTSxHQUFZLElBQUksS0FBSyxFQUFFLENBQUM7UUFFbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFVBQVU7WUFDeEMsT0FBTyxNQUFNLENBQUM7UUFFaEIsSUFBTSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFVO2FBQzdELEtBQUssQ0FBQyxVQUFVLENBQUM7YUFDakIsR0FBRyxDQUFDLHFCQUFXLElBQUksa0JBQVcsQ0FBQyxNQUFNLEVBQWxCLENBQWtCLENBQUMsQ0FBQztRQUMxQyxPQUFNLGtCQUFrQixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFO1lBQzlFLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVU7U0FDdkM7UUFFRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNyRSxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFeEQsSUFBSSxXQUFXLEdBQUcsUUFBUSxDQUFDLGlCQUFpQixDQUFDO1lBQzdDLElBQUksV0FBVyxLQUFLLEVBQUUsSUFBSSxXQUFXLEtBQUssU0FBUztnQkFDakQsU0FBUztZQUVYLElBQUksS0FBSyxHQUFHLDBCQUFXLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxvQkFBa0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLGVBQVUsQ0FBRyxFQUFFLFdBQVcsRUFDOUcsUUFBUSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsb0JBQW9CLEVBQUUsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUV2RSxLQUFLLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztZQUM3QixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3BCO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVELHVDQUFXLEdBQVg7UUFDRSxJQUFJLFFBQVEsR0FBYyxJQUFJLEtBQUssRUFBRSxDQUFDO1FBRXRDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVE7WUFDOUIsT0FBTyxRQUFRLENBQUM7UUFFbEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMzRCxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqRCxJQUFJLE9BQU8sR0FBRyxJQUFJLGlCQUFPLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNuRyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3hCO1FBQ0QsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0FBQztBQXRFWSw4Q0FBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQjlCLElBQVksa0JBUVg7QUFSRCxXQUFZLGtCQUFrQjtJQUM1QiwwREFBb0M7SUFDcEMsOENBQXdCO0lBQ3hCLG9EQUE4QjtJQUM5QiwwREFBb0M7SUFDcEMsNENBQXFCO0lBQ3JCLDREQUFzQztJQUN0QyxxREFBK0I7QUFDakMsQ0FBQyxFQVJXLGtCQUFrQixHQUFsQiwwQkFBa0IsS0FBbEIsMEJBQWtCLFFBUTdCO0FBRUQsSUFBWSxzQkFJWDtBQUpELFdBQVksc0JBQXNCO0lBQ2hDLHVEQUE2QjtJQUM3Qix1REFBNkI7SUFDN0IsNkRBQW1DO0FBQ3JDLENBQUMsRUFKVyxzQkFBc0IsR0FBdEIsOEJBQXNCLEtBQXRCLDhCQUFzQixRQUlqQztBQUVEOztHQUVHO0FBRUg7SUFDRSx5QkFBb0IsZ0JBQXFCO1FBQXJCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBSztJQUV6QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNLLGlDQUFPLEdBQWYsVUFBZ0IsMkJBQW1DO1FBQ2pELE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLDJCQUEyQixDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVPLHVDQUFhLEdBQXJCLFVBQXNCLEtBQXlCO1FBQzdDLE9BQU8sS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFDRDs7OztPQUlHO0lBQ0gsMENBQWdCLEdBQWhCLFVBQWlCLEtBQXlCO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELCtDQUFxQixHQUFyQixVQUFzQixTQUFpQztRQUNyRCxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDO0FBN0JZLDBDQUFlOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkI1QiwwRkFBOEM7QUFFOUM7SUFJRSx3QkFBb0IsTUFBb0I7UUFBcEIsV0FBTSxHQUFOLE1BQU0sQ0FBYztJQUV4QyxDQUFDO0lBRU0sNkJBQUksR0FBWCxVQUFZLFNBQWlCLEVBQUUsT0FBZSxFQUFFLEtBQVksRUFBRSxJQUFrQjtRQUM5RSxJQUFJLENBQUMsSUFBSTtZQUNQLElBQUksR0FBRyxtQkFBVyxDQUFDLElBQUksQ0FBQztRQUUxQixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUMsQ0FBQztRQUU1QyxJQUFJLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxHQUFHLENBQUMsa0JBQWtCLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ2xFLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1NBQzlCO0lBQ0gsQ0FBQztJQUVNLDZCQUFJLEdBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSTtnQkFDRixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQzVCO1lBQ0QsT0FBTyxTQUFTLEVBQUU7YUFDakI7U0FDRjtRQUNELElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDO1FBQzlCLElBQUksQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDO0lBQ25DLENBQUM7SUFFTSxpQ0FBUSxHQUFmLFVBQWdCLEtBQVk7UUFDMUIsT0FBTyxJQUFJLENBQUMsZUFBZSxLQUFLLEtBQUssQ0FBQztJQUN4QyxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDO0FBbkNZLHdDQUFjOzs7Ozs7Ozs7Ozs7Ozs7O0FDSDNCLDBGQUFnRTtBQW9CaEU7SUFpQkUscUJBQVksYUFBa0I7UUFoQnZCLGNBQVMsR0FBYyxpQkFBUyxDQUFDLElBQUksQ0FBQztRQUN0Qyx1QkFBa0IsR0FBdUIsMEJBQWtCLENBQUMsWUFBWSxDQUFDO1FBQ3pFLGlDQUE0QixHQUFXLENBQUMsQ0FBQztRQUN6QyxnQkFBVyxHQUFZLElBQUksQ0FBQztRQUM1QiwwQkFBcUIsR0FBWSxJQUFJLENBQUM7UUFDdEMsc0JBQWlCLEdBQVksSUFBSSxDQUFDO1FBQ2xDLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0Isa0JBQWEsR0FBWSxLQUFLLENBQUM7UUFDL0IsdUJBQWtCLEdBQVksSUFBSSxDQUFDO1FBQ25DLHlCQUFvQixHQUFZLEtBQUssQ0FBQztRQUN0QywrQkFBMEIsR0FBWSxJQUFJLENBQUM7UUFDM0MsdUJBQWtCLEdBQVksS0FBSyxDQUFDO1FBQ3BDLHVCQUFrQixHQUFZLEtBQUssQ0FBQztRQUNwQyx3QkFBbUIsR0FBWSxLQUFLLENBQUM7UUFDckMsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUc1QixJQUFJLGFBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLFdBQVcsRUFBRTtZQUNoRCxJQUFJLENBQUMsU0FBUyxHQUFHLGlCQUFTLENBQUMsTUFBTSxDQUFDO1NBQ25DO2FBQ0k7WUFDSCxJQUFJLENBQUMsU0FBUyxHQUFHLGlCQUFTLENBQUMsSUFBSSxDQUFDO1NBQ2pDO1FBRUQsSUFBSSxhQUFhLENBQUMsU0FBUyxDQUFDLGtCQUFrQixLQUFLLEtBQUssRUFBRTtZQUN4RCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsMEJBQWtCLENBQUMsR0FBRyxDQUFDO1NBQ2xEO2FBQU0sSUFBSSxhQUFhLENBQUMsU0FBUyxDQUFDLGtCQUFrQixLQUFLLGNBQWMsRUFBRTtZQUN4RSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsMEJBQWtCLENBQUMsWUFBWSxDQUFDO1NBQzNEO2FBQ0k7WUFDSCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsMEJBQWtCLENBQUMsR0FBRyxDQUFDO1NBQ2xEO1FBRUQsSUFBSSxDQUFDLDRCQUE0QixHQUFHLGFBQWEsQ0FBQyxTQUFTLENBQUMsNEJBQTRCLENBQUM7UUFDekYsSUFBSSxDQUFDLFdBQVcsR0FBRyxhQUFhLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQztRQUN2RCxJQUFJLENBQUMscUJBQXFCLEdBQUcsYUFBYSxDQUFDLFNBQVMsQ0FBQyxxQkFBcUIsQ0FBQztRQUMzRSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsYUFBYSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQztRQUNuRSxJQUFJLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDO1FBQ25ELElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUM7UUFDM0QsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGFBQWEsQ0FBQyxTQUFTLENBQUMsc0JBQXNCLEtBQUssTUFBTSxDQUFDO1FBQ3BGLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxhQUFhLENBQUMsU0FBUyxDQUFDLHNCQUFzQixLQUFLLFFBQVEsQ0FBQztRQUN4RixJQUFJLENBQUMsMEJBQTBCLEdBQUcsYUFBYSxDQUFDLFNBQVMsQ0FBQywwQkFBMEIsQ0FBQztRQUNyRixJQUFJLENBQUMsa0JBQWtCLEdBQUcsYUFBYSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQztRQUNyRSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsYUFBYSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQztRQUNyRSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQztRQUNuRSxJQUFJLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQyxTQUFTLENBQUM7UUFFekMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRDs7T0FFRztJQUNLLGtDQUFZLEdBQXBCO1FBQ0UsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLGlCQUFTLENBQUMsSUFBSSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxrQkFBa0IsR0FBRywwQkFBa0IsQ0FBQyxHQUFHLENBQUM7WUFDakQsSUFBSSxDQUFDLDRCQUE0QixHQUFHLENBQUMsQ0FBQztTQUN2QzthQUFNO1lBQ0wsSUFBSSxJQUFJLENBQUMsNEJBQTRCLEtBQUssMEJBQWtCLENBQUMsWUFBWSxFQUFFO2dCQUN6RSxJQUFJLENBQUMsNEJBQTRCLEdBQUcsQ0FBQyxDQUFDO2FBQ3ZDO1lBQ0QsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztZQUNoQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1NBQzVCO0lBQ0gsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQztBQW5FWSxrQ0FBVzs7Ozs7Ozs7Ozs7O0FDcEJ4Qix3Q0FBd0MsSUFBSSxtQkFBbUIsMkJBQTJCLHNCQUFzQixLQUFLLEdBQUcsZ0JBQWdCLFNBQVMsS0FBSyxHQUFHLGtCQUFrQixTQUFTLEtBQUssR0FBRyxnQkFBZ0IsT0FBTyxLQUFLLEdBQUcsZ0JBQWdCLE9BQU8sS0FBSyxHQUFHLDBCQUEwQixrQkFBa0IsS0FBSyxTQUFTLHVCQUF1Qiw4REFBOEQsVUFBVSwyQkFBMkIsbUJBQW1CLDJCQUEyQixxQkFBcUIsNlRBQTZULCtDQUErQyx1QkFBdUIsS0FBSywySEFBMkgsZ0JBQWdCLDZHQUE2RywrQ0FBK0Msd0JBQXdCLEtBQUssNldBQTZXLEtBQUssdUJBQXVCLFNBQVMsTUFBTSxtQkFBbUIsK0dBQStHLHdGQUF3RixVQUFVLDJCQUEyQixtQkFBbUIsc09BQXNPLCtDQUErQyx1QkFBdUIsS0FBSyxnRkFBZ0YscUJBQXFCLHNCQUFzQixNQUFNLHFCQUFxQixPQUFPLGdEQUFnRCxnQkFBZ0IsNkdBQTZHLCtDQUErQyx1QkFBdUIsS0FBSywyV0FBMlcsS0FBSyx3QkFBd0IsS0FBSyxXOzs7Ozs7Ozs7OztBQ0ExN0YsMEJBQTBCLHVCQUF1Qix1QkFBdUIsS0FBSyxRQUFRLFdBQVcsTUFBTSxjQUFjLFM7Ozs7Ozs7Ozs7O0FDQXBILFVBQVUsbUJBQU8sQ0FBQyxzSkFBMkU7QUFDN0YsMEJBQTBCLG1CQUFPLENBQUMsNk1BQXdHOztBQUUxSTs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7QUFJQSxzQyIsImZpbGUiOiJkaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvZW50cmllcy9kaXN0LnRzXCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5oNXAtYWR2YW5jZWQtYmxhbmtzIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcblxcbi8qIFRleHQgKi9cXG5cXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAjaDVwLWNsb3plLWNvbnRhaW5lciBwLFxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzICNoNXAtY2xvemUtY29udGFpbmVyIGRpdiB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjhlbTtcXG4gICAgbWFyZ2luOiAwIDAgMWVtO1xcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MHB4KSB7XFxuICAgIC5oNXAtYWR2YW5jZWQtYmxhbmtzICNoNXAtY2xvemUtY29udGFpbmVyIHAsXFxuICAgIC5oNXAtYWR2YW5jZWQtYmxhbmtzICNoNXAtY2xvemUtY29udGFpbmVyIGRpdiB7XFxuICAgICAgICB0ZXh0LWFsaWduOiB1bnNldDtcXG4gICAgfVxcbn1cXG5cXG5cXG4vKiBJbnB1dCAqL1xcblxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5oNXAtaW5wdXQtd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuYmxhbmsgLmg1cC10ZXh0LWlucHV0IHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYTBhMGEwO1xcbiAgICBwYWRkaW5nOiAwLjE4NzVlbSAwLjVlbSAwLjE4NzVlbSAwLjVlbTtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5ibGFuayBpbnB1dC5oNXAtdGV4dC1pbnB1dCB7XFxuICBtYXgtd2lkdGg6IGNhbGMoMTAwdncgLSA2NHB4KTtcXG59XFxuXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmJsYW5rIHNlbGVjdC5oNXAtdGV4dC1pbnB1dCB7XFxuICBtYXgtd2lkdGg6IGNhbGMoMTAwdncgLSAzNnB4KTtcXG59XFxuXFxuLyogSUUgKyBDaHJvbWUgc3BlY2lmaWMgZml4ZXMgKi9cXG5cXG4uaDVwLXRleHQtaW5wdXQ6Oi1tcy1jbGVhciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbjpub3QoLmNvcnJlY3QpLmJsYW5rLmhhcy10aXAgYnV0dG9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG4vKiBTZWxlY3QgbW9kZSAqL1xcblxcbnNlbGVjdC5oNXAtdGV4dC1pbnB1dCB7XFxuICAgIGFwcGVhcmFuY2U6IGJ1dHRvbjtcXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG59XFxuXFxuXFxuLyogU2hvd2luZyBzb2x1dGlvbiBpbnB1dCAqL1xcblxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5ibGFuay5zaG93aW5nLXNvbHV0aW9uIC5oNXAtdGV4dC1pbnB1dCB7XFxuICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjOWRkOGJiO1xcbiAgICBjb2xvcjogIzI1NWM0MTtcXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcXG59XFxuXFxuXFxuLyogRm9jdXNzZWQgaW5wdXQgKi9cXG5cXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuYmxhbmsgLmg1cC10ZXh0LWlucHV0OmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDAuNWVtIDAgIzdmYjhmZjtcXG4gICAgYm9yZGVyLWNvbG9yOiAjN2ZiOGZmO1xcbn1cXG5cXG5cXG4vKiBDb3JyZWN0bHkgYW5zd2VyZWQgaW5wdXQgKi9cXG5cXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuYmxhbmsuY29ycmVjdCAuaDVwLXRleHQtaW5wdXQge1xcbiAgICBiYWNrZ3JvdW5kOiAjOWRkOGJiO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOWRkOGJiO1xcbiAgICBjb2xvcjogIzI1NWM0MTtcXG59XFxuXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmJsYW5rLmNvcnJlY3QgLmg1cC1pbnB1dC13cmFwcGVyOmFmdGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMC41ZW07XFxuICAgIHRvcDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29udGVudDogXFxcIlxcXFxmMDBjXFxcIjtcXG4gICAgZm9udC1mYW1pbHk6ICdINVBGb250QXdlc29tZTQnO1xcbiAgICBjb2xvcjogIzI1NWM0MTtcXG59XFxuXFxuXFxuLyogSW5jb3JyZWN0IGFuc3dlcnMgKi9cXG5cXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuYmxhbmsuZXJyb3IgLmg1cC10ZXh0LWlucHV0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZDBkMDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Y3ZDBkMDtcXG4gICAgY29sb3I6ICNiNzFjMWM7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuYmxhbmsuZXJyb3IgLmg1cC1pbnB1dC13cmFwcGVyOmFmdGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMC41ZW07XFxuICAgIHRvcDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAgIGZvbnQtZmFtaWx5OiAnSDVQRm9udEF3ZXNvbWU0JztcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb250ZW50OiBcXFwiXFxcXGYwMGRcXFwiO1xcbiAgICBjb2xvcjogI2I3MWMxYztcXG59XFxuXFxuXFxuLyogU3BlbGxpbmcgZXJyb3JzICovXFxuXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmJsYW5rLnJldHJ5IC5oNXAtdGV4dC1pbnB1dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmOTk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmOTk7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmJsYW5rLnJldHJ5IC5oNXAtaW5wdXQtd3JhcHBlcjphZnRlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDAuNWVtO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgICBmb250LWZhbWlseTogJ0g1UEZvbnRBd2Vzb21lNCc7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29udGVudDogXFxcIlxcXFxmMDBkXFxcIjtcXG4gICAgY29sb3I6ICNiNzFjMWM7XFxufVxcblxcblxcbi8qIEJ1dHRvbnMgKi9cXG5cXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuYmxhbmsgYnV0dG9uIHtcXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbn1cXG5cXG5cXG4vKiBIaWdobGlnaHQgaW4gc3BlbGxpbmcgbWlzdGFrZSBtYXJrZXIgKi9cXG5cXG4uc3BlbGxpbmctbWlzdGFrZSAubWlzc2luZy1jaGFyYWN0ZXIsXFxuLnNwZWxsaW5nLW1pc3Rha2UgLm1pc3Rha2VuLWNoYXJhY3RlciB7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogNTAwbXM7XFxuICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1MDBtcztcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYmxpbmstY29sb3I7XFxuICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGJsaW5rLWNvbG9yO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDEzO1xcbiAgICAgICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDEzO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcXG4gICAgICAgICAgICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBibGluay1jb2xvciB7XFxuICAgIGZyb20ge1xcbiAgICAgICAgY29sb3I6IGluaXRpYWw7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgICAgY29sb3I6IHJlZDtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJsaW5rLWNvbG9yIHtcXG4gICAgZnJvbSB7XFxuICAgICAgICBjb2xvcjogaW5pdGlhbDtcXG4gICAgfVxcbiAgICB0byB7XFxuICAgICAgICBjb2xvcjogcmVkO1xcbiAgICB9XFxufVxcblxcbi5zcGVsbGluZy1taXN0YWtlIC5taXN0YWtlbi1jaGFyYWN0ZXIge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuXFxuLyogSGlnaGxpZ2h0cyBpbiB0ZXh0ICovXFxuXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmhpZ2hsaWdodGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuMik7XFxuICAgIHBhZGRpbmc6IDAuNGVtO1xcbiAgICBtYXJnaW46IC0wLjRlbTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDEwMDBtcztcXG4gICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDEwMDBtcztcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYmxpbmstYmFja2dyb3VuZC1jb2xvcjtcXG4gICAgICAgICAgICBhbmltYXRpb24tbmFtZTogYmxpbmstYmFja2dyb3VuZC1jb2xvcjtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAzO1xcbiAgICAgICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDM7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGJsaW5rLWJhY2tncm91bmQtY29sb3Ige1xcbiAgICBmcm9tIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaXRpYWw7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuMik7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBibGluay1iYWNrZ3JvdW5kLWNvbG9yIHtcXG4gICAgZnJvbSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbml0aWFsO1xcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjIpO1xcbiAgICB9XFxufVxcblxcblxcbi8qIE90aGVycyAqL1xcblxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5pbnZpc2libGUge1xcbiAgICB2aXNpYmlsaXR5OiBjb2xsYXBzZTtcXG59XFxuXFxuXFxuLyogVGlwcyAqL1xcblxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5oNXAtdGlwLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIHJpZ2h0OiAwLjRlbTtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbn1cXG5cXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuYmxhbmsuaGFzLXRpcDpub3QoLmNvcnJlY3QpOm5vdCguZXJyb3IpOm5vdCgucmV0cnkpIC5oNXAtdGV4dC1pbnB1dCB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDIuMjVlbTtcXG59XFxuXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmJsYW5rLmhhcy10aXAuY29ycmVjdCAuaDVwLWlucHV0LXdyYXBwZXI6YWZ0ZXIsXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmJsYW5rLmhhcy10aXAuZXJyb3IgLmg1cC1pbnB1dC13cmFwcGVyOmFmdGVyLFxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5ibGFuay5oYXMtdGlwLnJldHJ5IC5oNXAtaW5wdXQtd3JhcHBlcjphZnRlciB7XFxuICAgIHJpZ2h0OiAyLjI1ZW07XFxufVxcblxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5ibGFuay5jb3JyZWN0Lmhhcy10aXAgLmg1cC10ZXh0LWlucHV0LFxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5ibGFuay5lcnJvci5oYXMtdGlwIC5oNXAtdGV4dC1pbnB1dCxcXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuYmxhbmsucmV0cnkuaGFzLXRpcCAuaDVwLXRleHQtaW5wdXQge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAzLjVlbTtcXG59XFxuXFxuLyogaW1wcm92ZXMgYXBwZWFyYW5jZSBvZiBoNXAgdGlwIHNoYWRvd3MgKi9cXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuam91YmVsLWljb24tdGlwLW5vcm1hbCAuaDVwLWljb24tc2hhZG93OmJlZm9yZSB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBvcGFjaXR5OiAwLjEzO1xcbn1cXG5cXG4vKiBwZW5kaW5nIGZlZWRiYWNrIG1hcmtlciAqL1xcblxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5oNXAtYWR2YW5jZWQtYmxhbmtzLXNlbGVjdC1tb2RlIC5ibGFuazpub3QoLmhhcy1wZW5kaW5nLWZlZWRiYWNrKSBidXR0b24uaDVwLW5vdGlmaWNhdGlvbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5oNXAtYWR2YW5jZWQtYmxhbmtzLXNlbGVjdC1tb2RlIC5ibGFuay5oYXMtcGVuZGluZy1mZWVkYmFjayBidXR0b24uaDVwLW5vdGlmaWNhdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxufVxcblxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5oNXAtYWR2YW5jZWQtYmxhbmtzLXNlbGVjdC1tb2RlIC5ibGFuay5oYXMtcGVuZGluZy1mZWVkYmFjayBidXR0b24uaDVwLW5vdGlmaWNhdGlvbixcXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuaDVwLWFkdmFuY2VkLWJsYW5rcy10eXBlLW1vZGUgLmJsYW5rLmhhcy1wZW5kaW5nLWZlZWRiYWNrIC5oNXAtaW5wdXQtd3JhcHBlcjpiZWZvcmUge1xcbiAgICBmb250LWZhbWlseTogJ0g1UEZvbnRBd2Vzb21lNCc7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgYW5pbWF0aW9uOiBzaGFrZSAzcyBjdWJpYy1iZXppZXIoLjM2LCAuMDcsIC4xOSwgLjk3KSByZXZlcnNlO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDI7XFxuICAgICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMjtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgICAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xcbn1cXG5cXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuaDVwLWFkdmFuY2VkLWJsYW5rcy10eXBlLW1vZGUgLmJsYW5rLmhhcy1wZW5kaW5nLWZlZWRiYWNrIC5oNXAtaW5wdXQtd3JhcHBlcjpiZWZvcmUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IC0wLjRlbTtcXG4gICAgdG9wOiAtMC43ZW07XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcZjA1YVxcXCI7XFxufVxcblxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5oNXAtYWR2YW5jZWQtYmxhbmtzLXNlbGVjdC1tb2RlIC5ibGFuay5lcnJvci5oYXMtcGVuZGluZy1mZWVkYmFjayBidXR0b24uaDVwLW5vdGlmaWNhdGlvbixcXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuaDVwLWFkdmFuY2VkLWJsYW5rcy10eXBlLW1vZGUgLmJsYW5rLmVycm9yLmhhcy1wZW5kaW5nLWZlZWRiYWNrIC5oNXAtaW5wdXQtd3JhcHBlcjpiZWZvcmUge1xcbiAgICBjb2xvcjogI2I3MWMxYztcXG59XFxuXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmg1cC1hZHZhbmNlZC1ibGFua3Mtc2VsZWN0LW1vZGUgLmJsYW5rLnJldHJ5Lmhhcy1wZW5kaW5nLWZlZWRiYWNrIGJ1dHRvbi5oNXAtbm90aWZpY2F0aW9uLFxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5oNXAtYWR2YW5jZWQtYmxhbmtzLXR5cGUtbW9kZSAuYmxhbmsucmV0cnkuaGFzLXBlbmRpbmctZmVlZGJhY2sgLmg1cC1pbnB1dC13cmFwcGVyOmJlZm9yZSB7XFxuICAgIGNvbG9yOiAjZmZmZjAwO1xcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAwLjVlbSBibGFjaztcXG59XFxuXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmg1cC1hZHZhbmNlZC1ibGFua3MtdG1wLWZpZWxkIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB3aWR0aDogaW5pdGlhbDtcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIHNoYWtlIHtcXG4gICAgMiUsXFxuICAgIDIwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0wLjVweCwgMCwgMCk7XFxuICAgIH1cXG4gICAgNCUsXFxuICAgIDE3JSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDFweCwgMCwgMCk7XFxuICAgIH1cXG4gICAgNiUsXFxuICAgIDEwJSxcXG4gICAgMTUlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTJweCwgMCwgMCk7XFxuICAgIH1cXG4gICAgOSUsXFxuICAgIDEzJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDJweCwgMCwgMCk7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBzaGFrZSB7XFxuICAgIDIlLFxcbiAgICAyMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMC41cHgsIDAsIDApO1xcbiAgICB9XFxuICAgIDQlLFxcbiAgICAxNyUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxcHgsIDAsIDApO1xcbiAgICB9XFxuICAgIDYlLFxcbiAgICAxMCUsXFxuICAgIDE1JSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0ycHgsIDAsIDApO1xcbiAgICB9XFxuICAgIDklLFxcbiAgICAxMyUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgycHgsIDAsIDApO1xcbiAgICB9XFxufVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBmYWN0b3J5KGV4cG9ydHMpIDpcbiAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnZXhwb3J0cyddLCBmYWN0b3J5KSA6XG4gIChnbG9iYWwgPSBnbG9iYWwgfHwgc2VsZiwgZmFjdG9yeShnbG9iYWwuRGlmZiA9IHt9KSk7XG59KHRoaXMsIChmdW5jdGlvbiAoZXhwb3J0cykgeyAndXNlIHN0cmljdCc7XG5cbiAgZnVuY3Rpb24gRGlmZigpIHt9XG4gIERpZmYucHJvdG90eXBlID0ge1xuICAgIGRpZmY6IGZ1bmN0aW9uIGRpZmYob2xkU3RyaW5nLCBuZXdTdHJpbmcpIHtcbiAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgICAgIHZhciBjYWxsYmFjayA9IG9wdGlvbnMuY2FsbGJhY2s7XG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjYWxsYmFjayA9IG9wdGlvbnM7XG4gICAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgZnVuY3Rpb24gZG9uZSh2YWx1ZSkge1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKHVuZGVmaW5lZCwgdmFsdWUpO1xuICAgICAgICAgIH0sIDApO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSAvLyBBbGxvdyBzdWJjbGFzc2VzIHRvIG1hc3NhZ2UgdGhlIGlucHV0IHByaW9yIHRvIHJ1bm5pbmdcblxuXG4gICAgICBvbGRTdHJpbmcgPSB0aGlzLmNhc3RJbnB1dChvbGRTdHJpbmcpO1xuICAgICAgbmV3U3RyaW5nID0gdGhpcy5jYXN0SW5wdXQobmV3U3RyaW5nKTtcbiAgICAgIG9sZFN0cmluZyA9IHRoaXMucmVtb3ZlRW1wdHkodGhpcy50b2tlbml6ZShvbGRTdHJpbmcpKTtcbiAgICAgIG5ld1N0cmluZyA9IHRoaXMucmVtb3ZlRW1wdHkodGhpcy50b2tlbml6ZShuZXdTdHJpbmcpKTtcbiAgICAgIHZhciBuZXdMZW4gPSBuZXdTdHJpbmcubGVuZ3RoLFxuICAgICAgICAgIG9sZExlbiA9IG9sZFN0cmluZy5sZW5ndGg7XG4gICAgICB2YXIgZWRpdExlbmd0aCA9IDE7XG4gICAgICB2YXIgbWF4RWRpdExlbmd0aCA9IG5ld0xlbiArIG9sZExlbjtcbiAgICAgIHZhciBiZXN0UGF0aCA9IFt7XG4gICAgICAgIG5ld1BvczogLTEsXG4gICAgICAgIGNvbXBvbmVudHM6IFtdXG4gICAgICB9XTsgLy8gU2VlZCBlZGl0TGVuZ3RoID0gMCwgaS5lLiB0aGUgY29udGVudCBzdGFydHMgd2l0aCB0aGUgc2FtZSB2YWx1ZXNcblxuICAgICAgdmFyIG9sZFBvcyA9IHRoaXMuZXh0cmFjdENvbW1vbihiZXN0UGF0aFswXSwgbmV3U3RyaW5nLCBvbGRTdHJpbmcsIDApO1xuXG4gICAgICBpZiAoYmVzdFBhdGhbMF0ubmV3UG9zICsgMSA+PSBuZXdMZW4gJiYgb2xkUG9zICsgMSA+PSBvbGRMZW4pIHtcbiAgICAgICAgLy8gSWRlbnRpdHkgcGVyIHRoZSBlcXVhbGl0eSBhbmQgdG9rZW5pemVyXG4gICAgICAgIHJldHVybiBkb25lKFt7XG4gICAgICAgICAgdmFsdWU6IHRoaXMuam9pbihuZXdTdHJpbmcpLFxuICAgICAgICAgIGNvdW50OiBuZXdTdHJpbmcubGVuZ3RoXG4gICAgICAgIH1dKTtcbiAgICAgIH0gLy8gTWFpbiB3b3JrZXIgbWV0aG9kLiBjaGVja3MgYWxsIHBlcm11dGF0aW9ucyBvZiBhIGdpdmVuIGVkaXQgbGVuZ3RoIGZvciBhY2NlcHRhbmNlLlxuXG5cbiAgICAgIGZ1bmN0aW9uIGV4ZWNFZGl0TGVuZ3RoKCkge1xuICAgICAgICBmb3IgKHZhciBkaWFnb25hbFBhdGggPSAtMSAqIGVkaXRMZW5ndGg7IGRpYWdvbmFsUGF0aCA8PSBlZGl0TGVuZ3RoOyBkaWFnb25hbFBhdGggKz0gMikge1xuICAgICAgICAgIHZhciBiYXNlUGF0aCA9IHZvaWQgMDtcblxuICAgICAgICAgIHZhciBhZGRQYXRoID0gYmVzdFBhdGhbZGlhZ29uYWxQYXRoIC0gMV0sXG4gICAgICAgICAgICAgIHJlbW92ZVBhdGggPSBiZXN0UGF0aFtkaWFnb25hbFBhdGggKyAxXSxcbiAgICAgICAgICAgICAgX29sZFBvcyA9IChyZW1vdmVQYXRoID8gcmVtb3ZlUGF0aC5uZXdQb3MgOiAwKSAtIGRpYWdvbmFsUGF0aDtcblxuICAgICAgICAgIGlmIChhZGRQYXRoKSB7XG4gICAgICAgICAgICAvLyBObyBvbmUgZWxzZSBpcyBnb2luZyB0byBhdHRlbXB0IHRvIHVzZSB0aGlzIHZhbHVlLCBjbGVhciBpdFxuICAgICAgICAgICAgYmVzdFBhdGhbZGlhZ29uYWxQYXRoIC0gMV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIGNhbkFkZCA9IGFkZFBhdGggJiYgYWRkUGF0aC5uZXdQb3MgKyAxIDwgbmV3TGVuLFxuICAgICAgICAgICAgICBjYW5SZW1vdmUgPSByZW1vdmVQYXRoICYmIDAgPD0gX29sZFBvcyAmJiBfb2xkUG9zIDwgb2xkTGVuO1xuXG4gICAgICAgICAgaWYgKCFjYW5BZGQgJiYgIWNhblJlbW92ZSkge1xuICAgICAgICAgICAgLy8gSWYgdGhpcyBwYXRoIGlzIGEgdGVybWluYWwgdGhlbiBwcnVuZVxuICAgICAgICAgICAgYmVzdFBhdGhbZGlhZ29uYWxQYXRoXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH0gLy8gU2VsZWN0IHRoZSBkaWFnb25hbCB0aGF0IHdlIHdhbnQgdG8gYnJhbmNoIGZyb20uIFdlIHNlbGVjdCB0aGUgcHJpb3JcbiAgICAgICAgICAvLyBwYXRoIHdob3NlIHBvc2l0aW9uIGluIHRoZSBuZXcgc3RyaW5nIGlzIHRoZSBmYXJ0aGVzdCBmcm9tIHRoZSBvcmlnaW5cbiAgICAgICAgICAvLyBhbmQgZG9lcyBub3QgcGFzcyB0aGUgYm91bmRzIG9mIHRoZSBkaWZmIGdyYXBoXG5cblxuICAgICAgICAgIGlmICghY2FuQWRkIHx8IGNhblJlbW92ZSAmJiBhZGRQYXRoLm5ld1BvcyA8IHJlbW92ZVBhdGgubmV3UG9zKSB7XG4gICAgICAgICAgICBiYXNlUGF0aCA9IGNsb25lUGF0aChyZW1vdmVQYXRoKTtcbiAgICAgICAgICAgIHNlbGYucHVzaENvbXBvbmVudChiYXNlUGF0aC5jb21wb25lbnRzLCB1bmRlZmluZWQsIHRydWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBiYXNlUGF0aCA9IGFkZFBhdGg7IC8vIE5vIG5lZWQgdG8gY2xvbmUsIHdlJ3ZlIHB1bGxlZCBpdCBmcm9tIHRoZSBsaXN0XG5cbiAgICAgICAgICAgIGJhc2VQYXRoLm5ld1BvcysrO1xuICAgICAgICAgICAgc2VsZi5wdXNoQ29tcG9uZW50KGJhc2VQYXRoLmNvbXBvbmVudHMsIHRydWUsIHVuZGVmaW5lZCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgX29sZFBvcyA9IHNlbGYuZXh0cmFjdENvbW1vbihiYXNlUGF0aCwgbmV3U3RyaW5nLCBvbGRTdHJpbmcsIGRpYWdvbmFsUGF0aCk7IC8vIElmIHdlIGhhdmUgaGl0IHRoZSBlbmQgb2YgYm90aCBzdHJpbmdzLCB0aGVuIHdlIGFyZSBkb25lXG5cbiAgICAgICAgICBpZiAoYmFzZVBhdGgubmV3UG9zICsgMSA+PSBuZXdMZW4gJiYgX29sZFBvcyArIDEgPj0gb2xkTGVuKSB7XG4gICAgICAgICAgICByZXR1cm4gZG9uZShidWlsZFZhbHVlcyhzZWxmLCBiYXNlUGF0aC5jb21wb25lbnRzLCBuZXdTdHJpbmcsIG9sZFN0cmluZywgc2VsZi51c2VMb25nZXN0VG9rZW4pKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIHRyYWNrIHRoaXMgcGF0aCBhcyBhIHBvdGVudGlhbCBjYW5kaWRhdGUgYW5kIGNvbnRpbnVlLlxuICAgICAgICAgICAgYmVzdFBhdGhbZGlhZ29uYWxQYXRoXSA9IGJhc2VQYXRoO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGVkaXRMZW5ndGgrKztcbiAgICAgIH0gLy8gUGVyZm9ybXMgdGhlIGxlbmd0aCBvZiBlZGl0IGl0ZXJhdGlvbi4gSXMgYSBiaXQgZnVnbHkgYXMgdGhpcyBoYXMgdG8gc3VwcG9ydCB0aGVcbiAgICAgIC8vIHN5bmMgYW5kIGFzeW5jIG1vZGUgd2hpY2ggaXMgbmV2ZXIgZnVuLiBMb29wcyBvdmVyIGV4ZWNFZGl0TGVuZ3RoIHVudGlsIGEgdmFsdWVcbiAgICAgIC8vIGlzIHByb2R1Y2VkLlxuXG5cbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAoZnVuY3Rpb24gZXhlYygpIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIFRoaXMgc2hvdWxkIG5vdCBoYXBwZW4sIGJ1dCB3ZSB3YW50IHRvIGJlIHNhZmUuXG5cbiAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgICAgICBpZiAoZWRpdExlbmd0aCA+IG1heEVkaXRMZW5ndGgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghZXhlY0VkaXRMZW5ndGgoKSkge1xuICAgICAgICAgICAgICBleGVjKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgMCk7XG4gICAgICAgIH0pKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aGlsZSAoZWRpdExlbmd0aCA8PSBtYXhFZGl0TGVuZ3RoKSB7XG4gICAgICAgICAgdmFyIHJldCA9IGV4ZWNFZGl0TGVuZ3RoKCk7XG5cbiAgICAgICAgICBpZiAocmV0KSB7XG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgcHVzaENvbXBvbmVudDogZnVuY3Rpb24gcHVzaENvbXBvbmVudChjb21wb25lbnRzLCBhZGRlZCwgcmVtb3ZlZCkge1xuICAgICAgdmFyIGxhc3QgPSBjb21wb25lbnRzW2NvbXBvbmVudHMubGVuZ3RoIC0gMV07XG5cbiAgICAgIGlmIChsYXN0ICYmIGxhc3QuYWRkZWQgPT09IGFkZGVkICYmIGxhc3QucmVtb3ZlZCA9PT0gcmVtb3ZlZCkge1xuICAgICAgICAvLyBXZSBuZWVkIHRvIGNsb25lIGhlcmUgYXMgdGhlIGNvbXBvbmVudCBjbG9uZSBvcGVyYXRpb24gaXMganVzdFxuICAgICAgICAvLyBhcyBzaGFsbG93IGFycmF5IGNsb25lXG4gICAgICAgIGNvbXBvbmVudHNbY29tcG9uZW50cy5sZW5ndGggLSAxXSA9IHtcbiAgICAgICAgICBjb3VudDogbGFzdC5jb3VudCArIDEsXG4gICAgICAgICAgYWRkZWQ6IGFkZGVkLFxuICAgICAgICAgIHJlbW92ZWQ6IHJlbW92ZWRcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXBvbmVudHMucHVzaCh7XG4gICAgICAgICAgY291bnQ6IDEsXG4gICAgICAgICAgYWRkZWQ6IGFkZGVkLFxuICAgICAgICAgIHJlbW92ZWQ6IHJlbW92ZWRcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBleHRyYWN0Q29tbW9uOiBmdW5jdGlvbiBleHRyYWN0Q29tbW9uKGJhc2VQYXRoLCBuZXdTdHJpbmcsIG9sZFN0cmluZywgZGlhZ29uYWxQYXRoKSB7XG4gICAgICB2YXIgbmV3TGVuID0gbmV3U3RyaW5nLmxlbmd0aCxcbiAgICAgICAgICBvbGRMZW4gPSBvbGRTdHJpbmcubGVuZ3RoLFxuICAgICAgICAgIG5ld1BvcyA9IGJhc2VQYXRoLm5ld1BvcyxcbiAgICAgICAgICBvbGRQb3MgPSBuZXdQb3MgLSBkaWFnb25hbFBhdGgsXG4gICAgICAgICAgY29tbW9uQ291bnQgPSAwO1xuXG4gICAgICB3aGlsZSAobmV3UG9zICsgMSA8IG5ld0xlbiAmJiBvbGRQb3MgKyAxIDwgb2xkTGVuICYmIHRoaXMuZXF1YWxzKG5ld1N0cmluZ1tuZXdQb3MgKyAxXSwgb2xkU3RyaW5nW29sZFBvcyArIDFdKSkge1xuICAgICAgICBuZXdQb3MrKztcbiAgICAgICAgb2xkUG9zKys7XG4gICAgICAgIGNvbW1vbkNvdW50Kys7XG4gICAgICB9XG5cbiAgICAgIGlmIChjb21tb25Db3VudCkge1xuICAgICAgICBiYXNlUGF0aC5jb21wb25lbnRzLnB1c2goe1xuICAgICAgICAgIGNvdW50OiBjb21tb25Db3VudFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgYmFzZVBhdGgubmV3UG9zID0gbmV3UG9zO1xuICAgICAgcmV0dXJuIG9sZFBvcztcbiAgICB9LFxuICAgIGVxdWFsczogZnVuY3Rpb24gZXF1YWxzKGxlZnQsIHJpZ2h0KSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLmNvbXBhcmF0b3IpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5jb21wYXJhdG9yKGxlZnQsIHJpZ2h0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBsZWZ0ID09PSByaWdodCB8fCB0aGlzLm9wdGlvbnMuaWdub3JlQ2FzZSAmJiBsZWZ0LnRvTG93ZXJDYXNlKCkgPT09IHJpZ2h0LnRvTG93ZXJDYXNlKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICByZW1vdmVFbXB0eTogZnVuY3Rpb24gcmVtb3ZlRW1wdHkoYXJyYXkpIHtcbiAgICAgIHZhciByZXQgPSBbXTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoYXJyYXlbaV0pIHtcbiAgICAgICAgICByZXQucHVzaChhcnJheVtpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJldDtcbiAgICB9LFxuICAgIGNhc3RJbnB1dDogZnVuY3Rpb24gY2FzdElucHV0KHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSxcbiAgICB0b2tlbml6ZTogZnVuY3Rpb24gdG9rZW5pemUodmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZS5zcGxpdCgnJyk7XG4gICAgfSxcbiAgICBqb2luOiBmdW5jdGlvbiBqb2luKGNoYXJzKSB7XG4gICAgICByZXR1cm4gY2hhcnMuam9pbignJyk7XG4gICAgfVxuICB9O1xuXG4gIGZ1bmN0aW9uIGJ1aWxkVmFsdWVzKGRpZmYsIGNvbXBvbmVudHMsIG5ld1N0cmluZywgb2xkU3RyaW5nLCB1c2VMb25nZXN0VG9rZW4pIHtcbiAgICB2YXIgY29tcG9uZW50UG9zID0gMCxcbiAgICAgICAgY29tcG9uZW50TGVuID0gY29tcG9uZW50cy5sZW5ndGgsXG4gICAgICAgIG5ld1BvcyA9IDAsXG4gICAgICAgIG9sZFBvcyA9IDA7XG5cbiAgICBmb3IgKDsgY29tcG9uZW50UG9zIDwgY29tcG9uZW50TGVuOyBjb21wb25lbnRQb3MrKykge1xuICAgICAgdmFyIGNvbXBvbmVudCA9IGNvbXBvbmVudHNbY29tcG9uZW50UG9zXTtcblxuICAgICAgaWYgKCFjb21wb25lbnQucmVtb3ZlZCkge1xuICAgICAgICBpZiAoIWNvbXBvbmVudC5hZGRlZCAmJiB1c2VMb25nZXN0VG9rZW4pIHtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBuZXdTdHJpbmcuc2xpY2UobmV3UG9zLCBuZXdQb3MgKyBjb21wb25lbnQuY291bnQpO1xuICAgICAgICAgIHZhbHVlID0gdmFsdWUubWFwKGZ1bmN0aW9uICh2YWx1ZSwgaSkge1xuICAgICAgICAgICAgdmFyIG9sZFZhbHVlID0gb2xkU3RyaW5nW29sZFBvcyArIGldO1xuICAgICAgICAgICAgcmV0dXJuIG9sZFZhbHVlLmxlbmd0aCA+IHZhbHVlLmxlbmd0aCA/IG9sZFZhbHVlIDogdmFsdWU7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY29tcG9uZW50LnZhbHVlID0gZGlmZi5qb2luKHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb21wb25lbnQudmFsdWUgPSBkaWZmLmpvaW4obmV3U3RyaW5nLnNsaWNlKG5ld1BvcywgbmV3UG9zICsgY29tcG9uZW50LmNvdW50KSk7XG4gICAgICAgIH1cblxuICAgICAgICBuZXdQb3MgKz0gY29tcG9uZW50LmNvdW50OyAvLyBDb21tb24gY2FzZVxuXG4gICAgICAgIGlmICghY29tcG9uZW50LmFkZGVkKSB7XG4gICAgICAgICAgb2xkUG9zICs9IGNvbXBvbmVudC5jb3VudDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29tcG9uZW50LnZhbHVlID0gZGlmZi5qb2luKG9sZFN0cmluZy5zbGljZShvbGRQb3MsIG9sZFBvcyArIGNvbXBvbmVudC5jb3VudCkpO1xuICAgICAgICBvbGRQb3MgKz0gY29tcG9uZW50LmNvdW50OyAvLyBSZXZlcnNlIGFkZCBhbmQgcmVtb3ZlIHNvIHJlbW92ZXMgYXJlIG91dHB1dCBmaXJzdCB0byBtYXRjaCBjb21tb24gY29udmVudGlvblxuICAgICAgICAvLyBUaGUgZGlmZmluZyBhbGdvcml0aG0gaXMgdGllZCB0byBhZGQgdGhlbiByZW1vdmUgb3V0cHV0IGFuZCB0aGlzIGlzIHRoZSBzaW1wbGVzdFxuICAgICAgICAvLyByb3V0ZSB0byBnZXQgdGhlIGRlc2lyZWQgb3V0cHV0IHdpdGggbWluaW1hbCBvdmVyaGVhZC5cblxuICAgICAgICBpZiAoY29tcG9uZW50UG9zICYmIGNvbXBvbmVudHNbY29tcG9uZW50UG9zIC0gMV0uYWRkZWQpIHtcbiAgICAgICAgICB2YXIgdG1wID0gY29tcG9uZW50c1tjb21wb25lbnRQb3MgLSAxXTtcbiAgICAgICAgICBjb21wb25lbnRzW2NvbXBvbmVudFBvcyAtIDFdID0gY29tcG9uZW50c1tjb21wb25lbnRQb3NdO1xuICAgICAgICAgIGNvbXBvbmVudHNbY29tcG9uZW50UG9zXSA9IHRtcDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gLy8gU3BlY2lhbCBjYXNlIGhhbmRsZSBmb3Igd2hlbiBvbmUgdGVybWluYWwgaXMgaWdub3JlZCAoaS5lLiB3aGl0ZXNwYWNlKS5cbiAgICAvLyBGb3IgdGhpcyBjYXNlIHdlIG1lcmdlIHRoZSB0ZXJtaW5hbCBpbnRvIHRoZSBwcmlvciBzdHJpbmcgYW5kIGRyb3AgdGhlIGNoYW5nZS5cbiAgICAvLyBUaGlzIGlzIG9ubHkgYXZhaWxhYmxlIGZvciBzdHJpbmcgbW9kZS5cblxuXG4gICAgdmFyIGxhc3RDb21wb25lbnQgPSBjb21wb25lbnRzW2NvbXBvbmVudExlbiAtIDFdO1xuXG4gICAgaWYgKGNvbXBvbmVudExlbiA+IDEgJiYgdHlwZW9mIGxhc3RDb21wb25lbnQudmFsdWUgPT09ICdzdHJpbmcnICYmIChsYXN0Q29tcG9uZW50LmFkZGVkIHx8IGxhc3RDb21wb25lbnQucmVtb3ZlZCkgJiYgZGlmZi5lcXVhbHMoJycsIGxhc3RDb21wb25lbnQudmFsdWUpKSB7XG4gICAgICBjb21wb25lbnRzW2NvbXBvbmVudExlbiAtIDJdLnZhbHVlICs9IGxhc3RDb21wb25lbnQudmFsdWU7XG4gICAgICBjb21wb25lbnRzLnBvcCgpO1xuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRzO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xvbmVQYXRoKHBhdGgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmV3UG9zOiBwYXRoLm5ld1BvcyxcbiAgICAgIGNvbXBvbmVudHM6IHBhdGguY29tcG9uZW50cy5zbGljZSgwKVxuICAgIH07XG4gIH1cblxuICB2YXIgY2hhcmFjdGVyRGlmZiA9IG5ldyBEaWZmKCk7XG4gIGZ1bmN0aW9uIGRpZmZDaGFycyhvbGRTdHIsIG5ld1N0ciwgb3B0aW9ucykge1xuICAgIHJldHVybiBjaGFyYWN0ZXJEaWZmLmRpZmYob2xkU3RyLCBuZXdTdHIsIG9wdGlvbnMpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2VuZXJhdGVPcHRpb25zKG9wdGlvbnMsIGRlZmF1bHRzKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBkZWZhdWx0cy5jYWxsYmFjayA9IG9wdGlvbnM7XG4gICAgfSBlbHNlIGlmIChvcHRpb25zKSB7XG4gICAgICBmb3IgKHZhciBuYW1lIGluIG9wdGlvbnMpIHtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgICAgaWYgKG9wdGlvbnMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgICBkZWZhdWx0c1tuYW1lXSA9IG9wdGlvbnNbbmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGVmYXVsdHM7XG4gIH1cblxuICAvL1xuICAvLyBSYW5nZXMgYW5kIGV4Y2VwdGlvbnM6XG4gIC8vIExhdGluLTEgU3VwcGxlbWVudCwgMDA4MOKAkzAwRkZcbiAgLy8gIC0gVSswMEQ3ICDDlyBNdWx0aXBsaWNhdGlvbiBzaWduXG4gIC8vICAtIFUrMDBGNyAgw7cgRGl2aXNpb24gc2lnblxuICAvLyBMYXRpbiBFeHRlbmRlZC1BLCAwMTAw4oCTMDE3RlxuICAvLyBMYXRpbiBFeHRlbmRlZC1CLCAwMTgw4oCTMDI0RlxuICAvLyBJUEEgRXh0ZW5zaW9ucywgMDI1MOKAkzAyQUZcbiAgLy8gU3BhY2luZyBNb2RpZmllciBMZXR0ZXJzLCAwMkIw4oCTMDJGRlxuICAvLyAgLSBVKzAyQzcgIMuHICYjNzExOyAgQ2Fyb25cbiAgLy8gIC0gVSswMkQ4ICDLmCAmIzcyODsgIEJyZXZlXG4gIC8vICAtIFUrMDJEOSAgy5kgJiM3Mjk7ICBEb3QgQWJvdmVcbiAgLy8gIC0gVSswMkRBICDLmiAmIzczMDsgIFJpbmcgQWJvdmVcbiAgLy8gIC0gVSswMkRCICDLmyAmIzczMTsgIE9nb25la1xuICAvLyAgLSBVKzAyREMgIMucICYjNzMyOyAgU21hbGwgVGlsZGVcbiAgLy8gIC0gVSswMkREICDLnSAmIzczMzsgIERvdWJsZSBBY3V0ZSBBY2NlbnRcbiAgLy8gTGF0aW4gRXh0ZW5kZWQgQWRkaXRpb25hbCwgMUUwMOKAkzFFRkZcblxuICB2YXIgZXh0ZW5kZWRXb3JkQ2hhcnMgPSAvXltBLVphLXpcXHhDMC1cXHUwMkM2XFx1MDJDOC1cXHUwMkQ3XFx1MDJERS1cXHUwMkZGXFx1MUUwMC1cXHUxRUZGXSskLztcbiAgdmFyIHJlV2hpdGVzcGFjZSA9IC9cXFMvO1xuICB2YXIgd29yZERpZmYgPSBuZXcgRGlmZigpO1xuXG4gIHdvcmREaWZmLmVxdWFscyA9IGZ1bmN0aW9uIChsZWZ0LCByaWdodCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuaWdub3JlQ2FzZSkge1xuICAgICAgbGVmdCA9IGxlZnQudG9Mb3dlckNhc2UoKTtcbiAgICAgIHJpZ2h0ID0gcmlnaHQudG9Mb3dlckNhc2UoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGVmdCA9PT0gcmlnaHQgfHwgdGhpcy5vcHRpb25zLmlnbm9yZVdoaXRlc3BhY2UgJiYgIXJlV2hpdGVzcGFjZS50ZXN0KGxlZnQpICYmICFyZVdoaXRlc3BhY2UudGVzdChyaWdodCk7XG4gIH07XG5cbiAgd29yZERpZmYudG9rZW5pemUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAvLyBBbGwgd2hpdGVzcGFjZSBzeW1ib2xzIGV4Y2VwdCBuZXdsaW5lIGdyb3VwIGludG8gb25lIHRva2VuLCBlYWNoIG5ld2xpbmUgLSBpbiBzZXBhcmF0ZSB0b2tlblxuICAgIHZhciB0b2tlbnMgPSB2YWx1ZS5zcGxpdCgvKFteXFxTXFxyXFxuXSt8WygpW1xcXXt9J1wiXFxyXFxuXXxcXGIpLyk7IC8vIEpvaW4gdGhlIGJvdW5kYXJ5IHNwbGl0cyB0aGF0IHdlIGRvIG5vdCBjb25zaWRlciB0byBiZSBib3VuZGFyaWVzLiBUaGlzIGlzIHByaW1hcmlseSB0aGUgZXh0ZW5kZWQgTGF0aW4gY2hhcmFjdGVyIHNldC5cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgLy8gSWYgd2UgaGF2ZSBhbiBlbXB0eSBzdHJpbmcgaW4gdGhlIG5leHQgZmllbGQgYW5kIHdlIGhhdmUgb25seSB3b3JkIGNoYXJzIGJlZm9yZSBhbmQgYWZ0ZXIsIG1lcmdlXG4gICAgICBpZiAoIXRva2Vuc1tpICsgMV0gJiYgdG9rZW5zW2kgKyAyXSAmJiBleHRlbmRlZFdvcmRDaGFycy50ZXN0KHRva2Vuc1tpXSkgJiYgZXh0ZW5kZWRXb3JkQ2hhcnMudGVzdCh0b2tlbnNbaSArIDJdKSkge1xuICAgICAgICB0b2tlbnNbaV0gKz0gdG9rZW5zW2kgKyAyXTtcbiAgICAgICAgdG9rZW5zLnNwbGljZShpICsgMSwgMik7XG4gICAgICAgIGktLTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdG9rZW5zO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGRpZmZXb3JkcyhvbGRTdHIsIG5ld1N0ciwgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBnZW5lcmF0ZU9wdGlvbnMob3B0aW9ucywge1xuICAgICAgaWdub3JlV2hpdGVzcGFjZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiB3b3JkRGlmZi5kaWZmKG9sZFN0ciwgbmV3U3RyLCBvcHRpb25zKTtcbiAgfVxuICBmdW5jdGlvbiBkaWZmV29yZHNXaXRoU3BhY2Uob2xkU3RyLCBuZXdTdHIsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gd29yZERpZmYuZGlmZihvbGRTdHIsIG5ld1N0ciwgb3B0aW9ucyk7XG4gIH1cblxuICB2YXIgbGluZURpZmYgPSBuZXcgRGlmZigpO1xuXG4gIGxpbmVEaWZmLnRva2VuaXplID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgdmFyIHJldExpbmVzID0gW10sXG4gICAgICAgIGxpbmVzQW5kTmV3bGluZXMgPSB2YWx1ZS5zcGxpdCgvKFxcbnxcXHJcXG4pLyk7IC8vIElnbm9yZSB0aGUgZmluYWwgZW1wdHkgdG9rZW4gdGhhdCBvY2N1cnMgaWYgdGhlIHN0cmluZyBlbmRzIHdpdGggYSBuZXcgbGluZVxuXG4gICAgaWYgKCFsaW5lc0FuZE5ld2xpbmVzW2xpbmVzQW5kTmV3bGluZXMubGVuZ3RoIC0gMV0pIHtcbiAgICAgIGxpbmVzQW5kTmV3bGluZXMucG9wKCk7XG4gICAgfSAvLyBNZXJnZSB0aGUgY29udGVudCBhbmQgbGluZSBzZXBhcmF0b3JzIGludG8gc2luZ2xlIHRva2Vuc1xuXG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpbmVzQW5kTmV3bGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBsaW5lID0gbGluZXNBbmROZXdsaW5lc1tpXTtcblxuICAgICAgaWYgKGkgJSAyICYmICF0aGlzLm9wdGlvbnMubmV3bGluZUlzVG9rZW4pIHtcbiAgICAgICAgcmV0TGluZXNbcmV0TGluZXMubGVuZ3RoIC0gMV0gKz0gbGluZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaWdub3JlV2hpdGVzcGFjZSkge1xuICAgICAgICAgIGxpbmUgPSBsaW5lLnRyaW0oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldExpbmVzLnB1c2gobGluZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldExpbmVzO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGRpZmZMaW5lcyhvbGRTdHIsIG5ld1N0ciwgY2FsbGJhY2spIHtcbiAgICByZXR1cm4gbGluZURpZmYuZGlmZihvbGRTdHIsIG5ld1N0ciwgY2FsbGJhY2spO1xuICB9XG4gIGZ1bmN0aW9uIGRpZmZUcmltbWVkTGluZXMob2xkU3RyLCBuZXdTdHIsIGNhbGxiYWNrKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBnZW5lcmF0ZU9wdGlvbnMoY2FsbGJhY2ssIHtcbiAgICAgIGlnbm9yZVdoaXRlc3BhY2U6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gbGluZURpZmYuZGlmZihvbGRTdHIsIG5ld1N0ciwgb3B0aW9ucyk7XG4gIH1cblxuICB2YXIgc2VudGVuY2VEaWZmID0gbmV3IERpZmYoKTtcblxuICBzZW50ZW5jZURpZmYudG9rZW5pemUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUuc3BsaXQoLyhcXFMuKz9bLiE/XSkoPz1cXHMrfCQpLyk7XG4gIH07XG5cbiAgZnVuY3Rpb24gZGlmZlNlbnRlbmNlcyhvbGRTdHIsIG5ld1N0ciwgY2FsbGJhY2spIHtcbiAgICByZXR1cm4gc2VudGVuY2VEaWZmLmRpZmYob2xkU3RyLCBuZXdTdHIsIGNhbGxiYWNrKTtcbiAgfVxuXG4gIHZhciBjc3NEaWZmID0gbmV3IERpZmYoKTtcblxuICBjc3NEaWZmLnRva2VuaXplID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLnNwbGl0KC8oW3t9OjssXXxcXHMrKS8pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGRpZmZDc3Mob2xkU3RyLCBuZXdTdHIsIGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIGNzc0RpZmYuZGlmZihvbGRTdHIsIG5ld1N0ciwgY2FsbGJhY2spO1xuICB9XG5cbiAgZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICAgIF90eXBlb2YgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgX3R5cGVvZiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBfdHlwZW9mKG9iaik7XG4gIH1cblxuICBmdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gICAgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkoYXJyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICAgIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xuICB9XG5cbiAgZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICAgIGlmICghbykgcmV0dXJuO1xuICAgIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gICAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICAgIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gICAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB9XG5cbiAgZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICAgIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgYXJyMltpXSA9IGFycltpXTtcblxuICAgIHJldHVybiBhcnIyO1xuICB9XG5cbiAgZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xuICB9XG5cbiAgdmFyIG9iamVjdFByb3RvdHlwZVRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbiAgdmFyIGpzb25EaWZmID0gbmV3IERpZmYoKTsgLy8gRGlzY3JpbWluYXRlIGJldHdlZW4gdHdvIGxpbmVzIG9mIHByZXR0eS1wcmludGVkLCBzZXJpYWxpemVkIEpTT04gd2hlcmUgb25lIG9mIHRoZW0gaGFzIGFcbiAgLy8gZGFuZ2xpbmcgY29tbWEgYW5kIHRoZSBvdGhlciBkb2Vzbid0LiBUdXJucyBvdXQgaW5jbHVkaW5nIHRoZSBkYW5nbGluZyBjb21tYSB5aWVsZHMgdGhlIG5pY2VzdCBvdXRwdXQ6XG5cbiAganNvbkRpZmYudXNlTG9uZ2VzdFRva2VuID0gdHJ1ZTtcbiAganNvbkRpZmYudG9rZW5pemUgPSBsaW5lRGlmZi50b2tlbml6ZTtcblxuICBqc29uRGlmZi5jYXN0SW5wdXQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICB2YXIgX3RoaXMkb3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcbiAgICAgICAgdW5kZWZpbmVkUmVwbGFjZW1lbnQgPSBfdGhpcyRvcHRpb25zLnVuZGVmaW5lZFJlcGxhY2VtZW50LFxuICAgICAgICBfdGhpcyRvcHRpb25zJHN0cmluZ2kgPSBfdGhpcyRvcHRpb25zLnN0cmluZ2lmeVJlcGxhY2VyLFxuICAgICAgICBzdHJpbmdpZnlSZXBsYWNlciA9IF90aGlzJG9wdGlvbnMkc3RyaW5naSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKGssIHYpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgdiA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWRSZXBsYWNlbWVudCA6IHY7XG4gICAgfSA6IF90aGlzJG9wdGlvbnMkc3RyaW5naTtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHZhbHVlIDogSlNPTi5zdHJpbmdpZnkoY2Fub25pY2FsaXplKHZhbHVlLCBudWxsLCBudWxsLCBzdHJpbmdpZnlSZXBsYWNlciksIHN0cmluZ2lmeVJlcGxhY2VyLCAnICAnKTtcbiAgfTtcblxuICBqc29uRGlmZi5lcXVhbHMgPSBmdW5jdGlvbiAobGVmdCwgcmlnaHQpIHtcbiAgICByZXR1cm4gRGlmZi5wcm90b3R5cGUuZXF1YWxzLmNhbGwoanNvbkRpZmYsIGxlZnQucmVwbGFjZSgvLChbXFxyXFxuXSkvZywgJyQxJyksIHJpZ2h0LnJlcGxhY2UoLywoW1xcclxcbl0pL2csICckMScpKTtcbiAgfTtcblxuICBmdW5jdGlvbiBkaWZmSnNvbihvbGRPYmosIG5ld09iaiwgb3B0aW9ucykge1xuICAgIHJldHVybiBqc29uRGlmZi5kaWZmKG9sZE9iaiwgbmV3T2JqLCBvcHRpb25zKTtcbiAgfSAvLyBUaGlzIGZ1bmN0aW9uIGhhbmRsZXMgdGhlIHByZXNlbmNlIG9mIGNpcmN1bGFyIHJlZmVyZW5jZXMgYnkgYmFpbGluZyBvdXQgd2hlbiBlbmNvdW50ZXJpbmcgYW5cbiAgLy8gb2JqZWN0IHRoYXQgaXMgYWxyZWFkeSBvbiB0aGUgXCJzdGFja1wiIG9mIGl0ZW1zIGJlaW5nIHByb2Nlc3NlZC4gQWNjZXB0cyBhbiBvcHRpb25hbCByZXBsYWNlclxuXG4gIGZ1bmN0aW9uIGNhbm9uaWNhbGl6ZShvYmosIHN0YWNrLCByZXBsYWNlbWVudFN0YWNrLCByZXBsYWNlciwga2V5KSB7XG4gICAgc3RhY2sgPSBzdGFjayB8fCBbXTtcbiAgICByZXBsYWNlbWVudFN0YWNrID0gcmVwbGFjZW1lbnRTdGFjayB8fCBbXTtcblxuICAgIGlmIChyZXBsYWNlcikge1xuICAgICAgb2JqID0gcmVwbGFjZXIoa2V5LCBvYmopO1xuICAgIH1cblxuICAgIHZhciBpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHN0YWNrLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoc3RhY2tbaV0gPT09IG9iaikge1xuICAgICAgICByZXR1cm4gcmVwbGFjZW1lbnRTdGFja1tpXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgY2Fub25pY2FsaXplZE9iajtcblxuICAgIGlmICgnW29iamVjdCBBcnJheV0nID09PSBvYmplY3RQcm90b3R5cGVUb1N0cmluZy5jYWxsKG9iaikpIHtcbiAgICAgIHN0YWNrLnB1c2gob2JqKTtcbiAgICAgIGNhbm9uaWNhbGl6ZWRPYmogPSBuZXcgQXJyYXkob2JqLmxlbmd0aCk7XG4gICAgICByZXBsYWNlbWVudFN0YWNrLnB1c2goY2Fub25pY2FsaXplZE9iaik7XG5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBvYmoubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgY2Fub25pY2FsaXplZE9ialtpXSA9IGNhbm9uaWNhbGl6ZShvYmpbaV0sIHN0YWNrLCByZXBsYWNlbWVudFN0YWNrLCByZXBsYWNlciwga2V5KTtcbiAgICAgIH1cblxuICAgICAgc3RhY2sucG9wKCk7XG4gICAgICByZXBsYWNlbWVudFN0YWNrLnBvcCgpO1xuICAgICAgcmV0dXJuIGNhbm9uaWNhbGl6ZWRPYmo7XG4gICAgfVxuXG4gICAgaWYgKG9iaiAmJiBvYmoudG9KU09OKSB7XG4gICAgICBvYmogPSBvYmoudG9KU09OKCk7XG4gICAgfVxuXG4gICAgaWYgKF90eXBlb2Yob2JqKSA9PT0gJ29iamVjdCcgJiYgb2JqICE9PSBudWxsKSB7XG4gICAgICBzdGFjay5wdXNoKG9iaik7XG4gICAgICBjYW5vbmljYWxpemVkT2JqID0ge307XG4gICAgICByZXBsYWNlbWVudFN0YWNrLnB1c2goY2Fub25pY2FsaXplZE9iaik7XG5cbiAgICAgIHZhciBzb3J0ZWRLZXlzID0gW10sXG4gICAgICAgICAgX2tleTtcblxuICAgICAgZm9yIChfa2V5IGluIG9iaikge1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KF9rZXkpKSB7XG4gICAgICAgICAgc29ydGVkS2V5cy5wdXNoKF9rZXkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHNvcnRlZEtleXMuc29ydCgpO1xuXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgc29ydGVkS2V5cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBfa2V5ID0gc29ydGVkS2V5c1tpXTtcbiAgICAgICAgY2Fub25pY2FsaXplZE9ialtfa2V5XSA9IGNhbm9uaWNhbGl6ZShvYmpbX2tleV0sIHN0YWNrLCByZXBsYWNlbWVudFN0YWNrLCByZXBsYWNlciwgX2tleSk7XG4gICAgICB9XG5cbiAgICAgIHN0YWNrLnBvcCgpO1xuICAgICAgcmVwbGFjZW1lbnRTdGFjay5wb3AoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2Fub25pY2FsaXplZE9iaiA9IG9iajtcbiAgICB9XG5cbiAgICByZXR1cm4gY2Fub25pY2FsaXplZE9iajtcbiAgfVxuXG4gIHZhciBhcnJheURpZmYgPSBuZXcgRGlmZigpO1xuXG4gIGFycmF5RGlmZi50b2tlbml6ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5zbGljZSgpO1xuICB9O1xuXG4gIGFycmF5RGlmZi5qb2luID0gYXJyYXlEaWZmLnJlbW92ZUVtcHR5ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGRpZmZBcnJheXMob2xkQXJyLCBuZXdBcnIsIGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIGFycmF5RGlmZi5kaWZmKG9sZEFyciwgbmV3QXJyLCBjYWxsYmFjayk7XG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZVBhdGNoKHVuaURpZmYpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIGRpZmZzdHIgPSB1bmlEaWZmLnNwbGl0KC9cXHJcXG58W1xcblxcdlxcZlxcclxceDg1XS8pLFxuICAgICAgICBkZWxpbWl0ZXJzID0gdW5pRGlmZi5tYXRjaCgvXFxyXFxufFtcXG5cXHZcXGZcXHJcXHg4NV0vZykgfHwgW10sXG4gICAgICAgIGxpc3QgPSBbXSxcbiAgICAgICAgaSA9IDA7XG5cbiAgICBmdW5jdGlvbiBwYXJzZUluZGV4KCkge1xuICAgICAgdmFyIGluZGV4ID0ge307XG4gICAgICBsaXN0LnB1c2goaW5kZXgpOyAvLyBQYXJzZSBkaWZmIG1ldGFkYXRhXG5cbiAgICAgIHdoaWxlIChpIDwgZGlmZnN0ci5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGxpbmUgPSBkaWZmc3RyW2ldOyAvLyBGaWxlIGhlYWRlciBmb3VuZCwgZW5kIHBhcnNpbmcgZGlmZiBtZXRhZGF0YVxuXG4gICAgICAgIGlmICgvXihcXC1cXC1cXC18XFwrXFwrXFwrfEBAKVxccy8udGVzdChsaW5lKSkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9IC8vIERpZmYgaW5kZXhcblxuXG4gICAgICAgIHZhciBoZWFkZXIgPSAvXig/OkluZGV4OnxkaWZmKD86IC1yIFxcdyspKylcXHMrKC4rPylcXHMqJC8uZXhlYyhsaW5lKTtcblxuICAgICAgICBpZiAoaGVhZGVyKSB7XG4gICAgICAgICAgaW5kZXguaW5kZXggPSBoZWFkZXJbMV07XG4gICAgICAgIH1cblxuICAgICAgICBpKys7XG4gICAgICB9IC8vIFBhcnNlIGZpbGUgaGVhZGVycyBpZiB0aGV5IGFyZSBkZWZpbmVkLiBVbmlmaWVkIGRpZmYgcmVxdWlyZXMgdGhlbSwgYnV0XG4gICAgICAvLyB0aGVyZSdzIG5vIHRlY2huaWNhbCBpc3N1ZXMgdG8gaGF2ZSBhbiBpc29sYXRlZCBodW5rIHdpdGhvdXQgZmlsZSBoZWFkZXJcblxuXG4gICAgICBwYXJzZUZpbGVIZWFkZXIoaW5kZXgpO1xuICAgICAgcGFyc2VGaWxlSGVhZGVyKGluZGV4KTsgLy8gUGFyc2UgaHVua3NcblxuICAgICAgaW5kZXguaHVua3MgPSBbXTtcblxuICAgICAgd2hpbGUgKGkgPCBkaWZmc3RyLmxlbmd0aCkge1xuICAgICAgICB2YXIgX2xpbmUgPSBkaWZmc3RyW2ldO1xuXG4gICAgICAgIGlmICgvXihJbmRleDp8ZGlmZnxcXC1cXC1cXC18XFwrXFwrXFwrKVxccy8udGVzdChfbGluZSkpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfSBlbHNlIGlmICgvXkBALy50ZXN0KF9saW5lKSkge1xuICAgICAgICAgIGluZGV4Lmh1bmtzLnB1c2gocGFyc2VIdW5rKCkpO1xuICAgICAgICB9IGVsc2UgaWYgKF9saW5lICYmIG9wdGlvbnMuc3RyaWN0KSB7XG4gICAgICAgICAgLy8gSWdub3JlIHVuZXhwZWN0ZWQgY29udGVudCB1bmxlc3MgaW4gc3RyaWN0IG1vZGVcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gbGluZSAnICsgKGkgKyAxKSArICcgJyArIEpTT04uc3RyaW5naWZ5KF9saW5lKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSAvLyBQYXJzZXMgdGhlIC0tLSBhbmQgKysrIGhlYWRlcnMsIGlmIG5vbmUgYXJlIGZvdW5kLCBubyBsaW5lc1xuICAgIC8vIGFyZSBjb25zdW1lZC5cblxuXG4gICAgZnVuY3Rpb24gcGFyc2VGaWxlSGVhZGVyKGluZGV4KSB7XG4gICAgICB2YXIgZmlsZUhlYWRlciA9IC9eKC0tLXxcXCtcXCtcXCspXFxzKyguKikkLy5leGVjKGRpZmZzdHJbaV0pO1xuXG4gICAgICBpZiAoZmlsZUhlYWRlcikge1xuICAgICAgICB2YXIga2V5UHJlZml4ID0gZmlsZUhlYWRlclsxXSA9PT0gJy0tLScgPyAnb2xkJyA6ICduZXcnO1xuICAgICAgICB2YXIgZGF0YSA9IGZpbGVIZWFkZXJbMl0uc3BsaXQoJ1xcdCcsIDIpO1xuICAgICAgICB2YXIgZmlsZU5hbWUgPSBkYXRhWzBdLnJlcGxhY2UoL1xcXFxcXFxcL2csICdcXFxcJyk7XG5cbiAgICAgICAgaWYgKC9eXCIuKlwiJC8udGVzdChmaWxlTmFtZSkpIHtcbiAgICAgICAgICBmaWxlTmFtZSA9IGZpbGVOYW1lLnN1YnN0cigxLCBmaWxlTmFtZS5sZW5ndGggLSAyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGluZGV4W2tleVByZWZpeCArICdGaWxlTmFtZSddID0gZmlsZU5hbWU7XG4gICAgICAgIGluZGV4W2tleVByZWZpeCArICdIZWFkZXInXSA9IChkYXRhWzFdIHx8ICcnKS50cmltKCk7XG4gICAgICAgIGkrKztcbiAgICAgIH1cbiAgICB9IC8vIFBhcnNlcyBhIGh1bmtcbiAgICAvLyBUaGlzIGFzc3VtZXMgdGhhdCB3ZSBhcmUgYXQgdGhlIHN0YXJ0IG9mIGEgaHVuay5cblxuXG4gICAgZnVuY3Rpb24gcGFyc2VIdW5rKCkge1xuICAgICAgdmFyIGNodW5rSGVhZGVySW5kZXggPSBpLFxuICAgICAgICAgIGNodW5rSGVhZGVyTGluZSA9IGRpZmZzdHJbaSsrXSxcbiAgICAgICAgICBjaHVua0hlYWRlciA9IGNodW5rSGVhZGVyTGluZS5zcGxpdCgvQEAgLShcXGQrKSg/OiwoXFxkKykpPyBcXCsoXFxkKykoPzosKFxcZCspKT8gQEAvKTtcbiAgICAgIHZhciBodW5rID0ge1xuICAgICAgICBvbGRTdGFydDogK2NodW5rSGVhZGVyWzFdLFxuICAgICAgICBvbGRMaW5lczogdHlwZW9mIGNodW5rSGVhZGVyWzJdID09PSAndW5kZWZpbmVkJyA/IDEgOiArY2h1bmtIZWFkZXJbMl0sXG4gICAgICAgIG5ld1N0YXJ0OiArY2h1bmtIZWFkZXJbM10sXG4gICAgICAgIG5ld0xpbmVzOiB0eXBlb2YgY2h1bmtIZWFkZXJbNF0gPT09ICd1bmRlZmluZWQnID8gMSA6ICtjaHVua0hlYWRlcls0XSxcbiAgICAgICAgbGluZXM6IFtdLFxuICAgICAgICBsaW5lZGVsaW1pdGVyczogW11cbiAgICAgIH07IC8vIFVuaWZpZWQgRGlmZiBGb3JtYXQgcXVpcms6IElmIHRoZSBjaHVuayBzaXplIGlzIDAsXG4gICAgICAvLyB0aGUgZmlyc3QgbnVtYmVyIGlzIG9uZSBsb3dlciB0aGFuIG9uZSB3b3VsZCBleHBlY3QuXG4gICAgICAvLyBodHRwczovL3d3dy5hcnRpbWEuY29tL3dlYmxvZ3Mvdmlld3Bvc3QuanNwP3RocmVhZD0xNjQyOTNcblxuICAgICAgaWYgKGh1bmsub2xkTGluZXMgPT09IDApIHtcbiAgICAgICAgaHVuay5vbGRTdGFydCArPSAxO1xuICAgICAgfVxuXG4gICAgICBpZiAoaHVuay5uZXdMaW5lcyA9PT0gMCkge1xuICAgICAgICBodW5rLm5ld1N0YXJ0ICs9IDE7XG4gICAgICB9XG5cbiAgICAgIHZhciBhZGRDb3VudCA9IDAsXG4gICAgICAgICAgcmVtb3ZlQ291bnQgPSAwO1xuXG4gICAgICBmb3IgKDsgaSA8IGRpZmZzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gTGluZXMgc3RhcnRpbmcgd2l0aCAnLS0tJyBjb3VsZCBiZSBtaXN0YWtlbiBmb3IgdGhlIFwicmVtb3ZlIGxpbmVcIiBvcGVyYXRpb25cbiAgICAgICAgLy8gQnV0IHRoZXkgY291bGQgYmUgdGhlIGhlYWRlciBmb3IgdGhlIG5leHQgZmlsZS4gVGhlcmVmb3JlIHBydW5lIHN1Y2ggY2FzZXMgb3V0LlxuICAgICAgICBpZiAoZGlmZnN0cltpXS5pbmRleE9mKCctLS0gJykgPT09IDAgJiYgaSArIDIgPCBkaWZmc3RyLmxlbmd0aCAmJiBkaWZmc3RyW2kgKyAxXS5pbmRleE9mKCcrKysgJykgPT09IDAgJiYgZGlmZnN0cltpICsgMl0uaW5kZXhPZignQEAnKSA9PT0gMCkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG9wZXJhdGlvbiA9IGRpZmZzdHJbaV0ubGVuZ3RoID09IDAgJiYgaSAhPSBkaWZmc3RyLmxlbmd0aCAtIDEgPyAnICcgOiBkaWZmc3RyW2ldWzBdO1xuXG4gICAgICAgIGlmIChvcGVyYXRpb24gPT09ICcrJyB8fCBvcGVyYXRpb24gPT09ICctJyB8fCBvcGVyYXRpb24gPT09ICcgJyB8fCBvcGVyYXRpb24gPT09ICdcXFxcJykge1xuICAgICAgICAgIGh1bmsubGluZXMucHVzaChkaWZmc3RyW2ldKTtcbiAgICAgICAgICBodW5rLmxpbmVkZWxpbWl0ZXJzLnB1c2goZGVsaW1pdGVyc1tpXSB8fCAnXFxuJyk7XG5cbiAgICAgICAgICBpZiAob3BlcmF0aW9uID09PSAnKycpIHtcbiAgICAgICAgICAgIGFkZENvdW50Kys7XG4gICAgICAgICAgfSBlbHNlIGlmIChvcGVyYXRpb24gPT09ICctJykge1xuICAgICAgICAgICAgcmVtb3ZlQ291bnQrKztcbiAgICAgICAgICB9IGVsc2UgaWYgKG9wZXJhdGlvbiA9PT0gJyAnKSB7XG4gICAgICAgICAgICBhZGRDb3VudCsrO1xuICAgICAgICAgICAgcmVtb3ZlQ291bnQrKztcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gLy8gSGFuZGxlIHRoZSBlbXB0eSBibG9jayBjb3VudCBjYXNlXG5cblxuICAgICAgaWYgKCFhZGRDb3VudCAmJiBodW5rLm5ld0xpbmVzID09PSAxKSB7XG4gICAgICAgIGh1bmsubmV3TGluZXMgPSAwO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXJlbW92ZUNvdW50ICYmIGh1bmsub2xkTGluZXMgPT09IDEpIHtcbiAgICAgICAgaHVuay5vbGRMaW5lcyA9IDA7XG4gICAgICB9IC8vIFBlcmZvcm0gb3B0aW9uYWwgc2FuaXR5IGNoZWNraW5nXG5cblxuICAgICAgaWYgKG9wdGlvbnMuc3RyaWN0KSB7XG4gICAgICAgIGlmIChhZGRDb3VudCAhPT0gaHVuay5uZXdMaW5lcykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQWRkZWQgbGluZSBjb3VudCBkaWQgbm90IG1hdGNoIGZvciBodW5rIGF0IGxpbmUgJyArIChjaHVua0hlYWRlckluZGV4ICsgMSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlbW92ZUNvdW50ICE9PSBodW5rLm9sZExpbmVzKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZW1vdmVkIGxpbmUgY291bnQgZGlkIG5vdCBtYXRjaCBmb3IgaHVuayBhdCBsaW5lICcgKyAoY2h1bmtIZWFkZXJJbmRleCArIDEpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaHVuaztcbiAgICB9XG5cbiAgICB3aGlsZSAoaSA8IGRpZmZzdHIubGVuZ3RoKSB7XG4gICAgICBwYXJzZUluZGV4KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpc3Q7XG4gIH1cblxuICAvLyBJdGVyYXRvciB0aGF0IHRyYXZlcnNlcyBpbiB0aGUgcmFuZ2Ugb2YgW21pbiwgbWF4XSwgc3RlcHBpbmdcbiAgLy8gYnkgZGlzdGFuY2UgZnJvbSBhIGdpdmVuIHN0YXJ0IHBvc2l0aW9uLiBJLmUuIGZvciBbMCwgNF0sIHdpdGhcbiAgLy8gc3RhcnQgb2YgMiwgdGhpcyB3aWxsIGl0ZXJhdGUgMiwgMywgMSwgNCwgMC5cbiAgZnVuY3Rpb24gZGlzdGFuY2VJdGVyYXRvciAoc3RhcnQsIG1pbkxpbmUsIG1heExpbmUpIHtcbiAgICB2YXIgd2FudEZvcndhcmQgPSB0cnVlLFxuICAgICAgICBiYWNrd2FyZEV4aGF1c3RlZCA9IGZhbHNlLFxuICAgICAgICBmb3J3YXJkRXhoYXVzdGVkID0gZmFsc2UsXG4gICAgICAgIGxvY2FsT2Zmc2V0ID0gMTtcbiAgICByZXR1cm4gZnVuY3Rpb24gaXRlcmF0b3IoKSB7XG4gICAgICBpZiAod2FudEZvcndhcmQgJiYgIWZvcndhcmRFeGhhdXN0ZWQpIHtcbiAgICAgICAgaWYgKGJhY2t3YXJkRXhoYXVzdGVkKSB7XG4gICAgICAgICAgbG9jYWxPZmZzZXQrKztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3YW50Rm9yd2FyZCA9IGZhbHNlO1xuICAgICAgICB9IC8vIENoZWNrIGlmIHRyeWluZyB0byBmaXQgYmV5b25kIHRleHQgbGVuZ3RoLCBhbmQgaWYgbm90LCBjaGVjayBpdCBmaXRzXG4gICAgICAgIC8vIGFmdGVyIG9mZnNldCBsb2NhdGlvbiAob3IgZGVzaXJlZCBsb2NhdGlvbiBvbiBmaXJzdCBpdGVyYXRpb24pXG5cblxuICAgICAgICBpZiAoc3RhcnQgKyBsb2NhbE9mZnNldCA8PSBtYXhMaW5lKSB7XG4gICAgICAgICAgcmV0dXJuIGxvY2FsT2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yd2FyZEV4aGF1c3RlZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICghYmFja3dhcmRFeGhhdXN0ZWQpIHtcbiAgICAgICAgaWYgKCFmb3J3YXJkRXhoYXVzdGVkKSB7XG4gICAgICAgICAgd2FudEZvcndhcmQgPSB0cnVlO1xuICAgICAgICB9IC8vIENoZWNrIGlmIHRyeWluZyB0byBmaXQgYmVmb3JlIHRleHQgYmVnaW5uaW5nLCBhbmQgaWYgbm90LCBjaGVjayBpdCBmaXRzXG4gICAgICAgIC8vIGJlZm9yZSBvZmZzZXQgbG9jYXRpb25cblxuXG4gICAgICAgIGlmIChtaW5MaW5lIDw9IHN0YXJ0IC0gbG9jYWxPZmZzZXQpIHtcbiAgICAgICAgICByZXR1cm4gLWxvY2FsT2Zmc2V0Kys7XG4gICAgICAgIH1cblxuICAgICAgICBiYWNrd2FyZEV4aGF1c3RlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiBpdGVyYXRvcigpO1xuICAgICAgfSAvLyBXZSB0cmllZCB0byBmaXQgaHVuayBiZWZvcmUgdGV4dCBiZWdpbm5pbmcgYW5kIGJleW9uZCB0ZXh0IGxlbmd0aCwgdGhlblxuICAgICAgLy8gaHVuayBjYW4ndCBmaXQgb24gdGhlIHRleHQuIFJldHVybiB1bmRlZmluZWRcblxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBhcHBseVBhdGNoKHNvdXJjZSwgdW5pRGlmZikge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcblxuICAgIGlmICh0eXBlb2YgdW5pRGlmZiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHVuaURpZmYgPSBwYXJzZVBhdGNoKHVuaURpZmYpO1xuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KHVuaURpZmYpKSB7XG4gICAgICBpZiAodW5pRGlmZi5sZW5ndGggPiAxKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignYXBwbHlQYXRjaCBvbmx5IHdvcmtzIHdpdGggYSBzaW5nbGUgaW5wdXQuJyk7XG4gICAgICB9XG5cbiAgICAgIHVuaURpZmYgPSB1bmlEaWZmWzBdO1xuICAgIH0gLy8gQXBwbHkgdGhlIGRpZmYgdG8gdGhlIGlucHV0XG5cblxuICAgIHZhciBsaW5lcyA9IHNvdXJjZS5zcGxpdCgvXFxyXFxufFtcXG5cXHZcXGZcXHJcXHg4NV0vKSxcbiAgICAgICAgZGVsaW1pdGVycyA9IHNvdXJjZS5tYXRjaCgvXFxyXFxufFtcXG5cXHZcXGZcXHJcXHg4NV0vZykgfHwgW10sXG4gICAgICAgIGh1bmtzID0gdW5pRGlmZi5odW5rcyxcbiAgICAgICAgY29tcGFyZUxpbmUgPSBvcHRpb25zLmNvbXBhcmVMaW5lIHx8IGZ1bmN0aW9uIChsaW5lTnVtYmVyLCBsaW5lLCBvcGVyYXRpb24sIHBhdGNoQ29udGVudCkge1xuICAgICAgcmV0dXJuIGxpbmUgPT09IHBhdGNoQ29udGVudDtcbiAgICB9LFxuICAgICAgICBlcnJvckNvdW50ID0gMCxcbiAgICAgICAgZnV6ekZhY3RvciA9IG9wdGlvbnMuZnV6ekZhY3RvciB8fCAwLFxuICAgICAgICBtaW5MaW5lID0gMCxcbiAgICAgICAgb2Zmc2V0ID0gMCxcbiAgICAgICAgcmVtb3ZlRU9GTkwsXG4gICAgICAgIGFkZEVPRk5MO1xuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiB0aGUgaHVuayBleGFjdGx5IGZpdHMgb24gdGhlIHByb3ZpZGVkIGxvY2F0aW9uXG4gICAgICovXG5cblxuICAgIGZ1bmN0aW9uIGh1bmtGaXRzKGh1bmssIHRvUG9zKSB7XG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGh1bmsubGluZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgdmFyIGxpbmUgPSBodW5rLmxpbmVzW2pdLFxuICAgICAgICAgICAgb3BlcmF0aW9uID0gbGluZS5sZW5ndGggPiAwID8gbGluZVswXSA6ICcgJyxcbiAgICAgICAgICAgIGNvbnRlbnQgPSBsaW5lLmxlbmd0aCA+IDAgPyBsaW5lLnN1YnN0cigxKSA6IGxpbmU7XG5cbiAgICAgICAgaWYgKG9wZXJhdGlvbiA9PT0gJyAnIHx8IG9wZXJhdGlvbiA9PT0gJy0nKSB7XG4gICAgICAgICAgLy8gQ29udGV4dCBzYW5pdHkgY2hlY2tcbiAgICAgICAgICBpZiAoIWNvbXBhcmVMaW5lKHRvUG9zICsgMSwgbGluZXNbdG9Qb3NdLCBvcGVyYXRpb24sIGNvbnRlbnQpKSB7XG4gICAgICAgICAgICBlcnJvckNvdW50Kys7XG5cbiAgICAgICAgICAgIGlmIChlcnJvckNvdW50ID4gZnV6ekZhY3Rvcikge1xuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdG9Qb3MrKztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IC8vIFNlYXJjaCBiZXN0IGZpdCBvZmZzZXRzIGZvciBlYWNoIGh1bmsgYmFzZWQgb24gdGhlIHByZXZpb3VzIG9uZXNcblxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBodW5rcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGh1bmsgPSBodW5rc1tpXSxcbiAgICAgICAgICBtYXhMaW5lID0gbGluZXMubGVuZ3RoIC0gaHVuay5vbGRMaW5lcyxcbiAgICAgICAgICBsb2NhbE9mZnNldCA9IDAsXG4gICAgICAgICAgdG9Qb3MgPSBvZmZzZXQgKyBodW5rLm9sZFN0YXJ0IC0gMTtcbiAgICAgIHZhciBpdGVyYXRvciA9IGRpc3RhbmNlSXRlcmF0b3IodG9Qb3MsIG1pbkxpbmUsIG1heExpbmUpO1xuXG4gICAgICBmb3IgKDsgbG9jYWxPZmZzZXQgIT09IHVuZGVmaW5lZDsgbG9jYWxPZmZzZXQgPSBpdGVyYXRvcigpKSB7XG4gICAgICAgIGlmIChodW5rRml0cyhodW5rLCB0b1BvcyArIGxvY2FsT2Zmc2V0KSkge1xuICAgICAgICAgIGh1bmsub2Zmc2V0ID0gb2Zmc2V0ICs9IGxvY2FsT2Zmc2V0O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChsb2NhbE9mZnNldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0gLy8gU2V0IGxvd2VyIHRleHQgbGltaXQgdG8gZW5kIG9mIHRoZSBjdXJyZW50IGh1bmssIHNvIG5leHQgb25lcyBkb24ndCB0cnlcbiAgICAgIC8vIHRvIGZpdCBvdmVyIGFscmVhZHkgcGF0Y2hlZCB0ZXh0XG5cblxuICAgICAgbWluTGluZSA9IGh1bmsub2Zmc2V0ICsgaHVuay5vbGRTdGFydCArIGh1bmsub2xkTGluZXM7XG4gICAgfSAvLyBBcHBseSBwYXRjaCBodW5rc1xuXG5cbiAgICB2YXIgZGlmZk9mZnNldCA9IDA7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgaHVua3MubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2h1bmsgPSBodW5rc1tfaV0sXG4gICAgICAgICAgX3RvUG9zID0gX2h1bmsub2xkU3RhcnQgKyBfaHVuay5vZmZzZXQgKyBkaWZmT2Zmc2V0IC0gMTtcblxuICAgICAgZGlmZk9mZnNldCArPSBfaHVuay5uZXdMaW5lcyAtIF9odW5rLm9sZExpbmVzO1xuXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IF9odW5rLmxpbmVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHZhciBsaW5lID0gX2h1bmsubGluZXNbal0sXG4gICAgICAgICAgICBvcGVyYXRpb24gPSBsaW5lLmxlbmd0aCA+IDAgPyBsaW5lWzBdIDogJyAnLFxuICAgICAgICAgICAgY29udGVudCA9IGxpbmUubGVuZ3RoID4gMCA/IGxpbmUuc3Vic3RyKDEpIDogbGluZSxcbiAgICAgICAgICAgIGRlbGltaXRlciA9IF9odW5rLmxpbmVkZWxpbWl0ZXJzW2pdO1xuXG4gICAgICAgIGlmIChvcGVyYXRpb24gPT09ICcgJykge1xuICAgICAgICAgIF90b1BvcysrO1xuICAgICAgICB9IGVsc2UgaWYgKG9wZXJhdGlvbiA9PT0gJy0nKSB7XG4gICAgICAgICAgbGluZXMuc3BsaWNlKF90b1BvcywgMSk7XG4gICAgICAgICAgZGVsaW1pdGVycy5zcGxpY2UoX3RvUG9zLCAxKTtcbiAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgICB9IGVsc2UgaWYgKG9wZXJhdGlvbiA9PT0gJysnKSB7XG4gICAgICAgICAgbGluZXMuc3BsaWNlKF90b1BvcywgMCwgY29udGVudCk7XG4gICAgICAgICAgZGVsaW1pdGVycy5zcGxpY2UoX3RvUG9zLCAwLCBkZWxpbWl0ZXIpO1xuICAgICAgICAgIF90b1BvcysrO1xuICAgICAgICB9IGVsc2UgaWYgKG9wZXJhdGlvbiA9PT0gJ1xcXFwnKSB7XG4gICAgICAgICAgdmFyIHByZXZpb3VzT3BlcmF0aW9uID0gX2h1bmsubGluZXNbaiAtIDFdID8gX2h1bmsubGluZXNbaiAtIDFdWzBdIDogbnVsbDtcblxuICAgICAgICAgIGlmIChwcmV2aW91c09wZXJhdGlvbiA9PT0gJysnKSB7XG4gICAgICAgICAgICByZW1vdmVFT0ZOTCA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIGlmIChwcmV2aW91c09wZXJhdGlvbiA9PT0gJy0nKSB7XG4gICAgICAgICAgICBhZGRFT0ZOTCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSAvLyBIYW5kbGUgRU9GTkwgaW5zZXJ0aW9uL3JlbW92YWxcblxuXG4gICAgaWYgKHJlbW92ZUVPRk5MKSB7XG4gICAgICB3aGlsZSAoIWxpbmVzW2xpbmVzLmxlbmd0aCAtIDFdKSB7XG4gICAgICAgIGxpbmVzLnBvcCgpO1xuICAgICAgICBkZWxpbWl0ZXJzLnBvcCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYWRkRU9GTkwpIHtcbiAgICAgIGxpbmVzLnB1c2goJycpO1xuICAgICAgZGVsaW1pdGVycy5wdXNoKCdcXG4nKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbGluZXMubGVuZ3RoIC0gMTsgX2srKykge1xuICAgICAgbGluZXNbX2tdID0gbGluZXNbX2tdICsgZGVsaW1pdGVyc1tfa107XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpbmVzLmpvaW4oJycpO1xuICB9IC8vIFdyYXBwZXIgdGhhdCBzdXBwb3J0cyBtdWx0aXBsZSBmaWxlIHBhdGNoZXMgdmlhIGNhbGxiYWNrcy5cblxuICBmdW5jdGlvbiBhcHBseVBhdGNoZXModW5pRGlmZiwgb3B0aW9ucykge1xuICAgIGlmICh0eXBlb2YgdW5pRGlmZiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHVuaURpZmYgPSBwYXJzZVBhdGNoKHVuaURpZmYpO1xuICAgIH1cblxuICAgIHZhciBjdXJyZW50SW5kZXggPSAwO1xuXG4gICAgZnVuY3Rpb24gcHJvY2Vzc0luZGV4KCkge1xuICAgICAgdmFyIGluZGV4ID0gdW5pRGlmZltjdXJyZW50SW5kZXgrK107XG5cbiAgICAgIGlmICghaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnMuY29tcGxldGUoKTtcbiAgICAgIH1cblxuICAgICAgb3B0aW9ucy5sb2FkRmlsZShpbmRleCwgZnVuY3Rpb24gKGVyciwgZGF0YSkge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgcmV0dXJuIG9wdGlvbnMuY29tcGxldGUoZXJyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB1cGRhdGVkQ29udGVudCA9IGFwcGx5UGF0Y2goZGF0YSwgaW5kZXgsIG9wdGlvbnMpO1xuICAgICAgICBvcHRpb25zLnBhdGNoZWQoaW5kZXgsIHVwZGF0ZWRDb250ZW50LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuY29tcGxldGUoZXJyKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwcm9jZXNzSW5kZXgoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm9jZXNzSW5kZXgoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0cnVjdHVyZWRQYXRjaChvbGRGaWxlTmFtZSwgbmV3RmlsZU5hbWUsIG9sZFN0ciwgbmV3U3RyLCBvbGRIZWFkZXIsIG5ld0hlYWRlciwgb3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5jb250ZXh0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgb3B0aW9ucy5jb250ZXh0ID0gNDtcbiAgICB9XG5cbiAgICB2YXIgZGlmZiA9IGRpZmZMaW5lcyhvbGRTdHIsIG5ld1N0ciwgb3B0aW9ucyk7XG4gICAgZGlmZi5wdXNoKHtcbiAgICAgIHZhbHVlOiAnJyxcbiAgICAgIGxpbmVzOiBbXVxuICAgIH0pOyAvLyBBcHBlbmQgYW4gZW1wdHkgdmFsdWUgdG8gbWFrZSBjbGVhbnVwIGVhc2llclxuXG4gICAgZnVuY3Rpb24gY29udGV4dExpbmVzKGxpbmVzKSB7XG4gICAgICByZXR1cm4gbGluZXMubWFwKGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgICByZXR1cm4gJyAnICsgZW50cnk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgaHVua3MgPSBbXTtcbiAgICB2YXIgb2xkUmFuZ2VTdGFydCA9IDAsXG4gICAgICAgIG5ld1JhbmdlU3RhcnQgPSAwLFxuICAgICAgICBjdXJSYW5nZSA9IFtdLFxuICAgICAgICBvbGRMaW5lID0gMSxcbiAgICAgICAgbmV3TGluZSA9IDE7XG5cbiAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcChpKSB7XG4gICAgICB2YXIgY3VycmVudCA9IGRpZmZbaV0sXG4gICAgICAgICAgbGluZXMgPSBjdXJyZW50LmxpbmVzIHx8IGN1cnJlbnQudmFsdWUucmVwbGFjZSgvXFxuJC8sICcnKS5zcGxpdCgnXFxuJyk7XG4gICAgICBjdXJyZW50LmxpbmVzID0gbGluZXM7XG5cbiAgICAgIGlmIChjdXJyZW50LmFkZGVkIHx8IGN1cnJlbnQucmVtb3ZlZCkge1xuICAgICAgICB2YXIgX2N1clJhbmdlO1xuXG4gICAgICAgIC8vIElmIHdlIGhhdmUgcHJldmlvdXMgY29udGV4dCwgc3RhcnQgd2l0aCB0aGF0XG4gICAgICAgIGlmICghb2xkUmFuZ2VTdGFydCkge1xuICAgICAgICAgIHZhciBwcmV2ID0gZGlmZltpIC0gMV07XG4gICAgICAgICAgb2xkUmFuZ2VTdGFydCA9IG9sZExpbmU7XG4gICAgICAgICAgbmV3UmFuZ2VTdGFydCA9IG5ld0xpbmU7XG5cbiAgICAgICAgICBpZiAocHJldikge1xuICAgICAgICAgICAgY3VyUmFuZ2UgPSBvcHRpb25zLmNvbnRleHQgPiAwID8gY29udGV4dExpbmVzKHByZXYubGluZXMuc2xpY2UoLW9wdGlvbnMuY29udGV4dCkpIDogW107XG4gICAgICAgICAgICBvbGRSYW5nZVN0YXJ0IC09IGN1clJhbmdlLmxlbmd0aDtcbiAgICAgICAgICAgIG5ld1JhbmdlU3RhcnQgLT0gY3VyUmFuZ2UubGVuZ3RoO1xuICAgICAgICAgIH1cbiAgICAgICAgfSAvLyBPdXRwdXQgb3VyIGNoYW5nZXNcblxuXG4gICAgICAgIChfY3VyUmFuZ2UgPSBjdXJSYW5nZSkucHVzaC5hcHBseShfY3VyUmFuZ2UsIF90b0NvbnN1bWFibGVBcnJheShsaW5lcy5tYXAoZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICAgICAgcmV0dXJuIChjdXJyZW50LmFkZGVkID8gJysnIDogJy0nKSArIGVudHJ5O1xuICAgICAgICB9KSkpOyAvLyBUcmFjayB0aGUgdXBkYXRlZCBmaWxlIHBvc2l0aW9uXG5cblxuICAgICAgICBpZiAoY3VycmVudC5hZGRlZCkge1xuICAgICAgICAgIG5ld0xpbmUgKz0gbGluZXMubGVuZ3RoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9sZExpbmUgKz0gbGluZXMubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBJZGVudGljYWwgY29udGV4dCBsaW5lcy4gVHJhY2sgbGluZSBjaGFuZ2VzXG4gICAgICAgIGlmIChvbGRSYW5nZVN0YXJ0KSB7XG4gICAgICAgICAgLy8gQ2xvc2Ugb3V0IGFueSBjaGFuZ2VzIHRoYXQgaGF2ZSBiZWVuIG91dHB1dCAob3Igam9pbiBvdmVybGFwcGluZylcbiAgICAgICAgICBpZiAobGluZXMubGVuZ3RoIDw9IG9wdGlvbnMuY29udGV4dCAqIDIgJiYgaSA8IGRpZmYubGVuZ3RoIC0gMikge1xuICAgICAgICAgICAgdmFyIF9jdXJSYW5nZTI7XG5cbiAgICAgICAgICAgIC8vIE92ZXJsYXBwaW5nXG4gICAgICAgICAgICAoX2N1clJhbmdlMiA9IGN1clJhbmdlKS5wdXNoLmFwcGx5KF9jdXJSYW5nZTIsIF90b0NvbnN1bWFibGVBcnJheShjb250ZXh0TGluZXMobGluZXMpKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBfY3VyUmFuZ2UzO1xuXG4gICAgICAgICAgICAvLyBlbmQgdGhlIHJhbmdlIGFuZCBvdXRwdXRcbiAgICAgICAgICAgIHZhciBjb250ZXh0U2l6ZSA9IE1hdGgubWluKGxpbmVzLmxlbmd0aCwgb3B0aW9ucy5jb250ZXh0KTtcblxuICAgICAgICAgICAgKF9jdXJSYW5nZTMgPSBjdXJSYW5nZSkucHVzaC5hcHBseShfY3VyUmFuZ2UzLCBfdG9Db25zdW1hYmxlQXJyYXkoY29udGV4dExpbmVzKGxpbmVzLnNsaWNlKDAsIGNvbnRleHRTaXplKSkpKTtcblxuICAgICAgICAgICAgdmFyIGh1bmsgPSB7XG4gICAgICAgICAgICAgIG9sZFN0YXJ0OiBvbGRSYW5nZVN0YXJ0LFxuICAgICAgICAgICAgICBvbGRMaW5lczogb2xkTGluZSAtIG9sZFJhbmdlU3RhcnQgKyBjb250ZXh0U2l6ZSxcbiAgICAgICAgICAgICAgbmV3U3RhcnQ6IG5ld1JhbmdlU3RhcnQsXG4gICAgICAgICAgICAgIG5ld0xpbmVzOiBuZXdMaW5lIC0gbmV3UmFuZ2VTdGFydCArIGNvbnRleHRTaXplLFxuICAgICAgICAgICAgICBsaW5lczogY3VyUmFuZ2VcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmIChpID49IGRpZmYubGVuZ3RoIC0gMiAmJiBsaW5lcy5sZW5ndGggPD0gb3B0aW9ucy5jb250ZXh0KSB7XG4gICAgICAgICAgICAgIC8vIEVPRiBpcyBpbnNpZGUgdGhpcyBodW5rXG4gICAgICAgICAgICAgIHZhciBvbGRFT0ZOZXdsaW5lID0gL1xcbiQvLnRlc3Qob2xkU3RyKTtcbiAgICAgICAgICAgICAgdmFyIG5ld0VPRk5ld2xpbmUgPSAvXFxuJC8udGVzdChuZXdTdHIpO1xuICAgICAgICAgICAgICB2YXIgbm9ObEJlZm9yZUFkZHMgPSBsaW5lcy5sZW5ndGggPT0gMCAmJiBjdXJSYW5nZS5sZW5ndGggPiBodW5rLm9sZExpbmVzO1xuXG4gICAgICAgICAgICAgIGlmICghb2xkRU9GTmV3bGluZSAmJiBub05sQmVmb3JlQWRkcyAmJiBvbGRTdHIubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIC8vIHNwZWNpYWwgY2FzZTogb2xkIGhhcyBubyBlb2wgYW5kIG5vIHRyYWlsaW5nIGNvbnRleHQ7IG5vLW5sIGNhbiBlbmQgdXAgYmVmb3JlIGFkZHNcbiAgICAgICAgICAgICAgICAvLyBob3dldmVyLCBpZiB0aGUgb2xkIGZpbGUgaXMgZW1wdHksIGRvIG5vdCBvdXRwdXQgdGhlIG5vLW5sIGxpbmVcbiAgICAgICAgICAgICAgICBjdXJSYW5nZS5zcGxpY2UoaHVuay5vbGRMaW5lcywgMCwgJ1xcXFwgTm8gbmV3bGluZSBhdCBlbmQgb2YgZmlsZScpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFvbGRFT0ZOZXdsaW5lICYmICFub05sQmVmb3JlQWRkcyB8fCAhbmV3RU9GTmV3bGluZSkge1xuICAgICAgICAgICAgICAgIGN1clJhbmdlLnB1c2goJ1xcXFwgTm8gbmV3bGluZSBhdCBlbmQgb2YgZmlsZScpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGh1bmtzLnB1c2goaHVuayk7XG4gICAgICAgICAgICBvbGRSYW5nZVN0YXJ0ID0gMDtcbiAgICAgICAgICAgIG5ld1JhbmdlU3RhcnQgPSAwO1xuICAgICAgICAgICAgY3VyUmFuZ2UgPSBbXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBvbGRMaW5lICs9IGxpbmVzLmxlbmd0aDtcbiAgICAgICAgbmV3TGluZSArPSBsaW5lcy5sZW5ndGg7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGlmZi5sZW5ndGg7IGkrKykge1xuICAgICAgX2xvb3AoaSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIG9sZEZpbGVOYW1lOiBvbGRGaWxlTmFtZSxcbiAgICAgIG5ld0ZpbGVOYW1lOiBuZXdGaWxlTmFtZSxcbiAgICAgIG9sZEhlYWRlcjogb2xkSGVhZGVyLFxuICAgICAgbmV3SGVhZGVyOiBuZXdIZWFkZXIsXG4gICAgICBodW5rczogaHVua3NcbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIGZvcm1hdFBhdGNoKGRpZmYpIHtcbiAgICB2YXIgcmV0ID0gW107XG5cbiAgICBpZiAoZGlmZi5vbGRGaWxlTmFtZSA9PSBkaWZmLm5ld0ZpbGVOYW1lKSB7XG4gICAgICByZXQucHVzaCgnSW5kZXg6ICcgKyBkaWZmLm9sZEZpbGVOYW1lKTtcbiAgICB9XG5cbiAgICByZXQucHVzaCgnPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PScpO1xuICAgIHJldC5wdXNoKCctLS0gJyArIGRpZmYub2xkRmlsZU5hbWUgKyAodHlwZW9mIGRpZmYub2xkSGVhZGVyID09PSAndW5kZWZpbmVkJyA/ICcnIDogJ1xcdCcgKyBkaWZmLm9sZEhlYWRlcikpO1xuICAgIHJldC5wdXNoKCcrKysgJyArIGRpZmYubmV3RmlsZU5hbWUgKyAodHlwZW9mIGRpZmYubmV3SGVhZGVyID09PSAndW5kZWZpbmVkJyA/ICcnIDogJ1xcdCcgKyBkaWZmLm5ld0hlYWRlcikpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkaWZmLmh1bmtzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaHVuayA9IGRpZmYuaHVua3NbaV07IC8vIFVuaWZpZWQgRGlmZiBGb3JtYXQgcXVpcms6IElmIHRoZSBjaHVuayBzaXplIGlzIDAsXG4gICAgICAvLyB0aGUgZmlyc3QgbnVtYmVyIGlzIG9uZSBsb3dlciB0aGFuIG9uZSB3b3VsZCBleHBlY3QuXG4gICAgICAvLyBodHRwczovL3d3dy5hcnRpbWEuY29tL3dlYmxvZ3Mvdmlld3Bvc3QuanNwP3RocmVhZD0xNjQyOTNcblxuICAgICAgaWYgKGh1bmsub2xkTGluZXMgPT09IDApIHtcbiAgICAgICAgaHVuay5vbGRTdGFydCAtPSAxO1xuICAgICAgfVxuXG4gICAgICBpZiAoaHVuay5uZXdMaW5lcyA9PT0gMCkge1xuICAgICAgICBodW5rLm5ld1N0YXJ0IC09IDE7XG4gICAgICB9XG5cbiAgICAgIHJldC5wdXNoKCdAQCAtJyArIGh1bmsub2xkU3RhcnQgKyAnLCcgKyBodW5rLm9sZExpbmVzICsgJyArJyArIGh1bmsubmV3U3RhcnQgKyAnLCcgKyBodW5rLm5ld0xpbmVzICsgJyBAQCcpO1xuICAgICAgcmV0LnB1c2guYXBwbHkocmV0LCBodW5rLmxpbmVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0LmpvaW4oJ1xcbicpICsgJ1xcbic7XG4gIH1cbiAgZnVuY3Rpb24gY3JlYXRlVHdvRmlsZXNQYXRjaChvbGRGaWxlTmFtZSwgbmV3RmlsZU5hbWUsIG9sZFN0ciwgbmV3U3RyLCBvbGRIZWFkZXIsIG5ld0hlYWRlciwgb3B0aW9ucykge1xuICAgIHJldHVybiBmb3JtYXRQYXRjaChzdHJ1Y3R1cmVkUGF0Y2gob2xkRmlsZU5hbWUsIG5ld0ZpbGVOYW1lLCBvbGRTdHIsIG5ld1N0ciwgb2xkSGVhZGVyLCBuZXdIZWFkZXIsIG9wdGlvbnMpKTtcbiAgfVxuICBmdW5jdGlvbiBjcmVhdGVQYXRjaChmaWxlTmFtZSwgb2xkU3RyLCBuZXdTdHIsIG9sZEhlYWRlciwgbmV3SGVhZGVyLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIGNyZWF0ZVR3b0ZpbGVzUGF0Y2goZmlsZU5hbWUsIGZpbGVOYW1lLCBvbGRTdHIsIG5ld1N0ciwgb2xkSGVhZGVyLCBuZXdIZWFkZXIsIG9wdGlvbnMpO1xuICB9XG5cbiAgZnVuY3Rpb24gYXJyYXlFcXVhbChhLCBiKSB7XG4gICAgaWYgKGEubGVuZ3RoICE9PSBiLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiBhcnJheVN0YXJ0c1dpdGgoYSwgYik7XG4gIH1cbiAgZnVuY3Rpb24gYXJyYXlTdGFydHNXaXRoKGFycmF5LCBzdGFydCkge1xuICAgIGlmIChzdGFydC5sZW5ndGggPiBhcnJheS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0YXJ0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoc3RhcnRbaV0gIT09IGFycmF5W2ldKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbGNMaW5lQ291bnQoaHVuaykge1xuICAgIHZhciBfY2FsY09sZE5ld0xpbmVDb3VudCA9IGNhbGNPbGROZXdMaW5lQ291bnQoaHVuay5saW5lcyksXG4gICAgICAgIG9sZExpbmVzID0gX2NhbGNPbGROZXdMaW5lQ291bnQub2xkTGluZXMsXG4gICAgICAgIG5ld0xpbmVzID0gX2NhbGNPbGROZXdMaW5lQ291bnQubmV3TGluZXM7XG5cbiAgICBpZiAob2xkTGluZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaHVuay5vbGRMaW5lcyA9IG9sZExpbmVzO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgaHVuay5vbGRMaW5lcztcbiAgICB9XG5cbiAgICBpZiAobmV3TGluZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaHVuay5uZXdMaW5lcyA9IG5ld0xpbmVzO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgaHVuay5uZXdMaW5lcztcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gbWVyZ2UobWluZSwgdGhlaXJzLCBiYXNlKSB7XG4gICAgbWluZSA9IGxvYWRQYXRjaChtaW5lLCBiYXNlKTtcbiAgICB0aGVpcnMgPSBsb2FkUGF0Y2godGhlaXJzLCBiYXNlKTtcbiAgICB2YXIgcmV0ID0ge307IC8vIEZvciBpbmRleCB3ZSBqdXN0IGxldCBpdCBwYXNzIHRocm91Z2ggYXMgaXQgZG9lc24ndCBoYXZlIGFueSBuZWNlc3NhcnkgbWVhbmluZy5cbiAgICAvLyBMZWF2aW5nIHNhbml0eSBjaGVja3Mgb24gdGhpcyB0byB0aGUgQVBJIGNvbnN1bWVyIHRoYXQgbWF5IGtub3cgbW9yZSBhYm91dCB0aGVcbiAgICAvLyBtZWFuaW5nIGluIHRoZWlyIG93biBjb250ZXh0LlxuXG4gICAgaWYgKG1pbmUuaW5kZXggfHwgdGhlaXJzLmluZGV4KSB7XG4gICAgICByZXQuaW5kZXggPSBtaW5lLmluZGV4IHx8IHRoZWlycy5pbmRleDtcbiAgICB9XG5cbiAgICBpZiAobWluZS5uZXdGaWxlTmFtZSB8fCB0aGVpcnMubmV3RmlsZU5hbWUpIHtcbiAgICAgIGlmICghZmlsZU5hbWVDaGFuZ2VkKG1pbmUpKSB7XG4gICAgICAgIC8vIE5vIGhlYWRlciBvciBubyBjaGFuZ2UgaW4gb3VycywgdXNlIHRoZWlycyAoYW5kIG91cnMgaWYgdGhlaXJzIGRvZXMgbm90IGV4aXN0KVxuICAgICAgICByZXQub2xkRmlsZU5hbWUgPSB0aGVpcnMub2xkRmlsZU5hbWUgfHwgbWluZS5vbGRGaWxlTmFtZTtcbiAgICAgICAgcmV0Lm5ld0ZpbGVOYW1lID0gdGhlaXJzLm5ld0ZpbGVOYW1lIHx8IG1pbmUubmV3RmlsZU5hbWU7XG4gICAgICAgIHJldC5vbGRIZWFkZXIgPSB0aGVpcnMub2xkSGVhZGVyIHx8IG1pbmUub2xkSGVhZGVyO1xuICAgICAgICByZXQubmV3SGVhZGVyID0gdGhlaXJzLm5ld0hlYWRlciB8fCBtaW5lLm5ld0hlYWRlcjtcbiAgICAgIH0gZWxzZSBpZiAoIWZpbGVOYW1lQ2hhbmdlZCh0aGVpcnMpKSB7XG4gICAgICAgIC8vIE5vIGhlYWRlciBvciBubyBjaGFuZ2UgaW4gdGhlaXJzLCB1c2Ugb3Vyc1xuICAgICAgICByZXQub2xkRmlsZU5hbWUgPSBtaW5lLm9sZEZpbGVOYW1lO1xuICAgICAgICByZXQubmV3RmlsZU5hbWUgPSBtaW5lLm5ld0ZpbGVOYW1lO1xuICAgICAgICByZXQub2xkSGVhZGVyID0gbWluZS5vbGRIZWFkZXI7XG4gICAgICAgIHJldC5uZXdIZWFkZXIgPSBtaW5lLm5ld0hlYWRlcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEJvdGggY2hhbmdlZC4uLiBmaWd1cmUgaXQgb3V0XG4gICAgICAgIHJldC5vbGRGaWxlTmFtZSA9IHNlbGVjdEZpZWxkKHJldCwgbWluZS5vbGRGaWxlTmFtZSwgdGhlaXJzLm9sZEZpbGVOYW1lKTtcbiAgICAgICAgcmV0Lm5ld0ZpbGVOYW1lID0gc2VsZWN0RmllbGQocmV0LCBtaW5lLm5ld0ZpbGVOYW1lLCB0aGVpcnMubmV3RmlsZU5hbWUpO1xuICAgICAgICByZXQub2xkSGVhZGVyID0gc2VsZWN0RmllbGQocmV0LCBtaW5lLm9sZEhlYWRlciwgdGhlaXJzLm9sZEhlYWRlcik7XG4gICAgICAgIHJldC5uZXdIZWFkZXIgPSBzZWxlY3RGaWVsZChyZXQsIG1pbmUubmV3SGVhZGVyLCB0aGVpcnMubmV3SGVhZGVyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXQuaHVua3MgPSBbXTtcbiAgICB2YXIgbWluZUluZGV4ID0gMCxcbiAgICAgICAgdGhlaXJzSW5kZXggPSAwLFxuICAgICAgICBtaW5lT2Zmc2V0ID0gMCxcbiAgICAgICAgdGhlaXJzT2Zmc2V0ID0gMDtcblxuICAgIHdoaWxlIChtaW5lSW5kZXggPCBtaW5lLmh1bmtzLmxlbmd0aCB8fCB0aGVpcnNJbmRleCA8IHRoZWlycy5odW5rcy5sZW5ndGgpIHtcbiAgICAgIHZhciBtaW5lQ3VycmVudCA9IG1pbmUuaHVua3NbbWluZUluZGV4XSB8fCB7XG4gICAgICAgIG9sZFN0YXJ0OiBJbmZpbml0eVxuICAgICAgfSxcbiAgICAgICAgICB0aGVpcnNDdXJyZW50ID0gdGhlaXJzLmh1bmtzW3RoZWlyc0luZGV4XSB8fCB7XG4gICAgICAgIG9sZFN0YXJ0OiBJbmZpbml0eVxuICAgICAgfTtcblxuICAgICAgaWYgKGh1bmtCZWZvcmUobWluZUN1cnJlbnQsIHRoZWlyc0N1cnJlbnQpKSB7XG4gICAgICAgIC8vIFRoaXMgcGF0Y2ggZG9lcyBub3Qgb3ZlcmxhcCB3aXRoIGFueSBvZiB0aGUgb3RoZXJzLCB5YXkuXG4gICAgICAgIHJldC5odW5rcy5wdXNoKGNsb25lSHVuayhtaW5lQ3VycmVudCwgbWluZU9mZnNldCkpO1xuICAgICAgICBtaW5lSW5kZXgrKztcbiAgICAgICAgdGhlaXJzT2Zmc2V0ICs9IG1pbmVDdXJyZW50Lm5ld0xpbmVzIC0gbWluZUN1cnJlbnQub2xkTGluZXM7XG4gICAgICB9IGVsc2UgaWYgKGh1bmtCZWZvcmUodGhlaXJzQ3VycmVudCwgbWluZUN1cnJlbnQpKSB7XG4gICAgICAgIC8vIFRoaXMgcGF0Y2ggZG9lcyBub3Qgb3ZlcmxhcCB3aXRoIGFueSBvZiB0aGUgb3RoZXJzLCB5YXkuXG4gICAgICAgIHJldC5odW5rcy5wdXNoKGNsb25lSHVuayh0aGVpcnNDdXJyZW50LCB0aGVpcnNPZmZzZXQpKTtcbiAgICAgICAgdGhlaXJzSW5kZXgrKztcbiAgICAgICAgbWluZU9mZnNldCArPSB0aGVpcnNDdXJyZW50Lm5ld0xpbmVzIC0gdGhlaXJzQ3VycmVudC5vbGRMaW5lcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE92ZXJsYXAsIG1lcmdlIGFzIGJlc3Qgd2UgY2FuXG4gICAgICAgIHZhciBtZXJnZWRIdW5rID0ge1xuICAgICAgICAgIG9sZFN0YXJ0OiBNYXRoLm1pbihtaW5lQ3VycmVudC5vbGRTdGFydCwgdGhlaXJzQ3VycmVudC5vbGRTdGFydCksXG4gICAgICAgICAgb2xkTGluZXM6IDAsXG4gICAgICAgICAgbmV3U3RhcnQ6IE1hdGgubWluKG1pbmVDdXJyZW50Lm5ld1N0YXJ0ICsgbWluZU9mZnNldCwgdGhlaXJzQ3VycmVudC5vbGRTdGFydCArIHRoZWlyc09mZnNldCksXG4gICAgICAgICAgbmV3TGluZXM6IDAsXG4gICAgICAgICAgbGluZXM6IFtdXG4gICAgICAgIH07XG4gICAgICAgIG1lcmdlTGluZXMobWVyZ2VkSHVuaywgbWluZUN1cnJlbnQub2xkU3RhcnQsIG1pbmVDdXJyZW50LmxpbmVzLCB0aGVpcnNDdXJyZW50Lm9sZFN0YXJ0LCB0aGVpcnNDdXJyZW50LmxpbmVzKTtcbiAgICAgICAgdGhlaXJzSW5kZXgrKztcbiAgICAgICAgbWluZUluZGV4Kys7XG4gICAgICAgIHJldC5odW5rcy5wdXNoKG1lcmdlZEh1bmspO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBmdW5jdGlvbiBsb2FkUGF0Y2gocGFyYW0sIGJhc2UpIHtcbiAgICBpZiAodHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKC9eQEAvbS50ZXN0KHBhcmFtKSB8fCAvXkluZGV4Oi9tLnRlc3QocGFyYW0pKSB7XG4gICAgICAgIHJldHVybiBwYXJzZVBhdGNoKHBhcmFtKVswXTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFiYXNlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTXVzdCBwcm92aWRlIGEgYmFzZSByZWZlcmVuY2Ugb3IgcGFzcyBpbiBhIHBhdGNoJyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdHJ1Y3R1cmVkUGF0Y2godW5kZWZpbmVkLCB1bmRlZmluZWQsIGJhc2UsIHBhcmFtKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyYW07XG4gIH1cblxuICBmdW5jdGlvbiBmaWxlTmFtZUNoYW5nZWQocGF0Y2gpIHtcbiAgICByZXR1cm4gcGF0Y2gubmV3RmlsZU5hbWUgJiYgcGF0Y2gubmV3RmlsZU5hbWUgIT09IHBhdGNoLm9sZEZpbGVOYW1lO1xuICB9XG5cbiAgZnVuY3Rpb24gc2VsZWN0RmllbGQoaW5kZXgsIG1pbmUsIHRoZWlycykge1xuICAgIGlmIChtaW5lID09PSB0aGVpcnMpIHtcbiAgICAgIHJldHVybiBtaW5lO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbmRleC5jb25mbGljdCA9IHRydWU7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBtaW5lOiBtaW5lLFxuICAgICAgICB0aGVpcnM6IHRoZWlyc1xuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBodW5rQmVmb3JlKHRlc3QsIGNoZWNrKSB7XG4gICAgcmV0dXJuIHRlc3Qub2xkU3RhcnQgPCBjaGVjay5vbGRTdGFydCAmJiB0ZXN0Lm9sZFN0YXJ0ICsgdGVzdC5vbGRMaW5lcyA8IGNoZWNrLm9sZFN0YXJ0O1xuICB9XG5cbiAgZnVuY3Rpb24gY2xvbmVIdW5rKGh1bmssIG9mZnNldCkge1xuICAgIHJldHVybiB7XG4gICAgICBvbGRTdGFydDogaHVuay5vbGRTdGFydCxcbiAgICAgIG9sZExpbmVzOiBodW5rLm9sZExpbmVzLFxuICAgICAgbmV3U3RhcnQ6IGh1bmsubmV3U3RhcnQgKyBvZmZzZXQsXG4gICAgICBuZXdMaW5lczogaHVuay5uZXdMaW5lcyxcbiAgICAgIGxpbmVzOiBodW5rLmxpbmVzXG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1lcmdlTGluZXMoaHVuaywgbWluZU9mZnNldCwgbWluZUxpbmVzLCB0aGVpck9mZnNldCwgdGhlaXJMaW5lcykge1xuICAgIC8vIFRoaXMgd2lsbCBnZW5lcmFsbHkgcmVzdWx0IGluIGEgY29uZmxpY3RlZCBodW5rLCBidXQgdGhlcmUgYXJlIGNhc2VzIHdoZXJlIHRoZSBjb250ZXh0XG4gICAgLy8gaXMgdGhlIG9ubHkgb3ZlcmxhcCB3aGVyZSB3ZSBjYW4gc3VjY2Vzc2Z1bGx5IG1lcmdlIHRoZSBjb250ZW50IGhlcmUuXG4gICAgdmFyIG1pbmUgPSB7XG4gICAgICBvZmZzZXQ6IG1pbmVPZmZzZXQsXG4gICAgICBsaW5lczogbWluZUxpbmVzLFxuICAgICAgaW5kZXg6IDBcbiAgICB9LFxuICAgICAgICB0aGVpciA9IHtcbiAgICAgIG9mZnNldDogdGhlaXJPZmZzZXQsXG4gICAgICBsaW5lczogdGhlaXJMaW5lcyxcbiAgICAgIGluZGV4OiAwXG4gICAgfTsgLy8gSGFuZGxlIGFueSBsZWFkaW5nIGNvbnRlbnRcblxuICAgIGluc2VydExlYWRpbmcoaHVuaywgbWluZSwgdGhlaXIpO1xuICAgIGluc2VydExlYWRpbmcoaHVuaywgdGhlaXIsIG1pbmUpOyAvLyBOb3cgaW4gdGhlIG92ZXJsYXAgY29udGVudC4gU2NhbiB0aHJvdWdoIGFuZCBzZWxlY3QgdGhlIGJlc3QgY2hhbmdlcyBmcm9tIGVhY2guXG5cbiAgICB3aGlsZSAobWluZS5pbmRleCA8IG1pbmUubGluZXMubGVuZ3RoICYmIHRoZWlyLmluZGV4IDwgdGhlaXIubGluZXMubGVuZ3RoKSB7XG4gICAgICB2YXIgbWluZUN1cnJlbnQgPSBtaW5lLmxpbmVzW21pbmUuaW5kZXhdLFxuICAgICAgICAgIHRoZWlyQ3VycmVudCA9IHRoZWlyLmxpbmVzW3RoZWlyLmluZGV4XTtcblxuICAgICAgaWYgKChtaW5lQ3VycmVudFswXSA9PT0gJy0nIHx8IG1pbmVDdXJyZW50WzBdID09PSAnKycpICYmICh0aGVpckN1cnJlbnRbMF0gPT09ICctJyB8fCB0aGVpckN1cnJlbnRbMF0gPT09ICcrJykpIHtcbiAgICAgICAgLy8gQm90aCBtb2RpZmllZCAuLi5cbiAgICAgICAgbXV0dWFsQ2hhbmdlKGh1bmssIG1pbmUsIHRoZWlyKTtcbiAgICAgIH0gZWxzZSBpZiAobWluZUN1cnJlbnRbMF0gPT09ICcrJyAmJiB0aGVpckN1cnJlbnRbMF0gPT09ICcgJykge1xuICAgICAgICB2YXIgX2h1bmskbGluZXM7XG5cbiAgICAgICAgLy8gTWluZSBpbnNlcnRlZFxuICAgICAgICAoX2h1bmskbGluZXMgPSBodW5rLmxpbmVzKS5wdXNoLmFwcGx5KF9odW5rJGxpbmVzLCBfdG9Db25zdW1hYmxlQXJyYXkoY29sbGVjdENoYW5nZShtaW5lKSkpO1xuICAgICAgfSBlbHNlIGlmICh0aGVpckN1cnJlbnRbMF0gPT09ICcrJyAmJiBtaW5lQ3VycmVudFswXSA9PT0gJyAnKSB7XG4gICAgICAgIHZhciBfaHVuayRsaW5lczI7XG5cbiAgICAgICAgLy8gVGhlaXJzIGluc2VydGVkXG4gICAgICAgIChfaHVuayRsaW5lczIgPSBodW5rLmxpbmVzKS5wdXNoLmFwcGx5KF9odW5rJGxpbmVzMiwgX3RvQ29uc3VtYWJsZUFycmF5KGNvbGxlY3RDaGFuZ2UodGhlaXIpKSk7XG4gICAgICB9IGVsc2UgaWYgKG1pbmVDdXJyZW50WzBdID09PSAnLScgJiYgdGhlaXJDdXJyZW50WzBdID09PSAnICcpIHtcbiAgICAgICAgLy8gTWluZSByZW1vdmVkIG9yIGVkaXRlZFxuICAgICAgICByZW1vdmFsKGh1bmssIG1pbmUsIHRoZWlyKTtcbiAgICAgIH0gZWxzZSBpZiAodGhlaXJDdXJyZW50WzBdID09PSAnLScgJiYgbWluZUN1cnJlbnRbMF0gPT09ICcgJykge1xuICAgICAgICAvLyBUaGVpciByZW1vdmVkIG9yIGVkaXRlZFxuICAgICAgICByZW1vdmFsKGh1bmssIHRoZWlyLCBtaW5lLCB0cnVlKTtcbiAgICAgIH0gZWxzZSBpZiAobWluZUN1cnJlbnQgPT09IHRoZWlyQ3VycmVudCkge1xuICAgICAgICAvLyBDb250ZXh0IGlkZW50aXR5XG4gICAgICAgIGh1bmsubGluZXMucHVzaChtaW5lQ3VycmVudCk7XG4gICAgICAgIG1pbmUuaW5kZXgrKztcbiAgICAgICAgdGhlaXIuaW5kZXgrKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIENvbnRleHQgbWlzbWF0Y2hcbiAgICAgICAgY29uZmxpY3QoaHVuaywgY29sbGVjdENoYW5nZShtaW5lKSwgY29sbGVjdENoYW5nZSh0aGVpcikpO1xuICAgICAgfVxuICAgIH0gLy8gTm93IHB1c2ggYW55dGhpbmcgdGhhdCBtYXkgYmUgcmVtYWluaW5nXG5cblxuICAgIGluc2VydFRyYWlsaW5nKGh1bmssIG1pbmUpO1xuICAgIGluc2VydFRyYWlsaW5nKGh1bmssIHRoZWlyKTtcbiAgICBjYWxjTGluZUNvdW50KGh1bmspO1xuICB9XG5cbiAgZnVuY3Rpb24gbXV0dWFsQ2hhbmdlKGh1bmssIG1pbmUsIHRoZWlyKSB7XG4gICAgdmFyIG15Q2hhbmdlcyA9IGNvbGxlY3RDaGFuZ2UobWluZSksXG4gICAgICAgIHRoZWlyQ2hhbmdlcyA9IGNvbGxlY3RDaGFuZ2UodGhlaXIpO1xuXG4gICAgaWYgKGFsbFJlbW92ZXMobXlDaGFuZ2VzKSAmJiBhbGxSZW1vdmVzKHRoZWlyQ2hhbmdlcykpIHtcbiAgICAgIC8vIFNwZWNpYWwgY2FzZSBmb3IgcmVtb3ZlIGNoYW5nZXMgdGhhdCBhcmUgc3VwZXJzZXRzIG9mIG9uZSBhbm90aGVyXG4gICAgICBpZiAoYXJyYXlTdGFydHNXaXRoKG15Q2hhbmdlcywgdGhlaXJDaGFuZ2VzKSAmJiBza2lwUmVtb3ZlU3VwZXJzZXQodGhlaXIsIG15Q2hhbmdlcywgbXlDaGFuZ2VzLmxlbmd0aCAtIHRoZWlyQ2hhbmdlcy5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBfaHVuayRsaW5lczM7XG5cbiAgICAgICAgKF9odW5rJGxpbmVzMyA9IGh1bmsubGluZXMpLnB1c2guYXBwbHkoX2h1bmskbGluZXMzLCBfdG9Db25zdW1hYmxlQXJyYXkobXlDaGFuZ2VzKSk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIGlmIChhcnJheVN0YXJ0c1dpdGgodGhlaXJDaGFuZ2VzLCBteUNoYW5nZXMpICYmIHNraXBSZW1vdmVTdXBlcnNldChtaW5lLCB0aGVpckNoYW5nZXMsIHRoZWlyQ2hhbmdlcy5sZW5ndGggLSBteUNoYW5nZXMubGVuZ3RoKSkge1xuICAgICAgICB2YXIgX2h1bmskbGluZXM0O1xuXG4gICAgICAgIChfaHVuayRsaW5lczQgPSBodW5rLmxpbmVzKS5wdXNoLmFwcGx5KF9odW5rJGxpbmVzNCwgX3RvQ29uc3VtYWJsZUFycmF5KHRoZWlyQ2hhbmdlcykpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGFycmF5RXF1YWwobXlDaGFuZ2VzLCB0aGVpckNoYW5nZXMpKSB7XG4gICAgICB2YXIgX2h1bmskbGluZXM1O1xuXG4gICAgICAoX2h1bmskbGluZXM1ID0gaHVuay5saW5lcykucHVzaC5hcHBseShfaHVuayRsaW5lczUsIF90b0NvbnN1bWFibGVBcnJheShteUNoYW5nZXMpKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbmZsaWN0KGh1bmssIG15Q2hhbmdlcywgdGhlaXJDaGFuZ2VzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92YWwoaHVuaywgbWluZSwgdGhlaXIsIHN3YXApIHtcbiAgICB2YXIgbXlDaGFuZ2VzID0gY29sbGVjdENoYW5nZShtaW5lKSxcbiAgICAgICAgdGhlaXJDaGFuZ2VzID0gY29sbGVjdENvbnRleHQodGhlaXIsIG15Q2hhbmdlcyk7XG5cbiAgICBpZiAodGhlaXJDaGFuZ2VzLm1lcmdlZCkge1xuICAgICAgdmFyIF9odW5rJGxpbmVzNjtcblxuICAgICAgKF9odW5rJGxpbmVzNiA9IGh1bmsubGluZXMpLnB1c2guYXBwbHkoX2h1bmskbGluZXM2LCBfdG9Db25zdW1hYmxlQXJyYXkodGhlaXJDaGFuZ2VzLm1lcmdlZCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25mbGljdChodW5rLCBzd2FwID8gdGhlaXJDaGFuZ2VzIDogbXlDaGFuZ2VzLCBzd2FwID8gbXlDaGFuZ2VzIDogdGhlaXJDaGFuZ2VzKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjb25mbGljdChodW5rLCBtaW5lLCB0aGVpcikge1xuICAgIGh1bmsuY29uZmxpY3QgPSB0cnVlO1xuICAgIGh1bmsubGluZXMucHVzaCh7XG4gICAgICBjb25mbGljdDogdHJ1ZSxcbiAgICAgIG1pbmU6IG1pbmUsXG4gICAgICB0aGVpcnM6IHRoZWlyXG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBpbnNlcnRMZWFkaW5nKGh1bmssIGluc2VydCwgdGhlaXIpIHtcbiAgICB3aGlsZSAoaW5zZXJ0Lm9mZnNldCA8IHRoZWlyLm9mZnNldCAmJiBpbnNlcnQuaW5kZXggPCBpbnNlcnQubGluZXMubGVuZ3RoKSB7XG4gICAgICB2YXIgbGluZSA9IGluc2VydC5saW5lc1tpbnNlcnQuaW5kZXgrK107XG4gICAgICBodW5rLmxpbmVzLnB1c2gobGluZSk7XG4gICAgICBpbnNlcnQub2Zmc2V0Kys7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW5zZXJ0VHJhaWxpbmcoaHVuaywgaW5zZXJ0KSB7XG4gICAgd2hpbGUgKGluc2VydC5pbmRleCA8IGluc2VydC5saW5lcy5sZW5ndGgpIHtcbiAgICAgIHZhciBsaW5lID0gaW5zZXJ0LmxpbmVzW2luc2VydC5pbmRleCsrXTtcbiAgICAgIGh1bmsubGluZXMucHVzaChsaW5lKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjb2xsZWN0Q2hhbmdlKHN0YXRlKSB7XG4gICAgdmFyIHJldCA9IFtdLFxuICAgICAgICBvcGVyYXRpb24gPSBzdGF0ZS5saW5lc1tzdGF0ZS5pbmRleF1bMF07XG5cbiAgICB3aGlsZSAoc3RhdGUuaW5kZXggPCBzdGF0ZS5saW5lcy5sZW5ndGgpIHtcbiAgICAgIHZhciBsaW5lID0gc3RhdGUubGluZXNbc3RhdGUuaW5kZXhdOyAvLyBHcm91cCBhZGRpdGlvbnMgdGhhdCBhcmUgaW1tZWRpYXRlbHkgYWZ0ZXIgc3VidHJhY3Rpb25zIGFuZCB0cmVhdCB0aGVtIGFzIG9uZSBcImF0b21pY1wiIG1vZGlmeSBjaGFuZ2UuXG5cbiAgICAgIGlmIChvcGVyYXRpb24gPT09ICctJyAmJiBsaW5lWzBdID09PSAnKycpIHtcbiAgICAgICAgb3BlcmF0aW9uID0gJysnO1xuICAgICAgfVxuXG4gICAgICBpZiAob3BlcmF0aW9uID09PSBsaW5lWzBdKSB7XG4gICAgICAgIHJldC5wdXNoKGxpbmUpO1xuICAgICAgICBzdGF0ZS5pbmRleCsrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbGxlY3RDb250ZXh0KHN0YXRlLCBtYXRjaENoYW5nZXMpIHtcbiAgICB2YXIgY2hhbmdlcyA9IFtdLFxuICAgICAgICBtZXJnZWQgPSBbXSxcbiAgICAgICAgbWF0Y2hJbmRleCA9IDAsXG4gICAgICAgIGNvbnRleHRDaGFuZ2VzID0gZmFsc2UsXG4gICAgICAgIGNvbmZsaWN0ZWQgPSBmYWxzZTtcblxuICAgIHdoaWxlIChtYXRjaEluZGV4IDwgbWF0Y2hDaGFuZ2VzLmxlbmd0aCAmJiBzdGF0ZS5pbmRleCA8IHN0YXRlLmxpbmVzLmxlbmd0aCkge1xuICAgICAgdmFyIGNoYW5nZSA9IHN0YXRlLmxpbmVzW3N0YXRlLmluZGV4XSxcbiAgICAgICAgICBtYXRjaCA9IG1hdGNoQ2hhbmdlc1ttYXRjaEluZGV4XTsgLy8gT25jZSB3ZSd2ZSBoaXQgb3VyIGFkZCwgdGhlbiB3ZSBhcmUgZG9uZVxuXG4gICAgICBpZiAobWF0Y2hbMF0gPT09ICcrJykge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY29udGV4dENoYW5nZXMgPSBjb250ZXh0Q2hhbmdlcyB8fCBjaGFuZ2VbMF0gIT09ICcgJztcbiAgICAgIG1lcmdlZC5wdXNoKG1hdGNoKTtcbiAgICAgIG1hdGNoSW5kZXgrKzsgLy8gQ29uc3VtZSBhbnkgYWRkaXRpb25zIGluIHRoZSBvdGhlciBibG9jayBhcyBhIGNvbmZsaWN0IHRvIGF0dGVtcHRcbiAgICAgIC8vIHRvIHB1bGwgaW4gdGhlIHJlbWFpbmluZyBjb250ZXh0IGFmdGVyIHRoaXNcblxuICAgICAgaWYgKGNoYW5nZVswXSA9PT0gJysnKSB7XG4gICAgICAgIGNvbmZsaWN0ZWQgPSB0cnVlO1xuXG4gICAgICAgIHdoaWxlIChjaGFuZ2VbMF0gPT09ICcrJykge1xuICAgICAgICAgIGNoYW5nZXMucHVzaChjaGFuZ2UpO1xuICAgICAgICAgIGNoYW5nZSA9IHN0YXRlLmxpbmVzWysrc3RhdGUuaW5kZXhdO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtYXRjaC5zdWJzdHIoMSkgPT09IGNoYW5nZS5zdWJzdHIoMSkpIHtcbiAgICAgICAgY2hhbmdlcy5wdXNoKGNoYW5nZSk7XG4gICAgICAgIHN0YXRlLmluZGV4Kys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25mbGljdGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoKG1hdGNoQ2hhbmdlc1ttYXRjaEluZGV4XSB8fCAnJylbMF0gPT09ICcrJyAmJiBjb250ZXh0Q2hhbmdlcykge1xuICAgICAgY29uZmxpY3RlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZsaWN0ZWQpIHtcbiAgICAgIHJldHVybiBjaGFuZ2VzO1xuICAgIH1cblxuICAgIHdoaWxlIChtYXRjaEluZGV4IDwgbWF0Y2hDaGFuZ2VzLmxlbmd0aCkge1xuICAgICAgbWVyZ2VkLnB1c2gobWF0Y2hDaGFuZ2VzW21hdGNoSW5kZXgrK10pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBtZXJnZWQ6IG1lcmdlZCxcbiAgICAgIGNoYW5nZXM6IGNoYW5nZXNcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gYWxsUmVtb3ZlcyhjaGFuZ2VzKSB7XG4gICAgcmV0dXJuIGNoYW5nZXMucmVkdWNlKGZ1bmN0aW9uIChwcmV2LCBjaGFuZ2UpIHtcbiAgICAgIHJldHVybiBwcmV2ICYmIGNoYW5nZVswXSA9PT0gJy0nO1xuICAgIH0sIHRydWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2tpcFJlbW92ZVN1cGVyc2V0KHN0YXRlLCByZW1vdmVDaGFuZ2VzLCBkZWx0YSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGVsdGE7IGkrKykge1xuICAgICAgdmFyIGNoYW5nZUNvbnRlbnQgPSByZW1vdmVDaGFuZ2VzW3JlbW92ZUNoYW5nZXMubGVuZ3RoIC0gZGVsdGEgKyBpXS5zdWJzdHIoMSk7XG5cbiAgICAgIGlmIChzdGF0ZS5saW5lc1tzdGF0ZS5pbmRleCArIGldICE9PSAnICcgKyBjaGFuZ2VDb250ZW50KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0ZS5pbmRleCArPSBkZWx0YTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbGNPbGROZXdMaW5lQ291bnQobGluZXMpIHtcbiAgICB2YXIgb2xkTGluZXMgPSAwO1xuICAgIHZhciBuZXdMaW5lcyA9IDA7XG4gICAgbGluZXMuZm9yRWFjaChmdW5jdGlvbiAobGluZSkge1xuICAgICAgaWYgKHR5cGVvZiBsaW5lICE9PSAnc3RyaW5nJykge1xuICAgICAgICB2YXIgbXlDb3VudCA9IGNhbGNPbGROZXdMaW5lQ291bnQobGluZS5taW5lKTtcbiAgICAgICAgdmFyIHRoZWlyQ291bnQgPSBjYWxjT2xkTmV3TGluZUNvdW50KGxpbmUudGhlaXJzKTtcblxuICAgICAgICBpZiAob2xkTGluZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmIChteUNvdW50Lm9sZExpbmVzID09PSB0aGVpckNvdW50Lm9sZExpbmVzKSB7XG4gICAgICAgICAgICBvbGRMaW5lcyArPSBteUNvdW50Lm9sZExpbmVzO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvbGRMaW5lcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmV3TGluZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmIChteUNvdW50Lm5ld0xpbmVzID09PSB0aGVpckNvdW50Lm5ld0xpbmVzKSB7XG4gICAgICAgICAgICBuZXdMaW5lcyArPSBteUNvdW50Lm5ld0xpbmVzO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXdMaW5lcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChuZXdMaW5lcyAhPT0gdW5kZWZpbmVkICYmIChsaW5lWzBdID09PSAnKycgfHwgbGluZVswXSA9PT0gJyAnKSkge1xuICAgICAgICAgIG5ld0xpbmVzKys7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob2xkTGluZXMgIT09IHVuZGVmaW5lZCAmJiAobGluZVswXSA9PT0gJy0nIHx8IGxpbmVbMF0gPT09ICcgJykpIHtcbiAgICAgICAgICBvbGRMaW5lcysrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9sZExpbmVzOiBvbGRMaW5lcyxcbiAgICAgIG5ld0xpbmVzOiBuZXdMaW5lc1xuICAgIH07XG4gIH1cblxuICAvLyBTZWU6IGh0dHA6Ly9jb2RlLmdvb2dsZS5jb20vcC9nb29nbGUtZGlmZi1tYXRjaC1wYXRjaC93aWtpL0FQSVxuICBmdW5jdGlvbiBjb252ZXJ0Q2hhbmdlc1RvRE1QKGNoYW5nZXMpIHtcbiAgICB2YXIgcmV0ID0gW10sXG4gICAgICAgIGNoYW5nZSxcbiAgICAgICAgb3BlcmF0aW9uO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGFuZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGFuZ2UgPSBjaGFuZ2VzW2ldO1xuXG4gICAgICBpZiAoY2hhbmdlLmFkZGVkKSB7XG4gICAgICAgIG9wZXJhdGlvbiA9IDE7XG4gICAgICB9IGVsc2UgaWYgKGNoYW5nZS5yZW1vdmVkKSB7XG4gICAgICAgIG9wZXJhdGlvbiA9IC0xO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3BlcmF0aW9uID0gMDtcbiAgICAgIH1cblxuICAgICAgcmV0LnB1c2goW29wZXJhdGlvbiwgY2hhbmdlLnZhbHVlXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbnZlcnRDaGFuZ2VzVG9YTUwoY2hhbmdlcykge1xuICAgIHZhciByZXQgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hhbmdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNoYW5nZSA9IGNoYW5nZXNbaV07XG5cbiAgICAgIGlmIChjaGFuZ2UuYWRkZWQpIHtcbiAgICAgICAgcmV0LnB1c2goJzxpbnM+Jyk7XG4gICAgICB9IGVsc2UgaWYgKGNoYW5nZS5yZW1vdmVkKSB7XG4gICAgICAgIHJldC5wdXNoKCc8ZGVsPicpO1xuICAgICAgfVxuXG4gICAgICByZXQucHVzaChlc2NhcGVIVE1MKGNoYW5nZS52YWx1ZSkpO1xuXG4gICAgICBpZiAoY2hhbmdlLmFkZGVkKSB7XG4gICAgICAgIHJldC5wdXNoKCc8L2lucz4nKTtcbiAgICAgIH0gZWxzZSBpZiAoY2hhbmdlLnJlbW92ZWQpIHtcbiAgICAgICAgcmV0LnB1c2goJzwvZGVsPicpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXQuam9pbignJyk7XG4gIH1cblxuICBmdW5jdGlvbiBlc2NhcGVIVE1MKHMpIHtcbiAgICB2YXIgbiA9IHM7XG4gICAgbiA9IG4ucmVwbGFjZSgvJi9nLCAnJmFtcDsnKTtcbiAgICBuID0gbi5yZXBsYWNlKC88L2csICcmbHQ7Jyk7XG4gICAgbiA9IG4ucmVwbGFjZSgvPi9nLCAnJmd0OycpO1xuICAgIG4gPSBuLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKTtcbiAgICByZXR1cm4gbjtcbiAgfVxuXG4gIGV4cG9ydHMuRGlmZiA9IERpZmY7XG4gIGV4cG9ydHMuYXBwbHlQYXRjaCA9IGFwcGx5UGF0Y2g7XG4gIGV4cG9ydHMuYXBwbHlQYXRjaGVzID0gYXBwbHlQYXRjaGVzO1xuICBleHBvcnRzLmNhbm9uaWNhbGl6ZSA9IGNhbm9uaWNhbGl6ZTtcbiAgZXhwb3J0cy5jb252ZXJ0Q2hhbmdlc1RvRE1QID0gY29udmVydENoYW5nZXNUb0RNUDtcbiAgZXhwb3J0cy5jb252ZXJ0Q2hhbmdlc1RvWE1MID0gY29udmVydENoYW5nZXNUb1hNTDtcbiAgZXhwb3J0cy5jcmVhdGVQYXRjaCA9IGNyZWF0ZVBhdGNoO1xuICBleHBvcnRzLmNyZWF0ZVR3b0ZpbGVzUGF0Y2ggPSBjcmVhdGVUd29GaWxlc1BhdGNoO1xuICBleHBvcnRzLmRpZmZBcnJheXMgPSBkaWZmQXJyYXlzO1xuICBleHBvcnRzLmRpZmZDaGFycyA9IGRpZmZDaGFycztcbiAgZXhwb3J0cy5kaWZmQ3NzID0gZGlmZkNzcztcbiAgZXhwb3J0cy5kaWZmSnNvbiA9IGRpZmZKc29uO1xuICBleHBvcnRzLmRpZmZMaW5lcyA9IGRpZmZMaW5lcztcbiAgZXhwb3J0cy5kaWZmU2VudGVuY2VzID0gZGlmZlNlbnRlbmNlcztcbiAgZXhwb3J0cy5kaWZmVHJpbW1lZExpbmVzID0gZGlmZlRyaW1tZWRMaW5lcztcbiAgZXhwb3J0cy5kaWZmV29yZHMgPSBkaWZmV29yZHM7XG4gIGV4cG9ydHMuZGlmZldvcmRzV2l0aFNwYWNlID0gZGlmZldvcmRzV2l0aFNwYWNlO1xuICBleHBvcnRzLm1lcmdlID0gbWVyZ2U7XG4gIGV4cG9ydHMucGFyc2VQYXRjaCA9IHBhcnNlUGF0Y2g7XG4gIGV4cG9ydHMuc3RydWN0dXJlZFBhdGNoID0gc3RydWN0dXJlZFBhdGNoO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbn0pKSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImltcG9ydCBcIi4uL3N0eWxlcy9zdHlsZS5jc3NcIjtcbmltcG9ydCBBZHZhbmNlZEJsYW5rcyBmcm9tICcuLi9zY3JpcHRzL2FwcCc7XG5cbi8vIExvYWQgbGlicmFyeVxuSDVQID0gSDVQIHx8IHt9O1xuSDVQLkFkdmFuY2VkQmxhbmtzID0gQWR2YW5jZWRCbGFua3M7IiwiZXhwb3J0IGZ1bmN0aW9uIGdldExvbmdlc3RTdHJpbmcoc3RyaW5nczogc3RyaW5nW10pOiBzdHJpbmcge1xuICByZXR1cm4gc3RyaW5ncy5yZWR1Y2UoKHByZXYsIGN1cnJlbnQpID0+IGN1cnJlbnQubGVuZ3RoID4gcHJldi5sZW5ndGggPyBjdXJyZW50IDogcHJldiwgXCJcIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaHVmZmxlQXJyYXkoYXJyYXk6IGFueVtdKSB7XG4gIGZvciAodmFyIGkgPSBhcnJheS5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XG4gICAgdmFyIGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKTtcbiAgICB2YXIgdGVtcCA9IGFycmF5W2ldO1xuICAgIGFycmF5W2ldID0gYXJyYXlbal07XG4gICAgYXJyYXlbal0gPSB0ZW1wO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn0iLCIvLyBUT0RPIGNhbiB3ZSBqdXN0IGRlY2xhcmUgdGhlIGtleWRvd25IYW5kbGVyIG9uY2U/IHVzaW5nIGB0aGlzYD9cbmZ1bmN0aW9uIG1ha2VLZXlEZWZpbml0aW9uKGNvZGU/OiBudW1iZXIpIHtcbiAgcmV0dXJuIChub2RlLCBmaXJlKSA9PiB7XG4gICAgZnVuY3Rpb24ga2V5ZG93bkhhbmRsZXIoZXZlbnQpIHtcbiAgICAgIHZhciB3aGljaCA9IGV2ZW50LndoaWNoIHx8IGV2ZW50LmtleUNvZGU7XG5cbiAgICAgIGlmIChjb2RlICYmIHdoaWNoID09PSBjb2RlKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgZmlyZSh7XG4gICAgICAgICAgbm9kZSxcbiAgICAgICAgICBvcmlnaW5hbDogZXZlbnRcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICghY29kZSAmJiBbMTYsIDE3LCAxOCwgMzUsIDM2LCAxMywgOSwgMjcsIDMyLCAzNywgMzksIDQwLCAzOF0uZmlsdGVyKGMgPT4gYyA9PT0gd2hpY2gpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBmaXJlKHtcbiAgICAgICAgICBub2RlLFxuICAgICAgICAgIG9yaWdpbmFsOiBldmVudFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBrZXlkb3duSGFuZGxlciwgZmFsc2UpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRlYXJkb3duKCkge1xuICAgICAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBrZXlkb3duSGFuZGxlciwgZmFsc2UpO1xuICAgICAgfVxuICAgIH07XG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBlbnRlciA9IG1ha2VLZXlEZWZpbml0aW9uKDEzKTtcbmV4cG9ydCBjb25zdCB0YWIgPSBtYWtlS2V5RGVmaW5pdGlvbig5KTtcbmV4cG9ydCBjb25zdCBlc2NhcGUgPSBtYWtlS2V5RGVmaW5pdGlvbigyNyk7XG5leHBvcnQgY29uc3Qgc3BhY2UgPSBtYWtlS2V5RGVmaW5pdGlvbigzMik7XG5cbmV4cG9ydCBjb25zdCBsZWZ0YXJyb3cgPSBtYWtlS2V5RGVmaW5pdGlvbigzNyk7XG5leHBvcnQgY29uc3QgcmlnaHRhcnJvdyA9IG1ha2VLZXlEZWZpbml0aW9uKDM5KTtcbmV4cG9ydCBjb25zdCBkb3duYXJyb3cgPSBtYWtlS2V5RGVmaW5pdGlvbig0MCk7XG5leHBvcnQgY29uc3QgdXBhcnJvdyA9IG1ha2VLZXlEZWZpbml0aW9uKDM4KTtcblxuZXhwb3J0IGNvbnN0IGFueWtleSA9IG1ha2VLZXlEZWZpbml0aW9uKCk7IiwiaW1wb3J0IHsgQmxhbmtMb2FkZXIgfSBmcm9tICcuL2NvbnRlbnQtbG9hZGVycy9ibGFuay1sb2FkZXInO1xuaW1wb3J0IHsgSDVQRGF0YVJlcG9zaXRvcnksIElEYXRhUmVwb3NpdG9yeSB9IGZyb20gJy4vc2VydmljZXMvZGF0YS1yZXBvc2l0b3J5JztcbmltcG9ydCB7IENsb3plQ29udHJvbGxlciB9IGZyb20gJy4vY29udHJvbGxlcnMvY2xvemUtY29udHJvbGxlcic7XG5pbXBvcnQgeyBINVBMb2NhbGl6YXRpb24sIExvY2FsaXphdGlvbkxhYmVscywgTG9jYWxpemF0aW9uU3RydWN0dXJlcyB9IGZyb20gXCIuL3NlcnZpY2VzL2xvY2FsaXphdGlvblwiO1xuaW1wb3J0IHsgSVNldHRpbmdzLCBINVBTZXR0aW5ncyB9IGZyb20gXCIuL3NlcnZpY2VzL3NldHRpbmdzXCI7XG5pbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvbWVzc2FnZS1zZXJ2aWNlJztcbmltcG9ydCB7IFVucndhcHBlciB9IGZyb20gJy4vaGVscGVycy91bndyYXBwZXInO1xuaW1wb3J0IHsgWEFQSUFjdGl2aXR5RGVmaW5pdGlvbiB9IGZyb20gJy4vbW9kZWxzL3hhcGknO1xuaW1wb3J0IHsgZXh0ZW5kIH0gZnJvbSAnLi9oZWxwZXJzL2V4dGVuZCc7XG5cbmVudW0gU3RhdGVzIHtcbiAgb25nb2luZyA9ICdvbmdvaW5nJyxcbiAgY2hlY2tpbmcgPSAnY2hlY2tpbmcnLFxuICBzaG93aW5nU29sdXRpb25zID0gJ3Nob3dpbmctc29sdXRpb24nLFxuICBmaW5pc2hlZCA9ICdmaW5pc2hlZCcsXG4gIHNob3dpbmdTb2x1dGlvbnNFbWJlZGRlZCA9ICdzaG93aW5nLXNvbHV0aW9uLWVtYmVkZGVkJ1xufVxuXG5jb25zdCBYQVBJX0FMVEVSTkFUSVZFX0VYVEVOU0lPTiA9ICdodHRwczovL2g1cC5vcmcveC1hcGkvYWx0ZXJuYXRpdmVzJztcbmNvbnN0IFhBUElfQ0FTRV9TRU5TSVRJVklUWSA9ICdodHRwczovL2g1cC5vcmcveC1hcGkvY2FzZS1zZW5zaXRpdml0eSc7XG5jb25zdCBYQVBJX1JFUE9SVElOR19WRVJTSU9OX0VYVEVOU0lPTiA9ICdodHRwczovL2g1cC5vcmcveC1hcGkvaDVwLXJlcG9ydGluZy12ZXJzaW9uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWR2YW5jZWRCbGFua3MgZXh0ZW5kcyAoSDVQLlF1ZXN0aW9uIGFzIHsgbmV3KHN0cmluZyk6IGFueTsgfSkge1xuXG4gIHByaXZhdGUgY2xvemVDb250cm9sbGVyOiBDbG96ZUNvbnRyb2xsZXI7XG4gIHByaXZhdGUgcmVwb3NpdG9yeTogSURhdGFSZXBvc2l0b3J5O1xuICBwcml2YXRlIHNldHRpbmdzOiBJU2V0dGluZ3M7XG4gIHByaXZhdGUgbG9jYWxpemF0aW9uOiBINVBMb2NhbGl6YXRpb247XG4gIHByaXZhdGUgbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlO1xuXG4gIHByaXZhdGUgalF1ZXJ5O1xuXG4gIHByaXZhdGUgY29udGVudElkOiBzdHJpbmc7XG4gIHByaXZhdGUgcHJldmlvdXNTdGF0ZTogYW55O1xuICBwcml2YXRlIHN0YXRlOiBTdGF0ZXM7XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyBpZiB1c2VyIGhhcyBlbnRlcmVkIGFueSBhbnN3ZXIgc28gZmFyLlxuICAgKi9cbiAgcHJpdmF0ZSBhbnN3ZXJlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZ1xuICAgKiBAcGFyYW0ge3N0cmluZ30gY29udGVudElkXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZW50RGF0YVxuICAgKi9cbiAgY29uc3RydWN0b3IoY29uZmlnOiBhbnksIGNvbnRlbnRJZDogc3RyaW5nLCBjb250ZW50RGF0YTogYW55ID0ge30pIHtcbiAgICBzdXBlcignYWR2YW5jZWQtYmxhbmtzJyk7XG5cbiAgICAvLyBTZXQgbWFuZGF0b3J5IGRlZmF1bHQgdmFsdWVzIGZvciBlZGl0b3Igd2lkZ2V0cyB0aGF0IGNyZWF0ZSBjb250ZW50IHR5cGUgaW5zdGFuY2VzXG4gICAgY29uZmlnID0gZXh0ZW5kKHtcbiAgICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgYmxhbmtzVGV4dDogJydcbiAgICAgIH0sXG4gICAgICBiZWhhdmlvdXI6IHtcbiAgICAgICAgbW9kZTogJ3R5cGluZycsXG4gICAgICAgIHNlbGVjdEFsdGVybmF0aXZlczogJ2FsdGVybmF0aXZlcydcbiAgICAgIH0sXG4gICAgICBjb250ZW50SWQ6IGNvbnRlbnRJZFxuICAgIH0sIGNvbmZpZyk7XG5cbiAgICB0aGlzLmpRdWVyeSA9IEg1UC5qUXVlcnk7XG4gICAgdGhpcy5jb250ZW50SWQgPSBjb250ZW50SWQ7XG5cbiAgICBsZXQgdW53cmFwcGVyID0gbmV3IFVucndhcHBlcih0aGlzLmpRdWVyeSk7XG5cbiAgICB0aGlzLnNldHRpbmdzID0gbmV3IEg1UFNldHRpbmdzKGNvbmZpZyk7XG4gICAgdGhpcy5sb2NhbGl6YXRpb24gPSBuZXcgSDVQTG9jYWxpemF0aW9uKGNvbmZpZyk7XG4gICAgdGhpcy5yZXBvc2l0b3J5ID0gbmV3IEg1UERhdGFSZXBvc2l0b3J5KGNvbmZpZywgdGhpcy5zZXR0aW5ncywgdGhpcy5sb2NhbGl6YXRpb24sIDxKUXVlcnlTdGF0aWM+dGhpcy5qUXVlcnksIHVud3JhcHBlcik7XG4gICAgdGhpcy5tZXNzYWdlU2VydmljZSA9IG5ldyBNZXNzYWdlU2VydmljZSh0aGlzLmpRdWVyeSk7XG4gICAgQmxhbmtMb2FkZXIuaW5pdGlhbGl6ZSh0aGlzLnNldHRpbmdzLCB0aGlzLmxvY2FsaXphdGlvbiwgdGhpcy5qUXVlcnksIHRoaXMubWVzc2FnZVNlcnZpY2UpO1xuXG4gICAgdGhpcy5jbG96ZUNvbnRyb2xsZXIgPSBuZXcgQ2xvemVDb250cm9sbGVyKHRoaXMucmVwb3NpdG9yeSwgdGhpcy5zZXR0aW5ncywgdGhpcy5sb2NhbGl6YXRpb24sIHRoaXMubWVzc2FnZVNlcnZpY2UpO1xuXG4gICAgdGhpcy5jbG96ZUNvbnRyb2xsZXIub25TY29yZUNoYW5nZWQgPSB0aGlzLm9uU2NvcmVDaGFuZ2VkO1xuICAgIHRoaXMuY2xvemVDb250cm9sbGVyLm9uU29sdmVkID0gdGhpcy5vblNvbHZlZDtcbiAgICB0aGlzLmNsb3plQ29udHJvbGxlci5vbkF1dG9DaGVja2VkID0gdGhpcy5vbkF1dG9DaGVja2VkO1xuICAgIHRoaXMuY2xvemVDb250cm9sbGVyLm9uVHlwZWQgPSB0aGlzLm9uVHlwZWQ7XG4gICAgdGhpcy5jbG96ZUNvbnRyb2xsZXIub25DbG96ZVJlZnJlc2hlZCA9IHRoaXMub25DbG96ZVJlZnJlc2hlZDtcblxuICAgIHRoaXMucHJldmlvdXNTdGF0ZSA9IChjb250ZW50RGF0YSAmJiBjb250ZW50RGF0YS5wcmV2aW91c1N0YXRlKSA/XG4gICAgICAgY29udGVudERhdGEucHJldmlvdXNTdGF0ZSA6XG4gICAgICAge307XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIGZyb20gb3V0c2lkZSB3aGVuIHRoZSBzY29yZSBvZiB0aGUgY2xvemUgaGFzIGNoYW5nZWQuXG4gICAqL1xuICBwcml2YXRlIG9uU2NvcmVDaGFuZ2VkID0gKHNjb3JlOiBudW1iZXIsIG1heFNjb3JlOiBudW1iZXIpID0+IHtcbiAgICBpZiAodGhpcy5jbG96ZUNvbnRyb2xsZXIuaXNGdWxseUZpbGxlZE91dCkge1xuICAgICAgdGhpcy50cmFuc2l0aW9uU3RhdGUoKTtcbiAgICAgIGlmICh0aGlzLnN0YXRlICE9PSBTdGF0ZXMuZmluaXNoZWQpXG4gICAgICAgIHRoaXMuc3RhdGUgPSBTdGF0ZXMuY2hlY2tpbmc7XG4gICAgICB0aGlzLnNob3dGZWVkYmFjaygpO1xuXG4gICAgICAvLyBTZW5kIHNjcmVlbnNob3QgdG8gc2VydmVyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKEg1UCAmJiBINVAuS0xTY3JlZW5zaG90KSB7XG4gICAgICAgICAgSDVQLktMU2NyZWVuc2hvdC50YWtlU2NyZWVuc2hvdChcbiAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICB0aGlzLmdldEg1cENvbnRhaW5lcigpLmdldCgwKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0sIDUwMCk7IC8vIEFsbG93IGJ1dHRvbnMgdG8gdXBkYXRlXG5cbiAgICB9XG5cbiAgICB0aGlzLnRyYW5zaXRpb25TdGF0ZSgpO1xuICAgIHRoaXMudG9nZ2xlQnV0dG9uVmlzaWJpbGl0eSh0aGlzLnN0YXRlKTtcbiAgfVxuXG4gIHByaXZhdGUgb25Tb2x2ZWQoKSB7XG5cbiAgfVxuXG4gIHByaXZhdGUgb25UeXBlZCA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5zdGF0ZSA9PT0gU3RhdGVzLmNoZWNraW5nKSB7XG4gICAgICB0aGlzLnN0YXRlID0gU3RhdGVzLm9uZ29pbmc7XG4gICAgICB0aGlzLnRvZ2dsZUJ1dHRvblZpc2liaWxpdHkodGhpcy5zdGF0ZSk7XG4gICAgfVxuICAgIHRoaXMudHJpZ2dlclhBUEkoJ2ludGVyYWN0ZWQnKTtcbiAgICB0aGlzLmFuc3dlcmVkID0gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgb25DbG96ZVJlZnJlc2hlZCA9ICgpID0+IHtcbiAgICB0aGlzLnRyaWdnZXIoJ2tsbFN0b3JlU2Vzc2lvblN0YXRlJywgdW5kZWZpbmVkLCB7IGJ1YmJsZXM6IHRydWUsIGV4dGVybmFsOiB0cnVlIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBvbkF1dG9DaGVja2VkID0gKCkgPT4ge1xuICAgIHRoaXMudHJpZ2dlclhBUEkoJ2ludGVyYWN0ZWQnKTtcblxuICAgIGlmICh0aGlzLmNsb3plQ29udHJvbGxlci5pc0Z1bGx5RmlsbGVkT3V0KSB7XG4gICAgICB0aGlzLnRyaWdnZXJYQVBJQW5zd2VyZWQoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIGJ5IEg1UC5RdWVzdGlvbi5hdHRhY2goKS4gQ3JlYXRlcyBhbGwgY29udGVudCBlbGVtZW50cyBhbmQgcmVnaXN0ZXJzIHRoZW1cbiAgICogd2l0aCBINVAuUXVlc3Rpb24uXG4gICAqL1xuICByZWdpc3RlckRvbUVsZW1lbnRzID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMucmVnaXN0ZXJNZWRpYSgpO1xuICAgIHRoaXMuc2V0SW50cm9kdWN0aW9uKHRoaXMucmVwb3NpdG9yeS5nZXRUYXNrRGVzY3JpcHRpb24oKSk7XG5cbiAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMualF1ZXJ5KFwiPGRpdi8+XCIsIHsgXCJjbGFzc1wiOiBcImg1cC1hZHZhbmNlZC1ibGFua3NcIiB9KTtcbiAgICB0aGlzLnNldENvbnRlbnQodGhpcy5jb250YWluZXIpO1xuICAgIHRoaXMucmVnaXN0ZXJCdXR0b25zKCk7XG5cbiAgICB0aGlzLm1vdmVUb1N0YXRlKFN0YXRlcy5vbmdvaW5nKTtcblxuICAgIC8qXG4gICAgICogV2hlbiBSYWN0aXZlIGlzIGluaXRpYWxpemVkLCBpdCByZXF1aXJlcyB0aGUgRE9NIHRvIGhhdmUgYmVlbiByZW5kZXJlZC5cbiAgICAgKiBINVAuUXVlc3Rpb24gZG9lc24ndCBvZmZlciBhIGNhbGxiYWNrIG9yIGV2ZW50IHRvIGRldGVjdCB3aGVuIHRoYXQgaGFzXG4gICAgICogaGFwcGVuZWQsIHNvIHdlIHVzZSBpdHMgcmVzaXplIGNhbGwgYXMgYSB0cmlnZ2VyIGFuZCBjaGVjayBmb3IgdGhlIERPTS5cbiAgICAgKi9cbiAgICB0aGlzLm9uKCdyZXNpemUnLCB0aGlzLmNoZWNrRE9NUHJlc2VudCk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBjbG96ZUNvbnRyb2xsZXIvUmFjdGl2ZSBvbmNlIERPTSBpcyBwcmVzZW50LlxuICAgKi9cbiAgcHJpdmF0ZSBjaGVja0RPTVByZXNlbnQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW5pdGlhbGl6ZWQgfHwgIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oNXAtcXVlc3Rpb24tY29udGVudCcpKSB7XG4gICAgICByZXR1cm47IC8vIFJlcXVpcmVkIERPTSBlbGVtZW50IGlzIG5vdCBwcmVzZW50IHlldFxuICAgIH1cblxuICAgIC8vIFJlbW92ZSB0aGlzIGhhbmRsZXIsIGp1c3QgbmVlZGVkIG9uY2VcbiAgICB0aGlzLm9mZigncmVzaXplJywgdGhpcy5jaGVja0RPTVByZXNlbnQpO1xuXG4gICAgLy8gRGV0ZXJtaW5lIG9yaWdpbmFsICRjb250YWluZXIgZm9yIHRoaXMgY29udGVudFxuICAgIGNvbnN0ICRjb250YWluZXIgPSB0aGlzLmpRdWVyeSh0aGlzLmNvbnRhaW5lcikuY2xvc2VzdCgnLmg1cC1xdWVzdGlvbicpO1xuXG4gICAgLy8gSW5pdGlhbGl6ZSBjbG96ZUNvbnRyb2xsZXIgd2l0aCBSYWN0aXZlXG4gICAgdGhpcy5jbG96ZUNvbnRyb2xsZXIuaW5pdGlhbGl6ZSh0aGlzLmNvbnRhaW5lci5nZXQoMCksICRjb250YWluZXIpO1xuXG4gICAgaWYgKHRoaXMuY2xvemVDb250cm9sbGVyLmRlc2VyaWFsaXplQ2xvemUodGhpcy5wcmV2aW91c1N0YXRlLmNsb3plKSkge1xuICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMucHJldmlvdXNTdGF0ZS5zdGF0ZSB8fCBTdGF0ZXMub25nb2luZztcblxuICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IFN0YXRlcy5jaGVja2luZyB8fCB0aGlzLnN0YXRlID09PSBTdGF0ZXMuZmluaXNoZWQpIHtcbiAgICAgICAgdGhpcy5vbkNoZWNrQW5zd2VyKCk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICh0aGlzLnN0YXRlID09PSBTdGF0ZXMuc2hvd2luZ1NvbHV0aW9ucyl7XG4gICAgICAgIHRoaXMub25TaG93U29sdXRpb24odHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYW5zd2VyZWQgPSB0aGlzLmNsb3plQ29udHJvbGxlci5pc0ZpbGxlZE91dDtcbiAgICAgIHRoaXMudG9nZ2xlQnV0dG9uVmlzaWJpbGl0eSh0aGlzLnN0YXRlKTtcbiAgICB9XG5cbiAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJucyBKUXVlcnkgLSBUaGUgb3V0ZXIgaDVwIGNvbnRhaW5lci4gVGhlIGxpYnJhcnkgY2FuIGFkZCBkaWFsb2d1ZXMgdG8gdGhpc1xuICAgKiBlbGVtZW50LlxuICAgKi9cbiAgcHJpdmF0ZSBnZXRINXBDb250YWluZXIoKTogSlF1ZXJ5IHtcbiAgICB2YXIgJGNvbnRlbnQgPSB0aGlzLmpRdWVyeSgnW2RhdGEtY29udGVudC1pZD1cIicgKyB0aGlzLmNvbnRlbnRJZCArICdcIl0uaDVwLWNvbnRlbnQnKTtcbiAgICB2YXIgJGNvbnRhaW5lclBhcmVudHMgPSAkY29udGVudC5wYXJlbnRzKCcuaDVwLWNvbnRhaW5lcicpO1xuXG4gICAgLy8gc2VsZWN0IGZpbmQgY29udGFpbmVyIHRvIGF0dGFjaCBkaWFsb2dzIHRvXG4gICAgdmFyICRjb250YWluZXI7XG4gICAgaWYgKCRjb250YWluZXJQYXJlbnRzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgLy8gdXNlIHBhcmVudCBoaWdoZXN0IHVwIGlmIGFueVxuICAgICAgJGNvbnRhaW5lciA9ICRjb250YWluZXJQYXJlbnRzLmxhc3QoKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoJGNvbnRlbnQubGVuZ3RoICE9PSAwKSB7XG4gICAgICAkY29udGFpbmVyID0gJGNvbnRlbnQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgJGNvbnRhaW5lciA9IHRoaXMualF1ZXJ5KGRvY3VtZW50LmJvZHkpO1xuICAgIH1cblxuICAgIHJldHVybiAkY29udGFpbmVyO1xuICB9XG5cbiAgcHJpdmF0ZSByZWdpc3Rlck1lZGlhKCkge1xuICAgIHZhciBtZWRpYSA9IHRoaXMucmVwb3NpdG9yeS5nZXRNZWRpYSgpO1xuICAgIGlmICghbWVkaWEgfHwgIW1lZGlhLmxpYnJhcnkpXG4gICAgICByZXR1cm47XG5cbiAgICB2YXIgdHlwZSA9IG1lZGlhLmxpYnJhcnkuc3BsaXQoJyAnKVswXTtcbiAgICBpZiAodHlwZSA9PT0gJ0g1UC5JbWFnZScpIHtcbiAgICAgIGlmIChtZWRpYS5wYXJhbXMuZmlsZSkge1xuICAgICAgICB0aGlzLnNldEltYWdlKG1lZGlhLnBhcmFtcy5maWxlLnBhdGgsIHtcbiAgICAgICAgICBkaXNhYmxlSW1hZ2Vab29taW5nOiB0aGlzLnNldHRpbmdzLmRpc2FibGVJbWFnZVpvb21pbmcsXG4gICAgICAgICAgYWx0OiBtZWRpYS5wYXJhbXMuYWx0XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAnSDVQLlZpZGVvJykge1xuICAgICAgaWYgKG1lZGlhLnBhcmFtcy5zb3VyY2VzKSB7XG4gICAgICAgIHRoaXMuc2V0VmlkZW8obWVkaWEpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVnaXN0ZXJCdXR0b25zKCkge1xuICAgIHZhciAkY29udGFpbmVyID0gdGhpcy5nZXRINXBDb250YWluZXIoKTtcblxuICAgIGlmICghdGhpcy5zZXR0aW5ncy5hdXRvQ2hlY2spIHtcbiAgICAgIC8vIENoZWNrIGFuc3dlciBidXR0b25cbiAgICAgIHRoaXMuYWRkQnV0dG9uKCdjaGVjay1hbnN3ZXInLCB0aGlzLmxvY2FsaXphdGlvbi5nZXRUZXh0RnJvbUxhYmVsKExvY2FsaXphdGlvbkxhYmVscy5jaGVja0FsbEJ1dHRvbiksXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICB0aGlzLm9uQ2hlY2tBbnN3ZXIoe2Fuc3dlcmVkOiB0cnVlfSk7XG4gICAgICAgIH0sIHRydWUsIHt9LCB7XG4gICAgICAgIGNvbmZpcm1hdGlvbkRpYWxvZzoge1xuICAgICAgICAgIGVuYWJsZTogdGhpcy5zZXR0aW5ncy5jb25maXJtQ2hlY2tEaWFsb2csXG4gICAgICAgICAgbDEwbjogdGhpcy5sb2NhbGl6YXRpb24uZ2V0T2JqZWN0Rm9yU3RydWN0dXJlKExvY2FsaXphdGlvblN0cnVjdHVyZXMuY29uZmlybUNoZWNrKSxcbiAgICAgICAgICBpbnN0YW5jZTogdGhpcyxcbiAgICAgICAgICAkcGFyZW50RWxlbWVudDogJGNvbnRhaW5lclxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBTaG93IHNvbHV0aW9uIGJ1dHRvblxuICAgIHRoaXMuYWRkQnV0dG9uKCdzaG93LXNvbHV0aW9uJywgdGhpcy5sb2NhbGl6YXRpb24uZ2V0VGV4dEZyb21MYWJlbChMb2NhbGl6YXRpb25MYWJlbHMuc2hvd1NvbHV0aW9uQnV0dG9uKSxcbiAgICAgIHRoaXMub25TaG93U29sdXRpb24sIHRoaXMuc2V0dGluZ3MuZW5hYmxlU29sdXRpb25zQnV0dG9uKTtcblxuICAgIC8vIFRyeSBhZ2FpbiBidXR0b25cbiAgICBpZiAodGhpcy5zZXR0aW5ncy5lbmFibGVSZXRyeSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5hZGRCdXR0b24oJ3RyeS1hZ2FpbicsIHRoaXMubG9jYWxpemF0aW9uLmdldFRleHRGcm9tTGFiZWwoTG9jYWxpemF0aW9uTGFiZWxzLnJldHJ5QnV0dG9uKSxcbiAgICAgICAgdGhpcy5vblJldHJ5LCB0cnVlLCB7fSwge1xuICAgICAgICBjb25maXJtYXRpb25EaWFsb2c6IHtcbiAgICAgICAgICBlbmFibGU6IHRoaXMuc2V0dGluZ3MuY29uZmlybVJldHJ5RGlhbG9nLFxuICAgICAgICAgIGwxMG46IHRoaXMubG9jYWxpemF0aW9uLmdldE9iamVjdEZvclN0cnVjdHVyZShMb2NhbGl6YXRpb25TdHJ1Y3R1cmVzLmNvbmZpcm1SZXRyeSksXG4gICAgICAgICAgaW5zdGFuY2U6IHRoaXMsXG4gICAgICAgICAgJHBhcmVudEVsZW1lbnQ6ICRjb250YWluZXJcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGFuc3dlci4gQWxzbyB1cGRhdGVzIHN0YXRlc1xuICAgKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtcz17fV0gUGFyYW1ldGVycy5cbiAgICogQHBhcmFtIHtib29sZWFufSBbcGFyYW1zLnNraXBYQVBJXSBJZiB0cnVlLCB3aWxsIHNraXAgeEFQSS5cbiAgICovXG4gIHByaXZhdGUgb25DaGVja0Fuc3dlciA9IChwYXJhbXM6IGFueSA9IHt9KSA9PiB7XG4gICAgdGhpcy5jbG96ZUNvbnRyb2xsZXIuY2hlY2tBbGwoKTtcblxuICAgIGlmICghcGFyYW1zLnNraXBYQVBJKSB7XG4gICAgICB0aGlzLnRyaWdnZXJYQVBJQW5zd2VyZWQoKTtcbiAgICB9XG5cbiAgICB0aGlzLnRyYW5zaXRpb25TdGF0ZSgpO1xuICAgIGlmICh0aGlzLnN0YXRlICE9PSBTdGF0ZXMuZmluaXNoZWQpXG4gICAgICB0aGlzLnN0YXRlID0gU3RhdGVzLmNoZWNraW5nO1xuXG4gICAgdGhpcy5zaG93RmVlZGJhY2soKTtcblxuICAgIHRoaXMudG9nZ2xlQnV0dG9uVmlzaWJpbGl0eSh0aGlzLnN0YXRlKTtcbiAgfVxuXG4gIHByaXZhdGUgdHJhbnNpdGlvblN0YXRlID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLmNsb3plQ29udHJvbGxlci5pc1NvbHZlZCkge1xuICAgICAgdGhpcy5tb3ZlVG9TdGF0ZShTdGF0ZXMuZmluaXNoZWQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgb25TaG93U29sdXRpb24gPSAoZm9yY2U6IGJvb2xlYW4pID0+IHtcbiAgICBpZiAoIWZvcmNlICYmIHRoaXMuc2V0dGluZ3Muc2hvd1NvbHV0aW9uc1JlcXVpcmVzSW5wdXQgJiYgIXRoaXMuY2xvemVDb250cm9sbGVyLmFsbEJsYW5rc0VudGVyZWQpIHtcbiAgICAgIC8vIFJlcXVpcmUgYW5zd2VyIGJlZm9yZSBzb2x1dGlvbiBjYW4gYmUgdmlld2VkXG4gICAgICB0aGlzLnVwZGF0ZUZlZWRiYWNrQ29udGVudCh0aGlzLmxvY2FsaXphdGlvbi5nZXRUZXh0RnJvbUxhYmVsKExvY2FsaXphdGlvbkxhYmVscy5ub3RGaWxsZWRPdXRXYXJuaW5nKSk7XG4gICAgICB0aGlzLnJlYWQodGhpcy5sb2NhbGl6YXRpb24uZ2V0VGV4dEZyb21MYWJlbChMb2NhbGl6YXRpb25MYWJlbHMubm90RmlsbGVkT3V0V2FybmluZykpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5tb3ZlVG9TdGF0ZShTdGF0ZXMuc2hvd2luZ1NvbHV0aW9ucyk7XG4gICAgdGhpcy5jbG96ZUNvbnRyb2xsZXIuc2hvd1NvbHV0aW9ucygpO1xuICAgIHRoaXMuc2hvd0ZlZWRiYWNrKCk7XG4gIH1cblxuICBwcml2YXRlIG9uUmV0cnkgPSAoKSA9PiB7XG4gICAgdGhpcy5yZW1vdmVGZWVkYmFjaygpO1xuICAgIHRoaXMuY2xvemVDb250cm9sbGVyLnJlc2V0KCk7XG4gICAgdGhpcy5hbnN3ZXJlZCA9IGZhbHNlO1xuICAgIHRoaXMubW92ZVRvU3RhdGUoU3RhdGVzLm9uZ29pbmcpO1xuICB9XG5cbiAgcHJpdmF0ZSBzaG93RmVlZGJhY2soKSB7XG4gICAgdmFyIHNjb3JlVGV4dCA9IEg1UC5RdWVzdGlvbi5kZXRlcm1pbmVPdmVyYWxsRmVlZGJhY2sodGhpcy5sb2NhbGl6YXRpb24uZ2V0T2JqZWN0Rm9yU3RydWN0dXJlKExvY2FsaXphdGlvblN0cnVjdHVyZXMub3ZlcmFsbEZlZWRiYWNrKSwgdGhpcy5jbG96ZUNvbnRyb2xsZXIuY3VycmVudFNjb3JlIC8gdGhpcy5jbG96ZUNvbnRyb2xsZXIubWF4U2NvcmUpLnJlcGxhY2UoJ0BzY29yZScsIHRoaXMuY2xvemVDb250cm9sbGVyLmN1cnJlbnRTY29yZSkucmVwbGFjZSgnQHRvdGFsJywgdGhpcy5jbG96ZUNvbnRyb2xsZXIubWF4U2NvcmUpO1xuICAgIHRoaXMuc2V0RmVlZGJhY2soc2NvcmVUZXh0LCB0aGlzLmNsb3plQ29udHJvbGxlci5jdXJyZW50U2NvcmUsIHRoaXMuY2xvemVDb250cm9sbGVyLm1heFNjb3JlLCB0aGlzLmxvY2FsaXphdGlvbi5nZXRUZXh0RnJvbUxhYmVsKExvY2FsaXphdGlvbkxhYmVscy5zY29yZUJhckxhYmVsKSk7XG4gIH1cblxuICAvKipcbiAgICogU2hvd3MgYXJlIGhpZGVzIGJ1dHRvbnMgZGVwZW5kaW5nIG9uIHRoZSBjdXJyZW50IHN0YXRlIGFuZCBzZXR0aW5ncyBtYWRlXG4gICAqIGJ5IHRoZSBjb250ZW50IGNyZWF0b3IuXG4gICAqIEBwYXJhbSAge1N0YXRlc30gc3RhdGVcbiAgICovXG4gIHByaXZhdGUgbW92ZVRvU3RhdGUoc3RhdGU6IFN0YXRlcykge1xuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICB0aGlzLnRvZ2dsZUJ1dHRvblZpc2liaWxpdHkoc3RhdGUpO1xuXG4gICAgdGhpcy50cmlnZ2VyKCdrbGxTdG9yZVNlc3Npb25TdGF0ZScsIHVuZGVmaW5lZCwgeyBidWJibGVzOiB0cnVlLCBleHRlcm5hbDogdHJ1ZSB9KTtcbiAgfVxuXG4gIHByaXZhdGUgdG9nZ2xlQnV0dG9uVmlzaWJpbGl0eShzdGF0ZTogU3RhdGVzKSB7XG4gICAgaWYgKHRoaXMuc2V0dGluZ3MuZW5hYmxlU29sdXRpb25zQnV0dG9uKSB7XG4gICAgICBpZiAoKChzdGF0ZSA9PT0gU3RhdGVzLmNoZWNraW5nKVxuICAgICAgICB8fCAodGhpcy5zZXR0aW5ncy5hdXRvQ2hlY2sgJiYgc3RhdGUgPT09IFN0YXRlcy5vbmdvaW5nKSlcbiAgICAgICAgJiYgKCF0aGlzLnNldHRpbmdzLnNob3dTb2x1dGlvbnNSZXF1aXJlc0lucHV0IHx8IHRoaXMuY2xvemVDb250cm9sbGVyLmFsbEJsYW5rc0VudGVyZWQpKSB7XG4gICAgICAgIHRoaXMuc2hvd0J1dHRvbignc2hvdy1zb2x1dGlvbicpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRoaXMuaGlkZUJ1dHRvbignc2hvdy1zb2x1dGlvbicpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLnNldHRpbmdzLmVuYWJsZVJldHJ5ICYmIChzdGF0ZSA9PT0gU3RhdGVzLmNoZWNraW5nIHx8IHN0YXRlID09PSBTdGF0ZXMuZmluaXNoZWQgfHwgc3RhdGUgPT09IFN0YXRlcy5zaG93aW5nU29sdXRpb25zKSkge1xuICAgICAgdGhpcy5zaG93QnV0dG9uKCd0cnktYWdhaW4nKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmhpZGVCdXR0b24oJ3RyeS1hZ2FpbicpO1xuICAgIH1cblxuXG4gICAgaWYgKHN0YXRlID09PSBTdGF0ZXMub25nb2luZyAmJiB0aGlzLnNldHRpbmdzLmVuYWJsZUNoZWNrQnV0dG9uKSB7XG4gICAgICB0aGlzLnNob3dCdXR0b24oJ2NoZWNrLWFuc3dlcicpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaGlkZUJ1dHRvbignY2hlY2stYW5zd2VyJyk7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlID09PSBTdGF0ZXMuc2hvd2luZ1NvbHV0aW9uc0VtYmVkZGVkKSB7XG4gICAgICB0aGlzLmhpZGVCdXR0b24oJ2NoZWNrLWFuc3dlcicpO1xuICAgICAgdGhpcy5oaWRlQnV0dG9uKCd0cnktYWdhaW4nKTtcbiAgICAgIHRoaXMuaGlkZUJ1dHRvbignc2hvdy1zb2x1dGlvbicpO1xuICAgIH1cblxuICAgIHRoaXMudHJpZ2dlcigncmVzaXplJyk7XG4gIH1cblxuICBwdWJsaWMgZ2V0Q3VycmVudFN0YXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0ge1xuICAgICAgY2xvemU6IHRoaXMuY2xvemVDb250cm9sbGVyLnNlcmlhbGl6ZUNsb3plKCksXG4gICAgICBzdGF0ZTogdGhpcy5zdGF0ZVxuICAgIH07XG5cbiAgICByZXR1cm4gc3RhdGU7XG4gIH07XG5cbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICogSW1wbGVtZW50YXRpb24gb2YgUXVlc3Rpb24gY29udHJhY3QgICpcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gIHB1YmxpYyBnZXRBbnN3ZXJHaXZlbiA9ICgpOiBib29sZWFuID0+IHtcbiAgICByZXR1cm4gdGhpcy5hbnN3ZXJlZCB8fCB0aGlzLmNsb3plQ29udHJvbGxlci5tYXhTY29yZSA9PT0gMDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRTY29yZSA9ICgpOiBudW1iZXIgPT4ge1xuICAgIHJldHVybiB0aGlzLmNsb3plQ29udHJvbGxlci5jdXJyZW50U2NvcmU7XG4gIH1cblxuICBwdWJsaWMgZ2V0TWF4U2NvcmUgPSAoKTogbnVtYmVyID0+IHtcbiAgICByZXR1cm4gdGhpcy5jbG96ZUNvbnRyb2xsZXIubWF4U2NvcmU7XG4gIH1cblxuICBwdWJsaWMgc2hvd1NvbHV0aW9ucyA9ICgpID0+IHtcbiAgICB0aGlzLm9uU2hvd1NvbHV0aW9uKHRydWUpO1xuICAgIHRoaXMubW92ZVRvU3RhdGUoU3RhdGVzLnNob3dpbmdTb2x1dGlvbnNFbWJlZGRlZCk7XG4gIH1cblxuICBwdWJsaWMgcmVzZXRUYXNrID0gKCkgPT4ge1xuICAgIHRoaXMub25SZXRyeSgpO1xuICB9XG5cbiAgLyoqKlxuICAgKiBYQXBpIGltcGxlbWVudGF0aW9uXG4gICAqL1xuXG5cbiAgLyoqXG4gICAqIFRyaWdnZXIgeEFQSSBhbnN3ZXJlZCBldmVudFxuICAgKi9cbiAgcHVibGljIHRyaWdnZXJYQVBJQW5zd2VyZWQgPSAoKTogdm9pZCA9PiB7XG4gICAgdGhpcy5hbnN3ZXJlZCA9IHRydWU7XG4gICAgdmFyIHhBUElFdmVudCA9IHRoaXMuY3JlYXRlWEFQSUV2ZW50VGVtcGxhdGUoJ2Fuc3dlcmVkJyk7XG4gICAgdGhpcy5hZGRRdWVzdGlvblRvWEFQSSh4QVBJRXZlbnQpO1xuICAgIHRoaXMuYWRkUmVzcG9uc2VUb1hBUEkoeEFQSUV2ZW50KTtcbiAgICB0aGlzLnRyaWdnZXIoeEFQSUV2ZW50KTtcbiAgfTtcblxuICAvKipcbiAgICogR2V0IHhBUEkgZGF0YS5cbiAgICogQ29udHJhY3QgdXNlZCBieSByZXBvcnQgcmVuZGVyaW5nIGVuZ2luZS5cbiAgICpcbiAgICogQHNlZSBjb250cmFjdCBhdCB7QGxpbmsgaHR0cHM6Ly9oNXAub3JnL2RvY3VtZW50YXRpb24vZGV2ZWxvcGVycy9jb250cmFjdHMjZ3VpZGVzLWhlYWRlci02fVxuICAgKi9cbiAgcHVibGljIGdldFhBUElEYXRhID0gKCkgPT4ge1xuICAgIHZhciB4QVBJRXZlbnQgPSB0aGlzLmNyZWF0ZVhBUElFdmVudFRlbXBsYXRlKCdhbnN3ZXJlZCcpO1xuICAgIHRoaXMuYWRkUXVlc3Rpb25Ub1hBUEkoeEFQSUV2ZW50KTtcbiAgICB0aGlzLmFkZFJlc3BvbnNlVG9YQVBJKHhBUElFdmVudCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXRlbWVudDogeEFQSUV2ZW50LmRhdGEuc3RhdGVtZW50XG4gICAgfTtcbiAgfTtcblxuICAvKipcbiAgICogR2VuZXJhdGUgeEFQSSBvYmplY3QgZGVmaW5pdGlvbiB1c2VkIGluIHhBUEkgc3RhdGVtZW50cy5cbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi9cbiAgcHVibGljIGdldHhBUElEZWZpbml0aW9uID0gKCk6IFhBUElBY3Rpdml0eURlZmluaXRpb24gPT4ge1xuICAgIGNvbnN0IGRlZmluaXRpb24gPSBuZXcgWEFQSUFjdGl2aXR5RGVmaW5pdGlvbigpO1xuXG4gICAgZGVmaW5pdGlvbi5kZXNjcmlwdGlvbiA9IHtcbiAgICAgICdlbi1VUyc6ICc8cD4nICsgdGhpcy5yZXBvc2l0b3J5LmdldFRhc2tEZXNjcmlwdGlvbigpICsgJzwvcD4nICsgdGhpcy5yZXBvc2l0b3J5LmdldENsb3plVGV4dCgpLnJlcGxhY2UoL19fKF8pKy9nLCAnX19fX19fX19fXycpXG4gICAgfTtcblxuICAgIGRlZmluaXRpb24udHlwZSA9ICdodHRwOi8vYWRsbmV0Lmdvdi9leHBhcGkvYWN0aXZpdGllcy9jbWkuaW50ZXJhY3Rpb24nO1xuICAgIGRlZmluaXRpb24uaW50ZXJhY3Rpb25UeXBlID0gJ2ZpbGwtaW4nOyAvLyBXZSB1c2UgdGhlICdmaWxsLWluJyB0eXBlIGV2ZW4gaW4gc2VsZWN0IG1vZGUsIGFzIHRoZSB4QVBJIGZvcm1hdCBmb3Igc2VsZWN0aW9ucyBkb2Vzbid0IHJlYWxseSBjYXRlciBmb3Igc2VxdWVuY2VzLlxuXG4gICAgY29uc3QgY29ycmVjdFJlc3BvbnNlc1BhdHRlcm5QcmVmaXggPSAne2Nhc2VfbWF0dGVycz0nICsgdGhpcy5zZXR0aW5ncy5jYXNlU2Vuc2l0aXZlICsgJ30nO1xuXG4gICAgY29uc3QgY29ycmVjdEFuc3dlckxpc3QgPSB0aGlzLmNsb3plQ29udHJvbGxlci5nZXRDb3JyZWN0QW5zd2VyTGlzdCgpO1xuXG4gICAgLy8gSDVQIHVzZXMgZXh0ZW5zaW9uIGluc3RlYWQgb2YgZnVsbCBjb3JyZWN0IHJlc3BvbnNlcyBwYXR0ZXJuIHRvIGNvdW50ZXIgY29tcGxleGl0eVxuICAgIGNvbnN0IGZpcnN0QWx0ZXJuYXRpdmVzID0gY29ycmVjdEFuc3dlckxpc3QucmVkdWNlKChyZXN1bHQsIGxpc3QpID0+IHtcbiAgICAgIHJlc3VsdC5wdXNoKGxpc3RbMF0pO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LCBbXSkuam9pbignWyxdJyk7XG4gICAgZGVmaW5pdGlvbi5jb3JyZWN0UmVzcG9uc2VzUGF0dGVybiA9IFtgJHtjb3JyZWN0UmVzcG9uc2VzUGF0dGVyblByZWZpeH0ke2ZpcnN0QWx0ZXJuYXRpdmVzfWBdO1xuXG4gICAgLy8gQWRkIHRoZSBINVAgQWx0ZXJuYXRpdmUgZXh0ZW5zaW9uIHdoaWNoIHByb3ZpZGVzIGFsbCB0aGUgY29tYmluYXRpb25zIG9mIGRpZmZlcmVudCBhbnN3ZXJzXG4gICAgLy8gUmVwb3J0aW5nIHNvZnR3YXJlIHdpbGwgbmVlZCB0byBzdXBwb3J0IHRoaXMgZXh0ZW5zaW9uIGZvciBhbHRlcm5hdGl2ZXMgdG8gd29yay5cbiAgICBkZWZpbml0aW9uLmV4dGVuc2lvbnMgPSBkZWZpbml0aW9uLmV4dGVuc2lvbnMgfHwge307XG4gICAgZGVmaW5pdGlvbi5leHRlbnNpb25zW1hBUElfQ0FTRV9TRU5TSVRJVklUWV0gPSB0aGlzLnNldHRpbmdzLmNhc2VTZW5zaXRpdmU7XG4gICAgZGVmaW5pdGlvbi5leHRlbnNpb25zW1hBUElfQUxURVJOQVRJVkVfRVhURU5TSU9OXSA9IGNvcnJlY3RBbnN3ZXJMaXN0O1xuXG4gICAgcmV0dXJuIGRlZmluaXRpb247XG4gIH07XG5cbiAgLyoqXG4gICAqIEFkZCB0aGUgcXVlc3Rpb24gaXRzZWxmIHRvIHRoZSBkZWZpbml0aW9uIHBhcnQgb2YgYW4geEFQSUV2ZW50XG4gICAqL1xuICBwdWJsaWMgYWRkUXVlc3Rpb25Ub1hBUEkgPSAoeEFQSUV2ZW50KSA9PiB7XG4gICAgdmFyIGRlZmluaXRpb24gPSB4QVBJRXZlbnQuZ2V0VmVyaWZpZWRTdGF0ZW1lbnRWYWx1ZShbJ29iamVjdCcsICdkZWZpbml0aW9uJ10pO1xuICAgIHRoaXMualF1ZXJ5LmV4dGVuZCh0cnVlLCBkZWZpbml0aW9uLCB0aGlzLmdldHhBUElEZWZpbml0aW9uKCkpO1xuXG4gICAgLy8gU2V0IHJlcG9ydGluZyBtb2R1bGUgdmVyc2lvbiBpZiBhbHRlcm5hdGl2ZSBleHRlbnNpb24gaXMgdXNlZFxuICAgIGlmICh0aGlzLmNsb3plQ29udHJvbGxlci5oYXNBbHRlcm5hdGl2ZXMpIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSB4QVBJRXZlbnQuZ2V0VmVyaWZpZWRTdGF0ZW1lbnRWYWx1ZShbJ2NvbnRleHQnXSk7XG4gICAgICBjb250ZXh0LmV4dGVuc2lvbnMgPSBjb250ZXh0LmV4dGVuc2lvbnMgfHwge307XG4gICAgICBjb250ZXh0LmV4dGVuc2lvbnNbWEFQSV9SRVBPUlRJTkdfVkVSU0lPTl9FWFRFTlNJT05dID0gJzEuMC4wJztcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEFkZCB0aGUgcmVzcG9uc2UgcGFydCB0byBhbiB4QVBJIGV2ZW50XG4gICAqXG4gICAqIEBwYXJhbSB7SDVQLlhBUElFdmVudH0geEFQSUV2ZW50XG4gICAqICBUaGUgeEFQSSBldmVudCB3ZSB3aWxsIGFkZCBhIHJlc3BvbnNlIHRvXG4gICAqL1xuICBwdWJsaWMgYWRkUmVzcG9uc2VUb1hBUEkgPSAoeEFQSUV2ZW50KSA9PiB7XG4gICAgeEFQSUV2ZW50LnNldFNjb3JlZFJlc3VsdCh0aGlzLmNsb3plQ29udHJvbGxlci5jdXJyZW50U2NvcmUsIHRoaXMuY2xvemVDb250cm9sbGVyLm1heFNjb3JlLCB0aGlzKTtcbiAgICB4QVBJRXZlbnQuZGF0YS5zdGF0ZW1lbnQucmVzdWx0LnJlc3BvbnNlID0gdGhpcy5nZXR4QVBJUmVzcG9uc2UoKTtcbiAgfTtcblxuICAvKipcbiAgICogR2VuZXJhdGUgeEFQSSB1c2VyIHJlc3BvbnNlLCB1c2VkIGluIHhBUEkgc3RhdGVtZW50cy5cbiAgICogQHJldHVybiB7c3RyaW5nfSBVc2VyIGFuc3dlcnMgc2VwYXJhdGVkIGJ5IHRoZSBcIlssXVwiIHBhdHRlcm5cbiAgICovXG4gIHB1YmxpYyBnZXR4QVBJUmVzcG9uc2UgPSAoKTogc3RyaW5nID0+IHtcbiAgICB2YXIgdXNlcnNBbnN3ZXJzID0gKHRoaXMuZ2V0Q3VycmVudFN0YXRlKCkpLmNsb3plO1xuICAgIHJldHVybiB1c2Vyc0Fuc3dlcnMuam9pbignWyxdJyk7XG4gIH07XG59XG4iLCJpbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL21lc3NhZ2Utc2VydmljZSc7XG5pbXBvcnQgeyBIaWdobGlnaHQgfSBmcm9tICcuLi9tb2RlbHMvaGlnaGxpZ2h0JztcbmltcG9ydCB7IEFuc3dlciB9IGZyb20gJy4uL21vZGVscy9hbnN3ZXInO1xuaW1wb3J0IHsgQmxhbmsgfSBmcm9tICcuLi9tb2RlbHMvYmxhbmsnO1xuaW1wb3J0IHsgSDVQTG9jYWxpemF0aW9uIH0gZnJvbSAnLi4vc2VydmljZXMvbG9jYWxpemF0aW9uJztcbmltcG9ydCB7IElTZXR0aW5ncyB9IGZyb20gJy4uL3NlcnZpY2VzL3NldHRpbmdzJztcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tIFwiLi4vbW9kZWxzL21lc3NhZ2VcIjtcbmltcG9ydCB7IFNuaXBwZXQgfSBmcm9tICcuLi9tb2RlbHMvc25pcHBldCc7XG5cbmV4cG9ydCBjbGFzcyBCbGFua0xvYWRlciB7XG5cbiAgcHJpdmF0ZSBjb25zdHJ1Y3Rvcihwcml2YXRlIHNldHRpbmdzOiBJU2V0dGluZ3MsIHByaXZhdGUgbG9jYWxpemF0aW9uOiBINVBMb2NhbGl6YXRpb24sIHByaXZhdGUganF1ZXJ5OiBKUXVlcnlTdGF0aWMsIHByaXZhdGUgbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlKSB7IH1cblxuICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IEJsYW5rTG9hZGVyO1xuICBwdWJsaWMgc3RhdGljIGluaXRpYWxpemUoc2V0dGluZ3M6IElTZXR0aW5ncywgbG9jYWxpemF0aW9uOiBINVBMb2NhbGl6YXRpb24sIGpxdWVyeTogSlF1ZXJ5U3RhdGljLCBtZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2UpOiBCbGFua0xvYWRlciB7XG4gICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgQmxhbmtMb2FkZXIoc2V0dGluZ3MsIGxvY2FsaXphdGlvbiwganF1ZXJ5LCBtZXNzYWdlU2VydmljZSk7XG4gICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBnZXQgaW5zdGFuY2UoKTogQmxhbmtMb2FkZXIge1xuICAgIGlmICh0aGlzLl9pbnN0YW5jZSlcbiAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcblxuICAgIHRocm93IFwiQmxhbmtMb2FkZXIgbXVzdCBiZSBpbml0aWFsaXplZCBiZWZvcmUgdXNlLlwiO1xuICB9XG5cbiAgcHJpdmF0ZSBkZWNvZGVIdG1sKGh0bWw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgdmFyIGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIGVsZW0uaW5uZXJIVE1MID0gaHRtbDtcbiAgICByZXR1cm4gZWxlbS52YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGVCbGFuayhpZDogc3RyaW5nLCBjb3JyZWN0VGV4dDogc3RyaW5nLCBoaW50VGV4dDogc3RyaW5nLCBpbmNvcnJlY3RBbnN3ZXJzOiBhbnlbXSwgcGxhY2Vob2xkZXJzOiBudW1iZXIpOiBCbGFuayB7XG4gICAgdmFyIGJsYW5rID0gbmV3IEJsYW5rKHRoaXMuc2V0dGluZ3MsIHRoaXMubG9jYWxpemF0aW9uLCB0aGlzLmpxdWVyeSwgdGhpcy5tZXNzYWdlU2VydmljZSwgaWQsIHBsYWNlaG9sZGVycylcbiAgICBpZiAoY29ycmVjdFRleHQpIHtcbiAgICAgIGNvcnJlY3RUZXh0ID0gdGhpcy5kZWNvZGVIdG1sKGNvcnJlY3RUZXh0KTtcbiAgICAgIGJsYW5rLmFkZENvcnJlY3RBbnN3ZXIobmV3IEFuc3dlcihjb3JyZWN0VGV4dCwgXCJcIiwgZmFsc2UsIDAsIHRoaXMuc2V0dGluZ3MpKTtcbiAgICB9XG4gICAgYmxhbmsuc2V0SGludChuZXcgTWVzc2FnZShoaW50VGV4dCA/IGhpbnRUZXh0IDogXCJcIiwgZmFsc2UsIDApKTtcblxuICAgIGlmIChpbmNvcnJlY3RBbnN3ZXJzKSB7XG4gICAgICBmb3IgKHZhciBoNXBJbmNvcnJlY3RBbnN3ZXIgb2YgaW5jb3JyZWN0QW5zd2Vycykge1xuICAgICAgICBibGFuay5hZGRJbmNvcnJlY3RBbnN3ZXIodGhpcy5kZWNvZGVIdG1sKGg1cEluY29ycmVjdEFuc3dlci5pbmNvcnJlY3RBbnN3ZXJUZXh0KSwgaDVwSW5jb3JyZWN0QW5zd2VyLmluY29ycmVjdEFuc3dlckZlZWRiYWNrLCBoNXBJbmNvcnJlY3RBbnN3ZXIuc2hvd0hpZ2hsaWdodCwgaDVwSW5jb3JyZWN0QW5zd2VyLmhpZ2hsaWdodCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGJsYW5rO1xuICB9XG5cbiAgcHVibGljIHJlcGxhY2VTbmlwcGV0cyhibGFuazogQmxhbmssIHNuaXBwZXRzOiBTbmlwcGV0W10pIHtcbiAgICBibGFuay5jb3JyZWN0QW5zd2Vycy5jb25jYXQoYmxhbmsuaW5jb3JyZWN0QW5zd2VycylcbiAgICAgIC5mb3JFYWNoKGFuc3dlciA9PiBhbnN3ZXIubWVzc2FnZS50ZXh0ID0gdGhpcy5nZXRTdHJpbmdXaXRoU25pcHBldHMoYW5zd2VyLm1lc3NhZ2UudGV4dCwgc25pcHBldHMpKTtcbiAgICBibGFuay5oaW50LnRleHQgPSB0aGlzLmdldFN0cmluZ1dpdGhTbmlwcGV0cyhibGFuay5oaW50LnRleHQsIHNuaXBwZXRzKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U3RyaW5nV2l0aFNuaXBwZXRzKHRleHQ6IHN0cmluZywgc25pcHBldHM6IFNuaXBwZXRbXSk6IHN0cmluZyB7XG4gICAgaWYgKCF0ZXh0IHx8IHRleHQgPT09IHVuZGVmaW5lZClcbiAgICAgIHJldHVybiBcIlwiO1xuXG4gICAgaWYoIXNuaXBwZXRzKVxuICAgICAgcmV0dXJuIHRleHQ7XG5cbiAgICBmb3IgKHZhciBzbmlwcGV0IG9mIHNuaXBwZXRzKSB7XG4gICAgICBpZiAoc25pcHBldC5uYW1lID09PSB1bmRlZmluZWQgfHwgc25pcHBldC5uYW1lID09PSBcIlwiIHx8IHNuaXBwZXQudGV4dCA9PT0gdW5kZWZpbmVkIHx8IHNuaXBwZXQudGV4dCA9PT0gXCJcIilcbiAgICAgICAgY29udGludWU7XG4gICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKFwiQFwiICsgc25pcHBldC5uYW1lLCBzbmlwcGV0LnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXh0O1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgdGhlIGhpZ2hsaWdodCBvYmplY3RzIHRvIHRoZSBhbnN3ZXJzIGluIHRoZSBjb3JyZWN0IGFuZCBpbmNvcnJlY3QgYW5zd2VyIGxpc3QuXG4gICAqIEBwYXJhbSAge0hpZ2hsaWdodFtdfSBoaWdobGlnaHRzQmVmb3JlIC0gQWxsIGhpZ2hsaWdodHMgY29taW5nIGJlZm9yZSB0aGUgYmxhbmsuXG4gICAqIEBwYXJhbSAge0hpZ2hsaWdodFtdfSBoaWdobGlnaHRzQWZ0ZXIgLSBBbGwgaGlnaGxpZ2h0cyBjb21pbmcgYWZ0ZXIgdGhlIGJsYW5rLlxuICAgKi9cbiAgcHVibGljIGxpbmtIaWdobGlnaHRJZFRvT2JqZWN0KGJsYW5rOiBCbGFuaywgaGlnaGxpZ2h0c0JlZm9yZTogSGlnaGxpZ2h0W10sIGhpZ2hsaWdodHNBZnRlcjogSGlnaGxpZ2h0W10pIHtcbiAgICBmb3IgKGxldCBhbnN3ZXIgb2YgYmxhbmsuY29ycmVjdEFuc3dlcnMpIHtcbiAgICAgIGFuc3dlci5saW5rSGlnaGxpZ2h0SWRUb09iamVjdChoaWdobGlnaHRzQmVmb3JlLCBoaWdobGlnaHRzQWZ0ZXIpO1xuICAgIH1cblxuICAgIGZvciAobGV0IGFuc3dlciBvZiBibGFuay5pbmNvcnJlY3RBbnN3ZXJzKSB7XG4gICAgICBhbnN3ZXIubGlua0hpZ2hsaWdodElkVG9PYmplY3QoaGlnaGxpZ2h0c0JlZm9yZSwgaGlnaGxpZ2h0c0FmdGVyKTtcbiAgICB9XG5cbiAgICBibGFuay5oaW50LmxpbmtIaWdobGlnaHQoaGlnaGxpZ2h0c0JlZm9yZSwgaGlnaGxpZ2h0c0FmdGVyKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBCbGFua0xvYWRlciB9IGZyb20gJy4vYmxhbmstbG9hZGVyJztcbmltcG9ydCB7IENsb3plRWxlbWVudCwgQ2xvemVFbGVtZW50VHlwZSB9IGZyb20gJy4uL21vZGVscy9jbG96ZS1lbGVtZW50JztcbmltcG9ydCB7IEJsYW5rIH0gZnJvbSAnLi4vbW9kZWxzL2JsYW5rJztcbmltcG9ydCB7IEhpZ2hsaWdodCB9IGZyb20gJy4uL21vZGVscy9oaWdobGlnaHQnO1xuaW1wb3J0IHsgQ2xvemUgfSBmcm9tIFwiLi4vbW9kZWxzL2Nsb3plXCI7XG5cbi8qKlxuICogTG9hZHMgYSBjbG96ZSBvYmplY3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBDbG96ZUxvYWRlciB7XG4gIHByaXZhdGUgc3RhdGljIG5vcm1hbGl6ZWRCbGFua01hcmtlciA9ICdfX18nO1xuICBcbiAgLyoqXG4gICAqIEBwYXJhbSAge3N0cmluZ30gaHRtbCAtIFRoZSBodG1sIHN0cmluZyB0aGF0IGNvbnRhaW5zIHRoZSBjbG96ZSB3aXRoIGJsYW5rcyBtYXJraW5nIGFuZCBoaWdobGlnaHQgbWFya2luZ3MuXG4gICAqIEBwYXJhbSAge0JsYW5rW119IGJsYW5rcyAtIEFsbCBibGFua3MgYXMgZW50ZXJlZCBieSB0aGUgY29udGVudCBhdXRob3IuXG4gICAqIEByZXR1cm5zIENsb3plXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGNyZWF0ZUNsb3plKGh0bWw6IHN0cmluZywgYmxhbmtzOiBCbGFua1tdKTogQ2xvemUge1xuICAgIHZhciBvcmRlcmVkQWxsRWxlbWVudHNMaXN0OiBDbG96ZUVsZW1lbnRbXSA9IG5ldyBBcnJheSgpO1xuICAgIHZhciBoaWdobGlnaHRJbnN0YW5jZXM6IEhpZ2hsaWdodFtdID0gbmV3IEFycmF5KCk7XG4gICAgdmFyIGJsYW5rc0luc3RhbmNlczogQmxhbmtbXSA9IG5ldyBBcnJheSgpO1xuXG4gICAgaHRtbCA9IENsb3plTG9hZGVyLm5vcm1hbGl6ZUJsYW5rTWFya2luZ3MoaHRtbCk7XG5cbiAgICB2YXIgY29udmVyc2lvblJlc3VsdCA9IENsb3plTG9hZGVyLmNvbnZlcnRNYXJrdXBUb1NwYW5zKGh0bWwsIGJsYW5rcyk7XG4gICAgaHRtbCA9IGNvbnZlcnNpb25SZXN1bHQuaHRtbDtcbiAgICBvcmRlcmVkQWxsRWxlbWVudHNMaXN0ID0gY29udmVyc2lvblJlc3VsdC5vcmRlcmVkQWxsRWxlbWVudHNMaXN0O1xuICAgIGhpZ2hsaWdodEluc3RhbmNlcyA9IGNvbnZlcnNpb25SZXN1bHQuaGlnaGxpZ2h0SW5zdGFuY2VzO1xuICAgIGJsYW5rc0luc3RhbmNlcyA9IGNvbnZlcnNpb25SZXN1bHQuYmxhbmtzSW5zdGFuY2VzO1xuXG4gICAgQ2xvemVMb2FkZXIubGlua0hpZ2hsaWdodHNPYmplY3RzKG9yZGVyZWRBbGxFbGVtZW50c0xpc3QsIGhpZ2hsaWdodEluc3RhbmNlcywgYmxhbmtzSW5zdGFuY2VzKTtcblxuICAgIHZhciBjbG96ZSA9IG5ldyBDbG96ZSgpO1xuICAgIGNsb3plLmh0bWwgPSBodG1sO1xuICAgIGNsb3plLmJsYW5rcyA9IGJsYW5rc0luc3RhbmNlcztcbiAgICBjbG96ZS5oaWdobGlnaHRzID0gaGlnaGxpZ2h0SW5zdGFuY2VzO1xuXG4gICAgcmV0dXJuIGNsb3plO1xuICB9XG5cbiAgIC8qKlxuICAgKiBDb252ZXJ0cyAhIXNpZ25hbCEhIGhpZ2hsaWdodCBtYXJrdXAgYW5kIF9fXyAgYmxhbmsgbWFya3VwIGludG8gPHNwYW4+Li4uPC9zcGFuPi5cbiAgICogUmV0dXJucyB0aGUgcmVzdWx0aW5nIGh0bWwgc3RyaW5nIGFuZCB0aHJlZSBsaXN0cyBvZiBhbGwgYWN0aXZlIGVsZW1lbnRzIHVzZWQgaW4gdGhlIGNsb3plOlxuICAgKiAgICBvcmRlcmVkQWxsRWxlbWVudHM6IGhpZ2hsaWdodHMgYW5kIGJsYW5rcyBpbiB0aGUgb3JkZXIgb2YgYXBwZWFyYW5jZSBpbiB0aGUgaHRtbC5cbiAgICogICAgaGlnaGxpZ2h0SW5zdGFuY2VzOiBvbmx5IGhpZ2hsaWdodHMgaW4gdGhlIG9yZGVyIG9mIGFwcGVhcmFuY2VcbiAgICogICAgYmxhbmtzSW5zdGFuY2VzOiBvbmx5IGJsYW5rcyBpbiB0aGUgb3JkZXIgb2YgYXBwZWFyYW5jZVxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IGh0bWxcbiAgICogQHBhcmFtICB7QmxhbmtbXX0gYmxhbmtzXG4gICAqIEByZXR1cm5zIExpc3RzIG9mIGFjdGl2ZSBlbGVtZW50cyAoc2VlIGRlc2NyaXB0aW9uKS5cbiAgICovXG4gIHByaXZhdGUgc3RhdGljIGNvbnZlcnRNYXJrdXBUb1NwYW5zKGh0bWw6IHN0cmluZywgYmxhbmtzOiBCbGFua1tdKTogeyBodG1sOiBzdHJpbmcsIG9yZGVyZWRBbGxFbGVtZW50c0xpc3Q6IENsb3plRWxlbWVudFtdLCBoaWdobGlnaHRJbnN0YW5jZXM6IEhpZ2hsaWdodFtdLCBibGFua3NJbnN0YW5jZXM6IEJsYW5rW10gfSB7XG4gICAgdmFyIG9yZGVyZWRBbGxFbGVtZW50c0xpc3Q6IENsb3plRWxlbWVudFtdID0gbmV3IEFycmF5KCk7XG4gICAgdmFyIGhpZ2hsaWdodEluc3RhbmNlczogSGlnaGxpZ2h0W10gPSBuZXcgQXJyYXkoKTtcbiAgICB2YXIgYmxhbmtzSW5zdGFuY2VzOiBCbGFua1tdID0gbmV3IEFycmF5KCk7XG5cbiAgICB2YXIgZXhjbGFtYXRpb25NYXJrUmVnRXhwID0gLyEhKC57MSw0MH0/KSEhL2k7XG4gICAgdmFyIGhpZ2hsaWdodENvdW50ZXIgPSAwO1xuICAgIGxldCBibGFua0NvdW50ZXIgPSAwO1xuXG4gICAgLy8gU2VhcmNoZXMgdGhlIGh0bWwgc3RyaW5nIGZvciBoaWdobGlnaHRzIGFuZCBibGFua3MgYW5kIGluc2VydHMgc3BhbnMuIFxuICAgIGRvIHtcbiAgICAgIHZhciBuZXh0SGlnaGxpZ2h0TWF0Y2ggPSBodG1sLm1hdGNoKGV4Y2xhbWF0aW9uTWFya1JlZ0V4cCk7XG4gICAgICB2YXIgbmV4dEJsYW5rSW5kZXggPSBodG1sLmluZGV4T2YoQ2xvemVMb2FkZXIubm9ybWFsaXplZEJsYW5rTWFya2VyKTtcblxuICAgICAgaWYgKG5leHRIaWdobGlnaHRNYXRjaCAmJiAoKG5leHRIaWdobGlnaHRNYXRjaC5pbmRleCA8IG5leHRCbGFua0luZGV4KSB8fCAobmV4dEJsYW5rSW5kZXggPCAwKSkpIHtcbiAgICAgICAgLy8gbmV4dCBhY3RpdmUgZWxlbWVudCBpcyBhIGhpZ2hsaWdodFxuICAgICAgICB2YXIgaGlnaGxpZ2h0ID0gbmV3IEhpZ2hsaWdodChuZXh0SGlnaGxpZ2h0TWF0Y2hbMV0sIGBoaWdobGlnaHRfJHtoaWdobGlnaHRDb3VudGVyfWApO1xuICAgICAgICBoaWdobGlnaHRJbnN0YW5jZXMucHVzaChoaWdobGlnaHQpO1xuICAgICAgICBvcmRlcmVkQWxsRWxlbWVudHNMaXN0LnB1c2goaGlnaGxpZ2h0KTtcbiAgICAgICAgaHRtbCA9IGh0bWwucmVwbGFjZShleGNsYW1hdGlvbk1hcmtSZWdFeHAsIGA8c3BhbiBpZD0nY29udGFpbmVyX2hpZ2hsaWdodF8ke2hpZ2hsaWdodENvdW50ZXJ9Jz48L3NwYW4+YCk7XG4gICAgICAgIGhpZ2hsaWdodENvdW50ZXIrKztcbiAgICAgIH0gZWxzZSBpZiAobmV4dEJsYW5rSW5kZXggPj0gMCkge1xuICAgICAgICAvLyBuZXh0IGFjdGl2ZSBlbGVtZW50IGlzIGEgYmxhbmtcbiAgICAgICAgaWYgKGJsYW5rQ291bnRlciA+PSBibGFua3MubGVuZ3RoKSB7XG4gICAgICAgICAgLy8gaWYgdGhlIGJsYW5rIGlzIG5vdCBpbiB0aGUgcmVwb3NpdG9yeSAoVGhlIGNvbnRlbnQgYXV0aG9yIGhhcyBtYXJrZWQgdG9vIG1hbnkgYmxhbmtzIGluIHRoZSB0ZXh0LCBidXQgbm90IGVudGVyZWQgY29ycmVjdCBhbnN3ZXJzLilcbiAgICAgICAgICBodG1sID0gaHRtbC5yZXBsYWNlKENsb3plTG9hZGVyLm5vcm1hbGl6ZWRCbGFua01hcmtlciwgXCI8c3Bhbj48L3NwYW4+XCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHZhciBibGFuayA9IGJsYW5rc1tibGFua0NvdW50ZXJdO1xuICAgICAgICAgIGJsYW5rc0luc3RhbmNlcy5wdXNoKGJsYW5rKTtcbiAgICAgICAgICBvcmRlcmVkQWxsRWxlbWVudHNMaXN0LnB1c2goYmxhbmspO1xuICAgICAgICAgIGh0bWwgPSBodG1sLnJlcGxhY2UoQ2xvemVMb2FkZXIubm9ybWFsaXplZEJsYW5rTWFya2VyLCBgPHNwYW4gaWQ9J2NvbnRhaW5lcl8ke2JsYW5rLmlkfSc+PC9zcGFuPmApO1xuICAgICAgICAgIGJsYW5rQ291bnRlcisrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHdoaWxlIChuZXh0SGlnaGxpZ2h0TWF0Y2ggfHwgKG5leHRCbGFua0luZGV4ID49IDApKTtcblxuICAgIHJldHVybiB7XG4gICAgICBodG1sOiBodG1sLFxuICAgICAgb3JkZXJlZEFsbEVsZW1lbnRzTGlzdDogb3JkZXJlZEFsbEVsZW1lbnRzTGlzdCxcbiAgICAgIGhpZ2hsaWdodEluc3RhbmNlczogaGlnaGxpZ2h0SW5zdGFuY2VzLFxuICAgICAgYmxhbmtzSW5zdGFuY2VzOiBibGFua3NJbnN0YW5jZXNcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIExvb2tzIGZvciBhbGwgaW5zdGFuY2VzIG9mIG1hcmtlZCBibGFua3MgYW5kIHJlcGxhY2VzIHRoZW0gd2l0aCBfX18uIFxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IGh0bWxcbiAgICogQHJldHVybnMgc3RyaW5nXG4gICAqL1xuICBwcml2YXRlIHN0YXRpYyBub3JtYWxpemVCbGFua01hcmtpbmdzKGh0bWw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgdmFyIHVuZGVybGluZUJsYW5rUmVnRXggPSAvX3szLH0vZztcbiAgICBodG1sID0gaHRtbC5yZXBsYWNlKHVuZGVybGluZUJsYW5rUmVnRXgsIENsb3plTG9hZGVyLm5vcm1hbGl6ZWRCbGFua01hcmtlcik7XG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICAgLyoqXG4gICAqIEl0ZXJhdGVzIHRocm91Z2ggYWxsIGJsYW5rcyBhbmQgY2FsbHMgdGhlaXIgbGlua0hpZ2hsaWdodElkc1RvT2JqZWN0cyguLi4pLlxuICAgKiBAcGFyYW0gb3JkZXJlZEFsbEVsZW1lbnRzTGlzdCBcbiAgICogQHBhcmFtIGhpZ2hsaWdodEluc3RhbmNlcyBcbiAgICogQHBhcmFtIGJsYW5rc0luc3RhbmNlcyBcbiAgICovXG4gIHByaXZhdGUgc3RhdGljIGxpbmtIaWdobGlnaHRzT2JqZWN0cyhvcmRlcmVkQWxsRWxlbWVudHNMaXN0OiBDbG96ZUVsZW1lbnRbXSwgaGlnaGxpZ2h0SW5zdGFuY2VzOiBIaWdobGlnaHRbXSwgYmxhbmtzSW5zdGFuY2VzOiBCbGFua1tdKTogdm9pZCB7XG4gICAgZm9yICh2YXIgYmxhbmsgb2YgYmxhbmtzSW5zdGFuY2VzKSB7XG4gICAgICB2YXIgbmV4dEJsYW5rSW5kZXhJbkFycmF5ID0gb3JkZXJlZEFsbEVsZW1lbnRzTGlzdC5pbmRleE9mKGJsYW5rKTtcbiAgICAgIHZhciBoaWdobGlnaHRzQmVmb3JlQmxhbmsgPSBvcmRlcmVkQWxsRWxlbWVudHNMaXN0XG4gICAgICAgIC5zbGljZSgwLCBuZXh0QmxhbmtJbmRleEluQXJyYXkpXG4gICAgICAgIC5maWx0ZXIoZSA9PiBlLnR5cGUgPT09IENsb3plRWxlbWVudFR5cGUuSGlnaGxpZ2h0KVxuICAgICAgICAubWFwKGUgPT4gZSBhcyBIaWdobGlnaHQpXG4gICAgICAgIC5yZXZlcnNlKCk7XG4gICAgICB2YXIgaGlnaGxpZ2h0c0FmdGVyQmxhbmsgPSBvcmRlcmVkQWxsRWxlbWVudHNMaXN0XG4gICAgICAgIC5zbGljZShuZXh0QmxhbmtJbmRleEluQXJyYXkgKyAxKVxuICAgICAgICAuZmlsdGVyKGUgPT4gZS50eXBlID09PSBDbG96ZUVsZW1lbnRUeXBlLkhpZ2hsaWdodClcbiAgICAgICAgLm1hcChlID0+IGUgYXMgSGlnaGxpZ2h0KTtcbiAgICAgIEJsYW5rTG9hZGVyLmluc3RhbmNlLmxpbmtIaWdobGlnaHRJZFRvT2JqZWN0KGJsYW5rLCBoaWdobGlnaHRzQmVmb3JlQmxhbmssIGhpZ2hsaWdodHNBZnRlckJsYW5rKTtcbiAgICB9XG4gIH1cbn0iLCJpbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL21lc3NhZ2Utc2VydmljZSc7XG5pbXBvcnQgeyBCbGFua0xvYWRlciB9IGZyb20gJy4uL2NvbnRlbnQtbG9hZGVycy9ibGFuay1sb2FkZXInO1xuaW1wb3J0IHsgQ2xvemVMb2FkZXIgfSBmcm9tICcuLi9jb250ZW50LWxvYWRlcnMvY2xvemUtbG9hZGVyJztcbmltcG9ydCB7IENsb3plIH0gZnJvbSBcIi4uL21vZGVscy9jbG96ZVwiO1xuaW1wb3J0IHsgSURhdGFSZXBvc2l0b3J5IH0gZnJvbSBcIi4uL3NlcnZpY2VzL2RhdGEtcmVwb3NpdG9yeVwiO1xuaW1wb3J0IHsgSVNldHRpbmdzIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3NldHRpbmdzXCI7XG5pbXBvcnQgeyBINVBMb2NhbGl6YXRpb24gfSBmcm9tIFwiLi4vc2VydmljZXMvbG9jYWxpemF0aW9uXCI7XG5pbXBvcnQgeyBDbG96ZVR5cGUsIFNlbGVjdEFsdGVybmF0aXZlcyB9IGZyb20gXCIuLi9tb2RlbHMvZW51bXNcIjtcbmltcG9ydCB7IEhpZ2hsaWdodCB9IGZyb20gXCIuLi9tb2RlbHMvaGlnaGxpZ2h0XCI7XG5pbXBvcnQgeyBCbGFuayB9IGZyb20gXCIuLi9tb2RlbHMvYmxhbmtcIjtcbmltcG9ydCB7IENvcnJlY3RuZXNzIH0gZnJvbSAnLi4vbW9kZWxzL2Fuc3dlcic7XG5cbmltcG9ydCAqIGFzIFJhY3RpdmVFdmVudHNLZXlzIGZyb20gJy4uLy4uL2xpYi9yYWN0aXZlLWV2ZW50cy1rZXlzJztcblxuaW50ZXJmYWNlIFNjb3JlQ2hhbmdlZCB7XG4gIChzY29yZTogbnVtYmVyLCBtYXhTY29yZTogbnVtYmVyKTogdm9pZDtcbn1cblxuaW50ZXJmYWNlIEF1dG9DaGVja2VkIHtcbiAgKCk6IHZvaWQ7XG59XG5cbmludGVyZmFjZSBTb2x2ZWQge1xuICAoKTogdm9pZDtcbn1cblxuaW50ZXJmYWNlIFR5cGVkIHtcbiAgKCk6IHZvaWQ7XG59XG5cbmludGVyZmFjZSBDbG96ZVJlZnJlc2hlZCB7XG4gICgpOiB2b2lkO1xufVxuXG5leHBvcnQgY2xhc3MgQ2xvemVDb250cm9sbGVyIHtcbiAgcHJpdmF0ZSBqcXVlcnk6IEpRdWVyeTtcblxuICBwcml2YXRlIGNsb3plOiBDbG96ZTtcbiAgcHJpdmF0ZSBpc1NlbGVjdENsb3plOiBib29sZWFuO1xuXG4gIHB1YmxpYyBvblNjb3JlQ2hhbmdlZDogU2NvcmVDaGFuZ2VkO1xuICBwdWJsaWMgb25BdXRvQ2hlY2tlZDogQXV0b0NoZWNrZWQ7XG4gIHB1YmxpYyBvblNvbHZlZDogU29sdmVkO1xuICBwdWJsaWMgb25UeXBlZDogVHlwZWQ7XG4gIHB1YmxpYyBvbkNsb3plUmVmcmVzaGVkOiBDbG96ZVJlZnJlc2hlZDtcblxuICAvLyBTdG9yYWdlIG9mIHRoZSByYWN0aXZlIG9iamVjdHMgdGhhdCBsaW5rIG1vZGVscyBhbmQgdmlld3NcbiAgcHJpdmF0ZSBoaWdobGlnaHRSYWN0aXZlczogeyBbaWQ6IHN0cmluZ106IFJhY3RpdmUuUmFjdGl2ZSB9ID0ge307XG4gIHByaXZhdGUgYmxhbmtSYWN0aXZlczogeyBbaWQ6IHN0cmluZ106IFJhY3RpdmUuUmFjdGl2ZSB9ID0ge307XG5cbiAgcHVibGljIGdldCBtYXhTY29yZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmNsb3plLmJsYW5rcy5sZW5ndGg7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZWN0IHdoZXRoZXIgdGhlcmUgYXJlIGJsYW5rcyB3aXRoIG1vcmUgdGhhbiBvbmUgc29sdXRpb24uXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlcmUgaXMgYXQgbGVhc3Qgb25lIGJsYW5rIHdpdGggbW9yZSB0aGFuIG9uZSBzb2x1dGlvbi5cbiAgICovXG4gIHB1YmxpYyBnZXQgaGFzQWx0ZXJuYXRpdmVzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNsb3plLmJsYW5rcy5zb21lKGIgPT4gYi5jb3JyZWN0QW5zd2Vyc1swXS5hbHRlcm5hdGl2ZXMubGVuZ3RoID4gMSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGN1cnJlbnRTY29yZSgpOiBudW1iZXIge1xuICAgIGNvbnN0IHNjb3JlID0gdGhpcy5jbG96ZS5ibGFua3MucmVkdWNlKChzY29yZSwgYikgPT4ge1xuICAgICAgY29uc3Qgbm90U2hvd2luZ1NvbHV0aW9uID0gIWIuaXNTaG93aW5nU29sdXRpb247XG4gICAgICBjb25zdCBjb3JyZWN0QW5zd2VyR2l2ZW4gPSBiLmNvcnJlY3RBbnN3ZXJzWzBdLmFsdGVybmF0aXZlcy5pbmRleE9mKGIuZW50ZXJlZFRleHQgfHwgJycpICE9PSAtMTtcblxuICAgICAgLy8gRGV0ZWN0IHNtYWxsIG1pc3Rha2VzXG4gICAgICBjb25zdCBjbG9zZUNvcnJlY3RNYXRjaGVzID0gYi5jb3JyZWN0QW5zd2Vyc1xuICAgICAgICAubWFwKGFuc3dlciA9PiBhbnN3ZXIuZXZhbHVhdGVBdHRlbXB0KGIuZW50ZXJlZFRleHQpKVxuICAgICAgICAuZmlsdGVyKGV2YWx1YXRpb24gPT4gZXZhbHVhdGlvbi5jb3JyZWN0bmVzcyA9PT0gQ29ycmVjdG5lc3MuQ2xvc2VNYXRjaCk7XG4gICAgICBjb25zdCBzaW1pbGFyQW5zd2VyR2l2ZW4gPSB0aGlzLnNldHRpbmdzLmFjY2VwdFNwZWxsaW5nRXJyb3JzICYmIGNsb3NlQ29ycmVjdE1hdGNoZXMubGVuZ3RoID4gMDtcblxuICAgICAgcmV0dXJuIHNjb3JlICs9IChub3RTaG93aW5nU29sdXRpb24gJiYgKGNvcnJlY3RBbnN3ZXJHaXZlbiB8fCBzaW1pbGFyQW5zd2VyR2l2ZW4pKSA/IDEgOiAwO1xuICAgIH0sIDApO1xuXG4gICAgcmV0dXJuIE1hdGgubWF4KDAsIHNjb3JlKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgYWxsQmxhbmtzRW50ZXJlZCgpIHtcbiAgICBpZiAodGhpcy5jbG96ZSlcbiAgICAgIHJldHVybiB0aGlzLmNsb3plLmJsYW5rcy5ldmVyeShibGFuayA9PiBibGFuay5pc0Vycm9yIHx8IGJsYW5rLmlzQ29ycmVjdCB8fCBibGFuay5pc1JldHJ5KTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzU29sdmVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNsb3plLmlzU29sdmVkO1xuICB9XG5cbiAgcHVibGljIGdldCBpc0ZpbGxlZE91dCgpIHtcbiAgICBpZiAoIXRoaXMuY2xvemUgfHwgdGhpcy5jbG96ZS5ibGFua3MubGVuZ3RoID09PSAwKVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIHRoaXMuY2xvemUuYmxhbmtzLnNvbWUoYiA9PiBiLmVudGVyZWRUZXh0ICE9PSAnJyk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzRnVsbHlGaWxsZWRPdXQoKSB7XG4gICAgaWYgKCF0aGlzLmNsb3plIHx8IHRoaXMuY2xvemUuYmxhbmtzLmxlbmd0aCA9PT0gMClcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIHJldHVybiB0aGlzLmNsb3plLmJsYW5rcy5ldmVyeShiID0+IGIuZW50ZXJlZFRleHQgIT09ICcnKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVwb3NpdG9yeTogSURhdGFSZXBvc2l0b3J5LCBwcml2YXRlIHNldHRpbmdzOiBJU2V0dGluZ3MsIHByaXZhdGUgbG9jYWxpemF0aW9uOiBINVBMb2NhbGl6YXRpb24sIHByaXZhdGUgTWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlKSB7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB1cCBhbGwgYmxhbmtzLCB0aGUgY2xvemUgaXRzZWxmIGFuZCB0aGUgcmFjdGl2ZSBiaW5kaW5ncy5cbiAgICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IHJvb3RcbiAgICovXG4gIGluaXRpYWxpemUocm9vdDogSFRNTEVsZW1lbnQsIGpxdWVyeTogSlF1ZXJ5KSB7XG4gICAgdGhpcy5qcXVlcnkgPSBqcXVlcnk7XG4gICAgdGhpcy5pc1NlbGVjdENsb3plID0gdGhpcy5zZXR0aW5ncy5jbG96ZVR5cGUgPT09IENsb3plVHlwZS5TZWxlY3QgPyB0cnVlIDogZmFsc2U7XG5cbiAgICB2YXIgYmxhbmtzID0gdGhpcy5yZXBvc2l0b3J5LmdldEJsYW5rcygpO1xuXG4gICAgaWYgKHRoaXMuaXNTZWxlY3RDbG96ZSAmJiB0aGlzLnNldHRpbmdzLnNlbGVjdEFsdGVybmF0aXZlcyA9PT0gU2VsZWN0QWx0ZXJuYXRpdmVzLkFsbCkge1xuICAgICAgZm9yICh2YXIgYmxhbmsgb2YgYmxhbmtzKSB7XG4gICAgICAgIGxldCBvdGhlckJsYW5rcyA9IGJsYW5rcy5maWx0ZXIodiA9PiB2ICE9PSBibGFuayk7XG4gICAgICAgIGJsYW5rLmxvYWRDaG9pY2VzRnJvbU90aGVyQmxhbmtzKG90aGVyQmxhbmtzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgc25pcHBldHMgPSB0aGlzLnJlcG9zaXRvcnkuZ2V0U25pcHBldHMoKTtcbiAgICBibGFua3MuZm9yRWFjaChibGFuayA9PiBCbGFua0xvYWRlci5pbnN0YW5jZS5yZXBsYWNlU25pcHBldHMoYmxhbmssIHNuaXBwZXRzKSk7XG5cbiAgICB0aGlzLmNsb3plID0gQ2xvemVMb2FkZXIuY3JlYXRlQ2xvemUodGhpcy5yZXBvc2l0b3J5LmdldENsb3plVGV4dCgpLCBibGFua3MpO1xuXG4gICAgdmFyIGNvbnRhaW5lcnMgPSB0aGlzLmNyZWF0ZUFuZEFkZENvbnRhaW5lcnMocm9vdCk7XG4gICAgY29udGFpbmVycy5jbG96ZS5pbm5lckhUTUwgPSB0aGlzLmNsb3plLmh0bWw7XG4gICAgdGhpcy5jcmVhdGVSYWN0aXZlQmluZGluZ3MoKTtcbiAgfVxuXG4gIGNoZWNrQWxsID0gKCkgPT4ge1xuICAgIHRoaXMuY2xvemUuaGlkZUFsbEhpZ2hsaWdodHMoKTtcbiAgICBmb3IgKHZhciBibGFuayBvZiB0aGlzLmNsb3plLmJsYW5rcykge1xuICAgICAgaWYgKCghYmxhbmsuaXNDb3JyZWN0KSAmJiBibGFuay5lbnRlcmVkVGV4dCAhPT0gXCJcIilcbiAgICAgICAgYmxhbmsuZXZhbHVhdGVBdHRlbXB0KHRydWUsIHRydWUpO1xuICAgIH1cbiAgICB0aGlzLnJlZnJlc2hDbG96ZSgpO1xuICAgIHRoaXMuY2hlY2tBbmROb3RpZnlDb21wbGV0ZW5lc3MoKTtcbiAgfVxuXG4gIHRleHRUeXBlZCA9IChibGFuazogQmxhbmspID0+IHtcbiAgICBibGFuay5vblR5cGVkKCk7XG4gICAgaWYgKHRoaXMub25UeXBlZClcbiAgICAgIHRoaXMub25UeXBlZCgpO1xuICAgIHRoaXMucmVmcmVzaENsb3plKCk7XG4gIH1cblxuICBmb2N1cyA9IChibGFuazogQmxhbmspID0+IHtcbiAgICBibGFuay5vbkZvY3Vzc2VkKCk7XG4gICAgdGhpcy5yZWZyZXNoQ2xvemUoKTtcbiAgfVxuXG4gIGRpc3BsYXlGZWVkYmFjayA9IChibGFuazogQmxhbmspID0+IHtcbiAgICBibGFuay5vbkRpc3BsYXlGZWVkYmFjaygpO1xuICAgIHRoaXMucmVmcmVzaENsb3plKCk7XG4gIH1cblxuICBzaG93SGludCA9IChibGFuazogQmxhbmspID0+IHtcbiAgICB0aGlzLmNsb3plLmhpZGVBbGxIaWdobGlnaHRzKCk7XG4gICAgYmxhbmsuc2hvd0hpbnQoKTtcbiAgICB0aGlzLnJlZnJlc2hDbG96ZSgpO1xuICB9XG5cbiAgcmVxdWVzdENsb3NlVG9vbHRpcCA9IChibGFuazogQmxhbmspID0+IHtcbiAgICBibGFuay5yZW1vdmVUb29sdGlwKCk7XG4gICAgdGhpcy5yZWZyZXNoQ2xvemUoKTtcbiAgICB0aGlzLmpxdWVyeS5maW5kKFwiI1wiICsgYmxhbmsuaWQpLmZvY3VzKCk7XG4gIH1cblxuICBjaGVja0JsYW5rID0gKGJsYW5rOiBCbGFuaywgY2F1c2U6IHN0cmluZykgPT4ge1xuICAgIGlmICgoY2F1c2UgPT09ICdibHVyJyB8fCBjYXVzZSA9PT0gJ2NoYW5nZScpKSB7XG4gICAgICBibGFuay5sb3N0Rm9jdXMoKTtcbiAgICB9XG5cbiAgICBpZiAoY2F1c2UgPT09ICdjaGFuZ2UnICYmIHRoaXMub25UeXBlZCkge1xuICAgICAgdGhpcy5vblR5cGVkKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2V0dGluZ3MuYXV0b0NoZWNrKSB7XG4gICAgICBpZiAoIWJsYW5rLmVudGVyZWRUZXh0IHx8IGJsYW5rLmVudGVyZWRUZXh0ID09PSBcIlwiKVxuICAgICAgICByZXR1cm47XG5cbiAgICAgIHRoaXMuY2xvemUuaGlkZUFsbEhpZ2hsaWdodHMoKTtcbiAgICAgIGJsYW5rLmV2YWx1YXRlQXR0ZW1wdChmYWxzZSk7XG4gICAgICB0aGlzLmNoZWNrQW5kTm90aWZ5Q29tcGxldGVuZXNzKCk7XG4gICAgICB0aGlzLnJlZnJlc2hDbG96ZSgpO1xuICAgICAgdGhpcy5vbkF1dG9DaGVja2VkKCk7XG4gICAgfVxuICAgIGlmICgoY2F1c2UgPT09ICdlbnRlcicpXG4gICAgICAmJiAoKHRoaXMuc2V0dGluZ3MuYXV0b0NoZWNrICYmIGJsYW5rLmlzQ29ycmVjdCAmJiAhdGhpcy5pc1NvbHZlZClcbiAgICAgICAgfHwgIXRoaXMuc2V0dGluZ3MuYXV0b0NoZWNrKSkge1xuICAgICAgLy8gbW92ZSB0byBuZXh0IGJsYW5rXG4gICAgICB2YXIgaW5kZXggPSB0aGlzLmNsb3plLmJsYW5rcy5pbmRleE9mKGJsYW5rKTtcbiAgICAgIHZhciBuZXh0SWQ7XG4gICAgICB3aGlsZSAoaW5kZXggPCB0aGlzLmNsb3plLmJsYW5rcy5sZW5ndGggLSAxICYmICFuZXh0SWQpIHtcbiAgICAgICAgaW5kZXgrKztcbiAgICAgICAgaWYgKCF0aGlzLmNsb3plLmJsYW5rc1tpbmRleF0uaXNDb3JyZWN0KVxuICAgICAgICAgIG5leHRJZCA9IHRoaXMuY2xvemUuYmxhbmtzW2luZGV4XS5pZDtcbiAgICAgIH1cblxuICAgICAgaWYgKG5leHRJZClcbiAgICAgICAgdGhpcy5qcXVlcnkuZmluZChcIiNcIiArIG5leHRJZCkuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICByZXNldCA9ICgpID0+IHtcbiAgICB0aGlzLmNsb3plLnJlc2V0KCk7XG4gICAgdGhpcy5yZWZyZXNoQ2xvemUoKTtcbiAgfVxuXG4gIHNob3dTb2x1dGlvbnMgPSAoKSA9PiB7XG4gICAgdGhpcy5jbG96ZS5zaG93U29sdXRpb25zKCk7XG4gICAgdGhpcy5yZWZyZXNoQ2xvemUoKTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlQW5kQWRkQ29udGFpbmVycyhhZGRUbzogSFRNTEVsZW1lbnQpOiB7IGNsb3plOiBIVE1MRGl2RWxlbWVudCB9IHtcbiAgICB2YXIgY2xvemVDb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2xvemVDb250YWluZXJFbGVtZW50LmlkID0gJ2g1cC1jbG96ZS1jb250YWluZXInO1xuICAgIGlmICh0aGlzLnNldHRpbmdzLmNsb3plVHlwZSA9PT0gQ2xvemVUeXBlLlNlbGVjdCkge1xuICAgICAgY2xvemVDb250YWluZXJFbGVtZW50LmNsYXNzTmFtZSA9ICdoNXAtYWR2YW5jZWQtYmxhbmtzLXNlbGVjdC1tb2RlJztcbiAgICB9IGVsc2Uge1xuICAgICAgY2xvemVDb250YWluZXJFbGVtZW50LmNsYXNzTmFtZSA9ICdoNXAtYWR2YW5jZWQtYmxhbmtzLXR5cGUtbW9kZSc7XG4gICAgfVxuICAgIGFkZFRvLmFwcGVuZENoaWxkKGNsb3plQ29udGFpbmVyRWxlbWVudCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgY2xvemU6IGNsb3plQ29udGFpbmVyRWxlbWVudFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUhpZ2hsaWdodEJpbmRpbmcoaGlnaGxpZ2h0OiBIaWdobGlnaHQpIHtcbiAgICB0aGlzLmhpZ2hsaWdodFJhY3RpdmVzW2hpZ2hsaWdodC5pZF0gPSBuZXcgUmFjdGl2ZSh7XG4gICAgICBlbDogJyNjb250YWluZXJfJyArIGhpZ2hsaWdodC5pZCxcbiAgICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuLi92aWV3cy9oaWdobGlnaHQucmFjdGl2ZS5odG1sJyksXG4gICAgICBkYXRhOiB7XG4gICAgICAgIG9iamVjdDogaGlnaGxpZ2h0XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUJsYW5rQmluZGluZyhibGFuazogQmxhbmspIHtcbiAgICB2YXIgcmFjdGl2ZSA9IG5ldyBSYWN0aXZlKHtcbiAgICAgIGVsOiAnI2NvbnRhaW5lcl8nICsgYmxhbmsuaWQsXG4gICAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi4vdmlld3MvYmxhbmsucmFjdGl2ZS5odG1sJyksXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGlzU2VsZWN0Q2xvemU6IHRoaXMuaXNTZWxlY3RDbG96ZSxcbiAgICAgICAgYmxhbms6IGJsYW5rXG4gICAgICB9LFxuICAgICAgZXZlbnRzOiB7XG4gICAgICAgIGVudGVyOiBSYWN0aXZlRXZlbnRzS2V5cy5lbnRlcixcbiAgICAgICAgZXNjYXBlOiBSYWN0aXZlRXZlbnRzS2V5cy5lc2NhcGUsXG4gICAgICAgIGFueWtleTogUmFjdGl2ZUV2ZW50c0tleXMuYW55a2V5XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmFjdGl2ZS5vbihcImNoZWNrQmxhbmtcIiwgdGhpcy5jaGVja0JsYW5rKTtcbiAgICByYWN0aXZlLm9uKFwic2hvd0hpbnRcIiwgdGhpcy5zaG93SGludCk7XG4gICAgcmFjdGl2ZS5vbihcInRleHRUeXBlZFwiLCB0aGlzLnRleHRUeXBlZCk7XG4gICAgcmFjdGl2ZS5vbihcImNsb3NlTWVzc2FnZVwiLCB0aGlzLnJlcXVlc3RDbG9zZVRvb2x0aXApO1xuICAgIHJhY3RpdmUub24oXCJmb2N1c1wiLCB0aGlzLmZvY3VzKTtcbiAgICByYWN0aXZlLm9uKFwiZGlzcGxheUZlZWRiYWNrXCIsIHRoaXMuZGlzcGxheUZlZWRiYWNrKTtcblxuICAgIHRoaXMuYmxhbmtSYWN0aXZlc1tibGFuay5pZF0gPSByYWN0aXZlO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVSYWN0aXZlQmluZGluZ3MoKSB7XG4gICAgZm9yICh2YXIgaGlnaGxpZ2h0IG9mIHRoaXMuY2xvemUuaGlnaGxpZ2h0cykge1xuICAgICAgdGhpcy5jcmVhdGVIaWdobGlnaHRCaW5kaW5nKGhpZ2hsaWdodCk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgYmxhbmsgb2YgdGhpcy5jbG96ZS5ibGFua3MpIHtcbiAgICAgIHRoaXMuY3JlYXRlQmxhbmtCaW5kaW5nKGJsYW5rKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyBhbGwgdmlld3Mgb2YgaGlnaGxpZ2h0cyBhbmQgYmxhbmtzLiBDYW4gYmUgY2FsbGVkIHdoZW4gYSBtb2RlbFxuICAgKiB3YXMgY2hhbmdlZFxuICAgKi9cbiAgcHJpdmF0ZSByZWZyZXNoQ2xvemUoKSB7XG4gICAgZm9yICh2YXIgaGlnaGxpZ2h0IG9mIHRoaXMuY2xvemUuaGlnaGxpZ2h0cykge1xuICAgICAgdmFyIGhpZ2hsaWdodFJhY3RpdmUgPSB0aGlzLmhpZ2hsaWdodFJhY3RpdmVzW2hpZ2hsaWdodC5pZF07XG4gICAgICBoaWdobGlnaHRSYWN0aXZlLnNldChcIm9iamVjdFwiLCBoaWdobGlnaHQpO1xuICAgIH1cblxuICAgIGZvciAodmFyIGJsYW5rIG9mIHRoaXMuY2xvemUuYmxhbmtzKSB7XG4gICAgICB2YXIgYmxhbmtSYWN0aXZlID0gdGhpcy5ibGFua1JhY3RpdmVzW2JsYW5rLmlkXTtcbiAgICAgIGJsYW5rUmFjdGl2ZS5zZXQoXCJibGFua1wiLCBibGFuayk7XG4gICAgfVxuXG4gICAgdGhpcy5vbkNsb3plUmVmcmVzaGVkKCk7XG4gIH1cblxuICBwcml2YXRlIGNoZWNrQW5kTm90aWZ5Q29tcGxldGVuZXNzID0gKCk6IGJvb2xlYW4gPT4ge1xuICAgIGlmICh0aGlzLm9uU2NvcmVDaGFuZ2VkKVxuICAgICAgdGhpcy5vblNjb3JlQ2hhbmdlZCh0aGlzLmN1cnJlbnRTY29yZSwgdGhpcy5tYXhTY29yZSk7XG5cbiAgICBpZiAodGhpcy5jbG96ZS5pc1NvbHZlZCkge1xuICAgICAgaWYgKHRoaXMub25Tb2x2ZWQpXG4gICAgICAgIHRoaXMub25Tb2x2ZWQoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyBzZXJpYWxpemVDbG96ZSgpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMuY2xvemUuc2VyaWFsaXplKCk7XG4gIH1cblxuICBwdWJsaWMgZGVzZXJpYWxpemVDbG96ZShkYXRhOiBhbnkpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuY2xvemUgfHwgIWRhdGEpXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgdGhpcy5jbG96ZS5kZXNlcmlhbGl6ZShkYXRhKTtcbiAgICB0aGlzLnJlZnJlc2hDbG96ZSgpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcHVibGljIGdldENvcnJlY3RBbnN3ZXJMaXN0KCk6IHN0cmluZ1tdW10ge1xuICAgIGlmICghdGhpcy5jbG96ZSB8fCB0aGlzLmNsb3plLmJsYW5rcy5sZW5ndGggPT09IDApXG4gICAgICByZXR1cm4gW1tdXTtcbiAgICBsZXQgcmVzdWx0ID0gW107XG4gICAgZm9yICh2YXIgYmxhbmsgb2YgdGhpcy5jbG96ZS5ibGFua3MpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGJsYW5rLmdldENvcnJlY3RBbnN3ZXJzKCkpO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cbiIsIi8qKlxuICogRXh0ZW5kIGFuIGFycmF5IGp1c3QgbGlrZSBKUXVlcnkncyBleHRlbmQuXG4gKiBAcGFyYW0ge29iamVjdH0gYXJndW1lbnRzIE9iamVjdHMgdG8gYmUgbWVyZ2VkLlxuICogQHJldHVybiB7b2JqZWN0fSBNZXJnZWQgb2JqZWN0cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4dGVuZCguLi5hcmdzOiBhbnlbXSkge1xuICBmb3IgKGxldCBpID0gMTsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICBmb3IgKGxldCBrZXkgaW4gYXJnc1tpXSkge1xuICAgICAgaWYgKGFyZ3NbaV0uaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBpZiAodHlwZW9mIGFyZ3NbMF1ba2V5XSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIGFyZ3NbaV1ba2V5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB0aGlzLmV4dGVuZChhcmdzWzBdW2tleV0sIGFyZ3NbaV1ba2V5XSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgYXJnc1swXVtrZXldID0gYXJnc1tpXVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBhcmdzWzBdO1xufVxuIiwiLyoqXG4gKiBUaGlzIGNsYXNzIGNsZWFucyBodG1sIHN0cmluZ3MuXG4gKi9cbmV4cG9ydCBjbGFzcyBVbnJ3YXBwZXIge1xuICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBqcXVlcnk6IEpRdWVyeVN0YXRpYykge1xuXG4gIH1cblxuICBcbiAgLyoqXG4gICAqIENsZWFucyBodG1sIHN0cmluZ3MgYnkgcmVtb3ZpbmcgdGhlIG91dG1vc3QgaHRtbCB0YWcgb2YgdGhlIHN0cmluZyBpZiB0aGVyZSBpcyBvbmx5IG9uZSB0YWcuXG4gICAqIEV4YW1wbGVzOiAgXCI8cD5teSB0ZXh0PC9wPlwiXCIgYmVjb21lcyBcIm15IHRleHRcIlxuICAgKiAgICAgICAgICAgIFwiPHA+dGV4dCAxPC9wPjxwPnRleHQgMjwvcDI+XCIgc3RheXNcbiAgICogQHBhcmFtIGh0bWwgVGhlIGh0bWwgc3RyaW5nXG4gICAqIEByZXR1cm5zIHRoZSBjbGVhbmVkIGh0bWwgc3RyaW5nXG4gICAqL1xuICBwdWJsaWMgdW53cmFwKGh0bWw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgdmFyIHBhcnNlZCA9IHRoaXMuanF1ZXJ5KGh0bWwpO1xuICAgIGlmIChwYXJzZWQubGVuZ3RoICE9PSAxKSB7XG4gICAgICByZXR1cm4gaHRtbDtcbiAgICB9XG4gICAgbGV0IHVud3JhcHBlZCA9IHBhcnNlZC51bndyYXAoKS5odG1sKCk7XG4gICAgcmV0dXJuIHVud3JhcHBlZDtcbiAgfVxufSIsImltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuL21lc3NhZ2UnO1xuaW1wb3J0IHsgSGlnaGxpZ2h0IH0gZnJvbSAnLi9oaWdobGlnaHQnO1xuaW1wb3J0IHsgSVNldHRpbmdzIH0gZnJvbSAnLi4vc2VydmljZXMvc2V0dGluZ3MnO1xuaW1wb3J0ICogYXMganNkaWZmIGZyb20gJ2RpZmYnO1xuXG5leHBvcnQgZW51bSBDb3JyZWN0bmVzcyB7XG4gIEV4YWN0TWF0Y2gsXG4gIENsb3NlTWF0Y2gsXG4gIE5vTWF0Y2hcbn1cblxuZXhwb3J0IGNsYXNzIEV2YWx1YXRpb24ge1xuICBwdWJsaWMgY29ycmVjdG5lc3M6IENvcnJlY3RuZXNzO1xuICBwdWJsaWMgY2hhcmFjdGVyRGlmZmVyZW5jZUNvdW50OiBudW1iZXI7XG4gIHB1YmxpYyB1c2VkQWx0ZXJuYXRpdmU6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgdXNlZEFuc3dlcjogQW5zd2VyKSB7XG4gICAgdGhpcy5jb3JyZWN0bmVzcyA9IENvcnJlY3RuZXNzLk5vTWF0Y2g7XG4gICAgdGhpcy5jaGFyYWN0ZXJEaWZmZXJlbmNlQ291bnQgPSAwO1xuICAgIHRoaXMudXNlZEFsdGVybmF0aXZlID0gXCJcIjtcbiAgfVxufVxuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBwb3NzaWJsZSBhbnN3ZXIgdGhlIGNvbnRlbnQgYXV0aG9yIGVudGVycyBmb3IgYSBibGFuaywgZS5nLiB0aGUgY29ycmVjdCBvciBhbiBpbmNvcnJlY3QgYW5zd2VyLlxuICovXG5leHBvcnQgY2xhc3MgQW5zd2VyIHtcbiAgLyoqXG4gICAqIFRoZSBhbHRlcm5hdGl2ZXMgYXJlIGVxdWl2YWxlbnQgc3RyaW5ncyB0aGF0IHRoZSBsaWJyYXJ5IHNob3VsZCB0cmVhdCB0aGUgc2FtZSB3YXksIGUuZy4gc2hvdyB0aGUgc2FtZSBmZWVkYmFjay4gXG4gICAqL1xuICBhbHRlcm5hdGl2ZXM6IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKiBUaGlzIGlzIHRoZSBtZXNzYWdlIHRoYXQgaXMgZGlzcGxheWVkIHdoZW4gdGhlIGFuc3dlciB3YXMgZW50ZXJlZCBieSB0aGUgdXNlci5cbiAgICovXG4gIG1lc3NhZ2U6IE1lc3NhZ2U7XG5cbiAgLyoqXG4gICAqIElzIHRydWUgaWYgdGhlIGV4cGVjdGVkIHRleHQgZm9yIHRoaXMgYW5zd2VyIGlzIGVtcHR5LlxuICAgKi9cbiAgYXBwbGllc0Fsd2F5czogYm9vbGVhbjtcblxuICAvKipcbiAgICogQHBhcmFtICB7c3RyaW5nfSBhbnN3ZXJUZXh0IC0gVGhlIGV4cGVjdGVkIGFuc3dlci4gQWx0ZXJuYXRpdmVzIGFyZSBzZXBhcmF0ZWQgYnkgfCBvciA7IC4gKGUuZy4gXCJBbHRlcm5hdGl2ZSAxfEFsdGVybmF0aXZlIDJ8QWx0ZXJuYXRpdmUgM3wuLi5cIiAgLW9yLSBcIkFsdGVybmF0aXZlIDE7QWx0ZXJuYXRpdmUgMjtBbHRlcm5hdGl2ZSAzXCIpXG4gICAqIEBwYXJhbSAge3N0cmluZ30gcmVhY3Rpb24gLSBUaGUgdG9vbHRpcCB0aGF0IHNob3VsZCBiZSBkaXNwbGF5ZWQuIEZvcm1hdDogVG9vbHRpcCBUZXh0OyEhLTEhISAhISsxISFcbiAgICovXG4gIGNvbnN0cnVjdG9yKGFuc3dlclRleHQ6IHN0cmluZywgcmVhY3Rpb246IHN0cmluZywgc2hvd0hpZ2hsaWdodDogYm9vbGVhbiwgaGlnaGxpZ2h0OiBudW1iZXIsIHByaXZhdGUgc2V0dGluZ3M6IElTZXR0aW5ncykge1xuICAgIHRoaXMuYWx0ZXJuYXRpdmVzID0gYW5zd2VyVGV4dC5zcGxpdCgvXFwvLykubWFwKHMgPT4gcy50cmltKCkpO1xuICAgIHRoaXMubWVzc2FnZSA9IG5ldyBNZXNzYWdlKHJlYWN0aW9uLCBzaG93SGlnaGxpZ2h0LCBoaWdobGlnaHQpO1xuICAgIGlmIChhbnN3ZXJUZXh0LnRyaW0oKSA9PT0gXCJcIikge1xuICAgICAgdGhpcy5hcHBsaWVzQWx3YXlzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hcHBsaWVzQWx3YXlzID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIExvb2tzIHRocm91Z2ggdGhlIG9iamVjdCdzIG1lc3NhZ2UgaWRzIGFuZCBzdG9yZXMgdGhlIHJlZmVyZW5jZXMgdG8gdGhlIGhpZ2hsaWdodCBvYmplY3QgZm9yIHRoZXNlIGlkcy5cbiAgICogQHBhcmFtICB7SGlnaGxpZ2h0W119IGhpZ2hsaWdodHNCZWZvcmVcbiAgICogQHBhcmFtICB7SGlnaGxpZ2h0W119IGhpZ2hsaWdodHNBZnRlclxuICAgKi9cbiAgcHVibGljIGxpbmtIaWdobGlnaHRJZFRvT2JqZWN0KGhpZ2hsaWdodHNCZWZvcmU6IEhpZ2hsaWdodFtdLCBoaWdobGlnaHRzQWZ0ZXI6IEhpZ2hsaWdodFtdKSB7XG4gICAgdGhpcy5tZXNzYWdlLmxpbmtIaWdobGlnaHQoaGlnaGxpZ2h0c0JlZm9yZSwgaGlnaGxpZ2h0c0FmdGVyKTtcbiAgfVxuICAvKipcbiAgICogVHVybnMgb24gdGhlIGhpZ2hsaWdodHMgc2V0IGJ5IHRoZSBjb250ZW50IGF1dGhvciBmb3IgdGhpcyBhbnN3ZXIuXG4gICAqL1xuICBwdWJsaWMgYWN0aXZhdGVIaWdobGlnaHQoKSB7XG4gICAgaWYgKHRoaXMubWVzc2FnZS5oaWdobGlnaHRlZEVsZW1lbnQpXG4gICAgICB0aGlzLm1lc3NhZ2UuaGlnaGxpZ2h0ZWRFbGVtZW50LmlzSGlnaGxpZ2h0ZWQgPSB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBjbGVhblN0cmluZyh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHRleHQgPSB0ZXh0LnRyaW0oKTtcbiAgICByZXR1cm4gdGV4dC5yZXBsYWNlKC9cXHN7Mix9L2csIFwiIFwiKTtcbiAgfVxuICAvKipcbiAgICogTG9va3MgdGhyb3VnaCB0aGUgZGlmZiBhbmQgY2hlY2tzIGhvdyBtYW55IGNoYXJhY3RlciBjaGFuZ2Ugb3BlcmF0aW9ucyBhcmUgbmVlZGVkIHRvIHR1cm4gb25lIHN0cmluZyBpbnRvIHRoZSBvdGhlci4gU2hvdWxkIHJldHVybiB0aGUgc2FtZSByZXN1bHRzIGFzIHRoZSBMZXZlbnN0aGVpbiBkaXN0YW5jZS4gXG4gICAqIEBwYXJhbSAge1t7YWRkZWQ/OmJvb2xlYW4sIGJvb2xlYW46IHJlbW92ZWQ/LCBzdHJpbmc6IHZhbHVlfV19IGRpZmYgLSBhcyByZXR1cm5lZCBieSBqc2RpZmZcbiAgICogQHJldHVybnMgbnVtYmVyIC0gdGhlIGNvdW50IG9mIGNoYW5nZXMgKHJlcGxhY2UsIGFkZCwgZGVsZXRlKSBuZWVkZWQgdG8gY2hhbmdlIHRoZSB0ZXh0IGZyb20gb25lIHN0cmluZyB0byB0aGUgb3RoZXIgXG4gICAqL1xuICBwcml2YXRlIGdldENoYW5nZXNDb3VudEZyb21EaWZmKGRpZmY6IGpzZGlmZi5DaGFuZ2VbXSk6IG51bWJlciB7XG4gICAgdmFyIHRvdGFsQ2hhbmdlc0NvdW50ID0gMDtcbiAgICB2YXIgbGFzdFR5cGUgPSBcIlwiO1xuICAgIHZhciBsYXN0Q291bnQgPSAwO1xuXG4gICAgZm9yICh2YXIgZWxlbWVudCBvZiBkaWZmKSB7XG4gICAgICBpZiAoZWxlbWVudC5yZW1vdmVkKSB7XG4gICAgICAgIHRvdGFsQ2hhbmdlc0NvdW50ICs9IGVsZW1lbnQudmFsdWUubGVuZ3RoO1xuICAgICAgICBsYXN0VHlwZSA9IFwicmVtb3ZlZFwiO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoZWxlbWVudC5hZGRlZCkge1xuICAgICAgICBpZiAobGFzdFR5cGUgPT09IFwicmVtb3ZlZFwiKSB7XG4gICAgICAgICAgaWYgKGxhc3RDb3VudCA8IGVsZW1lbnQudmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICB0b3RhbENoYW5nZXNDb3VudCArPSBlbGVtZW50LnZhbHVlLmxlbmd0aCAtIGxhc3RDb3VudDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdG90YWxDaGFuZ2VzQ291bnQgKz0gZWxlbWVudC52YWx1ZS5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgbGFzdFR5cGUgPSBcImFkZGVkXCI7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgbGFzdFR5cGUgPSBcInNhbWVcIjtcbiAgICAgIH1cbiAgICAgIGxhc3RDb3VudCA9IGVsZW1lbnQudmFsdWUubGVuZ3RoO1xuICAgIH1cblxuICAgIHJldHVybiB0b3RhbENoYW5nZXNDb3VudDtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyBob3cgbWFueSBjaGFyYWN0ZXJzIGNhbiBiZSB3cm9uZyB0byBzdGlsbCBiZSBjb3VudGVkIGFzIGEgc3BlbGxpbmcgbWlzdGFrZS5cbiAgICogSWYgc3BlbGxpbmcgbWlzdGFrZXMgYXJlIHR1cm5lZCBvZmYgdGhyb3VnaCB0aGUgc2V0dGluZ3MsIGl0IHdpbGwgcmV0dXJuIDAuXG4gICAqIEBwYXJhbSAge3N0cmluZ30gdGV4dFxuICAgKiBAcmV0dXJucyBudW1iZXJcbiAgICovXG5cbiAgcHJpdmF0ZSBnZXRBY2NlcHRhYmxlU3BlbGxpbmdNaXN0YWtlcyh0ZXh0OiBzdHJpbmcpOiBudW1iZXIge1xuICAgIHZhciBhY2NlcHRhYmxlVHlwb0NvdW50OiBudW1iZXI7XG4gICAgaWYgKHRoaXMuc2V0dGluZ3Mud2FyblNwZWxsaW5nRXJyb3JzIHx8IHRoaXMuc2V0dGluZ3MuYWNjZXB0U3BlbGxpbmdFcnJvcnMpIC8vIFRPRE86IGNvbnNpZGVyIHJlbW92YWxcbiAgICAgIGFjY2VwdGFibGVUeXBvQ291bnQgPSBNYXRoLmZsb29yKHRleHQubGVuZ3RoIC8gMTApICsgMTtcbiAgICBlbHNlXG4gICAgICBhY2NlcHRhYmxlVHlwb0NvdW50ID0gMDtcblxuICAgIHJldHVybiBhY2NlcHRhYmxlVHlwb0NvdW50O1xuICB9XG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIHRleHQgZW50ZXJlZCBieSB0aGUgdXNlciBpbiBhbiBldHRlbXB0IGlzIG1hdGNoZWQgYnkgdGhlIGFuc3dlcixcbiAgICogQHBhcmFtICB7c3RyaW5nfSBhdHRlbXB0IFRoZSB0ZXh0IGVudGVyZWQgYnkgdGhlIHVzZXIuXG4gICAqIEByZXR1cm5zIEV2YWx1YXRpb24gaW5kaWNhdGVzIGlmIHRoZSBlbnRlcmVkIHRleHQgaXMgbWF0Y2hlZCBieSB0aGUgYW5zd2VyLlxuICAgKi9cbiAgcHVibGljIGV2YWx1YXRlQXR0ZW1wdChhdHRlbXB0OiBzdHJpbmcpOiBFdmFsdWF0aW9uIHtcbiAgICB2YXIgY2xlYW5lZEF0dGVtcHQgPSB0aGlzLmNsZWFuU3RyaW5nKGF0dGVtcHQpO1xuICAgIHZhciBldmFsdWF0aW9uID0gbmV3IEV2YWx1YXRpb24odGhpcyk7XG5cbiAgICBmb3IgKHZhciBhbHRlcm5hdGl2ZSBvZiB0aGlzLmFsdGVybmF0aXZlcykge1xuICAgICAgdmFyIGNsZWFuZWRBbHRlcm5hdGl2ZSA9IHRoaXMuY2xlYW5TdHJpbmcoYWx0ZXJuYXRpdmUpO1xuXG4gICAgICB2YXIgZGlmZiA9IGpzZGlmZi5kaWZmQ2hhcnMoY2xlYW5lZEFsdGVybmF0aXZlLCBjbGVhbmVkQXR0ZW1wdCxcbiAgICAgICAgeyBpZ25vcmVDYXNlOiAhdGhpcy5zZXR0aW5ncy5jYXNlU2Vuc2l0aXZlIH0pO1xuICAgICAgdmFyIGNoYW5nZUNvdW50ID0gdGhpcy5nZXRDaGFuZ2VzQ291bnRGcm9tRGlmZihkaWZmKTtcblxuICAgICAgaWYgKGNoYW5nZUNvdW50ID09PSAwKSB7XG4gICAgICAgIGV2YWx1YXRpb24udXNlZEFsdGVybmF0aXZlID0gY2xlYW5lZEFsdGVybmF0aXZlO1xuICAgICAgICBldmFsdWF0aW9uLmNvcnJlY3RuZXNzID0gQ29ycmVjdG5lc3MuRXhhY3RNYXRjaDtcbiAgICAgICAgcmV0dXJuIGV2YWx1YXRpb247XG4gICAgICB9XG5cbiAgICAgIGlmIChjaGFuZ2VDb3VudCA8PSB0aGlzLmdldEFjY2VwdGFibGVTcGVsbGluZ01pc3Rha2VzKGFsdGVybmF0aXZlKVxuICAgICAgICAmJiAoZXZhbHVhdGlvbi5jaGFyYWN0ZXJEaWZmZXJlbmNlQ291bnQgPT09IDAgfHwgY2hhbmdlQ291bnQgPCBldmFsdWF0aW9uLmNoYXJhY3RlckRpZmZlcmVuY2VDb3VudCkpIHtcbiAgICAgICAgZXZhbHVhdGlvbi51c2VkQWx0ZXJuYXRpdmUgPSBjbGVhbmVkQWx0ZXJuYXRpdmU7XG4gICAgICAgIGV2YWx1YXRpb24uY29ycmVjdG5lc3MgPSBDb3JyZWN0bmVzcy5DbG9zZU1hdGNoO1xuICAgICAgICBldmFsdWF0aW9uLmNoYXJhY3RlckRpZmZlcmVuY2VDb3VudCA9IGNoYW5nZUNvdW50O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZXZhbHVhdGlvbjtcbiAgfVxufSIsImltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbWVzc2FnZS1zZXJ2aWNlJztcbmltcG9ydCB7IENsb3plRWxlbWVudCwgQ2xvemVFbGVtZW50VHlwZSB9IGZyb20gJy4vY2xvemUtZWxlbWVudCc7XG5pbXBvcnQgeyBBbnN3ZXIsIENvcnJlY3RuZXNzIH0gZnJvbSAnLi9hbnN3ZXInO1xuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4vbWVzc2FnZSc7XG5pbXBvcnQgeyBNZXNzYWdlVHlwZSwgQ2xvemVUeXBlLCBTZWxlY3RBbHRlcm5hdGl2ZXMgfSBmcm9tICcuL2VudW1zJztcbmltcG9ydCB7IEg1UExvY2FsaXphdGlvbiwgTG9jYWxpemF0aW9uTGFiZWxzIH0gZnJvbSAnLi4vc2VydmljZXMvbG9jYWxpemF0aW9uJztcbmltcG9ydCB7IElTZXR0aW5ncyB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zZXR0aW5nc1wiO1xuaW1wb3J0IHsgZ2V0TG9uZ2VzdFN0cmluZywgc2h1ZmZsZUFycmF5IH0gZnJvbSBcIi4uLy4uL2xpYi9oZWxwZXJzXCI7XG5pbXBvcnQgKiBhcyBqc2RpZmYgZnJvbSAnZGlmZic7XG5cbmludGVyZmFjZSBDaGFySW5mbyB7XG4gIGNoYXI6IHN0cmluZyB8IG51bGwsXG4gIHdpZHRoOiBudW1iZXJcbn1cblxuZXhwb3J0IGNsYXNzIEJsYW5rIGV4dGVuZHMgQ2xvemVFbGVtZW50IHtcbiAgLy8gY29udGVudFxuICBjb3JyZWN0QW5zd2VyczogQW5zd2VyW107XG4gIGluY29ycmVjdEFuc3dlcnM6IEFuc3dlcltdO1xuICBoaW50OiBNZXNzYWdlO1xuICBpZDogc3RyaW5nO1xuICBjaG9pY2VzOiBzdHJpbmdbXTtcbiAgaGFzSGludDogYm9vbGVhbjtcbiAgc3R5bGU6IGFueTtcbiAgdXBkYXRlV2lkdGhUaW1lb3V0OiBudW1iZXI7XG4gIHdpZGVzdENoYXI6IENoYXJJbmZvO1xuICBpbnB1dERPTTogSFRNTEVsZW1lbnRcblxuICAvLyB2aWV3bW9kZWwgc3R1ZmZcblxuICBsYXN0Q2hlY2tlZFRleHQ6IHN0cmluZztcbiAgZW50ZXJlZFRleHQ6IHN0cmluZztcbiAgaXNDb3JyZWN0OiBib29sZWFuO1xuICBpc0Vycm9yOiBib29sZWFuO1xuICBpc1JldHJ5OiBib29sZWFuO1xuICBoYXNQZW5kaW5nRmVlZGJhY2s6IGJvb2xlYW47XG4gIGlzU2hvd2luZ1NvbHV0aW9uOiBib29sZWFuO1xuICBtZXNzYWdlOiBzdHJpbmc7XG4gIG1pblRleHRMZW5ndGg6IG51bWJlcjtcbiAgc3BlZWNoQnViYmxlOiBhbnk7XG5cbiAgLyoqXG4gICAqIEFkZCBpbmNvcnJlY3QgYW5zd2VycyBhZnRlciBpbml0aWFsaXppbmcgdGhlIG9iamVjdC4gQ2FsbCBmaW5pc2hJbml0aWFsaXphdGlvbigpXG4gICAqIHdoZW4gZG9uZS5cbiAgICogQHBhcmFtICB7SVNldHRpbmdzfSBzZXR0aW5nc1xuICAgKiBAcGFyYW0gIHtzdHJpbmd9IGlkXG4gICAqIEBwYXJhbSAge3N0cmluZ30gY29ycmVjdFRleHQ/XG4gICAqIEBwYXJhbSAge3N0cmluZ30gaGludFRleHQ/XG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNldHRpbmdzOiBJU2V0dGluZ3MsIHByaXZhdGUgbG9jYWxpemF0aW9uOiBINVBMb2NhbGl6YXRpb24sIHByaXZhdGUganF1ZXJ5OiBKUXVlcnlTdGF0aWMsIHByaXZhdGUgbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlLCBpZDogc3RyaW5nLCBwcml2YXRlIHBsYWNlaG9sZGVyczogbnVtYmVyKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuZW50ZXJlZFRleHQgPSBcIlwiO1xuICAgIHRoaXMuY29ycmVjdEFuc3dlcnMgPSBuZXcgQXJyYXkoKTtcbiAgICB0aGlzLmluY29ycmVjdEFuc3dlcnMgPSBuZXcgQXJyYXkoKTtcbiAgICB0aGlzLmNob2ljZXMgPSBuZXcgQXJyYXkoKTtcbiAgICB0aGlzLnR5cGUgPSBDbG96ZUVsZW1lbnRUeXBlLkJsYW5rO1xuXG4gICAgdGhpcy5pZCA9IGlkO1xuICB9XG5cbiAgLyoqXG4gICogQ2FsbCB0aGlzIG1ldGhvZCB3aGVuIGFsbCBpbmNvcnJlY3QgYW5zd2VycyBoYXZlIGJlZW4gYWRkZWQuXG4gICovXG4gIHB1YmxpYyBmaW5pc2hJbml0aWFsaXphdGlvbigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zZXR0aW5ncy5jbG96ZVR5cGUgPT09IENsb3plVHlwZS5TZWxlY3QgJiYgdGhpcy5zZXR0aW5ncy5zZWxlY3RBbHRlcm5hdGl2ZXMgPT09IFNlbGVjdEFsdGVybmF0aXZlcy5BbHRlcm5hdGl2ZXMpIHtcbiAgICAgIHRoaXMubG9hZENob2ljZXNGcm9tT3duQWx0ZXJuYXRpdmVzKCk7XG4gICAgfVxuICAgIHRoaXMuY2FsY3VsYXRlTWluVGV4dExlbmd0aCgpO1xuICAgIHRoaXMudXBkYXRlV2lkdGgoKTtcbiAgfVxuXG4gIHB1YmxpYyBhZGRDb3JyZWN0QW5zd2VyKGFuc3dlcjogQW5zd2VyKSB7XG4gICAgdGhpcy5jb3JyZWN0QW5zd2Vycy5wdXNoKGFuc3dlcik7XG4gIH1cblxuICBwdWJsaWMgZ2V0Q29ycmVjdEFuc3dlcnMoKTogc3RyaW5nW10ge1xuICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICBmb3IgKGxldCBhbnN3ZXIgb2YgdGhpcy5jb3JyZWN0QW5zd2Vycykge1xuICAgICAgcmVzdWx0ID0gcmVzdWx0LmNvbmNhdChhbnN3ZXIuYWx0ZXJuYXRpdmVzKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHB1YmxpYyBzZXRIaW50KG1lc3NhZ2U6IE1lc3NhZ2UpIHtcbiAgICB0aGlzLmhpbnQgPSBtZXNzYWdlO1xuICAgIHRoaXMuaGFzSGludCA9IHRoaXMuaGludC50ZXh0ICE9PSBcIlwiO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgdGhlIGluY29ycmVjdCBhbnN3ZXIgdG8gdGhlIGxpc3QuXG4gICAqIEBwYXJhbSB0ZXh0IC0gV2hhdCB0aGUgdXNlciBtdXN0IGVudGVyLlxuICAgKiBAcGFyYW0gcmVhY3Rpb24gIC0gV2hhdCB0aGUgdXNlciBnZXRzIGRpc3BsYXllZCB3aGVuIGhlIGVudGVyZXMgdGhlIHRleHQuXG4gICAqL1xuICBwdWJsaWMgYWRkSW5jb3JyZWN0QW5zd2VyKHRleHQ6IHN0cmluZywgcmVhY3Rpb246IHN0cmluZywgc2hvd0hpZ2hsaWdodDogYm9vbGVhbiwgaGlnaGxpZ2h0OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmluY29ycmVjdEFuc3dlcnMucHVzaChcbiAgICAgIG5ldyBBbnN3ZXIodGV4dCwgcmVhY3Rpb24sIHNob3dIaWdobGlnaHQsIGhpZ2hsaWdodCwgdGhpcy5zZXR0aW5ncykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgaG93IG1hbnkgY2hhcmFjdGVycyB0aGUgaW5wdXQgYm94IG11c3QgaGF2ZSBiZSB0byBhbGxvdyBmb3IgYWxsIGNvcnJlY3QgYW5zd2Vycy5cbiAgICovXG4gIC8vIFRPRE86IHJlZmFjdG9yXG4gIHByaXZhdGUgY2FsY3VsYXRlTWluVGV4dExlbmd0aCgpOiB2b2lkIHtcbiAgICB2YXIgYW5zd2Vyczogc3RyaW5nW10gPSBuZXcgQXJyYXkoKTtcbiAgICBmb3IgKGxldCBjb3JyZWN0QW5zd2VyIG9mIHRoaXMuY29ycmVjdEFuc3dlcnMpIHtcbiAgICAgIGFuc3dlcnMucHVzaChnZXRMb25nZXN0U3RyaW5nKGNvcnJlY3RBbnN3ZXIuYWx0ZXJuYXRpdmVzKSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2V0dGluZ3MuY2xvemVUeXBlID09PSBDbG96ZVR5cGUuU2VsZWN0KSB7XG4gICAgICBmb3IgKGxldCBpbmNvcnJlY3RBbnN3ZXIgb2YgdGhpcy5pbmNvcnJlY3RBbnN3ZXJzKSB7XG4gICAgICAgIGFuc3dlcnMucHVzaChnZXRMb25nZXN0U3RyaW5nKGluY29ycmVjdEFuc3dlci5hbHRlcm5hdGl2ZXMpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgbG9uZ2VzdEFuc3dlciA9IGdldExvbmdlc3RTdHJpbmcoYW5zd2Vycyk7XG4gICAgdmFyIGwgPSBsb25nZXN0QW5zd2VyLmxlbmd0aDtcbiAgICB0aGlzLm1pblRleHRMZW5ndGggPSBNYXRoLm1heCgxMCwgbCAtIChsICUgMTApICsgMTApO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBsaXN0IG9mIGNob2ljZXMgZnJvbSBhbGwgYWx0ZXJuYXRpdmVzIHByb3ZpZGVkIGJ5XG4gICAqIHRoZSBjb3JyZWN0IGFuZCBpbmNvcnJlY3QgYW5zd2Vycy5cbiAgICovXG4gIHByaXZhdGUgbG9hZENob2ljZXNGcm9tT3duQWx0ZXJuYXRpdmVzKCk6IHN0cmluZ1tdIHtcbiAgICB0aGlzLmNob2ljZXMgPSBuZXcgQXJyYXkoKTtcbiAgICBmb3IgKGxldCBhbnN3ZXIgb2YgdGhpcy5jb3JyZWN0QW5zd2Vycykge1xuICAgICAgZm9yIChsZXQgYWx0ZXJuYXRpdmUgb2YgYW5zd2VyLmFsdGVybmF0aXZlcykge1xuICAgICAgICB0aGlzLmNob2ljZXMucHVzaChhbHRlcm5hdGl2ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQgYW5zd2VyIG9mIHRoaXMuaW5jb3JyZWN0QW5zd2Vycykge1xuICAgICAgZm9yIChsZXQgYWx0ZXJuYXRpdmUgb2YgYW5zd2VyLmFsdGVybmF0aXZlcykge1xuICAgICAgICB0aGlzLmNob2ljZXMucHVzaChhbHRlcm5hdGl2ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jaG9pY2VzID0gc2h1ZmZsZUFycmF5KHRoaXMuY2hvaWNlcyk7XG4gICAgdGhpcy5jaG9pY2VzLnVuc2hpZnQoXCJcIik7XG5cbiAgICByZXR1cm4gdGhpcy5jaG9pY2VzO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBsaXN0IG9mIGNob2ljZXMgZnJvbSBhbGwgY29ycmVjdCBhbnN3ZXJzIG9mIHRoZSBjbG96ZS5cbiAgICogQHBhcmFtIG90aGVyQmxhbmtzIEFsbCBPVEhFUiBibGFua3MgaW4gdGhlIGNsb3plLiAoZXhjbHVkZXMgdGhlIGN1cnJlbnQgb25lISlcbiAgICovXG4gIHB1YmxpYyBsb2FkQ2hvaWNlc0Zyb21PdGhlckJsYW5rcyhvdGhlckJsYW5rczogQmxhbmtbXSk6IHN0cmluZ1tdIHtcbiAgICBsZXQgb3duQ2hvaWNlcyA9IG5ldyBBcnJheSgpO1xuICAgIGZvciAobGV0IGFuc3dlciBvZiB0aGlzLmNvcnJlY3RBbnN3ZXJzKSB7XG4gICAgICBmb3IgKGxldCBhbHRlcm5hdGl2ZSBvZiBhbnN3ZXIuYWx0ZXJuYXRpdmVzKSB7XG4gICAgICAgIG93bkNob2ljZXMucHVzaChhbHRlcm5hdGl2ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IG90aGVyQ2hvaWNlcyA9IG5ldyBBcnJheSgpO1xuICAgIGZvciAobGV0IG90aGVyQmxhbmsgb2Ygb3RoZXJCbGFua3MpIHtcbiAgICAgIGZvciAobGV0IGFuc3dlciBvZiBvdGhlckJsYW5rLmNvcnJlY3RBbnN3ZXJzKSB7XG4gICAgICAgIGZvciAobGV0IGFsdGVybmF0aXZlIG9mIGFuc3dlci5hbHRlcm5hdGl2ZXMpIHtcbiAgICAgICAgICBvdGhlckNob2ljZXMucHVzaChhbHRlcm5hdGl2ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBvdGhlckNob2ljZXMgPSBzaHVmZmxlQXJyYXkob3RoZXJDaG9pY2VzKTtcblxuICAgIGxldCBtYXhDaG9pY2VzID0gdGhpcy5zZXR0aW5ncy5zZWxlY3RBbHRlcm5hdGl2ZVJlc3RyaWN0aW9uO1xuICAgIGlmIChtYXhDaG9pY2VzID09PSB1bmRlZmluZWQgfHwgbWF4Q2hvaWNlcyA9PT0gMClcbiAgICAgIG1heENob2ljZXMgPSBvd25DaG9pY2VzLmxlbmd0aCArIG90aGVyQ2hvaWNlcy5sZW5ndGg7XG5cbiAgICBsZXQgbGVmdE92ZXJDaG9pY2VzID0gbWF4Q2hvaWNlcyAtIG93bkNob2ljZXMubGVuZ3RoO1xuICAgIGZvciAobGV0IHggPSAwOyB4IDwgbGVmdE92ZXJDaG9pY2VzICYmIHggPCBvdGhlckNob2ljZXMubGVuZ3RoOyB4KyspIHtcbiAgICAgIGlmIChvd25DaG9pY2VzLmluZGV4T2Yob3RoZXJDaG9pY2VzW3hdKSA+PSAwKSB7XG4gICAgICAgIGxlZnRPdmVyQ2hvaWNlcysrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3duQ2hvaWNlcy5wdXNoKG90aGVyQ2hvaWNlc1t4XSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jaG9pY2VzID0gc2h1ZmZsZUFycmF5KG93bkNob2ljZXMpO1xuICAgIHRoaXMuY2hvaWNlcy51bnNoaWZ0KFwiXCIpO1xuXG4gICAgcmV0dXJuIHRoaXMuY2hvaWNlcztcbiAgfVxuXG4gIC8qKlxuICAqIENsZWFycyB0aGUgYmxhbmsgZnJvbSBhbGwgZW50ZXJlZCB0ZXh0IGFuZCBoaWRlcyBwb3B1cHMuXG4gICovXG4gIHB1YmxpYyByZXNldCgpIHtcbiAgICB0aGlzLmVudGVyZWRUZXh0ID0gXCJcIjtcbiAgICB0aGlzLmxhc3RDaGVja2VkVGV4dCA9IFwiXCI7XG4gICAgdGhpcy5yZW1vdmVUb29sdGlwKCk7XG4gICAgdGhpcy5zZXRBbnN3ZXJTdGF0ZShNZXNzYWdlVHlwZS5Ob25lKTtcbiAgICB0aGlzLmhhc1BlbmRpbmdGZWVkYmFjayA9IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGJsYW5rIHRvIGEgc3RhdGUgaW4gd2hpY2ggdGhlIGNvcnJlY3Qgc29sdXRpb24gaWYgc2hvd24gaWYgdGhlIHVzZXJcbiAgICogaGFzbid0IGVudGVyZWQgYSBjb3JyZWN0IG9uZSBzbyBmYXIuXG4gICAqL1xuICBwdWJsaWMgc2hvd1NvbHV0aW9uKCkge1xuICAgIHRoaXMuZXZhbHVhdGVBdHRlbXB0KHRydWUpO1xuICAgIHRoaXMucmVtb3ZlVG9vbHRpcCgpO1xuICAgIGlmICh0aGlzLmlzQ29ycmVjdClcbiAgICAgIHJldHVybjtcbiAgICB0aGlzLmVudGVyZWRUZXh0ID0gdGhpcy5jb3JyZWN0QW5zd2Vyc1swXS5hbHRlcm5hdGl2ZXNbMF07XG4gICAgdGhpcy5zZXRBbnN3ZXJTdGF0ZShNZXNzYWdlVHlwZS5TaG93U29sdXRpb24pO1xuICB9XG5cbiAgcHVibGljIG9uRm9jdXNzZWQoKSB7XG4gICAgaWYgKHRoaXMuaGFzUGVuZGluZ0ZlZWRiYWNrKSB7XG4gICAgICB0aGlzLmV2YWx1YXRlQXR0ZW1wdChmYWxzZSk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNldHRpbmdzLmNsb3plVHlwZSA9PT0gQ2xvemVUeXBlLlNlbGVjdCkge1xuICAgICAgdGhpcy5zZXRBbnN3ZXJTdGF0ZShNZXNzYWdlVHlwZS5Ob25lKTtcbiAgICAgIHRoaXMubGFzdENoZWNrZWRUZXh0ID0gXCJcIjtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25EaXNwbGF5RmVlZGJhY2soKSB7XG4gICAgaWYgKHRoaXMuaGFzUGVuZGluZ0ZlZWRiYWNrKSB7XG4gICAgICB0aGlzLmV2YWx1YXRlQXR0ZW1wdChmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBkaXNwbGF5VG9vbHRpcChtZXNzYWdlOiBzdHJpbmcsIHR5cGU6IE1lc3NhZ2VUeXBlLCBzdXJwcmVzc1Rvb2x0aXA6IGJvb2xlYW4sIGlkPzogc3RyaW5nKSB7XG4gICAgaWYgKCFzdXJwcmVzc1Rvb2x0aXApXG4gICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLnNob3coaWQgPyBpZCA6IHRoaXMuaWQsIG1lc3NhZ2UsIHRoaXMsIHR5cGUpO1xuICAgIGVsc2Uge1xuICAgICAgdGhpcy5oYXNQZW5kaW5nRmVlZGJhY2sgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyByZW1vdmVUb29sdGlwKCkge1xuICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuaGlkZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRUb29sdGlwRXJyb3JUZXh0KG1lc3NhZ2U6IE1lc3NhZ2UsIHN1cnByZXNzVG9vbHRpcDogYm9vbGVhbikge1xuICAgIGlmIChtZXNzYWdlLmhpZ2hsaWdodGVkRWxlbWVudCkge1xuICAgICAgdGhpcy5kaXNwbGF5VG9vbHRpcChtZXNzYWdlLnRleHQsIE1lc3NhZ2VUeXBlLkVycm9yLCBzdXJwcmVzc1Rvb2x0aXAsIG1lc3NhZ2UuaGlnaGxpZ2h0ZWRFbGVtZW50LmlkKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmRpc3BsYXlUb29sdGlwKG1lc3NhZ2UudGV4dCwgTWVzc2FnZVR5cGUuRXJyb3IsIHN1cnByZXNzVG9vbHRpcCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRTcGVsbGluZ01pc3Rha2VNZXNzYWdlKGV4cGVjdGVkVGV4dDogc3RyaW5nLCBlbnRlcmVkVGV4dDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICB2YXIgbWVzc2FnZSA9IHRoaXMubG9jYWxpemF0aW9uLmdldFRleHRGcm9tTGFiZWwoTG9jYWxpemF0aW9uTGFiZWxzLnR5cG9NZXNzYWdlKVxuXG4gICAgdmFyIGRpZmYgPSBqc2RpZmYuZGlmZkNoYXJzKGV4cGVjdGVkVGV4dCwgZW50ZXJlZFRleHQsIHsgaWdub3JlQ2FzZTogIXRoaXMuc2V0dGluZ3MuY2FzZVNlbnNpdGl2ZSB9KTtcblxuICAgIHZhciBtaXN0YWtlU3BhbiA9IHRoaXMuanF1ZXJ5KFwiPHNwYW4vPlwiLCB7IFwiY2xhc3NcIjogXCJzcGVsbGluZy1taXN0YWtlXCIgfSk7XG4gICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGRpZmYubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB2YXIgcGFydCA9IGRpZmZbaW5kZXhdO1xuICAgICAgdmFyIHNwYW5DbGFzcyA9ICcnO1xuICAgICAgaWYgKHBhcnQucmVtb3ZlZCkge1xuICAgICAgICBpZiAoaW5kZXggPT09IGRpZmYubGVuZ3RoIC0gMSB8fCAhZGlmZltpbmRleCArIDFdLmFkZGVkKSB7XG4gICAgICAgICAgcGFydC52YWx1ZSA9IHBhcnQudmFsdWUucmVwbGFjZSgvLi9nLCBcIl9cIik7XG4gICAgICAgICAgc3BhbkNsYXNzID0gJ21pc3NpbmctY2hhcmFjdGVyJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHBhcnQuYWRkZWQpIHtcbiAgICAgICAgc3BhbkNsYXNzID0gJ21pc3Rha2VuLWNoYXJhY3Rlcic7XG4gICAgICB9XG5cbiAgICAgIHZhciBzcGFuID0gdGhpcy5qcXVlcnkoXCI8c3Bhbi8+XCIsIHsgXCJjbGFzc1wiOiBzcGFuQ2xhc3MsIFwiaHRtbFwiOiBwYXJ0LnZhbHVlLnJlcGxhY2UoXCIgXCIsIFwiJm5ic3A7XCIpIH0pO1xuICAgICAgbWlzdGFrZVNwYW4uYXBwZW5kKHNwYW4pO1xuICAgIH1cblxuICAgIG1lc3NhZ2UgPSBtZXNzYWdlLnJlcGxhY2UoXCJAbWlzdGFrZVwiLCB0aGlzLmpxdWVyeShcIjxzcGFuLz5cIikuYXBwZW5kKG1pc3Rha2VTcGFuKS5odG1sKCkpO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGUgZW50ZXJlZCB0ZXh0IGlzIHRoZSBjb3JyZWN0IGFuc3dlciBvciBvbmUgb2YgdGhlXG4gICAqIGluY29ycmVjdCBvbmVzIGFuZCBnaXZlcyB0aGUgdXNlciBmZWVkYmFjayBhY2NvcmRpbmdseS5cbiAgICovXG4gIHB1YmxpYyBldmFsdWF0ZUF0dGVtcHQoc3VycHJlc3NUb29sdGlwczogYm9vbGVhbiwgZm9yY2VDaGVjaz86IGJvb2xlYW4pIHtcbiAgICBpZiAoIXRoaXMuaGFzUGVuZGluZ0ZlZWRiYWNrICYmIHRoaXMubGFzdENoZWNrZWRUZXh0ID09PSB0aGlzLmVudGVyZWRUZXh0ICYmICFmb3JjZUNoZWNrKVxuICAgICAgcmV0dXJuO1xuXG4gICAgdGhpcy5sYXN0Q2hlY2tlZFRleHQgPSB0aGlzLmVudGVyZWRUZXh0LnRvU3RyaW5nKCk7XG4gICAgdGhpcy5oYXNQZW5kaW5nRmVlZGJhY2sgPSBmYWxzZTtcbiAgICB0aGlzLnJlbW92ZVRvb2x0aXAoKTtcblxuICAgIHZhciBleGFjdENvcnJlY3RNYXRjaGVzID0gdGhpcy5jb3JyZWN0QW5zd2Vycy5tYXAoYW5zd2VyID0+IGFuc3dlci5ldmFsdWF0ZUF0dGVtcHQodGhpcy5lbnRlcmVkVGV4dCkpLmZpbHRlcihldmFsdWF0aW9uID0+IGV2YWx1YXRpb24uY29ycmVjdG5lc3MgPT09IENvcnJlY3RuZXNzLkV4YWN0TWF0Y2gpLnNvcnQoZXZhbHVhdGlvbiA9PiBldmFsdWF0aW9uLmNoYXJhY3RlckRpZmZlcmVuY2VDb3VudCk7XG4gICAgdmFyIGNsb3NlQ29ycmVjdE1hdGNoZXMgPSB0aGlzLmNvcnJlY3RBbnN3ZXJzLm1hcChhbnN3ZXIgPT4gYW5zd2VyLmV2YWx1YXRlQXR0ZW1wdCh0aGlzLmVudGVyZWRUZXh0KSkuZmlsdGVyKGV2YWx1YXRpb24gPT4gZXZhbHVhdGlvbi5jb3JyZWN0bmVzcyA9PT0gQ29ycmVjdG5lc3MuQ2xvc2VNYXRjaCkuc29ydChldmFsdWF0aW9uID0+IGV2YWx1YXRpb24uY2hhcmFjdGVyRGlmZmVyZW5jZUNvdW50KTtcbiAgICB2YXIgZXhhY3RJbmNvcnJlY3RNYXRjaGVzID0gdGhpcy5pbmNvcnJlY3RBbnN3ZXJzLm1hcChhbnN3ZXIgPT4gYW5zd2VyLmV2YWx1YXRlQXR0ZW1wdCh0aGlzLmVudGVyZWRUZXh0KSkuZmlsdGVyKGV2YWx1YXRpb24gPT4gZXZhbHVhdGlvbi5jb3JyZWN0bmVzcyA9PT0gQ29ycmVjdG5lc3MuRXhhY3RNYXRjaCkuc29ydChldmFsdWF0aW9uID0+IGV2YWx1YXRpb24uY2hhcmFjdGVyRGlmZmVyZW5jZUNvdW50KTtcbiAgICB2YXIgY2xvc2VJbmNvcnJlY3RNYXRjaGVzID0gdGhpcy5pbmNvcnJlY3RBbnN3ZXJzLm1hcChhbnN3ZXIgPT4gYW5zd2VyLmV2YWx1YXRlQXR0ZW1wdCh0aGlzLmVudGVyZWRUZXh0KSkuZmlsdGVyKGV2YWx1YXRpb24gPT4gZXZhbHVhdGlvbi5jb3JyZWN0bmVzcyA9PT0gQ29ycmVjdG5lc3MuQ2xvc2VNYXRjaCkuc29ydChldmFsdWF0aW9uID0+IGV2YWx1YXRpb24uY2hhcmFjdGVyRGlmZmVyZW5jZUNvdW50KTtcblxuICAgIGlmIChleGFjdENvcnJlY3RNYXRjaGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuc2V0QW5zd2VyU3RhdGUoTWVzc2FnZVR5cGUuQ29ycmVjdCk7XG4gICAgICBpZiAoIXRoaXMuc2V0dGluZ3MuY2FzZVNlbnNpdGl2ZSkge1xuICAgICAgICB0aGlzLmVudGVyZWRUZXh0ID0gZXhhY3RDb3JyZWN0TWF0Y2hlc1swXS51c2VkQWx0ZXJuYXRpdmU7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGV4YWN0SW5jb3JyZWN0TWF0Y2hlcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnNldEFuc3dlclN0YXRlKE1lc3NhZ2VUeXBlLkVycm9yKTtcbiAgICAgIHRoaXMuc2hvd0Vycm9yVG9vbHRpcChleGFjdEluY29ycmVjdE1hdGNoZXNbMF0udXNlZEFuc3dlciwgc3VycHJlc3NUb29sdGlwcyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGNsb3NlQ29ycmVjdE1hdGNoZXMubGVuZ3RoID4gMCkge1xuICAgICAgaWYgKHRoaXMuc2V0dGluZ3Mud2FyblNwZWxsaW5nRXJyb3JzKSB7XG4gICAgICAgIHRoaXMuZGlzcGxheVRvb2x0aXAodGhpcy5nZXRTcGVsbGluZ01pc3Rha2VNZXNzYWdlKGNsb3NlQ29ycmVjdE1hdGNoZXNbMF0udXNlZEFsdGVybmF0aXZlLCB0aGlzLmVudGVyZWRUZXh0KSwgTWVzc2FnZVR5cGUuUmV0cnksIHN1cnByZXNzVG9vbHRpcHMpO1xuICAgICAgICB0aGlzLnNldEFuc3dlclN0YXRlKE1lc3NhZ2VUeXBlLlJldHJ5KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuYWNjZXB0U3BlbGxpbmdFcnJvcnMpIHtcbiAgICAgICAgdGhpcy5zZXRBbnN3ZXJTdGF0ZShNZXNzYWdlVHlwZS5Db3JyZWN0KTtcbiAgICAgICAgdGhpcy5lbnRlcmVkVGV4dCA9IGNsb3NlQ29ycmVjdE1hdGNoZXNbMF0udXNlZEFsdGVybmF0aXZlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNsb3NlSW5jb3JyZWN0TWF0Y2hlcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnNldEFuc3dlclN0YXRlKE1lc3NhZ2VUeXBlLkVycm9yKTtcbiAgICAgIHRoaXMuc2hvd0Vycm9yVG9vbHRpcChjbG9zZUluY29ycmVjdE1hdGNoZXNbMF0udXNlZEFuc3dlciwgc3VycHJlc3NUb29sdGlwcyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGFsd2F5c0FwcGx5aW5nQW5zd2VycyA9IHRoaXMuaW5jb3JyZWN0QW5zd2Vycy5maWx0ZXIoYSA9PiBhLmFwcGxpZXNBbHdheXMpO1xuICAgIGlmIChhbHdheXNBcHBseWluZ0Fuc3dlcnMgJiYgYWx3YXlzQXBwbHlpbmdBbnN3ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuc2hvd0Vycm9yVG9vbHRpcChhbHdheXNBcHBseWluZ0Fuc3dlcnNbMF0sIHN1cnByZXNzVG9vbHRpcHMpO1xuICAgIH1cblxuICAgIHRoaXMuc2V0QW5zd2VyU3RhdGUoTWVzc2FnZVR5cGUuRXJyb3IpO1xuICB9XG5cbiAgcHVibGljIG9uVHlwZWQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRBbnN3ZXJTdGF0ZShNZXNzYWdlVHlwZS5Ob25lKTtcbiAgICB0aGlzLmxhc3RDaGVja2VkVGV4dCA9IFwiXCI7XG4gICAgdGhpcy5yZW1vdmVUb29sdGlwKCk7XG4gICAgdGhpcy51cGRhdGVXaWR0aCgpO1xuICB9XG5cbiAgcHVibGljIGxvc3RGb2N1cygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5tZXNzYWdlU2VydmljZS5pc0FjdGl2ZSh0aGlzKSkge1xuICAgICAgdGhpcy5tZXNzYWdlU2VydmljZS5oaWRlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVXaWR0aCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zZXR0aW5ncy5jbG96ZVR5cGUgPT09IENsb3plVHlwZS5TZWxlY3QpIHtcbiAgICAgIHJldHVybjsgLy8gT25seSByZWxldmFudCBmb3IgaW5wdXQgZmllbGRzXG4gICAgfVxuXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudXBkYXRlV2lkdGhUaW1lb3V0KTtcbiAgICB0aGlzLnVwZGF0ZVdpZHRoVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5pbnB1dERPTSA9IHRoaXMuaW5wdXRET00gfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGhpcy5pZH1gKTtcbiAgICAgIGlmICghdGhpcy5pbnB1dERPTSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMud2lkZXN0Q2hhciA9IHRoaXMud2lkZXN0Q2hhciB8fCB0aGlzLmNvbXB1dGVXaWRlc3RDaGFyKCk7XG4gICAgICBjb25zdCB3aWR0aCA9IE1hdGgubWF4KHRoaXMucGxhY2Vob2xkZXJzICogdGhpcy53aWRlc3RDaGFyLndpZHRoLCB0aGlzLmNvbXB1dGVGaWVsZFdpZHRoKCkpO1xuXG4gICAgICB0aGlzLmlucHV0RE9NLnN0eWxlLndpZHRoID0gYCR7d2lkdGh9cHhgO1xuICAgIH0sIDApO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbXB1dGUgd2lkdGggb2YgaW5wdXQgZmllbGQgKGZvciBnaXZlbiB0ZXh0KS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFt0ZXh0PScnXSBUZXh0IHRvIHNldCBmb3IgZmllbGQuXG4gICAqIEByZXR1cm4ge251bWJlcn0gQ29tcHV0ZWQgd2lkdGguXG4gICAqL1xuICBjb21wdXRlRmllbGRXaWR0aCh0ZXh0ID0gJycpOiBudW1iZXIge1xuICAgIHRoaXMuaW5wdXRET00gPSB0aGlzLmlucHV0RE9NIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3RoaXMuaWR9YCk7XG4gICAgaWYgKCF0aGlzLmlucHV0RE9NKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdG1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG1wLmlubmVyVGV4dCA9IHRleHQgfHwgdGhpcy5lbnRlcmVkVGV4dDtcbiAgICB0bXAuY2xhc3NMaXN0LmFkZCgnaDVwLWFkdmFuY2VkLWJsYW5rcy10bXAtZmllbGQnKTtcblxuICAgIHRoaXMuc3R5bGUgPSB0aGlzLnN0eWxlIHx8IGdldENvbXB1dGVkU3R5bGUodGhpcy5pbnB1dERPTSk7XG5cbiAgICB0bXAuc3R5bGUuZm9udFNpemUgPSB0aGlzLnN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ2ZvbnQtc2l6ZScpO1xuICAgIHRtcC5zdHlsZS5mb250RmFtaWx5ID0gdGhpcy5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdmb250LWZhbWlseScpO1xuICAgIHRtcC5zdHlsZS5wYWRkaW5nID0gdGhpcy5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nJyk7XG5cbiAgICB0aGlzLmlucHV0RE9NLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQodG1wKTtcbiAgICBjb25zdCB3aWR0aCA9IHRtcC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCAtXG4gICAgICBwYXJzZUludCh0aGlzLnN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctbGVmdCcpKSAtXG4gICAgICBwYXJzZUludCh0aGlzLnN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctcmlnaHQnKSk7XG4gICAgdG1wLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodG1wKTtcblxuICAgIHJldHVybiB3aWR0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb21wdXRlIHdpZGVzdCBjaGFyLlxuICAgKiBAcmV0dXJuIHtvYmplY3R9IFJlc3VsdCB3aXRoIGNoYXIgYW5kIHdpZHRoLlxuICAgKi9cbiAgcHJpdmF0ZSBjb21wdXRlV2lkZXN0Q2hhciA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBhbGxDaGFycyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ekFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaJztcbiAgICBsZXQgcmVzdWx0ID0ge1xuICAgICAgY2hhcjogbnVsbCxcbiAgICAgIHdpZHRoOiAwXG4gICAgfTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbENoYXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBjaGFyID0gYWxsQ2hhcnMuc3Vic3RyKGksIDEpO1xuICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLmNvbXB1dGVGaWVsZFdpZHRoKGNoYXIpO1xuICAgICAgaWYgKHdpZHRoID4gcmVzdWx0LndpZHRoKSB7XG4gICAgICAgIHJlc3VsdCA9IHtcbiAgICAgICAgICBjaGFyOiBjaGFyLFxuICAgICAgICAgIHdpZHRoOiB3aWR0aFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBib29sZWFuIHByb3BlcnRpZXMgaXNDb3JyZWN0LCBpcyBFcnJvciBhbmQgaXNSZXRyeSBhY2NvcmRpbmcgdG8gdGhlcGFzc2VkICBtZXNzYWdlVHlwZS5cbiAgICogQHBhcmFtIG1lc3NhZ2VUeXBlXG4gICAqL1xuICBwcml2YXRlIHNldEFuc3dlclN0YXRlKG1lc3NhZ2VUeXBlOiBNZXNzYWdlVHlwZSkge1xuICAgIHRoaXMuaXNDb3JyZWN0ID0gZmFsc2U7XG4gICAgdGhpcy5pc0Vycm9yID0gZmFsc2U7XG4gICAgdGhpcy5pc1JldHJ5ID0gZmFsc2U7XG4gICAgdGhpcy5pc1Nob3dpbmdTb2x1dGlvbiA9IGZhbHNlO1xuXG4gICAgc3dpdGNoIChtZXNzYWdlVHlwZSkge1xuICAgICAgY2FzZSBNZXNzYWdlVHlwZS5Db3JyZWN0OlxuICAgICAgICB0aGlzLmlzQ29ycmVjdCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBNZXNzYWdlVHlwZS5FcnJvcjpcbiAgICAgICAgdGhpcy5pc0Vycm9yID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIE1lc3NhZ2VUeXBlLlJldHJ5OlxuICAgICAgICB0aGlzLmlzUmV0cnkgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTWVzc2FnZVR5cGUuU2hvd1NvbHV0aW9uOlxuICAgICAgICB0aGlzLmlzU2hvd2luZ1NvbHV0aW9uID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzaG93RXJyb3JUb29sdGlwKGFuc3dlcjogQW5zd2VyLCBzdXJwcmVzc1Rvb2x0aXA6IGJvb2xlYW4pIHtcbiAgICBpZiAoYW5zd2VyLm1lc3NhZ2UgJiYgYW5zd2VyLm1lc3NhZ2UudGV4dCkge1xuICAgICAgdGhpcy5zZXRUb29sdGlwRXJyb3JUZXh0KGFuc3dlci5tZXNzYWdlLCBzdXJwcmVzc1Rvb2x0aXApO1xuICAgIH1cbiAgICBpZiAoIXN1cnByZXNzVG9vbHRpcCkge1xuICAgICAgYW5zd2VyLmFjdGl2YXRlSGlnaGxpZ2h0KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERpc3BsYXlzIHRoZSBoaW50IGluIHRoZSB0b29sdGlwLlxuICAgKi9cbiAgcHVibGljIHNob3dIaW50KCkge1xuICAgIGlmICh0aGlzLmlzU2hvd2luZ1NvbHV0aW9uIHx8IHRoaXMuaXNDb3JyZWN0KVxuICAgICAgcmV0dXJuO1xuXG4gICAgdGhpcy5yZW1vdmVUb29sdGlwKCk7XG4gICAgaWYgKHRoaXMuaGludCAmJiB0aGlzLmhpbnQudGV4dCAhPT0gXCJcIikge1xuICAgICAgdGhpcy5kaXNwbGF5VG9vbHRpcCh0aGlzLmhpbnQudGV4dCwgTWVzc2FnZVR5cGUuUmV0cnksIGZhbHNlKTtcbiAgICAgIGlmICh0aGlzLmhpbnQuaGlnaGxpZ2h0ZWRFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuaGludC5oaWdobGlnaHRlZEVsZW1lbnQuaXNIaWdobGlnaHRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNlcmlhbGl6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5sYXN0Q2hlY2tlZFRleHQgfHwgdGhpcy5lbnRlcmVkVGV4dDtcbiAgfVxuXG4gIHB1YmxpYyBkZXNlcmlhbGl6ZShkYXRhOiBhbnkpIHtcbiAgICB0aGlzLmVudGVyZWRUZXh0ID0gZGF0YTtcbiAgfVxufVxuIiwiZXhwb3J0IGVudW0gQ2xvemVFbGVtZW50VHlwZSB7XG4gIEJsYW5rLFxuICBIaWdobGlnaHRcbn1cblxuZXhwb3J0IGNsYXNzIENsb3plRWxlbWVudCB7XG4gIHB1YmxpYyB0eXBlOiBDbG96ZUVsZW1lbnRUeXBlO1xufSIsImltcG9ydCB7IEhpZ2hsaWdodCB9IGZyb20gXCIuL2hpZ2hsaWdodFwiO1xuaW1wb3J0IHsgQmxhbmsgfSBmcm9tIFwiLi9ibGFua1wiO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgdGhlIGNsb3plLiBJbnN0YW50aWF0ZSB3aXRoIHN0YXRpYyBjcmVhdGVDbG96ZSgpLlxuICovXG5leHBvcnQgY2xhc3MgQ2xvemUge1xuICBwdWJsaWMgaHRtbDogc3RyaW5nO1xuICBwdWJsaWMgaGlnaGxpZ2h0czogSGlnaGxpZ2h0W107XG4gIHB1YmxpYyBibGFua3M6IEJsYW5rW107XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiBhbGwgYmxhbmtzIHdlcmUgZW50ZXJlZCBjb3JyZWN0bHkuIFxuICAgKiBAcmV0dXJucyBib29sZWFuXG4gICAqL1xuICBwdWJsaWMgZ2V0IGlzU29sdmVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmJsYW5rcy5ldmVyeShiID0+IGIuaXNDb3JyZWN0ID09PSB0cnVlKTtcbiAgfVxuXG5cbiAgcHVibGljIGhpZGVBbGxIaWdobGlnaHRzKCk6IHZvaWQge1xuICAgIGZvciAodmFyIGhpZ2hsaWdodCBvZiB0aGlzLmhpZ2hsaWdodHMpIHtcbiAgICAgIGhpZ2hsaWdodC5pc0hpZ2hsaWdodGVkID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHJlc2V0KCkge1xuICAgIHRoaXMuaGlkZUFsbEhpZ2hsaWdodHMoKTtcbiAgICBmb3IgKHZhciBibGFuayBvZiB0aGlzLmJsYW5rcykge1xuICAgICAgYmxhbmsucmVzZXQoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2hvd1NvbHV0aW9ucygpIHtcbiAgICBmb3IgKHZhciBibGFuayBvZiB0aGlzLmJsYW5rcykge1xuICAgICAgYmxhbmsuc2hvd1NvbHV0aW9uKCk7XG4gICAgfVxuICAgIHRoaXMuaGlkZUFsbEhpZ2hsaWdodHMoKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXJpYWxpemUoKSA6IHN0cmluZ1tdIHtcbiAgICB2YXIgY2xvemUgPSBbXTtcbiAgICBmb3IgKHZhciBibGFuayBvZiB0aGlzLmJsYW5rcykge1xuICAgICAgY2xvemUucHVzaChibGFuay5zZXJpYWxpemUoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNsb3plO1xuICB9XG5cbiAgcHVibGljIGRlc2VyaWFsaXplKGRhdGE6IGFueSkge1xuICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBkYXRhLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgaWYgKGluZGV4ID49IHRoaXMuYmxhbmtzLmxlbmd0aClcbiAgICAgICAgcmV0dXJuO1xuICAgICAgdmFyIGJsYW5rID0gdGhpcy5ibGFua3NbaW5kZXhdO1xuICAgICAgYmxhbmsuZGVzZXJpYWxpemUoZGF0YVtpbmRleF0pO1xuICAgIH1cbiAgfVxufSIsImV4cG9ydCBlbnVtIE1lc3NhZ2VUeXBlIHtcbiAgRXJyb3IsXG4gIENvcnJlY3QsXG4gIFJldHJ5LFxuICBTaG93U29sdXRpb24sXG4gIE5vbmVcbn1cblxuZXhwb3J0IGVudW0gQ2xvemVUeXBlIHtcbiAgVHlwZSxcbiAgU2VsZWN0XG59XG5cbmV4cG9ydCBlbnVtIFNlbGVjdEFsdGVybmF0aXZlcyB7XG4gIEFsdGVybmF0aXZlcyxcbiAgQWxsXG59IiwiaW1wb3J0IHsgQ2xvemVFbGVtZW50LCBDbG96ZUVsZW1lbnRUeXBlIH0gZnJvbSAnLi9jbG96ZS1lbGVtZW50JztcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgaGlnaGxpZ2h0IGluIHRoZSBjbG96ZS5cbiAqL1xuZXhwb3J0IGNsYXNzIEhpZ2hsaWdodCBleHRlbmRzIENsb3plRWxlbWVudCB7XG5cdHRleHQ6IHN0cmluZztcblx0aXNIaWdobGlnaHRlZDogYm9vbGVhbjtcblx0aWQ6IHN0cmluZztcblxuXHRjb25zdHJ1Y3Rvcih0ZXh0OiBzdHJpbmcsIGlkOiBzdHJpbmcpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMudHlwZSA9IENsb3plRWxlbWVudFR5cGUuSGlnaGxpZ2h0O1xuXHRcdHRoaXMudGV4dCA9IHRleHQ7XG5cdFx0dGhpcy5pZCA9IGlkO1xuXHRcdHRoaXMuaXNIaWdobGlnaHRlZCA9IGZhbHNlO1xuXHR9XG59IiwiaW1wb3J0IHsgSGlnaGxpZ2h0IH0gZnJvbSBcIi4vaGlnaGxpZ2h0XCI7XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIG1lc3NhZ2UgdGhhdCB0aGUgY29udGVudCBhdXRob3IgaGFzIHNwZWNpZmllZCB0byBiZSBhIHJlYWN0aW9uXG4gKiB0byBhbiB1c2VyJ3MgYW5zd2VyLiBcbiAqL1xuZXhwb3J0IGNsYXNzIE1lc3NhZ2Uge1xuICBoaWdobGlnaHRlZEVsZW1lbnQ6IEhpZ2hsaWdodDtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgdGV4dDogc3RyaW5nLCBzaG93SGlnaGxpZ2h0OiBib29sZWFuLCBwcml2YXRlIHJlbGF0aXZlSGlnaGxpZ2h0UG9zaXRpb246IG51bWJlcikge1xuICAgIGlmKCFzaG93SGlnaGxpZ2h0KVxuICAgICAgdGhpcy5yZWxhdGl2ZUhpZ2hsaWdodFBvc2l0aW9uID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgbGlua0hpZ2hsaWdodCA9IChoaWdobGlnaHRzQmVmb3JlOiBIaWdobGlnaHRbXSwgaGlnaGxpZ2h0c0FmdGVyOiBIaWdobGlnaHRbXSkgPT4ge1xuICAgIGlmICghdGhpcy5yZWxhdGl2ZUhpZ2hsaWdodFBvc2l0aW9uKVxuICAgICAgcmV0dXJuO1xuXG4gICAgICBpZiAodGhpcy5yZWxhdGl2ZUhpZ2hsaWdodFBvc2l0aW9uIDwgMCAmJiAoMCAtIHRoaXMucmVsYXRpdmVIaWdobGlnaHRQb3NpdGlvbiAtIDEpIDwgaGlnaGxpZ2h0c0JlZm9yZS5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5oaWdobGlnaHRlZEVsZW1lbnQgPSBoaWdobGlnaHRzQmVmb3JlWzAgLSB0aGlzLnJlbGF0aXZlSGlnaGxpZ2h0UG9zaXRpb24gLSAxXTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHRoaXMucmVsYXRpdmVIaWdobGlnaHRQb3NpdGlvbiA+IDAgJiYgKHRoaXMucmVsYXRpdmVIaWdobGlnaHRQb3NpdGlvbiAtIDEgPCBoaWdobGlnaHRzQWZ0ZXIubGVuZ3RoKSkge1xuICAgICAgICB0aGlzLmhpZ2hsaWdodGVkRWxlbWVudCA9IGhpZ2hsaWdodHNBZnRlclt0aGlzLnJlbGF0aXZlSGlnaGxpZ2h0UG9zaXRpb24gLSAxXTtcbiAgICAgIH1cbiAgfVxufSIsIi8qKlxuICogQSBzbmlwcGV0IGlzIGEgdGV4dCBibG9jayB0aGF0IGlzIHB1dCBpbnRvIHBsYWNlZCBtYXJrZWQgaW4gZmVlZGJhY2sgdGV4dHMgb3IgaGludHMuXG4gKi9cbmV4cG9ydCBjbGFzcyBTbmlwcGV0IHtcbiAgLyoqXG4gICAqIENvbnN0cnVjdHMgdGhlIHNuaXBwZXQuXG4gICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBzbmlwcGV0IHRoYXQgaXMgdXNlZCB3aGVuIGl0IGlzIHJlZmVyZW5jZWQgaW4gYSBmZWVkYmFja3RleHQgKHdpdGhvdXQgdGhlIHNuaXBwZXQgbWFya2VyIEApXG4gICAqIEBwYXJhbSB0ZXh0IFRoZSBzbmlwcGV0IGl0c2VsZiAoaHRtbClcbiAgICovXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcsIHB1YmxpYyB0ZXh0OiBzdHJpbmcpIHtcbiAgICBcbiAgfVxufSIsImV4cG9ydCBjbGFzcyBYQVBJQWN0aXZpdHlEZWZpbml0aW9uIHtcbiAgbmFtZTogYW55O1xuICBkZXNjcmlwdGlvbjogYW55O1xuICB0eXBlOiBzdHJpbmc7XG4gIGludGVyYWN0aW9uVHlwZTogXCJ0cnVlLWZhbHNlXCIgfCBcImNob2ljZVwiIHwgXCJmaWxsLWluXCIgfCBcImxvbmctZmlsbC1pblwiIHwgXCJtYXRjaGluZ1wiIHwgXCJwZXJmb3JtYW5jZVwiIHwgXCJzZXF1ZW5jaW5nXCIgfCBcImxpa2VydFwiIHwgXCJudW1lcmljXCIgfCBcIm90aGVyXCI7XG4gIGNvcnJlY3RSZXNwb25zZXNQYXR0ZXJuPzogc3RyaW5nW107XG4gIGV4dGVuc2lvbnM6IGFueTtcbn1cbiIsImltcG9ydCB7IEJsYW5rTG9hZGVyIH0gZnJvbSAnLi4vY29udGVudC1sb2FkZXJzL2JsYW5rLWxvYWRlcic7XG5pbXBvcnQgeyBCbGFuayB9IGZyb20gXCIuLi9tb2RlbHMvYmxhbmtcIjtcbmltcG9ydCB7IFNuaXBwZXQgfSBmcm9tIFwiLi4vbW9kZWxzL3NuaXBwZXRcIjtcbmltcG9ydCB7IElTZXR0aW5ncyB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zZXR0aW5nc1wiO1xuaW1wb3J0IHsgSDVQTG9jYWxpemF0aW9uIH0gZnJvbSBcIi4vbG9jYWxpemF0aW9uXCI7XG5pbXBvcnQgeyBVbnJ3YXBwZXIgfSBmcm9tICcuLi9oZWxwZXJzL3Vud3JhcHBlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURhdGFSZXBvc2l0b3J5IHtcbiAgZ2V0QmxhbmtzKCk6IEJsYW5rW107XG4gIGdldENsb3plVGV4dCgpOiBzdHJpbmc7XG4gIGdldEZlZWRiYWNrVGV4dCgpOiBzdHJpbmc7XG4gIGdldE1lZGlhKCk6IGFueTtcbiAgZ2V0VGFza0Rlc2NyaXB0aW9uKCk6IHN0cmluZztcbiAgZ2V0U25pcHBldHMoKTogU25pcHBldFtdO1xufVxuXG4vKipcbiAqIFdyYXBzIGFyb3VuZCB0aGUgaDVwIGNvbmZpZyBvYmplY3QgYW5kIHByb3ZpZGVzIGFjY2VzcyB0byB0aGUgY29udGVudC5cbiAqL1xuZXhwb3J0IGNsYXNzIEg1UERhdGFSZXBvc2l0b3J5IGltcGxlbWVudHMgSURhdGFSZXBvc2l0b3J5IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBoNXBDb25maWdEYXRhOiBhbnksIHByaXZhdGUgc2V0dGluZ3M6IElTZXR0aW5ncyxcbiAgICBwcml2YXRlIGxvY2FsaXphdGlvbjogSDVQTG9jYWxpemF0aW9uLCBwcml2YXRlIGpxdWVyeTogSlF1ZXJ5U3RhdGljLFxuICAgIHByaXZhdGUgdW53cmFwcGVyOiBVbnJ3YXBwZXIpIHtcblxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGJsYW5rIHRleHQgb2YgdGhlIGNsb3plIChhcyBIVE1MIG1hcmt1cCkuXG4gICAqL1xuICBnZXRDbG96ZVRleHQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5oNXBDb25maWdEYXRhLmNvbnRlbnQuYmxhbmtzVGV4dDtcbiAgfVxuXG4gIC8vIFRPRE86IHJlbW92ZSBvciBpbXBsZW1lbnRcbiAgZ2V0RmVlZGJhY2tUZXh0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cblxuICBnZXRNZWRpYSgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLmg1cENvbmZpZ0RhdGEubWVkaWEudHlwZTtcbiAgfVxuXG4gIGdldFRhc2tEZXNjcmlwdGlvbigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmg1cENvbmZpZ0RhdGEuY29udGVudC50YXNrO1xuICB9XG5cbiAgZ2V0QmxhbmtzKCk6IEJsYW5rW10ge1xuICAgIHZhciBibGFua3M6IEJsYW5rW10gPSBuZXcgQXJyYXkoKTtcblxuICAgIGlmICghdGhpcy5oNXBDb25maWdEYXRhLmNvbnRlbnQuYmxhbmtzTGlzdClcbiAgICAgIHJldHVybiBibGFua3M7XG5cbiAgICBjb25zdCBibGFua3NQbGFjZWhvbGRlcnMgPSB0aGlzLmg1cENvbmZpZ0RhdGEuY29udGVudC5ibGFua3NUZXh0XG4gICAgICAubWF0Y2goLyhfezMsfSkvZylcbiAgICAgIC5tYXAodW5kZXJzY29yZXMgPT4gdW5kZXJzY29yZXMubGVuZ3RoKTtcbiAgICB3aGlsZShibGFua3NQbGFjZWhvbGRlcnMubGVuZ3RoIDwgdGhpcy5oNXBDb25maWdEYXRhLmNvbnRlbnQuYmxhbmtzTGlzdC5sZW5ndGgpIHtcbiAgICAgIGJsYW5rc1BsYWNlaG9sZGVycy5wdXNoKDMpOyAvLyBGaWxsIHVwXG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmg1cENvbmZpZ0RhdGEuY29udGVudC5ibGFua3NMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaDVwQmxhbmsgPSB0aGlzLmg1cENvbmZpZ0RhdGEuY29udGVudC5ibGFua3NMaXN0W2ldO1xuXG4gICAgICB2YXIgY29ycmVjdFRleHQgPSBoNXBCbGFuay5jb3JyZWN0QW5zd2VyVGV4dDtcbiAgICAgIGlmIChjb3JyZWN0VGV4dCA9PT0gXCJcIiB8fCBjb3JyZWN0VGV4dCA9PT0gdW5kZWZpbmVkKVxuICAgICAgICBjb250aW51ZTtcblxuICAgICAgdmFyIGJsYW5rID0gQmxhbmtMb2FkZXIuaW5zdGFuY2UuY3JlYXRlQmxhbmsoYGFkdmFuY2VkYmxhbmtzLSR7dGhpcy5zZXR0aW5ncy5jb250ZW50SWR9LWNsb3plLSR7aX1gLCBjb3JyZWN0VGV4dCxcbiAgICAgICAgaDVwQmxhbmsuaGludCwgaDVwQmxhbmsuaW5jb3JyZWN0QW5zd2Vyc0xpc3QsIGJsYW5rc1BsYWNlaG9sZGVyc1tpXSk7XG5cbiAgICAgIGJsYW5rLmZpbmlzaEluaXRpYWxpemF0aW9uKCk7XG4gICAgICBibGFua3MucHVzaChibGFuayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJsYW5rcztcbiAgfVxuXG4gIGdldFNuaXBwZXRzKCk6IFNuaXBwZXRbXSB7XG4gICAgdmFyIHNuaXBwZXRzOiBTbmlwcGV0W10gPSBuZXcgQXJyYXkoKTtcblxuICAgIGlmICghdGhpcy5oNXBDb25maWdEYXRhLnNuaXBwZXRzKVxuICAgICAgcmV0dXJuIHNuaXBwZXRzO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmg1cENvbmZpZ0RhdGEuc25pcHBldHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciByYXdfc25pcHBldCA9IHRoaXMuaDVwQ29uZmlnRGF0YS5zbmlwcGV0c1tpXTtcbiAgICAgIHZhciBzbmlwcGV0ID0gbmV3IFNuaXBwZXQocmF3X3NuaXBwZXQuc25pcHBldE5hbWUsIHRoaXMudW53cmFwcGVyLnVud3JhcChyYXdfc25pcHBldC5zbmlwcGV0VGV4dCkpO1xuICAgICAgc25pcHBldHMucHVzaChzbmlwcGV0KTtcbiAgICB9XG4gICAgcmV0dXJuIHNuaXBwZXRzO1xuICB9XG59XG4iLCJleHBvcnQgZW51bSBMb2NhbGl6YXRpb25MYWJlbHMge1xuICBzaG93U29sdXRpb25CdXR0b24gPSBcInNob3dTb2x1dGlvbnNcIixcbiAgcmV0cnlCdXR0b24gPSBcInRyeUFnYWluXCIsXG4gIGNoZWNrQWxsQnV0dG9uID0gXCJjaGVja0Fuc3dlclwiLFxuICBub3RGaWxsZWRPdXRXYXJuaW5nID0gXCJub3RGaWxsZWRPdXRcIixcbiAgdGlwQnV0dG9uID1cInRpcExhYmVsXCIsXG4gIHR5cG9NZXNzYWdlID0gXCJzcGVsbGluZ01pc3Rha2VXYXJuaW5nXCIsXG4gIHNjb3JlQmFyTGFiZWwgPSBcInNjb3JlQmFyTGFiZWxcIiAgXG59XG5cbmV4cG9ydCBlbnVtIExvY2FsaXphdGlvblN0cnVjdHVyZXMge1xuICBjb25maXJtQ2hlY2sgPSBcImNvbmZpcm1DaGVja1wiLFxuICBjb25maXJtUmV0cnkgPSBcImNvbmZpcm1SZXRyeVwiLFxuICBvdmVyYWxsRmVlZGJhY2sgPSBcIm92ZXJhbGxGZWVkYmFja1wiXG59XG5cbi8qKlxuICogUHJvdmlkZXMgbG9jYWxpemF0aW9uIHNlcnZpY2VzLlxuICovXG5cbmV4cG9ydCBjbGFzcyBINVBMb2NhbGl6YXRpb24ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGg1cENvbmZpZ3VyYXRpb246IGFueSkge1xuXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbG9jYWxpemVkIHN0cmluZyB0aGF0IGlzIHJlcHJlc2VudGVkIGJ5IHRoZSBpZGVudGlmaWVyLlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IGxvY2FsaXphYmxlU3RyaW5nSWRlbnRpZmllclxuICAgKiBAcmV0dXJucyBzdHJpbmdcbiAgICovXG4gIHByaXZhdGUgZ2V0VGV4dChsb2NhbGl6YWJsZVN0cmluZ0lkZW50aWZpZXI6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuaDVwQ29uZmlndXJhdGlvbltsb2NhbGl6YWJsZVN0cmluZ0lkZW50aWZpZXJdO1xuICB9XG5cbiAgcHJpdmF0ZSBsYWJlbFRvU3RyaW5nKGxhYmVsOiBMb2NhbGl6YXRpb25MYWJlbHMpIHtcbiAgICByZXR1cm4gbGFiZWwudG9TdHJpbmcoKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbG9jYWxpemVkIHN0cmluZyBmb3IgdGhlIGxhYmVsLlxuICAgKiBAcGFyYW0gIHtMb2NhbGl6YXRpb25MYWJlbHN9IGxhYmVsXG4gICAqIEByZXR1cm5zIHN0cmluZ1xuICAgKi9cbiAgZ2V0VGV4dEZyb21MYWJlbChsYWJlbDogTG9jYWxpemF0aW9uTGFiZWxzKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5nZXRUZXh0KHRoaXMubGFiZWxUb1N0cmluZyhsYWJlbCkpO1xuICB9XG5cbiAgZ2V0T2JqZWN0Rm9yU3RydWN0dXJlKHN0cnVjdHVyZTogTG9jYWxpemF0aW9uU3RydWN0dXJlcykgOiBhbnkge1xuICAgIHJldHVybiB0aGlzLmg1cENvbmZpZ3VyYXRpb25bc3RydWN0dXJlLnRvU3RyaW5nKCldO1xuICB9XG59IiwiaW1wb3J0IHsgQmxhbmsgfSBmcm9tICcuLi9tb2RlbHMvYmxhbmsnO1xuaW1wb3J0IHsgTWVzc2FnZVR5cGUgfSBmcm9tICcuLi9tb2RlbHMvZW51bXMnO1xuXG5leHBvcnQgY2xhc3MgTWVzc2FnZVNlcnZpY2Uge1xuICBwcml2YXRlIHNwZWVjaEJ1YmJsZTogYW55O1xuICBwcml2YXRlIGFzc29jaWF0ZWRCbGFuazogQmxhbms7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBqUXVlcnk6IEpRdWVyeVN0YXRpYykge1xuXG4gIH1cblxuICBwdWJsaWMgc2hvdyhlbGVtZW50SWQ6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nLCBibGFuazogQmxhbmssIHR5cGU/OiBNZXNzYWdlVHlwZSkge1xuICAgIGlmICghdHlwZSlcbiAgICAgIHR5cGUgPSBNZXNzYWdlVHlwZS5Ob25lO1xuXG4gICAgdmFyIGVsZW1lbnRzID0gdGhpcy5qUXVlcnkoXCIjXCIgKyBlbGVtZW50SWQpO1xuXG4gICAgaWYgKGVsZW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuc3BlZWNoQnViYmxlID0gbmV3IEg1UC5Kb3ViZWxTcGVlY2hCdWJibGUoZWxlbWVudHMsIG1lc3NhZ2UpO1xuICAgICAgdGhpcy5hc3NvY2lhdGVkQmxhbmsgPSBibGFuaztcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaGlkZSgpIHtcbiAgICBpZiAodGhpcy5zcGVlY2hCdWJibGUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuc3BlZWNoQnViYmxlLnJlbW92ZSgpO1xuICAgICAgfVxuICAgICAgY2F0Y2ggKGV4Y2VwdGlvbikge1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNwZWVjaEJ1YmJsZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmFzc29jaWF0ZWRCbGFuayA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBpc0FjdGl2ZShibGFuazogQmxhbmspIHtcbiAgICByZXR1cm4gdGhpcy5hc3NvY2lhdGVkQmxhbmsgPT09IGJsYW5rO1xuICB9XG59IiwiaW1wb3J0IHsgQ2xvemVUeXBlLCBTZWxlY3RBbHRlcm5hdGl2ZXMgfSBmcm9tIFwiLi4vbW9kZWxzL2VudW1zXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVNldHRpbmdzIHtcbiAgY2xvemVUeXBlOiBDbG96ZVR5cGU7XG4gIHNlbGVjdEFsdGVybmF0aXZlczogU2VsZWN0QWx0ZXJuYXRpdmVzO1xuICBzZWxlY3RBbHRlcm5hdGl2ZVJlc3RyaWN0aW9uOiBudW1iZXI7XG4gIGVuYWJsZVJldHJ5OiBib29sZWFuO1xuICBlbmFibGVTb2x1dGlvbnNCdXR0b246IGJvb2xlYW47XG4gIGVuYWJsZUNoZWNrQnV0dG9uOiBib29sZWFuO1xuICBhdXRvQ2hlY2s6IGJvb2xlYW47XG4gIGNhc2VTZW5zaXRpdmU6IGJvb2xlYW47XG4gIHdhcm5TcGVsbGluZ0Vycm9yczogYm9vbGVhbjtcbiAgYWNjZXB0U3BlbGxpbmdFcnJvcnM6IGJvb2xlYW47XG4gIHNob3dTb2x1dGlvbnNSZXF1aXJlc0lucHV0OiBib29sZWFuO1xuICBjb25maXJtQ2hlY2tEaWFsb2c6IGJvb2xlYW47XG4gIGNvbmZpcm1SZXRyeURpYWxvZzogYm9vbGVhbjtcbiAgZGlzYWJsZUltYWdlWm9vbWluZzogYm9vbGVhbjtcbiAgY29udGVudElkOiBudW1iZXIgfCBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBINVBTZXR0aW5ncyBpbXBsZW1lbnRzIElTZXR0aW5ncyB7XG4gIHB1YmxpYyBjbG96ZVR5cGU6IENsb3plVHlwZSA9IENsb3plVHlwZS5UeXBlO1xuICBwdWJsaWMgc2VsZWN0QWx0ZXJuYXRpdmVzOiBTZWxlY3RBbHRlcm5hdGl2ZXMgPSBTZWxlY3RBbHRlcm5hdGl2ZXMuQWx0ZXJuYXRpdmVzO1xuICBwdWJsaWMgc2VsZWN0QWx0ZXJuYXRpdmVSZXN0cmljdGlvbjogbnVtYmVyID0gNTtcbiAgcHVibGljIGVuYWJsZVJldHJ5OiBib29sZWFuID0gdHJ1ZTtcbiAgcHVibGljIGVuYWJsZVNvbHV0aW9uc0J1dHRvbjogYm9vbGVhbiA9IHRydWU7XG4gIHB1YmxpYyBlbmFibGVDaGVja0J1dHRvbjogYm9vbGVhbiA9IHRydWU7XG4gIHB1YmxpYyBhdXRvQ2hlY2s6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGNhc2VTZW5zaXRpdmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIHdhcm5TcGVsbGluZ0Vycm9yczogYm9vbGVhbiA9IHRydWU7XG4gIHB1YmxpYyBhY2NlcHRTcGVsbGluZ0Vycm9yczogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgc2hvd1NvbHV0aW9uc1JlcXVpcmVzSW5wdXQ6IGJvb2xlYW4gPSB0cnVlO1xuICBwdWJsaWMgY29uZmlybUNoZWNrRGlhbG9nOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBjb25maXJtUmV0cnlEaWFsb2c6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGRpc2FibGVJbWFnZVpvb21pbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGNvbnRlbnRJZDogc3RyaW5nID0gJyc7XG5cbiAgY29uc3RydWN0b3IoaDVwQ29uZmlnRGF0YTogYW55KSB7XG4gICAgaWYgKGg1cENvbmZpZ0RhdGEuYmVoYXZpb3VyLm1vZGUgPT09ICdzZWxlY3Rpb24nKSB7XG4gICAgICB0aGlzLmNsb3plVHlwZSA9IENsb3plVHlwZS5TZWxlY3Q7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5jbG96ZVR5cGUgPSBDbG96ZVR5cGUuVHlwZTtcbiAgICB9XG5cbiAgICBpZiAoaDVwQ29uZmlnRGF0YS5iZWhhdmlvdXIuc2VsZWN0QWx0ZXJuYXRpdmVzID09PSAnYWxsJykge1xuICAgICAgdGhpcy5zZWxlY3RBbHRlcm5hdGl2ZXMgPSBTZWxlY3RBbHRlcm5hdGl2ZXMuQWxsO1xuICAgIH0gZWxzZSBpZiAoaDVwQ29uZmlnRGF0YS5iZWhhdmlvdXIuc2VsZWN0QWx0ZXJuYXRpdmVzID09PSAnYWx0ZXJuYXRpdmVzJykge1xuICAgICAgdGhpcy5zZWxlY3RBbHRlcm5hdGl2ZXMgPSBTZWxlY3RBbHRlcm5hdGl2ZXMuQWx0ZXJuYXRpdmVzO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuc2VsZWN0QWx0ZXJuYXRpdmVzID0gU2VsZWN0QWx0ZXJuYXRpdmVzLkFsbDtcbiAgICB9XG5cbiAgICB0aGlzLnNlbGVjdEFsdGVybmF0aXZlUmVzdHJpY3Rpb24gPSBoNXBDb25maWdEYXRhLmJlaGF2aW91ci5zZWxlY3RBbHRlcm5hdGl2ZVJlc3RyaWN0aW9uO1xuICAgIHRoaXMuZW5hYmxlUmV0cnkgPSBoNXBDb25maWdEYXRhLmJlaGF2aW91ci5lbmFibGVSZXRyeTtcbiAgICB0aGlzLmVuYWJsZVNvbHV0aW9uc0J1dHRvbiA9IGg1cENvbmZpZ0RhdGEuYmVoYXZpb3VyLmVuYWJsZVNvbHV0aW9uc0J1dHRvbjtcbiAgICB0aGlzLmVuYWJsZUNoZWNrQnV0dG9uID0gaDVwQ29uZmlnRGF0YS5iZWhhdmlvdXIuZW5hYmxlQ2hlY2tCdXR0b247XG4gICAgdGhpcy5hdXRvQ2hlY2sgPSBoNXBDb25maWdEYXRhLmJlaGF2aW91ci5hdXRvQ2hlY2s7XG4gICAgdGhpcy5jYXNlU2Vuc2l0aXZlID0gaDVwQ29uZmlnRGF0YS5iZWhhdmlvdXIuY2FzZVNlbnNpdGl2ZTtcbiAgICB0aGlzLndhcm5TcGVsbGluZ0Vycm9ycyA9IGg1cENvbmZpZ0RhdGEuYmVoYXZpb3VyLnNwZWxsaW5nRXJyb3JCZWhhdmlvdXIgPT09IFwid2FyblwiO1xuICAgIHRoaXMuYWNjZXB0U3BlbGxpbmdFcnJvcnMgPSBoNXBDb25maWdEYXRhLmJlaGF2aW91ci5zcGVsbGluZ0Vycm9yQmVoYXZpb3VyID09PSBcImFjY2VwdFwiO1xuICAgIHRoaXMuc2hvd1NvbHV0aW9uc1JlcXVpcmVzSW5wdXQgPSBoNXBDb25maWdEYXRhLmJlaGF2aW91ci5zaG93U29sdXRpb25zUmVxdWlyZXNJbnB1dDtcbiAgICB0aGlzLmNvbmZpcm1DaGVja0RpYWxvZyA9IGg1cENvbmZpZ0RhdGEuYmVoYXZpb3VyLmNvbmZpcm1DaGVja0RpYWxvZztcbiAgICB0aGlzLmNvbmZpcm1SZXRyeURpYWxvZyA9IGg1cENvbmZpZ0RhdGEuYmVoYXZpb3VyLmNvbmZpcm1SZXRyeURpYWxvZztcbiAgICB0aGlzLmRpc2FibGVJbWFnZVpvb21pbmcgPSBoNXBDb25maWdEYXRhLm1lZGlhLmRpc2FibGVJbWFnZVpvb21pbmc7XG4gICAgdGhpcy5jb250ZW50SWQgPSBoNXBDb25maWdEYXRhLmNvbnRlbnRJZDtcblxuICAgIHRoaXMuZW5mb3JjZUxvZ2ljKCk7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2Qgc2V0cyBzZW5zaWJsZSBkZWZhdWx0IHZhbHVlcyBmb3Igc2V0dGluZ3MgaGlkZGVuIHdpdGggc2hvd1doZW5cbiAgICovXG4gIHByaXZhdGUgZW5mb3JjZUxvZ2ljKCkge1xuICAgIGlmICh0aGlzLmNsb3plVHlwZSA9PT0gQ2xvemVUeXBlLlR5cGUpIHtcbiAgICAgIHRoaXMuc2VsZWN0QWx0ZXJuYXRpdmVzID0gU2VsZWN0QWx0ZXJuYXRpdmVzLkFsbDtcbiAgICAgIHRoaXMuc2VsZWN0QWx0ZXJuYXRpdmVSZXN0cmljdGlvbiA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLnNlbGVjdEFsdGVybmF0aXZlUmVzdHJpY3Rpb24gPT09IFNlbGVjdEFsdGVybmF0aXZlcy5BbHRlcm5hdGl2ZXMpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RBbHRlcm5hdGl2ZVJlc3RyaWN0aW9uID0gMDtcbiAgICAgIH1cbiAgICAgIHRoaXMud2FyblNwZWxsaW5nRXJyb3JzID0gZmFsc2U7XG4gICAgICB0aGlzLmFjY2VwdFNwZWxsaW5nRXJyb3JzID0gZmFsc2U7XG4gICAgICB0aGlzLmNhc2VTZW5zaXRpdmUgPSBmYWxzZTtcbiAgICB9XG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3BhbiBpZD1cXFwiY29udGFpbmVye3tpZH19XFxcIiBjbGFzcz1cXFwiYmxhbmsge3sjYmxhbmsuaGFzUGVuZGluZ0ZlZWRiYWNrfX1oYXMtcGVuZGluZy1mZWVkYmFja3t7L2lmfX0ge3sjYmxhbmsuaGFzSGludH19aGFzLXRpcHt7L2lmfX0ge3sjYmxhbmsuaXNDb3JyZWN0fX1jb3JyZWN0e3svaWZ9fSB7eyNibGFuay5pc0Vycm9yfX1lcnJvcnt7L2lmfX0ge3sjYmxhbmsuaXNSZXRyeX19cmV0cnl7ey9pZn19IHt7I2JsYW5rLmlzU2hvd2luZ1NvbHV0aW9ufX1zaG93aW5nLXNvbHV0aW9ue3svaWZ9fVxcXCI+XFxuICB7eyN1bmxlc3MgaXNTZWxlY3RDbG96ZX19XFxuICAgIDxzcGFuIGNsYXNzPVxcXCJoNXAtaW5wdXQtd3JhcHBlclxcXCI+XFxuICAgICAgPGlucHV0IGlkPVxcXCJ7e2JsYW5rLmlkfX1cXFwiIHR5cGU9XFxcInRleHRcXFwiIHZhbHVlPVxcXCJ7e2JsYW5rLmVudGVyZWRUZXh0fX1cXFwiIFxcbiAgICAgICAgICAgICBzaXplPVxcXCJ7e2JsYW5rLm1pblRleHRMZW5ndGh9fVxcXCIgb24tZXNjYXBlPVxcXCJAdGhpcy5maXJlKCdjbG9zZU1lc3NhZ2UnLCBibGFuaylcXFwiIFxcbiAgICAgICAgICAgICBvbi1lbnRlcj1cXFwiQHRoaXMuZmlyZSgnY2hlY2tCbGFuaycsIGJsYW5rLCAnZW50ZXInKVxcXCIgXFxuICAgICAgICAgICAgIG9uLWJsdXI9XFxcIkB0aGlzLmZpcmUoJ2NoZWNrQmxhbmsnLCBibGFuaywgJ2JsdXInKVxcXCIgXFxuICAgICAgICAgICAgIG9uLWZvY3VzPVxcXCJAdGhpcy5maXJlKCdmb2N1cycsIGJsYW5rKVxcXCJcXG4gICAgICAgICAgICAgb24tYW55a2V5PVxcXCJAdGhpcy5maXJlKCd0ZXh0VHlwZWQnLCBibGFuaylcXFwiXFxuICAgICAgICAgICAgIHt7IyhibGFuay5pc0NvcnJlY3QgfHwgYmxhbmsuaXNTaG93aW5nU29sdXRpb24pfX1kaXNhYmxlZD1cXFwiZGlzYWJsZWRcXFwie3svaWZ9fVxcbiAgICAgICAgICAgICBjbGFzcz1cXFwiaDVwLXRleHQtaW5wdXRcXFwiXFxuICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cXFwib2ZmXFxcIlxcbiAgICAgICAgICAgICBhdXRvY2FwaXRhbGl6ZT1cXFwib2ZmXFxcIi8+XFxuICAgICAge3sjYmxhbmsuaGFzSGludH19XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaDVwLXRpcC1jb250YWluZXJcXFwiPlxcbiAgICAgICAgICA8YnV0dG9uIG9uLWNsaWNrPVxcXCJAdGhpcy5maXJlKCdzaG93SGludCcsIGJsYW5rKVxcXCIge3sjKGJsYW5rLmlzQ29ycmVjdCB8fCBibGFuay5pc1Nob3dpbmdTb2x1dGlvbil9fWRpc2FibGVkPVxcXCJkaXNhYmxlZFxcXCIge3svaWZ9fT5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiam91YmVsLXRpcC1jb250YWluZXJcXFwiIHRpdGxlPVxcXCJUaXBcXFwiIGFyaWEtbGFiZWw9XFxcIlRpcFxcXCIgYXJpYS1leHBhbmRlZD1cXFwidHJ1ZVxcXCIgcm9sZT1cXFwiYnV0dG9uXFxcIiB0YWJpbmRleD1cXFwiMFxcXCI+PHNwYW4gY2xhc3M9XFxcImpvdWJlbC1pY29uLXRpcC1ub3JtYWwgXFxcIj48c3BhbiBjbGFzcz1cXFwiaDVwLWljb24tc2hhZG93XFxcIj48L3NwYW4+PHNwYW4gY2xhc3M9XFxcImg1cC1pY29uLXNwZWVjaC1idWJibGVcXFwiPjwvc3Bhbj48c3BhbiBjbGFzcz1cXFwiaDVwLWljb24taW5mb1xcXCI+PC9zcGFuPjwvc3Bhbj48L3NwYW4+XFxuICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgPC9zcGFuPlxcbiAgICAgICAge3svaWZ9fVxcbiAgICA8L3NwYW4+ICAgIFxcbiAge3svdW5sZXNzfX1cXG4gIHt7I2lmIGlzU2VsZWN0Q2xvemV9fVxcbiAgICAgIDxidXR0b24gY2xhc3M9XFxcImg1cC1ub3RpZmljYXRpb25cXFwiIG9uLWNsaWNrPVxcXCJAdGhpcy5maXJlKCdkaXNwbGF5RmVlZGJhY2snLCBibGFuaylcXFwiPlxcbiAgICAgICAgJiN4ZjA1YTtcXG4gICAgICA8L2J1dHRvbj5cXG4gICAgICA8c3BhbiBjbGFzcz1cXFwiaDVwLWlucHV0LXdyYXBwZXJcXFwiPiAgICAgIFxcbiAgICAgIDxzZWxlY3QgaWQ9XFxcInt7YmxhbmsuaWR9fVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgdmFsdWU9XFxcInt7YmxhbmsuZW50ZXJlZFRleHR9fVxcXCJcXG4gICAgICAgICAgICAgIG9uLWVudGVyPVxcXCJAdGhpcy5maXJlKCdjaGVja0JsYW5rJywgYmxhbmssICdlbnRlcicpXFxcIiBcXG4gICAgICAgICAgICAgIG9uLWNoYW5nZT1cXFwiQHRoaXMuZmlyZSgnY2hlY2tCbGFuaycsIGJsYW5rLCAnY2hhbmdlJylcXFwiXFxuICAgICAgICAgICAgICBvbi1mb2N1cz1cXFwiQHRoaXMuZmlyZSgnZm9jdXMnLCBibGFuaylcXFwiICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgIHt7IyhibGFuay5pc0NvcnJlY3QgfHwgYmxhbmsuaXNTaG93aW5nU29sdXRpb24pfX1kaXNhYmxlZD1cXFwiZGlzYWJsZWRcXFwie3svaWZ9fSBcXG4gICAgICAgICAgICAgIHNpemU9XFxcIjFcXFwiXFxuICAgICAgICAgICAgICBjbGFzcz1cXFwiaDVwLXRleHQtaW5wdXRcXFwiPlxcbiAgICAgICAge3sjZWFjaCBibGFuay5jaG9pY2VzfX1cXG4gICAgICAgICAgPG9wdGlvbj57e3RoaXN9fTwvb3B0aW9uPlxcbiAgICAgICAge3svZWFjaH19XFxuICAgICAgPC9zZWxlY3Q+ICAgICAgICAgICAgICAgICAgICAgXFxuICAgICAge3sjYmxhbmsuaGFzSGludH19XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaDVwLXRpcC1jb250YWluZXJcXFwiPlxcbiAgICAgICAgICA8YnV0dG9uIG9uLWNsaWNrPVxcXCJAdGhpcy5maXJlKCdzaG93SGludCcsIGJsYW5rKVxcXCIge3sjKGJsYW5rLmlzQ29ycmVjdCB8fCBibGFuay5pc1Nob3dpbmdTb2x1dGlvbil9fWRpc2FibGVkPVxcXCJkaXNhYmxlZFxcXCJ7ey9pZn19PlxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJqb3ViZWwtdGlwLWNvbnRhaW5lclxcXCIgdGl0bGU9XFxcIlRpcFxcXCIgYXJpYS1sYWJlbD1cXFwiVGlwXFxcIiBhcmlhLWV4cGFuZGVkPVxcXCJ0cnVlXFxcIiByb2xlPVxcXCJidXR0b25cXFwiIHRhYmluZGV4PVxcXCIwXFxcIj48c3BhbiBjbGFzcz1cXFwiam91YmVsLWljb24tdGlwLW5vcm1hbCBcXFwiPjxzcGFuIGNsYXNzPVxcXCJoNXAtaWNvbi1zaGFkb3dcXFwiPjwvc3Bhbj48c3BhbiBjbGFzcz1cXFwiaDVwLWljb24tc3BlZWNoLWJ1YmJsZVxcXCI+PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJoNXAtaWNvbi1pbmZvXFxcIj48L3NwYW4+PC9zcGFuPjwvc3Bhbj5cXG4gICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICA8L3NwYW4+XFxuICAgICAge3svaWZ9fSAgICAgXFxuICAgIDwvc3Bhbj5cXG4gIHt7L2lmfX1cXG48L3NwYW4+XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzcGFuIHt7I29iamVjdC5pc0hpZ2hsaWdodGVkfX1jbGFzcz1cXFwiaGlnaGxpZ2h0ZWRcXFwie3svaWZ9fSBpZD1cXFwie3tvYmplY3QuaWR9fVxcXCI+e3t7b2JqZWN0LnRleHR9fX08L3NwYW4+XCI7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4vc3R5bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiXSwic291cmNlUm9vdCI6IiJ9