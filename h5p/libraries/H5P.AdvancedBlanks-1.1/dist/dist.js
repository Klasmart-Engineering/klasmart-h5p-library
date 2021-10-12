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
exports.push([module.i, ".h5p-advanced-blanks {\r\n    position: relative;\r\n}\r\n\r\n\r\n/* Text */\r\n\r\n.h5p-advanced-blanks #h5p-cloze-container p,\r\n.h5p-advanced-blanks #h5p-cloze-container div {\r\n    line-height: 1.8em;\r\n    margin: 0 0 1em;\r\n    text-align: justify;\r\n}\r\n\r\n@media only screen and (min-width: 480px) {\r\n    .h5p-advanced-blanks #h5p-cloze-container p,\r\n    .h5p-advanced-blanks #h5p-cloze-container div {\r\n        text-align: unset;\r\n    }\r\n}\r\n\r\n\r\n/* Input */\r\n\r\n.h5p-advanced-blanks .h5p-input-wrapper {\r\n    display: inline-block;\r\n    position: relative;\r\n}\r\n\r\n.h5p-advanced-blanks .blank .h5p-text-input {\r\n    font-family: H5PDroidSans, sans-serif;\r\n    font-size: 1em;\r\n    border-radius: 0.25em;\r\n    border: 1px solid #a0a0a0;\r\n    padding: 0.1875em 1.5em 0.1875em 0.5em;\r\n    text-overflow: ellipsis;\r\n    overflow: hidden;\r\n}\r\n\r\n.h5p-advanced-blanks .blank input.h5p-text-input {\r\n  max-width: calc(100vw - 64px);\r\n}\r\n\r\n.h5p-advanced-blanks .blank select.h5p-text-input {\r\n  max-width: calc(100vw - 36px);\r\n}\r\n\r\n/* IE + Chrome specific fixes */\r\n\r\n.h5p-text-input::-ms-clear {\r\n    display: none;\r\n}\r\n\r\n:not(.correct).blank.has-tip button {\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n/* Select mode */\r\n\r\nselect.h5p-text-input {\r\n    appearance: button;\r\n    -moz-appearance: none;\r\n    -webkit-appearance: button;\r\n}\r\n\r\n\r\n/* Showing solution input */\r\n\r\n.h5p-advanced-blanks .blank.showing-solution .h5p-text-input {\r\n    border: 1px dashed #9dd8bb;\r\n    color: #255c41;\r\n    background: #FFFFFF;\r\n}\r\n\r\n\r\n/* Focussed input */\r\n\r\n.h5p-advanced-blanks .blank .h5p-text-input:focus {\r\n    outline: none;\r\n    box-shadow: 0 0 0.5em 0 #7fb8ff;\r\n    border-color: #7fb8ff;\r\n}\r\n\r\n\r\n/* Correctly answered input */\r\n\r\n.h5p-advanced-blanks .blank.correct .h5p-text-input {\r\n    background: #9dd8bb;\r\n    border: 1px solid #9dd8bb;\r\n    color: #255c41;\r\n}\r\n\r\n.h5p-advanced-blanks .blank.correct .h5p-input-wrapper:after {\r\n    position: absolute;\r\n    right: 0.5em;    \r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    text-decoration: none;\r\n    content: \"\\f00c\";\r\n    font-family: 'H5PFontAwesome4';\r\n    color: #255c41;\r\n}\r\n\r\n\r\n/* Incorrect answers */\r\n\r\n.h5p-advanced-blanks .blank.error .h5p-text-input {\r\n    background-color: #f7d0d0;\r\n    border: 1px solid #f7d0d0;\r\n    color: #b71c1c;\r\n    text-decoration: line-through;\r\n}\r\n\r\n.h5p-advanced-blanks .blank.error .h5p-input-wrapper:after {\r\n    position: absolute;\r\n    right: 0.5em;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    font-family: 'H5PFontAwesome4';\r\n    text-decoration: none;\r\n    content: \"\\f00d\";\r\n    color: #b71c1c;\r\n}\r\n\r\n\r\n/* Spelling errors */\r\n\r\n.h5p-advanced-blanks .blank.retry .h5p-text-input {\r\n    background-color: #ffff99;\r\n    border: 1px solid #ffff99;\r\n    color: black;\r\n}\r\n\r\n.h5p-advanced-blanks .blank.retry .h5p-input-wrapper:after {\r\n    position: absolute;\r\n    right: 0.5em;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    font-family: 'H5PFontAwesome4';\r\n    text-decoration: none;\r\n    content: \"\\f00d\";\r\n    color: #b71c1c;\r\n}\r\n\r\n\r\n/* Buttons */\r\n\r\n.h5p-advanced-blanks .blank button {\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n    border: none;\r\n    background: none;\r\n}\r\n\r\n\r\n/* Highlight in spelling mistake marker */\r\n\r\n.spelling-mistake .missing-character,\r\n.spelling-mistake .mistaken-character {\r\n    color: red;\r\n    font-weight: bold;\r\n    -webkit-animation-duration: 500ms;\r\n            animation-duration: 500ms;\r\n    -webkit-animation-name: blink-color;\r\n            animation-name: blink-color;\r\n    -webkit-animation-iteration-count: 13;\r\n            animation-iteration-count: 13;\r\n    -webkit-animation-direction: alternate;\r\n            animation-direction: alternate;\r\n}\r\n\r\n@-webkit-keyframes blink-color {\r\n    from {\r\n        color: initial;\r\n    }\r\n    to {\r\n        color: red;\r\n    }\r\n}\r\n\r\n@keyframes blink-color {\r\n    from {\r\n        color: initial;\r\n    }\r\n    to {\r\n        color: red;\r\n    }\r\n}\r\n\r\n.spelling-mistake .mistaken-character {\r\n    text-decoration: line-through;\r\n}\r\n\r\n\r\n/* Highlights in text */\r\n\r\n.h5p-advanced-blanks .highlighted {\r\n    background-color: rgba(255, 0, 0, 0.2);\r\n    padding: 0.4em;\r\n    margin: -0.4em;\r\n    -webkit-animation-duration: 1000ms;\r\n            animation-duration: 1000ms;\r\n    -webkit-animation-name: blink-background-color;\r\n            animation-name: blink-background-color;\r\n    -webkit-animation-iteration-count: 3;\r\n            animation-iteration-count: 3;\r\n    -webkit-animation-direction: alternate;\r\n            animation-direction: alternate;\r\n}\r\n\r\n@-webkit-keyframes blink-background-color {\r\n    from {\r\n        background-color: initial;\r\n    }\r\n    to {\r\n        background-color: rgba(255, 0, 0, 0.2);\r\n    }\r\n}\r\n\r\n@keyframes blink-background-color {\r\n    from {\r\n        background-color: initial;\r\n    }\r\n    to {\r\n        background-color: rgba(255, 0, 0, 0.2);\r\n    }\r\n}\r\n\r\n\r\n/* Others */\r\n\r\n.h5p-advanced-blanks .invisible {\r\n    visibility: collapse;\r\n}\r\n\r\n\r\n/* Tips */\r\n\r\n.h5p-advanced-blanks .h5p-tip-container {\r\n  position: absolute;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n  right: 0.4em;\r\n  font-size: 1em;\r\n}\r\n\r\n.h5p-advanced-blanks .blank.has-tip:not(.correct):not(.error):not(.retry) .h5p-text-input {\r\n    padding-right: 2.25em;\r\n}\r\n\r\n.h5p-advanced-blanks .blank.has-tip.correct .h5p-input-wrapper:after,\r\n.h5p-advanced-blanks .blank.has-tip.error .h5p-input-wrapper:after,\r\n.h5p-advanced-blanks .blank.has-tip.retry .h5p-input-wrapper:after {\r\n    right: 2.25em;\r\n}\r\n\r\n.h5p-advanced-blanks .blank.correct.has-tip .h5p-text-input,\r\n.h5p-advanced-blanks .blank.error.has-tip .h5p-text-input,\r\n.h5p-advanced-blanks .blank.retry.has-tip .h5p-text-input {\r\n    padding-right: 3.5em;\r\n}\r\n\r\n/* improves appearance of h5p tip shadows */\r\n.h5p-advanced-blanks .joubel-icon-tip-normal .h5p-icon-shadow:before {\r\n  color: black;\r\n  opacity: 0.13;\r\n}\r\n\r\n/* pending feedback marker */\r\n\r\n.h5p-advanced-blanks .h5p-advanced-blanks-select-mode .blank:not(.has-pending-feedback) button.h5p-notification {\r\n    display: none;\r\n}\r\n\r\n.h5p-advanced-blanks .h5p-advanced-blanks-select-mode .blank.has-pending-feedback button.h5p-notification {\r\n    font-size: large;    \r\n}\r\n\r\n.h5p-advanced-blanks .h5p-advanced-blanks-select-mode .blank.has-pending-feedback button.h5p-notification,\r\n.h5p-advanced-blanks .h5p-advanced-blanks-type-mode .blank.has-pending-feedback .h5p-input-wrapper:before {\r\n    font-family: 'H5PFontAwesome4';\r\n    text-decoration: none;\r\n    animation: shake 3s cubic-bezier(.36, .07, .19, .97) reverse;\r\n    -webkit-animation-iteration-count: 2;\r\n            animation-iteration-count: 2;\r\n    transform: translate3d(0, 0, 0);\r\n    -webkit-backface-visibility: hidden;\r\n            backface-visibility: hidden;\r\n    perspective: 1000px;\r\n}\r\n\r\n.h5p-advanced-blanks .h5p-advanced-blanks-type-mode .blank.has-pending-feedback .h5p-input-wrapper:before {\r\n    position: absolute;\r\n    left: -0.4em;\r\n    top: -0.7em;\r\n    content: \"\\f05a\";\r\n}\r\n\r\n.h5p-advanced-blanks .h5p-advanced-blanks-select-mode .blank.error.has-pending-feedback button.h5p-notification,\r\n.h5p-advanced-blanks .h5p-advanced-blanks-type-mode .blank.error.has-pending-feedback .h5p-input-wrapper:before {\r\n    color: #b71c1c;\r\n}\r\n\r\n.h5p-advanced-blanks .h5p-advanced-blanks-select-mode .blank.retry.has-pending-feedback button.h5p-notification,\r\n.h5p-advanced-blanks .h5p-advanced-blanks-type-mode .blank.retry.has-pending-feedback .h5p-input-wrapper:before {\r\n    color: #ffff00;\r\n    text-shadow: 0px 0px 0.5em black;\r\n}\r\n\r\n@-webkit-keyframes shake {\r\n    2%,\r\n    20% {\r\n        transform: translate3d(-0.5px, 0, 0);\r\n    }\r\n    4%,\r\n    17% {\r\n        transform: translate3d(1px, 0, 0);\r\n    }\r\n    6%,\r\n    10%,\r\n    15% {\r\n        transform: translate3d(-2px, 0, 0);\r\n    }\r\n    9%,\r\n    13% {\r\n        transform: translate3d(2px, 0, 0);\r\n    }\r\n}\r\n\r\n@keyframes shake {\r\n    2%,\r\n    20% {\r\n        transform: translate3d(-0.5px, 0, 0);\r\n    }\r\n    4%,\r\n    17% {\r\n        transform: translate3d(1px, 0, 0);\r\n    }\r\n    6%,\r\n    10%,\r\n    15% {\r\n        transform: translate3d(-2px, 0, 0);\r\n    }\r\n    9%,\r\n    13% {\r\n        transform: translate3d(2px, 0, 0);\r\n    }\r\n}", ""]);
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
        var _this = _super.call(this) || this;
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
            }
            else {
                _this.setFeedback("", score, maxScore);
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
        _this.onAutoChecked = function () {
            _this.triggerXAPI('interacted');
            _this.triggerXAPIAnswered();
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
        };
        _this.onCheckAnswer = function () {
            _this.clozeController.checkAll();
            _this.triggerXAPI('interacted');
            _this.triggerXAPIAnswered();
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
        _this.onShowSolution = function () {
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
            return _this.clozeController.serializeCloze();
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
            _this.onShowSolution();
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
            var usersAnswers = _this.getCurrentState();
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
            }
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
        if (contentData && contentData.previousState)
            _this.previousState = contentData.previousState;
        /**
        * Overrides the attach method of the superclass (H5P.Question) and calls it
        * at the same time. (equivalent to super.attach($container)).
        * This is necessary, as Ractive needs to be initialized with an existing DOM
        * element. DOM elements are created in H5P.Question.attach, so initializing
        * Ractive in registerDomElements doesn't work.
        */
        _this.attach = (function (original) {
            return function ($container) {
                original($container);
                _this.clozeController.initialize(_this.container.get(0), $container);
                if (_this.clozeController.deserializeCloze(_this.previousState)) {
                    _this.answered = _this.clozeController.isFilledOut;
                    if (_this.settings.autoCheck)
                        _this.onCheckAnswer();
                    _this.toggleButtonVisibility(_this.state);
                }
            };
        })(_this.attach);
        return _this;
    }
    AdvancedBlanks.prototype.onSolved = function () {
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
        var $container = this.getH5pContainer();
        if (!this.settings.autoCheck) {
            // Check answer button
            this.addButton('check-answer', this.localization.getTextFromLabel(localization_1.LocalizationLabels.checkAllButton), this.onCheckAnswer, true, {}, {
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
    BlankLoader.prototype.createBlank = function (id, correctText, hintText, incorrectAnswers) {
        var blank = new blank_1.Blank(this.settings, this.localization, this.jquery, this.messageService, id);
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
    function Blank(settings, localization, jquery, messageService, id) {
        var _this = _super.call(this) || this;
        _this.settings = settings;
        _this.localization = localization;
        _this.jquery = jquery;
        _this.messageService = messageService;
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
    };
    Blank.prototype.lostFocus = function () {
        if (this.messageService.isActive(this)) {
            this.messageService.hide();
        }
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
        return this.enteredText;
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
        for (var i = 0; i < this.h5pConfigData.content.blanksList.length; i++) {
            var h5pBlank = this.h5pConfigData.content.blanksList[i];
            var correctText = h5pBlank.correctAnswerText;
            if (correctText === "" || correctText === undefined)
                continue;
            var blank = blank_loader_1.BlankLoader.instance.createBlank("cloze" + i, correctText, h5pBlank.hint, h5pBlank.incorrectAnswersList);
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

module.exports = "<span id=\"container{{id}}\" class=\"blank {{#blank.hasPendingFeedback}}has-pending-feedback{{/if}} {{#blank.hasHint}}has-tip{{/if}} {{#blank.isCorrect}}correct{{/if}} {{#blank.isError}}error{{/if}} {{#blank.isRetry}}retry{{/if}} {{#blank.isShowingSolution}}showing-solution{{/if}}\">\r\n  {{#unless isSelectCloze}}\r\n    <span class=\"h5p-input-wrapper\">\r\n      <input id=\"{{blank.id}}\" type=\"text\" value=\"{{blank.enteredText}}\" \r\n             size=\"{{blank.minTextLength}}\" on-escape=\"@this.fire('closeMessage', blank)\" \r\n             on-enter=\"@this.fire('checkBlank', blank, 'enter')\" \r\n             on-blur=\"@this.fire('checkBlank', blank, 'blur')\" \r\n             on-focus=\"@this.fire('focus', blank)\"\r\n             on-anykey=\"@this.fire('textTyped', blank)\"\r\n             {{#(blank.isCorrect || blank.isShowingSolution)}}disabled=\"disabled\"{{/if}}\r\n             class=\"h5p-text-input\"\r\n             autocomplete=\"off\"\r\n             autocapitalize=\"off\"/>\r\n      {{#blank.hasHint}}\r\n        <span class=\"h5p-tip-container\">\r\n          <button on-click=\"@this.fire('showHint', blank)\" {{#(blank.isCorrect || blank.isShowingSolution)}}disabled=\"disabled\" {{/if}}>\r\n            <span class=\"joubel-tip-container\" title=\"Tip\" aria-label=\"Tip\" aria-expanded=\"true\" role=\"button\" tabindex=\"0\"><span class=\"joubel-icon-tip-normal \"><span class=\"h5p-icon-shadow\"></span><span class=\"h5p-icon-speech-bubble\"></span><span class=\"h5p-icon-info\"></span></span></span>\r\n          </button>\r\n        </span>\r\n        {{/if}}\r\n    </span>    \r\n  {{/unless}}\r\n  {{#if isSelectCloze}}\r\n      <button class=\"h5p-notification\" on-click=\"@this.fire('displayFeedback', blank)\">\r\n        &#xf05a;\r\n      </button>\r\n      <span class=\"h5p-input-wrapper\">      \r\n      <select id=\"{{blank.id}}\" type=\"text\" value=\"{{blank.enteredText}}\"\r\n              on-enter=\"@this.fire('checkBlank', blank, 'enter')\" \r\n              on-change=\"@this.fire('checkBlank', blank, 'change')\"\r\n              on-focus=\"@this.fire('focus', blank)\"              \r\n              {{#(blank.isCorrect || blank.isShowingSolution)}}disabled=\"disabled\"{{/if}} \r\n              size=\"1\"\r\n              class=\"h5p-text-input\">\r\n        {{#each blank.choices}}\r\n          <option>{{this}}</option>\r\n        {{/each}}\r\n      </select>                     \r\n      {{#blank.hasHint}}\r\n        <span class=\"h5p-tip-container\">\r\n          <button on-click=\"@this.fire('showHint', blank)\" {{#(blank.isCorrect || blank.isShowingSolution)}}disabled=\"disabled\"{{/if}}>\r\n            <span class=\"joubel-tip-container\" title=\"Tip\" aria-label=\"Tip\" aria-expanded=\"true\" role=\"button\" tabindex=\"0\"><span class=\"joubel-icon-tip-normal \"><span class=\"h5p-icon-shadow\"></span><span class=\"h5p-icon-speech-bubble\"></span><span class=\"h5p-icon-info\"></span></span></span>\r\n          </button>\r\n        </span>\r\n      {{/if}}     \r\n    </span>\r\n  {{/if}}\r\n</span>";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGlmZi9kaXN0L2RpZmYuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9lbnRyaWVzL2Rpc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9oZWxwZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9saWIvcmFjdGl2ZS1ldmVudHMta2V5cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9hcHAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvY29udGVudC1sb2FkZXJzL2JsYW5rLWxvYWRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9jb250ZW50LWxvYWRlcnMvY2xvemUtbG9hZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NvbnRyb2xsZXJzL2Nsb3plLWNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvaGVscGVycy9leHRlbmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvaGVscGVycy91bndyYXBwZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbW9kZWxzL2Fuc3dlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tb2RlbHMvYmxhbmsudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbW9kZWxzL2Nsb3plLWVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvbW9kZWxzL2Nsb3plLnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21vZGVscy9lbnVtcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tb2RlbHMvaGlnaGxpZ2h0LnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21vZGVscy9tZXNzYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21vZGVscy9zbmlwcGV0LnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21vZGVscy94YXBpLnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3NlcnZpY2VzL2RhdGEtcmVwb3NpdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9zZXJ2aWNlcy9sb2NhbGl6YXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc2VydmljZXMvbWVzc2FnZS1zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3NlcnZpY2VzL3NldHRpbmdzLnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3ZpZXdzL2JsYW5rLnJhY3RpdmUuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy92aWV3cy9oaWdobGlnaHQucmFjdGl2ZS5odG1sIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzPzE0MDgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFp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QVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLFlBQVksb0JBQW9CO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87OztBQUdQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxxQkFBcUIsdUJBQXVCO0FBQzVDO0FBQ0E7QUFDQTs7QUFF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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFD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d0c7O0FBRTFJOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBLHNDIiwiZmlsZSI6ImRpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9lbnRyaWVzL2Rpc3QudHNcIik7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmg1cC1hZHZhbmNlZC1ibGFua3Mge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIFRleHQgKi9cXHJcXG5cXHJcXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAjaDVwLWNsb3plLWNvbnRhaW5lciBwLFxcclxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzICNoNXAtY2xvemUtY29udGFpbmVyIGRpdiB7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjhlbTtcXHJcXG4gICAgbWFyZ2luOiAwIDAgMWVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MHB4KSB7XFxyXFxuICAgIC5oNXAtYWR2YW5jZWQtYmxhbmtzICNoNXAtY2xvemUtY29udGFpbmVyIHAsXFxyXFxuICAgIC5oNXAtYWR2YW5jZWQtYmxhbmtzICNoNXAtY2xvemUtY29udGFpbmVyIGRpdiB7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiB1bnNldDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBJbnB1dCAqL1xcclxcblxcclxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5oNXAtaW5wdXQtd3JhcHBlciB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuYmxhbmsgLmg1cC10ZXh0LWlucHV0IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IEg1UERyb2lkU2Fucywgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC1zaXplOiAxZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2EwYTBhMDtcXHJcXG4gICAgcGFkZGluZzogMC4xODc1ZW0gMS41ZW0gMC4xODc1ZW0gMC41ZW07XFxyXFxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuYmxhbmsgaW5wdXQuaDVwLXRleHQtaW5wdXQge1xcclxcbiAgbWF4LXdpZHRoOiBjYWxjKDEwMHZ3IC0gNjRweCk7XFxyXFxufVxcclxcblxcclxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5ibGFuayBzZWxlY3QuaDVwLXRleHQtaW5wdXQge1xcclxcbiAgbWF4LXdpZHRoOiBjYWxjKDEwMHZ3IC0gMzZweCk7XFxyXFxufVxcclxcblxcclxcbi8qIElFICsgQ2hyb21lIHNwZWNpZmljIGZpeGVzICovXFxyXFxuXFxyXFxuLmg1cC10ZXh0LWlucHV0OjotbXMtY2xlYXIge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG46bm90KC5jb3JyZWN0KS5ibGFuay5oYXMtdGlwIGJ1dHRvbiB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogU2VsZWN0IG1vZGUgKi9cXHJcXG5cXHJcXG5zZWxlY3QuaDVwLXRleHQtaW5wdXQge1xcclxcbiAgICBhcHBlYXJhbmNlOiBidXR0b247XFxyXFxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIFNob3dpbmcgc29sdXRpb24gaW5wdXQgKi9cXHJcXG5cXHJcXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuYmxhbmsuc2hvd2luZy1zb2x1dGlvbiAuaDVwLXRleHQtaW5wdXQge1xcclxcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgIzlkZDhiYjtcXHJcXG4gICAgY29sb3I6ICMyNTVjNDE7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIEZvY3Vzc2VkIGlucHV0ICovXFxyXFxuXFxyXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmJsYW5rIC5oNXAtdGV4dC1pbnB1dDpmb2N1cyB7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAwLjVlbSAwICM3ZmI4ZmY7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogIzdmYjhmZjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogQ29ycmVjdGx5IGFuc3dlcmVkIGlucHV0ICovXFxyXFxuXFxyXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmJsYW5rLmNvcnJlY3QgLmg1cC10ZXh0LWlucHV0IHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzlkZDhiYjtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzlkZDhiYjtcXHJcXG4gICAgY29sb3I6ICMyNTVjNDE7XFxyXFxufVxcclxcblxcclxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5ibGFuay5jb3JyZWN0IC5oNXAtaW5wdXQtd3JhcHBlcjphZnRlciB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcmlnaHQ6IDAuNWVtOyAgICBcXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcXGYwMGNcXFwiO1xcclxcbiAgICBmb250LWZhbWlseTogJ0g1UEZvbnRBd2Vzb21lNCc7XFxyXFxuICAgIGNvbG9yOiAjMjU1YzQxO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBJbmNvcnJlY3QgYW5zd2VycyAqL1xcclxcblxcclxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5ibGFuay5lcnJvciAuaDVwLXRleHQtaW5wdXQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdkMGQwO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjdkMGQwO1xcclxcbiAgICBjb2xvcjogI2I3MWMxYztcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxufVxcclxcblxcclxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5ibGFuay5lcnJvciAuaDVwLWlucHV0LXdyYXBwZXI6YWZ0ZXIge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHJpZ2h0OiAwLjVlbTtcXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdINVBGb250QXdlc29tZTQnO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcZjAwZFxcXCI7XFxyXFxuICAgIGNvbG9yOiAjYjcxYzFjO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBTcGVsbGluZyBlcnJvcnMgKi9cXHJcXG5cXHJcXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuYmxhbmsucmV0cnkgLmg1cC10ZXh0LWlucHV0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmY5OTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmY5OTtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuYmxhbmsucmV0cnkgLmg1cC1pbnB1dC13cmFwcGVyOmFmdGVyIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICByaWdodDogMC41ZW07XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnSDVQRm9udEF3ZXNvbWU0JztcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcXGYwMGRcXFwiO1xcclxcbiAgICBjb2xvcjogI2I3MWMxYztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogQnV0dG9ucyAqL1xcclxcblxcclxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5ibGFuayBidXR0b24ge1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIEhpZ2hsaWdodCBpbiBzcGVsbGluZyBtaXN0YWtlIG1hcmtlciAqL1xcclxcblxcclxcbi5zcGVsbGluZy1taXN0YWtlIC5taXNzaW5nLWNoYXJhY3RlcixcXHJcXG4uc3BlbGxpbmctbWlzdGFrZSAubWlzdGFrZW4tY2hhcmFjdGVyIHtcXHJcXG4gICAgY29sb3I6IHJlZDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiA1MDBtcztcXHJcXG4gICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDUwMG1zO1xcclxcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBibGluay1jb2xvcjtcXHJcXG4gICAgICAgICAgICBhbmltYXRpb24tbmFtZTogYmxpbmstY29sb3I7XFxyXFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTM7XFxyXFxuICAgICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTM7XFxyXFxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xcclxcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcXHJcXG59XFxyXFxuXFxyXFxuQC13ZWJraXQta2V5ZnJhbWVzIGJsaW5rLWNvbG9yIHtcXHJcXG4gICAgZnJvbSB7XFxyXFxuICAgICAgICBjb2xvcjogaW5pdGlhbDtcXHJcXG4gICAgfVxcclxcbiAgICB0byB7XFxyXFxuICAgICAgICBjb2xvcjogcmVkO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgYmxpbmstY29sb3Ige1xcclxcbiAgICBmcm9tIHtcXHJcXG4gICAgICAgIGNvbG9yOiBpbml0aWFsO1xcclxcbiAgICB9XFxyXFxuICAgIHRvIHtcXHJcXG4gICAgICAgIGNvbG9yOiByZWQ7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLnNwZWxsaW5nLW1pc3Rha2UgLm1pc3Rha2VuLWNoYXJhY3RlciB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBIaWdobGlnaHRzIGluIHRleHQgKi9cXHJcXG5cXHJcXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuaGlnaGxpZ2h0ZWQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC4yKTtcXHJcXG4gICAgcGFkZGluZzogMC40ZW07XFxyXFxuICAgIG1hcmdpbjogLTAuNGVtO1xcclxcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMTAwMG1zO1xcclxcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTAwMG1zO1xcclxcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBibGluay1iYWNrZ3JvdW5kLWNvbG9yO1xcclxcbiAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBibGluay1iYWNrZ3JvdW5kLWNvbG9yO1xcclxcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDM7XFxyXFxuICAgICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMztcXHJcXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XFxyXFxuICAgICAgICAgICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xcclxcbn1cXHJcXG5cXHJcXG5ALXdlYmtpdC1rZXlmcmFtZXMgYmxpbmstYmFja2dyb3VuZC1jb2xvciB7XFxyXFxuICAgIGZyb20ge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5pdGlhbDtcXHJcXG4gICAgfVxcclxcbiAgICB0byB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC4yKTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGJsaW5rLWJhY2tncm91bmQtY29sb3Ige1xcclxcbiAgICBmcm9tIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaXRpYWw7XFxyXFxuICAgIH1cXHJcXG4gICAgdG8ge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuMik7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogT3RoZXJzICovXFxyXFxuXFxyXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmludmlzaWJsZSB7XFxyXFxuICAgIHZpc2liaWxpdHk6IGNvbGxhcHNlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBUaXBzICovXFxyXFxuXFxyXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmg1cC10aXAtY29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcclxcbiAgcmlnaHQ6IDAuNGVtO1xcclxcbiAgZm9udC1zaXplOiAxZW07XFxyXFxufVxcclxcblxcclxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5ibGFuay5oYXMtdGlwOm5vdCguY29ycmVjdCk6bm90KC5lcnJvcik6bm90KC5yZXRyeSkgLmg1cC10ZXh0LWlucHV0IHtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMi4yNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuYmxhbmsuaGFzLXRpcC5jb3JyZWN0IC5oNXAtaW5wdXQtd3JhcHBlcjphZnRlcixcXHJcXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuYmxhbmsuaGFzLXRpcC5lcnJvciAuaDVwLWlucHV0LXdyYXBwZXI6YWZ0ZXIsXFxyXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmJsYW5rLmhhcy10aXAucmV0cnkgLmg1cC1pbnB1dC13cmFwcGVyOmFmdGVyIHtcXHJcXG4gICAgcmlnaHQ6IDIuMjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmJsYW5rLmNvcnJlY3QuaGFzLXRpcCAuaDVwLXRleHQtaW5wdXQsXFxyXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmJsYW5rLmVycm9yLmhhcy10aXAgLmg1cC10ZXh0LWlucHV0LFxcclxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5ibGFuay5yZXRyeS5oYXMtdGlwIC5oNXAtdGV4dC1pbnB1dCB7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDMuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBpbXByb3ZlcyBhcHBlYXJhbmNlIG9mIGg1cCB0aXAgc2hhZG93cyAqL1xcclxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5qb3ViZWwtaWNvbi10aXAtbm9ybWFsIC5oNXAtaWNvbi1zaGFkb3c6YmVmb3JlIHtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIG9wYWNpdHk6IDAuMTM7XFxyXFxufVxcclxcblxcclxcbi8qIHBlbmRpbmcgZmVlZGJhY2sgbWFya2VyICovXFxyXFxuXFxyXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmg1cC1hZHZhbmNlZC1ibGFua3Mtc2VsZWN0LW1vZGUgLmJsYW5rOm5vdCguaGFzLXBlbmRpbmctZmVlZGJhY2spIGJ1dHRvbi5oNXAtbm90aWZpY2F0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmg1cC1hZHZhbmNlZC1ibGFua3Mtc2VsZWN0LW1vZGUgLmJsYW5rLmhhcy1wZW5kaW5nLWZlZWRiYWNrIGJ1dHRvbi5oNXAtbm90aWZpY2F0aW9uIHtcXHJcXG4gICAgZm9udC1zaXplOiBsYXJnZTsgICAgXFxyXFxufVxcclxcblxcclxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5oNXAtYWR2YW5jZWQtYmxhbmtzLXNlbGVjdC1tb2RlIC5ibGFuay5oYXMtcGVuZGluZy1mZWVkYmFjayBidXR0b24uaDVwLW5vdGlmaWNhdGlvbixcXHJcXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuaDVwLWFkdmFuY2VkLWJsYW5rcy10eXBlLW1vZGUgLmJsYW5rLmhhcy1wZW5kaW5nLWZlZWRiYWNrIC5oNXAtaW5wdXQtd3JhcHBlcjpiZWZvcmUge1xcclxcbiAgICBmb250LWZhbWlseTogJ0g1UEZvbnRBd2Vzb21lNCc7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgYW5pbWF0aW9uOiBzaGFrZSAzcyBjdWJpYy1iZXppZXIoLjM2LCAuMDcsIC4xOSwgLjk3KSByZXZlcnNlO1xcclxcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDI7XFxyXFxuICAgICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMjtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXHJcXG4gICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgICAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuaDVwLWFkdmFuY2VkLWJsYW5rcy10eXBlLW1vZGUgLmJsYW5rLmhhcy1wZW5kaW5nLWZlZWRiYWNrIC5oNXAtaW5wdXQtd3JhcHBlcjpiZWZvcmUge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IC0wLjRlbTtcXHJcXG4gICAgdG9wOiAtMC43ZW07XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcZjA1YVxcXCI7XFxyXFxufVxcclxcblxcclxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5oNXAtYWR2YW5jZWQtYmxhbmtzLXNlbGVjdC1tb2RlIC5ibGFuay5lcnJvci5oYXMtcGVuZGluZy1mZWVkYmFjayBidXR0b24uaDVwLW5vdGlmaWNhdGlvbixcXHJcXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuaDVwLWFkdmFuY2VkLWJsYW5rcy10eXBlLW1vZGUgLmJsYW5rLmVycm9yLmhhcy1wZW5kaW5nLWZlZWRiYWNrIC5oNXAtaW5wdXQtd3JhcHBlcjpiZWZvcmUge1xcclxcbiAgICBjb2xvcjogI2I3MWMxYztcXHJcXG59XFxyXFxuXFxyXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmg1cC1hZHZhbmNlZC1ibGFua3Mtc2VsZWN0LW1vZGUgLmJsYW5rLnJldHJ5Lmhhcy1wZW5kaW5nLWZlZWRiYWNrIGJ1dHRvbi5oNXAtbm90aWZpY2F0aW9uLFxcclxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5oNXAtYWR2YW5jZWQtYmxhbmtzLXR5cGUtbW9kZSAuYmxhbmsucmV0cnkuaGFzLXBlbmRpbmctZmVlZGJhY2sgLmg1cC1pbnB1dC13cmFwcGVyOmJlZm9yZSB7XFxyXFxuICAgIGNvbG9yOiAjZmZmZjAwO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAwLjVlbSBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuQC13ZWJraXQta2V5ZnJhbWVzIHNoYWtlIHtcXHJcXG4gICAgMiUsXFxyXFxuICAgIDIwJSB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0wLjVweCwgMCwgMCk7XFxyXFxuICAgIH1cXHJcXG4gICAgNCUsXFxyXFxuICAgIDE3JSB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDFweCwgMCwgMCk7XFxyXFxuICAgIH1cXHJcXG4gICAgNiUsXFxyXFxuICAgIDEwJSxcXHJcXG4gICAgMTUlIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTJweCwgMCwgMCk7XFxyXFxuICAgIH1cXHJcXG4gICAgOSUsXFxyXFxuICAgIDEzJSB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDJweCwgMCwgMCk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzaGFrZSB7XFxyXFxuICAgIDIlLFxcclxcbiAgICAyMCUge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMC41cHgsIDAsIDApO1xcclxcbiAgICB9XFxyXFxuICAgIDQlLFxcclxcbiAgICAxNyUge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxcHgsIDAsIDApO1xcclxcbiAgICB9XFxyXFxuICAgIDYlLFxcclxcbiAgICAxMCUsXFxyXFxuICAgIDE1JSB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0ycHgsIDAsIDApO1xcclxcbiAgICB9XFxyXFxuICAgIDklLFxcclxcbiAgICAxMyUge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgycHgsIDAsIDApO1xcclxcbiAgICB9XFxyXFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBmYWN0b3J5KGV4cG9ydHMpIDpcbiAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnZXhwb3J0cyddLCBmYWN0b3J5KSA6XG4gIChnbG9iYWwgPSBnbG9iYWwgfHwgc2VsZiwgZmFjdG9yeShnbG9iYWwuRGlmZiA9IHt9KSk7XG59KHRoaXMsIChmdW5jdGlvbiAoZXhwb3J0cykgeyAndXNlIHN0cmljdCc7XG5cbiAgZnVuY3Rpb24gRGlmZigpIHt9XG4gIERpZmYucHJvdG90eXBlID0ge1xuICAgIGRpZmY6IGZ1bmN0aW9uIGRpZmYob2xkU3RyaW5nLCBuZXdTdHJpbmcpIHtcbiAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgICAgIHZhciBjYWxsYmFjayA9IG9wdGlvbnMuY2FsbGJhY2s7XG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjYWxsYmFjayA9IG9wdGlvbnM7XG4gICAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgZnVuY3Rpb24gZG9uZSh2YWx1ZSkge1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKHVuZGVmaW5lZCwgdmFsdWUpO1xuICAgICAgICAgIH0sIDApO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSAvLyBBbGxvdyBzdWJjbGFzc2VzIHRvIG1hc3NhZ2UgdGhlIGlucHV0IHByaW9yIHRvIHJ1bm5pbmdcblxuXG4gICAgICBvbGRTdHJpbmcgPSB0aGlzLmNhc3RJbnB1dChvbGRTdHJpbmcpO1xuICAgICAgbmV3U3RyaW5nID0gdGhpcy5jYXN0SW5wdXQobmV3U3RyaW5nKTtcbiAgICAgIG9sZFN0cmluZyA9IHRoaXMucmVtb3ZlRW1wdHkodGhpcy50b2tlbml6ZShvbGRTdHJpbmcpKTtcbiAgICAgIG5ld1N0cmluZyA9IHRoaXMucmVtb3ZlRW1wdHkodGhpcy50b2tlbml6ZShuZXdTdHJpbmcpKTtcbiAgICAgIHZhciBuZXdMZW4gPSBuZXdTdHJpbmcubGVuZ3RoLFxuICAgICAgICAgIG9sZExlbiA9IG9sZFN0cmluZy5sZW5ndGg7XG4gICAgICB2YXIgZWRpdExlbmd0aCA9IDE7XG4gICAgICB2YXIgbWF4RWRpdExlbmd0aCA9IG5ld0xlbiArIG9sZExlbjtcbiAgICAgIHZhciBiZXN0UGF0aCA9IFt7XG4gICAgICAgIG5ld1BvczogLTEsXG4gICAgICAgIGNvbXBvbmVudHM6IFtdXG4gICAgICB9XTsgLy8gU2VlZCBlZGl0TGVuZ3RoID0gMCwgaS5lLiB0aGUgY29udGVudCBzdGFydHMgd2l0aCB0aGUgc2FtZSB2YWx1ZXNcblxuICAgICAgdmFyIG9sZFBvcyA9IHRoaXMuZXh0cmFjdENvbW1vbihiZXN0UGF0aFswXSwgbmV3U3RyaW5nLCBvbGRTdHJpbmcsIDApO1xuXG4gICAgICBpZiAoYmVzdFBhdGhbMF0ubmV3UG9zICsgMSA+PSBuZXdMZW4gJiYgb2xkUG9zICsgMSA+PSBvbGRMZW4pIHtcbiAgICAgICAgLy8gSWRlbnRpdHkgcGVyIHRoZSBlcXVhbGl0eSBhbmQgdG9rZW5pemVyXG4gICAgICAgIHJldHVybiBkb25lKFt7XG4gICAgICAgICAgdmFsdWU6IHRoaXMuam9pbihuZXdTdHJpbmcpLFxuICAgICAgICAgIGNvdW50OiBuZXdTdHJpbmcubGVuZ3RoXG4gICAgICAgIH1dKTtcbiAgICAgIH0gLy8gTWFpbiB3b3JrZXIgbWV0aG9kLiBjaGVja3MgYWxsIHBlcm11dGF0aW9ucyBvZiBhIGdpdmVuIGVkaXQgbGVuZ3RoIGZvciBhY2NlcHRhbmNlLlxuXG5cbiAgICAgIGZ1bmN0aW9uIGV4ZWNFZGl0TGVuZ3RoKCkge1xuICAgICAgICBmb3IgKHZhciBkaWFnb25hbFBhdGggPSAtMSAqIGVkaXRMZW5ndGg7IGRpYWdvbmFsUGF0aCA8PSBlZGl0TGVuZ3RoOyBkaWFnb25hbFBhdGggKz0gMikge1xuICAgICAgICAgIHZhciBiYXNlUGF0aCA9IHZvaWQgMDtcblxuICAgICAgICAgIHZhciBhZGRQYXRoID0gYmVzdFBhdGhbZGlhZ29uYWxQYXRoIC0gMV0sXG4gICAgICAgICAgICAgIHJlbW92ZVBhdGggPSBiZXN0UGF0aFtkaWFnb25hbFBhdGggKyAxXSxcbiAgICAgICAgICAgICAgX29sZFBvcyA9IChyZW1vdmVQYXRoID8gcmVtb3ZlUGF0aC5uZXdQb3MgOiAwKSAtIGRpYWdvbmFsUGF0aDtcblxuICAgICAgICAgIGlmIChhZGRQYXRoKSB7XG4gICAgICAgICAgICAvLyBObyBvbmUgZWxzZSBpcyBnb2luZyB0byBhdHRlbXB0IHRvIHVzZSB0aGlzIHZhbHVlLCBjbGVhciBpdFxuICAgICAgICAgICAgYmVzdFBhdGhbZGlhZ29uYWxQYXRoIC0gMV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIGNhbkFkZCA9IGFkZFBhdGggJiYgYWRkUGF0aC5uZXdQb3MgKyAxIDwgbmV3TGVuLFxuICAgICAgICAgICAgICBjYW5SZW1vdmUgPSByZW1vdmVQYXRoICYmIDAgPD0gX29sZFBvcyAmJiBfb2xkUG9zIDwgb2xkTGVuO1xuXG4gICAgICAgICAgaWYgKCFjYW5BZGQgJiYgIWNhblJlbW92ZSkge1xuICAgICAgICAgICAgLy8gSWYgdGhpcyBwYXRoIGlzIGEgdGVybWluYWwgdGhlbiBwcnVuZVxuICAgICAgICAgICAgYmVzdFBhdGhbZGlhZ29uYWxQYXRoXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH0gLy8gU2VsZWN0IHRoZSBkaWFnb25hbCB0aGF0IHdlIHdhbnQgdG8gYnJhbmNoIGZyb20uIFdlIHNlbGVjdCB0aGUgcHJpb3JcbiAgICAgICAgICAvLyBwYXRoIHdob3NlIHBvc2l0aW9uIGluIHRoZSBuZXcgc3RyaW5nIGlzIHRoZSBmYXJ0aGVzdCBmcm9tIHRoZSBvcmlnaW5cbiAgICAgICAgICAvLyBhbmQgZG9lcyBub3QgcGFzcyB0aGUgYm91bmRzIG9mIHRoZSBkaWZmIGdyYXBoXG5cblxuICAgICAgICAgIGlmICghY2FuQWRkIHx8IGNhblJlbW92ZSAmJiBhZGRQYXRoLm5ld1BvcyA8IHJlbW92ZVBhdGgubmV3UG9zKSB7XG4gICAgICAgICAgICBiYXNlUGF0aCA9IGNsb25lUGF0aChyZW1vdmVQYXRoKTtcbiAgICAgICAgICAgIHNlbGYucHVzaENvbXBvbmVudChiYXNlUGF0aC5jb21wb25lbnRzLCB1bmRlZmluZWQsIHRydWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBiYXNlUGF0aCA9IGFkZFBhdGg7IC8vIE5vIG5lZWQgdG8gY2xvbmUsIHdlJ3ZlIHB1bGxlZCBpdCBmcm9tIHRoZSBsaXN0XG5cbiAgICAgICAgICAgIGJhc2VQYXRoLm5ld1BvcysrO1xuICAgICAgICAgICAgc2VsZi5wdXNoQ29tcG9uZW50KGJhc2VQYXRoLmNvbXBvbmVudHMsIHRydWUsIHVuZGVmaW5lZCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgX29sZFBvcyA9IHNlbGYuZXh0cmFjdENvbW1vbihiYXNlUGF0aCwgbmV3U3RyaW5nLCBvbGRTdHJpbmcsIGRpYWdvbmFsUGF0aCk7IC8vIElmIHdlIGhhdmUgaGl0IHRoZSBlbmQgb2YgYm90aCBzdHJpbmdzLCB0aGVuIHdlIGFyZSBkb25lXG5cbiAgICAgICAgICBpZiAoYmFzZVBhdGgubmV3UG9zICsgMSA+PSBuZXdMZW4gJiYgX29sZFBvcyArIDEgPj0gb2xkTGVuKSB7XG4gICAgICAgICAgICByZXR1cm4gZG9uZShidWlsZFZhbHVlcyhzZWxmLCBiYXNlUGF0aC5jb21wb25lbnRzLCBuZXdTdHJpbmcsIG9sZFN0cmluZywgc2VsZi51c2VMb25nZXN0VG9rZW4pKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIHRyYWNrIHRoaXMgcGF0aCBhcyBhIHBvdGVudGlhbCBjYW5kaWRhdGUgYW5kIGNvbnRpbnVlLlxuICAgICAgICAgICAgYmVzdFBhdGhbZGlhZ29uYWxQYXRoXSA9IGJhc2VQYXRoO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGVkaXRMZW5ndGgrKztcbiAgICAgIH0gLy8gUGVyZm9ybXMgdGhlIGxlbmd0aCBvZiBlZGl0IGl0ZXJhdGlvbi4gSXMgYSBiaXQgZnVnbHkgYXMgdGhpcyBoYXMgdG8gc3VwcG9ydCB0aGVcbiAgICAgIC8vIHN5bmMgYW5kIGFzeW5jIG1vZGUgd2hpY2ggaXMgbmV2ZXIgZnVuLiBMb29wcyBvdmVyIGV4ZWNFZGl0TGVuZ3RoIHVudGlsIGEgdmFsdWVcbiAgICAgIC8vIGlzIHByb2R1Y2VkLlxuXG5cbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAoZnVuY3Rpb24gZXhlYygpIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIFRoaXMgc2hvdWxkIG5vdCBoYXBwZW4sIGJ1dCB3ZSB3YW50IHRvIGJlIHNhZmUuXG5cbiAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgICAgICBpZiAoZWRpdExlbmd0aCA+IG1heEVkaXRMZW5ndGgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghZXhlY0VkaXRMZW5ndGgoKSkge1xuICAgICAgICAgICAgICBleGVjKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgMCk7XG4gICAgICAgIH0pKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aGlsZSAoZWRpdExlbmd0aCA8PSBtYXhFZGl0TGVuZ3RoKSB7XG4gICAgICAgICAgdmFyIHJldCA9IGV4ZWNFZGl0TGVuZ3RoKCk7XG5cbiAgICAgICAgICBpZiAocmV0KSB7XG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgcHVzaENvbXBvbmVudDogZnVuY3Rpb24gcHVzaENvbXBvbmVudChjb21wb25lbnRzLCBhZGRlZCwgcmVtb3ZlZCkge1xuICAgICAgdmFyIGxhc3QgPSBjb21wb25lbnRzW2NvbXBvbmVudHMubGVuZ3RoIC0gMV07XG5cbiAgICAgIGlmIChsYXN0ICYmIGxhc3QuYWRkZWQgPT09IGFkZGVkICYmIGxhc3QucmVtb3ZlZCA9PT0gcmVtb3ZlZCkge1xuICAgICAgICAvLyBXZSBuZWVkIHRvIGNsb25lIGhlcmUgYXMgdGhlIGNvbXBvbmVudCBjbG9uZSBvcGVyYXRpb24gaXMganVzdFxuICAgICAgICAvLyBhcyBzaGFsbG93IGFycmF5IGNsb25lXG4gICAgICAgIGNvbXBvbmVudHNbY29tcG9uZW50cy5sZW5ndGggLSAxXSA9IHtcbiAgICAgICAgICBjb3VudDogbGFzdC5jb3VudCArIDEsXG4gICAgICAgICAgYWRkZWQ6IGFkZGVkLFxuICAgICAgICAgIHJlbW92ZWQ6IHJlbW92ZWRcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXBvbmVudHMucHVzaCh7XG4gICAgICAgICAgY291bnQ6IDEsXG4gICAgICAgICAgYWRkZWQ6IGFkZGVkLFxuICAgICAgICAgIHJlbW92ZWQ6IHJlbW92ZWRcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBleHRyYWN0Q29tbW9uOiBmdW5jdGlvbiBleHRyYWN0Q29tbW9uKGJhc2VQYXRoLCBuZXdTdHJpbmcsIG9sZFN0cmluZywgZGlhZ29uYWxQYXRoKSB7XG4gICAgICB2YXIgbmV3TGVuID0gbmV3U3RyaW5nLmxlbmd0aCxcbiAgICAgICAgICBvbGRMZW4gPSBvbGRTdHJpbmcubGVuZ3RoLFxuICAgICAgICAgIG5ld1BvcyA9IGJhc2VQYXRoLm5ld1BvcyxcbiAgICAgICAgICBvbGRQb3MgPSBuZXdQb3MgLSBkaWFnb25hbFBhdGgsXG4gICAgICAgICAgY29tbW9uQ291bnQgPSAwO1xuXG4gICAgICB3aGlsZSAobmV3UG9zICsgMSA8IG5ld0xlbiAmJiBvbGRQb3MgKyAxIDwgb2xkTGVuICYmIHRoaXMuZXF1YWxzKG5ld1N0cmluZ1tuZXdQb3MgKyAxXSwgb2xkU3RyaW5nW29sZFBvcyArIDFdKSkge1xuICAgICAgICBuZXdQb3MrKztcbiAgICAgICAgb2xkUG9zKys7XG4gICAgICAgIGNvbW1vbkNvdW50Kys7XG4gICAgICB9XG5cbiAgICAgIGlmIChjb21tb25Db3VudCkge1xuICAgICAgICBiYXNlUGF0aC5jb21wb25lbnRzLnB1c2goe1xuICAgICAgICAgIGNvdW50OiBjb21tb25Db3VudFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgYmFzZVBhdGgubmV3UG9zID0gbmV3UG9zO1xuICAgICAgcmV0dXJuIG9sZFBvcztcbiAgICB9LFxuICAgIGVxdWFsczogZnVuY3Rpb24gZXF1YWxzKGxlZnQsIHJpZ2h0KSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLmNvbXBhcmF0b3IpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5jb21wYXJhdG9yKGxlZnQsIHJpZ2h0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBsZWZ0ID09PSByaWdodCB8fCB0aGlzLm9wdGlvbnMuaWdub3JlQ2FzZSAmJiBsZWZ0LnRvTG93ZXJDYXNlKCkgPT09IHJpZ2h0LnRvTG93ZXJDYXNlKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICByZW1vdmVFbXB0eTogZnVuY3Rpb24gcmVtb3ZlRW1wdHkoYXJyYXkpIHtcbiAgICAgIHZhciByZXQgPSBbXTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoYXJyYXlbaV0pIHtcbiAgICAgICAgICByZXQucHVzaChhcnJheVtpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJldDtcbiAgICB9LFxuICAgIGNhc3RJbnB1dDogZnVuY3Rpb24gY2FzdElucHV0KHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSxcbiAgICB0b2tlbml6ZTogZnVuY3Rpb24gdG9rZW5pemUodmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZS5zcGxpdCgnJyk7XG4gICAgfSxcbiAgICBqb2luOiBmdW5jdGlvbiBqb2luKGNoYXJzKSB7XG4gICAgICByZXR1cm4gY2hhcnMuam9pbignJyk7XG4gICAgfVxuICB9O1xuXG4gIGZ1bmN0aW9uIGJ1aWxkVmFsdWVzKGRpZmYsIGNvbXBvbmVudHMsIG5ld1N0cmluZywgb2xkU3RyaW5nLCB1c2VMb25nZXN0VG9rZW4pIHtcbiAgICB2YXIgY29tcG9uZW50UG9zID0gMCxcbiAgICAgICAgY29tcG9uZW50TGVuID0gY29tcG9uZW50cy5sZW5ndGgsXG4gICAgICAgIG5ld1BvcyA9IDAsXG4gICAgICAgIG9sZFBvcyA9IDA7XG5cbiAgICBmb3IgKDsgY29tcG9uZW50UG9zIDwgY29tcG9uZW50TGVuOyBjb21wb25lbnRQb3MrKykge1xuICAgICAgdmFyIGNvbXBvbmVudCA9IGNvbXBvbmVudHNbY29tcG9uZW50UG9zXTtcblxuICAgICAgaWYgKCFjb21wb25lbnQucmVtb3ZlZCkge1xuICAgICAgICBpZiAoIWNvbXBvbmVudC5hZGRlZCAmJiB1c2VMb25nZXN0VG9rZW4pIHtcbiAgICAgICAgICB2YXIgdmFsdWUgPSBuZXdTdHJpbmcuc2xpY2UobmV3UG9zLCBuZXdQb3MgKyBjb21wb25lbnQuY291bnQpO1xuICAgICAgICAgIHZhbHVlID0gdmFsdWUubWFwKGZ1bmN0aW9uICh2YWx1ZSwgaSkge1xuICAgICAgICAgICAgdmFyIG9sZFZhbHVlID0gb2xkU3RyaW5nW29sZFBvcyArIGldO1xuICAgICAgICAgICAgcmV0dXJuIG9sZFZhbHVlLmxlbmd0aCA+IHZhbHVlLmxlbmd0aCA/IG9sZFZhbHVlIDogdmFsdWU7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY29tcG9uZW50LnZhbHVlID0gZGlmZi5qb2luKHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb21wb25lbnQudmFsdWUgPSBkaWZmLmpvaW4obmV3U3RyaW5nLnNsaWNlKG5ld1BvcywgbmV3UG9zICsgY29tcG9uZW50LmNvdW50KSk7XG4gICAgICAgIH1cblxuICAgICAgICBuZXdQb3MgKz0gY29tcG9uZW50LmNvdW50OyAvLyBDb21tb24gY2FzZVxuXG4gICAgICAgIGlmICghY29tcG9uZW50LmFkZGVkKSB7XG4gICAgICAgICAgb2xkUG9zICs9IGNvbXBvbmVudC5jb3VudDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29tcG9uZW50LnZhbHVlID0gZGlmZi5qb2luKG9sZFN0cmluZy5zbGljZShvbGRQb3MsIG9sZFBvcyArIGNvbXBvbmVudC5jb3VudCkpO1xuICAgICAgICBvbGRQb3MgKz0gY29tcG9uZW50LmNvdW50OyAvLyBSZXZlcnNlIGFkZCBhbmQgcmVtb3ZlIHNvIHJlbW92ZXMgYXJlIG91dHB1dCBmaXJzdCB0byBtYXRjaCBjb21tb24gY29udmVudGlvblxuICAgICAgICAvLyBUaGUgZGlmZmluZyBhbGdvcml0aG0gaXMgdGllZCB0byBhZGQgdGhlbiByZW1vdmUgb3V0cHV0IGFuZCB0aGlzIGlzIHRoZSBzaW1wbGVzdFxuICAgICAgICAvLyByb3V0ZSB0byBnZXQgdGhlIGRlc2lyZWQgb3V0cHV0IHdpdGggbWluaW1hbCBvdmVyaGVhZC5cblxuICAgICAgICBpZiAoY29tcG9uZW50UG9zICYmIGNvbXBvbmVudHNbY29tcG9uZW50UG9zIC0gMV0uYWRkZWQpIHtcbiAgICAgICAgICB2YXIgdG1wID0gY29tcG9uZW50c1tjb21wb25lbnRQb3MgLSAxXTtcbiAgICAgICAgICBjb21wb25lbnRzW2NvbXBvbmVudFBvcyAtIDFdID0gY29tcG9uZW50c1tjb21wb25lbnRQb3NdO1xuICAgICAgICAgIGNvbXBvbmVudHNbY29tcG9uZW50UG9zXSA9IHRtcDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gLy8gU3BlY2lhbCBjYXNlIGhhbmRsZSBmb3Igd2hlbiBvbmUgdGVybWluYWwgaXMgaWdub3JlZCAoaS5lLiB3aGl0ZXNwYWNlKS5cbiAgICAvLyBGb3IgdGhpcyBjYXNlIHdlIG1lcmdlIHRoZSB0ZXJtaW5hbCBpbnRvIHRoZSBwcmlvciBzdHJpbmcgYW5kIGRyb3AgdGhlIGNoYW5nZS5cbiAgICAvLyBUaGlzIGlzIG9ubHkgYXZhaWxhYmxlIGZvciBzdHJpbmcgbW9kZS5cblxuXG4gICAgdmFyIGxhc3RDb21wb25lbnQgPSBjb21wb25lbnRzW2NvbXBvbmVudExlbiAtIDFdO1xuXG4gICAgaWYgKGNvbXBvbmVudExlbiA+IDEgJiYgdHlwZW9mIGxhc3RDb21wb25lbnQudmFsdWUgPT09ICdzdHJpbmcnICYmIChsYXN0Q29tcG9uZW50LmFkZGVkIHx8IGxhc3RDb21wb25lbnQucmVtb3ZlZCkgJiYgZGlmZi5lcXVhbHMoJycsIGxhc3RDb21wb25lbnQudmFsdWUpKSB7XG4gICAgICBjb21wb25lbnRzW2NvbXBvbmVudExlbiAtIDJdLnZhbHVlICs9IGxhc3RDb21wb25lbnQudmFsdWU7XG4gICAgICBjb21wb25lbnRzLnBvcCgpO1xuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRzO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xvbmVQYXRoKHBhdGgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmV3UG9zOiBwYXRoLm5ld1BvcyxcbiAgICAgIGNvbXBvbmVudHM6IHBhdGguY29tcG9uZW50cy5zbGljZSgwKVxuICAgIH07XG4gIH1cblxuICB2YXIgY2hhcmFjdGVyRGlmZiA9IG5ldyBEaWZmKCk7XG4gIGZ1bmN0aW9uIGRpZmZDaGFycyhvbGRTdHIsIG5ld1N0ciwgb3B0aW9ucykge1xuICAgIHJldHVybiBjaGFyYWN0ZXJEaWZmLmRpZmYob2xkU3RyLCBuZXdTdHIsIG9wdGlvbnMpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2VuZXJhdGVPcHRpb25zKG9wdGlvbnMsIGRlZmF1bHRzKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBkZWZhdWx0cy5jYWxsYmFjayA9IG9wdGlvbnM7XG4gICAgfSBlbHNlIGlmIChvcHRpb25zKSB7XG4gICAgICBmb3IgKHZhciBuYW1lIGluIG9wdGlvbnMpIHtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgICAgaWYgKG9wdGlvbnMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgICBkZWZhdWx0c1tuYW1lXSA9IG9wdGlvbnNbbmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGVmYXVsdHM7XG4gIH1cblxuICAvL1xuICAvLyBSYW5nZXMgYW5kIGV4Y2VwdGlvbnM6XG4gIC8vIExhdGluLTEgU3VwcGxlbWVudCwgMDA4MOKAkzAwRkZcbiAgLy8gIC0gVSswMEQ3ICDDlyBNdWx0aXBsaWNhdGlvbiBzaWduXG4gIC8vICAtIFUrMDBGNyAgw7cgRGl2aXNpb24gc2lnblxuICAvLyBMYXRpbiBFeHRlbmRlZC1BLCAwMTAw4oCTMDE3RlxuICAvLyBMYXRpbiBFeHRlbmRlZC1CLCAwMTgw4oCTMDI0RlxuICAvLyBJUEEgRXh0ZW5zaW9ucywgMDI1MOKAkzAyQUZcbiAgLy8gU3BhY2luZyBNb2RpZmllciBMZXR0ZXJzLCAwMkIw4oCTMDJGRlxuICAvLyAgLSBVKzAyQzcgIMuHICYjNzExOyAgQ2Fyb25cbiAgLy8gIC0gVSswMkQ4ICDLmCAmIzcyODsgIEJyZXZlXG4gIC8vICAtIFUrMDJEOSAgy5kgJiM3Mjk7ICBEb3QgQWJvdmVcbiAgLy8gIC0gVSswMkRBICDLmiAmIzczMDsgIFJpbmcgQWJvdmVcbiAgLy8gIC0gVSswMkRCICDLmyAmIzczMTsgIE9nb25la1xuICAvLyAgLSBVKzAyREMgIMucICYjNzMyOyAgU21hbGwgVGlsZGVcbiAgLy8gIC0gVSswMkREICDLnSAmIzczMzsgIERvdWJsZSBBY3V0ZSBBY2NlbnRcbiAgLy8gTGF0aW4gRXh0ZW5kZWQgQWRkaXRpb25hbCwgMUUwMOKAkzFFRkZcblxuICB2YXIgZXh0ZW5kZWRXb3JkQ2hhcnMgPSAvXltBLVphLXpcXHhDMC1cXHUwMkM2XFx1MDJDOC1cXHUwMkQ3XFx1MDJERS1cXHUwMkZGXFx1MUUwMC1cXHUxRUZGXSskLztcbiAgdmFyIHJlV2hpdGVzcGFjZSA9IC9cXFMvO1xuICB2YXIgd29yZERpZmYgPSBuZXcgRGlmZigpO1xuXG4gIHdvcmREaWZmLmVxdWFscyA9IGZ1bmN0aW9uIChsZWZ0LCByaWdodCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuaWdub3JlQ2FzZSkge1xuICAgICAgbGVmdCA9IGxlZnQudG9Mb3dlckNhc2UoKTtcbiAgICAgIHJpZ2h0ID0gcmlnaHQudG9Mb3dlckNhc2UoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGVmdCA9PT0gcmlnaHQgfHwgdGhpcy5vcHRpb25zLmlnbm9yZVdoaXRlc3BhY2UgJiYgIXJlV2hpdGVzcGFjZS50ZXN0KGxlZnQpICYmICFyZVdoaXRlc3BhY2UudGVzdChyaWdodCk7XG4gIH07XG5cbiAgd29yZERpZmYudG9rZW5pemUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAvLyBBbGwgd2hpdGVzcGFjZSBzeW1ib2xzIGV4Y2VwdCBuZXdsaW5lIGdyb3VwIGludG8gb25lIHRva2VuLCBlYWNoIG5ld2xpbmUgLSBpbiBzZXBhcmF0ZSB0b2tlblxuICAgIHZhciB0b2tlbnMgPSB2YWx1ZS5zcGxpdCgvKFteXFxTXFxyXFxuXSt8WygpW1xcXXt9J1wiXFxyXFxuXXxcXGIpLyk7IC8vIEpvaW4gdGhlIGJvdW5kYXJ5IHNwbGl0cyB0aGF0IHdlIGRvIG5vdCBjb25zaWRlciB0byBiZSBib3VuZGFyaWVzLiBUaGlzIGlzIHByaW1hcmlseSB0aGUgZXh0ZW5kZWQgTGF0aW4gY2hhcmFjdGVyIHNldC5cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgLy8gSWYgd2UgaGF2ZSBhbiBlbXB0eSBzdHJpbmcgaW4gdGhlIG5leHQgZmllbGQgYW5kIHdlIGhhdmUgb25seSB3b3JkIGNoYXJzIGJlZm9yZSBhbmQgYWZ0ZXIsIG1lcmdlXG4gICAgICBpZiAoIXRva2Vuc1tpICsgMV0gJiYgdG9rZW5zW2kgKyAyXSAmJiBleHRlbmRlZFdvcmRDaGFycy50ZXN0KHRva2Vuc1tpXSkgJiYgZXh0ZW5kZWRXb3JkQ2hhcnMudGVzdCh0b2tlbnNbaSArIDJdKSkge1xuICAgICAgICB0b2tlbnNbaV0gKz0gdG9rZW5zW2kgKyAyXTtcbiAgICAgICAgdG9rZW5zLnNwbGljZShpICsgMSwgMik7XG4gICAgICAgIGktLTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdG9rZW5zO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGRpZmZXb3JkcyhvbGRTdHIsIG5ld1N0ciwgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBnZW5lcmF0ZU9wdGlvbnMob3B0aW9ucywge1xuICAgICAgaWdub3JlV2hpdGVzcGFjZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiB3b3JkRGlmZi5kaWZmKG9sZFN0ciwgbmV3U3RyLCBvcHRpb25zKTtcbiAgfVxuICBmdW5jdGlvbiBkaWZmV29yZHNXaXRoU3BhY2Uob2xkU3RyLCBuZXdTdHIsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gd29yZERpZmYuZGlmZihvbGRTdHIsIG5ld1N0ciwgb3B0aW9ucyk7XG4gIH1cblxuICB2YXIgbGluZURpZmYgPSBuZXcgRGlmZigpO1xuXG4gIGxpbmVEaWZmLnRva2VuaXplID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgdmFyIHJldExpbmVzID0gW10sXG4gICAgICAgIGxpbmVzQW5kTmV3bGluZXMgPSB2YWx1ZS5zcGxpdCgvKFxcbnxcXHJcXG4pLyk7IC8vIElnbm9yZSB0aGUgZmluYWwgZW1wdHkgdG9rZW4gdGhhdCBvY2N1cnMgaWYgdGhlIHN0cmluZyBlbmRzIHdpdGggYSBuZXcgbGluZVxuXG4gICAgaWYgKCFsaW5lc0FuZE5ld2xpbmVzW2xpbmVzQW5kTmV3bGluZXMubGVuZ3RoIC0gMV0pIHtcbiAgICAgIGxpbmVzQW5kTmV3bGluZXMucG9wKCk7XG4gICAgfSAvLyBNZXJnZSB0aGUgY29udGVudCBhbmQgbGluZSBzZXBhcmF0b3JzIGludG8gc2luZ2xlIHRva2Vuc1xuXG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpbmVzQW5kTmV3bGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBsaW5lID0gbGluZXNBbmROZXdsaW5lc1tpXTtcblxuICAgICAgaWYgKGkgJSAyICYmICF0aGlzLm9wdGlvbnMubmV3bGluZUlzVG9rZW4pIHtcbiAgICAgICAgcmV0TGluZXNbcmV0TGluZXMubGVuZ3RoIC0gMV0gKz0gbGluZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaWdub3JlV2hpdGVzcGFjZSkge1xuICAgICAgICAgIGxpbmUgPSBsaW5lLnRyaW0oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldExpbmVzLnB1c2gobGluZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldExpbmVzO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGRpZmZMaW5lcyhvbGRTdHIsIG5ld1N0ciwgY2FsbGJhY2spIHtcbiAgICByZXR1cm4gbGluZURpZmYuZGlmZihvbGRTdHIsIG5ld1N0ciwgY2FsbGJhY2spO1xuICB9XG4gIGZ1bmN0aW9uIGRpZmZUcmltbWVkTGluZXMob2xkU3RyLCBuZXdTdHIsIGNhbGxiYWNrKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBnZW5lcmF0ZU9wdGlvbnMoY2FsbGJhY2ssIHtcbiAgICAgIGlnbm9yZVdoaXRlc3BhY2U6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gbGluZURpZmYuZGlmZihvbGRTdHIsIG5ld1N0ciwgb3B0aW9ucyk7XG4gIH1cblxuICB2YXIgc2VudGVuY2VEaWZmID0gbmV3IERpZmYoKTtcblxuICBzZW50ZW5jZURpZmYudG9rZW5pemUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUuc3BsaXQoLyhcXFMuKz9bLiE/XSkoPz1cXHMrfCQpLyk7XG4gIH07XG5cbiAgZnVuY3Rpb24gZGlmZlNlbnRlbmNlcyhvbGRTdHIsIG5ld1N0ciwgY2FsbGJhY2spIHtcbiAgICByZXR1cm4gc2VudGVuY2VEaWZmLmRpZmYob2xkU3RyLCBuZXdTdHIsIGNhbGxiYWNrKTtcbiAgfVxuXG4gIHZhciBjc3NEaWZmID0gbmV3IERpZmYoKTtcblxuICBjc3NEaWZmLnRva2VuaXplID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLnNwbGl0KC8oW3t9OjssXXxcXHMrKS8pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGRpZmZDc3Mob2xkU3RyLCBuZXdTdHIsIGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIGNzc0RpZmYuZGlmZihvbGRTdHIsIG5ld1N0ciwgY2FsbGJhY2spO1xuICB9XG5cbiAgZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICAgIF90eXBlb2YgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgX3R5cGVvZiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBfdHlwZW9mKG9iaik7XG4gIH1cblxuICBmdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gICAgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkoYXJyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICAgIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xuICB9XG5cbiAgZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICAgIGlmICghbykgcmV0dXJuO1xuICAgIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gICAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICAgIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gICAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB9XG5cbiAgZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICAgIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgYXJyMltpXSA9IGFycltpXTtcblxuICAgIHJldHVybiBhcnIyO1xuICB9XG5cbiAgZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xuICB9XG5cbiAgdmFyIG9iamVjdFByb3RvdHlwZVRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbiAgdmFyIGpzb25EaWZmID0gbmV3IERpZmYoKTsgLy8gRGlzY3JpbWluYXRlIGJldHdlZW4gdHdvIGxpbmVzIG9mIHByZXR0eS1wcmludGVkLCBzZXJpYWxpemVkIEpTT04gd2hlcmUgb25lIG9mIHRoZW0gaGFzIGFcbiAgLy8gZGFuZ2xpbmcgY29tbWEgYW5kIHRoZSBvdGhlciBkb2Vzbid0LiBUdXJucyBvdXQgaW5jbHVkaW5nIHRoZSBkYW5nbGluZyBjb21tYSB5aWVsZHMgdGhlIG5pY2VzdCBvdXRwdXQ6XG5cbiAganNvbkRpZmYudXNlTG9uZ2VzdFRva2VuID0gdHJ1ZTtcbiAganNvbkRpZmYudG9rZW5pemUgPSBsaW5lRGlmZi50b2tlbml6ZTtcblxuICBqc29uRGlmZi5jYXN0SW5wdXQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICB2YXIgX3RoaXMkb3B0aW9ucyA9IHRoaXMub3B0aW9ucyxcbiAgICAgICAgdW5kZWZpbmVkUmVwbGFjZW1lbnQgPSBfdGhpcyRvcHRpb25zLnVuZGVmaW5lZFJlcGxhY2VtZW50LFxuICAgICAgICBfdGhpcyRvcHRpb25zJHN0cmluZ2kgPSBfdGhpcyRvcHRpb25zLnN0cmluZ2lmeVJlcGxhY2VyLFxuICAgICAgICBzdHJpbmdpZnlSZXBsYWNlciA9IF90aGlzJG9wdGlvbnMkc3RyaW5naSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKGssIHYpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgdiA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWRSZXBsYWNlbWVudCA6IHY7XG4gICAgfSA6IF90aGlzJG9wdGlvbnMkc3RyaW5naTtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHZhbHVlIDogSlNPTi5zdHJpbmdpZnkoY2Fub25pY2FsaXplKHZhbHVlLCBudWxsLCBudWxsLCBzdHJpbmdpZnlSZXBsYWNlciksIHN0cmluZ2lmeVJlcGxhY2VyLCAnICAnKTtcbiAgfTtcblxuICBqc29uRGlmZi5lcXVhbHMgPSBmdW5jdGlvbiAobGVmdCwgcmlnaHQpIHtcbiAgICByZXR1cm4gRGlmZi5wcm90b3R5cGUuZXF1YWxzLmNhbGwoanNvbkRpZmYsIGxlZnQucmVwbGFjZSgvLChbXFxyXFxuXSkvZywgJyQxJyksIHJpZ2h0LnJlcGxhY2UoLywoW1xcclxcbl0pL2csICckMScpKTtcbiAgfTtcblxuICBmdW5jdGlvbiBkaWZmSnNvbihvbGRPYmosIG5ld09iaiwgb3B0aW9ucykge1xuICAgIHJldHVybiBqc29uRGlmZi5kaWZmKG9sZE9iaiwgbmV3T2JqLCBvcHRpb25zKTtcbiAgfSAvLyBUaGlzIGZ1bmN0aW9uIGhhbmRsZXMgdGhlIHByZXNlbmNlIG9mIGNpcmN1bGFyIHJlZmVyZW5jZXMgYnkgYmFpbGluZyBvdXQgd2hlbiBlbmNvdW50ZXJpbmcgYW5cbiAgLy8gb2JqZWN0IHRoYXQgaXMgYWxyZWFkeSBvbiB0aGUgXCJzdGFja1wiIG9mIGl0ZW1zIGJlaW5nIHByb2Nlc3NlZC4gQWNjZXB0cyBhbiBvcHRpb25hbCByZXBsYWNlclxuXG4gIGZ1bmN0aW9uIGNhbm9uaWNhbGl6ZShvYmosIHN0YWNrLCByZXBsYWNlbWVudFN0YWNrLCByZXBsYWNlciwga2V5KSB7XG4gICAgc3RhY2sgPSBzdGFjayB8fCBbXTtcbiAgICByZXBsYWNlbWVudFN0YWNrID0gcmVwbGFjZW1lbnRTdGFjayB8fCBbXTtcblxuICAgIGlmIChyZXBsYWNlcikge1xuICAgICAgb2JqID0gcmVwbGFjZXIoa2V5LCBvYmopO1xuICAgIH1cblxuICAgIHZhciBpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHN0YWNrLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoc3RhY2tbaV0gPT09IG9iaikge1xuICAgICAgICByZXR1cm4gcmVwbGFjZW1lbnRTdGFja1tpXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgY2Fub25pY2FsaXplZE9iajtcblxuICAgIGlmICgnW29iamVjdCBBcnJheV0nID09PSBvYmplY3RQcm90b3R5cGVUb1N0cmluZy5jYWxsKG9iaikpIHtcbiAgICAgIHN0YWNrLnB1c2gob2JqKTtcbiAgICAgIGNhbm9uaWNhbGl6ZWRPYmogPSBuZXcgQXJyYXkob2JqLmxlbmd0aCk7XG4gICAgICByZXBsYWNlbWVudFN0YWNrLnB1c2goY2Fub25pY2FsaXplZE9iaik7XG5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBvYmoubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgY2Fub25pY2FsaXplZE9ialtpXSA9IGNhbm9uaWNhbGl6ZShvYmpbaV0sIHN0YWNrLCByZXBsYWNlbWVudFN0YWNrLCByZXBsYWNlciwga2V5KTtcbiAgICAgIH1cblxuICAgICAgc3RhY2sucG9wKCk7XG4gICAgICByZXBsYWNlbWVudFN0YWNrLnBvcCgpO1xuICAgICAgcmV0dXJuIGNhbm9uaWNhbGl6ZWRPYmo7XG4gICAgfVxuXG4gICAgaWYgKG9iaiAmJiBvYmoudG9KU09OKSB7XG4gICAgICBvYmogPSBvYmoudG9KU09OKCk7XG4gICAgfVxuXG4gICAgaWYgKF90eXBlb2Yob2JqKSA9PT0gJ29iamVjdCcgJiYgb2JqICE9PSBudWxsKSB7XG4gICAgICBzdGFjay5wdXNoKG9iaik7XG4gICAgICBjYW5vbmljYWxpemVkT2JqID0ge307XG4gICAgICByZXBsYWNlbWVudFN0YWNrLnB1c2goY2Fub25pY2FsaXplZE9iaik7XG5cbiAgICAgIHZhciBzb3J0ZWRLZXlzID0gW10sXG4gICAgICAgICAgX2tleTtcblxuICAgICAgZm9yIChfa2V5IGluIG9iaikge1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KF9rZXkpKSB7XG4gICAgICAgICAgc29ydGVkS2V5cy5wdXNoKF9rZXkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHNvcnRlZEtleXMuc29ydCgpO1xuXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgc29ydGVkS2V5cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBfa2V5ID0gc29ydGVkS2V5c1tpXTtcbiAgICAgICAgY2Fub25pY2FsaXplZE9ialtfa2V5XSA9IGNhbm9uaWNhbGl6ZShvYmpbX2tleV0sIHN0YWNrLCByZXBsYWNlbWVudFN0YWNrLCByZXBsYWNlciwgX2tleSk7XG4gICAgICB9XG5cbiAgICAgIHN0YWNrLnBvcCgpO1xuICAgICAgcmVwbGFjZW1lbnRTdGFjay5wb3AoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2Fub25pY2FsaXplZE9iaiA9IG9iajtcbiAgICB9XG5cbiAgICByZXR1cm4gY2Fub25pY2FsaXplZE9iajtcbiAgfVxuXG4gIHZhciBhcnJheURpZmYgPSBuZXcgRGlmZigpO1xuXG4gIGFycmF5RGlmZi50b2tlbml6ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5zbGljZSgpO1xuICB9O1xuXG4gIGFycmF5RGlmZi5qb2luID0gYXJyYXlEaWZmLnJlbW92ZUVtcHR5ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGRpZmZBcnJheXMob2xkQXJyLCBuZXdBcnIsIGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIGFycmF5RGlmZi5kaWZmKG9sZEFyciwgbmV3QXJyLCBjYWxsYmFjayk7XG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZVBhdGNoKHVuaURpZmYpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIGRpZmZzdHIgPSB1bmlEaWZmLnNwbGl0KC9cXHJcXG58W1xcblxcdlxcZlxcclxceDg1XS8pLFxuICAgICAgICBkZWxpbWl0ZXJzID0gdW5pRGlmZi5tYXRjaCgvXFxyXFxufFtcXG5cXHZcXGZcXHJcXHg4NV0vZykgfHwgW10sXG4gICAgICAgIGxpc3QgPSBbXSxcbiAgICAgICAgaSA9IDA7XG5cbiAgICBmdW5jdGlvbiBwYXJzZUluZGV4KCkge1xuICAgICAgdmFyIGluZGV4ID0ge307XG4gICAgICBsaXN0LnB1c2goaW5kZXgpOyAvLyBQYXJzZSBkaWZmIG1ldGFkYXRhXG5cbiAgICAgIHdoaWxlIChpIDwgZGlmZnN0ci5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGxpbmUgPSBkaWZmc3RyW2ldOyAvLyBGaWxlIGhlYWRlciBmb3VuZCwgZW5kIHBhcnNpbmcgZGlmZiBtZXRhZGF0YVxuXG4gICAgICAgIGlmICgvXihcXC1cXC1cXC18XFwrXFwrXFwrfEBAKVxccy8udGVzdChsaW5lKSkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9IC8vIERpZmYgaW5kZXhcblxuXG4gICAgICAgIHZhciBoZWFkZXIgPSAvXig/OkluZGV4OnxkaWZmKD86IC1yIFxcdyspKylcXHMrKC4rPylcXHMqJC8uZXhlYyhsaW5lKTtcblxuICAgICAgICBpZiAoaGVhZGVyKSB7XG4gICAgICAgICAgaW5kZXguaW5kZXggPSBoZWFkZXJbMV07XG4gICAgICAgIH1cblxuICAgICAgICBpKys7XG4gICAgICB9IC8vIFBhcnNlIGZpbGUgaGVhZGVycyBpZiB0aGV5IGFyZSBkZWZpbmVkLiBVbmlmaWVkIGRpZmYgcmVxdWlyZXMgdGhlbSwgYnV0XG4gICAgICAvLyB0aGVyZSdzIG5vIHRlY2huaWNhbCBpc3N1ZXMgdG8gaGF2ZSBhbiBpc29sYXRlZCBodW5rIHdpdGhvdXQgZmlsZSBoZWFkZXJcblxuXG4gICAgICBwYXJzZUZpbGVIZWFkZXIoaW5kZXgpO1xuICAgICAgcGFyc2VGaWxlSGVhZGVyKGluZGV4KTsgLy8gUGFyc2UgaHVua3NcblxuICAgICAgaW5kZXguaHVua3MgPSBbXTtcblxuICAgICAgd2hpbGUgKGkgPCBkaWZmc3RyLmxlbmd0aCkge1xuICAgICAgICB2YXIgX2xpbmUgPSBkaWZmc3RyW2ldO1xuXG4gICAgICAgIGlmICgvXihJbmRleDp8ZGlmZnxcXC1cXC1cXC18XFwrXFwrXFwrKVxccy8udGVzdChfbGluZSkpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfSBlbHNlIGlmICgvXkBALy50ZXN0KF9saW5lKSkge1xuICAgICAgICAgIGluZGV4Lmh1bmtzLnB1c2gocGFyc2VIdW5rKCkpO1xuICAgICAgICB9IGVsc2UgaWYgKF9saW5lICYmIG9wdGlvbnMuc3RyaWN0KSB7XG4gICAgICAgICAgLy8gSWdub3JlIHVuZXhwZWN0ZWQgY29udGVudCB1bmxlc3MgaW4gc3RyaWN0IG1vZGVcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gbGluZSAnICsgKGkgKyAxKSArICcgJyArIEpTT04uc3RyaW5naWZ5KF9saW5lKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSAvLyBQYXJzZXMgdGhlIC0tLSBhbmQgKysrIGhlYWRlcnMsIGlmIG5vbmUgYXJlIGZvdW5kLCBubyBsaW5lc1xuICAgIC8vIGFyZSBjb25zdW1lZC5cblxuXG4gICAgZnVuY3Rpb24gcGFyc2VGaWxlSGVhZGVyKGluZGV4KSB7XG4gICAgICB2YXIgZmlsZUhlYWRlciA9IC9eKC0tLXxcXCtcXCtcXCspXFxzKyguKikkLy5leGVjKGRpZmZzdHJbaV0pO1xuXG4gICAgICBpZiAoZmlsZUhlYWRlcikge1xuICAgICAgICB2YXIga2V5UHJlZml4ID0gZmlsZUhlYWRlclsxXSA9PT0gJy0tLScgPyAnb2xkJyA6ICduZXcnO1xuICAgICAgICB2YXIgZGF0YSA9IGZpbGVIZWFkZXJbMl0uc3BsaXQoJ1xcdCcsIDIpO1xuICAgICAgICB2YXIgZmlsZU5hbWUgPSBkYXRhWzBdLnJlcGxhY2UoL1xcXFxcXFxcL2csICdcXFxcJyk7XG5cbiAgICAgICAgaWYgKC9eXCIuKlwiJC8udGVzdChmaWxlTmFtZSkpIHtcbiAgICAgICAgICBmaWxlTmFtZSA9IGZpbGVOYW1lLnN1YnN0cigxLCBmaWxlTmFtZS5sZW5ndGggLSAyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGluZGV4W2tleVByZWZpeCArICdGaWxlTmFtZSddID0gZmlsZU5hbWU7XG4gICAgICAgIGluZGV4W2tleVByZWZpeCArICdIZWFkZXInXSA9IChkYXRhWzFdIHx8ICcnKS50cmltKCk7XG4gICAgICAgIGkrKztcbiAgICAgIH1cbiAgICB9IC8vIFBhcnNlcyBhIGh1bmtcbiAgICAvLyBUaGlzIGFzc3VtZXMgdGhhdCB3ZSBhcmUgYXQgdGhlIHN0YXJ0IG9mIGEgaHVuay5cblxuXG4gICAgZnVuY3Rpb24gcGFyc2VIdW5rKCkge1xuICAgICAgdmFyIGNodW5rSGVhZGVySW5kZXggPSBpLFxuICAgICAgICAgIGNodW5rSGVhZGVyTGluZSA9IGRpZmZzdHJbaSsrXSxcbiAgICAgICAgICBjaHVua0hlYWRlciA9IGNodW5rSGVhZGVyTGluZS5zcGxpdCgvQEAgLShcXGQrKSg/OiwoXFxkKykpPyBcXCsoXFxkKykoPzosKFxcZCspKT8gQEAvKTtcbiAgICAgIHZhciBodW5rID0ge1xuICAgICAgICBvbGRTdGFydDogK2NodW5rSGVhZGVyWzFdLFxuICAgICAgICBvbGRMaW5lczogdHlwZW9mIGNodW5rSGVhZGVyWzJdID09PSAndW5kZWZpbmVkJyA/IDEgOiArY2h1bmtIZWFkZXJbMl0sXG4gICAgICAgIG5ld1N0YXJ0OiArY2h1bmtIZWFkZXJbM10sXG4gICAgICAgIG5ld0xpbmVzOiB0eXBlb2YgY2h1bmtIZWFkZXJbNF0gPT09ICd1bmRlZmluZWQnID8gMSA6ICtjaHVua0hlYWRlcls0XSxcbiAgICAgICAgbGluZXM6IFtdLFxuICAgICAgICBsaW5lZGVsaW1pdGVyczogW11cbiAgICAgIH07IC8vIFVuaWZpZWQgRGlmZiBGb3JtYXQgcXVpcms6IElmIHRoZSBjaHVuayBzaXplIGlzIDAsXG4gICAgICAvLyB0aGUgZmlyc3QgbnVtYmVyIGlzIG9uZSBsb3dlciB0aGFuIG9uZSB3b3VsZCBleHBlY3QuXG4gICAgICAvLyBodHRwczovL3d3dy5hcnRpbWEuY29tL3dlYmxvZ3Mvdmlld3Bvc3QuanNwP3RocmVhZD0xNjQyOTNcblxuICAgICAgaWYgKGh1bmsub2xkTGluZXMgPT09IDApIHtcbiAgICAgICAgaHVuay5vbGRTdGFydCArPSAxO1xuICAgICAgfVxuXG4gICAgICBpZiAoaHVuay5uZXdMaW5lcyA9PT0gMCkge1xuICAgICAgICBodW5rLm5ld1N0YXJ0ICs9IDE7XG4gICAgICB9XG5cbiAgICAgIHZhciBhZGRDb3VudCA9IDAsXG4gICAgICAgICAgcmVtb3ZlQ291bnQgPSAwO1xuXG4gICAgICBmb3IgKDsgaSA8IGRpZmZzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gTGluZXMgc3RhcnRpbmcgd2l0aCAnLS0tJyBjb3VsZCBiZSBtaXN0YWtlbiBmb3IgdGhlIFwicmVtb3ZlIGxpbmVcIiBvcGVyYXRpb25cbiAgICAgICAgLy8gQnV0IHRoZXkgY291bGQgYmUgdGhlIGhlYWRlciBmb3IgdGhlIG5leHQgZmlsZS4gVGhlcmVmb3JlIHBydW5lIHN1Y2ggY2FzZXMgb3V0LlxuICAgICAgICBpZiAoZGlmZnN0cltpXS5pbmRleE9mKCctLS0gJykgPT09IDAgJiYgaSArIDIgPCBkaWZmc3RyLmxlbmd0aCAmJiBkaWZmc3RyW2kgKyAxXS5pbmRleE9mKCcrKysgJykgPT09IDAgJiYgZGlmZnN0cltpICsgMl0uaW5kZXhPZignQEAnKSA9PT0gMCkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG9wZXJhdGlvbiA9IGRpZmZzdHJbaV0ubGVuZ3RoID09IDAgJiYgaSAhPSBkaWZmc3RyLmxlbmd0aCAtIDEgPyAnICcgOiBkaWZmc3RyW2ldWzBdO1xuXG4gICAgICAgIGlmIChvcGVyYXRpb24gPT09ICcrJyB8fCBvcGVyYXRpb24gPT09ICctJyB8fCBvcGVyYXRpb24gPT09ICcgJyB8fCBvcGVyYXRpb24gPT09ICdcXFxcJykge1xuICAgICAgICAgIGh1bmsubGluZXMucHVzaChkaWZmc3RyW2ldKTtcbiAgICAgICAgICBodW5rLmxpbmVkZWxpbWl0ZXJzLnB1c2goZGVsaW1pdGVyc1tpXSB8fCAnXFxuJyk7XG5cbiAgICAgICAgICBpZiAob3BlcmF0aW9uID09PSAnKycpIHtcbiAgICAgICAgICAgIGFkZENvdW50Kys7XG4gICAgICAgICAgfSBlbHNlIGlmIChvcGVyYXRpb24gPT09ICctJykge1xuICAgICAgICAgICAgcmVtb3ZlQ291bnQrKztcbiAgICAgICAgICB9IGVsc2UgaWYgKG9wZXJhdGlvbiA9PT0gJyAnKSB7XG4gICAgICAgICAgICBhZGRDb3VudCsrO1xuICAgICAgICAgICAgcmVtb3ZlQ291bnQrKztcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gLy8gSGFuZGxlIHRoZSBlbXB0eSBibG9jayBjb3VudCBjYXNlXG5cblxuICAgICAgaWYgKCFhZGRDb3VudCAmJiBodW5rLm5ld0xpbmVzID09PSAxKSB7XG4gICAgICAgIGh1bmsubmV3TGluZXMgPSAwO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXJlbW92ZUNvdW50ICYmIGh1bmsub2xkTGluZXMgPT09IDEpIHtcbiAgICAgICAgaHVuay5vbGRMaW5lcyA9IDA7XG4gICAgICB9IC8vIFBlcmZvcm0gb3B0aW9uYWwgc2FuaXR5IGNoZWNraW5nXG5cblxuICAgICAgaWYgKG9wdGlvbnMuc3RyaWN0KSB7XG4gICAgICAgIGlmIChhZGRDb3VudCAhPT0gaHVuay5uZXdMaW5lcykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQWRkZWQgbGluZSBjb3VudCBkaWQgbm90IG1hdGNoIGZvciBodW5rIGF0IGxpbmUgJyArIChjaHVua0hlYWRlckluZGV4ICsgMSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlbW92ZUNvdW50ICE9PSBodW5rLm9sZExpbmVzKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZW1vdmVkIGxpbmUgY291bnQgZGlkIG5vdCBtYXRjaCBmb3IgaHVuayBhdCBsaW5lICcgKyAoY2h1bmtIZWFkZXJJbmRleCArIDEpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaHVuaztcbiAgICB9XG5cbiAgICB3aGlsZSAoaSA8IGRpZmZzdHIubGVuZ3RoKSB7XG4gICAgICBwYXJzZUluZGV4KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpc3Q7XG4gIH1cblxuICAvLyBJdGVyYXRvciB0aGF0IHRyYXZlcnNlcyBpbiB0aGUgcmFuZ2Ugb2YgW21pbiwgbWF4XSwgc3RlcHBpbmdcbiAgLy8gYnkgZGlzdGFuY2UgZnJvbSBhIGdpdmVuIHN0YXJ0IHBvc2l0aW9uLiBJLmUuIGZvciBbMCwgNF0sIHdpdGhcbiAgLy8gc3RhcnQgb2YgMiwgdGhpcyB3aWxsIGl0ZXJhdGUgMiwgMywgMSwgNCwgMC5cbiAgZnVuY3Rpb24gZGlzdGFuY2VJdGVyYXRvciAoc3RhcnQsIG1pbkxpbmUsIG1heExpbmUpIHtcbiAgICB2YXIgd2FudEZvcndhcmQgPSB0cnVlLFxuICAgICAgICBiYWNrd2FyZEV4aGF1c3RlZCA9IGZhbHNlLFxuICAgICAgICBmb3J3YXJkRXhoYXVzdGVkID0gZmFsc2UsXG4gICAgICAgIGxvY2FsT2Zmc2V0ID0gMTtcbiAgICByZXR1cm4gZnVuY3Rpb24gaXRlcmF0b3IoKSB7XG4gICAgICBpZiAod2FudEZvcndhcmQgJiYgIWZvcndhcmRFeGhhdXN0ZWQpIHtcbiAgICAgICAgaWYgKGJhY2t3YXJkRXhoYXVzdGVkKSB7XG4gICAgICAgICAgbG9jYWxPZmZzZXQrKztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3YW50Rm9yd2FyZCA9IGZhbHNlO1xuICAgICAgICB9IC8vIENoZWNrIGlmIHRyeWluZyB0byBmaXQgYmV5b25kIHRleHQgbGVuZ3RoLCBhbmQgaWYgbm90LCBjaGVjayBpdCBmaXRzXG4gICAgICAgIC8vIGFmdGVyIG9mZnNldCBsb2NhdGlvbiAob3IgZGVzaXJlZCBsb2NhdGlvbiBvbiBmaXJzdCBpdGVyYXRpb24pXG5cblxuICAgICAgICBpZiAoc3RhcnQgKyBsb2NhbE9mZnNldCA8PSBtYXhMaW5lKSB7XG4gICAgICAgICAgcmV0dXJuIGxvY2FsT2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yd2FyZEV4aGF1c3RlZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICghYmFja3dhcmRFeGhhdXN0ZWQpIHtcbiAgICAgICAgaWYgKCFmb3J3YXJkRXhoYXVzdGVkKSB7XG4gICAgICAgICAgd2FudEZvcndhcmQgPSB0cnVlO1xuICAgICAgICB9IC8vIENoZWNrIGlmIHRyeWluZyB0byBmaXQgYmVmb3JlIHRleHQgYmVnaW5uaW5nLCBhbmQgaWYgbm90LCBjaGVjayBpdCBmaXRzXG4gICAgICAgIC8vIGJlZm9yZSBvZmZzZXQgbG9jYXRpb25cblxuXG4gICAgICAgIGlmIChtaW5MaW5lIDw9IHN0YXJ0IC0gbG9jYWxPZmZzZXQpIHtcbiAgICAgICAgICByZXR1cm4gLWxvY2FsT2Zmc2V0Kys7XG4gICAgICAgIH1cblxuICAgICAgICBiYWNrd2FyZEV4aGF1c3RlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiBpdGVyYXRvcigpO1xuICAgICAgfSAvLyBXZSB0cmllZCB0byBmaXQgaHVuayBiZWZvcmUgdGV4dCBiZWdpbm5pbmcgYW5kIGJleW9uZCB0ZXh0IGxlbmd0aCwgdGhlblxuICAgICAgLy8gaHVuayBjYW4ndCBmaXQgb24gdGhlIHRleHQuIFJldHVybiB1bmRlZmluZWRcblxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBhcHBseVBhdGNoKHNvdXJjZSwgdW5pRGlmZikge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcblxuICAgIGlmICh0eXBlb2YgdW5pRGlmZiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHVuaURpZmYgPSBwYXJzZVBhdGNoKHVuaURpZmYpO1xuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KHVuaURpZmYpKSB7XG4gICAgICBpZiAodW5pRGlmZi5sZW5ndGggPiAxKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignYXBwbHlQYXRjaCBvbmx5IHdvcmtzIHdpdGggYSBzaW5nbGUgaW5wdXQuJyk7XG4gICAgICB9XG5cbiAgICAgIHVuaURpZmYgPSB1bmlEaWZmWzBdO1xuICAgIH0gLy8gQXBwbHkgdGhlIGRpZmYgdG8gdGhlIGlucHV0XG5cblxuICAgIHZhciBsaW5lcyA9IHNvdXJjZS5zcGxpdCgvXFxyXFxufFtcXG5cXHZcXGZcXHJcXHg4NV0vKSxcbiAgICAgICAgZGVsaW1pdGVycyA9IHNvdXJjZS5tYXRjaCgvXFxyXFxufFtcXG5cXHZcXGZcXHJcXHg4NV0vZykgfHwgW10sXG4gICAgICAgIGh1bmtzID0gdW5pRGlmZi5odW5rcyxcbiAgICAgICAgY29tcGFyZUxpbmUgPSBvcHRpb25zLmNvbXBhcmVMaW5lIHx8IGZ1bmN0aW9uIChsaW5lTnVtYmVyLCBsaW5lLCBvcGVyYXRpb24sIHBhdGNoQ29udGVudCkge1xuICAgICAgcmV0dXJuIGxpbmUgPT09IHBhdGNoQ29udGVudDtcbiAgICB9LFxuICAgICAgICBlcnJvckNvdW50ID0gMCxcbiAgICAgICAgZnV6ekZhY3RvciA9IG9wdGlvbnMuZnV6ekZhY3RvciB8fCAwLFxuICAgICAgICBtaW5MaW5lID0gMCxcbiAgICAgICAgb2Zmc2V0ID0gMCxcbiAgICAgICAgcmVtb3ZlRU9GTkwsXG4gICAgICAgIGFkZEVPRk5MO1xuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiB0aGUgaHVuayBleGFjdGx5IGZpdHMgb24gdGhlIHByb3ZpZGVkIGxvY2F0aW9uXG4gICAgICovXG5cblxuICAgIGZ1bmN0aW9uIGh1bmtGaXRzKGh1bmssIHRvUG9zKSB7XG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGh1bmsubGluZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgdmFyIGxpbmUgPSBodW5rLmxpbmVzW2pdLFxuICAgICAgICAgICAgb3BlcmF0aW9uID0gbGluZS5sZW5ndGggPiAwID8gbGluZVswXSA6ICcgJyxcbiAgICAgICAgICAgIGNvbnRlbnQgPSBsaW5lLmxlbmd0aCA+IDAgPyBsaW5lLnN1YnN0cigxKSA6IGxpbmU7XG5cbiAgICAgICAgaWYgKG9wZXJhdGlvbiA9PT0gJyAnIHx8IG9wZXJhdGlvbiA9PT0gJy0nKSB7XG4gICAgICAgICAgLy8gQ29udGV4dCBzYW5pdHkgY2hlY2tcbiAgICAgICAgICBpZiAoIWNvbXBhcmVMaW5lKHRvUG9zICsgMSwgbGluZXNbdG9Qb3NdLCBvcGVyYXRpb24sIGNvbnRlbnQpKSB7XG4gICAgICAgICAgICBlcnJvckNvdW50Kys7XG5cbiAgICAgICAgICAgIGlmIChlcnJvckNvdW50ID4gZnV6ekZhY3Rvcikge1xuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdG9Qb3MrKztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IC8vIFNlYXJjaCBiZXN0IGZpdCBvZmZzZXRzIGZvciBlYWNoIGh1bmsgYmFzZWQgb24gdGhlIHByZXZpb3VzIG9uZXNcblxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBodW5rcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGh1bmsgPSBodW5rc1tpXSxcbiAgICAgICAgICBtYXhMaW5lID0gbGluZXMubGVuZ3RoIC0gaHVuay5vbGRMaW5lcyxcbiAgICAgICAgICBsb2NhbE9mZnNldCA9IDAsXG4gICAgICAgICAgdG9Qb3MgPSBvZmZzZXQgKyBodW5rLm9sZFN0YXJ0IC0gMTtcbiAgICAgIHZhciBpdGVyYXRvciA9IGRpc3RhbmNlSXRlcmF0b3IodG9Qb3MsIG1pbkxpbmUsIG1heExpbmUpO1xuXG4gICAgICBmb3IgKDsgbG9jYWxPZmZzZXQgIT09IHVuZGVmaW5lZDsgbG9jYWxPZmZzZXQgPSBpdGVyYXRvcigpKSB7XG4gICAgICAgIGlmIChodW5rRml0cyhodW5rLCB0b1BvcyArIGxvY2FsT2Zmc2V0KSkge1xuICAgICAgICAgIGh1bmsub2Zmc2V0ID0gb2Zmc2V0ICs9IGxvY2FsT2Zmc2V0O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChsb2NhbE9mZnNldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0gLy8gU2V0IGxvd2VyIHRleHQgbGltaXQgdG8gZW5kIG9mIHRoZSBjdXJyZW50IGh1bmssIHNvIG5leHQgb25lcyBkb24ndCB0cnlcbiAgICAgIC8vIHRvIGZpdCBvdmVyIGFscmVhZHkgcGF0Y2hlZCB0ZXh0XG5cblxuICAgICAgbWluTGluZSA9IGh1bmsub2Zmc2V0ICsgaHVuay5vbGRTdGFydCArIGh1bmsub2xkTGluZXM7XG4gICAgfSAvLyBBcHBseSBwYXRjaCBodW5rc1xuXG5cbiAgICB2YXIgZGlmZk9mZnNldCA9IDA7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgaHVua3MubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2h1bmsgPSBodW5rc1tfaV0sXG4gICAgICAgICAgX3RvUG9zID0gX2h1bmsub2xkU3RhcnQgKyBfaHVuay5vZmZzZXQgKyBkaWZmT2Zmc2V0IC0gMTtcblxuICAgICAgZGlmZk9mZnNldCArPSBfaHVuay5uZXdMaW5lcyAtIF9odW5rLm9sZExpbmVzO1xuXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IF9odW5rLmxpbmVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHZhciBsaW5lID0gX2h1bmsubGluZXNbal0sXG4gICAgICAgICAgICBvcGVyYXRpb24gPSBsaW5lLmxlbmd0aCA+IDAgPyBsaW5lWzBdIDogJyAnLFxuICAgICAgICAgICAgY29udGVudCA9IGxpbmUubGVuZ3RoID4gMCA/IGxpbmUuc3Vic3RyKDEpIDogbGluZSxcbiAgICAgICAgICAgIGRlbGltaXRlciA9IF9odW5rLmxpbmVkZWxpbWl0ZXJzW2pdO1xuXG4gICAgICAgIGlmIChvcGVyYXRpb24gPT09ICcgJykge1xuICAgICAgICAgIF90b1BvcysrO1xuICAgICAgICB9IGVsc2UgaWYgKG9wZXJhdGlvbiA9PT0gJy0nKSB7XG4gICAgICAgICAgbGluZXMuc3BsaWNlKF90b1BvcywgMSk7XG4gICAgICAgICAgZGVsaW1pdGVycy5zcGxpY2UoX3RvUG9zLCAxKTtcbiAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgICB9IGVsc2UgaWYgKG9wZXJhdGlvbiA9PT0gJysnKSB7XG4gICAgICAgICAgbGluZXMuc3BsaWNlKF90b1BvcywgMCwgY29udGVudCk7XG4gICAgICAgICAgZGVsaW1pdGVycy5zcGxpY2UoX3RvUG9zLCAwLCBkZWxpbWl0ZXIpO1xuICAgICAgICAgIF90b1BvcysrO1xuICAgICAgICB9IGVsc2UgaWYgKG9wZXJhdGlvbiA9PT0gJ1xcXFwnKSB7XG4gICAgICAgICAgdmFyIHByZXZpb3VzT3BlcmF0aW9uID0gX2h1bmsubGluZXNbaiAtIDFdID8gX2h1bmsubGluZXNbaiAtIDFdWzBdIDogbnVsbDtcblxuICAgICAgICAgIGlmIChwcmV2aW91c09wZXJhdGlvbiA9PT0gJysnKSB7XG4gICAgICAgICAgICByZW1vdmVFT0ZOTCA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIGlmIChwcmV2aW91c09wZXJhdGlvbiA9PT0gJy0nKSB7XG4gICAgICAgICAgICBhZGRFT0ZOTCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSAvLyBIYW5kbGUgRU9GTkwgaW5zZXJ0aW9uL3JlbW92YWxcblxuXG4gICAgaWYgKHJlbW92ZUVPRk5MKSB7XG4gICAgICB3aGlsZSAoIWxpbmVzW2xpbmVzLmxlbmd0aCAtIDFdKSB7XG4gICAgICAgIGxpbmVzLnBvcCgpO1xuICAgICAgICBkZWxpbWl0ZXJzLnBvcCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYWRkRU9GTkwpIHtcbiAgICAgIGxpbmVzLnB1c2goJycpO1xuICAgICAgZGVsaW1pdGVycy5wdXNoKCdcXG4nKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbGluZXMubGVuZ3RoIC0gMTsgX2srKykge1xuICAgICAgbGluZXNbX2tdID0gbGluZXNbX2tdICsgZGVsaW1pdGVyc1tfa107XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpbmVzLmpvaW4oJycpO1xuICB9IC8vIFdyYXBwZXIgdGhhdCBzdXBwb3J0cyBtdWx0aXBsZSBmaWxlIHBhdGNoZXMgdmlhIGNhbGxiYWNrcy5cblxuICBmdW5jdGlvbiBhcHBseVBhdGNoZXModW5pRGlmZiwgb3B0aW9ucykge1xuICAgIGlmICh0eXBlb2YgdW5pRGlmZiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHVuaURpZmYgPSBwYXJzZVBhdGNoKHVuaURpZmYpO1xuICAgIH1cblxuICAgIHZhciBjdXJyZW50SW5kZXggPSAwO1xuXG4gICAgZnVuY3Rpb24gcHJvY2Vzc0luZGV4KCkge1xuICAgICAgdmFyIGluZGV4ID0gdW5pRGlmZltjdXJyZW50SW5kZXgrK107XG5cbiAgICAgIGlmICghaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnMuY29tcGxldGUoKTtcbiAgICAgIH1cblxuICAgICAgb3B0aW9ucy5sb2FkRmlsZShpbmRleCwgZnVuY3Rpb24gKGVyciwgZGF0YSkge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgcmV0dXJuIG9wdGlvbnMuY29tcGxldGUoZXJyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB1cGRhdGVkQ29udGVudCA9IGFwcGx5UGF0Y2goZGF0YSwgaW5kZXgsIG9wdGlvbnMpO1xuICAgICAgICBvcHRpb25zLnBhdGNoZWQoaW5kZXgsIHVwZGF0ZWRDb250ZW50LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMuY29tcGxldGUoZXJyKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwcm9jZXNzSW5kZXgoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm9jZXNzSW5kZXgoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0cnVjdHVyZWRQYXRjaChvbGRGaWxlTmFtZSwgbmV3RmlsZU5hbWUsIG9sZFN0ciwgbmV3U3RyLCBvbGRIZWFkZXIsIG5ld0hlYWRlciwgb3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5jb250ZXh0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgb3B0aW9ucy5jb250ZXh0ID0gNDtcbiAgICB9XG5cbiAgICB2YXIgZGlmZiA9IGRpZmZMaW5lcyhvbGRTdHIsIG5ld1N0ciwgb3B0aW9ucyk7XG4gICAgZGlmZi5wdXNoKHtcbiAgICAgIHZhbHVlOiAnJyxcbiAgICAgIGxpbmVzOiBbXVxuICAgIH0pOyAvLyBBcHBlbmQgYW4gZW1wdHkgdmFsdWUgdG8gbWFrZSBjbGVhbnVwIGVhc2llclxuXG4gICAgZnVuY3Rpb24gY29udGV4dExpbmVzKGxpbmVzKSB7XG4gICAgICByZXR1cm4gbGluZXMubWFwKGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgICByZXR1cm4gJyAnICsgZW50cnk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgaHVua3MgPSBbXTtcbiAgICB2YXIgb2xkUmFuZ2VTdGFydCA9IDAsXG4gICAgICAgIG5ld1JhbmdlU3RhcnQgPSAwLFxuICAgICAgICBjdXJSYW5nZSA9IFtdLFxuICAgICAgICBvbGRMaW5lID0gMSxcbiAgICAgICAgbmV3TGluZSA9IDE7XG5cbiAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcChpKSB7XG4gICAgICB2YXIgY3VycmVudCA9IGRpZmZbaV0sXG4gICAgICAgICAgbGluZXMgPSBjdXJyZW50LmxpbmVzIHx8IGN1cnJlbnQudmFsdWUucmVwbGFjZSgvXFxuJC8sICcnKS5zcGxpdCgnXFxuJyk7XG4gICAgICBjdXJyZW50LmxpbmVzID0gbGluZXM7XG5cbiAgICAgIGlmIChjdXJyZW50LmFkZGVkIHx8IGN1cnJlbnQucmVtb3ZlZCkge1xuICAgICAgICB2YXIgX2N1clJhbmdlO1xuXG4gICAgICAgIC8vIElmIHdlIGhhdmUgcHJldmlvdXMgY29udGV4dCwgc3RhcnQgd2l0aCB0aGF0XG4gICAgICAgIGlmICghb2xkUmFuZ2VTdGFydCkge1xuICAgICAgICAgIHZhciBwcmV2ID0gZGlmZltpIC0gMV07XG4gICAgICAgICAgb2xkUmFuZ2VTdGFydCA9IG9sZExpbmU7XG4gICAgICAgICAgbmV3UmFuZ2VTdGFydCA9IG5ld0xpbmU7XG5cbiAgICAgICAgICBpZiAocHJldikge1xuICAgICAgICAgICAgY3VyUmFuZ2UgPSBvcHRpb25zLmNvbnRleHQgPiAwID8gY29udGV4dExpbmVzKHByZXYubGluZXMuc2xpY2UoLW9wdGlvbnMuY29udGV4dCkpIDogW107XG4gICAgICAgICAgICBvbGRSYW5nZVN0YXJ0IC09IGN1clJhbmdlLmxlbmd0aDtcbiAgICAgICAgICAgIG5ld1JhbmdlU3RhcnQgLT0gY3VyUmFuZ2UubGVuZ3RoO1xuICAgICAgICAgIH1cbiAgICAgICAgfSAvLyBPdXRwdXQgb3VyIGNoYW5nZXNcblxuXG4gICAgICAgIChfY3VyUmFuZ2UgPSBjdXJSYW5nZSkucHVzaC5hcHBseShfY3VyUmFuZ2UsIF90b0NvbnN1bWFibGVBcnJheShsaW5lcy5tYXAoZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICAgICAgcmV0dXJuIChjdXJyZW50LmFkZGVkID8gJysnIDogJy0nKSArIGVudHJ5O1xuICAgICAgICB9KSkpOyAvLyBUcmFjayB0aGUgdXBkYXRlZCBmaWxlIHBvc2l0aW9uXG5cblxuICAgICAgICBpZiAoY3VycmVudC5hZGRlZCkge1xuICAgICAgICAgIG5ld0xpbmUgKz0gbGluZXMubGVuZ3RoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9sZExpbmUgKz0gbGluZXMubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBJZGVudGljYWwgY29udGV4dCBsaW5lcy4gVHJhY2sgbGluZSBjaGFuZ2VzXG4gICAgICAgIGlmIChvbGRSYW5nZVN0YXJ0KSB7XG4gICAgICAgICAgLy8gQ2xvc2Ugb3V0IGFueSBjaGFuZ2VzIHRoYXQgaGF2ZSBiZWVuIG91dHB1dCAob3Igam9pbiBvdmVybGFwcGluZylcbiAgICAgICAgICBpZiAobGluZXMubGVuZ3RoIDw9IG9wdGlvbnMuY29udGV4dCAqIDIgJiYgaSA8IGRpZmYubGVuZ3RoIC0gMikge1xuICAgICAgICAgICAgdmFyIF9jdXJSYW5nZTI7XG5cbiAgICAgICAgICAgIC8vIE92ZXJsYXBwaW5nXG4gICAgICAgICAgICAoX2N1clJhbmdlMiA9IGN1clJhbmdlKS5wdXNoLmFwcGx5KF9jdXJSYW5nZTIsIF90b0NvbnN1bWFibGVBcnJheShjb250ZXh0TGluZXMobGluZXMpKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBfY3VyUmFuZ2UzO1xuXG4gICAgICAgICAgICAvLyBlbmQgdGhlIHJhbmdlIGFuZCBvdXRwdXRcbiAgICAgICAgICAgIHZhciBjb250ZXh0U2l6ZSA9IE1hdGgubWluKGxpbmVzLmxlbmd0aCwgb3B0aW9ucy5jb250ZXh0KTtcblxuICAgICAgICAgICAgKF9jdXJSYW5nZTMgPSBjdXJSYW5nZSkucHVzaC5hcHBseShfY3VyUmFuZ2UzLCBfdG9Db25zdW1hYmxlQXJyYXkoY29udGV4dExpbmVzKGxpbmVzLnNsaWNlKDAsIGNvbnRleHRTaXplKSkpKTtcblxuICAgICAgICAgICAgdmFyIGh1bmsgPSB7XG4gICAgICAgICAgICAgIG9sZFN0YXJ0OiBvbGRSYW5nZVN0YXJ0LFxuICAgICAgICAgICAgICBvbGRMaW5lczogb2xkTGluZSAtIG9sZFJhbmdlU3RhcnQgKyBjb250ZXh0U2l6ZSxcbiAgICAgICAgICAgICAgbmV3U3RhcnQ6IG5ld1JhbmdlU3RhcnQsXG4gICAgICAgICAgICAgIG5ld0xpbmVzOiBuZXdMaW5lIC0gbmV3UmFuZ2VTdGFydCArIGNvbnRleHRTaXplLFxuICAgICAgICAgICAgICBsaW5lczogY3VyUmFuZ2VcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmIChpID49IGRpZmYubGVuZ3RoIC0gMiAmJiBsaW5lcy5sZW5ndGggPD0gb3B0aW9ucy5jb250ZXh0KSB7XG4gICAgICAgICAgICAgIC8vIEVPRiBpcyBpbnNpZGUgdGhpcyBodW5rXG4gICAgICAgICAgICAgIHZhciBvbGRFT0ZOZXdsaW5lID0gL1xcbiQvLnRlc3Qob2xkU3RyKTtcbiAgICAgICAgICAgICAgdmFyIG5ld0VPRk5ld2xpbmUgPSAvXFxuJC8udGVzdChuZXdTdHIpO1xuICAgICAgICAgICAgICB2YXIgbm9ObEJlZm9yZUFkZHMgPSBsaW5lcy5sZW5ndGggPT0gMCAmJiBjdXJSYW5nZS5sZW5ndGggPiBodW5rLm9sZExpbmVzO1xuXG4gICAgICAgICAgICAgIGlmICghb2xkRU9GTmV3bGluZSAmJiBub05sQmVmb3JlQWRkcyAmJiBvbGRTdHIubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIC8vIHNwZWNpYWwgY2FzZTogb2xkIGhhcyBubyBlb2wgYW5kIG5vIHRyYWlsaW5nIGNvbnRleHQ7IG5vLW5sIGNhbiBlbmQgdXAgYmVmb3JlIGFkZHNcbiAgICAgICAgICAgICAgICAvLyBob3dldmVyLCBpZiB0aGUgb2xkIGZpbGUgaXMgZW1wdHksIGRvIG5vdCBvdXRwdXQgdGhlIG5vLW5sIGxpbmVcbiAgICAgICAgICAgICAgICBjdXJSYW5nZS5zcGxpY2UoaHVuay5vbGRMaW5lcywgMCwgJ1xcXFwgTm8gbmV3bGluZSBhdCBlbmQgb2YgZmlsZScpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFvbGRFT0ZOZXdsaW5lICYmICFub05sQmVmb3JlQWRkcyB8fCAhbmV3RU9GTmV3bGluZSkge1xuICAgICAgICAgICAgICAgIGN1clJhbmdlLnB1c2goJ1xcXFwgTm8gbmV3bGluZSBhdCBlbmQgb2YgZmlsZScpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGh1bmtzLnB1c2goaHVuayk7XG4gICAgICAgICAgICBvbGRSYW5nZVN0YXJ0ID0gMDtcbiAgICAgICAgICAgIG5ld1JhbmdlU3RhcnQgPSAwO1xuICAgICAgICAgICAgY3VyUmFuZ2UgPSBbXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBvbGRMaW5lICs9IGxpbmVzLmxlbmd0aDtcbiAgICAgICAgbmV3TGluZSArPSBsaW5lcy5sZW5ndGg7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGlmZi5sZW5ndGg7IGkrKykge1xuICAgICAgX2xvb3AoaSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIG9sZEZpbGVOYW1lOiBvbGRGaWxlTmFtZSxcbiAgICAgIG5ld0ZpbGVOYW1lOiBuZXdGaWxlTmFtZSxcbiAgICAgIG9sZEhlYWRlcjogb2xkSGVhZGVyLFxuICAgICAgbmV3SGVhZGVyOiBuZXdIZWFkZXIsXG4gICAgICBodW5rczogaHVua3NcbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIGZvcm1hdFBhdGNoKGRpZmYpIHtcbiAgICB2YXIgcmV0ID0gW107XG5cbiAgICBpZiAoZGlmZi5vbGRGaWxlTmFtZSA9PSBkaWZmLm5ld0ZpbGVOYW1lKSB7XG4gICAgICByZXQucHVzaCgnSW5kZXg6ICcgKyBkaWZmLm9sZEZpbGVOYW1lKTtcbiAgICB9XG5cbiAgICByZXQucHVzaCgnPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PScpO1xuICAgIHJldC5wdXNoKCctLS0gJyArIGRpZmYub2xkRmlsZU5hbWUgKyAodHlwZW9mIGRpZmYub2xkSGVhZGVyID09PSAndW5kZWZpbmVkJyA/ICcnIDogJ1xcdCcgKyBkaWZmLm9sZEhlYWRlcikpO1xuICAgIHJldC5wdXNoKCcrKysgJyArIGRpZmYubmV3RmlsZU5hbWUgKyAodHlwZW9mIGRpZmYubmV3SGVhZGVyID09PSAndW5kZWZpbmVkJyA/ICcnIDogJ1xcdCcgKyBkaWZmLm5ld0hlYWRlcikpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkaWZmLmh1bmtzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaHVuayA9IGRpZmYuaHVua3NbaV07IC8vIFVuaWZpZWQgRGlmZiBGb3JtYXQgcXVpcms6IElmIHRoZSBjaHVuayBzaXplIGlzIDAsXG4gICAgICAvLyB0aGUgZmlyc3QgbnVtYmVyIGlzIG9uZSBsb3dlciB0aGFuIG9uZSB3b3VsZCBleHBlY3QuXG4gICAgICAvLyBodHRwczovL3d3dy5hcnRpbWEuY29tL3dlYmxvZ3Mvdmlld3Bvc3QuanNwP3RocmVhZD0xNjQyOTNcblxuICAgICAgaWYgKGh1bmsub2xkTGluZXMgPT09IDApIHtcbiAgICAgICAgaHVuay5vbGRTdGFydCAtPSAxO1xuICAgICAgfVxuXG4gICAgICBpZiAoaHVuay5uZXdMaW5lcyA9PT0gMCkge1xuICAgICAgICBodW5rLm5ld1N0YXJ0IC09IDE7XG4gICAgICB9XG5cbiAgICAgIHJldC5wdXNoKCdAQCAtJyArIGh1bmsub2xkU3RhcnQgKyAnLCcgKyBodW5rLm9sZExpbmVzICsgJyArJyArIGh1bmsubmV3U3RhcnQgKyAnLCcgKyBodW5rLm5ld0xpbmVzICsgJyBAQCcpO1xuICAgICAgcmV0LnB1c2guYXBwbHkocmV0LCBodW5rLmxpbmVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0LmpvaW4oJ1xcbicpICsgJ1xcbic7XG4gIH1cbiAgZnVuY3Rpb24gY3JlYXRlVHdvRmlsZXNQYXRjaChvbGRGaWxlTmFtZSwgbmV3RmlsZU5hbWUsIG9sZFN0ciwgbmV3U3RyLCBvbGRIZWFkZXIsIG5ld0hlYWRlciwgb3B0aW9ucykge1xuICAgIHJldHVybiBmb3JtYXRQYXRjaChzdHJ1Y3R1cmVkUGF0Y2gob2xkRmlsZU5hbWUsIG5ld0ZpbGVOYW1lLCBvbGRTdHIsIG5ld1N0ciwgb2xkSGVhZGVyLCBuZXdIZWFkZXIsIG9wdGlvbnMpKTtcbiAgfVxuICBmdW5jdGlvbiBjcmVhdGVQYXRjaChmaWxlTmFtZSwgb2xkU3RyLCBuZXdTdHIsIG9sZEhlYWRlciwgbmV3SGVhZGVyLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIGNyZWF0ZVR3b0ZpbGVzUGF0Y2goZmlsZU5hbWUsIGZpbGVOYW1lLCBvbGRTdHIsIG5ld1N0ciwgb2xkSGVhZGVyLCBuZXdIZWFkZXIsIG9wdGlvbnMpO1xuICB9XG5cbiAgZnVuY3Rpb24gYXJyYXlFcXVhbChhLCBiKSB7XG4gICAgaWYgKGEubGVuZ3RoICE9PSBiLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiBhcnJheVN0YXJ0c1dpdGgoYSwgYik7XG4gIH1cbiAgZnVuY3Rpb24gYXJyYXlTdGFydHNXaXRoKGFycmF5LCBzdGFydCkge1xuICAgIGlmIChzdGFydC5sZW5ndGggPiBhcnJheS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0YXJ0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoc3RhcnRbaV0gIT09IGFycmF5W2ldKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbGNMaW5lQ291bnQoaHVuaykge1xuICAgIHZhciBfY2FsY09sZE5ld0xpbmVDb3VudCA9IGNhbGNPbGROZXdMaW5lQ291bnQoaHVuay5saW5lcyksXG4gICAgICAgIG9sZExpbmVzID0gX2NhbGNPbGROZXdMaW5lQ291bnQub2xkTGluZXMsXG4gICAgICAgIG5ld0xpbmVzID0gX2NhbGNPbGROZXdMaW5lQ291bnQubmV3TGluZXM7XG5cbiAgICBpZiAob2xkTGluZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaHVuay5vbGRMaW5lcyA9IG9sZExpbmVzO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgaHVuay5vbGRMaW5lcztcbiAgICB9XG5cbiAgICBpZiAobmV3TGluZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaHVuay5uZXdMaW5lcyA9IG5ld0xpbmVzO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgaHVuay5uZXdMaW5lcztcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gbWVyZ2UobWluZSwgdGhlaXJzLCBiYXNlKSB7XG4gICAgbWluZSA9IGxvYWRQYXRjaChtaW5lLCBiYXNlKTtcbiAgICB0aGVpcnMgPSBsb2FkUGF0Y2godGhlaXJzLCBiYXNlKTtcbiAgICB2YXIgcmV0ID0ge307IC8vIEZvciBpbmRleCB3ZSBqdXN0IGxldCBpdCBwYXNzIHRocm91Z2ggYXMgaXQgZG9lc24ndCBoYXZlIGFueSBuZWNlc3NhcnkgbWVhbmluZy5cbiAgICAvLyBMZWF2aW5nIHNhbml0eSBjaGVja3Mgb24gdGhpcyB0byB0aGUgQVBJIGNvbnN1bWVyIHRoYXQgbWF5IGtub3cgbW9yZSBhYm91dCB0aGVcbiAgICAvLyBtZWFuaW5nIGluIHRoZWlyIG93biBjb250ZXh0LlxuXG4gICAgaWYgKG1pbmUuaW5kZXggfHwgdGhlaXJzLmluZGV4KSB7XG4gICAgICByZXQuaW5kZXggPSBtaW5lLmluZGV4IHx8IHRoZWlycy5pbmRleDtcbiAgICB9XG5cbiAgICBpZiAobWluZS5uZXdGaWxlTmFtZSB8fCB0aGVpcnMubmV3RmlsZU5hbWUpIHtcbiAgICAgIGlmICghZmlsZU5hbWVDaGFuZ2VkKG1pbmUpKSB7XG4gICAgICAgIC8vIE5vIGhlYWRlciBvciBubyBjaGFuZ2UgaW4gb3VycywgdXNlIHRoZWlycyAoYW5kIG91cnMgaWYgdGhlaXJzIGRvZXMgbm90IGV4aXN0KVxuICAgICAgICByZXQub2xkRmlsZU5hbWUgPSB0aGVpcnMub2xkRmlsZU5hbWUgfHwgbWluZS5vbGRGaWxlTmFtZTtcbiAgICAgICAgcmV0Lm5ld0ZpbGVOYW1lID0gdGhlaXJzLm5ld0ZpbGVOYW1lIHx8IG1pbmUubmV3RmlsZU5hbWU7XG4gICAgICAgIHJldC5vbGRIZWFkZXIgPSB0aGVpcnMub2xkSGVhZGVyIHx8IG1pbmUub2xkSGVhZGVyO1xuICAgICAgICByZXQubmV3SGVhZGVyID0gdGhlaXJzLm5ld0hlYWRlciB8fCBtaW5lLm5ld0hlYWRlcjtcbiAgICAgIH0gZWxzZSBpZiAoIWZpbGVOYW1lQ2hhbmdlZCh0aGVpcnMpKSB7XG4gICAgICAgIC8vIE5vIGhlYWRlciBvciBubyBjaGFuZ2UgaW4gdGhlaXJzLCB1c2Ugb3Vyc1xuICAgICAgICByZXQub2xkRmlsZU5hbWUgPSBtaW5lLm9sZEZpbGVOYW1lO1xuICAgICAgICByZXQubmV3RmlsZU5hbWUgPSBtaW5lLm5ld0ZpbGVOYW1lO1xuICAgICAgICByZXQub2xkSGVhZGVyID0gbWluZS5vbGRIZWFkZXI7XG4gICAgICAgIHJldC5uZXdIZWFkZXIgPSBtaW5lLm5ld0hlYWRlcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEJvdGggY2hhbmdlZC4uLiBmaWd1cmUgaXQgb3V0XG4gICAgICAgIHJldC5vbGRGaWxlTmFtZSA9IHNlbGVjdEZpZWxkKHJldCwgbWluZS5vbGRGaWxlTmFtZSwgdGhlaXJzLm9sZEZpbGVOYW1lKTtcbiAgICAgICAgcmV0Lm5ld0ZpbGVOYW1lID0gc2VsZWN0RmllbGQocmV0LCBtaW5lLm5ld0ZpbGVOYW1lLCB0aGVpcnMubmV3RmlsZU5hbWUpO1xuICAgICAgICByZXQub2xkSGVhZGVyID0gc2VsZWN0RmllbGQocmV0LCBtaW5lLm9sZEhlYWRlciwgdGhlaXJzLm9sZEhlYWRlcik7XG4gICAgICAgIHJldC5uZXdIZWFkZXIgPSBzZWxlY3RGaWVsZChyZXQsIG1pbmUubmV3SGVhZGVyLCB0aGVpcnMubmV3SGVhZGVyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXQuaHVua3MgPSBbXTtcbiAgICB2YXIgbWluZUluZGV4ID0gMCxcbiAgICAgICAgdGhlaXJzSW5kZXggPSAwLFxuICAgICAgICBtaW5lT2Zmc2V0ID0gMCxcbiAgICAgICAgdGhlaXJzT2Zmc2V0ID0gMDtcblxuICAgIHdoaWxlIChtaW5lSW5kZXggPCBtaW5lLmh1bmtzLmxlbmd0aCB8fCB0aGVpcnNJbmRleCA8IHRoZWlycy5odW5rcy5sZW5ndGgpIHtcbiAgICAgIHZhciBtaW5lQ3VycmVudCA9IG1pbmUuaHVua3NbbWluZUluZGV4XSB8fCB7XG4gICAgICAgIG9sZFN0YXJ0OiBJbmZpbml0eVxuICAgICAgfSxcbiAgICAgICAgICB0aGVpcnNDdXJyZW50ID0gdGhlaXJzLmh1bmtzW3RoZWlyc0luZGV4XSB8fCB7XG4gICAgICAgIG9sZFN0YXJ0OiBJbmZpbml0eVxuICAgICAgfTtcblxuICAgICAgaWYgKGh1bmtCZWZvcmUobWluZUN1cnJlbnQsIHRoZWlyc0N1cnJlbnQpKSB7XG4gICAgICAgIC8vIFRoaXMgcGF0Y2ggZG9lcyBub3Qgb3ZlcmxhcCB3aXRoIGFueSBvZiB0aGUgb3RoZXJzLCB5YXkuXG4gICAgICAgIHJldC5odW5rcy5wdXNoKGNsb25lSHVuayhtaW5lQ3VycmVudCwgbWluZU9mZnNldCkpO1xuICAgICAgICBtaW5lSW5kZXgrKztcbiAgICAgICAgdGhlaXJzT2Zmc2V0ICs9IG1pbmVDdXJyZW50Lm5ld0xpbmVzIC0gbWluZUN1cnJlbnQub2xkTGluZXM7XG4gICAgICB9IGVsc2UgaWYgKGh1bmtCZWZvcmUodGhlaXJzQ3VycmVudCwgbWluZUN1cnJlbnQpKSB7XG4gICAgICAgIC8vIFRoaXMgcGF0Y2ggZG9lcyBub3Qgb3ZlcmxhcCB3aXRoIGFueSBvZiB0aGUgb3RoZXJzLCB5YXkuXG4gICAgICAgIHJldC5odW5rcy5wdXNoKGNsb25lSHVuayh0aGVpcnNDdXJyZW50LCB0aGVpcnNPZmZzZXQpKTtcbiAgICAgICAgdGhlaXJzSW5kZXgrKztcbiAgICAgICAgbWluZU9mZnNldCArPSB0aGVpcnNDdXJyZW50Lm5ld0xpbmVzIC0gdGhlaXJzQ3VycmVudC5vbGRMaW5lcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE92ZXJsYXAsIG1lcmdlIGFzIGJlc3Qgd2UgY2FuXG4gICAgICAgIHZhciBtZXJnZWRIdW5rID0ge1xuICAgICAgICAgIG9sZFN0YXJ0OiBNYXRoLm1pbihtaW5lQ3VycmVudC5vbGRTdGFydCwgdGhlaXJzQ3VycmVudC5vbGRTdGFydCksXG4gICAgICAgICAgb2xkTGluZXM6IDAsXG4gICAgICAgICAgbmV3U3RhcnQ6IE1hdGgubWluKG1pbmVDdXJyZW50Lm5ld1N0YXJ0ICsgbWluZU9mZnNldCwgdGhlaXJzQ3VycmVudC5vbGRTdGFydCArIHRoZWlyc09mZnNldCksXG4gICAgICAgICAgbmV3TGluZXM6IDAsXG4gICAgICAgICAgbGluZXM6IFtdXG4gICAgICAgIH07XG4gICAgICAgIG1lcmdlTGluZXMobWVyZ2VkSHVuaywgbWluZUN1cnJlbnQub2xkU3RhcnQsIG1pbmVDdXJyZW50LmxpbmVzLCB0aGVpcnNDdXJyZW50Lm9sZFN0YXJ0LCB0aGVpcnNDdXJyZW50LmxpbmVzKTtcbiAgICAgICAgdGhlaXJzSW5kZXgrKztcbiAgICAgICAgbWluZUluZGV4Kys7XG4gICAgICAgIHJldC5odW5rcy5wdXNoKG1lcmdlZEh1bmspO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBmdW5jdGlvbiBsb2FkUGF0Y2gocGFyYW0sIGJhc2UpIHtcbiAgICBpZiAodHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKC9eQEAvbS50ZXN0KHBhcmFtKSB8fCAvXkluZGV4Oi9tLnRlc3QocGFyYW0pKSB7XG4gICAgICAgIHJldHVybiBwYXJzZVBhdGNoKHBhcmFtKVswXTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFiYXNlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTXVzdCBwcm92aWRlIGEgYmFzZSByZWZlcmVuY2Ugb3IgcGFzcyBpbiBhIHBhdGNoJyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdHJ1Y3R1cmVkUGF0Y2godW5kZWZpbmVkLCB1bmRlZmluZWQsIGJhc2UsIHBhcmFtKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyYW07XG4gIH1cblxuICBmdW5jdGlvbiBmaWxlTmFtZUNoYW5nZWQocGF0Y2gpIHtcbiAgICByZXR1cm4gcGF0Y2gubmV3RmlsZU5hbWUgJiYgcGF0Y2gubmV3RmlsZU5hbWUgIT09IHBhdGNoLm9sZEZpbGVOYW1lO1xuICB9XG5cbiAgZnVuY3Rpb24gc2VsZWN0RmllbGQoaW5kZXgsIG1pbmUsIHRoZWlycykge1xuICAgIGlmIChtaW5lID09PSB0aGVpcnMpIHtcbiAgICAgIHJldHVybiBtaW5lO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbmRleC5jb25mbGljdCA9IHRydWU7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBtaW5lOiBtaW5lLFxuICAgICAgICB0aGVpcnM6IHRoZWlyc1xuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBodW5rQmVmb3JlKHRlc3QsIGNoZWNrKSB7XG4gICAgcmV0dXJuIHRlc3Qub2xkU3RhcnQgPCBjaGVjay5vbGRTdGFydCAmJiB0ZXN0Lm9sZFN0YXJ0ICsgdGVzdC5vbGRMaW5lcyA8IGNoZWNrLm9sZFN0YXJ0O1xuICB9XG5cbiAgZnVuY3Rpb24gY2xvbmVIdW5rKGh1bmssIG9mZnNldCkge1xuICAgIHJldHVybiB7XG4gICAgICBvbGRTdGFydDogaHVuay5vbGRTdGFydCxcbiAgICAgIG9sZExpbmVzOiBodW5rLm9sZExpbmVzLFxuICAgICAgbmV3U3RhcnQ6IGh1bmsubmV3U3RhcnQgKyBvZmZzZXQsXG4gICAgICBuZXdMaW5lczogaHVuay5uZXdMaW5lcyxcbiAgICAgIGxpbmVzOiBodW5rLmxpbmVzXG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1lcmdlTGluZXMoaHVuaywgbWluZU9mZnNldCwgbWluZUxpbmVzLCB0aGVpck9mZnNldCwgdGhlaXJMaW5lcykge1xuICAgIC8vIFRoaXMgd2lsbCBnZW5lcmFsbHkgcmVzdWx0IGluIGEgY29uZmxpY3RlZCBodW5rLCBidXQgdGhlcmUgYXJlIGNhc2VzIHdoZXJlIHRoZSBjb250ZXh0XG4gICAgLy8gaXMgdGhlIG9ubHkgb3ZlcmxhcCB3aGVyZSB3ZSBjYW4gc3VjY2Vzc2Z1bGx5IG1lcmdlIHRoZSBjb250ZW50IGhlcmUuXG4gICAgdmFyIG1pbmUgPSB7XG4gICAgICBvZmZzZXQ6IG1pbmVPZmZzZXQsXG4gICAgICBsaW5lczogbWluZUxpbmVzLFxuICAgICAgaW5kZXg6IDBcbiAgICB9LFxuICAgICAgICB0aGVpciA9IHtcbiAgICAgIG9mZnNldDogdGhlaXJPZmZzZXQsXG4gICAgICBsaW5lczogdGhlaXJMaW5lcyxcbiAgICAgIGluZGV4OiAwXG4gICAgfTsgLy8gSGFuZGxlIGFueSBsZWFkaW5nIGNvbnRlbnRcblxuICAgIGluc2VydExlYWRpbmcoaHVuaywgbWluZSwgdGhlaXIpO1xuICAgIGluc2VydExlYWRpbmcoaHVuaywgdGhlaXIsIG1pbmUpOyAvLyBOb3cgaW4gdGhlIG92ZXJsYXAgY29udGVudC4gU2NhbiB0aHJvdWdoIGFuZCBzZWxlY3QgdGhlIGJlc3QgY2hhbmdlcyBmcm9tIGVhY2guXG5cbiAgICB3aGlsZSAobWluZS5pbmRleCA8IG1pbmUubGluZXMubGVuZ3RoICYmIHRoZWlyLmluZGV4IDwgdGhlaXIubGluZXMubGVuZ3RoKSB7XG4gICAgICB2YXIgbWluZUN1cnJlbnQgPSBtaW5lLmxpbmVzW21pbmUuaW5kZXhdLFxuICAgICAgICAgIHRoZWlyQ3VycmVudCA9IHRoZWlyLmxpbmVzW3RoZWlyLmluZGV4XTtcblxuICAgICAgaWYgKChtaW5lQ3VycmVudFswXSA9PT0gJy0nIHx8IG1pbmVDdXJyZW50WzBdID09PSAnKycpICYmICh0aGVpckN1cnJlbnRbMF0gPT09ICctJyB8fCB0aGVpckN1cnJlbnRbMF0gPT09ICcrJykpIHtcbiAgICAgICAgLy8gQm90aCBtb2RpZmllZCAuLi5cbiAgICAgICAgbXV0dWFsQ2hhbmdlKGh1bmssIG1pbmUsIHRoZWlyKTtcbiAgICAgIH0gZWxzZSBpZiAobWluZUN1cnJlbnRbMF0gPT09ICcrJyAmJiB0aGVpckN1cnJlbnRbMF0gPT09ICcgJykge1xuICAgICAgICB2YXIgX2h1bmskbGluZXM7XG5cbiAgICAgICAgLy8gTWluZSBpbnNlcnRlZFxuICAgICAgICAoX2h1bmskbGluZXMgPSBodW5rLmxpbmVzKS5wdXNoLmFwcGx5KF9odW5rJGxpbmVzLCBfdG9Db25zdW1hYmxlQXJyYXkoY29sbGVjdENoYW5nZShtaW5lKSkpO1xuICAgICAgfSBlbHNlIGlmICh0aGVpckN1cnJlbnRbMF0gPT09ICcrJyAmJiBtaW5lQ3VycmVudFswXSA9PT0gJyAnKSB7XG4gICAgICAgIHZhciBfaHVuayRsaW5lczI7XG5cbiAgICAgICAgLy8gVGhlaXJzIGluc2VydGVkXG4gICAgICAgIChfaHVuayRsaW5lczIgPSBodW5rLmxpbmVzKS5wdXNoLmFwcGx5KF9odW5rJGxpbmVzMiwgX3RvQ29uc3VtYWJsZUFycmF5KGNvbGxlY3RDaGFuZ2UodGhlaXIpKSk7XG4gICAgICB9IGVsc2UgaWYgKG1pbmVDdXJyZW50WzBdID09PSAnLScgJiYgdGhlaXJDdXJyZW50WzBdID09PSAnICcpIHtcbiAgICAgICAgLy8gTWluZSByZW1vdmVkIG9yIGVkaXRlZFxuICAgICAgICByZW1vdmFsKGh1bmssIG1pbmUsIHRoZWlyKTtcbiAgICAgIH0gZWxzZSBpZiAodGhlaXJDdXJyZW50WzBdID09PSAnLScgJiYgbWluZUN1cnJlbnRbMF0gPT09ICcgJykge1xuICAgICAgICAvLyBUaGVpciByZW1vdmVkIG9yIGVkaXRlZFxuICAgICAgICByZW1vdmFsKGh1bmssIHRoZWlyLCBtaW5lLCB0cnVlKTtcbiAgICAgIH0gZWxzZSBpZiAobWluZUN1cnJlbnQgPT09IHRoZWlyQ3VycmVudCkge1xuICAgICAgICAvLyBDb250ZXh0IGlkZW50aXR5XG4gICAgICAgIGh1bmsubGluZXMucHVzaChtaW5lQ3VycmVudCk7XG4gICAgICAgIG1pbmUuaW5kZXgrKztcbiAgICAgICAgdGhlaXIuaW5kZXgrKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIENvbnRleHQgbWlzbWF0Y2hcbiAgICAgICAgY29uZmxpY3QoaHVuaywgY29sbGVjdENoYW5nZShtaW5lKSwgY29sbGVjdENoYW5nZSh0aGVpcikpO1xuICAgICAgfVxuICAgIH0gLy8gTm93IHB1c2ggYW55dGhpbmcgdGhhdCBtYXkgYmUgcmVtYWluaW5nXG5cblxuICAgIGluc2VydFRyYWlsaW5nKGh1bmssIG1pbmUpO1xuICAgIGluc2VydFRyYWlsaW5nKGh1bmssIHRoZWlyKTtcbiAgICBjYWxjTGluZUNvdW50KGh1bmspO1xuICB9XG5cbiAgZnVuY3Rpb24gbXV0dWFsQ2hhbmdlKGh1bmssIG1pbmUsIHRoZWlyKSB7XG4gICAgdmFyIG15Q2hhbmdlcyA9IGNvbGxlY3RDaGFuZ2UobWluZSksXG4gICAgICAgIHRoZWlyQ2hhbmdlcyA9IGNvbGxlY3RDaGFuZ2UodGhlaXIpO1xuXG4gICAgaWYgKGFsbFJlbW92ZXMobXlDaGFuZ2VzKSAmJiBhbGxSZW1vdmVzKHRoZWlyQ2hhbmdlcykpIHtcbiAgICAgIC8vIFNwZWNpYWwgY2FzZSBmb3IgcmVtb3ZlIGNoYW5nZXMgdGhhdCBhcmUgc3VwZXJzZXRzIG9mIG9uZSBhbm90aGVyXG4gICAgICBpZiAoYXJyYXlTdGFydHNXaXRoKG15Q2hhbmdlcywgdGhlaXJDaGFuZ2VzKSAmJiBza2lwUmVtb3ZlU3VwZXJzZXQodGhlaXIsIG15Q2hhbmdlcywgbXlDaGFuZ2VzLmxlbmd0aCAtIHRoZWlyQ2hhbmdlcy5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBfaHVuayRsaW5lczM7XG5cbiAgICAgICAgKF9odW5rJGxpbmVzMyA9IGh1bmsubGluZXMpLnB1c2guYXBwbHkoX2h1bmskbGluZXMzLCBfdG9Db25zdW1hYmxlQXJyYXkobXlDaGFuZ2VzKSk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIGlmIChhcnJheVN0YXJ0c1dpdGgodGhlaXJDaGFuZ2VzLCBteUNoYW5nZXMpICYmIHNraXBSZW1vdmVTdXBlcnNldChtaW5lLCB0aGVpckNoYW5nZXMsIHRoZWlyQ2hhbmdlcy5sZW5ndGggLSBteUNoYW5nZXMubGVuZ3RoKSkge1xuICAgICAgICB2YXIgX2h1bmskbGluZXM0O1xuXG4gICAgICAgIChfaHVuayRsaW5lczQgPSBodW5rLmxpbmVzKS5wdXNoLmFwcGx5KF9odW5rJGxpbmVzNCwgX3RvQ29uc3VtYWJsZUFycmF5KHRoZWlyQ2hhbmdlcykpO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGFycmF5RXF1YWwobXlDaGFuZ2VzLCB0aGVpckNoYW5nZXMpKSB7XG4gICAgICB2YXIgX2h1bmskbGluZXM1O1xuXG4gICAgICAoX2h1bmskbGluZXM1ID0gaHVuay5saW5lcykucHVzaC5hcHBseShfaHVuayRsaW5lczUsIF90b0NvbnN1bWFibGVBcnJheShteUNoYW5nZXMpKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbmZsaWN0KGh1bmssIG15Q2hhbmdlcywgdGhlaXJDaGFuZ2VzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92YWwoaHVuaywgbWluZSwgdGhlaXIsIHN3YXApIHtcbiAgICB2YXIgbXlDaGFuZ2VzID0gY29sbGVjdENoYW5nZShtaW5lKSxcbiAgICAgICAgdGhlaXJDaGFuZ2VzID0gY29sbGVjdENvbnRleHQodGhlaXIsIG15Q2hhbmdlcyk7XG5cbiAgICBpZiAodGhlaXJDaGFuZ2VzLm1lcmdlZCkge1xuICAgICAgdmFyIF9odW5rJGxpbmVzNjtcblxuICAgICAgKF9odW5rJGxpbmVzNiA9IGh1bmsubGluZXMpLnB1c2guYXBwbHkoX2h1bmskbGluZXM2LCBfdG9Db25zdW1hYmxlQXJyYXkodGhlaXJDaGFuZ2VzLm1lcmdlZCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25mbGljdChodW5rLCBzd2FwID8gdGhlaXJDaGFuZ2VzIDogbXlDaGFuZ2VzLCBzd2FwID8gbXlDaGFuZ2VzIDogdGhlaXJDaGFuZ2VzKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjb25mbGljdChodW5rLCBtaW5lLCB0aGVpcikge1xuICAgIGh1bmsuY29uZmxpY3QgPSB0cnVlO1xuICAgIGh1bmsubGluZXMucHVzaCh7XG4gICAgICBjb25mbGljdDogdHJ1ZSxcbiAgICAgIG1pbmU6IG1pbmUsXG4gICAgICB0aGVpcnM6IHRoZWlyXG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBpbnNlcnRMZWFkaW5nKGh1bmssIGluc2VydCwgdGhlaXIpIHtcbiAgICB3aGlsZSAoaW5zZXJ0Lm9mZnNldCA8IHRoZWlyLm9mZnNldCAmJiBpbnNlcnQuaW5kZXggPCBpbnNlcnQubGluZXMubGVuZ3RoKSB7XG4gICAgICB2YXIgbGluZSA9IGluc2VydC5saW5lc1tpbnNlcnQuaW5kZXgrK107XG4gICAgICBodW5rLmxpbmVzLnB1c2gobGluZSk7XG4gICAgICBpbnNlcnQub2Zmc2V0Kys7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaW5zZXJ0VHJhaWxpbmcoaHVuaywgaW5zZXJ0KSB7XG4gICAgd2hpbGUgKGluc2VydC5pbmRleCA8IGluc2VydC5saW5lcy5sZW5ndGgpIHtcbiAgICAgIHZhciBsaW5lID0gaW5zZXJ0LmxpbmVzW2luc2VydC5pbmRleCsrXTtcbiAgICAgIGh1bmsubGluZXMucHVzaChsaW5lKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjb2xsZWN0Q2hhbmdlKHN0YXRlKSB7XG4gICAgdmFyIHJldCA9IFtdLFxuICAgICAgICBvcGVyYXRpb24gPSBzdGF0ZS5saW5lc1tzdGF0ZS5pbmRleF1bMF07XG5cbiAgICB3aGlsZSAoc3RhdGUuaW5kZXggPCBzdGF0ZS5saW5lcy5sZW5ndGgpIHtcbiAgICAgIHZhciBsaW5lID0gc3RhdGUubGluZXNbc3RhdGUuaW5kZXhdOyAvLyBHcm91cCBhZGRpdGlvbnMgdGhhdCBhcmUgaW1tZWRpYXRlbHkgYWZ0ZXIgc3VidHJhY3Rpb25zIGFuZCB0cmVhdCB0aGVtIGFzIG9uZSBcImF0b21pY1wiIG1vZGlmeSBjaGFuZ2UuXG5cbiAgICAgIGlmIChvcGVyYXRpb24gPT09ICctJyAmJiBsaW5lWzBdID09PSAnKycpIHtcbiAgICAgICAgb3BlcmF0aW9uID0gJysnO1xuICAgICAgfVxuXG4gICAgICBpZiAob3BlcmF0aW9uID09PSBsaW5lWzBdKSB7XG4gICAgICAgIHJldC5wdXNoKGxpbmUpO1xuICAgICAgICBzdGF0ZS5pbmRleCsrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbGxlY3RDb250ZXh0KHN0YXRlLCBtYXRjaENoYW5nZXMpIHtcbiAgICB2YXIgY2hhbmdlcyA9IFtdLFxuICAgICAgICBtZXJnZWQgPSBbXSxcbiAgICAgICAgbWF0Y2hJbmRleCA9IDAsXG4gICAgICAgIGNvbnRleHRDaGFuZ2VzID0gZmFsc2UsXG4gICAgICAgIGNvbmZsaWN0ZWQgPSBmYWxzZTtcblxuICAgIHdoaWxlIChtYXRjaEluZGV4IDwgbWF0Y2hDaGFuZ2VzLmxlbmd0aCAmJiBzdGF0ZS5pbmRleCA8IHN0YXRlLmxpbmVzLmxlbmd0aCkge1xuICAgICAgdmFyIGNoYW5nZSA9IHN0YXRlLmxpbmVzW3N0YXRlLmluZGV4XSxcbiAgICAgICAgICBtYXRjaCA9IG1hdGNoQ2hhbmdlc1ttYXRjaEluZGV4XTsgLy8gT25jZSB3ZSd2ZSBoaXQgb3VyIGFkZCwgdGhlbiB3ZSBhcmUgZG9uZVxuXG4gICAgICBpZiAobWF0Y2hbMF0gPT09ICcrJykge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY29udGV4dENoYW5nZXMgPSBjb250ZXh0Q2hhbmdlcyB8fCBjaGFuZ2VbMF0gIT09ICcgJztcbiAgICAgIG1lcmdlZC5wdXNoKG1hdGNoKTtcbiAgICAgIG1hdGNoSW5kZXgrKzsgLy8gQ29uc3VtZSBhbnkgYWRkaXRpb25zIGluIHRoZSBvdGhlciBibG9jayBhcyBhIGNvbmZsaWN0IHRvIGF0dGVtcHRcbiAgICAgIC8vIHRvIHB1bGwgaW4gdGhlIHJlbWFpbmluZyBjb250ZXh0IGFmdGVyIHRoaXNcblxuICAgICAgaWYgKGNoYW5nZVswXSA9PT0gJysnKSB7XG4gICAgICAgIGNvbmZsaWN0ZWQgPSB0cnVlO1xuXG4gICAgICAgIHdoaWxlIChjaGFuZ2VbMF0gPT09ICcrJykge1xuICAgICAgICAgIGNoYW5nZXMucHVzaChjaGFuZ2UpO1xuICAgICAgICAgIGNoYW5nZSA9IHN0YXRlLmxpbmVzWysrc3RhdGUuaW5kZXhdO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtYXRjaC5zdWJzdHIoMSkgPT09IGNoYW5nZS5zdWJzdHIoMSkpIHtcbiAgICAgICAgY2hhbmdlcy5wdXNoKGNoYW5nZSk7XG4gICAgICAgIHN0YXRlLmluZGV4Kys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25mbGljdGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoKG1hdGNoQ2hhbmdlc1ttYXRjaEluZGV4XSB8fCAnJylbMF0gPT09ICcrJyAmJiBjb250ZXh0Q2hhbmdlcykge1xuICAgICAgY29uZmxpY3RlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZsaWN0ZWQpIHtcbiAgICAgIHJldHVybiBjaGFuZ2VzO1xuICAgIH1cblxuICAgIHdoaWxlIChtYXRjaEluZGV4IDwgbWF0Y2hDaGFuZ2VzLmxlbmd0aCkge1xuICAgICAgbWVyZ2VkLnB1c2gobWF0Y2hDaGFuZ2VzW21hdGNoSW5kZXgrK10pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBtZXJnZWQ6IG1lcmdlZCxcbiAgICAgIGNoYW5nZXM6IGNoYW5nZXNcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gYWxsUmVtb3ZlcyhjaGFuZ2VzKSB7XG4gICAgcmV0dXJuIGNoYW5nZXMucmVkdWNlKGZ1bmN0aW9uIChwcmV2LCBjaGFuZ2UpIHtcbiAgICAgIHJldHVybiBwcmV2ICYmIGNoYW5nZVswXSA9PT0gJy0nO1xuICAgIH0sIHRydWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2tpcFJlbW92ZVN1cGVyc2V0KHN0YXRlLCByZW1vdmVDaGFuZ2VzLCBkZWx0YSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGVsdGE7IGkrKykge1xuICAgICAgdmFyIGNoYW5nZUNvbnRlbnQgPSByZW1vdmVDaGFuZ2VzW3JlbW92ZUNoYW5nZXMubGVuZ3RoIC0gZGVsdGEgKyBpXS5zdWJzdHIoMSk7XG5cbiAgICAgIGlmIChzdGF0ZS5saW5lc1tzdGF0ZS5pbmRleCArIGldICE9PSAnICcgKyBjaGFuZ2VDb250ZW50KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0ZS5pbmRleCArPSBkZWx0YTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbGNPbGROZXdMaW5lQ291bnQobGluZXMpIHtcbiAgICB2YXIgb2xkTGluZXMgPSAwO1xuICAgIHZhciBuZXdMaW5lcyA9IDA7XG4gICAgbGluZXMuZm9yRWFjaChmdW5jdGlvbiAobGluZSkge1xuICAgICAgaWYgKHR5cGVvZiBsaW5lICE9PSAnc3RyaW5nJykge1xuICAgICAgICB2YXIgbXlDb3VudCA9IGNhbGNPbGROZXdMaW5lQ291bnQobGluZS5taW5lKTtcbiAgICAgICAgdmFyIHRoZWlyQ291bnQgPSBjYWxjT2xkTmV3TGluZUNvdW50KGxpbmUudGhlaXJzKTtcblxuICAgICAgICBpZiAob2xkTGluZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmIChteUNvdW50Lm9sZExpbmVzID09PSB0aGVpckNvdW50Lm9sZExpbmVzKSB7XG4gICAgICAgICAgICBvbGRMaW5lcyArPSBteUNvdW50Lm9sZExpbmVzO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvbGRMaW5lcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmV3TGluZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmIChteUNvdW50Lm5ld0xpbmVzID09PSB0aGVpckNvdW50Lm5ld0xpbmVzKSB7XG4gICAgICAgICAgICBuZXdMaW5lcyArPSBteUNvdW50Lm5ld0xpbmVzO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXdMaW5lcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChuZXdMaW5lcyAhPT0gdW5kZWZpbmVkICYmIChsaW5lWzBdID09PSAnKycgfHwgbGluZVswXSA9PT0gJyAnKSkge1xuICAgICAgICAgIG5ld0xpbmVzKys7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob2xkTGluZXMgIT09IHVuZGVmaW5lZCAmJiAobGluZVswXSA9PT0gJy0nIHx8IGxpbmVbMF0gPT09ICcgJykpIHtcbiAgICAgICAgICBvbGRMaW5lcysrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9sZExpbmVzOiBvbGRMaW5lcyxcbiAgICAgIG5ld0xpbmVzOiBuZXdMaW5lc1xuICAgIH07XG4gIH1cblxuICAvLyBTZWU6IGh0dHA6Ly9jb2RlLmdvb2dsZS5jb20vcC9nb29nbGUtZGlmZi1tYXRjaC1wYXRjaC93aWtpL0FQSVxuICBmdW5jdGlvbiBjb252ZXJ0Q2hhbmdlc1RvRE1QKGNoYW5nZXMpIHtcbiAgICB2YXIgcmV0ID0gW10sXG4gICAgICAgIGNoYW5nZSxcbiAgICAgICAgb3BlcmF0aW9uO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGFuZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGFuZ2UgPSBjaGFuZ2VzW2ldO1xuXG4gICAgICBpZiAoY2hhbmdlLmFkZGVkKSB7XG4gICAgICAgIG9wZXJhdGlvbiA9IDE7XG4gICAgICB9IGVsc2UgaWYgKGNoYW5nZS5yZW1vdmVkKSB7XG4gICAgICAgIG9wZXJhdGlvbiA9IC0xO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3BlcmF0aW9uID0gMDtcbiAgICAgIH1cblxuICAgICAgcmV0LnB1c2goW29wZXJhdGlvbiwgY2hhbmdlLnZhbHVlXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbnZlcnRDaGFuZ2VzVG9YTUwoY2hhbmdlcykge1xuICAgIHZhciByZXQgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hhbmdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNoYW5nZSA9IGNoYW5nZXNbaV07XG5cbiAgICAgIGlmIChjaGFuZ2UuYWRkZWQpIHtcbiAgICAgICAgcmV0LnB1c2goJzxpbnM+Jyk7XG4gICAgICB9IGVsc2UgaWYgKGNoYW5nZS5yZW1vdmVkKSB7XG4gICAgICAgIHJldC5wdXNoKCc8ZGVsPicpO1xuICAgICAgfVxuXG4gICAgICByZXQucHVzaChlc2NhcGVIVE1MKGNoYW5nZS52YWx1ZSkpO1xuXG4gICAgICBpZiAoY2hhbmdlLmFkZGVkKSB7XG4gICAgICAgIHJldC5wdXNoKCc8L2lucz4nKTtcbiAgICAgIH0gZWxzZSBpZiAoY2hhbmdlLnJlbW92ZWQpIHtcbiAgICAgICAgcmV0LnB1c2goJzwvZGVsPicpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXQuam9pbignJyk7XG4gIH1cblxuICBmdW5jdGlvbiBlc2NhcGVIVE1MKHMpIHtcbiAgICB2YXIgbiA9IHM7XG4gICAgbiA9IG4ucmVwbGFjZSgvJi9nLCAnJmFtcDsnKTtcbiAgICBuID0gbi5yZXBsYWNlKC88L2csICcmbHQ7Jyk7XG4gICAgbiA9IG4ucmVwbGFjZSgvPi9nLCAnJmd0OycpO1xuICAgIG4gPSBuLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKTtcbiAgICByZXR1cm4gbjtcbiAgfVxuXG4gIGV4cG9ydHMuRGlmZiA9IERpZmY7XG4gIGV4cG9ydHMuYXBwbHlQYXRjaCA9IGFwcGx5UGF0Y2g7XG4gIGV4cG9ydHMuYXBwbHlQYXRjaGVzID0gYXBwbHlQYXRjaGVzO1xuICBleHBvcnRzLmNhbm9uaWNhbGl6ZSA9IGNhbm9uaWNhbGl6ZTtcbiAgZXhwb3J0cy5jb252ZXJ0Q2hhbmdlc1RvRE1QID0gY29udmVydENoYW5nZXNUb0RNUDtcbiAgZXhwb3J0cy5jb252ZXJ0Q2hhbmdlc1RvWE1MID0gY29udmVydENoYW5nZXNUb1hNTDtcbiAgZXhwb3J0cy5jcmVhdGVQYXRjaCA9IGNyZWF0ZVBhdGNoO1xuICBleHBvcnRzLmNyZWF0ZVR3b0ZpbGVzUGF0Y2ggPSBjcmVhdGVUd29GaWxlc1BhdGNoO1xuICBleHBvcnRzLmRpZmZBcnJheXMgPSBkaWZmQXJyYXlzO1xuICBleHBvcnRzLmRpZmZDaGFycyA9IGRpZmZDaGFycztcbiAgZXhwb3J0cy5kaWZmQ3NzID0gZGlmZkNzcztcbiAgZXhwb3J0cy5kaWZmSnNvbiA9IGRpZmZKc29uO1xuICBleHBvcnRzLmRpZmZMaW5lcyA9IGRpZmZMaW5lcztcbiAgZXhwb3J0cy5kaWZmU2VudGVuY2VzID0gZGlmZlNlbnRlbmNlcztcbiAgZXhwb3J0cy5kaWZmVHJpbW1lZExpbmVzID0gZGlmZlRyaW1tZWRMaW5lcztcbiAgZXhwb3J0cy5kaWZmV29yZHMgPSBkaWZmV29yZHM7XG4gIGV4cG9ydHMuZGlmZldvcmRzV2l0aFNwYWNlID0gZGlmZldvcmRzV2l0aFNwYWNlO1xuICBleHBvcnRzLm1lcmdlID0gbWVyZ2U7XG4gIGV4cG9ydHMucGFyc2VQYXRjaCA9IHBhcnNlUGF0Y2g7XG4gIGV4cG9ydHMuc3RydWN0dXJlZFBhdGNoID0gc3RydWN0dXJlZFBhdGNoO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbn0pKSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImltcG9ydCBcIi4uL3N0eWxlcy9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IEFkdmFuY2VkQmxhbmtzIGZyb20gJy4uL3NjcmlwdHMvYXBwJztcclxuXHJcbi8vIExvYWQgbGlicmFyeVxyXG5INVAgPSBINVAgfHwge307XHJcbkg1UC5BZHZhbmNlZEJsYW5rcyA9IEFkdmFuY2VkQmxhbmtzOyIsImV4cG9ydCBmdW5jdGlvbiBnZXRMb25nZXN0U3RyaW5nKHN0cmluZ3M6IHN0cmluZ1tdKTogc3RyaW5nIHtcclxuICByZXR1cm4gc3RyaW5ncy5yZWR1Y2UoKHByZXYsIGN1cnJlbnQpID0+IGN1cnJlbnQubGVuZ3RoID4gcHJldi5sZW5ndGggPyBjdXJyZW50IDogcHJldiwgXCJcIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaHVmZmxlQXJyYXkoYXJyYXk6IGFueVtdKSB7XHJcbiAgZm9yICh2YXIgaSA9IGFycmF5Lmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcclxuICAgIHZhciBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XHJcbiAgICB2YXIgdGVtcCA9IGFycmF5W2ldO1xyXG4gICAgYXJyYXlbaV0gPSBhcnJheVtqXTtcclxuICAgIGFycmF5W2pdID0gdGVtcDtcclxuICB9XHJcbiAgcmV0dXJuIGFycmF5O1xyXG59IiwiLy8gVE9ETyBjYW4gd2UganVzdCBkZWNsYXJlIHRoZSBrZXlkb3duSGFuZGxlciBvbmNlPyB1c2luZyBgdGhpc2A/XHJcbmZ1bmN0aW9uIG1ha2VLZXlEZWZpbml0aW9uKGNvZGU/OiBudW1iZXIpIHtcclxuICByZXR1cm4gKG5vZGUsIGZpcmUpID0+IHtcclxuICAgIGZ1bmN0aW9uIGtleWRvd25IYW5kbGVyKGV2ZW50KSB7XHJcbiAgICAgIHZhciB3aGljaCA9IGV2ZW50LndoaWNoIHx8IGV2ZW50LmtleUNvZGU7XHJcblxyXG4gICAgICBpZiAoY29kZSAmJiB3aGljaCA9PT0gY29kZSkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGZpcmUoe1xyXG4gICAgICAgICAgbm9kZSxcclxuICAgICAgICAgIG9yaWdpbmFsOiBldmVudFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKCFjb2RlICYmIFsxNiwgMTcsIDE4LCAzNSwgMzYsIDEzLCA5LCAyNywgMzIsIDM3LCAzOSwgNDAsIDM4XS5maWx0ZXIoYyA9PiBjID09PSB3aGljaCkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgZmlyZSh7XHJcbiAgICAgICAgICBub2RlLFxyXG4gICAgICAgICAgb3JpZ2luYWw6IGV2ZW50XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBrZXlkb3duSGFuZGxlciwgZmFsc2UpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRlYXJkb3duKCkge1xyXG4gICAgICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGtleWRvd25IYW5kbGVyLCBmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGVudGVyID0gbWFrZUtleURlZmluaXRpb24oMTMpO1xyXG5leHBvcnQgY29uc3QgdGFiID0gbWFrZUtleURlZmluaXRpb24oOSk7XHJcbmV4cG9ydCBjb25zdCBlc2NhcGUgPSBtYWtlS2V5RGVmaW5pdGlvbigyNyk7XHJcbmV4cG9ydCBjb25zdCBzcGFjZSA9IG1ha2VLZXlEZWZpbml0aW9uKDMyKTtcclxuXHJcbmV4cG9ydCBjb25zdCBsZWZ0YXJyb3cgPSBtYWtlS2V5RGVmaW5pdGlvbigzNyk7XHJcbmV4cG9ydCBjb25zdCByaWdodGFycm93ID0gbWFrZUtleURlZmluaXRpb24oMzkpO1xyXG5leHBvcnQgY29uc3QgZG93bmFycm93ID0gbWFrZUtleURlZmluaXRpb24oNDApO1xyXG5leHBvcnQgY29uc3QgdXBhcnJvdyA9IG1ha2VLZXlEZWZpbml0aW9uKDM4KTtcclxuXHJcbmV4cG9ydCBjb25zdCBhbnlrZXkgPSBtYWtlS2V5RGVmaW5pdGlvbigpOyIsImltcG9ydCB7IEJsYW5rTG9hZGVyIH0gZnJvbSAnLi9jb250ZW50LWxvYWRlcnMvYmxhbmstbG9hZGVyJztcclxuaW1wb3J0IHsgSDVQRGF0YVJlcG9zaXRvcnksIElEYXRhUmVwb3NpdG9yeSB9IGZyb20gJy4vc2VydmljZXMvZGF0YS1yZXBvc2l0b3J5JztcclxuaW1wb3J0IHsgQ2xvemVDb250cm9sbGVyIH0gZnJvbSAnLi9jb250cm9sbGVycy9jbG96ZS1jb250cm9sbGVyJztcclxuaW1wb3J0IHsgSDVQTG9jYWxpemF0aW9uLCBMb2NhbGl6YXRpb25MYWJlbHMsIExvY2FsaXphdGlvblN0cnVjdHVyZXMgfSBmcm9tIFwiLi9zZXJ2aWNlcy9sb2NhbGl6YXRpb25cIjtcclxuaW1wb3J0IHsgSVNldHRpbmdzLCBINVBTZXR0aW5ncyB9IGZyb20gXCIuL3NlcnZpY2VzL3NldHRpbmdzXCI7XHJcbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9tZXNzYWdlLXNlcnZpY2UnO1xyXG5pbXBvcnQgeyBVbnJ3YXBwZXIgfSBmcm9tICcuL2hlbHBlcnMvdW53cmFwcGVyJztcclxuaW1wb3J0IHsgWEFQSUFjdGl2aXR5RGVmaW5pdGlvbiB9IGZyb20gJy4vbW9kZWxzL3hhcGknO1xyXG5pbXBvcnQgeyBleHRlbmQgfSBmcm9tICcuL2hlbHBlcnMvZXh0ZW5kJztcclxuXHJcbmVudW0gU3RhdGVzIHtcclxuICBvbmdvaW5nID0gJ29uZ29pbmcnLFxyXG4gIGNoZWNraW5nID0gJ2NoZWNraW5nJyxcclxuICBzaG93aW5nU29sdXRpb25zID0gJ3Nob3dpbmctc29sdXRpb24nLFxyXG4gIGZpbmlzaGVkID0gJ2ZpbmlzaGVkJyxcclxuICBzaG93aW5nU29sdXRpb25zRW1iZWRkZWQgPSAnc2hvd2luZy1zb2x1dGlvbi1lbWJlZGRlZCdcclxufVxyXG5cclxuY29uc3QgWEFQSV9BTFRFUk5BVElWRV9FWFRFTlNJT04gPSAnaHR0cHM6Ly9oNXAub3JnL3gtYXBpL2FsdGVybmF0aXZlcyc7XHJcbmNvbnN0IFhBUElfQ0FTRV9TRU5TSVRJVklUWSA9ICdodHRwczovL2g1cC5vcmcveC1hcGkvY2FzZS1zZW5zaXRpdml0eSc7XHJcbmNvbnN0IFhBUElfUkVQT1JUSU5HX1ZFUlNJT05fRVhURU5TSU9OID0gJ2h0dHBzOi8vaDVwLm9yZy94LWFwaS9oNXAtcmVwb3J0aW5nLXZlcnNpb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWR2YW5jZWRCbGFua3MgZXh0ZW5kcyAoSDVQLlF1ZXN0aW9uIGFzIHsgbmV3KCk6IGFueTsgfSkge1xyXG5cclxuICBwcml2YXRlIGNsb3plQ29udHJvbGxlcjogQ2xvemVDb250cm9sbGVyO1xyXG4gIHByaXZhdGUgcmVwb3NpdG9yeTogSURhdGFSZXBvc2l0b3J5O1xyXG4gIHByaXZhdGUgc2V0dGluZ3M6IElTZXR0aW5ncztcclxuICBwcml2YXRlIGxvY2FsaXphdGlvbjogSDVQTG9jYWxpemF0aW9uO1xyXG4gIHByaXZhdGUgbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlO1xyXG5cclxuICBwcml2YXRlIGpRdWVyeTtcclxuXHJcbiAgcHJpdmF0ZSBjb250ZW50SWQ6IHN0cmluZztcclxuICBwcml2YXRlIHByZXZpb3VzU3RhdGU6IGFueTtcclxuICBwcml2YXRlIHN0YXRlOiBTdGF0ZXM7XHJcblxyXG4gIC8qKlxyXG4gICAqIEluZGljYXRlcyBpZiB1c2VyIGhhcyBlbnRlcmVkIGFueSBhbnN3ZXIgc28gZmFyLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgYW5zd2VyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogQGNvbnN0cnVjdG9yXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge29iamVjdH0gY29uZmlnXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnRJZFxyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZW50RGF0YVxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogYW55LCBjb250ZW50SWQ6IHN0cmluZywgY29udGVudERhdGE6IGFueSA9IHt9KSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIC8vIFNldCBtYW5kYXRvcnkgZGVmYXVsdCB2YWx1ZXMgZm9yIGVkaXRvciB3aWRnZXRzIHRoYXQgY3JlYXRlIGNvbnRlbnQgdHlwZSBpbnN0YW5jZXNcclxuICAgIGNvbmZpZyA9IGV4dGVuZCh7XHJcbiAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICBibGFua3NUZXh0OiAnJ1xyXG4gICAgICB9LFxyXG4gICAgICBiZWhhdmlvdXI6IHtcclxuICAgICAgICBtb2RlOiAndHlwaW5nJyxcclxuICAgICAgICBzZWxlY3RBbHRlcm5hdGl2ZXM6ICdhbHRlcm5hdGl2ZXMnXHJcbiAgICAgIH1cclxuICAgIH0sIGNvbmZpZyk7XHJcblxyXG4gICAgdGhpcy5qUXVlcnkgPSBINVAualF1ZXJ5O1xyXG4gICAgdGhpcy5jb250ZW50SWQgPSBjb250ZW50SWQ7XHJcblxyXG4gICAgbGV0IHVud3JhcHBlciA9IG5ldyBVbnJ3YXBwZXIodGhpcy5qUXVlcnkpO1xyXG5cclxuICAgIHRoaXMuc2V0dGluZ3MgPSBuZXcgSDVQU2V0dGluZ3MoY29uZmlnKTtcclxuICAgIHRoaXMubG9jYWxpemF0aW9uID0gbmV3IEg1UExvY2FsaXphdGlvbihjb25maWcpO1xyXG4gICAgdGhpcy5yZXBvc2l0b3J5ID0gbmV3IEg1UERhdGFSZXBvc2l0b3J5KGNvbmZpZywgdGhpcy5zZXR0aW5ncywgdGhpcy5sb2NhbGl6YXRpb24sIDxKUXVlcnlTdGF0aWM+dGhpcy5qUXVlcnksIHVud3JhcHBlcik7XHJcbiAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlID0gbmV3IE1lc3NhZ2VTZXJ2aWNlKHRoaXMualF1ZXJ5KTtcclxuICAgIEJsYW5rTG9hZGVyLmluaXRpYWxpemUodGhpcy5zZXR0aW5ncywgdGhpcy5sb2NhbGl6YXRpb24sIHRoaXMualF1ZXJ5LCB0aGlzLm1lc3NhZ2VTZXJ2aWNlKTtcclxuXHJcbiAgICB0aGlzLmNsb3plQ29udHJvbGxlciA9IG5ldyBDbG96ZUNvbnRyb2xsZXIodGhpcy5yZXBvc2l0b3J5LCB0aGlzLnNldHRpbmdzLCB0aGlzLmxvY2FsaXphdGlvbiwgdGhpcy5tZXNzYWdlU2VydmljZSk7XHJcblxyXG4gICAgdGhpcy5jbG96ZUNvbnRyb2xsZXIub25TY29yZUNoYW5nZWQgPSB0aGlzLm9uU2NvcmVDaGFuZ2VkO1xyXG4gICAgdGhpcy5jbG96ZUNvbnRyb2xsZXIub25Tb2x2ZWQgPSB0aGlzLm9uU29sdmVkO1xyXG4gICAgdGhpcy5jbG96ZUNvbnRyb2xsZXIub25BdXRvQ2hlY2tlZCA9IHRoaXMub25BdXRvQ2hlY2tlZDtcclxuICAgIHRoaXMuY2xvemVDb250cm9sbGVyLm9uVHlwZWQgPSB0aGlzLm9uVHlwZWQ7XHJcblxyXG4gICAgaWYgKGNvbnRlbnREYXRhICYmIGNvbnRlbnREYXRhLnByZXZpb3VzU3RhdGUpXHJcbiAgICAgIHRoaXMucHJldmlvdXNTdGF0ZSA9IGNvbnRlbnREYXRhLnByZXZpb3VzU3RhdGU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIE92ZXJyaWRlcyB0aGUgYXR0YWNoIG1ldGhvZCBvZiB0aGUgc3VwZXJjbGFzcyAoSDVQLlF1ZXN0aW9uKSBhbmQgY2FsbHMgaXRcclxuICAgICogYXQgdGhlIHNhbWUgdGltZS4gKGVxdWl2YWxlbnQgdG8gc3VwZXIuYXR0YWNoKCRjb250YWluZXIpKS5cclxuICAgICogVGhpcyBpcyBuZWNlc3NhcnksIGFzIFJhY3RpdmUgbmVlZHMgdG8gYmUgaW5pdGlhbGl6ZWQgd2l0aCBhbiBleGlzdGluZyBET01cclxuICAgICogZWxlbWVudC4gRE9NIGVsZW1lbnRzIGFyZSBjcmVhdGVkIGluIEg1UC5RdWVzdGlvbi5hdHRhY2gsIHNvIGluaXRpYWxpemluZ1xyXG4gICAgKiBSYWN0aXZlIGluIHJlZ2lzdGVyRG9tRWxlbWVudHMgZG9lc24ndCB3b3JrLlxyXG4gICAgKi9cclxuICAgIHRoaXMuYXR0YWNoID0gKChvcmlnaW5hbCkgPT4ge1xyXG4gICAgICByZXR1cm4gKCRjb250YWluZXIpID0+IHtcclxuICAgICAgICBvcmlnaW5hbCgkY29udGFpbmVyKTtcclxuICAgICAgICB0aGlzLmNsb3plQ29udHJvbGxlci5pbml0aWFsaXplKHRoaXMuY29udGFpbmVyLmdldCgwKSwgJGNvbnRhaW5lcik7XHJcbiAgICAgICAgaWYgKHRoaXMuY2xvemVDb250cm9sbGVyLmRlc2VyaWFsaXplQ2xvemUodGhpcy5wcmV2aW91c1N0YXRlKSkge1xyXG4gICAgICAgICAgdGhpcy5hbnN3ZXJlZCA9IHRoaXMuY2xvemVDb250cm9sbGVyLmlzRmlsbGVkT3V0O1xyXG4gICAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuYXV0b0NoZWNrKVxyXG4gICAgICAgICAgICB0aGlzLm9uQ2hlY2tBbnN3ZXIoKTtcclxuICAgICAgICAgIHRoaXMudG9nZ2xlQnV0dG9uVmlzaWJpbGl0eSh0aGlzLnN0YXRlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pKHRoaXMuYXR0YWNoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENhbGxlZCBmcm9tIG91dHNpZGUgd2hlbiB0aGUgc2NvcmUgb2YgdGhlIGNsb3plIGhhcyBjaGFuZ2VkLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgb25TY29yZUNoYW5nZWQgPSAoc2NvcmU6IG51bWJlciwgbWF4U2NvcmU6IG51bWJlcikgPT4ge1xyXG4gICAgaWYgKHRoaXMuY2xvemVDb250cm9sbGVyLmlzRnVsbHlGaWxsZWRPdXQpIHtcclxuICAgICAgdGhpcy50cmFuc2l0aW9uU3RhdGUoKTtcclxuICAgICAgaWYgKHRoaXMuc3RhdGUgIT09IFN0YXRlcy5maW5pc2hlZClcclxuICAgICAgICB0aGlzLnN0YXRlID0gU3RhdGVzLmNoZWNraW5nO1xyXG4gICAgICB0aGlzLnNob3dGZWVkYmFjaygpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0RmVlZGJhY2soXCJcIiwgc2NvcmUsIG1heFNjb3JlKTtcclxuICAgIH1cclxuICAgIHRoaXMudHJhbnNpdGlvblN0YXRlKCk7XHJcbiAgICB0aGlzLnRvZ2dsZUJ1dHRvblZpc2liaWxpdHkodGhpcy5zdGF0ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uU29sdmVkKCkge1xyXG5cclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25UeXBlZCA9ICgpID0+IHtcclxuICAgIGlmICh0aGlzLnN0YXRlID09PSBTdGF0ZXMuY2hlY2tpbmcpIHtcclxuICAgICAgdGhpcy5zdGF0ZSA9IFN0YXRlcy5vbmdvaW5nO1xyXG4gICAgICB0aGlzLnRvZ2dsZUJ1dHRvblZpc2liaWxpdHkodGhpcy5zdGF0ZSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnRyaWdnZXJYQVBJKCdpbnRlcmFjdGVkJyk7XHJcbiAgICB0aGlzLmFuc3dlcmVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25BdXRvQ2hlY2tlZCA9ICgpID0+IHtcclxuICAgIHRoaXMudHJpZ2dlclhBUEkoJ2ludGVyYWN0ZWQnKTtcclxuICAgIHRoaXMudHJpZ2dlclhBUElBbnN3ZXJlZCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2FsbGVkIGJ5IEg1UC5RdWVzdGlvbi5hdHRhY2goKS4gQ3JlYXRlcyBhbGwgY29udGVudCBlbGVtZW50cyBhbmQgcmVnaXN0ZXJzIHRoZW1cclxuICAgKiB3aXRoIEg1UC5RdWVzdGlvbi5cclxuICAgKi9cclxuICByZWdpc3RlckRvbUVsZW1lbnRzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5yZWdpc3Rlck1lZGlhKCk7XHJcbiAgICB0aGlzLnNldEludHJvZHVjdGlvbih0aGlzLnJlcG9zaXRvcnkuZ2V0VGFza0Rlc2NyaXB0aW9uKCkpO1xyXG5cclxuICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5qUXVlcnkoXCI8ZGl2Lz5cIiwgeyBcImNsYXNzXCI6IFwiaDVwLWFkdmFuY2VkLWJsYW5rc1wiIH0pO1xyXG4gICAgdGhpcy5zZXRDb250ZW50KHRoaXMuY29udGFpbmVyKTtcclxuICAgIHRoaXMucmVnaXN0ZXJCdXR0b25zKCk7XHJcblxyXG4gICAgdGhpcy5tb3ZlVG9TdGF0ZShTdGF0ZXMub25nb2luZyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcmV0dXJucyBKUXVlcnkgLSBUaGUgb3V0ZXIgaDVwIGNvbnRhaW5lci4gVGhlIGxpYnJhcnkgY2FuIGFkZCBkaWFsb2d1ZXMgdG8gdGhpc1xyXG4gICAqIGVsZW1lbnQuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBnZXRINXBDb250YWluZXIoKTogSlF1ZXJ5IHtcclxuICAgIHZhciAkY29udGVudCA9IHRoaXMualF1ZXJ5KCdbZGF0YS1jb250ZW50LWlkPVwiJyArIHRoaXMuY29udGVudElkICsgJ1wiXS5oNXAtY29udGVudCcpO1xyXG4gICAgdmFyICRjb250YWluZXJQYXJlbnRzID0gJGNvbnRlbnQucGFyZW50cygnLmg1cC1jb250YWluZXInKTtcclxuXHJcbiAgICAvLyBzZWxlY3QgZmluZCBjb250YWluZXIgdG8gYXR0YWNoIGRpYWxvZ3MgdG9cclxuICAgIHZhciAkY29udGFpbmVyO1xyXG4gICAgaWYgKCRjb250YWluZXJQYXJlbnRzLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAvLyB1c2UgcGFyZW50IGhpZ2hlc3QgdXAgaWYgYW55XHJcbiAgICAgICRjb250YWluZXIgPSAkY29udGFpbmVyUGFyZW50cy5sYXN0KCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICgkY29udGVudC5sZW5ndGggIT09IDApIHtcclxuICAgICAgJGNvbnRhaW5lciA9ICRjb250ZW50O1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICRjb250YWluZXIgPSB0aGlzLmpRdWVyeShkb2N1bWVudC5ib2R5KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gJGNvbnRhaW5lcjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVnaXN0ZXJNZWRpYSgpIHtcclxuICAgIHZhciBtZWRpYSA9IHRoaXMucmVwb3NpdG9yeS5nZXRNZWRpYSgpO1xyXG4gICAgaWYgKCFtZWRpYSB8fCAhbWVkaWEubGlicmFyeSlcclxuICAgICAgcmV0dXJuO1xyXG5cclxuICAgIHZhciB0eXBlID0gbWVkaWEubGlicmFyeS5zcGxpdCgnICcpWzBdO1xyXG4gICAgaWYgKHR5cGUgPT09ICdINVAuSW1hZ2UnKSB7XHJcbiAgICAgIGlmIChtZWRpYS5wYXJhbXMuZmlsZSkge1xyXG4gICAgICAgIHRoaXMuc2V0SW1hZ2UobWVkaWEucGFyYW1zLmZpbGUucGF0aCwge1xyXG4gICAgICAgICAgZGlzYWJsZUltYWdlWm9vbWluZzogdGhpcy5zZXR0aW5ncy5kaXNhYmxlSW1hZ2Vab29taW5nLFxyXG4gICAgICAgICAgYWx0OiBtZWRpYS5wYXJhbXMuYWx0XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdINVAuVmlkZW8nKSB7XHJcbiAgICAgIGlmIChtZWRpYS5wYXJhbXMuc291cmNlcykge1xyXG4gICAgICAgIHRoaXMuc2V0VmlkZW8obWVkaWEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlZ2lzdGVyQnV0dG9ucygpIHtcclxuICAgIHZhciAkY29udGFpbmVyID0gdGhpcy5nZXRINXBDb250YWluZXIoKTtcclxuXHJcbiAgICBpZiAoIXRoaXMuc2V0dGluZ3MuYXV0b0NoZWNrKSB7XHJcbiAgICAgIC8vIENoZWNrIGFuc3dlciBidXR0b25cclxuICAgICAgdGhpcy5hZGRCdXR0b24oJ2NoZWNrLWFuc3dlcicsIHRoaXMubG9jYWxpemF0aW9uLmdldFRleHRGcm9tTGFiZWwoTG9jYWxpemF0aW9uTGFiZWxzLmNoZWNrQWxsQnV0dG9uKSxcclxuICAgICAgICB0aGlzLm9uQ2hlY2tBbnN3ZXIsIHRydWUsIHt9LCB7XHJcbiAgICAgICAgY29uZmlybWF0aW9uRGlhbG9nOiB7XHJcbiAgICAgICAgICBlbmFibGU6IHRoaXMuc2V0dGluZ3MuY29uZmlybUNoZWNrRGlhbG9nLFxyXG4gICAgICAgICAgbDEwbjogdGhpcy5sb2NhbGl6YXRpb24uZ2V0T2JqZWN0Rm9yU3RydWN0dXJlKExvY2FsaXphdGlvblN0cnVjdHVyZXMuY29uZmlybUNoZWNrKSxcclxuICAgICAgICAgIGluc3RhbmNlOiB0aGlzLFxyXG4gICAgICAgICAgJHBhcmVudEVsZW1lbnQ6ICRjb250YWluZXJcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNob3cgc29sdXRpb24gYnV0dG9uXHJcbiAgICB0aGlzLmFkZEJ1dHRvbignc2hvdy1zb2x1dGlvbicsIHRoaXMubG9jYWxpemF0aW9uLmdldFRleHRGcm9tTGFiZWwoTG9jYWxpemF0aW9uTGFiZWxzLnNob3dTb2x1dGlvbkJ1dHRvbiksXHJcbiAgICAgIHRoaXMub25TaG93U29sdXRpb24sIHRoaXMuc2V0dGluZ3MuZW5hYmxlU29sdXRpb25zQnV0dG9uKTtcclxuXHJcbiAgICAvLyBUcnkgYWdhaW4gYnV0dG9uXHJcbiAgICBpZiAodGhpcy5zZXR0aW5ncy5lbmFibGVSZXRyeSA9PT0gdHJ1ZSkge1xyXG4gICAgICB0aGlzLmFkZEJ1dHRvbigndHJ5LWFnYWluJywgdGhpcy5sb2NhbGl6YXRpb24uZ2V0VGV4dEZyb21MYWJlbChMb2NhbGl6YXRpb25MYWJlbHMucmV0cnlCdXR0b24pLFxyXG4gICAgICAgIHRoaXMub25SZXRyeSwgdHJ1ZSwge30sIHtcclxuICAgICAgICBjb25maXJtYXRpb25EaWFsb2c6IHtcclxuICAgICAgICAgIGVuYWJsZTogdGhpcy5zZXR0aW5ncy5jb25maXJtUmV0cnlEaWFsb2csXHJcbiAgICAgICAgICBsMTBuOiB0aGlzLmxvY2FsaXphdGlvbi5nZXRPYmplY3RGb3JTdHJ1Y3R1cmUoTG9jYWxpemF0aW9uU3RydWN0dXJlcy5jb25maXJtUmV0cnkpLFxyXG4gICAgICAgICAgaW5zdGFuY2U6IHRoaXMsXHJcbiAgICAgICAgICAkcGFyZW50RWxlbWVudDogJGNvbnRhaW5lclxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uQ2hlY2tBbnN3ZXIgPSAoKSA9PiB7XHJcbiAgICB0aGlzLmNsb3plQ29udHJvbGxlci5jaGVja0FsbCgpO1xyXG5cclxuICAgIHRoaXMudHJpZ2dlclhBUEkoJ2ludGVyYWN0ZWQnKTtcclxuICAgIHRoaXMudHJpZ2dlclhBUElBbnN3ZXJlZCgpO1xyXG5cclxuICAgIHRoaXMudHJhbnNpdGlvblN0YXRlKCk7XHJcbiAgICBpZiAodGhpcy5zdGF0ZSAhPT0gU3RhdGVzLmZpbmlzaGVkKVxyXG4gICAgICB0aGlzLnN0YXRlID0gU3RhdGVzLmNoZWNraW5nO1xyXG5cclxuICAgIHRoaXMuc2hvd0ZlZWRiYWNrKCk7XHJcblxyXG4gICAgdGhpcy50b2dnbGVCdXR0b25WaXNpYmlsaXR5KHRoaXMuc3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0cmFuc2l0aW9uU3RhdGUgPSAoKSA9PiB7XHJcbiAgICBpZiAodGhpcy5jbG96ZUNvbnRyb2xsZXIuaXNTb2x2ZWQpIHtcclxuICAgICAgdGhpcy5tb3ZlVG9TdGF0ZShTdGF0ZXMuZmluaXNoZWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvblNob3dTb2x1dGlvbiA9ICgpID0+IHtcclxuICAgIHRoaXMubW92ZVRvU3RhdGUoU3RhdGVzLnNob3dpbmdTb2x1dGlvbnMpO1xyXG4gICAgdGhpcy5jbG96ZUNvbnRyb2xsZXIuc2hvd1NvbHV0aW9ucygpO1xyXG4gICAgdGhpcy5zaG93RmVlZGJhY2soKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25SZXRyeSA9ICgpID0+IHtcclxuICAgIHRoaXMucmVtb3ZlRmVlZGJhY2soKTtcclxuICAgIHRoaXMuY2xvemVDb250cm9sbGVyLnJlc2V0KCk7XHJcbiAgICB0aGlzLmFuc3dlcmVkID0gZmFsc2U7XHJcbiAgICB0aGlzLm1vdmVUb1N0YXRlKFN0YXRlcy5vbmdvaW5nKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2hvd0ZlZWRiYWNrKCkge1xyXG4gICAgdmFyIHNjb3JlVGV4dCA9IEg1UC5RdWVzdGlvbi5kZXRlcm1pbmVPdmVyYWxsRmVlZGJhY2sodGhpcy5sb2NhbGl6YXRpb24uZ2V0T2JqZWN0Rm9yU3RydWN0dXJlKExvY2FsaXphdGlvblN0cnVjdHVyZXMub3ZlcmFsbEZlZWRiYWNrKSwgdGhpcy5jbG96ZUNvbnRyb2xsZXIuY3VycmVudFNjb3JlIC8gdGhpcy5jbG96ZUNvbnRyb2xsZXIubWF4U2NvcmUpLnJlcGxhY2UoJ0BzY29yZScsIHRoaXMuY2xvemVDb250cm9sbGVyLmN1cnJlbnRTY29yZSkucmVwbGFjZSgnQHRvdGFsJywgdGhpcy5jbG96ZUNvbnRyb2xsZXIubWF4U2NvcmUpO1xyXG4gICAgdGhpcy5zZXRGZWVkYmFjayhzY29yZVRleHQsIHRoaXMuY2xvemVDb250cm9sbGVyLmN1cnJlbnRTY29yZSwgdGhpcy5jbG96ZUNvbnRyb2xsZXIubWF4U2NvcmUsIHRoaXMubG9jYWxpemF0aW9uLmdldFRleHRGcm9tTGFiZWwoTG9jYWxpemF0aW9uTGFiZWxzLnNjb3JlQmFyTGFiZWwpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNob3dzIGFyZSBoaWRlcyBidXR0b25zIGRlcGVuZGluZyBvbiB0aGUgY3VycmVudCBzdGF0ZSBhbmQgc2V0dGluZ3MgbWFkZVxyXG4gICAqIGJ5IHRoZSBjb250ZW50IGNyZWF0b3IuXHJcbiAgICogQHBhcmFtICB7U3RhdGVzfSBzdGF0ZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgbW92ZVRvU3RhdGUoc3RhdGU6IFN0YXRlcykge1xyXG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xyXG4gICAgdGhpcy50b2dnbGVCdXR0b25WaXNpYmlsaXR5KHN0YXRlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdG9nZ2xlQnV0dG9uVmlzaWJpbGl0eShzdGF0ZTogU3RhdGVzKSB7XHJcbiAgICBpZiAodGhpcy5zZXR0aW5ncy5lbmFibGVTb2x1dGlvbnNCdXR0b24pIHtcclxuICAgICAgaWYgKCgoc3RhdGUgPT09IFN0YXRlcy5jaGVja2luZylcclxuICAgICAgICB8fCAodGhpcy5zZXR0aW5ncy5hdXRvQ2hlY2sgJiYgc3RhdGUgPT09IFN0YXRlcy5vbmdvaW5nKSlcclxuICAgICAgICAmJiAoIXRoaXMuc2V0dGluZ3Muc2hvd1NvbHV0aW9uc1JlcXVpcmVzSW5wdXQgfHwgdGhpcy5jbG96ZUNvbnRyb2xsZXIuYWxsQmxhbmtzRW50ZXJlZCkpIHtcclxuICAgICAgICB0aGlzLnNob3dCdXR0b24oJ3Nob3ctc29sdXRpb24nKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICB0aGlzLmhpZGVCdXR0b24oJ3Nob3ctc29sdXRpb24nKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnNldHRpbmdzLmVuYWJsZVJldHJ5ICYmIChzdGF0ZSA9PT0gU3RhdGVzLmNoZWNraW5nIHx8IHN0YXRlID09PSBTdGF0ZXMuZmluaXNoZWQgfHwgc3RhdGUgPT09IFN0YXRlcy5zaG93aW5nU29sdXRpb25zKSkge1xyXG4gICAgICB0aGlzLnNob3dCdXR0b24oJ3RyeS1hZ2FpbicpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuaGlkZUJ1dHRvbigndHJ5LWFnYWluJyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlmIChzdGF0ZSA9PT0gU3RhdGVzLm9uZ29pbmcgJiYgdGhpcy5zZXR0aW5ncy5lbmFibGVDaGVja0J1dHRvbikge1xyXG4gICAgICB0aGlzLnNob3dCdXR0b24oJ2NoZWNrLWFuc3dlcicpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuaGlkZUJ1dHRvbignY2hlY2stYW5zd2VyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHN0YXRlID09PSBTdGF0ZXMuc2hvd2luZ1NvbHV0aW9uc0VtYmVkZGVkKSB7XHJcbiAgICAgIHRoaXMuaGlkZUJ1dHRvbignY2hlY2stYW5zd2VyJyk7XHJcbiAgICAgIHRoaXMuaGlkZUJ1dHRvbigndHJ5LWFnYWluJyk7XHJcbiAgICAgIHRoaXMuaGlkZUJ1dHRvbignc2hvdy1zb2x1dGlvbicpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudHJpZ2dlcigncmVzaXplJyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0Q3VycmVudFN0YXRlID0gKCk6IHN0cmluZ1tdID0+IHtcclxuICAgIHJldHVybiB0aGlzLmNsb3plQ29udHJvbGxlci5zZXJpYWxpemVDbG96ZSgpO1xyXG4gIH07XHJcblxyXG4gIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICogSW1wbGVtZW50YXRpb24gb2YgUXVlc3Rpb24gY29udHJhY3QgICpcclxuICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuICBwdWJsaWMgZ2V0QW5zd2VyR2l2ZW4gPSAoKTogYm9vbGVhbiA9PiB7XHJcbiAgICByZXR1cm4gdGhpcy5hbnN3ZXJlZCB8fCB0aGlzLmNsb3plQ29udHJvbGxlci5tYXhTY29yZSA9PT0gMDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRTY29yZSA9ICgpOiBudW1iZXIgPT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY2xvemVDb250cm9sbGVyLmN1cnJlbnRTY29yZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRNYXhTY29yZSA9ICgpOiBudW1iZXIgPT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY2xvemVDb250cm9sbGVyLm1heFNjb3JlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNob3dTb2x1dGlvbnMgPSAoKSA9PiB7XHJcbiAgICB0aGlzLm9uU2hvd1NvbHV0aW9uKCk7XHJcbiAgICB0aGlzLm1vdmVUb1N0YXRlKFN0YXRlcy5zaG93aW5nU29sdXRpb25zRW1iZWRkZWQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlc2V0VGFzayA9ICgpID0+IHtcclxuICAgIHRoaXMub25SZXRyeSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqKlxyXG4gICAqIFhBcGkgaW1wbGVtZW50YXRpb25cclxuICAgKi9cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIFRyaWdnZXIgeEFQSSBhbnN3ZXJlZCBldmVudFxyXG4gICAqL1xyXG4gIHB1YmxpYyB0cmlnZ2VyWEFQSUFuc3dlcmVkID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgdGhpcy5hbnN3ZXJlZCA9IHRydWU7XHJcbiAgICB2YXIgeEFQSUV2ZW50ID0gdGhpcy5jcmVhdGVYQVBJRXZlbnRUZW1wbGF0ZSgnYW5zd2VyZWQnKTtcclxuICAgIHRoaXMuYWRkUXVlc3Rpb25Ub1hBUEkoeEFQSUV2ZW50KTtcclxuICAgIHRoaXMuYWRkUmVzcG9uc2VUb1hBUEkoeEFQSUV2ZW50KTtcclxuICAgIHRoaXMudHJpZ2dlcih4QVBJRXZlbnQpO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCB4QVBJIGRhdGEuXHJcbiAgICogQ29udHJhY3QgdXNlZCBieSByZXBvcnQgcmVuZGVyaW5nIGVuZ2luZS5cclxuICAgKlxyXG4gICAqIEBzZWUgY29udHJhY3QgYXQge0BsaW5rIGh0dHBzOi8vaDVwLm9yZy9kb2N1bWVudGF0aW9uL2RldmVsb3BlcnMvY29udHJhY3RzI2d1aWRlcy1oZWFkZXItNn1cclxuICAgKi9cclxuICBwdWJsaWMgZ2V0WEFQSURhdGEgPSAoKSA9PiB7XHJcbiAgICB2YXIgeEFQSUV2ZW50ID0gdGhpcy5jcmVhdGVYQVBJRXZlbnRUZW1wbGF0ZSgnYW5zd2VyZWQnKTtcclxuICAgIHRoaXMuYWRkUXVlc3Rpb25Ub1hBUEkoeEFQSUV2ZW50KTtcclxuICAgIHRoaXMuYWRkUmVzcG9uc2VUb1hBUEkoeEFQSUV2ZW50KTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN0YXRlbWVudDogeEFQSUV2ZW50LmRhdGEuc3RhdGVtZW50XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIEdlbmVyYXRlIHhBUEkgb2JqZWN0IGRlZmluaXRpb24gdXNlZCBpbiB4QVBJIHN0YXRlbWVudHMuXHJcbiAgICogQHJldHVybiB7T2JqZWN0fVxyXG4gICAqL1xyXG4gIHB1YmxpYyBnZXR4QVBJRGVmaW5pdGlvbiA9ICgpOiBYQVBJQWN0aXZpdHlEZWZpbml0aW9uID0+IHtcclxuICAgIGNvbnN0IGRlZmluaXRpb24gPSBuZXcgWEFQSUFjdGl2aXR5RGVmaW5pdGlvbigpO1xyXG5cclxuICAgIGRlZmluaXRpb24uZGVzY3JpcHRpb24gPSB7XHJcbiAgICAgICdlbi1VUyc6ICc8cD4nICsgdGhpcy5yZXBvc2l0b3J5LmdldFRhc2tEZXNjcmlwdGlvbigpICsgJzwvcD4nICsgdGhpcy5yZXBvc2l0b3J5LmdldENsb3plVGV4dCgpLnJlcGxhY2UoL19fKF8pKy9nLCAnX19fX19fX19fXycpXHJcbiAgICB9O1xyXG5cclxuICAgIGRlZmluaXRpb24udHlwZSA9ICdodHRwOi8vYWRsbmV0Lmdvdi9leHBhcGkvYWN0aXZpdGllcy9jbWkuaW50ZXJhY3Rpb24nO1xyXG4gICAgZGVmaW5pdGlvbi5pbnRlcmFjdGlvblR5cGUgPSAnZmlsbC1pbic7IC8vIFdlIHVzZSB0aGUgJ2ZpbGwtaW4nIHR5cGUgZXZlbiBpbiBzZWxlY3QgbW9kZSwgYXMgdGhlIHhBUEkgZm9ybWF0IGZvciBzZWxlY3Rpb25zIGRvZXNuJ3QgcmVhbGx5IGNhdGVyIGZvciBzZXF1ZW5jZXMuXHJcblxyXG4gICAgY29uc3QgY29ycmVjdFJlc3BvbnNlc1BhdHRlcm5QcmVmaXggPSAne2Nhc2VfbWF0dGVycz0nICsgdGhpcy5zZXR0aW5ncy5jYXNlU2Vuc2l0aXZlICsgJ30nO1xyXG5cclxuICAgIGNvbnN0IGNvcnJlY3RBbnN3ZXJMaXN0ID0gdGhpcy5jbG96ZUNvbnRyb2xsZXIuZ2V0Q29ycmVjdEFuc3dlckxpc3QoKTtcclxuXHJcbiAgICAvLyBINVAgdXNlcyBleHRlbnNpb24gaW5zdGVhZCBvZiBmdWxsIGNvcnJlY3QgcmVzcG9uc2VzIHBhdHRlcm4gdG8gY291bnRlciBjb21wbGV4aXR5XHJcbiAgICBjb25zdCBmaXJzdEFsdGVybmF0aXZlcyA9IGNvcnJlY3RBbnN3ZXJMaXN0LnJlZHVjZSgocmVzdWx0LCBsaXN0KSA9PiB7XHJcbiAgICAgIHJlc3VsdC5wdXNoKGxpc3RbMF0pO1xyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSwgW10pLmpvaW4oJ1ssXScpO1xyXG4gICAgZGVmaW5pdGlvbi5jb3JyZWN0UmVzcG9uc2VzUGF0dGVybiA9IFtgJHtjb3JyZWN0UmVzcG9uc2VzUGF0dGVyblByZWZpeH0ke2ZpcnN0QWx0ZXJuYXRpdmVzfWBdO1xyXG5cclxuICAgIC8vIEFkZCB0aGUgSDVQIEFsdGVybmF0aXZlIGV4dGVuc2lvbiB3aGljaCBwcm92aWRlcyBhbGwgdGhlIGNvbWJpbmF0aW9ucyBvZiBkaWZmZXJlbnQgYW5zd2Vyc1xyXG4gICAgLy8gUmVwb3J0aW5nIHNvZnR3YXJlIHdpbGwgbmVlZCB0byBzdXBwb3J0IHRoaXMgZXh0ZW5zaW9uIGZvciBhbHRlcm5hdGl2ZXMgdG8gd29yay5cclxuICAgIGRlZmluaXRpb24uZXh0ZW5zaW9ucyA9IGRlZmluaXRpb24uZXh0ZW5zaW9ucyB8fCB7fTtcclxuICAgIGRlZmluaXRpb24uZXh0ZW5zaW9uc1tYQVBJX0NBU0VfU0VOU0lUSVZJVFldID0gdGhpcy5zZXR0aW5ncy5jYXNlU2Vuc2l0aXZlO1xyXG4gICAgZGVmaW5pdGlvbi5leHRlbnNpb25zW1hBUElfQUxURVJOQVRJVkVfRVhURU5TSU9OXSA9IGNvcnJlY3RBbnN3ZXJMaXN0O1xyXG5cclxuICAgIHJldHVybiBkZWZpbml0aW9uO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZCB0aGUgcXVlc3Rpb24gaXRzZWxmIHRvIHRoZSBkZWZpbml0aW9uIHBhcnQgb2YgYW4geEFQSUV2ZW50XHJcbiAgICovXHJcbiAgcHVibGljIGFkZFF1ZXN0aW9uVG9YQVBJID0gKHhBUElFdmVudCkgPT4ge1xyXG4gICAgdmFyIGRlZmluaXRpb24gPSB4QVBJRXZlbnQuZ2V0VmVyaWZpZWRTdGF0ZW1lbnRWYWx1ZShbJ29iamVjdCcsICdkZWZpbml0aW9uJ10pO1xyXG4gICAgdGhpcy5qUXVlcnkuZXh0ZW5kKHRydWUsIGRlZmluaXRpb24sIHRoaXMuZ2V0eEFQSURlZmluaXRpb24oKSk7XHJcblxyXG4gICAgLy8gU2V0IHJlcG9ydGluZyBtb2R1bGUgdmVyc2lvbiBpZiBhbHRlcm5hdGl2ZSBleHRlbnNpb24gaXMgdXNlZFxyXG4gICAgaWYgKHRoaXMuY2xvemVDb250cm9sbGVyLmhhc0FsdGVybmF0aXZlcykge1xyXG4gICAgICBjb25zdCBjb250ZXh0ID0geEFQSUV2ZW50LmdldFZlcmlmaWVkU3RhdGVtZW50VmFsdWUoWydjb250ZXh0J10pO1xyXG4gICAgICBjb250ZXh0LmV4dGVuc2lvbnMgPSBjb250ZXh0LmV4dGVuc2lvbnMgfHwge307XHJcbiAgICAgIGNvbnRleHQuZXh0ZW5zaW9uc1tYQVBJX1JFUE9SVElOR19WRVJTSU9OX0VYVEVOU0lPTl0gPSAnMS4wLjAnO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZCB0aGUgcmVzcG9uc2UgcGFydCB0byBhbiB4QVBJIGV2ZW50XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0g1UC5YQVBJRXZlbnR9IHhBUElFdmVudFxyXG4gICAqICBUaGUgeEFQSSBldmVudCB3ZSB3aWxsIGFkZCBhIHJlc3BvbnNlIHRvXHJcbiAgICovXHJcbiAgcHVibGljIGFkZFJlc3BvbnNlVG9YQVBJID0gKHhBUElFdmVudCkgPT4ge1xyXG4gICAgeEFQSUV2ZW50LnNldFNjb3JlZFJlc3VsdCh0aGlzLmNsb3plQ29udHJvbGxlci5jdXJyZW50U2NvcmUsIHRoaXMuY2xvemVDb250cm9sbGVyLm1heFNjb3JlLCB0aGlzKTtcclxuICAgIHhBUElFdmVudC5kYXRhLnN0YXRlbWVudC5yZXN1bHQucmVzcG9uc2UgPSB0aGlzLmdldHhBUElSZXNwb25zZSgpO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIEdlbmVyYXRlIHhBUEkgdXNlciByZXNwb25zZSwgdXNlZCBpbiB4QVBJIHN0YXRlbWVudHMuXHJcbiAgICogQHJldHVybiB7c3RyaW5nfSBVc2VyIGFuc3dlcnMgc2VwYXJhdGVkIGJ5IHRoZSBcIlssXVwiIHBhdHRlcm5cclxuICAgKi9cclxuICBwdWJsaWMgZ2V0eEFQSVJlc3BvbnNlID0gKCk6IHN0cmluZyA9PiB7XHJcbiAgICB2YXIgdXNlcnNBbnN3ZXJzID0gdGhpcy5nZXRDdXJyZW50U3RhdGUoKTtcclxuICAgIHJldHVybiB1c2Vyc0Fuc3dlcnMuam9pbignWyxdJyk7XHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL21lc3NhZ2Utc2VydmljZSc7XHJcbmltcG9ydCB7IEhpZ2hsaWdodCB9IGZyb20gJy4uL21vZGVscy9oaWdobGlnaHQnO1xyXG5pbXBvcnQgeyBBbnN3ZXIgfSBmcm9tICcuLi9tb2RlbHMvYW5zd2VyJztcclxuaW1wb3J0IHsgQmxhbmsgfSBmcm9tICcuLi9tb2RlbHMvYmxhbmsnO1xyXG5pbXBvcnQgeyBINVBMb2NhbGl6YXRpb24gfSBmcm9tICcuLi9zZXJ2aWNlcy9sb2NhbGl6YXRpb24nO1xyXG5pbXBvcnQgeyBJU2V0dGluZ3MgfSBmcm9tICcuLi9zZXJ2aWNlcy9zZXR0aW5ncyc7XHJcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tIFwiLi4vbW9kZWxzL21lc3NhZ2VcIjtcclxuaW1wb3J0IHsgU25pcHBldCB9IGZyb20gJy4uL21vZGVscy9zbmlwcGV0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBCbGFua0xvYWRlciB7XHJcblxyXG4gIHByaXZhdGUgY29uc3RydWN0b3IocHJpdmF0ZSBzZXR0aW5nczogSVNldHRpbmdzLCBwcml2YXRlIGxvY2FsaXphdGlvbjogSDVQTG9jYWxpemF0aW9uLCBwcml2YXRlIGpxdWVyeTogSlF1ZXJ5U3RhdGljLCBwcml2YXRlIG1lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSkgeyB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogQmxhbmtMb2FkZXI7XHJcbiAgcHVibGljIHN0YXRpYyBpbml0aWFsaXplKHNldHRpbmdzOiBJU2V0dGluZ3MsIGxvY2FsaXphdGlvbjogSDVQTG9jYWxpemF0aW9uLCBqcXVlcnk6IEpRdWVyeVN0YXRpYywgbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlKTogQmxhbmtMb2FkZXIge1xyXG4gICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgQmxhbmtMb2FkZXIoc2V0dGluZ3MsIGxvY2FsaXphdGlvbiwganF1ZXJ5LCBtZXNzYWdlU2VydmljZSk7XHJcbiAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGdldCBpbnN0YW5jZSgpOiBCbGFua0xvYWRlciB7XHJcbiAgICBpZiAodGhpcy5faW5zdGFuY2UpXHJcbiAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcclxuXHJcbiAgICB0aHJvdyBcIkJsYW5rTG9hZGVyIG11c3QgYmUgaW5pdGlhbGl6ZWQgYmVmb3JlIHVzZS5cIjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGVjb2RlSHRtbChodG1sOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgdmFyIGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG4gICAgZWxlbS5pbm5lckhUTUwgPSBodG1sO1xyXG4gICAgcmV0dXJuIGVsZW0udmFsdWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY3JlYXRlQmxhbmsoaWQ6IHN0cmluZywgY29ycmVjdFRleHQ6IHN0cmluZywgaGludFRleHQ6IHN0cmluZywgaW5jb3JyZWN0QW5zd2VyczogYW55W10pOiBCbGFuayB7XHJcbiAgICB2YXIgYmxhbmsgPSBuZXcgQmxhbmsodGhpcy5zZXR0aW5ncywgdGhpcy5sb2NhbGl6YXRpb24sIHRoaXMuanF1ZXJ5LCB0aGlzLm1lc3NhZ2VTZXJ2aWNlLCBpZClcclxuICAgIGlmIChjb3JyZWN0VGV4dCkge1xyXG4gICAgICBjb3JyZWN0VGV4dCA9IHRoaXMuZGVjb2RlSHRtbChjb3JyZWN0VGV4dCk7XHJcbiAgICAgIGJsYW5rLmFkZENvcnJlY3RBbnN3ZXIobmV3IEFuc3dlcihjb3JyZWN0VGV4dCwgXCJcIiwgZmFsc2UsIDAsIHRoaXMuc2V0dGluZ3MpKTtcclxuICAgIH1cclxuICAgIGJsYW5rLnNldEhpbnQobmV3IE1lc3NhZ2UoaGludFRleHQgPyBoaW50VGV4dCA6IFwiXCIsIGZhbHNlLCAwKSk7XHJcblxyXG4gICAgaWYgKGluY29ycmVjdEFuc3dlcnMpIHtcclxuICAgICAgZm9yICh2YXIgaDVwSW5jb3JyZWN0QW5zd2VyIG9mIGluY29ycmVjdEFuc3dlcnMpIHtcclxuICAgICAgICBibGFuay5hZGRJbmNvcnJlY3RBbnN3ZXIodGhpcy5kZWNvZGVIdG1sKGg1cEluY29ycmVjdEFuc3dlci5pbmNvcnJlY3RBbnN3ZXJUZXh0KSwgaDVwSW5jb3JyZWN0QW5zd2VyLmluY29ycmVjdEFuc3dlckZlZWRiYWNrLCBoNXBJbmNvcnJlY3RBbnN3ZXIuc2hvd0hpZ2hsaWdodCwgaDVwSW5jb3JyZWN0QW5zd2VyLmhpZ2hsaWdodCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYmxhbms7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVwbGFjZVNuaXBwZXRzKGJsYW5rOiBCbGFuaywgc25pcHBldHM6IFNuaXBwZXRbXSkge1xyXG4gICAgYmxhbmsuY29ycmVjdEFuc3dlcnMuY29uY2F0KGJsYW5rLmluY29ycmVjdEFuc3dlcnMpXHJcbiAgICAgIC5mb3JFYWNoKGFuc3dlciA9PiBhbnN3ZXIubWVzc2FnZS50ZXh0ID0gdGhpcy5nZXRTdHJpbmdXaXRoU25pcHBldHMoYW5zd2VyLm1lc3NhZ2UudGV4dCwgc25pcHBldHMpKTtcclxuICAgIGJsYW5rLmhpbnQudGV4dCA9IHRoaXMuZ2V0U3RyaW5nV2l0aFNuaXBwZXRzKGJsYW5rLmhpbnQudGV4dCwgc25pcHBldHMpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRTdHJpbmdXaXRoU25pcHBldHModGV4dDogc3RyaW5nLCBzbmlwcGV0czogU25pcHBldFtdKTogc3RyaW5nIHtcclxuICAgIGlmICghdGV4dCB8fCB0ZXh0ID09PSB1bmRlZmluZWQpXHJcbiAgICAgIHJldHVybiBcIlwiO1xyXG5cclxuICAgIGlmKCFzbmlwcGV0cylcclxuICAgICAgcmV0dXJuIHRleHQ7ICAgIFxyXG5cclxuICAgIGZvciAodmFyIHNuaXBwZXQgb2Ygc25pcHBldHMpIHtcclxuICAgICAgaWYgKHNuaXBwZXQubmFtZSA9PT0gdW5kZWZpbmVkIHx8IHNuaXBwZXQubmFtZSA9PT0gXCJcIiB8fCBzbmlwcGV0LnRleHQgPT09IHVuZGVmaW5lZCB8fCBzbmlwcGV0LnRleHQgPT09IFwiXCIpXHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoXCJAXCIgKyBzbmlwcGV0Lm5hbWUsIHNuaXBwZXQudGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRleHQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZGRzIHRoZSBoaWdobGlnaHQgb2JqZWN0cyB0byB0aGUgYW5zd2VycyBpbiB0aGUgY29ycmVjdCBhbmQgaW5jb3JyZWN0IGFuc3dlciBsaXN0LlxyXG4gICAqIEBwYXJhbSAge0hpZ2hsaWdodFtdfSBoaWdobGlnaHRzQmVmb3JlIC0gQWxsIGhpZ2hsaWdodHMgY29taW5nIGJlZm9yZSB0aGUgYmxhbmsuXHJcbiAgICogQHBhcmFtICB7SGlnaGxpZ2h0W119IGhpZ2hsaWdodHNBZnRlciAtIEFsbCBoaWdobGlnaHRzIGNvbWluZyBhZnRlciB0aGUgYmxhbmsuXHJcbiAgICovXHJcbiAgcHVibGljIGxpbmtIaWdobGlnaHRJZFRvT2JqZWN0KGJsYW5rOiBCbGFuaywgaGlnaGxpZ2h0c0JlZm9yZTogSGlnaGxpZ2h0W10sIGhpZ2hsaWdodHNBZnRlcjogSGlnaGxpZ2h0W10pIHtcclxuICAgIGZvciAobGV0IGFuc3dlciBvZiBibGFuay5jb3JyZWN0QW5zd2Vycykge1xyXG4gICAgICBhbnN3ZXIubGlua0hpZ2hsaWdodElkVG9PYmplY3QoaGlnaGxpZ2h0c0JlZm9yZSwgaGlnaGxpZ2h0c0FmdGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBhbnN3ZXIgb2YgYmxhbmsuaW5jb3JyZWN0QW5zd2Vycykge1xyXG4gICAgICBhbnN3ZXIubGlua0hpZ2hsaWdodElkVG9PYmplY3QoaGlnaGxpZ2h0c0JlZm9yZSwgaGlnaGxpZ2h0c0FmdGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBibGFuay5oaW50LmxpbmtIaWdobGlnaHQoaGlnaGxpZ2h0c0JlZm9yZSwgaGlnaGxpZ2h0c0FmdGVyKTtcclxuICB9XHJcblxyXG59IiwiaW1wb3J0IHsgQmxhbmtMb2FkZXIgfSBmcm9tICcuL2JsYW5rLWxvYWRlcic7XHJcbmltcG9ydCB7IENsb3plRWxlbWVudCwgQ2xvemVFbGVtZW50VHlwZSB9IGZyb20gJy4uL21vZGVscy9jbG96ZS1lbGVtZW50JztcclxuaW1wb3J0IHsgQmxhbmsgfSBmcm9tICcuLi9tb2RlbHMvYmxhbmsnO1xyXG5pbXBvcnQgeyBIaWdobGlnaHQgfSBmcm9tICcuLi9tb2RlbHMvaGlnaGxpZ2h0JztcclxuaW1wb3J0IHsgQ2xvemUgfSBmcm9tIFwiLi4vbW9kZWxzL2Nsb3plXCI7XHJcblxyXG4vKipcclxuICogTG9hZHMgYSBjbG96ZSBvYmplY3QuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ2xvemVMb2FkZXIge1xyXG4gIHByaXZhdGUgc3RhdGljIG5vcm1hbGl6ZWRCbGFua01hcmtlciA9ICdfX18nO1xyXG4gIFxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSAge3N0cmluZ30gaHRtbCAtIFRoZSBodG1sIHN0cmluZyB0aGF0IGNvbnRhaW5zIHRoZSBjbG96ZSB3aXRoIGJsYW5rcyBtYXJraW5nIGFuZCBoaWdobGlnaHQgbWFya2luZ3MuXHJcbiAgICogQHBhcmFtICB7QmxhbmtbXX0gYmxhbmtzIC0gQWxsIGJsYW5rcyBhcyBlbnRlcmVkIGJ5IHRoZSBjb250ZW50IGF1dGhvci5cclxuICAgKiBAcmV0dXJucyBDbG96ZVxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgY3JlYXRlQ2xvemUoaHRtbDogc3RyaW5nLCBibGFua3M6IEJsYW5rW10pOiBDbG96ZSB7XHJcbiAgICB2YXIgb3JkZXJlZEFsbEVsZW1lbnRzTGlzdDogQ2xvemVFbGVtZW50W10gPSBuZXcgQXJyYXkoKTtcclxuICAgIHZhciBoaWdobGlnaHRJbnN0YW5jZXM6IEhpZ2hsaWdodFtdID0gbmV3IEFycmF5KCk7XHJcbiAgICB2YXIgYmxhbmtzSW5zdGFuY2VzOiBCbGFua1tdID0gbmV3IEFycmF5KCk7XHJcblxyXG4gICAgaHRtbCA9IENsb3plTG9hZGVyLm5vcm1hbGl6ZUJsYW5rTWFya2luZ3MoaHRtbCk7XHJcblxyXG4gICAgdmFyIGNvbnZlcnNpb25SZXN1bHQgPSBDbG96ZUxvYWRlci5jb252ZXJ0TWFya3VwVG9TcGFucyhodG1sLCBibGFua3MpO1xyXG4gICAgaHRtbCA9IGNvbnZlcnNpb25SZXN1bHQuaHRtbDtcclxuICAgIG9yZGVyZWRBbGxFbGVtZW50c0xpc3QgPSBjb252ZXJzaW9uUmVzdWx0Lm9yZGVyZWRBbGxFbGVtZW50c0xpc3Q7XHJcbiAgICBoaWdobGlnaHRJbnN0YW5jZXMgPSBjb252ZXJzaW9uUmVzdWx0LmhpZ2hsaWdodEluc3RhbmNlcztcclxuICAgIGJsYW5rc0luc3RhbmNlcyA9IGNvbnZlcnNpb25SZXN1bHQuYmxhbmtzSW5zdGFuY2VzO1xyXG5cclxuICAgIENsb3plTG9hZGVyLmxpbmtIaWdobGlnaHRzT2JqZWN0cyhvcmRlcmVkQWxsRWxlbWVudHNMaXN0LCBoaWdobGlnaHRJbnN0YW5jZXMsIGJsYW5rc0luc3RhbmNlcyk7XHJcblxyXG4gICAgdmFyIGNsb3plID0gbmV3IENsb3plKCk7XHJcbiAgICBjbG96ZS5odG1sID0gaHRtbDtcclxuICAgIGNsb3plLmJsYW5rcyA9IGJsYW5rc0luc3RhbmNlcztcclxuICAgIGNsb3plLmhpZ2hsaWdodHMgPSBoaWdobGlnaHRJbnN0YW5jZXM7XHJcblxyXG4gICAgcmV0dXJuIGNsb3plO1xyXG4gIH1cclxuXHJcbiAgIC8qKlxyXG4gICAqIENvbnZlcnRzICEhc2lnbmFsISEgaGlnaGxpZ2h0IG1hcmt1cCBhbmQgX19fICBibGFuayBtYXJrdXAgaW50byA8c3Bhbj4uLi48L3NwYW4+LlxyXG4gICAqIFJldHVybnMgdGhlIHJlc3VsdGluZyBodG1sIHN0cmluZyBhbmQgdGhyZWUgbGlzdHMgb2YgYWxsIGFjdGl2ZSBlbGVtZW50cyB1c2VkIGluIHRoZSBjbG96ZTpcclxuICAgKiAgICBvcmRlcmVkQWxsRWxlbWVudHM6IGhpZ2hsaWdodHMgYW5kIGJsYW5rcyBpbiB0aGUgb3JkZXIgb2YgYXBwZWFyYW5jZSBpbiB0aGUgaHRtbC5cclxuICAgKiAgICBoaWdobGlnaHRJbnN0YW5jZXM6IG9ubHkgaGlnaGxpZ2h0cyBpbiB0aGUgb3JkZXIgb2YgYXBwZWFyYW5jZVxyXG4gICAqICAgIGJsYW5rc0luc3RhbmNlczogb25seSBibGFua3MgaW4gdGhlIG9yZGVyIG9mIGFwcGVhcmFuY2VcclxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IGh0bWxcclxuICAgKiBAcGFyYW0gIHtCbGFua1tdfSBibGFua3NcclxuICAgKiBAcmV0dXJucyBMaXN0cyBvZiBhY3RpdmUgZWxlbWVudHMgKHNlZSBkZXNjcmlwdGlvbikuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzdGF0aWMgY29udmVydE1hcmt1cFRvU3BhbnMoaHRtbDogc3RyaW5nLCBibGFua3M6IEJsYW5rW10pOiB7IGh0bWw6IHN0cmluZywgb3JkZXJlZEFsbEVsZW1lbnRzTGlzdDogQ2xvemVFbGVtZW50W10sIGhpZ2hsaWdodEluc3RhbmNlczogSGlnaGxpZ2h0W10sIGJsYW5rc0luc3RhbmNlczogQmxhbmtbXSB9IHtcclxuICAgIHZhciBvcmRlcmVkQWxsRWxlbWVudHNMaXN0OiBDbG96ZUVsZW1lbnRbXSA9IG5ldyBBcnJheSgpO1xyXG4gICAgdmFyIGhpZ2hsaWdodEluc3RhbmNlczogSGlnaGxpZ2h0W10gPSBuZXcgQXJyYXkoKTtcclxuICAgIHZhciBibGFua3NJbnN0YW5jZXM6IEJsYW5rW10gPSBuZXcgQXJyYXkoKTtcclxuXHJcbiAgICB2YXIgZXhjbGFtYXRpb25NYXJrUmVnRXhwID0gLyEhKC57MSw0MH0/KSEhL2k7XHJcbiAgICB2YXIgaGlnaGxpZ2h0Q291bnRlciA9IDA7XHJcbiAgICBsZXQgYmxhbmtDb3VudGVyID0gMDtcclxuXHJcbiAgICAvLyBTZWFyY2hlcyB0aGUgaHRtbCBzdHJpbmcgZm9yIGhpZ2hsaWdodHMgYW5kIGJsYW5rcyBhbmQgaW5zZXJ0cyBzcGFucy4gXHJcbiAgICBkbyB7XHJcbiAgICAgIHZhciBuZXh0SGlnaGxpZ2h0TWF0Y2ggPSBodG1sLm1hdGNoKGV4Y2xhbWF0aW9uTWFya1JlZ0V4cCk7XHJcbiAgICAgIHZhciBuZXh0QmxhbmtJbmRleCA9IGh0bWwuaW5kZXhPZihDbG96ZUxvYWRlci5ub3JtYWxpemVkQmxhbmtNYXJrZXIpO1xyXG5cclxuICAgICAgaWYgKG5leHRIaWdobGlnaHRNYXRjaCAmJiAoKG5leHRIaWdobGlnaHRNYXRjaC5pbmRleCA8IG5leHRCbGFua0luZGV4KSB8fCAobmV4dEJsYW5rSW5kZXggPCAwKSkpIHtcclxuICAgICAgICAvLyBuZXh0IGFjdGl2ZSBlbGVtZW50IGlzIGEgaGlnaGxpZ2h0XHJcbiAgICAgICAgdmFyIGhpZ2hsaWdodCA9IG5ldyBIaWdobGlnaHQobmV4dEhpZ2hsaWdodE1hdGNoWzFdLCBgaGlnaGxpZ2h0XyR7aGlnaGxpZ2h0Q291bnRlcn1gKTtcclxuICAgICAgICBoaWdobGlnaHRJbnN0YW5jZXMucHVzaChoaWdobGlnaHQpO1xyXG4gICAgICAgIG9yZGVyZWRBbGxFbGVtZW50c0xpc3QucHVzaChoaWdobGlnaHQpO1xyXG4gICAgICAgIGh0bWwgPSBodG1sLnJlcGxhY2UoZXhjbGFtYXRpb25NYXJrUmVnRXhwLCBgPHNwYW4gaWQ9J2NvbnRhaW5lcl9oaWdobGlnaHRfJHtoaWdobGlnaHRDb3VudGVyfSc+PC9zcGFuPmApO1xyXG4gICAgICAgIGhpZ2hsaWdodENvdW50ZXIrKztcclxuICAgICAgfSBlbHNlIGlmIChuZXh0QmxhbmtJbmRleCA+PSAwKSB7XHJcbiAgICAgICAgLy8gbmV4dCBhY3RpdmUgZWxlbWVudCBpcyBhIGJsYW5rXHJcbiAgICAgICAgaWYgKGJsYW5rQ291bnRlciA+PSBibGFua3MubGVuZ3RoKSB7XHJcbiAgICAgICAgICAvLyBpZiB0aGUgYmxhbmsgaXMgbm90IGluIHRoZSByZXBvc2l0b3J5IChUaGUgY29udGVudCBhdXRob3IgaGFzIG1hcmtlZCB0b28gbWFueSBibGFua3MgaW4gdGhlIHRleHQsIGJ1dCBub3QgZW50ZXJlZCBjb3JyZWN0IGFuc3dlcnMuKVxyXG4gICAgICAgICAgaHRtbCA9IGh0bWwucmVwbGFjZShDbG96ZUxvYWRlci5ub3JtYWxpemVkQmxhbmtNYXJrZXIsIFwiPHNwYW4+PC9zcGFuPlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICB2YXIgYmxhbmsgPSBibGFua3NbYmxhbmtDb3VudGVyXTtcclxuICAgICAgICAgIGJsYW5rc0luc3RhbmNlcy5wdXNoKGJsYW5rKTtcclxuICAgICAgICAgIG9yZGVyZWRBbGxFbGVtZW50c0xpc3QucHVzaChibGFuayk7XHJcbiAgICAgICAgICBodG1sID0gaHRtbC5yZXBsYWNlKENsb3plTG9hZGVyLm5vcm1hbGl6ZWRCbGFua01hcmtlciwgYDxzcGFuIGlkPSdjb250YWluZXJfJHtibGFuay5pZH0nPjwvc3Bhbj5gKTtcclxuICAgICAgICAgIGJsYW5rQ291bnRlcisrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgd2hpbGUgKG5leHRIaWdobGlnaHRNYXRjaCB8fCAobmV4dEJsYW5rSW5kZXggPj0gMCkpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGh0bWw6IGh0bWwsXHJcbiAgICAgIG9yZGVyZWRBbGxFbGVtZW50c0xpc3Q6IG9yZGVyZWRBbGxFbGVtZW50c0xpc3QsXHJcbiAgICAgIGhpZ2hsaWdodEluc3RhbmNlczogaGlnaGxpZ2h0SW5zdGFuY2VzLFxyXG4gICAgICBibGFua3NJbnN0YW5jZXM6IGJsYW5rc0luc3RhbmNlc1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIExvb2tzIGZvciBhbGwgaW5zdGFuY2VzIG9mIG1hcmtlZCBibGFua3MgYW5kIHJlcGxhY2VzIHRoZW0gd2l0aCBfX18uIFxyXG4gICAqIEBwYXJhbSAge3N0cmluZ30gaHRtbFxyXG4gICAqIEByZXR1cm5zIHN0cmluZ1xyXG4gICAqL1xyXG4gIHByaXZhdGUgc3RhdGljIG5vcm1hbGl6ZUJsYW5rTWFya2luZ3MoaHRtbDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHZhciB1bmRlcmxpbmVCbGFua1JlZ0V4ID0gL197Myx9L2c7XHJcbiAgICBodG1sID0gaHRtbC5yZXBsYWNlKHVuZGVybGluZUJsYW5rUmVnRXgsIENsb3plTG9hZGVyLm5vcm1hbGl6ZWRCbGFua01hcmtlcik7XHJcbiAgICByZXR1cm4gaHRtbDtcclxuICB9XHJcblxyXG4gICAvKipcclxuICAgKiBJdGVyYXRlcyB0aHJvdWdoIGFsbCBibGFua3MgYW5kIGNhbGxzIHRoZWlyIGxpbmtIaWdobGlnaHRJZHNUb09iamVjdHMoLi4uKS5cclxuICAgKiBAcGFyYW0gb3JkZXJlZEFsbEVsZW1lbnRzTGlzdCBcclxuICAgKiBAcGFyYW0gaGlnaGxpZ2h0SW5zdGFuY2VzIFxyXG4gICAqIEBwYXJhbSBibGFua3NJbnN0YW5jZXMgXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzdGF0aWMgbGlua0hpZ2hsaWdodHNPYmplY3RzKG9yZGVyZWRBbGxFbGVtZW50c0xpc3Q6IENsb3plRWxlbWVudFtdLCBoaWdobGlnaHRJbnN0YW5jZXM6IEhpZ2hsaWdodFtdLCBibGFua3NJbnN0YW5jZXM6IEJsYW5rW10pOiB2b2lkIHtcclxuICAgIGZvciAodmFyIGJsYW5rIG9mIGJsYW5rc0luc3RhbmNlcykge1xyXG4gICAgICB2YXIgbmV4dEJsYW5rSW5kZXhJbkFycmF5ID0gb3JkZXJlZEFsbEVsZW1lbnRzTGlzdC5pbmRleE9mKGJsYW5rKTtcclxuICAgICAgdmFyIGhpZ2hsaWdodHNCZWZvcmVCbGFuayA9IG9yZGVyZWRBbGxFbGVtZW50c0xpc3RcclxuICAgICAgICAuc2xpY2UoMCwgbmV4dEJsYW5rSW5kZXhJbkFycmF5KVxyXG4gICAgICAgIC5maWx0ZXIoZSA9PiBlLnR5cGUgPT09IENsb3plRWxlbWVudFR5cGUuSGlnaGxpZ2h0KVxyXG4gICAgICAgIC5tYXAoZSA9PiBlIGFzIEhpZ2hsaWdodClcclxuICAgICAgICAucmV2ZXJzZSgpO1xyXG4gICAgICB2YXIgaGlnaGxpZ2h0c0FmdGVyQmxhbmsgPSBvcmRlcmVkQWxsRWxlbWVudHNMaXN0XHJcbiAgICAgICAgLnNsaWNlKG5leHRCbGFua0luZGV4SW5BcnJheSArIDEpXHJcbiAgICAgICAgLmZpbHRlcihlID0+IGUudHlwZSA9PT0gQ2xvemVFbGVtZW50VHlwZS5IaWdobGlnaHQpXHJcbiAgICAgICAgLm1hcChlID0+IGUgYXMgSGlnaGxpZ2h0KTtcclxuICAgICAgQmxhbmtMb2FkZXIuaW5zdGFuY2UubGlua0hpZ2hsaWdodElkVG9PYmplY3QoYmxhbmssIGhpZ2hsaWdodHNCZWZvcmVCbGFuaywgaGlnaGxpZ2h0c0FmdGVyQmxhbmspO1xyXG4gICAgfVxyXG4gIH1cclxufSIsImltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbWVzc2FnZS1zZXJ2aWNlJztcclxuaW1wb3J0IHsgQmxhbmtMb2FkZXIgfSBmcm9tICcuLi9jb250ZW50LWxvYWRlcnMvYmxhbmstbG9hZGVyJztcclxuaW1wb3J0IHsgQ2xvemVMb2FkZXIgfSBmcm9tICcuLi9jb250ZW50LWxvYWRlcnMvY2xvemUtbG9hZGVyJztcclxuaW1wb3J0IHsgQ2xvemUgfSBmcm9tIFwiLi4vbW9kZWxzL2Nsb3plXCI7XHJcbmltcG9ydCB7IElEYXRhUmVwb3NpdG9yeSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9kYXRhLXJlcG9zaXRvcnlcIjtcclxuaW1wb3J0IHsgSVNldHRpbmdzIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3NldHRpbmdzXCI7XHJcbmltcG9ydCB7IEg1UExvY2FsaXphdGlvbiB9IGZyb20gXCIuLi9zZXJ2aWNlcy9sb2NhbGl6YXRpb25cIjtcclxuaW1wb3J0IHsgQ2xvemVUeXBlLCBTZWxlY3RBbHRlcm5hdGl2ZXMgfSBmcm9tIFwiLi4vbW9kZWxzL2VudW1zXCI7XHJcbmltcG9ydCB7IEhpZ2hsaWdodCB9IGZyb20gXCIuLi9tb2RlbHMvaGlnaGxpZ2h0XCI7XHJcbmltcG9ydCB7IEJsYW5rIH0gZnJvbSBcIi4uL21vZGVscy9ibGFua1wiO1xyXG5pbXBvcnQgeyBDb3JyZWN0bmVzcyB9IGZyb20gJy4uL21vZGVscy9hbnN3ZXInO1xyXG5cclxuaW1wb3J0ICogYXMgUmFjdGl2ZUV2ZW50c0tleXMgZnJvbSAnLi4vLi4vbGliL3JhY3RpdmUtZXZlbnRzLWtleXMnO1xyXG5cclxuaW50ZXJmYWNlIFNjb3JlQ2hhbmdlZCB7XHJcbiAgKHNjb3JlOiBudW1iZXIsIG1heFNjb3JlOiBudW1iZXIpOiB2b2lkO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQXV0b0NoZWNrZWQge1xyXG4gICgpOiB2b2lkO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgU29sdmVkIHtcclxuICAoKTogdm9pZDtcclxufVxyXG5cclxuaW50ZXJmYWNlIFR5cGVkIHtcclxuICAoKTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENsb3plQ29udHJvbGxlciB7XHJcbiAgcHJpdmF0ZSBqcXVlcnk6IEpRdWVyeTtcclxuXHJcbiAgcHJpdmF0ZSBjbG96ZTogQ2xvemU7XHJcbiAgcHJpdmF0ZSBpc1NlbGVjdENsb3plOiBib29sZWFuO1xyXG5cclxuICBwdWJsaWMgb25TY29yZUNoYW5nZWQ6IFNjb3JlQ2hhbmdlZDtcclxuICBwdWJsaWMgb25BdXRvQ2hlY2tlZDogQXV0b0NoZWNrZWQ7XHJcbiAgcHVibGljIG9uU29sdmVkOiBTb2x2ZWQ7XHJcbiAgcHVibGljIG9uVHlwZWQ6IFR5cGVkO1xyXG5cclxuICAvLyBTdG9yYWdlIG9mIHRoZSByYWN0aXZlIG9iamVjdHMgdGhhdCBsaW5rIG1vZGVscyBhbmQgdmlld3NcclxuICBwcml2YXRlIGhpZ2hsaWdodFJhY3RpdmVzOiB7IFtpZDogc3RyaW5nXTogUmFjdGl2ZS5SYWN0aXZlIH0gPSB7fTtcclxuICBwcml2YXRlIGJsYW5rUmFjdGl2ZXM6IHsgW2lkOiBzdHJpbmddOiBSYWN0aXZlLlJhY3RpdmUgfSA9IHt9O1xyXG5cclxuICBwdWJsaWMgZ2V0IG1heFNjb3JlKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5jbG96ZS5ibGFua3MubGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGV0ZWN0IHdoZXRoZXIgdGhlcmUgYXJlIGJsYW5rcyB3aXRoIG1vcmUgdGhhbiBvbmUgc29sdXRpb24uXHJcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGVyZSBpcyBhdCBsZWFzdCBvbmUgYmxhbmsgd2l0aCBtb3JlIHRoYW4gb25lIHNvbHV0aW9uLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBnZXQgaGFzQWx0ZXJuYXRpdmVzKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY2xvemUuYmxhbmtzLnNvbWUoYiA9PiBiLmNvcnJlY3RBbnN3ZXJzWzBdLmFsdGVybmF0aXZlcy5sZW5ndGggPiAxKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgY3VycmVudFNjb3JlKCk6IG51bWJlciB7XHJcbiAgICBjb25zdCBzY29yZSA9IHRoaXMuY2xvemUuYmxhbmtzLnJlZHVjZSgoc2NvcmUsIGIpID0+IHtcclxuICAgICAgY29uc3Qgbm90U2hvd2luZ1NvbHV0aW9uID0gIWIuaXNTaG93aW5nU29sdXRpb247XHJcbiAgICAgIGNvbnN0IGNvcnJlY3RBbnN3ZXJHaXZlbiA9IGIuY29ycmVjdEFuc3dlcnNbMF0uYWx0ZXJuYXRpdmVzLmluZGV4T2YoYi5lbnRlcmVkVGV4dCB8fCAnJykgIT09IC0xO1xyXG5cclxuICAgICAgLy8gRGV0ZWN0IHNtYWxsIG1pc3Rha2VzXHJcbiAgICAgIGNvbnN0IGNsb3NlQ29ycmVjdE1hdGNoZXMgPSBiLmNvcnJlY3RBbnN3ZXJzXHJcbiAgICAgICAgLm1hcChhbnN3ZXIgPT4gYW5zd2VyLmV2YWx1YXRlQXR0ZW1wdChiLmVudGVyZWRUZXh0KSlcclxuICAgICAgICAuZmlsdGVyKGV2YWx1YXRpb24gPT4gZXZhbHVhdGlvbi5jb3JyZWN0bmVzcyA9PT0gQ29ycmVjdG5lc3MuQ2xvc2VNYXRjaCk7XHJcbiAgICAgIGNvbnN0IHNpbWlsYXJBbnN3ZXJHaXZlbiA9IHRoaXMuc2V0dGluZ3MuYWNjZXB0U3BlbGxpbmdFcnJvcnMgJiYgY2xvc2VDb3JyZWN0TWF0Y2hlcy5sZW5ndGggPiAwO1xyXG5cclxuICAgICAgcmV0dXJuIHNjb3JlICs9IChub3RTaG93aW5nU29sdXRpb24gJiYgKGNvcnJlY3RBbnN3ZXJHaXZlbiB8fCBzaW1pbGFyQW5zd2VyR2l2ZW4pKSA/IDEgOiAwO1xyXG4gICAgfSwgMCk7XHJcblxyXG4gICAgcmV0dXJuIE1hdGgubWF4KDAsIHNjb3JlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgYWxsQmxhbmtzRW50ZXJlZCgpIHtcclxuICAgIGlmICh0aGlzLmNsb3plKVxyXG4gICAgICByZXR1cm4gdGhpcy5jbG96ZS5ibGFua3MuZXZlcnkoYmxhbmsgPT4gYmxhbmsuaXNFcnJvciB8fCBibGFuay5pc0NvcnJlY3QgfHwgYmxhbmsuaXNSZXRyeSk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGlzU29sdmVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY2xvemUuaXNTb2x2ZWQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGlzRmlsbGVkT3V0KCkge1xyXG4gICAgaWYgKCF0aGlzLmNsb3plIHx8IHRoaXMuY2xvemUuYmxhbmtzLmxlbmd0aCA9PT0gMClcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICByZXR1cm4gdGhpcy5jbG96ZS5ibGFua3Muc29tZShiID0+IGIuZW50ZXJlZFRleHQgIT09ICcnKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgaXNGdWxseUZpbGxlZE91dCgpIHtcclxuICAgIGlmICghdGhpcy5jbG96ZSB8fCB0aGlzLmNsb3plLmJsYW5rcy5sZW5ndGggPT09IDApXHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgcmV0dXJuIHRoaXMuY2xvemUuYmxhbmtzLmV2ZXJ5KGIgPT4gYi5lbnRlcmVkVGV4dCAhPT0gJycpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZXBvc2l0b3J5OiBJRGF0YVJlcG9zaXRvcnksIHByaXZhdGUgc2V0dGluZ3M6IElTZXR0aW5ncywgcHJpdmF0ZSBsb2NhbGl6YXRpb246IEg1UExvY2FsaXphdGlvbiwgcHJpdmF0ZSBNZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2UpIHtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHMgdXAgYWxsIGJsYW5rcywgdGhlIGNsb3plIGl0c2VsZiBhbmQgdGhlIHJhY3RpdmUgYmluZGluZ3MuXHJcbiAgICogQHBhcmFtICB7SFRNTEVsZW1lbnR9IHJvb3RcclxuICAgKi9cclxuICBpbml0aWFsaXplKHJvb3Q6IEhUTUxFbGVtZW50LCBqcXVlcnk6IEpRdWVyeSkge1xyXG4gICAgdGhpcy5qcXVlcnkgPSBqcXVlcnk7XHJcbiAgICB0aGlzLmlzU2VsZWN0Q2xvemUgPSB0aGlzLnNldHRpbmdzLmNsb3plVHlwZSA9PT0gQ2xvemVUeXBlLlNlbGVjdCA/IHRydWUgOiBmYWxzZTtcclxuXHJcbiAgICB2YXIgYmxhbmtzID0gdGhpcy5yZXBvc2l0b3J5LmdldEJsYW5rcygpO1xyXG5cclxuICAgIGlmICh0aGlzLmlzU2VsZWN0Q2xvemUgJiYgdGhpcy5zZXR0aW5ncy5zZWxlY3RBbHRlcm5hdGl2ZXMgPT09IFNlbGVjdEFsdGVybmF0aXZlcy5BbGwpIHtcclxuICAgICAgZm9yICh2YXIgYmxhbmsgb2YgYmxhbmtzKSB7XHJcbiAgICAgICAgbGV0IG90aGVyQmxhbmtzID0gYmxhbmtzLmZpbHRlcih2ID0+IHYgIT09IGJsYW5rKTtcclxuICAgICAgICBibGFuay5sb2FkQ2hvaWNlc0Zyb21PdGhlckJsYW5rcyhvdGhlckJsYW5rcyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB2YXIgc25pcHBldHMgPSB0aGlzLnJlcG9zaXRvcnkuZ2V0U25pcHBldHMoKTtcclxuICAgIGJsYW5rcy5mb3JFYWNoKGJsYW5rID0+IEJsYW5rTG9hZGVyLmluc3RhbmNlLnJlcGxhY2VTbmlwcGV0cyhibGFuaywgc25pcHBldHMpKTtcclxuXHJcbiAgICB0aGlzLmNsb3plID0gQ2xvemVMb2FkZXIuY3JlYXRlQ2xvemUodGhpcy5yZXBvc2l0b3J5LmdldENsb3plVGV4dCgpLCBibGFua3MpO1xyXG5cclxuICAgIHZhciBjb250YWluZXJzID0gdGhpcy5jcmVhdGVBbmRBZGRDb250YWluZXJzKHJvb3QpO1xyXG4gICAgY29udGFpbmVycy5jbG96ZS5pbm5lckhUTUwgPSB0aGlzLmNsb3plLmh0bWw7XHJcbiAgICB0aGlzLmNyZWF0ZVJhY3RpdmVCaW5kaW5ncygpO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tBbGwgPSAoKSA9PiB7XHJcbiAgICB0aGlzLmNsb3plLmhpZGVBbGxIaWdobGlnaHRzKCk7XHJcbiAgICBmb3IgKHZhciBibGFuayBvZiB0aGlzLmNsb3plLmJsYW5rcykge1xyXG4gICAgICBpZiAoKCFibGFuay5pc0NvcnJlY3QpICYmIGJsYW5rLmVudGVyZWRUZXh0ICE9PSBcIlwiKVxyXG4gICAgICAgIGJsYW5rLmV2YWx1YXRlQXR0ZW1wdCh0cnVlLCB0cnVlKTtcclxuICAgIH1cclxuICAgIHRoaXMucmVmcmVzaENsb3plKCk7XHJcbiAgICB0aGlzLmNoZWNrQW5kTm90aWZ5Q29tcGxldGVuZXNzKCk7XHJcbiAgfVxyXG5cclxuICB0ZXh0VHlwZWQgPSAoYmxhbms6IEJsYW5rKSA9PiB7XHJcbiAgICBibGFuay5vblR5cGVkKCk7XHJcbiAgICBpZiAodGhpcy5vblR5cGVkKVxyXG4gICAgICB0aGlzLm9uVHlwZWQoKTtcclxuICAgIHRoaXMucmVmcmVzaENsb3plKCk7XHJcbiAgfVxyXG5cclxuICBmb2N1cyA9IChibGFuazogQmxhbmspID0+IHtcclxuICAgIGJsYW5rLm9uRm9jdXNzZWQoKTtcclxuICAgIHRoaXMucmVmcmVzaENsb3plKCk7XHJcbiAgfVxyXG5cclxuICBkaXNwbGF5RmVlZGJhY2sgPSAoYmxhbms6IEJsYW5rKSA9PiB7XHJcbiAgICBibGFuay5vbkRpc3BsYXlGZWVkYmFjaygpO1xyXG4gICAgdGhpcy5yZWZyZXNoQ2xvemUoKTtcclxuICB9XHJcblxyXG4gIHNob3dIaW50ID0gKGJsYW5rOiBCbGFuaykgPT4ge1xyXG4gICAgdGhpcy5jbG96ZS5oaWRlQWxsSGlnaGxpZ2h0cygpO1xyXG4gICAgYmxhbmsuc2hvd0hpbnQoKTtcclxuICAgIHRoaXMucmVmcmVzaENsb3plKCk7XHJcbiAgfVxyXG5cclxuICByZXF1ZXN0Q2xvc2VUb29sdGlwID0gKGJsYW5rOiBCbGFuaykgPT4ge1xyXG4gICAgYmxhbmsucmVtb3ZlVG9vbHRpcCgpO1xyXG4gICAgdGhpcy5yZWZyZXNoQ2xvemUoKTtcclxuICAgIHRoaXMuanF1ZXJ5LmZpbmQoXCIjXCIgKyBibGFuay5pZCkuZm9jdXMoKTtcclxuICB9XHJcblxyXG4gIGNoZWNrQmxhbmsgPSAoYmxhbms6IEJsYW5rLCBjYXVzZTogc3RyaW5nKSA9PiB7XHJcbiAgICBpZiAoKGNhdXNlID09PSAnYmx1cicgfHwgY2F1c2UgPT09ICdjaGFuZ2UnKSkge1xyXG4gICAgICBibGFuay5sb3N0Rm9jdXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2F1c2UgPT09ICdjaGFuZ2UnICYmIHRoaXMub25UeXBlZCkge1xyXG4gICAgICB0aGlzLm9uVHlwZWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5zZXR0aW5ncy5hdXRvQ2hlY2spIHtcclxuICAgICAgaWYgKCFibGFuay5lbnRlcmVkVGV4dCB8fCBibGFuay5lbnRlcmVkVGV4dCA9PT0gXCJcIilcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICB0aGlzLmNsb3plLmhpZGVBbGxIaWdobGlnaHRzKCk7XHJcbiAgICAgIGJsYW5rLmV2YWx1YXRlQXR0ZW1wdChmYWxzZSk7XHJcbiAgICAgIHRoaXMuY2hlY2tBbmROb3RpZnlDb21wbGV0ZW5lc3MoKTtcclxuICAgICAgdGhpcy5yZWZyZXNoQ2xvemUoKTtcclxuICAgICAgdGhpcy5vbkF1dG9DaGVja2VkKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoKGNhdXNlID09PSAnZW50ZXInKVxyXG4gICAgICAmJiAoKHRoaXMuc2V0dGluZ3MuYXV0b0NoZWNrICYmIGJsYW5rLmlzQ29ycmVjdCAmJiAhdGhpcy5pc1NvbHZlZClcclxuICAgICAgICB8fCAhdGhpcy5zZXR0aW5ncy5hdXRvQ2hlY2spKSB7XHJcbiAgICAgIC8vIG1vdmUgdG8gbmV4dCBibGFua1xyXG4gICAgICB2YXIgaW5kZXggPSB0aGlzLmNsb3plLmJsYW5rcy5pbmRleE9mKGJsYW5rKTtcclxuICAgICAgdmFyIG5leHRJZDtcclxuICAgICAgd2hpbGUgKGluZGV4IDwgdGhpcy5jbG96ZS5ibGFua3MubGVuZ3RoIC0gMSAmJiAhbmV4dElkKSB7XHJcbiAgICAgICAgaW5kZXgrKztcclxuICAgICAgICBpZiAoIXRoaXMuY2xvemUuYmxhbmtzW2luZGV4XS5pc0NvcnJlY3QpXHJcbiAgICAgICAgICBuZXh0SWQgPSB0aGlzLmNsb3plLmJsYW5rc1tpbmRleF0uaWQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChuZXh0SWQpXHJcbiAgICAgICAgdGhpcy5qcXVlcnkuZmluZChcIiNcIiArIG5leHRJZCkuZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlc2V0ID0gKCkgPT4ge1xyXG4gICAgdGhpcy5jbG96ZS5yZXNldCgpO1xyXG4gICAgdGhpcy5yZWZyZXNoQ2xvemUoKTtcclxuICB9XHJcblxyXG4gIHNob3dTb2x1dGlvbnMgPSAoKSA9PiB7XHJcbiAgICB0aGlzLmNsb3plLnNob3dTb2x1dGlvbnMoKTtcclxuICAgIHRoaXMucmVmcmVzaENsb3plKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZUFuZEFkZENvbnRhaW5lcnMoYWRkVG86IEhUTUxFbGVtZW50KTogeyBjbG96ZTogSFRNTERpdkVsZW1lbnQgfSB7XHJcbiAgICB2YXIgY2xvemVDb250YWluZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjbG96ZUNvbnRhaW5lckVsZW1lbnQuaWQgPSAnaDVwLWNsb3plLWNvbnRhaW5lcic7XHJcbiAgICBpZiAodGhpcy5zZXR0aW5ncy5jbG96ZVR5cGUgPT09IENsb3plVHlwZS5TZWxlY3QpIHtcclxuICAgICAgY2xvemVDb250YWluZXJFbGVtZW50LmNsYXNzTmFtZSA9ICdoNXAtYWR2YW5jZWQtYmxhbmtzLXNlbGVjdC1tb2RlJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNsb3plQ29udGFpbmVyRWxlbWVudC5jbGFzc05hbWUgPSAnaDVwLWFkdmFuY2VkLWJsYW5rcy10eXBlLW1vZGUnO1xyXG4gICAgfVxyXG4gICAgYWRkVG8uYXBwZW5kQ2hpbGQoY2xvemVDb250YWluZXJFbGVtZW50KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjbG96ZTogY2xvemVDb250YWluZXJFbGVtZW50XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVIaWdobGlnaHRCaW5kaW5nKGhpZ2hsaWdodDogSGlnaGxpZ2h0KSB7XHJcbiAgICB0aGlzLmhpZ2hsaWdodFJhY3RpdmVzW2hpZ2hsaWdodC5pZF0gPSBuZXcgUmFjdGl2ZSh7XHJcbiAgICAgIGVsOiAnI2NvbnRhaW5lcl8nICsgaGlnaGxpZ2h0LmlkLFxyXG4gICAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi4vdmlld3MvaGlnaGxpZ2h0LnJhY3RpdmUuaHRtbCcpLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgb2JqZWN0OiBoaWdobGlnaHRcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZUJsYW5rQmluZGluZyhibGFuazogQmxhbmspIHtcclxuICAgIHZhciByYWN0aXZlID0gbmV3IFJhY3RpdmUoe1xyXG4gICAgICBlbDogJyNjb250YWluZXJfJyArIGJsYW5rLmlkLFxyXG4gICAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi4vdmlld3MvYmxhbmsucmFjdGl2ZS5odG1sJyksXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBpc1NlbGVjdENsb3plOiB0aGlzLmlzU2VsZWN0Q2xvemUsXHJcbiAgICAgICAgYmxhbms6IGJsYW5rXHJcbiAgICAgIH0sXHJcbiAgICAgIGV2ZW50czoge1xyXG4gICAgICAgIGVudGVyOiBSYWN0aXZlRXZlbnRzS2V5cy5lbnRlcixcclxuICAgICAgICBlc2NhcGU6IFJhY3RpdmVFdmVudHNLZXlzLmVzY2FwZSxcclxuICAgICAgICBhbnlrZXk6IFJhY3RpdmVFdmVudHNLZXlzLmFueWtleVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJhY3RpdmUub24oXCJjaGVja0JsYW5rXCIsIHRoaXMuY2hlY2tCbGFuayk7XHJcbiAgICByYWN0aXZlLm9uKFwic2hvd0hpbnRcIiwgdGhpcy5zaG93SGludCk7XHJcbiAgICByYWN0aXZlLm9uKFwidGV4dFR5cGVkXCIsIHRoaXMudGV4dFR5cGVkKTtcclxuICAgIHJhY3RpdmUub24oXCJjbG9zZU1lc3NhZ2VcIiwgdGhpcy5yZXF1ZXN0Q2xvc2VUb29sdGlwKTtcclxuICAgIHJhY3RpdmUub24oXCJmb2N1c1wiLCB0aGlzLmZvY3VzKTtcclxuICAgIHJhY3RpdmUub24oXCJkaXNwbGF5RmVlZGJhY2tcIiwgdGhpcy5kaXNwbGF5RmVlZGJhY2spO1xyXG5cclxuICAgIHRoaXMuYmxhbmtSYWN0aXZlc1tibGFuay5pZF0gPSByYWN0aXZlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGVSYWN0aXZlQmluZGluZ3MoKSB7XHJcbiAgICBmb3IgKHZhciBoaWdobGlnaHQgb2YgdGhpcy5jbG96ZS5oaWdobGlnaHRzKSB7XHJcbiAgICAgIHRoaXMuY3JlYXRlSGlnaGxpZ2h0QmluZGluZyhoaWdobGlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAodmFyIGJsYW5rIG9mIHRoaXMuY2xvemUuYmxhbmtzKSB7XHJcbiAgICAgIHRoaXMuY3JlYXRlQmxhbmtCaW5kaW5nKGJsYW5rKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVwZGF0ZXMgYWxsIHZpZXdzIG9mIGhpZ2hsaWdodHMgYW5kIGJsYW5rcy4gQ2FuIGJlIGNhbGxlZCB3aGVuIGEgbW9kZWxcclxuICAgKiB3YXMgY2hhbmdlZFxyXG4gICAqL1xyXG4gIHByaXZhdGUgcmVmcmVzaENsb3plKCkge1xyXG4gICAgZm9yICh2YXIgaGlnaGxpZ2h0IG9mIHRoaXMuY2xvemUuaGlnaGxpZ2h0cykge1xyXG4gICAgICB2YXIgaGlnaGxpZ2h0UmFjdGl2ZSA9IHRoaXMuaGlnaGxpZ2h0UmFjdGl2ZXNbaGlnaGxpZ2h0LmlkXTtcclxuICAgICAgaGlnaGxpZ2h0UmFjdGl2ZS5zZXQoXCJvYmplY3RcIiwgaGlnaGxpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKHZhciBibGFuayBvZiB0aGlzLmNsb3plLmJsYW5rcykge1xyXG4gICAgICB2YXIgYmxhbmtSYWN0aXZlID0gdGhpcy5ibGFua1JhY3RpdmVzW2JsYW5rLmlkXTtcclxuICAgICAgYmxhbmtSYWN0aXZlLnNldChcImJsYW5rXCIsIGJsYW5rKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2hlY2tBbmROb3RpZnlDb21wbGV0ZW5lc3MgPSAoKTogYm9vbGVhbiA9PiB7XHJcbiAgICBpZiAodGhpcy5vblNjb3JlQ2hhbmdlZClcclxuICAgICAgdGhpcy5vblNjb3JlQ2hhbmdlZCh0aGlzLmN1cnJlbnRTY29yZSwgdGhpcy5tYXhTY29yZSk7XHJcblxyXG4gICAgaWYgKHRoaXMuY2xvemUuaXNTb2x2ZWQpIHtcclxuICAgICAgaWYgKHRoaXMub25Tb2x2ZWQpXHJcbiAgICAgICAgdGhpcy5vblNvbHZlZCgpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2VyaWFsaXplQ2xvemUoKTogc3RyaW5nW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuY2xvemUuc2VyaWFsaXplKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGVzZXJpYWxpemVDbG96ZShkYXRhOiBhbnkpOiBib29sZWFuIHtcclxuICAgIGlmICghdGhpcy5jbG96ZSB8fCAhZGF0YSlcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgdGhpcy5jbG96ZS5kZXNlcmlhbGl6ZShkYXRhKTtcclxuICAgIHRoaXMucmVmcmVzaENsb3plKCk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRDb3JyZWN0QW5zd2VyTGlzdCgpOiBzdHJpbmdbXVtdIHtcclxuICAgIGlmICghdGhpcy5jbG96ZSB8fCB0aGlzLmNsb3plLmJsYW5rcy5sZW5ndGggPT09IDApXHJcbiAgICAgIHJldHVybiBbW11dO1xyXG4gICAgbGV0IHJlc3VsdCA9IFtdO1xyXG4gICAgZm9yICh2YXIgYmxhbmsgb2YgdGhpcy5jbG96ZS5ibGFua3MpIHtcclxuICAgICAgcmVzdWx0LnB1c2goYmxhbmsuZ2V0Q29ycmVjdEFuc3dlcnMoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIEV4dGVuZCBhbiBhcnJheSBqdXN0IGxpa2UgSlF1ZXJ5J3MgZXh0ZW5kLlxyXG4gKiBAcGFyYW0ge29iamVjdH0gYXJndW1lbnRzIE9iamVjdHMgdG8gYmUgbWVyZ2VkLlxyXG4gKiBAcmV0dXJuIHtvYmplY3R9IE1lcmdlZCBvYmplY3RzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGV4dGVuZCguLi5hcmdzOiBhbnlbXSkge1xyXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xyXG4gICAgZm9yIChsZXQga2V5IGluIGFyZ3NbaV0pIHtcclxuICAgICAgaWYgKGFyZ3NbaV0uaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYXJnc1swXVtrZXldID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgYXJnc1tpXVtrZXldID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgdGhpcy5leHRlbmQoYXJnc1swXVtrZXldLCBhcmdzW2ldW2tleV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIGFyZ3NbMF1ba2V5XSA9IGFyZ3NbaV1ba2V5XTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGFyZ3NbMF07XHJcbn1cclxuIiwiLyoqXHJcbiAqIFRoaXMgY2xhc3MgY2xlYW5zIGh0bWwgc3RyaW5ncy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBVbnJ3YXBwZXIge1xyXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIGpxdWVyeTogSlF1ZXJ5U3RhdGljKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgXHJcbiAgLyoqXHJcbiAgICogQ2xlYW5zIGh0bWwgc3RyaW5ncyBieSByZW1vdmluZyB0aGUgb3V0bW9zdCBodG1sIHRhZyBvZiB0aGUgc3RyaW5nIGlmIHRoZXJlIGlzIG9ubHkgb25lIHRhZy5cclxuICAgKiBFeGFtcGxlczogIFwiPHA+bXkgdGV4dDwvcD5cIlwiIGJlY29tZXMgXCJteSB0ZXh0XCJcclxuICAgKiAgICAgICAgICAgIFwiPHA+dGV4dCAxPC9wPjxwPnRleHQgMjwvcDI+XCIgc3RheXNcclxuICAgKiBAcGFyYW0gaHRtbCBUaGUgaHRtbCBzdHJpbmdcclxuICAgKiBAcmV0dXJucyB0aGUgY2xlYW5lZCBodG1sIHN0cmluZ1xyXG4gICAqL1xyXG4gIHB1YmxpYyB1bndyYXAoaHRtbDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHZhciBwYXJzZWQgPSB0aGlzLmpxdWVyeShodG1sKTtcclxuICAgIGlmIChwYXJzZWQubGVuZ3RoICE9PSAxKSB7XHJcbiAgICAgIHJldHVybiBodG1sO1xyXG4gICAgfVxyXG4gICAgbGV0IHVud3JhcHBlZCA9IHBhcnNlZC51bndyYXAoKS5odG1sKCk7XHJcbiAgICByZXR1cm4gdW53cmFwcGVkO1xyXG4gIH1cclxufSIsImltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuL21lc3NhZ2UnO1xyXG5pbXBvcnQgeyBIaWdobGlnaHQgfSBmcm9tICcuL2hpZ2hsaWdodCc7XHJcbmltcG9ydCB7IElTZXR0aW5ncyB9IGZyb20gJy4uL3NlcnZpY2VzL3NldHRpbmdzJztcclxuaW1wb3J0ICogYXMganNkaWZmIGZyb20gJ2RpZmYnO1xyXG5cclxuZXhwb3J0IGVudW0gQ29ycmVjdG5lc3Mge1xyXG4gIEV4YWN0TWF0Y2gsXHJcbiAgQ2xvc2VNYXRjaCxcclxuICBOb01hdGNoXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBFdmFsdWF0aW9uIHtcclxuICBwdWJsaWMgY29ycmVjdG5lc3M6IENvcnJlY3RuZXNzO1xyXG4gIHB1YmxpYyBjaGFyYWN0ZXJEaWZmZXJlbmNlQ291bnQ6IG51bWJlcjtcclxuICBwdWJsaWMgdXNlZEFsdGVybmF0aXZlOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB1c2VkQW5zd2VyOiBBbnN3ZXIpIHtcclxuICAgIHRoaXMuY29ycmVjdG5lc3MgPSBDb3JyZWN0bmVzcy5Ob01hdGNoO1xyXG4gICAgdGhpcy5jaGFyYWN0ZXJEaWZmZXJlbmNlQ291bnQgPSAwO1xyXG4gICAgdGhpcy51c2VkQWx0ZXJuYXRpdmUgPSBcIlwiO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFJlcHJlc2VudHMgYSBwb3NzaWJsZSBhbnN3ZXIgdGhlIGNvbnRlbnQgYXV0aG9yIGVudGVycyBmb3IgYSBibGFuaywgZS5nLiB0aGUgY29ycmVjdCBvciBhbiBpbmNvcnJlY3QgYW5zd2VyLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEFuc3dlciB7XHJcbiAgLyoqXHJcbiAgICogVGhlIGFsdGVybmF0aXZlcyBhcmUgZXF1aXZhbGVudCBzdHJpbmdzIHRoYXQgdGhlIGxpYnJhcnkgc2hvdWxkIHRyZWF0IHRoZSBzYW1lIHdheSwgZS5nLiBzaG93IHRoZSBzYW1lIGZlZWRiYWNrLiBcclxuICAgKi9cclxuICBhbHRlcm5hdGl2ZXM6IHN0cmluZ1tdO1xyXG5cclxuICAvKipcclxuICAgKiBUaGlzIGlzIHRoZSBtZXNzYWdlIHRoYXQgaXMgZGlzcGxheWVkIHdoZW4gdGhlIGFuc3dlciB3YXMgZW50ZXJlZCBieSB0aGUgdXNlci5cclxuICAgKi9cclxuICBtZXNzYWdlOiBNZXNzYWdlO1xyXG5cclxuICAvKipcclxuICAgKiBJcyB0cnVlIGlmIHRoZSBleHBlY3RlZCB0ZXh0IGZvciB0aGlzIGFuc3dlciBpcyBlbXB0eS5cclxuICAgKi9cclxuICBhcHBsaWVzQWx3YXlzOiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IGFuc3dlclRleHQgLSBUaGUgZXhwZWN0ZWQgYW5zd2VyLiBBbHRlcm5hdGl2ZXMgYXJlIHNlcGFyYXRlZCBieSB8IG9yIDsgLiAoZS5nLiBcIkFsdGVybmF0aXZlIDF8QWx0ZXJuYXRpdmUgMnxBbHRlcm5hdGl2ZSAzfC4uLlwiICAtb3ItIFwiQWx0ZXJuYXRpdmUgMTtBbHRlcm5hdGl2ZSAyO0FsdGVybmF0aXZlIDNcIilcclxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IHJlYWN0aW9uIC0gVGhlIHRvb2x0aXAgdGhhdCBzaG91bGQgYmUgZGlzcGxheWVkLiBGb3JtYXQ6IFRvb2x0aXAgVGV4dDshIS0xISEgISErMSEhXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoYW5zd2VyVGV4dDogc3RyaW5nLCByZWFjdGlvbjogc3RyaW5nLCBzaG93SGlnaGxpZ2h0OiBib29sZWFuLCBoaWdobGlnaHQ6IG51bWJlciwgcHJpdmF0ZSBzZXR0aW5nczogSVNldHRpbmdzKSB7XHJcbiAgICB0aGlzLmFsdGVybmF0aXZlcyA9IGFuc3dlclRleHQuc3BsaXQoL1xcLy8pLm1hcChzID0+IHMudHJpbSgpKTtcclxuICAgIHRoaXMubWVzc2FnZSA9IG5ldyBNZXNzYWdlKHJlYWN0aW9uLCBzaG93SGlnaGxpZ2h0LCBoaWdobGlnaHQpO1xyXG4gICAgaWYgKGFuc3dlclRleHQudHJpbSgpID09PSBcIlwiKSB7XHJcbiAgICAgIHRoaXMuYXBwbGllc0Fsd2F5cyA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmFwcGxpZXNBbHdheXMgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIExvb2tzIHRocm91Z2ggdGhlIG9iamVjdCdzIG1lc3NhZ2UgaWRzIGFuZCBzdG9yZXMgdGhlIHJlZmVyZW5jZXMgdG8gdGhlIGhpZ2hsaWdodCBvYmplY3QgZm9yIHRoZXNlIGlkcy5cclxuICAgKiBAcGFyYW0gIHtIaWdobGlnaHRbXX0gaGlnaGxpZ2h0c0JlZm9yZVxyXG4gICAqIEBwYXJhbSAge0hpZ2hsaWdodFtdfSBoaWdobGlnaHRzQWZ0ZXJcclxuICAgKi9cclxuICBwdWJsaWMgbGlua0hpZ2hsaWdodElkVG9PYmplY3QoaGlnaGxpZ2h0c0JlZm9yZTogSGlnaGxpZ2h0W10sIGhpZ2hsaWdodHNBZnRlcjogSGlnaGxpZ2h0W10pIHtcclxuICAgIHRoaXMubWVzc2FnZS5saW5rSGlnaGxpZ2h0KGhpZ2hsaWdodHNCZWZvcmUsIGhpZ2hsaWdodHNBZnRlcik7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIFR1cm5zIG9uIHRoZSBoaWdobGlnaHRzIHNldCBieSB0aGUgY29udGVudCBhdXRob3IgZm9yIHRoaXMgYW5zd2VyLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBhY3RpdmF0ZUhpZ2hsaWdodCgpIHtcclxuICAgIGlmICh0aGlzLm1lc3NhZ2UuaGlnaGxpZ2h0ZWRFbGVtZW50KVxyXG4gICAgICB0aGlzLm1lc3NhZ2UuaGlnaGxpZ2h0ZWRFbGVtZW50LmlzSGlnaGxpZ2h0ZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjbGVhblN0cmluZyh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgdGV4dCA9IHRleHQudHJpbSgpO1xyXG4gICAgcmV0dXJuIHRleHQucmVwbGFjZSgvXFxzezIsfS9nLCBcIiBcIik7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIExvb2tzIHRocm91Z2ggdGhlIGRpZmYgYW5kIGNoZWNrcyBob3cgbWFueSBjaGFyYWN0ZXIgY2hhbmdlIG9wZXJhdGlvbnMgYXJlIG5lZWRlZCB0byB0dXJuIG9uZSBzdHJpbmcgaW50byB0aGUgb3RoZXIuIFNob3VsZCByZXR1cm4gdGhlIHNhbWUgcmVzdWx0cyBhcyB0aGUgTGV2ZW5zdGhlaW4gZGlzdGFuY2UuIFxyXG4gICAqIEBwYXJhbSAge1t7YWRkZWQ/OmJvb2xlYW4sIGJvb2xlYW46IHJlbW92ZWQ/LCBzdHJpbmc6IHZhbHVlfV19IGRpZmYgLSBhcyByZXR1cm5lZCBieSBqc2RpZmZcclxuICAgKiBAcmV0dXJucyBudW1iZXIgLSB0aGUgY291bnQgb2YgY2hhbmdlcyAocmVwbGFjZSwgYWRkLCBkZWxldGUpIG5lZWRlZCB0byBjaGFuZ2UgdGhlIHRleHQgZnJvbSBvbmUgc3RyaW5nIHRvIHRoZSBvdGhlciBcclxuICAgKi9cclxuICBwcml2YXRlIGdldENoYW5nZXNDb3VudEZyb21EaWZmKGRpZmY6IGpzZGlmZi5DaGFuZ2VbXSk6IG51bWJlciB7XHJcbiAgICB2YXIgdG90YWxDaGFuZ2VzQ291bnQgPSAwO1xyXG4gICAgdmFyIGxhc3RUeXBlID0gXCJcIjtcclxuICAgIHZhciBsYXN0Q291bnQgPSAwO1xyXG5cclxuICAgIGZvciAodmFyIGVsZW1lbnQgb2YgZGlmZikge1xyXG4gICAgICBpZiAoZWxlbWVudC5yZW1vdmVkKSB7XHJcbiAgICAgICAgdG90YWxDaGFuZ2VzQ291bnQgKz0gZWxlbWVudC52YWx1ZS5sZW5ndGg7XHJcbiAgICAgICAgbGFzdFR5cGUgPSBcInJlbW92ZWRcIjtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmIChlbGVtZW50LmFkZGVkKSB7XHJcbiAgICAgICAgaWYgKGxhc3RUeXBlID09PSBcInJlbW92ZWRcIikge1xyXG4gICAgICAgICAgaWYgKGxhc3RDb3VudCA8IGVsZW1lbnQudmFsdWUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRvdGFsQ2hhbmdlc0NvdW50ICs9IGVsZW1lbnQudmFsdWUubGVuZ3RoIC0gbGFzdENvdW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0b3RhbENoYW5nZXNDb3VudCArPSBlbGVtZW50LnZhbHVlLmxlbmd0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGFzdFR5cGUgPSBcImFkZGVkXCI7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgbGFzdFR5cGUgPSBcInNhbWVcIjtcclxuICAgICAgfVxyXG4gICAgICBsYXN0Q291bnQgPSBlbGVtZW50LnZhbHVlLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdG90YWxDaGFuZ2VzQ291bnQ7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgaG93IG1hbnkgY2hhcmFjdGVycyBjYW4gYmUgd3JvbmcgdG8gc3RpbGwgYmUgY291bnRlZCBhcyBhIHNwZWxsaW5nIG1pc3Rha2UuXHJcbiAgICogSWYgc3BlbGxpbmcgbWlzdGFrZXMgYXJlIHR1cm5lZCBvZmYgdGhyb3VnaCB0aGUgc2V0dGluZ3MsIGl0IHdpbGwgcmV0dXJuIDAuXHJcbiAgICogQHBhcmFtICB7c3RyaW5nfSB0ZXh0XHJcbiAgICogQHJldHVybnMgbnVtYmVyXHJcbiAgICovXHJcblxyXG4gIHByaXZhdGUgZ2V0QWNjZXB0YWJsZVNwZWxsaW5nTWlzdGFrZXModGV4dDogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgIHZhciBhY2NlcHRhYmxlVHlwb0NvdW50OiBudW1iZXI7XHJcbiAgICBpZiAodGhpcy5zZXR0aW5ncy53YXJuU3BlbGxpbmdFcnJvcnMgfHwgdGhpcy5zZXR0aW5ncy5hY2NlcHRTcGVsbGluZ0Vycm9ycykgLy8gVE9ETzogY29uc2lkZXIgcmVtb3ZhbFxyXG4gICAgICBhY2NlcHRhYmxlVHlwb0NvdW50ID0gTWF0aC5mbG9vcih0ZXh0Lmxlbmd0aCAvIDEwKSArIDE7XHJcbiAgICBlbHNlXHJcbiAgICAgIGFjY2VwdGFibGVUeXBvQ291bnQgPSAwO1xyXG5cclxuICAgIHJldHVybiBhY2NlcHRhYmxlVHlwb0NvdW50O1xyXG4gIH1cclxuICAvKipcclxuICAgKiBDaGVja3MgaWYgdGhlIHRleHQgZW50ZXJlZCBieSB0aGUgdXNlciBpbiBhbiBldHRlbXB0IGlzIG1hdGNoZWQgYnkgdGhlIGFuc3dlcixcclxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IGF0dGVtcHQgVGhlIHRleHQgZW50ZXJlZCBieSB0aGUgdXNlci5cclxuICAgKiBAcmV0dXJucyBFdmFsdWF0aW9uIGluZGljYXRlcyBpZiB0aGUgZW50ZXJlZCB0ZXh0IGlzIG1hdGNoZWQgYnkgdGhlIGFuc3dlci5cclxuICAgKi9cclxuICBwdWJsaWMgZXZhbHVhdGVBdHRlbXB0KGF0dGVtcHQ6IHN0cmluZyk6IEV2YWx1YXRpb24ge1xyXG4gICAgdmFyIGNsZWFuZWRBdHRlbXB0ID0gdGhpcy5jbGVhblN0cmluZyhhdHRlbXB0KTtcclxuICAgIHZhciBldmFsdWF0aW9uID0gbmV3IEV2YWx1YXRpb24odGhpcyk7XHJcblxyXG4gICAgZm9yICh2YXIgYWx0ZXJuYXRpdmUgb2YgdGhpcy5hbHRlcm5hdGl2ZXMpIHtcclxuICAgICAgdmFyIGNsZWFuZWRBbHRlcm5hdGl2ZSA9IHRoaXMuY2xlYW5TdHJpbmcoYWx0ZXJuYXRpdmUpO1xyXG5cclxuICAgICAgdmFyIGRpZmYgPSBqc2RpZmYuZGlmZkNoYXJzKGNsZWFuZWRBbHRlcm5hdGl2ZSwgY2xlYW5lZEF0dGVtcHQsXHJcbiAgICAgICAgeyBpZ25vcmVDYXNlOiAhdGhpcy5zZXR0aW5ncy5jYXNlU2Vuc2l0aXZlIH0pO1xyXG4gICAgICB2YXIgY2hhbmdlQ291bnQgPSB0aGlzLmdldENoYW5nZXNDb3VudEZyb21EaWZmKGRpZmYpO1xyXG5cclxuICAgICAgaWYgKGNoYW5nZUNvdW50ID09PSAwKSB7XHJcbiAgICAgICAgZXZhbHVhdGlvbi51c2VkQWx0ZXJuYXRpdmUgPSBjbGVhbmVkQWx0ZXJuYXRpdmU7XHJcbiAgICAgICAgZXZhbHVhdGlvbi5jb3JyZWN0bmVzcyA9IENvcnJlY3RuZXNzLkV4YWN0TWF0Y2g7XHJcbiAgICAgICAgcmV0dXJuIGV2YWx1YXRpb247XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChjaGFuZ2VDb3VudCA8PSB0aGlzLmdldEFjY2VwdGFibGVTcGVsbGluZ01pc3Rha2VzKGFsdGVybmF0aXZlKVxyXG4gICAgICAgICYmIChldmFsdWF0aW9uLmNoYXJhY3RlckRpZmZlcmVuY2VDb3VudCA9PT0gMCB8fCBjaGFuZ2VDb3VudCA8IGV2YWx1YXRpb24uY2hhcmFjdGVyRGlmZmVyZW5jZUNvdW50KSkge1xyXG4gICAgICAgIGV2YWx1YXRpb24udXNlZEFsdGVybmF0aXZlID0gY2xlYW5lZEFsdGVybmF0aXZlO1xyXG4gICAgICAgIGV2YWx1YXRpb24uY29ycmVjdG5lc3MgPSBDb3JyZWN0bmVzcy5DbG9zZU1hdGNoO1xyXG4gICAgICAgIGV2YWx1YXRpb24uY2hhcmFjdGVyRGlmZmVyZW5jZUNvdW50ID0gY2hhbmdlQ291bnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBldmFsdWF0aW9uO1xyXG4gIH1cclxufSIsImltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbWVzc2FnZS1zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ2xvemVFbGVtZW50LCBDbG96ZUVsZW1lbnRUeXBlIH0gZnJvbSAnLi9jbG96ZS1lbGVtZW50JztcclxuaW1wb3J0IHsgQW5zd2VyLCBDb3JyZWN0bmVzcyB9IGZyb20gJy4vYW5zd2VyJztcclxuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4vbWVzc2FnZSc7XHJcbmltcG9ydCB7IE1lc3NhZ2VUeXBlLCBDbG96ZVR5cGUsIFNlbGVjdEFsdGVybmF0aXZlcyB9IGZyb20gJy4vZW51bXMnO1xyXG5pbXBvcnQgeyBINVBMb2NhbGl6YXRpb24sIExvY2FsaXphdGlvbkxhYmVscyB9IGZyb20gJy4uL3NlcnZpY2VzL2xvY2FsaXphdGlvbic7XHJcbmltcG9ydCB7IElTZXR0aW5ncyB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zZXR0aW5nc1wiO1xyXG5pbXBvcnQgeyBnZXRMb25nZXN0U3RyaW5nLCBzaHVmZmxlQXJyYXkgfSBmcm9tIFwiLi4vLi4vbGliL2hlbHBlcnNcIjtcclxuaW1wb3J0ICogYXMganNkaWZmIGZyb20gJ2RpZmYnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJsYW5rIGV4dGVuZHMgQ2xvemVFbGVtZW50IHtcclxuICAvLyBjb250ZW50XHJcbiAgY29ycmVjdEFuc3dlcnM6IEFuc3dlcltdO1xyXG4gIGluY29ycmVjdEFuc3dlcnM6IEFuc3dlcltdO1xyXG4gIGhpbnQ6IE1lc3NhZ2U7XHJcbiAgaWQ6IHN0cmluZztcclxuICBjaG9pY2VzOiBzdHJpbmdbXTtcclxuICBoYXNIaW50OiBib29sZWFuO1xyXG5cclxuICAvLyB2aWV3bW9kZWwgc3R1ZmZcclxuXHJcbiAgbGFzdENoZWNrZWRUZXh0OiBzdHJpbmc7XHJcbiAgZW50ZXJlZFRleHQ6IHN0cmluZztcclxuICBpc0NvcnJlY3Q6IGJvb2xlYW47XHJcbiAgaXNFcnJvcjogYm9vbGVhbjtcclxuICBpc1JldHJ5OiBib29sZWFuO1xyXG4gIGhhc1BlbmRpbmdGZWVkYmFjazogYm9vbGVhbjtcclxuICBpc1Nob3dpbmdTb2x1dGlvbjogYm9vbGVhbjtcclxuICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgbWluVGV4dExlbmd0aDogbnVtYmVyO1xyXG4gIHNwZWVjaEJ1YmJsZTogYW55O1xyXG5cclxuICAvKipcclxuICAgKiBBZGQgaW5jb3JyZWN0IGFuc3dlcnMgYWZ0ZXIgaW5pdGlhbGl6aW5nIHRoZSBvYmplY3QuIENhbGwgZmluaXNoSW5pdGlhbGl6YXRpb24oKVxyXG4gICAqIHdoZW4gZG9uZS5cclxuICAgKiBAcGFyYW0gIHtJU2V0dGluZ3N9IHNldHRpbmdzXHJcbiAgICogQHBhcmFtICB7c3RyaW5nfSBpZFxyXG4gICAqIEBwYXJhbSAge3N0cmluZ30gY29ycmVjdFRleHQ/XHJcbiAgICogQHBhcmFtICB7c3RyaW5nfSBoaW50VGV4dD9cclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNldHRpbmdzOiBJU2V0dGluZ3MsIHByaXZhdGUgbG9jYWxpemF0aW9uOiBINVBMb2NhbGl6YXRpb24sIHByaXZhdGUganF1ZXJ5OiBKUXVlcnlTdGF0aWMsIHByaXZhdGUgbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlLCBpZDogc3RyaW5nKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMuZW50ZXJlZFRleHQgPSBcIlwiO1xyXG4gICAgdGhpcy5jb3JyZWN0QW5zd2VycyA9IG5ldyBBcnJheSgpO1xyXG4gICAgdGhpcy5pbmNvcnJlY3RBbnN3ZXJzID0gbmV3IEFycmF5KCk7XHJcbiAgICB0aGlzLmNob2ljZXMgPSBuZXcgQXJyYXkoKTtcclxuICAgIHRoaXMudHlwZSA9IENsb3plRWxlbWVudFR5cGUuQmxhbms7XHJcblxyXG4gICAgdGhpcy5pZCA9IGlkO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBDYWxsIHRoaXMgbWV0aG9kIHdoZW4gYWxsIGluY29ycmVjdCBhbnN3ZXJzIGhhdmUgYmVlbiBhZGRlZC5cclxuICAqL1xyXG4gIHB1YmxpYyBmaW5pc2hJbml0aWFsaXphdGlvbigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnNldHRpbmdzLmNsb3plVHlwZSA9PT0gQ2xvemVUeXBlLlNlbGVjdCAmJiB0aGlzLnNldHRpbmdzLnNlbGVjdEFsdGVybmF0aXZlcyA9PT0gU2VsZWN0QWx0ZXJuYXRpdmVzLkFsdGVybmF0aXZlcykge1xyXG4gICAgICB0aGlzLmxvYWRDaG9pY2VzRnJvbU93bkFsdGVybmF0aXZlcygpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jYWxjdWxhdGVNaW5UZXh0TGVuZ3RoKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWRkQ29ycmVjdEFuc3dlcihhbnN3ZXI6IEFuc3dlcikge1xyXG4gICAgdGhpcy5jb3JyZWN0QW5zd2Vycy5wdXNoKGFuc3dlcik7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0Q29ycmVjdEFuc3dlcnMoKTogc3RyaW5nW10ge1xyXG4gICAgbGV0IHJlc3VsdCA9IFtdO1xyXG4gICAgZm9yIChsZXQgYW5zd2VyIG9mIHRoaXMuY29ycmVjdEFuc3dlcnMpIHtcclxuICAgICAgcmVzdWx0ID0gcmVzdWx0LmNvbmNhdChhbnN3ZXIuYWx0ZXJuYXRpdmVzKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0SGludChtZXNzYWdlOiBNZXNzYWdlKSB7XHJcbiAgICB0aGlzLmhpbnQgPSBtZXNzYWdlO1xyXG4gICAgdGhpcy5oYXNIaW50ID0gdGhpcy5oaW50LnRleHQgIT09IFwiXCI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZGRzIHRoZSBpbmNvcnJlY3QgYW5zd2VyIHRvIHRoZSBsaXN0LlxyXG4gICAqIEBwYXJhbSB0ZXh0IC0gV2hhdCB0aGUgdXNlciBtdXN0IGVudGVyLlxyXG4gICAqIEBwYXJhbSByZWFjdGlvbiAgLSBXaGF0IHRoZSB1c2VyIGdldHMgZGlzcGxheWVkIHdoZW4gaGUgZW50ZXJlcyB0aGUgdGV4dC5cclxuICAgKi9cclxuICBwdWJsaWMgYWRkSW5jb3JyZWN0QW5zd2VyKHRleHQ6IHN0cmluZywgcmVhY3Rpb246IHN0cmluZywgc2hvd0hpZ2hsaWdodDogYm9vbGVhbiwgaGlnaGxpZ2h0OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMuaW5jb3JyZWN0QW5zd2Vycy5wdXNoKFxyXG4gICAgICBuZXcgQW5zd2VyKHRleHQsIHJlYWN0aW9uLCBzaG93SGlnaGxpZ2h0LCBoaWdobGlnaHQsIHRoaXMuc2V0dGluZ3MpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgaG93IG1hbnkgY2hhcmFjdGVycyB0aGUgaW5wdXQgYm94IG11c3QgaGF2ZSBiZSB0byBhbGxvdyBmb3IgYWxsIGNvcnJlY3QgYW5zd2Vycy5cclxuICAgKi9cclxuICAvLyBUT0RPOiByZWZhY3RvclxyXG4gIHByaXZhdGUgY2FsY3VsYXRlTWluVGV4dExlbmd0aCgpOiB2b2lkIHtcclxuICAgIHZhciBhbnN3ZXJzOiBzdHJpbmdbXSA9IG5ldyBBcnJheSgpO1xyXG4gICAgZm9yIChsZXQgY29ycmVjdEFuc3dlciBvZiB0aGlzLmNvcnJlY3RBbnN3ZXJzKSB7XHJcbiAgICAgIGFuc3dlcnMucHVzaChnZXRMb25nZXN0U3RyaW5nKGNvcnJlY3RBbnN3ZXIuYWx0ZXJuYXRpdmVzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuc2V0dGluZ3MuY2xvemVUeXBlID09PSBDbG96ZVR5cGUuU2VsZWN0KSB7XHJcbiAgICAgIGZvciAobGV0IGluY29ycmVjdEFuc3dlciBvZiB0aGlzLmluY29ycmVjdEFuc3dlcnMpIHtcclxuICAgICAgICBhbnN3ZXJzLnB1c2goZ2V0TG9uZ2VzdFN0cmluZyhpbmNvcnJlY3RBbnN3ZXIuYWx0ZXJuYXRpdmVzKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB2YXIgbG9uZ2VzdEFuc3dlciA9IGdldExvbmdlc3RTdHJpbmcoYW5zd2Vycyk7XHJcbiAgICB2YXIgbCA9IGxvbmdlc3RBbnN3ZXIubGVuZ3RoO1xyXG4gICAgdGhpcy5taW5UZXh0TGVuZ3RoID0gTWF0aC5tYXgoMTAsIGwgLSAobCAlIDEwKSArIDEwKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYSBsaXN0IG9mIGNob2ljZXMgZnJvbSBhbGwgYWx0ZXJuYXRpdmVzIHByb3ZpZGVkIGJ5XHJcbiAgICogdGhlIGNvcnJlY3QgYW5kIGluY29ycmVjdCBhbnN3ZXJzLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgbG9hZENob2ljZXNGcm9tT3duQWx0ZXJuYXRpdmVzKCk6IHN0cmluZ1tdIHtcclxuICAgIHRoaXMuY2hvaWNlcyA9IG5ldyBBcnJheSgpO1xyXG4gICAgZm9yIChsZXQgYW5zd2VyIG9mIHRoaXMuY29ycmVjdEFuc3dlcnMpIHtcclxuICAgICAgZm9yIChsZXQgYWx0ZXJuYXRpdmUgb2YgYW5zd2VyLmFsdGVybmF0aXZlcykge1xyXG4gICAgICAgIHRoaXMuY2hvaWNlcy5wdXNoKGFsdGVybmF0aXZlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGFuc3dlciBvZiB0aGlzLmluY29ycmVjdEFuc3dlcnMpIHtcclxuICAgICAgZm9yIChsZXQgYWx0ZXJuYXRpdmUgb2YgYW5zd2VyLmFsdGVybmF0aXZlcykge1xyXG4gICAgICAgIHRoaXMuY2hvaWNlcy5wdXNoKGFsdGVybmF0aXZlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2hvaWNlcyA9IHNodWZmbGVBcnJheSh0aGlzLmNob2ljZXMpO1xyXG4gICAgdGhpcy5jaG9pY2VzLnVuc2hpZnQoXCJcIik7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuY2hvaWNlcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYSBsaXN0IG9mIGNob2ljZXMgZnJvbSBhbGwgY29ycmVjdCBhbnN3ZXJzIG9mIHRoZSBjbG96ZS5cclxuICAgKiBAcGFyYW0gb3RoZXJCbGFua3MgQWxsIE9USEVSIGJsYW5rcyBpbiB0aGUgY2xvemUuIChleGNsdWRlcyB0aGUgY3VycmVudCBvbmUhKVxyXG4gICAqL1xyXG4gIHB1YmxpYyBsb2FkQ2hvaWNlc0Zyb21PdGhlckJsYW5rcyhvdGhlckJsYW5rczogQmxhbmtbXSk6IHN0cmluZ1tdIHtcclxuICAgIGxldCBvd25DaG9pY2VzID0gbmV3IEFycmF5KCk7XHJcbiAgICBmb3IgKGxldCBhbnN3ZXIgb2YgdGhpcy5jb3JyZWN0QW5zd2Vycykge1xyXG4gICAgICBmb3IgKGxldCBhbHRlcm5hdGl2ZSBvZiBhbnN3ZXIuYWx0ZXJuYXRpdmVzKSB7XHJcbiAgICAgICAgb3duQ2hvaWNlcy5wdXNoKGFsdGVybmF0aXZlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBvdGhlckNob2ljZXMgPSBuZXcgQXJyYXkoKTtcclxuICAgIGZvciAobGV0IG90aGVyQmxhbmsgb2Ygb3RoZXJCbGFua3MpIHtcclxuICAgICAgZm9yIChsZXQgYW5zd2VyIG9mIG90aGVyQmxhbmsuY29ycmVjdEFuc3dlcnMpIHtcclxuICAgICAgICBmb3IgKGxldCBhbHRlcm5hdGl2ZSBvZiBhbnN3ZXIuYWx0ZXJuYXRpdmVzKSB7XHJcbiAgICAgICAgICBvdGhlckNob2ljZXMucHVzaChhbHRlcm5hdGl2ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb3RoZXJDaG9pY2VzID0gc2h1ZmZsZUFycmF5KG90aGVyQ2hvaWNlcyk7XHJcblxyXG4gICAgbGV0IG1heENob2ljZXMgPSB0aGlzLnNldHRpbmdzLnNlbGVjdEFsdGVybmF0aXZlUmVzdHJpY3Rpb247XHJcbiAgICBpZiAobWF4Q2hvaWNlcyA9PT0gdW5kZWZpbmVkIHx8IG1heENob2ljZXMgPT09IDApXHJcbiAgICAgIG1heENob2ljZXMgPSBvd25DaG9pY2VzLmxlbmd0aCArIG90aGVyQ2hvaWNlcy5sZW5ndGg7XHJcblxyXG4gICAgbGV0IGxlZnRPdmVyQ2hvaWNlcyA9IG1heENob2ljZXMgLSBvd25DaG9pY2VzLmxlbmd0aDtcclxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgbGVmdE92ZXJDaG9pY2VzICYmIHggPCBvdGhlckNob2ljZXMubGVuZ3RoOyB4KyspIHtcclxuICAgICAgaWYgKG93bkNob2ljZXMuaW5kZXhPZihvdGhlckNob2ljZXNbeF0pID49IDApIHtcclxuICAgICAgICBsZWZ0T3ZlckNob2ljZXMrKztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBvd25DaG9pY2VzLnB1c2gob3RoZXJDaG9pY2VzW3hdKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2hvaWNlcyA9IHNodWZmbGVBcnJheShvd25DaG9pY2VzKTtcclxuICAgIHRoaXMuY2hvaWNlcy51bnNoaWZ0KFwiXCIpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmNob2ljZXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIENsZWFycyB0aGUgYmxhbmsgZnJvbSBhbGwgZW50ZXJlZCB0ZXh0IGFuZCBoaWRlcyBwb3B1cHMuXHJcbiAgKi9cclxuICBwdWJsaWMgcmVzZXQoKSB7XHJcbiAgICB0aGlzLmVudGVyZWRUZXh0ID0gXCJcIjtcclxuICAgIHRoaXMubGFzdENoZWNrZWRUZXh0ID0gXCJcIjtcclxuICAgIHRoaXMucmVtb3ZlVG9vbHRpcCgpO1xyXG4gICAgdGhpcy5zZXRBbnN3ZXJTdGF0ZShNZXNzYWdlVHlwZS5Ob25lKTtcclxuICAgIHRoaXMuaGFzUGVuZGluZ0ZlZWRiYWNrID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXRzIHRoZSBibGFuayB0byBhIHN0YXRlIGluIHdoaWNoIHRoZSBjb3JyZWN0IHNvbHV0aW9uIGlmIHNob3duIGlmIHRoZSB1c2VyXHJcbiAgICogaGFzbid0IGVudGVyZWQgYSBjb3JyZWN0IG9uZSBzbyBmYXIuXHJcbiAgICovXHJcbiAgcHVibGljIHNob3dTb2x1dGlvbigpIHtcclxuICAgIHRoaXMuZXZhbHVhdGVBdHRlbXB0KHRydWUpO1xyXG4gICAgdGhpcy5yZW1vdmVUb29sdGlwKCk7XHJcbiAgICBpZiAodGhpcy5pc0NvcnJlY3QpXHJcbiAgICAgIHJldHVybjtcclxuICAgIHRoaXMuZW50ZXJlZFRleHQgPSB0aGlzLmNvcnJlY3RBbnN3ZXJzWzBdLmFsdGVybmF0aXZlc1swXTtcclxuICAgIHRoaXMuc2V0QW5zd2VyU3RhdGUoTWVzc2FnZVR5cGUuU2hvd1NvbHV0aW9uKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBvbkZvY3Vzc2VkKCkge1xyXG4gICAgaWYgKHRoaXMuaGFzUGVuZGluZ0ZlZWRiYWNrKSB7XHJcbiAgICAgIHRoaXMuZXZhbHVhdGVBdHRlbXB0KGZhbHNlKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNldHRpbmdzLmNsb3plVHlwZSA9PT0gQ2xvemVUeXBlLlNlbGVjdCkge1xyXG4gICAgICB0aGlzLnNldEFuc3dlclN0YXRlKE1lc3NhZ2VUeXBlLk5vbmUpO1xyXG4gICAgICB0aGlzLmxhc3RDaGVja2VkVGV4dCA9IFwiXCI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25EaXNwbGF5RmVlZGJhY2soKSB7XHJcbiAgICBpZiAodGhpcy5oYXNQZW5kaW5nRmVlZGJhY2spIHtcclxuICAgICAgdGhpcy5ldmFsdWF0ZUF0dGVtcHQoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkaXNwbGF5VG9vbHRpcChtZXNzYWdlOiBzdHJpbmcsIHR5cGU6IE1lc3NhZ2VUeXBlLCBzdXJwcmVzc1Rvb2x0aXA6IGJvb2xlYW4sIGlkPzogc3RyaW5nKSB7XHJcbiAgICBpZiAoIXN1cnByZXNzVG9vbHRpcClcclxuICAgICAgdGhpcy5tZXNzYWdlU2VydmljZS5zaG93KGlkID8gaWQgOiB0aGlzLmlkLCBtZXNzYWdlLCB0aGlzLCB0eXBlKTtcclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLmhhc1BlbmRpbmdGZWVkYmFjayA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVtb3ZlVG9vbHRpcCgpIHtcclxuICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuaGlkZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRUb29sdGlwRXJyb3JUZXh0KG1lc3NhZ2U6IE1lc3NhZ2UsIHN1cnByZXNzVG9vbHRpcDogYm9vbGVhbikge1xyXG4gICAgaWYgKG1lc3NhZ2UuaGlnaGxpZ2h0ZWRFbGVtZW50KSB7XHJcbiAgICAgIHRoaXMuZGlzcGxheVRvb2x0aXAobWVzc2FnZS50ZXh0LCBNZXNzYWdlVHlwZS5FcnJvciwgc3VycHJlc3NUb29sdGlwLCBtZXNzYWdlLmhpZ2hsaWdodGVkRWxlbWVudC5pZCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5kaXNwbGF5VG9vbHRpcChtZXNzYWdlLnRleHQsIE1lc3NhZ2VUeXBlLkVycm9yLCBzdXJwcmVzc1Rvb2x0aXApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRTcGVsbGluZ01pc3Rha2VNZXNzYWdlKGV4cGVjdGVkVGV4dDogc3RyaW5nLCBlbnRlcmVkVGV4dDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHZhciBtZXNzYWdlID0gdGhpcy5sb2NhbGl6YXRpb24uZ2V0VGV4dEZyb21MYWJlbChMb2NhbGl6YXRpb25MYWJlbHMudHlwb01lc3NhZ2UpXHJcblxyXG4gICAgdmFyIGRpZmYgPSBqc2RpZmYuZGlmZkNoYXJzKGV4cGVjdGVkVGV4dCwgZW50ZXJlZFRleHQsIHsgaWdub3JlQ2FzZTogIXRoaXMuc2V0dGluZ3MuY2FzZVNlbnNpdGl2ZSB9KTtcclxuXHJcbiAgICB2YXIgbWlzdGFrZVNwYW4gPSB0aGlzLmpxdWVyeShcIjxzcGFuLz5cIiwgeyBcImNsYXNzXCI6IFwic3BlbGxpbmctbWlzdGFrZVwiIH0pO1xyXG4gICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGRpZmYubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgIHZhciBwYXJ0ID0gZGlmZltpbmRleF07XHJcbiAgICAgIHZhciBzcGFuQ2xhc3MgPSAnJztcclxuICAgICAgaWYgKHBhcnQucmVtb3ZlZCkge1xyXG4gICAgICAgIGlmIChpbmRleCA9PT0gZGlmZi5sZW5ndGggLSAxIHx8ICFkaWZmW2luZGV4ICsgMV0uYWRkZWQpIHtcclxuICAgICAgICAgIHBhcnQudmFsdWUgPSBwYXJ0LnZhbHVlLnJlcGxhY2UoLy4vZywgXCJfXCIpO1xyXG4gICAgICAgICAgc3BhbkNsYXNzID0gJ21pc3NpbmctY2hhcmFjdGVyJztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHBhcnQuYWRkZWQpIHtcclxuICAgICAgICBzcGFuQ2xhc3MgPSAnbWlzdGFrZW4tY2hhcmFjdGVyJztcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIHNwYW4gPSB0aGlzLmpxdWVyeShcIjxzcGFuLz5cIiwgeyBcImNsYXNzXCI6IHNwYW5DbGFzcywgXCJodG1sXCI6IHBhcnQudmFsdWUucmVwbGFjZShcIiBcIiwgXCImbmJzcDtcIikgfSk7XHJcbiAgICAgIG1pc3Rha2VTcGFuLmFwcGVuZChzcGFuKTtcclxuICAgIH1cclxuXHJcbiAgICBtZXNzYWdlID0gbWVzc2FnZS5yZXBsYWNlKFwiQG1pc3Rha2VcIiwgdGhpcy5qcXVlcnkoXCI8c3Bhbi8+XCIpLmFwcGVuZChtaXN0YWtlU3BhbikuaHRtbCgpKTtcclxuICAgIHJldHVybiBtZXNzYWdlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIGlmIHRoZSBlbnRlcmVkIHRleHQgaXMgdGhlIGNvcnJlY3QgYW5zd2VyIG9yIG9uZSBvZiB0aGUgXHJcbiAgICogaW5jb3JyZWN0IG9uZXMgYW5kIGdpdmVzIHRoZSB1c2VyIGZlZWRiYWNrIGFjY29yZGluZ2x5LlxyXG4gICAqL1xyXG4gIHB1YmxpYyBldmFsdWF0ZUF0dGVtcHQoc3VycHJlc3NUb29sdGlwczogYm9vbGVhbiwgZm9yY2VDaGVjaz86IGJvb2xlYW4pIHtcclxuICAgIGlmICghdGhpcy5oYXNQZW5kaW5nRmVlZGJhY2sgJiYgdGhpcy5sYXN0Q2hlY2tlZFRleHQgPT09IHRoaXMuZW50ZXJlZFRleHQgJiYgIWZvcmNlQ2hlY2spXHJcbiAgICAgIHJldHVybjtcclxuXHJcbiAgICB0aGlzLmxhc3RDaGVja2VkVGV4dCA9IHRoaXMuZW50ZXJlZFRleHQudG9TdHJpbmcoKTtcclxuICAgIHRoaXMuaGFzUGVuZGluZ0ZlZWRiYWNrID0gZmFsc2U7XHJcbiAgICB0aGlzLnJlbW92ZVRvb2x0aXAoKTtcclxuXHJcbiAgICB2YXIgZXhhY3RDb3JyZWN0TWF0Y2hlcyA9IHRoaXMuY29ycmVjdEFuc3dlcnMubWFwKGFuc3dlciA9PiBhbnN3ZXIuZXZhbHVhdGVBdHRlbXB0KHRoaXMuZW50ZXJlZFRleHQpKS5maWx0ZXIoZXZhbHVhdGlvbiA9PiBldmFsdWF0aW9uLmNvcnJlY3RuZXNzID09PSBDb3JyZWN0bmVzcy5FeGFjdE1hdGNoKS5zb3J0KGV2YWx1YXRpb24gPT4gZXZhbHVhdGlvbi5jaGFyYWN0ZXJEaWZmZXJlbmNlQ291bnQpO1xyXG4gICAgdmFyIGNsb3NlQ29ycmVjdE1hdGNoZXMgPSB0aGlzLmNvcnJlY3RBbnN3ZXJzLm1hcChhbnN3ZXIgPT4gYW5zd2VyLmV2YWx1YXRlQXR0ZW1wdCh0aGlzLmVudGVyZWRUZXh0KSkuZmlsdGVyKGV2YWx1YXRpb24gPT4gZXZhbHVhdGlvbi5jb3JyZWN0bmVzcyA9PT0gQ29ycmVjdG5lc3MuQ2xvc2VNYXRjaCkuc29ydChldmFsdWF0aW9uID0+IGV2YWx1YXRpb24uY2hhcmFjdGVyRGlmZmVyZW5jZUNvdW50KTtcclxuICAgIHZhciBleGFjdEluY29ycmVjdE1hdGNoZXMgPSB0aGlzLmluY29ycmVjdEFuc3dlcnMubWFwKGFuc3dlciA9PiBhbnN3ZXIuZXZhbHVhdGVBdHRlbXB0KHRoaXMuZW50ZXJlZFRleHQpKS5maWx0ZXIoZXZhbHVhdGlvbiA9PiBldmFsdWF0aW9uLmNvcnJlY3RuZXNzID09PSBDb3JyZWN0bmVzcy5FeGFjdE1hdGNoKS5zb3J0KGV2YWx1YXRpb24gPT4gZXZhbHVhdGlvbi5jaGFyYWN0ZXJEaWZmZXJlbmNlQ291bnQpO1xyXG4gICAgdmFyIGNsb3NlSW5jb3JyZWN0TWF0Y2hlcyA9IHRoaXMuaW5jb3JyZWN0QW5zd2Vycy5tYXAoYW5zd2VyID0+IGFuc3dlci5ldmFsdWF0ZUF0dGVtcHQodGhpcy5lbnRlcmVkVGV4dCkpLmZpbHRlcihldmFsdWF0aW9uID0+IGV2YWx1YXRpb24uY29ycmVjdG5lc3MgPT09IENvcnJlY3RuZXNzLkNsb3NlTWF0Y2gpLnNvcnQoZXZhbHVhdGlvbiA9PiBldmFsdWF0aW9uLmNoYXJhY3RlckRpZmZlcmVuY2VDb3VudCk7XHJcblxyXG4gICAgaWYgKGV4YWN0Q29ycmVjdE1hdGNoZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLnNldEFuc3dlclN0YXRlKE1lc3NhZ2VUeXBlLkNvcnJlY3QpO1xyXG4gICAgICBpZiAoIXRoaXMuc2V0dGluZ3MuY2FzZVNlbnNpdGl2ZSkge1xyXG4gICAgICAgIHRoaXMuZW50ZXJlZFRleHQgPSBleGFjdENvcnJlY3RNYXRjaGVzWzBdLnVzZWRBbHRlcm5hdGl2ZTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGV4YWN0SW5jb3JyZWN0TWF0Y2hlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuc2V0QW5zd2VyU3RhdGUoTWVzc2FnZVR5cGUuRXJyb3IpO1xyXG4gICAgICB0aGlzLnNob3dFcnJvclRvb2x0aXAoZXhhY3RJbmNvcnJlY3RNYXRjaGVzWzBdLnVzZWRBbnN3ZXIsIHN1cnByZXNzVG9vbHRpcHMpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNsb3NlQ29ycmVjdE1hdGNoZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBpZiAodGhpcy5zZXR0aW5ncy53YXJuU3BlbGxpbmdFcnJvcnMpIHtcclxuICAgICAgICB0aGlzLmRpc3BsYXlUb29sdGlwKHRoaXMuZ2V0U3BlbGxpbmdNaXN0YWtlTWVzc2FnZShjbG9zZUNvcnJlY3RNYXRjaGVzWzBdLnVzZWRBbHRlcm5hdGl2ZSwgdGhpcy5lbnRlcmVkVGV4dCksIE1lc3NhZ2VUeXBlLlJldHJ5LCBzdXJwcmVzc1Rvb2x0aXBzKTtcclxuICAgICAgICB0aGlzLnNldEFuc3dlclN0YXRlKE1lc3NhZ2VUeXBlLlJldHJ5KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuYWNjZXB0U3BlbGxpbmdFcnJvcnMpIHtcclxuICAgICAgICB0aGlzLnNldEFuc3dlclN0YXRlKE1lc3NhZ2VUeXBlLkNvcnJlY3QpO1xyXG4gICAgICAgIHRoaXMuZW50ZXJlZFRleHQgPSBjbG9zZUNvcnJlY3RNYXRjaGVzWzBdLnVzZWRBbHRlcm5hdGl2ZTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2xvc2VJbmNvcnJlY3RNYXRjaGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5zZXRBbnN3ZXJTdGF0ZShNZXNzYWdlVHlwZS5FcnJvcik7XHJcbiAgICAgIHRoaXMuc2hvd0Vycm9yVG9vbHRpcChjbG9zZUluY29ycmVjdE1hdGNoZXNbMF0udXNlZEFuc3dlciwgc3VycHJlc3NUb29sdGlwcyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgYWx3YXlzQXBwbHlpbmdBbnN3ZXJzID0gdGhpcy5pbmNvcnJlY3RBbnN3ZXJzLmZpbHRlcihhID0+IGEuYXBwbGllc0Fsd2F5cyk7XHJcbiAgICBpZiAoYWx3YXlzQXBwbHlpbmdBbnN3ZXJzICYmIGFsd2F5c0FwcGx5aW5nQW5zd2Vycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuc2hvd0Vycm9yVG9vbHRpcChhbHdheXNBcHBseWluZ0Fuc3dlcnNbMF0sIHN1cnByZXNzVG9vbHRpcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2V0QW5zd2VyU3RhdGUoTWVzc2FnZVR5cGUuRXJyb3IpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uVHlwZWQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldEFuc3dlclN0YXRlKE1lc3NhZ2VUeXBlLk5vbmUpO1xyXG4gICAgdGhpcy5sYXN0Q2hlY2tlZFRleHQgPSBcIlwiO1xyXG4gICAgdGhpcy5yZW1vdmVUb29sdGlwKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbG9zdEZvY3VzKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubWVzc2FnZVNlcnZpY2UuaXNBY3RpdmUodGhpcykpIHtcclxuICAgICAgdGhpcy5tZXNzYWdlU2VydmljZS5oaWRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXRzIHRoZSBib29sZWFuIHByb3BlcnRpZXMgaXNDb3JyZWN0LCBpcyBFcnJvciBhbmQgaXNSZXRyeSBhY2NvcmRpbmcgdG8gdGhlcGFzc2VkICBtZXNzYWdlVHlwZS5cclxuICAgKiBAcGFyYW0gbWVzc2FnZVR5cGUgXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzZXRBbnN3ZXJTdGF0ZShtZXNzYWdlVHlwZTogTWVzc2FnZVR5cGUpIHtcclxuICAgIHRoaXMuaXNDb3JyZWN0ID0gZmFsc2U7XHJcbiAgICB0aGlzLmlzRXJyb3IgPSBmYWxzZTtcclxuICAgIHRoaXMuaXNSZXRyeSA9IGZhbHNlO1xyXG4gICAgdGhpcy5pc1Nob3dpbmdTb2x1dGlvbiA9IGZhbHNlO1xyXG5cclxuICAgIHN3aXRjaCAobWVzc2FnZVR5cGUpIHtcclxuICAgICAgY2FzZSBNZXNzYWdlVHlwZS5Db3JyZWN0OlxyXG4gICAgICAgIHRoaXMuaXNDb3JyZWN0ID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBNZXNzYWdlVHlwZS5FcnJvcjpcclxuICAgICAgICB0aGlzLmlzRXJyb3IgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIE1lc3NhZ2VUeXBlLlJldHJ5OlxyXG4gICAgICAgIHRoaXMuaXNSZXRyeSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTWVzc2FnZVR5cGUuU2hvd1NvbHV0aW9uOlxyXG4gICAgICAgIHRoaXMuaXNTaG93aW5nU29sdXRpb24gPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzaG93RXJyb3JUb29sdGlwKGFuc3dlcjogQW5zd2VyLCBzdXJwcmVzc1Rvb2x0aXA6IGJvb2xlYW4pIHtcclxuICAgIGlmIChhbnN3ZXIubWVzc2FnZSAmJiBhbnN3ZXIubWVzc2FnZS50ZXh0KSB7XHJcbiAgICAgIHRoaXMuc2V0VG9vbHRpcEVycm9yVGV4dChhbnN3ZXIubWVzc2FnZSwgc3VycHJlc3NUb29sdGlwKTtcclxuICAgIH1cclxuICAgIGlmICghc3VycHJlc3NUb29sdGlwKSB7XHJcbiAgICAgIGFuc3dlci5hY3RpdmF0ZUhpZ2hsaWdodCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGlzcGxheXMgdGhlIGhpbnQgaW4gdGhlIHRvb2x0aXAuXHJcbiAgICovXHJcbiAgcHVibGljIHNob3dIaW50KCkge1xyXG4gICAgaWYgKHRoaXMuaXNTaG93aW5nU29sdXRpb24gfHwgdGhpcy5pc0NvcnJlY3QpXHJcbiAgICAgIHJldHVybjtcclxuXHJcbiAgICB0aGlzLnJlbW92ZVRvb2x0aXAoKTtcclxuICAgIGlmICh0aGlzLmhpbnQgJiYgdGhpcy5oaW50LnRleHQgIT09IFwiXCIpIHtcclxuICAgICAgdGhpcy5kaXNwbGF5VG9vbHRpcCh0aGlzLmhpbnQudGV4dCwgTWVzc2FnZVR5cGUuUmV0cnksIGZhbHNlKTtcclxuICAgICAgaWYgKHRoaXMuaGludC5oaWdobGlnaHRlZEVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLmhpbnQuaGlnaGxpZ2h0ZWRFbGVtZW50LmlzSGlnaGxpZ2h0ZWQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2VyaWFsaXplKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZW50ZXJlZFRleHQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZGVzZXJpYWxpemUoZGF0YTogYW55KSB7XHJcbiAgICB0aGlzLmVudGVyZWRUZXh0ID0gZGF0YTtcclxuICB9XHJcbn0iLCJleHBvcnQgZW51bSBDbG96ZUVsZW1lbnRUeXBlIHtcclxuICBCbGFuayxcclxuICBIaWdobGlnaHRcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENsb3plRWxlbWVudCB7XHJcbiAgcHVibGljIHR5cGU6IENsb3plRWxlbWVudFR5cGU7XHJcbn0iLCJpbXBvcnQgeyBIaWdobGlnaHQgfSBmcm9tIFwiLi9oaWdobGlnaHRcIjtcclxuaW1wb3J0IHsgQmxhbmsgfSBmcm9tIFwiLi9ibGFua1wiO1xyXG5cclxuLyoqXHJcbiAqIFJlcHJlc2VudHMgdGhlIGNsb3plLiBJbnN0YW50aWF0ZSB3aXRoIHN0YXRpYyBjcmVhdGVDbG96ZSgpLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENsb3plIHtcclxuICBwdWJsaWMgaHRtbDogc3RyaW5nO1xyXG4gIHB1YmxpYyBoaWdobGlnaHRzOiBIaWdobGlnaHRbXTtcclxuICBwdWJsaWMgYmxhbmtzOiBCbGFua1tdO1xyXG5cclxuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0cnVlIGlmIGFsbCBibGFua3Mgd2VyZSBlbnRlcmVkIGNvcnJlY3RseS4gXHJcbiAgICogQHJldHVybnMgYm9vbGVhblxyXG4gICAqL1xyXG4gIHB1YmxpYyBnZXQgaXNTb2x2ZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5ibGFua3MuZXZlcnkoYiA9PiBiLmlzQ29ycmVjdCA9PT0gdHJ1ZSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHVibGljIGhpZGVBbGxIaWdobGlnaHRzKCk6IHZvaWQge1xyXG4gICAgZm9yICh2YXIgaGlnaGxpZ2h0IG9mIHRoaXMuaGlnaGxpZ2h0cykge1xyXG4gICAgICBoaWdobGlnaHQuaXNIaWdobGlnaHRlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHJlc2V0KCkge1xyXG4gICAgdGhpcy5oaWRlQWxsSGlnaGxpZ2h0cygpO1xyXG4gICAgZm9yICh2YXIgYmxhbmsgb2YgdGhpcy5ibGFua3MpIHtcclxuICAgICAgYmxhbmsucmVzZXQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzaG93U29sdXRpb25zKCkge1xyXG4gICAgZm9yICh2YXIgYmxhbmsgb2YgdGhpcy5ibGFua3MpIHtcclxuICAgICAgYmxhbmsuc2hvd1NvbHV0aW9uKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmhpZGVBbGxIaWdobGlnaHRzKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2VyaWFsaXplKCkgOiBzdHJpbmdbXSB7XHJcbiAgICB2YXIgY2xvemUgPSBbXTtcclxuICAgIGZvciAodmFyIGJsYW5rIG9mIHRoaXMuYmxhbmtzKSB7XHJcbiAgICAgIGNsb3plLnB1c2goYmxhbmsuc2VyaWFsaXplKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjbG96ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZXNlcmlhbGl6ZShkYXRhOiBhbnkpIHtcclxuICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBkYXRhLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICBpZiAoaW5kZXggPj0gdGhpcy5ibGFua3MubGVuZ3RoKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgdmFyIGJsYW5rID0gdGhpcy5ibGFua3NbaW5kZXhdO1xyXG4gICAgICBibGFuay5kZXNlcmlhbGl6ZShkYXRhW2luZGV4XSk7XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiZXhwb3J0IGVudW0gTWVzc2FnZVR5cGUge1xyXG4gIEVycm9yLFxyXG4gIENvcnJlY3QsXHJcbiAgUmV0cnksXHJcbiAgU2hvd1NvbHV0aW9uLFxyXG4gIE5vbmVcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQ2xvemVUeXBlIHtcclxuICBUeXBlLFxyXG4gIFNlbGVjdFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBTZWxlY3RBbHRlcm5hdGl2ZXMge1xyXG4gIEFsdGVybmF0aXZlcyxcclxuICBBbGxcclxufSIsImltcG9ydCB7IENsb3plRWxlbWVudCwgQ2xvemVFbGVtZW50VHlwZSB9IGZyb20gJy4vY2xvemUtZWxlbWVudCc7XHJcblxyXG4vKipcclxuICogUmVwcmVzZW50cyBhIGhpZ2hsaWdodCBpbiB0aGUgY2xvemUuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgSGlnaGxpZ2h0IGV4dGVuZHMgQ2xvemVFbGVtZW50IHtcclxuXHR0ZXh0OiBzdHJpbmc7XHJcblx0aXNIaWdobGlnaHRlZDogYm9vbGVhbjtcclxuXHRpZDogc3RyaW5nO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcih0ZXh0OiBzdHJpbmcsIGlkOiBzdHJpbmcpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLnR5cGUgPSBDbG96ZUVsZW1lbnRUeXBlLkhpZ2hsaWdodDtcclxuXHRcdHRoaXMudGV4dCA9IHRleHQ7XHJcblx0XHR0aGlzLmlkID0gaWQ7XHJcblx0XHR0aGlzLmlzSGlnaGxpZ2h0ZWQgPSBmYWxzZTtcclxuXHR9XHJcbn0iLCJpbXBvcnQgeyBIaWdobGlnaHQgfSBmcm9tIFwiLi9oaWdobGlnaHRcIjtcclxuXHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIGEgbWVzc2FnZSB0aGF0IHRoZSBjb250ZW50IGF1dGhvciBoYXMgc3BlY2lmaWVkIHRvIGJlIGEgcmVhY3Rpb25cclxuICogdG8gYW4gdXNlcidzIGFuc3dlci4gXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTWVzc2FnZSB7XHJcbiAgaGlnaGxpZ2h0ZWRFbGVtZW50OiBIaWdobGlnaHQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZXh0OiBzdHJpbmcsIHNob3dIaWdobGlnaHQ6IGJvb2xlYW4sIHByaXZhdGUgcmVsYXRpdmVIaWdobGlnaHRQb3NpdGlvbjogbnVtYmVyKSB7XHJcbiAgICBpZighc2hvd0hpZ2hsaWdodClcclxuICAgICAgdGhpcy5yZWxhdGl2ZUhpZ2hsaWdodFBvc2l0aW9uID0gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgbGlua0hpZ2hsaWdodCA9IChoaWdobGlnaHRzQmVmb3JlOiBIaWdobGlnaHRbXSwgaGlnaGxpZ2h0c0FmdGVyOiBIaWdobGlnaHRbXSkgPT4ge1xyXG4gICAgaWYgKCF0aGlzLnJlbGF0aXZlSGlnaGxpZ2h0UG9zaXRpb24pXHJcbiAgICAgIHJldHVybjtcclxuXHJcbiAgICAgIGlmICh0aGlzLnJlbGF0aXZlSGlnaGxpZ2h0UG9zaXRpb24gPCAwICYmICgwIC0gdGhpcy5yZWxhdGl2ZUhpZ2hsaWdodFBvc2l0aW9uIC0gMSkgPCBoaWdobGlnaHRzQmVmb3JlLmxlbmd0aCkge1xyXG4gICAgICAgIHRoaXMuaGlnaGxpZ2h0ZWRFbGVtZW50ID0gaGlnaGxpZ2h0c0JlZm9yZVswIC0gdGhpcy5yZWxhdGl2ZUhpZ2hsaWdodFBvc2l0aW9uIC0gMV07XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAodGhpcy5yZWxhdGl2ZUhpZ2hsaWdodFBvc2l0aW9uID4gMCAmJiAodGhpcy5yZWxhdGl2ZUhpZ2hsaWdodFBvc2l0aW9uIC0gMSA8IGhpZ2hsaWdodHNBZnRlci5sZW5ndGgpKSB7XHJcbiAgICAgICAgdGhpcy5oaWdobGlnaHRlZEVsZW1lbnQgPSBoaWdobGlnaHRzQWZ0ZXJbdGhpcy5yZWxhdGl2ZUhpZ2hsaWdodFBvc2l0aW9uIC0gMV07XHJcbiAgICAgIH1cclxuICB9XHJcbn0iLCIvKipcclxuICogQSBzbmlwcGV0IGlzIGEgdGV4dCBibG9jayB0aGF0IGlzIHB1dCBpbnRvIHBsYWNlZCBtYXJrZWQgaW4gZmVlZGJhY2sgdGV4dHMgb3IgaGludHMuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU25pcHBldCB7XHJcbiAgLyoqXHJcbiAgICogQ29uc3RydWN0cyB0aGUgc25pcHBldC5cclxuICAgKiBAcGFyYW0gbmFtZSBUaGUgbmFtZSBvZiB0aGUgc25pcHBldCB0aGF0IGlzIHVzZWQgd2hlbiBpdCBpcyByZWZlcmVuY2VkIGluIGEgZmVlZGJhY2t0ZXh0ICh3aXRob3V0IHRoZSBzbmlwcGV0IG1hcmtlciBAKVxyXG4gICAqIEBwYXJhbSB0ZXh0IFRoZSBzbmlwcGV0IGl0c2VsZiAoaHRtbClcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nLCBwdWJsaWMgdGV4dDogc3RyaW5nKSB7XHJcbiAgICBcclxuICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgWEFQSUFjdGl2aXR5RGVmaW5pdGlvbiB7XHJcbiAgbmFtZTogYW55O1xyXG4gIGRlc2NyaXB0aW9uOiBhbnk7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG4gIGludGVyYWN0aW9uVHlwZTogXCJ0cnVlLWZhbHNlXCIgfCBcImNob2ljZVwiIHwgXCJmaWxsLWluXCIgfCBcImxvbmctZmlsbC1pblwiIHwgXCJtYXRjaGluZ1wiIHwgXCJwZXJmb3JtYW5jZVwiIHwgXCJzZXF1ZW5jaW5nXCIgfCBcImxpa2VydFwiIHwgXCJudW1lcmljXCIgfCBcIm90aGVyXCI7XHJcbiAgY29ycmVjdFJlc3BvbnNlc1BhdHRlcm4/OiBzdHJpbmdbXTtcclxuICBleHRlbnNpb25zOiBhbnk7XHJcbn1cclxuIiwiaW1wb3J0IHsgQmxhbmtMb2FkZXIgfSBmcm9tICcuLi9jb250ZW50LWxvYWRlcnMvYmxhbmstbG9hZGVyJztcclxuaW1wb3J0IHsgQmxhbmsgfSBmcm9tIFwiLi4vbW9kZWxzL2JsYW5rXCI7XHJcbmltcG9ydCB7IFNuaXBwZXQgfSBmcm9tIFwiLi4vbW9kZWxzL3NuaXBwZXRcIjtcclxuaW1wb3J0IHsgSVNldHRpbmdzIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3NldHRpbmdzXCI7XHJcbmltcG9ydCB7IEg1UExvY2FsaXphdGlvbiB9IGZyb20gXCIuL2xvY2FsaXphdGlvblwiO1xyXG5pbXBvcnQgeyBVbnJ3YXBwZXIgfSBmcm9tICcuLi9oZWxwZXJzL3Vud3JhcHBlcic7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElEYXRhUmVwb3NpdG9yeSB7XHJcbiAgZ2V0QmxhbmtzKCk6IEJsYW5rW107XHJcbiAgZ2V0Q2xvemVUZXh0KCk6IHN0cmluZztcclxuICBnZXRGZWVkYmFja1RleHQoKTogc3RyaW5nO1xyXG4gIGdldE1lZGlhKCk6IGFueTtcclxuICBnZXRUYXNrRGVzY3JpcHRpb24oKTogc3RyaW5nO1xyXG4gIGdldFNuaXBwZXRzKCk6IFNuaXBwZXRbXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFdyYXBzIGFyb3VuZCB0aGUgaDVwIGNvbmZpZyBvYmplY3QgYW5kIHByb3ZpZGVzIGFjY2VzcyB0byB0aGUgY29udGVudC5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBINVBEYXRhUmVwb3NpdG9yeSBpbXBsZW1lbnRzIElEYXRhUmVwb3NpdG9yeSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBoNXBDb25maWdEYXRhOiBhbnksIHByaXZhdGUgc2V0dGluZ3M6IElTZXR0aW5ncyxcclxuICAgIHByaXZhdGUgbG9jYWxpemF0aW9uOiBINVBMb2NhbGl6YXRpb24sIHByaXZhdGUganF1ZXJ5OiBKUXVlcnlTdGF0aWMsIFxyXG4gICAgcHJpdmF0ZSB1bndyYXBwZXI6IFVucndhcHBlcikge1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIGJsYW5rIHRleHQgb2YgdGhlIGNsb3plIChhcyBIVE1MIG1hcmt1cCkuXHJcbiAgICovXHJcbiAgZ2V0Q2xvemVUZXh0KCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5oNXBDb25maWdEYXRhLmNvbnRlbnQuYmxhbmtzVGV4dDtcclxuICB9XHJcblxyXG4gIC8vIFRPRE86IHJlbW92ZSBvciBpbXBsZW1lbnRcclxuICBnZXRGZWVkYmFja1RleHQoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBcIlwiO1xyXG4gIH1cclxuXHJcbiAgZ2V0TWVkaWEoKTogYW55IHtcclxuICAgIHJldHVybiB0aGlzLmg1cENvbmZpZ0RhdGEubWVkaWEudHlwZTtcclxuICB9XHJcblxyXG4gIGdldFRhc2tEZXNjcmlwdGlvbigpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuaDVwQ29uZmlnRGF0YS5jb250ZW50LnRhc2s7XHJcbiAgfVxyXG5cclxuICBnZXRCbGFua3MoKTogQmxhbmtbXSB7XHJcbiAgICB2YXIgYmxhbmtzOiBCbGFua1tdID0gbmV3IEFycmF5KCk7XHJcblxyXG4gICAgaWYgKCF0aGlzLmg1cENvbmZpZ0RhdGEuY29udGVudC5ibGFua3NMaXN0KVxyXG4gICAgICByZXR1cm4gYmxhbmtzO1xyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5oNXBDb25maWdEYXRhLmNvbnRlbnQuYmxhbmtzTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICB2YXIgaDVwQmxhbmsgPSB0aGlzLmg1cENvbmZpZ0RhdGEuY29udGVudC5ibGFua3NMaXN0W2ldO1xyXG5cclxuICAgICAgdmFyIGNvcnJlY3RUZXh0ID0gaDVwQmxhbmsuY29ycmVjdEFuc3dlclRleHQ7XHJcbiAgICAgIGlmIChjb3JyZWN0VGV4dCA9PT0gXCJcIiB8fCBjb3JyZWN0VGV4dCA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgICAgdmFyIGJsYW5rID0gQmxhbmtMb2FkZXIuaW5zdGFuY2UuY3JlYXRlQmxhbmsoXCJjbG96ZVwiICsgaSwgY29ycmVjdFRleHQsXHJcbiAgICAgICAgaDVwQmxhbmsuaGludCwgaDVwQmxhbmsuaW5jb3JyZWN0QW5zd2Vyc0xpc3QpO1xyXG5cclxuICAgICAgYmxhbmsuZmluaXNoSW5pdGlhbGl6YXRpb24oKTtcclxuICAgICAgYmxhbmtzLnB1c2goYmxhbmspO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBibGFua3M7XHJcbiAgfVxyXG5cclxuICBnZXRTbmlwcGV0cygpOiBTbmlwcGV0W10ge1xyXG4gICAgdmFyIHNuaXBwZXRzOiBTbmlwcGV0W10gPSBuZXcgQXJyYXkoKTtcclxuXHJcbiAgICBpZiAoIXRoaXMuaDVwQ29uZmlnRGF0YS5zbmlwcGV0cylcclxuICAgICAgcmV0dXJuIHNuaXBwZXRzO1xyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5oNXBDb25maWdEYXRhLnNuaXBwZXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciByYXdfc25pcHBldCA9IHRoaXMuaDVwQ29uZmlnRGF0YS5zbmlwcGV0c1tpXTtcclxuICAgICAgdmFyIHNuaXBwZXQgPSBuZXcgU25pcHBldChyYXdfc25pcHBldC5zbmlwcGV0TmFtZSwgdGhpcy51bndyYXBwZXIudW53cmFwKHJhd19zbmlwcGV0LnNuaXBwZXRUZXh0KSk7XHJcbiAgICAgIHNuaXBwZXRzLnB1c2goc25pcHBldCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc25pcHBldHM7XHJcbiAgfVxyXG59IiwiZXhwb3J0IGVudW0gTG9jYWxpemF0aW9uTGFiZWxzIHtcclxuICBzaG93U29sdXRpb25CdXR0b24gPSBcInNob3dTb2x1dGlvbnNcIixcclxuICByZXRyeUJ1dHRvbiA9IFwidHJ5QWdhaW5cIixcclxuICBjaGVja0FsbEJ1dHRvbiA9IFwiY2hlY2tBbnN3ZXJcIixcclxuICBub3RGaWxsZWRPdXRXYXJuaW5nID0gXCJub3RGaWxsZWRPdXRcIixcclxuICB0aXBCdXR0b24gPVwidGlwTGFiZWxcIixcclxuICB0eXBvTWVzc2FnZSA9IFwic3BlbGxpbmdNaXN0YWtlV2FybmluZ1wiLFxyXG4gIHNjb3JlQmFyTGFiZWwgPSBcInNjb3JlQmFyTGFiZWxcIiAgXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIExvY2FsaXphdGlvblN0cnVjdHVyZXMge1xyXG4gIGNvbmZpcm1DaGVjayA9IFwiY29uZmlybUNoZWNrXCIsXHJcbiAgY29uZmlybVJldHJ5ID0gXCJjb25maXJtUmV0cnlcIixcclxuICBvdmVyYWxsRmVlZGJhY2sgPSBcIm92ZXJhbGxGZWVkYmFja1wiXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQcm92aWRlcyBsb2NhbGl6YXRpb24gc2VydmljZXMuXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNsYXNzIEg1UExvY2FsaXphdGlvbiB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBoNXBDb25maWd1cmF0aW9uOiBhbnkpIHtcclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRoZSBsb2NhbGl6ZWQgc3RyaW5nIHRoYXQgaXMgcmVwcmVzZW50ZWQgYnkgdGhlIGlkZW50aWZpZXIuXHJcbiAgICogQHBhcmFtICB7c3RyaW5nfSBsb2NhbGl6YWJsZVN0cmluZ0lkZW50aWZpZXJcclxuICAgKiBAcmV0dXJucyBzdHJpbmdcclxuICAgKi9cclxuICBwcml2YXRlIGdldFRleHQobG9jYWxpemFibGVTdHJpbmdJZGVudGlmaWVyOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuaDVwQ29uZmlndXJhdGlvbltsb2NhbGl6YWJsZVN0cmluZ0lkZW50aWZpZXJdO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBsYWJlbFRvU3RyaW5nKGxhYmVsOiBMb2NhbGl6YXRpb25MYWJlbHMpIHtcclxuICAgIHJldHVybiBsYWJlbC50b1N0cmluZygpO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRoZSBsb2NhbGl6ZWQgc3RyaW5nIGZvciB0aGUgbGFiZWwuXHJcbiAgICogQHBhcmFtICB7TG9jYWxpemF0aW9uTGFiZWxzfSBsYWJlbFxyXG4gICAqIEByZXR1cm5zIHN0cmluZ1xyXG4gICAqL1xyXG4gIGdldFRleHRGcm9tTGFiZWwobGFiZWw6IExvY2FsaXphdGlvbkxhYmVscyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRUZXh0KHRoaXMubGFiZWxUb1N0cmluZyhsYWJlbCkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0T2JqZWN0Rm9yU3RydWN0dXJlKHN0cnVjdHVyZTogTG9jYWxpemF0aW9uU3RydWN0dXJlcykgOiBhbnkge1xyXG4gICAgcmV0dXJuIHRoaXMuaDVwQ29uZmlndXJhdGlvbltzdHJ1Y3R1cmUudG9TdHJpbmcoKV07XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgQmxhbmsgfSBmcm9tICcuLi9tb2RlbHMvYmxhbmsnO1xyXG5pbXBvcnQgeyBNZXNzYWdlVHlwZSB9IGZyb20gJy4uL21vZGVscy9lbnVtcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgTWVzc2FnZVNlcnZpY2Uge1xyXG4gIHByaXZhdGUgc3BlZWNoQnViYmxlOiBhbnk7XHJcbiAgcHJpdmF0ZSBhc3NvY2lhdGVkQmxhbms6IEJsYW5rO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGpRdWVyeTogSlF1ZXJ5U3RhdGljKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgcHVibGljIHNob3coZWxlbWVudElkOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZywgYmxhbms6IEJsYW5rLCB0eXBlPzogTWVzc2FnZVR5cGUpIHtcclxuICAgIGlmICghdHlwZSlcclxuICAgICAgdHlwZSA9IE1lc3NhZ2VUeXBlLk5vbmU7XHJcblxyXG4gICAgdmFyIGVsZW1lbnRzID0gdGhpcy5qUXVlcnkoXCIjXCIgKyBlbGVtZW50SWQpO1xyXG5cclxuICAgIGlmIChlbGVtZW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuc3BlZWNoQnViYmxlID0gbmV3IEg1UC5Kb3ViZWxTcGVlY2hCdWJibGUoZWxlbWVudHMsIG1lc3NhZ2UpO1xyXG4gICAgICB0aGlzLmFzc29jaWF0ZWRCbGFuayA9IGJsYW5rO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGhpZGUoKSB7XHJcbiAgICBpZiAodGhpcy5zcGVlY2hCdWJibGUpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICB0aGlzLnNwZWVjaEJ1YmJsZS5yZW1vdmUoKTtcclxuICAgICAgfVxyXG4gICAgICBjYXRjaCAoZXhjZXB0aW9uKSB7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuc3BlZWNoQnViYmxlID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5hc3NvY2lhdGVkQmxhbmsgPSB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNBY3RpdmUoYmxhbms6IEJsYW5rKSB7XHJcbiAgICByZXR1cm4gdGhpcy5hc3NvY2lhdGVkQmxhbmsgPT09IGJsYW5rO1xyXG4gIH1cclxufSIsImltcG9ydCB7IENsb3plVHlwZSwgU2VsZWN0QWx0ZXJuYXRpdmVzIH0gZnJvbSBcIi4uL21vZGVscy9lbnVtc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJU2V0dGluZ3Mge1xyXG4gIGNsb3plVHlwZTogQ2xvemVUeXBlO1xyXG4gIHNlbGVjdEFsdGVybmF0aXZlczogU2VsZWN0QWx0ZXJuYXRpdmVzO1xyXG4gIHNlbGVjdEFsdGVybmF0aXZlUmVzdHJpY3Rpb246IG51bWJlcjtcclxuICBlbmFibGVSZXRyeTogYm9vbGVhbjtcclxuICBlbmFibGVTb2x1dGlvbnNCdXR0b246IGJvb2xlYW47XHJcbiAgZW5hYmxlQ2hlY2tCdXR0b246IGJvb2xlYW47XHJcbiAgYXV0b0NoZWNrOiBib29sZWFuO1xyXG4gIGNhc2VTZW5zaXRpdmU6IGJvb2xlYW47XHJcbiAgd2FyblNwZWxsaW5nRXJyb3JzOiBib29sZWFuO1xyXG4gIGFjY2VwdFNwZWxsaW5nRXJyb3JzOiBib29sZWFuO1xyXG4gIHNob3dTb2x1dGlvbnNSZXF1aXJlc0lucHV0OiBib29sZWFuO1xyXG4gIGNvbmZpcm1DaGVja0RpYWxvZzogYm9vbGVhbjtcclxuICBjb25maXJtUmV0cnlEaWFsb2c6IGJvb2xlYW47XHJcbiAgZGlzYWJsZUltYWdlWm9vbWluZzogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEg1UFNldHRpbmdzIGltcGxlbWVudHMgSVNldHRpbmdzIHtcclxuICBwdWJsaWMgY2xvemVUeXBlOiBDbG96ZVR5cGUgPSBDbG96ZVR5cGUuVHlwZTtcclxuICBwdWJsaWMgc2VsZWN0QWx0ZXJuYXRpdmVzOiBTZWxlY3RBbHRlcm5hdGl2ZXMgPSBTZWxlY3RBbHRlcm5hdGl2ZXMuQWx0ZXJuYXRpdmVzO1xyXG4gIHB1YmxpYyBzZWxlY3RBbHRlcm5hdGl2ZVJlc3RyaWN0aW9uOiBudW1iZXIgPSA1O1xyXG4gIHB1YmxpYyBlbmFibGVSZXRyeTogYm9vbGVhbiA9IHRydWU7XHJcbiAgcHVibGljIGVuYWJsZVNvbHV0aW9uc0J1dHRvbjogYm9vbGVhbiA9IHRydWU7XHJcbiAgcHVibGljIGVuYWJsZUNoZWNrQnV0dG9uOiBib29sZWFuID0gdHJ1ZTtcclxuICBwdWJsaWMgYXV0b0NoZWNrOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHVibGljIGNhc2VTZW5zaXRpdmU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwdWJsaWMgd2FyblNwZWxsaW5nRXJyb3JzOiBib29sZWFuID0gdHJ1ZTtcclxuICBwdWJsaWMgYWNjZXB0U3BlbGxpbmdFcnJvcnM6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwdWJsaWMgc2hvd1NvbHV0aW9uc1JlcXVpcmVzSW5wdXQ6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIHB1YmxpYyBjb25maXJtQ2hlY2tEaWFsb2c6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwdWJsaWMgY29uZmlybVJldHJ5RGlhbG9nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHVibGljIGRpc2FibGVJbWFnZVpvb21pbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoaDVwQ29uZmlnRGF0YTogYW55KSB7XHJcbiAgICBpZiAoaDVwQ29uZmlnRGF0YS5iZWhhdmlvdXIubW9kZSA9PT0gJ3NlbGVjdGlvbicpIHtcclxuICAgICAgdGhpcy5jbG96ZVR5cGUgPSBDbG96ZVR5cGUuU2VsZWN0O1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuY2xvemVUeXBlID0gQ2xvemVUeXBlLlR5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGg1cENvbmZpZ0RhdGEuYmVoYXZpb3VyLnNlbGVjdEFsdGVybmF0aXZlcyA9PT0gJ2FsbCcpIHtcclxuICAgICAgdGhpcy5zZWxlY3RBbHRlcm5hdGl2ZXMgPSBTZWxlY3RBbHRlcm5hdGl2ZXMuQWxsO1xyXG4gICAgfSBlbHNlIGlmIChoNXBDb25maWdEYXRhLmJlaGF2aW91ci5zZWxlY3RBbHRlcm5hdGl2ZXMgPT09ICdhbHRlcm5hdGl2ZXMnKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0QWx0ZXJuYXRpdmVzID0gU2VsZWN0QWx0ZXJuYXRpdmVzLkFsdGVybmF0aXZlcztcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLnNlbGVjdEFsdGVybmF0aXZlcyA9IFNlbGVjdEFsdGVybmF0aXZlcy5BbGw7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZWxlY3RBbHRlcm5hdGl2ZVJlc3RyaWN0aW9uID0gaDVwQ29uZmlnRGF0YS5iZWhhdmlvdXIuc2VsZWN0QWx0ZXJuYXRpdmVSZXN0cmljdGlvbjtcclxuICAgIHRoaXMuZW5hYmxlUmV0cnkgPSBoNXBDb25maWdEYXRhLmJlaGF2aW91ci5lbmFibGVSZXRyeTtcclxuICAgIHRoaXMuZW5hYmxlU29sdXRpb25zQnV0dG9uID0gaDVwQ29uZmlnRGF0YS5iZWhhdmlvdXIuZW5hYmxlU29sdXRpb25zQnV0dG9uO1xyXG4gICAgdGhpcy5lbmFibGVDaGVja0J1dHRvbiA9IGg1cENvbmZpZ0RhdGEuYmVoYXZpb3VyLmVuYWJsZUNoZWNrQnV0dG9uO1xyXG4gICAgdGhpcy5hdXRvQ2hlY2sgPSBoNXBDb25maWdEYXRhLmJlaGF2aW91ci5hdXRvQ2hlY2s7XHJcbiAgICB0aGlzLmNhc2VTZW5zaXRpdmUgPSBoNXBDb25maWdEYXRhLmJlaGF2aW91ci5jYXNlU2Vuc2l0aXZlO1xyXG4gICAgdGhpcy53YXJuU3BlbGxpbmdFcnJvcnMgPSBoNXBDb25maWdEYXRhLmJlaGF2aW91ci5zcGVsbGluZ0Vycm9yQmVoYXZpb3VyID09PSBcIndhcm5cIjtcclxuICAgIHRoaXMuYWNjZXB0U3BlbGxpbmdFcnJvcnMgPSBoNXBDb25maWdEYXRhLmJlaGF2aW91ci5zcGVsbGluZ0Vycm9yQmVoYXZpb3VyID09PSBcImFjY2VwdFwiO1xyXG4gICAgdGhpcy5zaG93U29sdXRpb25zUmVxdWlyZXNJbnB1dCA9IGg1cENvbmZpZ0RhdGEuYmVoYXZpb3VyLnNob3dTb2x1dGlvbnNSZXF1aXJlc0lucHV0O1xyXG4gICAgdGhpcy5jb25maXJtQ2hlY2tEaWFsb2cgPSBoNXBDb25maWdEYXRhLmJlaGF2aW91ci5jb25maXJtQ2hlY2tEaWFsb2c7XHJcbiAgICB0aGlzLmNvbmZpcm1SZXRyeURpYWxvZyA9IGg1cENvbmZpZ0RhdGEuYmVoYXZpb3VyLmNvbmZpcm1SZXRyeURpYWxvZztcclxuICAgIHRoaXMuZGlzYWJsZUltYWdlWm9vbWluZyA9IGg1cENvbmZpZ0RhdGEubWVkaWEuZGlzYWJsZUltYWdlWm9vbWluZztcclxuXHJcbiAgICB0aGlzLmVuZm9yY2VMb2dpYygpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBtZXRob2Qgc2V0cyBzZW5zaWJsZSBkZWZhdWx0IHZhbHVlcyBmb3Igc2V0dGluZ3MgaGlkZGVuIHdpdGggc2hvd1doZW5cclxuICAgKi9cclxuICBwcml2YXRlIGVuZm9yY2VMb2dpYygpIHtcclxuICAgIGlmICh0aGlzLmNsb3plVHlwZSA9PT0gQ2xvemVUeXBlLlR5cGUpIHtcclxuICAgICAgdGhpcy5zZWxlY3RBbHRlcm5hdGl2ZXMgPSBTZWxlY3RBbHRlcm5hdGl2ZXMuQWxsO1xyXG4gICAgICB0aGlzLnNlbGVjdEFsdGVybmF0aXZlUmVzdHJpY3Rpb24gPSAwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHRoaXMuc2VsZWN0QWx0ZXJuYXRpdmVSZXN0cmljdGlvbiA9PT0gU2VsZWN0QWx0ZXJuYXRpdmVzLkFsdGVybmF0aXZlcykge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0QWx0ZXJuYXRpdmVSZXN0cmljdGlvbiA9IDA7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy53YXJuU3BlbGxpbmdFcnJvcnMgPSBmYWxzZTtcclxuICAgICAgdGhpcy5hY2NlcHRTcGVsbGluZ0Vycm9ycyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmNhc2VTZW5zaXRpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHNwYW4gaWQ9XFxcImNvbnRhaW5lcnt7aWR9fVxcXCIgY2xhc3M9XFxcImJsYW5rIHt7I2JsYW5rLmhhc1BlbmRpbmdGZWVkYmFja319aGFzLXBlbmRpbmctZmVlZGJhY2t7ey9pZn19IHt7I2JsYW5rLmhhc0hpbnR9fWhhcy10aXB7ey9pZn19IHt7I2JsYW5rLmlzQ29ycmVjdH19Y29ycmVjdHt7L2lmfX0ge3sjYmxhbmsuaXNFcnJvcn19ZXJyb3J7ey9pZn19IHt7I2JsYW5rLmlzUmV0cnl9fXJldHJ5e3svaWZ9fSB7eyNibGFuay5pc1Nob3dpbmdTb2x1dGlvbn19c2hvd2luZy1zb2x1dGlvbnt7L2lmfX1cXFwiPlxcclxcbiAge3sjdW5sZXNzIGlzU2VsZWN0Q2xvemV9fVxcclxcbiAgICA8c3BhbiBjbGFzcz1cXFwiaDVwLWlucHV0LXdyYXBwZXJcXFwiPlxcclxcbiAgICAgIDxpbnB1dCBpZD1cXFwie3tibGFuay5pZH19XFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiB2YWx1ZT1cXFwie3tibGFuay5lbnRlcmVkVGV4dH19XFxcIiBcXHJcXG4gICAgICAgICAgICAgc2l6ZT1cXFwie3tibGFuay5taW5UZXh0TGVuZ3RofX1cXFwiIG9uLWVzY2FwZT1cXFwiQHRoaXMuZmlyZSgnY2xvc2VNZXNzYWdlJywgYmxhbmspXFxcIiBcXHJcXG4gICAgICAgICAgICAgb24tZW50ZXI9XFxcIkB0aGlzLmZpcmUoJ2NoZWNrQmxhbmsnLCBibGFuaywgJ2VudGVyJylcXFwiIFxcclxcbiAgICAgICAgICAgICBvbi1ibHVyPVxcXCJAdGhpcy5maXJlKCdjaGVja0JsYW5rJywgYmxhbmssICdibHVyJylcXFwiIFxcclxcbiAgICAgICAgICAgICBvbi1mb2N1cz1cXFwiQHRoaXMuZmlyZSgnZm9jdXMnLCBibGFuaylcXFwiXFxyXFxuICAgICAgICAgICAgIG9uLWFueWtleT1cXFwiQHRoaXMuZmlyZSgndGV4dFR5cGVkJywgYmxhbmspXFxcIlxcclxcbiAgICAgICAgICAgICB7eyMoYmxhbmsuaXNDb3JyZWN0IHx8IGJsYW5rLmlzU2hvd2luZ1NvbHV0aW9uKX19ZGlzYWJsZWQ9XFxcImRpc2FibGVkXFxcInt7L2lmfX1cXHJcXG4gICAgICAgICAgICAgY2xhc3M9XFxcImg1cC10ZXh0LWlucHV0XFxcIlxcclxcbiAgICAgICAgICAgICBhdXRvY29tcGxldGU9XFxcIm9mZlxcXCJcXHJcXG4gICAgICAgICAgICAgYXV0b2NhcGl0YWxpemU9XFxcIm9mZlxcXCIvPlxcclxcbiAgICAgIHt7I2JsYW5rLmhhc0hpbnR9fVxcclxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImg1cC10aXAtY29udGFpbmVyXFxcIj5cXHJcXG4gICAgICAgICAgPGJ1dHRvbiBvbi1jbGljaz1cXFwiQHRoaXMuZmlyZSgnc2hvd0hpbnQnLCBibGFuaylcXFwiIHt7IyhibGFuay5pc0NvcnJlY3QgfHwgYmxhbmsuaXNTaG93aW5nU29sdXRpb24pfX1kaXNhYmxlZD1cXFwiZGlzYWJsZWRcXFwiIHt7L2lmfX0+XFxyXFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImpvdWJlbC10aXAtY29udGFpbmVyXFxcIiB0aXRsZT1cXFwiVGlwXFxcIiBhcmlhLWxhYmVsPVxcXCJUaXBcXFwiIGFyaWEtZXhwYW5kZWQ9XFxcInRydWVcXFwiIHJvbGU9XFxcImJ1dHRvblxcXCIgdGFiaW5kZXg9XFxcIjBcXFwiPjxzcGFuIGNsYXNzPVxcXCJqb3ViZWwtaWNvbi10aXAtbm9ybWFsIFxcXCI+PHNwYW4gY2xhc3M9XFxcImg1cC1pY29uLXNoYWRvd1xcXCI+PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJoNXAtaWNvbi1zcGVlY2gtYnViYmxlXFxcIj48L3NwYW4+PHNwYW4gY2xhc3M9XFxcImg1cC1pY29uLWluZm9cXFwiPjwvc3Bhbj48L3NwYW4+PC9zcGFuPlxcclxcbiAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvc3Bhbj5cXHJcXG4gICAgICAgIHt7L2lmfX1cXHJcXG4gICAgPC9zcGFuPiAgICBcXHJcXG4gIHt7L3VubGVzc319XFxyXFxuICB7eyNpZiBpc1NlbGVjdENsb3plfX1cXHJcXG4gICAgICA8YnV0dG9uIGNsYXNzPVxcXCJoNXAtbm90aWZpY2F0aW9uXFxcIiBvbi1jbGljaz1cXFwiQHRoaXMuZmlyZSgnZGlzcGxheUZlZWRiYWNrJywgYmxhbmspXFxcIj5cXHJcXG4gICAgICAgICYjeGYwNWE7XFxyXFxuICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgPHNwYW4gY2xhc3M9XFxcImg1cC1pbnB1dC13cmFwcGVyXFxcIj4gICAgICBcXHJcXG4gICAgICA8c2VsZWN0IGlkPVxcXCJ7e2JsYW5rLmlkfX1cXFwiIHR5cGU9XFxcInRleHRcXFwiIHZhbHVlPVxcXCJ7e2JsYW5rLmVudGVyZWRUZXh0fX1cXFwiXFxyXFxuICAgICAgICAgICAgICBvbi1lbnRlcj1cXFwiQHRoaXMuZmlyZSgnY2hlY2tCbGFuaycsIGJsYW5rLCAnZW50ZXInKVxcXCIgXFxyXFxuICAgICAgICAgICAgICBvbi1jaGFuZ2U9XFxcIkB0aGlzLmZpcmUoJ2NoZWNrQmxhbmsnLCBibGFuaywgJ2NoYW5nZScpXFxcIlxcclxcbiAgICAgICAgICAgICAgb24tZm9jdXM9XFxcIkB0aGlzLmZpcmUoJ2ZvY3VzJywgYmxhbmspXFxcIiAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgICB7eyMoYmxhbmsuaXNDb3JyZWN0IHx8IGJsYW5rLmlzU2hvd2luZ1NvbHV0aW9uKX19ZGlzYWJsZWQ9XFxcImRpc2FibGVkXFxcInt7L2lmfX0gXFxyXFxuICAgICAgICAgICAgICBzaXplPVxcXCIxXFxcIlxcclxcbiAgICAgICAgICAgICAgY2xhc3M9XFxcImg1cC10ZXh0LWlucHV0XFxcIj5cXHJcXG4gICAgICAgIHt7I2VhY2ggYmxhbmsuY2hvaWNlc319XFxyXFxuICAgICAgICAgIDxvcHRpb24+e3t0aGlzfX08L29wdGlvbj5cXHJcXG4gICAgICAgIHt7L2VhY2h9fVxcclxcbiAgICAgIDwvc2VsZWN0PiAgICAgICAgICAgICAgICAgICAgIFxcclxcbiAgICAgIHt7I2JsYW5rLmhhc0hpbnR9fVxcclxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcImg1cC10aXAtY29udGFpbmVyXFxcIj5cXHJcXG4gICAgICAgICAgPGJ1dHRvbiBvbi1jbGljaz1cXFwiQHRoaXMuZmlyZSgnc2hvd0hpbnQnLCBibGFuaylcXFwiIHt7IyhibGFuay5pc0NvcnJlY3QgfHwgYmxhbmsuaXNTaG93aW5nU29sdXRpb24pfX1kaXNhYmxlZD1cXFwiZGlzYWJsZWRcXFwie3svaWZ9fT5cXHJcXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiam91YmVsLXRpcC1jb250YWluZXJcXFwiIHRpdGxlPVxcXCJUaXBcXFwiIGFyaWEtbGFiZWw9XFxcIlRpcFxcXCIgYXJpYS1leHBhbmRlZD1cXFwidHJ1ZVxcXCIgcm9sZT1cXFwiYnV0dG9uXFxcIiB0YWJpbmRleD1cXFwiMFxcXCI+PHNwYW4gY2xhc3M9XFxcImpvdWJlbC1pY29uLXRpcC1ub3JtYWwgXFxcIj48c3BhbiBjbGFzcz1cXFwiaDVwLWljb24tc2hhZG93XFxcIj48L3NwYW4+PHNwYW4gY2xhc3M9XFxcImg1cC1pY29uLXNwZWVjaC1idWJibGVcXFwiPjwvc3Bhbj48c3BhbiBjbGFzcz1cXFwiaDVwLWljb24taW5mb1xcXCI+PC9zcGFuPjwvc3Bhbj48L3NwYW4+XFxyXFxuICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgIHt7L2lmfX0gICAgIFxcclxcbiAgICA8L3NwYW4+XFxyXFxuICB7ey9pZn19XFxyXFxuPC9zcGFuPlwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3BhbiB7eyNvYmplY3QuaXNIaWdobGlnaHRlZH19Y2xhc3M9XFxcImhpZ2hsaWdodGVkXFxcInt7L2lmfX0gaWQ9XFxcInt7b2JqZWN0LmlkfX1cXFwiPnt7e29iamVjdC50ZXh0fX19PC9zcGFuPlwiOyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuL3N0eWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307Il0sInNvdXJjZVJvb3QiOiIifQ==