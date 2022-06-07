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
        var blanksPlaceholders = this.h5pConfigData.content.blanksText.match(/(_{3,})/g);
        blanksPlaceholders = (blanksPlaceholders || [])
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGlmZi9kaXN0L2RpZmYuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9lbnRyaWVzL2Rpc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9oZWxwZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvcmFjdGl2ZS1ldmVudHMta2V5cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9hcHAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvY29udGVudC1sb2FkZXJzL2JsYW5rLWxvYWRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9jb250ZW50LWxvYWRlcnMvY2xvemUtbG9hZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NvbnRyb2xsZXJzL2Nsb3plLWNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvaGVscGVycy9leHRlbmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvaGVscGVycy91bndyYXBwZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbW9kZWxzL2Fuc3dlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tb2RlbHMvYmxhbmsudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbW9kZWxzL2Nsb3plLWVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbW9kZWxzL2Nsb3plLnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21vZGVscy9lbnVtcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tb2RlbHMvaGlnaGxpZ2h0LnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21vZGVscy9tZXNzYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21vZGVscy9zbmlwcGV0LnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21vZGVscy94YXBpLnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3NlcnZpY2VzL2RhdGEtcmVwb3NpdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9zZXJ2aWNlcy9sb2NhbGl6YXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc2VydmljZXMvbWVzc2FnZS1zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3NlcnZpY2VzL3NldHRpbmdzLnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3ZpZXdzL2JsYW5rLnJhY3RpdmUuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy92aWV3cy9oaWdobGlnaHQucmFjdGl2ZS5odG1sIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzPzE0MDgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFp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UztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxZQUFZLG9CQUFvQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTzs7O0FBR1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0Es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O0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0EscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsT0FBTztBQUNQOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBDQUEwQzs7QUFFMUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJDQUEyQzs7QUFFM0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxtQkFBbUIsV0FBVztBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLG9CQUFvQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FB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QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7O0FBSUEsc0MiLCJmaWxlIjoiZGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2VudHJpZXMvZGlzdC50c1wiKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaDVwLWFkdmFuY2VkLWJsYW5rcyB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5cXG4vKiBUZXh0ICovXFxuXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgI2g1cC1jbG96ZS1jb250YWluZXIgcCxcXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAjaDVwLWNsb3plLWNvbnRhaW5lciBkaXYge1xcbiAgICBsaW5lLWhlaWdodDogMS44ZW07XFxuICAgIG1hcmdpbjogMCAwIDFlbTtcXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODBweCkge1xcbiAgICAuaDVwLWFkdmFuY2VkLWJsYW5rcyAjaDVwLWNsb3plLWNvbnRhaW5lciBwLFxcbiAgICAuaDVwLWFkdmFuY2VkLWJsYW5rcyAjaDVwLWNsb3plLWNvbnRhaW5lciBkaXYge1xcbiAgICAgICAgdGV4dC1hbGlnbjogdW5zZXQ7XFxuICAgIH1cXG59XFxuXFxuXFxuLyogSW5wdXQgKi9cXG5cXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuaDVwLWlucHV0LXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmJsYW5rIC5oNXAtdGV4dC1pbnB1dCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2EwYTBhMDtcXG4gICAgcGFkZGluZzogMC4xODc1ZW0gMC41ZW0gMC4xODc1ZW0gMC41ZW07XFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuYmxhbmsgaW5wdXQuaDVwLXRleHQtaW5wdXQge1xcbiAgbWF4LXdpZHRoOiBjYWxjKDEwMHZ3IC0gNjRweCk7XFxufVxcblxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5ibGFuayBzZWxlY3QuaDVwLXRleHQtaW5wdXQge1xcbiAgbWF4LXdpZHRoOiBjYWxjKDEwMHZ3IC0gMzZweCk7XFxufVxcblxcbi8qIElFICsgQ2hyb21lIHNwZWNpZmljIGZpeGVzICovXFxuXFxuLmg1cC10ZXh0LWlucHV0OjotbXMtY2xlYXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG46bm90KC5jb3JyZWN0KS5ibGFuay5oYXMtdGlwIGJ1dHRvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuLyogU2VsZWN0IG1vZGUgKi9cXG5cXG5zZWxlY3QuaDVwLXRleHQtaW5wdXQge1xcbiAgICBhcHBlYXJhbmNlOiBidXR0b247XFxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxufVxcblxcblxcbi8qIFNob3dpbmcgc29sdXRpb24gaW5wdXQgKi9cXG5cXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuYmxhbmsuc2hvd2luZy1zb2x1dGlvbiAuaDVwLXRleHQtaW5wdXQge1xcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgIzlkZDhiYjtcXG4gICAgY29sb3I6ICMyNTVjNDE7XFxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XFxufVxcblxcblxcbi8qIEZvY3Vzc2VkIGlucHV0ICovXFxuXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmJsYW5rIC5oNXAtdGV4dC1pbnB1dDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAwLjVlbSAwICM3ZmI4ZmY7XFxuICAgIGJvcmRlci1jb2xvcjogIzdmYjhmZjtcXG59XFxuXFxuXFxuLyogQ29ycmVjdGx5IGFuc3dlcmVkIGlucHV0ICovXFxuXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmJsYW5rLmNvcnJlY3QgLmg1cC10ZXh0LWlucHV0IHtcXG4gICAgYmFja2dyb3VuZDogIzlkZDhiYjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzlkZDhiYjtcXG4gICAgY29sb3I6ICMyNTVjNDE7XFxufVxcblxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5ibGFuay5jb3JyZWN0IC5oNXAtaW5wdXQtd3JhcHBlcjphZnRlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDAuNWVtO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcZjAwY1xcXCI7XFxuICAgIGZvbnQtZmFtaWx5OiAnSDVQRm9udEF3ZXNvbWU0JztcXG4gICAgY29sb3I6ICMyNTVjNDE7XFxufVxcblxcblxcbi8qIEluY29ycmVjdCBhbnN3ZXJzICovXFxuXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmJsYW5rLmVycm9yIC5oNXAtdGV4dC1pbnB1dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2QwZDA7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmN2QwZDA7XFxuICAgIGNvbG9yOiAjYjcxYzFjO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmJsYW5rLmVycm9yIC5oNXAtaW5wdXQtd3JhcHBlcjphZnRlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDAuNWVtO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgICBmb250LWZhbWlseTogJ0g1UEZvbnRBd2Vzb21lNCc7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29udGVudDogXFxcIlxcXFxmMDBkXFxcIjtcXG4gICAgY29sb3I6ICNiNzFjMWM7XFxufVxcblxcblxcbi8qIFNwZWxsaW5nIGVycm9ycyAqL1xcblxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5ibGFuay5yZXRyeSAuaDVwLXRleHQtaW5wdXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZjk5O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZjk5O1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5ibGFuay5yZXRyeSAuaDVwLWlucHV0LXdyYXBwZXI6YWZ0ZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwLjVlbTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gICAgZm9udC1mYW1pbHk6ICdINVBGb250QXdlc29tZTQnO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcZjAwZFxcXCI7XFxuICAgIGNvbG9yOiAjYjcxYzFjO1xcbn1cXG5cXG5cXG4vKiBCdXR0b25zICovXFxuXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmJsYW5rIGJ1dHRvbiB7XFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG59XFxuXFxuXFxuLyogSGlnaGxpZ2h0IGluIHNwZWxsaW5nIG1pc3Rha2UgbWFya2VyICovXFxuXFxuLnNwZWxsaW5nLW1pc3Rha2UgLm1pc3NpbmctY2hhcmFjdGVyLFxcbi5zcGVsbGluZy1taXN0YWtlIC5taXN0YWtlbi1jaGFyYWN0ZXIge1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDUwMG1zO1xcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNTAwbXM7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJsaW5rLWNvbG9yO1xcbiAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBibGluay1jb2xvcjtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxMztcXG4gICAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxMztcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XFxuICAgICAgICAgICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xcbn1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgYmxpbmstY29sb3Ige1xcbiAgICBmcm9tIHtcXG4gICAgICAgIGNvbG9yOiBpbml0aWFsO1xcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICAgIGNvbG9yOiByZWQ7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBibGluay1jb2xvciB7XFxuICAgIGZyb20ge1xcbiAgICAgICAgY29sb3I6IGluaXRpYWw7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgICAgY29sb3I6IHJlZDtcXG4gICAgfVxcbn1cXG5cXG4uc3BlbGxpbmctbWlzdGFrZSAubWlzdGFrZW4tY2hhcmFjdGVyIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcblxcbi8qIEhpZ2hsaWdodHMgaW4gdGV4dCAqL1xcblxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5oaWdobGlnaHRlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjIpO1xcbiAgICBwYWRkaW5nOiAwLjRlbTtcXG4gICAgbWFyZ2luOiAtMC40ZW07XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxMDAwbXM7XFxuICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxMDAwbXM7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJsaW5rLWJhY2tncm91bmQtY29sb3I7XFxuICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGJsaW5rLWJhY2tncm91bmQtY29sb3I7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMztcXG4gICAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAzO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcXG4gICAgICAgICAgICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBibGluay1iYWNrZ3JvdW5kLWNvbG9yIHtcXG4gICAgZnJvbSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbml0aWFsO1xcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjIpO1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgYmxpbmstYmFja2dyb3VuZC1jb2xvciB7XFxuICAgIGZyb20ge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5pdGlhbDtcXG4gICAgfVxcbiAgICB0byB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC4yKTtcXG4gICAgfVxcbn1cXG5cXG5cXG4vKiBPdGhlcnMgKi9cXG5cXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuaW52aXNpYmxlIHtcXG4gICAgdmlzaWJpbGl0eTogY29sbGFwc2U7XFxufVxcblxcblxcbi8qIFRpcHMgKi9cXG5cXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuaDVwLXRpcC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICByaWdodDogMC40ZW07XFxuICBmb250LXNpemU6IDFlbTtcXG59XFxuXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmJsYW5rLmhhcy10aXA6bm90KC5jb3JyZWN0KTpub3QoLmVycm9yKTpub3QoLnJldHJ5KSAuaDVwLXRleHQtaW5wdXQge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyLjI1ZW07XFxufVxcblxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5ibGFuay5oYXMtdGlwLmNvcnJlY3QgLmg1cC1pbnB1dC13cmFwcGVyOmFmdGVyLFxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5ibGFuay5oYXMtdGlwLmVycm9yIC5oNXAtaW5wdXQtd3JhcHBlcjphZnRlcixcXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuYmxhbmsuaGFzLXRpcC5yZXRyeSAuaDVwLWlucHV0LXdyYXBwZXI6YWZ0ZXIge1xcbiAgICByaWdodDogMi4yNWVtO1xcbn1cXG5cXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuYmxhbmsuY29ycmVjdC5oYXMtdGlwIC5oNXAtdGV4dC1pbnB1dCxcXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuYmxhbmsuZXJyb3IuaGFzLXRpcCAuaDVwLXRleHQtaW5wdXQsXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmJsYW5rLnJldHJ5Lmhhcy10aXAgLmg1cC10ZXh0LWlucHV0IHtcXG4gICAgcGFkZGluZy1yaWdodDogMy41ZW07XFxufVxcblxcbi8qIGltcHJvdmVzIGFwcGVhcmFuY2Ugb2YgaDVwIHRpcCBzaGFkb3dzICovXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmpvdWJlbC1pY29uLXRpcC1ub3JtYWwgLmg1cC1pY29uLXNoYWRvdzpiZWZvcmUge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgb3BhY2l0eTogMC4xMztcXG59XFxuXFxuLyogcGVuZGluZyBmZWVkYmFjayBtYXJrZXIgKi9cXG5cXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuaDVwLWFkdmFuY2VkLWJsYW5rcy1zZWxlY3QtbW9kZSAuYmxhbms6bm90KC5oYXMtcGVuZGluZy1mZWVkYmFjaykgYnV0dG9uLmg1cC1ub3RpZmljYXRpb24ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuaDVwLWFkdmFuY2VkLWJsYW5rcy1zZWxlY3QtbW9kZSAuYmxhbmsuaGFzLXBlbmRpbmctZmVlZGJhY2sgYnV0dG9uLmg1cC1ub3RpZmljYXRpb24ge1xcbiAgICBmb250LXNpemU6IGxhcmdlO1xcbn1cXG5cXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuaDVwLWFkdmFuY2VkLWJsYW5rcy1zZWxlY3QtbW9kZSAuYmxhbmsuaGFzLXBlbmRpbmctZmVlZGJhY2sgYnV0dG9uLmg1cC1ub3RpZmljYXRpb24sXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmg1cC1hZHZhbmNlZC1ibGFua3MtdHlwZS1tb2RlIC5ibGFuay5oYXMtcGVuZGluZy1mZWVkYmFjayAuaDVwLWlucHV0LXdyYXBwZXI6YmVmb3JlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdINVBGb250QXdlc29tZTQnO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGFuaW1hdGlvbjogc2hha2UgM3MgY3ViaWMtYmV6aWVyKC4zNiwgLjA3LCAuMTksIC45NykgcmV2ZXJzZTtcXG4gICAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAyO1xcbiAgICAgICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDI7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgcGVyc3BlY3RpdmU6IDEwMDBweDtcXG59XFxuXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmg1cC1hZHZhbmNlZC1ibGFua3MtdHlwZS1tb2RlIC5ibGFuay5oYXMtcGVuZGluZy1mZWVkYmFjayAuaDVwLWlucHV0LXdyYXBwZXI6YmVmb3JlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAtMC40ZW07XFxuICAgIHRvcDogLTAuN2VtO1xcbiAgICBjb250ZW50OiBcXFwiXFxcXGYwNWFcXFwiO1xcbn1cXG5cXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuaDVwLWFkdmFuY2VkLWJsYW5rcy1zZWxlY3QtbW9kZSAuYmxhbmsuZXJyb3IuaGFzLXBlbmRpbmctZmVlZGJhY2sgYnV0dG9uLmg1cC1ub3RpZmljYXRpb24sXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmg1cC1hZHZhbmNlZC1ibGFua3MtdHlwZS1tb2RlIC5ibGFuay5lcnJvci5oYXMtcGVuZGluZy1mZWVkYmFjayAuaDVwLWlucHV0LXdyYXBwZXI6YmVmb3JlIHtcXG4gICAgY29sb3I6ICNiNzFjMWM7XFxufVxcblxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5oNXAtYWR2YW5jZWQtYmxhbmtzLXNlbGVjdC1tb2RlIC5ibGFuay5yZXRyeS5oYXMtcGVuZGluZy1mZWVkYmFjayBidXR0b24uaDVwLW5vdGlmaWNhdGlvbixcXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuaDVwLWFkdmFuY2VkLWJsYW5rcy10eXBlLW1vZGUgLmJsYW5rLnJldHJ5Lmhhcy1wZW5kaW5nLWZlZWRiYWNrIC5oNXAtaW5wdXQtd3JhcHBlcjpiZWZvcmUge1xcbiAgICBjb2xvcjogI2ZmZmYwMDtcXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggMC41ZW0gYmxhY2s7XFxufVxcblxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5oNXAtYWR2YW5jZWQtYmxhbmtzLXRtcC1maWVsZCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgd2lkdGg6IGluaXRpYWw7XFxufVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBzaGFrZSB7XFxuICAgIDIlLFxcbiAgICAyMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMC41cHgsIDAsIDApO1xcbiAgICB9XFxuICAgIDQlLFxcbiAgICAxNyUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxcHgsIDAsIDApO1xcbiAgICB9XFxuICAgIDYlLFxcbiAgICAxMCUsXFxuICAgIDE1JSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0ycHgsIDAsIDApO1xcbiAgICB9XFxuICAgIDklLFxcbiAgICAxMyUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgycHgsIDAsIDApO1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgc2hha2Uge1xcbiAgICAyJSxcXG4gICAgMjAlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTAuNXB4LCAwLCAwKTtcXG4gICAgfVxcbiAgICA0JSxcXG4gICAgMTclIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMXB4LCAwLCAwKTtcXG4gICAgfVxcbiAgICA2JSxcXG4gICAgMTAlLFxcbiAgICAxNSUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMnB4LCAwLCAwKTtcXG4gICAgfVxcbiAgICA5JSxcXG4gICAgMTMlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMnB4LCAwLCAwKTtcXG4gICAgfVxcbn1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gZmFjdG9yeShleHBvcnRzKSA6XG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJ2V4cG9ydHMnXSwgZmFjdG9yeSkgOlxuICAoZ2xvYmFsID0gZ2xvYmFsIHx8IHNlbGYsIGZhY3RvcnkoZ2xvYmFsLkRpZmYgPSB7fSkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKGV4cG9ydHMpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gIGZ1bmN0aW9uIERpZmYoKSB7fVxuICBEaWZmLnByb3RvdHlwZSA9IHtcbiAgICBkaWZmOiBmdW5jdGlvbiBkaWZmKG9sZFN0cmluZywgbmV3U3RyaW5nKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgICB2YXIgY2FsbGJhY2sgPSBvcHRpb25zLmNhbGxiYWNrO1xuXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2FsbGJhY2sgPSBvcHRpb25zO1xuICAgICAgICBvcHRpb25zID0ge307XG4gICAgICB9XG5cbiAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIGZ1bmN0aW9uIGRvbmUodmFsdWUpIHtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjYWxsYmFjayh1bmRlZmluZWQsIHZhbHVlKTtcbiAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0gLy8gQWxsb3cgc3ViY2xhc3NlcyB0byBtYXNzYWdlIHRoZSBpbnB1dCBwcmlvciB0byBydW5uaW5nXG5cblxuICAgICAgb2xkU3RyaW5nID0gdGhpcy5jYXN0SW5wdXQob2xkU3RyaW5nKTtcbiAgICAgIG5ld1N0cmluZyA9IHRoaXMuY2FzdElucHV0KG5ld1N0cmluZyk7XG4gICAgICBvbGRTdHJpbmcgPSB0aGlzLnJlbW92ZUVtcHR5KHRoaXMudG9rZW5pemUob2xkU3RyaW5nKSk7XG4gICAgICBuZXdTdHJpbmcgPSB0aGlzLnJlbW92ZUVtcHR5KHRoaXMudG9rZW5pemUobmV3U3RyaW5nKSk7XG4gICAgICB2YXIgbmV3TGVuID0gbmV3U3RyaW5nLmxlbmd0aCxcbiAgICAgICAgICBvbGRMZW4gPSBvbGRTdHJpbmcubGVuZ3RoO1xuICAgICAgdmFyIGVkaXRMZW5ndGggPSAxO1xuICAgICAgdmFyIG1heEVkaXRMZW5ndGggPSBuZXdMZW4gKyBvbGRMZW47XG4gICAgICB2YXIgYmVzdFBhdGggPSBbe1xuICAgICAgICBuZXdQb3M6IC0xLFxuICAgICAgICBjb21wb25lbnRzOiBbXVxuICAgICAgfV07IC8vIFNlZWQgZWRpdExlbmd0aCA9IDAsIGkuZS4gdGhlIGNvbnRlbnQgc3RhcnRzIHdpdGggdGhlIHNhbWUgdmFsdWVzXG5cbiAgICAgIHZhciBvbGRQb3MgPSB0aGlzLmV4dHJhY3RDb21tb24oYmVzdFBhdGhbMF0sIG5ld1N0cmluZywgb2xkU3RyaW5nLCAwKTtcblxuICAgICAgaWYgKGJlc3RQYXRoWzBdLm5ld1BvcyArIDEgPj0gbmV3TGVuICYmIG9sZFBvcyArIDEgPj0gb2xkTGVuKSB7XG4gICAgICAgIC8vIElkZW50aXR5IHBlciB0aGUgZXF1YWxpdHkgYW5kIHRva2VuaXplclxuICAgICAgICByZXR1cm4gZG9uZShbe1xuICAgICAgICAgIHZhbHVlOiB0aGlzLmpvaW4obmV3U3RyaW5nKSxcbiAgICAgICAgICBjb3VudDogbmV3U3RyaW5nLmxlbmd0aFxuICAgICAgICB9XSk7XG4gICAgICB9IC8vIE1haW4gd29ya2VyIG1ldGhvZC4gY2hlY2tzIGFsbCBwZXJtdXRhdGlvbnMgb2YgYSBnaXZlbiBlZGl0IGxlbmd0aCBmb3IgYWNjZXB0YW5jZS5cblxuXG4gICAgICBmdW5jdGlvbiBleGVjRWRpdExlbmd0aCgpIHtcbiAgICAgICAgZm9yICh2YXIgZGlhZ29uYWxQYXRoID0gLTEgKiBlZGl0TGVuZ3RoOyBkaWFnb25hbFBhdGggPD0gZWRpdExlbmd0aDsgZGlhZ29uYWxQYXRoICs9IDIpIHtcbiAgICAgICAgICB2YXIgYmFzZVBhdGggPSB2b2lkIDA7XG5cbiAgICAgICAgICB2YXIgYWRkUGF0aCA9IGJlc3RQYXRoW2RpYWdvbmFsUGF0aCAtIDFdLFxuICAgICAgICAgICAgICByZW1vdmVQYXRoID0gYmVzdFBhdGhbZGlhZ29uYWxQYXRoICsgMV0sXG4gICAgICAgICAgICAgIF9vbGRQb3MgPSAocmVtb3ZlUGF0aCA/IHJlbW92ZVBhdGgubmV3UG9zIDogMCkgLSBkaWFnb25hbFBhdGg7XG5cbiAgICAgICAgICBpZiAoYWRkUGF0aCkge1xuICAgICAgICAgICAgLy8gTm8gb25lIGVsc2UgaXMgZ29pbmcgdG8gYXR0ZW1wdCB0byB1c2UgdGhpcyB2YWx1ZSwgY2xlYXIgaXRcbiAgICAgICAgICAgIGJlc3RQYXRoW2RpYWdvbmFsUGF0aCAtIDFdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBjYW5BZGQgPSBhZGRQYXRoICYmIGFkZFBhdGgubmV3UG9zICsgMSA8IG5ld0xlbixcbiAgICAgICAgICAgICAgY2FuUmVtb3ZlID0gcmVtb3ZlUGF0aCAmJiAwIDw9IF9vbGRQb3MgJiYgX29sZFBvcyA8IG9sZExlbjtcblxuICAgICAgICAgIGlmICghY2FuQWRkICYmICFjYW5SZW1vdmUpIHtcbiAgICAgICAgICAgIC8vIElmIHRoaXMgcGF0aCBpcyBhIHRlcm1pbmFsIHRoZW4gcHJ1bmVcbiAgICAgICAgICAgIGJlc3RQYXRoW2RpYWdvbmFsUGF0aF0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9IC8vIFNlbGVjdCB0aGUgZGlhZ29uYWwgdGhhdCB3ZSB3YW50IHRvIGJyYW5jaCBmcm9tLiBXZSBzZWxlY3QgdGhlIHByaW9yXG4gICAgICAgICAgLy8gcGF0aCB3aG9zZSBwb3NpdGlvbiBpbiB0aGUgbmV3IHN0cmluZyBpcyB0aGUgZmFydGhlc3QgZnJvbSB0aGUgb3JpZ2luXG4gICAgICAgICAgLy8gYW5kIGRvZXMgbm90IHBhc3MgdGhlIGJvdW5kcyBvZiB0aGUgZGlmZiBncmFwaFxuXG5cbiAgICAgICAgICBpZiAoIWNhbkFkZCB8fCBjYW5SZW1vdmUgJiYgYWRkUGF0aC5uZXdQb3MgPCByZW1vdmVQYXRoLm5ld1Bvcykge1xuICAgICAgICAgICAgYmFzZVBhdGggPSBjbG9uZVBhdGgocmVtb3ZlUGF0aCk7XG4gICAgICAgICAgICBzZWxmLnB1c2hDb21wb25lbnQoYmFzZVBhdGguY29tcG9uZW50cywgdW5kZWZpbmVkLCB0cnVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYmFzZVBhdGggPSBhZGRQYXRoOyAvLyBObyBuZWVkIHRvIGNsb25lLCB3ZSd2ZSBwdWxsZWQgaXQgZnJvbSB0aGUgbGlzdFxuXG4gICAgICAgICAgICBiYXNlUGF0aC5uZXdQb3MrKztcbiAgICAgICAgICAgIHNlbGYucHVzaENvbXBvbmVudChiYXNlUGF0aC5jb21wb25lbnRzLCB0cnVlLCB1bmRlZmluZWQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIF9vbGRQb3MgPSBzZWxmLmV4dHJhY3RDb21tb24oYmFzZVBhdGgsIG5ld1N0cmluZywgb2xkU3RyaW5nLCBkaWFnb25hbFBhdGgpOyAvLyBJZiB3ZSBoYXZlIGhpdCB0aGUgZW5kIG9mIGJvdGggc3RyaW5ncywgdGhlbiB3ZSBhcmUgZG9uZVxuXG4gICAgICAgICAgaWYgKGJhc2VQYXRoLm5ld1BvcyArIDEgPj0gbmV3TGVuICYmIF9vbGRQb3MgKyAxID49IG9sZExlbikge1xuICAgICAgICAgICAgcmV0dXJuIGRvbmUoYnVpbGRWYWx1ZXMoc2VsZiwgYmFzZVBhdGguY29tcG9uZW50cywgbmV3U3RyaW5nLCBvbGRTdHJpbmcsIHNlbGYudXNlTG9uZ2VzdFRva2VuKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSB0cmFjayB0aGlzIHBhdGggYXMgYSBwb3RlbnRpYWwgY2FuZGlkYXRlIGFuZCBjb250aW51ZS5cbiAgICAgICAgICAgIGJlc3RQYXRoW2RpYWdvbmFsUGF0aF0gPSBiYXNlUGF0aDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBlZGl0TGVuZ3RoKys7XG4gICAgICB9IC8vIFBlcmZvcm1zIHRoZSBsZW5ndGggb2YgZWRpdCBpdGVyYXRpb24uIElzIGEgYml0IGZ1Z2x5IGFzIHRoaXMgaGFzIHRvIHN1cHBvcnQgdGhlXG4gICAgICAvLyBzeW5jIGFuZCBhc3luYyBtb2RlIHdoaWNoIGlzIG5ldmVyIGZ1bi4gTG9vcHMgb3ZlciBleGVjRWRpdExlbmd0aCB1bnRpbCBhIHZhbHVlXG4gICAgICAvLyBpcyBwcm9kdWNlZC5cblxuXG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgKGZ1bmN0aW9uIGV4ZWMoKSB7XG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBUaGlzIHNob3VsZCBub3QgaGFwcGVuLCBidXQgd2Ugd2FudCB0byBiZSBzYWZlLlxuXG4gICAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgICAgICAgaWYgKGVkaXRMZW5ndGggPiBtYXhFZGl0TGVuZ3RoKSB7XG4gICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjaygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWV4ZWNFZGl0TGVuZ3RoKCkpIHtcbiAgICAgICAgICAgICAgZXhlYygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIDApO1xuICAgICAgICB9KSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2hpbGUgKGVkaXRMZW5ndGggPD0gbWF4RWRpdExlbmd0aCkge1xuICAgICAgICAgIHZhciByZXQgPSBleGVjRWRpdExlbmd0aCgpO1xuXG4gICAgICAgICAgaWYgKHJldCkge1xuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHB1c2hDb21wb25lbnQ6IGZ1bmN0aW9uIHB1c2hDb21wb25lbnQoY29tcG9uZW50cywgYWRkZWQsIHJlbW92ZWQpIHtcbiAgICAgIHZhciBsYXN0ID0gY29tcG9uZW50c1tjb21wb25lbnRzLmxlbmd0aCAtIDFdO1xuXG4gICAgICBpZiAobGFzdCAmJiBsYXN0LmFkZGVkID09PSBhZGRlZCAmJiBsYXN0LnJlbW92ZWQgPT09IHJlbW92ZWQpIHtcbiAgICAgICAgLy8gV2UgbmVlZCB0byBjbG9uZSBoZXJlIGFzIHRoZSBjb21wb25lbnQgY2xvbmUgb3BlcmF0aW9uIGlzIGp1c3RcbiAgICAgICAgLy8gYXMgc2hhbGxvdyBhcnJheSBjbG9uZVxuICAgICAgICBjb21wb25lbnRzW2NvbXBvbmVudHMubGVuZ3RoIC0gMV0gPSB7XG4gICAgICAgICAgY291bnQ6IGxhc3QuY291bnQgKyAxLFxuICAgICAgICAgIGFkZGVkOiBhZGRlZCxcbiAgICAgICAgICByZW1vdmVkOiByZW1vdmVkXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb21wb25lbnRzLnB1c2goe1xuICAgICAgICAgIGNvdW50OiAxLFxuICAgICAgICAgIGFkZGVkOiBhZGRlZCxcbiAgICAgICAgICByZW1vdmVkOiByZW1vdmVkXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgZXh0cmFjdENvbW1vbjogZnVuY3Rpb24gZXh0cmFjdENvbW1vbihiYXNlUGF0aCwgbmV3U3RyaW5nLCBvbGRTdHJpbmcsIGRpYWdvbmFsUGF0aCkge1xuICAgICAgdmFyIG5ld0xlbiA9IG5ld1N0cmluZy5sZW5ndGgsXG4gICAgICAgICAgb2xkTGVuID0gb2xkU3RyaW5nLmxlbmd0aCxcbiAgICAgICAgICBuZXdQb3MgPSBiYXNlUGF0aC5uZXdQb3MsXG4gICAgICAgICAgb2xkUG9zID0gbmV3UG9zIC0gZGlhZ29uYWxQYXRoLFxuICAgICAgICAgIGNvbW1vbkNvdW50ID0gMDtcblxuICAgICAgd2hpbGUgKG5ld1BvcyArIDEgPCBuZXdMZW4gJiYgb2xkUG9zICsgMSA8IG9sZExlbiAmJiB0aGlzLmVxdWFscyhuZXdTdHJpbmdbbmV3UG9zICsgMV0sIG9sZFN0cmluZ1tvbGRQb3MgKyAxXSkpIHtcbiAgICAgICAgbmV3UG9zKys7XG4gICAgICAgIG9sZFBvcysrO1xuICAgICAgICBjb21tb25Db3VudCsrO1xuICAgICAgfVxuXG4gICAgICBpZiAoY29tbW9uQ291bnQpIHtcbiAgICAgICAgYmFzZVBhdGguY29tcG9uZW50cy5wdXNoKHtcbiAgICAgICAgICBjb3VudDogY29tbW9uQ291bnRcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGJhc2VQYXRoLm5ld1BvcyA9IG5ld1BvcztcbiAgICAgIHJldHVybiBvbGRQb3M7XG4gICAgfSxcbiAgICBlcXVhbHM6IGZ1bmN0aW9uIGVxdWFscyhsZWZ0LCByaWdodCkge1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5jb21wYXJhdG9yKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY29tcGFyYXRvcihsZWZ0LCByaWdodCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbGVmdCA9PT0gcmlnaHQgfHwgdGhpcy5vcHRpb25zLmlnbm9yZUNhc2UgJiYgbGVmdC50b0xvd2VyQ2FzZSgpID09PSByaWdodC50b0xvd2VyQ2FzZSgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgcmVtb3ZlRW1wdHk6IGZ1bmN0aW9uIHJlbW92ZUVtcHR5KGFycmF5KSB7XG4gICAgICB2YXIgcmV0ID0gW107XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGFycmF5W2ldKSB7XG4gICAgICAgICAgcmV0LnB1c2goYXJyYXlbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXQ7XG4gICAgfSxcbiAgICBjYXN0SW5wdXQ6IGZ1bmN0aW9uIGNhc3RJbnB1dCh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sXG4gICAgdG9rZW5pemU6IGZ1bmN0aW9uIHRva2VuaXplKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUuc3BsaXQoJycpO1xuICAgIH0sXG4gICAgam9pbjogZnVuY3Rpb24gam9pbihjaGFycykge1xuICAgICAgcmV0dXJuIGNoYXJzLmpvaW4oJycpO1xuICAgIH1cbiAgfTtcblxuICBmdW5jdGlvbiBidWlsZFZhbHVlcyhkaWZmLCBjb21wb25lbnRzLCBuZXdTdHJpbmcsIG9sZFN0cmluZywgdXNlTG9uZ2VzdFRva2VuKSB7XG4gICAgdmFyIGNvbXBvbmVudFBvcyA9IDAsXG4gICAgICAgIGNvbXBvbmVudExlbiA9IGNvbXBvbmVudHMubGVuZ3RoLFxuICAgICAgICBuZXdQb3MgPSAwLFxuICAgICAgICBvbGRQb3MgPSAwO1xuXG4gICAgZm9yICg7IGNvbXBvbmVudFBvcyA8IGNvbXBvbmVudExlbjsgY29tcG9uZW50UG9zKyspIHtcbiAgICAgIHZhciBjb21wb25lbnQgPSBjb21wb25lbnRzW2NvbXBvbmVudFBvc107XG5cbiAgICAgIGlmICghY29tcG9uZW50LnJlbW92ZWQpIHtcbiAgICAgICAgaWYgKCFjb21wb25lbnQuYWRkZWQgJiYgdXNlTG9uZ2VzdFRva2VuKSB7XG4gICAgICAgICAgdmFyIHZhbHVlID0gbmV3U3RyaW5nLnNsaWNlKG5ld1BvcywgbmV3UG9zICsgY29tcG9uZW50LmNvdW50KTtcbiAgICAgICAgICB2YWx1ZSA9IHZhbHVlLm1hcChmdW5jdGlvbiAodmFsdWUsIGkpIHtcbiAgICAgICAgICAgIHZhciBvbGRWYWx1ZSA9IG9sZFN0cmluZ1tvbGRQb3MgKyBpXTtcbiAgICAgICAgICAgIHJldHVybiBvbGRWYWx1ZS5sZW5ndGggPiB2YWx1ZS5sZW5ndGggPyBvbGRWYWx1ZSA6IHZhbHVlO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNvbXBvbmVudC52YWx1ZSA9IGRpZmYuam9pbih2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29tcG9uZW50LnZhbHVlID0gZGlmZi5qb2luKG5ld1N0cmluZy5zbGljZShuZXdQb3MsIG5ld1BvcyArIGNvbXBvbmVudC5jb3VudCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgbmV3UG9zICs9IGNvbXBvbmVudC5jb3VudDsgLy8gQ29tbW9uIGNhc2VcblxuICAgICAgICBpZiAoIWNvbXBvbmVudC5hZGRlZCkge1xuICAgICAgICAgIG9sZFBvcyArPSBjb21wb25lbnQuY291bnQ7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXBvbmVudC52YWx1ZSA9IGRpZmYuam9pbihvbGRTdHJpbmcuc2xpY2Uob2xkUG9zLCBvbGRQb3MgKyBjb21wb25lbnQuY291bnQpKTtcbiAgICAgICAgb2xkUG9zICs9IGNvbXBvbmVudC5jb3VudDsgLy8gUmV2ZXJzZSBhZGQgYW5kIHJlbW92ZSBzbyByZW1vdmVzIGFyZSBvdXRwdXQgZmlyc3QgdG8gbWF0Y2ggY29tbW9uIGNvbnZlbnRpb25cbiAgICAgICAgLy8gVGhlIGRpZmZpbmcgYWxnb3JpdGhtIGlzIHRpZWQgdG8gYWRkIHRoZW4gcmVtb3ZlIG91dHB1dCBhbmQgdGhpcyBpcyB0aGUgc2ltcGxlc3RcbiAgICAgICAgLy8gcm91dGUgdG8gZ2V0IHRoZSBkZXNpcmVkIG91dHB1dCB3aXRoIG1pbmltYWwgb3ZlcmhlYWQuXG5cbiAgICAgICAgaWYgKGNvbXBvbmVudFBvcyAmJiBjb21wb25lbnRzW2NvbXBvbmVudFBvcyAtIDFdLmFkZGVkKSB7XG4gICAgICAgICAgdmFyIHRtcCA9IGNvbXBvbmVudHNbY29tcG9uZW50UG9zIC0gMV07XG4gICAgICAgICAgY29tcG9uZW50c1tjb21wb25lbnRQb3MgLSAxXSA9IGNvbXBvbmVudHNbY29tcG9uZW50UG9zXTtcbiAgICAgICAgICBjb21wb25lbnRzW2NvbXBvbmVudFBvc10gPSB0bXA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IC8vIFNwZWNpYWwgY2FzZSBoYW5kbGUgZm9yIHdoZW4gb25lIHRlcm1pbmFsIGlzIGlnbm9yZWQgKGkuZS4gd2hpdGVzcGFjZSkuXG4gICAgLy8gRm9yIHRoaXMgY2FzZSB3ZSBtZXJnZSB0aGUgdGVybWluYWwgaW50byB0aGUgcHJpb3Igc3RyaW5nIGFuZCBkcm9wIHRoZSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBpcyBvbmx5IGF2YWlsYWJsZSBmb3Igc3RyaW5nIG1vZGUuXG5cblxuICAgIHZhciBsYXN0Q29tcG9uZW50ID0gY29tcG9uZW50c1tjb21wb25lbnRMZW4gLSAxXTtcblxuICAgIGlmIChjb21wb25lbnRMZW4gPiAxICYmIHR5cGVvZiBsYXN0Q29tcG9uZW50LnZhbHVlID09PSAnc3RyaW5nJyAmJiAobGFzdENvbXBvbmVudC5hZGRlZCB8fCBsYXN0Q29tcG9uZW50LnJlbW92ZWQpICYmIGRpZmYuZXF1YWxzKCcnLCBsYXN0Q29tcG9uZW50LnZhbHVlKSkge1xuICAgICAgY29tcG9uZW50c1tjb21wb25lbnRMZW4gLSAyXS52YWx1ZSArPSBsYXN0Q29tcG9uZW50LnZhbHVlO1xuICAgICAgY29tcG9uZW50cy5wb3AoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50cztcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsb25lUGF0aChwYXRoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5ld1BvczogcGF0aC5uZXdQb3MsXG4gICAgICBjb21wb25lbnRzOiBwYXRoLmNvbXBvbmVudHMuc2xpY2UoMClcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNoYXJhY3RlckRpZmYgPSBuZXcgRGlmZigpO1xuICBmdW5jdGlvbiBkaWZmQ2hhcnMob2xkU3RyLCBuZXdTdHIsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gY2hhcmFjdGVyRGlmZi5kaWZmKG9sZFN0ciwgbmV3U3RyLCBvcHRpb25zKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdlbmVyYXRlT3B0aW9ucyhvcHRpb25zLCBkZWZhdWx0cykge1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZGVmYXVsdHMuY2FsbGJhY2sgPSBvcHRpb25zO1xuICAgIH0gZWxzZSBpZiAob3B0aW9ucykge1xuICAgICAgZm9yICh2YXIgbmFtZSBpbiBvcHRpb25zKSB7XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICAgIGlmIChvcHRpb25zLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgICAgZGVmYXVsdHNbbmFtZV0gPSBvcHRpb25zW25hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlZmF1bHRzO1xuICB9XG5cbiAgLy9cbiAgLy8gUmFuZ2VzIGFuZCBleGNlcHRpb25zOlxuICAvLyBMYXRpbi0xIFN1cHBsZW1lbnQsIDAwODDigJMwMEZGXG4gIC8vICAtIFUrMDBENyAgw5cgTXVsdGlwbGljYXRpb24gc2lnblxuICAvLyAgLSBVKzAwRjcgIMO3IERpdmlzaW9uIHNpZ25cbiAgLy8gTGF0aW4gRXh0ZW5kZWQtQSwgMDEwMOKAkzAxN0ZcbiAgLy8gTGF0aW4gRXh0ZW5kZWQtQiwgMDE4MOKAkzAyNEZcbiAgLy8gSVBBIEV4dGVuc2lvbnMsIDAyNTDigJMwMkFGXG4gIC8vIFNwYWNpbmcgTW9kaWZpZXIgTGV0dGVycywgMDJCMOKAkzAyRkZcbiAgLy8gIC0gVSswMkM3ICDLhyAmIzcxMTsgIENhcm9uXG4gIC8vICAtIFUrMDJEOCAgy5ggJiM3Mjg7ICBCcmV2ZVxuICAvLyAgLSBVKzAyRDkgIMuZICYjNzI5OyAgRG90IEFib3ZlXG4gIC8vICAtIFUrMDJEQSAgy5ogJiM3MzA7ICBSaW5nIEFib3ZlXG4gIC8vICAtIFUrMDJEQiAgy5sgJiM3MzE7ICBPZ29uZWtcbiAgLy8gIC0gVSswMkRDICDLnCAmIzczMjsgIFNtYWxsIFRpbGRlXG4gIC8vICAtIFUrMDJERCAgy50gJiM3MzM7ICBEb3VibGUgQWN1dGUgQWNjZW50XG4gIC8vIExhdGluIEV4dGVuZGVkIEFkZGl0aW9uYWwsIDFFMDDigJMxRUZGXG5cbiAgdmFyIGV4dGVuZGVkV29yZENoYXJzID0gL15bQS1aYS16XFx4QzAtXFx1MDJDNlxcdTAyQzgtXFx1MDJEN1xcdTAyREUtXFx1MDJGRlxcdTFFMDAtXFx1MUVGRl0rJC87XG4gIHZhciByZVdoaXRlc3BhY2UgPSAvXFxTLztcbiAgdmFyIHdvcmREaWZmID0gbmV3IERpZmYoKTtcblxuICB3b3JkRGlmZi5lcXVhbHMgPSBmdW5jdGlvbiAobGVmdCwgcmlnaHQpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmlnbm9yZUNhc2UpIHtcbiAgICAgIGxlZnQgPSBsZWZ0LnRvTG93ZXJDYXNlKCk7XG4gICAgICByaWdodCA9IHJpZ2h0LnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxlZnQgPT09IHJpZ2h0IHx8IHRoaXMub3B0aW9ucy5pZ25vcmVXaGl0ZXNwYWNlICYmICFyZVdoaXRlc3BhY2UudGVzdChsZWZ0KSAmJiAhcmVXaGl0ZXNwYWNlLnRlc3QocmlnaHQpO1xuICB9O1xuXG4gIHdvcmREaWZmLnRva2VuaXplID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgLy8gQWxsIHdoaXRlc3BhY2Ugc3ltYm9scyBleGNlcHQgbmV3bGluZSBncm91cCBpbnRvIG9uZSB0b2tlbiwgZWFjaCBuZXdsaW5lIC0gaW4gc2VwYXJhdGUgdG9rZW5cbiAgICB2YXIgdG9rZW5zID0gdmFsdWUuc3BsaXQoLyhbXlxcU1xcclxcbl0rfFsoKVtcXF17fSdcIlxcclxcbl18XFxiKS8pOyAvLyBKb2luIHRoZSBib3VuZGFyeSBzcGxpdHMgdGhhdCB3ZSBkbyBub3QgY29uc2lkZXIgdG8gYmUgYm91bmRhcmllcy4gVGhpcyBpcyBwcmltYXJpbHkgdGhlIGV4dGVuZGVkIExhdGluIGNoYXJhY3RlciBzZXQuXG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIC8vIElmIHdlIGhhdmUgYW4gZW1wdHkgc3RyaW5nIGluIHRoZSBuZXh0IGZpZWxkIGFuZCB3ZSBoYXZlIG9ubHkgd29yZCBjaGFycyBiZWZvcmUgYW5kIGFmdGVyLCBtZXJnZVxuICAgICAgaWYgKCF0b2tlbnNbaSArIDFdICYmIHRva2Vuc1tpICsgMl0gJiYgZXh0ZW5kZWRXb3JkQ2hhcnMudGVzdCh0b2tlbnNbaV0pICYmIGV4dGVuZGVkV29yZENoYXJzLnRlc3QodG9rZW5zW2kgKyAyXSkpIHtcbiAgICAgICAgdG9rZW5zW2ldICs9IHRva2Vuc1tpICsgMl07XG4gICAgICAgIHRva2Vucy5zcGxpY2UoaSArIDEsIDIpO1xuICAgICAgICBpLS07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRva2VucztcbiAgfTtcblxuICBmdW5jdGlvbiBkaWZmV29yZHMob2xkU3RyLCBuZXdTdHIsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gZ2VuZXJhdGVPcHRpb25zKG9wdGlvbnMsIHtcbiAgICAgIGlnbm9yZVdoaXRlc3BhY2U6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gd29yZERpZmYuZGlmZihvbGRTdHIsIG5ld1N0ciwgb3B0aW9ucyk7XG4gIH1cbiAgZnVuY3Rpb24gZGlmZldvcmRzV2l0aFNwYWNlKG9sZFN0ciwgbmV3U3RyLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHdvcmREaWZmLmRpZmYob2xkU3RyLCBuZXdTdHIsIG9wdGlvbnMpO1xuICB9XG5cbiAgdmFyIGxpbmVEaWZmID0gbmV3IERpZmYoKTtcblxuICBsaW5lRGlmZi50b2tlbml6ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHZhciByZXRMaW5lcyA9IFtdLFxuICAgICAgICBsaW5lc0FuZE5ld2xpbmVzID0gdmFsdWUuc3BsaXQoLyhcXG58XFxyXFxuKS8pOyAvLyBJZ25vcmUgdGhlIGZpbmFsIGVtcHR5IHRva2VuIHRoYXQgb2NjdXJzIGlmIHRoZSBzdHJpbmcgZW5kcyB3aXRoIGEgbmV3IGxpbmVcblxuICAgIGlmICghbGluZXNBbmROZXdsaW5lc1tsaW5lc0FuZE5ld2xpbmVzLmxlbmd0aCAtIDFdKSB7XG4gICAgICBsaW5lc0FuZE5ld2xpbmVzLnBvcCgpO1xuICAgIH0gLy8gTWVyZ2UgdGhlIGNvbnRlbnQgYW5kIGxpbmUgc2VwYXJhdG9ycyBpbnRvIHNpbmdsZSB0b2tlbnNcblxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaW5lc0FuZE5ld2xpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgbGluZSA9IGxpbmVzQW5kTmV3bGluZXNbaV07XG5cbiAgICAgIGlmIChpICUgMiAmJiAhdGhpcy5vcHRpb25zLm5ld2xpbmVJc1Rva2VuKSB7XG4gICAgICAgIHJldExpbmVzW3JldExpbmVzLmxlbmd0aCAtIDFdICs9IGxpbmU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmlnbm9yZVdoaXRlc3BhY2UpIHtcbiAgICAgICAgICBsaW5lID0gbGluZS50cmltKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXRMaW5lcy5wdXNoKGxpbmUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXRMaW5lcztcbiAgfTtcblxuICBmdW5jdGlvbiBkaWZmTGluZXMob2xkU3RyLCBuZXdTdHIsIGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIGxpbmVEaWZmLmRpZmYob2xkU3RyLCBuZXdTdHIsIGNhbGxiYWNrKTtcbiAgfVxuICBmdW5jdGlvbiBkaWZmVHJpbW1lZExpbmVzKG9sZFN0ciwgbmV3U3RyLCBjYWxsYmFjaykge1xuICAgIHZhciBvcHRpb25zID0gZ2VuZXJhdGVPcHRpb25zKGNhbGxiYWNrLCB7XG4gICAgICBpZ25vcmVXaGl0ZXNwYWNlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIGxpbmVEaWZmLmRpZmYob2xkU3RyLCBuZXdTdHIsIG9wdGlvbnMpO1xuICB9XG5cbiAgdmFyIHNlbnRlbmNlRGlmZiA9IG5ldyBEaWZmKCk7XG5cbiAgc2VudGVuY2VEaWZmLnRva2VuaXplID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLnNwbGl0KC8oXFxTLis/Wy4hP10pKD89XFxzK3wkKS8pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGRpZmZTZW50ZW5jZXMob2xkU3RyLCBuZXdTdHIsIGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHNlbnRlbmNlRGlmZi5kaWZmKG9sZFN0ciwgbmV3U3RyLCBjYWxsYmFjayk7XG4gIH1cblxuICB2YXIgY3NzRGlmZiA9IG5ldyBEaWZmKCk7XG5cbiAgY3NzRGlmZi50b2tlbml6ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5zcGxpdCgvKFt7fTo7LF18XFxzKykvKTtcbiAgfTtcblxuICBmdW5jdGlvbiBkaWZmQ3NzKG9sZFN0ciwgbmV3U3RyLCBjYWxsYmFjaykge1xuICAgIHJldHVybiBjc3NEaWZmLmRpZmYob2xkU3RyLCBuZXdTdHIsIGNhbGxiYWNrKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gICAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgICBfdHlwZW9mID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIF90eXBlb2YgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3R5cGVvZihvYmopO1xuICB9XG5cbiAgZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICAgIHJldHVybiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5KGFycikgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgX25vbkl0ZXJhYmxlU3ByZWFkKCk7XG4gIH1cblxuICBmdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KGFycik7XG4gIH1cblxuICBmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgICBpZiAoIW8pIHJldHVybjtcbiAgICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICAgIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICAgIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gICAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIGFycjJbaV0gPSBhcnJbaV07XG5cbiAgICByZXR1cm4gYXJyMjtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbiAgfVxuXG4gIHZhciBvYmplY3RQcm90b3R5cGVUb1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG4gIHZhciBqc29uRGlmZiA9IG5ldyBEaWZmKCk7IC8vIERpc2NyaW1pbmF0ZSBiZXR3ZWVuIHR3byBsaW5lcyBvZiBwcmV0dHktcHJpbnRlZCwgc2VyaWFsaXplZCBKU09OIHdoZXJlIG9uZSBvZiB0aGVtIGhhcyBhXG4gIC8vIGRhbmdsaW5nIGNvbW1hIGFuZCB0aGUgb3RoZXIgZG9lc24ndC4gVHVybnMgb3V0IGluY2x1ZGluZyB0aGUgZGFuZ2xpbmcgY29tbWEgeWllbGRzIHRoZSBuaWNlc3Qgb3V0cHV0OlxuXG4gIGpzb25EaWZmLnVzZUxvbmdlc3RUb2tlbiA9IHRydWU7XG4gIGpzb25EaWZmLnRva2VuaXplID0gbGluZURpZmYudG9rZW5pemU7XG5cbiAganNvbkRpZmYuY2FzdElucHV0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgdmFyIF90aGlzJG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgIHVuZGVmaW5lZFJlcGxhY2VtZW50ID0gX3RoaXMkb3B0aW9ucy51bmRlZmluZWRSZXBsYWNlbWVudCxcbiAgICAgICAgX3RoaXMkb3B0aW9ucyRzdHJpbmdpID0gX3RoaXMkb3B0aW9ucy5zdHJpbmdpZnlSZXBsYWNlcixcbiAgICAgICAgc3RyaW5naWZ5UmVwbGFjZXIgPSBfdGhpcyRvcHRpb25zJHN0cmluZ2kgPT09IHZvaWQgMCA/IGZ1bmN0aW9uIChrLCB2KSB7XG4gICAgICByZXR1cm4gdHlwZW9mIHYgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkUmVwbGFjZW1lbnQgOiB2O1xuICAgIH0gOiBfdGhpcyRvcHRpb25zJHN0cmluZ2k7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyB2YWx1ZSA6IEpTT04uc3RyaW5naWZ5KGNhbm9uaWNhbGl6ZSh2YWx1ZSwgbnVsbCwgbnVsbCwgc3RyaW5naWZ5UmVwbGFjZXIpLCBzdHJpbmdpZnlSZXBsYWNlciwgJyAgJyk7XG4gIH07XG5cbiAganNvbkRpZmYuZXF1YWxzID0gZnVuY3Rpb24gKGxlZnQsIHJpZ2h0KSB7XG4gICAgcmV0dXJuIERpZmYucHJvdG90eXBlLmVxdWFscy5jYWxsKGpzb25EaWZmLCBsZWZ0LnJlcGxhY2UoLywoW1xcclxcbl0pL2csICckMScpLCByaWdodC5yZXBsYWNlKC8sKFtcXHJcXG5dKS9nLCAnJDEnKSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gZGlmZkpzb24ob2xkT2JqLCBuZXdPYmosIG9wdGlvbnMpIHtcbiAgICByZXR1cm4ganNvbkRpZmYuZGlmZihvbGRPYmosIG5ld09iaiwgb3B0aW9ucyk7XG4gIH0gLy8gVGhpcyBmdW5jdGlvbiBoYW5kbGVzIHRoZSBwcmVzZW5jZSBvZiBjaXJjdWxhciByZWZlcmVuY2VzIGJ5IGJhaWxpbmcgb3V0IHdoZW4gZW5jb3VudGVyaW5nIGFuXG4gIC8vIG9iamVjdCB0aGF0IGlzIGFscmVhZHkgb24gdGhlIFwic3RhY2tcIiBvZiBpdGVtcyBiZWluZyBwcm9jZXNzZWQuIEFjY2VwdHMgYW4gb3B0aW9uYWwgcmVwbGFjZXJcblxuICBmdW5jdGlvbiBjYW5vbmljYWxpemUob2JqLCBzdGFjaywgcmVwbGFjZW1lbnRTdGFjaywgcmVwbGFjZXIsIGtleSkge1xuICAgIHN0YWNrID0gc3RhY2sgfHwgW107XG4gICAgcmVwbGFjZW1lbnRTdGFjayA9IHJlcGxhY2VtZW50U3RhY2sgfHwgW107XG5cbiAgICBpZiAocmVwbGFjZXIpIHtcbiAgICAgIG9iaiA9IHJlcGxhY2VyKGtleSwgb2JqKTtcbiAgICB9XG5cbiAgICB2YXIgaTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBzdGFjay5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHN0YWNrW2ldID09PSBvYmopIHtcbiAgICAgICAgcmV0dXJuIHJlcGxhY2VtZW50U3RhY2tbaV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGNhbm9uaWNhbGl6ZWRPYmo7XG5cbiAgICBpZiAoJ1tvYmplY3QgQXJyYXldJyA9PT0gb2JqZWN0UHJvdG90eXBlVG9TdHJpbmcuY2FsbChvYmopKSB7XG4gICAgICBzdGFjay5wdXNoKG9iaik7XG4gICAgICBjYW5vbmljYWxpemVkT2JqID0gbmV3IEFycmF5KG9iai5sZW5ndGgpO1xuICAgICAgcmVwbGFjZW1lbnRTdGFjay5wdXNoKGNhbm9uaWNhbGl6ZWRPYmopO1xuXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgb2JqLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNhbm9uaWNhbGl6ZWRPYmpbaV0gPSBjYW5vbmljYWxpemUob2JqW2ldLCBzdGFjaywgcmVwbGFjZW1lbnRTdGFjaywgcmVwbGFjZXIsIGtleSk7XG4gICAgICB9XG5cbiAgICAgIHN0YWNrLnBvcCgpO1xuICAgICAgcmVwbGFjZW1lbnRTdGFjay5wb3AoKTtcbiAgICAgIHJldHVybiBjYW5vbmljYWxpemVkT2JqO1xuICAgIH1cblxuICAgIGlmIChvYmogJiYgb2JqLnRvSlNPTikge1xuICAgICAgb2JqID0gb2JqLnRvSlNPTigpO1xuICAgIH1cblxuICAgIGlmIChfdHlwZW9mKG9iaikgPT09ICdvYmplY3QnICYmIG9iaiAhPT0gbnVsbCkge1xuICAgICAgc3RhY2sucHVzaChvYmopO1xuICAgICAgY2Fub25pY2FsaXplZE9iaiA9IHt9O1xuICAgICAgcmVwbGFjZW1lbnRTdGFjay5wdXNoKGNhbm9uaWNhbGl6ZWRPYmopO1xuXG4gICAgICB2YXIgc29ydGVkS2V5cyA9IFtdLFxuICAgICAgICAgIF9rZXk7XG5cbiAgICAgIGZvciAoX2tleSBpbiBvYmopIHtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShfa2V5KSkge1xuICAgICAgICAgIHNvcnRlZEtleXMucHVzaChfa2V5KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBzb3J0ZWRLZXlzLnNvcnQoKTtcblxuICAgICAgZm9yIChpID0gMDsgaSA8IHNvcnRlZEtleXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgX2tleSA9IHNvcnRlZEtleXNbaV07XG4gICAgICAgIGNhbm9uaWNhbGl6ZWRPYmpbX2tleV0gPSBjYW5vbmljYWxpemUob2JqW19rZXldLCBzdGFjaywgcmVwbGFjZW1lbnRTdGFjaywgcmVwbGFjZXIsIF9rZXkpO1xuICAgICAgfVxuXG4gICAgICBzdGFjay5wb3AoKTtcbiAgICAgIHJlcGxhY2VtZW50U3RhY2sucG9wKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbm9uaWNhbGl6ZWRPYmogPSBvYmo7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhbm9uaWNhbGl6ZWRPYmo7XG4gIH1cblxuICB2YXIgYXJyYXlEaWZmID0gbmV3IERpZmYoKTtcblxuICBhcnJheURpZmYudG9rZW5pemUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUuc2xpY2UoKTtcbiAgfTtcblxuICBhcnJheURpZmYuam9pbiA9IGFycmF5RGlmZi5yZW1vdmVFbXB0eSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcblxuICBmdW5jdGlvbiBkaWZmQXJyYXlzKG9sZEFyciwgbmV3QXJyLCBjYWxsYmFjaykge1xuICAgIHJldHVybiBhcnJheURpZmYuZGlmZihvbGRBcnIsIG5ld0FyciwgY2FsbGJhY2spO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VQYXRjaCh1bmlEaWZmKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciBkaWZmc3RyID0gdW5pRGlmZi5zcGxpdCgvXFxyXFxufFtcXG5cXHZcXGZcXHJcXHg4NV0vKSxcbiAgICAgICAgZGVsaW1pdGVycyA9IHVuaURpZmYubWF0Y2goL1xcclxcbnxbXFxuXFx2XFxmXFxyXFx4ODVdL2cpIHx8IFtdLFxuICAgICAgICBsaXN0ID0gW10sXG4gICAgICAgIGkgPSAwO1xuXG4gICAgZnVuY3Rpb24gcGFyc2VJbmRleCgpIHtcbiAgICAgIHZhciBpbmRleCA9IHt9O1xuICAgICAgbGlzdC5wdXNoKGluZGV4KTsgLy8gUGFyc2UgZGlmZiBtZXRhZGF0YVxuXG4gICAgICB3aGlsZSAoaSA8IGRpZmZzdHIubGVuZ3RoKSB7XG4gICAgICAgIHZhciBsaW5lID0gZGlmZnN0cltpXTsgLy8gRmlsZSBoZWFkZXIgZm91bmQsIGVuZCBwYXJzaW5nIGRpZmYgbWV0YWRhdGFcblxuICAgICAgICBpZiAoL14oXFwtXFwtXFwtfFxcK1xcK1xcK3xAQClcXHMvLnRlc3QobGluZSkpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfSAvLyBEaWZmIGluZGV4XG5cblxuICAgICAgICB2YXIgaGVhZGVyID0gL14oPzpJbmRleDp8ZGlmZig/OiAtciBcXHcrKSspXFxzKyguKz8pXFxzKiQvLmV4ZWMobGluZSk7XG5cbiAgICAgICAgaWYgKGhlYWRlcikge1xuICAgICAgICAgIGluZGV4LmluZGV4ID0gaGVhZGVyWzFdO1xuICAgICAgICB9XG5cbiAgICAgICAgaSsrO1xuICAgICAgfSAvLyBQYXJzZSBmaWxlIGhlYWRlcnMgaWYgdGhleSBhcmUgZGVmaW5lZC4gVW5pZmllZCBkaWZmIHJlcXVpcmVzIHRoZW0sIGJ1dFxuICAgICAgLy8gdGhlcmUncyBubyB0ZWNobmljYWwgaXNzdWVzIHRvIGhhdmUgYW4gaXNvbGF0ZWQgaHVuayB3aXRob3V0IGZpbGUgaGVhZGVyXG5cblxuICAgICAgcGFyc2VGaWxlSGVhZGVyKGluZGV4KTtcbiAgICAgIHBhcnNlRmlsZUhlYWRlcihpbmRleCk7IC8vIFBhcnNlIGh1bmtzXG5cbiAgICAgIGluZGV4Lmh1bmtzID0gW107XG5cbiAgICAgIHdoaWxlIChpIDwgZGlmZnN0ci5sZW5ndGgpIHtcbiAgICAgICAgdmFyIF9saW5lID0gZGlmZnN0cltpXTtcblxuICAgICAgICBpZiAoL14oSW5kZXg6fGRpZmZ8XFwtXFwtXFwtfFxcK1xcK1xcKylcXHMvLnRlc3QoX2xpbmUpKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH0gZWxzZSBpZiAoL15AQC8udGVzdChfbGluZSkpIHtcbiAgICAgICAgICBpbmRleC5odW5rcy5wdXNoKHBhcnNlSHVuaygpKTtcbiAgICAgICAgfSBlbHNlIGlmIChfbGluZSAmJiBvcHRpb25zLnN0cmljdCkge1xuICAgICAgICAgIC8vIElnbm9yZSB1bmV4cGVjdGVkIGNvbnRlbnQgdW5sZXNzIGluIHN0cmljdCBtb2RlXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIGxpbmUgJyArIChpICsgMSkgKyAnICcgKyBKU09OLnN0cmluZ2lmeShfbGluZSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gLy8gUGFyc2VzIHRoZSAtLS0gYW5kICsrKyBoZWFkZXJzLCBpZiBub25lIGFyZSBmb3VuZCwgbm8gbGluZXNcbiAgICAvLyBhcmUgY29uc3VtZWQuXG5cblxuICAgIGZ1bmN0aW9uIHBhcnNlRmlsZUhlYWRlcihpbmRleCkge1xuICAgICAgdmFyIGZpbGVIZWFkZXIgPSAvXigtLS18XFwrXFwrXFwrKVxccysoLiopJC8uZXhlYyhkaWZmc3RyW2ldKTtcblxuICAgICAgaWYgKGZpbGVIZWFkZXIpIHtcbiAgICAgICAgdmFyIGtleVByZWZpeCA9IGZpbGVIZWFkZXJbMV0gPT09ICctLS0nID8gJ29sZCcgOiAnbmV3JztcbiAgICAgICAgdmFyIGRhdGEgPSBmaWxlSGVhZGVyWzJdLnNwbGl0KCdcXHQnLCAyKTtcbiAgICAgICAgdmFyIGZpbGVOYW1lID0gZGF0YVswXS5yZXBsYWNlKC9cXFxcXFxcXC9nLCAnXFxcXCcpO1xuXG4gICAgICAgIGlmICgvXlwiLipcIiQvLnRlc3QoZmlsZU5hbWUpKSB7XG4gICAgICAgICAgZmlsZU5hbWUgPSBmaWxlTmFtZS5zdWJzdHIoMSwgZmlsZU5hbWUubGVuZ3RoIC0gMik7XG4gICAgICAgIH1cblxuICAgICAgICBpbmRleFtrZXlQcmVmaXggKyAnRmlsZU5hbWUnXSA9IGZpbGVOYW1lO1xuICAgICAgICBpbmRleFtrZXlQcmVmaXggKyAnSGVhZGVyJ10gPSAoZGF0YVsxXSB8fCAnJykudHJpbSgpO1xuICAgICAgICBpKys7XG4gICAgICB9XG4gICAgfSAvLyBQYXJzZXMgYSBodW5rXG4gICAgLy8gVGhpcyBhc3N1bWVzIHRoYXQgd2UgYXJlIGF0IHRoZSBzdGFydCBvZiBhIGh1bmsuXG5cblxuICAgIGZ1bmN0aW9uIHBhcnNlSHVuaygpIHtcbiAgICAgIHZhciBjaHVua0hlYWRlckluZGV4ID0gaSxcbiAgICAgICAgICBjaHVua0hlYWRlckxpbmUgPSBkaWZmc3RyW2krK10sXG4gICAgICAgICAgY2h1bmtIZWFkZXIgPSBjaHVua0hlYWRlckxpbmUuc3BsaXQoL0BAIC0oXFxkKykoPzosKFxcZCspKT8gXFwrKFxcZCspKD86LChcXGQrKSk/IEBALyk7XG4gICAgICB2YXIgaHVuayA9IHtcbiAgICAgICAgb2xkU3RhcnQ6ICtjaHVua0hlYWRlclsxXSxcbiAgICAgICAgb2xkTGluZXM6IHR5cGVvZiBjaHVua0hlYWRlclsyXSA9PT0gJ3VuZGVmaW5lZCcgPyAxIDogK2NodW5rSGVhZGVyWzJdLFxuICAgICAgICBuZXdTdGFydDogK2NodW5rSGVhZGVyWzNdLFxuICAgICAgICBuZXdMaW5lczogdHlwZW9mIGNodW5rSGVhZGVyWzRdID09PSAndW5kZWZpbmVkJyA/IDEgOiArY2h1bmtIZWFkZXJbNF0sXG4gICAgICAgIGxpbmVzOiBbXSxcbiAgICAgICAgbGluZWRlbGltaXRlcnM6IFtdXG4gICAgICB9OyAvLyBVbmlmaWVkIERpZmYgRm9ybWF0IHF1aXJrOiBJZiB0aGUgY2h1bmsgc2l6ZSBpcyAwLFxuICAgICAgLy8gdGhlIGZpcnN0IG51bWJlciBpcyBvbmUgbG93ZXIgdGhhbiBvbmUgd291bGQgZXhwZWN0LlxuICAgICAgLy8gaHR0cHM6Ly93d3cuYXJ0aW1hLmNvbS93ZWJsb2dzL3ZpZXdwb3N0LmpzcD90aHJlYWQ9MTY0MjkzXG5cbiAgICAgIGlmIChodW5rLm9sZExpbmVzID09PSAwKSB7XG4gICAgICAgIGh1bmsub2xkU3RhcnQgKz0gMTtcbiAgICAgIH1cblxuICAgICAgaWYgKGh1bmsubmV3TGluZXMgPT09IDApIHtcbiAgICAgICAgaHVuay5uZXdTdGFydCArPSAxO1xuICAgICAgfVxuXG4gICAgICB2YXIgYWRkQ291bnQgPSAwLFxuICAgICAgICAgIHJlbW92ZUNvdW50ID0gMDtcblxuICAgICAgZm9yICg7IGkgPCBkaWZmc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIExpbmVzIHN0YXJ0aW5nIHdpdGggJy0tLScgY291bGQgYmUgbWlzdGFrZW4gZm9yIHRoZSBcInJlbW92ZSBsaW5lXCIgb3BlcmF0aW9uXG4gICAgICAgIC8vIEJ1dCB0aGV5IGNvdWxkIGJlIHRoZSBoZWFkZXIgZm9yIHRoZSBuZXh0IGZpbGUuIFRoZXJlZm9yZSBwcnVuZSBzdWNoIGNhc2VzIG91dC5cbiAgICAgICAgaWYgKGRpZmZzdHJbaV0uaW5kZXhPZignLS0tICcpID09PSAwICYmIGkgKyAyIDwgZGlmZnN0ci5sZW5ndGggJiYgZGlmZnN0cltpICsgMV0uaW5kZXhPZignKysrICcpID09PSAwICYmIGRpZmZzdHJbaSArIDJdLmluZGV4T2YoJ0BAJykgPT09IDApIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBvcGVyYXRpb24gPSBkaWZmc3RyW2ldLmxlbmd0aCA9PSAwICYmIGkgIT0gZGlmZnN0ci5sZW5ndGggLSAxID8gJyAnIDogZGlmZnN0cltpXVswXTtcblxuICAgICAgICBpZiAob3BlcmF0aW9uID09PSAnKycgfHwgb3BlcmF0aW9uID09PSAnLScgfHwgb3BlcmF0aW9uID09PSAnICcgfHwgb3BlcmF0aW9uID09PSAnXFxcXCcpIHtcbiAgICAgICAgICBodW5rLmxpbmVzLnB1c2goZGlmZnN0cltpXSk7XG4gICAgICAgICAgaHVuay5saW5lZGVsaW1pdGVycy5wdXNoKGRlbGltaXRlcnNbaV0gfHwgJ1xcbicpO1xuXG4gICAgICAgICAgaWYgKG9wZXJhdGlvbiA9PT0gJysnKSB7XG4gICAgICAgICAgICBhZGRDb3VudCsrO1xuICAgICAgICAgIH0gZWxzZSBpZiAob3BlcmF0aW9uID09PSAnLScpIHtcbiAgICAgICAgICAgIHJlbW92ZUNvdW50Kys7XG4gICAgICAgICAgfSBlbHNlIGlmIChvcGVyYXRpb24gPT09ICcgJykge1xuICAgICAgICAgICAgYWRkQ291bnQrKztcbiAgICAgICAgICAgIHJlbW92ZUNvdW50Kys7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IC8vIEhhbmRsZSB0aGUgZW1wdHkgYmxvY2sgY291bnQgY2FzZVxuXG5cbiAgICAgIGlmICghYWRkQ291bnQgJiYgaHVuay5uZXdMaW5lcyA9PT0gMSkge1xuICAgICAgICBodW5rLm5ld0xpbmVzID0gMDtcbiAgICAgIH1cblxuICAgICAgaWYgKCFyZW1vdmVDb3VudCAmJiBodW5rLm9sZExpbmVzID09PSAxKSB7XG4gICAgICAgIGh1bmsub2xkTGluZXMgPSAwO1xuICAgICAgfSAvLyBQZXJmb3JtIG9wdGlvbmFsIHNhbml0eSBjaGVja2luZ1xuXG5cbiAgICAgIGlmIChvcHRpb25zLnN0cmljdCkge1xuICAgICAgICBpZiAoYWRkQ291bnQgIT09IGh1bmsubmV3TGluZXMpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FkZGVkIGxpbmUgY291bnQgZGlkIG5vdCBtYXRjaCBmb3IgaHVuayBhdCBsaW5lICcgKyAoY2h1bmtIZWFkZXJJbmRleCArIDEpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZW1vdmVDb3VudCAhPT0gaHVuay5vbGRMaW5lcykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVtb3ZlZCBsaW5lIGNvdW50IGRpZCBub3QgbWF0Y2ggZm9yIGh1bmsgYXQgbGluZSAnICsgKGNodW5rSGVhZGVySW5kZXggKyAxKSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGh1bms7XG4gICAgfVxuXG4gICAgd2hpbGUgKGkgPCBkaWZmc3RyLmxlbmd0aCkge1xuICAgICAgcGFyc2VJbmRleCgpO1xuICAgIH1cblxuICAgIHJldHVybiBsaXN0O1xuICB9XG5cbiAgLy8gSXRlcmF0b3IgdGhhdCB0cmF2ZXJzZXMgaW4gdGhlIHJhbmdlIG9mIFttaW4sIG1heF0sIHN0ZXBwaW5nXG4gIC8vIGJ5IGRpc3RhbmNlIGZyb20gYSBnaXZlbiBzdGFydCBwb3NpdGlvbi4gSS5lLiBmb3IgWzAsIDRdLCB3aXRoXG4gIC8vIHN0YXJ0IG9mIDIsIHRoaXMgd2lsbCBpdGVyYXRlIDIsIDMsIDEsIDQsIDAuXG4gIGZ1bmN0aW9uIGRpc3RhbmNlSXRlcmF0b3IgKHN0YXJ0LCBtaW5MaW5lLCBtYXhMaW5lKSB7XG4gICAgdmFyIHdhbnRGb3J3YXJkID0gdHJ1ZSxcbiAgICAgICAgYmFja3dhcmRFeGhhdXN0ZWQgPSBmYWxzZSxcbiAgICAgICAgZm9yd2FyZEV4aGF1c3RlZCA9IGZhbHNlLFxuICAgICAgICBsb2NhbE9mZnNldCA9IDE7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGl0ZXJhdG9yKCkge1xuICAgICAgaWYgKHdhbnRGb3J3YXJkICYmICFmb3J3YXJkRXhoYXVzdGVkKSB7XG4gICAgICAgIGlmIChiYWNrd2FyZEV4aGF1c3RlZCkge1xuICAgICAgICAgIGxvY2FsT2Zmc2V0Kys7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2FudEZvcndhcmQgPSBmYWxzZTtcbiAgICAgICAgfSAvLyBDaGVjayBpZiB0cnlpbmcgdG8gZml0IGJleW9uZCB0ZXh0IGxlbmd0aCwgYW5kIGlmIG5vdCwgY2hlY2sgaXQgZml0c1xuICAgICAgICAvLyBhZnRlciBvZmZzZXQgbG9jYXRpb24gKG9yIGRlc2lyZWQgbG9jYXRpb24gb24gZmlyc3QgaXRlcmF0aW9uKVxuXG5cbiAgICAgICAgaWYgKHN0YXJ0ICsgbG9jYWxPZmZzZXQgPD0gbWF4TGluZSkge1xuICAgICAgICAgIHJldHVybiBsb2NhbE9mZnNldDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcndhcmRFeGhhdXN0ZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWJhY2t3YXJkRXhoYXVzdGVkKSB7XG4gICAgICAgIGlmICghZm9yd2FyZEV4aGF1c3RlZCkge1xuICAgICAgICAgIHdhbnRGb3J3YXJkID0gdHJ1ZTtcbiAgICAgICAgfSAvLyBDaGVjayBpZiB0cnlpbmcgdG8gZml0IGJlZm9yZSB0ZXh0IGJlZ2lubmluZywgYW5kIGlmIG5vdCwgY2hlY2sgaXQgZml0c1xuICAgICAgICAvLyBiZWZvcmUgb2Zmc2V0IGxvY2F0aW9uXG5cblxuICAgICAgICBpZiAobWluTGluZSA8PSBzdGFydCAtIGxvY2FsT2Zmc2V0KSB7XG4gICAgICAgICAgcmV0dXJuIC1sb2NhbE9mZnNldCsrO1xuICAgICAgICB9XG5cbiAgICAgICAgYmFja3dhcmRFeGhhdXN0ZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gaXRlcmF0b3IoKTtcbiAgICAgIH0gLy8gV2UgdHJpZWQgdG8gZml0IGh1bmsgYmVmb3JlIHRleHQgYmVnaW5uaW5nIGFuZCBiZXlvbmQgdGV4dCBsZW5ndGgsIHRoZW5cbiAgICAgIC8vIGh1bmsgY2FuJ3QgZml0IG9uIHRoZSB0ZXh0LiBSZXR1cm4gdW5kZWZpbmVkXG5cbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gYXBwbHlQYXRjaChzb3VyY2UsIHVuaURpZmYpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG5cbiAgICBpZiAodHlwZW9mIHVuaURpZmYgPT09ICdzdHJpbmcnKSB7XG4gICAgICB1bmlEaWZmID0gcGFyc2VQYXRjaCh1bmlEaWZmKTtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh1bmlEaWZmKSkge1xuICAgICAgaWYgKHVuaURpZmYubGVuZ3RoID4gMSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FwcGx5UGF0Y2ggb25seSB3b3JrcyB3aXRoIGEgc2luZ2xlIGlucHV0LicpO1xuICAgICAgfVxuXG4gICAgICB1bmlEaWZmID0gdW5pRGlmZlswXTtcbiAgICB9IC8vIEFwcGx5IHRoZSBkaWZmIHRvIHRoZSBpbnB1dFxuXG5cbiAgICB2YXIgbGluZXMgPSBzb3VyY2Uuc3BsaXQoL1xcclxcbnxbXFxuXFx2XFxmXFxyXFx4ODVdLyksXG4gICAgICAgIGRlbGltaXRlcnMgPSBzb3VyY2UubWF0Y2goL1xcclxcbnxbXFxuXFx2XFxmXFxyXFx4ODVdL2cpIHx8IFtdLFxuICAgICAgICBodW5rcyA9IHVuaURpZmYuaHVua3MsXG4gICAgICAgIGNvbXBhcmVMaW5lID0gb3B0aW9ucy5jb21wYXJlTGluZSB8fCBmdW5jdGlvbiAobGluZU51bWJlciwgbGluZSwgb3BlcmF0aW9uLCBwYXRjaENvbnRlbnQpIHtcbiAgICAgIHJldHVybiBsaW5lID09PSBwYXRjaENvbnRlbnQ7XG4gICAgfSxcbiAgICAgICAgZXJyb3JDb3VudCA9IDAsXG4gICAgICAgIGZ1enpGYWN0b3IgPSBvcHRpb25zLmZ1enpGYWN0b3IgfHwgMCxcbiAgICAgICAgbWluTGluZSA9IDAsXG4gICAgICAgIG9mZnNldCA9IDAsXG4gICAgICAgIHJlbW92ZUVPRk5MLFxuICAgICAgICBhZGRFT0ZOTDtcbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgdGhlIGh1bmsgZXhhY3RseSBmaXRzIG9uIHRoZSBwcm92aWRlZCBsb2NhdGlvblxuICAgICAqL1xuXG5cbiAgICBmdW5jdGlvbiBodW5rRml0cyhodW5rLCB0b1Bvcykge1xuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBodW5rLmxpbmVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHZhciBsaW5lID0gaHVuay5saW5lc1tqXSxcbiAgICAgICAgICAgIG9wZXJhdGlvbiA9IGxpbmUubGVuZ3RoID4gMCA/IGxpbmVbMF0gOiAnICcsXG4gICAgICAgICAgICBjb250ZW50ID0gbGluZS5sZW5ndGggPiAwID8gbGluZS5zdWJzdHIoMSkgOiBsaW5lO1xuXG4gICAgICAgIGlmIChvcGVyYXRpb24gPT09ICcgJyB8fCBvcGVyYXRpb24gPT09ICctJykge1xuICAgICAgICAgIC8vIENvbnRleHQgc2FuaXR5IGNoZWNrXG4gICAgICAgICAgaWYgKCFjb21wYXJlTGluZSh0b1BvcyArIDEsIGxpbmVzW3RvUG9zXSwgb3BlcmF0aW9uLCBjb250ZW50KSkge1xuICAgICAgICAgICAgZXJyb3JDb3VudCsrO1xuXG4gICAgICAgICAgICBpZiAoZXJyb3JDb3VudCA+IGZ1enpGYWN0b3IpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRvUG9zKys7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSAvLyBTZWFyY2ggYmVzdCBmaXQgb2Zmc2V0cyBmb3IgZWFjaCBodW5rIGJhc2VkIG9uIHRoZSBwcmV2aW91cyBvbmVzXG5cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaHVua3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBodW5rID0gaHVua3NbaV0sXG4gICAgICAgICAgbWF4TGluZSA9IGxpbmVzLmxlbmd0aCAtIGh1bmsub2xkTGluZXMsXG4gICAgICAgICAgbG9jYWxPZmZzZXQgPSAwLFxuICAgICAgICAgIHRvUG9zID0gb2Zmc2V0ICsgaHVuay5vbGRTdGFydCAtIDE7XG4gICAgICB2YXIgaXRlcmF0b3IgPSBkaXN0YW5jZUl0ZXJhdG9yKHRvUG9zLCBtaW5MaW5lLCBtYXhMaW5lKTtcblxuICAgICAgZm9yICg7IGxvY2FsT2Zmc2V0ICE9PSB1bmRlZmluZWQ7IGxvY2FsT2Zmc2V0ID0gaXRlcmF0b3IoKSkge1xuICAgICAgICBpZiAoaHVua0ZpdHMoaHVuaywgdG9Qb3MgKyBsb2NhbE9mZnNldCkpIHtcbiAgICAgICAgICBodW5rLm9mZnNldCA9IG9mZnNldCArPSBsb2NhbE9mZnNldDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobG9jYWxPZmZzZXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9IC8vIFNldCBsb3dlciB0ZXh0IGxpbWl0IHRvIGVuZCBvZiB0aGUgY3VycmVudCBodW5rLCBzbyBuZXh0IG9uZXMgZG9uJ3QgdHJ5XG4gICAgICAvLyB0byBmaXQgb3ZlciBhbHJlYWR5IHBhdGNoZWQgdGV4dFxuXG5cbiAgICAgIG1pbkxpbmUgPSBodW5rLm9mZnNldCArIGh1bmsub2xkU3RhcnQgKyBodW5rLm9sZExpbmVzO1xuICAgIH0gLy8gQXBwbHkgcGF0Y2ggaHVua3NcblxuXG4gICAgdmFyIGRpZmZPZmZzZXQgPSAwO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGh1bmtzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9odW5rID0gaHVua3NbX2ldLFxuICAgICAgICAgIF90b1BvcyA9IF9odW5rLm9sZFN0YXJ0ICsgX2h1bmsub2Zmc2V0ICsgZGlmZk9mZnNldCAtIDE7XG5cbiAgICAgIGRpZmZPZmZzZXQgKz0gX2h1bmsubmV3TGluZXMgLSBfaHVuay5vbGRMaW5lcztcblxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBfaHVuay5saW5lcy5sZW5ndGg7IGorKykge1xuICAgICAgICB2YXIgbGluZSA9IF9odW5rLmxpbmVzW2pdLFxuICAgICAgICAgICAgb3BlcmF0aW9uID0gbGluZS5sZW5ndGggPiAwID8gbGluZVswXSA6ICcgJyxcbiAgICAgICAgICAgIGNvbnRlbnQgPSBsaW5lLmxlbmd0aCA+IDAgPyBsaW5lLnN1YnN0cigxKSA6IGxpbmUsXG4gICAgICAgICAgICBkZWxpbWl0ZXIgPSBfaHVuay5saW5lZGVsaW1pdGVyc1tqXTtcblxuICAgICAgICBpZiAob3BlcmF0aW9uID09PSAnICcpIHtcbiAgICAgICAgICBfdG9Qb3MrKztcbiAgICAgICAgfSBlbHNlIGlmIChvcGVyYXRpb24gPT09ICctJykge1xuICAgICAgICAgIGxpbmVzLnNwbGljZShfdG9Qb3MsIDEpO1xuICAgICAgICAgIGRlbGltaXRlcnMuc3BsaWNlKF90b1BvcywgMSk7XG4gICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgICAgfSBlbHNlIGlmIChvcGVyYXRpb24gPT09ICcrJykge1xuICAgICAgICAgIGxpbmVzLnNwbGljZShfdG9Qb3MsIDAsIGNvbnRlbnQpO1xuICAgICAgICAgIGRlbGltaXRlcnMuc3BsaWNlKF90b1BvcywgMCwgZGVsaW1pdGVyKTtcbiAgICAgICAgICBfdG9Qb3MrKztcbiAgICAgICAgfSBlbHNlIGlmIChvcGVyYXRpb24gPT09ICdcXFxcJykge1xuICAgICAgICAgIHZhciBwcmV2aW91c09wZXJhdGlvbiA9IF9odW5rLmxpbmVzW2ogLSAxXSA/IF9odW5rLmxpbmVzW2ogLSAxXVswXSA6IG51bGw7XG5cbiAgICAgICAgICBpZiAocHJldmlvdXNPcGVyYXRpb24gPT09ICcrJykge1xuICAgICAgICAgICAgcmVtb3ZlRU9GTkwgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSBpZiAocHJldmlvdXNPcGVyYXRpb24gPT09ICctJykge1xuICAgICAgICAgICAgYWRkRU9GTkwgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gLy8gSGFuZGxlIEVPRk5MIGluc2VydGlvbi9yZW1vdmFsXG5cblxuICAgIGlmIChyZW1vdmVFT0ZOTCkge1xuICAgICAgd2hpbGUgKCFsaW5lc1tsaW5lcy5sZW5ndGggLSAxXSkge1xuICAgICAgICBsaW5lcy5wb3AoKTtcbiAgICAgICAgZGVsaW1pdGVycy5wb3AoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGFkZEVPRk5MKSB7XG4gICAgICBsaW5lcy5wdXNoKCcnKTtcbiAgICAgIGRlbGltaXRlcnMucHVzaCgnXFxuJyk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IGxpbmVzLmxlbmd0aCAtIDE7IF9rKyspIHtcbiAgICAgIGxpbmVzW19rXSA9IGxpbmVzW19rXSArIGRlbGltaXRlcnNbX2tdO1xuICAgIH1cblxuICAgIHJldHVybiBsaW5lcy5qb2luKCcnKTtcbiAgfSAvLyBXcmFwcGVyIHRoYXQgc3VwcG9ydHMgbXVsdGlwbGUgZmlsZSBwYXRjaGVzIHZpYSBjYWxsYmFja3MuXG5cbiAgZnVuY3Rpb24gYXBwbHlQYXRjaGVzKHVuaURpZmYsIG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZW9mIHVuaURpZmYgPT09ICdzdHJpbmcnKSB7XG4gICAgICB1bmlEaWZmID0gcGFyc2VQYXRjaCh1bmlEaWZmKTtcbiAgICB9XG5cbiAgICB2YXIgY3VycmVudEluZGV4ID0gMDtcblxuICAgIGZ1bmN0aW9uIHByb2Nlc3NJbmRleCgpIHtcbiAgICAgIHZhciBpbmRleCA9IHVuaURpZmZbY3VycmVudEluZGV4KytdO1xuXG4gICAgICBpZiAoIWluZGV4KSB7XG4gICAgICAgIHJldHVybiBvcHRpb25zLmNvbXBsZXRlKCk7XG4gICAgICB9XG5cbiAgICAgIG9wdGlvbnMubG9hZEZpbGUoaW5kZXgsIGZ1bmN0aW9uIChlcnIsIGRhdGEpIHtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIHJldHVybiBvcHRpb25zLmNvbXBsZXRlKGVycik7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdXBkYXRlZENvbnRlbnQgPSBhcHBseVBhdGNoKGRhdGEsIGluZGV4LCBvcHRpb25zKTtcbiAgICAgICAgb3B0aW9ucy5wYXRjaGVkKGluZGV4LCB1cGRhdGVkQ29udGVudCwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmNvbXBsZXRlKGVycik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcHJvY2Vzc0luZGV4KCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJvY2Vzc0luZGV4KCk7XG4gIH1cblxuICBmdW5jdGlvbiBzdHJ1Y3R1cmVkUGF0Y2gob2xkRmlsZU5hbWUsIG5ld0ZpbGVOYW1lLCBvbGRTdHIsIG5ld1N0ciwgb2xkSGVhZGVyLCBuZXdIZWFkZXIsIG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMuY29udGV4dCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIG9wdGlvbnMuY29udGV4dCA9IDQ7XG4gICAgfVxuXG4gICAgdmFyIGRpZmYgPSBkaWZmTGluZXMob2xkU3RyLCBuZXdTdHIsIG9wdGlvbnMpO1xuICAgIGRpZmYucHVzaCh7XG4gICAgICB2YWx1ZTogJycsXG4gICAgICBsaW5lczogW11cbiAgICB9KTsgLy8gQXBwZW5kIGFuIGVtcHR5IHZhbHVlIHRvIG1ha2UgY2xlYW51cCBlYXNpZXJcblxuICAgIGZ1bmN0aW9uIGNvbnRleHRMaW5lcyhsaW5lcykge1xuICAgICAgcmV0dXJuIGxpbmVzLm1hcChmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgICAgcmV0dXJuICcgJyArIGVudHJ5O1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFyIGh1bmtzID0gW107XG4gICAgdmFyIG9sZFJhbmdlU3RhcnQgPSAwLFxuICAgICAgICBuZXdSYW5nZVN0YXJ0ID0gMCxcbiAgICAgICAgY3VyUmFuZ2UgPSBbXSxcbiAgICAgICAgb2xkTGluZSA9IDEsXG4gICAgICAgIG5ld0xpbmUgPSAxO1xuXG4gICAgdmFyIF9sb29wID0gZnVuY3Rpb24gX2xvb3AoaSkge1xuICAgICAgdmFyIGN1cnJlbnQgPSBkaWZmW2ldLFxuICAgICAgICAgIGxpbmVzID0gY3VycmVudC5saW5lcyB8fCBjdXJyZW50LnZhbHVlLnJlcGxhY2UoL1xcbiQvLCAnJykuc3BsaXQoJ1xcbicpO1xuICAgICAgY3VycmVudC5saW5lcyA9IGxpbmVzO1xuXG4gICAgICBpZiAoY3VycmVudC5hZGRlZCB8fCBjdXJyZW50LnJlbW92ZWQpIHtcbiAgICAgICAgdmFyIF9jdXJSYW5nZTtcblxuICAgICAgICAvLyBJZiB3ZSBoYXZlIHByZXZpb3VzIGNvbnRleHQsIHN0YXJ0IHdpdGggdGhhdFxuICAgICAgICBpZiAoIW9sZFJhbmdlU3RhcnQpIHtcbiAgICAgICAgICB2YXIgcHJldiA9IGRpZmZbaSAtIDFdO1xuICAgICAgICAgIG9sZFJhbmdlU3RhcnQgPSBvbGRMaW5lO1xuICAgICAgICAgIG5ld1JhbmdlU3RhcnQgPSBuZXdMaW5lO1xuXG4gICAgICAgICAgaWYgKHByZXYpIHtcbiAgICAgICAgICAgIGN1clJhbmdlID0gb3B0aW9ucy5jb250ZXh0ID4gMCA/IGNvbnRleHRMaW5lcyhwcmV2LmxpbmVzLnNsaWNlKC1vcHRpb25zLmNvbnRleHQpKSA6IFtdO1xuICAgICAgICAgICAgb2xkUmFuZ2VTdGFydCAtPSBjdXJSYW5nZS5sZW5ndGg7XG4gICAgICAgICAgICBuZXdSYW5nZVN0YXJ0IC09IGN1clJhbmdlLmxlbmd0aDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gLy8gT3V0cHV0IG91ciBjaGFuZ2VzXG5cblxuICAgICAgICAoX2N1clJhbmdlID0gY3VyUmFuZ2UpLnB1c2guYXBwbHkoX2N1clJhbmdlLCBfdG9Db25zdW1hYmxlQXJyYXkobGluZXMubWFwKGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgICAgIHJldHVybiAoY3VycmVudC5hZGRlZCA/ICcrJyA6ICctJykgKyBlbnRyeTtcbiAgICAgICAgfSkpKTsgLy8gVHJhY2sgdGhlIHVwZGF0ZWQgZmlsZSBwb3NpdGlvblxuXG5cbiAgICAgICAgaWYgKGN1cnJlbnQuYWRkZWQpIHtcbiAgICAgICAgICBuZXdMaW5lICs9IGxpbmVzLmxlbmd0aDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvbGRMaW5lICs9IGxpbmVzLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSWRlbnRpY2FsIGNvbnRleHQgbGluZXMuIFRyYWNrIGxpbmUgY2hhbmdlc1xuICAgICAgICBpZiAob2xkUmFuZ2VTdGFydCkge1xuICAgICAgICAgIC8vIENsb3NlIG91dCBhbnkgY2hhbmdlcyB0aGF0IGhhdmUgYmVlbiBvdXRwdXQgKG9yIGpvaW4gb3ZlcmxhcHBpbmcpXG4gICAgICAgICAgaWYgKGxpbmVzLmxlbmd0aCA8PSBvcHRpb25zLmNvbnRleHQgKiAyICYmIGkgPCBkaWZmLmxlbmd0aCAtIDIpIHtcbiAgICAgICAgICAgIHZhciBfY3VyUmFuZ2UyO1xuXG4gICAgICAgICAgICAvLyBPdmVybGFwcGluZ1xuICAgICAgICAgICAgKF9jdXJSYW5nZTIgPSBjdXJSYW5nZSkucHVzaC5hcHBseShfY3VyUmFuZ2UyLCBfdG9Db25zdW1hYmxlQXJyYXkoY29udGV4dExpbmVzKGxpbmVzKSkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgX2N1clJhbmdlMztcblxuICAgICAgICAgICAgLy8gZW5kIHRoZSByYW5nZSBhbmQgb3V0cHV0XG4gICAgICAgICAgICB2YXIgY29udGV4dFNpemUgPSBNYXRoLm1pbihsaW5lcy5sZW5ndGgsIG9wdGlvbnMuY29udGV4dCk7XG5cbiAgICAgICAgICAgIChfY3VyUmFuZ2UzID0gY3VyUmFuZ2UpLnB1c2guYXBwbHkoX2N1clJhbmdlMywgX3RvQ29uc3VtYWJsZUFycmF5KGNvbnRleHRMaW5lcyhsaW5lcy5zbGljZSgwLCBjb250ZXh0U2l6ZSkpKSk7XG5cbiAgICAgICAgICAgIHZhciBodW5rID0ge1xuICAgICAgICAgICAgICBvbGRTdGFydDogb2xkUmFuZ2VTdGFydCxcbiAgICAgICAgICAgICAgb2xkTGluZXM6IG9sZExpbmUgLSBvbGRSYW5nZVN0YXJ0ICsgY29udGV4dFNpemUsXG4gICAgICAgICAgICAgIG5ld1N0YXJ0OiBuZXdSYW5nZVN0YXJ0LFxuICAgICAgICAgICAgICBuZXdMaW5lczogbmV3TGluZSAtIG5ld1JhbmdlU3RhcnQgKyBjb250ZXh0U2l6ZSxcbiAgICAgICAgICAgICAgbGluZXM6IGN1clJhbmdlXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAoaSA+PSBkaWZmLmxlbmd0aCAtIDIgJiYgbGluZXMubGVuZ3RoIDw9IG9wdGlvbnMuY29udGV4dCkge1xuICAgICAgICAgICAgICAvLyBFT0YgaXMgaW5zaWRlIHRoaXMgaHVua1xuICAgICAgICAgICAgICB2YXIgb2xkRU9GTmV3bGluZSA9IC9cXG4kLy50ZXN0KG9sZFN0cik7XG4gICAgICAgICAgICAgIHZhciBuZXdFT0ZOZXdsaW5lID0gL1xcbiQvLnRlc3QobmV3U3RyKTtcbiAgICAgICAgICAgICAgdmFyIG5vTmxCZWZvcmVBZGRzID0gbGluZXMubGVuZ3RoID09IDAgJiYgY3VyUmFuZ2UubGVuZ3RoID4gaHVuay5vbGRMaW5lcztcblxuICAgICAgICAgICAgICBpZiAoIW9sZEVPRk5ld2xpbmUgJiYgbm9ObEJlZm9yZUFkZHMgJiYgb2xkU3RyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAvLyBzcGVjaWFsIGNhc2U6IG9sZCBoYXMgbm8gZW9sIGFuZCBubyB0cmFpbGluZyBjb250ZXh0OyBuby1ubCBjYW4gZW5kIHVwIGJlZm9yZSBhZGRzXG4gICAgICAgICAgICAgICAgLy8gaG93ZXZlciwgaWYgdGhlIG9sZCBmaWxlIGlzIGVtcHR5LCBkbyBub3Qgb3V0cHV0IHRoZSBuby1ubCBsaW5lXG4gICAgICAgICAgICAgICAgY3VyUmFuZ2Uuc3BsaWNlKGh1bmsub2xkTGluZXMsIDAsICdcXFxcIE5vIG5ld2xpbmUgYXQgZW5kIG9mIGZpbGUnKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghb2xkRU9GTmV3bGluZSAmJiAhbm9ObEJlZm9yZUFkZHMgfHwgIW5ld0VPRk5ld2xpbmUpIHtcbiAgICAgICAgICAgICAgICBjdXJSYW5nZS5wdXNoKCdcXFxcIE5vIG5ld2xpbmUgYXQgZW5kIG9mIGZpbGUnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBodW5rcy5wdXNoKGh1bmspO1xuICAgICAgICAgICAgb2xkUmFuZ2VTdGFydCA9IDA7XG4gICAgICAgICAgICBuZXdSYW5nZVN0YXJ0ID0gMDtcbiAgICAgICAgICAgIGN1clJhbmdlID0gW107XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgb2xkTGluZSArPSBsaW5lcy5sZW5ndGg7XG4gICAgICAgIG5ld0xpbmUgKz0gbGluZXMubGVuZ3RoO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRpZmYubGVuZ3RoOyBpKyspIHtcbiAgICAgIF9sb29wKGkpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBvbGRGaWxlTmFtZTogb2xkRmlsZU5hbWUsXG4gICAgICBuZXdGaWxlTmFtZTogbmV3RmlsZU5hbWUsXG4gICAgICBvbGRIZWFkZXI6IG9sZEhlYWRlcixcbiAgICAgIG5ld0hlYWRlcjogbmV3SGVhZGVyLFxuICAgICAgaHVua3M6IGh1bmtzXG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBmb3JtYXRQYXRjaChkaWZmKSB7XG4gICAgdmFyIHJldCA9IFtdO1xuXG4gICAgaWYgKGRpZmYub2xkRmlsZU5hbWUgPT0gZGlmZi5uZXdGaWxlTmFtZSkge1xuICAgICAgcmV0LnB1c2goJ0luZGV4OiAnICsgZGlmZi5vbGRGaWxlTmFtZSk7XG4gICAgfVxuXG4gICAgcmV0LnB1c2goJz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0nKTtcbiAgICByZXQucHVzaCgnLS0tICcgKyBkaWZmLm9sZEZpbGVOYW1lICsgKHR5cGVvZiBkaWZmLm9sZEhlYWRlciA9PT0gJ3VuZGVmaW5lZCcgPyAnJyA6ICdcXHQnICsgZGlmZi5vbGRIZWFkZXIpKTtcbiAgICByZXQucHVzaCgnKysrICcgKyBkaWZmLm5ld0ZpbGVOYW1lICsgKHR5cGVvZiBkaWZmLm5ld0hlYWRlciA9PT0gJ3VuZGVmaW5lZCcgPyAnJyA6ICdcXHQnICsgZGlmZi5uZXdIZWFkZXIpKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGlmZi5odW5rcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGh1bmsgPSBkaWZmLmh1bmtzW2ldOyAvLyBVbmlmaWVkIERpZmYgRm9ybWF0IHF1aXJrOiBJZiB0aGUgY2h1bmsgc2l6ZSBpcyAwLFxuICAgICAgLy8gdGhlIGZpcnN0IG51bWJlciBpcyBvbmUgbG93ZXIgdGhhbiBvbmUgd291bGQgZXhwZWN0LlxuICAgICAgLy8gaHR0cHM6Ly93d3cuYXJ0aW1hLmNvbS93ZWJsb2dzL3ZpZXdwb3N0LmpzcD90aHJlYWQ9MTY0MjkzXG5cbiAgICAgIGlmIChodW5rLm9sZExpbmVzID09PSAwKSB7XG4gICAgICAgIGh1bmsub2xkU3RhcnQgLT0gMTtcbiAgICAgIH1cblxuICAgICAgaWYgKGh1bmsubmV3TGluZXMgPT09IDApIHtcbiAgICAgICAgaHVuay5uZXdTdGFydCAtPSAxO1xuICAgICAgfVxuXG4gICAgICByZXQucHVzaCgnQEAgLScgKyBodW5rLm9sZFN0YXJ0ICsgJywnICsgaHVuay5vbGRMaW5lcyArICcgKycgKyBodW5rLm5ld1N0YXJ0ICsgJywnICsgaHVuay5uZXdMaW5lcyArICcgQEAnKTtcbiAgICAgIHJldC5wdXNoLmFwcGx5KHJldCwgaHVuay5saW5lcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldC5qb2luKCdcXG4nKSArICdcXG4nO1xuICB9XG4gIGZ1bmN0aW9uIGNyZWF0ZVR3b0ZpbGVzUGF0Y2gob2xkRmlsZU5hbWUsIG5ld0ZpbGVOYW1lLCBvbGRTdHIsIG5ld1N0ciwgb2xkSGVhZGVyLCBuZXdIZWFkZXIsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gZm9ybWF0UGF0Y2goc3RydWN0dXJlZFBhdGNoKG9sZEZpbGVOYW1lLCBuZXdGaWxlTmFtZSwgb2xkU3RyLCBuZXdTdHIsIG9sZEhlYWRlciwgbmV3SGVhZGVyLCBvcHRpb25zKSk7XG4gIH1cbiAgZnVuY3Rpb24gY3JlYXRlUGF0Y2goZmlsZU5hbWUsIG9sZFN0ciwgbmV3U3RyLCBvbGRIZWFkZXIsIG5ld0hlYWRlciwgb3B0aW9ucykge1xuICAgIHJldHVybiBjcmVhdGVUd29GaWxlc1BhdGNoKGZpbGVOYW1lLCBmaWxlTmFtZSwgb2xkU3RyLCBuZXdTdHIsIG9sZEhlYWRlciwgbmV3SGVhZGVyLCBvcHRpb25zKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFycmF5RXF1YWwoYSwgYikge1xuICAgIGlmIChhLmxlbmd0aCAhPT0gYi5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyYXlTdGFydHNXaXRoKGEsIGIpO1xuICB9XG4gIGZ1bmN0aW9uIGFycmF5U3RhcnRzV2l0aChhcnJheSwgc3RhcnQpIHtcbiAgICBpZiAoc3RhcnQubGVuZ3RoID4gYXJyYXkubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdGFydC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHN0YXJ0W2ldICE9PSBhcnJheVtpXSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBjYWxjTGluZUNvdW50KGh1bmspIHtcbiAgICB2YXIgX2NhbGNPbGROZXdMaW5lQ291bnQgPSBjYWxjT2xkTmV3TGluZUNvdW50KGh1bmsubGluZXMpLFxuICAgICAgICBvbGRMaW5lcyA9IF9jYWxjT2xkTmV3TGluZUNvdW50Lm9sZExpbmVzLFxuICAgICAgICBuZXdMaW5lcyA9IF9jYWxjT2xkTmV3TGluZUNvdW50Lm5ld0xpbmVzO1xuXG4gICAgaWYgKG9sZExpbmVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGh1bmsub2xkTGluZXMgPSBvbGRMaW5lcztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIGh1bmsub2xkTGluZXM7XG4gICAgfVxuXG4gICAgaWYgKG5ld0xpbmVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGh1bmsubmV3TGluZXMgPSBuZXdMaW5lcztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIGh1bmsubmV3TGluZXM7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIG1lcmdlKG1pbmUsIHRoZWlycywgYmFzZSkge1xuICAgIG1pbmUgPSBsb2FkUGF0Y2gobWluZSwgYmFzZSk7XG4gICAgdGhlaXJzID0gbG9hZFBhdGNoKHRoZWlycywgYmFzZSk7XG4gICAgdmFyIHJldCA9IHt9OyAvLyBGb3IgaW5kZXggd2UganVzdCBsZXQgaXQgcGFzcyB0aHJvdWdoIGFzIGl0IGRvZXNuJ3QgaGF2ZSBhbnkgbmVjZXNzYXJ5IG1lYW5pbmcuXG4gICAgLy8gTGVhdmluZyBzYW5pdHkgY2hlY2tzIG9uIHRoaXMgdG8gdGhlIEFQSSBjb25zdW1lciB0aGF0IG1heSBrbm93IG1vcmUgYWJvdXQgdGhlXG4gICAgLy8gbWVhbmluZyBpbiB0aGVpciBvd24gY29udGV4dC5cblxuICAgIGlmIChtaW5lLmluZGV4IHx8IHRoZWlycy5pbmRleCkge1xuICAgICAgcmV0LmluZGV4ID0gbWluZS5pbmRleCB8fCB0aGVpcnMuaW5kZXg7XG4gICAgfVxuXG4gICAgaWYgKG1pbmUubmV3RmlsZU5hbWUgfHwgdGhlaXJzLm5ld0ZpbGVOYW1lKSB7XG4gICAgICBpZiAoIWZpbGVOYW1lQ2hhbmdlZChtaW5lKSkge1xuICAgICAgICAvLyBObyBoZWFkZXIgb3Igbm8gY2hhbmdlIGluIG91cnMsIHVzZSB0aGVpcnMgKGFuZCBvdXJzIGlmIHRoZWlycyBkb2VzIG5vdCBleGlzdClcbiAgICAgICAgcmV0Lm9sZEZpbGVOYW1lID0gdGhlaXJzLm9sZEZpbGVOYW1lIHx8IG1pbmUub2xkRmlsZU5hbWU7XG4gICAgICAgIHJldC5uZXdGaWxlTmFtZSA9IHRoZWlycy5uZXdGaWxlTmFtZSB8fCBtaW5lLm5ld0ZpbGVOYW1lO1xuICAgICAgICByZXQub2xkSGVhZGVyID0gdGhlaXJzLm9sZEhlYWRlciB8fCBtaW5lLm9sZEhlYWRlcjtcbiAgICAgICAgcmV0Lm5ld0hlYWRlciA9IHRoZWlycy5uZXdIZWFkZXIgfHwgbWluZS5uZXdIZWFkZXI7XG4gICAgICB9IGVsc2UgaWYgKCFmaWxlTmFtZUNoYW5nZWQodGhlaXJzKSkge1xuICAgICAgICAvLyBObyBoZWFkZXIgb3Igbm8gY2hhbmdlIGluIHRoZWlycywgdXNlIG91cnNcbiAgICAgICAgcmV0Lm9sZEZpbGVOYW1lID0gbWluZS5vbGRGaWxlTmFtZTtcbiAgICAgICAgcmV0Lm5ld0ZpbGVOYW1lID0gbWluZS5uZXdGaWxlTmFtZTtcbiAgICAgICAgcmV0Lm9sZEhlYWRlciA9IG1pbmUub2xkSGVhZGVyO1xuICAgICAgICByZXQubmV3SGVhZGVyID0gbWluZS5uZXdIZWFkZXI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBCb3RoIGNoYW5nZWQuLi4gZmlndXJlIGl0IG91dFxuICAgICAgICByZXQub2xkRmlsZU5hbWUgPSBzZWxlY3RGaWVsZChyZXQsIG1pbmUub2xkRmlsZU5hbWUsIHRoZWlycy5vbGRGaWxlTmFtZSk7XG4gICAgICAgIHJldC5uZXdGaWxlTmFtZSA9IHNlbGVjdEZpZWxkKHJldCwgbWluZS5uZXdGaWxlTmFtZSwgdGhlaXJzLm5ld0ZpbGVOYW1lKTtcbiAgICAgICAgcmV0Lm9sZEhlYWRlciA9IHNlbGVjdEZpZWxkKHJldCwgbWluZS5vbGRIZWFkZXIsIHRoZWlycy5vbGRIZWFkZXIpO1xuICAgICAgICByZXQubmV3SGVhZGVyID0gc2VsZWN0RmllbGQocmV0LCBtaW5lLm5ld0hlYWRlciwgdGhlaXJzLm5ld0hlYWRlcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0Lmh1bmtzID0gW107XG4gICAgdmFyIG1pbmVJbmRleCA9IDAsXG4gICAgICAgIHRoZWlyc0luZGV4ID0gMCxcbiAgICAgICAgbWluZU9mZnNldCA9IDAsXG4gICAgICAgIHRoZWlyc09mZnNldCA9IDA7XG5cbiAgICB3aGlsZSAobWluZUluZGV4IDwgbWluZS5odW5rcy5sZW5ndGggfHwgdGhlaXJzSW5kZXggPCB0aGVpcnMuaHVua3MubGVuZ3RoKSB7XG4gICAgICB2YXIgbWluZUN1cnJlbnQgPSBtaW5lLmh1bmtzW21pbmVJbmRleF0gfHwge1xuICAgICAgICBvbGRTdGFydDogSW5maW5pdHlcbiAgICAgIH0sXG4gICAgICAgICAgdGhlaXJzQ3VycmVudCA9IHRoZWlycy5odW5rc1t0aGVpcnNJbmRleF0gfHwge1xuICAgICAgICBvbGRTdGFydDogSW5maW5pdHlcbiAgICAgIH07XG5cbiAgICAgIGlmIChodW5rQmVmb3JlKG1pbmVDdXJyZW50LCB0aGVpcnNDdXJyZW50KSkge1xuICAgICAgICAvLyBUaGlzIHBhdGNoIGRvZXMgbm90IG92ZXJsYXAgd2l0aCBhbnkgb2YgdGhlIG90aGVycywgeWF5LlxuICAgICAgICByZXQuaHVua3MucHVzaChjbG9uZUh1bmsobWluZUN1cnJlbnQsIG1pbmVPZmZzZXQpKTtcbiAgICAgICAgbWluZUluZGV4Kys7XG4gICAgICAgIHRoZWlyc09mZnNldCArPSBtaW5lQ3VycmVudC5uZXdMaW5lcyAtIG1pbmVDdXJyZW50Lm9sZExpbmVzO1xuICAgICAgfSBlbHNlIGlmIChodW5rQmVmb3JlKHRoZWlyc0N1cnJlbnQsIG1pbmVDdXJyZW50KSkge1xuICAgICAgICAvLyBUaGlzIHBhdGNoIGRvZXMgbm90IG92ZXJsYXAgd2l0aCBhbnkgb2YgdGhlIG90aGVycywgeWF5LlxuICAgICAgICByZXQuaHVua3MucHVzaChjbG9uZUh1bmsodGhlaXJzQ3VycmVudCwgdGhlaXJzT2Zmc2V0KSk7XG4gICAgICAgIHRoZWlyc0luZGV4Kys7XG4gICAgICAgIG1pbmVPZmZzZXQgKz0gdGhlaXJzQ3VycmVudC5uZXdMaW5lcyAtIHRoZWlyc0N1cnJlbnQub2xkTGluZXM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBPdmVybGFwLCBtZXJnZSBhcyBiZXN0IHdlIGNhblxuICAgICAgICB2YXIgbWVyZ2VkSHVuayA9IHtcbiAgICAgICAgICBvbGRTdGFydDogTWF0aC5taW4obWluZUN1cnJlbnQub2xkU3RhcnQsIHRoZWlyc0N1cnJlbnQub2xkU3RhcnQpLFxuICAgICAgICAgIG9sZExpbmVzOiAwLFxuICAgICAgICAgIG5ld1N0YXJ0OiBNYXRoLm1pbihtaW5lQ3VycmVudC5uZXdTdGFydCArIG1pbmVPZmZzZXQsIHRoZWlyc0N1cnJlbnQub2xkU3RhcnQgKyB0aGVpcnNPZmZzZXQpLFxuICAgICAgICAgIG5ld0xpbmVzOiAwLFxuICAgICAgICAgIGxpbmVzOiBbXVxuICAgICAgICB9O1xuICAgICAgICBtZXJnZUxpbmVzKG1lcmdlZEh1bmssIG1pbmVDdXJyZW50Lm9sZFN0YXJ0LCBtaW5lQ3VycmVudC5saW5lcywgdGhlaXJzQ3VycmVudC5vbGRTdGFydCwgdGhlaXJzQ3VycmVudC5saW5lcyk7XG4gICAgICAgIHRoZWlyc0luZGV4Kys7XG4gICAgICAgIG1pbmVJbmRleCsrO1xuICAgICAgICByZXQuaHVua3MucHVzaChtZXJnZWRIdW5rKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgZnVuY3Rpb24gbG9hZFBhdGNoKHBhcmFtLCBiYXNlKSB7XG4gICAgaWYgKHR5cGVvZiBwYXJhbSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmICgvXkBAL20udGVzdChwYXJhbSkgfHwgL15JbmRleDovbS50ZXN0KHBhcmFtKSkge1xuICAgICAgICByZXR1cm4gcGFyc2VQYXRjaChwYXJhbSlbMF07XG4gICAgICB9XG5cbiAgICAgIGlmICghYmFzZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ011c3QgcHJvdmlkZSBhIGJhc2UgcmVmZXJlbmNlIG9yIHBhc3MgaW4gYSBwYXRjaCcpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3RydWN0dXJlZFBhdGNoKHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBiYXNlLCBwYXJhbSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcmFtO1xuICB9XG5cbiAgZnVuY3Rpb24gZmlsZU5hbWVDaGFuZ2VkKHBhdGNoKSB7XG4gICAgcmV0dXJuIHBhdGNoLm5ld0ZpbGVOYW1lICYmIHBhdGNoLm5ld0ZpbGVOYW1lICE9PSBwYXRjaC5vbGRGaWxlTmFtZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNlbGVjdEZpZWxkKGluZGV4LCBtaW5lLCB0aGVpcnMpIHtcbiAgICBpZiAobWluZSA9PT0gdGhlaXJzKSB7XG4gICAgICByZXR1cm4gbWluZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5kZXguY29uZmxpY3QgPSB0cnVlO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbWluZTogbWluZSxcbiAgICAgICAgdGhlaXJzOiB0aGVpcnNcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaHVua0JlZm9yZSh0ZXN0LCBjaGVjaykge1xuICAgIHJldHVybiB0ZXN0Lm9sZFN0YXJ0IDwgY2hlY2sub2xkU3RhcnQgJiYgdGVzdC5vbGRTdGFydCArIHRlc3Qub2xkTGluZXMgPCBjaGVjay5vbGRTdGFydDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsb25lSHVuayhodW5rLCBvZmZzZXQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb2xkU3RhcnQ6IGh1bmsub2xkU3RhcnQsXG4gICAgICBvbGRMaW5lczogaHVuay5vbGRMaW5lcyxcbiAgICAgIG5ld1N0YXJ0OiBodW5rLm5ld1N0YXJ0ICsgb2Zmc2V0LFxuICAgICAgbmV3TGluZXM6IGh1bmsubmV3TGluZXMsXG4gICAgICBsaW5lczogaHVuay5saW5lc1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBtZXJnZUxpbmVzKGh1bmssIG1pbmVPZmZzZXQsIG1pbmVMaW5lcywgdGhlaXJPZmZzZXQsIHRoZWlyTGluZXMpIHtcbiAgICAvLyBUaGlzIHdpbGwgZ2VuZXJhbGx5IHJlc3VsdCBpbiBhIGNvbmZsaWN0ZWQgaHVuaywgYnV0IHRoZXJlIGFyZSBjYXNlcyB3aGVyZSB0aGUgY29udGV4dFxuICAgIC8vIGlzIHRoZSBvbmx5IG92ZXJsYXAgd2hlcmUgd2UgY2FuIHN1Y2Nlc3NmdWxseSBtZXJnZSB0aGUgY29udGVudCBoZXJlLlxuICAgIHZhciBtaW5lID0ge1xuICAgICAgb2Zmc2V0OiBtaW5lT2Zmc2V0LFxuICAgICAgbGluZXM6IG1pbmVMaW5lcyxcbiAgICAgIGluZGV4OiAwXG4gICAgfSxcbiAgICAgICAgdGhlaXIgPSB7XG4gICAgICBvZmZzZXQ6IHRoZWlyT2Zmc2V0LFxuICAgICAgbGluZXM6IHRoZWlyTGluZXMsXG4gICAgICBpbmRleDogMFxuICAgIH07IC8vIEhhbmRsZSBhbnkgbGVhZGluZyBjb250ZW50XG5cbiAgICBpbnNlcnRMZWFkaW5nKGh1bmssIG1pbmUsIHRoZWlyKTtcbiAgICBpbnNlcnRMZWFkaW5nKGh1bmssIHRoZWlyLCBtaW5lKTsgLy8gTm93IGluIHRoZSBvdmVybGFwIGNvbnRlbnQuIFNjYW4gdGhyb3VnaCBhbmQgc2VsZWN0IHRoZSBiZXN0IGNoYW5nZXMgZnJvbSBlYWNoLlxuXG4gICAgd2hpbGUgKG1pbmUuaW5kZXggPCBtaW5lLmxpbmVzLmxlbmd0aCAmJiB0aGVpci5pbmRleCA8IHRoZWlyLmxpbmVzLmxlbmd0aCkge1xuICAgICAgdmFyIG1pbmVDdXJyZW50ID0gbWluZS5saW5lc1ttaW5lLmluZGV4XSxcbiAgICAgICAgICB0aGVpckN1cnJlbnQgPSB0aGVpci5saW5lc1t0aGVpci5pbmRleF07XG5cbiAgICAgIGlmICgobWluZUN1cnJlbnRbMF0gPT09ICctJyB8fCBtaW5lQ3VycmVudFswXSA9PT0gJysnKSAmJiAodGhlaXJDdXJyZW50WzBdID09PSAnLScgfHwgdGhlaXJDdXJyZW50WzBdID09PSAnKycpKSB7XG4gICAgICAgIC8vIEJvdGggbW9kaWZpZWQgLi4uXG4gICAgICAgIG11dHVhbENoYW5nZShodW5rLCBtaW5lLCB0aGVpcik7XG4gICAgICB9IGVsc2UgaWYgKG1pbmVDdXJyZW50WzBdID09PSAnKycgJiYgdGhlaXJDdXJyZW50WzBdID09PSAnICcpIHtcbiAgICAgICAgdmFyIF9odW5rJGxpbmVzO1xuXG4gICAgICAgIC8vIE1pbmUgaW5zZXJ0ZWRcbiAgICAgICAgKF9odW5rJGxpbmVzID0gaHVuay5saW5lcykucHVzaC5hcHBseShfaHVuayRsaW5lcywgX3RvQ29uc3VtYWJsZUFycmF5KGNvbGxlY3RDaGFuZ2UobWluZSkpKTtcbiAgICAgIH0gZWxzZSBpZiAodGhlaXJDdXJyZW50WzBdID09PSAnKycgJiYgbWluZUN1cnJlbnRbMF0gPT09ICcgJykge1xuICAgICAgICB2YXIgX2h1bmskbGluZXMyO1xuXG4gICAgICAgIC8vIFRoZWlycyBpbnNlcnRlZFxuICAgICAgICAoX2h1bmskbGluZXMyID0gaHVuay5saW5lcykucHVzaC5hcHBseShfaHVuayRsaW5lczIsIF90b0NvbnN1bWFibGVBcnJheShjb2xsZWN0Q2hhbmdlKHRoZWlyKSkpO1xuICAgICAgfSBlbHNlIGlmIChtaW5lQ3VycmVudFswXSA9PT0gJy0nICYmIHRoZWlyQ3VycmVudFswXSA9PT0gJyAnKSB7XG4gICAgICAgIC8vIE1pbmUgcmVtb3ZlZCBvciBlZGl0ZWRcbiAgICAgICAgcmVtb3ZhbChodW5rLCBtaW5lLCB0aGVpcik7XG4gICAgICB9IGVsc2UgaWYgKHRoZWlyQ3VycmVudFswXSA9PT0gJy0nICYmIG1pbmVDdXJyZW50WzBdID09PSAnICcpIHtcbiAgICAgICAgLy8gVGhlaXIgcmVtb3ZlZCBvciBlZGl0ZWRcbiAgICAgICAgcmVtb3ZhbChodW5rLCB0aGVpciwgbWluZSwgdHJ1ZSk7XG4gICAgICB9IGVsc2UgaWYgKG1pbmVDdXJyZW50ID09PSB0aGVpckN1cnJlbnQpIHtcbiAgICAgICAgLy8gQ29udGV4dCBpZGVudGl0eVxuICAgICAgICBodW5rLmxpbmVzLnB1c2gobWluZUN1cnJlbnQpO1xuICAgICAgICBtaW5lLmluZGV4Kys7XG4gICAgICAgIHRoZWlyLmluZGV4Kys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBDb250ZXh0IG1pc21hdGNoXG4gICAgICAgIGNvbmZsaWN0KGh1bmssIGNvbGxlY3RDaGFuZ2UobWluZSksIGNvbGxlY3RDaGFuZ2UodGhlaXIpKTtcbiAgICAgIH1cbiAgICB9IC8vIE5vdyBwdXNoIGFueXRoaW5nIHRoYXQgbWF5IGJlIHJlbWFpbmluZ1xuXG5cbiAgICBpbnNlcnRUcmFpbGluZyhodW5rLCBtaW5lKTtcbiAgICBpbnNlcnRUcmFpbGluZyhodW5rLCB0aGVpcik7XG4gICAgY2FsY0xpbmVDb3VudChodW5rKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG11dHVhbENoYW5nZShodW5rLCBtaW5lLCB0aGVpcikge1xuICAgIHZhciBteUNoYW5nZXMgPSBjb2xsZWN0Q2hhbmdlKG1pbmUpLFxuICAgICAgICB0aGVpckNoYW5nZXMgPSBjb2xsZWN0Q2hhbmdlKHRoZWlyKTtcblxuICAgIGlmIChhbGxSZW1vdmVzKG15Q2hhbmdlcykgJiYgYWxsUmVtb3Zlcyh0aGVpckNoYW5nZXMpKSB7XG4gICAgICAvLyBTcGVjaWFsIGNhc2UgZm9yIHJlbW92ZSBjaGFuZ2VzIHRoYXQgYXJlIHN1cGVyc2V0cyBvZiBvbmUgYW5vdGhlclxuICAgICAgaWYgKGFycmF5U3RhcnRzV2l0aChteUNoYW5nZXMsIHRoZWlyQ2hhbmdlcykgJiYgc2tpcFJlbW92ZVN1cGVyc2V0KHRoZWlyLCBteUNoYW5nZXMsIG15Q2hhbmdlcy5sZW5ndGggLSB0aGVpckNoYW5nZXMubGVuZ3RoKSkge1xuICAgICAgICB2YXIgX2h1bmskbGluZXMzO1xuXG4gICAgICAgIChfaHVuayRsaW5lczMgPSBodW5rLmxpbmVzKS5wdXNoLmFwcGx5KF9odW5rJGxpbmVzMywgX3RvQ29uc3VtYWJsZUFycmF5KG15Q2hhbmdlcykpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSBpZiAoYXJyYXlTdGFydHNXaXRoKHRoZWlyQ2hhbmdlcywgbXlDaGFuZ2VzKSAmJiBza2lwUmVtb3ZlU3VwZXJzZXQobWluZSwgdGhlaXJDaGFuZ2VzLCB0aGVpckNoYW5nZXMubGVuZ3RoIC0gbXlDaGFuZ2VzLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIF9odW5rJGxpbmVzNDtcblxuICAgICAgICAoX2h1bmskbGluZXM0ID0gaHVuay5saW5lcykucHVzaC5hcHBseShfaHVuayRsaW5lczQsIF90b0NvbnN1bWFibGVBcnJheSh0aGVpckNoYW5nZXMpKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhcnJheUVxdWFsKG15Q2hhbmdlcywgdGhlaXJDaGFuZ2VzKSkge1xuICAgICAgdmFyIF9odW5rJGxpbmVzNTtcblxuICAgICAgKF9odW5rJGxpbmVzNSA9IGh1bmsubGluZXMpLnB1c2guYXBwbHkoX2h1bmskbGluZXM1LCBfdG9Db25zdW1hYmxlQXJyYXkobXlDaGFuZ2VzKSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25mbGljdChodW5rLCBteUNoYW5nZXMsIHRoZWlyQ2hhbmdlcyk7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmFsKGh1bmssIG1pbmUsIHRoZWlyLCBzd2FwKSB7XG4gICAgdmFyIG15Q2hhbmdlcyA9IGNvbGxlY3RDaGFuZ2UobWluZSksXG4gICAgICAgIHRoZWlyQ2hhbmdlcyA9IGNvbGxlY3RDb250ZXh0KHRoZWlyLCBteUNoYW5nZXMpO1xuXG4gICAgaWYgKHRoZWlyQ2hhbmdlcy5tZXJnZWQpIHtcbiAgICAgIHZhciBfaHVuayRsaW5lczY7XG5cbiAgICAgIChfaHVuayRsaW5lczYgPSBodW5rLmxpbmVzKS5wdXNoLmFwcGx5KF9odW5rJGxpbmVzNiwgX3RvQ29uc3VtYWJsZUFycmF5KHRoZWlyQ2hhbmdlcy5tZXJnZWQpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uZmxpY3QoaHVuaywgc3dhcCA/IHRoZWlyQ2hhbmdlcyA6IG15Q2hhbmdlcywgc3dhcCA/IG15Q2hhbmdlcyA6IHRoZWlyQ2hhbmdlcyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY29uZmxpY3QoaHVuaywgbWluZSwgdGhlaXIpIHtcbiAgICBodW5rLmNvbmZsaWN0ID0gdHJ1ZTtcbiAgICBodW5rLmxpbmVzLnB1c2goe1xuICAgICAgY29uZmxpY3Q6IHRydWUsXG4gICAgICBtaW5lOiBtaW5lLFxuICAgICAgdGhlaXJzOiB0aGVpclxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5zZXJ0TGVhZGluZyhodW5rLCBpbnNlcnQsIHRoZWlyKSB7XG4gICAgd2hpbGUgKGluc2VydC5vZmZzZXQgPCB0aGVpci5vZmZzZXQgJiYgaW5zZXJ0LmluZGV4IDwgaW5zZXJ0LmxpbmVzLmxlbmd0aCkge1xuICAgICAgdmFyIGxpbmUgPSBpbnNlcnQubGluZXNbaW5zZXJ0LmluZGV4KytdO1xuICAgICAgaHVuay5saW5lcy5wdXNoKGxpbmUpO1xuICAgICAgaW5zZXJ0Lm9mZnNldCsrO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGluc2VydFRyYWlsaW5nKGh1bmssIGluc2VydCkge1xuICAgIHdoaWxlIChpbnNlcnQuaW5kZXggPCBpbnNlcnQubGluZXMubGVuZ3RoKSB7XG4gICAgICB2YXIgbGluZSA9IGluc2VydC5saW5lc1tpbnNlcnQuaW5kZXgrK107XG4gICAgICBodW5rLmxpbmVzLnB1c2gobGluZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY29sbGVjdENoYW5nZShzdGF0ZSkge1xuICAgIHZhciByZXQgPSBbXSxcbiAgICAgICAgb3BlcmF0aW9uID0gc3RhdGUubGluZXNbc3RhdGUuaW5kZXhdWzBdO1xuXG4gICAgd2hpbGUgKHN0YXRlLmluZGV4IDwgc3RhdGUubGluZXMubGVuZ3RoKSB7XG4gICAgICB2YXIgbGluZSA9IHN0YXRlLmxpbmVzW3N0YXRlLmluZGV4XTsgLy8gR3JvdXAgYWRkaXRpb25zIHRoYXQgYXJlIGltbWVkaWF0ZWx5IGFmdGVyIHN1YnRyYWN0aW9ucyBhbmQgdHJlYXQgdGhlbSBhcyBvbmUgXCJhdG9taWNcIiBtb2RpZnkgY2hhbmdlLlxuXG4gICAgICBpZiAob3BlcmF0aW9uID09PSAnLScgJiYgbGluZVswXSA9PT0gJysnKSB7XG4gICAgICAgIG9wZXJhdGlvbiA9ICcrJztcbiAgICAgIH1cblxuICAgICAgaWYgKG9wZXJhdGlvbiA9PT0gbGluZVswXSkge1xuICAgICAgICByZXQucHVzaChsaW5lKTtcbiAgICAgICAgc3RhdGUuaW5kZXgrKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBmdW5jdGlvbiBjb2xsZWN0Q29udGV4dChzdGF0ZSwgbWF0Y2hDaGFuZ2VzKSB7XG4gICAgdmFyIGNoYW5nZXMgPSBbXSxcbiAgICAgICAgbWVyZ2VkID0gW10sXG4gICAgICAgIG1hdGNoSW5kZXggPSAwLFxuICAgICAgICBjb250ZXh0Q2hhbmdlcyA9IGZhbHNlLFxuICAgICAgICBjb25mbGljdGVkID0gZmFsc2U7XG5cbiAgICB3aGlsZSAobWF0Y2hJbmRleCA8IG1hdGNoQ2hhbmdlcy5sZW5ndGggJiYgc3RhdGUuaW5kZXggPCBzdGF0ZS5saW5lcy5sZW5ndGgpIHtcbiAgICAgIHZhciBjaGFuZ2UgPSBzdGF0ZS5saW5lc1tzdGF0ZS5pbmRleF0sXG4gICAgICAgICAgbWF0Y2ggPSBtYXRjaENoYW5nZXNbbWF0Y2hJbmRleF07IC8vIE9uY2Ugd2UndmUgaGl0IG91ciBhZGQsIHRoZW4gd2UgYXJlIGRvbmVcblxuICAgICAgaWYgKG1hdGNoWzBdID09PSAnKycpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHRDaGFuZ2VzID0gY29udGV4dENoYW5nZXMgfHwgY2hhbmdlWzBdICE9PSAnICc7XG4gICAgICBtZXJnZWQucHVzaChtYXRjaCk7XG4gICAgICBtYXRjaEluZGV4Kys7IC8vIENvbnN1bWUgYW55IGFkZGl0aW9ucyBpbiB0aGUgb3RoZXIgYmxvY2sgYXMgYSBjb25mbGljdCB0byBhdHRlbXB0XG4gICAgICAvLyB0byBwdWxsIGluIHRoZSByZW1haW5pbmcgY29udGV4dCBhZnRlciB0aGlzXG5cbiAgICAgIGlmIChjaGFuZ2VbMF0gPT09ICcrJykge1xuICAgICAgICBjb25mbGljdGVkID0gdHJ1ZTtcblxuICAgICAgICB3aGlsZSAoY2hhbmdlWzBdID09PSAnKycpIHtcbiAgICAgICAgICBjaGFuZ2VzLnB1c2goY2hhbmdlKTtcbiAgICAgICAgICBjaGFuZ2UgPSBzdGF0ZS5saW5lc1srK3N0YXRlLmluZGV4XTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWF0Y2guc3Vic3RyKDEpID09PSBjaGFuZ2Uuc3Vic3RyKDEpKSB7XG4gICAgICAgIGNoYW5nZXMucHVzaChjaGFuZ2UpO1xuICAgICAgICBzdGF0ZS5pbmRleCsrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uZmxpY3RlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKChtYXRjaENoYW5nZXNbbWF0Y2hJbmRleF0gfHwgJycpWzBdID09PSAnKycgJiYgY29udGV4dENoYW5nZXMpIHtcbiAgICAgIGNvbmZsaWN0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChjb25mbGljdGVkKSB7XG4gICAgICByZXR1cm4gY2hhbmdlcztcbiAgICB9XG5cbiAgICB3aGlsZSAobWF0Y2hJbmRleCA8IG1hdGNoQ2hhbmdlcy5sZW5ndGgpIHtcbiAgICAgIG1lcmdlZC5wdXNoKG1hdGNoQ2hhbmdlc1ttYXRjaEluZGV4KytdKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgbWVyZ2VkOiBtZXJnZWQsXG4gICAgICBjaGFuZ2VzOiBjaGFuZ2VzXG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFsbFJlbW92ZXMoY2hhbmdlcykge1xuICAgIHJldHVybiBjaGFuZ2VzLnJlZHVjZShmdW5jdGlvbiAocHJldiwgY2hhbmdlKSB7XG4gICAgICByZXR1cm4gcHJldiAmJiBjaGFuZ2VbMF0gPT09ICctJztcbiAgICB9LCB0cnVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNraXBSZW1vdmVTdXBlcnNldChzdGF0ZSwgcmVtb3ZlQ2hhbmdlcywgZGVsdGEpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRlbHRhOyBpKyspIHtcbiAgICAgIHZhciBjaGFuZ2VDb250ZW50ID0gcmVtb3ZlQ2hhbmdlc1tyZW1vdmVDaGFuZ2VzLmxlbmd0aCAtIGRlbHRhICsgaV0uc3Vic3RyKDEpO1xuXG4gICAgICBpZiAoc3RhdGUubGluZXNbc3RhdGUuaW5kZXggKyBpXSAhPT0gJyAnICsgY2hhbmdlQ29udGVudCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGUuaW5kZXggKz0gZGVsdGE7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBjYWxjT2xkTmV3TGluZUNvdW50KGxpbmVzKSB7XG4gICAgdmFyIG9sZExpbmVzID0gMDtcbiAgICB2YXIgbmV3TGluZXMgPSAwO1xuICAgIGxpbmVzLmZvckVhY2goZnVuY3Rpb24gKGxpbmUpIHtcbiAgICAgIGlmICh0eXBlb2YgbGluZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgdmFyIG15Q291bnQgPSBjYWxjT2xkTmV3TGluZUNvdW50KGxpbmUubWluZSk7XG4gICAgICAgIHZhciB0aGVpckNvdW50ID0gY2FsY09sZE5ld0xpbmVDb3VudChsaW5lLnRoZWlycyk7XG5cbiAgICAgICAgaWYgKG9sZExpbmVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAobXlDb3VudC5vbGRMaW5lcyA9PT0gdGhlaXJDb3VudC5vbGRMaW5lcykge1xuICAgICAgICAgICAgb2xkTGluZXMgKz0gbXlDb3VudC5vbGRMaW5lcztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb2xkTGluZXMgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5ld0xpbmVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAobXlDb3VudC5uZXdMaW5lcyA9PT0gdGhlaXJDb3VudC5uZXdMaW5lcykge1xuICAgICAgICAgICAgbmV3TGluZXMgKz0gbXlDb3VudC5uZXdMaW5lcztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3TGluZXMgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAobmV3TGluZXMgIT09IHVuZGVmaW5lZCAmJiAobGluZVswXSA9PT0gJysnIHx8IGxpbmVbMF0gPT09ICcgJykpIHtcbiAgICAgICAgICBuZXdMaW5lcysrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9sZExpbmVzICE9PSB1bmRlZmluZWQgJiYgKGxpbmVbMF0gPT09ICctJyB8fCBsaW5lWzBdID09PSAnICcpKSB7XG4gICAgICAgICAgb2xkTGluZXMrKztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICBvbGRMaW5lczogb2xkTGluZXMsXG4gICAgICBuZXdMaW5lczogbmV3TGluZXNcbiAgICB9O1xuICB9XG5cbiAgLy8gU2VlOiBodHRwOi8vY29kZS5nb29nbGUuY29tL3AvZ29vZ2xlLWRpZmYtbWF0Y2gtcGF0Y2gvd2lraS9BUElcbiAgZnVuY3Rpb24gY29udmVydENoYW5nZXNUb0RNUChjaGFuZ2VzKSB7XG4gICAgdmFyIHJldCA9IFtdLFxuICAgICAgICBjaGFuZ2UsXG4gICAgICAgIG9wZXJhdGlvbjtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hhbmdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgY2hhbmdlID0gY2hhbmdlc1tpXTtcblxuICAgICAgaWYgKGNoYW5nZS5hZGRlZCkge1xuICAgICAgICBvcGVyYXRpb24gPSAxO1xuICAgICAgfSBlbHNlIGlmIChjaGFuZ2UucmVtb3ZlZCkge1xuICAgICAgICBvcGVyYXRpb24gPSAtMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9wZXJhdGlvbiA9IDA7XG4gICAgICB9XG5cbiAgICAgIHJldC5wdXNoKFtvcGVyYXRpb24sIGNoYW5nZS52YWx1ZV0pO1xuICAgIH1cblxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBmdW5jdGlvbiBjb252ZXJ0Q2hhbmdlc1RvWE1MKGNoYW5nZXMpIHtcbiAgICB2YXIgcmV0ID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoYW5nZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaGFuZ2UgPSBjaGFuZ2VzW2ldO1xuXG4gICAgICBpZiAoY2hhbmdlLmFkZGVkKSB7XG4gICAgICAgIHJldC5wdXNoKCc8aW5zPicpO1xuICAgICAgfSBlbHNlIGlmIChjaGFuZ2UucmVtb3ZlZCkge1xuICAgICAgICByZXQucHVzaCgnPGRlbD4nKTtcbiAgICAgIH1cblxuICAgICAgcmV0LnB1c2goZXNjYXBlSFRNTChjaGFuZ2UudmFsdWUpKTtcblxuICAgICAgaWYgKGNoYW5nZS5hZGRlZCkge1xuICAgICAgICByZXQucHVzaCgnPC9pbnM+Jyk7XG4gICAgICB9IGVsc2UgaWYgKGNoYW5nZS5yZW1vdmVkKSB7XG4gICAgICAgIHJldC5wdXNoKCc8L2RlbD4nKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmV0LmpvaW4oJycpO1xuICB9XG5cbiAgZnVuY3Rpb24gZXNjYXBlSFRNTChzKSB7XG4gICAgdmFyIG4gPSBzO1xuICAgIG4gPSBuLnJlcGxhY2UoLyYvZywgJyZhbXA7Jyk7XG4gICAgbiA9IG4ucmVwbGFjZSgvPC9nLCAnJmx0OycpO1xuICAgIG4gPSBuLnJlcGxhY2UoLz4vZywgJyZndDsnKTtcbiAgICBuID0gbi5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7Jyk7XG4gICAgcmV0dXJuIG47XG4gIH1cblxuICBleHBvcnRzLkRpZmYgPSBEaWZmO1xuICBleHBvcnRzLmFwcGx5UGF0Y2ggPSBhcHBseVBhdGNoO1xuICBleHBvcnRzLmFwcGx5UGF0Y2hlcyA9IGFwcGx5UGF0Y2hlcztcbiAgZXhwb3J0cy5jYW5vbmljYWxpemUgPSBjYW5vbmljYWxpemU7XG4gIGV4cG9ydHMuY29udmVydENoYW5nZXNUb0RNUCA9IGNvbnZlcnRDaGFuZ2VzVG9ETVA7XG4gIGV4cG9ydHMuY29udmVydENoYW5nZXNUb1hNTCA9IGNvbnZlcnRDaGFuZ2VzVG9YTUw7XG4gIGV4cG9ydHMuY3JlYXRlUGF0Y2ggPSBjcmVhdGVQYXRjaDtcbiAgZXhwb3J0cy5jcmVhdGVUd29GaWxlc1BhdGNoID0gY3JlYXRlVHdvRmlsZXNQYXRjaDtcbiAgZXhwb3J0cy5kaWZmQXJyYXlzID0gZGlmZkFycmF5cztcbiAgZXhwb3J0cy5kaWZmQ2hhcnMgPSBkaWZmQ2hhcnM7XG4gIGV4cG9ydHMuZGlmZkNzcyA9IGRpZmZDc3M7XG4gIGV4cG9ydHMuZGlmZkpzb24gPSBkaWZmSnNvbjtcbiAgZXhwb3J0cy5kaWZmTGluZXMgPSBkaWZmTGluZXM7XG4gIGV4cG9ydHMuZGlmZlNlbnRlbmNlcyA9IGRpZmZTZW50ZW5jZXM7XG4gIGV4cG9ydHMuZGlmZlRyaW1tZWRMaW5lcyA9IGRpZmZUcmltbWVkTGluZXM7XG4gIGV4cG9ydHMuZGlmZldvcmRzID0gZGlmZldvcmRzO1xuICBleHBvcnRzLmRpZmZXb3Jkc1dpdGhTcGFjZSA9IGRpZmZXb3Jkc1dpdGhTcGFjZTtcbiAgZXhwb3J0cy5tZXJnZSA9IG1lcmdlO1xuICBleHBvcnRzLnBhcnNlUGF0Y2ggPSBwYXJzZVBhdGNoO1xuICBleHBvcnRzLnN0cnVjdHVyZWRQYXRjaCA9IHN0cnVjdHVyZWRQYXRjaDtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG59KSkpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQgXCIuLi9zdHlsZXMvc3R5bGUuY3NzXCI7XG5pbXBvcnQgQWR2YW5jZWRCbGFua3MgZnJvbSAnLi4vc2NyaXB0cy9hcHAnO1xuXG4vLyBMb2FkIGxpYnJhcnlcbkg1UCA9IEg1UCB8fCB7fTtcbkg1UC5BZHZhbmNlZEJsYW5rcyA9IEFkdmFuY2VkQmxhbmtzOyIsImV4cG9ydCBmdW5jdGlvbiBnZXRMb25nZXN0U3RyaW5nKHN0cmluZ3M6IHN0cmluZ1tdKTogc3RyaW5nIHtcbiAgcmV0dXJuIHN0cmluZ3MucmVkdWNlKChwcmV2LCBjdXJyZW50KSA9PiBjdXJyZW50Lmxlbmd0aCA+IHByZXYubGVuZ3RoID8gY3VycmVudCA6IHByZXYsIFwiXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2h1ZmZsZUFycmF5KGFycmF5OiBhbnlbXSkge1xuICBmb3IgKHZhciBpID0gYXJyYXkubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xuICAgIHZhciBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XG4gICAgdmFyIHRlbXAgPSBhcnJheVtpXTtcbiAgICBhcnJheVtpXSA9IGFycmF5W2pdO1xuICAgIGFycmF5W2pdID0gdGVtcDtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59IiwiLy8gVE9ETyBjYW4gd2UganVzdCBkZWNsYXJlIHRoZSBrZXlkb3duSGFuZGxlciBvbmNlPyB1c2luZyBgdGhpc2A/XG5mdW5jdGlvbiBtYWtlS2V5RGVmaW5pdGlvbihjb2RlPzogbnVtYmVyKSB7XG4gIHJldHVybiAobm9kZSwgZmlyZSkgPT4ge1xuICAgIGZ1bmN0aW9uIGtleWRvd25IYW5kbGVyKGV2ZW50KSB7XG4gICAgICB2YXIgd2hpY2ggPSBldmVudC53aGljaCB8fCBldmVudC5rZXlDb2RlO1xuXG4gICAgICBpZiAoY29kZSAmJiB3aGljaCA9PT0gY29kZSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGZpcmUoe1xuICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgb3JpZ2luYWw6IGV2ZW50XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoIWNvZGUgJiYgWzE2LCAxNywgMTgsIDM1LCAzNiwgMTMsIDksIDI3LCAzMiwgMzcsIDM5LCA0MCwgMzhdLmZpbHRlcihjID0+IGMgPT09IHdoaWNoKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgZmlyZSh7XG4gICAgICAgICAgbm9kZSxcbiAgICAgICAgICBvcmlnaW5hbDogZXZlbnRcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywga2V5ZG93bkhhbmRsZXIsIGZhbHNlKTtcblxuICAgIHJldHVybiB7XG4gICAgICB0ZWFyZG93bigpIHtcbiAgICAgICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywga2V5ZG93bkhhbmRsZXIsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xufVxuXG5leHBvcnQgY29uc3QgZW50ZXIgPSBtYWtlS2V5RGVmaW5pdGlvbigxMyk7XG5leHBvcnQgY29uc3QgdGFiID0gbWFrZUtleURlZmluaXRpb24oOSk7XG5leHBvcnQgY29uc3QgZXNjYXBlID0gbWFrZUtleURlZmluaXRpb24oMjcpO1xuZXhwb3J0IGNvbnN0IHNwYWNlID0gbWFrZUtleURlZmluaXRpb24oMzIpO1xuXG5leHBvcnQgY29uc3QgbGVmdGFycm93ID0gbWFrZUtleURlZmluaXRpb24oMzcpO1xuZXhwb3J0IGNvbnN0IHJpZ2h0YXJyb3cgPSBtYWtlS2V5RGVmaW5pdGlvbigzOSk7XG5leHBvcnQgY29uc3QgZG93bmFycm93ID0gbWFrZUtleURlZmluaXRpb24oNDApO1xuZXhwb3J0IGNvbnN0IHVwYXJyb3cgPSBtYWtlS2V5RGVmaW5pdGlvbigzOCk7XG5cbmV4cG9ydCBjb25zdCBhbnlrZXkgPSBtYWtlS2V5RGVmaW5pdGlvbigpOyIsImltcG9ydCB7IEJsYW5rTG9hZGVyIH0gZnJvbSAnLi9jb250ZW50LWxvYWRlcnMvYmxhbmstbG9hZGVyJztcbmltcG9ydCB7IEg1UERhdGFSZXBvc2l0b3J5LCBJRGF0YVJlcG9zaXRvcnkgfSBmcm9tICcuL3NlcnZpY2VzL2RhdGEtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBDbG96ZUNvbnRyb2xsZXIgfSBmcm9tICcuL2NvbnRyb2xsZXJzL2Nsb3plLWNvbnRyb2xsZXInO1xuaW1wb3J0IHsgSDVQTG9jYWxpemF0aW9uLCBMb2NhbGl6YXRpb25MYWJlbHMsIExvY2FsaXphdGlvblN0cnVjdHVyZXMgfSBmcm9tIFwiLi9zZXJ2aWNlcy9sb2NhbGl6YXRpb25cIjtcbmltcG9ydCB7IElTZXR0aW5ncywgSDVQU2V0dGluZ3MgfSBmcm9tIFwiLi9zZXJ2aWNlcy9zZXR0aW5nc1wiO1xuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL21lc3NhZ2Utc2VydmljZSc7XG5pbXBvcnQgeyBVbnJ3YXBwZXIgfSBmcm9tICcuL2hlbHBlcnMvdW53cmFwcGVyJztcbmltcG9ydCB7IFhBUElBY3Rpdml0eURlZmluaXRpb24gfSBmcm9tICcuL21vZGVscy94YXBpJztcbmltcG9ydCB7IGV4dGVuZCB9IGZyb20gJy4vaGVscGVycy9leHRlbmQnO1xuXG5lbnVtIFN0YXRlcyB7XG4gIG9uZ29pbmcgPSAnb25nb2luZycsXG4gIGNoZWNraW5nID0gJ2NoZWNraW5nJyxcbiAgc2hvd2luZ1NvbHV0aW9ucyA9ICdzaG93aW5nLXNvbHV0aW9uJyxcbiAgZmluaXNoZWQgPSAnZmluaXNoZWQnLFxuICBzaG93aW5nU29sdXRpb25zRW1iZWRkZWQgPSAnc2hvd2luZy1zb2x1dGlvbi1lbWJlZGRlZCdcbn1cblxuY29uc3QgWEFQSV9BTFRFUk5BVElWRV9FWFRFTlNJT04gPSAnaHR0cHM6Ly9oNXAub3JnL3gtYXBpL2FsdGVybmF0aXZlcyc7XG5jb25zdCBYQVBJX0NBU0VfU0VOU0lUSVZJVFkgPSAnaHR0cHM6Ly9oNXAub3JnL3gtYXBpL2Nhc2Utc2Vuc2l0aXZpdHknO1xuY29uc3QgWEFQSV9SRVBPUlRJTkdfVkVSU0lPTl9FWFRFTlNJT04gPSAnaHR0cHM6Ly9oNXAub3JnL3gtYXBpL2g1cC1yZXBvcnRpbmctdmVyc2lvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkdmFuY2VkQmxhbmtzIGV4dGVuZHMgKEg1UC5RdWVzdGlvbiBhcyB7IG5ldyhzdHJpbmcpOiBhbnk7IH0pIHtcblxuICBwcml2YXRlIGNsb3plQ29udHJvbGxlcjogQ2xvemVDb250cm9sbGVyO1xuICBwcml2YXRlIHJlcG9zaXRvcnk6IElEYXRhUmVwb3NpdG9yeTtcbiAgcHJpdmF0ZSBzZXR0aW5nczogSVNldHRpbmdzO1xuICBwcml2YXRlIGxvY2FsaXphdGlvbjogSDVQTG9jYWxpemF0aW9uO1xuICBwcml2YXRlIG1lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZTtcblxuICBwcml2YXRlIGpRdWVyeTtcblxuICBwcml2YXRlIGNvbnRlbnRJZDogc3RyaW5nO1xuICBwcml2YXRlIHByZXZpb3VzU3RhdGU6IGFueTtcbiAgcHJpdmF0ZSBzdGF0ZTogU3RhdGVzO1xuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgaWYgdXNlciBoYXMgZW50ZXJlZCBhbnkgYW5zd2VyIHNvIGZhci5cbiAgICovXG4gIHByaXZhdGUgYW5zd2VyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWdcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnRJZFxuICAgKiBAcGFyYW0ge29iamVjdH0gY29udGVudERhdGFcbiAgICovXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogYW55LCBjb250ZW50SWQ6IHN0cmluZywgY29udGVudERhdGE6IGFueSA9IHt9KSB7XG4gICAgc3VwZXIoJ2FkdmFuY2VkLWJsYW5rcycpO1xuXG4gICAgLy8gU2V0IG1hbmRhdG9yeSBkZWZhdWx0IHZhbHVlcyBmb3IgZWRpdG9yIHdpZGdldHMgdGhhdCBjcmVhdGUgY29udGVudCB0eXBlIGluc3RhbmNlc1xuICAgIGNvbmZpZyA9IGV4dGVuZCh7XG4gICAgICBjb250ZW50OiB7XG4gICAgICAgIGJsYW5rc1RleHQ6ICcnXG4gICAgICB9LFxuICAgICAgYmVoYXZpb3VyOiB7XG4gICAgICAgIG1vZGU6ICd0eXBpbmcnLFxuICAgICAgICBzZWxlY3RBbHRlcm5hdGl2ZXM6ICdhbHRlcm5hdGl2ZXMnXG4gICAgICB9LFxuICAgICAgY29udGVudElkOiBjb250ZW50SWRcbiAgICB9LCBjb25maWcpO1xuXG4gICAgdGhpcy5qUXVlcnkgPSBINVAualF1ZXJ5O1xuICAgIHRoaXMuY29udGVudElkID0gY29udGVudElkO1xuXG4gICAgbGV0IHVud3JhcHBlciA9IG5ldyBVbnJ3YXBwZXIodGhpcy5qUXVlcnkpO1xuXG4gICAgdGhpcy5zZXR0aW5ncyA9IG5ldyBINVBTZXR0aW5ncyhjb25maWcpO1xuICAgIHRoaXMubG9jYWxpemF0aW9uID0gbmV3IEg1UExvY2FsaXphdGlvbihjb25maWcpO1xuICAgIHRoaXMucmVwb3NpdG9yeSA9IG5ldyBINVBEYXRhUmVwb3NpdG9yeShjb25maWcsIHRoaXMuc2V0dGluZ3MsIHRoaXMubG9jYWxpemF0aW9uLCA8SlF1ZXJ5U3RhdGljPnRoaXMualF1ZXJ5LCB1bndyYXBwZXIpO1xuICAgIHRoaXMubWVzc2FnZVNlcnZpY2UgPSBuZXcgTWVzc2FnZVNlcnZpY2UodGhpcy5qUXVlcnkpO1xuICAgIEJsYW5rTG9hZGVyLmluaXRpYWxpemUodGhpcy5zZXR0aW5ncywgdGhpcy5sb2NhbGl6YXRpb24sIHRoaXMualF1ZXJ5LCB0aGlzLm1lc3NhZ2VTZXJ2aWNlKTtcblxuICAgIHRoaXMuY2xvemVDb250cm9sbGVyID0gbmV3IENsb3plQ29udHJvbGxlcih0aGlzLnJlcG9zaXRvcnksIHRoaXMuc2V0dGluZ3MsIHRoaXMubG9jYWxpemF0aW9uLCB0aGlzLm1lc3NhZ2VTZXJ2aWNlKTtcblxuICAgIHRoaXMuY2xvemVDb250cm9sbGVyLm9uU2NvcmVDaGFuZ2VkID0gdGhpcy5vblNjb3JlQ2hhbmdlZDtcbiAgICB0aGlzLmNsb3plQ29udHJvbGxlci5vblNvbHZlZCA9IHRoaXMub25Tb2x2ZWQ7XG4gICAgdGhpcy5jbG96ZUNvbnRyb2xsZXIub25BdXRvQ2hlY2tlZCA9IHRoaXMub25BdXRvQ2hlY2tlZDtcbiAgICB0aGlzLmNsb3plQ29udHJvbGxlci5vblR5cGVkID0gdGhpcy5vblR5cGVkO1xuICAgIHRoaXMuY2xvemVDb250cm9sbGVyLm9uQ2xvemVSZWZyZXNoZWQgPSB0aGlzLm9uQ2xvemVSZWZyZXNoZWQ7XG5cbiAgICB0aGlzLnByZXZpb3VzU3RhdGUgPSAoY29udGVudERhdGEgJiYgY29udGVudERhdGEucHJldmlvdXNTdGF0ZSkgP1xuICAgICAgIGNvbnRlbnREYXRhLnByZXZpb3VzU3RhdGUgOlxuICAgICAgIHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCBmcm9tIG91dHNpZGUgd2hlbiB0aGUgc2NvcmUgb2YgdGhlIGNsb3plIGhhcyBjaGFuZ2VkLlxuICAgKi9cbiAgcHJpdmF0ZSBvblNjb3JlQ2hhbmdlZCA9IChzY29yZTogbnVtYmVyLCBtYXhTY29yZTogbnVtYmVyKSA9PiB7XG4gICAgaWYgKHRoaXMuY2xvemVDb250cm9sbGVyLmlzRnVsbHlGaWxsZWRPdXQpIHtcbiAgICAgIHRoaXMudHJhbnNpdGlvblN0YXRlKCk7XG4gICAgICBpZiAodGhpcy5zdGF0ZSAhPT0gU3RhdGVzLmZpbmlzaGVkKVxuICAgICAgICB0aGlzLnN0YXRlID0gU3RhdGVzLmNoZWNraW5nO1xuICAgICAgdGhpcy5zaG93RmVlZGJhY2soKTtcblxuICAgICAgLy8gU2VuZCBzY3JlZW5zaG90IHRvIHNlcnZlclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmIChINVAgJiYgSDVQLktMU2NyZWVuc2hvdCkge1xuICAgICAgICAgIEg1UC5LTFNjcmVlbnNob3QudGFrZVNjcmVlbnNob3QoXG4gICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgdGhpcy5nZXRINXBDb250YWluZXIoKS5nZXQoMClcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9LCA1MDApOyAvLyBBbGxvdyBidXR0b25zIHRvIHVwZGF0ZVxuXG4gICAgfVxuXG4gICAgdGhpcy50cmFuc2l0aW9uU3RhdGUoKTtcbiAgICB0aGlzLnRvZ2dsZUJ1dHRvblZpc2liaWxpdHkodGhpcy5zdGF0ZSk7XG4gIH1cblxuICBwcml2YXRlIG9uU29sdmVkKCkge1xuXG4gIH1cblxuICBwcml2YXRlIG9uVHlwZWQgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuc3RhdGUgPT09IFN0YXRlcy5jaGVja2luZykge1xuICAgICAgdGhpcy5zdGF0ZSA9IFN0YXRlcy5vbmdvaW5nO1xuICAgICAgdGhpcy50b2dnbGVCdXR0b25WaXNpYmlsaXR5KHRoaXMuc3RhdGUpO1xuICAgIH1cbiAgICB0aGlzLnRyaWdnZXJYQVBJKCdpbnRlcmFjdGVkJyk7XG4gICAgdGhpcy5hbnN3ZXJlZCA9IHRydWU7XG4gIH1cblxuICBwcml2YXRlIG9uQ2xvemVSZWZyZXNoZWQgPSAoKSA9PiB7XG4gICAgdGhpcy50cmlnZ2VyKCdrbGxTdG9yZVNlc3Npb25TdGF0ZScsIHVuZGVmaW5lZCwgeyBidWJibGVzOiB0cnVlLCBleHRlcm5hbDogdHJ1ZSB9KTtcbiAgfVxuXG4gIHByaXZhdGUgb25BdXRvQ2hlY2tlZCA9ICgpID0+IHtcbiAgICB0aGlzLnRyaWdnZXJYQVBJKCdpbnRlcmFjdGVkJyk7XG5cbiAgICBpZiAodGhpcy5jbG96ZUNvbnRyb2xsZXIuaXNGdWxseUZpbGxlZE91dCkge1xuICAgICAgdGhpcy50cmlnZ2VyWEFQSUFuc3dlcmVkKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCBieSBINVAuUXVlc3Rpb24uYXR0YWNoKCkuIENyZWF0ZXMgYWxsIGNvbnRlbnQgZWxlbWVudHMgYW5kIHJlZ2lzdGVycyB0aGVtXG4gICAqIHdpdGggSDVQLlF1ZXN0aW9uLlxuICAgKi9cbiAgcmVnaXN0ZXJEb21FbGVtZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnJlZ2lzdGVyTWVkaWEoKTtcbiAgICB0aGlzLnNldEludHJvZHVjdGlvbih0aGlzLnJlcG9zaXRvcnkuZ2V0VGFza0Rlc2NyaXB0aW9uKCkpO1xuXG4gICAgdGhpcy5jb250YWluZXIgPSB0aGlzLmpRdWVyeShcIjxkaXYvPlwiLCB7IFwiY2xhc3NcIjogXCJoNXAtYWR2YW5jZWQtYmxhbmtzXCIgfSk7XG4gICAgdGhpcy5zZXRDb250ZW50KHRoaXMuY29udGFpbmVyKTtcbiAgICB0aGlzLnJlZ2lzdGVyQnV0dG9ucygpO1xuXG4gICAgdGhpcy5tb3ZlVG9TdGF0ZShTdGF0ZXMub25nb2luZyk7XG5cbiAgICAvKlxuICAgICAqIFdoZW4gUmFjdGl2ZSBpcyBpbml0aWFsaXplZCwgaXQgcmVxdWlyZXMgdGhlIERPTSB0byBoYXZlIGJlZW4gcmVuZGVyZWQuXG4gICAgICogSDVQLlF1ZXN0aW9uIGRvZXNuJ3Qgb2ZmZXIgYSBjYWxsYmFjayBvciBldmVudCB0byBkZXRlY3Qgd2hlbiB0aGF0IGhhc1xuICAgICAqIGhhcHBlbmVkLCBzbyB3ZSB1c2UgaXRzIHJlc2l6ZSBjYWxsIGFzIGEgdHJpZ2dlciBhbmQgY2hlY2sgZm9yIHRoZSBET00uXG4gICAgICovXG4gICAgdGhpcy5vbigncmVzaXplJywgdGhpcy5jaGVja0RPTVByZXNlbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgY2xvemVDb250cm9sbGVyL1JhY3RpdmUgb25jZSBET00gaXMgcHJlc2VudC5cbiAgICovXG4gIHByaXZhdGUgY2hlY2tET01QcmVzZW50KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmluaXRpYWxpemVkIHx8ICFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaDVwLXF1ZXN0aW9uLWNvbnRlbnQnKSkge1xuICAgICAgcmV0dXJuOyAvLyBSZXF1aXJlZCBET00gZWxlbWVudCBpcyBub3QgcHJlc2VudCB5ZXRcbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgdGhpcyBoYW5kbGVyLCBqdXN0IG5lZWRlZCBvbmNlXG4gICAgdGhpcy5vZmYoJ3Jlc2l6ZScsIHRoaXMuY2hlY2tET01QcmVzZW50KTtcblxuICAgIC8vIERldGVybWluZSBvcmlnaW5hbCAkY29udGFpbmVyIGZvciB0aGlzIGNvbnRlbnRcbiAgICBjb25zdCAkY29udGFpbmVyID0gdGhpcy5qUXVlcnkodGhpcy5jb250YWluZXIpLmNsb3Nlc3QoJy5oNXAtcXVlc3Rpb24nKTtcblxuICAgIC8vIEluaXRpYWxpemUgY2xvemVDb250cm9sbGVyIHdpdGggUmFjdGl2ZVxuICAgIHRoaXMuY2xvemVDb250cm9sbGVyLmluaXRpYWxpemUodGhpcy5jb250YWluZXIuZ2V0KDApLCAkY29udGFpbmVyKTtcblxuICAgIGlmICh0aGlzLmNsb3plQ29udHJvbGxlci5kZXNlcmlhbGl6ZUNsb3plKHRoaXMucHJldmlvdXNTdGF0ZS5jbG96ZSkpIHtcbiAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLnByZXZpb3VzU3RhdGUuc3RhdGUgfHwgU3RhdGVzLm9uZ29pbmc7XG5cbiAgICAgIGlmICh0aGlzLnN0YXRlID09PSBTdGF0ZXMuY2hlY2tpbmcgfHwgdGhpcy5zdGF0ZSA9PT0gU3RhdGVzLmZpbmlzaGVkKSB7XG4gICAgICAgIHRoaXMub25DaGVja0Fuc3dlcigpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAodGhpcy5zdGF0ZSA9PT0gU3RhdGVzLnNob3dpbmdTb2x1dGlvbnMpe1xuICAgICAgICB0aGlzLm9uU2hvd1NvbHV0aW9uKHRydWUpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmFuc3dlcmVkID0gdGhpcy5jbG96ZUNvbnRyb2xsZXIuaXNGaWxsZWRPdXQ7XG4gICAgICB0aGlzLnRvZ2dsZUJ1dHRvblZpc2liaWxpdHkodGhpcy5zdGF0ZSk7XG4gICAgfVxuXG4gICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybnMgSlF1ZXJ5IC0gVGhlIG91dGVyIGg1cCBjb250YWluZXIuIFRoZSBsaWJyYXJ5IGNhbiBhZGQgZGlhbG9ndWVzIHRvIHRoaXNcbiAgICogZWxlbWVudC5cbiAgICovXG4gIHByaXZhdGUgZ2V0SDVwQ29udGFpbmVyKCk6IEpRdWVyeSB7XG4gICAgdmFyICRjb250ZW50ID0gdGhpcy5qUXVlcnkoJ1tkYXRhLWNvbnRlbnQtaWQ9XCInICsgdGhpcy5jb250ZW50SWQgKyAnXCJdLmg1cC1jb250ZW50Jyk7XG4gICAgdmFyICRjb250YWluZXJQYXJlbnRzID0gJGNvbnRlbnQucGFyZW50cygnLmg1cC1jb250YWluZXInKTtcblxuICAgIC8vIHNlbGVjdCBmaW5kIGNvbnRhaW5lciB0byBhdHRhY2ggZGlhbG9ncyB0b1xuICAgIHZhciAkY29udGFpbmVyO1xuICAgIGlmICgkY29udGFpbmVyUGFyZW50cy5sZW5ndGggIT09IDApIHtcbiAgICAgIC8vIHVzZSBwYXJlbnQgaGlnaGVzdCB1cCBpZiBhbnlcbiAgICAgICRjb250YWluZXIgPSAkY29udGFpbmVyUGFyZW50cy5sYXN0KCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKCRjb250ZW50Lmxlbmd0aCAhPT0gMCkge1xuICAgICAgJGNvbnRhaW5lciA9ICRjb250ZW50O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICRjb250YWluZXIgPSB0aGlzLmpRdWVyeShkb2N1bWVudC5ib2R5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gJGNvbnRhaW5lcjtcbiAgfVxuXG4gIHByaXZhdGUgcmVnaXN0ZXJNZWRpYSgpIHtcbiAgICB2YXIgbWVkaWEgPSB0aGlzLnJlcG9zaXRvcnkuZ2V0TWVkaWEoKTtcbiAgICBpZiAoIW1lZGlhIHx8ICFtZWRpYS5saWJyYXJ5KVxuICAgICAgcmV0dXJuO1xuXG4gICAgdmFyIHR5cGUgPSBtZWRpYS5saWJyYXJ5LnNwbGl0KCcgJylbMF07XG4gICAgaWYgKHR5cGUgPT09ICdINVAuSW1hZ2UnKSB7XG4gICAgICBpZiAobWVkaWEucGFyYW1zLmZpbGUpIHtcbiAgICAgICAgdGhpcy5zZXRJbWFnZShtZWRpYS5wYXJhbXMuZmlsZS5wYXRoLCB7XG4gICAgICAgICAgZGlzYWJsZUltYWdlWm9vbWluZzogdGhpcy5zZXR0aW5ncy5kaXNhYmxlSW1hZ2Vab29taW5nLFxuICAgICAgICAgIGFsdDogbWVkaWEucGFyYW1zLmFsdFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ0g1UC5WaWRlbycpIHtcbiAgICAgIGlmIChtZWRpYS5wYXJhbXMuc291cmNlcykge1xuICAgICAgICB0aGlzLnNldFZpZGVvKG1lZGlhKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlZ2lzdGVyQnV0dG9ucygpIHtcbiAgICB2YXIgJGNvbnRhaW5lciA9IHRoaXMuZ2V0SDVwQ29udGFpbmVyKCk7XG5cbiAgICBpZiAoIXRoaXMuc2V0dGluZ3MuYXV0b0NoZWNrKSB7XG4gICAgICAvLyBDaGVjayBhbnN3ZXIgYnV0dG9uXG4gICAgICB0aGlzLmFkZEJ1dHRvbignY2hlY2stYW5zd2VyJywgdGhpcy5sb2NhbGl6YXRpb24uZ2V0VGV4dEZyb21MYWJlbChMb2NhbGl6YXRpb25MYWJlbHMuY2hlY2tBbGxCdXR0b24pLFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5vbkNoZWNrQW5zd2VyKHthbnN3ZXJlZDogdHJ1ZX0pO1xuICAgICAgICB9LCB0cnVlLCB7fSwge1xuICAgICAgICBjb25maXJtYXRpb25EaWFsb2c6IHtcbiAgICAgICAgICBlbmFibGU6IHRoaXMuc2V0dGluZ3MuY29uZmlybUNoZWNrRGlhbG9nLFxuICAgICAgICAgIGwxMG46IHRoaXMubG9jYWxpemF0aW9uLmdldE9iamVjdEZvclN0cnVjdHVyZShMb2NhbGl6YXRpb25TdHJ1Y3R1cmVzLmNvbmZpcm1DaGVjayksXG4gICAgICAgICAgaW5zdGFuY2U6IHRoaXMsXG4gICAgICAgICAgJHBhcmVudEVsZW1lbnQ6ICRjb250YWluZXJcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gU2hvdyBzb2x1dGlvbiBidXR0b25cbiAgICB0aGlzLmFkZEJ1dHRvbignc2hvdy1zb2x1dGlvbicsIHRoaXMubG9jYWxpemF0aW9uLmdldFRleHRGcm9tTGFiZWwoTG9jYWxpemF0aW9uTGFiZWxzLnNob3dTb2x1dGlvbkJ1dHRvbiksXG4gICAgICB0aGlzLm9uU2hvd1NvbHV0aW9uLCB0aGlzLnNldHRpbmdzLmVuYWJsZVNvbHV0aW9uc0J1dHRvbik7XG5cbiAgICAvLyBUcnkgYWdhaW4gYnV0dG9uXG4gICAgaWYgKHRoaXMuc2V0dGluZ3MuZW5hYmxlUmV0cnkgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuYWRkQnV0dG9uKCd0cnktYWdhaW4nLCB0aGlzLmxvY2FsaXphdGlvbi5nZXRUZXh0RnJvbUxhYmVsKExvY2FsaXphdGlvbkxhYmVscy5yZXRyeUJ1dHRvbiksXG4gICAgICAgIHRoaXMub25SZXRyeSwgdHJ1ZSwge30sIHtcbiAgICAgICAgY29uZmlybWF0aW9uRGlhbG9nOiB7XG4gICAgICAgICAgZW5hYmxlOiB0aGlzLnNldHRpbmdzLmNvbmZpcm1SZXRyeURpYWxvZyxcbiAgICAgICAgICBsMTBuOiB0aGlzLmxvY2FsaXphdGlvbi5nZXRPYmplY3RGb3JTdHJ1Y3R1cmUoTG9jYWxpemF0aW9uU3RydWN0dXJlcy5jb25maXJtUmV0cnkpLFxuICAgICAgICAgIGluc3RhbmNlOiB0aGlzLFxuICAgICAgICAgICRwYXJlbnRFbGVtZW50OiAkY29udGFpbmVyXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBhbnN3ZXIuIEFsc28gdXBkYXRlcyBzdGF0ZXNcbiAgICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXM9e31dIFBhcmFtZXRlcnMuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3BhcmFtcy5za2lwWEFQSV0gSWYgdHJ1ZSwgd2lsbCBza2lwIHhBUEkuXG4gICAqL1xuICBwcml2YXRlIG9uQ2hlY2tBbnN3ZXIgPSAocGFyYW1zOiBhbnkgPSB7fSkgPT4ge1xuICAgIHRoaXMuY2xvemVDb250cm9sbGVyLmNoZWNrQWxsKCk7XG5cbiAgICBpZiAoIXBhcmFtcy5za2lwWEFQSSkge1xuICAgICAgdGhpcy50cmlnZ2VyWEFQSUFuc3dlcmVkKCk7XG4gICAgfVxuXG4gICAgdGhpcy50cmFuc2l0aW9uU3RhdGUoKTtcbiAgICBpZiAodGhpcy5zdGF0ZSAhPT0gU3RhdGVzLmZpbmlzaGVkKVxuICAgICAgdGhpcy5zdGF0ZSA9IFN0YXRlcy5jaGVja2luZztcblxuICAgIHRoaXMuc2hvd0ZlZWRiYWNrKCk7XG5cbiAgICB0aGlzLnRvZ2dsZUJ1dHRvblZpc2liaWxpdHkodGhpcy5zdGF0ZSk7XG4gIH1cblxuICBwcml2YXRlIHRyYW5zaXRpb25TdGF0ZSA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5jbG96ZUNvbnRyb2xsZXIuaXNTb2x2ZWQpIHtcbiAgICAgIHRoaXMubW92ZVRvU3RhdGUoU3RhdGVzLmZpbmlzaGVkKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG9uU2hvd1NvbHV0aW9uID0gKGZvcmNlOiBib29sZWFuKSA9PiB7XG4gICAgaWYgKCFmb3JjZSAmJiB0aGlzLnNldHRpbmdzLnNob3dTb2x1dGlvbnNSZXF1aXJlc0lucHV0ICYmICF0aGlzLmNsb3plQ29udHJvbGxlci5hbGxCbGFua3NFbnRlcmVkKSB7XG4gICAgICAvLyBSZXF1aXJlIGFuc3dlciBiZWZvcmUgc29sdXRpb24gY2FuIGJlIHZpZXdlZFxuICAgICAgdGhpcy51cGRhdGVGZWVkYmFja0NvbnRlbnQodGhpcy5sb2NhbGl6YXRpb24uZ2V0VGV4dEZyb21MYWJlbChMb2NhbGl6YXRpb25MYWJlbHMubm90RmlsbGVkT3V0V2FybmluZykpO1xuICAgICAgdGhpcy5yZWFkKHRoaXMubG9jYWxpemF0aW9uLmdldFRleHRGcm9tTGFiZWwoTG9jYWxpemF0aW9uTGFiZWxzLm5vdEZpbGxlZE91dFdhcm5pbmcpKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMubW92ZVRvU3RhdGUoU3RhdGVzLnNob3dpbmdTb2x1dGlvbnMpO1xuICAgIHRoaXMuY2xvemVDb250cm9sbGVyLnNob3dTb2x1dGlvbnMoKTtcbiAgICB0aGlzLnNob3dGZWVkYmFjaygpO1xuICB9XG5cbiAgcHJpdmF0ZSBvblJldHJ5ID0gKCkgPT4ge1xuICAgIHRoaXMucmVtb3ZlRmVlZGJhY2soKTtcbiAgICB0aGlzLmNsb3plQ29udHJvbGxlci5yZXNldCgpO1xuICAgIHRoaXMuYW5zd2VyZWQgPSBmYWxzZTtcbiAgICB0aGlzLm1vdmVUb1N0YXRlKFN0YXRlcy5vbmdvaW5nKTtcbiAgfVxuXG4gIHByaXZhdGUgc2hvd0ZlZWRiYWNrKCkge1xuICAgIHZhciBzY29yZVRleHQgPSBINVAuUXVlc3Rpb24uZGV0ZXJtaW5lT3ZlcmFsbEZlZWRiYWNrKHRoaXMubG9jYWxpemF0aW9uLmdldE9iamVjdEZvclN0cnVjdHVyZShMb2NhbGl6YXRpb25TdHJ1Y3R1cmVzLm92ZXJhbGxGZWVkYmFjayksIHRoaXMuY2xvemVDb250cm9sbGVyLmN1cnJlbnRTY29yZSAvIHRoaXMuY2xvemVDb250cm9sbGVyLm1heFNjb3JlKS5yZXBsYWNlKCdAc2NvcmUnLCB0aGlzLmNsb3plQ29udHJvbGxlci5jdXJyZW50U2NvcmUpLnJlcGxhY2UoJ0B0b3RhbCcsIHRoaXMuY2xvemVDb250cm9sbGVyLm1heFNjb3JlKTtcbiAgICB0aGlzLnNldEZlZWRiYWNrKHNjb3JlVGV4dCwgdGhpcy5jbG96ZUNvbnRyb2xsZXIuY3VycmVudFNjb3JlLCB0aGlzLmNsb3plQ29udHJvbGxlci5tYXhTY29yZSwgdGhpcy5sb2NhbGl6YXRpb24uZ2V0VGV4dEZyb21MYWJlbChMb2NhbGl6YXRpb25MYWJlbHMuc2NvcmVCYXJMYWJlbCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3dzIGFyZSBoaWRlcyBidXR0b25zIGRlcGVuZGluZyBvbiB0aGUgY3VycmVudCBzdGF0ZSBhbmQgc2V0dGluZ3MgbWFkZVxuICAgKiBieSB0aGUgY29udGVudCBjcmVhdG9yLlxuICAgKiBAcGFyYW0gIHtTdGF0ZXN9IHN0YXRlXG4gICAqL1xuICBwcml2YXRlIG1vdmVUb1N0YXRlKHN0YXRlOiBTdGF0ZXMpIHtcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgdGhpcy50b2dnbGVCdXR0b25WaXNpYmlsaXR5KHN0YXRlKTtcblxuICAgIHRoaXMudHJpZ2dlcigna2xsU3RvcmVTZXNzaW9uU3RhdGUnLCB1bmRlZmluZWQsIHsgYnViYmxlczogdHJ1ZSwgZXh0ZXJuYWw6IHRydWUgfSk7XG4gIH1cblxuICBwcml2YXRlIHRvZ2dsZUJ1dHRvblZpc2liaWxpdHkoc3RhdGU6IFN0YXRlcykge1xuICAgIGlmICh0aGlzLnNldHRpbmdzLmVuYWJsZVNvbHV0aW9uc0J1dHRvbikge1xuICAgICAgaWYgKCgoc3RhdGUgPT09IFN0YXRlcy5jaGVja2luZylcbiAgICAgICAgfHwgKHRoaXMuc2V0dGluZ3MuYXV0b0NoZWNrICYmIHN0YXRlID09PSBTdGF0ZXMub25nb2luZykpXG4gICAgICAgICYmICghdGhpcy5zZXR0aW5ncy5zaG93U29sdXRpb25zUmVxdWlyZXNJbnB1dCB8fCB0aGlzLmNsb3plQ29udHJvbGxlci5hbGxCbGFua3NFbnRlcmVkKSkge1xuICAgICAgICB0aGlzLnNob3dCdXR0b24oJ3Nob3ctc29sdXRpb24nKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmhpZGVCdXR0b24oJ3Nob3ctc29sdXRpb24nKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5zZXR0aW5ncy5lbmFibGVSZXRyeSAmJiAoc3RhdGUgPT09IFN0YXRlcy5jaGVja2luZyB8fCBzdGF0ZSA9PT0gU3RhdGVzLmZpbmlzaGVkIHx8IHN0YXRlID09PSBTdGF0ZXMuc2hvd2luZ1NvbHV0aW9ucykpIHtcbiAgICAgIHRoaXMuc2hvd0J1dHRvbigndHJ5LWFnYWluJyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5oaWRlQnV0dG9uKCd0cnktYWdhaW4nKTtcbiAgICB9XG5cblxuICAgIGlmIChzdGF0ZSA9PT0gU3RhdGVzLm9uZ29pbmcgJiYgdGhpcy5zZXR0aW5ncy5lbmFibGVDaGVja0J1dHRvbikge1xuICAgICAgdGhpcy5zaG93QnV0dG9uKCdjaGVjay1hbnN3ZXInKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmhpZGVCdXR0b24oJ2NoZWNrLWFuc3dlcicpO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZSA9PT0gU3RhdGVzLnNob3dpbmdTb2x1dGlvbnNFbWJlZGRlZCkge1xuICAgICAgdGhpcy5oaWRlQnV0dG9uKCdjaGVjay1hbnN3ZXInKTtcbiAgICAgIHRoaXMuaGlkZUJ1dHRvbigndHJ5LWFnYWluJyk7XG4gICAgICB0aGlzLmhpZGVCdXR0b24oJ3Nob3ctc29sdXRpb24nKTtcbiAgICB9XG5cbiAgICB0aGlzLnRyaWdnZXIoJ3Jlc2l6ZScpO1xuICB9XG5cbiAgcHVibGljIGdldEN1cnJlbnRTdGF0ZSA9ICgpID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IHtcbiAgICAgIGNsb3plOiB0aGlzLmNsb3plQ29udHJvbGxlci5zZXJpYWxpemVDbG96ZSgpLFxuICAgICAgc3RhdGU6IHRoaXMuc3RhdGVcbiAgICB9O1xuXG4gICAgcmV0dXJuIHN0YXRlO1xuICB9O1xuXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAqIEltcGxlbWVudGF0aW9uIG9mIFF1ZXN0aW9uIGNvbnRyYWN0ICAqXG4gICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICBwdWJsaWMgZ2V0QW5zd2VyR2l2ZW4gPSAoKTogYm9vbGVhbiA9PiB7XG4gICAgcmV0dXJuIHRoaXMuYW5zd2VyZWQgfHwgdGhpcy5jbG96ZUNvbnRyb2xsZXIubWF4U2NvcmUgPT09IDA7XG4gIH1cblxuICBwdWJsaWMgZ2V0U2NvcmUgPSAoKTogbnVtYmVyID0+IHtcbiAgICByZXR1cm4gdGhpcy5jbG96ZUNvbnRyb2xsZXIuY3VycmVudFNjb3JlO1xuICB9XG5cbiAgcHVibGljIGdldE1heFNjb3JlID0gKCk6IG51bWJlciA9PiB7XG4gICAgcmV0dXJuIHRoaXMuY2xvemVDb250cm9sbGVyLm1heFNjb3JlO1xuICB9XG5cbiAgcHVibGljIHNob3dTb2x1dGlvbnMgPSAoKSA9PiB7XG4gICAgdGhpcy5vblNob3dTb2x1dGlvbih0cnVlKTtcbiAgICB0aGlzLm1vdmVUb1N0YXRlKFN0YXRlcy5zaG93aW5nU29sdXRpb25zRW1iZWRkZWQpO1xuICB9XG5cbiAgcHVibGljIHJlc2V0VGFzayA9ICgpID0+IHtcbiAgICB0aGlzLm9uUmV0cnkoKTtcbiAgfVxuXG4gIC8qKipcbiAgICogWEFwaSBpbXBsZW1lbnRhdGlvblxuICAgKi9cblxuXG4gIC8qKlxuICAgKiBUcmlnZ2VyIHhBUEkgYW5zd2VyZWQgZXZlbnRcbiAgICovXG4gIHB1YmxpYyB0cmlnZ2VyWEFQSUFuc3dlcmVkID0gKCk6IHZvaWQgPT4ge1xuICAgIHRoaXMuYW5zd2VyZWQgPSB0cnVlO1xuICAgIHZhciB4QVBJRXZlbnQgPSB0aGlzLmNyZWF0ZVhBUElFdmVudFRlbXBsYXRlKCdhbnN3ZXJlZCcpO1xuICAgIHRoaXMuYWRkUXVlc3Rpb25Ub1hBUEkoeEFQSUV2ZW50KTtcbiAgICB0aGlzLmFkZFJlc3BvbnNlVG9YQVBJKHhBUElFdmVudCk7XG4gICAgdGhpcy50cmlnZ2VyKHhBUElFdmVudCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCB4QVBJIGRhdGEuXG4gICAqIENvbnRyYWN0IHVzZWQgYnkgcmVwb3J0IHJlbmRlcmluZyBlbmdpbmUuXG4gICAqXG4gICAqIEBzZWUgY29udHJhY3QgYXQge0BsaW5rIGh0dHBzOi8vaDVwLm9yZy9kb2N1bWVudGF0aW9uL2RldmVsb3BlcnMvY29udHJhY3RzI2d1aWRlcy1oZWFkZXItNn1cbiAgICovXG4gIHB1YmxpYyBnZXRYQVBJRGF0YSA9ICgpID0+IHtcbiAgICB2YXIgeEFQSUV2ZW50ID0gdGhpcy5jcmVhdGVYQVBJRXZlbnRUZW1wbGF0ZSgnYW5zd2VyZWQnKTtcbiAgICB0aGlzLmFkZFF1ZXN0aW9uVG9YQVBJKHhBUElFdmVudCk7XG4gICAgdGhpcy5hZGRSZXNwb25zZVRvWEFQSSh4QVBJRXZlbnQpO1xuICAgIHJldHVybiB7XG4gICAgICBzdGF0ZW1lbnQ6IHhBUElFdmVudC5kYXRhLnN0YXRlbWVudFxuICAgIH07XG4gIH07XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlIHhBUEkgb2JqZWN0IGRlZmluaXRpb24gdXNlZCBpbiB4QVBJIHN0YXRlbWVudHMuXG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICovXG4gIHB1YmxpYyBnZXR4QVBJRGVmaW5pdGlvbiA9ICgpOiBYQVBJQWN0aXZpdHlEZWZpbml0aW9uID0+IHtcbiAgICBjb25zdCBkZWZpbml0aW9uID0gbmV3IFhBUElBY3Rpdml0eURlZmluaXRpb24oKTtcblxuICAgIGRlZmluaXRpb24uZGVzY3JpcHRpb24gPSB7XG4gICAgICAnZW4tVVMnOiAnPHA+JyArIHRoaXMucmVwb3NpdG9yeS5nZXRUYXNrRGVzY3JpcHRpb24oKSArICc8L3A+JyArIHRoaXMucmVwb3NpdG9yeS5nZXRDbG96ZVRleHQoKS5yZXBsYWNlKC9fXyhfKSsvZywgJ19fX19fX19fX18nKVxuICAgIH07XG5cbiAgICBkZWZpbml0aW9uLnR5cGUgPSAnaHR0cDovL2FkbG5ldC5nb3YvZXhwYXBpL2FjdGl2aXRpZXMvY21pLmludGVyYWN0aW9uJztcbiAgICBkZWZpbml0aW9uLmludGVyYWN0aW9uVHlwZSA9ICdmaWxsLWluJzsgLy8gV2UgdXNlIHRoZSAnZmlsbC1pbicgdHlwZSBldmVuIGluIHNlbGVjdCBtb2RlLCBhcyB0aGUgeEFQSSBmb3JtYXQgZm9yIHNlbGVjdGlvbnMgZG9lc24ndCByZWFsbHkgY2F0ZXIgZm9yIHNlcXVlbmNlcy5cblxuICAgIGNvbnN0IGNvcnJlY3RSZXNwb25zZXNQYXR0ZXJuUHJlZml4ID0gJ3tjYXNlX21hdHRlcnM9JyArIHRoaXMuc2V0dGluZ3MuY2FzZVNlbnNpdGl2ZSArICd9JztcblxuICAgIGNvbnN0IGNvcnJlY3RBbnN3ZXJMaXN0ID0gdGhpcy5jbG96ZUNvbnRyb2xsZXIuZ2V0Q29ycmVjdEFuc3dlckxpc3QoKTtcblxuICAgIC8vIEg1UCB1c2VzIGV4dGVuc2lvbiBpbnN0ZWFkIG9mIGZ1bGwgY29ycmVjdCByZXNwb25zZXMgcGF0dGVybiB0byBjb3VudGVyIGNvbXBsZXhpdHlcbiAgICBjb25zdCBmaXJzdEFsdGVybmF0aXZlcyA9IGNvcnJlY3RBbnN3ZXJMaXN0LnJlZHVjZSgocmVzdWx0LCBsaXN0KSA9PiB7XG4gICAgICByZXN1bHQucHVzaChsaXN0WzBdKTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSwgW10pLmpvaW4oJ1ssXScpO1xuICAgIGRlZmluaXRpb24uY29ycmVjdFJlc3BvbnNlc1BhdHRlcm4gPSBbYCR7Y29ycmVjdFJlc3BvbnNlc1BhdHRlcm5QcmVmaXh9JHtmaXJzdEFsdGVybmF0aXZlc31gXTtcblxuICAgIC8vIEFkZCB0aGUgSDVQIEFsdGVybmF0aXZlIGV4dGVuc2lvbiB3aGljaCBwcm92aWRlcyBhbGwgdGhlIGNvbWJpbmF0aW9ucyBvZiBkaWZmZXJlbnQgYW5zd2Vyc1xuICAgIC8vIFJlcG9ydGluZyBzb2Z0d2FyZSB3aWxsIG5lZWQgdG8gc3VwcG9ydCB0aGlzIGV4dGVuc2lvbiBmb3IgYWx0ZXJuYXRpdmVzIHRvIHdvcmsuXG4gICAgZGVmaW5pdGlvbi5leHRlbnNpb25zID0gZGVmaW5pdGlvbi5leHRlbnNpb25zIHx8IHt9O1xuICAgIGRlZmluaXRpb24uZXh0ZW5zaW9uc1tYQVBJX0NBU0VfU0VOU0lUSVZJVFldID0gdGhpcy5zZXR0aW5ncy5jYXNlU2Vuc2l0aXZlO1xuICAgIGRlZmluaXRpb24uZXh0ZW5zaW9uc1tYQVBJX0FMVEVSTkFUSVZFX0VYVEVOU0lPTl0gPSBjb3JyZWN0QW5zd2VyTGlzdDtcblxuICAgIHJldHVybiBkZWZpbml0aW9uO1xuICB9O1xuXG4gIC8qKlxuICAgKiBBZGQgdGhlIHF1ZXN0aW9uIGl0c2VsZiB0byB0aGUgZGVmaW5pdGlvbiBwYXJ0IG9mIGFuIHhBUElFdmVudFxuICAgKi9cbiAgcHVibGljIGFkZFF1ZXN0aW9uVG9YQVBJID0gKHhBUElFdmVudCkgPT4ge1xuICAgIHZhciBkZWZpbml0aW9uID0geEFQSUV2ZW50LmdldFZlcmlmaWVkU3RhdGVtZW50VmFsdWUoWydvYmplY3QnLCAnZGVmaW5pdGlvbiddKTtcbiAgICB0aGlzLmpRdWVyeS5leHRlbmQodHJ1ZSwgZGVmaW5pdGlvbiwgdGhpcy5nZXR4QVBJRGVmaW5pdGlvbigpKTtcblxuICAgIC8vIFNldCByZXBvcnRpbmcgbW9kdWxlIHZlcnNpb24gaWYgYWx0ZXJuYXRpdmUgZXh0ZW5zaW9uIGlzIHVzZWRcbiAgICBpZiAodGhpcy5jbG96ZUNvbnRyb2xsZXIuaGFzQWx0ZXJuYXRpdmVzKSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0geEFQSUV2ZW50LmdldFZlcmlmaWVkU3RhdGVtZW50VmFsdWUoWydjb250ZXh0J10pO1xuICAgICAgY29udGV4dC5leHRlbnNpb25zID0gY29udGV4dC5leHRlbnNpb25zIHx8IHt9O1xuICAgICAgY29udGV4dC5leHRlbnNpb25zW1hBUElfUkVQT1JUSU5HX1ZFUlNJT05fRVhURU5TSU9OXSA9ICcxLjAuMCc7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBBZGQgdGhlIHJlc3BvbnNlIHBhcnQgdG8gYW4geEFQSSBldmVudFxuICAgKlxuICAgKiBAcGFyYW0ge0g1UC5YQVBJRXZlbnR9IHhBUElFdmVudFxuICAgKiAgVGhlIHhBUEkgZXZlbnQgd2Ugd2lsbCBhZGQgYSByZXNwb25zZSB0b1xuICAgKi9cbiAgcHVibGljIGFkZFJlc3BvbnNlVG9YQVBJID0gKHhBUElFdmVudCkgPT4ge1xuICAgIHhBUElFdmVudC5zZXRTY29yZWRSZXN1bHQodGhpcy5jbG96ZUNvbnRyb2xsZXIuY3VycmVudFNjb3JlLCB0aGlzLmNsb3plQ29udHJvbGxlci5tYXhTY29yZSwgdGhpcyk7XG4gICAgeEFQSUV2ZW50LmRhdGEuc3RhdGVtZW50LnJlc3VsdC5yZXNwb25zZSA9IHRoaXMuZ2V0eEFQSVJlc3BvbnNlKCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlIHhBUEkgdXNlciByZXNwb25zZSwgdXNlZCBpbiB4QVBJIHN0YXRlbWVudHMuXG4gICAqIEByZXR1cm4ge3N0cmluZ30gVXNlciBhbnN3ZXJzIHNlcGFyYXRlZCBieSB0aGUgXCJbLF1cIiBwYXR0ZXJuXG4gICAqL1xuICBwdWJsaWMgZ2V0eEFQSVJlc3BvbnNlID0gKCk6IHN0cmluZyA9PiB7XG4gICAgdmFyIHVzZXJzQW5zd2VycyA9ICh0aGlzLmdldEN1cnJlbnRTdGF0ZSgpKS5jbG96ZTtcbiAgICByZXR1cm4gdXNlcnNBbnN3ZXJzLmpvaW4oJ1ssXScpO1xuICB9O1xufVxuIiwiaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9tZXNzYWdlLXNlcnZpY2UnO1xuaW1wb3J0IHsgSGlnaGxpZ2h0IH0gZnJvbSAnLi4vbW9kZWxzL2hpZ2hsaWdodCc7XG5pbXBvcnQgeyBBbnN3ZXIgfSBmcm9tICcuLi9tb2RlbHMvYW5zd2VyJztcbmltcG9ydCB7IEJsYW5rIH0gZnJvbSAnLi4vbW9kZWxzL2JsYW5rJztcbmltcG9ydCB7IEg1UExvY2FsaXphdGlvbiB9IGZyb20gJy4uL3NlcnZpY2VzL2xvY2FsaXphdGlvbic7XG5pbXBvcnQgeyBJU2V0dGluZ3MgfSBmcm9tICcuLi9zZXJ2aWNlcy9zZXR0aW5ncyc7XG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSBcIi4uL21vZGVscy9tZXNzYWdlXCI7XG5pbXBvcnQgeyBTbmlwcGV0IH0gZnJvbSAnLi4vbW9kZWxzL3NuaXBwZXQnO1xuXG5leHBvcnQgY2xhc3MgQmxhbmtMb2FkZXIge1xuXG4gIHByaXZhdGUgY29uc3RydWN0b3IocHJpdmF0ZSBzZXR0aW5nczogSVNldHRpbmdzLCBwcml2YXRlIGxvY2FsaXphdGlvbjogSDVQTG9jYWxpemF0aW9uLCBwcml2YXRlIGpxdWVyeTogSlF1ZXJ5U3RhdGljLCBwcml2YXRlIG1lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSkgeyB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBCbGFua0xvYWRlcjtcbiAgcHVibGljIHN0YXRpYyBpbml0aWFsaXplKHNldHRpbmdzOiBJU2V0dGluZ3MsIGxvY2FsaXphdGlvbjogSDVQTG9jYWxpemF0aW9uLCBqcXVlcnk6IEpRdWVyeVN0YXRpYywgbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlKTogQmxhbmtMb2FkZXIge1xuICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IEJsYW5rTG9hZGVyKHNldHRpbmdzLCBsb2NhbGl6YXRpb24sIGpxdWVyeSwgbWVzc2FnZVNlcnZpY2UpO1xuICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGluc3RhbmNlKCk6IEJsYW5rTG9hZGVyIHtcbiAgICBpZiAodGhpcy5faW5zdGFuY2UpXG4gICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG5cbiAgICB0aHJvdyBcIkJsYW5rTG9hZGVyIG11c3QgYmUgaW5pdGlhbGl6ZWQgYmVmb3JlIHVzZS5cIjtcbiAgfVxuXG4gIHByaXZhdGUgZGVjb2RlSHRtbChodG1sOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHZhciBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBlbGVtLmlubmVySFRNTCA9IGh0bWw7XG4gICAgcmV0dXJuIGVsZW0udmFsdWU7XG4gIH1cblxuICBwdWJsaWMgY3JlYXRlQmxhbmsoaWQ6IHN0cmluZywgY29ycmVjdFRleHQ6IHN0cmluZywgaGludFRleHQ6IHN0cmluZywgaW5jb3JyZWN0QW5zd2VyczogYW55W10sIHBsYWNlaG9sZGVyczogbnVtYmVyKTogQmxhbmsge1xuICAgIHZhciBibGFuayA9IG5ldyBCbGFuayh0aGlzLnNldHRpbmdzLCB0aGlzLmxvY2FsaXphdGlvbiwgdGhpcy5qcXVlcnksIHRoaXMubWVzc2FnZVNlcnZpY2UsIGlkLCBwbGFjZWhvbGRlcnMpXG4gICAgaWYgKGNvcnJlY3RUZXh0KSB7XG4gICAgICBjb3JyZWN0VGV4dCA9IHRoaXMuZGVjb2RlSHRtbChjb3JyZWN0VGV4dCk7XG4gICAgICBibGFuay5hZGRDb3JyZWN0QW5zd2VyKG5ldyBBbnN3ZXIoY29ycmVjdFRleHQsIFwiXCIsIGZhbHNlLCAwLCB0aGlzLnNldHRpbmdzKSk7XG4gICAgfVxuICAgIGJsYW5rLnNldEhpbnQobmV3IE1lc3NhZ2UoaGludFRleHQgPyBoaW50VGV4dCA6IFwiXCIsIGZhbHNlLCAwKSk7XG5cbiAgICBpZiAoaW5jb3JyZWN0QW5zd2Vycykge1xuICAgICAgZm9yICh2YXIgaDVwSW5jb3JyZWN0QW5zd2VyIG9mIGluY29ycmVjdEFuc3dlcnMpIHtcbiAgICAgICAgYmxhbmsuYWRkSW5jb3JyZWN0QW5zd2VyKHRoaXMuZGVjb2RlSHRtbChoNXBJbmNvcnJlY3RBbnN3ZXIuaW5jb3JyZWN0QW5zd2VyVGV4dCksIGg1cEluY29ycmVjdEFuc3dlci5pbmNvcnJlY3RBbnN3ZXJGZWVkYmFjaywgaDVwSW5jb3JyZWN0QW5zd2VyLnNob3dIaWdobGlnaHQsIGg1cEluY29ycmVjdEFuc3dlci5oaWdobGlnaHQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBibGFuaztcbiAgfVxuXG4gIHB1YmxpYyByZXBsYWNlU25pcHBldHMoYmxhbms6IEJsYW5rLCBzbmlwcGV0czogU25pcHBldFtdKSB7XG4gICAgYmxhbmsuY29ycmVjdEFuc3dlcnMuY29uY2F0KGJsYW5rLmluY29ycmVjdEFuc3dlcnMpXG4gICAgICAuZm9yRWFjaChhbnN3ZXIgPT4gYW5zd2VyLm1lc3NhZ2UudGV4dCA9IHRoaXMuZ2V0U3RyaW5nV2l0aFNuaXBwZXRzKGFuc3dlci5tZXNzYWdlLnRleHQsIHNuaXBwZXRzKSk7XG4gICAgYmxhbmsuaGludC50ZXh0ID0gdGhpcy5nZXRTdHJpbmdXaXRoU25pcHBldHMoYmxhbmsuaGludC50ZXh0LCBzbmlwcGV0cyk7XG4gIH1cblxuICBwcml2YXRlIGdldFN0cmluZ1dpdGhTbmlwcGV0cyh0ZXh0OiBzdHJpbmcsIHNuaXBwZXRzOiBTbmlwcGV0W10pOiBzdHJpbmcge1xuICAgIGlmICghdGV4dCB8fCB0ZXh0ID09PSB1bmRlZmluZWQpXG4gICAgICByZXR1cm4gXCJcIjtcblxuICAgIGlmKCFzbmlwcGV0cylcbiAgICAgIHJldHVybiB0ZXh0O1xuXG4gICAgZm9yICh2YXIgc25pcHBldCBvZiBzbmlwcGV0cykge1xuICAgICAgaWYgKHNuaXBwZXQubmFtZSA9PT0gdW5kZWZpbmVkIHx8IHNuaXBwZXQubmFtZSA9PT0gXCJcIiB8fCBzbmlwcGV0LnRleHQgPT09IHVuZGVmaW5lZCB8fCBzbmlwcGV0LnRleHQgPT09IFwiXCIpXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgdGV4dCA9IHRleHQucmVwbGFjZShcIkBcIiArIHNuaXBwZXQubmFtZSwgc25pcHBldC50ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGV4dDtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIHRoZSBoaWdobGlnaHQgb2JqZWN0cyB0byB0aGUgYW5zd2VycyBpbiB0aGUgY29ycmVjdCBhbmQgaW5jb3JyZWN0IGFuc3dlciBsaXN0LlxuICAgKiBAcGFyYW0gIHtIaWdobGlnaHRbXX0gaGlnaGxpZ2h0c0JlZm9yZSAtIEFsbCBoaWdobGlnaHRzIGNvbWluZyBiZWZvcmUgdGhlIGJsYW5rLlxuICAgKiBAcGFyYW0gIHtIaWdobGlnaHRbXX0gaGlnaGxpZ2h0c0FmdGVyIC0gQWxsIGhpZ2hsaWdodHMgY29taW5nIGFmdGVyIHRoZSBibGFuay5cbiAgICovXG4gIHB1YmxpYyBsaW5rSGlnaGxpZ2h0SWRUb09iamVjdChibGFuazogQmxhbmssIGhpZ2hsaWdodHNCZWZvcmU6IEhpZ2hsaWdodFtdLCBoaWdobGlnaHRzQWZ0ZXI6IEhpZ2hsaWdodFtdKSB7XG4gICAgZm9yIChsZXQgYW5zd2VyIG9mIGJsYW5rLmNvcnJlY3RBbnN3ZXJzKSB7XG4gICAgICBhbnN3ZXIubGlua0hpZ2hsaWdodElkVG9PYmplY3QoaGlnaGxpZ2h0c0JlZm9yZSwgaGlnaGxpZ2h0c0FmdGVyKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBhbnN3ZXIgb2YgYmxhbmsuaW5jb3JyZWN0QW5zd2Vycykge1xuICAgICAgYW5zd2VyLmxpbmtIaWdobGlnaHRJZFRvT2JqZWN0KGhpZ2hsaWdodHNCZWZvcmUsIGhpZ2hsaWdodHNBZnRlcik7XG4gICAgfVxuXG4gICAgYmxhbmsuaGludC5saW5rSGlnaGxpZ2h0KGhpZ2hsaWdodHNCZWZvcmUsIGhpZ2hsaWdodHNBZnRlcik7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQmxhbmtMb2FkZXIgfSBmcm9tICcuL2JsYW5rLWxvYWRlcic7XG5pbXBvcnQgeyBDbG96ZUVsZW1lbnQsIENsb3plRWxlbWVudFR5cGUgfSBmcm9tICcuLi9tb2RlbHMvY2xvemUtZWxlbWVudCc7XG5pbXBvcnQgeyBCbGFuayB9IGZyb20gJy4uL21vZGVscy9ibGFuayc7XG5pbXBvcnQgeyBIaWdobGlnaHQgfSBmcm9tICcuLi9tb2RlbHMvaGlnaGxpZ2h0JztcbmltcG9ydCB7IENsb3plIH0gZnJvbSBcIi4uL21vZGVscy9jbG96ZVwiO1xuXG4vKipcbiAqIExvYWRzIGEgY2xvemUgb2JqZWN0LlxuICovXG5leHBvcnQgY2xhc3MgQ2xvemVMb2FkZXIge1xuICBwcml2YXRlIHN0YXRpYyBub3JtYWxpemVkQmxhbmtNYXJrZXIgPSAnX19fJztcbiAgXG4gIC8qKlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IGh0bWwgLSBUaGUgaHRtbCBzdHJpbmcgdGhhdCBjb250YWlucyB0aGUgY2xvemUgd2l0aCBibGFua3MgbWFya2luZyBhbmQgaGlnaGxpZ2h0IG1hcmtpbmdzLlxuICAgKiBAcGFyYW0gIHtCbGFua1tdfSBibGFua3MgLSBBbGwgYmxhbmtzIGFzIGVudGVyZWQgYnkgdGhlIGNvbnRlbnQgYXV0aG9yLlxuICAgKiBAcmV0dXJucyBDbG96ZVxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBjcmVhdGVDbG96ZShodG1sOiBzdHJpbmcsIGJsYW5rczogQmxhbmtbXSk6IENsb3plIHtcbiAgICB2YXIgb3JkZXJlZEFsbEVsZW1lbnRzTGlzdDogQ2xvemVFbGVtZW50W10gPSBuZXcgQXJyYXkoKTtcbiAgICB2YXIgaGlnaGxpZ2h0SW5zdGFuY2VzOiBIaWdobGlnaHRbXSA9IG5ldyBBcnJheSgpO1xuICAgIHZhciBibGFua3NJbnN0YW5jZXM6IEJsYW5rW10gPSBuZXcgQXJyYXkoKTtcblxuICAgIGh0bWwgPSBDbG96ZUxvYWRlci5ub3JtYWxpemVCbGFua01hcmtpbmdzKGh0bWwpO1xuXG4gICAgdmFyIGNvbnZlcnNpb25SZXN1bHQgPSBDbG96ZUxvYWRlci5jb252ZXJ0TWFya3VwVG9TcGFucyhodG1sLCBibGFua3MpO1xuICAgIGh0bWwgPSBjb252ZXJzaW9uUmVzdWx0Lmh0bWw7XG4gICAgb3JkZXJlZEFsbEVsZW1lbnRzTGlzdCA9IGNvbnZlcnNpb25SZXN1bHQub3JkZXJlZEFsbEVsZW1lbnRzTGlzdDtcbiAgICBoaWdobGlnaHRJbnN0YW5jZXMgPSBjb252ZXJzaW9uUmVzdWx0LmhpZ2hsaWdodEluc3RhbmNlcztcbiAgICBibGFua3NJbnN0YW5jZXMgPSBjb252ZXJzaW9uUmVzdWx0LmJsYW5rc0luc3RhbmNlcztcblxuICAgIENsb3plTG9hZGVyLmxpbmtIaWdobGlnaHRzT2JqZWN0cyhvcmRlcmVkQWxsRWxlbWVudHNMaXN0LCBoaWdobGlnaHRJbnN0YW5jZXMsIGJsYW5rc0luc3RhbmNlcyk7XG5cbiAgICB2YXIgY2xvemUgPSBuZXcgQ2xvemUoKTtcbiAgICBjbG96ZS5odG1sID0gaHRtbDtcbiAgICBjbG96ZS5ibGFua3MgPSBibGFua3NJbnN0YW5jZXM7XG4gICAgY2xvemUuaGlnaGxpZ2h0cyA9IGhpZ2hsaWdodEluc3RhbmNlcztcblxuICAgIHJldHVybiBjbG96ZTtcbiAgfVxuXG4gICAvKipcbiAgICogQ29udmVydHMgISFzaWduYWwhISBoaWdobGlnaHQgbWFya3VwIGFuZCBfX18gIGJsYW5rIG1hcmt1cCBpbnRvIDxzcGFuPi4uLjwvc3Bhbj4uXG4gICAqIFJldHVybnMgdGhlIHJlc3VsdGluZyBodG1sIHN0cmluZyBhbmQgdGhyZWUgbGlzdHMgb2YgYWxsIGFjdGl2ZSBlbGVtZW50cyB1c2VkIGluIHRoZSBjbG96ZTpcbiAgICogICAgb3JkZXJlZEFsbEVsZW1lbnRzOiBoaWdobGlnaHRzIGFuZCBibGFua3MgaW4gdGhlIG9yZGVyIG9mIGFwcGVhcmFuY2UgaW4gdGhlIGh0bWwuXG4gICAqICAgIGhpZ2hsaWdodEluc3RhbmNlczogb25seSBoaWdobGlnaHRzIGluIHRoZSBvcmRlciBvZiBhcHBlYXJhbmNlXG4gICAqICAgIGJsYW5rc0luc3RhbmNlczogb25seSBibGFua3MgaW4gdGhlIG9yZGVyIG9mIGFwcGVhcmFuY2VcbiAgICogQHBhcmFtICB7c3RyaW5nfSBodG1sXG4gICAqIEBwYXJhbSAge0JsYW5rW119IGJsYW5rc1xuICAgKiBAcmV0dXJucyBMaXN0cyBvZiBhY3RpdmUgZWxlbWVudHMgKHNlZSBkZXNjcmlwdGlvbikuXG4gICAqL1xuICBwcml2YXRlIHN0YXRpYyBjb252ZXJ0TWFya3VwVG9TcGFucyhodG1sOiBzdHJpbmcsIGJsYW5rczogQmxhbmtbXSk6IHsgaHRtbDogc3RyaW5nLCBvcmRlcmVkQWxsRWxlbWVudHNMaXN0OiBDbG96ZUVsZW1lbnRbXSwgaGlnaGxpZ2h0SW5zdGFuY2VzOiBIaWdobGlnaHRbXSwgYmxhbmtzSW5zdGFuY2VzOiBCbGFua1tdIH0ge1xuICAgIHZhciBvcmRlcmVkQWxsRWxlbWVudHNMaXN0OiBDbG96ZUVsZW1lbnRbXSA9IG5ldyBBcnJheSgpO1xuICAgIHZhciBoaWdobGlnaHRJbnN0YW5jZXM6IEhpZ2hsaWdodFtdID0gbmV3IEFycmF5KCk7XG4gICAgdmFyIGJsYW5rc0luc3RhbmNlczogQmxhbmtbXSA9IG5ldyBBcnJheSgpO1xuXG4gICAgdmFyIGV4Y2xhbWF0aW9uTWFya1JlZ0V4cCA9IC8hISguezEsNDB9PykhIS9pO1xuICAgIHZhciBoaWdobGlnaHRDb3VudGVyID0gMDtcbiAgICBsZXQgYmxhbmtDb3VudGVyID0gMDtcblxuICAgIC8vIFNlYXJjaGVzIHRoZSBodG1sIHN0cmluZyBmb3IgaGlnaGxpZ2h0cyBhbmQgYmxhbmtzIGFuZCBpbnNlcnRzIHNwYW5zLiBcbiAgICBkbyB7XG4gICAgICB2YXIgbmV4dEhpZ2hsaWdodE1hdGNoID0gaHRtbC5tYXRjaChleGNsYW1hdGlvbk1hcmtSZWdFeHApO1xuICAgICAgdmFyIG5leHRCbGFua0luZGV4ID0gaHRtbC5pbmRleE9mKENsb3plTG9hZGVyLm5vcm1hbGl6ZWRCbGFua01hcmtlcik7XG5cbiAgICAgIGlmIChuZXh0SGlnaGxpZ2h0TWF0Y2ggJiYgKChuZXh0SGlnaGxpZ2h0TWF0Y2guaW5kZXggPCBuZXh0QmxhbmtJbmRleCkgfHwgKG5leHRCbGFua0luZGV4IDwgMCkpKSB7XG4gICAgICAgIC8vIG5leHQgYWN0aXZlIGVsZW1lbnQgaXMgYSBoaWdobGlnaHRcbiAgICAgICAgdmFyIGhpZ2hsaWdodCA9IG5ldyBIaWdobGlnaHQobmV4dEhpZ2hsaWdodE1hdGNoWzFdLCBgaGlnaGxpZ2h0XyR7aGlnaGxpZ2h0Q291bnRlcn1gKTtcbiAgICAgICAgaGlnaGxpZ2h0SW5zdGFuY2VzLnB1c2goaGlnaGxpZ2h0KTtcbiAgICAgICAgb3JkZXJlZEFsbEVsZW1lbnRzTGlzdC5wdXNoKGhpZ2hsaWdodCk7XG4gICAgICAgIGh0bWwgPSBodG1sLnJlcGxhY2UoZXhjbGFtYXRpb25NYXJrUmVnRXhwLCBgPHNwYW4gaWQ9J2NvbnRhaW5lcl9oaWdobGlnaHRfJHtoaWdobGlnaHRDb3VudGVyfSc+PC9zcGFuPmApO1xuICAgICAgICBoaWdobGlnaHRDb3VudGVyKys7XG4gICAgICB9IGVsc2UgaWYgKG5leHRCbGFua0luZGV4ID49IDApIHtcbiAgICAgICAgLy8gbmV4dCBhY3RpdmUgZWxlbWVudCBpcyBhIGJsYW5rXG4gICAgICAgIGlmIChibGFua0NvdW50ZXIgPj0gYmxhbmtzLmxlbmd0aCkge1xuICAgICAgICAgIC8vIGlmIHRoZSBibGFuayBpcyBub3QgaW4gdGhlIHJlcG9zaXRvcnkgKFRoZSBjb250ZW50IGF1dGhvciBoYXMgbWFya2VkIHRvbyBtYW55IGJsYW5rcyBpbiB0aGUgdGV4dCwgYnV0IG5vdCBlbnRlcmVkIGNvcnJlY3QgYW5zd2Vycy4pXG4gICAgICAgICAgaHRtbCA9IGh0bWwucmVwbGFjZShDbG96ZUxvYWRlci5ub3JtYWxpemVkQmxhbmtNYXJrZXIsIFwiPHNwYW4+PC9zcGFuPlwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB2YXIgYmxhbmsgPSBibGFua3NbYmxhbmtDb3VudGVyXTtcbiAgICAgICAgICBibGFua3NJbnN0YW5jZXMucHVzaChibGFuayk7XG4gICAgICAgICAgb3JkZXJlZEFsbEVsZW1lbnRzTGlzdC5wdXNoKGJsYW5rKTtcbiAgICAgICAgICBodG1sID0gaHRtbC5yZXBsYWNlKENsb3plTG9hZGVyLm5vcm1hbGl6ZWRCbGFua01hcmtlciwgYDxzcGFuIGlkPSdjb250YWluZXJfJHtibGFuay5pZH0nPjwvc3Bhbj5gKTtcbiAgICAgICAgICBibGFua0NvdW50ZXIrKztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB3aGlsZSAobmV4dEhpZ2hsaWdodE1hdGNoIHx8IChuZXh0QmxhbmtJbmRleCA+PSAwKSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgaHRtbDogaHRtbCxcbiAgICAgIG9yZGVyZWRBbGxFbGVtZW50c0xpc3Q6IG9yZGVyZWRBbGxFbGVtZW50c0xpc3QsXG4gICAgICBoaWdobGlnaHRJbnN0YW5jZXM6IGhpZ2hsaWdodEluc3RhbmNlcyxcbiAgICAgIGJsYW5rc0luc3RhbmNlczogYmxhbmtzSW5zdGFuY2VzXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb29rcyBmb3IgYWxsIGluc3RhbmNlcyBvZiBtYXJrZWQgYmxhbmtzIGFuZCByZXBsYWNlcyB0aGVtIHdpdGggX19fLiBcbiAgICogQHBhcmFtICB7c3RyaW5nfSBodG1sXG4gICAqIEByZXR1cm5zIHN0cmluZ1xuICAgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgbm9ybWFsaXplQmxhbmtNYXJraW5ncyhodG1sOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHZhciB1bmRlcmxpbmVCbGFua1JlZ0V4ID0gL197Myx9L2c7XG4gICAgaHRtbCA9IGh0bWwucmVwbGFjZSh1bmRlcmxpbmVCbGFua1JlZ0V4LCBDbG96ZUxvYWRlci5ub3JtYWxpemVkQmxhbmtNYXJrZXIpO1xuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgIC8qKlxuICAgKiBJdGVyYXRlcyB0aHJvdWdoIGFsbCBibGFua3MgYW5kIGNhbGxzIHRoZWlyIGxpbmtIaWdobGlnaHRJZHNUb09iamVjdHMoLi4uKS5cbiAgICogQHBhcmFtIG9yZGVyZWRBbGxFbGVtZW50c0xpc3QgXG4gICAqIEBwYXJhbSBoaWdobGlnaHRJbnN0YW5jZXMgXG4gICAqIEBwYXJhbSBibGFua3NJbnN0YW5jZXMgXG4gICAqL1xuICBwcml2YXRlIHN0YXRpYyBsaW5rSGlnaGxpZ2h0c09iamVjdHMob3JkZXJlZEFsbEVsZW1lbnRzTGlzdDogQ2xvemVFbGVtZW50W10sIGhpZ2hsaWdodEluc3RhbmNlczogSGlnaGxpZ2h0W10sIGJsYW5rc0luc3RhbmNlczogQmxhbmtbXSk6IHZvaWQge1xuICAgIGZvciAodmFyIGJsYW5rIG9mIGJsYW5rc0luc3RhbmNlcykge1xuICAgICAgdmFyIG5leHRCbGFua0luZGV4SW5BcnJheSA9IG9yZGVyZWRBbGxFbGVtZW50c0xpc3QuaW5kZXhPZihibGFuayk7XG4gICAgICB2YXIgaGlnaGxpZ2h0c0JlZm9yZUJsYW5rID0gb3JkZXJlZEFsbEVsZW1lbnRzTGlzdFxuICAgICAgICAuc2xpY2UoMCwgbmV4dEJsYW5rSW5kZXhJbkFycmF5KVxuICAgICAgICAuZmlsdGVyKGUgPT4gZS50eXBlID09PSBDbG96ZUVsZW1lbnRUeXBlLkhpZ2hsaWdodClcbiAgICAgICAgLm1hcChlID0+IGUgYXMgSGlnaGxpZ2h0KVxuICAgICAgICAucmV2ZXJzZSgpO1xuICAgICAgdmFyIGhpZ2hsaWdodHNBZnRlckJsYW5rID0gb3JkZXJlZEFsbEVsZW1lbnRzTGlzdFxuICAgICAgICAuc2xpY2UobmV4dEJsYW5rSW5kZXhJbkFycmF5ICsgMSlcbiAgICAgICAgLmZpbHRlcihlID0+IGUudHlwZSA9PT0gQ2xvemVFbGVtZW50VHlwZS5IaWdobGlnaHQpXG4gICAgICAgIC5tYXAoZSA9PiBlIGFzIEhpZ2hsaWdodCk7XG4gICAgICBCbGFua0xvYWRlci5pbnN0YW5jZS5saW5rSGlnaGxpZ2h0SWRUb09iamVjdChibGFuaywgaGlnaGxpZ2h0c0JlZm9yZUJsYW5rLCBoaWdobGlnaHRzQWZ0ZXJCbGFuayk7XG4gICAgfVxuICB9XG59IiwiaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9tZXNzYWdlLXNlcnZpY2UnO1xuaW1wb3J0IHsgQmxhbmtMb2FkZXIgfSBmcm9tICcuLi9jb250ZW50LWxvYWRlcnMvYmxhbmstbG9hZGVyJztcbmltcG9ydCB7IENsb3plTG9hZGVyIH0gZnJvbSAnLi4vY29udGVudC1sb2FkZXJzL2Nsb3plLWxvYWRlcic7XG5pbXBvcnQgeyBDbG96ZSB9IGZyb20gXCIuLi9tb2RlbHMvY2xvemVcIjtcbmltcG9ydCB7IElEYXRhUmVwb3NpdG9yeSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9kYXRhLXJlcG9zaXRvcnlcIjtcbmltcG9ydCB7IElTZXR0aW5ncyB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zZXR0aW5nc1wiO1xuaW1wb3J0IHsgSDVQTG9jYWxpemF0aW9uIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2xvY2FsaXphdGlvblwiO1xuaW1wb3J0IHsgQ2xvemVUeXBlLCBTZWxlY3RBbHRlcm5hdGl2ZXMgfSBmcm9tIFwiLi4vbW9kZWxzL2VudW1zXCI7XG5pbXBvcnQgeyBIaWdobGlnaHQgfSBmcm9tIFwiLi4vbW9kZWxzL2hpZ2hsaWdodFwiO1xuaW1wb3J0IHsgQmxhbmsgfSBmcm9tIFwiLi4vbW9kZWxzL2JsYW5rXCI7XG5pbXBvcnQgeyBDb3JyZWN0bmVzcyB9IGZyb20gJy4uL21vZGVscy9hbnN3ZXInO1xuXG5pbXBvcnQgKiBhcyBSYWN0aXZlRXZlbnRzS2V5cyBmcm9tICcuLi8uLi9saWIvcmFjdGl2ZS1ldmVudHMta2V5cyc7XG5cbmludGVyZmFjZSBTY29yZUNoYW5nZWQge1xuICAoc2NvcmU6IG51bWJlciwgbWF4U2NvcmU6IG51bWJlcik6IHZvaWQ7XG59XG5cbmludGVyZmFjZSBBdXRvQ2hlY2tlZCB7XG4gICgpOiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgU29sdmVkIHtcbiAgKCk6IHZvaWQ7XG59XG5cbmludGVyZmFjZSBUeXBlZCB7XG4gICgpOiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgQ2xvemVSZWZyZXNoZWQge1xuICAoKTogdm9pZDtcbn1cblxuZXhwb3J0IGNsYXNzIENsb3plQ29udHJvbGxlciB7XG4gIHByaXZhdGUganF1ZXJ5OiBKUXVlcnk7XG5cbiAgcHJpdmF0ZSBjbG96ZTogQ2xvemU7XG4gIHByaXZhdGUgaXNTZWxlY3RDbG96ZTogYm9vbGVhbjtcblxuICBwdWJsaWMgb25TY29yZUNoYW5nZWQ6IFNjb3JlQ2hhbmdlZDtcbiAgcHVibGljIG9uQXV0b0NoZWNrZWQ6IEF1dG9DaGVja2VkO1xuICBwdWJsaWMgb25Tb2x2ZWQ6IFNvbHZlZDtcbiAgcHVibGljIG9uVHlwZWQ6IFR5cGVkO1xuICBwdWJsaWMgb25DbG96ZVJlZnJlc2hlZDogQ2xvemVSZWZyZXNoZWQ7XG5cbiAgLy8gU3RvcmFnZSBvZiB0aGUgcmFjdGl2ZSBvYmplY3RzIHRoYXQgbGluayBtb2RlbHMgYW5kIHZpZXdzXG4gIHByaXZhdGUgaGlnaGxpZ2h0UmFjdGl2ZXM6IHsgW2lkOiBzdHJpbmddOiBSYWN0aXZlLlJhY3RpdmUgfSA9IHt9O1xuICBwcml2YXRlIGJsYW5rUmFjdGl2ZXM6IHsgW2lkOiBzdHJpbmddOiBSYWN0aXZlLlJhY3RpdmUgfSA9IHt9O1xuXG4gIHB1YmxpYyBnZXQgbWF4U2NvcmUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5jbG96ZS5ibGFua3MubGVuZ3RoO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVjdCB3aGV0aGVyIHRoZXJlIGFyZSBibGFua3Mgd2l0aCBtb3JlIHRoYW4gb25lIHNvbHV0aW9uLlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHRoZXJlIGlzIGF0IGxlYXN0IG9uZSBibGFuayB3aXRoIG1vcmUgdGhhbiBvbmUgc29sdXRpb24uXG4gICAqL1xuICBwdWJsaWMgZ2V0IGhhc0FsdGVybmF0aXZlcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jbG96ZS5ibGFua3Muc29tZShiID0+IGIuY29ycmVjdEFuc3dlcnNbMF0uYWx0ZXJuYXRpdmVzLmxlbmd0aCA+IDEpO1xuICB9XG5cbiAgcHVibGljIGdldCBjdXJyZW50U2NvcmUoKTogbnVtYmVyIHtcbiAgICBjb25zdCBzY29yZSA9IHRoaXMuY2xvemUuYmxhbmtzLnJlZHVjZSgoc2NvcmUsIGIpID0+IHtcbiAgICAgIGNvbnN0IG5vdFNob3dpbmdTb2x1dGlvbiA9ICFiLmlzU2hvd2luZ1NvbHV0aW9uO1xuICAgICAgY29uc3QgY29ycmVjdEFuc3dlckdpdmVuID0gYi5jb3JyZWN0QW5zd2Vyc1swXS5hbHRlcm5hdGl2ZXMuaW5kZXhPZihiLmVudGVyZWRUZXh0IHx8ICcnKSAhPT0gLTE7XG5cbiAgICAgIC8vIERldGVjdCBzbWFsbCBtaXN0YWtlc1xuICAgICAgY29uc3QgY2xvc2VDb3JyZWN0TWF0Y2hlcyA9IGIuY29ycmVjdEFuc3dlcnNcbiAgICAgICAgLm1hcChhbnN3ZXIgPT4gYW5zd2VyLmV2YWx1YXRlQXR0ZW1wdChiLmVudGVyZWRUZXh0KSlcbiAgICAgICAgLmZpbHRlcihldmFsdWF0aW9uID0+IGV2YWx1YXRpb24uY29ycmVjdG5lc3MgPT09IENvcnJlY3RuZXNzLkNsb3NlTWF0Y2gpO1xuICAgICAgY29uc3Qgc2ltaWxhckFuc3dlckdpdmVuID0gdGhpcy5zZXR0aW5ncy5hY2NlcHRTcGVsbGluZ0Vycm9ycyAmJiBjbG9zZUNvcnJlY3RNYXRjaGVzLmxlbmd0aCA+IDA7XG5cbiAgICAgIHJldHVybiBzY29yZSArPSAobm90U2hvd2luZ1NvbHV0aW9uICYmIChjb3JyZWN0QW5zd2VyR2l2ZW4gfHwgc2ltaWxhckFuc3dlckdpdmVuKSkgPyAxIDogMDtcbiAgICB9LCAwKTtcblxuICAgIHJldHVybiBNYXRoLm1heCgwLCBzY29yZSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGFsbEJsYW5rc0VudGVyZWQoKSB7XG4gICAgaWYgKHRoaXMuY2xvemUpXG4gICAgICByZXR1cm4gdGhpcy5jbG96ZS5ibGFua3MuZXZlcnkoYmxhbmsgPT4gYmxhbmsuaXNFcnJvciB8fCBibGFuay5pc0NvcnJlY3QgfHwgYmxhbmsuaXNSZXRyeSk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHVibGljIGdldCBpc1NvbHZlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jbG96ZS5pc1NvbHZlZDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNGaWxsZWRPdXQoKSB7XG4gICAgaWYgKCF0aGlzLmNsb3plIHx8IHRoaXMuY2xvemUuYmxhbmtzLmxlbmd0aCA9PT0gMClcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIHJldHVybiB0aGlzLmNsb3plLmJsYW5rcy5zb21lKGIgPT4gYi5lbnRlcmVkVGV4dCAhPT0gJycpO1xuICB9XG5cbiAgcHVibGljIGdldCBpc0Z1bGx5RmlsbGVkT3V0KCkge1xuICAgIGlmICghdGhpcy5jbG96ZSB8fCB0aGlzLmNsb3plLmJsYW5rcy5sZW5ndGggPT09IDApXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gdGhpcy5jbG96ZS5ibGFua3MuZXZlcnkoYiA9PiBiLmVudGVyZWRUZXh0ICE9PSAnJyk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlcG9zaXRvcnk6IElEYXRhUmVwb3NpdG9yeSwgcHJpdmF0ZSBzZXR0aW5nczogSVNldHRpbmdzLCBwcml2YXRlIGxvY2FsaXphdGlvbjogSDVQTG9jYWxpemF0aW9uLCBwcml2YXRlIE1lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSkge1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdXAgYWxsIGJsYW5rcywgdGhlIGNsb3plIGl0c2VsZiBhbmQgdGhlIHJhY3RpdmUgYmluZGluZ3MuXG4gICAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSByb290XG4gICAqL1xuICBpbml0aWFsaXplKHJvb3Q6IEhUTUxFbGVtZW50LCBqcXVlcnk6IEpRdWVyeSkge1xuICAgIHRoaXMuanF1ZXJ5ID0ganF1ZXJ5O1xuICAgIHRoaXMuaXNTZWxlY3RDbG96ZSA9IHRoaXMuc2V0dGluZ3MuY2xvemVUeXBlID09PSBDbG96ZVR5cGUuU2VsZWN0ID8gdHJ1ZSA6IGZhbHNlO1xuXG4gICAgdmFyIGJsYW5rcyA9IHRoaXMucmVwb3NpdG9yeS5nZXRCbGFua3MoKTtcblxuICAgIGlmICh0aGlzLmlzU2VsZWN0Q2xvemUgJiYgdGhpcy5zZXR0aW5ncy5zZWxlY3RBbHRlcm5hdGl2ZXMgPT09IFNlbGVjdEFsdGVybmF0aXZlcy5BbGwpIHtcbiAgICAgIGZvciAodmFyIGJsYW5rIG9mIGJsYW5rcykge1xuICAgICAgICBsZXQgb3RoZXJCbGFua3MgPSBibGFua3MuZmlsdGVyKHYgPT4gdiAhPT0gYmxhbmspO1xuICAgICAgICBibGFuay5sb2FkQ2hvaWNlc0Zyb21PdGhlckJsYW5rcyhvdGhlckJsYW5rcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHNuaXBwZXRzID0gdGhpcy5yZXBvc2l0b3J5LmdldFNuaXBwZXRzKCk7XG4gICAgYmxhbmtzLmZvckVhY2goYmxhbmsgPT4gQmxhbmtMb2FkZXIuaW5zdGFuY2UucmVwbGFjZVNuaXBwZXRzKGJsYW5rLCBzbmlwcGV0cykpO1xuXG4gICAgdGhpcy5jbG96ZSA9IENsb3plTG9hZGVyLmNyZWF0ZUNsb3plKHRoaXMucmVwb3NpdG9yeS5nZXRDbG96ZVRleHQoKSwgYmxhbmtzKTtcblxuICAgIHZhciBjb250YWluZXJzID0gdGhpcy5jcmVhdGVBbmRBZGRDb250YWluZXJzKHJvb3QpO1xuICAgIGNvbnRhaW5lcnMuY2xvemUuaW5uZXJIVE1MID0gdGhpcy5jbG96ZS5odG1sO1xuICAgIHRoaXMuY3JlYXRlUmFjdGl2ZUJpbmRpbmdzKCk7XG4gIH1cblxuICBjaGVja0FsbCA9ICgpID0+IHtcbiAgICB0aGlzLmNsb3plLmhpZGVBbGxIaWdobGlnaHRzKCk7XG4gICAgZm9yICh2YXIgYmxhbmsgb2YgdGhpcy5jbG96ZS5ibGFua3MpIHtcbiAgICAgIGlmICgoIWJsYW5rLmlzQ29ycmVjdCkgJiYgYmxhbmsuZW50ZXJlZFRleHQgIT09IFwiXCIpXG4gICAgICAgIGJsYW5rLmV2YWx1YXRlQXR0ZW1wdCh0cnVlLCB0cnVlKTtcbiAgICB9XG4gICAgdGhpcy5yZWZyZXNoQ2xvemUoKTtcbiAgICB0aGlzLmNoZWNrQW5kTm90aWZ5Q29tcGxldGVuZXNzKCk7XG4gIH1cblxuICB0ZXh0VHlwZWQgPSAoYmxhbms6IEJsYW5rKSA9PiB7XG4gICAgYmxhbmsub25UeXBlZCgpO1xuICAgIGlmICh0aGlzLm9uVHlwZWQpXG4gICAgICB0aGlzLm9uVHlwZWQoKTtcbiAgICB0aGlzLnJlZnJlc2hDbG96ZSgpO1xuICB9XG5cbiAgZm9jdXMgPSAoYmxhbms6IEJsYW5rKSA9PiB7XG4gICAgYmxhbmsub25Gb2N1c3NlZCgpO1xuICAgIHRoaXMucmVmcmVzaENsb3plKCk7XG4gIH1cblxuICBkaXNwbGF5RmVlZGJhY2sgPSAoYmxhbms6IEJsYW5rKSA9PiB7XG4gICAgYmxhbmsub25EaXNwbGF5RmVlZGJhY2soKTtcbiAgICB0aGlzLnJlZnJlc2hDbG96ZSgpO1xuICB9XG5cbiAgc2hvd0hpbnQgPSAoYmxhbms6IEJsYW5rKSA9PiB7XG4gICAgdGhpcy5jbG96ZS5oaWRlQWxsSGlnaGxpZ2h0cygpO1xuICAgIGJsYW5rLnNob3dIaW50KCk7XG4gICAgdGhpcy5yZWZyZXNoQ2xvemUoKTtcbiAgfVxuXG4gIHJlcXVlc3RDbG9zZVRvb2x0aXAgPSAoYmxhbms6IEJsYW5rKSA9PiB7XG4gICAgYmxhbmsucmVtb3ZlVG9vbHRpcCgpO1xuICAgIHRoaXMucmVmcmVzaENsb3plKCk7XG4gICAgdGhpcy5qcXVlcnkuZmluZChcIiNcIiArIGJsYW5rLmlkKS5mb2N1cygpO1xuICB9XG5cbiAgY2hlY2tCbGFuayA9IChibGFuazogQmxhbmssIGNhdXNlOiBzdHJpbmcpID0+IHtcbiAgICBpZiAoKGNhdXNlID09PSAnYmx1cicgfHwgY2F1c2UgPT09ICdjaGFuZ2UnKSkge1xuICAgICAgYmxhbmsubG9zdEZvY3VzKCk7XG4gICAgfVxuXG4gICAgaWYgKGNhdXNlID09PSAnY2hhbmdlJyAmJiB0aGlzLm9uVHlwZWQpIHtcbiAgICAgIHRoaXMub25UeXBlZCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNldHRpbmdzLmF1dG9DaGVjaykge1xuICAgICAgaWYgKCFibGFuay5lbnRlcmVkVGV4dCB8fCBibGFuay5lbnRlcmVkVGV4dCA9PT0gXCJcIilcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgICB0aGlzLmNsb3plLmhpZGVBbGxIaWdobGlnaHRzKCk7XG4gICAgICBibGFuay5ldmFsdWF0ZUF0dGVtcHQoZmFsc2UpO1xuICAgICAgdGhpcy5jaGVja0FuZE5vdGlmeUNvbXBsZXRlbmVzcygpO1xuICAgICAgdGhpcy5yZWZyZXNoQ2xvemUoKTtcbiAgICAgIHRoaXMub25BdXRvQ2hlY2tlZCgpO1xuICAgIH1cbiAgICBpZiAoKGNhdXNlID09PSAnZW50ZXInKVxuICAgICAgJiYgKCh0aGlzLnNldHRpbmdzLmF1dG9DaGVjayAmJiBibGFuay5pc0NvcnJlY3QgJiYgIXRoaXMuaXNTb2x2ZWQpXG4gICAgICAgIHx8ICF0aGlzLnNldHRpbmdzLmF1dG9DaGVjaykpIHtcbiAgICAgIC8vIG1vdmUgdG8gbmV4dCBibGFua1xuICAgICAgdmFyIGluZGV4ID0gdGhpcy5jbG96ZS5ibGFua3MuaW5kZXhPZihibGFuayk7XG4gICAgICB2YXIgbmV4dElkO1xuICAgICAgd2hpbGUgKGluZGV4IDwgdGhpcy5jbG96ZS5ibGFua3MubGVuZ3RoIC0gMSAmJiAhbmV4dElkKSB7XG4gICAgICAgIGluZGV4Kys7XG4gICAgICAgIGlmICghdGhpcy5jbG96ZS5ibGFua3NbaW5kZXhdLmlzQ29ycmVjdClcbiAgICAgICAgICBuZXh0SWQgPSB0aGlzLmNsb3plLmJsYW5rc1tpbmRleF0uaWQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZXh0SWQpXG4gICAgICAgIHRoaXMuanF1ZXJ5LmZpbmQoXCIjXCIgKyBuZXh0SWQpLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgcmVzZXQgPSAoKSA9PiB7XG4gICAgdGhpcy5jbG96ZS5yZXNldCgpO1xuICAgIHRoaXMucmVmcmVzaENsb3plKCk7XG4gIH1cblxuICBzaG93U29sdXRpb25zID0gKCkgPT4ge1xuICAgIHRoaXMuY2xvemUuc2hvd1NvbHV0aW9ucygpO1xuICAgIHRoaXMucmVmcmVzaENsb3plKCk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUFuZEFkZENvbnRhaW5lcnMoYWRkVG86IEhUTUxFbGVtZW50KTogeyBjbG96ZTogSFRNTERpdkVsZW1lbnQgfSB7XG4gICAgdmFyIGNsb3plQ29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNsb3plQ29udGFpbmVyRWxlbWVudC5pZCA9ICdoNXAtY2xvemUtY29udGFpbmVyJztcbiAgICBpZiAodGhpcy5zZXR0aW5ncy5jbG96ZVR5cGUgPT09IENsb3plVHlwZS5TZWxlY3QpIHtcbiAgICAgIGNsb3plQ29udGFpbmVyRWxlbWVudC5jbGFzc05hbWUgPSAnaDVwLWFkdmFuY2VkLWJsYW5rcy1zZWxlY3QtbW9kZSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNsb3plQ29udGFpbmVyRWxlbWVudC5jbGFzc05hbWUgPSAnaDVwLWFkdmFuY2VkLWJsYW5rcy10eXBlLW1vZGUnO1xuICAgIH1cbiAgICBhZGRUby5hcHBlbmRDaGlsZChjbG96ZUNvbnRhaW5lckVsZW1lbnQpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNsb3plOiBjbG96ZUNvbnRhaW5lckVsZW1lbnRcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVIaWdobGlnaHRCaW5kaW5nKGhpZ2hsaWdodDogSGlnaGxpZ2h0KSB7XG4gICAgdGhpcy5oaWdobGlnaHRSYWN0aXZlc1toaWdobGlnaHQuaWRdID0gbmV3IFJhY3RpdmUoe1xuICAgICAgZWw6ICcjY29udGFpbmVyXycgKyBoaWdobGlnaHQuaWQsXG4gICAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi4vdmlld3MvaGlnaGxpZ2h0LnJhY3RpdmUuaHRtbCcpLFxuICAgICAgZGF0YToge1xuICAgICAgICBvYmplY3Q6IGhpZ2hsaWdodFxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVCbGFua0JpbmRpbmcoYmxhbms6IEJsYW5rKSB7XG4gICAgdmFyIHJhY3RpdmUgPSBuZXcgUmFjdGl2ZSh7XG4gICAgICBlbDogJyNjb250YWluZXJfJyArIGJsYW5rLmlkLFxuICAgICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4uL3ZpZXdzL2JsYW5rLnJhY3RpdmUuaHRtbCcpLFxuICAgICAgZGF0YToge1xuICAgICAgICBpc1NlbGVjdENsb3plOiB0aGlzLmlzU2VsZWN0Q2xvemUsXG4gICAgICAgIGJsYW5rOiBibGFua1xuICAgICAgfSxcbiAgICAgIGV2ZW50czoge1xuICAgICAgICBlbnRlcjogUmFjdGl2ZUV2ZW50c0tleXMuZW50ZXIsXG4gICAgICAgIGVzY2FwZTogUmFjdGl2ZUV2ZW50c0tleXMuZXNjYXBlLFxuICAgICAgICBhbnlrZXk6IFJhY3RpdmVFdmVudHNLZXlzLmFueWtleVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJhY3RpdmUub24oXCJjaGVja0JsYW5rXCIsIHRoaXMuY2hlY2tCbGFuayk7XG4gICAgcmFjdGl2ZS5vbihcInNob3dIaW50XCIsIHRoaXMuc2hvd0hpbnQpO1xuICAgIHJhY3RpdmUub24oXCJ0ZXh0VHlwZWRcIiwgdGhpcy50ZXh0VHlwZWQpO1xuICAgIHJhY3RpdmUub24oXCJjbG9zZU1lc3NhZ2VcIiwgdGhpcy5yZXF1ZXN0Q2xvc2VUb29sdGlwKTtcbiAgICByYWN0aXZlLm9uKFwiZm9jdXNcIiwgdGhpcy5mb2N1cyk7XG4gICAgcmFjdGl2ZS5vbihcImRpc3BsYXlGZWVkYmFja1wiLCB0aGlzLmRpc3BsYXlGZWVkYmFjayk7XG5cbiAgICB0aGlzLmJsYW5rUmFjdGl2ZXNbYmxhbmsuaWRdID0gcmFjdGl2ZTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlUmFjdGl2ZUJpbmRpbmdzKCkge1xuICAgIGZvciAodmFyIGhpZ2hsaWdodCBvZiB0aGlzLmNsb3plLmhpZ2hsaWdodHMpIHtcbiAgICAgIHRoaXMuY3JlYXRlSGlnaGxpZ2h0QmluZGluZyhoaWdobGlnaHQpO1xuICAgIH1cblxuICAgIGZvciAodmFyIGJsYW5rIG9mIHRoaXMuY2xvemUuYmxhbmtzKSB7XG4gICAgICB0aGlzLmNyZWF0ZUJsYW5rQmluZGluZyhibGFuayk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgYWxsIHZpZXdzIG9mIGhpZ2hsaWdodHMgYW5kIGJsYW5rcy4gQ2FuIGJlIGNhbGxlZCB3aGVuIGEgbW9kZWxcbiAgICogd2FzIGNoYW5nZWRcbiAgICovXG4gIHByaXZhdGUgcmVmcmVzaENsb3plKCkge1xuICAgIGZvciAodmFyIGhpZ2hsaWdodCBvZiB0aGlzLmNsb3plLmhpZ2hsaWdodHMpIHtcbiAgICAgIHZhciBoaWdobGlnaHRSYWN0aXZlID0gdGhpcy5oaWdobGlnaHRSYWN0aXZlc1toaWdobGlnaHQuaWRdO1xuICAgICAgaGlnaGxpZ2h0UmFjdGl2ZS5zZXQoXCJvYmplY3RcIiwgaGlnaGxpZ2h0KTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBibGFuayBvZiB0aGlzLmNsb3plLmJsYW5rcykge1xuICAgICAgdmFyIGJsYW5rUmFjdGl2ZSA9IHRoaXMuYmxhbmtSYWN0aXZlc1tibGFuay5pZF07XG4gICAgICBibGFua1JhY3RpdmUuc2V0KFwiYmxhbmtcIiwgYmxhbmspO1xuICAgIH1cblxuICAgIHRoaXMub25DbG96ZVJlZnJlc2hlZCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBjaGVja0FuZE5vdGlmeUNvbXBsZXRlbmVzcyA9ICgpOiBib29sZWFuID0+IHtcbiAgICBpZiAodGhpcy5vblNjb3JlQ2hhbmdlZClcbiAgICAgIHRoaXMub25TY29yZUNoYW5nZWQodGhpcy5jdXJyZW50U2NvcmUsIHRoaXMubWF4U2NvcmUpO1xuXG4gICAgaWYgKHRoaXMuY2xvemUuaXNTb2x2ZWQpIHtcbiAgICAgIGlmICh0aGlzLm9uU29sdmVkKVxuICAgICAgICB0aGlzLm9uU29sdmVkKCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgc2VyaWFsaXplQ2xvemUoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLmNsb3plLnNlcmlhbGl6ZSgpO1xuICB9XG5cbiAgcHVibGljIGRlc2VyaWFsaXplQ2xvemUoZGF0YTogYW55KTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmNsb3plIHx8ICFkYXRhKVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIHRoaXMuY2xvemUuZGVzZXJpYWxpemUoZGF0YSk7XG4gICAgdGhpcy5yZWZyZXNoQ2xvemUoKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDb3JyZWN0QW5zd2VyTGlzdCgpOiBzdHJpbmdbXVtdIHtcbiAgICBpZiAoIXRoaXMuY2xvemUgfHwgdGhpcy5jbG96ZS5ibGFua3MubGVuZ3RoID09PSAwKVxuICAgICAgcmV0dXJuIFtbXV07XG4gICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgIGZvciAodmFyIGJsYW5rIG9mIHRoaXMuY2xvemUuYmxhbmtzKSB7XG4gICAgICByZXN1bHQucHVzaChibGFuay5nZXRDb3JyZWN0QW5zd2VycygpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG4iLCIvKipcbiAqIEV4dGVuZCBhbiBhcnJheSBqdXN0IGxpa2UgSlF1ZXJ5J3MgZXh0ZW5kLlxuICogQHBhcmFtIHtvYmplY3R9IGFyZ3VtZW50cyBPYmplY3RzIHRvIGJlIG1lcmdlZC5cbiAqIEByZXR1cm4ge29iamVjdH0gTWVyZ2VkIG9iamVjdHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleHRlbmQoLi4uYXJnczogYW55W10pIHtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yIChsZXQga2V5IGluIGFyZ3NbaV0pIHtcbiAgICAgIGlmIChhcmdzW2ldLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBhcmdzWzBdW2tleV0gPT09ICdvYmplY3QnICYmIHR5cGVvZiBhcmdzW2ldW2tleV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdGhpcy5leHRlbmQoYXJnc1swXVtrZXldLCBhcmdzW2ldW2tleV0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGFyZ3NbMF1ba2V5XSA9IGFyZ3NbaV1ba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXJnc1swXTtcbn1cbiIsIi8qKlxuICogVGhpcyBjbGFzcyBjbGVhbnMgaHRtbCBzdHJpbmdzLlxuICovXG5leHBvcnQgY2xhc3MgVW5yd2FwcGVyIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUganF1ZXJ5OiBKUXVlcnlTdGF0aWMpIHtcblxuICB9XG5cbiAgXG4gIC8qKlxuICAgKiBDbGVhbnMgaHRtbCBzdHJpbmdzIGJ5IHJlbW92aW5nIHRoZSBvdXRtb3N0IGh0bWwgdGFnIG9mIHRoZSBzdHJpbmcgaWYgdGhlcmUgaXMgb25seSBvbmUgdGFnLlxuICAgKiBFeGFtcGxlczogIFwiPHA+bXkgdGV4dDwvcD5cIlwiIGJlY29tZXMgXCJteSB0ZXh0XCJcbiAgICogICAgICAgICAgICBcIjxwPnRleHQgMTwvcD48cD50ZXh0IDI8L3AyPlwiIHN0YXlzXG4gICAqIEBwYXJhbSBodG1sIFRoZSBodG1sIHN0cmluZ1xuICAgKiBAcmV0dXJucyB0aGUgY2xlYW5lZCBodG1sIHN0cmluZ1xuICAgKi9cbiAgcHVibGljIHVud3JhcChodG1sOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHZhciBwYXJzZWQgPSB0aGlzLmpxdWVyeShodG1sKTtcbiAgICBpZiAocGFyc2VkLmxlbmd0aCAhPT0gMSkge1xuICAgICAgcmV0dXJuIGh0bWw7XG4gICAgfVxuICAgIGxldCB1bndyYXBwZWQgPSBwYXJzZWQudW53cmFwKCkuaHRtbCgpO1xuICAgIHJldHVybiB1bndyYXBwZWQ7XG4gIH1cbn0iLCJpbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi9tZXNzYWdlJztcbmltcG9ydCB7IEhpZ2hsaWdodCB9IGZyb20gJy4vaGlnaGxpZ2h0JztcbmltcG9ydCB7IElTZXR0aW5ncyB9IGZyb20gJy4uL3NlcnZpY2VzL3NldHRpbmdzJztcbmltcG9ydCAqIGFzIGpzZGlmZiBmcm9tICdkaWZmJztcblxuZXhwb3J0IGVudW0gQ29ycmVjdG5lc3Mge1xuICBFeGFjdE1hdGNoLFxuICBDbG9zZU1hdGNoLFxuICBOb01hdGNoXG59XG5cbmV4cG9ydCBjbGFzcyBFdmFsdWF0aW9uIHtcbiAgcHVibGljIGNvcnJlY3RuZXNzOiBDb3JyZWN0bmVzcztcbiAgcHVibGljIGNoYXJhY3RlckRpZmZlcmVuY2VDb3VudDogbnVtYmVyO1xuICBwdWJsaWMgdXNlZEFsdGVybmF0aXZlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHVibGljIHVzZWRBbnN3ZXI6IEFuc3dlcikge1xuICAgIHRoaXMuY29ycmVjdG5lc3MgPSBDb3JyZWN0bmVzcy5Ob01hdGNoO1xuICAgIHRoaXMuY2hhcmFjdGVyRGlmZmVyZW5jZUNvdW50ID0gMDtcbiAgICB0aGlzLnVzZWRBbHRlcm5hdGl2ZSA9IFwiXCI7XG4gIH1cbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgcG9zc2libGUgYW5zd2VyIHRoZSBjb250ZW50IGF1dGhvciBlbnRlcnMgZm9yIGEgYmxhbmssIGUuZy4gdGhlIGNvcnJlY3Qgb3IgYW4gaW5jb3JyZWN0IGFuc3dlci5cbiAqL1xuZXhwb3J0IGNsYXNzIEFuc3dlciB7XG4gIC8qKlxuICAgKiBUaGUgYWx0ZXJuYXRpdmVzIGFyZSBlcXVpdmFsZW50IHN0cmluZ3MgdGhhdCB0aGUgbGlicmFyeSBzaG91bGQgdHJlYXQgdGhlIHNhbWUgd2F5LCBlLmcuIHNob3cgdGhlIHNhbWUgZmVlZGJhY2suIFxuICAgKi9cbiAgYWx0ZXJuYXRpdmVzOiBzdHJpbmdbXTtcblxuICAvKipcbiAgICogVGhpcyBpcyB0aGUgbWVzc2FnZSB0aGF0IGlzIGRpc3BsYXllZCB3aGVuIHRoZSBhbnN3ZXIgd2FzIGVudGVyZWQgYnkgdGhlIHVzZXIuXG4gICAqL1xuICBtZXNzYWdlOiBNZXNzYWdlO1xuXG4gIC8qKlxuICAgKiBJcyB0cnVlIGlmIHRoZSBleHBlY3RlZCB0ZXh0IGZvciB0aGlzIGFuc3dlciBpcyBlbXB0eS5cbiAgICovXG4gIGFwcGxpZXNBbHdheXM6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEBwYXJhbSAge3N0cmluZ30gYW5zd2VyVGV4dCAtIFRoZSBleHBlY3RlZCBhbnN3ZXIuIEFsdGVybmF0aXZlcyBhcmUgc2VwYXJhdGVkIGJ5IHwgb3IgOyAuIChlLmcuIFwiQWx0ZXJuYXRpdmUgMXxBbHRlcm5hdGl2ZSAyfEFsdGVybmF0aXZlIDN8Li4uXCIgIC1vci0gXCJBbHRlcm5hdGl2ZSAxO0FsdGVybmF0aXZlIDI7QWx0ZXJuYXRpdmUgM1wiKVxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IHJlYWN0aW9uIC0gVGhlIHRvb2x0aXAgdGhhdCBzaG91bGQgYmUgZGlzcGxheWVkLiBGb3JtYXQ6IFRvb2x0aXAgVGV4dDshIS0xISEgISErMSEhXG4gICAqL1xuICBjb25zdHJ1Y3RvcihhbnN3ZXJUZXh0OiBzdHJpbmcsIHJlYWN0aW9uOiBzdHJpbmcsIHNob3dIaWdobGlnaHQ6IGJvb2xlYW4sIGhpZ2hsaWdodDogbnVtYmVyLCBwcml2YXRlIHNldHRpbmdzOiBJU2V0dGluZ3MpIHtcbiAgICB0aGlzLmFsdGVybmF0aXZlcyA9IGFuc3dlclRleHQuc3BsaXQoL1xcLy8pLm1hcChzID0+IHMudHJpbSgpKTtcbiAgICB0aGlzLm1lc3NhZ2UgPSBuZXcgTWVzc2FnZShyZWFjdGlvbiwgc2hvd0hpZ2hsaWdodCwgaGlnaGxpZ2h0KTtcbiAgICBpZiAoYW5zd2VyVGV4dC50cmltKCkgPT09IFwiXCIpIHtcbiAgICAgIHRoaXMuYXBwbGllc0Fsd2F5cyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYXBwbGllc0Fsd2F5cyA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBMb29rcyB0aHJvdWdoIHRoZSBvYmplY3QncyBtZXNzYWdlIGlkcyBhbmQgc3RvcmVzIHRoZSByZWZlcmVuY2VzIHRvIHRoZSBoaWdobGlnaHQgb2JqZWN0IGZvciB0aGVzZSBpZHMuXG4gICAqIEBwYXJhbSAge0hpZ2hsaWdodFtdfSBoaWdobGlnaHRzQmVmb3JlXG4gICAqIEBwYXJhbSAge0hpZ2hsaWdodFtdfSBoaWdobGlnaHRzQWZ0ZXJcbiAgICovXG4gIHB1YmxpYyBsaW5rSGlnaGxpZ2h0SWRUb09iamVjdChoaWdobGlnaHRzQmVmb3JlOiBIaWdobGlnaHRbXSwgaGlnaGxpZ2h0c0FmdGVyOiBIaWdobGlnaHRbXSkge1xuICAgIHRoaXMubWVzc2FnZS5saW5rSGlnaGxpZ2h0KGhpZ2hsaWdodHNCZWZvcmUsIGhpZ2hsaWdodHNBZnRlcik7XG4gIH1cbiAgLyoqXG4gICAqIFR1cm5zIG9uIHRoZSBoaWdobGlnaHRzIHNldCBieSB0aGUgY29udGVudCBhdXRob3IgZm9yIHRoaXMgYW5zd2VyLlxuICAgKi9cbiAgcHVibGljIGFjdGl2YXRlSGlnaGxpZ2h0KCkge1xuICAgIGlmICh0aGlzLm1lc3NhZ2UuaGlnaGxpZ2h0ZWRFbGVtZW50KVxuICAgICAgdGhpcy5tZXNzYWdlLmhpZ2hsaWdodGVkRWxlbWVudC5pc0hpZ2hsaWdodGVkID0gdHJ1ZTtcbiAgfVxuXG4gIHByaXZhdGUgY2xlYW5TdHJpbmcodGV4dDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICB0ZXh0ID0gdGV4dC50cmltKCk7XG4gICAgcmV0dXJuIHRleHQucmVwbGFjZSgvXFxzezIsfS9nLCBcIiBcIik7XG4gIH1cbiAgLyoqXG4gICAqIExvb2tzIHRocm91Z2ggdGhlIGRpZmYgYW5kIGNoZWNrcyBob3cgbWFueSBjaGFyYWN0ZXIgY2hhbmdlIG9wZXJhdGlvbnMgYXJlIG5lZWRlZCB0byB0dXJuIG9uZSBzdHJpbmcgaW50byB0aGUgb3RoZXIuIFNob3VsZCByZXR1cm4gdGhlIHNhbWUgcmVzdWx0cyBhcyB0aGUgTGV2ZW5zdGhlaW4gZGlzdGFuY2UuIFxuICAgKiBAcGFyYW0gIHtbe2FkZGVkPzpib29sZWFuLCBib29sZWFuOiByZW1vdmVkPywgc3RyaW5nOiB2YWx1ZX1dfSBkaWZmIC0gYXMgcmV0dXJuZWQgYnkganNkaWZmXG4gICAqIEByZXR1cm5zIG51bWJlciAtIHRoZSBjb3VudCBvZiBjaGFuZ2VzIChyZXBsYWNlLCBhZGQsIGRlbGV0ZSkgbmVlZGVkIHRvIGNoYW5nZSB0aGUgdGV4dCBmcm9tIG9uZSBzdHJpbmcgdG8gdGhlIG90aGVyIFxuICAgKi9cbiAgcHJpdmF0ZSBnZXRDaGFuZ2VzQ291bnRGcm9tRGlmZihkaWZmOiBqc2RpZmYuQ2hhbmdlW10pOiBudW1iZXIge1xuICAgIHZhciB0b3RhbENoYW5nZXNDb3VudCA9IDA7XG4gICAgdmFyIGxhc3RUeXBlID0gXCJcIjtcbiAgICB2YXIgbGFzdENvdW50ID0gMDtcblxuICAgIGZvciAodmFyIGVsZW1lbnQgb2YgZGlmZikge1xuICAgICAgaWYgKGVsZW1lbnQucmVtb3ZlZCkge1xuICAgICAgICB0b3RhbENoYW5nZXNDb3VudCArPSBlbGVtZW50LnZhbHVlLmxlbmd0aDtcbiAgICAgICAgbGFzdFR5cGUgPSBcInJlbW92ZWRcIjtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGVsZW1lbnQuYWRkZWQpIHtcbiAgICAgICAgaWYgKGxhc3RUeXBlID09PSBcInJlbW92ZWRcIikge1xuICAgICAgICAgIGlmIChsYXN0Q291bnQgPCBlbGVtZW50LnZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgdG90YWxDaGFuZ2VzQ291bnQgKz0gZWxlbWVudC52YWx1ZS5sZW5ndGggLSBsYXN0Q291bnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRvdGFsQ2hhbmdlc0NvdW50ICs9IGVsZW1lbnQudmFsdWUubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIGxhc3RUeXBlID0gXCJhZGRlZFwiO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGxhc3RUeXBlID0gXCJzYW1lXCI7XG4gICAgICB9XG4gICAgICBsYXN0Q291bnQgPSBlbGVtZW50LnZhbHVlLmxlbmd0aDtcbiAgICB9XG5cbiAgICByZXR1cm4gdG90YWxDaGFuZ2VzQ291bnQ7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgaG93IG1hbnkgY2hhcmFjdGVycyBjYW4gYmUgd3JvbmcgdG8gc3RpbGwgYmUgY291bnRlZCBhcyBhIHNwZWxsaW5nIG1pc3Rha2UuXG4gICAqIElmIHNwZWxsaW5nIG1pc3Rha2VzIGFyZSB0dXJuZWQgb2ZmIHRocm91Z2ggdGhlIHNldHRpbmdzLCBpdCB3aWxsIHJldHVybiAwLlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IHRleHRcbiAgICogQHJldHVybnMgbnVtYmVyXG4gICAqL1xuXG4gIHByaXZhdGUgZ2V0QWNjZXB0YWJsZVNwZWxsaW5nTWlzdGFrZXModGV4dDogc3RyaW5nKTogbnVtYmVyIHtcbiAgICB2YXIgYWNjZXB0YWJsZVR5cG9Db3VudDogbnVtYmVyO1xuICAgIGlmICh0aGlzLnNldHRpbmdzLndhcm5TcGVsbGluZ0Vycm9ycyB8fCB0aGlzLnNldHRpbmdzLmFjY2VwdFNwZWxsaW5nRXJyb3JzKSAvLyBUT0RPOiBjb25zaWRlciByZW1vdmFsXG4gICAgICBhY2NlcHRhYmxlVHlwb0NvdW50ID0gTWF0aC5mbG9vcih0ZXh0Lmxlbmd0aCAvIDEwKSArIDE7XG4gICAgZWxzZVxuICAgICAgYWNjZXB0YWJsZVR5cG9Db3VudCA9IDA7XG5cbiAgICByZXR1cm4gYWNjZXB0YWJsZVR5cG9Db3VudDtcbiAgfVxuICAvKipcbiAgICogQ2hlY2tzIGlmIHRoZSB0ZXh0IGVudGVyZWQgYnkgdGhlIHVzZXIgaW4gYW4gZXR0ZW1wdCBpcyBtYXRjaGVkIGJ5IHRoZSBhbnN3ZXIsXG4gICAqIEBwYXJhbSAge3N0cmluZ30gYXR0ZW1wdCBUaGUgdGV4dCBlbnRlcmVkIGJ5IHRoZSB1c2VyLlxuICAgKiBAcmV0dXJucyBFdmFsdWF0aW9uIGluZGljYXRlcyBpZiB0aGUgZW50ZXJlZCB0ZXh0IGlzIG1hdGNoZWQgYnkgdGhlIGFuc3dlci5cbiAgICovXG4gIHB1YmxpYyBldmFsdWF0ZUF0dGVtcHQoYXR0ZW1wdDogc3RyaW5nKTogRXZhbHVhdGlvbiB7XG4gICAgdmFyIGNsZWFuZWRBdHRlbXB0ID0gdGhpcy5jbGVhblN0cmluZyhhdHRlbXB0KTtcbiAgICB2YXIgZXZhbHVhdGlvbiA9IG5ldyBFdmFsdWF0aW9uKHRoaXMpO1xuXG4gICAgZm9yICh2YXIgYWx0ZXJuYXRpdmUgb2YgdGhpcy5hbHRlcm5hdGl2ZXMpIHtcbiAgICAgIHZhciBjbGVhbmVkQWx0ZXJuYXRpdmUgPSB0aGlzLmNsZWFuU3RyaW5nKGFsdGVybmF0aXZlKTtcblxuICAgICAgdmFyIGRpZmYgPSBqc2RpZmYuZGlmZkNoYXJzKGNsZWFuZWRBbHRlcm5hdGl2ZSwgY2xlYW5lZEF0dGVtcHQsXG4gICAgICAgIHsgaWdub3JlQ2FzZTogIXRoaXMuc2V0dGluZ3MuY2FzZVNlbnNpdGl2ZSB9KTtcbiAgICAgIHZhciBjaGFuZ2VDb3VudCA9IHRoaXMuZ2V0Q2hhbmdlc0NvdW50RnJvbURpZmYoZGlmZik7XG5cbiAgICAgIGlmIChjaGFuZ2VDb3VudCA9PT0gMCkge1xuICAgICAgICBldmFsdWF0aW9uLnVzZWRBbHRlcm5hdGl2ZSA9IGNsZWFuZWRBbHRlcm5hdGl2ZTtcbiAgICAgICAgZXZhbHVhdGlvbi5jb3JyZWN0bmVzcyA9IENvcnJlY3RuZXNzLkV4YWN0TWF0Y2g7XG4gICAgICAgIHJldHVybiBldmFsdWF0aW9uO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2hhbmdlQ291bnQgPD0gdGhpcy5nZXRBY2NlcHRhYmxlU3BlbGxpbmdNaXN0YWtlcyhhbHRlcm5hdGl2ZSlcbiAgICAgICAgJiYgKGV2YWx1YXRpb24uY2hhcmFjdGVyRGlmZmVyZW5jZUNvdW50ID09PSAwIHx8IGNoYW5nZUNvdW50IDwgZXZhbHVhdGlvbi5jaGFyYWN0ZXJEaWZmZXJlbmNlQ291bnQpKSB7XG4gICAgICAgIGV2YWx1YXRpb24udXNlZEFsdGVybmF0aXZlID0gY2xlYW5lZEFsdGVybmF0aXZlO1xuICAgICAgICBldmFsdWF0aW9uLmNvcnJlY3RuZXNzID0gQ29ycmVjdG5lc3MuQ2xvc2VNYXRjaDtcbiAgICAgICAgZXZhbHVhdGlvbi5jaGFyYWN0ZXJEaWZmZXJlbmNlQ291bnQgPSBjaGFuZ2VDb3VudDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGV2YWx1YXRpb247XG4gIH1cbn0iLCJpbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL21lc3NhZ2Utc2VydmljZSc7XG5pbXBvcnQgeyBDbG96ZUVsZW1lbnQsIENsb3plRWxlbWVudFR5cGUgfSBmcm9tICcuL2Nsb3plLWVsZW1lbnQnO1xuaW1wb3J0IHsgQW5zd2VyLCBDb3JyZWN0bmVzcyB9IGZyb20gJy4vYW5zd2VyJztcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuL21lc3NhZ2UnO1xuaW1wb3J0IHsgTWVzc2FnZVR5cGUsIENsb3plVHlwZSwgU2VsZWN0QWx0ZXJuYXRpdmVzIH0gZnJvbSAnLi9lbnVtcyc7XG5pbXBvcnQgeyBINVBMb2NhbGl6YXRpb24sIExvY2FsaXphdGlvbkxhYmVscyB9IGZyb20gJy4uL3NlcnZpY2VzL2xvY2FsaXphdGlvbic7XG5pbXBvcnQgeyBJU2V0dGluZ3MgfSBmcm9tIFwiLi4vc2VydmljZXMvc2V0dGluZ3NcIjtcbmltcG9ydCB7IGdldExvbmdlc3RTdHJpbmcsIHNodWZmbGVBcnJheSB9IGZyb20gXCIuLi8uLi9saWIvaGVscGVyc1wiO1xuaW1wb3J0ICogYXMganNkaWZmIGZyb20gJ2RpZmYnO1xuXG5pbnRlcmZhY2UgQ2hhckluZm8ge1xuICBjaGFyOiBzdHJpbmcgfCBudWxsLFxuICB3aWR0aDogbnVtYmVyXG59XG5cbmV4cG9ydCBjbGFzcyBCbGFuayBleHRlbmRzIENsb3plRWxlbWVudCB7XG4gIC8vIGNvbnRlbnRcbiAgY29ycmVjdEFuc3dlcnM6IEFuc3dlcltdO1xuICBpbmNvcnJlY3RBbnN3ZXJzOiBBbnN3ZXJbXTtcbiAgaGludDogTWVzc2FnZTtcbiAgaWQ6IHN0cmluZztcbiAgY2hvaWNlczogc3RyaW5nW107XG4gIGhhc0hpbnQ6IGJvb2xlYW47XG4gIHN0eWxlOiBhbnk7XG4gIHVwZGF0ZVdpZHRoVGltZW91dDogbnVtYmVyO1xuICB3aWRlc3RDaGFyOiBDaGFySW5mbztcbiAgaW5wdXRET006IEhUTUxFbGVtZW50XG5cbiAgLy8gdmlld21vZGVsIHN0dWZmXG5cbiAgbGFzdENoZWNrZWRUZXh0OiBzdHJpbmc7XG4gIGVudGVyZWRUZXh0OiBzdHJpbmc7XG4gIGlzQ29ycmVjdDogYm9vbGVhbjtcbiAgaXNFcnJvcjogYm9vbGVhbjtcbiAgaXNSZXRyeTogYm9vbGVhbjtcbiAgaGFzUGVuZGluZ0ZlZWRiYWNrOiBib29sZWFuO1xuICBpc1Nob3dpbmdTb2x1dGlvbjogYm9vbGVhbjtcbiAgbWVzc2FnZTogc3RyaW5nO1xuICBtaW5UZXh0TGVuZ3RoOiBudW1iZXI7XG4gIHNwZWVjaEJ1YmJsZTogYW55O1xuXG4gIC8qKlxuICAgKiBBZGQgaW5jb3JyZWN0IGFuc3dlcnMgYWZ0ZXIgaW5pdGlhbGl6aW5nIHRoZSBvYmplY3QuIENhbGwgZmluaXNoSW5pdGlhbGl6YXRpb24oKVxuICAgKiB3aGVuIGRvbmUuXG4gICAqIEBwYXJhbSAge0lTZXR0aW5nc30gc2V0dGluZ3NcbiAgICogQHBhcmFtICB7c3RyaW5nfSBpZFxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IGNvcnJlY3RUZXh0P1xuICAgKiBAcGFyYW0gIHtzdHJpbmd9IGhpbnRUZXh0P1xuICAgKi9cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXR0aW5nczogSVNldHRpbmdzLCBwcml2YXRlIGxvY2FsaXphdGlvbjogSDVQTG9jYWxpemF0aW9uLCBwcml2YXRlIGpxdWVyeTogSlF1ZXJ5U3RhdGljLCBwcml2YXRlIG1lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSwgaWQ6IHN0cmluZywgcHJpdmF0ZSBwbGFjZWhvbGRlcnM6IG51bWJlcikge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmVudGVyZWRUZXh0ID0gXCJcIjtcbiAgICB0aGlzLmNvcnJlY3RBbnN3ZXJzID0gbmV3IEFycmF5KCk7XG4gICAgdGhpcy5pbmNvcnJlY3RBbnN3ZXJzID0gbmV3IEFycmF5KCk7XG4gICAgdGhpcy5jaG9pY2VzID0gbmV3IEFycmF5KCk7XG4gICAgdGhpcy50eXBlID0gQ2xvemVFbGVtZW50VHlwZS5CbGFuaztcblxuICAgIHRoaXMuaWQgPSBpZDtcbiAgfVxuXG4gIC8qKlxuICAqIENhbGwgdGhpcyBtZXRob2Qgd2hlbiBhbGwgaW5jb3JyZWN0IGFuc3dlcnMgaGF2ZSBiZWVuIGFkZGVkLlxuICAqL1xuICBwdWJsaWMgZmluaXNoSW5pdGlhbGl6YXRpb24oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2V0dGluZ3MuY2xvemVUeXBlID09PSBDbG96ZVR5cGUuU2VsZWN0ICYmIHRoaXMuc2V0dGluZ3Muc2VsZWN0QWx0ZXJuYXRpdmVzID09PSBTZWxlY3RBbHRlcm5hdGl2ZXMuQWx0ZXJuYXRpdmVzKSB7XG4gICAgICB0aGlzLmxvYWRDaG9pY2VzRnJvbU93bkFsdGVybmF0aXZlcygpO1xuICAgIH1cbiAgICB0aGlzLmNhbGN1bGF0ZU1pblRleHRMZW5ndGgoKTtcbiAgICB0aGlzLnVwZGF0ZVdpZHRoKCk7XG4gIH1cblxuICBwdWJsaWMgYWRkQ29ycmVjdEFuc3dlcihhbnN3ZXI6IEFuc3dlcikge1xuICAgIHRoaXMuY29ycmVjdEFuc3dlcnMucHVzaChhbnN3ZXIpO1xuICB9XG5cbiAgcHVibGljIGdldENvcnJlY3RBbnN3ZXJzKCk6IHN0cmluZ1tdIHtcbiAgICBsZXQgcmVzdWx0ID0gW107XG4gICAgZm9yIChsZXQgYW5zd2VyIG9mIHRoaXMuY29ycmVjdEFuc3dlcnMpIHtcbiAgICAgIHJlc3VsdCA9IHJlc3VsdC5jb25jYXQoYW5zd2VyLmFsdGVybmF0aXZlcyk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwdWJsaWMgc2V0SGludChtZXNzYWdlOiBNZXNzYWdlKSB7XG4gICAgdGhpcy5oaW50ID0gbWVzc2FnZTtcbiAgICB0aGlzLmhhc0hpbnQgPSB0aGlzLmhpbnQudGV4dCAhPT0gXCJcIjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIHRoZSBpbmNvcnJlY3QgYW5zd2VyIHRvIHRoZSBsaXN0LlxuICAgKiBAcGFyYW0gdGV4dCAtIFdoYXQgdGhlIHVzZXIgbXVzdCBlbnRlci5cbiAgICogQHBhcmFtIHJlYWN0aW9uICAtIFdoYXQgdGhlIHVzZXIgZ2V0cyBkaXNwbGF5ZWQgd2hlbiBoZSBlbnRlcmVzIHRoZSB0ZXh0LlxuICAgKi9cbiAgcHVibGljIGFkZEluY29ycmVjdEFuc3dlcih0ZXh0OiBzdHJpbmcsIHJlYWN0aW9uOiBzdHJpbmcsIHNob3dIaWdobGlnaHQ6IGJvb2xlYW4sIGhpZ2hsaWdodDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5pbmNvcnJlY3RBbnN3ZXJzLnB1c2goXG4gICAgICBuZXcgQW5zd2VyKHRleHQsIHJlYWN0aW9uLCBzaG93SGlnaGxpZ2h0LCBoaWdobGlnaHQsIHRoaXMuc2V0dGluZ3MpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGhvdyBtYW55IGNoYXJhY3RlcnMgdGhlIGlucHV0IGJveCBtdXN0IGhhdmUgYmUgdG8gYWxsb3cgZm9yIGFsbCBjb3JyZWN0IGFuc3dlcnMuXG4gICAqL1xuICAvLyBUT0RPOiByZWZhY3RvclxuICBwcml2YXRlIGNhbGN1bGF0ZU1pblRleHRMZW5ndGgoKTogdm9pZCB7XG4gICAgdmFyIGFuc3dlcnM6IHN0cmluZ1tdID0gbmV3IEFycmF5KCk7XG4gICAgZm9yIChsZXQgY29ycmVjdEFuc3dlciBvZiB0aGlzLmNvcnJlY3RBbnN3ZXJzKSB7XG4gICAgICBhbnN3ZXJzLnB1c2goZ2V0TG9uZ2VzdFN0cmluZyhjb3JyZWN0QW5zd2VyLmFsdGVybmF0aXZlcykpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNldHRpbmdzLmNsb3plVHlwZSA9PT0gQ2xvemVUeXBlLlNlbGVjdCkge1xuICAgICAgZm9yIChsZXQgaW5jb3JyZWN0QW5zd2VyIG9mIHRoaXMuaW5jb3JyZWN0QW5zd2Vycykge1xuICAgICAgICBhbnN3ZXJzLnB1c2goZ2V0TG9uZ2VzdFN0cmluZyhpbmNvcnJlY3RBbnN3ZXIuYWx0ZXJuYXRpdmVzKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGxvbmdlc3RBbnN3ZXIgPSBnZXRMb25nZXN0U3RyaW5nKGFuc3dlcnMpO1xuICAgIHZhciBsID0gbG9uZ2VzdEFuc3dlci5sZW5ndGg7XG4gICAgdGhpcy5taW5UZXh0TGVuZ3RoID0gTWF0aC5tYXgoMTAsIGwgLSAobCAlIDEwKSArIDEwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbGlzdCBvZiBjaG9pY2VzIGZyb20gYWxsIGFsdGVybmF0aXZlcyBwcm92aWRlZCBieVxuICAgKiB0aGUgY29ycmVjdCBhbmQgaW5jb3JyZWN0IGFuc3dlcnMuXG4gICAqL1xuICBwcml2YXRlIGxvYWRDaG9pY2VzRnJvbU93bkFsdGVybmF0aXZlcygpOiBzdHJpbmdbXSB7XG4gICAgdGhpcy5jaG9pY2VzID0gbmV3IEFycmF5KCk7XG4gICAgZm9yIChsZXQgYW5zd2VyIG9mIHRoaXMuY29ycmVjdEFuc3dlcnMpIHtcbiAgICAgIGZvciAobGV0IGFsdGVybmF0aXZlIG9mIGFuc3dlci5hbHRlcm5hdGl2ZXMpIHtcbiAgICAgICAgdGhpcy5jaG9pY2VzLnB1c2goYWx0ZXJuYXRpdmUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IGFuc3dlciBvZiB0aGlzLmluY29ycmVjdEFuc3dlcnMpIHtcbiAgICAgIGZvciAobGV0IGFsdGVybmF0aXZlIG9mIGFuc3dlci5hbHRlcm5hdGl2ZXMpIHtcbiAgICAgICAgdGhpcy5jaG9pY2VzLnB1c2goYWx0ZXJuYXRpdmUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY2hvaWNlcyA9IHNodWZmbGVBcnJheSh0aGlzLmNob2ljZXMpO1xuICAgIHRoaXMuY2hvaWNlcy51bnNoaWZ0KFwiXCIpO1xuXG4gICAgcmV0dXJuIHRoaXMuY2hvaWNlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbGlzdCBvZiBjaG9pY2VzIGZyb20gYWxsIGNvcnJlY3QgYW5zd2VycyBvZiB0aGUgY2xvemUuXG4gICAqIEBwYXJhbSBvdGhlckJsYW5rcyBBbGwgT1RIRVIgYmxhbmtzIGluIHRoZSBjbG96ZS4gKGV4Y2x1ZGVzIHRoZSBjdXJyZW50IG9uZSEpXG4gICAqL1xuICBwdWJsaWMgbG9hZENob2ljZXNGcm9tT3RoZXJCbGFua3Mob3RoZXJCbGFua3M6IEJsYW5rW10pOiBzdHJpbmdbXSB7XG4gICAgbGV0IG93bkNob2ljZXMgPSBuZXcgQXJyYXkoKTtcbiAgICBmb3IgKGxldCBhbnN3ZXIgb2YgdGhpcy5jb3JyZWN0QW5zd2Vycykge1xuICAgICAgZm9yIChsZXQgYWx0ZXJuYXRpdmUgb2YgYW5zd2VyLmFsdGVybmF0aXZlcykge1xuICAgICAgICBvd25DaG9pY2VzLnB1c2goYWx0ZXJuYXRpdmUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBvdGhlckNob2ljZXMgPSBuZXcgQXJyYXkoKTtcbiAgICBmb3IgKGxldCBvdGhlckJsYW5rIG9mIG90aGVyQmxhbmtzKSB7XG4gICAgICBmb3IgKGxldCBhbnN3ZXIgb2Ygb3RoZXJCbGFuay5jb3JyZWN0QW5zd2Vycykge1xuICAgICAgICBmb3IgKGxldCBhbHRlcm5hdGl2ZSBvZiBhbnN3ZXIuYWx0ZXJuYXRpdmVzKSB7XG4gICAgICAgICAgb3RoZXJDaG9pY2VzLnB1c2goYWx0ZXJuYXRpdmUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgb3RoZXJDaG9pY2VzID0gc2h1ZmZsZUFycmF5KG90aGVyQ2hvaWNlcyk7XG5cbiAgICBsZXQgbWF4Q2hvaWNlcyA9IHRoaXMuc2V0dGluZ3Muc2VsZWN0QWx0ZXJuYXRpdmVSZXN0cmljdGlvbjtcbiAgICBpZiAobWF4Q2hvaWNlcyA9PT0gdW5kZWZpbmVkIHx8IG1heENob2ljZXMgPT09IDApXG4gICAgICBtYXhDaG9pY2VzID0gb3duQ2hvaWNlcy5sZW5ndGggKyBvdGhlckNob2ljZXMubGVuZ3RoO1xuXG4gICAgbGV0IGxlZnRPdmVyQ2hvaWNlcyA9IG1heENob2ljZXMgLSBvd25DaG9pY2VzLmxlbmd0aDtcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGxlZnRPdmVyQ2hvaWNlcyAmJiB4IDwgb3RoZXJDaG9pY2VzLmxlbmd0aDsgeCsrKSB7XG4gICAgICBpZiAob3duQ2hvaWNlcy5pbmRleE9mKG90aGVyQ2hvaWNlc1t4XSkgPj0gMCkge1xuICAgICAgICBsZWZ0T3ZlckNob2ljZXMrKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG93bkNob2ljZXMucHVzaChvdGhlckNob2ljZXNbeF0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY2hvaWNlcyA9IHNodWZmbGVBcnJheShvd25DaG9pY2VzKTtcbiAgICB0aGlzLmNob2ljZXMudW5zaGlmdChcIlwiKTtcblxuICAgIHJldHVybiB0aGlzLmNob2ljZXM7XG4gIH1cblxuICAvKipcbiAgKiBDbGVhcnMgdGhlIGJsYW5rIGZyb20gYWxsIGVudGVyZWQgdGV4dCBhbmQgaGlkZXMgcG9wdXBzLlxuICAqL1xuICBwdWJsaWMgcmVzZXQoKSB7XG4gICAgdGhpcy5lbnRlcmVkVGV4dCA9IFwiXCI7XG4gICAgdGhpcy5sYXN0Q2hlY2tlZFRleHQgPSBcIlwiO1xuICAgIHRoaXMucmVtb3ZlVG9vbHRpcCgpO1xuICAgIHRoaXMuc2V0QW5zd2VyU3RhdGUoTWVzc2FnZVR5cGUuTm9uZSk7XG4gICAgdGhpcy5oYXNQZW5kaW5nRmVlZGJhY2sgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBibGFuayB0byBhIHN0YXRlIGluIHdoaWNoIHRoZSBjb3JyZWN0IHNvbHV0aW9uIGlmIHNob3duIGlmIHRoZSB1c2VyXG4gICAqIGhhc24ndCBlbnRlcmVkIGEgY29ycmVjdCBvbmUgc28gZmFyLlxuICAgKi9cbiAgcHVibGljIHNob3dTb2x1dGlvbigpIHtcbiAgICB0aGlzLmV2YWx1YXRlQXR0ZW1wdCh0cnVlKTtcbiAgICB0aGlzLnJlbW92ZVRvb2x0aXAoKTtcbiAgICBpZiAodGhpcy5pc0NvcnJlY3QpXG4gICAgICByZXR1cm47XG4gICAgdGhpcy5lbnRlcmVkVGV4dCA9IHRoaXMuY29ycmVjdEFuc3dlcnNbMF0uYWx0ZXJuYXRpdmVzWzBdO1xuICAgIHRoaXMuc2V0QW5zd2VyU3RhdGUoTWVzc2FnZVR5cGUuU2hvd1NvbHV0aW9uKTtcbiAgfVxuXG4gIHB1YmxpYyBvbkZvY3Vzc2VkKCkge1xuICAgIGlmICh0aGlzLmhhc1BlbmRpbmdGZWVkYmFjaykge1xuICAgICAgdGhpcy5ldmFsdWF0ZUF0dGVtcHQoZmFsc2UpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zZXR0aW5ncy5jbG96ZVR5cGUgPT09IENsb3plVHlwZS5TZWxlY3QpIHtcbiAgICAgIHRoaXMuc2V0QW5zd2VyU3RhdGUoTWVzc2FnZVR5cGUuTm9uZSk7XG4gICAgICB0aGlzLmxhc3RDaGVja2VkVGV4dCA9IFwiXCI7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uRGlzcGxheUZlZWRiYWNrKCkge1xuICAgIGlmICh0aGlzLmhhc1BlbmRpbmdGZWVkYmFjaykge1xuICAgICAgdGhpcy5ldmFsdWF0ZUF0dGVtcHQoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZGlzcGxheVRvb2x0aXAobWVzc2FnZTogc3RyaW5nLCB0eXBlOiBNZXNzYWdlVHlwZSwgc3VycHJlc3NUb29sdGlwOiBib29sZWFuLCBpZD86IHN0cmluZykge1xuICAgIGlmICghc3VycHJlc3NUb29sdGlwKVxuICAgICAgdGhpcy5tZXNzYWdlU2VydmljZS5zaG93KGlkID8gaWQgOiB0aGlzLmlkLCBtZXNzYWdlLCB0aGlzLCB0eXBlKTtcbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaGFzUGVuZGluZ0ZlZWRiYWNrID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlVG9vbHRpcCgpIHtcbiAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmhpZGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0VG9vbHRpcEVycm9yVGV4dChtZXNzYWdlOiBNZXNzYWdlLCBzdXJwcmVzc1Rvb2x0aXA6IGJvb2xlYW4pIHtcbiAgICBpZiAobWVzc2FnZS5oaWdobGlnaHRlZEVsZW1lbnQpIHtcbiAgICAgIHRoaXMuZGlzcGxheVRvb2x0aXAobWVzc2FnZS50ZXh0LCBNZXNzYWdlVHlwZS5FcnJvciwgc3VycHJlc3NUb29sdGlwLCBtZXNzYWdlLmhpZ2hsaWdodGVkRWxlbWVudC5pZCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5kaXNwbGF5VG9vbHRpcChtZXNzYWdlLnRleHQsIE1lc3NhZ2VUeXBlLkVycm9yLCBzdXJwcmVzc1Rvb2x0aXApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0U3BlbGxpbmdNaXN0YWtlTWVzc2FnZShleHBlY3RlZFRleHQ6IHN0cmluZywgZW50ZXJlZFRleHQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgdmFyIG1lc3NhZ2UgPSB0aGlzLmxvY2FsaXphdGlvbi5nZXRUZXh0RnJvbUxhYmVsKExvY2FsaXphdGlvbkxhYmVscy50eXBvTWVzc2FnZSlcblxuICAgIHZhciBkaWZmID0ganNkaWZmLmRpZmZDaGFycyhleHBlY3RlZFRleHQsIGVudGVyZWRUZXh0LCB7IGlnbm9yZUNhc2U6ICF0aGlzLnNldHRpbmdzLmNhc2VTZW5zaXRpdmUgfSk7XG5cbiAgICB2YXIgbWlzdGFrZVNwYW4gPSB0aGlzLmpxdWVyeShcIjxzcGFuLz5cIiwgeyBcImNsYXNzXCI6IFwic3BlbGxpbmctbWlzdGFrZVwiIH0pO1xuICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBkaWZmLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgdmFyIHBhcnQgPSBkaWZmW2luZGV4XTtcbiAgICAgIHZhciBzcGFuQ2xhc3MgPSAnJztcbiAgICAgIGlmIChwYXJ0LnJlbW92ZWQpIHtcbiAgICAgICAgaWYgKGluZGV4ID09PSBkaWZmLmxlbmd0aCAtIDEgfHwgIWRpZmZbaW5kZXggKyAxXS5hZGRlZCkge1xuICAgICAgICAgIHBhcnQudmFsdWUgPSBwYXJ0LnZhbHVlLnJlcGxhY2UoLy4vZywgXCJfXCIpO1xuICAgICAgICAgIHNwYW5DbGFzcyA9ICdtaXNzaW5nLWNoYXJhY3Rlcic7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChwYXJ0LmFkZGVkKSB7XG4gICAgICAgIHNwYW5DbGFzcyA9ICdtaXN0YWtlbi1jaGFyYWN0ZXInO1xuICAgICAgfVxuXG4gICAgICB2YXIgc3BhbiA9IHRoaXMuanF1ZXJ5KFwiPHNwYW4vPlwiLCB7IFwiY2xhc3NcIjogc3BhbkNsYXNzLCBcImh0bWxcIjogcGFydC52YWx1ZS5yZXBsYWNlKFwiIFwiLCBcIiZuYnNwO1wiKSB9KTtcbiAgICAgIG1pc3Rha2VTcGFuLmFwcGVuZChzcGFuKTtcbiAgICB9XG5cbiAgICBtZXNzYWdlID0gbWVzc2FnZS5yZXBsYWNlKFwiQG1pc3Rha2VcIiwgdGhpcy5qcXVlcnkoXCI8c3Bhbi8+XCIpLmFwcGVuZChtaXN0YWtlU3BhbikuaHRtbCgpKTtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIGVudGVyZWQgdGV4dCBpcyB0aGUgY29ycmVjdCBhbnN3ZXIgb3Igb25lIG9mIHRoZVxuICAgKiBpbmNvcnJlY3Qgb25lcyBhbmQgZ2l2ZXMgdGhlIHVzZXIgZmVlZGJhY2sgYWNjb3JkaW5nbHkuXG4gICAqL1xuICBwdWJsaWMgZXZhbHVhdGVBdHRlbXB0KHN1cnByZXNzVG9vbHRpcHM6IGJvb2xlYW4sIGZvcmNlQ2hlY2s/OiBib29sZWFuKSB7XG4gICAgaWYgKCF0aGlzLmhhc1BlbmRpbmdGZWVkYmFjayAmJiB0aGlzLmxhc3RDaGVja2VkVGV4dCA9PT0gdGhpcy5lbnRlcmVkVGV4dCAmJiAhZm9yY2VDaGVjaylcbiAgICAgIHJldHVybjtcblxuICAgIHRoaXMubGFzdENoZWNrZWRUZXh0ID0gdGhpcy5lbnRlcmVkVGV4dC50b1N0cmluZygpO1xuICAgIHRoaXMuaGFzUGVuZGluZ0ZlZWRiYWNrID0gZmFsc2U7XG4gICAgdGhpcy5yZW1vdmVUb29sdGlwKCk7XG5cbiAgICB2YXIgZXhhY3RDb3JyZWN0TWF0Y2hlcyA9IHRoaXMuY29ycmVjdEFuc3dlcnMubWFwKGFuc3dlciA9PiBhbnN3ZXIuZXZhbHVhdGVBdHRlbXB0KHRoaXMuZW50ZXJlZFRleHQpKS5maWx0ZXIoZXZhbHVhdGlvbiA9PiBldmFsdWF0aW9uLmNvcnJlY3RuZXNzID09PSBDb3JyZWN0bmVzcy5FeGFjdE1hdGNoKS5zb3J0KGV2YWx1YXRpb24gPT4gZXZhbHVhdGlvbi5jaGFyYWN0ZXJEaWZmZXJlbmNlQ291bnQpO1xuICAgIHZhciBjbG9zZUNvcnJlY3RNYXRjaGVzID0gdGhpcy5jb3JyZWN0QW5zd2Vycy5tYXAoYW5zd2VyID0+IGFuc3dlci5ldmFsdWF0ZUF0dGVtcHQodGhpcy5lbnRlcmVkVGV4dCkpLmZpbHRlcihldmFsdWF0aW9uID0+IGV2YWx1YXRpb24uY29ycmVjdG5lc3MgPT09IENvcnJlY3RuZXNzLkNsb3NlTWF0Y2gpLnNvcnQoZXZhbHVhdGlvbiA9PiBldmFsdWF0aW9uLmNoYXJhY3RlckRpZmZlcmVuY2VDb3VudCk7XG4gICAgdmFyIGV4YWN0SW5jb3JyZWN0TWF0Y2hlcyA9IHRoaXMuaW5jb3JyZWN0QW5zd2Vycy5tYXAoYW5zd2VyID0+IGFuc3dlci5ldmFsdWF0ZUF0dGVtcHQodGhpcy5lbnRlcmVkVGV4dCkpLmZpbHRlcihldmFsdWF0aW9uID0+IGV2YWx1YXRpb24uY29ycmVjdG5lc3MgPT09IENvcnJlY3RuZXNzLkV4YWN0TWF0Y2gpLnNvcnQoZXZhbHVhdGlvbiA9PiBldmFsdWF0aW9uLmNoYXJhY3RlckRpZmZlcmVuY2VDb3VudCk7XG4gICAgdmFyIGNsb3NlSW5jb3JyZWN0TWF0Y2hlcyA9IHRoaXMuaW5jb3JyZWN0QW5zd2Vycy5tYXAoYW5zd2VyID0+IGFuc3dlci5ldmFsdWF0ZUF0dGVtcHQodGhpcy5lbnRlcmVkVGV4dCkpLmZpbHRlcihldmFsdWF0aW9uID0+IGV2YWx1YXRpb24uY29ycmVjdG5lc3MgPT09IENvcnJlY3RuZXNzLkNsb3NlTWF0Y2gpLnNvcnQoZXZhbHVhdGlvbiA9PiBldmFsdWF0aW9uLmNoYXJhY3RlckRpZmZlcmVuY2VDb3VudCk7XG5cbiAgICBpZiAoZXhhY3RDb3JyZWN0TWF0Y2hlcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnNldEFuc3dlclN0YXRlKE1lc3NhZ2VUeXBlLkNvcnJlY3QpO1xuICAgICAgaWYgKCF0aGlzLnNldHRpbmdzLmNhc2VTZW5zaXRpdmUpIHtcbiAgICAgICAgdGhpcy5lbnRlcmVkVGV4dCA9IGV4YWN0Q29ycmVjdE1hdGNoZXNbMF0udXNlZEFsdGVybmF0aXZlO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChleGFjdEluY29ycmVjdE1hdGNoZXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5zZXRBbnN3ZXJTdGF0ZShNZXNzYWdlVHlwZS5FcnJvcik7XG4gICAgICB0aGlzLnNob3dFcnJvclRvb2x0aXAoZXhhY3RJbmNvcnJlY3RNYXRjaGVzWzBdLnVzZWRBbnN3ZXIsIHN1cnByZXNzVG9vbHRpcHMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChjbG9zZUNvcnJlY3RNYXRjaGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGlmICh0aGlzLnNldHRpbmdzLndhcm5TcGVsbGluZ0Vycm9ycykge1xuICAgICAgICB0aGlzLmRpc3BsYXlUb29sdGlwKHRoaXMuZ2V0U3BlbGxpbmdNaXN0YWtlTWVzc2FnZShjbG9zZUNvcnJlY3RNYXRjaGVzWzBdLnVzZWRBbHRlcm5hdGl2ZSwgdGhpcy5lbnRlcmVkVGV4dCksIE1lc3NhZ2VUeXBlLlJldHJ5LCBzdXJwcmVzc1Rvb2x0aXBzKTtcbiAgICAgICAgdGhpcy5zZXRBbnN3ZXJTdGF0ZShNZXNzYWdlVHlwZS5SZXRyeSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnNldHRpbmdzLmFjY2VwdFNwZWxsaW5nRXJyb3JzKSB7XG4gICAgICAgIHRoaXMuc2V0QW5zd2VyU3RhdGUoTWVzc2FnZVR5cGUuQ29ycmVjdCk7XG4gICAgICAgIHRoaXMuZW50ZXJlZFRleHQgPSBjbG9zZUNvcnJlY3RNYXRjaGVzWzBdLnVzZWRBbHRlcm5hdGl2ZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjbG9zZUluY29ycmVjdE1hdGNoZXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5zZXRBbnN3ZXJTdGF0ZShNZXNzYWdlVHlwZS5FcnJvcik7XG4gICAgICB0aGlzLnNob3dFcnJvclRvb2x0aXAoY2xvc2VJbmNvcnJlY3RNYXRjaGVzWzBdLnVzZWRBbnN3ZXIsIHN1cnByZXNzVG9vbHRpcHMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBhbHdheXNBcHBseWluZ0Fuc3dlcnMgPSB0aGlzLmluY29ycmVjdEFuc3dlcnMuZmlsdGVyKGEgPT4gYS5hcHBsaWVzQWx3YXlzKTtcbiAgICBpZiAoYWx3YXlzQXBwbHlpbmdBbnN3ZXJzICYmIGFsd2F5c0FwcGx5aW5nQW5zd2Vycy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnNob3dFcnJvclRvb2x0aXAoYWx3YXlzQXBwbHlpbmdBbnN3ZXJzWzBdLCBzdXJwcmVzc1Rvb2x0aXBzKTtcbiAgICB9XG5cbiAgICB0aGlzLnNldEFuc3dlclN0YXRlKE1lc3NhZ2VUeXBlLkVycm9yKTtcbiAgfVxuXG4gIHB1YmxpYyBvblR5cGVkKCk6IHZvaWQge1xuICAgIHRoaXMuc2V0QW5zd2VyU3RhdGUoTWVzc2FnZVR5cGUuTm9uZSk7XG4gICAgdGhpcy5sYXN0Q2hlY2tlZFRleHQgPSBcIlwiO1xuICAgIHRoaXMucmVtb3ZlVG9vbHRpcCgpO1xuICAgIHRoaXMudXBkYXRlV2lkdGgoKTtcbiAgfVxuXG4gIHB1YmxpYyBsb3N0Rm9jdXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubWVzc2FnZVNlcnZpY2UuaXNBY3RpdmUodGhpcykpIHtcbiAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuaGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlV2lkdGgoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2V0dGluZ3MuY2xvemVUeXBlID09PSBDbG96ZVR5cGUuU2VsZWN0KSB7XG4gICAgICByZXR1cm47IC8vIE9ubHkgcmVsZXZhbnQgZm9yIGlucHV0IGZpZWxkc1xuICAgIH1cblxuICAgIGNsZWFyVGltZW91dCh0aGlzLnVwZGF0ZVdpZHRoVGltZW91dCk7XG4gICAgdGhpcy51cGRhdGVXaWR0aFRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuaW5wdXRET00gPSB0aGlzLmlucHV0RE9NIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3RoaXMuaWR9YCk7XG4gICAgICBpZiAoIXRoaXMuaW5wdXRET00pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLndpZGVzdENoYXIgPSB0aGlzLndpZGVzdENoYXIgfHwgdGhpcy5jb21wdXRlV2lkZXN0Q2hhcigpO1xuICAgICAgY29uc3Qgd2lkdGggPSBNYXRoLm1heCh0aGlzLnBsYWNlaG9sZGVycyAqIHRoaXMud2lkZXN0Q2hhci53aWR0aCwgdGhpcy5jb21wdXRlRmllbGRXaWR0aCgpKTtcblxuICAgICAgdGhpcy5pbnB1dERPTS5zdHlsZS53aWR0aCA9IGAke3dpZHRofXB4YDtcbiAgICB9LCAwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb21wdXRlIHdpZHRoIG9mIGlucHV0IGZpZWxkIChmb3IgZ2l2ZW4gdGV4dCkuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbdGV4dD0nJ10gVGV4dCB0byBzZXQgZm9yIGZpZWxkLlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IENvbXB1dGVkIHdpZHRoLlxuICAgKi9cbiAgY29tcHV0ZUZpZWxkV2lkdGgodGV4dCA9ICcnKTogbnVtYmVyIHtcbiAgICB0aGlzLmlucHV0RE9NID0gdGhpcy5pbnB1dERPTSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0aGlzLmlkfWApO1xuICAgIGlmICghdGhpcy5pbnB1dERPTSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHRtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRtcC5pbm5lclRleHQgPSB0ZXh0IHx8IHRoaXMuZW50ZXJlZFRleHQ7XG4gICAgdG1wLmNsYXNzTGlzdC5hZGQoJ2g1cC1hZHZhbmNlZC1ibGFua3MtdG1wLWZpZWxkJyk7XG5cbiAgICB0aGlzLnN0eWxlID0gdGhpcy5zdHlsZSB8fCBnZXRDb21wdXRlZFN0eWxlKHRoaXMuaW5wdXRET00pO1xuXG4gICAgdG1wLnN0eWxlLmZvbnRTaXplID0gdGhpcy5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdmb250LXNpemUnKTtcbiAgICB0bXAuc3R5bGUuZm9udEZhbWlseSA9IHRoaXMuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnZm9udC1mYW1pbHknKTtcbiAgICB0bXAuc3R5bGUucGFkZGluZyA9IHRoaXMuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgncGFkZGluZycpO1xuXG4gICAgdGhpcy5pbnB1dERPTS5wYXJlbnROb2RlLmFwcGVuZENoaWxkKHRtcCk7XG4gICAgY29uc3Qgd2lkdGggPSB0bXAuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggLVxuICAgICAgcGFyc2VJbnQodGhpcy5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLWxlZnQnKSkgLVxuICAgICAgcGFyc2VJbnQodGhpcy5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLXJpZ2h0JykpO1xuICAgIHRtcC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRtcCk7XG5cbiAgICByZXR1cm4gd2lkdGg7XG4gIH1cblxuICAvKipcbiAgICogQ29tcHV0ZSB3aWRlc3QgY2hhci5cbiAgICogQHJldHVybiB7b2JqZWN0fSBSZXN1bHQgd2l0aCBjaGFyIGFuZCB3aWR0aC5cbiAgICovXG4gIHByaXZhdGUgY29tcHV0ZVdpZGVzdENoYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgYWxsQ2hhcnMgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXpBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWic7XG4gICAgbGV0IHJlc3VsdCA9IHtcbiAgICAgIGNoYXI6IG51bGwsXG4gICAgICB3aWR0aDogMFxuICAgIH07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxDaGFycy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgY2hhciA9IGFsbENoYXJzLnN1YnN0cihpLCAxKTtcbiAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5jb21wdXRlRmllbGRXaWR0aChjaGFyKTtcbiAgICAgIGlmICh3aWR0aCA+IHJlc3VsdC53aWR0aCkge1xuICAgICAgICByZXN1bHQgPSB7XG4gICAgICAgICAgY2hhcjogY2hhcixcbiAgICAgICAgICB3aWR0aDogd2lkdGhcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgYm9vbGVhbiBwcm9wZXJ0aWVzIGlzQ29ycmVjdCwgaXMgRXJyb3IgYW5kIGlzUmV0cnkgYWNjb3JkaW5nIHRvIHRoZXBhc3NlZCAgbWVzc2FnZVR5cGUuXG4gICAqIEBwYXJhbSBtZXNzYWdlVHlwZVxuICAgKi9cbiAgcHJpdmF0ZSBzZXRBbnN3ZXJTdGF0ZShtZXNzYWdlVHlwZTogTWVzc2FnZVR5cGUpIHtcbiAgICB0aGlzLmlzQ29ycmVjdCA9IGZhbHNlO1xuICAgIHRoaXMuaXNFcnJvciA9IGZhbHNlO1xuICAgIHRoaXMuaXNSZXRyeSA9IGZhbHNlO1xuICAgIHRoaXMuaXNTaG93aW5nU29sdXRpb24gPSBmYWxzZTtcblxuICAgIHN3aXRjaCAobWVzc2FnZVR5cGUpIHtcbiAgICAgIGNhc2UgTWVzc2FnZVR5cGUuQ29ycmVjdDpcbiAgICAgICAgdGhpcy5pc0NvcnJlY3QgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTWVzc2FnZVR5cGUuRXJyb3I6XG4gICAgICAgIHRoaXMuaXNFcnJvciA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBNZXNzYWdlVHlwZS5SZXRyeTpcbiAgICAgICAgdGhpcy5pc1JldHJ5ID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIE1lc3NhZ2VUeXBlLlNob3dTb2x1dGlvbjpcbiAgICAgICAgdGhpcy5pc1Nob3dpbmdTb2x1dGlvbiA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2hvd0Vycm9yVG9vbHRpcChhbnN3ZXI6IEFuc3dlciwgc3VycHJlc3NUb29sdGlwOiBib29sZWFuKSB7XG4gICAgaWYgKGFuc3dlci5tZXNzYWdlICYmIGFuc3dlci5tZXNzYWdlLnRleHQpIHtcbiAgICAgIHRoaXMuc2V0VG9vbHRpcEVycm9yVGV4dChhbnN3ZXIubWVzc2FnZSwgc3VycHJlc3NUb29sdGlwKTtcbiAgICB9XG4gICAgaWYgKCFzdXJwcmVzc1Rvb2x0aXApIHtcbiAgICAgIGFuc3dlci5hY3RpdmF0ZUhpZ2hsaWdodCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwbGF5cyB0aGUgaGludCBpbiB0aGUgdG9vbHRpcC5cbiAgICovXG4gIHB1YmxpYyBzaG93SGludCgpIHtcbiAgICBpZiAodGhpcy5pc1Nob3dpbmdTb2x1dGlvbiB8fCB0aGlzLmlzQ29ycmVjdClcbiAgICAgIHJldHVybjtcblxuICAgIHRoaXMucmVtb3ZlVG9vbHRpcCgpO1xuICAgIGlmICh0aGlzLmhpbnQgJiYgdGhpcy5oaW50LnRleHQgIT09IFwiXCIpIHtcbiAgICAgIHRoaXMuZGlzcGxheVRvb2x0aXAodGhpcy5oaW50LnRleHQsIE1lc3NhZ2VUeXBlLlJldHJ5LCBmYWxzZSk7XG4gICAgICBpZiAodGhpcy5oaW50LmhpZ2hsaWdodGVkRWxlbWVudCkge1xuICAgICAgICB0aGlzLmhpbnQuaGlnaGxpZ2h0ZWRFbGVtZW50LmlzSGlnaGxpZ2h0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzZXJpYWxpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMubGFzdENoZWNrZWRUZXh0IHx8IHRoaXMuZW50ZXJlZFRleHQ7XG4gIH1cblxuICBwdWJsaWMgZGVzZXJpYWxpemUoZGF0YTogYW55KSB7XG4gICAgdGhpcy5lbnRlcmVkVGV4dCA9IGRhdGE7XG4gIH1cbn1cbiIsImV4cG9ydCBlbnVtIENsb3plRWxlbWVudFR5cGUge1xuICBCbGFuayxcbiAgSGlnaGxpZ2h0XG59XG5cbmV4cG9ydCBjbGFzcyBDbG96ZUVsZW1lbnQge1xuICBwdWJsaWMgdHlwZTogQ2xvemVFbGVtZW50VHlwZTtcbn0iLCJpbXBvcnQgeyBIaWdobGlnaHQgfSBmcm9tIFwiLi9oaWdobGlnaHRcIjtcbmltcG9ydCB7IEJsYW5rIH0gZnJvbSBcIi4vYmxhbmtcIjtcblxuLyoqXG4gKiBSZXByZXNlbnRzIHRoZSBjbG96ZS4gSW5zdGFudGlhdGUgd2l0aCBzdGF0aWMgY3JlYXRlQ2xvemUoKS5cbiAqL1xuZXhwb3J0IGNsYXNzIENsb3plIHtcbiAgcHVibGljIGh0bWw6IHN0cmluZztcbiAgcHVibGljIGhpZ2hsaWdodHM6IEhpZ2hsaWdodFtdO1xuICBwdWJsaWMgYmxhbmtzOiBCbGFua1tdO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgYWxsIGJsYW5rcyB3ZXJlIGVudGVyZWQgY29ycmVjdGx5LiBcbiAgICogQHJldHVybnMgYm9vbGVhblxuICAgKi9cbiAgcHVibGljIGdldCBpc1NvbHZlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5ibGFua3MuZXZlcnkoYiA9PiBiLmlzQ29ycmVjdCA9PT0gdHJ1ZSk7XG4gIH1cblxuXG4gIHB1YmxpYyBoaWRlQWxsSGlnaGxpZ2h0cygpOiB2b2lkIHtcbiAgICBmb3IgKHZhciBoaWdobGlnaHQgb2YgdGhpcy5oaWdobGlnaHRzKSB7XG4gICAgICBoaWdobGlnaHQuaXNIaWdobGlnaHRlZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyByZXNldCgpIHtcbiAgICB0aGlzLmhpZGVBbGxIaWdobGlnaHRzKCk7XG4gICAgZm9yICh2YXIgYmxhbmsgb2YgdGhpcy5ibGFua3MpIHtcbiAgICAgIGJsYW5rLnJlc2V0KCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNob3dTb2x1dGlvbnMoKSB7XG4gICAgZm9yICh2YXIgYmxhbmsgb2YgdGhpcy5ibGFua3MpIHtcbiAgICAgIGJsYW5rLnNob3dTb2x1dGlvbigpO1xuICAgIH1cbiAgICB0aGlzLmhpZGVBbGxIaWdobGlnaHRzKCk7XG4gIH1cblxuICBwdWJsaWMgc2VyaWFsaXplKCkgOiBzdHJpbmdbXSB7XG4gICAgdmFyIGNsb3plID0gW107XG4gICAgZm9yICh2YXIgYmxhbmsgb2YgdGhpcy5ibGFua3MpIHtcbiAgICAgIGNsb3plLnB1c2goYmxhbmsuc2VyaWFsaXplKCkpO1xuICAgIH1cblxuICAgIHJldHVybiBjbG96ZTtcbiAgfVxuXG4gIHB1YmxpYyBkZXNlcmlhbGl6ZShkYXRhOiBhbnkpIHtcbiAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgZGF0YS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGlmIChpbmRleCA+PSB0aGlzLmJsYW5rcy5sZW5ndGgpXG4gICAgICAgIHJldHVybjtcbiAgICAgIHZhciBibGFuayA9IHRoaXMuYmxhbmtzW2luZGV4XTtcbiAgICAgIGJsYW5rLmRlc2VyaWFsaXplKGRhdGFbaW5kZXhdKTtcbiAgICB9XG4gIH1cbn0iLCJleHBvcnQgZW51bSBNZXNzYWdlVHlwZSB7XG4gIEVycm9yLFxuICBDb3JyZWN0LFxuICBSZXRyeSxcbiAgU2hvd1NvbHV0aW9uLFxuICBOb25lXG59XG5cbmV4cG9ydCBlbnVtIENsb3plVHlwZSB7XG4gIFR5cGUsXG4gIFNlbGVjdFxufVxuXG5leHBvcnQgZW51bSBTZWxlY3RBbHRlcm5hdGl2ZXMge1xuICBBbHRlcm5hdGl2ZXMsXG4gIEFsbFxufSIsImltcG9ydCB7IENsb3plRWxlbWVudCwgQ2xvemVFbGVtZW50VHlwZSB9IGZyb20gJy4vY2xvemUtZWxlbWVudCc7XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIGhpZ2hsaWdodCBpbiB0aGUgY2xvemUuXG4gKi9cbmV4cG9ydCBjbGFzcyBIaWdobGlnaHQgZXh0ZW5kcyBDbG96ZUVsZW1lbnQge1xuXHR0ZXh0OiBzdHJpbmc7XG5cdGlzSGlnaGxpZ2h0ZWQ6IGJvb2xlYW47XG5cdGlkOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IodGV4dDogc3RyaW5nLCBpZDogc3RyaW5nKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLnR5cGUgPSBDbG96ZUVsZW1lbnRUeXBlLkhpZ2hsaWdodDtcblx0XHR0aGlzLnRleHQgPSB0ZXh0O1xuXHRcdHRoaXMuaWQgPSBpZDtcblx0XHR0aGlzLmlzSGlnaGxpZ2h0ZWQgPSBmYWxzZTtcblx0fVxufSIsImltcG9ydCB7IEhpZ2hsaWdodCB9IGZyb20gXCIuL2hpZ2hsaWdodFwiO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBtZXNzYWdlIHRoYXQgdGhlIGNvbnRlbnQgYXV0aG9yIGhhcyBzcGVjaWZpZWQgdG8gYmUgYSByZWFjdGlvblxuICogdG8gYW4gdXNlcidzIGFuc3dlci4gXG4gKi9cbmV4cG9ydCBjbGFzcyBNZXNzYWdlIHtcbiAgaGlnaGxpZ2h0ZWRFbGVtZW50OiBIaWdobGlnaHQ7XG5cbiAgY29uc3RydWN0b3IocHVibGljIHRleHQ6IHN0cmluZywgc2hvd0hpZ2hsaWdodDogYm9vbGVhbiwgcHJpdmF0ZSByZWxhdGl2ZUhpZ2hsaWdodFBvc2l0aW9uOiBudW1iZXIpIHtcbiAgICBpZighc2hvd0hpZ2hsaWdodClcbiAgICAgIHRoaXMucmVsYXRpdmVIaWdobGlnaHRQb3NpdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGxpbmtIaWdobGlnaHQgPSAoaGlnaGxpZ2h0c0JlZm9yZTogSGlnaGxpZ2h0W10sIGhpZ2hsaWdodHNBZnRlcjogSGlnaGxpZ2h0W10pID0+IHtcbiAgICBpZiAoIXRoaXMucmVsYXRpdmVIaWdobGlnaHRQb3NpdGlvbilcbiAgICAgIHJldHVybjtcblxuICAgICAgaWYgKHRoaXMucmVsYXRpdmVIaWdobGlnaHRQb3NpdGlvbiA8IDAgJiYgKDAgLSB0aGlzLnJlbGF0aXZlSGlnaGxpZ2h0UG9zaXRpb24gLSAxKSA8IGhpZ2hsaWdodHNCZWZvcmUubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuaGlnaGxpZ2h0ZWRFbGVtZW50ID0gaGlnaGxpZ2h0c0JlZm9yZVswIC0gdGhpcy5yZWxhdGl2ZUhpZ2hsaWdodFBvc2l0aW9uIC0gMV07XG4gICAgICB9XG4gICAgICBlbHNlIGlmICh0aGlzLnJlbGF0aXZlSGlnaGxpZ2h0UG9zaXRpb24gPiAwICYmICh0aGlzLnJlbGF0aXZlSGlnaGxpZ2h0UG9zaXRpb24gLSAxIDwgaGlnaGxpZ2h0c0FmdGVyLmxlbmd0aCkpIHtcbiAgICAgICAgdGhpcy5oaWdobGlnaHRlZEVsZW1lbnQgPSBoaWdobGlnaHRzQWZ0ZXJbdGhpcy5yZWxhdGl2ZUhpZ2hsaWdodFBvc2l0aW9uIC0gMV07XG4gICAgICB9XG4gIH1cbn0iLCIvKipcbiAqIEEgc25pcHBldCBpcyBhIHRleHQgYmxvY2sgdGhhdCBpcyBwdXQgaW50byBwbGFjZWQgbWFya2VkIGluIGZlZWRiYWNrIHRleHRzIG9yIGhpbnRzLlxuICovXG5leHBvcnQgY2xhc3MgU25pcHBldCB7XG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RzIHRoZSBzbmlwcGV0LlxuICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgc25pcHBldCB0aGF0IGlzIHVzZWQgd2hlbiBpdCBpcyByZWZlcmVuY2VkIGluIGEgZmVlZGJhY2t0ZXh0ICh3aXRob3V0IHRoZSBzbmlwcGV0IG1hcmtlciBAKVxuICAgKiBAcGFyYW0gdGV4dCBUaGUgc25pcHBldCBpdHNlbGYgKGh0bWwpXG4gICAqL1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nLCBwdWJsaWMgdGV4dDogc3RyaW5nKSB7XG4gICAgXG4gIH1cbn0iLCJleHBvcnQgY2xhc3MgWEFQSUFjdGl2aXR5RGVmaW5pdGlvbiB7XG4gIG5hbWU6IGFueTtcbiAgZGVzY3JpcHRpb246IGFueTtcbiAgdHlwZTogc3RyaW5nO1xuICBpbnRlcmFjdGlvblR5cGU6IFwidHJ1ZS1mYWxzZVwiIHwgXCJjaG9pY2VcIiB8IFwiZmlsbC1pblwiIHwgXCJsb25nLWZpbGwtaW5cIiB8IFwibWF0Y2hpbmdcIiB8IFwicGVyZm9ybWFuY2VcIiB8IFwic2VxdWVuY2luZ1wiIHwgXCJsaWtlcnRcIiB8IFwibnVtZXJpY1wiIHwgXCJvdGhlclwiO1xuICBjb3JyZWN0UmVzcG9uc2VzUGF0dGVybj86IHN0cmluZ1tdO1xuICBleHRlbnNpb25zOiBhbnk7XG59XG4iLCJpbXBvcnQgeyBCbGFua0xvYWRlciB9IGZyb20gJy4uL2NvbnRlbnQtbG9hZGVycy9ibGFuay1sb2FkZXInO1xuaW1wb3J0IHsgQmxhbmsgfSBmcm9tIFwiLi4vbW9kZWxzL2JsYW5rXCI7XG5pbXBvcnQgeyBTbmlwcGV0IH0gZnJvbSBcIi4uL21vZGVscy9zbmlwcGV0XCI7XG5pbXBvcnQgeyBJU2V0dGluZ3MgfSBmcm9tIFwiLi4vc2VydmljZXMvc2V0dGluZ3NcIjtcbmltcG9ydCB7IEg1UExvY2FsaXphdGlvbiB9IGZyb20gXCIuL2xvY2FsaXphdGlvblwiO1xuaW1wb3J0IHsgVW5yd2FwcGVyIH0gZnJvbSAnLi4vaGVscGVycy91bndyYXBwZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIElEYXRhUmVwb3NpdG9yeSB7XG4gIGdldEJsYW5rcygpOiBCbGFua1tdO1xuICBnZXRDbG96ZVRleHQoKTogc3RyaW5nO1xuICBnZXRGZWVkYmFja1RleHQoKTogc3RyaW5nO1xuICBnZXRNZWRpYSgpOiBhbnk7XG4gIGdldFRhc2tEZXNjcmlwdGlvbigpOiBzdHJpbmc7XG4gIGdldFNuaXBwZXRzKCk6IFNuaXBwZXRbXTtcbn1cblxuLyoqXG4gKiBXcmFwcyBhcm91bmQgdGhlIGg1cCBjb25maWcgb2JqZWN0IGFuZCBwcm92aWRlcyBhY2Nlc3MgdG8gdGhlIGNvbnRlbnQuXG4gKi9cbmV4cG9ydCBjbGFzcyBINVBEYXRhUmVwb3NpdG9yeSBpbXBsZW1lbnRzIElEYXRhUmVwb3NpdG9yeSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaDVwQ29uZmlnRGF0YTogYW55LCBwcml2YXRlIHNldHRpbmdzOiBJU2V0dGluZ3MsXG4gICAgcHJpdmF0ZSBsb2NhbGl6YXRpb246IEg1UExvY2FsaXphdGlvbiwgcHJpdmF0ZSBqcXVlcnk6IEpRdWVyeVN0YXRpYyxcbiAgICBwcml2YXRlIHVud3JhcHBlcjogVW5yd2FwcGVyKSB7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBibGFuayB0ZXh0IG9mIHRoZSBjbG96ZSAoYXMgSFRNTCBtYXJrdXApLlxuICAgKi9cbiAgZ2V0Q2xvemVUZXh0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuaDVwQ29uZmlnRGF0YS5jb250ZW50LmJsYW5rc1RleHQ7XG4gIH1cblxuICAvLyBUT0RPOiByZW1vdmUgb3IgaW1wbGVtZW50XG4gIGdldEZlZWRiYWNrVGV4dCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBcIlwiO1xuICB9XG5cbiAgZ2V0TWVkaWEoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5oNXBDb25maWdEYXRhLm1lZGlhLnR5cGU7XG4gIH1cblxuICBnZXRUYXNrRGVzY3JpcHRpb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5oNXBDb25maWdEYXRhLmNvbnRlbnQudGFzaztcbiAgfVxuXG4gIGdldEJsYW5rcygpOiBCbGFua1tdIHtcbiAgICB2YXIgYmxhbmtzOiBCbGFua1tdID0gbmV3IEFycmF5KCk7XG5cbiAgICBpZiAoIXRoaXMuaDVwQ29uZmlnRGF0YS5jb250ZW50LmJsYW5rc0xpc3QpXG4gICAgICByZXR1cm4gYmxhbmtzO1xuXG4gICAgbGV0IGJsYW5rc1BsYWNlaG9sZGVycyA9IHRoaXMuaDVwQ29uZmlnRGF0YS5jb250ZW50LmJsYW5rc1RleHQubWF0Y2goLyhfezMsfSkvZyk7XG4gICAgYmxhbmtzUGxhY2Vob2xkZXJzID0gKGJsYW5rc1BsYWNlaG9sZGVycyB8fCBbXSlcbiAgICAgIC5tYXAodW5kZXJzY29yZXMgPT4gdW5kZXJzY29yZXMubGVuZ3RoKTtcbiAgICB3aGlsZShibGFua3NQbGFjZWhvbGRlcnMubGVuZ3RoIDwgdGhpcy5oNXBDb25maWdEYXRhLmNvbnRlbnQuYmxhbmtzTGlzdC5sZW5ndGgpIHtcbiAgICAgIGJsYW5rc1BsYWNlaG9sZGVycy5wdXNoKDMpOyAvLyBGaWxsIHVwXG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmg1cENvbmZpZ0RhdGEuY29udGVudC5ibGFua3NMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaDVwQmxhbmsgPSB0aGlzLmg1cENvbmZpZ0RhdGEuY29udGVudC5ibGFua3NMaXN0W2ldO1xuXG4gICAgICB2YXIgY29ycmVjdFRleHQgPSBoNXBCbGFuay5jb3JyZWN0QW5zd2VyVGV4dDtcbiAgICAgIGlmIChjb3JyZWN0VGV4dCA9PT0gXCJcIiB8fCBjb3JyZWN0VGV4dCA9PT0gdW5kZWZpbmVkKVxuICAgICAgICBjb250aW51ZTtcblxuICAgICAgdmFyIGJsYW5rID0gQmxhbmtMb2FkZXIuaW5zdGFuY2UuY3JlYXRlQmxhbmsoYGFkdmFuY2VkYmxhbmtzLSR7dGhpcy5zZXR0aW5ncy5jb250ZW50SWR9LWNsb3plLSR7aX1gLCBjb3JyZWN0VGV4dCxcbiAgICAgICAgaDVwQmxhbmsuaGludCwgaDVwQmxhbmsuaW5jb3JyZWN0QW5zd2Vyc0xpc3QsIGJsYW5rc1BsYWNlaG9sZGVyc1tpXSk7XG5cbiAgICAgIGJsYW5rLmZpbmlzaEluaXRpYWxpemF0aW9uKCk7XG4gICAgICBibGFua3MucHVzaChibGFuayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJsYW5rcztcbiAgfVxuXG4gIGdldFNuaXBwZXRzKCk6IFNuaXBwZXRbXSB7XG4gICAgdmFyIHNuaXBwZXRzOiBTbmlwcGV0W10gPSBuZXcgQXJyYXkoKTtcblxuICAgIGlmICghdGhpcy5oNXBDb25maWdEYXRhLnNuaXBwZXRzKVxuICAgICAgcmV0dXJuIHNuaXBwZXRzO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmg1cENvbmZpZ0RhdGEuc25pcHBldHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciByYXdfc25pcHBldCA9IHRoaXMuaDVwQ29uZmlnRGF0YS5zbmlwcGV0c1tpXTtcbiAgICAgIHZhciBzbmlwcGV0ID0gbmV3IFNuaXBwZXQocmF3X3NuaXBwZXQuc25pcHBldE5hbWUsIHRoaXMudW53cmFwcGVyLnVud3JhcChyYXdfc25pcHBldC5zbmlwcGV0VGV4dCkpO1xuICAgICAgc25pcHBldHMucHVzaChzbmlwcGV0KTtcbiAgICB9XG4gICAgcmV0dXJuIHNuaXBwZXRzO1xuICB9XG59XG4iLCJleHBvcnQgZW51bSBMb2NhbGl6YXRpb25MYWJlbHMge1xuICBzaG93U29sdXRpb25CdXR0b24gPSBcInNob3dTb2x1dGlvbnNcIixcbiAgcmV0cnlCdXR0b24gPSBcInRyeUFnYWluXCIsXG4gIGNoZWNrQWxsQnV0dG9uID0gXCJjaGVja0Fuc3dlclwiLFxuICBub3RGaWxsZWRPdXRXYXJuaW5nID0gXCJub3RGaWxsZWRPdXRcIixcbiAgdGlwQnV0dG9uID1cInRpcExhYmVsXCIsXG4gIHR5cG9NZXNzYWdlID0gXCJzcGVsbGluZ01pc3Rha2VXYXJuaW5nXCIsXG4gIHNjb3JlQmFyTGFiZWwgPSBcInNjb3JlQmFyTGFiZWxcIiAgXG59XG5cbmV4cG9ydCBlbnVtIExvY2FsaXphdGlvblN0cnVjdHVyZXMge1xuICBjb25maXJtQ2hlY2sgPSBcImNvbmZpcm1DaGVja1wiLFxuICBjb25maXJtUmV0cnkgPSBcImNvbmZpcm1SZXRyeVwiLFxuICBvdmVyYWxsRmVlZGJhY2sgPSBcIm92ZXJhbGxGZWVkYmFja1wiXG59XG5cbi8qKlxuICogUHJvdmlkZXMgbG9jYWxpemF0aW9uIHNlcnZpY2VzLlxuICovXG5cbmV4cG9ydCBjbGFzcyBINVBMb2NhbGl6YXRpb24ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGg1cENvbmZpZ3VyYXRpb246IGFueSkge1xuXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbG9jYWxpemVkIHN0cmluZyB0aGF0IGlzIHJlcHJlc2VudGVkIGJ5IHRoZSBpZGVudGlmaWVyLlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IGxvY2FsaXphYmxlU3RyaW5nSWRlbnRpZmllclxuICAgKiBAcmV0dXJucyBzdHJpbmdcbiAgICovXG4gIHByaXZhdGUgZ2V0VGV4dChsb2NhbGl6YWJsZVN0cmluZ0lkZW50aWZpZXI6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuaDVwQ29uZmlndXJhdGlvbltsb2NhbGl6YWJsZVN0cmluZ0lkZW50aWZpZXJdO1xuICB9XG5cbiAgcHJpdmF0ZSBsYWJlbFRvU3RyaW5nKGxhYmVsOiBMb2NhbGl6YXRpb25MYWJlbHMpIHtcbiAgICByZXR1cm4gbGFiZWwudG9TdHJpbmcoKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbG9jYWxpemVkIHN0cmluZyBmb3IgdGhlIGxhYmVsLlxuICAgKiBAcGFyYW0gIHtMb2NhbGl6YXRpb25MYWJlbHN9IGxhYmVsXG4gICAqIEByZXR1cm5zIHN0cmluZ1xuICAgKi9cbiAgZ2V0VGV4dEZyb21MYWJlbChsYWJlbDogTG9jYWxpemF0aW9uTGFiZWxzKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5nZXRUZXh0KHRoaXMubGFiZWxUb1N0cmluZyhsYWJlbCkpO1xuICB9XG5cbiAgZ2V0T2JqZWN0Rm9yU3RydWN0dXJlKHN0cnVjdHVyZTogTG9jYWxpemF0aW9uU3RydWN0dXJlcykgOiBhbnkge1xuICAgIHJldHVybiB0aGlzLmg1cENvbmZpZ3VyYXRpb25bc3RydWN0dXJlLnRvU3RyaW5nKCldO1xuICB9XG59IiwiaW1wb3J0IHsgQmxhbmsgfSBmcm9tICcuLi9tb2RlbHMvYmxhbmsnO1xuaW1wb3J0IHsgTWVzc2FnZVR5cGUgfSBmcm9tICcuLi9tb2RlbHMvZW51bXMnO1xuXG5leHBvcnQgY2xhc3MgTWVzc2FnZVNlcnZpY2Uge1xuICBwcml2YXRlIHNwZWVjaEJ1YmJsZTogYW55O1xuICBwcml2YXRlIGFzc29jaWF0ZWRCbGFuazogQmxhbms7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBqUXVlcnk6IEpRdWVyeVN0YXRpYykge1xuXG4gIH1cblxuICBwdWJsaWMgc2hvdyhlbGVtZW50SWQ6IHN0cmluZywgbWVzc2FnZTogc3RyaW5nLCBibGFuazogQmxhbmssIHR5cGU/OiBNZXNzYWdlVHlwZSkge1xuICAgIGlmICghdHlwZSlcbiAgICAgIHR5cGUgPSBNZXNzYWdlVHlwZS5Ob25lO1xuXG4gICAgdmFyIGVsZW1lbnRzID0gdGhpcy5qUXVlcnkoXCIjXCIgKyBlbGVtZW50SWQpO1xuXG4gICAgaWYgKGVsZW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuc3BlZWNoQnViYmxlID0gbmV3IEg1UC5Kb3ViZWxTcGVlY2hCdWJibGUoZWxlbWVudHMsIG1lc3NhZ2UpO1xuICAgICAgdGhpcy5hc3NvY2lhdGVkQmxhbmsgPSBibGFuaztcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaGlkZSgpIHtcbiAgICBpZiAodGhpcy5zcGVlY2hCdWJibGUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuc3BlZWNoQnViYmxlLnJlbW92ZSgpO1xuICAgICAgfVxuICAgICAgY2F0Y2ggKGV4Y2VwdGlvbikge1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNwZWVjaEJ1YmJsZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmFzc29jaWF0ZWRCbGFuayA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBpc0FjdGl2ZShibGFuazogQmxhbmspIHtcbiAgICByZXR1cm4gdGhpcy5hc3NvY2lhdGVkQmxhbmsgPT09IGJsYW5rO1xuICB9XG59IiwiaW1wb3J0IHsgQ2xvemVUeXBlLCBTZWxlY3RBbHRlcm5hdGl2ZXMgfSBmcm9tIFwiLi4vbW9kZWxzL2VudW1zXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVNldHRpbmdzIHtcbiAgY2xvemVUeXBlOiBDbG96ZVR5cGU7XG4gIHNlbGVjdEFsdGVybmF0aXZlczogU2VsZWN0QWx0ZXJuYXRpdmVzO1xuICBzZWxlY3RBbHRlcm5hdGl2ZVJlc3RyaWN0aW9uOiBudW1iZXI7XG4gIGVuYWJsZVJldHJ5OiBib29sZWFuO1xuICBlbmFibGVTb2x1dGlvbnNCdXR0b246IGJvb2xlYW47XG4gIGVuYWJsZUNoZWNrQnV0dG9uOiBib29sZWFuO1xuICBhdXRvQ2hlY2s6IGJvb2xlYW47XG4gIGNhc2VTZW5zaXRpdmU6IGJvb2xlYW47XG4gIHdhcm5TcGVsbGluZ0Vycm9yczogYm9vbGVhbjtcbiAgYWNjZXB0U3BlbGxpbmdFcnJvcnM6IGJvb2xlYW47XG4gIHNob3dTb2x1dGlvbnNSZXF1aXJlc0lucHV0OiBib29sZWFuO1xuICBjb25maXJtQ2hlY2tEaWFsb2c6IGJvb2xlYW47XG4gIGNvbmZpcm1SZXRyeURpYWxvZzogYm9vbGVhbjtcbiAgZGlzYWJsZUltYWdlWm9vbWluZzogYm9vbGVhbjtcbiAgY29udGVudElkOiBudW1iZXIgfCBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBINVBTZXR0aW5ncyBpbXBsZW1lbnRzIElTZXR0aW5ncyB7XG4gIHB1YmxpYyBjbG96ZVR5cGU6IENsb3plVHlwZSA9IENsb3plVHlwZS5UeXBlO1xuICBwdWJsaWMgc2VsZWN0QWx0ZXJuYXRpdmVzOiBTZWxlY3RBbHRlcm5hdGl2ZXMgPSBTZWxlY3RBbHRlcm5hdGl2ZXMuQWx0ZXJuYXRpdmVzO1xuICBwdWJsaWMgc2VsZWN0QWx0ZXJuYXRpdmVSZXN0cmljdGlvbjogbnVtYmVyID0gNTtcbiAgcHVibGljIGVuYWJsZVJldHJ5OiBib29sZWFuID0gdHJ1ZTtcbiAgcHVibGljIGVuYWJsZVNvbHV0aW9uc0J1dHRvbjogYm9vbGVhbiA9IHRydWU7XG4gIHB1YmxpYyBlbmFibGVDaGVja0J1dHRvbjogYm9vbGVhbiA9IHRydWU7XG4gIHB1YmxpYyBhdXRvQ2hlY2s6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGNhc2VTZW5zaXRpdmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIHdhcm5TcGVsbGluZ0Vycm9yczogYm9vbGVhbiA9IHRydWU7XG4gIHB1YmxpYyBhY2NlcHRTcGVsbGluZ0Vycm9yczogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgc2hvd1NvbHV0aW9uc1JlcXVpcmVzSW5wdXQ6IGJvb2xlYW4gPSB0cnVlO1xuICBwdWJsaWMgY29uZmlybUNoZWNrRGlhbG9nOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBjb25maXJtUmV0cnlEaWFsb2c6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGRpc2FibGVJbWFnZVpvb21pbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGNvbnRlbnRJZDogc3RyaW5nID0gJyc7XG5cbiAgY29uc3RydWN0b3IoaDVwQ29uZmlnRGF0YTogYW55KSB7XG4gICAgaWYgKGg1cENvbmZpZ0RhdGEuYmVoYXZpb3VyLm1vZGUgPT09ICdzZWxlY3Rpb24nKSB7XG4gICAgICB0aGlzLmNsb3plVHlwZSA9IENsb3plVHlwZS5TZWxlY3Q7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5jbG96ZVR5cGUgPSBDbG96ZVR5cGUuVHlwZTtcbiAgICB9XG5cbiAgICBpZiAoaDVwQ29uZmlnRGF0YS5iZWhhdmlvdXIuc2VsZWN0QWx0ZXJuYXRpdmVzID09PSAnYWxsJykge1xuICAgICAgdGhpcy5zZWxlY3RBbHRlcm5hdGl2ZXMgPSBTZWxlY3RBbHRlcm5hdGl2ZXMuQWxsO1xuICAgIH0gZWxzZSBpZiAoaDVwQ29uZmlnRGF0YS5iZWhhdmlvdXIuc2VsZWN0QWx0ZXJuYXRpdmVzID09PSAnYWx0ZXJuYXRpdmVzJykge1xuICAgICAgdGhpcy5zZWxlY3RBbHRlcm5hdGl2ZXMgPSBTZWxlY3RBbHRlcm5hdGl2ZXMuQWx0ZXJuYXRpdmVzO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuc2VsZWN0QWx0ZXJuYXRpdmVzID0gU2VsZWN0QWx0ZXJuYXRpdmVzLkFsbDtcbiAgICB9XG5cbiAgICB0aGlzLnNlbGVjdEFsdGVybmF0aXZlUmVzdHJpY3Rpb24gPSBoNXBDb25maWdEYXRhLmJlaGF2aW91ci5zZWxlY3RBbHRlcm5hdGl2ZVJlc3RyaWN0aW9uO1xuICAgIHRoaXMuZW5hYmxlUmV0cnkgPSBoNXBDb25maWdEYXRhLmJlaGF2aW91ci5lbmFibGVSZXRyeTtcbiAgICB0aGlzLmVuYWJsZVNvbHV0aW9uc0J1dHRvbiA9IGg1cENvbmZpZ0RhdGEuYmVoYXZpb3VyLmVuYWJsZVNvbHV0aW9uc0J1dHRvbjtcbiAgICB0aGlzLmVuYWJsZUNoZWNrQnV0dG9uID0gaDVwQ29uZmlnRGF0YS5iZWhhdmlvdXIuZW5hYmxlQ2hlY2tCdXR0b247XG4gICAgdGhpcy5hdXRvQ2hlY2sgPSBoNXBDb25maWdEYXRhLmJlaGF2aW91ci5hdXRvQ2hlY2s7XG4gICAgdGhpcy5jYXNlU2Vuc2l0aXZlID0gaDVwQ29uZmlnRGF0YS5iZWhhdmlvdXIuY2FzZVNlbnNpdGl2ZTtcbiAgICB0aGlzLndhcm5TcGVsbGluZ0Vycm9ycyA9IGg1cENvbmZpZ0RhdGEuYmVoYXZpb3VyLnNwZWxsaW5nRXJyb3JCZWhhdmlvdXIgPT09IFwid2FyblwiO1xuICAgIHRoaXMuYWNjZXB0U3BlbGxpbmdFcnJvcnMgPSBoNXBDb25maWdEYXRhLmJlaGF2aW91ci5zcGVsbGluZ0Vycm9yQmVoYXZpb3VyID09PSBcImFjY2VwdFwiO1xuICAgIHRoaXMuc2hvd1NvbHV0aW9uc1JlcXVpcmVzSW5wdXQgPSBoNXBDb25maWdEYXRhLmJlaGF2aW91ci5zaG93U29sdXRpb25zUmVxdWlyZXNJbnB1dDtcbiAgICB0aGlzLmNvbmZpcm1DaGVja0RpYWxvZyA9IGg1cENvbmZpZ0RhdGEuYmVoYXZpb3VyLmNvbmZpcm1DaGVja0RpYWxvZztcbiAgICB0aGlzLmNvbmZpcm1SZXRyeURpYWxvZyA9IGg1cENvbmZpZ0RhdGEuYmVoYXZpb3VyLmNvbmZpcm1SZXRyeURpYWxvZztcbiAgICB0aGlzLmRpc2FibGVJbWFnZVpvb21pbmcgPSBoNXBDb25maWdEYXRhLm1lZGlhLmRpc2FibGVJbWFnZVpvb21pbmc7XG4gICAgdGhpcy5jb250ZW50SWQgPSBoNXBDb25maWdEYXRhLmNvbnRlbnRJZDtcblxuICAgIHRoaXMuZW5mb3JjZUxvZ2ljKCk7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2Qgc2V0cyBzZW5zaWJsZSBkZWZhdWx0IHZhbHVlcyBmb3Igc2V0dGluZ3MgaGlkZGVuIHdpdGggc2hvd1doZW5cbiAgICovXG4gIHByaXZhdGUgZW5mb3JjZUxvZ2ljKCkge1xuICAgIGlmICh0aGlzLmNsb3plVHlwZSA9PT0gQ2xvemVUeXBlLlR5cGUpIHtcbiAgICAgIHRoaXMuc2VsZWN0QWx0ZXJuYXRpdmVzID0gU2VsZWN0QWx0ZXJuYXRpdmVzLkFsbDtcbiAgICAgIHRoaXMuc2VsZWN0QWx0ZXJuYXRpdmVSZXN0cmljdGlvbiA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLnNlbGVjdEFsdGVybmF0aXZlUmVzdHJpY3Rpb24gPT09IFNlbGVjdEFsdGVybmF0aXZlcy5BbHRlcm5hdGl2ZXMpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RBbHRlcm5hdGl2ZVJlc3RyaWN0aW9uID0gMDtcbiAgICAgIH1cbiAgICAgIHRoaXMud2FyblNwZWxsaW5nRXJyb3JzID0gZmFsc2U7XG4gICAgICB0aGlzLmFjY2VwdFNwZWxsaW5nRXJyb3JzID0gZmFsc2U7XG4gICAgICB0aGlzLmNhc2VTZW5zaXRpdmUgPSBmYWxzZTtcbiAgICB9XG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3BhbiBpZD1cXFwiY29udGFpbmVye3tpZH19XFxcIiBjbGFzcz1cXFwiYmxhbmsge3sjYmxhbmsuaGFzUGVuZGluZ0ZlZWRiYWNrfX1oYXMtcGVuZGluZy1mZWVkYmFja3t7L2lmfX0ge3sjYmxhbmsuaGFzSGludH19aGFzLXRpcHt7L2lmfX0ge3sjYmxhbmsuaXNDb3JyZWN0fX1jb3JyZWN0e3svaWZ9fSB7eyNibGFuay5pc0Vycm9yfX1lcnJvcnt7L2lmfX0ge3sjYmxhbmsuaXNSZXRyeX19cmV0cnl7ey9pZn19IHt7I2JsYW5rLmlzU2hvd2luZ1NvbHV0aW9ufX1zaG93aW5nLXNvbHV0aW9ue3svaWZ9fVxcXCI+XFxuICB7eyN1bmxlc3MgaXNTZWxlY3RDbG96ZX19XFxuICAgIDxzcGFuIGNsYXNzPVxcXCJoNXAtaW5wdXQtd3JhcHBlclxcXCI+XFxuICAgICAgPGlucHV0IGlkPVxcXCJ7e2JsYW5rLmlkfX1cXFwiIHR5cGU9XFxcInRleHRcXFwiIHZhbHVlPVxcXCJ7e2JsYW5rLmVudGVyZWRUZXh0fX1cXFwiIFxcbiAgICAgICAgICAgICBzaXplPVxcXCJ7e2JsYW5rLm1pblRleHRMZW5ndGh9fVxcXCIgb24tZXNjYXBlPVxcXCJAdGhpcy5maXJlKCdjbG9zZU1lc3NhZ2UnLCBibGFuaylcXFwiIFxcbiAgICAgICAgICAgICBvbi1lbnRlcj1cXFwiQHRoaXMuZmlyZSgnY2hlY2tCbGFuaycsIGJsYW5rLCAnZW50ZXInKVxcXCIgXFxuICAgICAgICAgICAgIG9uLWJsdXI9XFxcIkB0aGlzLmZpcmUoJ2NoZWNrQmxhbmsnLCBibGFuaywgJ2JsdXInKVxcXCIgXFxuICAgICAgICAgICAgIG9uLWZvY3VzPVxcXCJAdGhpcy5maXJlKCdmb2N1cycsIGJsYW5rKVxcXCJcXG4gICAgICAgICAgICAgb24tYW55a2V5PVxcXCJAdGhpcy5maXJlKCd0ZXh0VHlwZWQnLCBibGFuaylcXFwiXFxuICAgICAgICAgICAgIHt7IyhibGFuay5pc0NvcnJlY3QgfHwgYmxhbmsuaXNTaG93aW5nU29sdXRpb24pfX1kaXNhYmxlZD1cXFwiZGlzYWJsZWRcXFwie3svaWZ9fVxcbiAgICAgICAgICAgICBjbGFzcz1cXFwiaDVwLXRleHQtaW5wdXRcXFwiXFxuICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cXFwib2ZmXFxcIlxcbiAgICAgICAgICAgICBhdXRvY2FwaXRhbGl6ZT1cXFwib2ZmXFxcIi8+XFxuICAgICAge3sjYmxhbmsuaGFzSGludH19XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaDVwLXRpcC1jb250YWluZXJcXFwiPlxcbiAgICAgICAgICA8YnV0dG9uIG9uLWNsaWNrPVxcXCJAdGhpcy5maXJlKCdzaG93SGludCcsIGJsYW5rKVxcXCIge3sjKGJsYW5rLmlzQ29ycmVjdCB8fCBibGFuay5pc1Nob3dpbmdTb2x1dGlvbil9fWRpc2FibGVkPVxcXCJkaXNhYmxlZFxcXCIge3svaWZ9fT5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiam91YmVsLXRpcC1jb250YWluZXJcXFwiIHRpdGxlPVxcXCJUaXBcXFwiIGFyaWEtbGFiZWw9XFxcIlRpcFxcXCIgYXJpYS1leHBhbmRlZD1cXFwidHJ1ZVxcXCIgcm9sZT1cXFwiYnV0dG9uXFxcIiB0YWJpbmRleD1cXFwiMFxcXCI+PHNwYW4gY2xhc3M9XFxcImpvdWJlbC1pY29uLXRpcC1ub3JtYWwgXFxcIj48c3BhbiBjbGFzcz1cXFwiaDVwLWljb24tc2hhZG93XFxcIj48L3NwYW4+PHNwYW4gY2xhc3M9XFxcImg1cC1pY29uLXNwZWVjaC1idWJibGVcXFwiPjwvc3Bhbj48c3BhbiBjbGFzcz1cXFwiaDVwLWljb24taW5mb1xcXCI+PC9zcGFuPjwvc3Bhbj48L3NwYW4+XFxuICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgPC9zcGFuPlxcbiAgICAgICAge3svaWZ9fVxcbiAgICA8L3NwYW4+ICAgIFxcbiAge3svdW5sZXNzfX1cXG4gIHt7I2lmIGlzU2VsZWN0Q2xvemV9fVxcbiAgICAgIDxidXR0b24gY2xhc3M9XFxcImg1cC1ub3RpZmljYXRpb25cXFwiIG9uLWNsaWNrPVxcXCJAdGhpcy5maXJlKCdkaXNwbGF5RmVlZGJhY2snLCBibGFuaylcXFwiPlxcbiAgICAgICAgJiN4ZjA1YTtcXG4gICAgICA8L2J1dHRvbj5cXG4gICAgICA8c3BhbiBjbGFzcz1cXFwiaDVwLWlucHV0LXdyYXBwZXJcXFwiPiAgICAgIFxcbiAgICAgIDxzZWxlY3QgaWQ9XFxcInt7YmxhbmsuaWR9fVxcXCIgdHlwZT1cXFwidGV4dFxcXCIgdmFsdWU9XFxcInt7YmxhbmsuZW50ZXJlZFRleHR9fVxcXCJcXG4gICAgICAgICAgICAgIG9uLWVudGVyPVxcXCJAdGhpcy5maXJlKCdjaGVja0JsYW5rJywgYmxhbmssICdlbnRlcicpXFxcIiBcXG4gICAgICAgICAgICAgIG9uLWNoYW5nZT1cXFwiQHRoaXMuZmlyZSgnY2hlY2tCbGFuaycsIGJsYW5rLCAnY2hhbmdlJylcXFwiXFxuICAgICAgICAgICAgICBvbi1mb2N1cz1cXFwiQHRoaXMuZmlyZSgnZm9jdXMnLCBibGFuaylcXFwiICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgIHt7IyhibGFuay5pc0NvcnJlY3QgfHwgYmxhbmsuaXNTaG93aW5nU29sdXRpb24pfX1kaXNhYmxlZD1cXFwiZGlzYWJsZWRcXFwie3svaWZ9fSBcXG4gICAgICAgICAgICAgIHNpemU9XFxcIjFcXFwiXFxuICAgICAgICAgICAgICBjbGFzcz1cXFwiaDVwLXRleHQtaW5wdXRcXFwiPlxcbiAgICAgICAge3sjZWFjaCBibGFuay5jaG9pY2VzfX1cXG4gICAgICAgICAgPG9wdGlvbj57e3RoaXN9fTwvb3B0aW9uPlxcbiAgICAgICAge3svZWFjaH19XFxuICAgICAgPC9zZWxlY3Q+ICAgICAgICAgICAgICAgICAgICAgXFxuICAgICAge3sjYmxhbmsuaGFzSGludH19XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaDVwLXRpcC1jb250YWluZXJcXFwiPlxcbiAgICAgICAgICA8YnV0dG9uIG9uLWNsaWNrPVxcXCJAdGhpcy5maXJlKCdzaG93SGludCcsIGJsYW5rKVxcXCIge3sjKGJsYW5rLmlzQ29ycmVjdCB8fCBibGFuay5pc1Nob3dpbmdTb2x1dGlvbil9fWRpc2FibGVkPVxcXCJkaXNhYmxlZFxcXCJ7ey9pZn19PlxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJqb3ViZWwtdGlwLWNvbnRhaW5lclxcXCIgdGl0bGU9XFxcIlRpcFxcXCIgYXJpYS1sYWJlbD1cXFwiVGlwXFxcIiBhcmlhLWV4cGFuZGVkPVxcXCJ0cnVlXFxcIiByb2xlPVxcXCJidXR0b25cXFwiIHRhYmluZGV4PVxcXCIwXFxcIj48c3BhbiBjbGFzcz1cXFwiam91YmVsLWljb24tdGlwLW5vcm1hbCBcXFwiPjxzcGFuIGNsYXNzPVxcXCJoNXAtaWNvbi1zaGFkb3dcXFwiPjwvc3Bhbj48c3BhbiBjbGFzcz1cXFwiaDVwLWljb24tc3BlZWNoLWJ1YmJsZVxcXCI+PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJoNXAtaWNvbi1pbmZvXFxcIj48L3NwYW4+PC9zcGFuPjwvc3Bhbj5cXG4gICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICA8L3NwYW4+XFxuICAgICAge3svaWZ9fSAgICAgXFxuICAgIDwvc3Bhbj5cXG4gIHt7L2lmfX1cXG48L3NwYW4+XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzcGFuIHt7I29iamVjdC5pc0hpZ2hsaWdodGVkfX1jbGFzcz1cXFwiaGlnaGxpZ2h0ZWRcXFwie3svaWZ9fSBpZD1cXFwie3tvYmplY3QuaWR9fVxcXCI+e3t7b2JqZWN0LnRleHR9fX08L3NwYW4+XCI7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4vc3R5bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiXSwic291cmNlUm9vdCI6IiJ9