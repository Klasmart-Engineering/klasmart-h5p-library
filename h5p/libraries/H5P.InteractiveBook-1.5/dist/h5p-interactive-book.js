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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/entries/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".h5p-interactive-book {\n  font-family: \"Roboto\", sans-serif;\n}\n.h5p-interactive-book.h5p-interactive-book-small .h5p-interactive-book-main.h5p-interactive-book-navigation-open .h5p-interactive-book-navigation {\n  max-width: none;\n  width: 100%;\n}\n.h5p-interactive-book.h5p-interactive-book-small .h5p-interactive-book-main.h5p-interactive-book-navigation-open .h5p-interactive-book-navigation .large-navigation-list {\n  height: auto;\n}\n.h5p-interactive-book.h5p-interactive-book-small .h5p-interactive-book-main.h5p-interactive-book-navigation-open .h5p-interactive-book-navigation-chapter-accordion {\n  opacity: 0;\n  visibility: hidden;\n}\n.h5p-interactive-book.h5p-interactive-book-small .h5p-interactive-book-main.h5p-interactive-book-navigation-open .h5p-interactive-book-navigation-chapter-button {\n  background-color: #fff;\n}\n.h5p-interactive-book.h5p-interactive-book-small .h5p-interactive-book-main.h5p-interactive-book-navigation-open .h5p-interactive-book-navigation-chapter-button.h5p-interactive-book-navigation-current {\n  border-bottom: solid 1px #e9e4ed;\n}\n.h5p-interactive-book.h5p-interactive-book-small .h5p-interactive-book-main.h5p-interactive-book-navigation-open .h5p-interactive-book-navigation-sectionlist {\n  max-height: none;\n  overflow: inherit;\n  transition: max-height 0.5s ease-in;\n  visibility: inherit;\n  padding-left: 0.3rem;\n}\n.h5p-interactive-book.h5p-interactive-book-small .h5p-interactive-book-main.h5p-interactive-book-navigation-open .h5p-interactive-book-content {\n  display: none;\n}\n.h5p-interactive-book.h5p-scrollable-fullscreen.h5p-semi-fullscreen {\n  overflow-y: scroll;\n  /* has to be scroll, not auto */\n  -webkit-overflow-scrolling: touch;\n}\n.h5p-interactive-book .h5p-scrollable-fullscreen {\n  overflow-y: auto;\n}\n.h5p-interactive-book.h5p-fullscreen {\n  background-color: #fff;\n}\n.h5p-interactive-book .h5p-content-controls {\n  display: none;\n}\n.h5p-interactive-book ::-webkit-scrollbar {\n  width: 6px;\n  background: rgba(108, 121, 146, 0.35);\n}\n.h5p-interactive-book ::-webkit-scrollbar-thumb {\n  background: rgba(108, 121, 146, 0.75);\n  border-radius: 4px;\n}\n.h5p-interactive-book ::-webkit-scrollbar-thumb:hover {\n  background: #6C7992;\n}\n\n.h5p-interactive-book-main {\n  display: flex;\n  flex: 1;\n  overflow: hidden;\n}\n.h5p-interactive-book-main.h5p-interactive-book-navigation-open .h5p-interactive-book-navigation {\n  max-width: 16.563em;\n  width: 16.563em;\n}\n\n.h5p-content-hidden .h5p-interactive-book-cover-present {\n  display: none;\n}\n\n.h5p-fullscreen .h5p-interactive-book,\n.h5p-semi-fullscreen .h5p-interactive-book {\n  display: flex;\n  flex-direction: column;\n}\n.h5p-fullscreen .h5p-interactive-book.edge-18 .h5p-interactive-book-status,\n.h5p-semi-fullscreen .h5p-interactive-book.edge-18 .h5p-interactive-book-status {\n  padding-right: 9em;\n}\n.h5p-fullscreen .h5p-interactive-book .h5p-interactive-book-content,\n.h5p-semi-fullscreen .h5p-interactive-book .h5p-interactive-book-content {\n  padding-bottom: 4.5em;\n}\n.h5p-fullscreen .h5p-interactive-book .h5p-interactive-book-status-footer,\n.h5p-semi-fullscreen .h5p-interactive-book .h5p-interactive-book-status-footer {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  left: 0;\n}\n.h5p-fullscreen .h5p-interactive-book-main,\n.h5p-semi-fullscreen .h5p-interactive-book-main {\n  flex: 1;\n  overflow: auto;\n}\n.h5p-fullscreen .h5p-interactive-book-main .h5p-interactive-book-content,\n.h5p-semi-fullscreen .h5p-interactive-book-main .h5p-interactive-book-content {\n  overflow-x: hidden;\n  overflow-y: auto;\n  min-height: calc(100% - 5.5em);\n}\n.h5p-fullscreen .h5p-interactive-book-navigation,\n.h5p-semi-fullscreen .h5p-interactive-book-navigation {\n  display: flex;\n  flex-direction: column;\n}\n.h5p-fullscreen .h5p-interactive-book-navigation .navigation-list,\n.h5p-semi-fullscreen .h5p-interactive-book-navigation .navigation-list {\n  flex: 1;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.h5p-fullscreen .h5p-interactive-book-navigation .large-navigation-list,\n.h5p-semi-fullscreen .h5p-interactive-book-navigation .large-navigation-list {\n  min-height: 1px;\n}\n\n.h5p-interactive-book-chapter {\n  display: none;\n  left: 0;\n  overflow: hidden;\n  position: absolute;\n  right: 0;\n  top: 0;\n  transform: translateX(0);\n  transition: 0.25s;\n  width: 100%;\n}\n.h5p-interactive-book-chapter.h5p-interactive-book-previous {\n  transform: translateX(-100%);\n}\n.h5p-interactive-book-chapter.h5p-interactive-book-current {\n  display: block;\n  transform: translateX(0);\n}\n.h5p-interactive-book-chapter.h5p-interactive-book-next {\n  transform: translateX(100%);\n}\n.h5p-interactive-book-chapter > div {\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 1058px;\n}\n\n.h5p-interactive-book-animate {\n  display: block;\n  transition: transform 0.25s ease-in-out;\n}\n\n.h5p-interactive-book-content {\n  padding: 1rem;\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n}\n.h5p-interactive-book-content.hidden {\n  display: none;\n}\n.h5p-interactive-book-content .h5p-column-content {\n  max-height: 9999999px;\n}\n.h5p-interactive-book-content .h5p-column-content:first-child {\n  margin-top: 0;\n}\n.h5p-interactive-book-content .h5p-column-content:first-child > p {\n  margin-top: 0;\n}\n\n.h5p-interactive-book-status-progress-marker {\n  align-items: center;\n  border-top: 1px solid #eee;\n  display: flex;\n  padding: 1em 0 0 1em;\n  clear: both;\n  cursor: pointer;\n}\n.h5p-interactive-book-status-progress-marker input[type=checkbox] {\n  transform: scale(1.75);\n  cursor: pointer;\n}\n.h5p-interactive-book-status-progress-marker p {\n  color: #4c4452;\n  font-weight: bold;\n  margin: 0;\n  padding-left: 1em;\n}\n\n.h5p-content-hidden {\n  display: none;\n}\n\n/* Help Course Presentation to resize properly with initial height of max-width / 9 * 16 */\n.h5p-course-presentation .h5p-wrapper {\n  height: 596px;\n}\n\n.h5p-interactive-book-status {\n  align-items: center;\n  background-color: #fff;\n  background-size: cover;\n  border: 0;\n  border-color: #1a73d9;\n  border-style: solid;\n  box-shadow: 10px 10px 30px rgba(166, 166, 166, 0.2);\n  display: flex;\n  overflow: hidden;\n  padding: 0.5em;\n}\n.h5p-interactive-book-status .h5p-interactive-book-status-button {\n  align-items: center;\n  border-radius: 3px;\n  display: flex;\n  height: 3.6em;\n  padding: 0;\n  width: 3.6em;\n}\n\n.h5p-interactive-book-status-button {\n  border-radius: 3px;\n}\n.h5p-interactive-book-status-button:hover {\n  background-color: rgba(26, 115, 217, 0.1);\n  background-size: cover;\n  cursor: pointer;\n}\n.h5p-interactive-book-status-button:active {\n  background-color: rgba(26, 115, 217, 0.2);\n  background-size: cover;\n}\n.h5p-interactive-book-status-button[disabled]:hover {\n  background-color: transparent;\n  cursor: default;\n}\n\n.h5p-interactive-book-status-fullscreen {\n  background-color: rgba(26, 115, 217, 0.05);\n  background-size: cover;\n  border: 0.125em solid #fff;\n  flex-shrink: 0;\n  justify-content: center;\n}\n.h5p-interactive-book-status-fullscreen.h5p-interactive-book-enter-fullscreen::before {\n  color: #1a73d9;\n  content: \"\\e90b\";\n  font-family: \"h5p-book\";\n  font-size: 1.2em;\n}\n.h5p-interactive-book-status-fullscreen.h5p-interactive-book-exit-fullscreen::before {\n  font-size: 1.2em;\n  color: #1a73d9;\n  content: \"\\e90c\";\n  font-family: \"h5p-book\";\n}\n\n.h5p-interactive-book-status-menu {\n  background-color: #fff;\n  background-size: cover;\n  border: 2px solid #fff;\n  border-radius: 3px;\n  flex-shrink: 0;\n}\n.h5p-interactive-book-status-menu .icon-menu {\n  color: #1a73d9;\n  font-size: 1.5em;\n  margin: auto;\n}\n.h5p-interactive-book-status-menu.h5p-interactive-book-status-menu-active {\n  background-color: #1a73d9;\n  opacity: 20;\n  position: relative;\n}\n.h5p-interactive-book-status-menu.h5p-interactive-book-status-menu-active .icon-menu {\n  color: #fff;\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n.h5p-interactive-book-status-menu.h5p-interactive-book-status-menu-active:hover {\n  background-color: rgba(26, 115, 217, 0.9);\n  background-size: cover;\n  cursor: pointer;\n}\n.h5p-interactive-book-status-menu.h5p-interactive-book-status-menu-active:active {\n  background-color: rgba(26, 115, 217, 0.95);\n  background-size: cover;\n}\n\n.h5p-interactive-book-status-progress {\n  flex-shrink: 0;\n  margin: 0;\n  white-space: nowrap;\n  width: 86px;\n}\n.h5p-interactive-book-status-progress .hidden-but-read {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n}\n\n.h5p-interactive-book-status-progress-number {\n  color: #1a73d9;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 20px;\n  font-weight: 700;\n  text-align: right;\n  text-decoration: none solid #1a73d9;\n}\n\n.h5p-interactive-book-status-progress-divider {\n  color: #4c4452;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 20px;\n  font-weight: 700;\n  text-align: right;\n  text-decoration: none solid #4c4452;\n}\n\n.h5p-interactive-book-status-progressbar-back {\n  background-color: rgba(26, 115, 217, 0.2);\n  background-size: cover;\n  width: 100%;\n}\n\n.h5p-interactive-book-status-progressbar-front {\n  background-color: #1a73d9;\n  height: 0.313em;\n  transition: 1s;\n}\n\n.h5p-interactive-book-status-chapter {\n  flex-grow: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.h5p-interactive-book-status-chapter .title {\n  color: #4c4452;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 20px;\n  font-weight: 700;\n  margin: 0;\n  overflow: hidden;\n  padding: 0 1rem;\n  text-decoration: none solid #4c4452;\n  text-overflow: ellipsis;\n}\n\n.h5p-interactive-book-status-arrow {\n  background-color: rgba(26, 115, 217, 0.05);\n  background-size: cover;\n  border: 0.125em solid #fff;\n  border-radius: 3px;\n  flex-shrink: 0;\n  height: 2.75em;\n  width: 2.75em;\n}\n.h5p-interactive-book-status-arrow .navigation-button {\n  background: transparent;\n  border: 0;\n  color: #1a73d9;\n  font-size: 1.5em;\n  margin: auto;\n}\n.h5p-interactive-book-status-arrow .navigation-button.disabled {\n  opacity: 0.5;\n}\n\n.h5p-interactive-book-status-header {\n  -webkit-position: sticky;\n  position: sticky;\n  background: #fff;\n  top: 0;\n  z-index: 2;\n}\n.h5p-interactive-book-status-header .h5p-interactive-book-status-to-top {\n  display: none;\n}\n\n.h5p-interactive-book-status-footer {\n  bottom: 0;\n}\n.h5p-interactive-book-status-footer .h5p-interactive-book-status-menu {\n  display: none;\n}\n.h5p-interactive-book-status-footer.footer-hidden {\n  display: none;\n}\n\n.h5p-interactive-book-navigation {\n  background-color: #fff;\n  background-size: cover;\n  box-shadow: 0.625em 0.625em 1.875em rgba(166, 166, 166, 0.2);\n  max-width: 0;\n  min-height: 19em;\n  overflow: hidden;\n  position: sticky;\n  top: 0;\n  transition: width 0.15s linear, flex-basis 0.15s linear, max-width 0.15s linear;\n  width: 0;\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n}\n.h5p-interactive-book-navigation > a {\n  font-weight: bold;\n}\n.h5p-interactive-book-navigation > div {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.h5p-interactive-book-navigation .navigation-list {\n  margin: 0;\n  padding: 0;\n}\n.h5p-interactive-book-navigation .large-navigation-list {\n  height: 0;\n  overflow-y: auto;\n  flex: 1 1 auto;\n  min-height: 58em;\n}\n\n.h5p-interactive-book-navigation-sectionlist {\n  background-color: #fff;\n  background-size: cover;\n  margin: 0;\n  padding: 0;\n  transition: max-height 0.5s ease-in;\n}\n.h5p-interactive-book-navigation-sectionlist > :first-child {\n  margin-top: 0.5em;\n}\n.h5p-interactive-book-navigation-sectionlist > :last-child {\n  border-bottom: solid 1px #e9e4ed;\n  padding-bottom: 0.5em;\n}\n.h5p-interactive-book-navigation-sectionlist .h5p-interactive-book-navigation-section {\n  background: transparent;\n  color: #4c4452;\n  font-size: 0.875em;\n  font-weight: 400;\n  line-height: 1.8;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.h5p-interactive-book-navigation-sectionlist .h5p-interactive-book-navigation-section .section-button {\n  position: relative;\n  background: transparent;\n  border: 0;\n  padding: 0 1.125em;\n  max-width: 100%;\n}\n.h5p-interactive-book-navigation-sectionlist .h5p-interactive-book-navigation-section .h5p-interactive-book-navigation-section-icon {\n  position: absolute;\n  color: #000;\n  font-size: 5px;\n  visibility: hidden;\n  width: 2.17em;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.h5p-interactive-book-navigation-sectionlist .h5p-interactive-book-navigation-section .h5p-interactive-book-navigation-section-icon.h5p-interactive-book-navigation-section-task {\n  visibility: inherit;\n}\n.h5p-interactive-book-navigation-sectionlist .h5p-interactive-book-navigation-section .h5p-interactive-book-navigation-section-title {\n  font-size: 0.85em;\n  margin-left: 15px;\n  margin-right: 2em;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.h5p-interactive-book-navigation-sectionlist :hover {\n  color: #1a73d9;\n  cursor: pointer;\n}\n\n.h5p-interactive-book-navigation-closed .h5p-interactive-book-navigation-chapter-button {\n  background-color: #fff;\n}\n.h5p-interactive-book-navigation-closed .h5p-interactive-book-navigation-chapter-button .h5p-interactive-book-navigation-chapter-title-text {\n  color: #4c4452;\n}\n.h5p-interactive-book-navigation-closed .h5p-interactive-book-navigation-sectionlist {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.5s ease-out;\n  visibility: hidden;\n}\n\n.h5p-interactive-book-navigation-chapter {\n  list-style: none;\n}\n\n.h5p-interactive-book-navigation-chapter-button {\n  align-items: center;\n  background-color: rgba(26, 115, 217, 0.1);\n  background-size: cover;\n  border: 0;\n  border-bottom: solid 1px #e9e4ed;\n  color: #4c4452;\n  display: flex;\n  font-family: inherit;\n  height: 3.438em;\n  margin: 0;\n  padding: 0 1.125em;\n  text-align: initial;\n  text-decoration: none solid #4c4452;\n  width: 100%;\n  position: relative;\n}\n.h5p-interactive-book-navigation-chapter-button.h5p-interactive-book-navigation-current {\n  background-color: rgba(26, 115, 217, 0.1);\n  border-bottom-color: white;\n}\n.h5p-interactive-book-navigation-chapter-button:hover {\n  background-color: rgba(26, 115, 217, 0.05);\n  cursor: pointer;\n}\n.h5p-interactive-book-navigation-chapter-button .h5p-interactive-book-navigation-chapter-title-text {\n  background-color: transparent;\n  color: #1a73d9;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 1em;\n  font-weight: 700;\n  line-height: 1.5em;\n  padding-left: 1.5em;\n  padding-right: 2em;\n  overflow: hidden;\n  text-decoration: none solid #1a73d9;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.h5p-interactive-book-navigation-chapter-button .h5p-interactive-book-navigation-chapter-accordion {\n  align-self: center;\n  font-size: 0.65em;\n  width: 1em;\n  position: absolute;\n  left: 15px;\n  top: 17px;\n}\n.h5p-interactive-book-navigation-chapter-button .h5p-interactive-book-navigation-chapter-accordion.hidden {\n  opacity: 0;\n  visibility: none;\n}\n.h5p-interactive-book-navigation-chapter-button .h5p-interactive-book-navigation-chapter-progress {\n  align-self: center;\n  font-size: 0.75em;\n  position: absolute;\n  right: 15px;\n  top: 17px;\n}\n.h5p-interactive-book-navigation-chapter-button:active {\n  background-color: rgba(26, 115, 217, 0.1);\n}\n\n.h5p-interactive-book-navigation-maintitle {\n  background-color: #1a73d9;\n  background-size: cover;\n}\n.h5p-interactive-book-navigation-maintitle .navigation-title {\n  align-self: center;\n  color: #fff;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 1em;\n  font-weight: 400;\n  overflow: hidden;\n  padding-left: 1.25em;\n  text-decoration: none solid #fff;\n  text-overflow: ellipsis;\n}\n\n.h5p-interactive-book-cover {\n  align-items: center;\n  background: #fff;\n  display: flex;\n  flex-direction: column;\n  font-family: \"Roboto\", sans-serif;\n  height: 100%;\n  left: 0;\n  padding-bottom: 200px;\n  position: relative;\n  top: 0;\n  width: 100%;\n  z-index: 3;\n}\n.h5p-interactive-book-cover.h5p-cover-nographics {\n  padding-top: 120px;\n}\n.h5p-interactive-book-cover p {\n  margin: 0 0 0.5em;\n}\n\n.h5p-interactive-book-cover-graphics {\n  align-items: center;\n  display: flex;\n  height: 15em;\n  margin: 4.375em 0;\n  position: relative;\n  width: 100%;\n}\n\n.h5p-interactive-book-cover-bar {\n  background-color: rgba(26, 115, 217, 0.05);\n  background-size: cover;\n  height: 70%;\n  width: inherit;\n}\n\n.h5p-interactive-book-cover-image {\n  box-shadow: 10px 4px 47px 0 rgba(0, 0, 0, 0.2);\n  height: 100%;\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 3;\n}\n\n.h5p-interactive-book-cover-title {\n  color: #363636;\n  font-size: 2.188em;\n  font-weight: 700;\n  text-align: center;\n  text-decoration: none solid #363636;\n}\n\n.h5p-interactive-book-cover-description {\n  color: #363636;\n  font-size: 1.25em;\n  font-weight: 400;\n  margin-bottom: 0.5em;\n  max-width: 80%;\n  text-align: center;\n  text-decoration: none solid #363636;\n}\n\n.h5p-interactive-book-cover-readbutton {\n  margin-top: 0.5em;\n}\n.h5p-interactive-book-cover-readbutton button {\n  background-color: #1a73d9;\n  background-size: cover;\n  border: 0;\n  border-radius: 3px;\n  color: #fff;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 20px;\n  font-weight: 400;\n  padding: 10px 40px;\n  text-align: center;\n  text-decoration: none solid #fff;\n}\n.h5p-interactive-book-cover-readbutton button:hover {\n  background-color: rgba(26, 115, 217, 0.9);\n  background-size: cover;\n  cursor: pointer;\n}\n.h5p-interactive-book-cover-readbutton button:active {\n  background-color: rgba(26, 115, 217, 0.95);\n  background-size: cover;\n}\n.h5p-interactive-book-cover-readbutton button:focus {\n  outline-style: double;\n}\n\n.h5p-container.covered .h5p-content-controls {\n  display: none;\n}\n\n.h5p-interactive-book.h5p-interactive-book-small .h5p-interactive-box-summary-progress {\n  display: block;\n}\n.h5p-interactive-book.h5p-interactive-book-small .h5p-interactive-box-summary-progress > div {\n  width: 100%;\n  margin-bottom: 0.6rem;\n}\n.h5p-interactive-book.h5p-interactive-book-small .h5p-interactive-book-summary-menu-button {\n  justify-content: center;\n  border-width: 0.125rem;\n}\n.h5p-interactive-book.h5p-interactive-book-small .h5p-interactive-book-summary-menu-button-arrow {\n  visibility: visible;\n  opacity: 1;\n  right: 0.6875rem;\n}\n.h5p-interactive-book.h5p-interactive-book-small .h5p-interactive-book-summary-buttons {\n  display: flex;\n}\n.h5p-interactive-book.h5p-interactive-book-small .h5p-interactive-book-summary-buttons .h5p-interactive-book-summary-button {\n  margin-right: initial;\n  justify-content: center;\n  padding: 1rem;\n}\n.h5p-interactive-book.h5p-interactive-book-small .h5p-interactive-book-summary-buttons .h5p-interactive-book-summary-submit {\n  flex-grow: 6;\n}\n.h5p-interactive-book.h5p-interactive-book-small .h5p-interactive-book-summary-buttons .h5p-interactive-book-summary-restart {\n  flex-grow: 4;\n  margin-left: 0.5rem;\n}\n.h5p-interactive-book.h5p-interactive-book-small .h5p-interactive-book-summary-score-bar {\n  margin-top: 1.25rem;\n}\n.h5p-interactive-book.h5p-interactive-book-small .h5p-interactive-book-summary-page {\n  padding: 0.5rem;\n}\n.h5p-interactive-book.h5p-interactive-book-small .h5p-interactive-book-navigation-open .h5p-interactive-book-navigation-chapter-button.h5p-interactive-book-navigation-current[aria-expanded=true] {\n  border-bottom-color: #0E7C57;\n  border-bottom-width: 2px;\n}\n\n.h5p-interactive-book-summary {\n  padding: 0 1.125rem;\n  margin: 0.7rem auto;\n}\n\n.h5p-interactive-book-summary-menu-button {\n  border: 1px solid #0E7C57;\n  border-radius: 2px;\n  background-color: #ffffff;\n  font-size: 0.8rem;\n  color: #0d736e;\n  font-weight: 700;\n  line-height: 1rem;\n  justify-content: space-between;\n  height: 100%;\n  padding: 0.5rem;\n}\n.h5p-interactive-book-summary-menu-button.h5p-interactive-book-navigation-chapter-button.h5p-interactive-book-navigation-current {\n  background-color: #f1f9f8;\n  border-bottom-color: #0E7C57;\n}\n.h5p-interactive-book-summary-menu-button:hover {\n  background-color: #f1f9f8;\n}\n.h5p-interactive-book-summary-menu-button:hover .h5p-interactive-book-summary-menu-button-arrow {\n  opacity: 1;\n  visibility: visible;\n  transform: rotate(90deg) translateY(-10px);\n}\n.h5p-interactive-book-summary-menu-button[data-book-completed=true], .h5p-interactive-book-summary-menu-button:active {\n  box-shadow: 0 0 0.625rem #0cc9a7;\n}\n.h5p-interactive-book-summary-menu-button .h5p-interactive-book-summary-text {\n  white-space: normal;\n  text-align: left;\n  height: 100%;\n  flex-grow: 2;\n  margin-right: 0.75rem;\n}\n.h5p-interactive-book-summary-menu-button .h5p-interactive-book-summary-icon {\n  margin-right: 0.25rem;\n  margin-left: auto;\n  font-size: 1.1em;\n}\n.h5p-interactive-book-summary-menu-button .h5p-interactive-book-summary-menu-button-arrow {\n  transform: rotate(90deg);\n  position: absolute;\n  right: 25px;\n  visibility: hidden;\n  opacity: 0;\n  height: auto;\n  font-weight: normal;\n  transition: transform 0.4s, opacity 0.2s, visibility 0.2s;\n}\n.h5p-interactive-book-summary-menu-button[disabled] {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.h5p-interactive-book-navigation-summary-button {\n  padding: 1.125rem 0.5rem;\n}\n\n.h5p-interactive-book-summary-page {\n  padding: 1.25rem;\n}\n.h5p-interactive-book-summary-page ol,\n.h5p-interactive-book-summary-page ul,\n.h5p-interactive-book-summary-page li {\n  padding-left: 0;\n}\n.h5p-interactive-book-summary-page .h5p-interactive-box-summary-progress {\n  display: flex;\n  justify-content: space-between;\n  color: #273C59;\n}\n.h5p-interactive-book-summary-page .h5p-interactive-box-summary-progress .h5p-interactive-book-summary-progress-container {\n  background-color: rgba(219, 219, 219, 0.3);\n  width: 49%;\n  padding: 1rem;\n  box-sizing: border-box;\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n  margin-right: 1em;\n}\n.h5p-interactive-book-summary-page .h5p-interactive-box-summary-progress .h5p-interactive-book-summary-progress-container .absolute-value {\n  color: #273C59;\n  font-size: 1.25em;\n}\n.h5p-interactive-book-summary-page .h5p-interactive-box-summary-progress .h5p-interactive-book-summary-progress-container .separator {\n  color: #273C59;\n  font-size: 0.75em;\n  margin: auto 0.4em;\n  vertical-align: top;\n}\n.h5p-interactive-book-summary-page .h5p-interactive-box-summary-progress .h5p-interactive-book-summary-progress-container:last-child {\n  margin-right: 0;\n}\n.h5p-interactive-book-summary-page .h5p-interactive-box-summary-progress h3 {\n  font-size: 0.875rem;\n  font-style: italic;\n  line-height: 1.25rem;\n  margin-top: 0;\n}\n.h5p-interactive-book-summary-page .h5p-interactive-box-summary-progress .h5p-interactive-book-summary-progressbox-bigtext {\n  font-size: 1.375rem;\n  color: #2d7ad2;\n  margin: 0.4375rem auto;\n  font-weight: bold;\n}\n.h5p-interactive-book-summary-page .h5p-interactive-box-summary-progress .h5p-interactive-book-summary-progressbox-smalltext {\n  font-size: 0.875rem;\n  color: #273c59;\n  font-style: italic;\n  line-height: 1.25rem;\n  margin: 0;\n}\n.h5p-interactive-book-summary-page .h5p-interactive-book-summary-buttons {\n  margin-top: 1rem;\n  flex-wrap: wrap;\n}\n.h5p-interactive-book-summary-page .h5p-interactive-book-summary-buttons > button {\n  font-family: inherit;\n}\n.h5p-interactive-book-summary-page .h5p-interactive-book-summary-buttons .h5p-interactive-book-summary-button {\n  border-radius: 4px;\n  padding: 0.6125rem 0.8125rem;\n  display: inline-flex;\n  align-items: center;\n  flex-direction: row-reverse;\n  font-weight: bold;\n  margin-right: 1rem;\n  font-size: 0.75rem;\n  cursor: pointer;\n}\n.h5p-interactive-book-summary-page .h5p-interactive-book-summary-buttons .h5p-interactive-book-summary-button .icon-restart, .h5p-interactive-book-summary-page .h5p-interactive-book-summary-buttons .h5p-interactive-book-summary-button .icon-paper-pencil {\n  margin-right: 0.5rem;\n  font-size: 1.1875rem;\n}\n.h5p-interactive-book-summary-page .h5p-interactive-book-summary-buttons .h5p-interactive-book-summary-submit {\n  background-color: #0E7C57;\n  color: #ffffff;\n  border: 1px solid #0E7C57;\n  transition: background-color 150ms;\n}\n.h5p-interactive-book-summary-page .h5p-interactive-book-summary-buttons .h5p-interactive-book-summary-submit:hover {\n  background-color: #0c694a;\n}\n.h5p-interactive-book-summary-page .h5p-interactive-book-summary-buttons .h5p-interactive-book-summary-restart {\n  color: #757575;\n  border: 1px solid #ebebeb;\n  background-color: #ffffff;\n  transition: background-color 150ms;\n}\n.h5p-interactive-book-summary-page .h5p-interactive-book-summary-buttons .h5p-interactive-book-summary-restart:hover {\n  background-color: #ebebeb;\n}\n.h5p-interactive-book-summary-page .h5p-interactive-book-summary-buttons .h5p-interactive-book-summary-submitted {\n  transform: translateY(100%);\n  transition: transform 0.4s;\n  position: absolute;\n  opacity: 0;\n  border-radius: 4px;\n  background-color: #d3ede9;\n  display: flex;\n  padding: 0.4375rem;\n  align-items: center;\n  flex: auto;\n  left: 2000px;\n}\n.h5p-interactive-book-summary-page .h5p-interactive-book-summary-buttons .h5p-interactive-book-summary-submitted .icon-chapter-done {\n  font-size: 2rem;\n  margin: 0.5625rem 1rem;\n  color: #0e8275;\n}\n.h5p-interactive-book-summary-page .h5p-interactive-book-summary-buttons .h5p-interactive-book-summary-submitted p {\n  font-weight: bold;\n  margin: 0;\n  font-size: 0.875rem;\n  color: #0e8275;\n}\n.h5p-interactive-book-summary-page .h5p-interactive-book-summary-buttons .h5p-interactive-book-summary-submitted .h5p-interactive-book-summary-restart {\n  margin-left: auto;\n  padding: 0.5615rem;\n  flex-grow: initial;\n}\n.h5p-interactive-book-summary-page .h5p-interactive-book-summary-buttons .h5p-interactive-book-summary-submitted button {\n  display: none;\n}\n.h5p-interactive-book-summary-page .h5p-interactive-book-summary-buttons.submitted > button {\n  display: none;\n}\n.h5p-interactive-book-summary-page .h5p-interactive-book-summary-buttons.submitted .h5p-interactive-book-summary-submitted {\n  transform: translateY(0);\n  opacity: 1;\n  position: static;\n}\n.h5p-interactive-book-summary-page .h5p-interactive-book-summary-buttons.submitted .h5p-interactive-book-summary-submitted button {\n  display: flex;\n}\n.h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-header select {\n  margin: auto 0 auto auto;\n  max-height: 1.5rem;\n}\n.h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-list {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.9375rem;\n}\n.h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-list-only-unanswered .h5p-interactive-book-summary-overview-section-details-task-done,\n.h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-list-only-unanswered .h5p-interactive-book-summary-no-interactions {\n  display: none;\n}\n.h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-section, .h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-list-empty {\n  padding: 0.875rem 1.25rem;\n  border: 1px solid #e8e8e8;\n  border-bottom: 0;\n  display: block;\n}\n.h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-section h4, .h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-list-empty h4 {\n  margin: 0;\n  display: flex;\n  align-items: center;\n  color: #000;\n  cursor: pointer;\n}\n.h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-section h4:hover, .h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-list-empty h4:hover {\n  color: #2d7ad2;\n}\n.h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-section h4 span[class^=icon-], .h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-list-empty h4 span[class^=icon-],\n.h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-section h4 span[class*=\" icon-\"],\n.h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-list-empty h4 span[class*=\" icon-\"] {\n  margin-left: auto;\n  color: #2d7ad2;\n  font-weight: 100;\n  cursor: pointer;\n}\n.h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-section:first-of-type, .h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-list-empty:first-of-type,\n.h5p-interactive-book-summary-page .h5p-interactive-book-summary-top-section {\n  border-top-right-radius: 5px;\n  border-top-left-radius: 5px;\n}\n.h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-section:last-of-type, .h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-list-empty:last-of-type,\n.h5p-interactive-book-summary-page .h5p-interactive-book-summary-bottom-section {\n  border-bottom: 1px solid #ebebeb;\n  border-bottom-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n.h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-section-score-header {\n  display: flex;\n}\n.h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-section-score-header div {\n  font-size: 0.875rem;\n  margin-left: auto;\n  line-height: 2rem;\n}\n.h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-list-empty {\n  display: none;\n}\n.h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-section-details {\n  display: flex;\n  border-top: 1px solid #ebebeb;\n  padding: 0.25rem;\n}\n.h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-section-details:hover {\n  background: #f3f3f3;\n}\n.h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-section-details .h5p-interactive-book-summary-section-title {\n  font-size: 0.875rem;\n  border: 0;\n  background-color: transparent;\n  padding: 0;\n  text-align: left;\n  width: 100%;\n  cursor: pointer;\n}\n.h5p-interactive-book-summary-page .h5p-interactive-book-summary-overview-section-details .h5p-interactive-book-summary-section-score {\n  margin-left: auto;\n  white-space: nowrap;\n  font-size: 0.875rem;\n}\n.h5p-interactive-book-summary-page .h5p-interactive-book-summary-section-icon {\n  margin-right: 0.6125rem;\n  color: #2d7ad2;\n  font-size: 0.8125rem;\n  align-items: center;\n  display: flex;\n}\n.h5p-interactive-book-summary-page .h5p-interactive-book-summary-chapter-subheader {\n  font-style: italic;\n  color: #737285;\n  font-size: 0.875rem;\n  line-height: 0.9375rem;\n}\n.h5p-interactive-book-summary-page .h5p-interactive-book-summary-progress-circle {\n  width: 3rem;\n  height: 3rem;\n  min-height: 3rem;\n  min-width: 3rem;\n  border-radius: 50%;\n  border: 6px solid #F4F4F4;\n  box-shadow: 0 0 0 4px rgba(228, 228, 237, 0.5);\n  margin-left: auto;\n  position: relative;\n}\n.h5p-interactive-book-summary-page .h5p-interactive-book-summary-progress-circle canvas {\n  position: absolute;\n  max-width: 100%;\n  max-height: 100%;\n}\n.h5p-interactive-book-summary-page .h5p-interactive-book-summary-score-bar {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 3rem;\n}\n.h5p-interactive-book-summary-page .h5p-interactive-book-summary-no-chapter-interactions p:first-child {\n  font-size: 1.2rem;\n  font-weight: bold;\n}\n\n.h5p-interactive-book-summary-footer {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: #ffffff;\n  height: 5rem;\n  box-shadow: -5px -5px 10px rgba(166, 166, 166, 0.4);\n  display: flex;\n  padding: 1rem;\n  box-sizing: border-box;\n  transform: translateY(120%);\n  transition: transform 0.5s;\n  z-index: 1;\n}\n.h5p-interactive-book-summary-footer.show-footer {\n  transform: translateY(0);\n}\n.h5p-interactive-book-summary-footer.menu-open {\n  display: none;\n}\n.h5p-interactive-book-summary-footer button {\n  flex: auto;\n}\n\n.h5p-interactive-book-summary-dropdown {\n  position: relative;\n  max-width: 200px;\n  border: 1px solid #e8e8e8;\n  border-radius: 4px;\n  background-color: #ffffff;\n  margin-left: auto 0.0625rem auto auto;\n  font-size: 0.875rem;\n  min-width: 12rem;\n}\n.h5p-interactive-book-summary-dropdown > button {\n  font-family: inherit;\n  cursor: pointer;\n}\n.h5p-interactive-book-summary-dropdown[active] .h5p-interactive-book-summary-dropdown-menu {\n  display: block;\n  box-shadow: 0 2px 3px 2px rgba(0, 0, 0, 0.1);\n}\n.h5p-interactive-book-summary-dropdown[active] .h5p-interactive-book-summary-dropdown-menu button {\n  background-color: #ffffff;\n}\n.h5p-interactive-book-summary-dropdown[active] button {\n  background-color: #fafafa;\n  cursor: pointer;\n  text-align: left;\n}\n.h5p-interactive-book-summary-dropdown .h5p-interactive-book-summary-dropdown-menu {\n  position: absolute;\n  list-style: none;\n  display: none;\n  left: 0;\n  right: 0;\n  overflow: hidden;\n  cursor: pointer;\n  background-color: inherit;\n}\n.h5p-interactive-book-summary-dropdown button {\n  display: flex;\n  width: 100%;\n  border: 0;\n  background: transparent;\n  align-items: center;\n  font-size: inherit;\n  padding: 0.5rem 0.6875rem;\n}\n.h5p-interactive-book-summary-dropdown button .icon-expanded {\n  margin-left: auto;\n  font-size: 0.5rem;\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var urlEscape = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../fonts/h5p-interactive-book.eot?a3wrpr */ "./src/fonts/h5p-interactive-book.eot?a3wrpr") + "#iefix");
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(/*! ../fonts/h5p-interactive-book.ttf?a3wrpr */ "./src/fonts/h5p-interactive-book.ttf?a3wrpr"));
var ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(/*! ../fonts/h5p-interactive-book.woff?a3wrpr */ "./src/fonts/h5p-interactive-book.woff?a3wrpr"));
var ___CSS_LOADER_URL___3___ = urlEscape(__webpack_require__(/*! ../fonts/h5p-interactive-book.svg?a3wrpr */ "./src/fonts/h5p-interactive-book.svg?a3wrpr") + "#h5p-interactive-book");

// Module
exports.push([module.i, "@font-face {\n  font-family: \"h5p-book\";\n  font-style: normal;\n  font-weight: normal;\n  src: url(" + ___CSS_LOADER_URL___0___ + ") format(\"embedded-opentype\"), url(" + ___CSS_LOADER_URL___1___ + ") format(\"truetype\"), url(" + ___CSS_LOADER_URL___2___ + ") format(\"woff\"), url(" + ___CSS_LOADER_URL___3___ + ") format(\"svg\");\n}\n.h5p-interactive-book [class^=icon-],\n.h5p-interactive-book [class*=\" icon-\"] {\n  font-family: \"h5p-book\";\n  font-style: normal;\n  font-variant: normal;\n  font-weight: normal;\n  line-height: 1;\n  text-transform: none;\n}\n\n.icon-close ::before {\n  content: \"\\e900\";\n}\n\n.icon-expanded::before {\n  content: \"\\e901\";\n}\n\n.icon-collapsed::before {\n  content: \"\\e902\";\n}\n\n.icon-chapter-started::before {\n  content: \"\\e903\";\n}\n\n.icon-chapter-done::before {\n  content: \"\\e90a\";\n}\n\n.icon-check-mark::before {\n  content: \"\\e910\";\n}\n\n.icon-chapter-blank::before {\n  content: \"\\e905\";\n}\n\n.icon-menu::before {\n  content: \"\\e906\";\n}\n\n.icon-previous::before {\n  content: \"\\e907\";\n}\n\n.icon-next::before {\n  content: \"\\e908\";\n}\n\n.icon-up::before {\n  content: \"\\e909\";\n}\n\n.icon-question-answered::before {\n  content: \"\\e90a\";\n}\n\n.icon-enable-fullscreen::before {\n  content: \"\\e90b\";\n}\n\n.icon-disable-fullscreen::before {\n  content: \"\\e90c\";\n}\n\n.icon-restart::before {\n  content: \"\\e90d\";\n}\n\n.icon-paper-pencil::before {\n  content: \"\\e90e\";\n}\n\n.icon-paper::before {\n  content: \"\\e90f\";\n}", ""]);



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
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/url-escape.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/url-escape.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function escape(url, needQuotes) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
  }

  return url;
};

/***/ }),

/***/ "./node_modules/element-scroll-polyfill/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/element-scroll-polyfill/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() {
    var normalizeNonFiniteValue = function (value) {
        value = +value;
        return (isNaN(value) || value == Infinity || value == -Infinity) ? 0 : value;
    }
    
    var isBodyPotentiallyScrollable = function (body) {
        body = body ? body : document.getElementsByTagName("BODY")[0];
    
        var bodyComputedStyle = window.getComputedStyle(body);
        var parentComputedStyle =  window.getComputedStyle(body.parent);
        var bodyComputedOverflowX = bodyComputedStyle.overflowX;
        var bodyComputedOverflowY = bodyComputedStyle.overflowY;
        var parentComputedOverflowX = parentComputedStyle.overflowX;
        var parentComputedOverflowY = parentComputedStyle.overflowY;
    
        return (
            (
                bodyComputedStyle.display == "table-column" || 
                bodyComputedStyle.display == "table-column-group"
            ) && (
                parentComputedOverflowX != "visible" && 
                parentComputedOverflowX != "clip" && 
                parentComputedOverflowY != "visible" && 
                parentComputedOverflowY != "clip"
            ) && (
                bodyComputedOverflowX != "visible" && 
                bodyComputedOverflowX != "clip" && 
                bodyComputedOverflowY != "visible" && 
                bodyComputedOverflowY != "clip"
            )
        );
    }
    
    if (!Element.prototype.scroll) {
        Element.prototype.scroll = function () {
            var argsLength = arguments.length;
            var doc = this.ownerDocument;
            var win = doc.defaultView;
            var quirksMode = (doc.compatMode == "BackCompat");
            var body = document.getElementsByTagName("BODY")[0];
            var options = {};
            var x, y;
    
            if (doc != window.document) return;
            if (!win) return;
    
            if (argsLength === 0) {
                return;
            } else if (argsLength === 1) {
                var arg = arguments[0];
                if (typeof arg != "object") throw "Failed to execute 'scrollBy' on 'Element': parameter 1 ('options') is not an object.";
        
                if ('left' in arg) {
                    options.left = normalizeNonFiniteValue(arg.left);
                }
        
                if ('top' in arg) {
                    options.top = normalizeNonFiniteValue(arg.top);
                }
    
                x = (('left' in options) ? options.left : this.scrollLeft);
                y = (('top' in options) ? options.top : this.scrollTop);
            } else {
                options.left = x = normalizeNonFiniteValue(arguments[0]);
                options.top = y = normalizeNonFiniteValue(arguments[1]);
            }
    
            if (this == document.documentElement) {
                if (quirksMode) return;
    
                win.scroll(('scrollX' in win) ? win.scrollX : (('pageXOffset' in win) ? win.pageXOffset : this.scrollLeft), y);
                return;
            }
    
            if (this == body && quirksMode && !isBodyPotentiallyScrollable(body)) {
                win.scroll(options.left, options.top);
                return;
            }
            
            this.scrollLeft = x;
            this.scrollTop = y;
        };
    }
    
    if (!Element.prototype.scrollTo) {
        Element.prototype.scrollTo = Element.prototype.scroll;
    }
    
    if (!Element.prototype.scrollBy) {
        Element.prototype.scrollBy = function () {
            var argsLength = arguments.length;
            var options = {};
    
            if (argsLength === 0) {
                return;
            } else if (argsLength === 1) {
                var arg = arguments[0];
                if (typeof arg != "object") throw "Failed to execute 'scrollBy' on 'Element': parameter 1 ('options') is not an object.";
    
                if ('left' in arg) {
                    options.left = normalizeNonFiniteValue(arg.left);
                }
    
                if ('top' in arg) {
                    options.top = normalizeNonFiniteValue(arg.top);
                }
            } else {
                options.left = normalizeNonFiniteValue(arguments[0]);
                options.top = normalizeNonFiniteValue(arguments[1]);
            }
    
            options.left = (('left' in options) ? options.left + this.scrollLeft : this.scrollLeft);
            options.top = (('top' in options) ? options.top + this.scrollTop : this.scrollTop);
            this.scroll(options);
        };
    }
})();


/***/ }),

/***/ "./node_modules/jquery-circle-progress/dist/circle-progress.js":
/*!*********************************************************************!*\
  !*** ./node_modules/jquery-circle-progress/dist/circle-progress.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * jquery-circle-progress - jQuery Plugin to draw animated circular progress bars:
 * {@link http://kottenator.github.io/jquery-circle-progress/}
 *
 * @author Rostyslav Bryzgunov <kottenator@gmail.com>
 * @version 1.2.2
 * @licence MIT
 * @preserve
 */
// UMD factory - https://github.com/umdjs/umd/blob/d31bb6ee7098715e019f52bdfe27b3e4bfd2b97e/templates/jqueryPlugin.js
// Uses AMD, CommonJS or browser globals to create a jQuery plugin.
(function(factory) {
  if (true) {
    // AMD - register as an anonymous module
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "jquery")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var $; }
})(function($) {
  /**
   * Inner implementation of the circle progress bar.
   * The class is not exposed _yet_ but you can create an instance through jQuery method call.
   *
   * @param {object} config - You can customize any class member (property or method).
   * @class
   * @alias CircleProgress
   */
  function CircleProgress(config) {
    this.init(config);
  }

  CircleProgress.prototype = {
    //--------------------------------------- public options ---------------------------------------
    /**
     * This is the only required option. It should be from `0.0` to `1.0`.
     * @type {number}
     * @default 0.0
     */
    value: 0.0,

    /**
     * Size of the canvas in pixels.
     * It's a square so we need only one dimension.
     * @type {number}
     * @default 100.0
     */
    size: 100.0,

    /**
     * Initial angle for `0.0` value in radians.
     * @type {number}
     * @default -Math.PI
     */
    startAngle: -Math.PI,

    /**
     * Width of the arc in pixels.
     * If it's `'auto'` - the value is calculated as `[this.size]{@link CircleProgress#size} / 14`.
     * @type {number|string}
     * @default 'auto'
     */
    thickness: 'auto',

    /**
     * Fill of the arc. You may set it to:
     *
     *   - solid color:
     *     - `'#3aeabb'`
     *     - `{ color: '#3aeabb' }`
     *     - `{ color: 'rgba(255, 255, 255, .3)' }`
     *   - linear gradient _(left to right)_:
     *     - `{ gradient: ['#3aeabb', '#fdd250'], gradientAngle: Math.PI / 4 }`
     *     - `{ gradient: ['red', 'green', 'blue'], gradientDirection: [x0, y0, x1, y1] }`
     *     - `{ gradient: [["red", .2], ["green", .3], ["blue", .8]] }`
     *   - image:
     *     - `{ image: 'http://i.imgur.com/pT0i89v.png' }`
     *     - `{ image: imageObject }`
     *     - `{ color: 'lime', image: 'http://i.imgur.com/pT0i89v.png' }` -
     *       color displayed until the image is loaded
     *
     * @default {gradient: ['#3aeabb', '#fdd250']}
     */
    fill: {
      gradient: ['#3aeabb', '#fdd250']
    },

    /**
     * Color of the "empty" arc. Only a color fill supported by now.
     * @type {string}
     * @default 'rgba(0, 0, 0, .1)'
     */
    emptyFill: 'rgba(0, 0, 0, .1)',

    /**
     * jQuery Animation config.
     * You can pass `false` to disable the animation.
     * @see http://api.jquery.com/animate/
     * @type {object|boolean}
     * @default {duration: 1200, easing: 'circleProgressEasing'}
     */
    animation: {
      duration: 1200,
      easing: 'circleProgressEasing'
    },

    /**
     * Default animation starts at `0.0` and ends at specified `value`. Let's call this _direct animation_.
     * If you want to make _reversed animation_ - set `animationStartValue: 1.0`.
     * Also you may specify any other value from `0.0` to `1.0`.
     * @type {number}
     * @default 0.0
     */
    animationStartValue: 0.0,

    /**
     * Reverse animation and arc draw.
     * By default, the arc is filled from `0.0` to `value`, _clockwise_.
     * With `reverse: true` the arc is filled from `1.0` to `value`, _counter-clockwise_.
     * @type {boolean}
     * @default false
     */
    reverse: false,

    /**
     * Arc line cap: `'butt'`, `'round'` or `'square'` -
     * [read more]{@link https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D.lineCap}.
     * @type {string}
     * @default 'butt'
     */
    lineCap: 'butt',

    /**
     * Canvas insertion mode: append or prepend it into the parent element?
     * @type {string}
     * @default 'prepend'
     */
    insertMode: 'prepend',

    //------------------------------ protected properties and methods ------------------------------
    /**
     * Link to {@link CircleProgress} constructor.
     * @protected
     */
    constructor: CircleProgress,

    /**
     * Container element. Should be passed into constructor config.
     * @protected
     * @type {jQuery}
     */
    el: null,

    /**
     * Canvas element. Automatically generated and prepended to [this.el]{@link CircleProgress#el}.
     * @protected
     * @type {HTMLCanvasElement}
     */
    canvas: null,

    /**
     * 2D-context of [this.canvas]{@link CircleProgress#canvas}.
     * @protected
     * @type {CanvasRenderingContext2D}
     */
    ctx: null,

    /**
     * Radius of the outer circle. Automatically calculated as `[this.size]{@link CircleProgress#size} / 2`.
     * @protected
     * @type {number}
     */
    radius: 0.0,

    /**
     * Fill of the main arc. Automatically calculated, depending on [this.fill]{@link CircleProgress#fill} option.
     * @protected
     * @type {string|CanvasGradient|CanvasPattern}
     */
    arcFill: null,

    /**
     * Last rendered frame value.
     * @protected
     * @type {number}
     */
    lastFrameValue: 0.0,

    /**
     * Init/re-init the widget.
     *
     * Throws a jQuery event:
     *
     * - `circle-inited(jqEvent)`
     *
     * @param {object} config - You can customize any class member (property or method).
     */
    init: function(config) {
      $.extend(this, config);
      this.radius = this.size / 2;
      this.initWidget();
      this.initFill();
      this.draw();
      this.el.trigger('circle-inited');
    },

    /**
     * Initialize `<canvas>`.
     * @protected
     */
    initWidget: function() {
      if (!this.canvas)
        this.canvas = $('<canvas>')[this.insertMode == 'prepend' ? 'prependTo' : 'appendTo'](this.el)[0];

      var canvas = this.canvas;
      canvas.width = this.size;
      canvas.height = this.size;
      this.ctx = canvas.getContext('2d');

      if (window.devicePixelRatio > 1) {
        var scaleBy = window.devicePixelRatio;
        canvas.style.width = canvas.style.height = this.size + 'px';
        canvas.width = canvas.height = this.size * scaleBy;
        this.ctx.scale(scaleBy, scaleBy);
      }
    },

    /**
     * This method sets [this.arcFill]{@link CircleProgress#arcFill}.
     * It could do this async (on image load).
     * @protected
     */
    initFill: function() {
      var self = this,
        fill = this.fill,
        ctx = this.ctx,
        size = this.size;

      if (!fill)
        throw Error("The fill is not specified!");

      if (typeof fill == 'string')
        fill = {color: fill};

      if (fill.color)
        this.arcFill = fill.color;

      if (fill.gradient) {
        var gr = fill.gradient;

        if (gr.length == 1) {
          this.arcFill = gr[0];
        } else if (gr.length > 1) {
          var ga = fill.gradientAngle || 0, // gradient direction angle; 0 by default
            gd = fill.gradientDirection || [
                size / 2 * (1 - Math.cos(ga)), // x0
                size / 2 * (1 + Math.sin(ga)), // y0
                size / 2 * (1 + Math.cos(ga)), // x1
                size / 2 * (1 - Math.sin(ga))  // y1
              ];

          var lg = ctx.createLinearGradient.apply(ctx, gd);

          for (var i = 0; i < gr.length; i++) {
            var color = gr[i],
              pos = i / (gr.length - 1);

            if ($.isArray(color)) {
              pos = color[1];
              color = color[0];
            }

            lg.addColorStop(pos, color);
          }

          this.arcFill = lg;
        }
      }

      if (fill.image) {
        var img;

        if (fill.image instanceof Image) {
          img = fill.image;
        } else {
          img = new Image();
          img.src = fill.image;
        }

        if (img.complete)
          setImageFill();
        else
          img.onload = setImageFill;
      }

      function setImageFill() {
        var bg = $('<canvas>')[0];
        bg.width = self.size;
        bg.height = self.size;
        bg.getContext('2d').drawImage(img, 0, 0, size, size);
        self.arcFill = self.ctx.createPattern(bg, 'no-repeat');
        self.drawFrame(self.lastFrameValue);
      }
    },

    /**
     * Draw the circle.
     * @protected
     */
    draw: function() {
      if (this.animation)
        this.drawAnimated(this.value);
      else
        this.drawFrame(this.value);
    },

    /**
     * Draw a single animation frame.
     * @protected
     * @param {number} v - Frame value.
     */
    drawFrame: function(v) {
      this.lastFrameValue = v;
      this.ctx.clearRect(0, 0, this.size, this.size);
      this.drawEmptyArc(v);
      this.drawArc(v);
    },

    /**
     * Draw the arc (part of the circle).
     * @protected
     * @param {number} v - Frame value.
     */
    drawArc: function(v) {
      if (v === 0)
        return;

      var ctx = this.ctx,
        r = this.radius,
        t = this.getThickness(),
        a = this.startAngle;

      ctx.save();
      ctx.beginPath();

      if (!this.reverse) {
        ctx.arc(r, r, r - t / 2, a, a + Math.PI * 2 * v);
      } else {
        ctx.arc(r, r, r - t / 2, a - Math.PI * 2 * v, a);
      }

      ctx.lineWidth = t;
      ctx.lineCap = this.lineCap;
      ctx.strokeStyle = this.arcFill;
      ctx.stroke();
      ctx.restore();
    },

    /**
     * Draw the _empty (background)_ arc (part of the circle).
     * @protected
     * @param {number} v - Frame value.
     */
    drawEmptyArc: function(v) {
      var ctx = this.ctx,
        r = this.radius,
        t = this.getThickness(),
        a = this.startAngle;

      if (v < 1) {
        ctx.save();
        ctx.beginPath();

        if (v <= 0) {
          ctx.arc(r, r, r - t / 2, 0, Math.PI * 2);
        } else {
          if (!this.reverse) {
            ctx.arc(r, r, r - t / 2, a + Math.PI * 2 * v, a);
          } else {
            ctx.arc(r, r, r - t / 2, a, a - Math.PI * 2 * v);
          }
        }

        ctx.lineWidth = t;
        ctx.strokeStyle = this.emptyFill;
        ctx.stroke();
        ctx.restore();
      }
    },

    /**
     * Animate the progress bar.
     *
     * Throws 3 jQuery events:
     *
     * - `circle-animation-start(jqEvent)`
     * - `circle-animation-progress(jqEvent, animationProgress, stepValue)` - multiple event
     *   animationProgress: from `0.0` to `1.0`; stepValue: from `0.0` to `value`
     * - `circle-animation-end(jqEvent)`
     *
     * @protected
     * @param {number} v - Final value.
     */
    drawAnimated: function(v) {
      var self = this,
        el = this.el,
        canvas = $(this.canvas);

      // stop previous animation before new "start" event is triggered
      canvas.stop(true, false);
      el.trigger('circle-animation-start');

      canvas
        .css({animationProgress: 0})
        .animate({animationProgress: 1}, $.extend({}, this.animation, {
          step: function(animationProgress) {
            var stepValue = self.animationStartValue * (1 - animationProgress) + v * animationProgress;
            self.drawFrame(stepValue);
            el.trigger('circle-animation-progress', [animationProgress, stepValue]);
          }
        }))
        .promise()
        .always(function() {
          // trigger on both successful & failure animation end
          el.trigger('circle-animation-end');
        });
    },

    /**
     * Get the circle thickness.
     * @see CircleProgress#thickness
     * @protected
     * @returns {number}
     */
    getThickness: function() {
      return $.isNumeric(this.thickness) ? this.thickness : this.size / 14;
    },

    /**
     * Get current value.
     * @protected
     * @return {number}
     */
    getValue: function() {
      return this.value;
    },

    /**
     * Set current value (with smooth animation transition).
     * @protected
     * @param {number} newValue
     */
    setValue: function(newValue) {
      if (this.animation)
        this.animationStartValue = this.lastFrameValue;
      this.value = newValue;
      this.draw();
    }
  };

  //----------------------------------- Initiating jQuery plugin -----------------------------------
  $.circleProgress = {
    // Default options (you may override them)
    defaults: CircleProgress.prototype
  };

  // ease-in-out-cubic
  $.easing.circleProgressEasing = function(x) {
    if (x < 0.5) {
      x = 2 * x;
      return 0.5 * x * x * x;
    } else {
      x = 2 - 2 * x;
      return 1 - 0.5 * x * x * x;
    }
  };

  /**
   * Creates an instance of {@link CircleProgress}.
   * Produces [init event]{@link CircleProgress#init} and [animation events]{@link CircleProgress#drawAnimated}.
   *
   * @param {object} [configOrCommand] - Config object or command name.
   *
   * Config example (you can specify any {@link CircleProgress} property):
   *
   * ```js
   * { value: 0.75, size: 50, animation: false }
   * ```
   *
   * Commands:
   *
   * ```js
   * el.circleProgress('widget'); // get the <canvas>
   * el.circleProgress('value'); // get the value
   * el.circleProgress('value', newValue); // update the value
   * el.circleProgress('redraw'); // redraw the circle
   * el.circleProgress(); // the same as 'redraw'
   * ```
   *
   * @param {string} [commandArgument] - Some commands (like `'value'`) may require an argument.
   * @see CircleProgress
   * @alias "$(...).circleProgress"
   */
  $.fn.circleProgress = function(configOrCommand, commandArgument) {
    var dataName = 'circle-progress',
      firstInstance = this.data(dataName);

    if (configOrCommand == 'widget') {
      if (!firstInstance)
        throw Error('Calling "widget" method on not initialized instance is forbidden');
      return firstInstance.canvas;
    }

    if (configOrCommand == 'value') {
      if (!firstInstance)
        throw Error('Calling "value" method on not initialized instance is forbidden');
      if (typeof commandArgument == 'undefined') {
        return firstInstance.getValue();
      } else {
        var newValue = arguments[1];
        return this.each(function() {
          $(this).data(dataName).setValue(newValue);
        });
      }
    }

    return this.each(function() {
      var el = $(this),
        instance = el.data(dataName),
        config = $.isPlainObject(configOrCommand) ? configOrCommand : {};

      if (instance) {
        instance.init(config);
      } else {
        var initialConfig = $.extend({}, el.data());
        if (typeof initialConfig.fill == 'string')
          initialConfig.fill = JSON.parse(initialConfig.fill);
        if (typeof initialConfig.animation == 'string')
          initialConfig.animation = JSON.parse(initialConfig.animation);
        config = $.extend(initialConfig, config);
        config.el = el;
        instance = new CircleProgress(config);
        el.data(dataName, instance);
      }
    });
  };
});


/***/ }),

/***/ "./node_modules/style-loader/addStyles.js":
/*!************************************************!*\
  !*** ./node_modules/style-loader/addStyles.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./src/entries/main.js":
/*!*****************************!*\
  !*** ./src/entries/main.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/style.scss */ "./src/styles/style.scss");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scripts_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scripts/app */ "./src/scripts/app.js");


 // Load library

H5P = H5P || {};
H5P.InteractiveBook = _scripts_app__WEBPACK_IMPORTED_MODULE_2__["default"];

/***/ }),

/***/ "./src/fonts/h5p-interactive-book.eot?a3wrpr":
/*!***************************************************!*\
  !*** ./src/fonts/h5p-interactive-book.eot?a3wrpr ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:application/vnd.ms-fontobject;base64,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"

/***/ }),

/***/ "./src/fonts/h5p-interactive-book.svg?a3wrpr":
/*!***************************************************!*\
  !*** ./src/fonts/h5p-interactive-book.svg?a3wrpr ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiID4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8bWV0YWRhdGE+Cjxqc29uPgo8IVtDREFUQVsKewoJImZvbnRGYW1pbHkiOiAiaDVwLWJvb2siLAoJImRlc2NyaXB0aW9uIjogIkZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uIiwKCSJtYWpvclZlcnNpb24iOiAxLAoJIm1pbm9yVmVyc2lvbiI6IDIsCgkidmVyc2lvbiI6ICJWZXJzaW9uIDEuMiIsCgkiZm9udElkIjogImg1cC1ib29rIiwKCSJwc05hbWUiOiAiaDVwLWJvb2siLAoJInN1YkZhbWlseSI6ICJSZWd1bGFyIiwKCSJmdWxsTmFtZSI6ICJoNXAtYm9vayIKfQpdXT4KPC9qc29uPgo8L21ldGFkYXRhPgo8ZGVmcz4KPGZvbnQgaWQ9Img1cC1ib29rIiBob3Jpei1hZHYteD0iMTAyNCI+Cjxmb250LWZhY2UgdW5pdHMtcGVyLWVtPSIxMDI0IiBhc2NlbnQ9Ijk2MCIgZGVzY2VudD0iLTY0IiAvPgo8bWlzc2luZy1nbHlwaCBob3Jpei1hZHYteD0iMTAyNCIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeDIwOyIgaG9yaXotYWR2LXg9IjUxMiIgZD0iIiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTkwMDsiIGdseXBoLW5hbWU9ImNsb3NlIiBkYXRhLXRhZ3M9ImNsb3NlIiBkPSJNMTAyNCA4NTYuODY5bC0xMDMuMTMxIDEwMy4xMzEtNDA4Ljg2OS00MDguODY5LTQwOC44NjkgNDA4Ljg2OS0xMDMuMTMxLTEwMy4xMzEgNDA4Ljg2OS00MDguODY5LTQwOC44NjktNDA4Ljg2OSAxMDMuMTMxLTEwMy4xMzEgNDA4Ljg2OSA0MDguODY5IDQwOC44NjktNDA4Ljg2OSAxMDMuMTMxIDEwMy4xMzEtNDA4Ljg2OSA0MDguODY5eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5MDE7IiBnbHlwaC1uYW1lPSJleHBhbmRlZCIgZGF0YS10YWdzPSJleHBhbmRlZCIgZD0iTTU1OC4xMDQgMTc4Ljk0Nmw0NDcuNjM3IDQ0Ny42MzdjMjQuOTc1IDI0Ljk3NSAyNC4wMTYgNjYuMjgxLTAuOTYxIDkxLjI1NS0xMS41MjcgMTEuNTI3LTI3Ljg1NiAxOC4yNTItNDQuMTg4IDE4LjI1MmgtODk2LjIzMmMtMzQuNTgxIDAtNjMuMzk5LTI3Ljg1Ni02NC4zNi02Mi40MzggMC0xNy4yOTEgNi43MjUtMzMuNjIgMTkuMjExLTQ2LjEwOGw0NDcuNjM3LTQ0Ny42MzdjMjMuMDU0LTI0Ljk3NSA2Mi40MzgtMjYuODk3IDg4LjM3NC0zLjg0MyAwLjk2MSAwLjk2MSAxLjkyIDEuOTIgMi44ODIgMi44ODJ6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTkwMjsiIGdseXBoLW5hbWU9ImNvbGxhcHNlZCIgZGF0YS10YWdzPSJjb2xsYXBzZWQiIGQ9Ik03ODEuMDU0IDQ5NC4xMDRsLTQ0Ny42MzcgNDQ3LjYzN2MtMjQuOTc1IDI0Ljk3NS02Ni4yODEgMjQuMDE2LTkxLjI1NS0wLjk2MS0xMS41MjctMTEuNTI3LTE4LjI1Mi0yNy44NTYtMTguMjUyLTQ0LjE4OHYtODk2LjIzMmMwLTM0LjU4MSAyNy44NTYtNjMuMzk5IDYyLjQzOC02NC4zNiAxNy4yOTEgMCAzMy42MiA2LjcyNSA0Ni4xMDggMTkuMjExbDQ0Ny42MzcgNDQ3LjYzN2MyNC45NzUgMjMuMDU0IDI2Ljg5NyA2Mi40MzggMy44NDMgODguMzc0LTAuOTYxIDAuOTYxLTEuOTIgMS45Mi0yLjg4MiAyLjg4MnoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlOTAzOyIgZ2x5cGgtbmFtZT0iY2hhcHRlci1zdGFydGVkIiBkYXRhLXRhZ3M9ImNoYXB0ZXItc3RhcnRlZCIgZD0iTTMzMC4yNDggMTM0LjQwOGMtNTQuMzk5IDMxLjM2LTEwMC40NzggNzcuNDM4LTEzMS44MzYgMTMxLjgzNi02NC42MzggMTEyLjYzNy02NC42MzggMjUwLjg3MyAwIDM2My41MTEgMzEuMzYgNTQuMzk5IDc3LjQzOCAxMDAuNDc4IDEzMS44MzYgMTMxLjgzNiA1NS4wMzggMzEuOTk5IDExNy43NTcgNDkuMjc4IDE4MS43NTUgNDguNjM5di03MjQuNDYxYy02My45OTktMC42NC0xMjYuNzE3IDE2LjYzOS0xODEuNzU1IDQ4LjYzOXpNOTU0Ljg3MSA3MDMuOTk0Yy00NC43OTkgNzcuNDM4LTEwOS40MzcgMTQyLjA3Ni0xODYuODc2IDE4Ni44NzYtNzcuNDM4IDQ1LjQzOC0xNjUuNzU2IDY5Ljc1OS0yNTUuOTk0IDY5LjExOC05MC4yMzggMC42NC0xNzguNTU1LTIzLjY4LTI1NS45OTQtNjkuMTE4LTc3LjQzOC00NC43OTktMTQyLjA3Ni0xMDkuNDM3LTE4Ni44NzYtMTg2Ljg3Ni00NS40MzgtNzcuNDM4LTY5Ljc1OS0xNjUuNzU2LTY5LjExOC0yNTUuOTk0LTAuNjQtOTAuMjM4IDIzLjAzOS0xNzguNTU1IDY4LjQ3OC0yNTUuOTk0IDQ0Ljc5OS03Ny40MzggMTA5LjQzNy0xNDIuMDc2IDE4Ny41MTUtMTg2Ljg3NiA3Ny40MzgtNDUuNDM4IDE2NS43NTYtNjkuNzU5IDI1NS45OTQtNjkuMTE4IDkwLjIzOC0wLjY0IDE3OC41NTUgMjMuMDM5IDI1NS45OTQgNjguNDc4IDc3LjQzOCA0NC43OTkgMTQyLjA3NiAxMDkuNDM3IDE4Ni44NzYgMTg3LjUxNSA0NS40MzggNzcuNDM4IDY5Ljc1OSAxNjUuNzU2IDY5LjExOCAyNTUuOTk0IDAuNjQgOTAuMjM4LTIzLjY4IDE3OC41NTUtNjkuMTE4IDI1NS45OTR6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTkwNDsiIGdseXBoLW5hbWU9ImNoYXB0ZXItZG9uZSIgZGF0YS10YWdzPSJjaGFwdGVyLWRvbmUiIGQ9Ik04NTUuNjc0IDU1Ni4xNThjMC0xMS41Mi0zLjg0LTIyLjM5OS0xMi4xNi0zMC4wNzlsLTM2MS41OTEtMzYxLjU5MWMtOC4zMi04LjMyLTE5LjE5OS0xMi43OTktMzAuNzE5LTEyLjc5OXMtMjIuMzk5IDQuNDgtMzAuMDc5IDEyLjc5OWwtMjQwLjYzNCAyNDAuNjM0Yy04LjMyIDcuNjgtMTIuMTYgMTguNTU5LTEyLjE2IDMwLjA3OS0wLjY0IDExLjUyIDMuODQgMjIuMzk5IDEyLjE2IDMwLjcxOWw2MC43OTggNjAuMTU5YzE2IDE2LjYzOSA0Mi4yMzkgMTcuMjggNTguODc4IDEuMjc5IDAuNjQtMC42NCAwLjY0LTAuNjQgMS4yNzktMS4yNzlsMTUwLjM5Ny0xNTAuMzk3IDI3MS4zNTMgMjcwLjcxM2MxNiAxNi42MzkgNDIuMjM5IDE3LjI4IDU4Ljg3OCAxLjI3OSAwLjY0LTAuNjQgMC42NC0wLjY0IDEuMjc5LTEuMjc5bDYwLjc5OC02MC4xNTljOC4zMi04LjMyIDEyLjc5OS0xOS4xOTkgMTIuMTYtMzAuNzE5djBsLTAuNjQgMC42NHpNOTU0Ljg3MSA3MDMuOTk0Yy00NC43OTkgNzcuNDM4LTEwOS40MzcgMTQyLjA3Ni0xODYuODc2IDE4Ni44NzYtNzcuNDM4IDQ1LjQzOC0xNjUuNzU2IDY5Ljc1OS0yNTUuOTk0IDY5LjExOC05MC4yMzggMC42NC0xNzguNTU1LTIzLjY4LTI1NS45OTQtNjkuMTE4LTc3LjQzOC00NC43OTktMTQyLjA3Ni0xMDkuNDM3LTE4Ni44NzYtMTg2Ljg3Ni00NS40MzgtNzcuNDM4LTY5Ljc1OS0xNjUuNzU2LTY5LjExOC0yNTUuOTk0LTAuNjQtOTAuMjM4IDIzLjAzOS0xNzguNTU1IDY4LjQ3OC0yNTUuOTk0IDQ0Ljc5OS03Ny40MzggMTA5LjQzNy0xNDIuMDc2IDE4Ny41MTUtMTg2Ljg3NiA3Ny40MzgtNDUuNDM4IDE2NS43NTYtNjkuNzU5IDI1NS45OTQtNjkuMTE4IDkwLjIzOC0wLjY0IDE3OC41NTUgMjMuMDM5IDI1NS45OTQgNjguNDc4IDc3LjQzOCA0NC43OTkgMTQyLjA3NiAxMDkuNDM3IDE4Ni44NzYgMTg3LjUxNSA0NS40MzggNzcuNDM4IDY5Ljc1OSAxNjUuNzU2IDY5LjExOCAyNTUuOTk0IDAuNjQgOTAuMjM4LTIzLjY4IDE3OC41NTUtNjkuMTE4IDI1NS45OTR6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTkwNTsiIGdseXBoLW5hbWU9ImNoYXB0ZXItYmxhbmsiIGRhdGEtdGFncz0iY2hhcHRlci1ibGFuayIgZD0iTTY5My43NTUgNzYxLjU5MmM1NC4zOTktMzEuMzYgMTAwLjQ3OC03Ny40MzggMTMxLjgzNi0xMzEuODM2IDY0LjYzOC0xMTIuNjM3IDY0LjYzOC0yNTAuODczIDAtMzYzLjUxMS0zMS4zNi01NC4zOTktNzcuNDM4LTEwMC40NzgtMTMxLjgzNi0xMzEuODM2LTExMi42MzctNjQuNjM4LTI1MC44NzMtNjQuNjM4LTM2My41MTEgMC01NC4zOTkgMzEuMzYtMTAwLjQ3OCA3Ny40MzgtMTMxLjgzNiAxMzEuODM2LTY0LjYzOCAxMTIuNjM3LTY0LjYzOCAyNTAuODczIDAgMzYzLjUxMSAzMS4zNiA1NC4zOTkgNzcuNDM4IDEwMC40NzggMTMxLjgzNiAxMzEuODM2IDExMi42MzcgNjQuNjM4IDI1MC44NzMgNjQuNjM4IDM2My41MTEgMHpNOTU0Ljg2OCA3MDMuOTk0Yy00NC43OTkgNzcuNDM4LTEwOS40MzcgMTQyLjA3Ni0xODYuODc2IDE4Ni44NzYtNzcuNDM4IDQ1LjQzOC0xNjUuNzU2IDY5Ljc1OS0yNTUuOTk0IDY5LjExOC05MC4yMzggMC42NC0xNzguNTU1LTIzLjY4LTI1NS45OTQtNjkuMTE4LTc3LjQzOC00NC43OTktMTQyLjA3Ni0xMDkuNDM3LTE4Ni44NzYtMTg2Ljg3Ni00NS40MzgtNzcuNDM4LTY5Ljc1OS0xNjUuNzU2LTY5LjExOC0yNTUuOTk0LTAuNjQtOTAuMjM4IDIzLjAzOS0xNzguNTU1IDY4LjQ3OC0yNTUuOTk0IDQ0Ljc5OS03Ny40MzggMTA5LjQzNy0xNDIuMDc2IDE4Ny41MTUtMTg2Ljg3NiA3Ny40MzgtNDUuNDM4IDE2NS43NTYtNjkuNzU5IDI1NS45OTQtNjkuMTE4IDkwLjIzOC0wLjY0IDE3OC41NTUgMjMuMDM5IDI1NS45OTQgNjguNDc4IDc3LjQzOCA0NC43OTkgMTQyLjA3NiAxMDkuNDM3IDE4Ni44NzYgMTg3LjUxNSA0NS40MzggNzcuNDM4IDY5Ljc1OSAxNjUuNzU2IDY5LjExOCAyNTUuOTk0IDAuNjQgOTAuMjM4LTIzLjY4IDE3OC41NTUtNjkuMTE4IDI1NS45OTR6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTkwNjsiIGdseXBoLW5hbWU9Im1lbnUiIGRhdGEtdGFncz0ibWVudSIgZD0iTTAgMTA2LjdoMTAyNHYxMzMuN2gtMTAyNHYtMTMzLjd6TTAgMzgxLjFoMTAyNHYxMzMuOGgtMTAyNHYtMTMzLjh6TTAgNzg5LjN2LTEzMy44aDEwMjR2MTMzLjhoLTEwMjR6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTkwNzsiIGdseXBoLW5hbWU9InByZXZpb3VzIiBkYXRhLXRhZ3M9InByZXZpb3VzIiBkPSJNODI4LjE2IDU2LjMybC0zOTAuODI2IDM5MS42OCAzOTAuODI2IDM5MS42OC0xMjAuMzIgMTIwLjMyLTUxMi01MTIgNTEyLTUxMnoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlOTA4OyIgZ2x5cGgtbmFtZT0ibmV4dCIgZGF0YS10YWdzPSJuZXh0IiBkPSJNMTk1Ljg0IDU2LjMybDM5MC44MjYgMzkxLjY4LTM5MC44MjYgMzkxLjY4IDEyMC4zMiAxMjAuMzIgNTEyLTUxMi01MTItNTEyeiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5MDk7IiBnbHlwaC1uYW1lPSJ1cCIgZGF0YS10YWdzPSJ1cCIgZD0iTTAgNDQ4bDkwLjI0LTkwLjI0IDM1Ny43NiAzNTcuMTJ2LTc3OC44NzloMTI3Ljk5OXY3NzguODc5bDM1Ny4xMi0zNTcuNzYgOTAuODggOTAuODgtNTExLjk5OSA1MTEuOTk5LTUxMS45OTktNTExLjk5OXoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlOTBhOyIgZ2x5cGgtbmFtZT0icXVlc3Rpb24tYW5zd2VyZWQiIGRhdGEtdGFncz0icXVlc3Rpb24tYW5zd2VyZWQiIGQ9Ik05NTQuOSA3MDRjLTQ0LjggNzcuNC0xMDkuNSAxNDIuMS0xODYuOSAxODYuOS03Ny40IDQ1LjQtMTY1LjggNjkuNy0yNTYgNjkuMS05MC4yIDAuNi0xNzguNi0yMy43LTI1Ni02OS4xLTc3LjQtNDQuOC0xNDIuMS0xMDkuNS0xODYuOS0xODYuOS00NS40LTc3LjQtNjkuNy0xNjUuOC02OS4xLTI1Ni0wLjYtOTAuMiAyMy0xNzguNiA2OC41LTI1NiA0NC44LTc3LjQgMTA5LjQtMTQyLjEgMTg3LjUtMTg2LjkgNzcuNC00NS40IDE2NS44LTY5LjggMjU2LTY5LjEgOTAuMi0wLjYgMTc4LjYgMjMgMjU2IDY4LjUgNzcuNCA0NC44IDE0Mi4xIDEwOS40IDE4Ni45IDE4Ny41IDQ1LjQgNzcuNCA2OS44IDE2NS44IDY5LjEgMjU2IDAuNiA5MC4yLTIzLjcgMTc4LjYtNjkuMSAyNTZ2MHoiIC8+CjxnbHlwaCB1bmljb2RlPSImI3hlOTBiOyIgZ2x5cGgtbmFtZT0iZnVsbC1zY3JlZW4tZW50ZXIiIGRhdGEtdGFncz0iZnVsbC1zY3JlZW4tZW50ZXIiIGhvcml6LWFkdi14PSIxMDI1IiBkPSJNMTAyNSAyMDMuM2MwIDMyLjktMTIuNyA0Ni42LTQzIDQ2LjZ2MGMtMjkuOSAwLTQyLjUtMTQuMi00My00Ni42IDAtMjguOSAwLTU3LjcgMC04OS4xdi0zMS45bC0yMzYuOSAyMzYuOWMtMjQuOCAyNC44LTQ0LjUgNDQuNS03Ni45IDc2LjktMjIuOCAyMi44LTM5LjUgMjIuOC02MC43IDEuNS0xMS4xLTExLjEtMTYuMi0yMC4yLTE2LjItMjkuNCAwLTEwLjEgNS42LTIwLjIgMTguNy0zMy40IDYyLjMtNjIuOCAxMTYuNC0xMTYuNCAxNzEuNi0xNzEuNiA0MC00MCA4MS04MSAxMjYuNS0xMjYuNSA0LTQgNy42LTguMSAxMi4xLTEzLjJsMC41LTAuNWMtMTAuNiAwLTIwLjggMC0zMC45IDAtMzEuNCAwLTYxLjIgMC05MS4xIDAtMzAuOSAwLTQ0LjUtMTMuMi00NC41LTQyLjUgMC0xNC43IDMtMjUuOCAxMC4xLTMyLjQgNy4xLTcuMSAxOC4yLTEwLjYgMzMuNC0xMC42IDM1LjQgMCA3Mi40IDAgMTEwLjkgMCAzNS45IDAgNzMuOSAwIDExMy45IDAgMzIuNCAwIDQ1LjEgMTIuNyA0NS4xIDQ0LjUgMC40IDY0LjkgMC40IDEzNS43IDAuNCAyMjEuM3Ywek0yNzguOSA3NDEuM2wtMTE3LjQgMTE3LjVjLTQgNC04LjEgOC4xLTEzLjIgMTMuNy0wLjUgMC41LTEgMS0xLjUgMS41IDExLjEgMCAyMS44IDAgMzIuNCAwIDMyLjQgMCA2My4zIDAgOTMuNiAwIDI3LjggMC41IDQxLjUgMTQuNyA0MSA0My41LTAuNSAzNC40LTIxLjggNDItMzkuNSA0Mi04MiAwLjUtMTY0LjUgMC41LTIzNS4zIDAtMjMuOCAwLTM4LjUtMTQuMi0zOC41LTM3LjUtMC41LTg3LTAuNS0xNjQuNSAwLTIzNy45IDAtMTEuNiAzLjUtMjAuOCAxMC4xLTI3LjMgNy42LTcuNiAxOC43LTEwLjYgMzMuOS0xMC42IDI3LjMgMC41IDQxIDEzLjcgNDEuNSA0MCAwLjUgMjQuMyAwLjUgNDkuMSAwLjUgNzIuOSAwIDE0LjcgMCAyOC45IDAgNDMuNSAwIDMgMC41IDYuMSAxIDEwLjEgNC0zLjUgNy4xLTYuNiAxMC4xLTkuNmwxMDkuOC0xMDkuOGM2MS4yLTYyLjMgMTIwLjUtMTIxIDE4OS44LTE5MC4zIDEzLjctMTMuNyAyNC4zLTE5LjcgMzQuOS0xOS43aDAuNWMxMC4xIDAgMTkuNyA1LjYgMzAuOSAxOC4yIDE5LjIgMjEuMyAxNy43IDM3LTUuNiA2MC43LTY1LjEgNjUuMi0xMjEuMyAxMjEuNC0xNzkgMTc5LjF2MHpNMjY3LjEtNjMuN2MzMi45IDAgNDYuNiAxMi43IDQ2LjYgNDN2MGMwIDI5LjktMTQuMiA0Mi41LTQ2LjYgNDMtMjguOSAwLTU3LjcgMC04OS4xIDBoLTMxLjlsMjM2LjkgMjM2LjljMjQuOCAyNC44IDQ0LjUgNDQuNSA3Ni45IDc2LjkgMjIuOCAyMi44IDIyLjggMzkuNSAxLjUgNjAuNy0xMS4xIDExLjEtMjAuMiAxNi4yLTI5LjQgMTYuMi0xMC4xIDAtMjAuMi01LjYtMzMuNC0xOC43LTYyLjYtNjIuMi0xMTYuMy0xMTYuNC0xNzEuNS0xNzEuNi00MC00MC04MS04MS0xMjYuNS0xMjYuNS00LTQtOC4xLTcuNi0xMy4yLTEyLjFsLTAuNS0wLjVjMCAxMC42IDAgMjAuOCAwIDMwLjkgMCAzMS40IDAgNjEuMiAwIDkxLjEgMCAzMC45LTEzLjIgNDQuNS00Mi41IDQ0LjUtMTQuNyAwLTI1LjgtMy0zMi40LTEwLjEtNy4xLTcuMS0xMC42LTE4LjItMTAuNi0zMy40IDAtMzUuNCAwLTcyLjQgMC0xMTAuOSAwLTM1LjkgMC03My45IDAtMTEzLjkgMC0zMi40IDEyLjctNDUuMSA0NC41LTQ1LjEgNjQuOC0wLjQgMTM1LjctMC40IDIyMS4yLTAuNHYwek04MDUuMiA2ODIuNGwxMTcuNCAxMTcuNGM0IDQgOC4xIDguMSAxMy43IDEzLjIgMC41IDAuNSAxIDEgMS41IDEuNSAwLTExLjEgMC0yMS44IDAtMzIuNCAwLTMyLjQgMC02My4zIDAtOTMuNiAwLjUtMjcuOCAxNC43LTQxLjUgNDMuNS00MSAzNC40IDAuNSA0MiAyMS44IDQyIDM5LjUgMC41IDgyIDAuNSAxNjQuNSAwIDIzNS40IDAgMjMuOC0xNC4yIDM4LjUtMzcuNSAzOC41LTg3LjEgMC41LTE2NC41IDAuNS0yMzcuOSAwLTExLjYgMC0yMC44LTMuNS0yNy4zLTEwLjEtNy41LTcuOC0xMC42LTE4LjktMTAuNi0zNC4xIDAuNS0yNy4zIDEzLjctNDEgNDAtNDEuNSAyNC4zLTAuNSA0OS4xLTAuNSA3Mi45LTAuNSAxNC43IDAgMjguOSAwIDQzLjUgMCAzIDAgNi4xLTAuNSAxMC4xLTEtMy41LTQtNi42LTcuMS05LjYtMTAuMWwtMTA5LjgtMTA5LjljLTYyLjMtNjEuMi0xMjEtMTIwLjUtMTkwLjMtMTg5LjgtMTMuNy0xMy43LTE5LjctMjQuMy0xOS43LTM0Ljl2LTAuNWMwLTEwLjEgNS42LTE5LjcgMTguMi0zMC45IDIxLjMtMTkuMiAzNy0xNy43IDYwLjcgNS42IDY1LjMgNjUuMyAxMjEuNSAxMjEuNSAxNzkuMiAxNzkuMnYweiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5MGM7IiBnbHlwaC1uYW1lPSJmdWxsLXNjcmVlbi1leGl0IiBkYXRhLXRhZ3M9ImZ1bGwtc2NyZWVuLWV4aXQiIGhvcml6LWFkdi14PSIxMDI1IiBkPSJNNTQ4IDE0Ni4xYzAtMzIuOSAxMi43LTQ2LjYgNDMtNDYuNnYwYzI5LjkgMCA0Mi41IDE0LjIgNDMgNDYuNiAwIDI4LjkgMCA1Ny43IDAgODkuMXYzMS45bDIzNi45LTIzNi45YzI0LjgtMjQuOCA0NC41LTQ0LjUgNzYuOS03Ni45IDIyLjgtMjIuOCAzOS41LTIyLjggNjAuNy0xLjUgMTEuMSAxMS4xIDE2LjIgMjAuMiAxNi4yIDI5LjQgMCAxMC4xLTUuNiAyMC4yLTE4LjcgMzMuNC02Mi4zIDYyLjgtMTE2LjQgMTE2LjQtMTcxLjYgMTcxLjYtNDAgNDAtODEgODEtMTI2LjUgMTI2LjUtNCA0LTcuNiA4LjEtMTIuMSAxMy4ybC0wLjUgMC41YzEwLjYgMCAyMC44IDAgMzAuOSAwIDMxLjQgMCA2MS4yIDAgOTEuMSAwIDMwLjkgMCA0NC41IDEzLjIgNDQuNSA0Mi41IDAgMTQuNy0zIDI1LjgtMTAuMSAzMi40LTcuMSA3LjEtMTguMiAxMC42LTMzLjQgMTAuNi0zNS40IDAtNzIuNCAwLTExMC45IDAtMzUuOSAwLTczLjkgMC0xMTMuOSAwLTMyLjQgMC00NS0xMi43LTQ1LTQ0LjUtMS02NC40LTEtMTM1LjMtMC41LTIyMS4zdjB6TTE5OC4yIDcwMS45bDExNy40LTExNy40YzQtNCA4LjEtOC4xIDEzLjItMTMuNyAwLjUtMC41IDEtMSAxLjUtMS41LTExLjEgMC0yMS44IDAtMzIuNCAwLTMyLjQgMC02My4zIDAtOTMuNiAwLTI3LjgtMC41LTQxLjUtMTQuNy00MS00My41IDAuNS0zNC40IDIxLjgtNDIgMzkuNS00MiA4Mi0wLjUgMTY0LjUtMC41IDIzNS40IDAgMjQuMyAwIDM4LjUgMTQuMiAzOC41IDM4IDAuNSA4Ni42IDAuNSAxNjQuNSAwIDIzNy45IDAgMTEuNi0zLjUgMjAuOC0xMC4xIDI3LjMtNy42IDcuMS0xOC43IDEwLjYtMzMuOSAxMC42LTI3LjMtMC41LTQxLTEzLjctNDEuNS00MC0wLjUtMjQuMy0wLjUtNDkuMS0wLjUtNzIuOSAwLTE0LjcgMC0yOC45IDAtNDMuNSAwLTMtMC41LTYuMS0xLTEwLjEtNCAzLjUtNy4xIDYuNi0xMC4xIDkuNmwtMTA5LjUgMTA5LjNjLTYxLjggNjIuMy0xMjEgMTIxLTE5MC4zIDE5MC4zLTEzLjcgMTMuNy0yNC4zIDE5LjctMzUgMTkuN2gtMC41Yy0xMC4xIDAtMTkuNy01LjUtMzAuOC0xOC4yLTE5LjMtMjEuMi0xNy44LTM2LjkgNS41LTYwLjcgNjUuMy02NS4zIDEyMS0xMjEuNSAxNzkuMi0xNzkuMnYweiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5MGQ7IiBnbHlwaC1uYW1lPSJJY29uNiIgZGF0YS10YWdzPSJJY29uIDYiIGQ9Ik01MTIgNzU1LjE5OXYyMDQuODAxbC0yNTYtMjU2IDI1Ni0yNTZ2MjA0LjgwMWMxNjkuNDczIDAgMzA3LjItMTM3LjcyOCAzMDcuMi0zMDcuMnMtMTM3LjcyOC0zMDcuMi0zMDcuMi0zMDcuMi0zMDcuMiAxMzcuNzI4LTMwNy4yIDMwNy4yaC0xMDIuNGMwLTIyNi4zMDUgMTgzLjI5Ny00MDkuNiA0MDkuNi00MDkuNnM0MDkuNiAxODMuMjk3IDQwOS42IDQwOS42LTE4My4yOTcgNDA5LjYtNDA5LjYgNDA5LjZ6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTkwZTsiIGdseXBoLW5hbWU9InJlcG9ydGljb24tdjItZnVsbDEiIGRhdGEtdGFncz0icmVwb3J0IGljb24tdjItZnVsbCAoMSkiIGhvcml6LWFkdi14PSIxMDEzIiBkPSJNNTM5LjEyNyA5MzguMDI2di0xMTkuNTI0aDExOS41MjR6TTc4Mi40NjUgNTMwLjY3N2MyMC4wOTktNTIuMjU4IDQ0LjQ4Ny0yMzAuMjA2IDIzLjU4NC0yODEuNjYxLTkuMTEyLTIyLjUxMS0yMy4zMTUtMzkuNjYzLTUwLjExNC0zOC4wNTUtMjguNjc1IDEuNjA4LTQ1LjAyMyAxOS4wMjctNTAuNjUxIDQ2LjM2My0xLjg3NiA5LjM4LTAuODA0IDE5LjI5Ni0wLjgwNCAyOC45NDMtMC4yNjggMzAuMjg0IDEuMzQgNjAuNTY2LTAuNTM2IDkwLjU4MS0xLjM0IDIyLjc3OS0xMy45MzUgMzkuMzk1LTQwLjE5OSA0Ni4wOTUtMTUuMDA4LTU4Ljk1OC0zMC4yODQtMTE2LjMwOS00My42ODItMTc0LjE5Ni0yLjE0NC0xMC4xODQgMS44NzYtMjMuMDQ3IDUuODk2LTMzLjQ5OSAzNi4xNzktOTMuMjYyIDk5LjE1Ny0xNzUuNTM1IDEwNi45MjktMjc5LjI0OSA1NC42NyA5LjY0NyAxMDIuOTA5IDE4LjIyMyAxNTQuOSAyNy4zMzUtNi4xNjQgMzQuMzAzLTE2LjA3OSA2NS4xMjItMTUuODEyIDk1Ljk0MiAwLjI2OCAzMS44OTEgMTAuNDUyIDYzLjUxNCAxNi42MTUgOTUuNDA2IDUuMDkyIDI1LjQ1OSAxMC45ODggNTAuNjUxIDE1LjgxMiA3Ni4xMSAyNS45OTYgMTM2LjQwOSAxMS4yNTYgMjI0LjU3OC02MS42MzkgMzQ0LjEwMy0xMy40IDIyLjI0My0yNi43OTkgNDYuNjMxLTQzLjQxNCA2My41MTQtMzMuNDk5IDMzLjc2Ny00Ni44OTkgNDUuNTU4LTY4LjYwNyA1OC40MjJ2LTg1LjIyMmMyOC4xNC0xOS44MzIgMzkuMzk1LTQ5LjA0MyA1MS43MjMtODAuOTM0ek01NzEuNTU0IDI1Ny44NmwwLjI2OCAwLjgwNGMxMC4xODQgNDMuNjgyIDIxLjQ0IDg3LjkwMSAzMi40MjcgMTMwLjc4IDMuNzUyIDE0Ljc0IDcuNTAzIDI5LjQ3OSAxMS41MjQgNDQuNDg3bDEwLjk4OCA0Mi44NzkgNDIuODc5LTEwLjk4OGMzLjc1Mi0xLjA3MSA3LjUwMy0yLjE0NCAxMC45ODgtMy40ODR2MzExLjY3NmgtMTg1Ljk4N3YxODUuOTg3aC0zOTcuOTd2LTcyMS43MDVoNDczLjI3NWMtMC4yNjggNi40MzIgMC4yNjggMTIuODY0IDEuNjA4IDE5LjU2NHpNMjA3LjM1MiA3NDEuNTg4aDE3Ny45NDd2LTQ0LjQ4N2gtMTc3Ljk0N3Y0NC40ODd6TTQ0Ni4xMzQgMzk3LjIxN2gtMjM4Ljc4MnY0NC40ODdoMjM4Ljc4MnYtNDQuNDg3ek01NjkuOTQ2IDQ5MC4yMTFoLTM2Mi41OTV2NDQuNDg3aDM2Mi41OTV2LTQ0LjQ4N3pNNTY5Ljk0NiA1ODMuMjA0aC0zNjIuNTk1djQ0LjQ4N2gzNjIuNTk1di00NC40ODd6IiAvPgo8Z2x5cGggdW5pY29kZT0iJiN4ZTkwZjsiIGdseXBoLW5hbWU9InJlcG9ydGljb24tdjItZnVsbCIgZGF0YS10YWdzPSJyZXBvcnQgaWNvbi12Mi1mdWxsIiBob3Jpei1hZHYteD0iOTc5IiBkPSJNNzQ4LjQ3NyA5NDIuMTM5di0xMzAuOTc3YzAtNS45NTMgNS45NTMtNS45NTMgNS45NTMtNS45NTNoMTMwLjk3N2M1Ljk1MyAwIDExLjkwNyAxMS45MDcgNS45NTMgMTEuOTA3bC0xMzAuOTc3IDEzMC45NzdjLTUuOTUzIDUuOTUzLTExLjkwNyAwLTExLjkwNy01Ljk1M3pNOTAzLjI2Ny02NGgtODI3LjUzNWMtNS45NTMgMC01Ljk1MyA1Ljk1My01Ljk1MyA1Ljk1M3YxMDEyLjA5M2MwIDUuOTUzIDUuOTUzIDUuOTUzIDUuOTUzIDUuOTUzaDU3Ny40ODhjNS45NTMgMCA1Ljk1My01Ljk1MyA1Ljk1My01Ljk1M3YtMjMyLjE4NmMwLTUuOTUzIDUuOTUzLTUuOTUzIDUuOTUzLTUuOTUzaDIzOC4xNGM1Ljk1MyAwIDUuOTUzLTUuOTUzIDUuOTUzLTUuOTUzdi03NjIuMDQ2YzAtMTEuOTA3IDAtMTEuOTA3LTUuOTUzLTExLjkwN3pNMTM1LjI2Ny00LjQ2NWg3MDguNDY1YzUuOTUzIDAgNS45NTMgNS45NTMgNS45NTMgNS45NTN2NjQyLjk3N2MwIDUuOTUzLTUuOTUzIDUuOTUzLTUuOTUzIDUuOTUzaC0yMzIuMTg2Yy01Ljk1MyAwLTUuOTUzIDUuOTUzLTUuOTUzIDUuOTUzdjIzOC4xNGMwIDUuOTUzLTUuOTUzIDUuOTUzLTUuOTUzIDUuOTUzaC00NjQuMzcyYy01Ljk1MyA1Ljk1My0xMS45MDcgMC0xMS45MDctNS45NTN2LTg5My4wMjNjMC01Ljk1MyA1Ljk1My01Ljk1MyAxMS45MDctNS45NTN6TTI0Mi40MyA2MzguNTEyaDIzOC4xNHYtNTkuNTM1aC0yMzguMTR2NTkuNTM1ek0yNDIuNDMgNDg5LjY3NGg0ODguMTg2di01OS41MzVoLTQ4OC4xODZ2NTkuNTM1ek0yNDIuNDMgMjM5LjYyOGgzMjEuNDg4di01OS41MzVoLTMyMS40ODh2NTkuNTM1ek0yNDIuNDMgMzY0LjY1MWg0ODguMTg2di01OS41MzVoLTQ4OC4xODZ2NTkuNTM1eiIgLz4KPGdseXBoIHVuaWNvZGU9IiYjeGU5MTA7IiBnbHlwaC1uYW1lPSJzdWNjZXNzIiBkYXRhLXRhZ3M9InN1Y2Nlc3MiIGQ9Ik00MzMuOTQzIDM0NC44MDZsLTEwOC40ODYgMTA4LjQ4Ni0zNy4wNDQtMzcuMDQ0IDE0NS41My0xNDQuMjA3IDMxMC45MDQgMzEwLjkwNC0zNy4wNDQgMzcuMDQ0ek01MTIgOTYwYy0yODEuNzk4IDAtNTEyLTIzMC4yMDItNTEyLTUxMnMyMzAuMjAyLTUxMiA1MTItNTEyYzI4MS43OTggMCA1MTIgMjMwLjIwMiA1MTIgNTEycy0yMjguODc5IDUxMi01MTIgNTEyek01MTItMjQuMzFjLTI2MC42MyAwLTQ3Mi4zMSAyMTEuNjgtNDcyLjMxIDQ3Mi4zMXMyMTEuNjggNDcyLjMxIDQ3Mi4zMSA0NzIuMzEgNDcyLjMxLTIxMS42OCA0NzIuMzEtNDcyLjMxLTIxMS42OC00NzIuMzEtNDcyLjMxLTQ3Mi4zMXoiIC8+CjwvZm9udD48L2RlZnM+PC9zdmc+"

/***/ }),

/***/ "./src/fonts/h5p-interactive-book.ttf?a3wrpr":
/*!***************************************************!*\
  !*** ./src/fonts/h5p-interactive-book.ttf?a3wrpr ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:font/ttf;base64,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"

/***/ }),

/***/ "./src/fonts/h5p-interactive-book.woff?a3wrpr":
/*!****************************************************!*\
  !*** ./src/fonts/h5p-interactive-book.woff?a3wrpr ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:font/woff;base64,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"

/***/ }),

/***/ "./src/scripts/app.js":
/*!****************************!*\
  !*** ./src/scripts/app.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InteractiveBook; });
/* harmony import */ var _urltools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./urltools */ "./src/scripts/urltools.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar */ "./src/scripts/sidebar.js");
/* harmony import */ var _statusbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./statusbar */ "./src/scripts/statusbar.js");
/* harmony import */ var _cover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cover */ "./src/scripts/cover.js");
/* harmony import */ var _pagecontent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pagecontent */ "./src/scripts/pagecontent.js");
/* harmony import */ var element_scroll_polyfill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! element-scroll-polyfill */ "./node_modules/element-scroll-polyfill/index.js");
/* harmony import */ var element_scroll_polyfill__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(element_scroll_polyfill__WEBPACK_IMPORTED_MODULE_5__);
var _excluded = ["read", "displayTOC", "hideTOC", "nextPage", "previousPage", "chapterCompleted", "partCompleted", "incompleteChapter", "navigateToTop", "markAsFinished", "fullscreen", "exitFullscreen", "bookProgressSubtext", "interactionsProgressSubtext", "submitReport", "restartLabel", "summaryHeader", "allInteractions", "unansweredInteractions", "scoreText", "leftOutOfTotalCompleted", "noInteractions", "score", "summaryAndSubmit", "noChapterInteractionBoldText", "noChapterInteractionText", "yourAnswersAreSubmittedForReview", "bookProgress", "interactionsProgress", "totalScoreLabel"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var InteractiveBook = /*#__PURE__*/function (_H5P$EventDispatcher) {
  _inheritsLoose(InteractiveBook, _H5P$EventDispatcher);

  /**
   * @constructor
   *
   * @param {object} config
   * @param {string} contentId
   * @param {object} contentData
   */
  function InteractiveBook(config, contentId) {
    var _this;

    var contentData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    _this = _H5P$EventDispatcher.call(this) || this;

    var self = _assertThisInitialized(_this);

    _this.contentId = contentId;
    _this.activeChapter = 0;
    _this.newHandler = {};
    _this.completed = false;
    _this.params = InteractiveBook.sanitizeConfig(config);
    _this.l10n = _this.params.l10n;
    _this.params.behaviour = _this.params.behaviour || {};
    _this.mainWrapper = null;
    _this.currentRatio = null;
    _this.smallSurface = 'h5p-interactive-book-small';
    _this.mediumSurface = 'h5p-interactive-book-medium';
    _this.largeSurface = 'h5p-interactive-book-large';
    _this.chapters = [];
    /*
     * this.params.behaviour.enableSolutionsButton and this.params.behaviour.enableRetry
     * are used by H5P's question type contract.
     * @see {@link https://h5p.org/documentation/developers/contracts#guides-header-8}
     * @see {@link https://h5p.org/documentation/developers/contracts#guides-header-9}
     */

    _this.params.behaviour.enableSolutionsButton = false;
    _this.params.behaviour.enableRetry = false;
    /**
     * Check if result has been submitted or input has been given.
     *
     * @return {boolean} True, if answer was given.
     * @see contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-1}
     */

    _this.getAnswerGiven = function () {
      return _this.chapters.reduce(function (accu, current) {
        if (typeof current.instance.getAnswerGiven === 'function') {
          return accu && current.instance.getAnswerGiven();
        }

        return accu;
      }, true);
    };
    /**
     * Get latest score.
     *
     * @return {number} Latest score.
     * @see contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-2}
     */


    _this.getScore = function () {
      return _this.chapters.reduce(function (accu, current) {
        if (typeof current.instance.getScore === 'function') {
          return accu + current.instance.getScore();
        }

        return accu;
      }, 0);
    };
    /**
     * Get maximum possible score.
     *
     * @return {number} Score necessary for mastering.
     * @see contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-3}
     */


    _this.getMaxScore = function () {
      return _this.chapters.reduce(function (accu, current) {
        if (typeof current.instance.getMaxScore === 'function') {
          return accu + current.instance.getMaxScore();
        }

        return accu;
      }, 0);
    };
    /**
     * Show solutions.
     *
     * @see contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-4}
     */


    _this.showSolutions = function () {
      _this.chapters.forEach(function (chapter) {
        if (typeof chapter.instance.toggleReadSpeaker === 'function') {
          chapter.instance.toggleReadSpeaker(true);
        }

        if (typeof chapter.instance.showSolutions === 'function') {
          chapter.instance.showSolutions();
        }

        if (typeof chapter.instance.toggleReadSpeaker === 'function') {
          chapter.instance.toggleReadSpeaker(false);
        }
      });
    };
    /**
     * Reset task.
     *
     * @see contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-5}
     */


    _this.resetTask = function () {
      if (_this.hasValidChapters()) {
        _this.chapters.forEach(function (chapter, index) {
          if (!chapter.isInitialized || chapter.isSummary) {
            return;
          }

          if (typeof chapter.instance.resetTask === 'function') {
            chapter.instance.resetTask();
          }

          chapter.tasksLeft = chapter.maxTasks;
          chapter.sections.forEach(function (section) {
            return section.taskDone = false;
          });

          _this.setChapterRead(index, false);
        });

        _this.pageContent.resetChapters();

        _this.sideBar.resetIndicators();

        _this.trigger('newChapter', {
          h5pbookid: _this.contentId,
          chapter: _this.pageContent.columnNodes[0].id,
          section: "top"
        });

        if (_this.hasCover()) {
          _this.displayCover(_this.mainWrapper);
        }
      }
    };
    /**
     * Get xAPI data.
     *
     * @return {object} xAPI statement.
     * @see contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-6}
     */


    _this.getXAPIData = function () {
      var xAPIEvent = _this.createXAPIEventTemplate('answered');

      _this.addQuestionToXAPI(xAPIEvent);

      xAPIEvent.setScoredResult(_this.getScore(), _this.getMaxScore(), _assertThisInitialized(_this), true, _this.getScore() === _this.getMaxScore());
      return {
        statement: xAPIEvent.data.statement,
        children: _this.getXAPIDataFromChildren(_this.chapters.map(function (chapter) {
          return chapter.instance;
        }))
      };
    };
    /**
     * Get xAPI data from sub content types.
     *
     * @param {object[]} instances H5P instances.
     * @return {object[]} xAPI data objects used to build a report.
     */


    _this.getXAPIDataFromChildren = function (instances) {
      return instances.map(function (instance) {
        if (typeof instance.getXAPIData === 'function') {
          return instance.getXAPIData();
        }
      }).filter(function (data) {
        return !!data;
      });
    };
    /**
     * Add question itself to the definition part of an xAPIEvent.
     *
     * @param {H5P.XAPIEvent} xAPIEvent.
     */


    _this.addQuestionToXAPI = function (xAPIEvent) {
      var definition = xAPIEvent.getVerifiedStatementValue(['object', 'definition']);

      _extends(definition, _this.getxAPIDefinition());
    };
    /**
     * Generate xAPI object definition used in xAPI statements.
     *
     * @return {object} xAPI definition.
     */


    _this.getxAPIDefinition = function () {
      return {
        interactionType: 'compound',
        type: 'http://adlnet.gov/expapi/activities/cmi.interaction',
        description: {
          'en-US': ''
        }
      };
    };
    /**
     * Check if there's a cover.
     *
     * @return {boolean} True, if there's a cover.
     */


    _this.hasCover = function () {
      return _this.cover && _this.cover.container;
    };
    /**
     * Check if the configs are set to use summary
     * @param chapters
     * @return {*|boolean}
     */


    _this.hasSummary = function () {
      var chapters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.chapters;
      return _this.hasChaptersTasks(chapters) && _this.params.behaviour.displaySummary && _this.params.behaviour.displaySummary === true;
    };
    /**
     * Check if chapters has tasks
     *
     * @param {Array} chapters
     * @return {boolean}
     */


    _this.hasChaptersTasks = function (chapters) {
      return chapters.filter(function (chapter) {
        return chapter.sections.filter(function (section) {
          return section.isTask === true;
        }).length > 0;
      }).length > 0;
    };
    /**
     * Check if there are valid chapters.
     *
     * @return {boolean} True, if there are valid(not empty) chapters.
     */


    _this.hasValidChapters = function () {
      return _this.params.chapters.length > 0;
    };
    /**
     * Get number of active chapter.
     *
     * @return {number} Number of active chapter.
     */


    _this.getActiveChapter = function () {
      var getActualChapter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      return !getActualChapter ? _this.activeChapter : _this.chapters[_this.activeChapter];
    };
    /**
     * Set number of active chapter.
     *
     * @param {number} chapterId Number of active chapter.
     */


    _this.setActiveChapter = function (chapterId) {
      chapterId = parseInt(chapterId);

      if (!isNaN(chapterId)) {
        _this.activeChapter = chapterId;
      }
    };
    /**
     * Validate fragments.
     *
     * @param {object} fragments Fragments object from URL.
     * @return {boolean} True, if fragments are valid.
     */


    _this.validateFragments = function (fragments) {
      return fragments.chapter !== undefined && String(fragments.h5pbookid) === String(self.contentId);
    };
    /**
     * Bubble events from child to parent
     *
     * @param {object} origin Origin of the Event
     * @param {string} eventName Name of the Event
     * @param {object} target Target to trigger event on
     */


    _this.bubbleUp = function (origin, eventName, target) {
      origin.on(eventName, function (event) {
        // Prevent target from sending event back down
        target.bubblingUpwards = true; // Trigger event

        target.trigger(eventName, event); // Reset

        target.bubblingUpwards = false;
      });
    };
    /**
     * Check if menu is open
     * @return {boolean}
     */


    _this.isMenuOpen = function () {
      return _this.statusBarHeader.isMenuOpen();
    };
    /**
     * Detect if wrapper is a small surface
     * @return {*}
     */


    _this.isSmallSurface = function () {
      return _this.mainWrapper && _this.mainWrapper.hasClass(_this.smallSurface);
    };
    /**
     * Get the ratio of the wrapper
     *
     * @return {number}
     */


    _this.getRatio = function () {
      return _this.mainWrapper.width() / parseFloat(_this.mainWrapper.css('font-size'));
    };
    /**
     * Add/remove classname based on the ratio
     * @param {jQuery} wrapper
     * @param {number} ratio
     */


    _this.setWrapperClassFromRatio = function (wrapper) {
      var ratio = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.getRatio();

      if (ratio === _this.currentRatio) {
        return;
      }

      _this.breakpoints().forEach(function (item) {
        if (item.shouldAdd(ratio)) {
          _this.mainWrapper.addClass(item.className);
        } else {
          _this.mainWrapper.removeClass(item.className);
        }
      });

      _this.currentRatio = ratio;
    };
    /**
     * Handle resizing of the content
     */


    _this.resize = function () {
      if (!_this.pageContent || !_this.hasValidChapters() || !_this.mainWrapper) {
        return;
      }

      _this.setWrapperClassFromRatio(_this.mainWrapper);

      var currentChapterId = _this.getActiveChapter();

      var currentNode = _this.pageContent.columnNodes[currentChapterId]; // Only resize the visible column

      if (currentNode.offsetParent !== null) {
        // Prevent re-resizing if called by instance
        if (!_this.bubblingUpwards) {
          _this.pageContent.chapters[currentChapterId].instance.trigger('resize');
        } // Resize if necessary and not animating


        if (_this.pageContent.content.style.height !== "".concat(currentNode.offsetHeight, "px") && !currentNode.classList.contains('h5p-interactive-book-animate')) {
          _this.pageContent.content.style.height = "".concat(currentNode.offsetHeight, "px");

          _this.pageContent.updateFooter(); // Add some slack time before resizing again.


          setTimeout(function () {
            _this.trigger('resize');
          }, 10);
        }
      }
    };
    /*
     * Establish all triggers
     */


    _this.on('resize', _this.resize, _assertThisInitialized(_this));

    _this.on('toggleMenu', function () {
      _this.pageContent.toggleNavigationMenu(); // Update the menu button


      _this.statusBarHeader.menuToggleButton.setAttribute('aria-expanded', _this.statusBarHeader.menuToggleButton.classList.toggle('h5p-interactive-book-status-menu-active') ? 'true' : 'false'); // We need to resize the whole book since the interactions are getting
      // more width and those with a static ratio will increase their height.


      setTimeout(function () {
        _this.trigger('resize');
      }, 150);
    });

    _this.on('scrollToTop', function () {
      if (H5P.isFullscreen === true) {
        var container = _this.pageContent.container;
        container.scrollBy(0, -container.scrollHeight);
      } else {
        _this.statusBarHeader.wrapper.scrollIntoView(true);
      }
    });

    _this.on('newChapter', function (event) {
      if (_this.pageContent.columnNodes[_this.getActiveChapter()].classList.contains('h5p-interactive-book-animate')) {
        return;
      }

      _this.newHandler = event.data; // Create the new hash

      event.data.newHash = _urltools__WEBPACK_IMPORTED_MODULE_0__["default"].createFragmentsString(_this.newHandler); // Assert that the module itself is asking for a redirect

      _this.newHandler.redirectFromComponent = true;

      if (_this.getChapterId(event.data.chapter) === _this.activeChapter) {
        var fragmentsEqual = _urltools__WEBPACK_IMPORTED_MODULE_0__["default"].areFragmentsEqual(event.data, _urltools__WEBPACK_IMPORTED_MODULE_0__["default"].extractFragmentsFromURL(_this.validateFragments, _this.hashWindow), ['h5pbookid', 'chapter', 'section', 'headerNumber']);

        if (fragmentsEqual) {
          // only trigger section redirect without changing hash
          _this.pageContent.changeChapter(false, event.data);

          return;
        }
      }
      /*
       * Set final chapter read on entering automatically if it doesn't
       * contain tasks and if all other chapters have been completed
       */


      if (_this.params.behaviour.progressAuto) {
        var id = _this.getChapterId(_this.newHandler.chapter);

        if (_this.isFinalChapterWithoutTask(id)) {
          _this.setChapterRead(id);
        }
      }

      H5P.trigger(_assertThisInitialized(_this), 'changeHash', event.data);
      H5P.trigger(_assertThisInitialized(_this), 'scrollToTop');
    });
    /**
     * Check if the current chapter is read.
     *
     * @returns {boolean} True, if current chapter was read.
     */


    _this.isCurrentChapterRead = function () {
      return _this.isChapterRead(_this.chapters[_this.activeChapter], _this.params.behaviour.progressAuto);
    };
    /**
     * Checks if a chapter is read
     *
     * @param chapter
     * @param {boolean} autoProgress
     * @returns {boolean}
     */


    _this.isChapterRead = function (chapter) {
      var autoProgress = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.params.behaviour.progressAuto;
      return chapter.isInitialized && (chapter.completed || autoProgress && chapter.tasksLeft === 0);
    };
    /**
     * Check if chapter is final one, has no tasks and all other chapters are done.
     *
     * @param {number} chapterId Chapter id.
     * @return {boolean} True, if final chapter without tasks and other chapters done.
     */


    _this.isFinalChapterWithoutTask = function (chapterId) {
      return _this.chapters[chapterId].maxTasks === 0 && _this.chapters.slice(0, chapterId).concat(_this.chapters.slice(chapterId + 1)).every(function (chapter) {
        return chapter.tasksLeft === 0;
      });
    };
    /**
     * Set the current chapter as completed.
     *
     * @param {number} [chapterId] Chapter Id, defaults to current chapter.
     * @param {boolean} [read=true] True for chapter read, false for not read.
     */


    _this.setChapterRead = function () {
      var chapterId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.activeChapter;
      var read = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      _this.handleChapterCompletion(chapterId, read);

      _this.sideBar.updateChapterProgressIndicator(chapterId, read ? 'DONE' : _this.hasChapterStartedTasks(_this.chapters[chapterId]) ? 'STARTED' : 'BLANK');
    };
    /**
     * Checks if chapter has started on any of the sections
     *
     * @param chapter
     * @return {boolean}
     */


    _this.hasChapterStartedTasks = function (chapter) {
      return chapter.sections.filter(function (section) {
        return section.taskDone;
      }).length > 0;
    };
    /**
     * Get textual status for chapter
     *
     * @param chapter
     * @param {boolean} progressAuto
     * @return {string}
     */


    _this.getChapterStatus = function (chapter) {
      var progressAuto = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.params.behaviour.progressAuto;
      var status = 'BLANK';

      if (_this.isChapterRead(chapter, progressAuto)) {
        status = "DONE";
      } else if (_this.hasChapterStartedTasks(chapter)) {
        status = 'STARTED';
      }

      return status;
    };
    /**
     * Update statistics on the main chapter.
     *
     * @param {number} chapterId Chapter Id.
     * @param {boolean} hasChangedChapter
     */


    _this.updateChapterProgress = function (chapterId) {
      var hasChangedChapter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (!_this.params.behaviour.progressIndicators) {
        return;
      }

      var chapter = _this.chapters[chapterId];
      var status;

      if (chapter.maxTasks) {
        status = _this.getChapterStatus(chapter);
      } else {
        if (_this.isChapterRead(chapter) && hasChangedChapter) {
          status = 'DONE';
        } else {
          status = 'BLANK';
        }
      }

      if (status === 'DONE') {
        _this.handleChapterCompletion(chapterId);
      }

      _this.sideBar.updateChapterProgressIndicator(chapterId, status);
    };
    /**
     * Get id of chapter.
     *
     * @param {string} chapterUUID ChapterUUID.
     * @return {number} Chapter Id.
     */


    _this.getChapterId = function (chapterUUID) {
      chapterUUID = chapterUUID.replace('h5p-interactive-book-chapter-', '');
      return _this.chapters.map(function (chapter) {
        return chapter.instance.subContentId;
      }).indexOf(chapterUUID);
    };
    /**
     * Handle chapter completion, e.g. trigger xAPI statements
     *
     * @param {number} chapterId Id of the chapter that was completed.
     * @param {boolean} [completed=true] True for completed, false for uncompleted.
     */


    _this.handleChapterCompletion = function (chapterId) {
      var completed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var chapter = _this.chapters[chapterId];

      if (chapter.isSummary === true) {
        return;
      }

      if (!completed) {
        // Reset chapter and book completion.
        chapter.completed = false;
        _this.completed = false;

        _this.trigger('bookCompleted', {
          completed: _this.completed
        });

        return;
      } // New chapter completed


      if (!chapter.completed) {
        chapter.completed = true;
        chapter.instance.triggerXAPIScored(chapter.instance.getScore(), chapter.instance.getMaxScore(), 'completed');
      } // All chapters completed


      if (!_this.completed && _this.chapters.filter(function (chapter) {
        return !chapter.isSummary;
      }).every(function (chapter) {
        return chapter.completed;
      })) {
        _this.completed = true;

        _this.trigger('bookCompleted', {
          completed: _this.completed
        });
      }
    };
    /**
     * Check if the content height exceeds the window.
     */


    _this.shouldFooterBeHidden = function () {
      // Always show except for in fullscreen
      // Ideally we'd check on the top window size but we can't always get it.
      return _this.isFullscreen;
    };
    /**
     * Get content container width.
     * @return {number} Container width or 0.
     */


    _this.getContainerWidth = function () {
      return _this.pageContent && _this.pageContent.container ? _this.pageContent.container.offsetWidth : 0;
    };
    /**
     * Change the current active chapter.
     *
     * @param {boolean} redirectOnLoad Is this a redirect which happens immediately?
     */


    _this.changeChapter = function (redirectOnLoad) {
      _this.pageContent.changeChapter(redirectOnLoad, _this.newHandler);

      _this.statusBarHeader.updateStatusBar();

      _this.statusBarFooter.updateStatusBar();

      _this.newHandler.redirectFromComponent = false;
    };
    /**
     * Get list of classname and conditions for when to add the classname to the content type
     *
     * @return {[{className: string, shouldAdd: (function(*): boolean)}, {className: string, shouldAdd: (function(*): boolean|boolean)}, {className: string, shouldAdd: (function(*): boolean)}]}
     */


    _this.breakpoints = function () {
      return [{
        "className": _this.smallSurface,
        "shouldAdd": function shouldAdd(ratio) {
          return ratio < 43;
        }
      }, {
        "className": _this.mediumSurface,
        "shouldAdd": function shouldAdd(ratio) {
          return ratio >= 43 && ratio < 60;
        }
      }, {
        "className": _this.largeSurface,
        "shouldAdd": function shouldAdd(ratio) {
          return ratio >= 60;
        }
      }];
    };
    /**
     * Triggers whenever the hash changes, indicating that a chapter redirect is happening
     */


    H5P.on(_assertThisInitialized(_this), 'respondChangeHash', function () {
      var payload = _urltools__WEBPACK_IMPORTED_MODULE_0__["default"].extractFragmentsFromURL(self.validateFragments, _this.hashWindow);

      if (payload.h5pbookid && String(payload.h5pbookid) === String(self.contentId)) {
        _this.redirectChapter(payload);
      }
    });
    H5P.on(_assertThisInitialized(_this), 'changeHash', function (event) {
      if (String(event.data.h5pbookid) === String(_this.contentId)) {
        _this.hashWindow.location.hash = event.data.newHash;
      }
    });
    H5P.externalDispatcher.on('xAPI', function (event) {
      var actionVerbs = ['answered', 'completed', 'interacted', 'attempted'];
      var isActionVerb = actionVerbs.indexOf(event.getVerb()) > -1; // Some content types may send xAPI events when they are initialized,
      // so check that chapter is initialized before setting any section change

      var isInitialized = self.chapters.length;

      if (self !== this && isActionVerb && isInitialized) {
        self.setSectionStatusByID(this.subContentId || this.contentData.subContentId, self.activeChapter);
      }
    });
    /**
     * Redirect chapter.
     *
     * @param {object} target Target data.
     * @param {string} target.h5pbookid Book id.
     * @param {string} target.chapter Chapter UUID.
     * @param {string} target.section Section UUID.
     */

    _this.redirectChapter = function (target) {
      /**
       * If true, we already have information regarding redirect in newHandler
       * When using browser history, a convert is neccecary
       */
      if (!_this.newHandler.redirectFromComponent) {
        // Assert that the handler actually is from this content type.
        if (target.h5pbookid && String(target.h5pbookid) === String(self.contentId)) {
          self.newHandler = target;
          /**
           * H5p-context switch on no newhash = history backwards
           * Redirect to first chapter
           */
        } else {
          self.newHandler = {
            chapter: "h5p-interactive-book-chapter-".concat(self.chapters[0].instance.subContentId),
            h5pbookid: self.h5pbookid
          };
        }
      }

      self.changeChapter(false);
    };
    /**
     * Set a section progress indicator.
     *
     * @param {string} sectionUUID UUID of target section.
     * @param {number} chapterId Number of targetchapter.
     */


    _this.setSectionStatusByID = function (sectionUUID, chapterId) {
      _this.chapters[chapterId].sections.forEach(function (section, index) {
        var sectionInstance = section.instance;

        if (sectionInstance.subContentId === sectionUUID && !section.taskDone) {
          // Check if instance has given an answer
          section.taskDone = sectionInstance.getAnswerGiven ? sectionInstance.getAnswerGiven() : true;

          _this.sideBar.setSectionMarker(chapterId, index);

          if (section.taskDone) {
            _this.chapters[chapterId].tasksLeft -= 1;
          }

          _this.updateChapterProgress(chapterId);
        }
      });
    };
    /**
     * Add listener for hash changes to specified window
     */


    _this.addHashListener = function (hashWindow) {
      hashWindow.addEventListener('hashchange', function (event) {
        H5P.trigger(_assertThisInitialized(_this), 'respondChangeHash', event);
      });
      _this.hashWindow = hashWindow;
    };

    try {
      _this.addHashListener(top);
    } catch (e) {
      if (e instanceof DOMException) {
        // Use iframe window to store book location hash
        _this.addHashListener(window);
      } else {
        throw e;
      }
    }
    /**
     * Display book cover
     *
     * @param wrapper
     */


    _this.displayCover = function (wrapper) {
      _this.hideAllElements(true);

      wrapper.append(_this.cover.container);
      wrapper.addClass('covered');
    };
    /**
     * Attach library to wrapper
     * @param {jQuery} $wrapper
     */


    _this.attach = function ($wrapper) {
      _this.mainWrapper = $wrapper; // Needed to enable scrolling in fullscreen

      $wrapper.addClass('h5p-interactive-book h5p-scrollable-fullscreen');

      if (_this.isEdge18orEarlier()) {
        $wrapper.addClass('edge-18');
      }

      _this.setWrapperClassFromRatio(_this.mainWrapper);

      if (_this.cover) {
        _this.displayCover($wrapper);
      }

      $wrapper.append(_this.statusBarHeader.wrapper);
      var first = _this.pageContent.container.firstChild;

      if (first) {
        _this.pageContent.container.insertBefore(_this.sideBar.container, first);
      }

      $wrapper.append(_this.pageContent.container);
      $wrapper.append(_this.statusBarFooter.wrapper);
      _this.$wrapper = $wrapper;

      if (_this.params.behaviour.defaultTableOfContents && !_this.isSmallSurface()) {
        _this.trigger('toggleMenu');
      }

      _this.pageContent.updateFooter();
    };
    /**
     * Checks if browser is IE Edge version 18 or earlier
     */


    _this.isEdge18orEarlier = function () {
      var ua = window.navigator.userAgent;
      var edgeIndex = ua.indexOf('Edge/');

      if (edgeIndex < 0) {
        return false;
      }

      var edgeVersion = ua.substring(edgeIndex + 5, ua.indexOf('.', edgeIndex));
      return parseInt(edgeVersion) <= 18;
    };
    /**
     * Hide all elements.
     *
     * @param {boolean} hide True to hide elements.
     */


    _this.hideAllElements = function (hide) {
      var nodes = [this.statusBarHeader.wrapper, this.statusBarFooter.wrapper, this.pageContent.container];

      if (hide) {
        nodes.forEach(function (node) {
          node.classList.add('h5p-content-hidden');
          node.classList.add('h5p-interactive-book-cover-present');
        });
      } else {
        nodes.forEach(function (node) {
          node.classList.remove('h5p-content-hidden');
          node.classList.remove('h5p-interactive-book-cover-present');
        });
      }
    }; // Initialize the support components


    if (_this.params.showCoverPage) {
      _this.cover = new _cover__WEBPACK_IMPORTED_MODULE_3__["default"](_this.params.bookCover, contentData.metadata.title, _this.l10n.read, contentId, _assertThisInitialized(_this));
    }

    var childContentData = _objectSpread(_objectSpread({}, contentData), {}, {
      parent: _assertThisInitialized(_this)
    });

    _this.pageContent = new _pagecontent__WEBPACK_IMPORTED_MODULE_4__["default"](_this.params, contentId, childContentData, _assertThisInitialized(_this), {
      l10n: {
        markAsFinished: _this.l10n.markAsFinished
      },
      behaviour: _this.params.behaviour
    });
    _this.chapters = _this.pageContent.getChapters();
    _this.sideBar = new _sidebar__WEBPACK_IMPORTED_MODULE_1__["default"](_this.params, contentId, contentData.metadata.title, _assertThisInitialized(_this));
    _this.statusBarHeader = new _statusbar__WEBPACK_IMPORTED_MODULE_2__["default"](contentId, _this.chapters.length, _assertThisInitialized(_this), {
      l10n: _this.l10n,
      a11y: _this.params.a11y,
      behaviour: _this.params.behaviour,
      displayFullScreenButton: true
    }, 'h5p-interactive-book-status-header');
    _this.statusBarFooter = new _statusbar__WEBPACK_IMPORTED_MODULE_2__["default"](contentId, _this.chapters.length, _assertThisInitialized(_this), {
      l10n: _this.l10n,
      a11y: _this.params.a11y,
      behaviour: _this.params.behaviour
    }, 'h5p-interactive-book-status-footer');

    if (_this.hasCover()) {
      _this.hideAllElements(true);

      _this.on('coverRemoved', function () {
        _this.hideAllElements(false);

        _this.trigger('resize'); // This will happen also on retry, but that doesn't matter, since
        // setActivityStarted() checks if it has been run before


        _this.setActivityStarted(); // Focus header progress bar when cover is removed


        _this.statusBarHeader.progressBar.progress.focus();
      });
    } else {
      _this.setActivityStarted();
    }

    if (_this.hasValidChapters()) {
      // Kickstart the statusbar
      _this.statusBarHeader.updateStatusBar();

      _this.statusBarFooter.updateStatusBar();
    }

    return _this;
  }
  /**
   * Make sure that the config used is in a good state. This includes default values for all language strings
   *
   * @param originalConfig
   * @return {*}
   */


  InteractiveBook.sanitizeConfig = function sanitizeConfig(originalConfig) {
    var _originalConfig$read = originalConfig.read,
        read = _originalConfig$read === void 0 ? "Read" : _originalConfig$read,
        _originalConfig$displ = originalConfig.displayTOC,
        displayTOC = _originalConfig$displ === void 0 ? "Display &#039;Table of contents&#039;" : _originalConfig$displ,
        _originalConfig$hideT = originalConfig.hideTOC,
        hideTOC = _originalConfig$hideT === void 0 ? "Hide &#039;Table of contents&#039;" : _originalConfig$hideT,
        _originalConfig$nextP = originalConfig.nextPage,
        nextPage = _originalConfig$nextP === void 0 ? "Next page" : _originalConfig$nextP,
        _originalConfig$previ = originalConfig.previousPage,
        previousPage = _originalConfig$previ === void 0 ? "Previous page" : _originalConfig$previ,
        _originalConfig$chapt = originalConfig.chapterCompleted,
        chapterCompleted = _originalConfig$chapt === void 0 ? "Page completed!" : _originalConfig$chapt,
        _originalConfig$partC = originalConfig.partCompleted,
        partCompleted = _originalConfig$partC === void 0 ? "@pages of @total completed" : _originalConfig$partC,
        _originalConfig$incom = originalConfig.incompleteChapter,
        incompleteChapter = _originalConfig$incom === void 0 ? "Incomplete page" : _originalConfig$incom,
        _originalConfig$navig = originalConfig.navigateToTop,
        navigateToTop = _originalConfig$navig === void 0 ? "Navigate to the top" : _originalConfig$navig,
        _originalConfig$markA = originalConfig.markAsFinished,
        markAsFinished = _originalConfig$markA === void 0 ? "I have finished this page" : _originalConfig$markA,
        _originalConfig$fulls = originalConfig.fullscreen,
        fullscreen = _originalConfig$fulls === void 0 ? "Fullscreen" : _originalConfig$fulls,
        _originalConfig$exitF = originalConfig.exitFullscreen,
        exitFullscreen = _originalConfig$exitF === void 0 ? "Exit fullscreen" : _originalConfig$exitF,
        _originalConfig$bookP = originalConfig.bookProgressSubtext,
        bookProgressSubtext = _originalConfig$bookP === void 0 ? "@count of @total pages" : _originalConfig$bookP,
        _originalConfig$inter = originalConfig.interactionsProgressSubtext,
        interactionsProgressSubtext = _originalConfig$inter === void 0 ? "@count of @total interactions" : _originalConfig$inter,
        _originalConfig$submi = originalConfig.submitReport,
        submitReport = _originalConfig$submi === void 0 ? "Submit Report" : _originalConfig$submi,
        _originalConfig$resta = originalConfig.restartLabel,
        restartLabel = _originalConfig$resta === void 0 ? "Restart" : _originalConfig$resta,
        _originalConfig$summa = originalConfig.summaryHeader,
        summaryHeader = _originalConfig$summa === void 0 ? "Summary" : _originalConfig$summa,
        _originalConfig$allIn = originalConfig.allInteractions,
        allInteractions = _originalConfig$allIn === void 0 ? "All interactions" : _originalConfig$allIn,
        _originalConfig$unans = originalConfig.unansweredInteractions,
        unansweredInteractions = _originalConfig$unans === void 0 ? "Unanswered interactions" : _originalConfig$unans,
        _originalConfig$score = originalConfig.scoreText,
        scoreText = _originalConfig$score === void 0 ? "@score / @maxscore" : _originalConfig$score,
        _originalConfig$leftO = originalConfig.leftOutOfTotalCompleted,
        leftOutOfTotalCompleted = _originalConfig$leftO === void 0 ? "@left of @max interactinos completed" : _originalConfig$leftO,
        _originalConfig$noInt = originalConfig.noInteractions,
        noInteractions = _originalConfig$noInt === void 0 ? "No interactions" : _originalConfig$noInt,
        _originalConfig$score2 = originalConfig.score,
        score = _originalConfig$score2 === void 0 ? "Score" : _originalConfig$score2,
        _originalConfig$summa2 = originalConfig.summaryAndSubmit,
        summaryAndSubmit = _originalConfig$summa2 === void 0 ? "Summary & submit" : _originalConfig$summa2,
        _originalConfig$noCha = originalConfig.noChapterInteractionBoldText,
        noChapterInteractionBoldText = _originalConfig$noCha === void 0 ? "You have not interacted with any pages." : _originalConfig$noCha,
        _originalConfig$noCha2 = originalConfig.noChapterInteractionText,
        noChapterInteractionText = _originalConfig$noCha2 === void 0 ? "You have to interact with at least one page before you can see the summary." : _originalConfig$noCha2,
        _originalConfig$yourA = originalConfig.yourAnswersAreSubmittedForReview,
        yourAnswersAreSubmittedForReview = _originalConfig$yourA === void 0 ? "Your answers are submitted for review!" : _originalConfig$yourA,
        _originalConfig$bookP2 = originalConfig.bookProgress,
        bookProgress = _originalConfig$bookP2 === void 0 ? "Book progress" : _originalConfig$bookP2,
        _originalConfig$inter2 = originalConfig.interactionsProgress,
        interactionsProgress = _originalConfig$inter2 === void 0 ? "Interactions progress" : _originalConfig$inter2,
        _originalConfig$total = originalConfig.totalScoreLabel,
        totalScoreLabel = _originalConfig$total === void 0 ? 'Total score' : _originalConfig$total,
        config = _objectWithoutProperties(originalConfig, _excluded);

    config.chapters = config.chapters.map(function (chapter) {
      chapter.params.content = chapter.params.content.filter(function (content) {
        return content.content;
      });
      return chapter;
    }).filter(function (chapter) {
      return chapter.params.content && chapter.params.content.length > 0;
    });
    config.behaviour.displaySummary = config.behaviour.displaySummary === undefined || config.behaviour.displaySummary;
    config.l10n = {
      read: read,
      displayTOC: displayTOC,
      hideTOC: hideTOC,
      nextPage: nextPage,
      previousPage: previousPage,
      chapterCompleted: chapterCompleted,
      partCompleted: partCompleted,
      incompleteChapter: incompleteChapter,
      navigateToTop: navigateToTop,
      markAsFinished: markAsFinished,
      fullscreen: fullscreen,
      exitFullscreen: exitFullscreen,
      bookProgressSubtext: bookProgressSubtext,
      interactionsProgressSubtext: interactionsProgressSubtext,
      submitReport: submitReport,
      restartLabel: restartLabel,
      summaryHeader: summaryHeader,
      allInteractions: allInteractions,
      unansweredInteractions: unansweredInteractions,
      scoreText: scoreText,
      leftOutOfTotalCompleted: leftOutOfTotalCompleted,
      noInteractions: noInteractions,
      score: score,
      summaryAndSubmit: summaryAndSubmit,
      noChapterInteractionBoldText: noChapterInteractionBoldText,
      noChapterInteractionText: noChapterInteractionText,
      yourAnswersAreSubmittedForReview: yourAnswersAreSubmittedForReview,
      bookProgress: bookProgress,
      interactionsProgress: interactionsProgress,
      totalScoreLabel: totalScoreLabel
    };
    return config;
  };

  return InteractiveBook;
}(H5P.EventDispatcher);



/***/ }),

/***/ "./src/scripts/cover.js":
/*!******************************!*\
  !*** ./src/scripts/cover.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * The introduction module
 * Constructor function.
 */
var Cover = /*#__PURE__*/function (_H5P$EventDispatcher) {
  _inheritsLoose(Cover, _H5P$EventDispatcher);

  function Cover(params, titleText, readText, contentId, parent) {
    var _this;

    _this = _H5P$EventDispatcher.call(this) || this;
    _this.parent = parent; // Container

    _this.container = _this.createContainer(); // Visual header

    if (params.coverImage) {
      _this.container.appendChild(_this.createVisualsElement(params, contentId));
    } else {
      _this.container.classList.add('h5p-cover-nographics');
    } // Title


    _this.container.appendChild(_this.createTitleElement(titleText)); // Description text


    if (params.coverDescription) {
      _this.container.appendChild(_this.createDescriptionElement(params.coverDescription));
    } // Read button


    _this.container.appendChild(_this.createReadButton(readText));

    return _this;
  }
  /**
   * Create the top level element.
   *
   * @return {HTMLElement} Cover.
   */


  var _proto = Cover.prototype;

  _proto.createContainer = function createContainer() {
    var container = document.createElement('div');
    container.classList.add('h5p-interactive-book-cover');
    return container;
  }
  /**
   * Create an element which contains both the cover image and a background bar.
   *
   * @param {object} coverImage Image object.
   * @param {number} contentId Content Id.
   */
  ;

  _proto.createVisualsElement = function createVisualsElement(params, contentId) {
    if (!params || !params.coverImage) {
      return null;
    }

    var visuals = document.createElement('div');
    visuals.classList.add('h5p-interactive-book-cover-graphics');
    visuals.appendChild(this.createImage(params.coverImage.path, contentId, params.coverAltText));
    visuals.appendChild(this.createCoverBar());
    return visuals;
  }
  /**
   * Create Image.
   *
   * @param {string} path Relative image path.
   * @param {number} contentId Content id.
   * @param {string|null} altText
   */
  ;

  _proto.createImage = function createImage(path, contentId, altText) {
    var img = document.createElement('img');
    img.classList.add('h5p-interactive-book-cover-image');
    img.src = H5P.getPath(path, contentId);
    img.setAttribute('draggable', 'false');

    if (altText) {
      img.alt = altText;
    }

    return img;
  }
  /**
   * Create an element responsible for the bar behind an image.
   *
   * @return {HTMLElement} Horizontal bar in the background.
   */
  ;

  _proto.createCoverBar = function createCoverBar() {
    var coverBar = document.createElement('div');
    coverBar.classList.add('h5p-interactive-book-cover-bar');
    return coverBar;
  }
  /**
   * Create title.
   *
   * @param {string} titleText Text for title element.
   * @return {HTMLElement} Title element.
   */
  ;

  _proto.createTitleElement = function createTitleElement(titleText) {
    var title = document.createElement('p');
    title.innerHTML = titleText;
    var titleWrapper = document.createElement('div');
    titleWrapper.classList.add('h5p-interactive-book-cover-title');
    titleWrapper.appendChild(title);
    return titleWrapper;
  }
  /**
   * Create description.
   *
   * @param {string} descriptionText Text for description element.
   * @return {HTMLElement} Description element.
   */
  ;

  _proto.createDescriptionElement = function createDescriptionElement(descriptionText) {
    if (!descriptionText) {
      return null;
    }

    var descriptionElement = document.createElement('div');
    descriptionElement.classList.add('h5p-interactive-book-cover-description');
    descriptionElement.innerHTML = descriptionText;
    return descriptionElement;
  }
  /**
   * Create a button element.
   *
   * @param {string} buttonText Button text.
   * @return {HTMLElement} Read button element.
   */
  ;

  _proto.createReadButton = function createReadButton(buttonText) {
    var _this2 = this;

    var button = document.createElement('button');
    button.innerHTML = buttonText;

    button.onclick = function () {
      _this2.removeCover();
    };

    var buttonWrapper = document.createElement('div');
    buttonWrapper.classList.add('h5p-interactive-book-cover-readbutton');
    buttonWrapper.appendChild(button);
    return buttonWrapper;
  }
  /**
   * Remove cover.
   */
  ;

  _proto.removeCover = function removeCover() {
    this.container.parentElement.classList.remove('covered');
    this.container.parentElement.removeChild(this.container);
    this.hidden = true;
    this.parent.trigger('coverRemoved');
  };

  return Cover;
}(H5P.EventDispatcher);

/* harmony default export */ __webpack_exports__["default"] = (Cover);

/***/ }),

/***/ "./src/scripts/pagecontent.js":
/*!************************************!*\
  !*** ./src/scripts/pagecontent.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _urltools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./urltools */ "./src/scripts/urltools.js");
/* harmony import */ var _summary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./summary */ "./src/scripts/summary.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var PageContent = /*#__PURE__*/function (_H5P$EventDispatcher) {
  _inheritsLoose(PageContent, _H5P$EventDispatcher);

  /**
   * @constructor
   *
   * @param {object} config
   * @param {string} contentId
   * @param {object} contentData
   * @param {object} parent
   * @param {object} params
   */
  function PageContent(config, contentId, contentData, parent, params) {
    var _this;

    _this = _H5P$EventDispatcher.call(this) || this;
    _this.parent = parent;
    _this.behaviour = config.behaviour;
    _this.params = params;
    _this.targetPage = {};
    _this.targetPage.redirectFromComponent = false;
    _this.columnNodes = [];
    _this.shouldAutoplay = [];
    _this.chapters = [];
    _this.l10n = config.l10n;

    if (parent.hasValidChapters()) {
      var startChapter = _this.createColumns(config, contentId, contentData);

      _this.preloadChapter(startChapter);
    }

    _this.content = _this.createPageContent();
    _this.container = document.createElement('div');

    _this.container.classList.add('h5p-interactive-book-main');

    _this.container.appendChild(_this.content);

    _this.parent.on('coverRemoved', function () {
      _this.handleChapterChange(_this.parent.getActiveChapter());
    });

    return _this;
  }
  /**
   * Get chapters for the page
   *
   * @param {boolean} includeSummary
   * @return {object[]} Chapters.
   */


  var _proto = PageContent.prototype;

  _proto.getChapters = function getChapters() {
    var includeSummary = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    return this.chapters.filter(function (chapter) {
      return !chapter.isSummary || chapter.isSummary && !!includeSummary;
    });
  }
  /**
   * Reset all the chapters
   */
  ;

  _proto.resetChapters = function resetChapters() {
    if (this.behaviour.progressIndicators && !this.behaviour.progressAuto) {
      this.columnNodes.forEach(function (columnNode) {
        Array.from(columnNode.querySelectorAll('.h5p-interactive-book-status-progress-marker > input[type=checkbox]')).forEach(function (element) {
          return element.checked = false;
        });
      });
    }
  }
  /**
   * Create page content.
   *
   * @return {HTMLElement} Page content.
   */
  ;

  _proto.createPageContent = function createPageContent() {
    var content = document.createElement('div');
    content.classList.add('h5p-interactive-book-content');
    this.columnNodes.forEach(function (element) {
      content.appendChild(element);
    });
    this.setChapterOrder(this.parent.getActiveChapter());
    return content;
  };

  _proto.setChapterOrder = function setChapterOrder(currentId) {
    if (currentId < 0 || currentId > this.columnNodes.length - 1) {
      return;
    }

    this.columnNodes.forEach(function (element, index) {
      element.classList.remove('h5p-interactive-book-previous');
      element.classList.remove('h5p-interactive-book-current');
      element.classList.remove('h5p-interactive-book-next');

      if (index === currentId - 1) {// element.classList.add('h5p-interactive-book-previous');
      } else if (index === currentId) {
        element.classList.add('h5p-interactive-book-current');
      } else if (index === currentId + 1) {// element.classList.add('h5p-interactive-book-next');
      }
    });
  }
  /**
   * Create page read checkbox.
   *
   * @return {HTMLElement} Checkbox for marking a chapter as read.
   */
  ;

  _proto.createChapterReadCheckbox = function createChapterReadCheckbox() {
    var _this2 = this;

    var checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');

    checkbox.onclick = function (event) {
      _this2.parent.setChapterRead(undefined, event.target.checked);
    };

    var checkText = document.createElement('p');
    checkText.innerHTML = this.params.l10n.markAsFinished;
    var wrapper = document.createElement('label');
    wrapper.classList.add('h5p-interactive-book-status-progress-marker');
    wrapper.appendChild(checkbox);
    wrapper.appendChild(checkText);
    return wrapper;
  }
  /**
   * Inject section instance UUID into DOM.
   *
   * @param {object[]} sections Sections.
   * @param {HTMLElement} columnNode Column element.
   */
  ;

  _proto.injectSectionId = function injectSectionId(sections, columnNode) {
    var columnContent = columnNode.getElementsByClassName('h5p-column-content');

    for (var i = 0; i < sections.length; i++) {
      columnContent[i].id = "h5p-interactive-book-section-".concat(sections[i].instance.subContentId);
    }
  }
  /**
   * Preload current chapter and the next one
   * @param {number} chapterIndex
   */
  ;

  _proto.preloadChapter = function preloadChapter(chapterIndex) {
    this.initializeChapter(chapterIndex);
    this.initializeChapter(chapterIndex + 1);
  }
  /**
   * Initialize chapter
   * @param {number} chapterIndex
   */
  ;

  _proto.initializeChapter = function initializeChapter(chapterIndex) {
    // Out of bound
    if (chapterIndex < 0 || chapterIndex > this.chapters.length - 1) {
      return;
    }

    var chapter = this.chapters[chapterIndex];

    if (chapter.isSummary) {
      var columnNode = this.columnNodes[chapterIndex];

      if (chapter.isInitialized) {
        chapter.instance.setChapters(this.getChapters(false));
        columnNode.innerHTML = "";
      } // Attach


      chapter.instance.addSummaryPage(H5P.jQuery(columnNode));
      chapter.isInitialized = true;
      return;
    }

    if (!chapter.isInitialized) {
      var _columnNode = this.columnNodes[chapterIndex]; // Attach

      chapter.instance.attach(H5P.jQuery(_columnNode));
      this.injectSectionId(chapter.sections, _columnNode);

      if (this.behaviour.progressIndicators && !this.behaviour.progressAuto) {
        _columnNode.appendChild(this.createChapterReadCheckbox());
      }

      chapter.isInitialized = true;
    }
  }
  /**
   * Create Column instances.
   *
   * @param {object} config Parameters.
   * @param {number} contentId Content id.
   * @param {object} contentData Content data.
   * @return {number} start chapter
   */
  ;

  _proto.createColumns = function createColumns(config, contentId, contentData) {
    var _this3 = this;

    contentData = _extends({}, contentData);
    var urlFragments = _urltools__WEBPACK_IMPORTED_MODULE_0__["default"].extractFragmentsFromURL(this.parent.validateFragments, this.parent.hashWindow);
    var chapters = [];
    this.chapters = chapters; // Go through all columns and initialise them

    var _loop = function _loop(i) {
      var columnNode = document.createElement('div');

      _this3.overrideParameters(i, config.chapters[i]);

      var instanceContentData = _objectSpread(_objectSpread({}, contentData), {}, {
        metadata: _objectSpread({}, contentData.metadata)
      });

      var newInstance = H5P.newRunnable(config.chapters[i], contentId, undefined, undefined, instanceContentData);

      _this3.parent.bubbleUp(newInstance, 'resize', _this3.parent);

      var chapter = {
        isInitialized: false,
        instance: newInstance,
        title: config.chapters[i].metadata.title,
        completed: false,
        tasksLeft: 0,
        isSummary: false,
        sections: newInstance.getInstances().map(function (instance, contentIndex) {
          return {
            content: config.chapters[i].params.content[contentIndex].content,
            instance: instance,
            isTask: false
          };
        })
      };
      columnNode.classList.add('h5p-interactive-book-chapter');
      columnNode.id = "h5p-interactive-book-chapter-".concat(newInstance.subContentId); // Find sections with tasks and tracks them

      chapter.sections.forEach(function (section) {
        if (H5P.Column.isTask(section.instance)) {
          section.isTask = true;

          if (_this3.behaviour.progressIndicators) {
            section.taskDone = false;
            chapter.tasksLeft += 1;
          }
        }
      });
      chapter.maxTasks = chapter.tasksLeft; // Register both the HTML-element and the H5P-element

      chapters.push(chapter);

      _this3.columnNodes.push(columnNode);
    };

    for (var i = 0; i < config.chapters.length; i++) {
      _loop(i);
    }

    if (this.parent.hasSummary(chapters)) {
      var columnNode = document.createElement('div');
      var newInstance = new _summary__WEBPACK_IMPORTED_MODULE_1__["default"](_objectSpread({}, config), this.parent, this.getChapters(false));
      this.parent.bubbleUp(newInstance, 'resize', this.parent);
      var chapter = {
        isInitialized: false,
        instance: newInstance,
        title: this.l10n.summaryHeader,
        isSummary: true,
        sections: []
      };
      columnNode.classList.add('h5p-interactive-book-chapter');
      columnNode.id = "h5p-interactive-book-chapter-summary";
      chapter.maxTasks = chapter.tasksLeft;
      chapters.push(chapter);
      this.columnNodes.push(columnNode);
    } // First chapter should be visible, except if the URL says otherwise.


    var startChapter = 0;

    if (urlFragments.chapter && urlFragments.h5pbookid == this.parent.contentId) {
      var chapterIndex = this.findChapterIndex(urlFragments.chapter);
      startChapter = chapterIndex;
      this.parent.setActiveChapter(chapterIndex);
      var headerNumber = urlFragments.headerNumber;

      if (urlFragments.section) {
        setTimeout(function () {
          _this3.redirectSection(urlFragments.section, headerNumber);

          if (_this3.parent.hasCover()) {
            _this3.parent.cover.removeCover();
          }
        }, 1000);
      }
    }

    return startChapter;
  }
  /**
   * Redirect section.
   *
   * @param {string} sectionUUID Section UUID or top.
   * @param {number} headerNumber Header index within section
   */
  ;

  _proto.redirectSection = function redirectSection(sectionUUID) {
    var headerNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    if (sectionUUID === 'top') {
      this.parent.trigger('scrollToTop');
    } else {
      var section = document.getElementById(sectionUUID);

      if (section) {
        if (headerNumber !== null) {
          // find header within section
          var headers = section.querySelectorAll('h2, h3');

          if (headers[headerNumber]) {
            // Set section to the header
            section = headers[headerNumber];
          }
        }

        var focusHandler = document.createElement('div');
        focusHandler.setAttribute('tabindex', '-1');
        section.parentNode.insertBefore(focusHandler, section);
        focusHandler.focus();
        focusHandler.addEventListener('blur', function () {
          focusHandler.parentNode.removeChild(focusHandler);
        });
        this.targetPage.redirectFromComponent = false;
        setTimeout(function () {
          section.scrollIntoView(true);
        }, 100);
      }
    }
  }
  /**
   * Find chapter index.
   *
   * @param {string} chapterUUID Chapter UUID.
   * @return {number} Chapter id.
   */
  ;

  _proto.findChapterIndex = function findChapterIndex(chapterUUID) {
    var position = -1;
    this.columnNodes.forEach(function (element, index) {
      if (position !== -1) {
        return; // Skip
      }

      if (element.id === chapterUUID) {
        position = index;
      }
    });
    return position;
  }
  /**
   * Change chapter.
   *
   * @param {boolean} redirectOnLoad True if should redirect on load.
   * @param {object} target Target.
   */
  ;

  _proto.changeChapter = function changeChapter(redirectOnLoad, target) {
    var _this4 = this;

    if (this.columnNodes[this.parent.getActiveChapter()].classList.contains('h5p-interactive-book-animate')) {
      return;
    }

    this.targetPage = target;
    var chapterIdOld = this.parent.getActiveChapter();
    var chapterIdNew = this.parent.getChapterId(this.targetPage.chapter);
    var hasChangedChapter = chapterIdOld !== chapterIdNew;

    if (!redirectOnLoad) {
      this.parent.updateChapterProgress(chapterIdOld, hasChangedChapter);
    }

    this.preloadChapter(chapterIdNew);

    if (chapterIdNew < this.columnNodes.length) {
      var oldChapter = this.columnNodes[chapterIdOld];
      var targetChapter = this.columnNodes[chapterIdNew];

      if (hasChangedChapter && !redirectOnLoad) {
        this.parent.setActiveChapter(chapterIdNew);
        var direction = chapterIdOld < chapterIdNew ? 'next' : 'previous';
        /*
         * Animation done by making the current and the target node
         * visible and then applying the correct translation in x-direction
         */

        targetChapter.classList.add("h5p-interactive-book-".concat(direction));
        targetChapter.classList.add('h5p-interactive-book-animate');
        oldChapter.classList.add('h5p-interactive-book-animate'); // Start the animation

        setTimeout(function () {
          if (direction === 'previous') {
            oldChapter.classList.add('h5p-interactive-book-next');
          } else {
            oldChapter.classList.remove('h5p-interactive-book-current');
            oldChapter.classList.add('h5p-interactive-book-previous');
          }

          targetChapter.classList.remove("h5p-interactive-book-".concat(direction));
        }, 1); // End the animation

        setTimeout(function () {
          oldChapter.classList.remove('h5p-interactive-book-next');
          oldChapter.classList.remove('h5p-interactive-book-previous');
          oldChapter.classList.remove('h5p-interactive-book-current');
          targetChapter.classList.add('h5p-interactive-book-current');
          targetChapter.classList.remove('h5p-interactive-book-animate');
          oldChapter.classList.remove('h5p-interactive-book-animate');

          _this4.redirectSection(_this4.targetPage.section, _this4.targetPage.headerNumber);

          _this4.parent.trigger('resize');
        }, 250);
        this.handleChapterChange(chapterIdNew, chapterIdOld);
      } else {
        if (this.parent.cover && !this.parent.cover.hidden) {
          this.parent.on('coverRemoved', function () {
            _this4.redirectSection(_this4.targetPage.section, _this4.targetPage.headerNumber);
          });
        } else {
          this.redirectSection(this.targetPage.section, this.targetPage.headerNumber);
        }
      }

      this.parent.sideBar.redirectHandler(chapterIdNew);
    }
  }
  /**
   * Update footer.
   */
  ;

  _proto.updateFooter = function updateFooter() {
    if (this.chapters.length === 0) {
      return;
    }

    var activeChapter = this.parent.getActiveChapter();
    var column = this.columnNodes[activeChapter];
    var moveFooterInsideContent = this.parent.shouldFooterBeHidden(column.clientHeight); // Move status bar footer to content in fullscreen

    var footerParent = this.parent.statusBarFooter.wrapper.parentNode;

    if (moveFooterInsideContent) {
      // Add status bar footer to page content
      if (footerParent !== this.content) {
        this.content.appendChild(this.parent.statusBarFooter.wrapper);
      }
    } else {
      // Re-attach to shared bottom of book when exiting fullscreen
      if (footerParent !== this.parent.$wrapper) {
        this.parent.$wrapper.append(this.parent.statusBarFooter.wrapper);
      }
    }
  }
  /**
   * Handles chapter change events.
   *
   * @param {number} newId
   * @param {number} oldId
   */
  ;

  _proto.handleChapterChange = function handleChapterChange(newId, oldId) {
    var i;

    if (oldId !== undefined) {
      // Stop any playback
      for (i = 0; i < this.chapters[oldId].sections.length; i++) {
        this.pauseMedia(this.chapters[oldId].sections[i].instance);
      }
    } // Start autoplay


    if (this.shouldAutoplay[newId]) {
      for (i = 0; i < this.shouldAutoplay[newId].length; i++) {
        var shouldAutoplay = this.shouldAutoplay[newId][i];

        if (this.chapters[newId].sections[shouldAutoplay] !== undefined) {
          this.chapters[newId].sections[shouldAutoplay].instance.play();
        }
      }
    }
  }
  /**
   * Disables autoplay for all interactions not on the first chapter.
   *
   * @param {number} chapterId
   * @param {Object} chapter
   */
  ;

  _proto.overrideParameters = function overrideParameters(chapterId, chapter) {
    var currentChapterId = this.parent.getActiveChapter();

    for (var i = 0; i < chapter.params.content.length; i++) {
      if (this.hasAutoplay(chapter.params.content[i].content.params, chapterId !== currentChapterId || this.parent.hasCover())) {
        if (this.shouldAutoplay[chapterId] === undefined) {
          this.shouldAutoplay[chapterId] = [i];
        } else {
          this.shouldAutoplay[chapterId].push(i);
        }
      }
    }
  }
  /**
   * Check if interaction has autoplay enabled
   *
   * @param {Object} params
   * @return {boolean}
   */
  ;

  _proto.hasAutoplay = function hasAutoplay(params, prevent) {
    if (params.autoplay) {
      if (prevent) {
        params.autoplay = false;
      }

      return true;
    } else if (params.playback && params.playback.autoplay) {
      if (prevent) {
        params.playback.autoplay = false;
      }

      return true;
    } else if (params.media && params.media.params && params.media.params.playback && params.media.params.playback.autoplay) {
      if (prevent) {
        params.media.params.playback.autoplay = false;
      }

      return true;
    } else if (params.media && params.media.params && params.media.params.autoplay) {
      if (prevent) {
        params.media.params.autoplay = false;
      }

      return true;
    }

    return false;
  }
  /**
   * Stop the given element's playback if any.
   *
   * @param {object} instance
   */
  ;

  _proto.pauseMedia = function pauseMedia(instance) {
    try {
      if (instance.pause !== undefined && (instance.pause instanceof Function || typeof instance.pause === 'function')) {
        instance.pause();
      } else if (instance.video !== undefined && instance.video.pause !== undefined && (instance.video.pause instanceof Function || typeof instance.video.pause === 'function')) {
        instance.video.pause();
      } else if (instance.stop !== undefined && (instance.stop instanceof Function || typeof instance.stop === 'function')) {
        instance.stop();
      }
    } catch (err) {
      // Prevent crashing, but tell developers there's something wrong.
      H5P.error(err);
    }
  }
  /**
   * Toggle the navigation menu.
   */
  ;

  _proto.toggleNavigationMenu = function toggleNavigationMenu() {
    this.container.classList.toggle('h5p-interactive-book-navigation-open');
  };

  return PageContent;
}(H5P.EventDispatcher);

/* harmony default export */ __webpack_exports__["default"] = (PageContent);

/***/ }),

/***/ "./src/scripts/sidebar.js":
/*!********************************!*\
  !*** ./src/scripts/sidebar.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * A component which helps in navigation
 * Constructor function.
 */
var SideBar = /*#__PURE__*/function (_H5P$EventDispatcher) {
  _inheritsLoose(SideBar, _H5P$EventDispatcher);

  function SideBar(config, contentId, mainTitle, parent) {
    var _this;

    _this = _H5P$EventDispatcher.call(this) || this;
    _this.id = contentId;
    _this.parent = parent;
    _this.behaviour = config.behaviour;
    _this.content = document.createElement('div');

    _this.content.classList.add('navigation-list');

    _this.container = _this.addSideBar();
    _this.l10n = config.l10n;
    _this.chapters = _this.findAllChapters(config.chapters);
    _this.chapterNodes = _this.getChapterNodes();

    if (mainTitle) {
      _this.titleElem = _this.addMainTitle(mainTitle);

      _this.container.appendChild(_this.titleElem);
    }

    _this.chapterNodes.forEach(function (element) {
      _this.content.appendChild(element);
    });

    if (_this.chapters.length > 20) {
      _this.content.classList.add('large-navigation-list');
    }

    _this.container.appendChild(_this.content);

    _this.addTransformListener();

    _this.initializeNavigationControls();

    return _this;
  }

  var _proto = SideBar.prototype;

  _proto.initializeNavigationControls = function initializeNavigationControls() {
    var _this2 = this;

    var keyCodes = Object.freeze({
      'UP': 38,
      'DOWN': 40
    });
    this.chapterNodes.forEach(function (chapter, i) {
      var chapterButton = chapter.querySelector('.h5p-interactive-book-navigation-chapter-button');
      chapterButton.addEventListener('keydown', function (e) {
        switch (e.keyCode) {
          case keyCodes.UP:
            _this2.setFocusToChapterItem(i, -1);

            e.preventDefault();
            break;

          case keyCodes.DOWN:
            _this2.setFocusToChapterItem(i, 1);

            e.preventDefault();
            break;
        }
      });
      var sections = chapter.querySelectorAll('.h5p-interactive-book-navigation-section');

      var _loop = function _loop(sectionIndex) {
        var section = sections[sectionIndex];
        var sectionButton = section.querySelector('.section-button');
        sectionButton.addEventListener('keydown', function (e) {
          switch (e.keyCode) {
            case keyCodes.UP:
              _this2.setFocusToSectionItem(i, sectionIndex, -1);

              e.preventDefault();
              break;

            case keyCodes.DOWN:
              _this2.setFocusToSectionItem(i, sectionIndex, 1);

              e.preventDefault();
              break;
          }
        });
      };

      for (var sectionIndex = 0; sectionIndex < sections.length; sectionIndex++) {
        _loop(sectionIndex);
      }
    });
  };

  _proto.setFocusToChapterItem = function setFocusToChapterItem(index) {
    var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var nextIndex = index + direction;

    if (nextIndex < 0) {
      nextIndex = this.chapterNodes.length - 1;
    } else if (nextIndex > this.chapterNodes.length - 1) {
      nextIndex = 0;
    } // Check if we should navigate to a section


    if (direction) {
      var chapterIndex = direction > 0 ? index : nextIndex;
      var chapter = this.chapterNodes[chapterIndex];

      if (!chapter.classList.contains('h5p-interactive-book-navigation-closed')) {
        var sections = chapter.querySelectorAll('.h5p-interactive-book-navigation-section');

        if (sections.length) {
          var sectionItemIndex = direction > 0 ? 0 : sections.length - 1;
          this.setFocusToSectionItem(chapterIndex, sectionItemIndex);
          return;
        }
      }
    }

    var nextChapter = this.chapterNodes[nextIndex];
    var chapterButton = nextChapter.querySelector('.h5p-interactive-book-navigation-chapter-button');
    this.setFocusToItem(chapterButton, nextIndex);
  };

  _proto.setFocusToSectionItem = function setFocusToSectionItem(chapterIndex, index) {
    var direction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var chapter = this.chapterNodes[chapterIndex];
    var sections = chapter.querySelectorAll('.h5p-interactive-book-navigation-section'); // Navigate chapter if outside of section bounds

    var nextIndex = index + direction;

    if (nextIndex > sections.length - 1) {
      this.setFocusToChapterItem(chapterIndex + 1);
      return;
    } else if (nextIndex < 0) {
      this.setFocusToChapterItem(chapterIndex);
      return;
    }

    var section = sections[nextIndex];
    var sectionButton = section.querySelector('.section-button');
    this.setFocusToItem(sectionButton, chapterIndex);
  };

  _proto.setFocusToItem = function setFocusToItem(element, chapterIndex) {
    var skipFocusing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    // Remove focus from all other elements
    this.chapterNodes.forEach(function (chapter, index) {
      var chapterButton = chapter.querySelector('.h5p-interactive-book-navigation-chapter-button'); // Highlight current chapter

      if (index === chapterIndex) {
        chapterButton.classList.add('h5p-interactive-book-navigation-current');
      } else {
        chapterButton.classList.remove('h5p-interactive-book-navigation-current');
      }

      chapterButton.setAttribute('tabindex', '-1');
      var sections = chapter.querySelectorAll('.h5p-interactive-book-navigation-section');

      for (var i = 0; i < sections.length; i++) {
        var section = sections[i];
        var sectionButton = section.querySelector('.section-button');
        sectionButton.setAttribute('tabindex', '-1');
      }
    });
    element.setAttribute('tabindex', '0');
    this.focusedChapter = chapterIndex;

    if (!skipFocusing) {
      element.focus();
    }
  }
  /**
   * Get sidebar DOM.
   *
   * @return {HTMLElement} DOM for sidebar.
   */
  ;

  _proto.addSideBar = function addSideBar() {
    var container = document.createElement('div');
    container.id = 'h5p-interactive-book-navigation-menu';
    container.classList.add('h5p-interactive-book-navigation');
    return container;
  }
  /**
   * Get main title.
   *
   * @param {string} title Title.
   * @return {HTMLElement} Title element.
   */
  ;

  _proto.addMainTitle = function addMainTitle(titleText) {
    var title = document.createElement('h2');
    title.classList.add('navigation-title');
    title.innerHTML = titleText;
    title.setAttribute('title', titleText);
    var titleWrapper = document.createElement('div');
    titleWrapper.classList.add('h5p-interactive-book-navigation-maintitle');
    titleWrapper.appendChild(title);
    return titleWrapper;
  }
  /**
   * Find sections in chapter.
   *
   * @param {object} columnData Column data.
   * @return {object[]} Sections data.
   */
  ;

  _proto.findSectionsInChapter = function findSectionsInChapter(columnData) {
    var sectionsData = [];
    var sections = columnData.params.content;

    for (var j = 0; j < sections.length; j++) {
      var content = sections[j].content;
      var title = '';

      switch (content.library.split(' ')[0]) {
        case 'H5P.Link':
          if (content.params.title) {
            title = content.params.title;
          } else {
            title = 'New link';
          }

          break;

        default:
          title = content.metadata.title;
      }

      sectionsData.push({
        title: title,
        id: content.subContentId ? "h5p-interactive-book-section-".concat(content.subContentId) : undefined
      });
    }

    return sectionsData;
  }
  /**
   * Find all chapters.
   *
   * @param {object[]} columnsData Columns data.
   * @return {object[]} Chapters data.
   */
  ;

  _proto.findAllChapters = function findAllChapters(columnsData) {
    var chapters = [];

    for (var i = 0; i < columnsData.length; i++) {
      var sections = this.findSectionsInChapter(columnsData[i]);
      var chapterTitle = columnsData[i].metadata.title;
      var id = "h5p-interactive-book-chapter-".concat(columnsData[i].subContentId);
      chapters.push({
        sections: sections,
        title: chapterTitle,
        id: id,
        isSummary: false
      });
    }

    if (this.parent.hasSummary()) {
      chapters.push({
        sections: [],
        title: this.l10n.summaryHeader,
        id: "h5p-interactive-book-chapter-summary",
        isSummary: true
      });
    }

    return chapters;
  }
  /**
   * Toggle chapter menu.
   *
   * @param {HTMLElement} chapterNode Chapter.
   * @param {boolean} collapse If true, will collapse chapter.
   */
  ;

  _proto.toggleChapter = function toggleChapter(chapterNode, collapse) {
    collapse = collapse !== undefined ? collapse : !chapterNode.classList.contains('h5p-interactive-book-navigation-closed');
    var arrow = chapterNode.getElementsByClassName('h5p-interactive-book-navigation-chapter-accordion')[0];
    var chapterButton = chapterNode.querySelector('.h5p-interactive-book-navigation-chapter-button');
    chapterButton.setAttribute('aria-expanded', (!collapse).toString());

    if (collapse === true) {
      chapterNode.classList.add('h5p-interactive-book-navigation-closed');

      if (arrow) {
        arrow.classList.remove('icon-expanded');
        arrow.classList.add('icon-collapsed');
      }
    } else {
      chapterNode.classList.remove('h5p-interactive-book-navigation-closed');

      if (arrow) {
        arrow.classList.remove('icon-collapsed');
        arrow.classList.add('icon-expanded');
      }
    }
  }
  /**
   * Fires whenever a redirect is happening in parent
   * All chapters will be collapsed except for the active
   *
   * @param {number} chapterId The chapter that should stay open in the menu.
   */
  ;

  _proto.redirectHandler = function redirectHandler(chapterId) {
    var _this3 = this;

    this.chapterNodes.forEach(function (node, index) {
      _this3.toggleChapter(node, index !== chapterId);
    }); // Trigger resize after toggling all chapters

    this.parent.trigger('resize'); // Focus new chapter button if active chapter was closed

    if (chapterId !== this.focusedChapter) {
      var chapterButton = this.chapterNodes[chapterId].querySelector('.h5p-interactive-book-navigation-chapter-button');
      this.setFocusToItem(chapterButton, chapterId, true);
    }
  }
  /**
   * Reset indicators.
   */
  ;

  _proto.resetIndicators = function resetIndicators() {
    var _this4 = this;

    this.chapterNodes.forEach(function (node, index) {
      // Reset chapter
      _this4.updateChapterProgressIndicator(index, 'BLANK'); // Reset sections


      var sections = node.getElementsByClassName('h5p-interactive-book-navigation-section');

      var _iterator = _createForOfIteratorHelper(sections),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var section = _step.value;
          var icon = section.querySelector('.h5p-interactive-book-navigation-section-icon');

          if (icon) {
            icon.classList.remove('icon-question-answered');
            icon.classList.add('icon-chapter-blank');
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    });
  }
  /**
   * Update the indicator on a specific chapter.
   *
   * @param {number} chapterId The chapter that should be updated.
   * @param {string} status Status.
   */
  ;

  _proto.updateChapterProgressIndicator = function updateChapterProgressIndicator(chapterId, status) {
    if (!this.behaviour.progressIndicators) {
      return;
    }

    var chapter = this.chapters[chapterId];

    if (chapter.isSummary) {
      return;
    }

    var progressIndicator = this.chapterNodes[chapterId].getElementsByClassName('h5p-interactive-book-navigation-chapter-progress')[0];

    if (status === 'BLANK') {
      progressIndicator.classList.remove('icon-chapter-started');
      progressIndicator.classList.remove('icon-chapter-done');
      progressIndicator.classList.add('icon-chapter-blank');
    } else if (status === 'DONE') {
      progressIndicator.classList.remove('icon-chapter-blank');
      progressIndicator.classList.remove('icon-chapter-started');
      progressIndicator.classList.add('icon-chapter-done');
    } else if (status === 'STARTED') {
      progressIndicator.classList.remove('icon-chapter-blank');
      progressIndicator.classList.remove('icon-chapter-done');
      progressIndicator.classList.add('icon-chapter-started');
    }
  }
  /**
   * Set section marker.
   *
   * @param {number} chapterId Chapter Id.
   * @param {number} sectionId Section Id.
   */
  ;

  _proto.setSectionMarker = function setSectionMarker(chapterId, sectionId) {
    var icon = this.chapterNodes[chapterId].querySelector('.h5p-interactive-book-navigation-section-' + sectionId + ' .h5p-interactive-book-navigation-section-icon');

    if (icon) {
      icon.classList.remove('icon-chapter-blank');
      icon.classList.add('icon-question-answered');
    }
  }
  /**
   * Create chapter.
   *
   * @param {object} chapter Chapter data.
   * @param {number} chapterId Chapter Id.
   * @return {HTMLElement} Chapter node.
   */
  ;

  _proto.getNodesFromChapter = function getNodesFromChapter(chapter, chapterId) {
    var _this5 = this;

    var chapterNode = document.createElement('li');
    chapterNode.classList.add('h5p-interactive-book-navigation-chapter');

    if (chapter.isSummary) {
      chapterNode.classList.add('h5p-interactive-book-navigation-summary-button');
      var summary = this.parent.chapters[chapterId];
      var summaryButton = summary.instance.summaryMenuButton;
      summaryButton.classList.add('h5p-interactive-book-navigation-chapter-button');
      chapterNode.appendChild(summaryButton);
      return chapterNode;
    } // TODO: Clean this up. Will require to receive chapter info from parent instead of building itself


    var chapterCollapseIcon = document.createElement('div');
    chapterCollapseIcon.classList.add('h5p-interactive-book-navigation-chapter-accordion');
    var chapterTitleText = document.createElement('div');
    chapterTitleText.classList.add('h5p-interactive-book-navigation-chapter-title-text');
    chapterTitleText.innerHTML = chapter.title;
    chapterTitleText.setAttribute('title', chapter.title);
    var chapterCompletionIcon = document.createElement('div');

    if (this.behaviour.progressIndicators) {
      chapterCompletionIcon.classList.add('icon-chapter-blank');
      chapterCompletionIcon.classList.add('h5p-interactive-book-navigation-chapter-progress');
    }

    var chapterNodeTitle = document.createElement('button');
    chapterNodeTitle.setAttribute('tabindex', chapterId === 0 ? '0' : '-1');
    chapterNodeTitle.classList.add('h5p-interactive-book-navigation-chapter-button');

    if (this.parent.activeChapter !== chapterId) {
      chapterCollapseIcon.classList.add('icon-collapsed');
      chapterNodeTitle.setAttribute('aria-expanded', 'false');
    } else {
      chapterCollapseIcon.classList.add('icon-expanded');
      chapterNodeTitle.setAttribute('aria-expanded', 'true');
    }

    chapterNodeTitle.setAttribute('aria-controls', sectionsDivId);

    chapterNodeTitle.onclick = function (event) {
      var accordion = event.currentTarget.querySelector('.h5p-interactive-book-navigation-chapter-accordion');
      var isExpandable = !accordion.classList.contains('hidden');
      var isExpanded = event.currentTarget.getAttribute('aria-expanded') === 'true';

      if (_this5.isOpenOnMobile()) {
        _this5.parent.trigger('toggleMenu');
      } // Open chapter in main content


      if (chapterId !== _this5.focusedChapter && (_this5.isOpenOnMobile() || !isExpandable || !isExpanded)) {
        var newChapter = {
          h5pbookid: _this5.parent.contentId,
          chapter: _this5.chapters[chapterId].id,
          section: 0
        };

        _this5.parent.trigger('newChapter', newChapter);
      } // Expand chapter in menu


      if (isExpandable) {
        _this5.toggleChapter(event.currentTarget.parentElement);

        _this5.parent.trigger('resize');
      }
    };

    chapterNodeTitle.appendChild(chapterCollapseIcon);
    chapterNodeTitle.appendChild(chapterTitleText);
    chapterNodeTitle.appendChild(chapterCompletionIcon);
    chapterNode.appendChild(chapterNodeTitle); // Collapse all but current chapters in menu and highlight current

    if (this.parent.activeChapter === chapterId) {
      chapterNode.querySelector('.h5p-interactive-book-navigation-chapter-button').classList.add('h5p-interactive-book-navigation-current');
    } else {
      this.toggleChapter(chapterNode, true);
    }

    var sectionsWrapper = document.createElement('ul');
    sectionsWrapper.classList.add('h5p-interactive-book-navigation-sectionlist');
    var sectionsDivId = 'h5p-interactive-book-sectionlist-' + chapterId;
    sectionsWrapper.id = sectionsDivId;
    var sectionLinks = []; // Add sections to the chapter

    for (var i = 0; i < this.chapters[chapterId].sections.length; i++) {
      // Non-tasks will only get section links if they have headers
      if (!this.parent.chapters[chapterId].sections[i].isTask) {
        // Check text content for headers
        var chapterParams = this.parent.params.chapters[chapterId];
        var sectionParams = chapterParams.params.content[i].content;
        var isText = sectionParams.library.split(' ')[0] === 'H5P.AdvancedText';

        if (isText) {
          var text = document.createElement('div');
          text.innerHTML = sectionParams.params.text;
          var headers = text.querySelectorAll('h2, h3');

          for (var j = 0; j < headers.length; j++) {
            var header = headers[j];
            var sectionNode = this.createSectionLink(chapterId, i, header.textContent, j);
            sectionLinks.push(sectionNode);
            sectionsWrapper.appendChild(sectionNode);
          }
        }
      } else {
        var _sectionNode = this.createSectionLink(chapterId, i);

        sectionLinks.push(_sectionNode);
        sectionsWrapper.appendChild(_sectionNode);
      }
    }

    if (chapter.tasksLeft) {
      chapter.maxTasks = chapter.tasksLeft;
    } // Don't show collapse arrow if there are no sections or on mobile


    if (sectionLinks.length === 0) {
      var arrowIconElement = chapterNode.querySelector('.h5p-interactive-book-navigation-chapter-accordion');

      if (arrowIconElement) {
        arrowIconElement.classList.add('hidden');
      }
    }

    chapterNode.appendChild(sectionsWrapper);
    return chapterNode;
  }
  /**
   * Create a section link
   * @param chapterId
   * @param i Index of section
   * @param [title] Force title
   * @param [headerNumber] Set header index within section to link to.
   * @returns {Element} Section node containing the link
   */
  ;

  _proto.createSectionLink = function createSectionLink(chapterId, i) {
    var _this6 = this;

    var title = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var headerNumber = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    var section = this.chapters[chapterId].sections[i];
    var sectionTitleText = document.createElement('div');
    sectionTitleText.innerHTML = title || section.title;
    sectionTitleText.setAttribute('title', title || section.title);
    sectionTitleText.classList.add('h5p-interactive-book-navigation-section-title');
    var sectionCompletionIcon = document.createElement('div');
    sectionCompletionIcon.classList.add('h5p-interactive-book-navigation-section-icon');
    sectionCompletionIcon.classList.add('icon-chapter-blank');

    if (this.parent.chapters[chapterId].sections[i].isTask) {
      sectionCompletionIcon.classList.add('h5p-interactive-book-navigation-section-task');
    }

    var sectionLink = document.createElement('button');
    sectionLink.classList.add('section-button');
    sectionLink.setAttribute('tabindex', '-1');

    sectionLink.onclick = function (event) {
      var newChapter = {
        h5pbookid: _this6.parent.contentId,
        chapter: _this6.chapters[chapterId].id,
        section: section.id
      };

      if (headerNumber !== null) {
        newChapter.headerNumber = headerNumber;
      }

      _this6.parent.trigger('newChapter', newChapter);

      if (_this6.isOpenOnMobile()) {
        _this6.parent.trigger('toggleMenu');
      }

      event.preventDefault();
    };

    sectionLink.appendChild(sectionCompletionIcon);
    sectionLink.appendChild(sectionTitleText);
    var sectionNode = document.createElement('li');
    sectionNode.classList.add('h5p-interactive-book-navigation-section');
    sectionNode.classList.add('h5p-interactive-book-navigation-section-' + i);
    sectionNode.appendChild(sectionLink);
    return sectionNode;
  }
  /**
   * Get chapter elements.
   *
   * @return {HTMLElement[]} Chapter elements.
   */
  ;

  _proto.getChapterNodes = function getChapterNodes() {
    var _this7 = this;

    return this.chapters.map(function (chapter, index) {
      return _this7.getNodesFromChapter(chapter, index);
    });
  }
  /**
   * Detect whether navigation is open on a small surface(pc or mobile).
   * @return {boolean} True, if navigation is open on mobile view.
   */
  ;

  _proto.isOpenOnMobile = function isOpenOnMobile() {
    return this.parent.isMenuOpen() && this.parent.isSmallSurface();
  }
  /**
   * Add transform listener.
   */
  ;

  _proto.addTransformListener = function addTransformListener() {
    var _this8 = this;

    this.container.addEventListener('transitionend', function (event) {
      // propertyName is used trigger once, not for every property that has transitionend
      if (event.propertyName === 'flex-basis') {
        _this8.parent.trigger('resize');
      }
    });
  };

  return SideBar;
}(H5P.EventDispatcher);

/* harmony default export */ __webpack_exports__["default"] = (SideBar);

/***/ }),

/***/ "./src/scripts/statusbar.js":
/*!**********************************!*\
  !*** ./src/scripts/statusbar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Constructor function.
 */
var StatusBar = /*#__PURE__*/function (_H5P$EventDispatcher) {
  _inheritsLoose(StatusBar, _H5P$EventDispatcher);

  function StatusBar(contentId, totalChapters, parent, params, styleClassName) {
    var _this;

    _this = _H5P$EventDispatcher.call(this) || this;
    _this.id = contentId;
    _this.parent = parent;
    _this.params = params || {};
    _this.params.l10n = params.l10n;
    _this.params.a11y = _extends({
      progress: 'Page @page of @total',
      menu: 'Toggle navigation menu'
    }, _this.params.a11y || {});
    _this.totalChapters = totalChapters;
    _this.arrows = _this.addArrows();
    /**
     * Top row initializer
     */

    _this.progressBar = _this.createProgressBar();
    _this.progressIndicator = _this.createProgressIndicator();
    _this.chapterTitle = _this.addChapterTitle();
    _this.menuToggleButton = _this.createMenuToggleButton();
    var wrapperInfo = document.createElement('div');
    wrapperInfo.classList.add('h5p-interactive-book-status');
    wrapperInfo.appendChild(_this.menuToggleButton);
    wrapperInfo.appendChild(_this.createToTopButton());
    wrapperInfo.appendChild(_this.chapterTitle.wrapper);
    wrapperInfo.appendChild(_this.progressIndicator.wrapper);
    wrapperInfo.appendChild(_this.arrows.buttonWrapperPrevious);
    wrapperInfo.appendChild(_this.arrows.buttonWrapperNext);

    if (_this.params.displayFullScreenButton && H5P.fullscreenSupported) {
      wrapperInfo.appendChild(_this.createFullScreenButton());
    }

    _this.wrapper = document.createElement('div');

    _this.wrapper.classList.add(styleClassName);

    _this.wrapper.setAttribute('tabindex', '-1');

    _this.wrapper.appendChild(_this.progressBar.wrapper);

    _this.wrapper.appendChild(wrapperInfo);

    _this.on('updateStatusBar', _this.updateStatusBar);
    /**
     * Sequential traversal of chapters
     * Event should be either 'next' or 'prev'
     */


    _this.on('seqChapter', function (event) {
      var eventInput = {
        h5pbookid: _this.parent.contentId
      };

      if (event.data.toTop) {
        eventInput.section = 'top';
      }

      if (event.data.direction === 'next') {
        if (_this.parent.activeChapter + 1 < _this.parent.chapters.length) {
          eventInput.chapter = "h5p-interactive-book-chapter-".concat(_this.parent.chapters[_this.parent.activeChapter + 1].instance.subContentId);
        } else if (_this.parent.hasSummary() && _this.parent.activeChapter + 1 === _this.parent.chapters.length) {
          _this.parent.trigger('viewSummary', eventInput);
        }
      } else if (event.data.direction === 'prev') {
        if (_this.parent.activeChapter > 0) {
          eventInput.chapter = "h5p-interactive-book-chapter-".concat(_this.parent.chapters[_this.parent.activeChapter - 1].instance.subContentId);
        }
      }

      if (eventInput.chapter) {
        _this.parent.trigger('newChapter', eventInput);
      }
    });

    return _this;
  }
  /**
   * Update progress bar.
   *
   * @param {number} chapterId Chapter Id.
   */


  var _proto = StatusBar.prototype;

  _proto.updateProgressBar = function updateProgressBar(chapter) {
    var barWidth = "".concat(chapter / this.totalChapters * 100, "%");
    this.progressBar.progress.style.width = barWidth;
    var title = this.params.a11y.progress.replace('@page', chapter).replace('@total', this.totalChapters);
    this.progressBar.progress.title = title;
  }
  /**
   * Update aria label of progress text
   * @param {number} chapterId Index of chapter
   */
  ;

  _proto.updateA11yProgress = function updateA11yProgress(chapterId) {
    this.progressIndicator.hiddenButRead.innerHTML = this.params.a11y.progress.replace('@page', chapterId).replace('@total', this.totalChapters);
  }
  /**
   * Update status bar.
   */
  ;

  _proto.updateStatusBar = function updateStatusBar() {
    var currentChapter = this.parent.getActiveChapter() + 1;
    var chapterTitle = this.parent.chapters[currentChapter - 1].title;
    this.progressIndicator.current.innerHTML = currentChapter;
    this.updateA11yProgress(currentChapter);
    this.updateProgressBar(currentChapter);
    this.chapterTitle.text.innerHTML = chapterTitle;
    this.chapterTitle.text.setAttribute('title', chapterTitle); //assure that the buttons are valid in terms of chapter edges

    if (this.parent.activeChapter <= 0) {
      this.setButtonStatus('Previous', true);
    } else {
      this.setButtonStatus('Previous', false);
    }

    if (this.parent.activeChapter + 1 >= this.totalChapters) {
      this.setButtonStatus('Next', true);
    } else {
      this.setButtonStatus('Next', false);
    }
  }
  /**
   * Add traversal buttons for sequential travel (next and previous chapter)
   */
  ;

  _proto.addArrows = function addArrows() {
    var _this2 = this;

    var acm = {}; // Initialize elements

    acm.buttonPrevious = document.createElement('div');
    acm.buttonPrevious.classList.add('navigation-button');
    acm.buttonPrevious.classList.add('icon-previous');
    acm.buttonPrevious.setAttribute('title', this.params.l10n.previousPage);
    acm.buttonWrapperPrevious = document.createElement('button');
    acm.buttonWrapperPrevious.classList.add('h5p-interactive-book-status-arrow');
    acm.buttonWrapperPrevious.classList.add('h5p-interactive-book-status-button');

    acm.buttonWrapperPrevious.onclick = function () {
      _this2.trigger('seqChapter', {
        direction: 'prev',
        toTop: true
      });
    };

    acm.buttonWrapperPrevious.appendChild(acm.buttonPrevious);
    acm.buttonNext = document.createElement('div');
    acm.buttonNext.classList.add('navigation-button');
    acm.buttonNext.classList.add('icon-next');
    acm.buttonNext.setAttribute('title', this.params.l10n.nextPage);
    acm.buttonWrapperNext = document.createElement('button');
    acm.buttonWrapperNext.classList.add('h5p-interactive-book-status-arrow');
    acm.buttonWrapperNext.classList.add('h5p-interactive-book-status-button');

    acm.buttonWrapperNext.onclick = function () {
      _this2.trigger('seqChapter', {
        direction: 'next',
        toTop: true
      });
    };

    acm.buttonWrapperNext.appendChild(acm.buttonNext);
    return acm;
  }
  /**
   * Add a menu button which hides and shows the navigation bar.
   *
   * @return {HTMLElement} Button node.
   */
  ;

  _proto.createMenuToggleButton = function createMenuToggleButton() {
    var _this3 = this;

    var button = document.createElement('a');
    button.classList.add('icon-menu');
    var buttonWrapperMenu = document.createElement('button');
    buttonWrapperMenu.classList.add('h5p-interactive-book-status-menu');
    buttonWrapperMenu.classList.add('h5p-interactive-book-status-button');
    buttonWrapperMenu.title = this.params.a11y.menu;
    buttonWrapperMenu.setAttribute('aria-expanded', 'false');
    buttonWrapperMenu.setAttribute('aria-controls', 'h5p-interactive-book-navigation-menu');

    buttonWrapperMenu.onclick = function () {
      _this3.parent.trigger('toggleMenu');
    };

    buttonWrapperMenu.appendChild(button);
    return buttonWrapperMenu;
  }
  /**
   * Check if menu is active/open
   *
   * @return {boolean}
   */
  ;

  _proto.isMenuOpen = function isMenuOpen() {
    return this.menuToggleButton.classList.contains('h5p-interactive-book-status-menu-active');
  }
  /**
   * Add progress bar.
   *
   * @return {object} Progress bar elements.
   */
  ;

  _proto.createProgressBar = function createProgressBar() {
    var progress = document.createElement('div');
    progress.classList.add('h5p-interactive-book-status-progressbar-front');
    progress.setAttribute('tabindex', '-1');
    var wrapper = document.createElement('div');
    wrapper.classList.add('h5p-interactive-book-status-progressbar-back');
    wrapper.appendChild(progress);
    return {
      wrapper: wrapper,
      progress: progress
    };
  }
  /**
   * Add a paragraph which indicates which chapter is active.
   *
   * @return {object} Chapter title elements.
   */
  ;

  _proto.addChapterTitle = function addChapterTitle() {
    var text = document.createElement('h1');
    text.classList.add('title');
    var wrapper = document.createElement('div');
    wrapper.classList.add('h5p-interactive-book-status-chapter');
    wrapper.appendChild(text);
    return {
      wrapper: wrapper,
      text: text
    };
  }
  /**
   * Add a button which scrolls to the top of the page.
   *
   * @return {HTMLElement} Button.
   */
  ;

  _proto.createToTopButton = function createToTopButton() {
    var _this4 = this;

    var button = document.createElement('div');
    button.classList.add('icon-up');
    button.classList.add('navigation-button');
    var wrapper = document.createElement('button');
    wrapper.classList.add('h5p-interactive-book-status-to-top');
    wrapper.classList.add('h5p-interactive-book-status-button');
    wrapper.classList.add('h5p-interactive-book-status-arrow');
    wrapper.setAttribute('title', this.params.l10n.navigateToTop);

    wrapper.onclick = function () {
      _this4.parent.trigger('scrollToTop');
    };

    wrapper.appendChild(button);
    return wrapper;
  }
  /**
   * Set the visibility.
   *
   * @param {boolean} hide True will hide the bar.
   */
  ;

  _proto.setVisibility = function setVisibility(hide) {
    if (hide) {
      this.wrapper.classList.add('footer-hidden');
    } else {
      this.wrapper.classList.remove('footer-hidden');
    }
  }
  /**
   * Add a status-button which shows current and total chapters.
   *
   * @return {object} Progress elements.
   */
  ;

  _proto.createProgressIndicator = function createProgressIndicator() {
    var current = document.createElement('span');
    current.classList.add('h5p-interactive-book-status-progress-number');
    current.setAttribute('aria-hidden', 'true');
    var divider = document.createElement('span');
    divider.classList.add('h5p-interactive-book-status-progress-divider');
    divider.innerHTML = ' / ';
    divider.setAttribute('aria-hidden', 'true');
    var total = document.createElement('span');
    total.classList.add('h5p-interactive-book-status-progress-number');
    total.innerHTML = this.totalChapters;
    total.setAttribute('aria-hidden', 'true');
    var hiddenButRead = document.createElement('p');
    hiddenButRead.classList.add('hidden-but-read');
    var progressText = document.createElement('p');
    progressText.classList.add('h5p-interactive-book-status-progress');
    progressText.appendChild(current);
    progressText.appendChild(divider);
    progressText.appendChild(total);
    progressText.appendChild(hiddenButRead);
    var wrapper = document.createElement('div');
    wrapper.appendChild(progressText);
    return {
      wrapper: wrapper,
      current: current,
      total: total,
      divider: divider,
      progressText: progressText,
      hiddenButRead: hiddenButRead
    };
  }
  /**
   * Edit button state on both the top and bottom bar.
   *
   * @param {string} target Prev or Next.
   * @param {boolean} disable True will disable the target button.
   */
  ;

  _proto.setButtonStatus = function setButtonStatus(target, disable) {
    if (disable) {
      this.arrows['buttonWrapper' + target].setAttribute('disabled', 'disabled');
      this.arrows['button' + target].classList.add('disabled');
    } else {
      this.arrows['buttonWrapper' + target].removeAttribute('disabled');
      this.arrows['button' + target].classList.remove('disabled');
    }
  }
  /**
   * Creates the fullscreen button.
   *
   * @returns {Element} The button dom element
   */
  ;

  _proto.createFullScreenButton = function createFullScreenButton() {
    var _this5 = this;

    var toggleFullScreen = function toggleFullScreen() {
      if (H5P.isFullscreen === true) {
        H5P.exitFullScreen();
      } else {
        H5P.fullScreen(_this5.parent.mainWrapper, _this5.parent);
      }
    };

    var fullScreenButton = document.createElement('button');
    fullScreenButton.classList.add('h5p-interactive-book-status-fullscreen');
    fullScreenButton.classList.add('h5p-interactive-book-status-button');
    fullScreenButton.classList.add('h5p-interactive-book-enter-fullscreen');
    fullScreenButton.setAttribute('title', this.params.l10n.fullscreen);
    fullScreenButton.setAttribute('aria-label', this.params.l10n.fullscreen);
    fullScreenButton.addEventListener('click', toggleFullScreen);
    fullScreenButton.addEventListener('keyPress', function (event) {
      if (event.which === 13 || event.which === 32) {
        toggleFullScreen();
        event.preventDefault();
      }
    });
    this.parent.on('enterFullScreen', function () {
      _this5.parent.isFullscreen = true;
      fullScreenButton.classList.remove('h5p-interactive-book-enter-fullscreen');
      fullScreenButton.classList.add('h5p-interactive-book-exit-fullscreen');
      fullScreenButton.setAttribute('title', _this5.params.l10n.exitFullscreen);
      fullScreenButton.setAttribute('aria-label', _this5.params.l10n.exitFullScreen);

      _this5.parent.pageContent.updateFooter();
    });
    this.parent.on('exitFullScreen', function () {
      _this5.parent.isFullscreen = false;
      fullScreenButton.classList.remove('h5p-interactive-book-exit-fullscreen');
      fullScreenButton.classList.add('h5p-interactive-book-enter-fullscreen');
      fullScreenButton.setAttribute('title', _this5.params.l10n.fullscreen);
      fullScreenButton.setAttribute('aria-label', _this5.params.l10n.fullscreen);

      _this5.parent.pageContent.updateFooter();
    });
    return fullScreenButton;
  };

  return StatusBar;
}(H5P.EventDispatcher);

/* harmony default export */ __webpack_exports__["default"] = (StatusBar);

/***/ }),

/***/ "./src/scripts/summary.js":
/*!********************************!*\
  !*** ./src/scripts/summary.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery_circle_progress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery-circle-progress */ "./node_modules/jquery-circle-progress/dist/circle-progress.js");
/* harmony import */ var jquery_circle_progress__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery_circle_progress__WEBPACK_IMPORTED_MODULE_0__);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Summary = /*#__PURE__*/function (_H5P$EventDispatcher) {
  _inheritsLoose(Summary, _H5P$EventDispatcher);

  /**
   * @constructor
   *
   * @param {object} config
   * @param {object} parent
   * @param {object} params
   */
  function Summary(config, parent, chapters) {
    var _this;

    _this = _H5P$EventDispatcher.call(this) || this;
    _this.parent = parent;
    _this.behaviour = config.behaviour;
    _this.l10n = config.l10n;
    _this.chapters = chapters || [];
    _this.subContentId = 'summary';
    _this.wrapper = null;
    _this.summaryMenuButton = _this.createSummaryButton();
    _this.filterActionAll = 'all';
    _this.filterActionUnanswered = 'unanswered';
    _this.bookCompleted = false;
    parent.on('bookCompleted', function (event) {
      return _this.setBookComplete(event.data.completed);
    });
    parent.on('toggleMenu', function () {
      var footer = document.querySelector('.h5p-interactive-book-summary-footer');

      if (footer && _this.bookCompleted) {
        if (_this.parent.isMenuOpen()) {
          footer.classList.add('menu-open');
        } else {
          footer.classList.remove('menu-open');
        }
      }
    });
    return _this;
  }
  /**
   *
   * @param {boolean} complete
   */


  var _proto = Summary.prototype;

  _proto.setBookComplete = function setBookComplete(complete) {
    var summaryFooter = this.parent.mainWrapper[0].querySelector('.h5p-interactive-book-summary-footer');

    if (!summaryFooter && this.parent.isSmallSurface()) {
      summaryFooter = document.createElement("div");
      summaryFooter.classList.add('h5p-interactive-book-summary-footer');
      summaryFooter.appendChild(this.createSummaryButton());
      this.parent.mainWrapper.append(summaryFooter);
    }

    if (summaryFooter && complete) {
      setTimeout(function () {
        return summaryFooter.classList.add('show-footer');
      }, 0);
    }

    this.bookCompleted = complete;
    Array.from(document.querySelectorAll('.h5p-interactive-book-summary-menu-button')).forEach(function (button) {
      return button.setAttribute('data-book-completed', complete.toString());
    });
  }
  /**
   * Set chapters for the summary
   * @param chapters
   */
  ;

  _proto.setChapters = function setChapters(chapters) {
    this.chapters = Array.isArray(chapters) ? chapters : [];
  }
  /**
   * Enable/disable the summary button
   *
   * @param disabled
   */
  ;

  _proto.setSummaryMenuButtonDisabled = function setSummaryMenuButtonDisabled() {
    var disabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    this.summaryMenuButton.disabled = disabled;
  }
  /**
   * Apply the filter of resources in the summary
   *
   * @param filter
   */
  ;

  _proto.setFilter = function setFilter(filter) {
    var _this2 = this;

    var overviewList = this.wrapper.querySelector('.h5p-interactive-book-summary-overview-list');
    var sectionList = Array.from(overviewList.querySelectorAll('.h5p-interactive-book-summary-overview-section'));
    sectionList.forEach(function (section) {
      section.classList.remove('h5p-interactive-book-summary-top-section');
      section.classList.remove('h5p-interactive-book-summary-bottom-section');
    });
    var emptyContainer = overviewList.querySelector('.h5p-interactive-book-summary-overview-list-empty');
    emptyContainer.style.display = 'none';

    if (filter === this.filterActionUnanswered) {
      overviewList.classList.add('h5p-interactive-book-summary-overview-list-only-unanswered');
      var filteredSectionList = sectionList.filter(function (section) {
        return !section.classList.contains('h5p-interactive-book-summary-no-interactions');
      });

      if (filteredSectionList.length) {
        filteredSectionList[0].classList.add('h5p-interactive-book-summary-top-section');
        filteredSectionList[filteredSectionList.length - 1].classList.add('h5p-interactive-book-summary-bottom-section');
      } else {
        emptyContainer.style.display = 'block';
      }
    } else if (filter === this.filterActionAll) {
      overviewList.classList.remove('h5p-interactive-book-summary-overview-list-only-unanswered');
    }

    setTimeout(function () {
      return _this2.trigger('resize');
    }, 1);
  }
  /**
   *  Create a "Summary & Submit" button
   *
   * @return {HTMLButtonElement}
   */
  ;

  _proto.createSummaryButton = function createSummaryButton() {
    var _this3 = this;

    var button = document.createElement('button');
    button.classList.add('h5p-interactive-book-summary-menu-button');

    button.onclick = function () {
      var newChapter = {
        h5pbookid: _this3.parent.contentId,
        chapter: "h5p-interactive-book-chapter-summary",
        section: "top"
      };

      _this3.parent.trigger('newChapter', newChapter);

      if (_this3.parent.isMenuOpen() && _this3.parent.isSmallSurface()) {
        _this3.parent.trigger('toggleMenu');
      }
    }; //button.disabled = true;


    var paperIcon = document.createElement('span');
    paperIcon.classList.add('h5p-interactive-book-summary-icon');
    paperIcon.classList.add('icon-paper');
    paperIcon.setAttribute('aria-hidden', "true");
    var text = document.createElement('span');
    text.classList.add('h5p-interactive-book-summary-text');
    text.innerHTML = this.l10n.summaryAndSubmit;
    var arrowIcon = document.createElement('span');
    arrowIcon.classList.add('h5p-interactive-book-summary-menu-button-arrow');
    arrowIcon.classList.add('icon-up');
    arrowIcon.setAttribute('aria-hidden', "true");
    button.appendChild(paperIcon);
    button.appendChild(text);
    button.appendChild(arrowIcon);
    return button;
  }
  /**
   * Create the process circle
   *
   * @param progress
   * @return {HTMLDivElement}
   */
  ;

  _proto.createCircle = function createCircle(progress) {
    var circleProgress = document.createElement("div");
    circleProgress.classList.add('h5p-interactive-book-summary-progress-circle');
    circleProgress.setAttribute('data-value', progress);
    circleProgress.setAttribute('data-start-angle', -Math.PI / 3);
    circleProgress.setAttribute('data-thickness', 13);
    circleProgress.setAttribute('data-empty-fill', "rgba(45, 122, 210, .1)");
    circleProgress.setAttribute('data-fill', JSON.stringify({
      color: '#2d7ad2'
    }));
    return circleProgress;
  }
  /**
   * Create a progress box used at the top of the summary
   *
   * @param title
   * @param smallText
   * @param progressCounter
   * @param progressTotal
   * @param {boolean} [isAbsoluteValues] Use absolute values for progress instead of percentage
   * @param {number} [smallProgress] Progress for small text if it differs from the progress counter
   * @param {number} [smallProgressTotal] Total progress for small text if it differs from the total progress counter
   * @return {HTMLDivElement}
   */
  ;

  _proto.createProgress = function createProgress(title, smallText, progressCounter, progressTotal) {
    var isAbsoluteValues = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    var smallProgress = arguments.length > 5 ? arguments[5] : undefined;
    var smallProgressTotal = arguments.length > 6 ? arguments[6] : undefined;
    var box = document.createElement("div");
    var header = document.createElement("h3");
    header.innerHTML = title;
    var progressPercentage = progressCounter * 100 / progressTotal;

    if (smallProgress === undefined) {
      smallProgress = progressCounter;
    }

    if (smallProgressTotal === undefined) {
      smallProgressTotal = progressTotal;
    }

    var progressBigText = document.createElement("p");
    progressBigText.classList.add('h5p-interactive-book-summary-progressbox-bigtext');
    progressBigText.innerHTML = Math.round(progressPercentage) + '%';

    if (isAbsoluteValues) {
      var progress = document.createElement('span');
      progress.classList.add('absolute-value');
      progress.innerHTML = progressCounter;
      var separator = document.createElement('span');
      separator.classList.add('separator');
      separator.innerHTML = '/';
      var total = document.createElement('span');
      total.classList.add('absolute-value');
      total.innerHTML = progressTotal;
      progressBigText.innerHTML = '';
      progressBigText.appendChild(progress);
      progressBigText.appendChild(separator);
      progressBigText.appendChild(total);
    }

    var progressSmallText = document.createElement("span");
    progressSmallText.classList.add('h5p-interactive-book-summary-progressbox-smalltext');
    progressSmallText.innerHTML = smallText.replace('@count', smallProgress).replace('@total', smallProgressTotal);
    box.appendChild(header);
    box.appendChild(progressBigText);
    box.appendChild(progressSmallText);
    var container = document.createElement("div");
    container.appendChild(box);
    container.appendChild(this.createCircle(progressCounter / progressTotal));
    return container;
  }
  /**
   * Create total score progress container
   *
   * @returns {HTMLDivElement}
   */
  ;

  _proto.addScoreProgress = function addScoreProgress() {
    var totalInteractions = 0,
        uncompletedInteractions = 0;

    var _iterator = _createForOfIteratorHelper(this.chapters),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var chapter = _step.value;
        totalInteractions += chapter.maxTasks;
        uncompletedInteractions += chapter.tasksLeft;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    var box = this.createProgress(this.l10n.totalScoreLabel, this.l10n.interactionsProgressSubtext, this.parent.getScore(), this.parent.getMaxScore(), true, Math.max(totalInteractions - uncompletedInteractions, 0), totalInteractions);
    box.classList.add('h5p-interactive-book-summary-progress-container');
    box.classList.add('h5p-interactive-book-summary-score-progress');
    var circle = box.querySelector('.h5p-interactive-book-summary-progress-circle');
    circle.setAttribute('data-empty-fill', "rgb(198, 220, 212)");
    circle.setAttribute('data-fill', JSON.stringify({
      color: '#0e7c57'
    }));
    return box;
  }
  /**
   * Creates the book progress container
   *
   * @return {HTMLDivElement}
   */
  ;

  _proto.addBookProgress = function addBookProgress() {
    var box = this.createProgress(this.l10n.bookProgress, this.l10n.bookProgressSubtext, this.chapters.filter(function (chapter) {
      return chapter.completed;
    }).length, this.chapters.length);
    box.classList.add("h5p-interactive-book-summary-progress-container");
    box.classList.add("h5p-interactive-book-summary-book-progress");
    return box;
  }
  /**
   * Creates the interactions progress container
   *
   * @return {HTMLDivElement}
   */
  ;

  _proto.addInteractionsProgress = function addInteractionsProgress() {
    var totalInteractions = 0,
        uncompletedInteractions = 0;

    var _iterator2 = _createForOfIteratorHelper(this.chapters),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var chapter = _step2.value;
        totalInteractions += chapter.maxTasks;
        uncompletedInteractions += chapter.tasksLeft;
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    var box = this.createProgress(this.l10n.interactionsProgress, this.l10n.interactionsProgressSubtext, Math.max(totalInteractions - uncompletedInteractions, 0), totalInteractions);
    box.classList.add("h5p-interactive-book-summary-progress-container");
    box.classList.add("h5p-interactive-book-summary-interactions-progress");
    return box;
  }
  /**
   * Grouping function that creates all the progress containers, if the settings allow it
   */
  ;

  _proto.addProgressIndicators = function addProgressIndicators() {
    if (!this.behaviour.progressIndicators) {
      return;
    }

    var progressBox = document.createElement("div");
    progressBox.classList.add('h5p-interactive-box-summary-progress');
    progressBox.appendChild(this.addScoreProgress());
    progressBox.appendChild(this.addBookProgress());
    progressBox.appendChild(this.addInteractionsProgress());
    setTimeout(function () {
      return H5P.jQuery('.h5p-interactive-book-summary-progress-circle').circleProgress();
    }, 100);
    this.wrapper.appendChild(progressBox);
  }
  /**
   * Add the container with the action buttons
   */
  ;

  _proto.addActionButtons = function addActionButtons() {
    var _this4 = this;

    var wrapper = document.createElement("div");
    wrapper.classList.add('h5p-interactive-book-summary-buttons');

    if (H5PIntegration.reportingIsEnabled) {
      var submitButton = this.addButton('icon-paper-pencil', this.l10n.submitReport);
      submitButton.classList.add('h5p-interactive-book-summary-submit');

      submitButton.onclick = function () {
        _this4.trigger('submitted');

        _this4.parent.triggerXAPIScored(_this4.parent.getScore(), _this4.parent.getMaxScore(), 'completed');

        wrapper.classList.add('submitted');
      };

      wrapper.appendChild(submitButton);
    }

    wrapper.appendChild(this.createRestartButton());
    wrapper.appendChild(this.createSubmittedConfirmation());
    this.wrapper.appendChild(wrapper);
  }
  /**
   * Create the restart button
   * @return {HTMLButtonElement}
   */
  ;

  _proto.createRestartButton = function createRestartButton() {
    var _this5 = this;

    var restartButton = this.addButton('icon-restart', this.l10n.restartLabel);
    restartButton.classList.add('h5p-interactive-book-summary-restart');

    restartButton.onclick = function () {
      return _this5.parent.resetTask();
    };

    return restartButton;
  }
  /**
   * Create the confirmation box displayed after the user submits the report
   * @return {HTMLDivElement}
   */
  ;

  _proto.createSubmittedConfirmation = function createSubmittedConfirmation() {
    var submittedContainer = document.createElement("div");
    submittedContainer.classList.add('h5p-interactive-book-summary-submitted');
    var icon = document.createElement("span");
    icon.classList.add('icon-chapter-done');
    icon.classList.add('icon-check-mark');
    submittedContainer.appendChild(icon);
    var text = document.createElement("p");
    text.innerHTML = this.l10n.yourAnswersAreSubmittedForReview;
    submittedContainer.appendChild(text);
    submittedContainer.appendChild(this.createRestartButton());
    return submittedContainer;
  }
  /**
   * Function to create the actual button element used for the action buttons
   *
   * @param iconClass
   * @param label
   * @return {HTMLButtonElement}
   */
  ;

  _proto.addButton = function addButton(iconClass, label) {
    var buttonElement = document.createElement("button");
    buttonElement.type = 'button';
    buttonElement.classList.add('h5p-interactive-book-summary-button');
    buttonElement.innerHTML = label;
    var icon = document.createElement("span");
    icon.classList.add(iconClass);
    icon.setAttribute('aria-hidden', "true");
    buttonElement.appendChild(icon);
    return buttonElement;
  }
  /**
   * Create the overview of the sections
   *
   * @param sections
   * @param chapterId
   * @return {{hasUnansweredInteractions: boolean, sectionElements: []}}
   */
  ;

  _proto.createSectionList = function createSectionList(sections, chapterId) {
    var _this6 = this;

    var sectionElements = [],
        hasUnansweredInteractions = false;

    var _iterator3 = _createForOfIteratorHelper(sections),
        _step3;

    try {
      var _loop = function _loop() {
        var section = _step3.value;
        var sectionRow = document.createElement("li");
        sectionRow.classList.add('h5p-interactive-book-summary-overview-section-details');

        if (_this6.behaviour.progressIndicators) {
          var icon = document.createElement("span");
          icon.classList.add('h5p-interactive-book-summary-section-icon');
          icon.classList.add(section.taskDone ? 'icon-chapter-done' : 'icon-chapter-blank');
          sectionRow.appendChild(icon);
        }

        var title = document.createElement("button");
        title.type = "button";
        title.classList.add('h5p-interactive-book-summary-section-title');

        title.onclick = function () {
          var newChapter = {
            h5pbookid: _this6.parent.contentId,
            chapter: "h5p-interactive-book-chapter-".concat(chapterId),
            section: "h5p-interactive-book-section-".concat(section.instance.subContentId)
          };

          _this6.parent.trigger("newChapter", newChapter);
        }; // We can't expect the content type to always have set contentData as a property on their instance


        var contentDataTitle = section.instance.contentData && section.instance.contentData.metadata && section.instance.contentData.metadata.title; // Try to get title from params

        var metadataTitle = section.content && section.content.metadata && section.content.metadata.title;
        title.innerHTML = contentDataTitle ? contentDataTitle : metadataTitle ? metadataTitle : 'Untitled';
        var score = document.createElement("div");
        score.classList.add('h5p-interactive-book-summary-section-score');
        score.innerHTML = '-';

        if (typeof section.instance.getScore === 'function') {
          score.innerHTML = _this6.l10n.scoreText.replace('@score', section.instance.getScore()).replace('@maxscore', section.instance.getMaxScore());
        }

        if (section.taskDone) {
          sectionRow.classList.add('h5p-interactive-book-summary-overview-section-details-task-done');
        } else {
          hasUnansweredInteractions = true;
        }

        sectionRow.appendChild(title);
        sectionRow.appendChild(score);
        sectionElements.push(sectionRow);
      };

      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        _loop();
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }

    if (sectionElements.length) {
      var sectionRow = document.createElement("div");
      sectionRow.classList.add('h5p-interactive-book-summary-overview-section-score-header');
      var scoreHeader = document.createElement("div");
      scoreHeader.innerHTML = this.l10n.score;
      sectionRow.appendChild(scoreHeader);
      sectionElements.unshift(sectionRow);
    }

    return {
      hasUnansweredInteractions: hasUnansweredInteractions,
      sectionElements: sectionElements
    };
  }
  /**
   * Create the chapter progress container
   *
   * @param chapter
   * @return {HTMLLIElement}
   */
  ;

  _proto.createChapterOverview = function createChapterOverview(chapter) {
    var _this7 = this;

    var wrapper = document.createElement("li");
    wrapper.classList.add('h5p-interactive-book-summary-overview-section');
    var header = document.createElement("h4");

    header.onclick = function () {
      var newChapter = {
        h5pbookid: _this7.parent.contentId,
        chapter: "h5p-interactive-book-chapter-".concat(chapter.instance.subContentId),
        section: "top"
      };

      _this7.parent.trigger("newChapter", newChapter);
    };

    var chapterTitle = document.createElement("span");
    chapterTitle.innerHTML = chapter.title;
    header.appendChild(chapterTitle);

    if (this.behaviour.progressIndicators) {
      var chapterIcon = document.createElement("span");
      var chapterStatus = this.parent.getChapterStatus(chapter);
      chapterIcon.classList.add("icon-chapter-".concat(chapterStatus.toLowerCase()));
      header.appendChild(chapterIcon);
    }

    wrapper.appendChild(header);

    var _this$createSectionLi = this.createSectionList(chapter.sections.filter(function (section) {
      return section.isTask;
    }), chapter.instance.subContentId),
        sections = _this$createSectionLi.sectionElements,
        hasUnansweredInteractions = _this$createSectionLi.hasUnansweredInteractions;

    if (hasUnansweredInteractions === false) {
      wrapper.classList.add('h5p-interactive-book-summary-no-interactions');
    }

    var sectionSubheader = document.createElement("div");
    sectionSubheader.classList.add('h5p-interactive-book-summary-chapter-subheader');

    if (chapter.maxTasks) {
      sectionSubheader.innerHTML = this.l10n.leftOutOfTotalCompleted.replace('@left', Math.max(chapter.maxTasks - chapter.tasksLeft, 0)).replace('@max', chapter.maxTasks);
    } else {
      sectionSubheader.innerHTML = this.l10n.noInteractions;
    }

    wrapper.appendChild(sectionSubheader);
    var sectionsContainer = document.createElement("ul");

    if (sections.length) {
      sections.map(function (section) {
        return sectionsContainer.appendChild(section);
      });
    }

    wrapper.appendChild(sectionsContainer);
    return wrapper;
  }
  /**
   * Create the dropdown menu to filter sections by interactions
   *
   * @return {HTMLDivElement}
   */
  ;

  _proto.createFilterDropdown = function createFilterDropdown() {
    var _this8 = this;

    var createElement = function createElement(text, value) {
      var listElement = document.createElement("li");
      listElement.role = "menuitem";
      var actionButton = document.createElement("button");
      actionButton.textContent = text;
      actionButton.type = "button";

      actionButton.onclick = function (event) {
        _this8.setFilter(value);

        container.removeAttribute('active');
        selectButton.setAttribute('aria-expanded', "false");
        buttonText.textContent = event.currentTarget.innerHTML;
      };

      listElement.appendChild(actionButton);
      return listElement;
    };

    var container = document.createElement("div");
    container.classList.add('h5p-interactive-book-summary-dropdown');
    var selectButton = document.createElement("button");
    selectButton.setAttribute('aria-haspopup', "true");
    selectButton.setAttribute('aria-expanded', "false");
    selectButton.type = 'button';

    selectButton.onclick = function () {
      if (container.hasAttribute('active')) {
        container.removeAttribute('active');
        selectButton.setAttribute('aria-expanded', "false");
      } else {
        container.setAttribute('active', "");
        selectButton.setAttribute('aria-expanded', "true");
        selectButton.focus();
      }
    };

    var buttonText = document.createElement("span");
    buttonText.textContent = this.l10n.allInteractions;
    selectButton.appendChild(buttonText);
    var caretIcon = document.createElement("span");
    caretIcon.classList.add('h5p-interactive-book-summary-dropdown-icon');
    caretIcon.classList.add('icon-expanded');
    caretIcon.setAttribute('aria-hidden', "true");
    selectButton.appendChild(caretIcon);
    var dropdownMenu = document.createElement("ul");
    dropdownMenu.role = "menu";
    dropdownMenu.classList.add('h5p-interactive-book-summary-dropdown-menu');
    var allInteractions = createElement(this.l10n.allInteractions, this.filterActionAll);
    var unansweredInteractions = createElement(this.l10n.unansweredInteractions, this.filterActionUnanswered);
    dropdownMenu.appendChild(allInteractions);
    dropdownMenu.appendChild(unansweredInteractions);
    container.appendChild(selectButton);
    container.appendChild(dropdownMenu);
    return container;
  }
  /**
   * Add the container for the list of chapters and sections
   */
  ;

  _proto.addSummaryOverview = function addSummaryOverview() {
    var wrapper = document.createElement("ul");
    wrapper.classList.add('h5p-interactive-book-summary-list');
    var summaryHeader = document.createElement("li");
    summaryHeader.classList.add('h5p-interactive-book-summary-overview-header');
    var header = document.createElement("h3");
    header.innerHTML = this.l10n.summaryHeader;
    summaryHeader.appendChild(header);
    summaryHeader.appendChild(this.createFilterDropdown());
    wrapper.appendChild(summaryHeader);
    var summaryList = document.createElement("ol");
    summaryList.classList.add('h5p-interactive-book-summary-overview-list');

    var _iterator4 = _createForOfIteratorHelper(this.chapters),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var chapter = _step4.value;
        summaryList.appendChild(this.createChapterOverview(chapter));
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }

    var emptySummaryList = document.createElement("p");
    emptySummaryList.classList.add('h5p-interactive-book-summary-overview-list-empty');
    emptySummaryList.classList.add('h5p-interactive-book-summary-top-section');
    emptySummaryList.classList.add('h5p-interactive-book-summary-bottom-section');
    emptySummaryList.innerHTML = this.l10n.noInteractions;
    summaryList.appendChild(emptySummaryList);
    wrapper.appendChild(summaryList);
    this.wrapper.appendChild(wrapper);
  }
  /**
   * Add the score bar for the book
   */
  ;

  _proto.addScoreBar = function addScoreBar() {
    var scorebar = document.createElement("div");
    scorebar.classList.add('h5p-interactive-book-summary-score-bar');
    var scoreBar = H5P.JoubelUI.createScoreBar(this.parent.getMaxScore());
    scoreBar.setScore(this.parent.getScore());
    scoreBar.appendTo(scorebar);
    this.wrapper.appendChild(scorebar);
  }
  /**
   * Add a container to display when no interactions are made in the book
   */
  ;

  _proto.noChapterInteractions = function noChapterInteractions() {
    var wrapper = document.createElement("div");
    wrapper.classList.add('h5p-interactive-book-summary-no-chapter-interactions');
    var boldText = document.createElement('p');
    boldText.innerHTML = this.l10n.noChapterInteractionBoldText;
    var normalText = document.createElement('p');
    normalText.classList.add('h5p-interactive-book-summary-no-initialized-chapters');
    normalText.innerHTML = this.l10n.noChapterInteractionText;
    wrapper.appendChild(boldText);
    wrapper.appendChild(normalText);
    this.wrapper.appendChild(wrapper);
  }
  /**
   * Add the summary page to a container
   *
   * @param {jQuery} container
   * @return {jQuery}
   */
  ;

  _proto.addSummaryPage = function addSummaryPage(container) {
    this.wrapper = document.createElement('div');
    this.wrapper.classList.add('h5p-interactive-book-summary-page');

    if (this.chapters.filter(function (chapter) {
      return chapter.isInitialized;
    }).length > 0) {
      this.addProgressIndicators();
      this.addActionButtons();
      this.addSummaryOverview();
      this.addScoreBar();
    } else {
      this.noChapterInteractions();
    }

    Array.from(document.querySelectorAll('.h5p-interactive-book-summary-footer')).forEach(function (element) {
      return element.remove();
    });
    container.append(this.wrapper);
    return container;
  };

  return Summary;
}(H5P.EventDispatcher);

/* harmony default export */ __webpack_exports__["default"] = (Summary);

/***/ }),

/***/ "./src/scripts/urltools.js":
/*!*********************************!*\
  !*** ./src/scripts/urltools.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** Class representing URL related functions */
var URLTools = /*#__PURE__*/function () {
  function URLTools() {}

  /**
   * Extract fragments from browser URL.
   *
   * @return {object} Fragments.
   */
  URLTools.extractFragmentsFromURL = function extractFragmentsFromURL(validate, hashWindow) {
    if (!hashWindow.location.hash) {
      return {};
    } // Convert fragment string to object with properties


    var fragments = {};
    hashWindow.location.hash.replace('#', '').split('&').forEach(function (fragment) {
      if (fragment.indexOf('=') === -1) {
        return; // Skip if incomplete pair
      }

      var argPair = fragment.split('=');
      fragments[argPair[0]] = argPair[1];
    }); // Optionally validate and ignore fragments

    if (typeof validate === 'function' && !validate(fragments)) {
      return {};
    }

    return fragments;
  }
  /**
   * Create fragments string from fragments object.
   *
   * @param {object} fragments Fragments.
   * @return {string} Fragments string.
   */
  ;

  URLTools.createFragmentsString = function createFragmentsString(fragments) {
    var parts = [];

    for (var fragment in fragments) {
      parts.push("".concat(fragment, "=").concat(fragments[fragment]));
    }

    return "#".concat(parts.join('&'));
  }
  /**
   * Determine whether two fragment objects are equal.
   *
   * @param {object} fragment1 Fragment 1.
   * @param {object} fragment2 Fragment 2.
   * @param {string[]} [limitTo] Keys to limit equality check to.
   * @return {boolean} True, if fragments are equal.
   */
  ;

  URLTools.areFragmentsEqual = function areFragmentsEqual(fragment1, fragment2) {
    var limitTo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    for (var key in fragment1) {
      if (fragment1.hasOwnProperty(key)) {
        if (limitTo.length > 0 && limitTo.indexOf(key) === -1) {
          continue;
        }

        if (!fragment2[key] || fragment1[key].toString() !== fragment2[key].toString()) {
          return false;
        }
      }
    }

    return true;
  };

  return URLTools;
}();

/* harmony default export */ __webpack_exports__["default"] = (URLTools);

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../node_modules/style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../node_modules/style-loader/addStyles.js */ "./node_modules/style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "jquery":
/*!*****************************!*\
  !*** external "H5P.jQuery" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = H5P.jQuery;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3VybC1lc2NhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VsZW1lbnQtc2Nyb2xsLXBvbHlmaWxsL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9qcXVlcnktY2lyY2xlLXByb2dyZXNzL2Rpc3QvY2lyY2xlLXByb2dyZXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9lbnRyaWVzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZvbnRzL2g1cC1pbnRlcmFjdGl2ZS1ib29rLmVvdCIsIndlYnBhY2s6Ly8vLi9zcmMvZm9udHMvaDVwLWludGVyYWN0aXZlLWJvb2suc3ZnIiwid2VicGFjazovLy8uL3NyYy9mb250cy9oNXAtaW50ZXJhY3RpdmUtYm9vay50dGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZvbnRzL2g1cC1pbnRlcmFjdGl2ZS1ib29rLndvZmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NvdmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3BhZ2Vjb250ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc3RhdHVzYmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3N1bW1hcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvdXJsdG9vbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9tYWluLnNjc3M/NWVhNiIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3N0eWxlLnNjc3M/YTdmOSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJINVAualF1ZXJ5XCIiXSwibmFtZXMiOlsiSDVQIiwiSW50ZXJhY3RpdmVCb29rIiwiY29uZmlnIiwiY29udGVudElkIiwiY29udGVudERhdGEiLCJzZWxmIiwiYWN0aXZlQ2hhcHRlciIsIm5ld0hhbmRsZXIiLCJjb21wbGV0ZWQiLCJwYXJhbXMiLCJzYW5pdGl6ZUNvbmZpZyIsImwxMG4iLCJiZWhhdmlvdXIiLCJtYWluV3JhcHBlciIsImN1cnJlbnRSYXRpbyIsInNtYWxsU3VyZmFjZSIsIm1lZGl1bVN1cmZhY2UiLCJsYXJnZVN1cmZhY2UiLCJjaGFwdGVycyIsImVuYWJsZVNvbHV0aW9uc0J1dHRvbiIsImVuYWJsZVJldHJ5IiwiZ2V0QW5zd2VyR2l2ZW4iLCJyZWR1Y2UiLCJhY2N1IiwiY3VycmVudCIsImluc3RhbmNlIiwiZ2V0U2NvcmUiLCJnZXRNYXhTY29yZSIsInNob3dTb2x1dGlvbnMiLCJmb3JFYWNoIiwiY2hhcHRlciIsInRvZ2dsZVJlYWRTcGVha2VyIiwicmVzZXRUYXNrIiwiaGFzVmFsaWRDaGFwdGVycyIsImluZGV4IiwiaXNJbml0aWFsaXplZCIsImlzU3VtbWFyeSIsInRhc2tzTGVmdCIsIm1heFRhc2tzIiwic2VjdGlvbnMiLCJzZWN0aW9uIiwidGFza0RvbmUiLCJzZXRDaGFwdGVyUmVhZCIsInBhZ2VDb250ZW50IiwicmVzZXRDaGFwdGVycyIsInNpZGVCYXIiLCJyZXNldEluZGljYXRvcnMiLCJ0cmlnZ2VyIiwiaDVwYm9va2lkIiwiY29sdW1uTm9kZXMiLCJpZCIsImhhc0NvdmVyIiwiZGlzcGxheUNvdmVyIiwiZ2V0WEFQSURhdGEiLCJ4QVBJRXZlbnQiLCJjcmVhdGVYQVBJRXZlbnRUZW1wbGF0ZSIsImFkZFF1ZXN0aW9uVG9YQVBJIiwic2V0U2NvcmVkUmVzdWx0Iiwic3RhdGVtZW50IiwiZGF0YSIsImNoaWxkcmVuIiwiZ2V0WEFQSURhdGFGcm9tQ2hpbGRyZW4iLCJtYXAiLCJpbnN0YW5jZXMiLCJmaWx0ZXIiLCJkZWZpbml0aW9uIiwiZ2V0VmVyaWZpZWRTdGF0ZW1lbnRWYWx1ZSIsImdldHhBUElEZWZpbml0aW9uIiwiaW50ZXJhY3Rpb25UeXBlIiwidHlwZSIsImRlc2NyaXB0aW9uIiwiY292ZXIiLCJjb250YWluZXIiLCJoYXNTdW1tYXJ5IiwiaGFzQ2hhcHRlcnNUYXNrcyIsImRpc3BsYXlTdW1tYXJ5IiwiaXNUYXNrIiwibGVuZ3RoIiwiZ2V0QWN0aXZlQ2hhcHRlciIsImdldEFjdHVhbENoYXB0ZXIiLCJzZXRBY3RpdmVDaGFwdGVyIiwiY2hhcHRlcklkIiwicGFyc2VJbnQiLCJpc05hTiIsInZhbGlkYXRlRnJhZ21lbnRzIiwiZnJhZ21lbnRzIiwidW5kZWZpbmVkIiwiU3RyaW5nIiwiYnViYmxlVXAiLCJvcmlnaW4iLCJldmVudE5hbWUiLCJ0YXJnZXQiLCJvbiIsImV2ZW50IiwiYnViYmxpbmdVcHdhcmRzIiwiaXNNZW51T3BlbiIsInN0YXR1c0JhckhlYWRlciIsImlzU21hbGxTdXJmYWNlIiwiaGFzQ2xhc3MiLCJnZXRSYXRpbyIsIndpZHRoIiwicGFyc2VGbG9hdCIsImNzcyIsInNldFdyYXBwZXJDbGFzc0Zyb21SYXRpbyIsIndyYXBwZXIiLCJyYXRpbyIsImJyZWFrcG9pbnRzIiwiaXRlbSIsInNob3VsZEFkZCIsImFkZENsYXNzIiwiY2xhc3NOYW1lIiwicmVtb3ZlQ2xhc3MiLCJyZXNpemUiLCJjdXJyZW50Q2hhcHRlcklkIiwiY3VycmVudE5vZGUiLCJvZmZzZXRQYXJlbnQiLCJjb250ZW50Iiwic3R5bGUiLCJoZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInVwZGF0ZUZvb3RlciIsInNldFRpbWVvdXQiLCJ0b2dnbGVOYXZpZ2F0aW9uTWVudSIsIm1lbnVUb2dnbGVCdXR0b24iLCJzZXRBdHRyaWJ1dGUiLCJ0b2dnbGUiLCJpc0Z1bGxzY3JlZW4iLCJzY3JvbGxCeSIsInNjcm9sbEhlaWdodCIsInNjcm9sbEludG9WaWV3IiwibmV3SGFzaCIsIlVSTFRvb2xzIiwiY3JlYXRlRnJhZ21lbnRzU3RyaW5nIiwicmVkaXJlY3RGcm9tQ29tcG9uZW50IiwiZ2V0Q2hhcHRlcklkIiwiZnJhZ21lbnRzRXF1YWwiLCJhcmVGcmFnbWVudHNFcXVhbCIsImV4dHJhY3RGcmFnbWVudHNGcm9tVVJMIiwiaGFzaFdpbmRvdyIsImNoYW5nZUNoYXB0ZXIiLCJwcm9ncmVzc0F1dG8iLCJpc0ZpbmFsQ2hhcHRlcldpdGhvdXRUYXNrIiwiaXNDdXJyZW50Q2hhcHRlclJlYWQiLCJpc0NoYXB0ZXJSZWFkIiwiYXV0b1Byb2dyZXNzIiwic2xpY2UiLCJjb25jYXQiLCJldmVyeSIsInJlYWQiLCJoYW5kbGVDaGFwdGVyQ29tcGxldGlvbiIsInVwZGF0ZUNoYXB0ZXJQcm9ncmVzc0luZGljYXRvciIsImhhc0NoYXB0ZXJTdGFydGVkVGFza3MiLCJnZXRDaGFwdGVyU3RhdHVzIiwic3RhdHVzIiwidXBkYXRlQ2hhcHRlclByb2dyZXNzIiwiaGFzQ2hhbmdlZENoYXB0ZXIiLCJwcm9ncmVzc0luZGljYXRvcnMiLCJjaGFwdGVyVVVJRCIsInJlcGxhY2UiLCJzdWJDb250ZW50SWQiLCJpbmRleE9mIiwidHJpZ2dlclhBUElTY29yZWQiLCJzaG91bGRGb290ZXJCZUhpZGRlbiIsImdldENvbnRhaW5lcldpZHRoIiwib2Zmc2V0V2lkdGgiLCJyZWRpcmVjdE9uTG9hZCIsInVwZGF0ZVN0YXR1c0JhciIsInN0YXR1c0JhckZvb3RlciIsInBheWxvYWQiLCJyZWRpcmVjdENoYXB0ZXIiLCJsb2NhdGlvbiIsImhhc2giLCJleHRlcm5hbERpc3BhdGNoZXIiLCJhY3Rpb25WZXJicyIsImlzQWN0aW9uVmVyYiIsImdldFZlcmIiLCJzZXRTZWN0aW9uU3RhdHVzQnlJRCIsInNlY3Rpb25VVUlEIiwic2VjdGlvbkluc3RhbmNlIiwic2V0U2VjdGlvbk1hcmtlciIsImFkZEhhc2hMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0b3AiLCJlIiwiRE9NRXhjZXB0aW9uIiwid2luZG93IiwiaGlkZUFsbEVsZW1lbnRzIiwiYXBwZW5kIiwiYXR0YWNoIiwiJHdyYXBwZXIiLCJpc0VkZ2UxOG9yRWFybGllciIsImZpcnN0IiwiZmlyc3RDaGlsZCIsImluc2VydEJlZm9yZSIsImRlZmF1bHRUYWJsZU9mQ29udGVudHMiLCJ1YSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImVkZ2VJbmRleCIsImVkZ2VWZXJzaW9uIiwic3Vic3RyaW5nIiwiaGlkZSIsIm5vZGVzIiwibm9kZSIsImFkZCIsInJlbW92ZSIsInNob3dDb3ZlclBhZ2UiLCJDb3ZlciIsImJvb2tDb3ZlciIsIm1ldGFkYXRhIiwidGl0bGUiLCJjaGlsZENvbnRlbnREYXRhIiwicGFyZW50IiwiUGFnZUNvbnRlbnQiLCJtYXJrQXNGaW5pc2hlZCIsImdldENoYXB0ZXJzIiwiU2lkZUJhciIsIlN0YXR1c0JhciIsImExMXkiLCJkaXNwbGF5RnVsbFNjcmVlbkJ1dHRvbiIsInNldEFjdGl2aXR5U3RhcnRlZCIsInByb2dyZXNzQmFyIiwicHJvZ3Jlc3MiLCJmb2N1cyIsIm9yaWdpbmFsQ29uZmlnIiwiZGlzcGxheVRPQyIsImhpZGVUT0MiLCJuZXh0UGFnZSIsInByZXZpb3VzUGFnZSIsImNoYXB0ZXJDb21wbGV0ZWQiLCJwYXJ0Q29tcGxldGVkIiwiaW5jb21wbGV0ZUNoYXB0ZXIiLCJuYXZpZ2F0ZVRvVG9wIiwiZnVsbHNjcmVlbiIsImV4aXRGdWxsc2NyZWVuIiwiYm9va1Byb2dyZXNzU3VidGV4dCIsImludGVyYWN0aW9uc1Byb2dyZXNzU3VidGV4dCIsInN1Ym1pdFJlcG9ydCIsInJlc3RhcnRMYWJlbCIsInN1bW1hcnlIZWFkZXIiLCJhbGxJbnRlcmFjdGlvbnMiLCJ1bmFuc3dlcmVkSW50ZXJhY3Rpb25zIiwic2NvcmVUZXh0IiwibGVmdE91dE9mVG90YWxDb21wbGV0ZWQiLCJub0ludGVyYWN0aW9ucyIsInNjb3JlIiwic3VtbWFyeUFuZFN1Ym1pdCIsIm5vQ2hhcHRlckludGVyYWN0aW9uQm9sZFRleHQiLCJub0NoYXB0ZXJJbnRlcmFjdGlvblRleHQiLCJ5b3VyQW5zd2Vyc0FyZVN1Ym1pdHRlZEZvclJldmlldyIsImJvb2tQcm9ncmVzcyIsImludGVyYWN0aW9uc1Byb2dyZXNzIiwidG90YWxTY29yZUxhYmVsIiwiRXZlbnREaXNwYXRjaGVyIiwidGl0bGVUZXh0IiwicmVhZFRleHQiLCJjcmVhdGVDb250YWluZXIiLCJjb3ZlckltYWdlIiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVWaXN1YWxzRWxlbWVudCIsImNyZWF0ZVRpdGxlRWxlbWVudCIsImNvdmVyRGVzY3JpcHRpb24iLCJjcmVhdGVEZXNjcmlwdGlvbkVsZW1lbnQiLCJjcmVhdGVSZWFkQnV0dG9uIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidmlzdWFscyIsImNyZWF0ZUltYWdlIiwicGF0aCIsImNvdmVyQWx0VGV4dCIsImNyZWF0ZUNvdmVyQmFyIiwiYWx0VGV4dCIsImltZyIsInNyYyIsImdldFBhdGgiLCJhbHQiLCJjb3ZlckJhciIsImlubmVySFRNTCIsInRpdGxlV3JhcHBlciIsImRlc2NyaXB0aW9uVGV4dCIsImRlc2NyaXB0aW9uRWxlbWVudCIsImJ1dHRvblRleHQiLCJidXR0b24iLCJvbmNsaWNrIiwicmVtb3ZlQ292ZXIiLCJidXR0b25XcmFwcGVyIiwicGFyZW50RWxlbWVudCIsInJlbW92ZUNoaWxkIiwiaGlkZGVuIiwidGFyZ2V0UGFnZSIsInNob3VsZEF1dG9wbGF5Iiwic3RhcnRDaGFwdGVyIiwiY3JlYXRlQ29sdW1ucyIsInByZWxvYWRDaGFwdGVyIiwiY3JlYXRlUGFnZUNvbnRlbnQiLCJoYW5kbGVDaGFwdGVyQ2hhbmdlIiwiaW5jbHVkZVN1bW1hcnkiLCJjb2x1bW5Ob2RlIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImVsZW1lbnQiLCJjaGVja2VkIiwic2V0Q2hhcHRlck9yZGVyIiwiY3VycmVudElkIiwiY3JlYXRlQ2hhcHRlclJlYWRDaGVja2JveCIsImNoZWNrYm94IiwiY2hlY2tUZXh0IiwiaW5qZWN0U2VjdGlvbklkIiwiY29sdW1uQ29udGVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJpIiwiY2hhcHRlckluZGV4IiwiaW5pdGlhbGl6ZUNoYXB0ZXIiLCJzZXRDaGFwdGVycyIsImFkZFN1bW1hcnlQYWdlIiwialF1ZXJ5IiwidXJsRnJhZ21lbnRzIiwib3ZlcnJpZGVQYXJhbWV0ZXJzIiwiaW5zdGFuY2VDb250ZW50RGF0YSIsIm5ld0luc3RhbmNlIiwibmV3UnVubmFibGUiLCJnZXRJbnN0YW5jZXMiLCJjb250ZW50SW5kZXgiLCJDb2x1bW4iLCJwdXNoIiwiU3VtbWFyeSIsImZpbmRDaGFwdGVySW5kZXgiLCJoZWFkZXJOdW1iZXIiLCJyZWRpcmVjdFNlY3Rpb24iLCJnZXRFbGVtZW50QnlJZCIsImhlYWRlcnMiLCJmb2N1c0hhbmRsZXIiLCJwYXJlbnROb2RlIiwicG9zaXRpb24iLCJjaGFwdGVySWRPbGQiLCJjaGFwdGVySWROZXciLCJvbGRDaGFwdGVyIiwidGFyZ2V0Q2hhcHRlciIsImRpcmVjdGlvbiIsInJlZGlyZWN0SGFuZGxlciIsImNvbHVtbiIsIm1vdmVGb290ZXJJbnNpZGVDb250ZW50IiwiY2xpZW50SGVpZ2h0IiwiZm9vdGVyUGFyZW50IiwibmV3SWQiLCJvbGRJZCIsInBhdXNlTWVkaWEiLCJwbGF5IiwiaGFzQXV0b3BsYXkiLCJwcmV2ZW50IiwiYXV0b3BsYXkiLCJwbGF5YmFjayIsIm1lZGlhIiwicGF1c2UiLCJGdW5jdGlvbiIsInZpZGVvIiwic3RvcCIsImVyciIsImVycm9yIiwibWFpblRpdGxlIiwiYWRkU2lkZUJhciIsImZpbmRBbGxDaGFwdGVycyIsImNoYXB0ZXJOb2RlcyIsImdldENoYXB0ZXJOb2RlcyIsInRpdGxlRWxlbSIsImFkZE1haW5UaXRsZSIsImFkZFRyYW5zZm9ybUxpc3RlbmVyIiwiaW5pdGlhbGl6ZU5hdmlnYXRpb25Db250cm9scyIsImtleUNvZGVzIiwiT2JqZWN0IiwiZnJlZXplIiwiY2hhcHRlckJ1dHRvbiIsInF1ZXJ5U2VsZWN0b3IiLCJrZXlDb2RlIiwiVVAiLCJzZXRGb2N1c1RvQ2hhcHRlckl0ZW0iLCJwcmV2ZW50RGVmYXVsdCIsIkRPV04iLCJzZWN0aW9uSW5kZXgiLCJzZWN0aW9uQnV0dG9uIiwic2V0Rm9jdXNUb1NlY3Rpb25JdGVtIiwibmV4dEluZGV4Iiwic2VjdGlvbkl0ZW1JbmRleCIsIm5leHRDaGFwdGVyIiwic2V0Rm9jdXNUb0l0ZW0iLCJza2lwRm9jdXNpbmciLCJmb2N1c2VkQ2hhcHRlciIsImZpbmRTZWN0aW9uc0luQ2hhcHRlciIsImNvbHVtbkRhdGEiLCJzZWN0aW9uc0RhdGEiLCJqIiwibGlicmFyeSIsInNwbGl0IiwiY29sdW1uc0RhdGEiLCJjaGFwdGVyVGl0bGUiLCJ0b2dnbGVDaGFwdGVyIiwiY2hhcHRlck5vZGUiLCJjb2xsYXBzZSIsImFycm93IiwidG9TdHJpbmciLCJpY29uIiwicHJvZ3Jlc3NJbmRpY2F0b3IiLCJzZWN0aW9uSWQiLCJnZXROb2Rlc0Zyb21DaGFwdGVyIiwic3VtbWFyeSIsInN1bW1hcnlCdXR0b24iLCJzdW1tYXJ5TWVudUJ1dHRvbiIsImNoYXB0ZXJDb2xsYXBzZUljb24iLCJjaGFwdGVyVGl0bGVUZXh0IiwiY2hhcHRlckNvbXBsZXRpb25JY29uIiwiY2hhcHRlck5vZGVUaXRsZSIsInNlY3Rpb25zRGl2SWQiLCJhY2NvcmRpb24iLCJjdXJyZW50VGFyZ2V0IiwiaXNFeHBhbmRhYmxlIiwiaXNFeHBhbmRlZCIsImdldEF0dHJpYnV0ZSIsImlzT3Blbk9uTW9iaWxlIiwibmV3Q2hhcHRlciIsInNlY3Rpb25zV3JhcHBlciIsInNlY3Rpb25MaW5rcyIsImNoYXB0ZXJQYXJhbXMiLCJzZWN0aW9uUGFyYW1zIiwiaXNUZXh0IiwidGV4dCIsImhlYWRlciIsInNlY3Rpb25Ob2RlIiwiY3JlYXRlU2VjdGlvbkxpbmsiLCJ0ZXh0Q29udGVudCIsImFycm93SWNvbkVsZW1lbnQiLCJzZWN0aW9uVGl0bGVUZXh0Iiwic2VjdGlvbkNvbXBsZXRpb25JY29uIiwic2VjdGlvbkxpbmsiLCJwcm9wZXJ0eU5hbWUiLCJ0b3RhbENoYXB0ZXJzIiwic3R5bGVDbGFzc05hbWUiLCJtZW51IiwiYXJyb3dzIiwiYWRkQXJyb3dzIiwiY3JlYXRlUHJvZ3Jlc3NCYXIiLCJjcmVhdGVQcm9ncmVzc0luZGljYXRvciIsImFkZENoYXB0ZXJUaXRsZSIsImNyZWF0ZU1lbnVUb2dnbGVCdXR0b24iLCJ3cmFwcGVySW5mbyIsImNyZWF0ZVRvVG9wQnV0dG9uIiwiYnV0dG9uV3JhcHBlclByZXZpb3VzIiwiYnV0dG9uV3JhcHBlck5leHQiLCJmdWxsc2NyZWVuU3VwcG9ydGVkIiwiY3JlYXRlRnVsbFNjcmVlbkJ1dHRvbiIsImV2ZW50SW5wdXQiLCJ0b1RvcCIsInVwZGF0ZVByb2dyZXNzQmFyIiwiYmFyV2lkdGgiLCJ1cGRhdGVBMTF5UHJvZ3Jlc3MiLCJoaWRkZW5CdXRSZWFkIiwiY3VycmVudENoYXB0ZXIiLCJzZXRCdXR0b25TdGF0dXMiLCJhY20iLCJidXR0b25QcmV2aW91cyIsImJ1dHRvbk5leHQiLCJidXR0b25XcmFwcGVyTWVudSIsInNldFZpc2liaWxpdHkiLCJkaXZpZGVyIiwidG90YWwiLCJwcm9ncmVzc1RleHQiLCJkaXNhYmxlIiwicmVtb3ZlQXR0cmlidXRlIiwidG9nZ2xlRnVsbFNjcmVlbiIsImV4aXRGdWxsU2NyZWVuIiwiZnVsbFNjcmVlbiIsImZ1bGxTY3JlZW5CdXR0b24iLCJ3aGljaCIsImNyZWF0ZVN1bW1hcnlCdXR0b24iLCJmaWx0ZXJBY3Rpb25BbGwiLCJmaWx0ZXJBY3Rpb25VbmFuc3dlcmVkIiwiYm9va0NvbXBsZXRlZCIsInNldEJvb2tDb21wbGV0ZSIsImZvb3RlciIsImNvbXBsZXRlIiwic3VtbWFyeUZvb3RlciIsImlzQXJyYXkiLCJzZXRTdW1tYXJ5TWVudUJ1dHRvbkRpc2FibGVkIiwiZGlzYWJsZWQiLCJzZXRGaWx0ZXIiLCJvdmVydmlld0xpc3QiLCJzZWN0aW9uTGlzdCIsImVtcHR5Q29udGFpbmVyIiwiZGlzcGxheSIsImZpbHRlcmVkU2VjdGlvbkxpc3QiLCJwYXBlckljb24iLCJhcnJvd0ljb24iLCJjcmVhdGVDaXJjbGUiLCJjaXJjbGVQcm9ncmVzcyIsIk1hdGgiLCJQSSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb2xvciIsImNyZWF0ZVByb2dyZXNzIiwic21hbGxUZXh0IiwicHJvZ3Jlc3NDb3VudGVyIiwicHJvZ3Jlc3NUb3RhbCIsImlzQWJzb2x1dGVWYWx1ZXMiLCJzbWFsbFByb2dyZXNzIiwic21hbGxQcm9ncmVzc1RvdGFsIiwiYm94IiwicHJvZ3Jlc3NQZXJjZW50YWdlIiwicHJvZ3Jlc3NCaWdUZXh0Iiwicm91bmQiLCJzZXBhcmF0b3IiLCJwcm9ncmVzc1NtYWxsVGV4dCIsImFkZFNjb3JlUHJvZ3Jlc3MiLCJ0b3RhbEludGVyYWN0aW9ucyIsInVuY29tcGxldGVkSW50ZXJhY3Rpb25zIiwibWF4IiwiY2lyY2xlIiwiYWRkQm9va1Byb2dyZXNzIiwiYWRkSW50ZXJhY3Rpb25zUHJvZ3Jlc3MiLCJhZGRQcm9ncmVzc0luZGljYXRvcnMiLCJwcm9ncmVzc0JveCIsImFkZEFjdGlvbkJ1dHRvbnMiLCJINVBJbnRlZ3JhdGlvbiIsInJlcG9ydGluZ0lzRW5hYmxlZCIsInN1Ym1pdEJ1dHRvbiIsImFkZEJ1dHRvbiIsImNyZWF0ZVJlc3RhcnRCdXR0b24iLCJjcmVhdGVTdWJtaXR0ZWRDb25maXJtYXRpb24iLCJyZXN0YXJ0QnV0dG9uIiwic3VibWl0dGVkQ29udGFpbmVyIiwiaWNvbkNsYXNzIiwibGFiZWwiLCJidXR0b25FbGVtZW50IiwiY3JlYXRlU2VjdGlvbkxpc3QiLCJzZWN0aW9uRWxlbWVudHMiLCJoYXNVbmFuc3dlcmVkSW50ZXJhY3Rpb25zIiwic2VjdGlvblJvdyIsImNvbnRlbnREYXRhVGl0bGUiLCJtZXRhZGF0YVRpdGxlIiwic2NvcmVIZWFkZXIiLCJ1bnNoaWZ0IiwiY3JlYXRlQ2hhcHRlck92ZXJ2aWV3IiwiY2hhcHRlckljb24iLCJjaGFwdGVyU3RhdHVzIiwidG9Mb3dlckNhc2UiLCJzZWN0aW9uU3ViaGVhZGVyIiwic2VjdGlvbnNDb250YWluZXIiLCJjcmVhdGVGaWx0ZXJEcm9wZG93biIsInZhbHVlIiwibGlzdEVsZW1lbnQiLCJyb2xlIiwiYWN0aW9uQnV0dG9uIiwic2VsZWN0QnV0dG9uIiwiaGFzQXR0cmlidXRlIiwiY2FyZXRJY29uIiwiZHJvcGRvd25NZW51IiwiYWRkU3VtbWFyeU92ZXJ2aWV3Iiwic3VtbWFyeUxpc3QiLCJlbXB0eVN1bW1hcnlMaXN0IiwiYWRkU2NvcmVCYXIiLCJzY29yZWJhciIsInNjb3JlQmFyIiwiSm91YmVsVUkiLCJjcmVhdGVTY29yZUJhciIsInNldFNjb3JlIiwiYXBwZW5kVG8iLCJub0NoYXB0ZXJJbnRlcmFjdGlvbnMiLCJib2xkVGV4dCIsIm5vcm1hbFRleHQiLCJ2YWxpZGF0ZSIsImZyYWdtZW50IiwiYXJnUGFpciIsInBhcnRzIiwiam9pbiIsImZyYWdtZW50MSIsImZyYWdtZW50MiIsImxpbWl0VG8iLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJB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QUFDQTtBQUNBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7O0FDVGYsNEIiLCJmaWxlIjoiaDVwLWludGVyYWN0aXZlLWJvb2suanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9lbnRyaWVzL21haW4uanNcIik7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5oNXAtaW50ZXJhY3RpdmUtYm9vayB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcbi5oNXAtaW50ZXJhY3RpdmUtYm9vay5oNXAtaW50ZXJhY3RpdmUtYm9vay1zbWFsbCAuaDVwLWludGVyYWN0aXZlLWJvb2stbWFpbi5oNXAtaW50ZXJhY3RpdmUtYm9vay1uYXZpZ2F0aW9uLW9wZW4gLmg1cC1pbnRlcmFjdGl2ZS1ib29rLW5hdmlnYXRpb24ge1xcbiAgbWF4LXdpZHRoOiBub25lO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5oNXAtaW50ZXJhY3RpdmUtYm9vay5oNXAtaW50ZXJhY3RpdmUtYm9vay1zbWFsbCAuaDVwLWludGVyYWN0aXZlLWJvb2stbWFpbi5oNXAtaW50ZXJhY3RpdmUtYm9vay1uYXZpZ2F0aW9uLW9wZW4gLmg1cC1pbnRlcmFjdGl2ZS1ib29rLW5hdmlnYXRpb24gLmxhcmdlLW5hdmlnYXRpb24tbGlzdCB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcbi5oNXAtaW50ZXJhY3RpdmUtYm9vay5oNXAtaW50ZXJhY3RpdmUtYm9vay1zbWFsbCAuaDVwLWludGVyYWN0aXZlLWJvb2stbWFpbi5oNXAtaW50ZXJhY3RpdmUtYm9vay1uYXZpZ2F0aW9uLW9wZW4gLmg1cC1pbnRlcmFjdGl2ZS1ib29rLW5hdmlnYXRpb24tY2hhcHRlci1hY2NvcmRpb24ge1xcbiAgb3BhY2l0eTogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuLmg1cC1pbnRlcmFjdGl2ZS1ib29rLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXNtYWxsIC5oNXAtaW50ZXJhY3RpdmUtYm9vay1tYWluLmg1cC1pbnRlcmFjdGl2ZS1ib29rLW5hdmlnYXRpb24tb3BlbiAuaDVwLWludGVyYWN0aXZlLWJvb2stbmF2aWdhdGlvbi1jaGFwdGVyLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG4uaDVwLWludGVyYWN0aXZlLWJvb2suaDVwLWludGVyYWN0aXZlLWJvb2stc21hbGwgLmg1cC1pbnRlcmFjdGl2ZS1ib29rLW1haW4uaDVwLWludGVyYWN0aXZlLWJvb2stbmF2aWdhdGlvbi1vcGVuIC5oNXAtaW50ZXJhY3RpdmUtYm9vay1uYXZpZ2F0aW9uLWNoYXB0ZXItYnV0dG9uLmg1cC1pbnRlcmFjdGl2ZS1ib29rLW5hdmlnYXRpb24tY3VycmVudCB7XFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2U5ZTRlZDtcXG59XFxuLmg1cC1pbnRlcmFjdGl2ZS1ib29rLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXNtYWxsIC5oNXAtaW50ZXJhY3RpdmUtYm9vay1tYWluLmg1cC1pbnRlcmFjdGl2ZS1ib29rLW5hdmlnYXRpb24tb3BlbiAuaDVwLWludGVyYWN0aXZlLWJvb2stbmF2aWdhdGlvbi1zZWN0aW9ubGlzdCB7XFxuICBtYXgtaGVpZ2h0OiBub25lO1xcbiAgb3ZlcmZsb3c6IGluaGVyaXQ7XFxuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuNXMgZWFzZS1pbjtcXG4gIHZpc2liaWxpdHk6IGluaGVyaXQ7XFxuICBwYWRkaW5nLWxlZnQ6IDAuM3JlbTtcXG59XFxuLmg1cC1pbnRlcmFjdGl2ZS1ib29rLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXNtYWxsIC5oNXAtaW50ZXJhY3RpdmUtYm9vay1tYWluLmg1cC1pbnRlcmFjdGl2ZS1ib29rLW5hdmlnYXRpb24tb3BlbiAuaDVwLWludGVyYWN0aXZlLWJvb2stY29udGVudCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uaDVwLWludGVyYWN0aXZlLWJvb2suaDVwLXNjcm9sbGFibGUtZnVsbHNjcmVlbi5oNXAtc2VtaS1mdWxsc2NyZWVuIHtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIC8qIGhhcyB0byBiZSBzY3JvbGwsIG5vdCBhdXRvICovXFxuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XFxufVxcbi5oNXAtaW50ZXJhY3RpdmUtYm9vayAuaDVwLXNjcm9sbGFibGUtZnVsbHNjcmVlbiB7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG4uaDVwLWludGVyYWN0aXZlLWJvb2suaDVwLWZ1bGxzY3JlZW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuLmg1cC1pbnRlcmFjdGl2ZS1ib29rIC5oNXAtY29udGVudC1jb250cm9scyB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uaDVwLWludGVyYWN0aXZlLWJvb2sgOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogNnB4O1xcbiAgYmFja2dyb3VuZDogcmdiYSgxMDgsIDEyMSwgMTQ2LCAwLjM1KTtcXG59XFxuLmg1cC1pbnRlcmFjdGl2ZS1ib29rIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZDogcmdiYSgxMDgsIDEyMSwgMTQ2LCAwLjc1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuLmg1cC1pbnRlcmFjdGl2ZS1ib29rIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzZDNzk5MjtcXG59XFxuXFxuLmg1cC1pbnRlcmFjdGl2ZS1ib29rLW1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDE7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uaDVwLWludGVyYWN0aXZlLWJvb2stbWFpbi5oNXAtaW50ZXJhY3RpdmUtYm9vay1uYXZpZ2F0aW9uLW9wZW4gLmg1cC1pbnRlcmFjdGl2ZS1ib29rLW5hdmlnYXRpb24ge1xcbiAgbWF4LXdpZHRoOiAxNi41NjNlbTtcXG4gIHdpZHRoOiAxNi41NjNlbTtcXG59XFxuXFxuLmg1cC1jb250ZW50LWhpZGRlbiAuaDVwLWludGVyYWN0aXZlLWJvb2stY292ZXItcHJlc2VudCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaDVwLWZ1bGxzY3JlZW4gLmg1cC1pbnRlcmFjdGl2ZS1ib29rLFxcbi5oNXAtc2VtaS1mdWxsc2NyZWVuIC5oNXAtaW50ZXJhY3RpdmUtYm9vayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmg1cC1mdWxsc2NyZWVuIC5oNXAtaW50ZXJhY3RpdmUtYm9vay5lZGdlLTE4IC5oNXAtaW50ZXJhY3RpdmUtYm9vay1zdGF0dXMsXFxuLmg1cC1zZW1pLWZ1bGxzY3JlZW4gLmg1cC1pbnRlcmFjdGl2ZS1ib29rLmVkZ2UtMTggLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN0YXR1cyB7XFxuICBwYWRkaW5nLXJpZ2h0OiA5ZW07XFxufVxcbi5oNXAtZnVsbHNjcmVlbiAuaDVwLWludGVyYWN0aXZlLWJvb2sgLmg1cC1pbnRlcmFjdGl2ZS1ib29rLWNvbnRlbnQsXFxuLmg1cC1zZW1pLWZ1bGxzY3JlZW4gLmg1cC1pbnRlcmFjdGl2ZS1ib29rIC5oNXAtaW50ZXJhY3RpdmUtYm9vay1jb250ZW50IHtcXG4gIHBhZGRpbmctYm90dG9tOiA0LjVlbTtcXG59XFxuLmg1cC1mdWxsc2NyZWVuIC5oNXAtaW50ZXJhY3RpdmUtYm9vayAuaDVwLWludGVyYWN0aXZlLWJvb2stc3RhdHVzLWZvb3RlcixcXG4uaDVwLXNlbWktZnVsbHNjcmVlbiAuaDVwLWludGVyYWN0aXZlLWJvb2sgLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN0YXR1cy1mb290ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBsZWZ0OiAwO1xcbn1cXG4uaDVwLWZ1bGxzY3JlZW4gLmg1cC1pbnRlcmFjdGl2ZS1ib29rLW1haW4sXFxuLmg1cC1zZW1pLWZ1bGxzY3JlZW4gLmg1cC1pbnRlcmFjdGl2ZS1ib29rLW1haW4ge1xcbiAgZmxleDogMTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG4uaDVwLWZ1bGxzY3JlZW4gLmg1cC1pbnRlcmFjdGl2ZS1ib29rLW1haW4gLmg1cC1pbnRlcmFjdGl2ZS1ib29rLWNvbnRlbnQsXFxuLmg1cC1zZW1pLWZ1bGxzY3JlZW4gLmg1cC1pbnRlcmFjdGl2ZS1ib29rLW1haW4gLmg1cC1pbnRlcmFjdGl2ZS1ib29rLWNvbnRlbnQge1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwJSAtIDUuNWVtKTtcXG59XFxuLmg1cC1mdWxsc2NyZWVuIC5oNXAtaW50ZXJhY3RpdmUtYm9vay1uYXZpZ2F0aW9uLFxcbi5oNXAtc2VtaS1mdWxsc2NyZWVuIC5oNXAtaW50ZXJhY3RpdmUtYm9vay1uYXZpZ2F0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uaDVwLWZ1bGxzY3JlZW4gLmg1cC1pbnRlcmFjdGl2ZS1ib29rLW5hdmlnYXRpb24gLm5hdmlnYXRpb24tbGlzdCxcXG4uaDVwLXNlbWktZnVsbHNjcmVlbiAuaDVwLWludGVyYWN0aXZlLWJvb2stbmF2aWdhdGlvbiAubmF2aWdhdGlvbi1saXN0IHtcXG4gIGZsZXg6IDE7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG4uaDVwLWZ1bGxzY3JlZW4gLmg1cC1pbnRlcmFjdGl2ZS1ib29rLW5hdmlnYXRpb24gLmxhcmdlLW5hdmlnYXRpb24tbGlzdCxcXG4uaDVwLXNlbWktZnVsbHNjcmVlbiAuaDVwLWludGVyYWN0aXZlLWJvb2stbmF2aWdhdGlvbiAubGFyZ2UtbmF2aWdhdGlvbi1saXN0IHtcXG4gIG1pbi1oZWlnaHQ6IDFweDtcXG59XFxuXFxuLmg1cC1pbnRlcmFjdGl2ZS1ib29rLWNoYXB0ZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGxlZnQ6IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICB0cmFuc2l0aW9uOiAwLjI1cztcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uaDVwLWludGVyYWN0aXZlLWJvb2stY2hhcHRlci5oNXAtaW50ZXJhY3RpdmUtYm9vay1wcmV2aW91cyB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcbn1cXG4uaDVwLWludGVyYWN0aXZlLWJvb2stY2hhcHRlci5oNXAtaW50ZXJhY3RpdmUtYm9vay1jdXJyZW50IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbn1cXG4uaDVwLWludGVyYWN0aXZlLWJvb2stY2hhcHRlci5oNXAtaW50ZXJhY3RpdmUtYm9vay1uZXh0IHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcXG59XFxuLmg1cC1pbnRlcmFjdGl2ZS1ib29rLWNoYXB0ZXIgPiBkaXYge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBtYXgtd2lkdGg6IDEwNThweDtcXG59XFxuXFxuLmg1cC1pbnRlcmFjdGl2ZS1ib29rLWFuaW1hdGUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5oNXAtaW50ZXJhY3RpdmUtYm9vay1jb250ZW50IHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5oNXAtaW50ZXJhY3RpdmUtYm9vay1jb250ZW50LmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uaDVwLWludGVyYWN0aXZlLWJvb2stY29udGVudCAuaDVwLWNvbHVtbi1jb250ZW50IHtcXG4gIG1heC1oZWlnaHQ6IDk5OTk5OTlweDtcXG59XFxuLmg1cC1pbnRlcmFjdGl2ZS1ib29rLWNvbnRlbnQgLmg1cC1jb2x1bW4tY29udGVudDpmaXJzdC1jaGlsZCB7XFxuICBtYXJnaW4tdG9wOiAwO1xcbn1cXG4uaDVwLWludGVyYWN0aXZlLWJvb2stY29udGVudCAuaDVwLWNvbHVtbi1jb250ZW50OmZpcnN0LWNoaWxkID4gcCB7XFxuICBtYXJnaW4tdG9wOiAwO1xcbn1cXG5cXG4uaDVwLWludGVyYWN0aXZlLWJvb2stc3RhdHVzLXByb2dyZXNzLW1hcmtlciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMWVtIDAgMCAxZW07XFxuICBjbGVhcjogYm90aDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN0YXR1cy1wcm9ncmVzcy1tYXJrZXIgaW5wdXRbdHlwZT1jaGVja2JveF0ge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjc1KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN0YXR1cy1wcm9ncmVzcy1tYXJrZXIgcCB7XFxuICBjb2xvcjogIzRjNDQ1MjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZy1sZWZ0OiAxZW07XFxufVxcblxcbi5oNXAtY29udGVudC1oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogSGVscCBDb3Vyc2UgUHJlc2VudGF0aW9uIHRvIHJlc2l6ZSBwcm9wZXJseSB3aXRoIGluaXRpYWwgaGVpZ2h0IG9mIG1heC13aWR0aCAvIDkgKiAxNiAqL1xcbi5oNXAtY291cnNlLXByZXNlbnRhdGlvbiAuaDVwLXdyYXBwZXIge1xcbiAgaGVpZ2h0OiA1OTZweDtcXG59XFxuXFxuLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN0YXR1cyB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItY29sb3I6ICMxYTczZDk7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDMwcHggcmdiYSgxNjYsIDE2NiwgMTY2LCAwLjIpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwYWRkaW5nOiAwLjVlbTtcXG59XFxuLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN0YXR1cyAuaDVwLWludGVyYWN0aXZlLWJvb2stc3RhdHVzLWJ1dHRvbiB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogMy42ZW07XFxuICBwYWRkaW5nOiAwO1xcbiAgd2lkdGg6IDMuNmVtO1xcbn1cXG5cXG4uaDVwLWludGVyYWN0aXZlLWJvb2stc3RhdHVzLWJ1dHRvbiB7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcbi5oNXAtaW50ZXJhY3RpdmUtYm9vay1zdGF0dXMtYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjYsIDExNSwgMjE3LCAwLjEpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN0YXR1cy1idXR0b246YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjYsIDExNSwgMjE3LCAwLjIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN0YXR1cy1idXR0b25bZGlzYWJsZWRdOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4uaDVwLWludGVyYWN0aXZlLWJvb2stc3RhdHVzLWZ1bGxzY3JlZW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNiwgMTE1LCAyMTcsIDAuMDUpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJvcmRlcjogMC4xMjVlbSBzb2xpZCAjZmZmO1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN0YXR1cy1mdWxsc2NyZWVuLmg1cC1pbnRlcmFjdGl2ZS1ib29rLWVudGVyLWZ1bGxzY3JlZW46OmJlZm9yZSB7XFxuICBjb2xvcjogIzFhNzNkOTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTkwYlxcXCI7XFxuICBmb250LWZhbWlseTogXFxcImg1cC1ib29rXFxcIjtcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxufVxcbi5oNXAtaW50ZXJhY3RpdmUtYm9vay1zdGF0dXMtZnVsbHNjcmVlbi5oNXAtaW50ZXJhY3RpdmUtYm9vay1leGl0LWZ1bGxzY3JlZW46OmJlZm9yZSB7XFxuICBmb250LXNpemU6IDEuMmVtO1xcbiAgY29sb3I6ICMxYTczZDk7XFxuICBjb250ZW50OiBcXFwiXFxcXGU5MGNcXFwiO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJoNXAtYm9va1xcXCI7XFxufVxcblxcbi5oNXAtaW50ZXJhY3RpdmUtYm9vay1zdGF0dXMtbWVudSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBmbGV4LXNocmluazogMDtcXG59XFxuLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN0YXR1cy1tZW51IC5pY29uLW1lbnUge1xcbiAgY29sb3I6ICMxYTczZDk7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG4uaDVwLWludGVyYWN0aXZlLWJvb2stc3RhdHVzLW1lbnUuaDVwLWludGVyYWN0aXZlLWJvb2stc3RhdHVzLW1lbnUtYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYTczZDk7XFxuICBvcGFjaXR5OiAyMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN0YXR1cy1tZW51Lmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN0YXR1cy1tZW51LWFjdGl2ZSAuaWNvbi1tZW51IHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgbGVmdDogNTAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN0YXR1cy1tZW51Lmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN0YXR1cy1tZW51LWFjdGl2ZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI2LCAxMTUsIDIxNywgMC45KTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5oNXAtaW50ZXJhY3RpdmUtYm9vay1zdGF0dXMtbWVudS5oNXAtaW50ZXJhY3RpdmUtYm9vay1zdGF0dXMtbWVudS1hY3RpdmU6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjYsIDExNSwgMjE3LCAwLjk1KTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi5oNXAtaW50ZXJhY3RpdmUtYm9vay1zdGF0dXMtcHJvZ3Jlc3Mge1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICBtYXJnaW46IDA7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgd2lkdGg6IDg2cHg7XFxufVxcbi5oNXAtaW50ZXJhY3RpdmUtYm9vay1zdGF0dXMtcHJvZ3Jlc3MgLmhpZGRlbi1idXQtcmVhZCB7XFxuICBib3JkZXI6IDA7XFxuICBjbGlwOiByZWN0KDAgMCAwIDApO1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBtYXJnaW46IC0xcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcGFkZGluZzogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB3aWR0aDogMXB4O1xcbn1cXG5cXG4uaDVwLWludGVyYWN0aXZlLWJvb2stc3RhdHVzLXByb2dyZXNzLW51bWJlciB7XFxuICBjb2xvcjogIzFhNzNkOTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSBzb2xpZCAjMWE3M2Q5O1xcbn1cXG5cXG4uaDVwLWludGVyYWN0aXZlLWJvb2stc3RhdHVzLXByb2dyZXNzLWRpdmlkZXIge1xcbiAgY29sb3I6ICM0YzQ0NTI7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgc29saWQgIzRjNDQ1MjtcXG59XFxuXFxuLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN0YXR1cy1wcm9ncmVzc2Jhci1iYWNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjYsIDExNSwgMjE3LCAwLjIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uaDVwLWludGVyYWN0aXZlLWJvb2stc3RhdHVzLXByb2dyZXNzYmFyLWZyb250IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYTczZDk7XFxuICBoZWlnaHQ6IDAuMzEzZW07XFxuICB0cmFuc2l0aW9uOiAxcztcXG59XFxuXFxuLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN0YXR1cy1jaGFwdGVyIHtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcbi5oNXAtaW50ZXJhY3RpdmUtYm9vay1zdGF0dXMtY2hhcHRlciAudGl0bGUge1xcbiAgY29sb3I6ICM0YzQ0NTI7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBhZGRpbmc6IDAgMXJlbTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSBzb2xpZCAjNGM0NDUyO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcblxcbi5oNXAtaW50ZXJhY3RpdmUtYm9vay1zdGF0dXMtYXJyb3cge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNiwgMTE1LCAyMTcsIDAuMDUpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJvcmRlcjogMC4xMjVlbSBzb2xpZCAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgZmxleC1zaHJpbms6IDA7XFxuICBoZWlnaHQ6IDIuNzVlbTtcXG4gIHdpZHRoOiAyLjc1ZW07XFxufVxcbi5oNXAtaW50ZXJhY3RpdmUtYm9vay1zdGF0dXMtYXJyb3cgLm5hdmlnYXRpb24tYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAwO1xcbiAgY29sb3I6ICMxYTczZDk7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG4uaDVwLWludGVyYWN0aXZlLWJvb2stc3RhdHVzLWFycm93IC5uYXZpZ2F0aW9uLWJ1dHRvbi5kaXNhYmxlZCB7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbi5oNXAtaW50ZXJhY3RpdmUtYm9vay1zdGF0dXMtaGVhZGVyIHtcXG4gIC13ZWJraXQtcG9zaXRpb246IHN0aWNreTtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgdG9wOiAwO1xcbiAgei1pbmRleDogMjtcXG59XFxuLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN0YXR1cy1oZWFkZXIgLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN0YXR1cy10by10b3Age1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN0YXR1cy1mb290ZXIge1xcbiAgYm90dG9tOiAwO1xcbn1cXG4uaDVwLWludGVyYWN0aXZlLWJvb2stc3RhdHVzLWZvb3RlciAuaDVwLWludGVyYWN0aXZlLWJvb2stc3RhdHVzLW1lbnUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN0YXR1cy1mb290ZXIuZm9vdGVyLWhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaDVwLWludGVyYWN0aXZlLWJvb2stbmF2aWdhdGlvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJveC1zaGFkb3c6IDAuNjI1ZW0gMC42MjVlbSAxLjg3NWVtIHJnYmEoMTY2LCAxNjYsIDE2NiwgMC4yKTtcXG4gIG1heC13aWR0aDogMDtcXG4gIG1pbi1oZWlnaHQ6IDE5ZW07XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogMDtcXG4gIHRyYW5zaXRpb246IHdpZHRoIDAuMTVzIGxpbmVhciwgZmxleC1iYXNpcyAwLjE1cyBsaW5lYXIsIG1heC13aWR0aCAwLjE1cyBsaW5lYXI7XFxuICB3aWR0aDogMDtcXG4gIHotaW5kZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmg1cC1pbnRlcmFjdGl2ZS1ib29rLW5hdmlnYXRpb24gPiBhIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uaDVwLWludGVyYWN0aXZlLWJvb2stbmF2aWdhdGlvbiA+IGRpdiB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG4uaDVwLWludGVyYWN0aXZlLWJvb2stbmF2aWdhdGlvbiAubmF2aWdhdGlvbi1saXN0IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbi5oNXAtaW50ZXJhY3RpdmUtYm9vay1uYXZpZ2F0aW9uIC5sYXJnZS1uYXZpZ2F0aW9uLWxpc3Qge1xcbiAgaGVpZ2h0OiAwO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIGZsZXg6IDEgMSBhdXRvO1xcbiAgbWluLWhlaWdodDogNThlbTtcXG59XFxuXFxuLmg1cC1pbnRlcmFjdGl2ZS1ib29rLW5hdmlnYXRpb24tc2VjdGlvbmxpc3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjVzIGVhc2UtaW47XFxufVxcbi5oNXAtaW50ZXJhY3RpdmUtYm9vay1uYXZpZ2F0aW9uLXNlY3Rpb25saXN0ID4gOmZpcnN0LWNoaWxkIHtcXG4gIG1hcmdpbi10b3A6IDAuNWVtO1xcbn1cXG4uaDVwLWludGVyYWN0aXZlLWJvb2stbmF2aWdhdGlvbi1zZWN0aW9ubGlzdCA+IDpsYXN0LWNoaWxkIHtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZTllNGVkO1xcbiAgcGFkZGluZy1ib3R0b206IDAuNWVtO1xcbn1cXG4uaDVwLWludGVyYWN0aXZlLWJvb2stbmF2aWdhdGlvbi1zZWN0aW9ubGlzdCAuaDVwLWludGVyYWN0aXZlLWJvb2stbmF2aWdhdGlvbi1zZWN0aW9uIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6ICM0YzQ0NTI7XFxuICBmb250LXNpemU6IDAuODc1ZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuODtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuLmg1cC1pbnRlcmFjdGl2ZS1ib29rLW5hdmlnYXRpb24tc2VjdGlvbmxpc3QgLmg1cC1pbnRlcmFjdGl2ZS1ib29rLW5hdmlnYXRpb24tc2VjdGlvbiAuc2VjdGlvbi1idXR0b24ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDA7XFxuICBwYWRkaW5nOiAwIDEuMTI1ZW07XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcbi5oNXAtaW50ZXJhY3RpdmUtYm9vay1uYXZpZ2F0aW9uLXNlY3Rpb25saXN0IC5oNXAtaW50ZXJhY3RpdmUtYm9vay1uYXZpZ2F0aW9uLXNlY3Rpb24gLmg1cC1pbnRlcmFjdGl2ZS1ib29rLW5hdmlnYXRpb24tc2VjdGlvbi1pY29uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgZm9udC1zaXplOiA1cHg7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB3aWR0aDogMi4xN2VtO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxufVxcbi5oNXAtaW50ZXJhY3RpdmUtYm9vay1uYXZpZ2F0aW9uLXNlY3Rpb25saXN0IC5oNXAtaW50ZXJhY3RpdmUtYm9vay1uYXZpZ2F0aW9uLXNlY3Rpb24gLmg1cC1pbnRlcmFjdGl2ZS1ib29rLW5hdmlnYXRpb24tc2VjdGlvbi1pY29uLmg1cC1pbnRlcmFjdGl2ZS1ib29rLW5hdmlnYXRpb24tc2VjdGlvbi10YXNrIHtcXG4gIHZpc2liaWxpdHk6IGluaGVyaXQ7XFxufVxcbi5oNXAtaW50ZXJhY3RpdmUtYm9vay1uYXZpZ2F0aW9uLXNlY3Rpb25saXN0IC5oNXAtaW50ZXJhY3RpdmUtYm9vay1uYXZpZ2F0aW9uLXNlY3Rpb24gLmg1cC1pbnRlcmFjdGl2ZS1ib29rLW5hdmlnYXRpb24tc2VjdGlvbi10aXRsZSB7XFxuICBmb250LXNpemU6IDAuODVlbTtcXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAyZW07XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG4uaDVwLWludGVyYWN0aXZlLWJvb2stbmF2aWdhdGlvbi1zZWN0aW9ubGlzdCA6aG92ZXIge1xcbiAgY29sb3I6ICMxYTczZDk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5oNXAtaW50ZXJhY3RpdmUtYm9vay1uYXZpZ2F0aW9uLWNsb3NlZCAuaDVwLWludGVyYWN0aXZlLWJvb2stbmF2aWdhdGlvbi1jaGFwdGVyLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG4uaDVwLWludGVyYWN0aXZlLWJvb2stbmF2aWdhdGlvbi1jbG9zZWQgLmg1cC1pbnRlcmFjdGl2ZS1ib29rLW5hdmlnYXRpb24tY2hhcHRlci1idXR0b24gLmg1cC1pbnRlcmFjdGl2ZS1ib29rLW5hdmlnYXRpb24tY2hhcHRlci10aXRsZS10ZXh0IHtcXG4gIGNvbG9yOiAjNGM0NDUyO1xcbn1cXG4uaDVwLWludGVyYWN0aXZlLWJvb2stbmF2aWdhdGlvbi1jbG9zZWQgLmg1cC1pbnRlcmFjdGl2ZS1ib29rLW5hdmlnYXRpb24tc2VjdGlvbmxpc3Qge1xcbiAgbWF4LWhlaWdodDogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuNXMgZWFzZS1vdXQ7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5oNXAtaW50ZXJhY3RpdmUtYm9vay1uYXZpZ2F0aW9uLWNoYXB0ZXIge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLmg1cC1pbnRlcmFjdGl2ZS1ib29rLW5hdmlnYXRpb24tY2hhcHRlci1idXR0b24ge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjYsIDExNSwgMjE3LCAwLjEpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZTllNGVkO1xcbiAgY29sb3I6ICM0YzQ0NTI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBoZWlnaHQ6IDMuNDM4ZW07XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwIDEuMTI1ZW07XFxuICB0ZXh0LWFsaWduOiBpbml0aWFsO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lIHNvbGlkICM0YzQ0NTI7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmg1cC1pbnRlcmFjdGl2ZS1ib29rLW5hdmlnYXRpb24tY2hhcHRlci1idXR0b24uaDVwLWludGVyYWN0aXZlLWJvb2stbmF2aWdhdGlvbi1jdXJyZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjYsIDExNSwgMjE3LCAwLjEpO1xcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogd2hpdGU7XFxufVxcbi5oNXAtaW50ZXJhY3RpdmUtYm9vay1uYXZpZ2F0aW9uLWNoYXB0ZXItYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjYsIDExNSwgMjE3LCAwLjA1KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmg1cC1pbnRlcmFjdGl2ZS1ib29rLW5hdmlnYXRpb24tY2hhcHRlci1idXR0b24gLmg1cC1pbnRlcmFjdGl2ZS1ib29rLW5hdmlnYXRpb24tY2hhcHRlci10aXRsZS10ZXh0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6ICMxYTczZDk7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsaW5lLWhlaWdodDogMS41ZW07XFxuICBwYWRkaW5nLWxlZnQ6IDEuNWVtO1xcbiAgcGFkZGluZy1yaWdodDogMmVtO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSBzb2xpZCAjMWE3M2Q5O1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG4uaDVwLWludGVyYWN0aXZlLWJvb2stbmF2aWdhdGlvbi1jaGFwdGVyLWJ1dHRvbiAuaDVwLWludGVyYWN0aXZlLWJvb2stbmF2aWdhdGlvbi1jaGFwdGVyLWFjY29yZGlvbiB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDAuNjVlbTtcXG4gIHdpZHRoOiAxZW07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAxNXB4O1xcbiAgdG9wOiAxN3B4O1xcbn1cXG4uaDVwLWludGVyYWN0aXZlLWJvb2stbmF2aWdhdGlvbi1jaGFwdGVyLWJ1dHRvbiAuaDVwLWludGVyYWN0aXZlLWJvb2stbmF2aWdhdGlvbi1jaGFwdGVyLWFjY29yZGlvbi5oaWRkZW4ge1xcbiAgb3BhY2l0eTogMDtcXG4gIHZpc2liaWxpdHk6IG5vbmU7XFxufVxcbi5oNXAtaW50ZXJhY3RpdmUtYm9vay1uYXZpZ2F0aW9uLWNoYXB0ZXItYnV0dG9uIC5oNXAtaW50ZXJhY3RpdmUtYm9vay1uYXZpZ2F0aW9uLWNoYXB0ZXItcHJvZ3Jlc3Mge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAwLjc1ZW07XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMTVweDtcXG4gIHRvcDogMTdweDtcXG59XFxuLmg1cC1pbnRlcmFjdGl2ZS1ib29rLW5hdmlnYXRpb24tY2hhcHRlci1idXR0b246YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjYsIDExNSwgMjE3LCAwLjEpO1xcbn1cXG5cXG4uaDVwLWludGVyYWN0aXZlLWJvb2stbmF2aWdhdGlvbi1tYWludGl0bGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFhNzNkOTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcbi5oNXAtaW50ZXJhY3RpdmUtYm9vay1uYXZpZ2F0aW9uLW1haW50aXRsZSAubmF2aWdhdGlvbi10aXRsZSB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwYWRkaW5nLWxlZnQ6IDEuMjVlbTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSBzb2xpZCAjZmZmO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcblxcbi5oNXAtaW50ZXJhY3RpdmUtYm9vay1jb3ZlciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbGVmdDogMDtcXG4gIHBhZGRpbmctYm90dG9tOiAyMDBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgei1pbmRleDogMztcXG59XFxuLmg1cC1pbnRlcmFjdGl2ZS1ib29rLWNvdmVyLmg1cC1jb3Zlci1ub2dyYXBoaWNzIHtcXG4gIHBhZGRpbmctdG9wOiAxMjBweDtcXG59XFxuLmg1cC1pbnRlcmFjdGl2ZS1ib29rLWNvdmVyIHAge1xcbiAgbWFyZ2luOiAwIDAgMC41ZW07XFxufVxcblxcbi5oNXAtaW50ZXJhY3RpdmUtYm9vay1jb3Zlci1ncmFwaGljcyB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogMTVlbTtcXG4gIG1hcmdpbjogNC4zNzVlbSAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5oNXAtaW50ZXJhY3RpdmUtYm9vay1jb3Zlci1iYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNiwgMTE1LCAyMTcsIDAuMDUpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGhlaWdodDogNzAlO1xcbiAgd2lkdGg6IGluaGVyaXQ7XFxufVxcblxcbi5oNXAtaW50ZXJhY3RpdmUtYm9vay1jb3Zlci1pbWFnZSB7XFxuICBib3gtc2hhZG93OiAxMHB4IDRweCA0N3B4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbGVmdDogNTAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHotaW5kZXg6IDM7XFxufVxcblxcbi5oNXAtaW50ZXJhY3RpdmUtYm9vay1jb3Zlci10aXRsZSB7XFxuICBjb2xvcjogIzM2MzYzNjtcXG4gIGZvbnQtc2l6ZTogMi4xODhlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgc29saWQgIzM2MzYzNjtcXG59XFxuXFxuLmg1cC1pbnRlcmFjdGl2ZS1ib29rLWNvdmVyLWRlc2NyaXB0aW9uIHtcXG4gIGNvbG9yOiAjMzYzNjM2O1xcbiAgZm9udC1zaXplOiAxLjI1ZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxuICBtYXgtd2lkdGg6IDgwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSBzb2xpZCAjMzYzNjM2O1xcbn1cXG5cXG4uaDVwLWludGVyYWN0aXZlLWJvb2stY292ZXItcmVhZGJ1dHRvbiB7XFxuICBtYXJnaW4tdG9wOiAwLjVlbTtcXG59XFxuLmg1cC1pbnRlcmFjdGl2ZS1ib29rLWNvdmVyLXJlYWRidXR0b24gYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYTczZDk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgY29sb3I6ICNmZmY7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBwYWRkaW5nOiAxMHB4IDQwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgc29saWQgI2ZmZjtcXG59XFxuLmg1cC1pbnRlcmFjdGl2ZS1ib29rLWNvdmVyLXJlYWRidXR0b24gYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjYsIDExNSwgMjE3LCAwLjkpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmg1cC1pbnRlcmFjdGl2ZS1ib29rLWNvdmVyLXJlYWRidXR0b24gYnV0dG9uOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI2LCAxMTUsIDIxNywgMC45NSk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG4uaDVwLWludGVyYWN0aXZlLWJvb2stY292ZXItcmVhZGJ1dHRvbiBidXR0b246Zm9jdXMge1xcbiAgb3V0bGluZS1zdHlsZTogZG91YmxlO1xcbn1cXG5cXG4uaDVwLWNvbnRhaW5lci5jb3ZlcmVkIC5oNXAtY29udGVudC1jb250cm9scyB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaDVwLWludGVyYWN0aXZlLWJvb2suaDVwLWludGVyYWN0aXZlLWJvb2stc21hbGwgLmg1cC1pbnRlcmFjdGl2ZS1ib3gtc3VtbWFyeS1wcm9ncmVzcyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLmg1cC1pbnRlcmFjdGl2ZS1ib29rLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXNtYWxsIC5oNXAtaW50ZXJhY3RpdmUtYm94LXN1bW1hcnktcHJvZ3Jlc3MgPiBkaXYge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tYm90dG9tOiAwLjZyZW07XFxufVxcbi5oNXAtaW50ZXJhY3RpdmUtYm9vay5oNXAtaW50ZXJhY3RpdmUtYm9vay1zbWFsbCAuaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1tZW51LWJ1dHRvbiB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJvcmRlci13aWR0aDogMC4xMjVyZW07XFxufVxcbi5oNXAtaW50ZXJhY3RpdmUtYm9vay5oNXAtaW50ZXJhY3RpdmUtYm9vay1zbWFsbCAuaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1tZW51LWJ1dHRvbi1hcnJvdyB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgb3BhY2l0eTogMTtcXG4gIHJpZ2h0OiAwLjY4NzVyZW07XFxufVxcbi5oNXAtaW50ZXJhY3RpdmUtYm9vay5oNXAtaW50ZXJhY3RpdmUtYm9vay1zbWFsbCAuaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5oNXAtaW50ZXJhY3RpdmUtYm9vay5oNXAtaW50ZXJhY3RpdmUtYm9vay1zbWFsbCAuaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1idXR0b25zIC5oNXAtaW50ZXJhY3RpdmUtYm9vay1zdW1tYXJ5LWJ1dHRvbiB7XFxuICBtYXJnaW4tcmlnaHQ6IGluaXRpYWw7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcbi5oNXAtaW50ZXJhY3RpdmUtYm9vay5oNXAtaW50ZXJhY3RpdmUtYm9vay1zbWFsbCAuaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1idXR0b25zIC5oNXAtaW50ZXJhY3RpdmUtYm9vay1zdW1tYXJ5LXN1Ym1pdCB7XFxuICBmbGV4LWdyb3c6IDY7XFxufVxcbi5oNXAtaW50ZXJhY3RpdmUtYm9vay5oNXAtaW50ZXJhY3RpdmUtYm9vay1zbWFsbCAuaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1idXR0b25zIC5oNXAtaW50ZXJhY3RpdmUtYm9vay1zdW1tYXJ5LXJlc3RhcnQge1xcbiAgZmxleC1ncm93OiA0O1xcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG59XFxuLmg1cC1pbnRlcmFjdGl2ZS1ib29rLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXNtYWxsIC5oNXAtaW50ZXJhY3RpdmUtYm9vay1zdW1tYXJ5LXNjb3JlLWJhciB7XFxuICBtYXJnaW4tdG9wOiAxLjI1cmVtO1xcbn1cXG4uaDVwLWludGVyYWN0aXZlLWJvb2suaDVwLWludGVyYWN0aXZlLWJvb2stc21hbGwgLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktcGFnZSB7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxufVxcbi5oNXAtaW50ZXJhY3RpdmUtYm9vay5oNXAtaW50ZXJhY3RpdmUtYm9vay1zbWFsbCAuaDVwLWludGVyYWN0aXZlLWJvb2stbmF2aWdhdGlvbi1vcGVuIC5oNXAtaW50ZXJhY3RpdmUtYm9vay1uYXZpZ2F0aW9uLWNoYXB0ZXItYnV0dG9uLmg1cC1pbnRlcmFjdGl2ZS1ib29rLW5hdmlnYXRpb24tY3VycmVudFthcmlhLWV4cGFuZGVkPXRydWVdIHtcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICMwRTdDNTc7XFxuICBib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XFxufVxcblxcbi5oNXAtaW50ZXJhY3RpdmUtYm9vay1zdW1tYXJ5IHtcXG4gIHBhZGRpbmc6IDAgMS4xMjVyZW07XFxuICBtYXJnaW46IDAuN3JlbSBhdXRvO1xcbn1cXG5cXG4uaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1tZW51LWJ1dHRvbiB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMEU3QzU3O1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgY29sb3I6ICMwZDczNmU7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGluZS1oZWlnaHQ6IDFyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxufVxcbi5oNXAtaW50ZXJhY3RpdmUtYm9vay1zdW1tYXJ5LW1lbnUtYnV0dG9uLmg1cC1pbnRlcmFjdGl2ZS1ib29rLW5hdmlnYXRpb24tY2hhcHRlci1idXR0b24uaDVwLWludGVyYWN0aXZlLWJvb2stbmF2aWdhdGlvbi1jdXJyZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWY5Zjg7XFxuICBib3JkZXItYm90dG9tLWNvbG9yOiAjMEU3QzU3O1xcbn1cXG4uaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1tZW51LWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmOWY4O1xcbn1cXG4uaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1tZW51LWJ1dHRvbjpob3ZlciAuaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1tZW51LWJ1dHRvbi1hcnJvdyB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSB0cmFuc2xhdGVZKC0xMHB4KTtcXG59XFxuLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktbWVudS1idXR0b25bZGF0YS1ib29rLWNvbXBsZXRlZD10cnVlXSwgLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktbWVudS1idXR0b246YWN0aXZlIHtcXG4gIGJveC1zaGFkb3c6IDAgMCAwLjYyNXJlbSAjMGNjOWE3O1xcbn1cXG4uaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1tZW51LWJ1dHRvbiAuaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS10ZXh0IHtcXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZmxleC1ncm93OiAyO1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjc1cmVtO1xcbn1cXG4uaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1tZW51LWJ1dHRvbiAuaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1pY29uIHtcXG4gIG1hcmdpbi1yaWdodDogMC4yNXJlbTtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgZm9udC1zaXplOiAxLjFlbTtcXG59XFxuLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktbWVudS1idXR0b24gLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktbWVudS1idXR0b24tYXJyb3cge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDI1cHg7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBvcGFjaXR5OiAwO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzLCBvcGFjaXR5IDAuMnMsIHZpc2liaWxpdHkgMC4ycztcXG59XFxuLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktbWVudS1idXR0b25bZGlzYWJsZWRdIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcblxcbi5oNXAtaW50ZXJhY3RpdmUtYm9vay1uYXZpZ2F0aW9uLXN1bW1hcnktYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDEuMTI1cmVtIDAuNXJlbTtcXG59XFxuXFxuLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktcGFnZSB7XFxuICBwYWRkaW5nOiAxLjI1cmVtO1xcbn1cXG4uaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1wYWdlIG9sLFxcbi5oNXAtaW50ZXJhY3RpdmUtYm9vay1zdW1tYXJ5LXBhZ2UgdWwsXFxuLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktcGFnZSBsaSB7XFxuICBwYWRkaW5nLWxlZnQ6IDA7XFxufVxcbi5oNXAtaW50ZXJhY3RpdmUtYm9vay1zdW1tYXJ5LXBhZ2UgLmg1cC1pbnRlcmFjdGl2ZS1ib3gtc3VtbWFyeS1wcm9ncmVzcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgY29sb3I6ICMyNzNDNTk7XFxufVxcbi5oNXAtaW50ZXJhY3RpdmUtYm9vay1zdW1tYXJ5LXBhZ2UgLmg1cC1pbnRlcmFjdGl2ZS1ib3gtc3VtbWFyeS1wcm9ncmVzcyAuaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1wcm9ncmVzcy1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTksIDIxOSwgMjE5LCAwLjMpO1xcbiAgd2lkdGg6IDQ5JTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tcmlnaHQ6IDFlbTtcXG59XFxuLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktcGFnZSAuaDVwLWludGVyYWN0aXZlLWJveC1zdW1tYXJ5LXByb2dyZXNzIC5oNXAtaW50ZXJhY3RpdmUtYm9vay1zdW1tYXJ5LXByb2dyZXNzLWNvbnRhaW5lciAuYWJzb2x1dGUtdmFsdWUge1xcbiAgY29sb3I6ICMyNzNDNTk7XFxuICBmb250LXNpemU6IDEuMjVlbTtcXG59XFxuLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktcGFnZSAuaDVwLWludGVyYWN0aXZlLWJveC1zdW1tYXJ5LXByb2dyZXNzIC5oNXAtaW50ZXJhY3RpdmUtYm9vay1zdW1tYXJ5LXByb2dyZXNzLWNvbnRhaW5lciAuc2VwYXJhdG9yIHtcXG4gIGNvbG9yOiAjMjczQzU5O1xcbiAgZm9udC1zaXplOiAwLjc1ZW07XFxuICBtYXJnaW46IGF1dG8gMC40ZW07XFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbn1cXG4uaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1wYWdlIC5oNXAtaW50ZXJhY3RpdmUtYm94LXN1bW1hcnktcHJvZ3Jlc3MgLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktcHJvZ3Jlc3MtY29udGFpbmVyOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcbn1cXG4uaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1wYWdlIC5oNXAtaW50ZXJhY3RpdmUtYm94LXN1bW1hcnktcHJvZ3Jlc3MgaDMge1xcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xcbiAgbWFyZ2luLXRvcDogMDtcXG59XFxuLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktcGFnZSAuaDVwLWludGVyYWN0aXZlLWJveC1zdW1tYXJ5LXByb2dyZXNzIC5oNXAtaW50ZXJhY3RpdmUtYm9vay1zdW1tYXJ5LXByb2dyZXNzYm94LWJpZ3RleHQge1xcbiAgZm9udC1zaXplOiAxLjM3NXJlbTtcXG4gIGNvbG9yOiAjMmQ3YWQyO1xcbiAgbWFyZ2luOiAwLjQzNzVyZW0gYXV0bztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1wYWdlIC5oNXAtaW50ZXJhY3RpdmUtYm94LXN1bW1hcnktcHJvZ3Jlc3MgLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktcHJvZ3Jlc3Nib3gtc21hbGx0ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XFxuICBjb2xvcjogIzI3M2M1OTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG4uaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1wYWdlIC5oNXAtaW50ZXJhY3RpdmUtYm9vay1zdW1tYXJ5LWJ1dHRvbnMge1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktcGFnZSAuaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1idXR0b25zID4gYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbn1cXG4uaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1wYWdlIC5oNXAtaW50ZXJhY3RpdmUtYm9vay1zdW1tYXJ5LWJ1dHRvbnMgLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktYnV0dG9uIHtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIHBhZGRpbmc6IDAuNjEyNXJlbSAwLjgxMjVyZW07XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktcGFnZSAuaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1idXR0b25zIC5oNXAtaW50ZXJhY3RpdmUtYm9vay1zdW1tYXJ5LWJ1dHRvbiAuaWNvbi1yZXN0YXJ0LCAuaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1wYWdlIC5oNXAtaW50ZXJhY3RpdmUtYm9vay1zdW1tYXJ5LWJ1dHRvbnMgLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktYnV0dG9uIC5pY29uLXBhcGVyLXBlbmNpbCB7XFxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMS4xODc1cmVtO1xcbn1cXG4uaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1wYWdlIC5oNXAtaW50ZXJhY3RpdmUtYm9vay1zdW1tYXJ5LWJ1dHRvbnMgLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktc3VibWl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwRTdDNTc7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwRTdDNTc7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDE1MG1zO1xcbn1cXG4uaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1wYWdlIC5oNXAtaW50ZXJhY3RpdmUtYm9vay1zdW1tYXJ5LWJ1dHRvbnMgLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktc3VibWl0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwYzY5NGE7XFxufVxcbi5oNXAtaW50ZXJhY3RpdmUtYm9vay1zdW1tYXJ5LXBhZ2UgLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktYnV0dG9ucyAuaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1yZXN0YXJ0IHtcXG4gIGNvbG9yOiAjNzU3NTc1O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2ViZWJlYjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDE1MG1zO1xcbn1cXG4uaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1wYWdlIC5oNXAtaW50ZXJhY3RpdmUtYm9vay1zdW1tYXJ5LWJ1dHRvbnMgLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktcmVzdGFydDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlYmViO1xcbn1cXG4uaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1wYWdlIC5oNXAtaW50ZXJhY3RpdmUtYm9vay1zdW1tYXJ5LWJ1dHRvbnMgLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktc3VibWl0dGVkIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgb3BhY2l0eTogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkM2VkZTk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMC40Mzc1cmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXg6IGF1dG87XFxuICBsZWZ0OiAyMDAwcHg7XFxufVxcbi5oNXAtaW50ZXJhY3RpdmUtYm9vay1zdW1tYXJ5LXBhZ2UgLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktYnV0dG9ucyAuaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1zdWJtaXR0ZWQgLmljb24tY2hhcHRlci1kb25lIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIG1hcmdpbjogMC41NjI1cmVtIDFyZW07XFxuICBjb2xvcjogIzBlODI3NTtcXG59XFxuLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktcGFnZSAuaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1idXR0b25zIC5oNXAtaW50ZXJhY3RpdmUtYm9vay1zdW1tYXJ5LXN1Ym1pdHRlZCBwIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcXG4gIGNvbG9yOiAjMGU4Mjc1O1xcbn1cXG4uaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1wYWdlIC5oNXAtaW50ZXJhY3RpdmUtYm9vay1zdW1tYXJ5LWJ1dHRvbnMgLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktc3VibWl0dGVkIC5oNXAtaW50ZXJhY3RpdmUtYm9vay1zdW1tYXJ5LXJlc3RhcnQge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBwYWRkaW5nOiAwLjU2MTVyZW07XFxuICBmbGV4LWdyb3c6IGluaXRpYWw7XFxufVxcbi5oNXAtaW50ZXJhY3RpdmUtYm9vay1zdW1tYXJ5LXBhZ2UgLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktYnV0dG9ucyAuaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1zdWJtaXR0ZWQgYnV0dG9uIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5oNXAtaW50ZXJhY3RpdmUtYm9vay1zdW1tYXJ5LXBhZ2UgLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktYnV0dG9ucy5zdWJtaXR0ZWQgPiBidXR0b24ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktcGFnZSAuaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1idXR0b25zLnN1Ym1pdHRlZCAuaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1zdWJtaXR0ZWQge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbiAgb3BhY2l0eTogMTtcXG4gIHBvc2l0aW9uOiBzdGF0aWM7XFxufVxcbi5oNXAtaW50ZXJhY3RpdmUtYm9vay1zdW1tYXJ5LXBhZ2UgLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktYnV0dG9ucy5zdWJtaXR0ZWQgLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktc3VibWl0dGVkIGJ1dHRvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1wYWdlIC5oNXAtaW50ZXJhY3RpdmUtYm9vay1zdW1tYXJ5LW92ZXJ2aWV3LWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktcGFnZSAuaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1vdmVydmlldy1oZWFkZXIgc2VsZWN0IHtcXG4gIG1hcmdpbjogYXV0byAwIGF1dG8gYXV0bztcXG4gIG1heC1oZWlnaHQ6IDEuNXJlbTtcXG59XFxuLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktcGFnZSAuaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1vdmVydmlldy1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbGluZS1oZWlnaHQ6IDEuOTM3NXJlbTtcXG59XFxuLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktcGFnZSAuaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1vdmVydmlldy1saXN0LW9ubHktdW5hbnN3ZXJlZCAuaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1vdmVydmlldy1zZWN0aW9uLWRldGFpbHMtdGFzay1kb25lLFxcbi5oNXAtaW50ZXJhY3RpdmUtYm9vay1zdW1tYXJ5LXBhZ2UgLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktb3ZlcnZpZXctbGlzdC1vbmx5LXVuYW5zd2VyZWQgLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktbm8taW50ZXJhY3Rpb25zIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5oNXAtaW50ZXJhY3RpdmUtYm9vay1zdW1tYXJ5LXBhZ2UgLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktb3ZlcnZpZXctc2VjdGlvbiwgLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktcGFnZSAuaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1vdmVydmlldy1saXN0LWVtcHR5IHtcXG4gIHBhZGRpbmc6IDAuODc1cmVtIDEuMjVyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZThlOGU4O1xcbiAgYm9yZGVyLWJvdHRvbTogMDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1wYWdlIC5oNXAtaW50ZXJhY3RpdmUtYm9vay1zdW1tYXJ5LW92ZXJ2aWV3LXNlY3Rpb24gaDQsIC5oNXAtaW50ZXJhY3RpdmUtYm9vay1zdW1tYXJ5LXBhZ2UgLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktb3ZlcnZpZXctbGlzdC1lbXB0eSBoNCB7XFxuICBtYXJnaW46IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1wYWdlIC5oNXAtaW50ZXJhY3RpdmUtYm9vay1zdW1tYXJ5LW92ZXJ2aWV3LXNlY3Rpb24gaDQ6aG92ZXIsIC5oNXAtaW50ZXJhY3RpdmUtYm9vay1zdW1tYXJ5LXBhZ2UgLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktb3ZlcnZpZXctbGlzdC1lbXB0eSBoNDpob3ZlciB7XFxuICBjb2xvcjogIzJkN2FkMjtcXG59XFxuLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktcGFnZSAuaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1vdmVydmlldy1zZWN0aW9uIGg0IHNwYW5bY2xhc3NePWljb24tXSwgLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktcGFnZSAuaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1vdmVydmlldy1saXN0LWVtcHR5IGg0IHNwYW5bY2xhc3NePWljb24tXSxcXG4uaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1wYWdlIC5oNXAtaW50ZXJhY3RpdmUtYm9vay1zdW1tYXJ5LW92ZXJ2aWV3LXNlY3Rpb24gaDQgc3BhbltjbGFzcyo9XFxcIiBpY29uLVxcXCJdLFxcbi5oNXAtaW50ZXJhY3RpdmUtYm9vay1zdW1tYXJ5LXBhZ2UgLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktb3ZlcnZpZXctbGlzdC1lbXB0eSBoNCBzcGFuW2NsYXNzKj1cXFwiIGljb24tXFxcIl0ge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBjb2xvcjogIzJkN2FkMjtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5oNXAtaW50ZXJhY3RpdmUtYm9vay1zdW1tYXJ5LXBhZ2UgLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktb3ZlcnZpZXctc2VjdGlvbjpmaXJzdC1vZi10eXBlLCAuaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1wYWdlIC5oNXAtaW50ZXJhY3RpdmUtYm9vay1zdW1tYXJ5LW92ZXJ2aWV3LWxpc3QtZW1wdHk6Zmlyc3Qtb2YtdHlwZSxcXG4uaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1wYWdlIC5oNXAtaW50ZXJhY3RpdmUtYm9vay1zdW1tYXJ5LXRvcC1zZWN0aW9uIHtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XFxufVxcbi5oNXAtaW50ZXJhY3RpdmUtYm9vay1zdW1tYXJ5LXBhZ2UgLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktb3ZlcnZpZXctc2VjdGlvbjpsYXN0LW9mLXR5cGUsIC5oNXAtaW50ZXJhY3RpdmUtYm9vay1zdW1tYXJ5LXBhZ2UgLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktb3ZlcnZpZXctbGlzdC1lbXB0eTpsYXN0LW9mLXR5cGUsXFxuLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktcGFnZSAuaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1ib3R0b20tc2VjdGlvbiB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ViZWJlYjtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XFxufVxcbi5oNXAtaW50ZXJhY3RpdmUtYm9vay1zdW1tYXJ5LXBhZ2UgLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktb3ZlcnZpZXctc2VjdGlvbi1zY29yZS1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktcGFnZSAuaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1vdmVydmlldy1zZWN0aW9uLXNjb3JlLWhlYWRlciBkaXYge1xcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbGluZS1oZWlnaHQ6IDJyZW07XFxufVxcbi5oNXAtaW50ZXJhY3RpdmUtYm9vay1zdW1tYXJ5LXBhZ2UgLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktb3ZlcnZpZXctbGlzdC1lbXB0eSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1wYWdlIC5oNXAtaW50ZXJhY3RpdmUtYm9vay1zdW1tYXJ5LW92ZXJ2aWV3LXNlY3Rpb24tZGV0YWlscyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlYmViZWI7XFxuICBwYWRkaW5nOiAwLjI1cmVtO1xcbn1cXG4uaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1wYWdlIC5oNXAtaW50ZXJhY3RpdmUtYm9vay1zdW1tYXJ5LW92ZXJ2aWV3LXNlY3Rpb24tZGV0YWlsczpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xcbn1cXG4uaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1wYWdlIC5oNXAtaW50ZXJhY3RpdmUtYm9vay1zdW1tYXJ5LW92ZXJ2aWV3LXNlY3Rpb24tZGV0YWlscyAuaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1zZWN0aW9uLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XFxuICBib3JkZXI6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHBhZGRpbmc6IDA7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5oNXAtaW50ZXJhY3RpdmUtYm9vay1zdW1tYXJ5LXBhZ2UgLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktb3ZlcnZpZXctc2VjdGlvbi1kZXRhaWxzIC5oNXAtaW50ZXJhY3RpdmUtYm9vay1zdW1tYXJ5LXNlY3Rpb24tc2NvcmUge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcXG59XFxuLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktcGFnZSAuaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1zZWN0aW9uLWljb24ge1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjYxMjVyZW07XFxuICBjb2xvcjogIzJkN2FkMjtcXG4gIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5oNXAtaW50ZXJhY3RpdmUtYm9vay1zdW1tYXJ5LXBhZ2UgLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktY2hhcHRlci1zdWJoZWFkZXIge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgY29sb3I6ICM3MzcyODU7XFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDAuOTM3NXJlbTtcXG59XFxuLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktcGFnZSAuaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1wcm9ncmVzcy1jaXJjbGUge1xcbiAgd2lkdGg6IDNyZW07XFxuICBoZWlnaHQ6IDNyZW07XFxuICBtaW4taGVpZ2h0OiAzcmVtO1xcbiAgbWluLXdpZHRoOiAzcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm9yZGVyOiA2cHggc29saWQgI0Y0RjRGNDtcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDRweCByZ2JhKDIyOCwgMjI4LCAyMzcsIDAuNSk7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktcGFnZSAuaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1wcm9ncmVzcy1jaXJjbGUgY2FudmFzIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxufVxcbi5oNXAtaW50ZXJhY3RpdmUtYm9vay1zdW1tYXJ5LXBhZ2UgLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktc2NvcmUtYmFyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgbWFyZ2luLXRvcDogM3JlbTtcXG59XFxuLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktcGFnZSAuaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1uby1jaGFwdGVyLWludGVyYWN0aW9ucyBwOmZpcnN0LWNoaWxkIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5oNXAtaW50ZXJhY3RpdmUtYm9vay1zdW1tYXJ5LWZvb3RlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgaGVpZ2h0OiA1cmVtO1xcbiAgYm94LXNoYWRvdzogLTVweCAtNXB4IDEwcHggcmdiYSgxNjYsIDE2NiwgMTY2LCAwLjQpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEyMCUpO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXM7XFxuICB6LWluZGV4OiAxO1xcbn1cXG4uaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1mb290ZXIuc2hvdy1mb290ZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcbn1cXG4uaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1mb290ZXIubWVudS1vcGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5oNXAtaW50ZXJhY3RpdmUtYm9vay1zdW1tYXJ5LWZvb3RlciBidXR0b24ge1xcbiAgZmxleDogYXV0bztcXG59XFxuXFxuLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktZHJvcGRvd24ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWF4LXdpZHRoOiAyMDBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOGU4ZTg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG8gMC4wNjI1cmVtIGF1dG8gYXV0bztcXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XFxuICBtaW4td2lkdGg6IDEycmVtO1xcbn1cXG4uaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1kcm9wZG93biA+IGJ1dHRvbiB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktZHJvcGRvd25bYWN0aXZlXSAuaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1kcm9wZG93bi1tZW51IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYm94LXNoYWRvdzogMCAycHggM3B4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcbi5oNXAtaW50ZXJhY3RpdmUtYm9vay1zdW1tYXJ5LWRyb3Bkb3duW2FjdGl2ZV0gLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktZHJvcGRvd24tbWVudSBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG59XFxuLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktZHJvcGRvd25bYWN0aXZlXSBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcbi5oNXAtaW50ZXJhY3RpdmUtYm9vay1zdW1tYXJ5LWRyb3Bkb3duIC5oNXAtaW50ZXJhY3RpdmUtYm9vay1zdW1tYXJ5LWRyb3Bkb3duLW1lbnUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG59XFxuLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktZHJvcGRvd24gYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogMDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIHBhZGRpbmc6IDAuNXJlbSAwLjY4NzVyZW07XFxufVxcbi5oNXAtaW50ZXJhY3RpdmUtYm9vay1zdW1tYXJ5LWRyb3Bkb3duIGJ1dHRvbiAuaWNvbi1leHBhbmRlZCB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIGZvbnQtc2l6ZTogMC41cmVtO1xcbn1cIiwgXCJcIl0pO1xuXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBJbXBvcnRzXG52YXIgdXJsRXNjYXBlID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS91cmwtZXNjYXBlLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fMF9fXyA9IHVybEVzY2FwZShyZXF1aXJlKFwiLi4vZm9udHMvaDVwLWludGVyYWN0aXZlLWJvb2suZW90P2Ezd3JwclwiKSArIFwiI2llZml4XCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fMV9fXyA9IHVybEVzY2FwZShyZXF1aXJlKFwiLi4vZm9udHMvaDVwLWludGVyYWN0aXZlLWJvb2sudHRmP2Ezd3JwclwiKSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX18yX19fID0gdXJsRXNjYXBlKHJlcXVpcmUoXCIuLi9mb250cy9oNXAtaW50ZXJhY3RpdmUtYm9vay53b2ZmP2Ezd3JwclwiKSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX18zX19fID0gdXJsRXNjYXBlKHJlcXVpcmUoXCIuLi9mb250cy9oNXAtaW50ZXJhY3RpdmUtYm9vay5zdmc/YTN3cnByXCIpICsgXCIjaDVwLWludGVyYWN0aXZlLWJvb2tcIik7XG5cbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcImg1cC1ib29rXFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fMF9fXyArIFwiKSBmb3JtYXQoXFxcImVtYmVkZGVkLW9wZW50eXBlXFxcIiksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fMV9fXyArIFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIiksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fMl9fXyArIFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKSwgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX18zX19fICsgXCIpIGZvcm1hdChcXFwic3ZnXFxcIik7XFxufVxcbi5oNXAtaW50ZXJhY3RpdmUtYm9vayBbY2xhc3NePWljb24tXSxcXG4uaDVwLWludGVyYWN0aXZlLWJvb2sgW2NsYXNzKj1cXFwiIGljb24tXFxcIl0ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJoNXAtYm9va1xcXCI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4uaWNvbi1jbG9zZSA6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGU5MDBcXFwiO1xcbn1cXG5cXG4uaWNvbi1leHBhbmRlZDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTkwMVxcXCI7XFxufVxcblxcbi5pY29uLWNvbGxhcHNlZDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTkwMlxcXCI7XFxufVxcblxcbi5pY29uLWNoYXB0ZXItc3RhcnRlZDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTkwM1xcXCI7XFxufVxcblxcbi5pY29uLWNoYXB0ZXItZG9uZTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTkwYVxcXCI7XFxufVxcblxcbi5pY29uLWNoZWNrLW1hcms6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGU5MTBcXFwiO1xcbn1cXG5cXG4uaWNvbi1jaGFwdGVyLWJsYW5rOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlOTA1XFxcIjtcXG59XFxuXFxuLmljb24tbWVudTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTkwNlxcXCI7XFxufVxcblxcbi5pY29uLXByZXZpb3VzOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlOTA3XFxcIjtcXG59XFxuXFxuLmljb24tbmV4dDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTkwOFxcXCI7XFxufVxcblxcbi5pY29uLXVwOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFxlOTA5XFxcIjtcXG59XFxuXFxuLmljb24tcXVlc3Rpb24tYW5zd2VyZWQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGU5MGFcXFwiO1xcbn1cXG5cXG4uaWNvbi1lbmFibGUtZnVsbHNjcmVlbjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTkwYlxcXCI7XFxufVxcblxcbi5pY29uLWRpc2FibGUtZnVsbHNjcmVlbjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTkwY1xcXCI7XFxufVxcblxcbi5pY29uLXJlc3RhcnQ6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGU5MGRcXFwiO1xcbn1cXG5cXG4uaWNvbi1wYXBlci1wZW5jaWw6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcXGU5MGVcXFwiO1xcbn1cXG5cXG4uaWNvbi1wYXBlcjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTkwZlxcXCI7XFxufVwiLCBcIlwiXSk7XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiAnQG1lZGlhICcgKyBpdGVtWzJdICsgJ3snICsgY29udGVudCArICd9JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgfVxuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSAnKCcgKyBpdGVtWzJdICsgJykgYW5kICgnICsgbWVkaWFRdWVyeSArICcpJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJztcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcbiAgcmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlc2NhcGUodXJsLCBuZWVkUXVvdGVzKSB7XG4gIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBuZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuICdcIicgKyB1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKSArICdcIic7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCIoZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgbm9ybWFsaXplTm9uRmluaXRlVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICB2YWx1ZSA9ICt2YWx1ZTtcclxuICAgICAgICByZXR1cm4gKGlzTmFOKHZhbHVlKSB8fCB2YWx1ZSA9PSBJbmZpbml0eSB8fCB2YWx1ZSA9PSAtSW5maW5pdHkpID8gMCA6IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB2YXIgaXNCb2R5UG90ZW50aWFsbHlTY3JvbGxhYmxlID0gZnVuY3Rpb24gKGJvZHkpIHtcclxuICAgICAgICBib2R5ID0gYm9keSA/IGJvZHkgOiBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcIkJPRFlcIilbMF07XHJcbiAgICBcclxuICAgICAgICB2YXIgYm9keUNvbXB1dGVkU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShib2R5KTtcclxuICAgICAgICB2YXIgcGFyZW50Q29tcHV0ZWRTdHlsZSA9ICB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShib2R5LnBhcmVudCk7XHJcbiAgICAgICAgdmFyIGJvZHlDb21wdXRlZE92ZXJmbG93WCA9IGJvZHlDb21wdXRlZFN0eWxlLm92ZXJmbG93WDtcclxuICAgICAgICB2YXIgYm9keUNvbXB1dGVkT3ZlcmZsb3dZID0gYm9keUNvbXB1dGVkU3R5bGUub3ZlcmZsb3dZO1xyXG4gICAgICAgIHZhciBwYXJlbnRDb21wdXRlZE92ZXJmbG93WCA9IHBhcmVudENvbXB1dGVkU3R5bGUub3ZlcmZsb3dYO1xyXG4gICAgICAgIHZhciBwYXJlbnRDb21wdXRlZE92ZXJmbG93WSA9IHBhcmVudENvbXB1dGVkU3R5bGUub3ZlcmZsb3dZO1xyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgYm9keUNvbXB1dGVkU3R5bGUuZGlzcGxheSA9PSBcInRhYmxlLWNvbHVtblwiIHx8IFxyXG4gICAgICAgICAgICAgICAgYm9keUNvbXB1dGVkU3R5bGUuZGlzcGxheSA9PSBcInRhYmxlLWNvbHVtbi1ncm91cFwiXHJcbiAgICAgICAgICAgICkgJiYgKFxyXG4gICAgICAgICAgICAgICAgcGFyZW50Q29tcHV0ZWRPdmVyZmxvd1ggIT0gXCJ2aXNpYmxlXCIgJiYgXHJcbiAgICAgICAgICAgICAgICBwYXJlbnRDb21wdXRlZE92ZXJmbG93WCAhPSBcImNsaXBcIiAmJiBcclxuICAgICAgICAgICAgICAgIHBhcmVudENvbXB1dGVkT3ZlcmZsb3dZICE9IFwidmlzaWJsZVwiICYmIFxyXG4gICAgICAgICAgICAgICAgcGFyZW50Q29tcHV0ZWRPdmVyZmxvd1kgIT0gXCJjbGlwXCJcclxuICAgICAgICAgICAgKSAmJiAoXHJcbiAgICAgICAgICAgICAgICBib2R5Q29tcHV0ZWRPdmVyZmxvd1ggIT0gXCJ2aXNpYmxlXCIgJiYgXHJcbiAgICAgICAgICAgICAgICBib2R5Q29tcHV0ZWRPdmVyZmxvd1ggIT0gXCJjbGlwXCIgJiYgXHJcbiAgICAgICAgICAgICAgICBib2R5Q29tcHV0ZWRPdmVyZmxvd1kgIT0gXCJ2aXNpYmxlXCIgJiYgXHJcbiAgICAgICAgICAgICAgICBib2R5Q29tcHV0ZWRPdmVyZmxvd1kgIT0gXCJjbGlwXCJcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmICghRWxlbWVudC5wcm90b3R5cGUuc2Nyb2xsKSB7XHJcbiAgICAgICAgRWxlbWVudC5wcm90b3R5cGUuc2Nyb2xsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgYXJnc0xlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XHJcbiAgICAgICAgICAgIHZhciBkb2MgPSB0aGlzLm93bmVyRG9jdW1lbnQ7XHJcbiAgICAgICAgICAgIHZhciB3aW4gPSBkb2MuZGVmYXVsdFZpZXc7XHJcbiAgICAgICAgICAgIHZhciBxdWlya3NNb2RlID0gKGRvYy5jb21wYXRNb2RlID09IFwiQmFja0NvbXBhdFwiKTtcclxuICAgICAgICAgICAgdmFyIGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcIkJPRFlcIilbMF07XHJcbiAgICAgICAgICAgIHZhciBvcHRpb25zID0ge307XHJcbiAgICAgICAgICAgIHZhciB4LCB5O1xyXG4gICAgXHJcbiAgICAgICAgICAgIGlmIChkb2MgIT0gd2luZG93LmRvY3VtZW50KSByZXR1cm47XHJcbiAgICAgICAgICAgIGlmICghd2luKSByZXR1cm47XHJcbiAgICBcclxuICAgICAgICAgICAgaWYgKGFyZ3NMZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChhcmdzTGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYXJnID0gYXJndW1lbnRzWzBdO1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBhcmcgIT0gXCJvYmplY3RcIikgdGhyb3cgXCJGYWlsZWQgdG8gZXhlY3V0ZSAnc2Nyb2xsQnknIG9uICdFbGVtZW50JzogcGFyYW1ldGVyIDEgKCdvcHRpb25zJykgaXMgbm90IGFuIG9iamVjdC5cIjtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmICgnbGVmdCcgaW4gYXJnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5sZWZ0ID0gbm9ybWFsaXplTm9uRmluaXRlVmFsdWUoYXJnLmxlZnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKCd0b3AnIGluIGFyZykge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMudG9wID0gbm9ybWFsaXplTm9uRmluaXRlVmFsdWUoYXJnLnRvcCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIHggPSAoKCdsZWZ0JyBpbiBvcHRpb25zKSA/IG9wdGlvbnMubGVmdCA6IHRoaXMuc2Nyb2xsTGVmdCk7XHJcbiAgICAgICAgICAgICAgICB5ID0gKCgndG9wJyBpbiBvcHRpb25zKSA/IG9wdGlvbnMudG9wIDogdGhpcy5zY3JvbGxUb3ApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5sZWZ0ID0geCA9IG5vcm1hbGl6ZU5vbkZpbml0ZVZhbHVlKGFyZ3VtZW50c1swXSk7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLnRvcCA9IHkgPSBub3JtYWxpemVOb25GaW5pdGVWYWx1ZShhcmd1bWVudHNbMV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgaWYgKHRoaXMgPT0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocXVpcmtzTW9kZSkgcmV0dXJuO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICB3aW4uc2Nyb2xsKCgnc2Nyb2xsWCcgaW4gd2luKSA/IHdpbi5zY3JvbGxYIDogKCgncGFnZVhPZmZzZXQnIGluIHdpbikgPyB3aW4ucGFnZVhPZmZzZXQgOiB0aGlzLnNjcm9sbExlZnQpLCB5KTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIGlmICh0aGlzID09IGJvZHkgJiYgcXVpcmtzTW9kZSAmJiAhaXNCb2R5UG90ZW50aWFsbHlTY3JvbGxhYmxlKGJvZHkpKSB7XHJcbiAgICAgICAgICAgICAgICB3aW4uc2Nyb2xsKG9wdGlvbnMubGVmdCwgb3B0aW9ucy50b3ApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnNjcm9sbExlZnQgPSB4O1xyXG4gICAgICAgICAgICB0aGlzLnNjcm9sbFRvcCA9IHk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKCFFbGVtZW50LnByb3RvdHlwZS5zY3JvbGxUbykge1xyXG4gICAgICAgIEVsZW1lbnQucHJvdG90eXBlLnNjcm9sbFRvID0gRWxlbWVudC5wcm90b3R5cGUuc2Nyb2xsO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAoIUVsZW1lbnQucHJvdG90eXBlLnNjcm9sbEJ5KSB7XHJcbiAgICAgICAgRWxlbWVudC5wcm90b3R5cGUuc2Nyb2xsQnkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBhcmdzTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcclxuICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSB7fTtcclxuICAgIFxyXG4gICAgICAgICAgICBpZiAoYXJnc0xlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFyZ3NMZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHZhciBhcmcgPSBhcmd1bWVudHNbMF07XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGFyZyAhPSBcIm9iamVjdFwiKSB0aHJvdyBcIkZhaWxlZCB0byBleGVjdXRlICdzY3JvbGxCeScgb24gJ0VsZW1lbnQnOiBwYXJhbWV0ZXIgMSAoJ29wdGlvbnMnKSBpcyBub3QgYW4gb2JqZWN0LlwiO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBpZiAoJ2xlZnQnIGluIGFyZykge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMubGVmdCA9IG5vcm1hbGl6ZU5vbkZpbml0ZVZhbHVlKGFyZy5sZWZ0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKCd0b3AnIGluIGFyZykge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMudG9wID0gbm9ybWFsaXplTm9uRmluaXRlVmFsdWUoYXJnLnRvcCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLmxlZnQgPSBub3JtYWxpemVOb25GaW5pdGVWYWx1ZShhcmd1bWVudHNbMF0pO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9ucy50b3AgPSBub3JtYWxpemVOb25GaW5pdGVWYWx1ZShhcmd1bWVudHNbMV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgb3B0aW9ucy5sZWZ0ID0gKCgnbGVmdCcgaW4gb3B0aW9ucykgPyBvcHRpb25zLmxlZnQgKyB0aGlzLnNjcm9sbExlZnQgOiB0aGlzLnNjcm9sbExlZnQpO1xyXG4gICAgICAgICAgICBvcHRpb25zLnRvcCA9ICgoJ3RvcCcgaW4gb3B0aW9ucykgPyBvcHRpb25zLnRvcCArIHRoaXMuc2Nyb2xsVG9wIDogdGhpcy5zY3JvbGxUb3ApO1xyXG4gICAgICAgICAgICB0aGlzLnNjcm9sbChvcHRpb25zKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59KSgpO1xyXG4iLCIvKipcbiAqIGpxdWVyeS1jaXJjbGUtcHJvZ3Jlc3MgLSBqUXVlcnkgUGx1Z2luIHRvIGRyYXcgYW5pbWF0ZWQgY2lyY3VsYXIgcHJvZ3Jlc3MgYmFyczpcbiAqIHtAbGluayBodHRwOi8va290dGVuYXRvci5naXRodWIuaW8vanF1ZXJ5LWNpcmNsZS1wcm9ncmVzcy99XG4gKlxuICogQGF1dGhvciBSb3N0eXNsYXYgQnJ5emd1bm92IDxrb3R0ZW5hdG9yQGdtYWlsLmNvbT5cbiAqIEB2ZXJzaW9uIDEuMi4yXG4gKiBAbGljZW5jZSBNSVRcbiAqIEBwcmVzZXJ2ZVxuICovXG4vLyBVTUQgZmFjdG9yeSAtIGh0dHBzOi8vZ2l0aHViLmNvbS91bWRqcy91bWQvYmxvYi9kMzFiYjZlZTcwOTg3MTVlMDE5ZjUyYmRmZTI3YjNlNGJmZDJiOTdlL3RlbXBsYXRlcy9qcXVlcnlQbHVnaW4uanNcbi8vIFVzZXMgQU1ELCBDb21tb25KUyBvciBicm93c2VyIGdsb2JhbHMgdG8gY3JlYXRlIGEgalF1ZXJ5IHBsdWdpbi5cbihmdW5jdGlvbihmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAvLyBBTUQgLSByZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlXG4gICAgZGVmaW5lKFsnanF1ZXJ5J10sIGZhY3RvcnkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgLy8gTm9kZS9Db21tb25KU1xuICAgIHZhciAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG4gICAgZmFjdG9yeSgkKTtcbiAgICBtb2R1bGUuZXhwb3J0cyA9ICQ7XG4gIH0gZWxzZSB7XG4gICAgLy8gQnJvd3NlciBnbG9iYWxzXG4gICAgZmFjdG9yeShqUXVlcnkpO1xuICB9XG59KShmdW5jdGlvbigkKSB7XG4gIC8qKlxuICAgKiBJbm5lciBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgY2lyY2xlIHByb2dyZXNzIGJhci5cbiAgICogVGhlIGNsYXNzIGlzIG5vdCBleHBvc2VkIF95ZXRfIGJ1dCB5b3UgY2FuIGNyZWF0ZSBhbiBpbnN0YW5jZSB0aHJvdWdoIGpRdWVyeSBtZXRob2QgY2FsbC5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyAtIFlvdSBjYW4gY3VzdG9taXplIGFueSBjbGFzcyBtZW1iZXIgKHByb3BlcnR5IG9yIG1ldGhvZCkuXG4gICAqIEBjbGFzc1xuICAgKiBAYWxpYXMgQ2lyY2xlUHJvZ3Jlc3NcbiAgICovXG4gIGZ1bmN0aW9uIENpcmNsZVByb2dyZXNzKGNvbmZpZykge1xuICAgIHRoaXMuaW5pdChjb25maWcpO1xuICB9XG5cbiAgQ2lyY2xlUHJvZ3Jlc3MucHJvdG90eXBlID0ge1xuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHB1YmxpYyBvcHRpb25zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8qKlxuICAgICAqIFRoaXMgaXMgdGhlIG9ubHkgcmVxdWlyZWQgb3B0aW9uLiBJdCBzaG91bGQgYmUgZnJvbSBgMC4wYCB0byBgMS4wYC5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBkZWZhdWx0IDAuMFxuICAgICAqL1xuICAgIHZhbHVlOiAwLjAsXG5cbiAgICAvKipcbiAgICAgKiBTaXplIG9mIHRoZSBjYW52YXMgaW4gcGl4ZWxzLlxuICAgICAqIEl0J3MgYSBzcXVhcmUgc28gd2UgbmVlZCBvbmx5IG9uZSBkaW1lbnNpb24uXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAZGVmYXVsdCAxMDAuMFxuICAgICAqL1xuICAgIHNpemU6IDEwMC4wLFxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbCBhbmdsZSBmb3IgYDAuMGAgdmFsdWUgaW4gcmFkaWFucy5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBkZWZhdWx0IC1NYXRoLlBJXG4gICAgICovXG4gICAgc3RhcnRBbmdsZTogLU1hdGguUEksXG5cbiAgICAvKipcbiAgICAgKiBXaWR0aCBvZiB0aGUgYXJjIGluIHBpeGVscy5cbiAgICAgKiBJZiBpdCdzIGAnYXV0bydgIC0gdGhlIHZhbHVlIGlzIGNhbGN1bGF0ZWQgYXMgYFt0aGlzLnNpemVde0BsaW5rIENpcmNsZVByb2dyZXNzI3NpemV9IC8gMTRgLlxuICAgICAqIEB0eXBlIHtudW1iZXJ8c3RyaW5nfVxuICAgICAqIEBkZWZhdWx0ICdhdXRvJ1xuICAgICAqL1xuICAgIHRoaWNrbmVzczogJ2F1dG8nLFxuXG4gICAgLyoqXG4gICAgICogRmlsbCBvZiB0aGUgYXJjLiBZb3UgbWF5IHNldCBpdCB0bzpcbiAgICAgKlxuICAgICAqICAgLSBzb2xpZCBjb2xvcjpcbiAgICAgKiAgICAgLSBgJyMzYWVhYmInYFxuICAgICAqICAgICAtIGB7IGNvbG9yOiAnIzNhZWFiYicgfWBcbiAgICAgKiAgICAgLSBgeyBjb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgLjMpJyB9YFxuICAgICAqICAgLSBsaW5lYXIgZ3JhZGllbnQgXyhsZWZ0IHRvIHJpZ2h0KV86XG4gICAgICogICAgIC0gYHsgZ3JhZGllbnQ6IFsnIzNhZWFiYicsICcjZmRkMjUwJ10sIGdyYWRpZW50QW5nbGU6IE1hdGguUEkgLyA0IH1gXG4gICAgICogICAgIC0gYHsgZ3JhZGllbnQ6IFsncmVkJywgJ2dyZWVuJywgJ2JsdWUnXSwgZ3JhZGllbnREaXJlY3Rpb246IFt4MCwgeTAsIHgxLCB5MV0gfWBcbiAgICAgKiAgICAgLSBgeyBncmFkaWVudDogW1tcInJlZFwiLCAuMl0sIFtcImdyZWVuXCIsIC4zXSwgW1wiYmx1ZVwiLCAuOF1dIH1gXG4gICAgICogICAtIGltYWdlOlxuICAgICAqICAgICAtIGB7IGltYWdlOiAnaHR0cDovL2kuaW1ndXIuY29tL3BUMGk4OXYucG5nJyB9YFxuICAgICAqICAgICAtIGB7IGltYWdlOiBpbWFnZU9iamVjdCB9YFxuICAgICAqICAgICAtIGB7IGNvbG9yOiAnbGltZScsIGltYWdlOiAnaHR0cDovL2kuaW1ndXIuY29tL3BUMGk4OXYucG5nJyB9YCAtXG4gICAgICogICAgICAgY29sb3IgZGlzcGxheWVkIHVudGlsIHRoZSBpbWFnZSBpcyBsb2FkZWRcbiAgICAgKlxuICAgICAqIEBkZWZhdWx0IHtncmFkaWVudDogWycjM2FlYWJiJywgJyNmZGQyNTAnXX1cbiAgICAgKi9cbiAgICBmaWxsOiB7XG4gICAgICBncmFkaWVudDogWycjM2FlYWJiJywgJyNmZGQyNTAnXVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDb2xvciBvZiB0aGUgXCJlbXB0eVwiIGFyYy4gT25seSBhIGNvbG9yIGZpbGwgc3VwcG9ydGVkIGJ5IG5vdy5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBkZWZhdWx0ICdyZ2JhKDAsIDAsIDAsIC4xKSdcbiAgICAgKi9cbiAgICBlbXB0eUZpbGw6ICdyZ2JhKDAsIDAsIDAsIC4xKScsXG5cbiAgICAvKipcbiAgICAgKiBqUXVlcnkgQW5pbWF0aW9uIGNvbmZpZy5cbiAgICAgKiBZb3UgY2FuIHBhc3MgYGZhbHNlYCB0byBkaXNhYmxlIHRoZSBhbmltYXRpb24uXG4gICAgICogQHNlZSBodHRwOi8vYXBpLmpxdWVyeS5jb20vYW5pbWF0ZS9cbiAgICAgKiBAdHlwZSB7b2JqZWN0fGJvb2xlYW59XG4gICAgICogQGRlZmF1bHQge2R1cmF0aW9uOiAxMjAwLCBlYXNpbmc6ICdjaXJjbGVQcm9ncmVzc0Vhc2luZyd9XG4gICAgICovXG4gICAgYW5pbWF0aW9uOiB7XG4gICAgICBkdXJhdGlvbjogMTIwMCxcbiAgICAgIGVhc2luZzogJ2NpcmNsZVByb2dyZXNzRWFzaW5nJ1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBEZWZhdWx0IGFuaW1hdGlvbiBzdGFydHMgYXQgYDAuMGAgYW5kIGVuZHMgYXQgc3BlY2lmaWVkIGB2YWx1ZWAuIExldCdzIGNhbGwgdGhpcyBfZGlyZWN0IGFuaW1hdGlvbl8uXG4gICAgICogSWYgeW91IHdhbnQgdG8gbWFrZSBfcmV2ZXJzZWQgYW5pbWF0aW9uXyAtIHNldCBgYW5pbWF0aW9uU3RhcnRWYWx1ZTogMS4wYC5cbiAgICAgKiBBbHNvIHlvdSBtYXkgc3BlY2lmeSBhbnkgb3RoZXIgdmFsdWUgZnJvbSBgMC4wYCB0byBgMS4wYC5cbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBkZWZhdWx0IDAuMFxuICAgICAqL1xuICAgIGFuaW1hdGlvblN0YXJ0VmFsdWU6IDAuMCxcblxuICAgIC8qKlxuICAgICAqIFJldmVyc2UgYW5pbWF0aW9uIGFuZCBhcmMgZHJhdy5cbiAgICAgKiBCeSBkZWZhdWx0LCB0aGUgYXJjIGlzIGZpbGxlZCBmcm9tIGAwLjBgIHRvIGB2YWx1ZWAsIF9jbG9ja3dpc2VfLlxuICAgICAqIFdpdGggYHJldmVyc2U6IHRydWVgIHRoZSBhcmMgaXMgZmlsbGVkIGZyb20gYDEuMGAgdG8gYHZhbHVlYCwgX2NvdW50ZXItY2xvY2t3aXNlXy5cbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuICAgIHJldmVyc2U6IGZhbHNlLFxuXG4gICAgLyoqXG4gICAgICogQXJjIGxpbmUgY2FwOiBgJ2J1dHQnYCwgYCdyb3VuZCdgIG9yIGAnc3F1YXJlJ2AgLVxuICAgICAqIFtyZWFkIG1vcmVde0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9DYW52YXNSZW5kZXJpbmdDb250ZXh0MkQubGluZUNhcH0uXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAZGVmYXVsdCAnYnV0dCdcbiAgICAgKi9cbiAgICBsaW5lQ2FwOiAnYnV0dCcsXG5cbiAgICAvKipcbiAgICAgKiBDYW52YXMgaW5zZXJ0aW9uIG1vZGU6IGFwcGVuZCBvciBwcmVwZW5kIGl0IGludG8gdGhlIHBhcmVudCBlbGVtZW50P1xuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQGRlZmF1bHQgJ3ByZXBlbmQnXG4gICAgICovXG4gICAgaW5zZXJ0TW9kZTogJ3ByZXBlbmQnLFxuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gcHJvdGVjdGVkIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLyoqXG4gICAgICogTGluayB0byB7QGxpbmsgQ2lyY2xlUHJvZ3Jlc3N9IGNvbnN0cnVjdG9yLlxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcjogQ2lyY2xlUHJvZ3Jlc3MsXG5cbiAgICAvKipcbiAgICAgKiBDb250YWluZXIgZWxlbWVudC4gU2hvdWxkIGJlIHBhc3NlZCBpbnRvIGNvbnN0cnVjdG9yIGNvbmZpZy5cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQHR5cGUge2pRdWVyeX1cbiAgICAgKi9cbiAgICBlbDogbnVsbCxcblxuICAgIC8qKlxuICAgICAqIENhbnZhcyBlbGVtZW50LiBBdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBhbmQgcHJlcGVuZGVkIHRvIFt0aGlzLmVsXXtAbGluayBDaXJjbGVQcm9ncmVzcyNlbH0uXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEB0eXBlIHtIVE1MQ2FudmFzRWxlbWVudH1cbiAgICAgKi9cbiAgICBjYW52YXM6IG51bGwsXG5cbiAgICAvKipcbiAgICAgKiAyRC1jb250ZXh0IG9mIFt0aGlzLmNhbnZhc117QGxpbmsgQ2lyY2xlUHJvZ3Jlc3MjY2FudmFzfS5cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQHR5cGUge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH1cbiAgICAgKi9cbiAgICBjdHg6IG51bGwsXG5cbiAgICAvKipcbiAgICAgKiBSYWRpdXMgb2YgdGhlIG91dGVyIGNpcmNsZS4gQXV0b21hdGljYWxseSBjYWxjdWxhdGVkIGFzIGBbdGhpcy5zaXplXXtAbGluayBDaXJjbGVQcm9ncmVzcyNzaXplfSAvIDJgLlxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIHJhZGl1czogMC4wLFxuXG4gICAgLyoqXG4gICAgICogRmlsbCBvZiB0aGUgbWFpbiBhcmMuIEF1dG9tYXRpY2FsbHkgY2FsY3VsYXRlZCwgZGVwZW5kaW5nIG9uIFt0aGlzLmZpbGxde0BsaW5rIENpcmNsZVByb2dyZXNzI2ZpbGx9IG9wdGlvbi5cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQHR5cGUge3N0cmluZ3xDYW52YXNHcmFkaWVudHxDYW52YXNQYXR0ZXJufVxuICAgICAqL1xuICAgIGFyY0ZpbGw6IG51bGwsXG5cbiAgICAvKipcbiAgICAgKiBMYXN0IHJlbmRlcmVkIGZyYW1lIHZhbHVlLlxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqL1xuICAgIGxhc3RGcmFtZVZhbHVlOiAwLjAsXG5cbiAgICAvKipcbiAgICAgKiBJbml0L3JlLWluaXQgdGhlIHdpZGdldC5cbiAgICAgKlxuICAgICAqIFRocm93cyBhIGpRdWVyeSBldmVudDpcbiAgICAgKlxuICAgICAqIC0gYGNpcmNsZS1pbml0ZWQoanFFdmVudClgXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIC0gWW91IGNhbiBjdXN0b21pemUgYW55IGNsYXNzIG1lbWJlciAocHJvcGVydHkgb3IgbWV0aG9kKS5cbiAgICAgKi9cbiAgICBpbml0OiBmdW5jdGlvbihjb25maWcpIHtcbiAgICAgICQuZXh0ZW5kKHRoaXMsIGNvbmZpZyk7XG4gICAgICB0aGlzLnJhZGl1cyA9IHRoaXMuc2l6ZSAvIDI7XG4gICAgICB0aGlzLmluaXRXaWRnZXQoKTtcbiAgICAgIHRoaXMuaW5pdEZpbGwoKTtcbiAgICAgIHRoaXMuZHJhdygpO1xuICAgICAgdGhpcy5lbC50cmlnZ2VyKCdjaXJjbGUtaW5pdGVkJyk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemUgYDxjYW52YXM+YC5cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgaW5pdFdpZGdldDogZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIXRoaXMuY2FudmFzKVxuICAgICAgICB0aGlzLmNhbnZhcyA9ICQoJzxjYW52YXM+JylbdGhpcy5pbnNlcnRNb2RlID09ICdwcmVwZW5kJyA/ICdwcmVwZW5kVG8nIDogJ2FwcGVuZFRvJ10odGhpcy5lbClbMF07XG5cbiAgICAgIHZhciBjYW52YXMgPSB0aGlzLmNhbnZhcztcbiAgICAgIGNhbnZhcy53aWR0aCA9IHRoaXMuc2l6ZTtcbiAgICAgIGNhbnZhcy5oZWlnaHQgPSB0aGlzLnNpemU7XG4gICAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgICBpZiAod2luZG93LmRldmljZVBpeGVsUmF0aW8gPiAxKSB7XG4gICAgICAgIHZhciBzY2FsZUJ5ID0gd2luZG93LmRldmljZVBpeGVsUmF0aW87XG4gICAgICAgIGNhbnZhcy5zdHlsZS53aWR0aCA9IGNhbnZhcy5zdHlsZS5oZWlnaHQgPSB0aGlzLnNpemUgKyAncHgnO1xuICAgICAgICBjYW52YXMud2lkdGggPSBjYW52YXMuaGVpZ2h0ID0gdGhpcy5zaXplICogc2NhbGVCeTtcbiAgICAgICAgdGhpcy5jdHguc2NhbGUoc2NhbGVCeSwgc2NhbGVCeSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIHNldHMgW3RoaXMuYXJjRmlsbF17QGxpbmsgQ2lyY2xlUHJvZ3Jlc3MjYXJjRmlsbH0uXG4gICAgICogSXQgY291bGQgZG8gdGhpcyBhc3luYyAob24gaW1hZ2UgbG9hZCkuXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGluaXRGaWxsOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgZmlsbCA9IHRoaXMuZmlsbCxcbiAgICAgICAgY3R4ID0gdGhpcy5jdHgsXG4gICAgICAgIHNpemUgPSB0aGlzLnNpemU7XG5cbiAgICAgIGlmICghZmlsbClcbiAgICAgICAgdGhyb3cgRXJyb3IoXCJUaGUgZmlsbCBpcyBub3Qgc3BlY2lmaWVkIVwiKTtcblxuICAgICAgaWYgKHR5cGVvZiBmaWxsID09ICdzdHJpbmcnKVxuICAgICAgICBmaWxsID0ge2NvbG9yOiBmaWxsfTtcblxuICAgICAgaWYgKGZpbGwuY29sb3IpXG4gICAgICAgIHRoaXMuYXJjRmlsbCA9IGZpbGwuY29sb3I7XG5cbiAgICAgIGlmIChmaWxsLmdyYWRpZW50KSB7XG4gICAgICAgIHZhciBnciA9IGZpbGwuZ3JhZGllbnQ7XG5cbiAgICAgICAgaWYgKGdyLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgdGhpcy5hcmNGaWxsID0gZ3JbMF07XG4gICAgICAgIH0gZWxzZSBpZiAoZ3IubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHZhciBnYSA9IGZpbGwuZ3JhZGllbnRBbmdsZSB8fCAwLCAvLyBncmFkaWVudCBkaXJlY3Rpb24gYW5nbGU7IDAgYnkgZGVmYXVsdFxuICAgICAgICAgICAgZ2QgPSBmaWxsLmdyYWRpZW50RGlyZWN0aW9uIHx8IFtcbiAgICAgICAgICAgICAgICBzaXplIC8gMiAqICgxIC0gTWF0aC5jb3MoZ2EpKSwgLy8geDBcbiAgICAgICAgICAgICAgICBzaXplIC8gMiAqICgxICsgTWF0aC5zaW4oZ2EpKSwgLy8geTBcbiAgICAgICAgICAgICAgICBzaXplIC8gMiAqICgxICsgTWF0aC5jb3MoZ2EpKSwgLy8geDFcbiAgICAgICAgICAgICAgICBzaXplIC8gMiAqICgxIC0gTWF0aC5zaW4oZ2EpKSAgLy8geTFcbiAgICAgICAgICAgICAgXTtcblxuICAgICAgICAgIHZhciBsZyA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudC5hcHBseShjdHgsIGdkKTtcblxuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3IubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBjb2xvciA9IGdyW2ldLFxuICAgICAgICAgICAgICBwb3MgPSBpIC8gKGdyLmxlbmd0aCAtIDEpO1xuXG4gICAgICAgICAgICBpZiAoJC5pc0FycmF5KGNvbG9yKSkge1xuICAgICAgICAgICAgICBwb3MgPSBjb2xvclsxXTtcbiAgICAgICAgICAgICAgY29sb3IgPSBjb2xvclswXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGcuYWRkQ29sb3JTdG9wKHBvcywgY29sb3IpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuYXJjRmlsbCA9IGxnO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaWxsLmltYWdlKSB7XG4gICAgICAgIHZhciBpbWc7XG5cbiAgICAgICAgaWYgKGZpbGwuaW1hZ2UgaW5zdGFuY2VvZiBJbWFnZSkge1xuICAgICAgICAgIGltZyA9IGZpbGwuaW1hZ2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgaW1nLnNyYyA9IGZpbGwuaW1hZ2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW1nLmNvbXBsZXRlKVxuICAgICAgICAgIHNldEltYWdlRmlsbCgpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgaW1nLm9ubG9hZCA9IHNldEltYWdlRmlsbDtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gc2V0SW1hZ2VGaWxsKCkge1xuICAgICAgICB2YXIgYmcgPSAkKCc8Y2FudmFzPicpWzBdO1xuICAgICAgICBiZy53aWR0aCA9IHNlbGYuc2l6ZTtcbiAgICAgICAgYmcuaGVpZ2h0ID0gc2VsZi5zaXplO1xuICAgICAgICBiZy5nZXRDb250ZXh0KCcyZCcpLmRyYXdJbWFnZShpbWcsIDAsIDAsIHNpemUsIHNpemUpO1xuICAgICAgICBzZWxmLmFyY0ZpbGwgPSBzZWxmLmN0eC5jcmVhdGVQYXR0ZXJuKGJnLCAnbm8tcmVwZWF0Jyk7XG4gICAgICAgIHNlbGYuZHJhd0ZyYW1lKHNlbGYubGFzdEZyYW1lVmFsdWUpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBEcmF3IHRoZSBjaXJjbGUuXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGRyYXc6IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKHRoaXMuYW5pbWF0aW9uKVxuICAgICAgICB0aGlzLmRyYXdBbmltYXRlZCh0aGlzLnZhbHVlKTtcbiAgICAgIGVsc2VcbiAgICAgICAgdGhpcy5kcmF3RnJhbWUodGhpcy52YWx1ZSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIERyYXcgYSBzaW5nbGUgYW5pbWF0aW9uIGZyYW1lLlxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdiAtIEZyYW1lIHZhbHVlLlxuICAgICAqL1xuICAgIGRyYXdGcmFtZTogZnVuY3Rpb24odikge1xuICAgICAgdGhpcy5sYXN0RnJhbWVWYWx1ZSA9IHY7XG4gICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5zaXplLCB0aGlzLnNpemUpO1xuICAgICAgdGhpcy5kcmF3RW1wdHlBcmModik7XG4gICAgICB0aGlzLmRyYXdBcmModik7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIERyYXcgdGhlIGFyYyAocGFydCBvZiB0aGUgY2lyY2xlKS5cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHYgLSBGcmFtZSB2YWx1ZS5cbiAgICAgKi9cbiAgICBkcmF3QXJjOiBmdW5jdGlvbih2KSB7XG4gICAgICBpZiAodiA9PT0gMClcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgICB2YXIgY3R4ID0gdGhpcy5jdHgsXG4gICAgICAgIHIgPSB0aGlzLnJhZGl1cyxcbiAgICAgICAgdCA9IHRoaXMuZ2V0VGhpY2tuZXNzKCksXG4gICAgICAgIGEgPSB0aGlzLnN0YXJ0QW5nbGU7XG5cbiAgICAgIGN0eC5zYXZlKCk7XG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG5cbiAgICAgIGlmICghdGhpcy5yZXZlcnNlKSB7XG4gICAgICAgIGN0eC5hcmMociwgciwgciAtIHQgLyAyLCBhLCBhICsgTWF0aC5QSSAqIDIgKiB2KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN0eC5hcmMociwgciwgciAtIHQgLyAyLCBhIC0gTWF0aC5QSSAqIDIgKiB2LCBhKTtcbiAgICAgIH1cblxuICAgICAgY3R4LmxpbmVXaWR0aCA9IHQ7XG4gICAgICBjdHgubGluZUNhcCA9IHRoaXMubGluZUNhcDtcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHRoaXMuYXJjRmlsbDtcbiAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgIGN0eC5yZXN0b3JlKCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIERyYXcgdGhlIF9lbXB0eSAoYmFja2dyb3VuZClfIGFyYyAocGFydCBvZiB0aGUgY2lyY2xlKS5cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHYgLSBGcmFtZSB2YWx1ZS5cbiAgICAgKi9cbiAgICBkcmF3RW1wdHlBcmM6IGZ1bmN0aW9uKHYpIHtcbiAgICAgIHZhciBjdHggPSB0aGlzLmN0eCxcbiAgICAgICAgciA9IHRoaXMucmFkaXVzLFxuICAgICAgICB0ID0gdGhpcy5nZXRUaGlja25lc3MoKSxcbiAgICAgICAgYSA9IHRoaXMuc3RhcnRBbmdsZTtcblxuICAgICAgaWYgKHYgPCAxKSB7XG4gICAgICAgIGN0eC5zYXZlKCk7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcblxuICAgICAgICBpZiAodiA8PSAwKSB7XG4gICAgICAgICAgY3R4LmFyYyhyLCByLCByIC0gdCAvIDIsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoIXRoaXMucmV2ZXJzZSkge1xuICAgICAgICAgICAgY3R4LmFyYyhyLCByLCByIC0gdCAvIDIsIGEgKyBNYXRoLlBJICogMiAqIHYsIGEpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjdHguYXJjKHIsIHIsIHIgLSB0IC8gMiwgYSwgYSAtIE1hdGguUEkgKiAyICogdik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IHQ7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHRoaXMuZW1wdHlGaWxsO1xuICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEFuaW1hdGUgdGhlIHByb2dyZXNzIGJhci5cbiAgICAgKlxuICAgICAqIFRocm93cyAzIGpRdWVyeSBldmVudHM6XG4gICAgICpcbiAgICAgKiAtIGBjaXJjbGUtYW5pbWF0aW9uLXN0YXJ0KGpxRXZlbnQpYFxuICAgICAqIC0gYGNpcmNsZS1hbmltYXRpb24tcHJvZ3Jlc3MoanFFdmVudCwgYW5pbWF0aW9uUHJvZ3Jlc3MsIHN0ZXBWYWx1ZSlgIC0gbXVsdGlwbGUgZXZlbnRcbiAgICAgKiAgIGFuaW1hdGlvblByb2dyZXNzOiBmcm9tIGAwLjBgIHRvIGAxLjBgOyBzdGVwVmFsdWU6IGZyb20gYDAuMGAgdG8gYHZhbHVlYFxuICAgICAqIC0gYGNpcmNsZS1hbmltYXRpb24tZW5kKGpxRXZlbnQpYFxuICAgICAqXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2IC0gRmluYWwgdmFsdWUuXG4gICAgICovXG4gICAgZHJhd0FuaW1hdGVkOiBmdW5jdGlvbih2KSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGVsID0gdGhpcy5lbCxcbiAgICAgICAgY2FudmFzID0gJCh0aGlzLmNhbnZhcyk7XG5cbiAgICAgIC8vIHN0b3AgcHJldmlvdXMgYW5pbWF0aW9uIGJlZm9yZSBuZXcgXCJzdGFydFwiIGV2ZW50IGlzIHRyaWdnZXJlZFxuICAgICAgY2FudmFzLnN0b3AodHJ1ZSwgZmFsc2UpO1xuICAgICAgZWwudHJpZ2dlcignY2lyY2xlLWFuaW1hdGlvbi1zdGFydCcpO1xuXG4gICAgICBjYW52YXNcbiAgICAgICAgLmNzcyh7YW5pbWF0aW9uUHJvZ3Jlc3M6IDB9KVxuICAgICAgICAuYW5pbWF0ZSh7YW5pbWF0aW9uUHJvZ3Jlc3M6IDF9LCAkLmV4dGVuZCh7fSwgdGhpcy5hbmltYXRpb24sIHtcbiAgICAgICAgICBzdGVwOiBmdW5jdGlvbihhbmltYXRpb25Qcm9ncmVzcykge1xuICAgICAgICAgICAgdmFyIHN0ZXBWYWx1ZSA9IHNlbGYuYW5pbWF0aW9uU3RhcnRWYWx1ZSAqICgxIC0gYW5pbWF0aW9uUHJvZ3Jlc3MpICsgdiAqIGFuaW1hdGlvblByb2dyZXNzO1xuICAgICAgICAgICAgc2VsZi5kcmF3RnJhbWUoc3RlcFZhbHVlKTtcbiAgICAgICAgICAgIGVsLnRyaWdnZXIoJ2NpcmNsZS1hbmltYXRpb24tcHJvZ3Jlc3MnLCBbYW5pbWF0aW9uUHJvZ3Jlc3MsIHN0ZXBWYWx1ZV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkpXG4gICAgICAgIC5wcm9taXNlKClcbiAgICAgICAgLmFsd2F5cyhmdW5jdGlvbigpIHtcbiAgICAgICAgICAvLyB0cmlnZ2VyIG9uIGJvdGggc3VjY2Vzc2Z1bCAmIGZhaWx1cmUgYW5pbWF0aW9uIGVuZFxuICAgICAgICAgIGVsLnRyaWdnZXIoJ2NpcmNsZS1hbmltYXRpb24tZW5kJyk7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGNpcmNsZSB0aGlja25lc3MuXG4gICAgICogQHNlZSBDaXJjbGVQcm9ncmVzcyN0aGlja25lc3NcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXRUaGlja25lc3M6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuICQuaXNOdW1lcmljKHRoaXMudGhpY2tuZXNzKSA/IHRoaXMudGhpY2tuZXNzIDogdGhpcy5zaXplIC8gMTQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldCBjdXJyZW50IHZhbHVlLlxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0VmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldCBjdXJyZW50IHZhbHVlICh3aXRoIHNtb290aCBhbmltYXRpb24gdHJhbnNpdGlvbikuXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBuZXdWYWx1ZVxuICAgICAqL1xuICAgIHNldFZhbHVlOiBmdW5jdGlvbihuZXdWYWx1ZSkge1xuICAgICAgaWYgKHRoaXMuYW5pbWF0aW9uKVxuICAgICAgICB0aGlzLmFuaW1hdGlvblN0YXJ0VmFsdWUgPSB0aGlzLmxhc3RGcmFtZVZhbHVlO1xuICAgICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgdGhpcy5kcmF3KCk7XG4gICAgfVxuICB9O1xuXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gSW5pdGlhdGluZyBqUXVlcnkgcGx1Z2luIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICQuY2lyY2xlUHJvZ3Jlc3MgPSB7XG4gICAgLy8gRGVmYXVsdCBvcHRpb25zICh5b3UgbWF5IG92ZXJyaWRlIHRoZW0pXG4gICAgZGVmYXVsdHM6IENpcmNsZVByb2dyZXNzLnByb3RvdHlwZVxuICB9O1xuXG4gIC8vIGVhc2UtaW4tb3V0LWN1YmljXG4gICQuZWFzaW5nLmNpcmNsZVByb2dyZXNzRWFzaW5nID0gZnVuY3Rpb24oeCkge1xuICAgIGlmICh4IDwgMC41KSB7XG4gICAgICB4ID0gMiAqIHg7XG4gICAgICByZXR1cm4gMC41ICogeCAqIHggKiB4O1xuICAgIH0gZWxzZSB7XG4gICAgICB4ID0gMiAtIDIgKiB4O1xuICAgICAgcmV0dXJuIDEgLSAwLjUgKiB4ICogeCAqIHg7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIHtAbGluayBDaXJjbGVQcm9ncmVzc30uXG4gICAqIFByb2R1Y2VzIFtpbml0IGV2ZW50XXtAbGluayBDaXJjbGVQcm9ncmVzcyNpbml0fSBhbmQgW2FuaW1hdGlvbiBldmVudHNde0BsaW5rIENpcmNsZVByb2dyZXNzI2RyYXdBbmltYXRlZH0uXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbY29uZmlnT3JDb21tYW5kXSAtIENvbmZpZyBvYmplY3Qgb3IgY29tbWFuZCBuYW1lLlxuICAgKlxuICAgKiBDb25maWcgZXhhbXBsZSAoeW91IGNhbiBzcGVjaWZ5IGFueSB7QGxpbmsgQ2lyY2xlUHJvZ3Jlc3N9IHByb3BlcnR5KTpcbiAgICpcbiAgICogYGBganNcbiAgICogeyB2YWx1ZTogMC43NSwgc2l6ZTogNTAsIGFuaW1hdGlvbjogZmFsc2UgfVxuICAgKiBgYGBcbiAgICpcbiAgICogQ29tbWFuZHM6XG4gICAqXG4gICAqIGBgYGpzXG4gICAqIGVsLmNpcmNsZVByb2dyZXNzKCd3aWRnZXQnKTsgLy8gZ2V0IHRoZSA8Y2FudmFzPlxuICAgKiBlbC5jaXJjbGVQcm9ncmVzcygndmFsdWUnKTsgLy8gZ2V0IHRoZSB2YWx1ZVxuICAgKiBlbC5jaXJjbGVQcm9ncmVzcygndmFsdWUnLCBuZXdWYWx1ZSk7IC8vIHVwZGF0ZSB0aGUgdmFsdWVcbiAgICogZWwuY2lyY2xlUHJvZ3Jlc3MoJ3JlZHJhdycpOyAvLyByZWRyYXcgdGhlIGNpcmNsZVxuICAgKiBlbC5jaXJjbGVQcm9ncmVzcygpOyAvLyB0aGUgc2FtZSBhcyAncmVkcmF3J1xuICAgKiBgYGBcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtjb21tYW5kQXJndW1lbnRdIC0gU29tZSBjb21tYW5kcyAobGlrZSBgJ3ZhbHVlJ2ApIG1heSByZXF1aXJlIGFuIGFyZ3VtZW50LlxuICAgKiBAc2VlIENpcmNsZVByb2dyZXNzXG4gICAqIEBhbGlhcyBcIiQoLi4uKS5jaXJjbGVQcm9ncmVzc1wiXG4gICAqL1xuICAkLmZuLmNpcmNsZVByb2dyZXNzID0gZnVuY3Rpb24oY29uZmlnT3JDb21tYW5kLCBjb21tYW5kQXJndW1lbnQpIHtcbiAgICB2YXIgZGF0YU5hbWUgPSAnY2lyY2xlLXByb2dyZXNzJyxcbiAgICAgIGZpcnN0SW5zdGFuY2UgPSB0aGlzLmRhdGEoZGF0YU5hbWUpO1xuXG4gICAgaWYgKGNvbmZpZ09yQ29tbWFuZCA9PSAnd2lkZ2V0Jykge1xuICAgICAgaWYgKCFmaXJzdEluc3RhbmNlKVxuICAgICAgICB0aHJvdyBFcnJvcignQ2FsbGluZyBcIndpZGdldFwiIG1ldGhvZCBvbiBub3QgaW5pdGlhbGl6ZWQgaW5zdGFuY2UgaXMgZm9yYmlkZGVuJyk7XG4gICAgICByZXR1cm4gZmlyc3RJbnN0YW5jZS5jYW52YXM7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZ09yQ29tbWFuZCA9PSAndmFsdWUnKSB7XG4gICAgICBpZiAoIWZpcnN0SW5zdGFuY2UpXG4gICAgICAgIHRocm93IEVycm9yKCdDYWxsaW5nIFwidmFsdWVcIiBtZXRob2Qgb24gbm90IGluaXRpYWxpemVkIGluc3RhbmNlIGlzIGZvcmJpZGRlbicpO1xuICAgICAgaWYgKHR5cGVvZiBjb21tYW5kQXJndW1lbnQgPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIGZpcnN0SW5zdGFuY2UuZ2V0VmFsdWUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBuZXdWYWx1ZSA9IGFyZ3VtZW50c1sxXTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAkKHRoaXMpLmRhdGEoZGF0YU5hbWUpLnNldFZhbHVlKG5ld1ZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgIHZhciBlbCA9ICQodGhpcyksXG4gICAgICAgIGluc3RhbmNlID0gZWwuZGF0YShkYXRhTmFtZSksXG4gICAgICAgIGNvbmZpZyA9ICQuaXNQbGFpbk9iamVjdChjb25maWdPckNvbW1hbmQpID8gY29uZmlnT3JDb21tYW5kIDoge307XG5cbiAgICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgICBpbnN0YW5jZS5pbml0KGNvbmZpZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgaW5pdGlhbENvbmZpZyA9ICQuZXh0ZW5kKHt9LCBlbC5kYXRhKCkpO1xuICAgICAgICBpZiAodHlwZW9mIGluaXRpYWxDb25maWcuZmlsbCA9PSAnc3RyaW5nJylcbiAgICAgICAgICBpbml0aWFsQ29uZmlnLmZpbGwgPSBKU09OLnBhcnNlKGluaXRpYWxDb25maWcuZmlsbCk7XG4gICAgICAgIGlmICh0eXBlb2YgaW5pdGlhbENvbmZpZy5hbmltYXRpb24gPT0gJ3N0cmluZycpXG4gICAgICAgICAgaW5pdGlhbENvbmZpZy5hbmltYXRpb24gPSBKU09OLnBhcnNlKGluaXRpYWxDb25maWcuYW5pbWF0aW9uKTtcbiAgICAgICAgY29uZmlnID0gJC5leHRlbmQoaW5pdGlhbENvbmZpZywgY29uZmlnKTtcbiAgICAgICAgY29uZmlnLmVsID0gZWw7XG4gICAgICAgIGluc3RhbmNlID0gbmV3IENpcmNsZVByb2dyZXNzKGNvbmZpZyk7XG4gICAgICAgIGVsLmRhdGEoZGF0YU5hbWUsIGluc3RhbmNlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbn0pO1xuIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbnZhciBzdHlsZXNJbkRvbSA9IHt9LFxuXHRtZW1vaXplID0gZnVuY3Rpb24oZm4pIHtcblx0XHR2YXIgbWVtbztcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRcdHJldHVybiBtZW1vO1xuXHRcdH07XG5cdH0sXG5cdGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiAvbXNpZSBbNi05XVxcYi8udGVzdChzZWxmLm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XG5cdH0pLFxuXHRnZXRIZWFkRWxlbWVudCA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcblx0fSksXG5cdHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsLFxuXHRzaW5nbGV0b25Db3VudGVyID0gMCxcblx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AgPSBbXTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiA8aGVhZD4uXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0KTtcblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0KTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKVxuXHRcdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCkge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblx0XHRpZighbmV3U3R5bGVzW2lkXSlcblx0XHRcdHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZVxuXHRcdFx0bmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpIHtcblx0dmFyIGhlYWQgPSBnZXRIZWFkRWxlbWVudCgpO1xuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcFtzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZighbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgaGVhZC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XG5cdFx0fVxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGVFbGVtZW50KTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnLiBNdXN0IGJlICd0b3AnIG9yICdib3R0b20nLlwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG5cdHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG5cdHZhciBpZHggPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlRWxlbWVudCk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblx0c3R5bGVFbGVtZW50LnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpO1xuXHRyZXR1cm4gc3R5bGVFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKSB7XG5cdHZhciBsaW5rRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXHRsaW5rRWxlbWVudC5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmtFbGVtZW50KTtcblx0cmV0dXJuIGxpbmtFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlRWxlbWVudCwgdXBkYXRlLCByZW1vdmU7XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cdFx0c3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpO1xuXHR9IGVsc2UgaWYob2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuXHRcdFx0aWYoc3R5bGVFbGVtZW50LmhyZWYpXG5cdFx0XHRcdFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGVFbGVtZW50LmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcblx0XHRpZihuZXdPYmopIHtcblx0XHRcdGlmKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcClcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzO1xuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGVFbGVtZW50LCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcblx0XHR9XG5cdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsobGlua0VsZW1lbnQsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0aWYoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGlua0VsZW1lbnQuaHJlZjtcblxuXHRsaW5rRWxlbWVudC5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpXG5cdFx0VVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiaW1wb3J0IFwiLi4vc3R5bGVzL21haW4uc2Nzc1wiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL3N0eWxlLnNjc3NcIjtcbmltcG9ydCBJbnRlcmFjdGl2ZUJvb2sgZnJvbSBcIi4uL3NjcmlwdHMvYXBwXCI7XG5cbi8vIExvYWQgbGlicmFyeVxuSDVQID0gSDVQIHx8IHt9O1xuSDVQLkludGVyYWN0aXZlQm9vayA9IEludGVyYWN0aXZlQm9vaztcbiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmFwcGxpY2F0aW9uL3ZuZC5tcy1mb250b2JqZWN0O2Jhc2U2NCxIQkVBQUhRUUFBQUJBQUlBQUFBQUFBQUFBQUFBQUFBQUFBQUJBSkFCQUFBQUFFeFFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBRUFBQUFBQUFBQXh3bGJIUUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQkFBYUFBMUFIQUFMUUJpQUc4QWJ3QnJBQUFBRGdCU0FHVUFad0IxQUd3QVlRQnlBQUFBRmdCV0FHVUFjZ0J6QUdrQWJ3QnVBQ0FBTVFBdUFESUFBQUFRQUdnQU5RQndBQzBBWWdCdkFHOEFhd0FBQUFBQUFBRUFBQUFMQUlBQUF3QXdUMU12TWc4U0Joc0FBQUM4QUFBQVlHTnRZWEFYVnRLWEFBQUJIQUFBQUZSbllYTndBQUFBRUFBQUFYQUFBQUFJWjJ4NVp2anVPbnNBQUFGNEFBQU1UR2hsWVdRWlF0ZjVBQUFOeEFBQUFEWm9hR1ZoQjhNRDF3QUFEZndBQUFBa2FHMTBlRW5LQTRNQUFBNGdBQUFBVkd4dlkyRVYzaGk2QUFBT2RBQUFBQ3h0WVhod0FCMEJCZ0FBRHFBQUFBQWdibUZ0WmZCSVRtUUFBQTdBQUFBQmtuQnZjM1FBQXdBQUFBQVFWQUFBQUNBQUF3UGhBWkFBQlFBQUFwa0N6QUFBQUk4Q21RTE1BQUFCNndBekFRa0FBQUFBQUFBQUFBQUFBQUFBQUFBQkVBQUFBQUFBQUFBQUFBQUFBQUFBQUFCQUFBRHBFQVBBLzhBQVFBUEFBRUFBQUFBQkFBQUFBQUFBQUFBQUFBQWdBQUFBQUFBREFBQUFBd0FBQUJ3QUFRQURBQUFBSEFBREFBRUFBQUFjQUFRQU9BQUFBQW9BQ0FBQ0FBSUFBUUFnNlJELy9mLy9BQUFBQUFBZzZRRC8vZi8vQUFILzR4Y0VBQU1BQVFBQUFBQUFBQUFBQUFBQUFRQUIvLzhBRHdBQkFBQUFBQUFBQUFBQUFnQUFOemtCQUFBQUFBRUFBQUFBQUFBQUFBQUNBQUEzT1FFQUFBQUFBUUFBQUFBQUFBQUFBQUlBQURjNUFRQUFBQUFCQUFEL3dBUUFBOEFBQ3dBQUFTY0pBUWNKQVJjSkFUY0JCQUJuL21mK1oyY0JtZjVuWndHWkFabG4vbWNEV1dmK1p3R1paLzVuL21kbkFabitaMmNCbVFBQUFBRUFBQUN3QSs0QzRBQVZBQUFsQVRZMEp5NEJJeUVpQmdjVUZoY0JIZ0UzUGdFM0FpNEJ3QklUQ1JjTS9IOGFKUUVLQ1FIQUVUUVRBUUVCc3dIQUVqWVRDQW9rR2cwWUNmNUFFd0lSQVFFQkFBQUFBQUVBNFAvQUF4QURyZ0FVQUFBSkFTWWlCdzRCRlJFVUZoY3lOamNCUGdFbkxnRUREZjVBRWpZVENBb2tHZzBZQ1FIQUV3SVJBUUVCN2dIQUVoTUpGd3o4ZnhvbEFRb0pBY0FSTkJNQkFRQUFBZ0FBLzhBRUFBUEFBQlFBT1FBQUpTNEJKeVluSmpRM05qYytBVGMrQVJjUkJpWW5BUzRCSnk0Qkl5SUdCdzRCQnc0QkZSUVdGeDRCRng0Qk16STJOejRCTno0Qk5UUW1Kd0ZLS1VNWUdBd01EQXdZR0VNcEtsd3dNRndxQW5FaVh6bzZna1JFZ2pvNlh5SWlJeUlpSWw4N09vSkVSSUk2T2w4aUlpTWpJb1lZUXlrcUx5NWVMaThxS1VNWUdCa0IvU3dCR1JnQ09qcGZJaUlqSXlJaVh6bzZna1JFZ2pvNlh5SWlJeUlpSWw4N09vSkVSSUk2QUFJQUFQL0FCQUFEd0FBbUFFc0FBQUVVQmdjQkRnRWpJaVl2QVM0Qk5UUTJQd0UyTWhjeU1CVVhBVDRCRnhZd0ZSY2VBUWM1QVRjdUFTY3VBU01pQmdjT0FRY09BUlVVRmhjZUFSY2VBVE15TmpjK0FUYytBVFUwSmljRFdBWUcvcFlHRUFrSUVBYnhCZ1lHQmowTUl3d0Jsd0VQRENNTUFUMEdCd0ZqSWw4Nk9vSkVSSUk2T2w4aUlpTWlJaUpmT3pxQ1JFU0NPanBmSWlJakl5SUNMQWdRQnY2V0JnWUdCdkVHRUFnSkVBWThEUXdCbGdFT0RRRU1BUUU4QmhBSWxEcGZJaUlqSXlJaVh6bzZna1JFZ2pvNlh5SWlJeUlpSWw4N09vSkVSSUk2QUFBQUFBSUFBUC9BQkFBRHdBQW9BRTBBQUFFZUFSY1dGeFlVQndZSERnRUhCZ2NHSWljbUp5NEJKeVluSmpRM05qYytBVGMyTnpZeUZ4WVhCUzRCSnk0Qkl5SUdCdzRCQnc0QkZSUVdGeDRCRng0Qk16STJOejRCTno0Qk5UUW1Kd0syS1VNWUdBd01EQXdZR0VNcEtpOHVYaTR2S2lsREdCZ01EQXdNR0JoREtTb3ZMbDR1THlvQkJTSmZPanFDUkVTQ09qcGZJaUlqSWlJaVh6czZna1JFZ2pvNlh5SWlJeU1pQXZvWVF5a3FMeTVlTGk4cUtVTVlHQXdNREF3WUdFTXBLaTh1WGk0dktpbERHQmdNREF3TUdEbzZYeUlpSXlNaUlsODZPb0pFUklJNk9sOGlJaU1pSWlKZk96cUNSRVNDT2dBQUFBQURBQUFBYXdRQUF4VUFBd0FIQUFzQUFEY2hOU0UxSVRVaEVSVWhOUUFFQVB3QUJBRDhBQVFBYTRXTmhnRVNoWVVBQUFBQUFRREUvOEFEUEFQQUFBVUFBQ1VKQVNjSkFRTTgvbmtCaDNqK0FBSUFPQUdJQVloNC9nRCtBQUFBQUFBQkFNVC93QU04QThBQUJRQUFOd2tCTndrQnhBR0gvbmw0QWdEK0FEZ0JpQUdJZVA0QS9nQUFBUUFBLzhBRUFBUEFBQWtBQUJNWEFSRXpFUUUzQ1FFQVdnRm1nQUZsVy80QS9nQUJ3Rm9CWmZ6MUF3dittbHNDQVA0QUFBRUFBUC9BQkFBRHdBQWtBQUFCTGdFbkxnRWpJZ1lIRGdFSERnRVZGQllYSGdFWEhnRTNNalkzUGdFM1BnRW5OQ1luQTdzaVh6bzZna1JFZ2pvNlh5SWlJeUlpSWw4N09vSkVSSUk2T2w4aUlpUUJJeUlDd0RwZklpSWpJeUlpWHpvNmdrUkVnam82WHlJaUpBRWlJaUpmT3pxQ1JFU0NPZ0FBQUFBRUFBRC93QVFCQThFQVBRQ0JBTDhCQXdBQUpUUW1JekVpQmhVY0FSMEJKeTRCSnk0QkJ3NEJGUlFXRng0QkZ4NEJGeDRCRnpNcUFTTXFBU01pQmhVVUZoY2VBVE02QVRNNkFUTXlOalU4QVRVQkp5NEJKelFtTVRvQk16b0JNekkyTlM0Qkl5WWlJeUlHRlJ3QkZSUVdGeDRCTXo0Qk5Ud0JOVHdCTlRRMk5SNEJId0VlQVJjZUFUc0JNalkzTmlZbkxnRW5NUU15TmpVeE5DWWpLZ0VyQVRjK0FUYzJOQ2N1QVNNaUJnY09BUWNPQVFjT0FRY3hQQUUxUEFFMU5DWWpJZ1lIRGdFVkhBRVZIQUVWRkJZekZqSXpBVGMrQVRjeU5ETWNBUlVjQVJVVUZqTStBVFUyTkNjMEppTXFBU01pQmdjT0FSVVVGaGM2QVRNNkFUTXlGak1PQVE4QkRnRUhEZ0VWTVJRV0Z4WTJOejRCTnpFRUFSUVhGaFh0RWlJWkVSd1BDUWdKQ2k5VEtoNCtJZ01HQXdFSUVBY1lMUllYRmdVRkJoQU1HamdkR3pnZUdSWDlGbllEQmdRQkNCQUlHQzhYRlJRQkdRNDllVFVTRlFZRkJSRUxGUlVCQXdVRGJTNWNOQW9SQ0FFSER3Z1BBeEV4VnlzTUdSWVhHQllyR0NEdEV5SVlFUkFJRGdjSUR3b3ZVeW9lUGlJREJ3UVZGZ3NRQlFVR0ZSZ3hiRUFDR25ZREJnUUJBUllWR2hBQkFSUVJRblUzQ1E0RUJnVVVGQklsRWdzVkN3TUZBd01GQW00dld6UUtDZ2tKRUJzU01WY3J5eGtXRmhrVkxCZ2c3Uk1pR0JFQkVBa09Cd2NRQ2k5VEtoNCtJZ01IQkJVV0N4QUZCUVlWR0RGc1FBSWFkZ01HQkFFQkZoVWFFQUVWRVVGMk53a05CUVlGQVJNVUVpVVNDeFlMQWdVREF3VUNiaTVjTkFvS0NRa1FHeEl4Vnl2ODJ4VVdGeFR0RXlJWUVSd1FDQWdKQ2k1VUtSNC9JZ01HQXdnUEJ4Z3RGeGNWQlFVRkVRc2JOeDBiT1I0WkZBRUM2bllEQmdRQkNCQUlHQzhXRlJVQkdnMDllVFVTRlFVRkJoRUxGUlFCQVFNRkFtNHVYRFFLRVFnSUR3Z1BBeEV4VnlzQUFBSUFEdi9RQkFFRHdBQStBSUlBQUNVVUZqTXhNalkxUEFFOUFSY2VBUmNXTWpjK0FUVTBKaWN1QVNjdUFTY3VBU2NqT2dFek9nRXpNalkxTkNZbkxnRWpLZ0VqS2dFaklnWVZCaFFWTVFFWEhnRVhGRElWS2dFaktnRWpJZ1lWSGdFekZqSTNNalkxUEFFMU5DWW5MZ0VqRGdFSEhBRVZIQUVWRkFZVkxnRXZBUzRCSnk0Qkt3RWlCZ2NHRmhjZUFSY3hBaVFVRnhZVjdSSWlHUkVjRHdrSUNRb3ZVeW9lUGlJREJnTUJDQkFIR0MwV0Z4WUZCUVlRREJvNEhSczRIaGtVQWY2aWRnTUdCQUVJRUFnWUx4Y1ZGQUVhRFQxNU5SSVZCUVVHRVFzVkZBRUJBd1VDYmk1Y05Bb1JDQUVIRHdnUEF4RXhWeXVTR1JVV0dCWXNGeUR0RWlJWkVSQUlEZ2NJRUFvdlV5a2VQeUlEQmdRVkZnc1FCUVlGRlJnd2JFRUNMSFVEQndRQkFSWVZHaEFCQVJRU1FYWTNDQTRGQlFZQkZCTVRKQklMRmdzQ0JRTURCQU50TDFzMEN3a0pDUkFiRWpGWEt3QUFBUUJtLzhBRG1nUEFBQzhBQUFFMUNRRTFNaGNlQVJjV0ZSUUhEZ0VIQmlNaUp5NEJKeVkxSXhRWEhnRVhGak15Tno0Qk56WTFOQ2N1QVNjbUl3SUEvd0FCQUVBM09GUVlHQmdZVkRnM1FFQTNPRlFZR0djaElHOUxTbFZWU2t0dklDRWhJRzlMU2xVQzg4My9BUDhBelJnWlV6ZzRQMEE0T0ZNWUdSa1lVemc0UUZWTFNuQWdJQ0FnY0VwTFZWUkxTMjhnSUFBQUFBQUhBR0gvd0FPSUE4QUFBZ0E3QUZFQVZnQmFBRjRBWWdBQUFSVXpFeFlYSGdFVkZBY09BU2N1QVNjbU5EVTBOaWN1QVNjT0FRY0dGaGNlQVJjK0FUY3VBVFUwTmpjK0FUYzJKaWN1QVNjdUFTY1ZIZ0VYQXpVK0FUYytBVDhCRng0QkZ4RWpOU0VSSVRRMk53RXpGU00xRXlNMU16Y2hOU0UxSVRVaEFodDRld2dJQndrSUJ4Y1VGaGdGQVFFQkFSUVREQllLQWdVREcwb0dLVXNuQlFzTUJRTUpBeFFiTmdvVkRSa2JFQlVWQ2RJSEVRZ0RCZ01MS3dJR0E3citjZ0haQVFIK2s3S3k3Ky92ZlA2VkFXditsUUZyQTZwMy91QVVKeWRYSnljVEVSWUJBUmtVQnc4SEZ5MFhFUmdGTEZjckNCSUlSb05PQncwSEdpOFhHREFZRXlZVFpwaGFFU0lNR2hjS1ZROHFHUDd2QVNCQ0lBc1hDeXNMQVFJQkFUaTYvUzRGQ2dVQjVDMHQvcWN0TUMwd0xRQUFBQWNBUnYvQUE0MER3QUFNQUNVQVBnQkNBRVlBU2dCT0FBQUJGUlFXTVRNeU5pTW5KZ1lWRXlFaUpqRVJORFl4SVRJV01SVVVGakV6TWhZeEVSUUdJeVVoTWpZeEVUUW1NU01pSmpFMU5DWXhJU1lHRlJFVUZqTVRNeFVqRlNFVklSVWhGU0UxSVJVaEF1d0dnd1VHQllNRUNKdjh4UVVCQmdKQkJRRUc3Z1VCQVFYOUFBTEZCQUlHNkFVQkJ2NHZCQWdJQkd2djd3SHAvaGNCUXY2K0FlbitGd091Z3dRQ0RJTUZCZ1g4RWdZRDlBVUJCdWdGQVFiOUJna0RQQVVDZ3dVQkJ1OEVBUVVHQlB5Q0JBRUNnenhaUEw0OHVUd0FBQU1BQVAvQUJBQUR3QUFGQUNFQVBnQUFBU2NIRndFbkF5SUhEZ0VIQmhVVUZ4NEJGeFl6TWpjK0FUYzJOVFFuTGdFbkpnTWlKeTRCSnlZMU5EYytBVGMyTXpJWEhnRVhGaFVVQnc0QkJ3WWpBYkp0SlpJQk55WEVhbDFkaXlrb0tDbUxYVjFxYWwxZGl5a29LQ2lMWGwxcVlsWldnQ1VsSlNXQVZsWmlZbFpXZ0NVbEpTV0FWbFppQVZsc0paQUJOeVVCVkNncGkxMWRhbXBkWFlzcEtDZ3BpMTFkYW1wZFhZc3BLUHdvSlNXQVZsWmlZbFpXZ0NVbEpTV0FWbFppWWxaV2dDVWxBQUFBQVFBQUFBRXpNeDFiQ2NkZkR6ejFBQXNFQUFBQUFBRGJFVEFrQUFBQUFOc1JNQ1FBQVAvQUJBRUR3UUFBQUFnQUFnQUFBQUFBQUFBQkFBQUR3UC9BQUFBRUFRQUFBQUFFQVFBQkFBQUFBQUFBQUFBQUFBQUFBQUFBRlFRQUFBQUFBQUFBQUFBQUFBSUFBQUFFQUFBQUJBQUFBQVFBQU9BRUFBQUFCQUFBQUFRQUFBQUVBQUFBQkFBQXhBUUFBTVFFQUFBQUJBQUFBQVFCQUFBRUFRQU9CQUFBWmdQMUFHRUQwd0JHQkFBQUFBQUFBQUFBQ2dBVUFCNEFRQUJxQUpJQTdnRmdBZG9COUFJS0FoNENPQUoyQThRRWNBUzhCVllGd2dZbUFBRUFBQUFWQVFRQUJ3QUFBQUFBQWdBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT0FLNEFBUUFBQUFBQUFRQUlBQUFBQVFBQUFBQUFBZ0FIQUxjQUFRQUFBQUFBQXdBSUFJY0FBUUFBQUFBQUJBQUlBTXdBQVFBQUFBQUFCUUFMQUdZQUFRQUFBQUFBQmdBSUFKOEFBUUFBQUFBQUNnQWFBQmdBQXdBQkJBa0FBUUFRQUFnQUF3QUJCQWtBQWdBT0FMNEFBd0FCQkFrQUF3QVFBSThBQXdBQkJBa0FCQUFRQU5RQUF3QUJCQWtBQlFBV0FIRUFBd0FCQkFrQUJnQVFBS2NBQXdBQkJBa0FDZ0EwQURKb05YQXRZbTl2YXdCb0FEVUFjQUF0QUdJQWJ3QnZBR3RHYjI1MElHZGxibVZ5WVhSbFpDQmllU0JKWTI5TmIyOXVMZ0JHQUc4QWJnQjBBQ0FBWndCbEFHNEFaUUJ5QUdFQWRBQmxBR1FBSUFCaUFIa0FJQUJKQUdNQWJ3Qk5BRzhBYndCdUFDNVdaWEp6YVc5dUlERXVNZ0JXQUdVQWNnQnpBR2tBYndCdUFDQUFNUUF1QURKb05YQXRZbTl2YXdCb0FEVUFjQUF0QUdJQWJ3QnZBR3RvTlhBdFltOXZhd0JvQURVQWNBQXRBR0lBYndCdkFHdFNaV2QxYkdGeUFGSUFaUUJuQUhVQWJBQmhBSEpvTlhBdFltOXZhd0JvQURVQWNBQXRBR0lBYndCdkFHc0FBQUFEQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCemRHRnVaR0ZzYjI1bFBTSnVieUkvUGdvOElVUlBRMVJaVUVVZ2MzWm5JRkJWUWt4SlF5QWlMUzh2VnpOREx5OUVWRVFnVTFaSElERXVNUzh2UlU0aUlDSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OUhjbUZ3YUdsamN5OVRWa2N2TVM0eEwwUlVSQzl6ZG1jeE1TNWtkR1FpSUQ0S1BITjJaeUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lQZ284YldWMFlXUmhkR0UrQ2p4cWMyOXVQZ284SVZ0RFJFRlVRVnNLZXdvSkltWnZiblJHWVcxcGJIa2lPaUFpYURWd0xXSnZiMnNpTEFvSkltUmxjMk55YVhCMGFXOXVJam9nSWtadmJuUWdaMlZ1WlhKaGRHVmtJR0o1SUVsamIwMXZiMjR1SWl3S0NTSnRZV3B2Y2xabGNuTnBiMjRpT2lBeExBb0pJbTFwYm05eVZtVnljMmx2YmlJNklESXNDZ2tpZG1WeWMybHZiaUk2SUNKV1pYSnphVzl1SURFdU1pSXNDZ2tpWm05dWRFbGtJam9nSW1nMWNDMWliMjlySWl3S0NTSndjMDVoYldVaU9pQWlhRFZ3TFdKdmIyc2lMQW9KSW5OMVlrWmhiV2xzZVNJNklDSlNaV2QxYkdGeUlpd0tDU0ptZFd4c1RtRnRaU0k2SUNKb05YQXRZbTl2YXlJS2ZRcGRYVDRLUEM5cWMyOXVQZ284TDIxbGRHRmtZWFJoUGdvOFpHVm1jejRLUEdadmJuUWdhV1E5SW1nMWNDMWliMjlySWlCb2IzSnBlaTFoWkhZdGVEMGlNVEF5TkNJK0NqeG1iMjUwTFdaaFkyVWdkVzVwZEhNdGNHVnlMV1Z0UFNJeE1ESTBJaUJoYzJObGJuUTlJamsyTUNJZ1pHVnpZMlZ1ZEQwaUxUWTBJaUF2UGdvOGJXbHpjMmx1WnkxbmJIbHdhQ0JvYjNKcGVpMWhaSFl0ZUQwaU1UQXlOQ0lnTHo0S1BHZHNlWEJvSUhWdWFXTnZaR1U5SWlZamVESXdPeUlnYUc5eWFYb3RZV1IyTFhnOUlqVXhNaUlnWkQwaUlpQXZQZ284WjJ4NWNHZ2dkVzVwWTI5a1pUMGlKaU40WlRrd01Ec2lJR2RzZVhCb0xXNWhiV1U5SW1Oc2IzTmxJaUJrWVhSaExYUmhaM005SW1Oc2IzTmxJaUJrUFNKTk1UQXlOQ0E0TlRZdU9EWTViQzB4TURNdU1UTXhJREV3TXk0eE16RXROREE0TGpnMk9TMDBNRGd1T0RZNUxUUXdPQzQ0TmprZ05EQTRMamcyT1MweE1ETXVNVE14TFRFd015NHhNekVnTkRBNExqZzJPUzAwTURndU9EWTVMVFF3T0M0NE5qa3ROREE0TGpnMk9TQXhNRE11TVRNeExURXdNeTR4TXpFZ05EQTRMamcyT1NBME1EZ3VPRFk1SURRd09DNDROamt0TkRBNExqZzJPU0F4TURNdU1UTXhJREV3TXk0eE16RXROREE0TGpnMk9TQTBNRGd1T0RZNWVpSWdMejRLUEdkc2VYQm9JSFZ1YVdOdlpHVTlJaVlqZUdVNU1ERTdJaUJuYkhsd2FDMXVZVzFsUFNKbGVIQmhibVJsWkNJZ1pHRjBZUzEwWVdkelBTSmxlSEJoYm1SbFpDSWdaRDBpVFRVMU9DNHhNRFFnTVRjNExqazBObXcwTkRjdU5qTTNJRFEwTnk0Mk16ZGpNalF1T1RjMUlESTBMamszTlNBeU5DNHdNVFlnTmpZdU1qZ3hMVEF1T1RZeElEa3hMakkxTlMweE1TNDFNamNnTVRFdU5USTNMVEkzTGpnMU5pQXhPQzR5TlRJdE5EUXVNVGc0SURFNExqSTFNbWd0T0RrMkxqSXpNbU10TXpRdU5UZ3hJREF0TmpNdU16azVMVEkzTGpnMU5pMDJOQzR6TmkwMk1pNDBNemdnTUMweE55NHlPVEVnTmk0M01qVXRNek11TmpJZ01Ua3VNakV4TFRRMkxqRXdPR3cwTkRjdU5qTTNMVFEwTnk0Mk16ZGpNak11TURVMExUSTBMamszTlNBMk1pNDBNemd0TWpZdU9EazNJRGc0TGpNM05DMHpMamcwTXlBd0xqazJNU0F3TGprMk1TQXhMamt5SURFdU9USWdNaTQ0T0RJZ01pNDRPREo2SWlBdlBnbzhaMng1Y0dnZ2RXNXBZMjlrWlQwaUppTjRaVGt3TWpzaUlHZHNlWEJvTFc1aGJXVTlJbU52Ykd4aGNITmxaQ0lnWkdGMFlTMTBZV2R6UFNKamIyeHNZWEJ6WldRaUlHUTlJazAzT0RFdU1EVTBJRFE1TkM0eE1EUnNMVFEwTnk0Mk16Y2dORFEzTGpZek4yTXRNalF1T1RjMUlESTBMamszTlMwMk5pNHlPREVnTWpRdU1ERTJMVGt4TGpJMU5TMHdMamsyTVMweE1TNDFNamN0TVRFdU5USTNMVEU0TGpJMU1pMHlOeTQ0TlRZdE1UZ3VNalV5TFRRMExqRTRPSFl0T0RrMkxqSXpNbU13TFRNMExqVTRNU0F5Tnk0NE5UWXROak11TXprNUlEWXlMalF6T0MwMk5DNHpOaUF4Tnk0eU9URWdNQ0F6TXk0Mk1pQTJMamN5TlNBME5pNHhNRGdnTVRrdU1qRXhiRFEwTnk0Mk16Y2dORFEzTGpZek4yTXlOQzQ1TnpVZ01qTXVNRFUwSURJMkxqZzVOeUEyTWk0ME16Z2dNeTQ0TkRNZ09EZ3VNemMwTFRBdU9UWXhJREF1T1RZeExURXVPVElnTVM0NU1pMHlMamc0TWlBeUxqZzRNbm9pSUM4K0NqeG5iSGx3YUNCMWJtbGpiMlJsUFNJbUkzaGxPVEF6T3lJZ1oyeDVjR2d0Ym1GdFpUMGlZMmhoY0hSbGNpMXpkR0Z5ZEdWa0lpQmtZWFJoTFhSaFozTTlJbU5vWVhCMFpYSXRjM1JoY25SbFpDSWdaRDBpVFRNek1DNHlORGdnTVRNMExqUXdPR010TlRRdU16azVJRE14TGpNMkxURXdNQzQwTnpnZ056Y3VORE00TFRFek1TNDRNellnTVRNeExqZ3pOaTAyTkM0Mk16Z2dNVEV5TGpZek55MDJOQzQyTXpnZ01qVXdMamczTXlBd0lETTJNeTQxTVRFZ016RXVNellnTlRRdU16azVJRGMzTGpRek9DQXhNREF1TkRjNElERXpNUzQ0TXpZZ01UTXhMamd6TmlBMU5TNHdNemdnTXpFdU9UazVJREV4Tnk0M05UY2dORGt1TWpjNElERTRNUzQzTlRVZ05EZ3VOak01ZGkwM01qUXVORFl4WXkwMk15NDVPVGt0TUM0Mk5DMHhNall1TnpFM0lERTJMall6T1MweE9ERXVOelUxSURRNExqWXpPWHBOT1RVMExqZzNNU0EzTURNdU9UazBZeTAwTkM0M09Ua2dOemN1TkRNNExURXdPUzQwTXpjZ01UUXlMakEzTmkweE9EWXVPRGMySURFNE5pNDROell0TnpjdU5ETTRJRFExTGpRek9DMHhOalV1TnpVMklEWTVMamMxT1MweU5UVXVPVGswSURZNUxqRXhPQzA1TUM0eU16Z2dNQzQyTkMweE56Z3VOVFUxTFRJekxqWTRMVEkxTlM0NU9UUXROamt1TVRFNExUYzNMalF6T0MwME5DNDNPVGt0TVRReUxqQTNOaTB4TURrdU5ETTNMVEU0Tmk0NE56WXRNVGcyTGpnM05pMDBOUzQwTXpndE56Y3VORE00TFRZNUxqYzFPUzB4TmpVdU56VTJMVFk1TGpFeE9DMHlOVFV1T1RrMExUQXVOalF0T1RBdU1qTTRJREl6TGpBek9TMHhOemd1TlRVMUlEWTRMalEzT0MweU5UVXVPVGswSURRMExqYzVPUzAzTnk0ME16Z2dNVEE1TGpRek55MHhOREl1TURjMklERTROeTQxTVRVdE1UZzJMamczTmlBM055NDBNemd0TkRVdU5ETTRJREUyTlM0M05UWXROamt1TnpVNUlESTFOUzQ1T1RRdE5qa3VNVEU0SURrd0xqSXpPQzB3TGpZMElERTNPQzQxTlRVZ01qTXVNRE01SURJMU5TNDVPVFFnTmpndU5EYzRJRGMzTGpRek9DQTBOQzQzT1RrZ01UUXlMakEzTmlBeE1Ea3VORE0zSURFNE5pNDROellnTVRnM0xqVXhOU0EwTlM0ME16Z2dOemN1TkRNNElEWTVMamMxT1NBeE5qVXVOelUySURZNUxqRXhPQ0F5TlRVdU9UazBJREF1TmpRZ09UQXVNak00TFRJekxqWTRJREUzT0M0MU5UVXROamt1TVRFNElESTFOUzQ1T1RSNklpQXZQZ284WjJ4NWNHZ2dkVzVwWTI5a1pUMGlKaU40WlRrd05Ec2lJR2RzZVhCb0xXNWhiV1U5SW1Ob1lYQjBaWEl0Wkc5dVpTSWdaR0YwWVMxMFlXZHpQU0pqYUdGd2RHVnlMV1J2Ym1VaUlHUTlJazA0TlRVdU5qYzBJRFUxTmk0eE5UaGpNQzB4TVM0MU1pMHpMamcwTFRJeUxqTTVPUzB4TWk0eE5pMHpNQzR3Tnpsc0xUTTJNUzQxT1RFdE16WXhMalU1TVdNdE9DNHpNaTA0TGpNeUxURTVMakU1T1MweE1pNDNPVGt0TXpBdU56RTVMVEV5TGpjNU9YTXRNakl1TXprNUlEUXVORGd0TXpBdU1EYzVJREV5TGpjNU9Xd3RNalF3TGpZek5DQXlOREF1TmpNMFl5MDRMak15SURjdU5qZ3RNVEl1TVRZZ01UZ3VOVFU1TFRFeUxqRTJJRE13TGpBM09TMHdMalkwSURFeExqVXlJRE11T0RRZ01qSXVNems1SURFeUxqRTJJRE13TGpjeE9XdzJNQzQzT1RnZ05qQXVNVFU1WXpFMklERTJMall6T1NBME1pNHlNemtnTVRjdU1qZ2dOVGd1T0RjNElERXVNamM1SURBdU5qUXRNQzQyTkNBd0xqWTBMVEF1TmpRZ01TNHlOemt0TVM0eU56bHNNVFV3TGpNNU55MHhOVEF1TXprM0lESTNNUzR6TlRNZ01qY3dMamN4TTJNeE5pQXhOaTQyTXprZ05ESXVNak01SURFM0xqSTRJRFU0TGpnM09DQXhMakkzT1NBd0xqWTBMVEF1TmpRZ01DNDJOQzB3TGpZMElERXVNamM1TFRFdU1qYzViRFl3TGpjNU9DMDJNQzR4TlRsak9DNHpNaTA0TGpNeUlERXlMamM1T1MweE9TNHhPVGtnTVRJdU1UWXRNekF1TnpFNWRqQnNMVEF1TmpRZ01DNDJOSHBOT1RVMExqZzNNU0EzTURNdU9UazBZeTAwTkM0M09Ua2dOemN1TkRNNExURXdPUzQwTXpjZ01UUXlMakEzTmkweE9EWXVPRGMySURFNE5pNDROell0TnpjdU5ETTRJRFExTGpRek9DMHhOalV1TnpVMklEWTVMamMxT1MweU5UVXVPVGswSURZNUxqRXhPQzA1TUM0eU16Z2dNQzQyTkMweE56Z3VOVFUxTFRJekxqWTRMVEkxTlM0NU9UUXROamt1TVRFNExUYzNMalF6T0MwME5DNDNPVGt0TVRReUxqQTNOaTB4TURrdU5ETTNMVEU0Tmk0NE56WXRNVGcyTGpnM05pMDBOUzQwTXpndE56Y3VORE00TFRZNUxqYzFPUzB4TmpVdU56VTJMVFk1TGpFeE9DMHlOVFV1T1RrMExUQXVOalF0T1RBdU1qTTRJREl6TGpBek9TMHhOemd1TlRVMUlEWTRMalEzT0MweU5UVXVPVGswSURRMExqYzVPUzAzTnk0ME16Z2dNVEE1TGpRek55MHhOREl1TURjMklERTROeTQxTVRVdE1UZzJMamczTmlBM055NDBNemd0TkRVdU5ETTRJREUyTlM0M05UWXROamt1TnpVNUlESTFOUzQ1T1RRdE5qa3VNVEU0SURrd0xqSXpPQzB3TGpZMElERTNPQzQxTlRVZ01qTXVNRE01SURJMU5TNDVPVFFnTmpndU5EYzRJRGMzTGpRek9DQTBOQzQzT1RrZ01UUXlMakEzTmlBeE1Ea3VORE0zSURFNE5pNDROellnTVRnM0xqVXhOU0EwTlM0ME16Z2dOemN1TkRNNElEWTVMamMxT1NBeE5qVXVOelUySURZNUxqRXhPQ0F5TlRVdU9UazBJREF1TmpRZ09UQXVNak00TFRJekxqWTRJREUzT0M0MU5UVXROamt1TVRFNElESTFOUzQ1T1RSNklpQXZQZ284WjJ4NWNHZ2dkVzVwWTI5a1pUMGlKaU40WlRrd05Uc2lJR2RzZVhCb0xXNWhiV1U5SW1Ob1lYQjBaWEl0WW14aGJtc2lJR1JoZEdFdGRHRm5jejBpWTJoaGNIUmxjaTFpYkdGdWF5SWdaRDBpVFRZNU15NDNOVFVnTnpZeExqVTVNbU0xTkM0ek9Ua3RNekV1TXpZZ01UQXdMalEzT0MwM055NDBNemdnTVRNeExqZ3pOaTB4TXpFdU9ETTJJRFkwTGpZek9DMHhNVEl1TmpNM0lEWTBMall6T0MweU5UQXVPRGN6SURBdE16WXpMalV4TVMwek1TNHpOaTAxTkM0ek9Ua3ROemN1TkRNNExURXdNQzQwTnpndE1UTXhMamd6TmkweE16RXVPRE0yTFRFeE1pNDJNemN0TmpRdU5qTTRMVEkxTUM0NE56TXROalF1TmpNNExUTTJNeTQxTVRFZ01DMDFOQzR6T1RrZ016RXVNell0TVRBd0xqUTNPQ0EzTnk0ME16Z3RNVE14TGpnek5pQXhNekV1T0RNMkxUWTBMall6T0NBeE1USXVOak0zTFRZMExqWXpPQ0F5TlRBdU9EY3pJREFnTXpZekxqVXhNU0F6TVM0ek5pQTFOQzR6T1RrZ056Y3VORE00SURFd01DNDBOemdnTVRNeExqZ3pOaUF4TXpFdU9ETTJJREV4TWk0Mk16Y2dOalF1TmpNNElESTFNQzQ0TnpNZ05qUXVOak00SURNMk15NDFNVEVnTUhwTk9UVTBMamcyT0NBM01ETXVPVGswWXkwME5DNDNPVGtnTnpjdU5ETTRMVEV3T1M0ME16Y2dNVFF5TGpBM05pMHhPRFl1T0RjMklERTROaTQ0TnpZdE56Y3VORE00SURRMUxqUXpPQzB4TmpVdU56VTJJRFk1TGpjMU9TMHlOVFV1T1RrMElEWTVMakV4T0MwNU1DNHlNemdnTUM0Mk5DMHhOemd1TlRVMUxUSXpMalk0TFRJMU5TNDVPVFF0TmprdU1URTRMVGMzTGpRek9DMDBOQzQzT1RrdE1UUXlMakEzTmkweE1Ea3VORE0zTFRFNE5pNDROell0TVRnMkxqZzNOaTAwTlM0ME16Z3ROemN1TkRNNExUWTVMamMxT1MweE5qVXVOelUyTFRZNUxqRXhPQzB5TlRVdU9UazBMVEF1TmpRdE9UQXVNak00SURJekxqQXpPUzB4TnpndU5UVTFJRFk0TGpRM09DMHlOVFV1T1RrMElEUTBMamM1T1MwM055NDBNemdnTVRBNUxqUXpOeTB4TkRJdU1EYzJJREU0Tnk0MU1UVXRNVGcyTGpnM05pQTNOeTQwTXpndE5EVXVORE00SURFMk5TNDNOVFl0TmprdU56VTVJREkxTlM0NU9UUXROamt1TVRFNElEa3dMakl6T0Mwd0xqWTBJREUzT0M0MU5UVWdNak11TURNNUlESTFOUzQ1T1RRZ05qZ3VORGM0SURjM0xqUXpPQ0EwTkM0M09Ua2dNVFF5TGpBM05pQXhNRGt1TkRNM0lERTROaTQ0TnpZZ01UZzNMalV4TlNBME5TNDBNemdnTnpjdU5ETTRJRFk1TGpjMU9TQXhOalV1TnpVMklEWTVMakV4T0NBeU5UVXVPVGswSURBdU5qUWdPVEF1TWpNNExUSXpMalk0SURFM09DNDFOVFV0TmprdU1URTRJREkxTlM0NU9UUjZJaUF2UGdvOFoyeDVjR2dnZFc1cFkyOWtaVDBpSmlONFpUa3dOanNpSUdkc2VYQm9MVzVoYldVOUltMWxiblVpSUdSaGRHRXRkR0ZuY3owaWJXVnVkU0lnWkQwaVRUQWdNVEEyTGpkb01UQXlOSFl4TXpNdU4yZ3RNVEF5TkhZdE1UTXpMamQ2VFRBZ016Z3hMakZvTVRBeU5IWXhNek11T0dndE1UQXlOSFl0TVRNekxqaDZUVEFnTnpnNUxqTjJMVEV6TXk0NGFERXdNalIyTVRNekxqaG9MVEV3TWpSNklpQXZQZ284WjJ4NWNHZ2dkVzVwWTI5a1pUMGlKaU40WlRrd056c2lJR2RzZVhCb0xXNWhiV1U5SW5CeVpYWnBiM1Z6SWlCa1lYUmhMWFJoWjNNOUluQnlaWFpwYjNWeklpQmtQU0pOT0RJNExqRTJJRFUyTGpNeWJDMHpPVEF1T0RJMklETTVNUzQyT0NBek9UQXVPREkySURNNU1TNDJPQzB4TWpBdU16SWdNVEl3TGpNeUxUVXhNaTAxTVRJZ05URXlMVFV4TW5vaUlDOCtDanhuYkhsd2FDQjFibWxqYjJSbFBTSW1JM2hsT1RBNE95SWdaMng1Y0dndGJtRnRaVDBpYm1WNGRDSWdaR0YwWVMxMFlXZHpQU0p1WlhoMElpQmtQU0pOTVRrMUxqZzBJRFUyTGpNeWJETTVNQzQ0TWpZZ016a3hMalk0TFRNNU1DNDRNallnTXpreExqWTRJREV5TUM0ek1pQXhNakF1TXpJZ05URXlMVFV4TWkwMU1USXROVEV5ZWlJZ0x6NEtQR2RzZVhCb0lIVnVhV052WkdVOUlpWWplR1U1TURrN0lpQm5iSGx3YUMxdVlXMWxQU0oxY0NJZ1pHRjBZUzEwWVdkelBTSjFjQ0lnWkQwaVRUQWdORFE0YkRrd0xqSTBMVGt3TGpJMElETTFOeTQzTmlBek5UY3VNVEoyTFRjM09DNDROemxvTVRJM0xqazVPWFkzTnpndU9EYzViRE0xTnk0eE1pMHpOVGN1TnpZZ09UQXVPRGdnT1RBdU9EZ3ROVEV4TGprNU9TQTFNVEV1T1RrNUxUVXhNUzQ1T1RrdE5URXhMams1T1hvaUlDOCtDanhuYkhsd2FDQjFibWxqYjJSbFBTSW1JM2hsT1RCaE95SWdaMng1Y0dndGJtRnRaVDBpY1hWbGMzUnBiMjR0WVc1emQyVnlaV1FpSUdSaGRHRXRkR0ZuY3owaWNYVmxjM1JwYjI0dFlXNXpkMlZ5WldRaUlHUTlJazA1TlRRdU9TQTNNRFJqTFRRMExqZ2dOemN1TkMweE1Ea3VOU0F4TkRJdU1TMHhPRFl1T1NBeE9EWXVPUzAzTnk0MElEUTFMalF0TVRZMUxqZ2dOamt1TnkweU5UWWdOamt1TVMwNU1DNHlJREF1TmkweE56Z3VOaTB5TXk0M0xUSTFOaTAyT1M0eExUYzNMalF0TkRRdU9DMHhOREl1TVMweE1Ea3VOUzB4T0RZdU9TMHhPRFl1T1MwME5TNDBMVGMzTGpRdE5qa3VOeTB4TmpVdU9DMDJPUzR4TFRJMU5pMHdMall0T1RBdU1pQXlNeTB4TnpndU5pQTJPQzQxTFRJMU5pQTBOQzQ0TFRjM0xqUWdNVEE1TGpRdE1UUXlMakVnTVRnM0xqVXRNVGcyTGprZ056Y3VOQzAwTlM0MElERTJOUzQ0TFRZNUxqZ2dNalUyTFRZNUxqRWdPVEF1TWkwd0xqWWdNVGM0TGpZZ01qTWdNalUySURZNExqVWdOemN1TkNBME5DNDRJREUwTWk0eElERXdPUzQwSURFNE5pNDVJREU0Tnk0MUlEUTFMalFnTnpjdU5DQTJPUzQ0SURFMk5TNDRJRFk1TGpFZ01qVTJJREF1TmlBNU1DNHlMVEl6TGpjZ01UYzRMall0TmprdU1TQXlOVFoyTUhvaUlDOCtDanhuYkhsd2FDQjFibWxqYjJSbFBTSW1JM2hsT1RCaU95SWdaMng1Y0dndGJtRnRaVDBpWm5Wc2JDMXpZM0psWlc0dFpXNTBaWElpSUdSaGRHRXRkR0ZuY3owaVpuVnNiQzF6WTNKbFpXNHRaVzUwWlhJaUlHaHZjbWw2TFdGa2RpMTRQU0l4TURJMUlpQmtQU0pOTVRBeU5TQXlNRE11TTJNd0lETXlMamt0TVRJdU55QTBOaTQyTFRReklEUTJMaloyTUdNdE1qa3VPU0F3TFRReUxqVXRNVFF1TWkwME15MDBOaTQySURBdE1qZ3VPU0F3TFRVM0xqY2dNQzA0T1M0eGRpMHpNUzQ1YkMweU16WXVPU0F5TXpZdU9XTXRNalF1T0NBeU5DNDRMVFEwTGpVZ05EUXVOUzAzTmk0NUlEYzJMamt0TWpJdU9DQXlNaTQ0TFRNNUxqVWdNakl1T0MwMk1DNDNJREV1TlMweE1TNHhMVEV4TGpFdE1UWXVNaTB5TUM0eUxURTJMakl0TWprdU5DQXdMVEV3TGpFZ05TNDJMVEl3TGpJZ01UZ3VOeTB6TXk0MElEWXlMak10TmpJdU9DQXhNVFl1TkMweE1UWXVOQ0F4TnpFdU5pMHhOekV1TmlBME1DMDBNQ0E0TVMwNE1TQXhNall1TlMweE1qWXVOU0EwTFRRZ055NDJMVGd1TVNBeE1pNHhMVEV6TGpKc01DNDFMVEF1TldNdE1UQXVOaUF3TFRJd0xqZ2dNQzB6TUM0NUlEQXRNekV1TkNBd0xUWXhMaklnTUMwNU1TNHhJREF0TXpBdU9TQXdMVFEwTGpVdE1UTXVNaTAwTkM0MUxUUXlMalVnTUMweE5DNDNJRE10TWpVdU9DQXhNQzR4TFRNeUxqUWdOeTR4TFRjdU1TQXhPQzR5TFRFd0xqWWdNek11TkMweE1DNDJJRE0xTGpRZ01DQTNNaTQwSURBZ01URXdMamtnTUNBek5TNDVJREFnTnpNdU9TQXdJREV4TXk0NUlEQWdNekl1TkNBd0lEUTFMakVnTVRJdU55QTBOUzR4SURRMExqVWdNQzQwSURZMExqa2dNQzQwSURFek5TNDNJREF1TkNBeU1qRXVNM1l3ZWsweU56Z3VPU0EzTkRFdU0yd3RNVEUzTGpRZ01URTNMalZqTFRRZ05DMDRMakVnT0M0eExURXpMaklnTVRNdU55MHdMalVnTUM0MUxURWdNUzB4TGpVZ01TNDFJREV4TGpFZ01DQXlNUzQ0SURBZ016SXVOQ0F3SURNeUxqUWdNQ0EyTXk0eklEQWdPVE11TmlBd0lESTNMamdnTUM0MUlEUXhMalVnTVRRdU55QTBNU0EwTXk0MUxUQXVOU0F6TkM0MExUSXhMamdnTkRJdE16a3VOU0EwTWkwNE1pQXdMalV0TVRZMExqVWdNQzQxTFRJek5TNHpJREF0TWpNdU9DQXdMVE00TGpVdE1UUXVNaTB6T0M0MUxUTTNMalV0TUM0MUxUZzNMVEF1TlMweE5qUXVOU0F3TFRJek55NDVJREF0TVRFdU5pQXpMalV0TWpBdU9DQXhNQzR4TFRJM0xqTWdOeTQyTFRjdU5pQXhPQzQzTFRFd0xqWWdNek11T1MweE1DNDJJREkzTGpNZ01DNDFJRFF4SURFekxqY2dOREV1TlNBME1DQXdMalVnTWpRdU15QXdMalVnTkRrdU1TQXdMalVnTnpJdU9TQXdJREUwTGpjZ01DQXlPQzQ1SURBZ05ETXVOU0F3SURNZ01DNDFJRFl1TVNBeElERXdMakVnTkMwekxqVWdOeTR4TFRZdU5pQXhNQzR4TFRrdU5td3hNRGt1T0MweE1Ea3VPR00yTVM0eUxUWXlMak1nTVRJd0xqVXRNVEl4SURFNE9TNDRMVEU1TUM0eklERXpMamN0TVRNdU55QXlOQzR6TFRFNUxqY2dNelF1T1MweE9TNDNhREF1TldNeE1DNHhJREFnTVRrdU55QTFMallnTXpBdU9TQXhPQzR5SURFNUxqSWdNakV1TXlBeE55NDNJRE0zTFRVdU5pQTJNQzQzTFRZMUxqRWdOalV1TWkweE1qRXVNeUF4TWpFdU5DMHhOemtnTVRjNUxqRjJNSHBOTWpZM0xqRXROak11TjJNek1pNDVJREFnTkRZdU5pQXhNaTQzSURRMkxqWWdORE4yTUdNd0lESTVMamt0TVRRdU1pQTBNaTQxTFRRMkxqWWdORE10TWpndU9TQXdMVFUzTGpjZ01DMDRPUzR4SURCb0xUTXhMamxzTWpNMkxqa2dNak0yTGpsak1qUXVPQ0F5TkM0NElEUTBMalVnTkRRdU5TQTNOaTQ1SURjMkxqa2dNakl1T0NBeU1pNDRJREl5TGpnZ016a3VOU0F4TGpVZ05qQXVOeTB4TVM0eElERXhMakV0TWpBdU1pQXhOaTR5TFRJNUxqUWdNVFl1TWkweE1DNHhJREF0TWpBdU1pMDFMall0TXpNdU5DMHhPQzQzTFRZeUxqWXROakl1TWkweE1UWXVNeTB4TVRZdU5DMHhOekV1TlMweE56RXVOaTAwTUMwME1DMDRNUzA0TVMweE1qWXVOUzB4TWpZdU5TMDBMVFF0T0M0eExUY3VOaTB4TXk0eUxURXlMakZzTFRBdU5TMHdMalZqTUNBeE1DNDJJREFnTWpBdU9DQXdJRE13TGprZ01DQXpNUzQwSURBZ05qRXVNaUF3SURreExqRWdNQ0F6TUM0NUxURXpMaklnTkRRdU5TMDBNaTQxSURRMExqVXRNVFF1TnlBd0xUSTFMamd0TXkwek1pNDBMVEV3TGpFdE55NHhMVGN1TVMweE1DNDJMVEU0TGpJdE1UQXVOaTB6TXk0MElEQXRNelV1TkNBd0xUY3lMalFnTUMweE1UQXVPU0F3TFRNMUxqa2dNQzAzTXk0NUlEQXRNVEV6TGprZ01DMHpNaTQwSURFeUxqY3RORFV1TVNBME5DNDFMVFExTGpFZ05qUXVPQzB3TGpRZ01UTTFMamN0TUM0MElESXlNUzR5TFRBdU5IWXdlazA0TURVdU1pQTJPREl1Tkd3eE1UY3VOQ0F4TVRjdU5HTTBJRFFnT0M0eElEZ3VNU0F4TXk0M0lERXpMaklnTUM0MUlEQXVOU0F4SURFZ01TNDFJREV1TlNBd0xURXhMakVnTUMweU1TNDRJREF0TXpJdU5DQXdMVE15TGpRZ01DMDJNeTR6SURBdE9UTXVOaUF3TGpVdE1qY3VPQ0F4TkM0M0xUUXhMalVnTkRNdU5TMDBNU0F6TkM0MElEQXVOU0EwTWlBeU1TNDRJRFF5SURNNUxqVWdNQzQxSURneUlEQXVOU0F4TmpRdU5TQXdJREl6TlM0MElEQWdNak11T0MweE5DNHlJRE00TGpVdE16Y3VOU0F6T0M0MUxUZzNMakVnTUM0MUxURTJOQzQxSURBdU5TMHlNemN1T1NBd0xURXhMallnTUMweU1DNDRMVE11TlMweU55NHpMVEV3TGpFdE55NDFMVGN1T0MweE1DNDJMVEU0TGprdE1UQXVOaTB6TkM0eElEQXVOUzB5Tnk0eklERXpMamN0TkRFZ05EQXROREV1TlNBeU5DNHpMVEF1TlNBME9TNHhMVEF1TlNBM01pNDVMVEF1TlNBeE5DNDNJREFnTWpndU9TQXdJRFF6TGpVZ01DQXpJREFnTmk0eExUQXVOU0F4TUM0eExURXRNeTQxTFRRdE5pNDJMVGN1TVMwNUxqWXRNVEF1TVd3dE1UQTVMamd0TVRBNUxqbGpMVFl5TGpNdE5qRXVNaTB4TWpFdE1USXdMalV0TVRrd0xqTXRNVGc1TGpndE1UTXVOeTB4TXk0M0xURTVMamN0TWpRdU15MHhPUzQzTFRNMExqbDJMVEF1TldNd0xURXdMakVnTlM0MkxURTVMamNnTVRndU1pMHpNQzQ1SURJeExqTXRNVGt1TWlBek55MHhOeTQzSURZd0xqY2dOUzQySURZMUxqTWdOalV1TXlBeE1qRXVOU0F4TWpFdU5TQXhOemt1TWlBeE56a3VNbll3ZWlJZ0x6NEtQR2RzZVhCb0lIVnVhV052WkdVOUlpWWplR1U1TUdNN0lpQm5iSGx3YUMxdVlXMWxQU0ptZFd4c0xYTmpjbVZsYmkxbGVHbDBJaUJrWVhSaExYUmhaM005SW1aMWJHd3RjMk55WldWdUxXVjRhWFFpSUdodmNtbDZMV0ZrZGkxNFBTSXhNREkxSWlCa1BTSk5OVFE0SURFME5pNHhZekF0TXpJdU9TQXhNaTQzTFRRMkxqWWdORE10TkRZdU5uWXdZekk1TGprZ01DQTBNaTQxSURFMExqSWdORE1nTkRZdU5pQXdJREk0TGprZ01DQTFOeTQzSURBZ09Ea3VNWFl6TVM0NWJESXpOaTQ1TFRJek5pNDVZekkwTGpndE1qUXVPQ0EwTkM0MUxUUTBMalVnTnpZdU9TMDNOaTQ1SURJeUxqZ3RNakl1T0NBek9TNDFMVEl5TGpnZ05qQXVOeTB4TGpVZ01URXVNU0F4TVM0eElERTJMaklnTWpBdU1pQXhOaTR5SURJNUxqUWdNQ0F4TUM0eExUVXVOaUF5TUM0eUxURTRMamNnTXpNdU5DMDJNaTR6SURZeUxqZ3RNVEUyTGpRZ01URTJMalF0TVRjeExqWWdNVGN4TGpZdE5EQWdOREF0T0RFZ09ERXRNVEkyTGpVZ01USTJMalV0TkNBMExUY3VOaUE0TGpFdE1USXVNU0F4TXk0eWJDMHdMalVnTUM0MVl6RXdMallnTUNBeU1DNDRJREFnTXpBdU9TQXdJRE14TGpRZ01DQTJNUzR5SURBZ09URXVNU0F3SURNd0xqa2dNQ0EwTkM0MUlERXpMaklnTkRRdU5TQTBNaTQxSURBZ01UUXVOeTB6SURJMUxqZ3RNVEF1TVNBek1pNDBMVGN1TVNBM0xqRXRNVGd1TWlBeE1DNDJMVE16TGpRZ01UQXVOaTB6TlM0MElEQXROekl1TkNBd0xURXhNQzQ1SURBdE16VXVPU0F3TFRjekxqa2dNQzB4TVRNdU9TQXdMVE15TGpRZ01DMDBOUzB4TWk0M0xUUTFMVFEwTGpVdE1TMDJOQzQwTFRFdE1UTTFMak10TUM0MUxUSXlNUzR6ZGpCNlRURTVPQzR5SURjd01TNDViREV4Tnk0MExURXhOeTQwWXpRdE5DQTRMakV0T0M0eElERXpMakl0TVRNdU55QXdMalV0TUM0MUlERXRNU0F4TGpVdE1TNDFMVEV4TGpFZ01DMHlNUzQ0SURBdE16SXVOQ0F3TFRNeUxqUWdNQzAyTXk0eklEQXRPVE11TmlBd0xUSTNMamd0TUM0MUxUUXhMalV0TVRRdU55MDBNUzAwTXk0MUlEQXVOUzB6TkM0MElESXhMamd0TkRJZ016a3VOUzAwTWlBNE1pMHdMalVnTVRZMExqVXRNQzQxSURJek5TNDBJREFnTWpRdU15QXdJRE00TGpVZ01UUXVNaUF6T0M0MUlETTRJREF1TlNBNE5pNDJJREF1TlNBeE5qUXVOU0F3SURJek55NDVJREFnTVRFdU5pMHpMalVnTWpBdU9DMHhNQzR4SURJM0xqTXROeTQySURjdU1TMHhPQzQzSURFd0xqWXRNek11T1NBeE1DNDJMVEkzTGpNdE1DNDFMVFF4TFRFekxqY3ROREV1TlMwME1DMHdMalV0TWpRdU15MHdMalV0TkRrdU1TMHdMalV0TnpJdU9TQXdMVEUwTGpjZ01DMHlPQzQ1SURBdE5ETXVOU0F3TFRNdE1DNDFMVFl1TVMweExURXdMakV0TkNBekxqVXROeTR4SURZdU5pMHhNQzR4SURrdU5td3RNVEE1TGpVZ01UQTVMak5qTFRZeExqZ2dOakl1TXkweE1qRWdNVEl4TFRFNU1DNHpJREU1TUM0ekxURXpMamNnTVRNdU55MHlOQzR6SURFNUxqY3RNelVnTVRrdU4yZ3RNQzQxWXkweE1DNHhJREF0TVRrdU55MDFMalV0TXpBdU9DMHhPQzR5TFRFNUxqTXRNakV1TWkweE55NDRMVE0yTGprZ05TNDFMVFl3TGpjZ05qVXVNeTAyTlM0eklERXlNUzB4TWpFdU5TQXhOemt1TWkweE56a3VNbll3ZWlJZ0x6NEtQR2RzZVhCb0lIVnVhV052WkdVOUlpWWplR1U1TUdRN0lpQm5iSGx3YUMxdVlXMWxQU0pKWTI5dU5pSWdaR0YwWVMxMFlXZHpQU0pKWTI5dUlEWWlJR1E5SWswMU1USWdOelUxTGpFNU9YWXlNRFF1T0RBeGJDMHlOVFl0TWpVMklESTFOaTB5TlRaMk1qQTBMamd3TVdNeE5qa3VORGN6SURBZ016QTNMakl0TVRNM0xqY3lPQ0F6TURjdU1pMHpNRGN1TW5NdE1UTTNMamN5T0Mwek1EY3VNaTB6TURjdU1pMHpNRGN1TWkwek1EY3VNaUF4TXpjdU56STRMVE13Tnk0eUlETXdOeTR5YUMweE1ESXVOR013TFRJeU5pNHpNRFVnTVRnekxqSTVOeTAwTURrdU5pQTBNRGt1TmkwME1Ea3VObk0wTURrdU5pQXhPRE11TWprM0lEUXdPUzQySURRd09TNDJMVEU0TXk0eU9UY2dOREE1TGpZdE5EQTVMallnTkRBNUxqWjZJaUF2UGdvOFoyeDVjR2dnZFc1cFkyOWtaVDBpSmlONFpUa3daVHNpSUdkc2VYQm9MVzVoYldVOUluSmxjRzl5ZEdsamIyNHRkakl0Wm5Wc2JERWlJR1JoZEdFdGRHRm5jejBpY21Wd2IzSjBJR2xqYjI0dGRqSXRablZzYkNBb01Ta2lJR2h2Y21sNkxXRmtkaTE0UFNJeE1ERXpJaUJrUFNKTk5UTTVMakV5TnlBNU16Z3VNREkyZGkweE1Ua3VOVEkwYURFeE9TNDFNalI2VFRjNE1pNDBOalVnTlRNd0xqWTNOMk15TUM0d09Ua3ROVEl1TWpVNElEUTBMalE0TnkweU16QXVNakEySURJekxqVTROQzB5T0RFdU5qWXhMVGt1TVRFeUxUSXlMalV4TVMweU15NHpNVFV0TXprdU5qWXpMVFV3TGpFeE5DMHpPQzR3TlRVdE1qZ3VOamMxSURFdU5qQTRMVFExTGpBeU15QXhPUzR3TWpjdE5UQXVOalV4SURRMkxqTTJNeTB4TGpnM05pQTVMak00TFRBdU9EQTBJREU1TGpJNU5pMHdMamd3TkNBeU9DNDVORE10TUM0eU5qZ2dNekF1TWpnMElERXVNelFnTmpBdU5UWTJMVEF1TlRNMklEa3dMalU0TVMweExqTTBJREl5TGpjM09TMHhNeTQ1TXpVZ016a3VNemsxTFRRd0xqRTVPU0EwTmk0d09UVXRNVFV1TURBNExUVTRMamsxT0Mwek1DNHlPRFF0TVRFMkxqTXdPUzAwTXk0Mk9ESXRNVGMwTGpFNU5pMHlMakUwTkMweE1DNHhPRFFnTVM0NE56WXRNak11TURRM0lEVXVPRGsyTFRNekxqUTVPU0F6Tmk0eE56a3RPVE11TWpZeUlEazVMakUxTnkweE56VXVOVE0xSURFd05pNDVNamt0TWpjNUxqSTBPU0ExTkM0Mk55QTVMalkwTnlBeE1ESXVPVEE1SURFNExqSXlNeUF4TlRRdU9TQXlOeTR6TXpVdE5pNHhOalFnTXpRdU16QXpMVEUyTGpBM09TQTJOUzR4TWpJdE1UVXVPREV5SURrMUxqazBNaUF3TGpJMk9DQXpNUzQ0T1RFZ01UQXVORFV5SURZekxqVXhOQ0F4Tmk0Mk1UVWdPVFV1TkRBMklEVXVNRGt5SURJMUxqUTFPU0F4TUM0NU9EZ2dOVEF1TmpVeElERTFMamd4TWlBM05pNHhNU0F5TlM0NU9UWWdNVE0yTGpRd09TQXhNUzR5TlRZZ01qSTBMalUzT0MwMk1TNDJNemtnTXpRMExqRXdNeTB4TXk0MElESXlMakkwTXkweU5pNDNPVGtnTkRZdU5qTXhMVFF6TGpReE5DQTJNeTQxTVRRdE16TXVORGs1SURNekxqYzJOeTAwTmk0NE9Ua2dORFV1TlRVNExUWTRMall3TnlBMU9DNDBNakoyTFRnMUxqSXlNbU15T0M0eE5DMHhPUzQ0TXpJZ016a3VNemsxTFRRNUxqQTBNeUExTVM0M01qTXRPREF1T1RNMGVrMDFOekV1TlRVMElESTFOeTQ0Tm13d0xqSTJPQ0F3TGpnd05HTXhNQzR4T0RRZ05ETXVOamd5SURJeExqUTBJRGczTGprd01TQXpNaTQwTWpjZ01UTXdMamM0SURNdU56VXlJREUwTGpjMElEY3VOVEF6SURJNUxqUTNPU0F4TVM0MU1qUWdORFF1TkRnM2JERXdMams0T0NBME1pNDROemtnTkRJdU9EYzVMVEV3TGprNE9HTXpMamMxTWkweExqQTNNU0EzTGpVd015MHlMakUwTkNBeE1DNDVPRGd0TXk0ME9EUjJNekV4TGpZM05tZ3RNVGcxTGprNE4zWXhPRFV1T1RnM2FDMHpPVGN1T1RkMkxUY3lNUzQzTURWb05EY3pMakkzTldNdE1DNHlOamdnTmk0ME16SWdNQzR5TmpnZ01USXVPRFkwSURFdU5qQTRJREU1TGpVMk5IcE5NakEzTGpNMU1pQTNOREV1TlRnNGFERTNOeTQ1TkRkMkxUUTBMalE0TjJndE1UYzNMamswTjNZME5DNDBPRGQ2VFRRME5pNHhNelFnTXprM0xqSXhOMmd0TWpNNExqYzRNblkwTkM0ME9EZG9Nak00TGpjNE1uWXRORFF1TkRnM2VrMDFOamt1T1RRMklEUTVNQzR5TVRGb0xUTTJNaTQxT1RWMk5EUXVORGczYURNMk1pNDFPVFYyTFRRMExqUTROM3BOTlRZNUxqazBOaUExT0RNdU1qQTBhQzB6TmpJdU5UazFkalEwTGpRNE4yZ3pOakl1TlRrMWRpMDBOQzQwT0RkNklpQXZQZ284WjJ4NWNHZ2dkVzVwWTI5a1pUMGlKaU40WlRrd1pqc2lJR2RzZVhCb0xXNWhiV1U5SW5KbGNHOXlkR2xqYjI0dGRqSXRablZzYkNJZ1pHRjBZUzEwWVdkelBTSnlaWEJ2Y25RZ2FXTnZiaTEyTWkxbWRXeHNJaUJvYjNKcGVpMWhaSFl0ZUQwaU9UYzVJaUJrUFNKTk56UTRMalEzTnlBNU5ESXVNVE01ZGkweE16QXVPVGMzWXpBdE5TNDVOVE1nTlM0NU5UTXROUzQ1TlRNZ05TNDVOVE10TlM0NU5UTm9NVE13TGprM04yTTFMamsxTXlBd0lERXhMamt3TnlBeE1TNDVNRGNnTlM0NU5UTWdNVEV1T1RBM2JDMHhNekF1T1RjM0lERXpNQzQ1TnpkakxUVXVPVFV6SURVdU9UVXpMVEV4TGprd055QXdMVEV4TGprd055MDFMamsxTTNwTk9UQXpMakkyTnkwMk5HZ3RPREkzTGpVek5XTXROUzQ1TlRNZ01DMDFMamsxTXlBMUxqazFNeTAxTGprMU15QTFMamsxTTNZeE1ERXlMakE1TTJNd0lEVXVPVFV6SURVdU9UVXpJRFV1T1RVeklEVXVPVFV6SURVdU9UVXphRFUzTnk0ME9EaGpOUzQ1TlRNZ01DQTFMamsxTXkwMUxqazFNeUExTGprMU15MDFMamsxTTNZdE1qTXlMakU0Tm1Nd0xUVXVPVFV6SURVdU9UVXpMVFV1T1RVeklEVXVPVFV6TFRVdU9UVXphREl6T0M0eE5HTTFMamsxTXlBd0lEVXVPVFV6TFRVdU9UVXpJRFV1T1RVekxUVXVPVFV6ZGkwM05qSXVNRFEyWXpBdE1URXVPVEEzSURBdE1URXVPVEEzTFRVdU9UVXpMVEV4TGprd04zcE5NVE0xTGpJMk55MDBMalEyTldnM01EZ3VORFkxWXpVdU9UVXpJREFnTlM0NU5UTWdOUzQ1TlRNZ05TNDVOVE1nTlM0NU5UTjJOalF5TGprM04yTXdJRFV1T1RVekxUVXVPVFV6SURVdU9UVXpMVFV1T1RVeklEVXVPVFV6YUMweU16SXVNVGcyWXkwMUxqazFNeUF3TFRVdU9UVXpJRFV1T1RVekxUVXVPVFV6SURVdU9UVXpkakl6T0M0eE5HTXdJRFV1T1RVekxUVXVPVFV6SURVdU9UVXpMVFV1T1RVeklEVXVPVFV6YUMwME5qUXVNemN5WXkwMUxqazFNeUExTGprMU15MHhNUzQ1TURjZ01DMHhNUzQ1TURjdE5TNDVOVE4yTFRnNU15NHdNak5qTUMwMUxqazFNeUExTGprMU15MDFMamsxTXlBeE1TNDVNRGN0TlM0NU5UTjZUVEkwTWk0ME15QTJNemd1TlRFeWFESXpPQzR4TkhZdE5Ua3VOVE0xYUMweU16Z3VNVFIyTlRrdU5UTTFlazB5TkRJdU5ETWdORGc1TGpZM05HZzBPRGd1TVRnMmRpMDFPUzQxTXpWb0xUUTRPQzR4T0RaMk5Ua3VOVE0xZWsweU5ESXVORE1nTWpNNUxqWXlPR2d6TWpFdU5EZzRkaTAxT1M0MU16Vm9MVE15TVM0ME9EaDJOVGt1TlRNMWVrMHlOREl1TkRNZ016WTBMalkxTVdnME9EZ3VNVGcyZGkwMU9TNDFNelZvTFRRNE9DNHhPRFoyTlRrdU5UTTFlaUlnTHo0S1BHZHNlWEJvSUhWdWFXTnZaR1U5SWlZamVHVTVNVEE3SWlCbmJIbHdhQzF1WVcxbFBTSnpkV05qWlhOeklpQmtZWFJoTFhSaFozTTlJbk4xWTJObGMzTWlJR1E5SWswME16TXVPVFF6SURNME5DNDRNRFpzTFRFd09DNDBPRFlnTVRBNExqUTROaTB6Tnk0d05EUXRNemN1TURRMElERTBOUzQxTXkweE5EUXVNakEzSURNeE1DNDVNRFFnTXpFd0xqa3dOQzB6Tnk0d05EUWdNemN1TURRMGVrMDFNVElnT1RZd1l5MHlPREV1TnprNElEQXROVEV5TFRJek1DNHlNREl0TlRFeUxUVXhNbk15TXpBdU1qQXlMVFV4TWlBMU1USXROVEV5WXpJNE1TNDNPVGdnTUNBMU1USWdNak13TGpJd01pQTFNVElnTlRFeWN5MHlNamd1T0RjNUlEVXhNaTAxTVRJZ05URXllazAxTVRJdE1qUXVNekZqTFRJMk1DNDJNeUF3TFRRM01pNHpNU0F5TVRFdU5qZ3RORGN5TGpNeElEUTNNaTR6TVhNeU1URXVOamdnTkRjeUxqTXhJRFEzTWk0ek1TQTBOekl1TXpFZ05EY3lMak14TFRJeE1TNDJPQ0EwTnpJdU16RXRORGN5TGpNeExUSXhNUzQyT0MwME56SXVNekV0TkRjeUxqTXhMVFEzTWk0ek1Yb2lJQzgrQ2p3dlptOXVkRDQ4TDJSbFpuTStQQzl6ZG1jK1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6Zm9udC90dGY7YmFzZTY0LEFBRUFBQUFMQUlBQUF3QXdUMU12TWc4U0Joc0FBQUM4QUFBQVlHTnRZWEFYVnRLWEFBQUJIQUFBQUZSbllYTndBQUFBRUFBQUFYQUFBQUFJWjJ4NVp2anVPbnNBQUFGNEFBQU1UR2hsWVdRWlF0ZjVBQUFOeEFBQUFEWm9hR1ZoQjhNRDF3QUFEZndBQUFBa2FHMTBlRW5LQTRNQUFBNGdBQUFBVkd4dlkyRVYzaGk2QUFBT2RBQUFBQ3h0WVhod0FCMEJCZ0FBRHFBQUFBQWdibUZ0WmZCSVRtUUFBQTdBQUFBQmtuQnZjM1FBQXdBQUFBQVFWQUFBQUNBQUF3UGhBWkFBQlFBQUFwa0N6QUFBQUk4Q21RTE1BQUFCNndBekFRa0FBQUFBQUFBQUFBQUFBQUFBQUFBQkVBQUFBQUFBQUFBQUFBQUFBQUFBQUFCQUFBRHBFQVBBLzhBQVFBUEFBRUFBQUFBQkFBQUFBQUFBQUFBQUFBQWdBQUFBQUFBREFBQUFBd0FBQUJ3QUFRQURBQUFBSEFBREFBRUFBQUFjQUFRQU9BQUFBQW9BQ0FBQ0FBSUFBUUFnNlJELy9mLy9BQUFBQUFBZzZRRC8vZi8vQUFILzR4Y0VBQU1BQVFBQUFBQUFBQUFBQUFBQUFRQUIvLzhBRHdBQkFBQUFBQUFBQUFBQUFnQUFOemtCQUFBQUFBRUFBQUFBQUFBQUFBQUNBQUEzT1FFQUFBQUFBUUFBQUFBQUFBQUFBQUlBQURjNUFRQUFBQUFCQUFEL3dBUUFBOEFBQ3dBQUFTY0pBUWNKQVJjSkFUY0JCQUJuL21mK1oyY0JtZjVuWndHWkFabG4vbWNEV1dmK1p3R1paLzVuL21kbkFabitaMmNCbVFBQUFBRUFBQUN3QSs0QzRBQVZBQUFsQVRZMEp5NEJJeUVpQmdjVUZoY0JIZ0UzUGdFM0FpNEJ3QklUQ1JjTS9IOGFKUUVLQ1FIQUVUUVRBUUVCc3dIQUVqWVRDQW9rR2cwWUNmNUFFd0lSQVFFQkFBQUFBQUVBNFAvQUF4QURyZ0FVQUFBSkFTWWlCdzRCRlJFVUZoY3lOamNCUGdFbkxnRUREZjVBRWpZVENBb2tHZzBZQ1FIQUV3SVJBUUVCN2dIQUVoTUpGd3o4ZnhvbEFRb0pBY0FSTkJNQkFRQUFBZ0FBLzhBRUFBUEFBQlFBT1FBQUpTNEJKeVluSmpRM05qYytBVGMrQVJjUkJpWW5BUzRCSnk0Qkl5SUdCdzRCQnc0QkZSUVdGeDRCRng0Qk16STJOejRCTno0Qk5UUW1Kd0ZLS1VNWUdBd01EQXdZR0VNcEtsd3dNRndxQW5FaVh6bzZna1JFZ2pvNlh5SWlJeUlpSWw4N09vSkVSSUk2T2w4aUlpTWpJb1lZUXlrcUx5NWVMaThxS1VNWUdCa0IvU3dCR1JnQ09qcGZJaUlqSXlJaVh6bzZna1JFZ2pvNlh5SWlJeUlpSWw4N09vSkVSSUk2QUFJQUFQL0FCQUFEd0FBbUFFc0FBQUVVQmdjQkRnRWpJaVl2QVM0Qk5UUTJQd0UyTWhjeU1CVVhBVDRCRnhZd0ZSY2VBUWM1QVRjdUFTY3VBU01pQmdjT0FRY09BUlVVRmhjZUFSY2VBVE15TmpjK0FUYytBVFUwSmljRFdBWUcvcFlHRUFrSUVBYnhCZ1lHQmowTUl3d0Jsd0VQRENNTUFUMEdCd0ZqSWw4Nk9vSkVSSUk2T2w4aUlpTWlJaUpmT3pxQ1JFU0NPanBmSWlJakl5SUNMQWdRQnY2V0JnWUdCdkVHRUFnSkVBWThEUXdCbGdFT0RRRU1BUUU4QmhBSWxEcGZJaUlqSXlJaVh6bzZna1JFZ2pvNlh5SWlJeUlpSWw4N09vSkVSSUk2QUFBQUFBSUFBUC9BQkFBRHdBQW9BRTBBQUFFZUFSY1dGeFlVQndZSERnRUhCZ2NHSWljbUp5NEJKeVluSmpRM05qYytBVGMyTnpZeUZ4WVhCUzRCSnk0Qkl5SUdCdzRCQnc0QkZSUVdGeDRCRng0Qk16STJOejRCTno0Qk5UUW1Kd0syS1VNWUdBd01EQXdZR0VNcEtpOHVYaTR2S2lsREdCZ01EQXdNR0JoREtTb3ZMbDR1THlvQkJTSmZPanFDUkVTQ09qcGZJaUlqSWlJaVh6czZna1JFZ2pvNlh5SWlJeU1pQXZvWVF5a3FMeTVlTGk4cUtVTVlHQXdNREF3WUdFTXBLaTh1WGk0dktpbERHQmdNREF3TUdEbzZYeUlpSXlNaUlsODZPb0pFUklJNk9sOGlJaU1pSWlKZk96cUNSRVNDT2dBQUFBQURBQUFBYXdRQUF4VUFBd0FIQUFzQUFEY2hOU0UxSVRVaEVSVWhOUUFFQVB3QUJBRDhBQVFBYTRXTmhnRVNoWVVBQUFBQUFRREUvOEFEUEFQQUFBVUFBQ1VKQVNjSkFRTTgvbmtCaDNqK0FBSUFPQUdJQVloNC9nRCtBQUFBQUFBQkFNVC93QU04QThBQUJRQUFOd2tCTndrQnhBR0gvbmw0QWdEK0FEZ0JpQUdJZVA0QS9nQUFBUUFBLzhBRUFBUEFBQWtBQUJNWEFSRXpFUUUzQ1FFQVdnRm1nQUZsVy80QS9nQUJ3Rm9CWmZ6MUF3dittbHNDQVA0QUFBRUFBUC9BQkFBRHdBQWtBQUFCTGdFbkxnRWpJZ1lIRGdFSERnRVZGQllYSGdFWEhnRTNNalkzUGdFM1BnRW5OQ1luQTdzaVh6bzZna1JFZ2pvNlh5SWlJeUlpSWw4N09vSkVSSUk2T2w4aUlpUUJJeUlDd0RwZklpSWpJeUlpWHpvNmdrUkVnam82WHlJaUpBRWlJaUpmT3pxQ1JFU0NPZ0FBQUFBRUFBRC93QVFCQThFQVBRQ0JBTDhCQXdBQUpUUW1JekVpQmhVY0FSMEJKeTRCSnk0QkJ3NEJGUlFXRng0QkZ4NEJGeDRCRnpNcUFTTXFBU01pQmhVVUZoY2VBVE02QVRNNkFUTXlOalU4QVRVQkp5NEJKelFtTVRvQk16b0JNekkyTlM0Qkl5WWlJeUlHRlJ3QkZSUVdGeDRCTXo0Qk5Ud0JOVHdCTlRRMk5SNEJId0VlQVJjZUFUc0JNalkzTmlZbkxnRW5NUU15TmpVeE5DWWpLZ0VyQVRjK0FUYzJOQ2N1QVNNaUJnY09BUWNPQVFjT0FRY3hQQUUxUEFFMU5DWWpJZ1lIRGdFVkhBRVZIQUVWRkJZekZqSXpBVGMrQVRjeU5ETWNBUlVjQVJVVUZqTStBVFUyTkNjMEppTXFBU01pQmdjT0FSVVVGaGM2QVRNNkFUTXlGak1PQVE4QkRnRUhEZ0VWTVJRV0Z4WTJOejRCTnpFRUFSUVhGaFh0RWlJWkVSd1BDUWdKQ2k5VEtoNCtJZ01HQXdFSUVBY1lMUllYRmdVRkJoQU1HamdkR3pnZUdSWDlGbllEQmdRQkNCQUlHQzhYRlJRQkdRNDllVFVTRlFZRkJSRUxGUlVCQXdVRGJTNWNOQW9SQ0FFSER3Z1BBeEV4VnlzTUdSWVhHQllyR0NEdEV5SVlFUkFJRGdjSUR3b3ZVeW9lUGlJREJ3UVZGZ3NRQlFVR0ZSZ3hiRUFDR25ZREJnUUJBUllWR2hBQkFSUVJRblUzQ1E0RUJnVVVGQklsRWdzVkN3TUZBd01GQW00dld6UUtDZ2tKRUJzU01WY3J5eGtXRmhrVkxCZ2c3Uk1pR0JFQkVBa09Cd2NRQ2k5VEtoNCtJZ01IQkJVV0N4QUZCUVlWR0RGc1FBSWFkZ01HQkFFQkZoVWFFQUVWRVVGMk53a05CUVlGQVJNVUVpVVNDeFlMQWdVREF3VUNiaTVjTkFvS0NRa1FHeEl4Vnl2ODJ4VVdGeFR0RXlJWUVSd1FDQWdKQ2k1VUtSNC9JZ01HQXdnUEJ4Z3RGeGNWQlFVRkVRc2JOeDBiT1I0WkZBRUM2bllEQmdRQkNCQUlHQzhXRlJVQkdnMDllVFVTRlFVRkJoRUxGUlFCQVFNRkFtNHVYRFFLRVFnSUR3Z1BBeEV4VnlzQUFBSUFEdi9RQkFFRHdBQStBSUlBQUNVVUZqTXhNalkxUEFFOUFSY2VBUmNXTWpjK0FUVTBKaWN1QVNjdUFTY3VBU2NqT2dFek9nRXpNalkxTkNZbkxnRWpLZ0VqS2dFaklnWVZCaFFWTVFFWEhnRVhGRElWS2dFaktnRWpJZ1lWSGdFekZqSTNNalkxUEFFMU5DWW5MZ0VqRGdFSEhBRVZIQUVWRkFZVkxnRXZBUzRCSnk0Qkt3RWlCZ2NHRmhjZUFSY3hBaVFVRnhZVjdSSWlHUkVjRHdrSUNRb3ZVeW9lUGlJREJnTUJDQkFIR0MwV0Z4WUZCUVlRREJvNEhSczRIaGtVQWY2aWRnTUdCQUVJRUFnWUx4Y1ZGQUVhRFQxNU5SSVZCUVVHRVFzVkZBRUJBd1VDYmk1Y05Bb1JDQUVIRHdnUEF4RXhWeXVTR1JVV0dCWXNGeUR0RWlJWkVSQUlEZ2NJRUFvdlV5a2VQeUlEQmdRVkZnc1FCUVlGRlJnd2JFRUNMSFVEQndRQkFSWVZHaEFCQVJRU1FYWTNDQTRGQlFZQkZCTVRKQklMRmdzQ0JRTURCQU50TDFzMEN3a0pDUkFiRWpGWEt3QUFBUUJtLzhBRG1nUEFBQzhBQUFFMUNRRTFNaGNlQVJjV0ZSUUhEZ0VIQmlNaUp5NEJKeVkxSXhRWEhnRVhGak15Tno0Qk56WTFOQ2N1QVNjbUl3SUEvd0FCQUVBM09GUVlHQmdZVkRnM1FFQTNPRlFZR0djaElHOUxTbFZWU2t0dklDRWhJRzlMU2xVQzg4My9BUDhBelJnWlV6ZzRQMEE0T0ZNWUdSa1lVemc0UUZWTFNuQWdJQ0FnY0VwTFZWUkxTMjhnSUFBQUFBQUhBR0gvd0FPSUE4QUFBZ0E3QUZFQVZnQmFBRjRBWWdBQUFSVXpFeFlYSGdFVkZBY09BU2N1QVNjbU5EVTBOaWN1QVNjT0FRY0dGaGNlQVJjK0FUY3VBVFUwTmpjK0FUYzJKaWN1QVNjdUFTY1ZIZ0VYQXpVK0FUYytBVDhCRng0QkZ4RWpOU0VSSVRRMk53RXpGU00xRXlNMU16Y2hOU0UxSVRVaEFodDRld2dJQndrSUJ4Y1VGaGdGQVFFQkFSUVREQllLQWdVREcwb0dLVXNuQlFzTUJRTUpBeFFiTmdvVkRSa2JFQlVWQ2RJSEVRZ0RCZ01MS3dJR0E3citjZ0haQVFIK2s3S3k3Ky92ZlA2VkFXditsUUZyQTZwMy91QVVKeWRYSnljVEVSWUJBUmtVQnc4SEZ5MFhFUmdGTEZjckNCSUlSb05PQncwSEdpOFhHREFZRXlZVFpwaGFFU0lNR2hjS1ZROHFHUDd2QVNCQ0lBc1hDeXNMQVFJQkFUaTYvUzRGQ2dVQjVDMHQvcWN0TUMwd0xRQUFBQWNBUnYvQUE0MER3QUFNQUNVQVBnQkNBRVlBU2dCT0FBQUJGUlFXTVRNeU5pTW5KZ1lWRXlFaUpqRVJORFl4SVRJV01SVVVGakV6TWhZeEVSUUdJeVVoTWpZeEVUUW1NU01pSmpFMU5DWXhJU1lHRlJFVUZqTVRNeFVqRlNFVklSVWhGU0UxSVJVaEF1d0dnd1VHQllNRUNKdjh4UVVCQmdKQkJRRUc3Z1VCQVFYOUFBTEZCQUlHNkFVQkJ2NHZCQWdJQkd2djd3SHAvaGNCUXY2K0FlbitGd091Z3dRQ0RJTUZCZ1g4RWdZRDlBVUJCdWdGQVFiOUJna0RQQVVDZ3dVQkJ1OEVBUVVHQlB5Q0JBRUNnenhaUEw0OHVUd0FBQU1BQVAvQUJBQUR3QUFGQUNFQVBnQUFBU2NIRndFbkF5SUhEZ0VIQmhVVUZ4NEJGeFl6TWpjK0FUYzJOVFFuTGdFbkpnTWlKeTRCSnlZMU5EYytBVGMyTXpJWEhnRVhGaFVVQnc0QkJ3WWpBYkp0SlpJQk55WEVhbDFkaXlrb0tDbUxYVjFxYWwxZGl5a29LQ2lMWGwxcVlsWldnQ1VsSlNXQVZsWmlZbFpXZ0NVbEpTV0FWbFppQVZsc0paQUJOeVVCVkNncGkxMWRhbXBkWFlzcEtDZ3BpMTFkYW1wZFhZc3BLUHdvSlNXQVZsWmlZbFpXZ0NVbEpTV0FWbFppWWxaV2dDVWxBQUFBQVFBQUFBRXpNeDFiQ2NkZkR6ejFBQXNFQUFBQUFBRGJFVEFrQUFBQUFOc1JNQ1FBQVAvQUJBRUR3UUFBQUFnQUFnQUFBQUFBQUFBQkFBQUR3UC9BQUFBRUFRQUFBQUFFQVFBQkFBQUFBQUFBQUFBQUFBQUFBQUFBRlFRQUFBQUFBQUFBQUFBQUFBSUFBQUFFQUFBQUJBQUFBQVFBQU9BRUFBQUFCQUFBQUFRQUFBQUVBQUFBQkFBQXhBUUFBTVFFQUFBQUJBQUFBQVFCQUFBRUFRQU9CQUFBWmdQMUFHRUQwd0JHQkFBQUFBQUFBQUFBQ2dBVUFCNEFRQUJxQUpJQTdnRmdBZG9COUFJS0FoNENPQUoyQThRRWNBUzhCVllGd2dZbUFBRUFBQUFWQVFRQUJ3QUFBQUFBQWdBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT0FLNEFBUUFBQUFBQUFRQUlBQUFBQVFBQUFBQUFBZ0FIQUxjQUFRQUFBQUFBQXdBSUFJY0FBUUFBQUFBQUJBQUlBTXdBQVFBQUFBQUFCUUFMQUdZQUFRQUFBQUFBQmdBSUFKOEFBUUFBQUFBQUNnQWFBQmdBQXdBQkJBa0FBUUFRQUFnQUF3QUJCQWtBQWdBT0FMNEFBd0FCQkFrQUF3QVFBSThBQXdBQkJBa0FCQUFRQU5RQUF3QUJCQWtBQlFBV0FIRUFBd0FCQkFrQUJnQVFBS2NBQXdBQkJBa0FDZ0EwQURKb05YQXRZbTl2YXdCb0FEVUFjQUF0QUdJQWJ3QnZBR3RHYjI1MElHZGxibVZ5WVhSbFpDQmllU0JKWTI5TmIyOXVMZ0JHQUc4QWJnQjBBQ0FBWndCbEFHNEFaUUJ5QUdFQWRBQmxBR1FBSUFCaUFIa0FJQUJKQUdNQWJ3Qk5BRzhBYndCdUFDNVdaWEp6YVc5dUlERXVNZ0JXQUdVQWNnQnpBR2tBYndCdUFDQUFNUUF1QURKb05YQXRZbTl2YXdCb0FEVUFjQUF0QUdJQWJ3QnZBR3RvTlhBdFltOXZhd0JvQURVQWNBQXRBR0lBYndCdkFHdFNaV2QxYkdGeUFGSUFaUUJuQUhVQWJBQmhBSEpvTlhBdFltOXZhd0JvQURVQWNBQXRBR0lBYndCdkFHc0FBQUFEQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6Zm9udC93b2ZmO2Jhc2U2NCxkMDlHUmdBQkFBQUFBQkRBQUFzQUFBQUFFSFFBQVFBQ0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQlBVeTh5QUFBQkNBQUFBR0FBQUFCZ0R4SUdHMk50WVhBQUFBRm9BQUFBVkFBQUFGUVhWdEtYWjJGemNBQUFBYndBQUFBSUFBQUFDQUFBQUJCbmJIbG1BQUFCeEFBQURFd0FBQXhNK080NmUyaGxZV1FBQUE0UUFBQUFOZ0FBQURZWlF0ZjVhR2hsWVFBQURrZ0FBQUFrQUFBQUpBZkRBOWRvYlhSNEFBQU9iQUFBQUZRQUFBQlVTY29EZzJ4dlkyRUFBQTdBQUFBQUxBQUFBQ3dWM2hpNmJXRjRjQUFBRHV3QUFBQWdBQUFBSUFBZEFRWnVZVzFsQUFBUERBQUFBWklBQUFHUzhFaE9aSEJ2YzNRQUFCQ2dBQUFBSUFBQUFDQUFBd0FBQUFNRDRRR1FBQVVBQUFLWkFzd0FBQUNQQXBrQ3pBQUFBZXNBTXdFSkFBQUFBQUFBQUFBQUFBQUFBQUFBQVJBQUFBQUFBQUFBQUFBQUFBQUFBQUFBUUFBQTZSQUR3UC9BQUVBRHdBQkFBQUFBQVFBQUFBQUFBQUFBQUFBQUlBQUFBQUFBQXdBQUFBTUFBQUFjQUFFQUF3QUFBQndBQXdBQkFBQUFIQUFFQURnQUFBQUtBQWdBQWdBQ0FBRUFJT2tRLy8zLy93QUFBQUFBSU9rQS8vMy8vd0FCLytNWEJBQURBQUVBQUFBQUFBQUFBQUFBQUFFQUFmLy9BQThBQVFBQUFBQUFBQUFBQUFJQUFEYzVBUUFBQUFBQkFBQUFBQUFBQUFBQUFnQUFOemtCQUFBQUFBRUFBQUFBQUFBQUFBQUNBQUEzT1FFQUFBQUFBUUFBLzhBRUFBUEFBQXNBQUFFbkNRRUhDUUVYQ1FFM0FRUUFaLzVuL21kbkFabitaMmNCbVFHWlovNW5BMWxuL21jQm1XZitaLzVuWndHWi9tZG5BWmtBQUFBQkFBQUFzQVB1QXVBQUZRQUFKUUUyTkNjdUFTTWhJZ1lIRkJZWEFSNEJOejRCTndJdUFjQVNFd2tYRFB4L0dpVUJDZ2tCd0JFMEV3RUJBYk1Cd0JJMkV3Z0tKQm9OR0FuK1FCTUNFUUVCQVFBQUFBQUJBT0Qvd0FNUUE2NEFGQUFBQ1FFbUlnY09BUlVSRkJZWE1qWTNBVDRCSnk0QkF3MytRQkkyRXdnS0pCb05HQWtCd0JNQ0VRRUJBZTRCd0JJVENSY00vSDhhSlFFS0NRSEFFVFFUQVFFQUFBSUFBUC9BQkFBRHdBQVVBRGtBQUNVdUFTY21KeVkwTnpZM1BnRTNQZ0VYRVFZbUp3RXVBU2N1QVNNaUJnY09BUWNPQVJVVUZoY2VBUmNlQVRNeU5qYytBVGMrQVRVMEppY0JTaWxER0JnTURBd01HQmhES1NwY01EQmNLZ0p4SWw4Nk9vSkVSSUk2T2w4aUlpTWlJaUpmT3pxQ1JFU0NPanBmSWlJakl5S0dHRU1wS2k4dVhpNHZLaWxER0JnWkFmMHNBUmtZQWpvNlh5SWlJeU1pSWw4Nk9vSkVSSUk2T2w4aUlpTWlJaUpmT3pxQ1JFU0NPZ0FDQUFEL3dBUUFBOEFBSmdCTEFBQUJGQVlIQVE0Qkl5SW1Md0V1QVRVME5qOEJOaklYTWpBVkZ3RStBUmNXTUJVWEhnRUhPUUUzTGdFbkxnRWpJZ1lIRGdFSERnRVZGQllYSGdFWEhnRXpNalkzUGdFM1BnRTFOQ1luQTFnR0J2NldCaEFKQ0JBRzhRWUdCZ1k5RENNTUFaY0JEd3dqREFFOUJnY0JZeUpmT2pxQ1JFU0NPanBmSWlJaklpSWlYenM2Z2tSRWdqbzZYeUlpSXlNaUFpd0lFQWIrbGdZR0JnYnhCaEFJQ1JBR1BBME1BWllCRGcwQkRBRUJQQVlRQ0pRNlh5SWlJeU1pSWw4Nk9vSkVSSUk2T2w4aUlpTWlJaUpmT3pxQ1JFU0NPZ0FBQUFBQ0FBRC93QVFBQThBQUtBQk5BQUFCSGdFWEZoY1dGQWNHQnc0QkJ3WUhCaUluSmljdUFTY21KeVkwTnpZM1BnRTNOamMyTWhjV0Z3VXVBU2N1QVNNaUJnY09BUWNPQVJVVUZoY2VBUmNlQVRNeU5qYytBVGMrQVRVMEppY0N0aWxER0JnTURBd01HQmhES1NvdkxsNHVMeW9wUXhnWURBd01EQmdZUXlrcUx5NWVMaThxQVFVaVh6bzZna1JFZ2pvNlh5SWlJeUlpSWw4N09vSkVSSUk2T2w4aUlpTWpJZ0w2R0VNcEtpOHVYaTR2S2lsREdCZ01EQXdNR0JoREtTb3ZMbDR1THlvcFF4Z1lEQXdNREJnNk9sOGlJaU1qSWlKZk9qcUNSRVNDT2pwZklpSWpJaUlpWHpzNmdrUkVnam9BQUFBQUF3QUFBR3NFQUFNVkFBTUFCd0FMQUFBM0lUVWhOU0UxSVJFVklUVUFCQUQ4QUFRQS9BQUVBR3VGallZQkVvV0ZBQUFBQUFFQXhQL0FBendEd0FBRkFBQWxDUUVuQ1FFRFBQNTVBWWQ0L2dBQ0FEZ0JpQUdJZVA0QS9nQUFBQUFBQVFERS84QURQQVBBQUFVQUFEY0pBVGNKQWNRQmgvNTVlQUlBL2dBNEFZZ0JpSGorQVA0QUFBRUFBUC9BQkFBRHdBQUpBQUFURndFUk14RUJOd2tCQUZvQlpvQUJaVnYrQVA0QUFjQmFBV1g4OVFNTC9wcGJBZ0QrQUFBQkFBRC93QVFBQThBQUpBQUFBUzRCSnk0Qkl5SUdCdzRCQnc0QkZSUVdGeDRCRng0Qk56STJOejRCTno0Qkp6UW1Kd083SWw4Nk9vSkVSSUk2T2w4aUlpTWlJaUpmT3pxQ1JFU0NPanBmSWlJa0FTTWlBc0E2WHlJaUl5TWlJbDg2T29KRVJJSTZPbDhpSWlRQklpSWlYenM2Z2tSRWdqb0FBQUFBQkFBQS84QUVBUVBCQUQwQWdRQy9BUU1BQUNVMEppTXhJZ1lWSEFFZEFTY3VBU2N1QVFjT0FSVVVGaGNlQVJjZUFSY2VBUmN6S2dFaktnRWpJZ1lWRkJZWEhnRXpPZ0V6T2dFek1qWTFQQUUxQVNjdUFTYzBKakU2QVRNNkFUTXlOalV1QVNNbUlpTWlCaFVjQVJVVUZoY2VBVE0rQVRVOEFUVThBVFUwTmpVZUFSOEJIZ0VYSGdFN0FUSTJOelltSnk0Qkp6RURNalkxTVRRbUl5b0JLd0UzUGdFM05qUW5MZ0VqSWdZSERnRUhEZ0VIRGdFSE1Ud0JOVHdCTlRRbUl5SUdCdzRCRlJ3QkZSd0JGUlFXTXhZeU13RTNQZ0UzTWpRekhBRVZIQUVWRkJZelBnRTFOalFuTkNZaktnRWpJZ1lIRGdFVkZCWVhPZ0V6T2dFek1oWXpEZ0VQQVE0QkJ3NEJGVEVVRmhjV05qYytBVGN4QkFFVUZ4WVY3UklpR1JFY0R3a0lDUW92VXlvZVBpSURCZ01CQ0JBSEdDMFdGeFlGQlFZUURCbzRIUnM0SGhrVi9SWjJBd1lFQVFnUUNCZ3ZGeFVVQVJrT1BYazFFaFVHQlFVUkN4VVZBUU1GQTIwdVhEUUtFUWdCQnc4SUR3TVJNVmNyREJrV0Z4Z1dLeGdnN1JNaUdCRVFDQTRIQ0E4S0wxTXFIajRpQXdjRUZSWUxFQVVGQmhVWU1XeEFBaHAyQXdZRUFRRVdGUm9RQVFFVUVVSjFOd2tPQkFZRkZCUVNKUklMRlFzREJRTURCUUp1TDFzMENnb0pDUkFiRWpGWEs4c1pGaFlaRlN3WUlPMFRJaGdSQVJBSkRnY0hFQW92VXlvZVBpSURCd1FWRmdzUUJRVUdGUmd4YkVBQ0duWURCZ1FCQVJZVkdoQUJGUkZCZGpjSkRRVUdCUUVURkJJbEVnc1dDd0lGQXdNRkFtNHVYRFFLQ2drSkVCc1NNVmNyL05zVkZoY1U3Uk1pR0JFY0VBZ0lDUW91VkNrZVB5SURCZ01JRHdjWUxSY1hGUVVGQlJFTEd6Y2RHemtlR1JRQkF1cDJBd1lFQVFnUUNCZ3ZGaFVWQVJvTlBYazFFaFVGQlFZUkN4VVVBUUVEQlFKdUxsdzBDaEVJQ0E4SUR3TVJNVmNyQUFBQ0FBNy8wQVFCQThBQVBnQ0NBQUFsRkJZek1USTJOVHdCUFFFWEhnRVhGakkzUGdFMU5DWW5MZ0VuTGdFbkxnRW5Jem9CTXpvQk16STJOVFFtSnk0Qkl5b0JJeW9CSXlJR0ZRWVVGVEVCRng0QkZ4UXlGU29CSXlvQkl5SUdGUjRCTXhZeU56STJOVHdCTlRRbUp5NEJJdzRCQnh3QkZSd0JGUlFHRlM0Qkx3RXVBU2N1QVNzQklnWUhCaFlYSGdFWE1RSWtGQmNXRmUwU0loa1JIQThKQ0FrS0wxTXFIajRpQXdZREFRZ1FCeGd0RmhjV0JRVUdFQXdhT0IwYk9CNFpGQUgrb25ZREJnUUJDQkFJR0M4WEZSUUJHZzA5ZVRVU0ZRVUZCaEVMRlJRQkFRTUZBbTR1WERRS0VRZ0JCdzhJRHdNUk1WY3JraGtWRmhnV0xCY2c3UklpR1JFUUNBNEhDQkFLTDFNcEhqOGlBd1lFRlJZTEVBVUdCUlVZTUd4QkFpeDFBd2NFQVFFV0ZSb1FBUUVVRWtGMk53Z09CUVVHQVJRVEV5UVNDeFlMQWdVREF3UURiUzliTkFzSkNRa1FHeEl4VnlzQUFBRUFadi9BQTVvRHdBQXZBQUFCTlFrQk5USVhIZ0VYRmhVVUJ3NEJCd1lqSWljdUFTY21OU01VRng0QkZ4WXpNamMrQVRjMk5UUW5MZ0VuSmlNQ0FQOEFBUUJBTnpoVUdCZ1lHRlE0TjBCQU56aFVHQmhuSVNCdlMwcFZWVXBMYnlBaElTQnZTMHBWQXZQTi93RC9BTTBZR1ZNNE9EOUFPRGhUR0JrWkdGTTRPRUJWUzBwd0lDQWdJSEJLUzFWVVMwdHZJQ0FBQUFBQUJ3QmgvOEFEaUFQQUFBSUFPd0JSQUZZQVdnQmVBR0lBQUFFVk14TVdGeDRCRlJRSERnRW5MZ0VuSmpRMU5EWW5MZ0VuRGdFSEJoWVhIZ0VYUGdFM0xnRTFORFkzUGdFM05pWW5MZ0VuTGdFbkZSNEJGd00xUGdFM1BnRS9BUmNlQVJjUkl6VWhFU0UwTmpjQk14VWpOUk1qTlRNM0lUVWhOU0UxSVFJYmVIc0lDQWNKQ0FjWEZCWVlCUUVCQVFFVUV3d1dDZ0lGQXh0S0JpbExKd1VMREFVRENRTVVHellLRlEwWkd4QVZGUW5TQnhFSUF3WURDeXNDQmdPNi9uSUIyUUVCL3BPeXN1L3Y3M3orbFFGci9wVUJhd09xZC83Z0ZDY25WeWNuRXhFV0FRRVpGQWNQQnhjdEZ4RVlCU3hYS3dnU0NFYURUZ2NOQnhvdkZ4Z3dHQk1tRTJhWVdoRWlEQm9YQ2xVUEtoais3d0VnUWlBTEZ3c3JDd0VDQVFFNHV2MHVCUW9GQWVRdExmNm5MVEF0TUMwQUFBQUhBRWIvd0FPTkE4QUFEQUFsQUQ0QVFnQkdBRW9BVGdBQUFSVVVGakV6TWpZakp5WUdGUk1oSWlZeEVUUTJNU0V5RmpFVkZCWXhNeklXTVJFVUJpTWxJVEkyTVJFMEpqRWpJaVl4TlRRbU1TRW1CaFVSRkJZekV6TVZJeFVoRlNFVklSVWhOU0VWSVFMc0JvTUZCZ1dEQkFpYi9NVUZBUVlDUVFVQkJ1NEZBUUVGL1FBQ3hRUUNCdWdGQVFiK0x3UUlDQVJyNys4QjZmNFhBVUwrdmdIcC9oY0Ryb01FQWd5REJRWUYvQklHQS9RRkFRYm9CUUVHL1FZSkF6d0ZBb01GQVFidkJBRUZCZ1Q4Z2dRQkFvTThXVHkrUExrOEFBQURBQUQvd0FRQUE4QUFCUUFoQUQ0QUFBRW5CeGNCSndNaUJ3NEJCd1lWRkJjZUFSY1dNekkzUGdFM05qVTBKeTRCSnlZRElpY3VBU2NtTlRRM1BnRTNOak15Rng0QkZ4WVZGQWNPQVFjR0l3R3liU1dTQVRjbHhHcGRYWXNwS0NncGkxMWRhbXBkWFlzcEtDZ29pMTVkYW1KV1ZvQWxKU1VsZ0ZaV1ltSldWb0FsSlNVbGdGWldZZ0ZaYkNXUUFUY2xBVlFvS1l0ZFhXcHFYVjJMS1Nnb0tZdGRYV3BxWFYyTEtTajhLQ1VsZ0ZaV1ltSldWb0FsSlNVbGdGWldZbUpXVm9BbEpRQUFBQUVBQUFBQk16TWRXd25IWHc4ODlRQUxCQUFBQUFBQTJ4RXdKQUFBQUFEYkVUQWtBQUQvd0FRQkE4RUFBQUFJQUFJQUFBQUFBQUFBQVFBQUE4RC93QUFBQkFFQUFBQUFCQUVBQVFBQUFBQUFBQUFBQUFBQUFBQUFBQlVFQUFBQUFBQUFBQUFBQUFBQ0FBQUFCQUFBQUFRQUFBQUVBQURnQkFBQUFBUUFBQUFFQUFBQUJBQUFBQVFBQU1RRUFBREVCQUFBQUFRQUFBQUVBUUFBQkFFQURnUUFBR1lEOVFCaEE5TUFSZ1FBQUFBQUFBQUFBQW9BRkFBZUFFQUFhZ0NTQU80QllBSGFBZlFDQ2dJZUFqZ0NkZ1BFQkhBRXZBVldCY0lHSmdBQkFBQUFGUUVFQUFjQUFBQUFBQUlBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBRGdDdUFBRUFBQUFBQUFFQUNBQUFBQUVBQUFBQUFBSUFCd0MzQUFFQUFBQUFBQU1BQ0FDSEFBRUFBQUFBQUFRQUNBRE1BQUVBQUFBQUFBVUFDd0JtQUFFQUFBQUFBQVlBQ0FDZkFBRUFBQUFBQUFvQUdnQVlBQU1BQVFRSkFBRUFFQUFJQUFNQUFRUUpBQUlBRGdDK0FBTUFBUVFKQUFNQUVBQ1BBQU1BQVFRSkFBUUFFQURVQUFNQUFRUUpBQVVBRmdCeEFBTUFBUVFKQUFZQUVBQ25BQU1BQVFRSkFBb0FOQUF5YURWd0xXSnZiMnNBYUFBMUFIQUFMUUJpQUc4QWJ3QnJSbTl1ZENCblpXNWxjbUYwWldRZ1lua2dTV052VFc5dmJpNEFSZ0J2QUc0QWRBQWdBR2NBWlFCdUFHVUFjZ0JoQUhRQVpRQmtBQ0FBWWdCNUFDQUFTUUJqQUc4QVRRQnZBRzhBYmdBdVZtVnljMmx2YmlBeExqSUFWZ0JsQUhJQWN3QnBBRzhBYmdBZ0FERUFMZ0F5YURWd0xXSnZiMnNBYUFBMUFIQUFMUUJpQUc4QWJ3QnJhRFZ3TFdKdmIyc0FhQUExQUhBQUxRQmlBRzhBYndCclVtVm5kV3hoY2dCU0FHVUFad0IxQUd3QVlRQnlhRFZ3TFdKdmIyc0FhQUExQUhBQUxRQmlBRzhBYndCckFBQUFBd0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUE9PVwiIiwiaW1wb3J0IFVSTFRvb2xzIGZyb20gJy4vdXJsdG9vbHMnO1xuaW1wb3J0IFNpZGVCYXIgZnJvbSAnLi9zaWRlYmFyJztcbmltcG9ydCBTdGF0dXNCYXIgZnJvbSAnLi9zdGF0dXNiYXInO1xuaW1wb3J0IENvdmVyIGZyb20gJy4vY292ZXInO1xuaW1wb3J0IFBhZ2VDb250ZW50IGZyb20gJy4vcGFnZWNvbnRlbnQnO1xuaW1wb3J0ICdlbGVtZW50LXNjcm9sbC1wb2x5ZmlsbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludGVyYWN0aXZlQm9vayBleHRlbmRzIEg1UC5FdmVudERpc3BhdGNoZXIge1xuICAvKipcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWdcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnRJZFxuICAgKiBAcGFyYW0ge29iamVjdH0gY29udGVudERhdGFcbiAgICovXG4gIGNvbnN0cnVjdG9yKGNvbmZpZywgY29udGVudElkLCBjb250ZW50RGF0YSA9IHt9KSB7XG4gICAgc3VwZXIoKTtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICB0aGlzLmNvbnRlbnRJZCA9IGNvbnRlbnRJZDtcbiAgICB0aGlzLmFjdGl2ZUNoYXB0ZXIgPSAwO1xuICAgIHRoaXMubmV3SGFuZGxlciA9IHt9O1xuXG4gICAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcblxuICAgIHRoaXMucGFyYW1zID0gSW50ZXJhY3RpdmVCb29rLnNhbml0aXplQ29uZmlnKGNvbmZpZyk7XG4gICAgdGhpcy5sMTBuID0gdGhpcy5wYXJhbXMubDEwbjtcbiAgICB0aGlzLnBhcmFtcy5iZWhhdmlvdXIgPSB0aGlzLnBhcmFtcy5iZWhhdmlvdXIgfHwge307XG4gICAgdGhpcy5tYWluV3JhcHBlciA9IG51bGw7XG4gICAgdGhpcy5jdXJyZW50UmF0aW8gPSBudWxsO1xuICAgIHRoaXMuc21hbGxTdXJmYWNlID0gJ2g1cC1pbnRlcmFjdGl2ZS1ib29rLXNtYWxsJztcbiAgICB0aGlzLm1lZGl1bVN1cmZhY2UgPSAnaDVwLWludGVyYWN0aXZlLWJvb2stbWVkaXVtJztcbiAgICB0aGlzLmxhcmdlU3VyZmFjZSA9ICdoNXAtaW50ZXJhY3RpdmUtYm9vay1sYXJnZSc7XG5cbiAgICB0aGlzLmNoYXB0ZXJzID0gW107XG5cbiAgICAvKlxuICAgICAqIHRoaXMucGFyYW1zLmJlaGF2aW91ci5lbmFibGVTb2x1dGlvbnNCdXR0b24gYW5kIHRoaXMucGFyYW1zLmJlaGF2aW91ci5lbmFibGVSZXRyeVxuICAgICAqIGFyZSB1c2VkIGJ5IEg1UCdzIHF1ZXN0aW9uIHR5cGUgY29udHJhY3QuXG4gICAgICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9oNXAub3JnL2RvY3VtZW50YXRpb24vZGV2ZWxvcGVycy9jb250cmFjdHMjZ3VpZGVzLWhlYWRlci04fVxuICAgICAqIEBzZWUge0BsaW5rIGh0dHBzOi8vaDVwLm9yZy9kb2N1bWVudGF0aW9uL2RldmVsb3BlcnMvY29udHJhY3RzI2d1aWRlcy1oZWFkZXItOX1cbiAgICAgKi9cbiAgICB0aGlzLnBhcmFtcy5iZWhhdmlvdXIuZW5hYmxlU29sdXRpb25zQnV0dG9uID0gZmFsc2U7XG4gICAgdGhpcy5wYXJhbXMuYmVoYXZpb3VyLmVuYWJsZVJldHJ5ID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiByZXN1bHQgaGFzIGJlZW4gc3VibWl0dGVkIG9yIGlucHV0IGhhcyBiZWVuIGdpdmVuLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSwgaWYgYW5zd2VyIHdhcyBnaXZlbi5cbiAgICAgKiBAc2VlIGNvbnRyYWN0IGF0IHtAbGluayBodHRwczovL2g1cC5vcmcvZG9jdW1lbnRhdGlvbi9kZXZlbG9wZXJzL2NvbnRyYWN0cyNndWlkZXMtaGVhZGVyLTF9XG4gICAgICovXG4gICAgdGhpcy5nZXRBbnN3ZXJHaXZlbiA9ICgpID0+IHRoaXMuY2hhcHRlcnMucmVkdWNlKChhY2N1LCBjdXJyZW50KSA9PiB7XG4gICAgICBpZiAodHlwZW9mIGN1cnJlbnQuaW5zdGFuY2UuZ2V0QW5zd2VyR2l2ZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGFjY3UgJiYgY3VycmVudC5pbnN0YW5jZS5nZXRBbnN3ZXJHaXZlbigpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFjY3U7XG4gICAgfSwgdHJ1ZSk7XG5cbiAgICAvKipcbiAgICAgKiBHZXQgbGF0ZXN0IHNjb3JlLlxuICAgICAqXG4gICAgICogQHJldHVybiB7bnVtYmVyfSBMYXRlc3Qgc2NvcmUuXG4gICAgICogQHNlZSBjb250cmFjdCBhdCB7QGxpbmsgaHR0cHM6Ly9oNXAub3JnL2RvY3VtZW50YXRpb24vZGV2ZWxvcGVycy9jb250cmFjdHMjZ3VpZGVzLWhlYWRlci0yfVxuICAgICAqL1xuICAgIHRoaXMuZ2V0U2NvcmUgPSAoKSA9PiB0aGlzLmNoYXB0ZXJzLnJlZHVjZSgoYWNjdSwgY3VycmVudCkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBjdXJyZW50Lmluc3RhbmNlLmdldFNjb3JlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBhY2N1ICsgY3VycmVudC5pbnN0YW5jZS5nZXRTY29yZSgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFjY3U7XG4gICAgfSwgMCk7XG5cbiAgICAvKipcbiAgICAgKiBHZXQgbWF4aW11bSBwb3NzaWJsZSBzY29yZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge251bWJlcn0gU2NvcmUgbmVjZXNzYXJ5IGZvciBtYXN0ZXJpbmcuXG4gICAgICogQHNlZSBjb250cmFjdCBhdCB7QGxpbmsgaHR0cHM6Ly9oNXAub3JnL2RvY3VtZW50YXRpb24vZGV2ZWxvcGVycy9jb250cmFjdHMjZ3VpZGVzLWhlYWRlci0zfVxuICAgICAqL1xuICAgIHRoaXMuZ2V0TWF4U2NvcmUgPSAoKSA9PiB0aGlzLmNoYXB0ZXJzLnJlZHVjZSgoYWNjdSwgY3VycmVudCkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBjdXJyZW50Lmluc3RhbmNlLmdldE1heFNjb3JlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBhY2N1ICsgY3VycmVudC5pbnN0YW5jZS5nZXRNYXhTY29yZSgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFjY3U7XG4gICAgfSwgMCk7XG5cbiAgICAvKipcbiAgICAgKiBTaG93IHNvbHV0aW9ucy5cbiAgICAgKlxuICAgICAqIEBzZWUgY29udHJhY3QgYXQge0BsaW5rIGh0dHBzOi8vaDVwLm9yZy9kb2N1bWVudGF0aW9uL2RldmVsb3BlcnMvY29udHJhY3RzI2d1aWRlcy1oZWFkZXItNH1cbiAgICAgKi9cbiAgICB0aGlzLnNob3dTb2x1dGlvbnMgPSAoKSA9PiB7XG4gICAgICB0aGlzLmNoYXB0ZXJzLmZvckVhY2goY2hhcHRlciA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hhcHRlci5pbnN0YW5jZS50b2dnbGVSZWFkU3BlYWtlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGNoYXB0ZXIuaW5zdGFuY2UudG9nZ2xlUmVhZFNwZWFrZXIodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBjaGFwdGVyLmluc3RhbmNlLnNob3dTb2x1dGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjaGFwdGVyLmluc3RhbmNlLnNob3dTb2x1dGlvbnMoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGNoYXB0ZXIuaW5zdGFuY2UudG9nZ2xlUmVhZFNwZWFrZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjaGFwdGVyLmluc3RhbmNlLnRvZ2dsZVJlYWRTcGVha2VyKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlc2V0IHRhc2suXG4gICAgICpcbiAgICAgKiBAc2VlIGNvbnRyYWN0IGF0IHtAbGluayBodHRwczovL2g1cC5vcmcvZG9jdW1lbnRhdGlvbi9kZXZlbG9wZXJzL2NvbnRyYWN0cyNndWlkZXMtaGVhZGVyLTV9XG4gICAgICovXG4gICAgdGhpcy5yZXNldFRhc2sgPSAoKSA9PiB7XG4gICAgICBpZiAoIHRoaXMuaGFzVmFsaWRDaGFwdGVycygpKSB7XG4gICAgICAgIHRoaXMuY2hhcHRlcnMuZm9yRWFjaCgoY2hhcHRlciwgaW5kZXgpID0+IHtcbiAgICAgICAgICBpZiAoIWNoYXB0ZXIuaXNJbml0aWFsaXplZCB8fCBjaGFwdGVyLmlzU3VtbWFyeSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodHlwZW9mIGNoYXB0ZXIuaW5zdGFuY2UucmVzZXRUYXNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjaGFwdGVyLmluc3RhbmNlLnJlc2V0VGFzaygpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjaGFwdGVyLnRhc2tzTGVmdCA9IGNoYXB0ZXIubWF4VGFza3M7XG4gICAgICAgICAgY2hhcHRlci5zZWN0aW9ucy5mb3JFYWNoKHNlY3Rpb24gPT4gc2VjdGlvbi50YXNrRG9uZSA9IGZhbHNlKTtcbiAgICAgICAgICB0aGlzLnNldENoYXB0ZXJSZWFkKGluZGV4LCBmYWxzZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucGFnZUNvbnRlbnQucmVzZXRDaGFwdGVycygpO1xuICAgICAgICB0aGlzLnNpZGVCYXIucmVzZXRJbmRpY2F0b3JzKCk7XG5cbiAgICAgICAgdGhpcy50cmlnZ2VyKCduZXdDaGFwdGVyJywge1xuICAgICAgICAgIGg1cGJvb2tpZDogdGhpcy5jb250ZW50SWQsXG4gICAgICAgICAgY2hhcHRlcjogdGhpcy5wYWdlQ29udGVudC5jb2x1bW5Ob2Rlc1swXS5pZCxcbiAgICAgICAgICBzZWN0aW9uOiBcInRvcFwiLFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIHRoaXMuaGFzQ292ZXIoKSkge1xuICAgICAgICAgIHRoaXMuZGlzcGxheUNvdmVyKHRoaXMubWFpbldyYXBwZXIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEdldCB4QVBJIGRhdGEuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtvYmplY3R9IHhBUEkgc3RhdGVtZW50LlxuICAgICAqIEBzZWUgY29udHJhY3QgYXQge0BsaW5rIGh0dHBzOi8vaDVwLm9yZy9kb2N1bWVudGF0aW9uL2RldmVsb3BlcnMvY29udHJhY3RzI2d1aWRlcy1oZWFkZXItNn1cbiAgICAgKi9cbiAgICB0aGlzLmdldFhBUElEYXRhID0gKCkgPT4ge1xuICAgICAgY29uc3QgeEFQSUV2ZW50ID0gdGhpcy5jcmVhdGVYQVBJRXZlbnRUZW1wbGF0ZSgnYW5zd2VyZWQnKTtcbiAgICAgIHRoaXMuYWRkUXVlc3Rpb25Ub1hBUEkoeEFQSUV2ZW50KTtcbiAgICAgIHhBUElFdmVudC5zZXRTY29yZWRSZXN1bHQodGhpcy5nZXRTY29yZSgpLFxuICAgICAgICB0aGlzLmdldE1heFNjb3JlKCksXG4gICAgICAgIHRoaXMsXG4gICAgICAgIHRydWUsXG4gICAgICAgIHRoaXMuZ2V0U2NvcmUoKSA9PT0gdGhpcy5nZXRNYXhTY29yZSgpXG4gICAgICApO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdGF0ZW1lbnQ6IHhBUElFdmVudC5kYXRhLnN0YXRlbWVudCxcbiAgICAgICAgY2hpbGRyZW46IHRoaXMuZ2V0WEFQSURhdGFGcm9tQ2hpbGRyZW4odGhpcy5jaGFwdGVycy5tYXAoY2hhcHRlciA9PiBjaGFwdGVyLmluc3RhbmNlKSlcbiAgICAgIH07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEdldCB4QVBJIGRhdGEgZnJvbSBzdWIgY29udGVudCB0eXBlcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0W119IGluc3RhbmNlcyBINVAgaW5zdGFuY2VzLlxuICAgICAqIEByZXR1cm4ge29iamVjdFtdfSB4QVBJIGRhdGEgb2JqZWN0cyB1c2VkIHRvIGJ1aWxkIGEgcmVwb3J0LlxuICAgICAqL1xuICAgIHRoaXMuZ2V0WEFQSURhdGFGcm9tQ2hpbGRyZW4gPSBpbnN0YW5jZXMgPT4ge1xuICAgICAgcmV0dXJuIGluc3RhbmNlcy5tYXAoaW5zdGFuY2UgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIGluc3RhbmNlLmdldFhBUElEYXRhID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgcmV0dXJuIGluc3RhbmNlLmdldFhBUElEYXRhKCk7XG4gICAgICAgIH1cbiAgICAgIH0pLmZpbHRlcihkYXRhID0+ICEhZGF0YSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFkZCBxdWVzdGlvbiBpdHNlbGYgdG8gdGhlIGRlZmluaXRpb24gcGFydCBvZiBhbiB4QVBJRXZlbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0g1UC5YQVBJRXZlbnR9IHhBUElFdmVudC5cbiAgICAgKi9cbiAgICB0aGlzLmFkZFF1ZXN0aW9uVG9YQVBJID0geEFQSUV2ZW50ID0+IHtcbiAgICAgIGNvbnN0IGRlZmluaXRpb24gPSB4QVBJRXZlbnQuZ2V0VmVyaWZpZWRTdGF0ZW1lbnRWYWx1ZShbJ29iamVjdCcsICdkZWZpbml0aW9uJ10pO1xuICAgICAgT2JqZWN0LmFzc2lnbihkZWZpbml0aW9uLCB0aGlzLmdldHhBUElEZWZpbml0aW9uKCkpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZSB4QVBJIG9iamVjdCBkZWZpbml0aW9uIHVzZWQgaW4geEFQSSBzdGF0ZW1lbnRzLlxuICAgICAqXG4gICAgICogQHJldHVybiB7b2JqZWN0fSB4QVBJIGRlZmluaXRpb24uXG4gICAgICovXG4gICAgdGhpcy5nZXR4QVBJRGVmaW5pdGlvbiA9ICgpID0+ICh7XG4gICAgICBpbnRlcmFjdGlvblR5cGU6ICdjb21wb3VuZCcsXG4gICAgICB0eXBlOiAnaHR0cDovL2FkbG5ldC5nb3YvZXhwYXBpL2FjdGl2aXRpZXMvY21pLmludGVyYWN0aW9uJyxcbiAgICAgIGRlc2NyaXB0aW9uOiB7J2VuLVVTJzogJyd9XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiB0aGVyZSdzIGEgY292ZXIuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlLCBpZiB0aGVyZSdzIGEgY292ZXIuXG4gICAgICovXG4gICAgdGhpcy5oYXNDb3ZlciA9ICgpID0+IHRoaXMuY292ZXIgJiYgdGhpcy5jb3Zlci5jb250YWluZXI7XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiB0aGUgY29uZmlncyBhcmUgc2V0IHRvIHVzZSBzdW1tYXJ5XG4gICAgICogQHBhcmFtIGNoYXB0ZXJzXG4gICAgICogQHJldHVybiB7Knxib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuaGFzU3VtbWFyeSA9IChjaGFwdGVycyA9IHRoaXMuY2hhcHRlcnMgKSA9PiB0aGlzLmhhc0NoYXB0ZXJzVGFza3MoY2hhcHRlcnMpICYmIHRoaXMucGFyYW1zLmJlaGF2aW91ci5kaXNwbGF5U3VtbWFyeSAmJiB0aGlzLnBhcmFtcy5iZWhhdmlvdXIuZGlzcGxheVN1bW1hcnkgPT09IHRydWU7XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBjaGFwdGVycyBoYXMgdGFza3NcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGNoYXB0ZXJzXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB0aGlzLmhhc0NoYXB0ZXJzVGFza3MgPSBjaGFwdGVycyA9PiBjaGFwdGVycy5maWx0ZXIoY2hhcHRlciA9PiBjaGFwdGVyLnNlY3Rpb25zLmZpbHRlcihzZWN0aW9uID0+IHNlY3Rpb24uaXNUYXNrID09PSB0cnVlKS5sZW5ndGggPiAwKS5sZW5ndGggPiAwO1xuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgdGhlcmUgYXJlIHZhbGlkIGNoYXB0ZXJzLlxuICAgICAqXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSwgaWYgdGhlcmUgYXJlIHZhbGlkKG5vdCBlbXB0eSkgY2hhcHRlcnMuXG4gICAgICovXG4gICAgdGhpcy5oYXNWYWxpZENoYXB0ZXJzID0gKCkgPT4gdGhpcy5wYXJhbXMuY2hhcHRlcnMubGVuZ3RoID4gMDtcblxuICAgIC8qKlxuICAgICAqIEdldCBudW1iZXIgb2YgYWN0aXZlIGNoYXB0ZXIuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IE51bWJlciBvZiBhY3RpdmUgY2hhcHRlci5cbiAgICAgKi9cbiAgICB0aGlzLmdldEFjdGl2ZUNoYXB0ZXIgPSAoZ2V0QWN0dWFsQ2hhcHRlciA9IGZhbHNlKSA9PiAhZ2V0QWN0dWFsQ2hhcHRlciA/IHRoaXMuYWN0aXZlQ2hhcHRlciA6IHRoaXMuY2hhcHRlcnNbdGhpcy5hY3RpdmVDaGFwdGVyXTtcblxuICAgIC8qKlxuICAgICAqIFNldCBudW1iZXIgb2YgYWN0aXZlIGNoYXB0ZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY2hhcHRlcklkIE51bWJlciBvZiBhY3RpdmUgY2hhcHRlci5cbiAgICAgKi9cbiAgICB0aGlzLnNldEFjdGl2ZUNoYXB0ZXIgPSAoY2hhcHRlcklkKSA9PiB7XG4gICAgICBjaGFwdGVySWQgPSBwYXJzZUludChjaGFwdGVySWQpO1xuICAgICAgaWYgKCFpc05hTihjaGFwdGVySWQpKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlQ2hhcHRlciA9IGNoYXB0ZXJJZDtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVmFsaWRhdGUgZnJhZ21lbnRzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGZyYWdtZW50cyBGcmFnbWVudHMgb2JqZWN0IGZyb20gVVJMLlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUsIGlmIGZyYWdtZW50cyBhcmUgdmFsaWQuXG4gICAgICovXG4gICAgdGhpcy52YWxpZGF0ZUZyYWdtZW50cyA9IChmcmFnbWVudHMpID0+IHtcbiAgICAgIHJldHVybiBmcmFnbWVudHMuY2hhcHRlciAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgIFN0cmluZyhmcmFnbWVudHMuaDVwYm9va2lkKSA9PT0gU3RyaW5nKHNlbGYuY29udGVudElkKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQnViYmxlIGV2ZW50cyBmcm9tIGNoaWxkIHRvIHBhcmVudFxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG9yaWdpbiBPcmlnaW4gb2YgdGhlIEV2ZW50XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZSBOYW1lIG9mIHRoZSBFdmVudFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXQgVGFyZ2V0IHRvIHRyaWdnZXIgZXZlbnQgb25cbiAgICAgKi9cbiAgICB0aGlzLmJ1YmJsZVVwID0gKG9yaWdpbiwgZXZlbnROYW1lLCB0YXJnZXQpID0+IHtcbiAgICAgIG9yaWdpbi5vbihldmVudE5hbWUsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAvLyBQcmV2ZW50IHRhcmdldCBmcm9tIHNlbmRpbmcgZXZlbnQgYmFjayBkb3duXG4gICAgICAgIHRhcmdldC5idWJibGluZ1Vwd2FyZHMgPSB0cnVlO1xuXG4gICAgICAgIC8vIFRyaWdnZXIgZXZlbnRcbiAgICAgICAgdGFyZ2V0LnRyaWdnZXIoZXZlbnROYW1lLCBldmVudCk7XG5cbiAgICAgICAgLy8gUmVzZXRcbiAgICAgICAgdGFyZ2V0LmJ1YmJsaW5nVXB3YXJkcyA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIG1lbnUgaXMgb3BlblxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG4gICAgdGhpcy5pc01lbnVPcGVuID0gKCkgPT4gdGhpcy5zdGF0dXNCYXJIZWFkZXIuaXNNZW51T3BlbigpO1xuXG4gICAgLyoqXG4gICAgICogRGV0ZWN0IGlmIHdyYXBwZXIgaXMgYSBzbWFsbCBzdXJmYWNlXG4gICAgICogQHJldHVybiB7Kn1cbiAgICAgKi9cbiAgICB0aGlzLmlzU21hbGxTdXJmYWNlID0gKCkgPT4gdGhpcy5tYWluV3JhcHBlciAmJiB0aGlzLm1haW5XcmFwcGVyLmhhc0NsYXNzKHRoaXMuc21hbGxTdXJmYWNlKTtcblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgcmF0aW8gb2YgdGhlIHdyYXBwZXJcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLmdldFJhdGlvID0gKCkgPT4gdGhpcy5tYWluV3JhcHBlci53aWR0aCgpIC8gcGFyc2VGbG9hdCh0aGlzLm1haW5XcmFwcGVyLmNzcygnZm9udC1zaXplJykpO1xuXG4gICAgLyoqXG4gICAgICogQWRkL3JlbW92ZSBjbGFzc25hbWUgYmFzZWQgb24gdGhlIHJhdGlvXG4gICAgICogQHBhcmFtIHtqUXVlcnl9IHdyYXBwZXJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcmF0aW9cbiAgICAgKi9cbiAgICB0aGlzLnNldFdyYXBwZXJDbGFzc0Zyb21SYXRpbyA9ICh3cmFwcGVyLCByYXRpbyA9IHRoaXMuZ2V0UmF0aW8oKSkgPT4ge1xuICAgICAgaWYgKCByYXRpbyA9PT0gdGhpcy5jdXJyZW50UmF0aW8pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5icmVha3BvaW50cygpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGlmIChpdGVtLnNob3VsZEFkZChyYXRpbykpIHtcbiAgICAgICAgICB0aGlzLm1haW5XcmFwcGVyLmFkZENsYXNzKGl0ZW0uY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzLm1haW5XcmFwcGVyLnJlbW92ZUNsYXNzKGl0ZW0uY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLmN1cnJlbnRSYXRpbyA9IHJhdGlvO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgcmVzaXppbmcgb2YgdGhlIGNvbnRlbnRcbiAgICAgKi9cbiAgICB0aGlzLnJlc2l6ZSA9ICgpID0+IHtcbiAgICAgIGlmICghdGhpcy5wYWdlQ29udGVudCB8fCAhdGhpcy5oYXNWYWxpZENoYXB0ZXJzKCkgfHwgIXRoaXMubWFpbldyYXBwZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXRXcmFwcGVyQ2xhc3NGcm9tUmF0aW8odGhpcy5tYWluV3JhcHBlcik7XG4gICAgICBjb25zdCBjdXJyZW50Q2hhcHRlcklkID0gdGhpcy5nZXRBY3RpdmVDaGFwdGVyKCk7XG4gICAgICBjb25zdCBjdXJyZW50Tm9kZSA9IHRoaXMucGFnZUNvbnRlbnQuY29sdW1uTm9kZXNbY3VycmVudENoYXB0ZXJJZF07XG5cbiAgICAgIC8vIE9ubHkgcmVzaXplIHRoZSB2aXNpYmxlIGNvbHVtblxuICAgICAgaWYgKGN1cnJlbnROb2RlLm9mZnNldFBhcmVudCAhPT0gbnVsbCkge1xuXG4gICAgICAgIC8vIFByZXZlbnQgcmUtcmVzaXppbmcgaWYgY2FsbGVkIGJ5IGluc3RhbmNlXG4gICAgICAgIGlmICghdGhpcy5idWJibGluZ1Vwd2FyZHMpIHtcbiAgICAgICAgICB0aGlzLnBhZ2VDb250ZW50LmNoYXB0ZXJzW2N1cnJlbnRDaGFwdGVySWRdLmluc3RhbmNlLnRyaWdnZXIoJ3Jlc2l6ZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVzaXplIGlmIG5lY2Vzc2FyeSBhbmQgbm90IGFuaW1hdGluZ1xuICAgICAgICBpZiAodGhpcy5wYWdlQ29udGVudC5jb250ZW50LnN0eWxlLmhlaWdodCAhPT0gYCR7Y3VycmVudE5vZGUub2Zmc2V0SGVpZ2h0fXB4YCAmJiAhY3VycmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdoNXAtaW50ZXJhY3RpdmUtYm9vay1hbmltYXRlJykpIHtcbiAgICAgICAgICB0aGlzLnBhZ2VDb250ZW50LmNvbnRlbnQuc3R5bGUuaGVpZ2h0ID0gYCR7Y3VycmVudE5vZGUub2Zmc2V0SGVpZ2h0fXB4YDtcblxuICAgICAgICAgIHRoaXMucGFnZUNvbnRlbnQudXBkYXRlRm9vdGVyKCk7XG5cbiAgICAgICAgICAvLyBBZGQgc29tZSBzbGFjayB0aW1lIGJlZm9yZSByZXNpemluZyBhZ2Fpbi5cbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlcigncmVzaXplJyk7XG4gICAgICAgICAgfSwgMTApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8qXG4gICAgICogRXN0YWJsaXNoIGFsbCB0cmlnZ2Vyc1xuICAgICAqL1xuICAgIHRoaXMub24oJ3Jlc2l6ZScsIHRoaXMucmVzaXplLCB0aGlzKTtcblxuICAgIHRoaXMub24oJ3RvZ2dsZU1lbnUnLCAoKSA9PiB7XG4gICAgICB0aGlzLnBhZ2VDb250ZW50LnRvZ2dsZU5hdmlnYXRpb25NZW51KCk7XG5cbiAgICAgIC8vIFVwZGF0ZSB0aGUgbWVudSBidXR0b25cbiAgICAgIHRoaXMuc3RhdHVzQmFySGVhZGVyLm1lbnVUb2dnbGVCdXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgdGhpcy5zdGF0dXNCYXJIZWFkZXIubWVudVRvZ2dsZUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdoNXAtaW50ZXJhY3RpdmUtYm9vay1zdGF0dXMtbWVudS1hY3RpdmUnKSA/ICd0cnVlJyA6ICdmYWxzZScpO1xuXG4gICAgICAvLyBXZSBuZWVkIHRvIHJlc2l6ZSB0aGUgd2hvbGUgYm9vayBzaW5jZSB0aGUgaW50ZXJhY3Rpb25zIGFyZSBnZXR0aW5nXG4gICAgICAvLyBtb3JlIHdpZHRoIGFuZCB0aG9zZSB3aXRoIGEgc3RhdGljIHJhdGlvIHdpbGwgaW5jcmVhc2UgdGhlaXIgaGVpZ2h0LlxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMudHJpZ2dlcigncmVzaXplJyk7XG4gICAgICB9LCAxNTApO1xuICAgIH0pO1xuXG4gICAgdGhpcy5vbignc2Nyb2xsVG9Ub3AnLCAoKSA9PiB7XG4gICAgICBpZiAoSDVQLmlzRnVsbHNjcmVlbiA9PT0gdHJ1ZSkge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLnBhZ2VDb250ZW50LmNvbnRhaW5lcjtcbiAgICAgICAgY29udGFpbmVyLnNjcm9sbEJ5KDAsIC1jb250YWluZXIuc2Nyb2xsSGVpZ2h0KTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnN0YXR1c0JhckhlYWRlci53cmFwcGVyLnNjcm9sbEludG9WaWV3KHRydWUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5vbignbmV3Q2hhcHRlcicsIChldmVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMucGFnZUNvbnRlbnQuY29sdW1uTm9kZXNbdGhpcy5nZXRBY3RpdmVDaGFwdGVyKCldLmNsYXNzTGlzdC5jb250YWlucygnaDVwLWludGVyYWN0aXZlLWJvb2stYW5pbWF0ZScpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5uZXdIYW5kbGVyID0gZXZlbnQuZGF0YTtcblxuICAgICAgLy8gQ3JlYXRlIHRoZSBuZXcgaGFzaFxuICAgICAgZXZlbnQuZGF0YS5uZXdIYXNoID0gVVJMVG9vbHMuY3JlYXRlRnJhZ21lbnRzU3RyaW5nKHRoaXMubmV3SGFuZGxlcik7XG5cbiAgICAgIC8vIEFzc2VydCB0aGF0IHRoZSBtb2R1bGUgaXRzZWxmIGlzIGFza2luZyBmb3IgYSByZWRpcmVjdFxuICAgICAgdGhpcy5uZXdIYW5kbGVyLnJlZGlyZWN0RnJvbUNvbXBvbmVudCA9IHRydWU7XG5cbiAgICAgIGlmICh0aGlzLmdldENoYXB0ZXJJZChldmVudC5kYXRhLmNoYXB0ZXIpID09PSB0aGlzLmFjdGl2ZUNoYXB0ZXIpIHtcbiAgICAgICAgY29uc3QgZnJhZ21lbnRzRXF1YWwgPSBVUkxUb29scy5hcmVGcmFnbWVudHNFcXVhbChcbiAgICAgICAgICBldmVudC5kYXRhLFxuICAgICAgICAgIFVSTFRvb2xzLmV4dHJhY3RGcmFnbWVudHNGcm9tVVJMKHRoaXMudmFsaWRhdGVGcmFnbWVudHMsIHRoaXMuaGFzaFdpbmRvdyksXG4gICAgICAgICAgWydoNXBib29raWQnLCAnY2hhcHRlcicsICdzZWN0aW9uJywgJ2hlYWRlck51bWJlciddXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKGZyYWdtZW50c0VxdWFsKSB7XG4gICAgICAgICAgLy8gb25seSB0cmlnZ2VyIHNlY3Rpb24gcmVkaXJlY3Qgd2l0aG91dCBjaGFuZ2luZyBoYXNoXG4gICAgICAgICAgdGhpcy5wYWdlQ29udGVudC5jaGFuZ2VDaGFwdGVyKGZhbHNlLCBldmVudC5kYXRhKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLypcbiAgICAgICAqIFNldCBmaW5hbCBjaGFwdGVyIHJlYWQgb24gZW50ZXJpbmcgYXV0b21hdGljYWxseSBpZiBpdCBkb2Vzbid0XG4gICAgICAgKiBjb250YWluIHRhc2tzIGFuZCBpZiBhbGwgb3RoZXIgY2hhcHRlcnMgaGF2ZSBiZWVuIGNvbXBsZXRlZFxuICAgICAgICovXG4gICAgICBpZiAodGhpcy5wYXJhbXMuYmVoYXZpb3VyLnByb2dyZXNzQXV0bykge1xuICAgICAgICBjb25zdCBpZCA9IHRoaXMuZ2V0Q2hhcHRlcklkKHRoaXMubmV3SGFuZGxlci5jaGFwdGVyKTtcbiAgICAgICAgaWYgKHRoaXMuaXNGaW5hbENoYXB0ZXJXaXRob3V0VGFzayhpZCkpIHtcbiAgICAgICAgICB0aGlzLnNldENoYXB0ZXJSZWFkKGlkKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBINVAudHJpZ2dlcih0aGlzLCAnY2hhbmdlSGFzaCcsIGV2ZW50LmRhdGEpO1xuICAgICAgSDVQLnRyaWdnZXIodGhpcywgJ3Njcm9sbFRvVG9wJyk7XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiB0aGUgY3VycmVudCBjaGFwdGVyIGlzIHJlYWQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSwgaWYgY3VycmVudCBjaGFwdGVyIHdhcyByZWFkLlxuICAgICAqL1xuICAgIHRoaXMuaXNDdXJyZW50Q2hhcHRlclJlYWQgPSAoKSA9PiB0aGlzLmlzQ2hhcHRlclJlYWQodGhpcy5jaGFwdGVyc1t0aGlzLmFjdGl2ZUNoYXB0ZXJdLCB0aGlzLnBhcmFtcy5iZWhhdmlvdXIucHJvZ3Jlc3NBdXRvKTtcblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiBhIGNoYXB0ZXIgaXMgcmVhZFxuICAgICAqXG4gICAgICogQHBhcmFtIGNoYXB0ZXJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGF1dG9Qcm9ncmVzc1xuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuaXNDaGFwdGVyUmVhZCA9IChjaGFwdGVyLCBhdXRvUHJvZ3Jlc3MgPSB0aGlzLnBhcmFtcy5iZWhhdmlvdXIucHJvZ3Jlc3NBdXRvKSA9PiBcbiAgICAgIGNoYXB0ZXIuaXNJbml0aWFsaXplZCAmJiAoY2hhcHRlci5jb21wbGV0ZWQgfHwgKGF1dG9Qcm9ncmVzcyAmJiBjaGFwdGVyLnRhc2tzTGVmdCA9PT0gMCkpO1xuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgY2hhcHRlciBpcyBmaW5hbCBvbmUsIGhhcyBubyB0YXNrcyBhbmQgYWxsIG90aGVyIGNoYXB0ZXJzIGFyZSBkb25lLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNoYXB0ZXJJZCBDaGFwdGVyIGlkLlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUsIGlmIGZpbmFsIGNoYXB0ZXIgd2l0aG91dCB0YXNrcyBhbmQgb3RoZXIgY2hhcHRlcnMgZG9uZS5cbiAgICAgKi9cbiAgICB0aGlzLmlzRmluYWxDaGFwdGVyV2l0aG91dFRhc2sgPSAoY2hhcHRlcklkKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5jaGFwdGVyc1tjaGFwdGVySWRdLm1heFRhc2tzID09PSAwICYmXG4gICAgICAgIHRoaXMuY2hhcHRlcnMuc2xpY2UoMCwgY2hhcHRlcklkKS5jb25jYXQodGhpcy5jaGFwdGVycy5zbGljZShjaGFwdGVySWQgKyAxKSlcbiAgICAgICAgICAuZXZlcnkoY2hhcHRlciA9PiBjaGFwdGVyLnRhc2tzTGVmdCA9PT0gMCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgY3VycmVudCBjaGFwdGVyIGFzIGNvbXBsZXRlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbY2hhcHRlcklkXSBDaGFwdGVyIElkLCBkZWZhdWx0cyB0byBjdXJyZW50IGNoYXB0ZXIuXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbcmVhZD10cnVlXSBUcnVlIGZvciBjaGFwdGVyIHJlYWQsIGZhbHNlIGZvciBub3QgcmVhZC5cbiAgICAgKi9cbiAgICB0aGlzLnNldENoYXB0ZXJSZWFkID0gKGNoYXB0ZXJJZCA9IHRoaXMuYWN0aXZlQ2hhcHRlciwgcmVhZCA9IHRydWUpID0+IHtcbiAgICAgIHRoaXMuaGFuZGxlQ2hhcHRlckNvbXBsZXRpb24oY2hhcHRlcklkLCByZWFkKTtcbiAgICAgIHRoaXMuc2lkZUJhci51cGRhdGVDaGFwdGVyUHJvZ3Jlc3NJbmRpY2F0b3IoY2hhcHRlcklkLCByZWFkID8gJ0RPTkUnIDogdGhpcy5oYXNDaGFwdGVyU3RhcnRlZFRhc2tzKHRoaXMuY2hhcHRlcnNbY2hhcHRlcklkXSkgPyAnU1RBUlRFRCcgOiAnQkxBTksnKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIGNoYXB0ZXIgaGFzIHN0YXJ0ZWQgb24gYW55IG9mIHRoZSBzZWN0aW9uc1xuICAgICAqXG4gICAgICogQHBhcmFtIGNoYXB0ZXJcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuICAgIHRoaXMuaGFzQ2hhcHRlclN0YXJ0ZWRUYXNrcyA9IGNoYXB0ZXIgPT4gY2hhcHRlci5zZWN0aW9ucy5maWx0ZXIoc2VjdGlvbiA9PiBzZWN0aW9uLnRhc2tEb25lKS5sZW5ndGggPiAwO1xuXG4gICAgLyoqXG4gICAgICogR2V0IHRleHR1YWwgc3RhdHVzIGZvciBjaGFwdGVyXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2hhcHRlclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gcHJvZ3Jlc3NBdXRvXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuICAgIHRoaXMuZ2V0Q2hhcHRlclN0YXR1cyA9IChjaGFwdGVyLCBwcm9ncmVzc0F1dG8gPSB0aGlzLnBhcmFtcy5iZWhhdmlvdXIucHJvZ3Jlc3NBdXRvKSA9PiB7XG4gICAgICBsZXQgc3RhdHVzID0gJ0JMQU5LJztcblxuICAgICAgaWYgKHRoaXMuaXNDaGFwdGVyUmVhZChjaGFwdGVyLCBwcm9ncmVzc0F1dG8pKSB7XG4gICAgICAgIHN0YXR1cyA9IFwiRE9ORVwiO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAodGhpcy5oYXNDaGFwdGVyU3RhcnRlZFRhc2tzKGNoYXB0ZXIpKSB7XG4gICAgICAgIHN0YXR1cyA9ICdTVEFSVEVEJztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN0YXR1cztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHN0YXRpc3RpY3Mgb24gdGhlIG1haW4gY2hhcHRlci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjaGFwdGVySWQgQ2hhcHRlciBJZC5cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGhhc0NoYW5nZWRDaGFwdGVyXG4gICAgICovXG4gICAgdGhpcy51cGRhdGVDaGFwdGVyUHJvZ3Jlc3MgPSAoY2hhcHRlcklkLCBoYXNDaGFuZ2VkQ2hhcHRlciA9IGZhbHNlKSA9PiB7XG4gICAgICBpZiAoIXRoaXMucGFyYW1zLmJlaGF2aW91ci5wcm9ncmVzc0luZGljYXRvcnMpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjaGFwdGVyID0gdGhpcy5jaGFwdGVyc1tjaGFwdGVySWRdO1xuICAgICAgbGV0IHN0YXR1cztcbiAgICAgIGlmIChjaGFwdGVyLm1heFRhc2tzKSB7XG4gICAgICAgIHN0YXR1cyA9IHRoaXMuZ2V0Q2hhcHRlclN0YXR1cyhjaGFwdGVyKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5pc0NoYXB0ZXJSZWFkKGNoYXB0ZXIpICYmIGhhc0NoYW5nZWRDaGFwdGVyKSB7XG4gICAgICAgICAgc3RhdHVzID0gJ0RPTkUnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHN0YXR1cyA9ICdCTEFOSyc7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXR1cyA9PT0gJ0RPTkUnKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhcHRlckNvbXBsZXRpb24oY2hhcHRlcklkKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zaWRlQmFyLnVwZGF0ZUNoYXB0ZXJQcm9ncmVzc0luZGljYXRvcihjaGFwdGVySWQsIHN0YXR1cyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEdldCBpZCBvZiBjaGFwdGVyLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNoYXB0ZXJVVUlEIENoYXB0ZXJVVUlELlxuICAgICAqIEByZXR1cm4ge251bWJlcn0gQ2hhcHRlciBJZC5cbiAgICAgKi9cbiAgICB0aGlzLmdldENoYXB0ZXJJZCA9IChjaGFwdGVyVVVJRCkgPT4ge1xuICAgICAgY2hhcHRlclVVSUQgPSBjaGFwdGVyVVVJRC5yZXBsYWNlKCdoNXAtaW50ZXJhY3RpdmUtYm9vay1jaGFwdGVyLScsICcnKTtcblxuICAgICAgcmV0dXJuIHRoaXMuY2hhcHRlcnNcbiAgICAgICAgLm1hcChjaGFwdGVyID0+IGNoYXB0ZXIuaW5zdGFuY2Uuc3ViQ29udGVudElkKS5pbmRleE9mKGNoYXB0ZXJVVUlEKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIGNoYXB0ZXIgY29tcGxldGlvbiwgZS5nLiB0cmlnZ2VyIHhBUEkgc3RhdGVtZW50c1xuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNoYXB0ZXJJZCBJZCBvZiB0aGUgY2hhcHRlciB0aGF0IHdhcyBjb21wbGV0ZWQuXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbY29tcGxldGVkPXRydWVdIFRydWUgZm9yIGNvbXBsZXRlZCwgZmFsc2UgZm9yIHVuY29tcGxldGVkLlxuICAgICAqL1xuICAgIHRoaXMuaGFuZGxlQ2hhcHRlckNvbXBsZXRpb24gPSAoY2hhcHRlcklkLCBjb21wbGV0ZWQgPSB0cnVlKSA9PiB7XG4gICAgICBjb25zdCBjaGFwdGVyID0gdGhpcy5jaGFwdGVyc1tjaGFwdGVySWRdO1xuXG4gICAgICBpZiAoY2hhcHRlci5pc1N1bW1hcnkgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWNvbXBsZXRlZCkge1xuICAgICAgICAvLyBSZXNldCBjaGFwdGVyIGFuZCBib29rIGNvbXBsZXRpb24uXG4gICAgICAgIGNoYXB0ZXIuY29tcGxldGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMudHJpZ2dlcignYm9va0NvbXBsZXRlZCcsIHtjb21wbGV0ZWQ6IHRoaXMuY29tcGxldGVkfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gTmV3IGNoYXB0ZXIgY29tcGxldGVkXG4gICAgICBpZiAoIWNoYXB0ZXIuY29tcGxldGVkKSB7XG4gICAgICAgIGNoYXB0ZXIuY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgY2hhcHRlci5pbnN0YW5jZS50cmlnZ2VyWEFQSVNjb3JlZChjaGFwdGVyLmluc3RhbmNlLmdldFNjb3JlKCksIGNoYXB0ZXIuaW5zdGFuY2UuZ2V0TWF4U2NvcmUoKSwgJ2NvbXBsZXRlZCcpO1xuICAgICAgfVxuXG4gICAgICAvLyBBbGwgY2hhcHRlcnMgY29tcGxldGVkXG4gICAgICBpZiAoIXRoaXMuY29tcGxldGVkICYmIHRoaXMuY2hhcHRlcnMuZmlsdGVyKGNoYXB0ZXIgPT4gIWNoYXB0ZXIuaXNTdW1tYXJ5KS5ldmVyeShjaGFwdGVyID0+IGNoYXB0ZXIuY29tcGxldGVkKSkge1xuICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMudHJpZ2dlcignYm9va0NvbXBsZXRlZCcsIHtjb21wbGV0ZWQ6IHRoaXMuY29tcGxldGVkfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENoZWNrIGlmIHRoZSBjb250ZW50IGhlaWdodCBleGNlZWRzIHRoZSB3aW5kb3cuXG4gICAgICovXG4gICAgdGhpcy5zaG91bGRGb290ZXJCZUhpZGRlbiA9ICgpID0+IHtcbiAgICAgIC8vIEFsd2F5cyBzaG93IGV4Y2VwdCBmb3IgaW4gZnVsbHNjcmVlblxuICAgICAgLy8gSWRlYWxseSB3ZSdkIGNoZWNrIG9uIHRoZSB0b3Agd2luZG93IHNpemUgYnV0IHdlIGNhbid0IGFsd2F5cyBnZXQgaXQuXG4gICAgICByZXR1cm4gdGhpcy5pc0Z1bGxzY3JlZW47XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEdldCBjb250ZW50IGNvbnRhaW5lciB3aWR0aC5cbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IENvbnRhaW5lciB3aWR0aCBvciAwLlxuICAgICAqL1xuICAgIHRoaXMuZ2V0Q29udGFpbmVyV2lkdGggPSAoKSA9PiB7XG4gICAgICByZXR1cm4gKHRoaXMucGFnZUNvbnRlbnQgJiYgdGhpcy5wYWdlQ29udGVudC5jb250YWluZXIpID8gdGhpcy5wYWdlQ29udGVudC5jb250YWluZXIub2Zmc2V0V2lkdGggOiAwO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgdGhlIGN1cnJlbnQgYWN0aXZlIGNoYXB0ZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHJlZGlyZWN0T25Mb2FkIElzIHRoaXMgYSByZWRpcmVjdCB3aGljaCBoYXBwZW5zIGltbWVkaWF0ZWx5P1xuICAgICAqL1xuICAgIHRoaXMuY2hhbmdlQ2hhcHRlciA9IChyZWRpcmVjdE9uTG9hZCkgPT4ge1xuICAgICAgdGhpcy5wYWdlQ29udGVudC5jaGFuZ2VDaGFwdGVyKHJlZGlyZWN0T25Mb2FkLCB0aGlzLm5ld0hhbmRsZXIpO1xuICAgICAgdGhpcy5zdGF0dXNCYXJIZWFkZXIudXBkYXRlU3RhdHVzQmFyKCk7XG4gICAgICB0aGlzLnN0YXR1c0JhckZvb3Rlci51cGRhdGVTdGF0dXNCYXIoKTtcbiAgICAgIHRoaXMubmV3SGFuZGxlci5yZWRpcmVjdEZyb21Db21wb25lbnQgPSBmYWxzZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogR2V0IGxpc3Qgb2YgY2xhc3NuYW1lIGFuZCBjb25kaXRpb25zIGZvciB3aGVuIHRvIGFkZCB0aGUgY2xhc3NuYW1lIHRvIHRoZSBjb250ZW50IHR5cGVcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1t7Y2xhc3NOYW1lOiBzdHJpbmcsIHNob3VsZEFkZDogKGZ1bmN0aW9uKCopOiBib29sZWFuKX0sIHtjbGFzc05hbWU6IHN0cmluZywgc2hvdWxkQWRkOiAoZnVuY3Rpb24oKik6IGJvb2xlYW58Ym9vbGVhbil9LCB7Y2xhc3NOYW1lOiBzdHJpbmcsIHNob3VsZEFkZDogKGZ1bmN0aW9uKCopOiBib29sZWFuKX1dfVxuICAgICAqL1xuICAgIHRoaXMuYnJlYWtwb2ludHMgPSAoKSA9PiB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICB7XG4gICAgICAgICAgXCJjbGFzc05hbWVcIjogdGhpcy5zbWFsbFN1cmZhY2UsXG4gICAgICAgICAgXCJzaG91bGRBZGRcIjogcmF0aW8gPT4gcmF0aW8gPCA0MyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiY2xhc3NOYW1lXCI6IHRoaXMubWVkaXVtU3VyZmFjZSxcbiAgICAgICAgICBcInNob3VsZEFkZFwiOiByYXRpbyA9PiByYXRpbyA+PSA0MyAmJiByYXRpbyA8IDYwLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJjbGFzc05hbWVcIjogdGhpcy5sYXJnZVN1cmZhY2UsXG4gICAgICAgICAgXCJzaG91bGRBZGRcIjogcmF0aW8gPT4gcmF0aW8gPj0gNjAsXG4gICAgICAgIH0sXG4gICAgICBdO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VycyB3aGVuZXZlciB0aGUgaGFzaCBjaGFuZ2VzLCBpbmRpY2F0aW5nIHRoYXQgYSBjaGFwdGVyIHJlZGlyZWN0IGlzIGhhcHBlbmluZ1xuICAgICAqL1xuICAgIEg1UC5vbih0aGlzLCAncmVzcG9uZENoYW5nZUhhc2gnLCAoKSA9PiB7XG4gICAgICBjb25zdCBwYXlsb2FkID0gVVJMVG9vbHMuZXh0cmFjdEZyYWdtZW50c0Zyb21VUkwoc2VsZi52YWxpZGF0ZUZyYWdtZW50cywgdGhpcy5oYXNoV2luZG93KTtcbiAgICAgIGlmIChwYXlsb2FkLmg1cGJvb2tpZCAmJiBTdHJpbmcocGF5bG9hZC5oNXBib29raWQpID09PSBTdHJpbmcoc2VsZi5jb250ZW50SWQpKSB7XG4gICAgICAgIHRoaXMucmVkaXJlY3RDaGFwdGVyKHBheWxvYWQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgSDVQLm9uKHRoaXMsICdjaGFuZ2VIYXNoJywgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoU3RyaW5nKGV2ZW50LmRhdGEuaDVwYm9va2lkKSA9PT0gU3RyaW5nKHRoaXMuY29udGVudElkKSkge1xuICAgICAgICB0aGlzLmhhc2hXaW5kb3cubG9jYXRpb24uaGFzaCA9IGV2ZW50LmRhdGEubmV3SGFzaDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIEg1UC5leHRlcm5hbERpc3BhdGNoZXIub24oJ3hBUEknLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGNvbnN0IGFjdGlvblZlcmJzID0gW1xuICAgICAgICAnYW5zd2VyZWQnLFxuICAgICAgICAnY29tcGxldGVkJyxcbiAgICAgICAgJ2ludGVyYWN0ZWQnLFxuICAgICAgICAnYXR0ZW1wdGVkJyxcbiAgICAgIF07XG4gICAgICBjb25zdCBpc0FjdGlvblZlcmIgPSBhY3Rpb25WZXJicy5pbmRleE9mKGV2ZW50LmdldFZlcmIoKSkgPiAtMTtcbiAgICAgIC8vIFNvbWUgY29udGVudCB0eXBlcyBtYXkgc2VuZCB4QVBJIGV2ZW50cyB3aGVuIHRoZXkgYXJlIGluaXRpYWxpemVkLFxuICAgICAgLy8gc28gY2hlY2sgdGhhdCBjaGFwdGVyIGlzIGluaXRpYWxpemVkIGJlZm9yZSBzZXR0aW5nIGFueSBzZWN0aW9uIGNoYW5nZVxuICAgICAgY29uc3QgaXNJbml0aWFsaXplZCA9IHNlbGYuY2hhcHRlcnMubGVuZ3RoO1xuXG4gICAgICBpZiAoc2VsZiAhPT0gdGhpcyAmJiBpc0FjdGlvblZlcmIgJiYgaXNJbml0aWFsaXplZCkge1xuICAgICAgICBzZWxmLnNldFNlY3Rpb25TdGF0dXNCeUlEKHRoaXMuc3ViQ29udGVudElkIHx8IHRoaXMuY29udGVudERhdGEuc3ViQ29udGVudElkLCBzZWxmLmFjdGl2ZUNoYXB0ZXIpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogUmVkaXJlY3QgY2hhcHRlci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXQgVGFyZ2V0IGRhdGEuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRhcmdldC5oNXBib29raWQgQm9vayBpZC5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGFyZ2V0LmNoYXB0ZXIgQ2hhcHRlciBVVUlELlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0YXJnZXQuc2VjdGlvbiBTZWN0aW9uIFVVSUQuXG4gICAgICovXG4gICAgdGhpcy5yZWRpcmVjdENoYXB0ZXIgPSAodGFyZ2V0KSA9PiB7XG4gICAgICAvKipcbiAgICAgICAqIElmIHRydWUsIHdlIGFscmVhZHkgaGF2ZSBpbmZvcm1hdGlvbiByZWdhcmRpbmcgcmVkaXJlY3QgaW4gbmV3SGFuZGxlclxuICAgICAgICogV2hlbiB1c2luZyBicm93c2VyIGhpc3RvcnksIGEgY29udmVydCBpcyBuZWNjZWNhcnlcbiAgICAgICAqL1xuICAgICAgaWYgKCF0aGlzLm5ld0hhbmRsZXIucmVkaXJlY3RGcm9tQ29tcG9uZW50KSB7XG5cbiAgICAgICAgLy8gQXNzZXJ0IHRoYXQgdGhlIGhhbmRsZXIgYWN0dWFsbHkgaXMgZnJvbSB0aGlzIGNvbnRlbnQgdHlwZS5cbiAgICAgICAgaWYgKHRhcmdldC5oNXBib29raWQgJiYgU3RyaW5nKHRhcmdldC5oNXBib29raWQpID09PSBTdHJpbmcoc2VsZi5jb250ZW50SWQpKSB7XG4gICAgICAgICAgc2VsZi5uZXdIYW5kbGVyID0gdGFyZ2V0O1xuICAgICAgICAvKipcbiAgICAgICAgICogSDVwLWNvbnRleHQgc3dpdGNoIG9uIG5vIG5ld2hhc2ggPSBoaXN0b3J5IGJhY2t3YXJkc1xuICAgICAgICAgKiBSZWRpcmVjdCB0byBmaXJzdCBjaGFwdGVyXG4gICAgICAgICAqL1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHNlbGYubmV3SGFuZGxlciA9IHtcbiAgICAgICAgICAgIGNoYXB0ZXI6IGBoNXAtaW50ZXJhY3RpdmUtYm9vay1jaGFwdGVyLSR7c2VsZi5jaGFwdGVyc1swXS5pbnN0YW5jZS5zdWJDb250ZW50SWR9YCxcbiAgICAgICAgICAgIGg1cGJvb2tpZDogc2VsZi5oNXBib29raWRcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzZWxmLmNoYW5nZUNoYXB0ZXIoZmFsc2UpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTZXQgYSBzZWN0aW9uIHByb2dyZXNzIGluZGljYXRvci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWN0aW9uVVVJRCBVVUlEIG9mIHRhcmdldCBzZWN0aW9uLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjaGFwdGVySWQgTnVtYmVyIG9mIHRhcmdldGNoYXB0ZXIuXG4gICAgICovXG4gICAgdGhpcy5zZXRTZWN0aW9uU3RhdHVzQnlJRCA9IChzZWN0aW9uVVVJRCwgY2hhcHRlcklkKSA9PiB7XG4gICAgICB0aGlzLmNoYXB0ZXJzW2NoYXB0ZXJJZF0uc2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qgc2VjdGlvbkluc3RhbmNlID0gc2VjdGlvbi5pbnN0YW5jZTtcblxuICAgICAgICBpZiAoc2VjdGlvbkluc3RhbmNlLnN1YkNvbnRlbnRJZCA9PT0gc2VjdGlvblVVSUQgJiYgIXNlY3Rpb24udGFza0RvbmUpIHtcbiAgICAgICAgICAvLyBDaGVjayBpZiBpbnN0YW5jZSBoYXMgZ2l2ZW4gYW4gYW5zd2VyXG4gICAgICAgICAgc2VjdGlvbi50YXNrRG9uZSA9IHNlY3Rpb25JbnN0YW5jZS5nZXRBbnN3ZXJHaXZlbiA/IHNlY3Rpb25JbnN0YW5jZS5nZXRBbnN3ZXJHaXZlbigpIDogdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgdGhpcy5zaWRlQmFyLnNldFNlY3Rpb25NYXJrZXIoY2hhcHRlcklkLCBpbmRleCk7XG4gICAgICAgICAgaWYgKHNlY3Rpb24udGFza0RvbmUpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhcHRlcnNbY2hhcHRlcklkXS50YXNrc0xlZnQgLT0gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy51cGRhdGVDaGFwdGVyUHJvZ3Jlc3MoY2hhcHRlcklkKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFkZCBsaXN0ZW5lciBmb3IgaGFzaCBjaGFuZ2VzIHRvIHNwZWNpZmllZCB3aW5kb3dcbiAgICAgKi9cbiAgICB0aGlzLmFkZEhhc2hMaXN0ZW5lciA9IChoYXNoV2luZG93KSA9PiB7XG4gICAgICBoYXNoV2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgSDVQLnRyaWdnZXIodGhpcywgJ3Jlc3BvbmRDaGFuZ2VIYXNoJywgZXZlbnQpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmhhc2hXaW5kb3cgPSBoYXNoV2luZG93O1xuICAgIH07XG5cbiAgICB0cnkge1xuICAgICAgdGhpcy5hZGRIYXNoTGlzdGVuZXIodG9wKTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgIGlmIChlIGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uKSB7XG4gICAgICAgIC8vIFVzZSBpZnJhbWUgd2luZG93IHRvIHN0b3JlIGJvb2sgbG9jYXRpb24gaGFzaFxuICAgICAgICB0aGlzLmFkZEhhc2hMaXN0ZW5lcih3aW5kb3cpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGlzcGxheSBib29rIGNvdmVyXG4gICAgICpcbiAgICAgKiBAcGFyYW0gd3JhcHBlclxuICAgICAqL1xuICAgIHRoaXMuZGlzcGxheUNvdmVyID0gd3JhcHBlciA9PiB7XG4gICAgICB0aGlzLmhpZGVBbGxFbGVtZW50cyh0cnVlKTtcbiAgICAgIHdyYXBwZXIuYXBwZW5kKHRoaXMuY292ZXIuY29udGFpbmVyKTtcbiAgICAgIHdyYXBwZXIuYWRkQ2xhc3MoJ2NvdmVyZWQnKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQXR0YWNoIGxpYnJhcnkgdG8gd3JhcHBlclxuICAgICAqIEBwYXJhbSB7alF1ZXJ5fSAkd3JhcHBlclxuICAgICAqL1xuICAgIHRoaXMuYXR0YWNoID0gKCR3cmFwcGVyKSA9PiB7XG4gICAgICB0aGlzLm1haW5XcmFwcGVyID0gJHdyYXBwZXI7XG4gICAgICAvLyBOZWVkZWQgdG8gZW5hYmxlIHNjcm9sbGluZyBpbiBmdWxsc2NyZWVuXG4gICAgICAkd3JhcHBlci5hZGRDbGFzcygnaDVwLWludGVyYWN0aXZlLWJvb2sgaDVwLXNjcm9sbGFibGUtZnVsbHNjcmVlbicpO1xuXG4gICAgICBpZiAodGhpcy5pc0VkZ2UxOG9yRWFybGllcigpKSB7XG4gICAgICAgICR3cmFwcGVyLmFkZENsYXNzKCdlZGdlLTE4Jyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0V3JhcHBlckNsYXNzRnJvbVJhdGlvKHRoaXMubWFpbldyYXBwZXIpO1xuICAgICAgaWYgKHRoaXMuY292ZXIpIHtcbiAgICAgICAgdGhpcy5kaXNwbGF5Q292ZXIoJHdyYXBwZXIpO1xuICAgICAgfVxuXG4gICAgICAkd3JhcHBlci5hcHBlbmQodGhpcy5zdGF0dXNCYXJIZWFkZXIud3JhcHBlcik7XG5cbiAgICAgIGNvbnN0IGZpcnN0ID0gdGhpcy5wYWdlQ29udGVudC5jb250YWluZXIuZmlyc3RDaGlsZDtcbiAgICAgIGlmIChmaXJzdCkge1xuICAgICAgICB0aGlzLnBhZ2VDb250ZW50LmNvbnRhaW5lci5pbnNlcnRCZWZvcmUodGhpcy5zaWRlQmFyLmNvbnRhaW5lciwgZmlyc3QpO1xuICAgICAgfVxuXG4gICAgICAkd3JhcHBlci5hcHBlbmQodGhpcy5wYWdlQ29udGVudC5jb250YWluZXIpO1xuICAgICAgJHdyYXBwZXIuYXBwZW5kKHRoaXMuc3RhdHVzQmFyRm9vdGVyLndyYXBwZXIpO1xuICAgICAgdGhpcy4kd3JhcHBlciA9ICR3cmFwcGVyO1xuXG4gICAgICBpZiAodGhpcy5wYXJhbXMuYmVoYXZpb3VyLmRlZmF1bHRUYWJsZU9mQ29udGVudHMgJiYgIXRoaXMuaXNTbWFsbFN1cmZhY2UoKSkge1xuICAgICAgICB0aGlzLnRyaWdnZXIoJ3RvZ2dsZU1lbnUnKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5wYWdlQ29udGVudC51cGRhdGVGb290ZXIoKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIGJyb3dzZXIgaXMgSUUgRWRnZSB2ZXJzaW9uIDE4IG9yIGVhcmxpZXJcbiAgICAgKi9cbiAgICB0aGlzLmlzRWRnZTE4b3JFYXJsaWVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgdWEgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgICAgIGNvbnN0IGVkZ2VJbmRleCA9IHVhLmluZGV4T2YoJ0VkZ2UvJyk7XG4gICAgICBpZiAoZWRnZUluZGV4IDwgMCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBjb25zdCBlZGdlVmVyc2lvbiA9IHVhLnN1YnN0cmluZyhcbiAgICAgICAgZWRnZUluZGV4ICsgNSxcbiAgICAgICAgdWEuaW5kZXhPZignLicsIGVkZ2VJbmRleClcbiAgICAgICk7XG4gICAgICByZXR1cm4gcGFyc2VJbnQoZWRnZVZlcnNpb24pIDw9IDE4O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBIaWRlIGFsbCBlbGVtZW50cy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaGlkZSBUcnVlIHRvIGhpZGUgZWxlbWVudHMuXG4gICAgICovXG4gICAgdGhpcy5oaWRlQWxsRWxlbWVudHMgPSBmdW5jdGlvbiAoaGlkZSkge1xuICAgICAgY29uc3Qgbm9kZXMgPSBbXG4gICAgICAgIHRoaXMuc3RhdHVzQmFySGVhZGVyLndyYXBwZXIsXG4gICAgICAgIHRoaXMuc3RhdHVzQmFyRm9vdGVyLndyYXBwZXIsXG4gICAgICAgIHRoaXMucGFnZUNvbnRlbnQuY29udGFpbmVyXG4gICAgICBdO1xuXG4gICAgICBpZiAoaGlkZSkge1xuICAgICAgICBub2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZCgnaDVwLWNvbnRlbnQtaGlkZGVuJyk7XG4gICAgICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKCdoNXAtaW50ZXJhY3RpdmUtYm9vay1jb3Zlci1wcmVzZW50Jyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIG5vZGVzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdoNXAtY29udGVudC1oaWRkZW4nKTtcbiAgICAgICAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2g1cC1pbnRlcmFjdGl2ZS1ib29rLWNvdmVyLXByZXNlbnQnKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIEluaXRpYWxpemUgdGhlIHN1cHBvcnQgY29tcG9uZW50c1xuICAgIGlmICh0aGlzLnBhcmFtcy5zaG93Q292ZXJQYWdlKSB7XG4gICAgICB0aGlzLmNvdmVyID0gbmV3IENvdmVyKHRoaXMucGFyYW1zLmJvb2tDb3ZlciwgY29udGVudERhdGEubWV0YWRhdGEudGl0bGUsIHRoaXMubDEwbi5yZWFkLCBjb250ZW50SWQsIHRoaXMpO1xuICAgIH1cblxuICAgIGNvbnN0IGNoaWxkQ29udGVudERhdGEgPSB7XG4gICAgICAuLi5jb250ZW50RGF0YSxcbiAgICAgIHBhcmVudDogdGhpcyxcbiAgICB9O1xuICAgIHRoaXMucGFnZUNvbnRlbnQgPSBuZXcgUGFnZUNvbnRlbnQodGhpcy5wYXJhbXMsIGNvbnRlbnRJZCwgY2hpbGRDb250ZW50RGF0YSwgdGhpcywge1xuICAgICAgbDEwbjoge1xuICAgICAgICBtYXJrQXNGaW5pc2hlZDogdGhpcy5sMTBuLm1hcmtBc0ZpbmlzaGVkXG4gICAgICB9LFxuICAgICAgYmVoYXZpb3VyOiB0aGlzLnBhcmFtcy5iZWhhdmlvdXJcbiAgICB9KTtcbiAgICB0aGlzLmNoYXB0ZXJzID0gdGhpcy5wYWdlQ29udGVudC5nZXRDaGFwdGVycygpO1xuXG4gICAgdGhpcy5zaWRlQmFyID0gbmV3IFNpZGVCYXIodGhpcy5wYXJhbXMsIGNvbnRlbnRJZCwgY29udGVudERhdGEubWV0YWRhdGEudGl0bGUsIHRoaXMpO1xuXG4gICAgdGhpcy5zdGF0dXNCYXJIZWFkZXIgPSBuZXcgU3RhdHVzQmFyKGNvbnRlbnRJZCwgdGhpcy5jaGFwdGVycy5sZW5ndGgsIHRoaXMsIHtcbiAgICAgIGwxMG46IHRoaXMubDEwbixcbiAgICAgIGExMXk6IHRoaXMucGFyYW1zLmExMXksXG4gICAgICBiZWhhdmlvdXI6IHRoaXMucGFyYW1zLmJlaGF2aW91cixcbiAgICAgIGRpc3BsYXlGdWxsU2NyZWVuQnV0dG9uOiB0cnVlLFxuICAgIH0sICdoNXAtaW50ZXJhY3RpdmUtYm9vay1zdGF0dXMtaGVhZGVyJyk7XG5cbiAgICB0aGlzLnN0YXR1c0JhckZvb3RlciA9IG5ldyBTdGF0dXNCYXIoY29udGVudElkLCB0aGlzLmNoYXB0ZXJzLmxlbmd0aCwgdGhpcywge1xuICAgICAgbDEwbjogdGhpcy5sMTBuLFxuICAgICAgYTExeTogdGhpcy5wYXJhbXMuYTExeSxcbiAgICAgIGJlaGF2aW91cjogdGhpcy5wYXJhbXMuYmVoYXZpb3VyXG4gICAgfSwgJ2g1cC1pbnRlcmFjdGl2ZS1ib29rLXN0YXR1cy1mb290ZXInKTtcblxuICAgIGlmICh0aGlzLmhhc0NvdmVyKCkpIHtcblxuICAgICAgdGhpcy5oaWRlQWxsRWxlbWVudHModHJ1ZSk7XG5cbiAgICAgIHRoaXMub24oJ2NvdmVyUmVtb3ZlZCcsICgpID0+IHtcbiAgICAgICAgdGhpcy5oaWRlQWxsRWxlbWVudHMoZmFsc2UpO1xuICAgICAgICB0aGlzLnRyaWdnZXIoJ3Jlc2l6ZScpO1xuICAgICAgICAvLyBUaGlzIHdpbGwgaGFwcGVuIGFsc28gb24gcmV0cnksIGJ1dCB0aGF0IGRvZXNuJ3QgbWF0dGVyLCBzaW5jZVxuICAgICAgICAvLyBzZXRBY3Rpdml0eVN0YXJ0ZWQoKSBjaGVja3MgaWYgaXQgaGFzIGJlZW4gcnVuIGJlZm9yZVxuICAgICAgICB0aGlzLnNldEFjdGl2aXR5U3RhcnRlZCgpO1xuXG4gICAgICAgIC8vIEZvY3VzIGhlYWRlciBwcm9ncmVzcyBiYXIgd2hlbiBjb3ZlciBpcyByZW1vdmVkXG4gICAgICAgIHRoaXMuc3RhdHVzQmFySGVhZGVyLnByb2dyZXNzQmFyLnByb2dyZXNzLmZvY3VzKCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLnNldEFjdGl2aXR5U3RhcnRlZCgpO1xuICAgIH1cblxuICAgIGlmICggdGhpcy5oYXNWYWxpZENoYXB0ZXJzKCkgKSB7XG4gICAgICAvLyBLaWNrc3RhcnQgdGhlIHN0YXR1c2JhclxuICAgICAgdGhpcy5zdGF0dXNCYXJIZWFkZXIudXBkYXRlU3RhdHVzQmFyKCk7XG4gICAgICB0aGlzLnN0YXR1c0JhckZvb3Rlci51cGRhdGVTdGF0dXNCYXIoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBzdXJlIHRoYXQgdGhlIGNvbmZpZyB1c2VkIGlzIGluIGEgZ29vZCBzdGF0ZS4gVGhpcyBpbmNsdWRlcyBkZWZhdWx0IHZhbHVlcyBmb3IgYWxsIGxhbmd1YWdlIHN0cmluZ3NcbiAgICpcbiAgICogQHBhcmFtIG9yaWdpbmFsQ29uZmlnXG4gICAqIEByZXR1cm4geyp9XG4gICAqL1xuICBzdGF0aWMgc2FuaXRpemVDb25maWcob3JpZ2luYWxDb25maWcpIHtcbiAgICBjb25zdCB7XG4gICAgICByZWFkID0gXCJSZWFkXCIsXG4gICAgICBkaXNwbGF5VE9DID0gXCJEaXNwbGF5ICYjMDM5O1RhYmxlIG9mIGNvbnRlbnRzJiMwMzk7XCIsXG4gICAgICBoaWRlVE9DID0gXCJIaWRlICYjMDM5O1RhYmxlIG9mIGNvbnRlbnRzJiMwMzk7XCIsXG4gICAgICBuZXh0UGFnZSA9IFwiTmV4dCBwYWdlXCIsXG4gICAgICBwcmV2aW91c1BhZ2UgPSBcIlByZXZpb3VzIHBhZ2VcIixcbiAgICAgIGNoYXB0ZXJDb21wbGV0ZWQgPSBcIlBhZ2UgY29tcGxldGVkIVwiLFxuICAgICAgcGFydENvbXBsZXRlZCA9IFwiQHBhZ2VzIG9mIEB0b3RhbCBjb21wbGV0ZWRcIixcbiAgICAgIGluY29tcGxldGVDaGFwdGVyID0gXCJJbmNvbXBsZXRlIHBhZ2VcIixcbiAgICAgIG5hdmlnYXRlVG9Ub3AgPSBcIk5hdmlnYXRlIHRvIHRoZSB0b3BcIixcbiAgICAgIG1hcmtBc0ZpbmlzaGVkID0gXCJJIGhhdmUgZmluaXNoZWQgdGhpcyBwYWdlXCIsXG4gICAgICBmdWxsc2NyZWVuID0gXCJGdWxsc2NyZWVuXCIsXG4gICAgICBleGl0RnVsbHNjcmVlbiA9IFwiRXhpdCBmdWxsc2NyZWVuXCIsXG4gICAgICBib29rUHJvZ3Jlc3NTdWJ0ZXh0ID0gXCJAY291bnQgb2YgQHRvdGFsIHBhZ2VzXCIsXG4gICAgICBpbnRlcmFjdGlvbnNQcm9ncmVzc1N1YnRleHQgPSBcIkBjb3VudCBvZiBAdG90YWwgaW50ZXJhY3Rpb25zXCIsXG4gICAgICBzdWJtaXRSZXBvcnQgPSBcIlN1Ym1pdCBSZXBvcnRcIixcbiAgICAgIHJlc3RhcnRMYWJlbCA9IFwiUmVzdGFydFwiLFxuICAgICAgc3VtbWFyeUhlYWRlciA9IFwiU3VtbWFyeVwiLFxuICAgICAgYWxsSW50ZXJhY3Rpb25zID0gXCJBbGwgaW50ZXJhY3Rpb25zXCIsXG4gICAgICB1bmFuc3dlcmVkSW50ZXJhY3Rpb25zID0gXCJVbmFuc3dlcmVkIGludGVyYWN0aW9uc1wiLFxuICAgICAgc2NvcmVUZXh0ID0gXCJAc2NvcmUgLyBAbWF4c2NvcmVcIixcbiAgICAgIGxlZnRPdXRPZlRvdGFsQ29tcGxldGVkID0gXCJAbGVmdCBvZiBAbWF4IGludGVyYWN0aW5vcyBjb21wbGV0ZWRcIixcbiAgICAgIG5vSW50ZXJhY3Rpb25zID0gXCJObyBpbnRlcmFjdGlvbnNcIixcbiAgICAgIHNjb3JlID0gXCJTY29yZVwiLFxuICAgICAgc3VtbWFyeUFuZFN1Ym1pdCA9IFwiU3VtbWFyeSAmIHN1Ym1pdFwiLFxuICAgICAgbm9DaGFwdGVySW50ZXJhY3Rpb25Cb2xkVGV4dCA9IFwiWW91IGhhdmUgbm90IGludGVyYWN0ZWQgd2l0aCBhbnkgcGFnZXMuXCIsXG4gICAgICBub0NoYXB0ZXJJbnRlcmFjdGlvblRleHQgPSBcIllvdSBoYXZlIHRvIGludGVyYWN0IHdpdGggYXQgbGVhc3Qgb25lIHBhZ2UgYmVmb3JlIHlvdSBjYW4gc2VlIHRoZSBzdW1tYXJ5LlwiLFxuICAgICAgeW91ckFuc3dlcnNBcmVTdWJtaXR0ZWRGb3JSZXZpZXcgPSBcIllvdXIgYW5zd2VycyBhcmUgc3VibWl0dGVkIGZvciByZXZpZXchXCIsXG4gICAgICBib29rUHJvZ3Jlc3MgPSBcIkJvb2sgcHJvZ3Jlc3NcIixcbiAgICAgIGludGVyYWN0aW9uc1Byb2dyZXNzID0gXCJJbnRlcmFjdGlvbnMgcHJvZ3Jlc3NcIixcbiAgICAgIHRvdGFsU2NvcmVMYWJlbCA9ICdUb3RhbCBzY29yZScsXG4gICAgICAuLi5jb25maWdcbiAgICB9ID0gb3JpZ2luYWxDb25maWc7XG5cbiAgICBjb25maWcuY2hhcHRlcnMgPSBjb25maWcuY2hhcHRlcnNcbiAgICAgIC5tYXAoY2hhcHRlciA9PiB7XG4gICAgICAgIGNoYXB0ZXIucGFyYW1zLmNvbnRlbnQgPSBjaGFwdGVyLnBhcmFtcy5jb250ZW50LmZpbHRlcihjb250ZW50ID0+IGNvbnRlbnQuY29udGVudCk7XG4gICAgICAgIHJldHVybiBjaGFwdGVyO1xuICAgICAgfSlcbiAgICAgIC5maWx0ZXIoY2hhcHRlciA9PiBjaGFwdGVyLnBhcmFtcy5jb250ZW50ICYmIGNoYXB0ZXIucGFyYW1zLmNvbnRlbnQubGVuZ3RoID4gMCk7XG5cbiAgICBjb25maWcuYmVoYXZpb3VyLmRpc3BsYXlTdW1tYXJ5ID0gY29uZmlnLmJlaGF2aW91ci5kaXNwbGF5U3VtbWFyeSA9PT0gdW5kZWZpbmVkIHx8IGNvbmZpZy5iZWhhdmlvdXIuZGlzcGxheVN1bW1hcnk7XG5cbiAgICBjb25maWcubDEwbiA9IHtcbiAgICAgIHJlYWQsXG4gICAgICBkaXNwbGF5VE9DLFxuICAgICAgaGlkZVRPQyxcbiAgICAgIG5leHRQYWdlLFxuICAgICAgcHJldmlvdXNQYWdlLFxuICAgICAgY2hhcHRlckNvbXBsZXRlZCxcbiAgICAgIHBhcnRDb21wbGV0ZWQsXG4gICAgICBpbmNvbXBsZXRlQ2hhcHRlcixcbiAgICAgIG5hdmlnYXRlVG9Ub3AsXG4gICAgICBtYXJrQXNGaW5pc2hlZCxcbiAgICAgIGZ1bGxzY3JlZW4sXG4gICAgICBleGl0RnVsbHNjcmVlbixcbiAgICAgIGJvb2tQcm9ncmVzc1N1YnRleHQsXG4gICAgICBpbnRlcmFjdGlvbnNQcm9ncmVzc1N1YnRleHQsXG4gICAgICBzdWJtaXRSZXBvcnQsXG4gICAgICByZXN0YXJ0TGFiZWwsXG4gICAgICBzdW1tYXJ5SGVhZGVyLFxuICAgICAgYWxsSW50ZXJhY3Rpb25zLFxuICAgICAgdW5hbnN3ZXJlZEludGVyYWN0aW9ucyxcbiAgICAgIHNjb3JlVGV4dCxcbiAgICAgIGxlZnRPdXRPZlRvdGFsQ29tcGxldGVkLFxuICAgICAgbm9JbnRlcmFjdGlvbnMsXG4gICAgICBzY29yZSxcbiAgICAgIHN1bW1hcnlBbmRTdWJtaXQsXG4gICAgICBub0NoYXB0ZXJJbnRlcmFjdGlvbkJvbGRUZXh0LFxuICAgICAgbm9DaGFwdGVySW50ZXJhY3Rpb25UZXh0LFxuICAgICAgeW91ckFuc3dlcnNBcmVTdWJtaXR0ZWRGb3JSZXZpZXcsXG4gICAgICBib29rUHJvZ3Jlc3MsXG4gICAgICBpbnRlcmFjdGlvbnNQcm9ncmVzcyxcbiAgICAgIHRvdGFsU2NvcmVMYWJlbCxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfVxuXG59XG4iLCIvKipcbiAqIFRoZSBpbnRyb2R1Y3Rpb24gbW9kdWxlXG4gKiBDb25zdHJ1Y3RvciBmdW5jdGlvbi5cbiAqL1xuY2xhc3MgQ292ZXIgZXh0ZW5kcyBINVAuRXZlbnREaXNwYXRjaGVyIHtcbiAgY29uc3RydWN0b3IocGFyYW1zLCB0aXRsZVRleHQsIHJlYWRUZXh0LCBjb250ZW50SWQsIHBhcmVudCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcblxuICAgIC8vIENvbnRhaW5lclxuICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5jcmVhdGVDb250YWluZXIoKTtcblxuICAgIC8vIFZpc3VhbCBoZWFkZXJcbiAgICBpZiAocGFyYW1zLmNvdmVySW1hZ2UpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlVmlzdWFsc0VsZW1lbnQocGFyYW1zLCBjb250ZW50SWQpKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoNXAtY292ZXItbm9ncmFwaGljcycpO1xuICAgIH1cblxuICAgIC8vIFRpdGxlXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVUaXRsZUVsZW1lbnQodGl0bGVUZXh0KSk7XG5cbiAgICAvLyBEZXNjcmlwdGlvbiB0ZXh0XG4gICAgaWYgKHBhcmFtcy5jb3ZlckRlc2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZURlc2NyaXB0aW9uRWxlbWVudChwYXJhbXMuY292ZXJEZXNjcmlwdGlvbikpO1xuICAgIH1cblxuICAgIC8vIFJlYWQgYnV0dG9uXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVSZWFkQnV0dG9uKHJlYWRUZXh0KSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIHRoZSB0b3AgbGV2ZWwgZWxlbWVudC5cbiAgICpcbiAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9IENvdmVyLlxuICAgKi9cbiAgY3JlYXRlQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoNXAtaW50ZXJhY3RpdmUtYm9vay1jb3ZlcicpO1xuICAgIHJldHVybiBjb250YWluZXI7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGFuIGVsZW1lbnQgd2hpY2ggY29udGFpbnMgYm90aCB0aGUgY292ZXIgaW1hZ2UgYW5kIGEgYmFja2dyb3VuZCBiYXIuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjb3ZlckltYWdlIEltYWdlIG9iamVjdC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGNvbnRlbnRJZCBDb250ZW50IElkLlxuICAgKi9cbiAgY3JlYXRlVmlzdWFsc0VsZW1lbnQocGFyYW1zLCBjb250ZW50SWQpIHtcbiAgICBpZiAoIXBhcmFtcyB8fCAhcGFyYW1zLmNvdmVySW1hZ2UpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHZpc3VhbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB2aXN1YWxzLmNsYXNzTGlzdC5hZGQoJ2g1cC1pbnRlcmFjdGl2ZS1ib29rLWNvdmVyLWdyYXBoaWNzJyk7XG4gICAgdmlzdWFscy5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUltYWdlKHBhcmFtcy5jb3ZlckltYWdlLnBhdGgsIGNvbnRlbnRJZCwgcGFyYW1zLmNvdmVyQWx0VGV4dCkpO1xuICAgIHZpc3VhbHMuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVDb3ZlckJhcigpKTtcblxuICAgIHJldHVybiB2aXN1YWxzO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBJbWFnZS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggUmVsYXRpdmUgaW1hZ2UgcGF0aC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGNvbnRlbnRJZCBDb250ZW50IGlkLlxuICAgKiBAcGFyYW0ge3N0cmluZ3xudWxsfSBhbHRUZXh0XG4gICAqL1xuICBjcmVhdGVJbWFnZShwYXRoLCBjb250ZW50SWQsIGFsdFRleHQpIHtcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWcuY2xhc3NMaXN0LmFkZCgnaDVwLWludGVyYWN0aXZlLWJvb2stY292ZXItaW1hZ2UnKTtcbiAgICBpbWcuc3JjID0gSDVQLmdldFBhdGgocGF0aCwgY29udGVudElkKTtcbiAgICBpbWcuc2V0QXR0cmlidXRlKCdkcmFnZ2FibGUnLCAnZmFsc2UnKTtcbiAgICBpZiAoYWx0VGV4dCkge1xuICAgICAgaW1nLmFsdCA9IGFsdFRleHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGltZztcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgYW4gZWxlbWVudCByZXNwb25zaWJsZSBmb3IgdGhlIGJhciBiZWhpbmQgYW4gaW1hZ2UuXG4gICAqXG4gICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBIb3Jpem9udGFsIGJhciBpbiB0aGUgYmFja2dyb3VuZC5cbiAgICovXG4gIGNyZWF0ZUNvdmVyQmFyKCkge1xuICAgIGNvbnN0IGNvdmVyQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY292ZXJCYXIuY2xhc3NMaXN0LmFkZCgnaDVwLWludGVyYWN0aXZlLWJvb2stY292ZXItYmFyJyk7XG4gICAgcmV0dXJuIGNvdmVyQmFyO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSB0aXRsZS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlVGV4dCBUZXh0IGZvciB0aXRsZSBlbGVtZW50LlxuICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gVGl0bGUgZWxlbWVudC5cbiAgICovXG4gIGNyZWF0ZVRpdGxlRWxlbWVudCh0aXRsZVRleHQpIHtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0aXRsZS5pbm5lckhUTUwgPSB0aXRsZVRleHQ7XG5cbiAgICBjb25zdCB0aXRsZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZVdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnaDVwLWludGVyYWN0aXZlLWJvb2stY292ZXItdGl0bGUnKTtcbiAgICB0aXRsZVdyYXBwZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgcmV0dXJuIHRpdGxlV3JhcHBlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgZGVzY3JpcHRpb24uXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkZXNjcmlwdGlvblRleHQgVGV4dCBmb3IgZGVzY3JpcHRpb24gZWxlbWVudC5cbiAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9IERlc2NyaXB0aW9uIGVsZW1lbnQuXG4gICAqL1xuICBjcmVhdGVEZXNjcmlwdGlvbkVsZW1lbnQoZGVzY3JpcHRpb25UZXh0KSB7XG4gICAgaWYgKCFkZXNjcmlwdGlvblRleHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlc2NyaXB0aW9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoNXAtaW50ZXJhY3RpdmUtYm9vay1jb3Zlci1kZXNjcmlwdGlvbicpO1xuICAgIGRlc2NyaXB0aW9uRWxlbWVudC5pbm5lckhUTUwgPSBkZXNjcmlwdGlvblRleHQ7XG5cbiAgICByZXR1cm4gZGVzY3JpcHRpb25FbGVtZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIGJ1dHRvbiBlbGVtZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gYnV0dG9uVGV4dCBCdXR0b24gdGV4dC5cbiAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9IFJlYWQgYnV0dG9uIGVsZW1lbnQuXG4gICAqL1xuICBjcmVhdGVSZWFkQnV0dG9uKGJ1dHRvblRleHQpIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24uaW5uZXJIVE1MID0gYnV0dG9uVGV4dDtcbiAgICBidXR0b24ub25jbGljayA9ICgpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlQ292ZXIoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgYnV0dG9uV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ1dHRvbldyYXBwZXIuY2xhc3NMaXN0LmFkZCgnaDVwLWludGVyYWN0aXZlLWJvb2stY292ZXItcmVhZGJ1dHRvbicpO1xuICAgIGJ1dHRvbldyYXBwZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICAgIHJldHVybiBidXR0b25XcmFwcGVyO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBjb3Zlci5cbiAgICovXG4gIHJlbW92ZUNvdmVyKCkge1xuICAgIHRoaXMuY29udGFpbmVyLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnY292ZXJlZCcpO1xuICAgIHRoaXMuY29udGFpbmVyLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5jb250YWluZXIpO1xuICAgIHRoaXMuaGlkZGVuID0gdHJ1ZTtcbiAgICB0aGlzLnBhcmVudC50cmlnZ2VyKCdjb3ZlclJlbW92ZWQnKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb3ZlcjtcbiIsImltcG9ydCBVUkxUb29scyBmcm9tICcuL3VybHRvb2xzJztcbmltcG9ydCBTdW1tYXJ5IGZyb20gXCIuL3N1bW1hcnlcIjtcblxuY2xhc3MgUGFnZUNvbnRlbnQgZXh0ZW5kcyBINVAuRXZlbnREaXNwYXRjaGVyIHtcbiAgLyoqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gY29uZmlnXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50SWRcbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbnRlbnREYXRhXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBwYXJlbnRcbiAgICogQHBhcmFtIHtvYmplY3R9IHBhcmFtc1xuICAgKi9cbiAgY29uc3RydWN0b3IoY29uZmlnLCBjb250ZW50SWQsIGNvbnRlbnREYXRhLCBwYXJlbnQsIHBhcmFtcykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgdGhpcy5iZWhhdmlvdXIgPSBjb25maWcuYmVoYXZpb3VyO1xuXG4gICAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7XG4gICAgdGhpcy50YXJnZXRQYWdlID0ge307XG4gICAgdGhpcy50YXJnZXRQYWdlLnJlZGlyZWN0RnJvbUNvbXBvbmVudCA9IGZhbHNlO1xuXG4gICAgdGhpcy5jb2x1bW5Ob2RlcyA9IFtdO1xuICAgIHRoaXMuc2hvdWxkQXV0b3BsYXkgPSBbXTtcbiAgICB0aGlzLmNoYXB0ZXJzID0gW107XG4gICAgdGhpcy5sMTBuID0gY29uZmlnLmwxMG47XG5cbiAgICBpZiAocGFyZW50Lmhhc1ZhbGlkQ2hhcHRlcnMoKSkge1xuICAgICAgY29uc3Qgc3RhcnRDaGFwdGVyID0gdGhpcy5jcmVhdGVDb2x1bW5zKGNvbmZpZywgY29udGVudElkLCBjb250ZW50RGF0YSk7XG4gICAgICB0aGlzLnByZWxvYWRDaGFwdGVyKHN0YXJ0Q2hhcHRlcik7XG4gICAgfVxuXG4gICAgdGhpcy5jb250ZW50ID0gdGhpcy5jcmVhdGVQYWdlQ29udGVudCgpO1xuXG4gICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoNXAtaW50ZXJhY3RpdmUtYm9vay1tYWluJyk7XG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRlbnQpO1xuXG4gICAgdGhpcy5wYXJlbnQub24oJ2NvdmVyUmVtb3ZlZCcsICgpID0+IHtcbiAgICAgIHRoaXMuaGFuZGxlQ2hhcHRlckNoYW5nZSh0aGlzLnBhcmVudC5nZXRBY3RpdmVDaGFwdGVyKCkpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjaGFwdGVycyBmb3IgdGhlIHBhZ2VcbiAgICpcbiAgICogQHBhcmFtIHtib29sZWFufSBpbmNsdWRlU3VtbWFyeVxuICAgKiBAcmV0dXJuIHtvYmplY3RbXX0gQ2hhcHRlcnMuXG4gICAqL1xuICBnZXRDaGFwdGVycyhpbmNsdWRlU3VtbWFyeSA9IHRydWUpIHtcbiAgICByZXR1cm4gdGhpcy5jaGFwdGVycy5maWx0ZXIoY2hhcHRlciA9PiAhY2hhcHRlci5pc1N1bW1hcnkgfHwgY2hhcHRlci5pc1N1bW1hcnkgJiYgISFpbmNsdWRlU3VtbWFyeSk7XG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgYWxsIHRoZSBjaGFwdGVyc1xuICAgKi9cbiAgcmVzZXRDaGFwdGVycygpIHtcbiAgICBpZiAodGhpcy5iZWhhdmlvdXIucHJvZ3Jlc3NJbmRpY2F0b3JzICYmICF0aGlzLmJlaGF2aW91ci5wcm9ncmVzc0F1dG8pIHtcbiAgICAgIHRoaXMuY29sdW1uTm9kZXMuZm9yRWFjaChjb2x1bW5Ob2RlID0+IHtcbiAgICAgICAgQXJyYXkuZnJvbShjb2x1bW5Ob2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5oNXAtaW50ZXJhY3RpdmUtYm9vay1zdGF0dXMtcHJvZ3Jlc3MtbWFya2VyID4gaW5wdXRbdHlwZT1jaGVja2JveF0nKSlcbiAgICAgICAgICAuZm9yRWFjaChlbGVtZW50ID0+IGVsZW1lbnQuY2hlY2tlZCA9IGZhbHNlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgcGFnZSBjb250ZW50LlxuICAgKlxuICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gUGFnZSBjb250ZW50LlxuICAgKi9cbiAgY3JlYXRlUGFnZUNvbnRlbnQoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnaDVwLWludGVyYWN0aXZlLWJvb2stY29udGVudCcpO1xuICAgIHRoaXMuY29sdW1uTm9kZXMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnNldENoYXB0ZXJPcmRlcih0aGlzLnBhcmVudC5nZXRBY3RpdmVDaGFwdGVyKCkpO1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBzZXRDaGFwdGVyT3JkZXIoY3VycmVudElkKSB7XG4gICAgaWYgKGN1cnJlbnRJZCA8IDAgfHwgY3VycmVudElkID4gdGhpcy5jb2x1bW5Ob2Rlcy5sZW5ndGggLSAxKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5jb2x1bW5Ob2Rlcy5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdoNXAtaW50ZXJhY3RpdmUtYm9vay1wcmV2aW91cycpO1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdoNXAtaW50ZXJhY3RpdmUtYm9vay1jdXJyZW50Jyk7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2g1cC1pbnRlcmFjdGl2ZS1ib29rLW5leHQnKTtcblxuICAgICAgaWYgKGluZGV4ID09PSBjdXJyZW50SWQgLSAxKSB7XG4gICAgICAgIC8vIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaDVwLWludGVyYWN0aXZlLWJvb2stcHJldmlvdXMnKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGluZGV4ID09PSBjdXJyZW50SWQpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoNXAtaW50ZXJhY3RpdmUtYm9vay1jdXJyZW50Jyk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChpbmRleCA9PT0gY3VycmVudElkICsgMSkge1xuICAgICAgICAvLyBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2g1cC1pbnRlcmFjdGl2ZS1ib29rLW5leHQnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgcGFnZSByZWFkIGNoZWNrYm94LlxuICAgKlxuICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH0gQ2hlY2tib3ggZm9yIG1hcmtpbmcgYSBjaGFwdGVyIGFzIHJlYWQuXG4gICAqL1xuICBjcmVhdGVDaGFwdGVyUmVhZENoZWNrYm94KCkge1xuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgICBjaGVja2JveC5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLnBhcmVudC5zZXRDaGFwdGVyUmVhZCh1bmRlZmluZWQsIGV2ZW50LnRhcmdldC5jaGVja2VkKTtcbiAgICB9O1xuXG4gICAgY29uc3QgY2hlY2tUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNoZWNrVGV4dC5pbm5lckhUTUwgPSB0aGlzLnBhcmFtcy5sMTBuLm1hcmtBc0ZpbmlzaGVkO1xuXG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCdoNXAtaW50ZXJhY3RpdmUtYm9vay1zdGF0dXMtcHJvZ3Jlc3MtbWFya2VyJyk7XG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChjaGVja2JveCk7XG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChjaGVja1RleHQpO1xuXG4gICAgcmV0dXJuIHdyYXBwZXI7XG4gIH1cblxuICAvKipcbiAgICogSW5qZWN0IHNlY3Rpb24gaW5zdGFuY2UgVVVJRCBpbnRvIERPTS5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3RbXX0gc2VjdGlvbnMgU2VjdGlvbnMuXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbHVtbk5vZGUgQ29sdW1uIGVsZW1lbnQuXG4gICAqL1xuICBpbmplY3RTZWN0aW9uSWQoc2VjdGlvbnMsIGNvbHVtbk5vZGUpIHtcbiAgICBjb25zdCBjb2x1bW5Db250ZW50ID0gY29sdW1uTm9kZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoNXAtY29sdW1uLWNvbnRlbnQnKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbHVtbkNvbnRlbnRbaV0uaWQgPSBgaDVwLWludGVyYWN0aXZlLWJvb2stc2VjdGlvbi0ke3NlY3Rpb25zW2ldLmluc3RhbmNlLnN1YkNvbnRlbnRJZH1gO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVsb2FkIGN1cnJlbnQgY2hhcHRlciBhbmQgdGhlIG5leHQgb25lXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjaGFwdGVySW5kZXhcbiAgICovXG4gIHByZWxvYWRDaGFwdGVyKGNoYXB0ZXJJbmRleCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZUNoYXB0ZXIoY2hhcHRlckluZGV4KTtcbiAgICB0aGlzLmluaXRpYWxpemVDaGFwdGVyKGNoYXB0ZXJJbmRleCArIDEpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgY2hhcHRlclxuICAgKiBAcGFyYW0ge251bWJlcn0gY2hhcHRlckluZGV4XG4gICAqL1xuICBpbml0aWFsaXplQ2hhcHRlcihjaGFwdGVySW5kZXgpIHtcbiAgICAvLyBPdXQgb2YgYm91bmRcbiAgICBpZiAoY2hhcHRlckluZGV4IDwgMCB8fCBjaGFwdGVySW5kZXggPiB0aGlzLmNoYXB0ZXJzLmxlbmd0aCAtIDEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjaGFwdGVyID0gdGhpcy5jaGFwdGVyc1tjaGFwdGVySW5kZXhdO1xuICAgIGlmICggY2hhcHRlci5pc1N1bW1hcnkpIHtcbiAgICAgIGNvbnN0IGNvbHVtbk5vZGUgPSB0aGlzLmNvbHVtbk5vZGVzW2NoYXB0ZXJJbmRleF07XG5cbiAgICAgIGlmIChjaGFwdGVyLmlzSW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgY2hhcHRlci5pbnN0YW5jZS5zZXRDaGFwdGVycyh0aGlzLmdldENoYXB0ZXJzKGZhbHNlKSk7XG4gICAgICAgIGNvbHVtbk5vZGUuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIH1cbiAgICAgIC8vIEF0dGFjaFxuICAgICAgY2hhcHRlci5pbnN0YW5jZS5hZGRTdW1tYXJ5UGFnZShINVAualF1ZXJ5KGNvbHVtbk5vZGUpKTtcbiAgICAgIGNoYXB0ZXIuaXNJbml0aWFsaXplZCA9IHRydWU7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghY2hhcHRlci5pc0luaXRpYWxpemVkKSB7XG4gICAgICBjb25zdCBjb2x1bW5Ob2RlID0gdGhpcy5jb2x1bW5Ob2Rlc1tjaGFwdGVySW5kZXhdO1xuXG4gICAgICAvLyBBdHRhY2hcbiAgICAgIGNoYXB0ZXIuaW5zdGFuY2UuYXR0YWNoKEg1UC5qUXVlcnkoY29sdW1uTm9kZSkpO1xuICAgICAgdGhpcy5pbmplY3RTZWN0aW9uSWQoY2hhcHRlci5zZWN0aW9ucywgY29sdW1uTm9kZSk7XG5cbiAgICAgIGlmICh0aGlzLmJlaGF2aW91ci5wcm9ncmVzc0luZGljYXRvcnMgJiYgIXRoaXMuYmVoYXZpb3VyLnByb2dyZXNzQXV0bykge1xuICAgICAgICBjb2x1bW5Ob2RlLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlQ2hhcHRlclJlYWRDaGVja2JveCgpKTtcbiAgICAgIH1cblxuICAgICAgY2hhcHRlci5pc0luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIENvbHVtbiBpbnN0YW5jZXMuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgUGFyYW1ldGVycy5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGNvbnRlbnRJZCBDb250ZW50IGlkLlxuICAgKiBAcGFyYW0ge29iamVjdH0gY29udGVudERhdGEgQ29udGVudCBkYXRhLlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IHN0YXJ0IGNoYXB0ZXJcbiAgICovXG4gIGNyZWF0ZUNvbHVtbnMoY29uZmlnLCBjb250ZW50SWQsIGNvbnRlbnREYXRhKSB7XG4gICAgY29udGVudERhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBjb250ZW50RGF0YSk7XG4gICAgY29uc3QgdXJsRnJhZ21lbnRzID0gVVJMVG9vbHMuZXh0cmFjdEZyYWdtZW50c0Zyb21VUkwodGhpcy5wYXJlbnQudmFsaWRhdGVGcmFnbWVudHMsIHRoaXMucGFyZW50Lmhhc2hXaW5kb3cpO1xuICAgIGNvbnN0IGNoYXB0ZXJzID0gW107XG4gICAgdGhpcy5jaGFwdGVycyA9IGNoYXB0ZXJzO1xuXG4gICAgLy8gR28gdGhyb3VnaCBhbGwgY29sdW1ucyBhbmQgaW5pdGlhbGlzZSB0aGVtXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb25maWcuY2hhcHRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGNvbHVtbk5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRoaXMub3ZlcnJpZGVQYXJhbWV0ZXJzKGksIGNvbmZpZy5jaGFwdGVyc1tpXSk7XG5cbiAgICAgIGNvbnN0IGluc3RhbmNlQ29udGVudERhdGEgPSB7XG4gICAgICAgIC4uLmNvbnRlbnREYXRhLFxuICAgICAgICBtZXRhZGF0YToge1xuICAgICAgICAgIC4uLmNvbnRlbnREYXRhLm1ldGFkYXRhLFxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgY29uc3QgbmV3SW5zdGFuY2UgPSBINVAubmV3UnVubmFibGUoY29uZmlnLmNoYXB0ZXJzW2ldLCBjb250ZW50SWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBpbnN0YW5jZUNvbnRlbnREYXRhKTtcbiAgICAgIHRoaXMucGFyZW50LmJ1YmJsZVVwKG5ld0luc3RhbmNlLCAncmVzaXplJywgdGhpcy5wYXJlbnQpO1xuXG4gICAgICBjb25zdCBjaGFwdGVyID0ge1xuICAgICAgICBpc0luaXRpYWxpemVkOiBmYWxzZSxcbiAgICAgICAgaW5zdGFuY2U6IG5ld0luc3RhbmNlLFxuICAgICAgICB0aXRsZTogY29uZmlnLmNoYXB0ZXJzW2ldLm1ldGFkYXRhLnRpdGxlLFxuICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgICB0YXNrc0xlZnQ6IDAsXG4gICAgICAgIGlzU3VtbWFyeTogZmFsc2UsXG4gICAgICAgIHNlY3Rpb25zOiBuZXdJbnN0YW5jZS5nZXRJbnN0YW5jZXMoKS5tYXAoKGluc3RhbmNlLCBjb250ZW50SW5kZXgpID0+ICh7XG4gICAgICAgICAgY29udGVudDogY29uZmlnLmNoYXB0ZXJzW2ldLnBhcmFtcy5jb250ZW50W2NvbnRlbnRJbmRleF0uY29udGVudCxcbiAgICAgICAgICBpbnN0YW5jZTogaW5zdGFuY2UsXG4gICAgICAgICAgaXNUYXNrOiBmYWxzZVxuICAgICAgICB9KSlcbiAgICAgIH07XG5cbiAgICAgIGNvbHVtbk5vZGUuY2xhc3NMaXN0LmFkZCgnaDVwLWludGVyYWN0aXZlLWJvb2stY2hhcHRlcicpO1xuICAgICAgY29sdW1uTm9kZS5pZCA9IGBoNXAtaW50ZXJhY3RpdmUtYm9vay1jaGFwdGVyLSR7bmV3SW5zdGFuY2Uuc3ViQ29udGVudElkfWA7XG5cbiAgICAgIC8vIEZpbmQgc2VjdGlvbnMgd2l0aCB0YXNrcyBhbmQgdHJhY2tzIHRoZW1cbiAgICAgIGNoYXB0ZXIuc2VjdGlvbnMuZm9yRWFjaChzZWN0aW9uID0+IHtcbiAgICAgICAgaWYgKEg1UC5Db2x1bW4uaXNUYXNrKHNlY3Rpb24uaW5zdGFuY2UpKSB7XG4gICAgICAgICAgc2VjdGlvbi5pc1Rhc2sgPSB0cnVlO1xuXG4gICAgICAgICAgaWYgKHRoaXMuYmVoYXZpb3VyLnByb2dyZXNzSW5kaWNhdG9ycykge1xuICAgICAgICAgICAgc2VjdGlvbi50YXNrRG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgY2hhcHRlci50YXNrc0xlZnQgKz0gMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBjaGFwdGVyLm1heFRhc2tzID0gY2hhcHRlci50YXNrc0xlZnQ7XG5cbiAgICAgIC8vIFJlZ2lzdGVyIGJvdGggdGhlIEhUTUwtZWxlbWVudCBhbmQgdGhlIEg1UC1lbGVtZW50XG4gICAgICBjaGFwdGVycy5wdXNoKGNoYXB0ZXIpO1xuICAgICAgdGhpcy5jb2x1bW5Ob2Rlcy5wdXNoKGNvbHVtbk5vZGUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnBhcmVudC5oYXNTdW1tYXJ5KGNoYXB0ZXJzKSkge1xuICAgICAgY29uc3QgY29sdW1uTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29uc3QgbmV3SW5zdGFuY2UgPSBuZXcgU3VtbWFyeSh7XG4gICAgICAgIC4uLmNvbmZpZyxcbiAgICAgIH0sXG4gICAgICB0aGlzLnBhcmVudCxcbiAgICAgIHRoaXMuZ2V0Q2hhcHRlcnMoZmFsc2UpXG4gICAgICApO1xuICAgICAgdGhpcy5wYXJlbnQuYnViYmxlVXAobmV3SW5zdGFuY2UsICdyZXNpemUnLCB0aGlzLnBhcmVudCk7XG5cbiAgICAgIGNvbnN0IGNoYXB0ZXIgPSB7XG4gICAgICAgIGlzSW5pdGlhbGl6ZWQ6IGZhbHNlLFxuICAgICAgICBpbnN0YW5jZTogbmV3SW5zdGFuY2UsXG4gICAgICAgIHRpdGxlOiB0aGlzLmwxMG4uc3VtbWFyeUhlYWRlcixcbiAgICAgICAgaXNTdW1tYXJ5OiB0cnVlLFxuICAgICAgICBzZWN0aW9uczpbXSxcbiAgICAgIH07XG5cbiAgICAgIGNvbHVtbk5vZGUuY2xhc3NMaXN0LmFkZCgnaDVwLWludGVyYWN0aXZlLWJvb2stY2hhcHRlcicpO1xuICAgICAgY29sdW1uTm9kZS5pZCA9IGBoNXAtaW50ZXJhY3RpdmUtYm9vay1jaGFwdGVyLXN1bW1hcnlgO1xuXG4gICAgICBjaGFwdGVyLm1heFRhc2tzID0gY2hhcHRlci50YXNrc0xlZnQ7XG4gICAgICBjaGFwdGVycy5wdXNoKGNoYXB0ZXIpO1xuICAgICAgdGhpcy5jb2x1bW5Ob2Rlcy5wdXNoKGNvbHVtbk5vZGUpO1xuICAgIH1cblxuICAgIC8vIEZpcnN0IGNoYXB0ZXIgc2hvdWxkIGJlIHZpc2libGUsIGV4Y2VwdCBpZiB0aGUgVVJMIHNheXMgb3RoZXJ3aXNlLlxuICAgIGxldCBzdGFydENoYXB0ZXIgPSAwO1xuICAgIGlmICh1cmxGcmFnbWVudHMuY2hhcHRlciAmJiB1cmxGcmFnbWVudHMuaDVwYm9va2lkID09IHRoaXMucGFyZW50LmNvbnRlbnRJZCkge1xuICAgICAgY29uc3QgY2hhcHRlckluZGV4ID0gdGhpcy5maW5kQ2hhcHRlckluZGV4KHVybEZyYWdtZW50cy5jaGFwdGVyKTtcbiAgICAgIHN0YXJ0Q2hhcHRlciA9IGNoYXB0ZXJJbmRleDtcbiAgICAgIHRoaXMucGFyZW50LnNldEFjdGl2ZUNoYXB0ZXIoY2hhcHRlckluZGV4KTtcbiAgICAgIGNvbnN0IGhlYWRlck51bWJlciA9IHVybEZyYWdtZW50cy5oZWFkZXJOdW1iZXI7XG5cbiAgICAgIGlmICh1cmxGcmFnbWVudHMuc2VjdGlvbikge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLnJlZGlyZWN0U2VjdGlvbih1cmxGcmFnbWVudHMuc2VjdGlvbiwgaGVhZGVyTnVtYmVyKTtcbiAgICAgICAgICBpZiAodGhpcy5wYXJlbnQuaGFzQ292ZXIoKSkge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQuY292ZXIucmVtb3ZlQ292ZXIoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMDApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdGFydENoYXB0ZXI7XG4gIH1cblxuICAvKipcbiAgICogUmVkaXJlY3Qgc2VjdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNlY3Rpb25VVUlEIFNlY3Rpb24gVVVJRCBvciB0b3AuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBoZWFkZXJOdW1iZXIgSGVhZGVyIGluZGV4IHdpdGhpbiBzZWN0aW9uXG4gICAqL1xuICByZWRpcmVjdFNlY3Rpb24oc2VjdGlvblVVSUQsIGhlYWRlck51bWJlciA9IG51bGwpIHtcbiAgICBpZiAoc2VjdGlvblVVSUQgPT09ICd0b3AnKSB7XG4gICAgICB0aGlzLnBhcmVudC50cmlnZ2VyKCdzY3JvbGxUb1RvcCcpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGxldCBzZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VjdGlvblVVSUQpO1xuXG4gICAgICBpZiAoc2VjdGlvbikge1xuICAgICAgICBpZiAoaGVhZGVyTnVtYmVyICE9PSBudWxsKSB7XG4gICAgICAgICAgLy8gZmluZCBoZWFkZXIgd2l0aGluIHNlY3Rpb25cbiAgICAgICAgICBjb25zdCBoZWFkZXJzID0gc2VjdGlvbi5xdWVyeVNlbGVjdG9yQWxsKCdoMiwgaDMnKTtcbiAgICAgICAgICBpZiAoaGVhZGVyc1toZWFkZXJOdW1iZXJdKSB7XG4gICAgICAgICAgICAvLyBTZXQgc2VjdGlvbiB0byB0aGUgaGVhZGVyXG4gICAgICAgICAgICBzZWN0aW9uID0gaGVhZGVyc1toZWFkZXJOdW1iZXJdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZvY3VzSGFuZGxlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBmb2N1c0hhbmRsZXIuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuICAgICAgICBzZWN0aW9uLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGZvY3VzSGFuZGxlciwgc2VjdGlvbik7XG4gICAgICAgIGZvY3VzSGFuZGxlci5mb2N1cygpO1xuXG4gICAgICAgIGZvY3VzSGFuZGxlci5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xuICAgICAgICAgIGZvY3VzSGFuZGxlci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGZvY3VzSGFuZGxlcik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudGFyZ2V0UGFnZS5yZWRpcmVjdEZyb21Db21wb25lbnQgPSBmYWxzZTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgc2VjdGlvbi5zY3JvbGxJbnRvVmlldyh0cnVlKTtcbiAgICAgICAgfSwgMTAwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRmluZCBjaGFwdGVyIGluZGV4LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2hhcHRlclVVSUQgQ2hhcHRlciBVVUlELlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IENoYXB0ZXIgaWQuXG4gICAqL1xuICBmaW5kQ2hhcHRlckluZGV4KGNoYXB0ZXJVVUlEKSB7XG4gICAgbGV0IHBvc2l0aW9uID0gLTE7XG4gICAgdGhpcy5jb2x1bW5Ob2Rlcy5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgaWYgKHBvc2l0aW9uICE9PSAtMSkge1xuICAgICAgICByZXR1cm47IC8vIFNraXBcbiAgICAgIH1cbiAgICAgIGlmIChlbGVtZW50LmlkID09PSBjaGFwdGVyVVVJRCkge1xuICAgICAgICBwb3NpdGlvbiA9IGluZGV4O1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZSBjaGFwdGVyLlxuICAgKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHJlZGlyZWN0T25Mb2FkIFRydWUgaWYgc2hvdWxkIHJlZGlyZWN0IG9uIGxvYWQuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXQgVGFyZ2V0LlxuICAgKi9cbiAgY2hhbmdlQ2hhcHRlcihyZWRpcmVjdE9uTG9hZCwgdGFyZ2V0KSB7XG4gICAgaWYgKHRoaXMuY29sdW1uTm9kZXNbdGhpcy5wYXJlbnQuZ2V0QWN0aXZlQ2hhcHRlcigpXS5jbGFzc0xpc3QuY29udGFpbnMoJ2g1cC1pbnRlcmFjdGl2ZS1ib29rLWFuaW1hdGUnKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudGFyZ2V0UGFnZSA9IHRhcmdldDtcbiAgICBjb25zdCBjaGFwdGVySWRPbGQgPSB0aGlzLnBhcmVudC5nZXRBY3RpdmVDaGFwdGVyKCk7XG4gICAgY29uc3QgY2hhcHRlcklkTmV3ID0gdGhpcy5wYXJlbnQuZ2V0Q2hhcHRlcklkKHRoaXMudGFyZ2V0UGFnZS5jaGFwdGVyKTtcbiAgICBjb25zdCBoYXNDaGFuZ2VkQ2hhcHRlciA9IGNoYXB0ZXJJZE9sZCAhPT0gY2hhcHRlcklkTmV3O1xuXG4gICAgaWYgKCFyZWRpcmVjdE9uTG9hZCkge1xuICAgICAgdGhpcy5wYXJlbnQudXBkYXRlQ2hhcHRlclByb2dyZXNzKGNoYXB0ZXJJZE9sZCwgaGFzQ2hhbmdlZENoYXB0ZXIpO1xuICAgIH1cblxuICAgIHRoaXMucHJlbG9hZENoYXB0ZXIoY2hhcHRlcklkTmV3KTtcblxuICAgIGlmIChjaGFwdGVySWROZXcgPCB0aGlzLmNvbHVtbk5vZGVzLmxlbmd0aCkge1xuICAgICAgY29uc3Qgb2xkQ2hhcHRlciA9IHRoaXMuY29sdW1uTm9kZXNbY2hhcHRlcklkT2xkXTtcbiAgICAgIGNvbnN0IHRhcmdldENoYXB0ZXIgPSB0aGlzLmNvbHVtbk5vZGVzW2NoYXB0ZXJJZE5ld107XG5cbiAgICAgIGlmIChoYXNDaGFuZ2VkQ2hhcHRlciAmJiAhcmVkaXJlY3RPbkxvYWQpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQuc2V0QWN0aXZlQ2hhcHRlcihjaGFwdGVySWROZXcpO1xuXG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IChjaGFwdGVySWRPbGQgPCBjaGFwdGVySWROZXcpID8gJ25leHQnIDogJ3ByZXZpb3VzJztcblxuICAgICAgICAvKlxuICAgICAgICAgKiBBbmltYXRpb24gZG9uZSBieSBtYWtpbmcgdGhlIGN1cnJlbnQgYW5kIHRoZSB0YXJnZXQgbm9kZVxuICAgICAgICAgKiB2aXNpYmxlIGFuZCB0aGVuIGFwcGx5aW5nIHRoZSBjb3JyZWN0IHRyYW5zbGF0aW9uIGluIHgtZGlyZWN0aW9uXG4gICAgICAgICAqL1xuICAgICAgICB0YXJnZXRDaGFwdGVyLmNsYXNzTGlzdC5hZGQoYGg1cC1pbnRlcmFjdGl2ZS1ib29rLSR7ZGlyZWN0aW9ufWApO1xuXG4gICAgICAgIHRhcmdldENoYXB0ZXIuY2xhc3NMaXN0LmFkZCgnaDVwLWludGVyYWN0aXZlLWJvb2stYW5pbWF0ZScpO1xuICAgICAgICBvbGRDaGFwdGVyLmNsYXNzTGlzdC5hZGQoJ2g1cC1pbnRlcmFjdGl2ZS1ib29rLWFuaW1hdGUnKTtcblxuICAgICAgICAvLyBTdGFydCB0aGUgYW5pbWF0aW9uXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdwcmV2aW91cycpIHtcbiAgICAgICAgICAgIG9sZENoYXB0ZXIuY2xhc3NMaXN0LmFkZCgnaDVwLWludGVyYWN0aXZlLWJvb2stbmV4dCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG9sZENoYXB0ZXIuY2xhc3NMaXN0LnJlbW92ZSgnaDVwLWludGVyYWN0aXZlLWJvb2stY3VycmVudCcpO1xuICAgICAgICAgICAgb2xkQ2hhcHRlci5jbGFzc0xpc3QuYWRkKCdoNXAtaW50ZXJhY3RpdmUtYm9vay1wcmV2aW91cycpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0YXJnZXRDaGFwdGVyLmNsYXNzTGlzdC5yZW1vdmUoYGg1cC1pbnRlcmFjdGl2ZS1ib29rLSR7ZGlyZWN0aW9ufWApO1xuICAgICAgICB9LCAxKTtcblxuICAgICAgICAvLyBFbmQgdGhlIGFuaW1hdGlvblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBvbGRDaGFwdGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2g1cC1pbnRlcmFjdGl2ZS1ib29rLW5leHQnKTtcbiAgICAgICAgICBvbGRDaGFwdGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2g1cC1pbnRlcmFjdGl2ZS1ib29rLXByZXZpb3VzJyk7XG5cbiAgICAgICAgICBvbGRDaGFwdGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2g1cC1pbnRlcmFjdGl2ZS1ib29rLWN1cnJlbnQnKTtcbiAgICAgICAgICB0YXJnZXRDaGFwdGVyLmNsYXNzTGlzdC5hZGQoJ2g1cC1pbnRlcmFjdGl2ZS1ib29rLWN1cnJlbnQnKTtcblxuICAgICAgICAgIHRhcmdldENoYXB0ZXIuY2xhc3NMaXN0LnJlbW92ZSgnaDVwLWludGVyYWN0aXZlLWJvb2stYW5pbWF0ZScpO1xuICAgICAgICAgIG9sZENoYXB0ZXIuY2xhc3NMaXN0LnJlbW92ZSgnaDVwLWludGVyYWN0aXZlLWJvb2stYW5pbWF0ZScpO1xuXG4gICAgICAgICAgdGhpcy5yZWRpcmVjdFNlY3Rpb24odGhpcy50YXJnZXRQYWdlLnNlY3Rpb24sIHRoaXMudGFyZ2V0UGFnZS5oZWFkZXJOdW1iZXIpO1xuXG4gICAgICAgICAgdGhpcy5wYXJlbnQudHJpZ2dlcigncmVzaXplJyk7XG4gICAgICAgIH0sIDI1MCk7XG5cbiAgICAgICAgdGhpcy5oYW5kbGVDaGFwdGVyQ2hhbmdlKGNoYXB0ZXJJZE5ldywgY2hhcHRlcklkT2xkKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5wYXJlbnQuY292ZXIgJiYgIXRoaXMucGFyZW50LmNvdmVyLmhpZGRlbikge1xuICAgICAgICAgIHRoaXMucGFyZW50Lm9uKCdjb3ZlclJlbW92ZWQnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlZGlyZWN0U2VjdGlvbih0aGlzLnRhcmdldFBhZ2Uuc2VjdGlvbiwgdGhpcy50YXJnZXRQYWdlLmhlYWRlck51bWJlcik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdGhpcy5yZWRpcmVjdFNlY3Rpb24odGhpcy50YXJnZXRQYWdlLnNlY3Rpb24sIHRoaXMudGFyZ2V0UGFnZS5oZWFkZXJOdW1iZXIpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMucGFyZW50LnNpZGVCYXIucmVkaXJlY3RIYW5kbGVyKGNoYXB0ZXJJZE5ldyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBmb290ZXIuXG4gICAqL1xuICB1cGRhdGVGb290ZXIoKSB7XG4gICAgaWYgKCB0aGlzLmNoYXB0ZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBhY3RpdmVDaGFwdGVyID0gdGhpcy5wYXJlbnQuZ2V0QWN0aXZlQ2hhcHRlcigpO1xuICAgIGNvbnN0IGNvbHVtbiA9IHRoaXMuY29sdW1uTm9kZXNbYWN0aXZlQ2hhcHRlcl07XG4gICAgY29uc3QgbW92ZUZvb3Rlckluc2lkZUNvbnRlbnQgPSB0aGlzLnBhcmVudC5zaG91bGRGb290ZXJCZUhpZGRlbihjb2x1bW4uY2xpZW50SGVpZ2h0KTtcblxuICAgIC8vIE1vdmUgc3RhdHVzIGJhciBmb290ZXIgdG8gY29udGVudCBpbiBmdWxsc2NyZWVuXG4gICAgY29uc3QgZm9vdGVyUGFyZW50ID0gdGhpcy5wYXJlbnQuc3RhdHVzQmFyRm9vdGVyLndyYXBwZXIucGFyZW50Tm9kZTtcbiAgICBpZiAobW92ZUZvb3Rlckluc2lkZUNvbnRlbnQpIHtcbiAgICAgIC8vIEFkZCBzdGF0dXMgYmFyIGZvb3RlciB0byBwYWdlIGNvbnRlbnRcbiAgICAgIGlmIChmb290ZXJQYXJlbnQgIT09IHRoaXMuY29udGVudCkge1xuICAgICAgICB0aGlzLmNvbnRlbnQuYXBwZW5kQ2hpbGQodGhpcy5wYXJlbnQuc3RhdHVzQmFyRm9vdGVyLndyYXBwZXIpO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIC8vIFJlLWF0dGFjaCB0byBzaGFyZWQgYm90dG9tIG9mIGJvb2sgd2hlbiBleGl0aW5nIGZ1bGxzY3JlZW5cbiAgICAgIGlmIChmb290ZXJQYXJlbnQgIT09IHRoaXMucGFyZW50LiR3cmFwcGVyKSB7XG4gICAgICAgIHRoaXMucGFyZW50LiR3cmFwcGVyLmFwcGVuZCh0aGlzLnBhcmVudC5zdGF0dXNCYXJGb290ZXIud3JhcHBlcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgY2hhcHRlciBjaGFuZ2UgZXZlbnRzLlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gbmV3SWRcbiAgICogQHBhcmFtIHtudW1iZXJ9IG9sZElkXG4gICAqL1xuICBoYW5kbGVDaGFwdGVyQ2hhbmdlKG5ld0lkLCBvbGRJZCkge1xuICAgIGxldCBpO1xuICAgIGlmIChvbGRJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBTdG9wIGFueSBwbGF5YmFja1xuICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMuY2hhcHRlcnNbb2xkSWRdLnNlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRoaXMucGF1c2VNZWRpYSh0aGlzLmNoYXB0ZXJzW29sZElkXS5zZWN0aW9uc1tpXS5pbnN0YW5jZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU3RhcnQgYXV0b3BsYXlcbiAgICBpZiAodGhpcy5zaG91bGRBdXRvcGxheVtuZXdJZF0pIHtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLnNob3VsZEF1dG9wbGF5W25ld0lkXS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBzaG91bGRBdXRvcGxheSA9IHRoaXMuc2hvdWxkQXV0b3BsYXlbbmV3SWRdW2ldO1xuICAgICAgICBpZiAodGhpcy5jaGFwdGVyc1tuZXdJZF0uc2VjdGlvbnNbc2hvdWxkQXV0b3BsYXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmNoYXB0ZXJzW25ld0lkXS5zZWN0aW9uc1tzaG91bGRBdXRvcGxheV0uaW5zdGFuY2UucGxheSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERpc2FibGVzIGF1dG9wbGF5IGZvciBhbGwgaW50ZXJhY3Rpb25zIG5vdCBvbiB0aGUgZmlyc3QgY2hhcHRlci5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGNoYXB0ZXJJZFxuICAgKiBAcGFyYW0ge09iamVjdH0gY2hhcHRlclxuICAgKi9cbiAgb3ZlcnJpZGVQYXJhbWV0ZXJzKGNoYXB0ZXJJZCwgY2hhcHRlcikge1xuICAgIGNvbnN0IGN1cnJlbnRDaGFwdGVySWQgPSB0aGlzLnBhcmVudC5nZXRBY3RpdmVDaGFwdGVyKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGFwdGVyLnBhcmFtcy5jb250ZW50Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5oYXNBdXRvcGxheShjaGFwdGVyLnBhcmFtcy5jb250ZW50W2ldLmNvbnRlbnQucGFyYW1zLCBjaGFwdGVySWQgIT09IGN1cnJlbnRDaGFwdGVySWQgfHwgdGhpcy5wYXJlbnQuaGFzQ292ZXIoKSkpIHtcbiAgICAgICAgaWYgKHRoaXMuc2hvdWxkQXV0b3BsYXlbY2hhcHRlcklkXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5zaG91bGRBdXRvcGxheVtjaGFwdGVySWRdID0gW2ldO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2hvdWxkQXV0b3BsYXlbY2hhcHRlcklkXS5wdXNoKGkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGludGVyYWN0aW9uIGhhcyBhdXRvcGxheSBlbmFibGVkXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXNcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGhhc0F1dG9wbGF5KHBhcmFtcywgcHJldmVudCkge1xuICAgIGlmIChwYXJhbXMuYXV0b3BsYXkpIHtcbiAgICAgIGlmIChwcmV2ZW50KSB7XG4gICAgICAgIHBhcmFtcy5hdXRvcGxheSA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHBhcmFtcy5wbGF5YmFjayAmJiBwYXJhbXMucGxheWJhY2suYXV0b3BsYXkpIHtcbiAgICAgIGlmIChwcmV2ZW50KSB7XG4gICAgICAgIHBhcmFtcy5wbGF5YmFjay5hdXRvcGxheSA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHBhcmFtcy5tZWRpYSAmJiBwYXJhbXMubWVkaWEucGFyYW1zICYmXG4gICAgICAgICAgICAgcGFyYW1zLm1lZGlhLnBhcmFtcy5wbGF5YmFjayAmJlxuICAgICAgICAgICAgIHBhcmFtcy5tZWRpYS5wYXJhbXMucGxheWJhY2suYXV0b3BsYXkpIHtcbiAgICAgIGlmIChwcmV2ZW50KSB7XG4gICAgICAgIHBhcmFtcy5tZWRpYS5wYXJhbXMucGxheWJhY2suYXV0b3BsYXkgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChwYXJhbXMubWVkaWEgJiYgcGFyYW1zLm1lZGlhLnBhcmFtcyAmJlxuICAgICAgICAgICAgIHBhcmFtcy5tZWRpYS5wYXJhbXMuYXV0b3BsYXkpIHtcbiAgICAgIGlmIChwcmV2ZW50KSB7XG4gICAgICAgIHBhcmFtcy5tZWRpYS5wYXJhbXMuYXV0b3BsYXkgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogU3RvcCB0aGUgZ2l2ZW4gZWxlbWVudCdzIHBsYXliYWNrIGlmIGFueS5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGluc3RhbmNlXG4gICAqL1xuICBwYXVzZU1lZGlhKGluc3RhbmNlKSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChpbnN0YW5jZS5wYXVzZSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgKGluc3RhbmNlLnBhdXNlIGluc3RhbmNlb2YgRnVuY3Rpb24gfHxcbiAgICAgICAgICAgIHR5cGVvZiBpbnN0YW5jZS5wYXVzZSA9PT0gJ2Z1bmN0aW9uJykpIHtcbiAgICAgICAgaW5zdGFuY2UucGF1c2UoKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGluc3RhbmNlLnZpZGVvICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgICAgIGluc3RhbmNlLnZpZGVvLnBhdXNlICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgICAgIChpbnN0YW5jZS52aWRlby5wYXVzZSBpbnN0YW5jZW9mIEZ1bmN0aW9uIHx8XG4gICAgICAgICAgICAgICAgIHR5cGVvZiBpbnN0YW5jZS52aWRlby5wYXVzZSA9PT0gJ2Z1bmN0aW9uJykpIHtcbiAgICAgICAgaW5zdGFuY2UudmlkZW8ucGF1c2UoKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGluc3RhbmNlLnN0b3AgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAgKGluc3RhbmNlLnN0b3AgaW5zdGFuY2VvZiBGdW5jdGlvbiB8fFxuICAgICAgICAgICAgICAgICB0eXBlb2YgaW5zdGFuY2Uuc3RvcCA9PT0gJ2Z1bmN0aW9uJykpIHtcbiAgICAgICAgaW5zdGFuY2Uuc3RvcCgpO1xuICAgICAgfVxuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBQcmV2ZW50IGNyYXNoaW5nLCBidXQgdGVsbCBkZXZlbG9wZXJzIHRoZXJlJ3Mgc29tZXRoaW5nIHdyb25nLlxuICAgICAgSDVQLmVycm9yKGVycik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZSB0aGUgbmF2aWdhdGlvbiBtZW51LlxuICAgKi9cbiAgdG9nZ2xlTmF2aWdhdGlvbk1lbnUoKSB7XG4gICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaDVwLWludGVyYWN0aXZlLWJvb2stbmF2aWdhdGlvbi1vcGVuJyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnZUNvbnRlbnQ7XG4iLCIvKipcbiAqIEEgY29tcG9uZW50IHdoaWNoIGhlbHBzIGluIG5hdmlnYXRpb25cbiAqIENvbnN0cnVjdG9yIGZ1bmN0aW9uLlxuICovXG5jbGFzcyBTaWRlQmFyIGV4dGVuZHMgSDVQLkV2ZW50RGlzcGF0Y2hlciB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZywgY29udGVudElkLCBtYWluVGl0bGUsIHBhcmVudCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmlkID0gY29udGVudElkO1xuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgIHRoaXMuYmVoYXZpb3VyID0gY29uZmlnLmJlaGF2aW91cjtcbiAgICB0aGlzLmNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbmF2aWdhdGlvbi1saXN0Jyk7XG4gICAgdGhpcy5jb250YWluZXIgPSB0aGlzLmFkZFNpZGVCYXIoKTtcbiAgICB0aGlzLmwxMG4gPSBjb25maWcubDEwbjtcblxuICAgIHRoaXMuY2hhcHRlcnMgPSB0aGlzLmZpbmRBbGxDaGFwdGVycyhjb25maWcuY2hhcHRlcnMpO1xuICAgIHRoaXMuY2hhcHRlck5vZGVzID0gdGhpcy5nZXRDaGFwdGVyTm9kZXMoKTtcblxuICAgIGlmIChtYWluVGl0bGUpIHtcbiAgICAgIHRoaXMudGl0bGVFbGVtID0gdGhpcy5hZGRNYWluVGl0bGUobWFpblRpdGxlKTtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGl0bGVFbGVtKTtcbiAgICB9XG5cbiAgICB0aGlzLmNoYXB0ZXJOb2Rlcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgdGhpcy5jb250ZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuY2hhcHRlcnMubGVuZ3RoID4gMjApIHtcbiAgICAgIHRoaXMuY29udGVudC5jbGFzc0xpc3QuYWRkKCdsYXJnZS1uYXZpZ2F0aW9uLWxpc3QnKTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNvbnRlbnQpO1xuXG4gICAgdGhpcy5hZGRUcmFuc2Zvcm1MaXN0ZW5lcigpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZU5hdmlnYXRpb25Db250cm9scygpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZU5hdmlnYXRpb25Db250cm9scygpIHtcbiAgICBjb25zdCBrZXlDb2RlcyA9IE9iamVjdC5mcmVlemUoe1xuICAgICAgJ1VQJzogMzgsXG4gICAgICAnRE9XTic6IDQwLFxuICAgIH0pO1xuXG4gICAgdGhpcy5jaGFwdGVyTm9kZXMuZm9yRWFjaCgoY2hhcHRlciwgaSkgPT4ge1xuICAgICAgY29uc3QgY2hhcHRlckJ1dHRvbiA9IGNoYXB0ZXIucXVlcnlTZWxlY3RvcignLmg1cC1pbnRlcmFjdGl2ZS1ib29rLW5hdmlnYXRpb24tY2hhcHRlci1idXR0b24nKTtcbiAgICAgIGNoYXB0ZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgICAgY2FzZSBrZXlDb2Rlcy5VUDpcbiAgICAgICAgICAgIHRoaXMuc2V0Rm9jdXNUb0NoYXB0ZXJJdGVtKGksIC0xKTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSBrZXlDb2Rlcy5ET1dOOlxuICAgICAgICAgICAgdGhpcy5zZXRGb2N1c1RvQ2hhcHRlckl0ZW0oaSwgMSk7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHNlY3Rpb25zID0gY2hhcHRlci5xdWVyeVNlbGVjdG9yQWxsKCcuaDVwLWludGVyYWN0aXZlLWJvb2stbmF2aWdhdGlvbi1zZWN0aW9uJyk7XG4gICAgICBmb3IgKGxldCBzZWN0aW9uSW5kZXggPSAwOyBzZWN0aW9uSW5kZXggPCBzZWN0aW9ucy5sZW5ndGg7IHNlY3Rpb25JbmRleCsrKSB7XG4gICAgICAgIGNvbnN0IHNlY3Rpb24gPSBzZWN0aW9uc1tzZWN0aW9uSW5kZXhdO1xuICAgICAgICBjb25zdCBzZWN0aW9uQnV0dG9uID0gc2VjdGlvbi5xdWVyeVNlbGVjdG9yKCcuc2VjdGlvbi1idXR0b24nKTtcbiAgICAgICAgc2VjdGlvbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB7XG4gICAgICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgICAgICAgIGNhc2Uga2V5Q29kZXMuVVA6XG4gICAgICAgICAgICAgIHRoaXMuc2V0Rm9jdXNUb1NlY3Rpb25JdGVtKGksIHNlY3Rpb25JbmRleCwgLTEpO1xuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIGtleUNvZGVzLkRPV046XG4gICAgICAgICAgICAgIHRoaXMuc2V0Rm9jdXNUb1NlY3Rpb25JdGVtKGksIHNlY3Rpb25JbmRleCwgMSk7XG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNldEZvY3VzVG9DaGFwdGVySXRlbShpbmRleCwgZGlyZWN0aW9uID0gMCkge1xuICAgIGxldCBuZXh0SW5kZXggPSBpbmRleCArIGRpcmVjdGlvbjtcbiAgICBpZiAobmV4dEluZGV4IDwgMCkge1xuICAgICAgbmV4dEluZGV4ID0gdGhpcy5jaGFwdGVyTm9kZXMubGVuZ3RoIC0gMTtcbiAgICB9XG4gICAgZWxzZSBpZiAobmV4dEluZGV4ID4gdGhpcy5jaGFwdGVyTm9kZXMubGVuZ3RoIC0gMSkge1xuICAgICAgbmV4dEluZGV4ID0gMDtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBpZiB3ZSBzaG91bGQgbmF2aWdhdGUgdG8gYSBzZWN0aW9uXG4gICAgaWYgKGRpcmVjdGlvbikge1xuICAgICAgY29uc3QgY2hhcHRlckluZGV4ID0gZGlyZWN0aW9uID4gMCA/IGluZGV4IDogbmV4dEluZGV4O1xuICAgICAgY29uc3QgY2hhcHRlciA9IHRoaXMuY2hhcHRlck5vZGVzW2NoYXB0ZXJJbmRleF07XG4gICAgICBpZiAoIWNoYXB0ZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdoNXAtaW50ZXJhY3RpdmUtYm9vay1uYXZpZ2F0aW9uLWNsb3NlZCcpKSB7XG4gICAgICAgIGNvbnN0IHNlY3Rpb25zID0gY2hhcHRlci5xdWVyeVNlbGVjdG9yQWxsKCcuaDVwLWludGVyYWN0aXZlLWJvb2stbmF2aWdhdGlvbi1zZWN0aW9uJyk7XG4gICAgICAgIGlmIChzZWN0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICBjb25zdCBzZWN0aW9uSXRlbUluZGV4ID0gZGlyZWN0aW9uID4gMCA/IDAgOiBzZWN0aW9ucy5sZW5ndGggLSAxO1xuICAgICAgICAgIHRoaXMuc2V0Rm9jdXNUb1NlY3Rpb25JdGVtKGNoYXB0ZXJJbmRleCwgc2VjdGlvbkl0ZW1JbmRleCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgbmV4dENoYXB0ZXIgPSB0aGlzLmNoYXB0ZXJOb2Rlc1tuZXh0SW5kZXhdO1xuICAgIGNvbnN0IGNoYXB0ZXJCdXR0b24gPSBuZXh0Q2hhcHRlci5xdWVyeVNlbGVjdG9yKCcuaDVwLWludGVyYWN0aXZlLWJvb2stbmF2aWdhdGlvbi1jaGFwdGVyLWJ1dHRvbicpO1xuICAgIHRoaXMuc2V0Rm9jdXNUb0l0ZW0oY2hhcHRlckJ1dHRvbiwgbmV4dEluZGV4KTtcbiAgfVxuXG4gIHNldEZvY3VzVG9TZWN0aW9uSXRlbShjaGFwdGVySW5kZXgsIGluZGV4LCBkaXJlY3Rpb24gPSAwKSB7XG4gICAgY29uc3QgY2hhcHRlciA9IHRoaXMuY2hhcHRlck5vZGVzW2NoYXB0ZXJJbmRleF07XG4gICAgY29uc3Qgc2VjdGlvbnMgPSBjaGFwdGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5oNXAtaW50ZXJhY3RpdmUtYm9vay1uYXZpZ2F0aW9uLXNlY3Rpb24nKTtcblxuICAgIC8vIE5hdmlnYXRlIGNoYXB0ZXIgaWYgb3V0c2lkZSBvZiBzZWN0aW9uIGJvdW5kc1xuICAgIGNvbnN0IG5leHRJbmRleCA9IGluZGV4ICsgZGlyZWN0aW9uO1xuICAgIGlmIChuZXh0SW5kZXggPiBzZWN0aW9ucy5sZW5ndGggLSAxKSB7XG4gICAgICB0aGlzLnNldEZvY3VzVG9DaGFwdGVySXRlbShjaGFwdGVySW5kZXggKyAxKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZWxzZSAgaWYgKG5leHRJbmRleCA8IDApIHtcbiAgICAgIHRoaXMuc2V0Rm9jdXNUb0NoYXB0ZXJJdGVtKGNoYXB0ZXJJbmRleCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgc2VjdGlvbiA9IHNlY3Rpb25zW25leHRJbmRleF07XG4gICAgY29uc3Qgc2VjdGlvbkJ1dHRvbiA9IHNlY3Rpb24ucXVlcnlTZWxlY3RvcignLnNlY3Rpb24tYnV0dG9uJyk7XG4gICAgdGhpcy5zZXRGb2N1c1RvSXRlbShzZWN0aW9uQnV0dG9uLCBjaGFwdGVySW5kZXgpO1xuICB9XG5cbiAgc2V0Rm9jdXNUb0l0ZW0oZWxlbWVudCwgY2hhcHRlckluZGV4LCBza2lwRm9jdXNpbmcgPSBmYWxzZSkge1xuICAgIC8vIFJlbW92ZSBmb2N1cyBmcm9tIGFsbCBvdGhlciBlbGVtZW50c1xuICAgIHRoaXMuY2hhcHRlck5vZGVzLmZvckVhY2goKGNoYXB0ZXIsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBjaGFwdGVyQnV0dG9uID0gY2hhcHRlci5xdWVyeVNlbGVjdG9yKCcuaDVwLWludGVyYWN0aXZlLWJvb2stbmF2aWdhdGlvbi1jaGFwdGVyLWJ1dHRvbicpO1xuXG4gICAgICAvLyBIaWdobGlnaHQgY3VycmVudCBjaGFwdGVyXG4gICAgICBpZiAoaW5kZXggPT09IGNoYXB0ZXJJbmRleCkge1xuICAgICAgICBjaGFwdGVyQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2g1cC1pbnRlcmFjdGl2ZS1ib29rLW5hdmlnYXRpb24tY3VycmVudCcpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNoYXB0ZXJCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaDVwLWludGVyYWN0aXZlLWJvb2stbmF2aWdhdGlvbi1jdXJyZW50Jyk7XG4gICAgICB9XG4gICAgICBjaGFwdGVyQnV0dG9uLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcblxuICAgICAgY29uc3Qgc2VjdGlvbnMgPSBjaGFwdGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5oNXAtaW50ZXJhY3RpdmUtYm9vay1uYXZpZ2F0aW9uLXNlY3Rpb24nKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qgc2VjdGlvbiA9IHNlY3Rpb25zW2ldO1xuICAgICAgICBjb25zdCBzZWN0aW9uQnV0dG9uID0gc2VjdGlvbi5xdWVyeVNlbGVjdG9yKCcuc2VjdGlvbi1idXR0b24nKTtcbiAgICAgICAgc2VjdGlvbkJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XG5cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJyk7XG4gICAgdGhpcy5mb2N1c2VkQ2hhcHRlciA9IGNoYXB0ZXJJbmRleDtcbiAgICBpZiAoIXNraXBGb2N1c2luZykge1xuICAgICAgZWxlbWVudC5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgc2lkZWJhciBET00uXG4gICAqXG4gICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBET00gZm9yIHNpZGViYXIuXG4gICAqL1xuICBhZGRTaWRlQmFyKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5pZCA9ICdoNXAtaW50ZXJhY3RpdmUtYm9vay1uYXZpZ2F0aW9uLW1lbnUnO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoNXAtaW50ZXJhY3RpdmUtYm9vay1uYXZpZ2F0aW9uJyk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBtYWluIHRpdGxlLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGl0bGUgVGl0bGUuXG4gICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBUaXRsZSBlbGVtZW50LlxuICAgKi9cbiAgYWRkTWFpblRpdGxlKHRpdGxlVGV4dCkge1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCduYXZpZ2F0aW9uLXRpdGxlJyk7XG4gICAgdGl0bGUuaW5uZXJIVE1MID0gdGl0bGVUZXh0O1xuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgndGl0bGUnLCB0aXRsZVRleHQpO1xuXG4gICAgY29uc3QgdGl0bGVXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGVXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2g1cC1pbnRlcmFjdGl2ZS1ib29rLW5hdmlnYXRpb24tbWFpbnRpdGxlJyk7XG4gICAgdGl0bGVXcmFwcGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIHJldHVybiB0aXRsZVdyYXBwZXI7XG4gIH1cblxuICAvKipcbiAgICogRmluZCBzZWN0aW9ucyBpbiBjaGFwdGVyLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gY29sdW1uRGF0YSBDb2x1bW4gZGF0YS5cbiAgICogQHJldHVybiB7b2JqZWN0W119IFNlY3Rpb25zIGRhdGEuXG4gICAqL1xuICBmaW5kU2VjdGlvbnNJbkNoYXB0ZXIoY29sdW1uRGF0YSkge1xuICAgIGNvbnN0IHNlY3Rpb25zRGF0YSA9IFtdO1xuICAgIGNvbnN0IHNlY3Rpb25zID0gY29sdW1uRGF0YS5wYXJhbXMuY29udGVudDtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNlY3Rpb25zLmxlbmd0aDsgaisrKSB7XG4gICAgICBjb25zdCBjb250ZW50ID0gc2VjdGlvbnNbal0uY29udGVudDtcblxuICAgICAgbGV0IHRpdGxlID0gJyc7XG4gICAgICBzd2l0Y2ggKGNvbnRlbnQubGlicmFyeS5zcGxpdCgnICcpWzBdKSB7XG4gICAgICAgIGNhc2UgJ0g1UC5MaW5rJzpcbiAgICAgICAgICBpZiAoY29udGVudC5wYXJhbXMudGl0bGUpIHtcbiAgICAgICAgICAgIHRpdGxlID0gY29udGVudC5wYXJhbXMudGl0bGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGl0bGUgPSAnTmV3IGxpbmsnO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aXRsZSA9IGNvbnRlbnQubWV0YWRhdGEudGl0bGU7XG4gICAgICB9XG5cbiAgICAgIHNlY3Rpb25zRGF0YS5wdXNoKHtcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICBpZDogY29udGVudC5zdWJDb250ZW50SWQgPyBgaDVwLWludGVyYWN0aXZlLWJvb2stc2VjdGlvbi0ke2NvbnRlbnQuc3ViQ29udGVudElkfWAgOiB1bmRlZmluZWRcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBzZWN0aW9uc0RhdGE7XG4gIH1cblxuICAvKipcbiAgICogRmluZCBhbGwgY2hhcHRlcnMuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0W119IGNvbHVtbnNEYXRhIENvbHVtbnMgZGF0YS5cbiAgICogQHJldHVybiB7b2JqZWN0W119IENoYXB0ZXJzIGRhdGEuXG4gICAqL1xuICBmaW5kQWxsQ2hhcHRlcnMoY29sdW1uc0RhdGEpIHtcbiAgICBjb25zdCBjaGFwdGVycyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sdW1uc0RhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHNlY3Rpb25zID0gdGhpcy5maW5kU2VjdGlvbnNJbkNoYXB0ZXIoY29sdW1uc0RhdGFbaV0pO1xuICAgICAgY29uc3QgY2hhcHRlclRpdGxlID0gY29sdW1uc0RhdGFbaV0ubWV0YWRhdGEudGl0bGU7XG4gICAgICBjb25zdCBpZCA9IGBoNXAtaW50ZXJhY3RpdmUtYm9vay1jaGFwdGVyLSR7Y29sdW1uc0RhdGFbaV0uc3ViQ29udGVudElkfWA7XG4gICAgICBjaGFwdGVycy5wdXNoKHtcbiAgICAgICAgc2VjdGlvbnM6IHNlY3Rpb25zLFxuICAgICAgICB0aXRsZTogY2hhcHRlclRpdGxlLFxuICAgICAgICBpZDogaWQsXG4gICAgICAgIGlzU3VtbWFyeTogZmFsc2UsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoIHRoaXMucGFyZW50Lmhhc1N1bW1hcnkoKSkge1xuICAgICAgY2hhcHRlcnMucHVzaCh7XG4gICAgICAgIHNlY3Rpb25zOiBbXSxcbiAgICAgICAgdGl0bGU6IHRoaXMubDEwbi5zdW1tYXJ5SGVhZGVyLFxuICAgICAgICBpZDogYGg1cC1pbnRlcmFjdGl2ZS1ib29rLWNoYXB0ZXItc3VtbWFyeWAsXG4gICAgICAgIGlzU3VtbWFyeTogdHJ1ZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gY2hhcHRlcnM7XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlIGNoYXB0ZXIgbWVudS5cbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY2hhcHRlck5vZGUgQ2hhcHRlci5cbiAgICogQHBhcmFtIHtib29sZWFufSBjb2xsYXBzZSBJZiB0cnVlLCB3aWxsIGNvbGxhcHNlIGNoYXB0ZXIuXG4gICAqL1xuICB0b2dnbGVDaGFwdGVyKGNoYXB0ZXJOb2RlLCBjb2xsYXBzZSkge1xuICAgIGNvbGxhcHNlID0gKGNvbGxhcHNlICE9PSB1bmRlZmluZWQpID8gY29sbGFwc2UgOiAhKGNoYXB0ZXJOb2RlLmNsYXNzTGlzdC5jb250YWlucygnaDVwLWludGVyYWN0aXZlLWJvb2stbmF2aWdhdGlvbi1jbG9zZWQnKSk7XG5cbiAgICBjb25zdCBhcnJvdyA9IGNoYXB0ZXJOb2RlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2g1cC1pbnRlcmFjdGl2ZS1ib29rLW5hdmlnYXRpb24tY2hhcHRlci1hY2NvcmRpb24nKVswXTtcbiAgICBjb25zdCBjaGFwdGVyQnV0dG9uID0gY2hhcHRlck5vZGUucXVlcnlTZWxlY3RvcignLmg1cC1pbnRlcmFjdGl2ZS1ib29rLW5hdmlnYXRpb24tY2hhcHRlci1idXR0b24nKTtcbiAgICBjaGFwdGVyQnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICghY29sbGFwc2UpLnRvU3RyaW5nKCkpO1xuXG4gICAgaWYgKGNvbGxhcHNlID09PSB0cnVlKSB7XG4gICAgICBjaGFwdGVyTm9kZS5jbGFzc0xpc3QuYWRkKCdoNXAtaW50ZXJhY3RpdmUtYm9vay1uYXZpZ2F0aW9uLWNsb3NlZCcpO1xuICAgICAgaWYgKGFycm93KSB7XG4gICAgICAgIGFycm93LmNsYXNzTGlzdC5yZW1vdmUoJ2ljb24tZXhwYW5kZWQnKTtcbiAgICAgICAgYXJyb3cuY2xhc3NMaXN0LmFkZCgnaWNvbi1jb2xsYXBzZWQnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjaGFwdGVyTm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdoNXAtaW50ZXJhY3RpdmUtYm9vay1uYXZpZ2F0aW9uLWNsb3NlZCcpO1xuICAgICAgaWYgKGFycm93KSB7XG4gICAgICAgIGFycm93LmNsYXNzTGlzdC5yZW1vdmUoJ2ljb24tY29sbGFwc2VkJyk7XG4gICAgICAgIGFycm93LmNsYXNzTGlzdC5hZGQoJ2ljb24tZXhwYW5kZWQnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRmlyZXMgd2hlbmV2ZXIgYSByZWRpcmVjdCBpcyBoYXBwZW5pbmcgaW4gcGFyZW50XG4gICAqIEFsbCBjaGFwdGVycyB3aWxsIGJlIGNvbGxhcHNlZCBleGNlcHQgZm9yIHRoZSBhY3RpdmVcbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGNoYXB0ZXJJZCBUaGUgY2hhcHRlciB0aGF0IHNob3VsZCBzdGF5IG9wZW4gaW4gdGhlIG1lbnUuXG4gICAqL1xuICByZWRpcmVjdEhhbmRsZXIoY2hhcHRlcklkKSB7XG4gICAgdGhpcy5jaGFwdGVyTm9kZXMuZm9yRWFjaCgobm9kZSwgaW5kZXgpID0+IHtcbiAgICAgIHRoaXMudG9nZ2xlQ2hhcHRlcihub2RlLCBpbmRleCAhPT0gY2hhcHRlcklkKTtcbiAgICB9KTtcbiAgICAvLyBUcmlnZ2VyIHJlc2l6ZSBhZnRlciB0b2dnbGluZyBhbGwgY2hhcHRlcnNcbiAgICB0aGlzLnBhcmVudC50cmlnZ2VyKCdyZXNpemUnKTtcblxuXG4gICAgLy8gRm9jdXMgbmV3IGNoYXB0ZXIgYnV0dG9uIGlmIGFjdGl2ZSBjaGFwdGVyIHdhcyBjbG9zZWRcbiAgICBpZiAoY2hhcHRlcklkICE9PSB0aGlzLmZvY3VzZWRDaGFwdGVyKSB7XG4gICAgICBjb25zdCBjaGFwdGVyQnV0dG9uID0gdGhpcy5jaGFwdGVyTm9kZXNbY2hhcHRlcklkXS5xdWVyeVNlbGVjdG9yKCcuaDVwLWludGVyYWN0aXZlLWJvb2stbmF2aWdhdGlvbi1jaGFwdGVyLWJ1dHRvbicpO1xuICAgICAgdGhpcy5zZXRGb2N1c1RvSXRlbShjaGFwdGVyQnV0dG9uLCBjaGFwdGVySWQsIHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldCBpbmRpY2F0b3JzLlxuICAgKi9cbiAgcmVzZXRJbmRpY2F0b3JzKCkge1xuICAgIHRoaXMuY2hhcHRlck5vZGVzLmZvckVhY2goKG5vZGUsIGluZGV4KSA9PiB7XG4gICAgICAvLyBSZXNldCBjaGFwdGVyXG4gICAgICB0aGlzLnVwZGF0ZUNoYXB0ZXJQcm9ncmVzc0luZGljYXRvcihpbmRleCwgJ0JMQU5LJyk7XG5cbiAgICAgIC8vIFJlc2V0IHNlY3Rpb25zXG4gICAgICBjb25zdCBzZWN0aW9ucyA9IG5vZGUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaDVwLWludGVyYWN0aXZlLWJvb2stbmF2aWdhdGlvbi1zZWN0aW9uJyk7XG4gICAgICBmb3IgKGxldCBzZWN0aW9uIG9mIHNlY3Rpb25zKSB7XG4gICAgICAgIGNvbnN0IGljb24gPSBzZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoJy5oNXAtaW50ZXJhY3RpdmUtYm9vay1uYXZpZ2F0aW9uLXNlY3Rpb24taWNvbicpO1xuICAgICAgICBpZiAoaWNvbikge1xuICAgICAgICAgIGljb24uY2xhc3NMaXN0LnJlbW92ZSgnaWNvbi1xdWVzdGlvbi1hbnN3ZXJlZCcpO1xuICAgICAgICAgIGljb24uY2xhc3NMaXN0LmFkZCgnaWNvbi1jaGFwdGVyLWJsYW5rJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgdGhlIGluZGljYXRvciBvbiBhIHNwZWNpZmljIGNoYXB0ZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBjaGFwdGVySWQgVGhlIGNoYXB0ZXIgdGhhdCBzaG91bGQgYmUgdXBkYXRlZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHN0YXR1cyBTdGF0dXMuXG4gICAqL1xuICB1cGRhdGVDaGFwdGVyUHJvZ3Jlc3NJbmRpY2F0b3IoY2hhcHRlcklkLCBzdGF0dXMpIHtcbiAgICBpZiAoIXRoaXMuYmVoYXZpb3VyLnByb2dyZXNzSW5kaWNhdG9ycykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGNoYXB0ZXIgPSB0aGlzLmNoYXB0ZXJzW2NoYXB0ZXJJZF07XG4gICAgaWYgKCBjaGFwdGVyLmlzU3VtbWFyeSApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBwcm9ncmVzc0luZGljYXRvciA9IHRoaXMuY2hhcHRlck5vZGVzW2NoYXB0ZXJJZF1cbiAgICAgIC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoNXAtaW50ZXJhY3RpdmUtYm9vay1uYXZpZ2F0aW9uLWNoYXB0ZXItcHJvZ3Jlc3MnKVswXTtcblxuICAgIGlmIChzdGF0dXMgPT09ICdCTEFOSycpIHtcbiAgICAgIHByb2dyZXNzSW5kaWNhdG9yLmNsYXNzTGlzdC5yZW1vdmUoJ2ljb24tY2hhcHRlci1zdGFydGVkJyk7XG4gICAgICBwcm9ncmVzc0luZGljYXRvci5jbGFzc0xpc3QucmVtb3ZlKCdpY29uLWNoYXB0ZXItZG9uZScpO1xuICAgICAgcHJvZ3Jlc3NJbmRpY2F0b3IuY2xhc3NMaXN0LmFkZCgnaWNvbi1jaGFwdGVyLWJsYW5rJyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHN0YXR1cyA9PT0gJ0RPTkUnKSB7XG4gICAgICBwcm9ncmVzc0luZGljYXRvci5jbGFzc0xpc3QucmVtb3ZlKCdpY29uLWNoYXB0ZXItYmxhbmsnKTtcbiAgICAgIHByb2dyZXNzSW5kaWNhdG9yLmNsYXNzTGlzdC5yZW1vdmUoJ2ljb24tY2hhcHRlci1zdGFydGVkJyk7XG4gICAgICBwcm9ncmVzc0luZGljYXRvci5jbGFzc0xpc3QuYWRkKCdpY29uLWNoYXB0ZXItZG9uZScpO1xuICAgIH1cbiAgICBlbHNlIGlmIChzdGF0dXMgPT09ICdTVEFSVEVEJykge1xuICAgICAgcHJvZ3Jlc3NJbmRpY2F0b3IuY2xhc3NMaXN0LnJlbW92ZSgnaWNvbi1jaGFwdGVyLWJsYW5rJyk7XG4gICAgICBwcm9ncmVzc0luZGljYXRvci5jbGFzc0xpc3QucmVtb3ZlKCdpY29uLWNoYXB0ZXItZG9uZScpO1xuICAgICAgcHJvZ3Jlc3NJbmRpY2F0b3IuY2xhc3NMaXN0LmFkZCgnaWNvbi1jaGFwdGVyLXN0YXJ0ZWQnKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0IHNlY3Rpb24gbWFya2VyLlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gY2hhcHRlcklkIENoYXB0ZXIgSWQuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzZWN0aW9uSWQgU2VjdGlvbiBJZC5cbiAgICovXG4gIHNldFNlY3Rpb25NYXJrZXIoY2hhcHRlcklkLCBzZWN0aW9uSWQpIHtcbiAgICBjb25zdCBpY29uID0gdGhpcy5jaGFwdGVyTm9kZXNbY2hhcHRlcklkXVxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5oNXAtaW50ZXJhY3RpdmUtYm9vay1uYXZpZ2F0aW9uLXNlY3Rpb24tJyArIHNlY3Rpb25JZCArICcgLmg1cC1pbnRlcmFjdGl2ZS1ib29rLW5hdmlnYXRpb24tc2VjdGlvbi1pY29uJyk7XG5cbiAgICBpZiAoaWNvbikge1xuICAgICAgaWNvbi5jbGFzc0xpc3QucmVtb3ZlKCdpY29uLWNoYXB0ZXItYmxhbmsnKTtcbiAgICAgIGljb24uY2xhc3NMaXN0LmFkZCgnaWNvbi1xdWVzdGlvbi1hbnN3ZXJlZCcpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgY2hhcHRlci5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGNoYXB0ZXIgQ2hhcHRlciBkYXRhLlxuICAgKiBAcGFyYW0ge251bWJlcn0gY2hhcHRlcklkIENoYXB0ZXIgSWQuXG4gICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBDaGFwdGVyIG5vZGUuXG4gICAqL1xuICBnZXROb2Rlc0Zyb21DaGFwdGVyKGNoYXB0ZXIsIGNoYXB0ZXJJZCkge1xuICAgIGNvbnN0IGNoYXB0ZXJOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjaGFwdGVyTm9kZS5jbGFzc0xpc3QuYWRkKCdoNXAtaW50ZXJhY3RpdmUtYm9vay1uYXZpZ2F0aW9uLWNoYXB0ZXInKTtcblxuICAgIGlmICggY2hhcHRlci5pc1N1bW1hcnkpIHtcbiAgICAgIGNoYXB0ZXJOb2RlLmNsYXNzTGlzdC5hZGQoJ2g1cC1pbnRlcmFjdGl2ZS1ib29rLW5hdmlnYXRpb24tc3VtbWFyeS1idXR0b24nKTtcbiAgICAgIGNvbnN0IHN1bW1hcnkgPSB0aGlzLnBhcmVudC5jaGFwdGVyc1tjaGFwdGVySWRdO1xuICAgICAgY29uc3Qgc3VtbWFyeUJ1dHRvbiA9IHN1bW1hcnkuaW5zdGFuY2Uuc3VtbWFyeU1lbnVCdXR0b247XG4gICAgICBzdW1tYXJ5QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2g1cC1pbnRlcmFjdGl2ZS1ib29rLW5hdmlnYXRpb24tY2hhcHRlci1idXR0b24nKTtcbiAgICAgIGNoYXB0ZXJOb2RlLmFwcGVuZENoaWxkKHN1bW1hcnlCdXR0b24pO1xuICAgICAgcmV0dXJuIGNoYXB0ZXJOb2RlO1xuICAgIH1cblxuICAgIC8vIFRPRE86IENsZWFuIHRoaXMgdXAuIFdpbGwgcmVxdWlyZSB0byByZWNlaXZlIGNoYXB0ZXIgaW5mbyBmcm9tIHBhcmVudCBpbnN0ZWFkIG9mIGJ1aWxkaW5nIGl0c2VsZlxuICAgIGNvbnN0IGNoYXB0ZXJDb2xsYXBzZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjaGFwdGVyQ29sbGFwc2VJY29uLmNsYXNzTGlzdC5hZGQoJ2g1cC1pbnRlcmFjdGl2ZS1ib29rLW5hdmlnYXRpb24tY2hhcHRlci1hY2NvcmRpb24nKTtcblxuICAgIGNvbnN0IGNoYXB0ZXJUaXRsZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjaGFwdGVyVGl0bGVUZXh0LmNsYXNzTGlzdC5hZGQoJ2g1cC1pbnRlcmFjdGl2ZS1ib29rLW5hdmlnYXRpb24tY2hhcHRlci10aXRsZS10ZXh0Jyk7XG4gICAgY2hhcHRlclRpdGxlVGV4dC5pbm5lckhUTUwgPSBjaGFwdGVyLnRpdGxlO1xuICAgIGNoYXB0ZXJUaXRsZVRleHQuc2V0QXR0cmlidXRlKCd0aXRsZScsIGNoYXB0ZXIudGl0bGUpO1xuXG4gICAgY29uc3QgY2hhcHRlckNvbXBsZXRpb25JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaWYgKHRoaXMuYmVoYXZpb3VyLnByb2dyZXNzSW5kaWNhdG9ycykge1xuICAgICAgY2hhcHRlckNvbXBsZXRpb25JY29uLmNsYXNzTGlzdC5hZGQoJ2ljb24tY2hhcHRlci1ibGFuaycpO1xuICAgICAgY2hhcHRlckNvbXBsZXRpb25JY29uLmNsYXNzTGlzdC5hZGQoJ2g1cC1pbnRlcmFjdGl2ZS1ib29rLW5hdmlnYXRpb24tY2hhcHRlci1wcm9ncmVzcycpO1xuICAgIH1cblxuICAgIGNvbnN0IGNoYXB0ZXJOb2RlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjaGFwdGVyTm9kZVRpdGxlLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCBjaGFwdGVySWQgPT09IDAgPyAnMCcgOiAnLTEnKTtcbiAgICBjaGFwdGVyTm9kZVRpdGxlLmNsYXNzTGlzdC5hZGQoJ2g1cC1pbnRlcmFjdGl2ZS1ib29rLW5hdmlnYXRpb24tY2hhcHRlci1idXR0b24nKTtcbiAgICBpZiAodGhpcy5wYXJlbnQuYWN0aXZlQ2hhcHRlciAhPT0gY2hhcHRlcklkKSB7XG4gICAgICBjaGFwdGVyQ29sbGFwc2VJY29uLmNsYXNzTGlzdC5hZGQoJ2ljb24tY29sbGFwc2VkJyk7XG4gICAgICBjaGFwdGVyTm9kZVRpdGxlLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNoYXB0ZXJDb2xsYXBzZUljb24uY2xhc3NMaXN0LmFkZCgnaWNvbi1leHBhbmRlZCcpO1xuICAgICAgY2hhcHRlck5vZGVUaXRsZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuICAgIH1cbiAgICBjaGFwdGVyTm9kZVRpdGxlLnNldEF0dHJpYnV0ZSgnYXJpYS1jb250cm9scycsIHNlY3Rpb25zRGl2SWQpO1xuICAgIGNoYXB0ZXJOb2RlVGl0bGUub25jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3QgYWNjb3JkaW9uID0gZXZlbnQuY3VycmVudFRhcmdldC5xdWVyeVNlbGVjdG9yKCcuaDVwLWludGVyYWN0aXZlLWJvb2stbmF2aWdhdGlvbi1jaGFwdGVyLWFjY29yZGlvbicpO1xuXG4gICAgICBjb25zdCBpc0V4cGFuZGFibGUgPSAhYWNjb3JkaW9uLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJyk7XG4gICAgICBjb25zdCBpc0V4cGFuZGVkID0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKSA9PT0gJ3RydWUnO1xuXG4gICAgICBpZiAodGhpcy5pc09wZW5Pbk1vYmlsZSgpKSB7XG4gICAgICAgIHRoaXMucGFyZW50LnRyaWdnZXIoJ3RvZ2dsZU1lbnUnKTtcbiAgICAgIH1cblxuICAgICAgLy8gT3BlbiBjaGFwdGVyIGluIG1haW4gY29udGVudFxuICAgICAgaWYgKGNoYXB0ZXJJZCAhPT0gdGhpcy5mb2N1c2VkQ2hhcHRlciAmJiAodGhpcy5pc09wZW5Pbk1vYmlsZSgpIHx8ICFpc0V4cGFuZGFibGUgfHwgIWlzRXhwYW5kZWQpKSB7XG4gICAgICAgIGNvbnN0IG5ld0NoYXB0ZXIgPSB7XG4gICAgICAgICAgaDVwYm9va2lkOiB0aGlzLnBhcmVudC5jb250ZW50SWQsXG4gICAgICAgICAgY2hhcHRlcjogdGhpcy5jaGFwdGVyc1tjaGFwdGVySWRdLmlkLFxuICAgICAgICAgIHNlY3Rpb246IDAsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5wYXJlbnQudHJpZ2dlcignbmV3Q2hhcHRlcicsIG5ld0NoYXB0ZXIpO1xuICAgICAgfVxuXG4gICAgICAvLyBFeHBhbmQgY2hhcHRlciBpbiBtZW51XG4gICAgICBpZiAoaXNFeHBhbmRhYmxlKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlQ2hhcHRlcihldmVudC5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQpO1xuICAgICAgICB0aGlzLnBhcmVudC50cmlnZ2VyKCdyZXNpemUnKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNoYXB0ZXJOb2RlVGl0bGUuYXBwZW5kQ2hpbGQoY2hhcHRlckNvbGxhcHNlSWNvbik7XG4gICAgY2hhcHRlck5vZGVUaXRsZS5hcHBlbmRDaGlsZChjaGFwdGVyVGl0bGVUZXh0KTtcbiAgICBjaGFwdGVyTm9kZVRpdGxlLmFwcGVuZENoaWxkKGNoYXB0ZXJDb21wbGV0aW9uSWNvbik7XG5cbiAgICBjaGFwdGVyTm9kZS5hcHBlbmRDaGlsZChjaGFwdGVyTm9kZVRpdGxlKTtcblxuICAgIC8vIENvbGxhcHNlIGFsbCBidXQgY3VycmVudCBjaGFwdGVycyBpbiBtZW51IGFuZCBoaWdobGlnaHQgY3VycmVudFxuICAgIGlmICh0aGlzLnBhcmVudC5hY3RpdmVDaGFwdGVyID09PSBjaGFwdGVySWQpIHtcbiAgICAgIGNoYXB0ZXJOb2RlLnF1ZXJ5U2VsZWN0b3IoJy5oNXAtaW50ZXJhY3RpdmUtYm9vay1uYXZpZ2F0aW9uLWNoYXB0ZXItYnV0dG9uJykuY2xhc3NMaXN0LmFkZCgnaDVwLWludGVyYWN0aXZlLWJvb2stbmF2aWdhdGlvbi1jdXJyZW50Jyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy50b2dnbGVDaGFwdGVyKGNoYXB0ZXJOb2RlLCB0cnVlKTtcbiAgICB9XG5cbiAgICBjb25zdCBzZWN0aW9uc1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIHNlY3Rpb25zV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdoNXAtaW50ZXJhY3RpdmUtYm9vay1uYXZpZ2F0aW9uLXNlY3Rpb25saXN0Jyk7XG4gICAgY29uc3Qgc2VjdGlvbnNEaXZJZCA9ICdoNXAtaW50ZXJhY3RpdmUtYm9vay1zZWN0aW9ubGlzdC0nICsgY2hhcHRlcklkO1xuICAgIHNlY3Rpb25zV3JhcHBlci5pZCA9IHNlY3Rpb25zRGl2SWQ7XG5cbiAgICBjb25zdCBzZWN0aW9uTGlua3MgPSBbXTtcbiAgICAvLyBBZGQgc2VjdGlvbnMgdG8gdGhlIGNoYXB0ZXJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2hhcHRlcnNbY2hhcHRlcklkXS5zZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gTm9uLXRhc2tzIHdpbGwgb25seSBnZXQgc2VjdGlvbiBsaW5rcyBpZiB0aGV5IGhhdmUgaGVhZGVyc1xuICAgICAgaWYgKCF0aGlzLnBhcmVudC5jaGFwdGVyc1tjaGFwdGVySWRdLnNlY3Rpb25zW2ldLmlzVGFzaykge1xuXG4gICAgICAgIC8vIENoZWNrIHRleHQgY29udGVudCBmb3IgaGVhZGVyc1xuICAgICAgICBjb25zdCBjaGFwdGVyUGFyYW1zID0gdGhpcy5wYXJlbnQucGFyYW1zLmNoYXB0ZXJzW2NoYXB0ZXJJZF07XG4gICAgICAgIGNvbnN0IHNlY3Rpb25QYXJhbXMgPSBjaGFwdGVyUGFyYW1zLnBhcmFtcy5jb250ZW50W2ldLmNvbnRlbnQ7XG4gICAgICAgIGNvbnN0IGlzVGV4dCA9IHNlY3Rpb25QYXJhbXMubGlicmFyeS5zcGxpdCgnICcpWzBdID09PSAnSDVQLkFkdmFuY2VkVGV4dCc7XG5cbiAgICAgICAgaWYgKGlzVGV4dCkge1xuICAgICAgICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICB0ZXh0LmlubmVySFRNTCA9IHNlY3Rpb25QYXJhbXMucGFyYW1zLnRleHQ7XG4gICAgICAgICAgY29uc3QgaGVhZGVycyA9IHRleHQucXVlcnlTZWxlY3RvckFsbCgnaDIsIGgzJyk7XG4gICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBoZWFkZXJzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBjb25zdCBoZWFkZXIgPSBoZWFkZXJzW2pdO1xuICAgICAgICAgICAgY29uc3Qgc2VjdGlvbk5vZGUgPSB0aGlzLmNyZWF0ZVNlY3Rpb25MaW5rKGNoYXB0ZXJJZCwgaSwgaGVhZGVyLnRleHRDb250ZW50LCBqKTtcbiAgICAgICAgICAgIHNlY3Rpb25MaW5rcy5wdXNoKHNlY3Rpb25Ob2RlKTtcbiAgICAgICAgICAgIHNlY3Rpb25zV3JhcHBlci5hcHBlbmRDaGlsZChzZWN0aW9uTm9kZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY29uc3Qgc2VjdGlvbk5vZGUgPSB0aGlzLmNyZWF0ZVNlY3Rpb25MaW5rKGNoYXB0ZXJJZCwgaSk7XG4gICAgICAgIHNlY3Rpb25MaW5rcy5wdXNoKHNlY3Rpb25Ob2RlKTtcbiAgICAgICAgc2VjdGlvbnNXcmFwcGVyLmFwcGVuZENoaWxkKHNlY3Rpb25Ob2RlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY2hhcHRlci50YXNrc0xlZnQpIHtcbiAgICAgIGNoYXB0ZXIubWF4VGFza3MgPSBjaGFwdGVyLnRhc2tzTGVmdDtcbiAgICB9XG5cbiAgICAvLyBEb24ndCBzaG93IGNvbGxhcHNlIGFycm93IGlmIHRoZXJlIGFyZSBubyBzZWN0aW9ucyBvciBvbiBtb2JpbGVcbiAgICBpZiAoc2VjdGlvbkxpbmtzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc3QgYXJyb3dJY29uRWxlbWVudCA9IGNoYXB0ZXJOb2RlLnF1ZXJ5U2VsZWN0b3IoJy5oNXAtaW50ZXJhY3RpdmUtYm9vay1uYXZpZ2F0aW9uLWNoYXB0ZXItYWNjb3JkaW9uJyk7XG4gICAgICBpZiAoYXJyb3dJY29uRWxlbWVudCkge1xuICAgICAgICBhcnJvd0ljb25FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNoYXB0ZXJOb2RlLmFwcGVuZENoaWxkKHNlY3Rpb25zV3JhcHBlcik7XG5cbiAgICByZXR1cm4gY2hhcHRlck5vZGU7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIGEgc2VjdGlvbiBsaW5rXG4gICAqIEBwYXJhbSBjaGFwdGVySWRcbiAgICogQHBhcmFtIGkgSW5kZXggb2Ygc2VjdGlvblxuICAgKiBAcGFyYW0gW3RpdGxlXSBGb3JjZSB0aXRsZVxuICAgKiBAcGFyYW0gW2hlYWRlck51bWJlcl0gU2V0IGhlYWRlciBpbmRleCB3aXRoaW4gc2VjdGlvbiB0byBsaW5rIHRvLlxuICAgKiBAcmV0dXJucyB7RWxlbWVudH0gU2VjdGlvbiBub2RlIGNvbnRhaW5pbmcgdGhlIGxpbmtcbiAgICovXG4gIGNyZWF0ZVNlY3Rpb25MaW5rKGNoYXB0ZXJJZCwgaSwgdGl0bGUgPSBudWxsLCBoZWFkZXJOdW1iZXIgPSBudWxsKSB7XG4gICAgY29uc3Qgc2VjdGlvbiA9IHRoaXMuY2hhcHRlcnNbY2hhcHRlcklkXS5zZWN0aW9uc1tpXTtcblxuICAgIGNvbnN0IHNlY3Rpb25UaXRsZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzZWN0aW9uVGl0bGVUZXh0LmlubmVySFRNTCA9IHRpdGxlIHx8IHNlY3Rpb24udGl0bGU7XG4gICAgc2VjdGlvblRpdGxlVGV4dC5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgdGl0bGUgfHwgc2VjdGlvbi50aXRsZSk7XG4gICAgc2VjdGlvblRpdGxlVGV4dC5jbGFzc0xpc3QuYWRkKCdoNXAtaW50ZXJhY3RpdmUtYm9vay1uYXZpZ2F0aW9uLXNlY3Rpb24tdGl0bGUnKTtcblxuICAgIGNvbnN0IHNlY3Rpb25Db21wbGV0aW9uSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNlY3Rpb25Db21wbGV0aW9uSWNvbi5jbGFzc0xpc3QuYWRkKCdoNXAtaW50ZXJhY3RpdmUtYm9vay1uYXZpZ2F0aW9uLXNlY3Rpb24taWNvbicpO1xuICAgIHNlY3Rpb25Db21wbGV0aW9uSWNvbi5jbGFzc0xpc3QuYWRkKCdpY29uLWNoYXB0ZXItYmxhbmsnKTtcbiAgICBpZiAodGhpcy5wYXJlbnQuY2hhcHRlcnNbY2hhcHRlcklkXS5zZWN0aW9uc1tpXS5pc1Rhc2spIHtcbiAgICAgIHNlY3Rpb25Db21wbGV0aW9uSWNvbi5jbGFzc0xpc3QuYWRkKCdoNXAtaW50ZXJhY3RpdmUtYm9vay1uYXZpZ2F0aW9uLXNlY3Rpb24tdGFzaycpO1xuICAgIH1cbiAgICBjb25zdCBzZWN0aW9uTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHNlY3Rpb25MaW5rLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb24tYnV0dG9uJyk7XG4gICAgc2VjdGlvbkxpbmsuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuICAgIHNlY3Rpb25MaW5rLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IG5ld0NoYXB0ZXIgPSB7XG4gICAgICAgIGg1cGJvb2tpZDogdGhpcy5wYXJlbnQuY29udGVudElkLFxuICAgICAgICBjaGFwdGVyOiB0aGlzLmNoYXB0ZXJzW2NoYXB0ZXJJZF0uaWQsXG4gICAgICAgIHNlY3Rpb246IHNlY3Rpb24uaWQsXG4gICAgICB9O1xuICAgICAgaWYgKGhlYWRlck51bWJlciAhPT0gbnVsbCkge1xuICAgICAgICBuZXdDaGFwdGVyLmhlYWRlck51bWJlciA9IGhlYWRlck51bWJlcjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5wYXJlbnQudHJpZ2dlcignbmV3Q2hhcHRlcicsIG5ld0NoYXB0ZXIpO1xuXG4gICAgICBpZiAodGhpcy5pc09wZW5Pbk1vYmlsZSgpKSB7XG4gICAgICAgIHRoaXMucGFyZW50LnRyaWdnZXIoJ3RvZ2dsZU1lbnUnKTtcbiAgICAgIH1cblxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9O1xuICAgIHNlY3Rpb25MaW5rLmFwcGVuZENoaWxkKHNlY3Rpb25Db21wbGV0aW9uSWNvbik7XG4gICAgc2VjdGlvbkxpbmsuYXBwZW5kQ2hpbGQoc2VjdGlvblRpdGxlVGV4dCk7XG5cbiAgICBjb25zdCBzZWN0aW9uTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgc2VjdGlvbk5vZGUuY2xhc3NMaXN0LmFkZCgnaDVwLWludGVyYWN0aXZlLWJvb2stbmF2aWdhdGlvbi1zZWN0aW9uJyk7XG4gICAgc2VjdGlvbk5vZGUuY2xhc3NMaXN0LmFkZCgnaDVwLWludGVyYWN0aXZlLWJvb2stbmF2aWdhdGlvbi1zZWN0aW9uLScgKyBpKTtcbiAgICBzZWN0aW9uTm9kZS5hcHBlbmRDaGlsZChzZWN0aW9uTGluayk7XG5cbiAgICByZXR1cm4gc2VjdGlvbk5vZGU7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGNoYXB0ZXIgZWxlbWVudHMuXG4gICAqXG4gICAqIEByZXR1cm4ge0hUTUxFbGVtZW50W119IENoYXB0ZXIgZWxlbWVudHMuXG4gICAqL1xuICBnZXRDaGFwdGVyTm9kZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hhcHRlcnMubWFwKChjaGFwdGVyLCBpbmRleCkgPT4gdGhpcy5nZXROb2Rlc0Zyb21DaGFwdGVyKGNoYXB0ZXIsIGluZGV4KSk7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZWN0IHdoZXRoZXIgbmF2aWdhdGlvbiBpcyBvcGVuIG9uIGEgc21hbGwgc3VyZmFjZShwYyBvciBtb2JpbGUpLlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlLCBpZiBuYXZpZ2F0aW9uIGlzIG9wZW4gb24gbW9iaWxlIHZpZXcuXG4gICAqL1xuICBpc09wZW5Pbk1vYmlsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQuaXNNZW51T3BlbigpICYmIHRoaXMucGFyZW50LmlzU21hbGxTdXJmYWNlKCk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIHRyYW5zZm9ybSBsaXN0ZW5lci5cbiAgICovXG4gIGFkZFRyYW5zZm9ybUxpc3RlbmVyKCkge1xuICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCAoZXZlbnQpID0+IHtcbiAgICAgIC8vIHByb3BlcnR5TmFtZSBpcyB1c2VkIHRyaWdnZXIgb25jZSwgbm90IGZvciBldmVyeSBwcm9wZXJ0eSB0aGF0IGhhcyB0cmFuc2l0aW9uZW5kXG4gICAgICBpZiAoZXZlbnQucHJvcGVydHlOYW1lID09PSAnZmxleC1iYXNpcycpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQudHJpZ2dlcigncmVzaXplJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFNpZGVCYXI7XG4iLCIvKipcbiAqIENvbnN0cnVjdG9yIGZ1bmN0aW9uLlxuICovXG5jbGFzcyBTdGF0dXNCYXIgZXh0ZW5kcyBINVAuRXZlbnREaXNwYXRjaGVyIHtcbiAgY29uc3RydWN0b3IoY29udGVudElkLCB0b3RhbENoYXB0ZXJzLCBwYXJlbnQsIHBhcmFtcywgc3R5bGVDbGFzc05hbWUpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuaWQgPSBjb250ZW50SWQ7XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG5cbiAgICB0aGlzLnBhcmFtcyA9IHBhcmFtcyB8fCB7fTtcblxuICAgIHRoaXMucGFyYW1zLmwxMG4gPSBwYXJhbXMubDEwbjtcblxuICAgIHRoaXMucGFyYW1zLmExMXkgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgIHByb2dyZXNzOiAnUGFnZSBAcGFnZSBvZiBAdG90YWwnLFxuICAgICAgbWVudTogJ1RvZ2dsZSBuYXZpZ2F0aW9uIG1lbnUnLFxuICAgIH0sIHRoaXMucGFyYW1zLmExMXkgfHwge30pO1xuXG4gICAgdGhpcy50b3RhbENoYXB0ZXJzID0gdG90YWxDaGFwdGVycztcbiAgICB0aGlzLmFycm93cyA9IHRoaXMuYWRkQXJyb3dzKCk7XG5cbiAgICAvKipcbiAgICAgKiBUb3Agcm93IGluaXRpYWxpemVyXG4gICAgICovXG4gICAgdGhpcy5wcm9ncmVzc0JhciA9IHRoaXMuY3JlYXRlUHJvZ3Jlc3NCYXIoKTtcbiAgICB0aGlzLnByb2dyZXNzSW5kaWNhdG9yID0gdGhpcy5jcmVhdGVQcm9ncmVzc0luZGljYXRvcigpO1xuICAgIHRoaXMuY2hhcHRlclRpdGxlID0gdGhpcy5hZGRDaGFwdGVyVGl0bGUoKTtcbiAgICB0aGlzLm1lbnVUb2dnbGVCdXR0b24gPSB0aGlzLmNyZWF0ZU1lbnVUb2dnbGVCdXR0b24oKTtcblxuICAgIGNvbnN0IHdyYXBwZXJJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd3JhcHBlckluZm8uY2xhc3NMaXN0LmFkZCgnaDVwLWludGVyYWN0aXZlLWJvb2stc3RhdHVzJyk7XG4gICAgd3JhcHBlckluZm8uYXBwZW5kQ2hpbGQodGhpcy5tZW51VG9nZ2xlQnV0dG9uKTtcbiAgICB3cmFwcGVySW5mby5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZVRvVG9wQnV0dG9uKCkpO1xuICAgIHdyYXBwZXJJbmZvLmFwcGVuZENoaWxkKHRoaXMuY2hhcHRlclRpdGxlLndyYXBwZXIpO1xuICAgIHdyYXBwZXJJbmZvLmFwcGVuZENoaWxkKHRoaXMucHJvZ3Jlc3NJbmRpY2F0b3Iud3JhcHBlcik7XG4gICAgd3JhcHBlckluZm8uYXBwZW5kQ2hpbGQodGhpcy5hcnJvd3MuYnV0dG9uV3JhcHBlclByZXZpb3VzKTtcbiAgICB3cmFwcGVySW5mby5hcHBlbmRDaGlsZCh0aGlzLmFycm93cy5idXR0b25XcmFwcGVyTmV4dCk7XG5cbiAgICBpZiAodGhpcy5wYXJhbXMuZGlzcGxheUZ1bGxTY3JlZW5CdXR0b24gJiYgSDVQLmZ1bGxzY3JlZW5TdXBwb3J0ZWQpIHtcbiAgICAgIHdyYXBwZXJJbmZvLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlRnVsbFNjcmVlbkJ1dHRvbigpKTtcbiAgICB9XG5cbiAgICB0aGlzLndyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLndyYXBwZXIuY2xhc3NMaXN0LmFkZChzdHlsZUNsYXNzTmFtZSk7XG4gICAgdGhpcy53cmFwcGVyLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcbiAgICB0aGlzLndyYXBwZXIuYXBwZW5kQ2hpbGQodGhpcy5wcm9ncmVzc0Jhci53cmFwcGVyKTtcbiAgICB0aGlzLndyYXBwZXIuYXBwZW5kQ2hpbGQod3JhcHBlckluZm8pO1xuXG4gICAgdGhpcy5vbigndXBkYXRlU3RhdHVzQmFyJywgdGhpcy51cGRhdGVTdGF0dXNCYXIpO1xuXG4gICAgLyoqXG4gICAgICogU2VxdWVudGlhbCB0cmF2ZXJzYWwgb2YgY2hhcHRlcnNcbiAgICAgKiBFdmVudCBzaG91bGQgYmUgZWl0aGVyICduZXh0JyBvciAncHJldidcbiAgICAgKi9cbiAgICB0aGlzLm9uKCdzZXFDaGFwdGVyJywgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBldmVudElucHV0ID0ge1xuICAgICAgICBoNXBib29raWQ6IHRoaXMucGFyZW50LmNvbnRlbnRJZFxuICAgICAgfTtcbiAgICAgIGlmIChldmVudC5kYXRhLnRvVG9wKSB7XG4gICAgICAgIGV2ZW50SW5wdXQuc2VjdGlvbiA9ICd0b3AnO1xuICAgICAgfVxuXG4gICAgICBpZiAoZXZlbnQuZGF0YS5kaXJlY3Rpb24gPT09ICduZXh0Jykge1xuICAgICAgICBpZiAodGhpcy5wYXJlbnQuYWN0aXZlQ2hhcHRlciArIDEgPCB0aGlzLnBhcmVudC5jaGFwdGVycy5sZW5ndGgpIHtcbiAgICAgICAgICBldmVudElucHV0LmNoYXB0ZXIgPSBgaDVwLWludGVyYWN0aXZlLWJvb2stY2hhcHRlci0ke3RoaXMucGFyZW50LmNoYXB0ZXJzW3RoaXMucGFyZW50LmFjdGl2ZUNoYXB0ZXIrMV0uaW5zdGFuY2Uuc3ViQ29udGVudElkfWA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5wYXJlbnQuaGFzU3VtbWFyeSgpICYmIHRoaXMucGFyZW50LmFjdGl2ZUNoYXB0ZXIgKyAxID09PSB0aGlzLnBhcmVudC5jaGFwdGVycy5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLnBhcmVudC50cmlnZ2VyKCd2aWV3U3VtbWFyeScsIGV2ZW50SW5wdXQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChldmVudC5kYXRhLmRpcmVjdGlvbiA9PT0gJ3ByZXYnKSB7XG4gICAgICAgIGlmICh0aGlzLnBhcmVudC5hY3RpdmVDaGFwdGVyID4gMCkge1xuICAgICAgICAgIGV2ZW50SW5wdXQuY2hhcHRlciA9IGBoNXAtaW50ZXJhY3RpdmUtYm9vay1jaGFwdGVyLSR7dGhpcy5wYXJlbnQuY2hhcHRlcnNbdGhpcy5wYXJlbnQuYWN0aXZlQ2hhcHRlci0xXS5pbnN0YW5jZS5zdWJDb250ZW50SWR9YDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGV2ZW50SW5wdXQuY2hhcHRlcikge1xuICAgICAgICB0aGlzLnBhcmVudC50cmlnZ2VyKCduZXdDaGFwdGVyJywgZXZlbnRJbnB1dCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHByb2dyZXNzIGJhci5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGNoYXB0ZXJJZCBDaGFwdGVyIElkLlxuICAgKi9cbiAgdXBkYXRlUHJvZ3Jlc3NCYXIoY2hhcHRlcikge1xuICAgIGNvbnN0IGJhcldpZHRoID0gYCR7Y2hhcHRlciAvIHRoaXMudG90YWxDaGFwdGVycyAqIDEwMH0lYDtcblxuICAgIHRoaXMucHJvZ3Jlc3NCYXIucHJvZ3Jlc3Muc3R5bGUud2lkdGggPSBiYXJXaWR0aDtcbiAgICBjb25zdCB0aXRsZSA9IHRoaXMucGFyYW1zLmExMXkucHJvZ3Jlc3NcbiAgICAgIC5yZXBsYWNlKCdAcGFnZScsIGNoYXB0ZXIpXG4gICAgICAucmVwbGFjZSgnQHRvdGFsJywgdGhpcy50b3RhbENoYXB0ZXJzKTtcbiAgICB0aGlzLnByb2dyZXNzQmFyLnByb2dyZXNzLnRpdGxlID0gdGl0bGU7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIGFyaWEgbGFiZWwgb2YgcHJvZ3Jlc3MgdGV4dFxuICAgKiBAcGFyYW0ge251bWJlcn0gY2hhcHRlcklkIEluZGV4IG9mIGNoYXB0ZXJcbiAgICovXG4gIHVwZGF0ZUExMXlQcm9ncmVzcyhjaGFwdGVySWQpIHtcbiAgICB0aGlzLnByb2dyZXNzSW5kaWNhdG9yLmhpZGRlbkJ1dFJlYWQuaW5uZXJIVE1MID0gdGhpcy5wYXJhbXMuYTExeS5wcm9ncmVzc1xuICAgICAgLnJlcGxhY2UoJ0BwYWdlJywgY2hhcHRlcklkKVxuICAgICAgLnJlcGxhY2UoJ0B0b3RhbCcsIHRoaXMudG90YWxDaGFwdGVycyk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlIHN0YXR1cyBiYXIuXG4gICAqL1xuICB1cGRhdGVTdGF0dXNCYXIoKSB7XG4gICAgY29uc3QgY3VycmVudENoYXB0ZXIgPSB0aGlzLnBhcmVudC5nZXRBY3RpdmVDaGFwdGVyKCkgKyAxO1xuXG4gICAgY29uc3QgY2hhcHRlclRpdGxlID0gdGhpcy5wYXJlbnQuY2hhcHRlcnNbY3VycmVudENoYXB0ZXIgLSAxXS50aXRsZTtcblxuICAgIHRoaXMucHJvZ3Jlc3NJbmRpY2F0b3IuY3VycmVudC5pbm5lckhUTUwgPSBjdXJyZW50Q2hhcHRlcjtcblxuICAgIHRoaXMudXBkYXRlQTExeVByb2dyZXNzKGN1cnJlbnRDaGFwdGVyKTtcbiAgICB0aGlzLnVwZGF0ZVByb2dyZXNzQmFyKGN1cnJlbnRDaGFwdGVyKTtcblxuICAgIHRoaXMuY2hhcHRlclRpdGxlLnRleHQuaW5uZXJIVE1MID0gY2hhcHRlclRpdGxlO1xuXG4gICAgdGhpcy5jaGFwdGVyVGl0bGUudGV4dC5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgY2hhcHRlclRpdGxlKTtcblxuICAgIC8vYXNzdXJlIHRoYXQgdGhlIGJ1dHRvbnMgYXJlIHZhbGlkIGluIHRlcm1zIG9mIGNoYXB0ZXIgZWRnZXNcbiAgICBpZiAodGhpcy5wYXJlbnQuYWN0aXZlQ2hhcHRlciA8PSAwKSB7XG4gICAgICB0aGlzLnNldEJ1dHRvblN0YXR1cygnUHJldmlvdXMnLCB0cnVlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLnNldEJ1dHRvblN0YXR1cygnUHJldmlvdXMnLCBmYWxzZSk7XG4gICAgfVxuICAgIGlmICgodGhpcy5wYXJlbnQuYWN0aXZlQ2hhcHRlciArIDEpID49IHRoaXMudG90YWxDaGFwdGVycykge1xuICAgICAgdGhpcy5zZXRCdXR0b25TdGF0dXMoJ05leHQnLCB0cnVlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLnNldEJ1dHRvblN0YXR1cygnTmV4dCcsIGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRkIHRyYXZlcnNhbCBidXR0b25zIGZvciBzZXF1ZW50aWFsIHRyYXZlbCAobmV4dCBhbmQgcHJldmlvdXMgY2hhcHRlcilcbiAgICovXG4gIGFkZEFycm93cygpIHtcbiAgICBjb25zdCBhY20gPSB7fTtcblxuICAgIC8vIEluaXRpYWxpemUgZWxlbWVudHNcbiAgICBhY20uYnV0dG9uUHJldmlvdXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhY20uYnV0dG9uUHJldmlvdXMuY2xhc3NMaXN0LmFkZCgnbmF2aWdhdGlvbi1idXR0b24nKTtcbiAgICBhY20uYnV0dG9uUHJldmlvdXMuY2xhc3NMaXN0LmFkZCgnaWNvbi1wcmV2aW91cycpO1xuICAgIGFjbS5idXR0b25QcmV2aW91cy5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgdGhpcy5wYXJhbXMubDEwbi5wcmV2aW91c1BhZ2UpO1xuXG4gICAgYWNtLmJ1dHRvbldyYXBwZXJQcmV2aW91cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFjbS5idXR0b25XcmFwcGVyUHJldmlvdXMuY2xhc3NMaXN0LmFkZCgnaDVwLWludGVyYWN0aXZlLWJvb2stc3RhdHVzLWFycm93Jyk7XG4gICAgYWNtLmJ1dHRvbldyYXBwZXJQcmV2aW91cy5jbGFzc0xpc3QuYWRkKCdoNXAtaW50ZXJhY3RpdmUtYm9vay1zdGF0dXMtYnV0dG9uJyk7XG4gICAgYWNtLmJ1dHRvbldyYXBwZXJQcmV2aW91cy5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy50cmlnZ2VyKCdzZXFDaGFwdGVyJywge1xuICAgICAgICBkaXJlY3Rpb246J3ByZXYnLFxuICAgICAgICB0b1RvcDogdHJ1ZVxuICAgICAgfSk7XG4gICAgfTtcbiAgICBhY20uYnV0dG9uV3JhcHBlclByZXZpb3VzLmFwcGVuZENoaWxkKGFjbS5idXR0b25QcmV2aW91cyk7XG5cbiAgICBhY20uYnV0dG9uTmV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFjbS5idXR0b25OZXh0LmNsYXNzTGlzdC5hZGQoJ25hdmlnYXRpb24tYnV0dG9uJyk7XG4gICAgYWNtLmJ1dHRvbk5leHQuY2xhc3NMaXN0LmFkZCgnaWNvbi1uZXh0Jyk7XG4gICAgYWNtLmJ1dHRvbk5leHQuc2V0QXR0cmlidXRlKCd0aXRsZScsIHRoaXMucGFyYW1zLmwxMG4ubmV4dFBhZ2UpO1xuXG4gICAgYWNtLmJ1dHRvbldyYXBwZXJOZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWNtLmJ1dHRvbldyYXBwZXJOZXh0LmNsYXNzTGlzdC5hZGQoJ2g1cC1pbnRlcmFjdGl2ZS1ib29rLXN0YXR1cy1hcnJvdycpO1xuICAgIGFjbS5idXR0b25XcmFwcGVyTmV4dC5jbGFzc0xpc3QuYWRkKCdoNXAtaW50ZXJhY3RpdmUtYm9vay1zdGF0dXMtYnV0dG9uJyk7XG4gICAgYWNtLmJ1dHRvbldyYXBwZXJOZXh0Lm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLnRyaWdnZXIoJ3NlcUNoYXB0ZXInLCB7XG4gICAgICAgIGRpcmVjdGlvbjonbmV4dCcsXG4gICAgICAgIHRvVG9wOiB0cnVlXG4gICAgICB9KTtcbiAgICB9O1xuICAgIGFjbS5idXR0b25XcmFwcGVyTmV4dC5hcHBlbmRDaGlsZChhY20uYnV0dG9uTmV4dCk7XG5cbiAgICByZXR1cm4gYWNtO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIG1lbnUgYnV0dG9uIHdoaWNoIGhpZGVzIGFuZCBzaG93cyB0aGUgbmF2aWdhdGlvbiBiYXIuXG4gICAqXG4gICAqIEByZXR1cm4ge0hUTUxFbGVtZW50fSBCdXR0b24gbm9kZS5cbiAgICovXG4gIGNyZWF0ZU1lbnVUb2dnbGVCdXR0b24oKSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdpY29uLW1lbnUnKTtcblxuICAgIGNvbnN0IGJ1dHRvbldyYXBwZXJNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnV0dG9uV3JhcHBlck1lbnUuY2xhc3NMaXN0LmFkZCgnaDVwLWludGVyYWN0aXZlLWJvb2stc3RhdHVzLW1lbnUnKTtcbiAgICBidXR0b25XcmFwcGVyTWVudS5jbGFzc0xpc3QuYWRkKCdoNXAtaW50ZXJhY3RpdmUtYm9vay1zdGF0dXMtYnV0dG9uJyk7XG4gICAgYnV0dG9uV3JhcHBlck1lbnUudGl0bGUgPSB0aGlzLnBhcmFtcy5hMTF5Lm1lbnU7XG4gICAgYnV0dG9uV3JhcHBlck1lbnUuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG4gICAgYnV0dG9uV3JhcHBlck1lbnUuc2V0QXR0cmlidXRlKCdhcmlhLWNvbnRyb2xzJywgJ2g1cC1pbnRlcmFjdGl2ZS1ib29rLW5hdmlnYXRpb24tbWVudScpO1xuXG4gICAgYnV0dG9uV3JhcHBlck1lbnUub25jbGljayA9ICgpID0+IHtcbiAgICAgIHRoaXMucGFyZW50LnRyaWdnZXIoJ3RvZ2dsZU1lbnUnKTtcbiAgICB9O1xuXG4gICAgYnV0dG9uV3JhcHBlck1lbnUuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICByZXR1cm4gYnV0dG9uV3JhcHBlck1lbnU7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgbWVudSBpcyBhY3RpdmUvb3BlblxuICAgKlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgaXNNZW51T3BlbigpIHtcbiAgICByZXR1cm4gdGhpcy5tZW51VG9nZ2xlQnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnaDVwLWludGVyYWN0aXZlLWJvb2stc3RhdHVzLW1lbnUtYWN0aXZlJyk7XG4gIH1cblxuICAvKipcbiAgICogQWRkIHByb2dyZXNzIGJhci5cbiAgICpcbiAgICogQHJldHVybiB7b2JqZWN0fSBQcm9ncmVzcyBiYXIgZWxlbWVudHMuXG4gICAqL1xuICBjcmVhdGVQcm9ncmVzc0JhcigpIHtcbiAgICBjb25zdCBwcm9ncmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2dyZXNzLmNsYXNzTGlzdC5hZGQoJ2g1cC1pbnRlcmFjdGl2ZS1ib29rLXN0YXR1cy1wcm9ncmVzc2Jhci1mcm9udCcpO1xuICAgIHByb2dyZXNzLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcblxuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2g1cC1pbnRlcmFjdGl2ZS1ib29rLXN0YXR1cy1wcm9ncmVzc2Jhci1iYWNrJyk7XG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChwcm9ncmVzcyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgd3JhcHBlcixcbiAgICAgIHByb2dyZXNzXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBwYXJhZ3JhcGggd2hpY2ggaW5kaWNhdGVzIHdoaWNoIGNoYXB0ZXIgaXMgYWN0aXZlLlxuICAgKlxuICAgKiBAcmV0dXJuIHtvYmplY3R9IENoYXB0ZXIgdGl0bGUgZWxlbWVudHMuXG4gICAqL1xuICBhZGRDaGFwdGVyVGl0bGUoKSB7XG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgdGV4dC5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuXG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnaDVwLWludGVyYWN0aXZlLWJvb2stc3RhdHVzLWNoYXB0ZXInKTtcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHRleHQpO1xuICAgIHJldHVybiB7XG4gICAgICB3cmFwcGVyLFxuICAgICAgdGV4dFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQWRkIGEgYnV0dG9uIHdoaWNoIHNjcm9sbHMgdG8gdGhlIHRvcCBvZiB0aGUgcGFnZS5cbiAgICpcbiAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9IEJ1dHRvbi5cbiAgICovXG4gIGNyZWF0ZVRvVG9wQnV0dG9uKCkge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdpY29uLXVwJyk7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25hdmlnYXRpb24tYnV0dG9uJyk7XG5cbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCdoNXAtaW50ZXJhY3RpdmUtYm9vay1zdGF0dXMtdG8tdG9wJyk7XG4gICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCdoNXAtaW50ZXJhY3RpdmUtYm9vay1zdGF0dXMtYnV0dG9uJyk7XG4gICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCdoNXAtaW50ZXJhY3RpdmUtYm9vay1zdGF0dXMtYXJyb3cnKTtcbiAgICB3cmFwcGVyLnNldEF0dHJpYnV0ZSgndGl0bGUnLCB0aGlzLnBhcmFtcy5sMTBuLm5hdmlnYXRlVG9Ub3ApO1xuICAgIHdyYXBwZXIub25jbGljayA9ICgpID0+IHtcbiAgICAgIHRoaXMucGFyZW50LnRyaWdnZXIoJ3Njcm9sbFRvVG9wJyk7XG4gICAgfTtcblxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICAgIHJldHVybiB3cmFwcGVyO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgdmlzaWJpbGl0eS5cbiAgICpcbiAgICogQHBhcmFtIHtib29sZWFufSBoaWRlIFRydWUgd2lsbCBoaWRlIHRoZSBiYXIuXG4gICAqL1xuICBzZXRWaXNpYmlsaXR5KGhpZGUpIHtcbiAgICBpZiAoaGlkZSkge1xuICAgICAgdGhpcy53cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlci1oaWRkZW4nKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLndyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnZm9vdGVyLWhpZGRlbicpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgYSBzdGF0dXMtYnV0dG9uIHdoaWNoIHNob3dzIGN1cnJlbnQgYW5kIHRvdGFsIGNoYXB0ZXJzLlxuICAgKlxuICAgKiBAcmV0dXJuIHtvYmplY3R9IFByb2dyZXNzIGVsZW1lbnRzLlxuICAgKi9cbiAgY3JlYXRlUHJvZ3Jlc3NJbmRpY2F0b3IoKSB7XG4gICAgY29uc3QgY3VycmVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjdXJyZW50LmNsYXNzTGlzdC5hZGQoJ2g1cC1pbnRlcmFjdGl2ZS1ib29rLXN0YXR1cy1wcm9ncmVzcy1udW1iZXInKTtcbiAgICBjdXJyZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuXG4gICAgY29uc3QgZGl2aWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBkaXZpZGVyLmNsYXNzTGlzdC5hZGQoJ2g1cC1pbnRlcmFjdGl2ZS1ib29rLXN0YXR1cy1wcm9ncmVzcy1kaXZpZGVyJyk7XG4gICAgZGl2aWRlci5pbm5lckhUTUwgPSAnIC8gJztcbiAgICBkaXZpZGVyLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuXG4gICAgY29uc3QgdG90YWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgdG90YWwuY2xhc3NMaXN0LmFkZCgnaDVwLWludGVyYWN0aXZlLWJvb2stc3RhdHVzLXByb2dyZXNzLW51bWJlcicpO1xuICAgIHRvdGFsLmlubmVySFRNTCA9IHRoaXMudG90YWxDaGFwdGVycztcbiAgICB0b3RhbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcblxuICAgIGNvbnN0IGhpZGRlbkJ1dFJlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaGlkZGVuQnV0UmVhZC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4tYnV0LXJlYWQnKTtcblxuICAgIGNvbnN0IHByb2dyZXNzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwcm9ncmVzc1RleHQuY2xhc3NMaXN0LmFkZCgnaDVwLWludGVyYWN0aXZlLWJvb2stc3RhdHVzLXByb2dyZXNzJyk7XG4gICAgcHJvZ3Jlc3NUZXh0LmFwcGVuZENoaWxkKGN1cnJlbnQpO1xuICAgIHByb2dyZXNzVGV4dC5hcHBlbmRDaGlsZChkaXZpZGVyKTtcbiAgICBwcm9ncmVzc1RleHQuYXBwZW5kQ2hpbGQodG90YWwpO1xuICAgIHByb2dyZXNzVGV4dC5hcHBlbmRDaGlsZChoaWRkZW5CdXRSZWFkKTtcblxuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHByb2dyZXNzVGV4dCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgd3JhcHBlcixcbiAgICAgIGN1cnJlbnQsXG4gICAgICB0b3RhbCxcbiAgICAgIGRpdmlkZXIsXG4gICAgICBwcm9ncmVzc1RleHQsXG4gICAgICBoaWRkZW5CdXRSZWFkXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFZGl0IGJ1dHRvbiBzdGF0ZSBvbiBib3RoIHRoZSB0b3AgYW5kIGJvdHRvbSBiYXIuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0YXJnZXQgUHJldiBvciBOZXh0LlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGRpc2FibGUgVHJ1ZSB3aWxsIGRpc2FibGUgdGhlIHRhcmdldCBidXR0b24uXG4gICAqL1xuICBzZXRCdXR0b25TdGF0dXModGFyZ2V0LCBkaXNhYmxlKSB7XG4gICAgaWYgKGRpc2FibGUpIHtcbiAgICAgIHRoaXMuYXJyb3dzWydidXR0b25XcmFwcGVyJyArIHRhcmdldF0uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuICAgICAgdGhpcy5hcnJvd3NbJ2J1dHRvbicgKyB0YXJnZXRdLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5hcnJvd3NbJ2J1dHRvbldyYXBwZXInICsgdGFyZ2V0XS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgICB0aGlzLmFycm93c1snYnV0dG9uJyArIHRhcmdldF0uY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQnKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyB0aGUgZnVsbHNjcmVlbiBidXR0b24uXG4gICAqXG4gICAqIEByZXR1cm5zIHtFbGVtZW50fSBUaGUgYnV0dG9uIGRvbSBlbGVtZW50XG4gICAqL1xuICBjcmVhdGVGdWxsU2NyZWVuQnV0dG9uKCkge1xuICAgIGNvbnN0IHRvZ2dsZUZ1bGxTY3JlZW4gPSAoKSA9PiB7XG4gICAgICBpZiAoSDVQLmlzRnVsbHNjcmVlbiA9PT0gdHJ1ZSkge1xuICAgICAgICBINVAuZXhpdEZ1bGxTY3JlZW4oKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBINVAuZnVsbFNjcmVlbih0aGlzLnBhcmVudC5tYWluV3JhcHBlciwgdGhpcy5wYXJlbnQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBmdWxsU2NyZWVuQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZnVsbFNjcmVlbkJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdoNXAtaW50ZXJhY3RpdmUtYm9vay1zdGF0dXMtZnVsbHNjcmVlbicpO1xuICAgIGZ1bGxTY3JlZW5CdXR0b24uY2xhc3NMaXN0LmFkZCgnaDVwLWludGVyYWN0aXZlLWJvb2stc3RhdHVzLWJ1dHRvbicpO1xuICAgIGZ1bGxTY3JlZW5CdXR0b24uY2xhc3NMaXN0LmFkZCgnaDVwLWludGVyYWN0aXZlLWJvb2stZW50ZXItZnVsbHNjcmVlbicpO1xuICAgIGZ1bGxTY3JlZW5CdXR0b24uc2V0QXR0cmlidXRlKCd0aXRsZScsIHRoaXMucGFyYW1zLmwxMG4uZnVsbHNjcmVlbik7XG4gICAgZnVsbFNjcmVlbkJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCB0aGlzLnBhcmFtcy5sMTBuLmZ1bGxzY3JlZW4pO1xuICAgIGZ1bGxTY3JlZW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVGdWxsU2NyZWVuKTtcbiAgICBmdWxsU2NyZWVuQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2tleVByZXNzJywgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQud2hpY2ggPT09IDEzIHx8IGV2ZW50LndoaWNoID09PSAzMikge1xuICAgICAgICB0b2dnbGVGdWxsU2NyZWVuKCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnBhcmVudC5vbignZW50ZXJGdWxsU2NyZWVuJywgKCkgPT4ge1xuICAgICAgdGhpcy5wYXJlbnQuaXNGdWxsc2NyZWVuID0gdHJ1ZTtcbiAgICAgIGZ1bGxTY3JlZW5CdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaDVwLWludGVyYWN0aXZlLWJvb2stZW50ZXItZnVsbHNjcmVlbicpO1xuICAgICAgZnVsbFNjcmVlbkJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdoNXAtaW50ZXJhY3RpdmUtYm9vay1leGl0LWZ1bGxzY3JlZW4nKTtcbiAgICAgIGZ1bGxTY3JlZW5CdXR0b24uc2V0QXR0cmlidXRlKCd0aXRsZScsIHRoaXMucGFyYW1zLmwxMG4uZXhpdEZ1bGxzY3JlZW4pO1xuICAgICAgZnVsbFNjcmVlbkJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCB0aGlzLnBhcmFtcy5sMTBuLmV4aXRGdWxsU2NyZWVuKTtcblxuICAgICAgdGhpcy5wYXJlbnQucGFnZUNvbnRlbnQudXBkYXRlRm9vdGVyKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnBhcmVudC5vbignZXhpdEZ1bGxTY3JlZW4nLCAoKSA9PiB7XG4gICAgICB0aGlzLnBhcmVudC5pc0Z1bGxzY3JlZW4gPSBmYWxzZTtcbiAgICAgIGZ1bGxTY3JlZW5CdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaDVwLWludGVyYWN0aXZlLWJvb2stZXhpdC1mdWxsc2NyZWVuJyk7XG4gICAgICBmdWxsU2NyZWVuQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2g1cC1pbnRlcmFjdGl2ZS1ib29rLWVudGVyLWZ1bGxzY3JlZW4nKTtcbiAgICAgIGZ1bGxTY3JlZW5CdXR0b24uc2V0QXR0cmlidXRlKCd0aXRsZScsIHRoaXMucGFyYW1zLmwxMG4uZnVsbHNjcmVlbik7XG4gICAgICBmdWxsU2NyZWVuQnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIHRoaXMucGFyYW1zLmwxMG4uZnVsbHNjcmVlbik7XG5cbiAgICAgIHRoaXMucGFyZW50LnBhZ2VDb250ZW50LnVwZGF0ZUZvb3RlcigpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZ1bGxTY3JlZW5CdXR0b247XG4gIH1cblxufVxuZXhwb3J0IGRlZmF1bHQgU3RhdHVzQmFyO1xuIiwiaW1wb3J0ICdqcXVlcnktY2lyY2xlLXByb2dyZXNzJztcblxuY2xhc3MgU3VtbWFyeSBleHRlbmRzIEg1UC5FdmVudERpc3BhdGNoZXIge1xuXG4gIC8qKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZ1xuICAgKiBAcGFyYW0ge29iamVjdH0gcGFyZW50XG4gICAqIEBwYXJhbSB7b2JqZWN0fSBwYXJhbXNcbiAgICovXG4gIGNvbnN0cnVjdG9yKGNvbmZpZywgcGFyZW50LCBjaGFwdGVycykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgdGhpcy5iZWhhdmlvdXIgPSBjb25maWcuYmVoYXZpb3VyO1xuICAgIHRoaXMubDEwbiA9IGNvbmZpZy5sMTBuO1xuICAgIHRoaXMuY2hhcHRlcnMgPSBjaGFwdGVycyB8fCBbXTtcblxuICAgIHRoaXMuc3ViQ29udGVudElkID0gJ3N1bW1hcnknO1xuICAgIHRoaXMud3JhcHBlciA9IG51bGw7XG4gICAgdGhpcy5zdW1tYXJ5TWVudUJ1dHRvbiA9IHRoaXMuY3JlYXRlU3VtbWFyeUJ1dHRvbigpO1xuXG4gICAgdGhpcy5maWx0ZXJBY3Rpb25BbGwgPSAnYWxsJztcbiAgICB0aGlzLmZpbHRlckFjdGlvblVuYW5zd2VyZWQgPSAndW5hbnN3ZXJlZCc7XG4gICAgdGhpcy5ib29rQ29tcGxldGVkID0gZmFsc2U7XG5cbiAgICBwYXJlbnQub24oJ2Jvb2tDb21wbGV0ZWQnLCBldmVudCA9PiB0aGlzLnNldEJvb2tDb21wbGV0ZShldmVudC5kYXRhLmNvbXBsZXRlZCkpO1xuICAgIHBhcmVudC5vbigndG9nZ2xlTWVudScsICgpID0+IHtcbiAgICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oNXAtaW50ZXJhY3RpdmUtYm9vay1zdW1tYXJ5LWZvb3RlcicpO1xuICAgICAgaWYgKCBmb290ZXIgJiYgdGhpcy5ib29rQ29tcGxldGVkICkge1xuICAgICAgICBpZiAoIHRoaXMucGFyZW50LmlzTWVudU9wZW4oKSApIHtcbiAgICAgICAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1vcGVuJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZm9vdGVyLmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtb3BlbicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHtib29sZWFufSBjb21wbGV0ZVxuICAgKi9cbiAgc2V0Qm9va0NvbXBsZXRlKGNvbXBsZXRlKSB7XG4gICAgbGV0IHN1bW1hcnlGb290ZXIgPSB0aGlzLnBhcmVudC5tYWluV3JhcHBlclswXS5xdWVyeVNlbGVjdG9yKCcuaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1mb290ZXInKTtcbiAgICBpZiAoICFzdW1tYXJ5Rm9vdGVyICYmIHRoaXMucGFyZW50LmlzU21hbGxTdXJmYWNlKCkpIHtcbiAgICAgIHN1bW1hcnlGb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgc3VtbWFyeUZvb3Rlci5jbGFzc0xpc3QuYWRkKCdoNXAtaW50ZXJhY3RpdmUtYm9vay1zdW1tYXJ5LWZvb3RlcicpO1xuXG4gICAgICBzdW1tYXJ5Rm9vdGVyLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlU3VtbWFyeUJ1dHRvbigpKTtcbiAgICAgIHRoaXMucGFyZW50Lm1haW5XcmFwcGVyLmFwcGVuZChzdW1tYXJ5Rm9vdGVyKTtcbiAgICB9XG4gICAgaWYgKHN1bW1hcnlGb290ZXIgJiYgY29tcGxldGUpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gc3VtbWFyeUZvb3Rlci5jbGFzc0xpc3QuYWRkKCdzaG93LWZvb3RlcicpLCAwKTtcbiAgICB9XG5cbiAgICB0aGlzLmJvb2tDb21wbGV0ZWQgPSBjb21wbGV0ZTtcbiAgICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oNXAtaW50ZXJhY3RpdmUtYm9vay1zdW1tYXJ5LW1lbnUtYnV0dG9uJykpXG4gICAgICAuZm9yRWFjaChidXR0b24gPT4gYnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1ib29rLWNvbXBsZXRlZCcsIGNvbXBsZXRlLnRvU3RyaW5nKCkpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgY2hhcHRlcnMgZm9yIHRoZSBzdW1tYXJ5XG4gICAqIEBwYXJhbSBjaGFwdGVyc1xuICAgKi9cbiAgc2V0Q2hhcHRlcnMoY2hhcHRlcnMpIHtcbiAgICB0aGlzLmNoYXB0ZXJzID0gQXJyYXkuaXNBcnJheShjaGFwdGVycykgPyBjaGFwdGVycyA6IFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZS9kaXNhYmxlIHRoZSBzdW1tYXJ5IGJ1dHRvblxuICAgKlxuICAgKiBAcGFyYW0gZGlzYWJsZWRcbiAgICovXG4gIHNldFN1bW1hcnlNZW51QnV0dG9uRGlzYWJsZWQoZGlzYWJsZWQgPSB0cnVlKSB7XG4gICAgdGhpcy5zdW1tYXJ5TWVudUJ1dHRvbi5kaXNhYmxlZCA9IGRpc2FibGVkO1xuICB9XG5cbiAgLyoqXG4gICAqIEFwcGx5IHRoZSBmaWx0ZXIgb2YgcmVzb3VyY2VzIGluIHRoZSBzdW1tYXJ5XG4gICAqXG4gICAqIEBwYXJhbSBmaWx0ZXJcbiAgICovXG4gIHNldEZpbHRlcihmaWx0ZXIpIHtcbiAgICBjb25zdCBvdmVydmlld0xpc3QgPSB0aGlzLndyYXBwZXIucXVlcnlTZWxlY3RvcignLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktb3ZlcnZpZXctbGlzdCcpO1xuICAgIGNvbnN0IHNlY3Rpb25MaXN0ID0gQXJyYXkuZnJvbShvdmVydmlld0xpc3QucXVlcnlTZWxlY3RvckFsbCgnLmg1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktb3ZlcnZpZXctc2VjdGlvbicpKTtcbiAgICBzZWN0aW9uTGlzdC5mb3JFYWNoKHNlY3Rpb24gPT4ge1xuICAgICAgc2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdoNXAtaW50ZXJhY3RpdmUtYm9vay1zdW1tYXJ5LXRvcC1zZWN0aW9uJyk7XG4gICAgICBzZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2g1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktYm90dG9tLXNlY3Rpb24nKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGVtcHR5Q29udGFpbmVyID0gb3ZlcnZpZXdMaXN0LnF1ZXJ5U2VsZWN0b3IoJy5oNXAtaW50ZXJhY3RpdmUtYm9vay1zdW1tYXJ5LW92ZXJ2aWV3LWxpc3QtZW1wdHknKTtcbiAgICBlbXB0eUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGlmIChmaWx0ZXIgPT09IHRoaXMuZmlsdGVyQWN0aW9uVW5hbnN3ZXJlZCkge1xuICAgICAgb3ZlcnZpZXdMaXN0LmNsYXNzTGlzdC5hZGQoJ2g1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktb3ZlcnZpZXctbGlzdC1vbmx5LXVuYW5zd2VyZWQnKTtcbiAgICAgIGNvbnN0IGZpbHRlcmVkU2VjdGlvbkxpc3QgPSBzZWN0aW9uTGlzdC5maWx0ZXIoc2VjdGlvbiA9PiAhc2VjdGlvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2g1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktbm8taW50ZXJhY3Rpb25zJykpO1xuICAgICAgaWYgKGZpbHRlcmVkU2VjdGlvbkxpc3QubGVuZ3RoKSB7XG4gICAgICAgIGZpbHRlcmVkU2VjdGlvbkxpc3RbMF0uY2xhc3NMaXN0LmFkZCgnaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS10b3Atc2VjdGlvbicpO1xuICAgICAgICBmaWx0ZXJlZFNlY3Rpb25MaXN0W2ZpbHRlcmVkU2VjdGlvbkxpc3QubGVuZ3RoLTFdLmNsYXNzTGlzdC5hZGQoJ2g1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktYm90dG9tLXNlY3Rpb24nKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBlbXB0eUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoZmlsdGVyID09PSB0aGlzLmZpbHRlckFjdGlvbkFsbCkge1xuICAgICAgb3ZlcnZpZXdMaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ2g1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktb3ZlcnZpZXctbGlzdC1vbmx5LXVuYW5zd2VyZWQnKTtcbiAgICB9XG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnRyaWdnZXIoJ3Jlc2l6ZScpLCAxKTtcbiAgfVxuXG4gIC8qKlxuICAgKiAgQ3JlYXRlIGEgXCJTdW1tYXJ5ICYgU3VibWl0XCIgYnV0dG9uXG4gICAqXG4gICAqIEByZXR1cm4ge0hUTUxCdXR0b25FbGVtZW50fVxuICAgKi9cbiAgY3JlYXRlU3VtbWFyeUJ1dHRvbigpIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1tZW51LWJ1dHRvbicpO1xuICAgIGJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgY29uc3QgbmV3Q2hhcHRlciA9IHtcbiAgICAgICAgaDVwYm9va2lkOiB0aGlzLnBhcmVudC5jb250ZW50SWQsXG4gICAgICAgIGNoYXB0ZXI6IGBoNXAtaW50ZXJhY3RpdmUtYm9vay1jaGFwdGVyLXN1bW1hcnlgLFxuICAgICAgICBzZWN0aW9uOiBcInRvcFwiLFxuICAgICAgfTtcbiAgICAgIHRoaXMucGFyZW50LnRyaWdnZXIoJ25ld0NoYXB0ZXInLCBuZXdDaGFwdGVyKTtcbiAgICAgIGlmICh0aGlzLnBhcmVudC5pc01lbnVPcGVuKCkgJiYgdGhpcy5wYXJlbnQuaXNTbWFsbFN1cmZhY2UoKSkge1xuICAgICAgICB0aGlzLnBhcmVudC50cmlnZ2VyKCd0b2dnbGVNZW51Jyk7XG4gICAgICB9XG4gICAgfTtcbiAgICAvL2J1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICBjb25zdCBwYXBlckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgcGFwZXJJY29uLmNsYXNzTGlzdC5hZGQoJ2g1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktaWNvbicpO1xuICAgIHBhcGVySWNvbi5jbGFzc0xpc3QuYWRkKCdpY29uLXBhcGVyJyk7XG4gICAgcGFwZXJJY29uLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCBcInRydWVcIik7XG5cbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHRleHQuY2xhc3NMaXN0LmFkZCgnaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS10ZXh0Jyk7XG4gICAgdGV4dC5pbm5lckhUTUwgPSB0aGlzLmwxMG4uc3VtbWFyeUFuZFN1Ym1pdDtcblxuICAgIGNvbnN0IGFycm93SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBhcnJvd0ljb24uY2xhc3NMaXN0LmFkZCgnaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1tZW51LWJ1dHRvbi1hcnJvdycpO1xuICAgIGFycm93SWNvbi5jbGFzc0xpc3QuYWRkKCdpY29uLXVwJyk7XG4gICAgYXJyb3dJY29uLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCBcInRydWVcIik7XG5cbiAgICBidXR0b24uYXBwZW5kQ2hpbGQocGFwZXJJY29uKTtcbiAgICBidXR0b24uYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKGFycm93SWNvbik7XG5cbiAgICByZXR1cm4gYnV0dG9uO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSB0aGUgcHJvY2VzcyBjaXJjbGVcbiAgICpcbiAgICogQHBhcmFtIHByb2dyZXNzXG4gICAqIEByZXR1cm4ge0hUTUxEaXZFbGVtZW50fVxuICAgKi9cbiAgY3JlYXRlQ2lyY2xlKHByb2dyZXNzKSB7XG4gICAgY29uc3QgY2lyY2xlUHJvZ3Jlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNpcmNsZVByb2dyZXNzLmNsYXNzTGlzdC5hZGQoJ2g1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktcHJvZ3Jlc3MtY2lyY2xlJyk7XG4gICAgY2lyY2xlUHJvZ3Jlc3Muc2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJywgcHJvZ3Jlc3MpO1xuICAgIGNpcmNsZVByb2dyZXNzLnNldEF0dHJpYnV0ZSgnZGF0YS1zdGFydC1hbmdsZScsIC1NYXRoLlBJIC8gMyk7XG4gICAgY2lyY2xlUHJvZ3Jlc3Muc2V0QXR0cmlidXRlKCdkYXRhLXRoaWNrbmVzcycsIDEzKTtcbiAgICBjaXJjbGVQcm9ncmVzcy5zZXRBdHRyaWJ1dGUoJ2RhdGEtZW1wdHktZmlsbCcsIFwicmdiYSg0NSwgMTIyLCAyMTAsIC4xKVwiKTtcbiAgICBjaXJjbGVQcm9ncmVzcy5zZXRBdHRyaWJ1dGUoJ2RhdGEtZmlsbCcsIEpTT04uc3RyaW5naWZ5KHtjb2xvcjogJyMyZDdhZDInfSkpO1xuXG4gICAgcmV0dXJuIGNpcmNsZVByb2dyZXNzO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIHByb2dyZXNzIGJveCB1c2VkIGF0IHRoZSB0b3Agb2YgdGhlIHN1bW1hcnlcbiAgICpcbiAgICogQHBhcmFtIHRpdGxlXG4gICAqIEBwYXJhbSBzbWFsbFRleHRcbiAgICogQHBhcmFtIHByb2dyZXNzQ291bnRlclxuICAgKiBAcGFyYW0gcHJvZ3Jlc3NUb3RhbFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0Fic29sdXRlVmFsdWVzXSBVc2UgYWJzb2x1dGUgdmFsdWVzIGZvciBwcm9ncmVzcyBpbnN0ZWFkIG9mIHBlcmNlbnRhZ2VcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtzbWFsbFByb2dyZXNzXSBQcm9ncmVzcyBmb3Igc21hbGwgdGV4dCBpZiBpdCBkaWZmZXJzIGZyb20gdGhlIHByb2dyZXNzIGNvdW50ZXJcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtzbWFsbFByb2dyZXNzVG90YWxdIFRvdGFsIHByb2dyZXNzIGZvciBzbWFsbCB0ZXh0IGlmIGl0IGRpZmZlcnMgZnJvbSB0aGUgdG90YWwgcHJvZ3Jlc3MgY291bnRlclxuICAgKiBAcmV0dXJuIHtIVE1MRGl2RWxlbWVudH1cbiAgICovXG4gIGNyZWF0ZVByb2dyZXNzKHRpdGxlLCBzbWFsbFRleHQsIHByb2dyZXNzQ291bnRlciwgcHJvZ3Jlc3NUb3RhbCwgaXNBYnNvbHV0ZVZhbHVlcyA9IGZhbHNlLCBzbWFsbFByb2dyZXNzLCBzbWFsbFByb2dyZXNzVG90YWwpIHtcbiAgICBjb25zdCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGhlYWRlci5pbm5lckhUTUwgPSB0aXRsZTtcblxuICAgIGNvbnN0IHByb2dyZXNzUGVyY2VudGFnZSA9IHByb2dyZXNzQ291bnRlciAqIDEwMCAvIHByb2dyZXNzVG90YWw7XG4gICAgaWYgKHNtYWxsUHJvZ3Jlc3MgPT09IHVuZGVmaW5lZCkge1xuICAgICAgc21hbGxQcm9ncmVzcyA9IHByb2dyZXNzQ291bnRlcjtcbiAgICB9XG5cbiAgICBpZiAoc21hbGxQcm9ncmVzc1RvdGFsID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHNtYWxsUHJvZ3Jlc3NUb3RhbCA9IHByb2dyZXNzVG90YWw7XG4gICAgfVxuXG4gICAgY29uc3QgcHJvZ3Jlc3NCaWdUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcHJvZ3Jlc3NCaWdUZXh0LmNsYXNzTGlzdC5hZGQoJ2g1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktcHJvZ3Jlc3Nib3gtYmlndGV4dCcpO1xuICAgIHByb2dyZXNzQmlnVGV4dC5pbm5lckhUTUwgPSBNYXRoLnJvdW5kKHByb2dyZXNzUGVyY2VudGFnZSkgKyAnJSc7XG4gICAgaWYgKGlzQWJzb2x1dGVWYWx1ZXMpIHtcbiAgICAgIGNvbnN0IHByb2dyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgcHJvZ3Jlc3MuY2xhc3NMaXN0LmFkZCgnYWJzb2x1dGUtdmFsdWUnKTtcbiAgICAgIHByb2dyZXNzLmlubmVySFRNTCA9IHByb2dyZXNzQ291bnRlcjtcblxuICAgICAgY29uc3Qgc2VwYXJhdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgc2VwYXJhdG9yLmNsYXNzTGlzdC5hZGQoJ3NlcGFyYXRvcicpO1xuICAgICAgc2VwYXJhdG9yLmlubmVySFRNTCA9ICcvJztcblxuICAgICAgY29uc3QgdG90YWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICB0b3RhbC5jbGFzc0xpc3QuYWRkKCdhYnNvbHV0ZS12YWx1ZScpO1xuICAgICAgdG90YWwuaW5uZXJIVE1MID0gcHJvZ3Jlc3NUb3RhbDtcblxuICAgICAgcHJvZ3Jlc3NCaWdUZXh0LmlubmVySFRNTCA9ICcnO1xuICAgICAgcHJvZ3Jlc3NCaWdUZXh0LmFwcGVuZENoaWxkKHByb2dyZXNzKTtcbiAgICAgIHByb2dyZXNzQmlnVGV4dC5hcHBlbmRDaGlsZChzZXBhcmF0b3IpO1xuICAgICAgcHJvZ3Jlc3NCaWdUZXh0LmFwcGVuZENoaWxkKHRvdGFsKTtcbiAgICB9XG5cbiAgICBjb25zdCBwcm9ncmVzc1NtYWxsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHByb2dyZXNzU21hbGxUZXh0LmNsYXNzTGlzdC5hZGQoJ2g1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktcHJvZ3Jlc3Nib3gtc21hbGx0ZXh0Jyk7XG4gICAgcHJvZ3Jlc3NTbWFsbFRleHQuaW5uZXJIVE1MID0gc21hbGxUZXh0LnJlcGxhY2UoJ0Bjb3VudCcsIHNtYWxsUHJvZ3Jlc3MpLnJlcGxhY2UoJ0B0b3RhbCcsIHNtYWxsUHJvZ3Jlc3NUb3RhbCk7XG5cbiAgICBib3guYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBib3guYXBwZW5kQ2hpbGQocHJvZ3Jlc3NCaWdUZXh0KTtcbiAgICBib3guYXBwZW5kQ2hpbGQocHJvZ3Jlc3NTbWFsbFRleHQpO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYm94KTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVDaXJjbGUocHJvZ3Jlc3NDb3VudGVyL3Byb2dyZXNzVG90YWwpKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIHRvdGFsIHNjb3JlIHByb2dyZXNzIGNvbnRhaW5lclxuICAgKlxuICAgKiBAcmV0dXJucyB7SFRNTERpdkVsZW1lbnR9XG4gICAqL1xuICBhZGRTY29yZVByb2dyZXNzKCkge1xuICAgIGxldCB0b3RhbEludGVyYWN0aW9ucyA9IDAsIHVuY29tcGxldGVkSW50ZXJhY3Rpb25zID0gMDtcbiAgICBmb3IgKGNvbnN0IGNoYXB0ZXIgb2YgdGhpcy5jaGFwdGVycykge1xuICAgICAgdG90YWxJbnRlcmFjdGlvbnMgKz0gY2hhcHRlci5tYXhUYXNrcztcbiAgICAgIHVuY29tcGxldGVkSW50ZXJhY3Rpb25zICs9IGNoYXB0ZXIudGFza3NMZWZ0O1xuICAgIH1cblxuICAgIGNvbnN0IGJveCA9IHRoaXMuY3JlYXRlUHJvZ3Jlc3MoXG4gICAgICB0aGlzLmwxMG4udG90YWxTY29yZUxhYmVsLFxuICAgICAgdGhpcy5sMTBuLmludGVyYWN0aW9uc1Byb2dyZXNzU3VidGV4dCxcbiAgICAgIHRoaXMucGFyZW50LmdldFNjb3JlKCksXG4gICAgICB0aGlzLnBhcmVudC5nZXRNYXhTY29yZSgpLFxuICAgICAgdHJ1ZSxcbiAgICAgIE1hdGgubWF4KHRvdGFsSW50ZXJhY3Rpb25zIC0gdW5jb21wbGV0ZWRJbnRlcmFjdGlvbnMsIDApLFxuICAgICAgdG90YWxJbnRlcmFjdGlvbnNcbiAgICApO1xuICAgIGJveC5jbGFzc0xpc3QuYWRkKCdoNXAtaW50ZXJhY3RpdmUtYm9vay1zdW1tYXJ5LXByb2dyZXNzLWNvbnRhaW5lcicpO1xuICAgIGJveC5jbGFzc0xpc3QuYWRkKCdoNXAtaW50ZXJhY3RpdmUtYm9vay1zdW1tYXJ5LXNjb3JlLXByb2dyZXNzJyk7XG4gICAgY29uc3QgY2lyY2xlID0gYm94LnF1ZXJ5U2VsZWN0b3IoJy5oNXAtaW50ZXJhY3RpdmUtYm9vay1zdW1tYXJ5LXByb2dyZXNzLWNpcmNsZScpO1xuICAgIGNpcmNsZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtZW1wdHktZmlsbCcsIFwicmdiKDE5OCwgMjIwLCAyMTIpXCIpO1xuICAgIGNpcmNsZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtZmlsbCcsIEpTT04uc3RyaW5naWZ5KHtjb2xvcjogJyMwZTdjNTcnfSkpO1xuXG4gICAgcmV0dXJuIGJveDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIHRoZSBib29rIHByb2dyZXNzIGNvbnRhaW5lclxuICAgKlxuICAgKiBAcmV0dXJuIHtIVE1MRGl2RWxlbWVudH1cbiAgICovXG4gIGFkZEJvb2tQcm9ncmVzcygpIHtcbiAgICBjb25zdCBib3ggPSB0aGlzLmNyZWF0ZVByb2dyZXNzKHRoaXMubDEwbi5ib29rUHJvZ3Jlc3MsIHRoaXMubDEwbi5ib29rUHJvZ3Jlc3NTdWJ0ZXh0LCB0aGlzLmNoYXB0ZXJzLmZpbHRlcihjaGFwdGVyID0+IGNoYXB0ZXIuY29tcGxldGVkKS5sZW5ndGgsIHRoaXMuY2hhcHRlcnMubGVuZ3RoKTtcbiAgICBib3guY2xhc3NMaXN0LmFkZChcImg1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktcHJvZ3Jlc3MtY29udGFpbmVyXCIpO1xuICAgIGJveC5jbGFzc0xpc3QuYWRkKFwiaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1ib29rLXByb2dyZXNzXCIpO1xuICAgIHJldHVybiBib3g7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyB0aGUgaW50ZXJhY3Rpb25zIHByb2dyZXNzIGNvbnRhaW5lclxuICAgKlxuICAgKiBAcmV0dXJuIHtIVE1MRGl2RWxlbWVudH1cbiAgICovXG4gIGFkZEludGVyYWN0aW9uc1Byb2dyZXNzKCkge1xuICAgIGxldCB0b3RhbEludGVyYWN0aW9ucyA9IDAsIHVuY29tcGxldGVkSW50ZXJhY3Rpb25zID0gMDtcbiAgICBmb3IgKGNvbnN0IGNoYXB0ZXIgb2YgdGhpcy5jaGFwdGVycykge1xuICAgICAgdG90YWxJbnRlcmFjdGlvbnMgKz0gY2hhcHRlci5tYXhUYXNrcztcbiAgICAgIHVuY29tcGxldGVkSW50ZXJhY3Rpb25zICs9IGNoYXB0ZXIudGFza3NMZWZ0O1xuICAgIH1cbiAgICBjb25zdCBib3ggPSB0aGlzLmNyZWF0ZVByb2dyZXNzKHRoaXMubDEwbi5pbnRlcmFjdGlvbnNQcm9ncmVzcywgdGhpcy5sMTBuLmludGVyYWN0aW9uc1Byb2dyZXNzU3VidGV4dCwgTWF0aC5tYXgodG90YWxJbnRlcmFjdGlvbnMgLSB1bmNvbXBsZXRlZEludGVyYWN0aW9ucywgMCksIHRvdGFsSW50ZXJhY3Rpb25zKTtcbiAgICBib3guY2xhc3NMaXN0LmFkZChcImg1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktcHJvZ3Jlc3MtY29udGFpbmVyXCIpO1xuICAgIGJveC5jbGFzc0xpc3QuYWRkKFwiaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1pbnRlcmFjdGlvbnMtcHJvZ3Jlc3NcIik7XG4gICAgcmV0dXJuIGJveDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHcm91cGluZyBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgYWxsIHRoZSBwcm9ncmVzcyBjb250YWluZXJzLCBpZiB0aGUgc2V0dGluZ3MgYWxsb3cgaXRcbiAgICovXG4gIGFkZFByb2dyZXNzSW5kaWNhdG9ycygpIHtcbiAgICBpZiAoIXRoaXMuYmVoYXZpb3VyLnByb2dyZXNzSW5kaWNhdG9ycykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBwcm9ncmVzc0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvZ3Jlc3NCb3guY2xhc3NMaXN0LmFkZCgnaDVwLWludGVyYWN0aXZlLWJveC1zdW1tYXJ5LXByb2dyZXNzJyk7XG4gICAgcHJvZ3Jlc3NCb3guYXBwZW5kQ2hpbGQodGhpcy5hZGRTY29yZVByb2dyZXNzKCkpO1xuICAgIHByb2dyZXNzQm94LmFwcGVuZENoaWxkKHRoaXMuYWRkQm9va1Byb2dyZXNzKCkpO1xuICAgIHByb2dyZXNzQm94LmFwcGVuZENoaWxkKHRoaXMuYWRkSW50ZXJhY3Rpb25zUHJvZ3Jlc3MoKSk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IEg1UC5qUXVlcnkoJy5oNXAtaW50ZXJhY3RpdmUtYm9vay1zdW1tYXJ5LXByb2dyZXNzLWNpcmNsZScpLmNpcmNsZVByb2dyZXNzKCksIDEwMCk7XG4gICAgdGhpcy53cmFwcGVyLmFwcGVuZENoaWxkKHByb2dyZXNzQm94KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgdGhlIGNvbnRhaW5lciB3aXRoIHRoZSBhY3Rpb24gYnV0dG9uc1xuICAgKi9cbiAgYWRkQWN0aW9uQnV0dG9ucygpIHtcbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2g1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktYnV0dG9ucycpO1xuXG4gICAgaWYgKEg1UEludGVncmF0aW9uLnJlcG9ydGluZ0lzRW5hYmxlZCkge1xuICAgICAgY29uc3Qgc3VibWl0QnV0dG9uID0gdGhpcy5hZGRCdXR0b24oJ2ljb24tcGFwZXItcGVuY2lsJywgdGhpcy5sMTBuLnN1Ym1pdFJlcG9ydCk7XG4gICAgICBzdWJtaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1zdWJtaXQnKTtcbiAgICAgIHN1Ym1pdEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnRyaWdnZXIoJ3N1Ym1pdHRlZCcpO1xuICAgICAgICB0aGlzLnBhcmVudC50cmlnZ2VyWEFQSVNjb3JlZCh0aGlzLnBhcmVudC5nZXRTY29yZSgpLCB0aGlzLnBhcmVudC5nZXRNYXhTY29yZSgpLCAnY29tcGxldGVkJyk7XG4gICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnc3VibWl0dGVkJyk7XG4gICAgICB9O1xuICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xuICAgIH1cbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlUmVzdGFydEJ1dHRvbigpKTtcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlU3VibWl0dGVkQ29uZmlybWF0aW9uKCkpO1xuXG4gICAgdGhpcy53cmFwcGVyLmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSB0aGUgcmVzdGFydCBidXR0b25cbiAgICogQHJldHVybiB7SFRNTEJ1dHRvbkVsZW1lbnR9XG4gICAqL1xuICBjcmVhdGVSZXN0YXJ0QnV0dG9uKCkge1xuICAgIGNvbnN0IHJlc3RhcnRCdXR0b24gPSB0aGlzLmFkZEJ1dHRvbignaWNvbi1yZXN0YXJ0JywgdGhpcy5sMTBuLnJlc3RhcnRMYWJlbCk7XG4gICAgcmVzdGFydEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdoNXAtaW50ZXJhY3RpdmUtYm9vay1zdW1tYXJ5LXJlc3RhcnQnKTtcbiAgICByZXN0YXJ0QnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB0aGlzLnBhcmVudC5yZXNldFRhc2soKTtcbiAgICByZXR1cm4gcmVzdGFydEJ1dHRvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgdGhlIGNvbmZpcm1hdGlvbiBib3ggZGlzcGxheWVkIGFmdGVyIHRoZSB1c2VyIHN1Ym1pdHMgdGhlIHJlcG9ydFxuICAgKiBAcmV0dXJuIHtIVE1MRGl2RWxlbWVudH1cbiAgICovXG4gIGNyZWF0ZVN1Ym1pdHRlZENvbmZpcm1hdGlvbigpIHtcbiAgICBjb25zdCBzdWJtaXR0ZWRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHN1Ym1pdHRlZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoNXAtaW50ZXJhY3RpdmUtYm9vay1zdW1tYXJ5LXN1Ym1pdHRlZCcpO1xuXG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGljb24uY2xhc3NMaXN0LmFkZCgnaWNvbi1jaGFwdGVyLWRvbmUnKTtcbiAgICBpY29uLmNsYXNzTGlzdC5hZGQoJ2ljb24tY2hlY2stbWFyaycpO1xuICAgIHN1Ym1pdHRlZENvbnRhaW5lci5hcHBlbmRDaGlsZChpY29uKTtcblxuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0ZXh0LmlubmVySFRNTCA9IHRoaXMubDEwbi55b3VyQW5zd2Vyc0FyZVN1Ym1pdHRlZEZvclJldmlldztcbiAgICBzdWJtaXR0ZWRDb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dCk7XG5cbiAgICBzdWJtaXR0ZWRDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVSZXN0YXJ0QnV0dG9uKCkpO1xuXG4gICAgcmV0dXJuIHN1Ym1pdHRlZENvbnRhaW5lcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiB0byBjcmVhdGUgdGhlIGFjdHVhbCBidXR0b24gZWxlbWVudCB1c2VkIGZvciB0aGUgYWN0aW9uIGJ1dHRvbnNcbiAgICpcbiAgICogQHBhcmFtIGljb25DbGFzc1xuICAgKiBAcGFyYW0gbGFiZWxcbiAgICogQHJldHVybiB7SFRNTEJ1dHRvbkVsZW1lbnR9XG4gICAqL1xuICBhZGRCdXR0b24oaWNvbkNsYXNzLCBsYWJlbCkge1xuICAgIGNvbnN0IGJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbkVsZW1lbnQudHlwZSA9ICdidXR0b24nO1xuICAgIGJ1dHRvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1idXR0b24nKTtcbiAgICBidXR0b25FbGVtZW50LmlubmVySFRNTCA9IGxhYmVsO1xuXG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGljb24uY2xhc3NMaXN0LmFkZChpY29uQ2xhc3MpO1xuICAgIGljb24uc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsIFwidHJ1ZVwiKTtcbiAgICBidXR0b25FbGVtZW50LmFwcGVuZENoaWxkKGljb24pO1xuXG4gICAgcmV0dXJuIGJ1dHRvbkVsZW1lbnQ7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIHRoZSBvdmVydmlldyBvZiB0aGUgc2VjdGlvbnNcbiAgICpcbiAgICogQHBhcmFtIHNlY3Rpb25zXG4gICAqIEBwYXJhbSBjaGFwdGVySWRcbiAgICogQHJldHVybiB7e2hhc1VuYW5zd2VyZWRJbnRlcmFjdGlvbnM6IGJvb2xlYW4sIHNlY3Rpb25FbGVtZW50czogW119fVxuICAgKi9cbiAgY3JlYXRlU2VjdGlvbkxpc3Qoc2VjdGlvbnMsIGNoYXB0ZXJJZCkge1xuICAgIGxldCBzZWN0aW9uRWxlbWVudHMgPSBbXSwgaGFzVW5hbnN3ZXJlZEludGVyYWN0aW9ucyA9IGZhbHNlO1xuICAgIGZvciAoY29uc3Qgc2VjdGlvbiBvZiBzZWN0aW9ucykge1xuICAgICAgY29uc3Qgc2VjdGlvblJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgIHNlY3Rpb25Sb3cuY2xhc3NMaXN0LmFkZCgnaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1vdmVydmlldy1zZWN0aW9uLWRldGFpbHMnKTtcbiAgICAgIGlmICh0aGlzLmJlaGF2aW91ci5wcm9ncmVzc0luZGljYXRvcnMpIHtcbiAgICAgICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICBpY29uLmNsYXNzTGlzdC5hZGQoJ2g1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktc2VjdGlvbi1pY29uJyk7XG4gICAgICAgIGljb24uY2xhc3NMaXN0LmFkZChzZWN0aW9uLnRhc2tEb25lID8gJ2ljb24tY2hhcHRlci1kb25lJyA6ICdpY29uLWNoYXB0ZXItYmxhbmsnKTtcbiAgICAgICAgc2VjdGlvblJvdy5hcHBlbmRDaGlsZChpY29uKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgdGl0bGUudHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdoNXAtaW50ZXJhY3RpdmUtYm9vay1zdW1tYXJ5LXNlY3Rpb24tdGl0bGUnKTtcbiAgICAgIHRpdGxlLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0NoYXB0ZXIgPSB7XG4gICAgICAgICAgaDVwYm9va2lkOiB0aGlzLnBhcmVudC5jb250ZW50SWQsXG4gICAgICAgICAgY2hhcHRlcjogYGg1cC1pbnRlcmFjdGl2ZS1ib29rLWNoYXB0ZXItJHtjaGFwdGVySWR9YCxcbiAgICAgICAgICBzZWN0aW9uOiBgaDVwLWludGVyYWN0aXZlLWJvb2stc2VjdGlvbi0ke3NlY3Rpb24uaW5zdGFuY2Uuc3ViQ29udGVudElkfWAsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucGFyZW50LnRyaWdnZXIoXCJuZXdDaGFwdGVyXCIsIG5ld0NoYXB0ZXIpO1xuICAgICAgfTtcblxuICAgICAgLy8gV2UgY2FuJ3QgZXhwZWN0IHRoZSBjb250ZW50IHR5cGUgdG8gYWx3YXlzIGhhdmUgc2V0IGNvbnRlbnREYXRhIGFzIGEgcHJvcGVydHkgb24gdGhlaXIgaW5zdGFuY2VcbiAgICAgIGNvbnN0IGNvbnRlbnREYXRhVGl0bGUgPSBzZWN0aW9uLmluc3RhbmNlLmNvbnRlbnREYXRhXG4gICAgICAgICYmIHNlY3Rpb24uaW5zdGFuY2UuY29udGVudERhdGEubWV0YWRhdGFcbiAgICAgICAgJiYgc2VjdGlvbi5pbnN0YW5jZS5jb250ZW50RGF0YS5tZXRhZGF0YS50aXRsZTtcbiAgICAgIC8vIFRyeSB0byBnZXQgdGl0bGUgZnJvbSBwYXJhbXNcbiAgICAgIGNvbnN0IG1ldGFkYXRhVGl0bGUgPSBzZWN0aW9uLmNvbnRlbnRcbiAgICAgICAgJiYgc2VjdGlvbi5jb250ZW50Lm1ldGFkYXRhXG4gICAgICAgICYmIHNlY3Rpb24uY29udGVudC5tZXRhZGF0YS50aXRsZTtcbiAgICAgIHRpdGxlLmlubmVySFRNTCA9IGNvbnRlbnREYXRhVGl0bGUgPyBjb250ZW50RGF0YVRpdGxlXG4gICAgICAgIDogbWV0YWRhdGFUaXRsZSA/IG1ldGFkYXRhVGl0bGUgOiAnVW50aXRsZWQnO1xuXG4gICAgICBjb25zdCBzY29yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBzY29yZS5jbGFzc0xpc3QuYWRkKCdoNXAtaW50ZXJhY3RpdmUtYm9vay1zdW1tYXJ5LXNlY3Rpb24tc2NvcmUnKTtcbiAgICAgIHNjb3JlLmlubmVySFRNTCA9ICctJztcbiAgICAgIGlmICggdHlwZW9mIHNlY3Rpb24uaW5zdGFuY2UuZ2V0U2NvcmUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgc2NvcmUuaW5uZXJIVE1MID0gdGhpcy5sMTBuLnNjb3JlVGV4dC5yZXBsYWNlKCdAc2NvcmUnLCBzZWN0aW9uLmluc3RhbmNlLmdldFNjb3JlKCkpLnJlcGxhY2UoJ0BtYXhzY29yZScsIHNlY3Rpb24uaW5zdGFuY2UuZ2V0TWF4U2NvcmUoKSk7XG4gICAgICB9XG5cbiAgICAgIGlmICggc2VjdGlvbi50YXNrRG9uZSkge1xuICAgICAgICBzZWN0aW9uUm93LmNsYXNzTGlzdC5hZGQoJ2g1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktb3ZlcnZpZXctc2VjdGlvbi1kZXRhaWxzLXRhc2stZG9uZScpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGhhc1VuYW5zd2VyZWRJbnRlcmFjdGlvbnMgPSB0cnVlO1xuICAgICAgfVxuICAgICAgc2VjdGlvblJvdy5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICBzZWN0aW9uUm93LmFwcGVuZENoaWxkKHNjb3JlKTtcbiAgICAgIHNlY3Rpb25FbGVtZW50cy5wdXNoKHNlY3Rpb25Sb3cpO1xuICAgIH1cbiAgICBpZiAoIHNlY3Rpb25FbGVtZW50cy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IHNlY3Rpb25Sb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgc2VjdGlvblJvdy5jbGFzc0xpc3QuYWRkKCdoNXAtaW50ZXJhY3RpdmUtYm9vay1zdW1tYXJ5LW92ZXJ2aWV3LXNlY3Rpb24tc2NvcmUtaGVhZGVyJyk7XG4gICAgICBjb25zdCBzY29yZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBzY29yZUhlYWRlci5pbm5lckhUTUwgPSB0aGlzLmwxMG4uc2NvcmU7XG4gICAgICBzZWN0aW9uUm93LmFwcGVuZENoaWxkKHNjb3JlSGVhZGVyKTtcbiAgICAgIHNlY3Rpb25FbGVtZW50cy51bnNoaWZ0KHNlY3Rpb25Sb3cpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgaGFzVW5hbnN3ZXJlZEludGVyYWN0aW9ucyxcbiAgICAgIHNlY3Rpb25FbGVtZW50c1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIHRoZSBjaGFwdGVyIHByb2dyZXNzIGNvbnRhaW5lclxuICAgKlxuICAgKiBAcGFyYW0gY2hhcHRlclxuICAgKiBAcmV0dXJuIHtIVE1MTElFbGVtZW50fVxuICAgKi9cbiAgY3JlYXRlQ2hhcHRlck92ZXJ2aWV3KGNoYXB0ZXIpIHtcbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1vdmVydmlldy1zZWN0aW9uJyk7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICAgIGhlYWRlci5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgY29uc3QgbmV3Q2hhcHRlciA9IHtcbiAgICAgICAgaDVwYm9va2lkOiB0aGlzLnBhcmVudC5jb250ZW50SWQsXG4gICAgICAgIGNoYXB0ZXI6IGBoNXAtaW50ZXJhY3RpdmUtYm9vay1jaGFwdGVyLSR7Y2hhcHRlci5pbnN0YW5jZS5zdWJDb250ZW50SWR9YCxcbiAgICAgICAgc2VjdGlvbjogYHRvcGAsXG4gICAgICB9O1xuICAgICAgdGhpcy5wYXJlbnQudHJpZ2dlcihcIm5ld0NoYXB0ZXJcIiwgbmV3Q2hhcHRlcik7XG5cbiAgICB9O1xuXG4gICAgY29uc3QgY2hhcHRlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgY2hhcHRlclRpdGxlLmlubmVySFRNTCA9IGNoYXB0ZXIudGl0bGU7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGNoYXB0ZXJUaXRsZSk7XG5cbiAgICBpZiAodGhpcy5iZWhhdmlvdXIucHJvZ3Jlc3NJbmRpY2F0b3JzKSB7XG4gICAgICBjb25zdCBjaGFwdGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgY29uc3QgY2hhcHRlclN0YXR1cyA9IHRoaXMucGFyZW50LmdldENoYXB0ZXJTdGF0dXMoY2hhcHRlcik7XG4gICAgICBjaGFwdGVySWNvbi5jbGFzc0xpc3QuYWRkKGBpY29uLWNoYXB0ZXItJHtjaGFwdGVyU3RhdHVzLnRvTG93ZXJDYXNlKCl9YCk7XG4gICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoY2hhcHRlckljb24pO1xuICAgIH1cblxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgIGxldCB7XG4gICAgICBzZWN0aW9uRWxlbWVudHM6IHNlY3Rpb25zLFxuICAgICAgaGFzVW5hbnN3ZXJlZEludGVyYWN0aW9uc1xuICAgIH0gPSB0aGlzLmNyZWF0ZVNlY3Rpb25MaXN0KGNoYXB0ZXIuc2VjdGlvbnMuZmlsdGVyKHNlY3Rpb24gPT4gc2VjdGlvbi5pc1Rhc2spLCBjaGFwdGVyLmluc3RhbmNlLnN1YkNvbnRlbnRJZCk7XG5cbiAgICBpZiAoIGhhc1VuYW5zd2VyZWRJbnRlcmFjdGlvbnMgPT09IGZhbHNlKSB7XG4gICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2g1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktbm8taW50ZXJhY3Rpb25zJyk7XG4gICAgfVxuICAgIGNvbnN0IHNlY3Rpb25TdWJoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNlY3Rpb25TdWJoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1jaGFwdGVyLXN1YmhlYWRlcicpO1xuICAgIGlmICggY2hhcHRlci5tYXhUYXNrcyApIHtcbiAgICAgIHNlY3Rpb25TdWJoZWFkZXIuaW5uZXJIVE1MID0gdGhpcy5sMTBuLmxlZnRPdXRPZlRvdGFsQ29tcGxldGVkLnJlcGxhY2UoJ0BsZWZ0JywgTWF0aC5tYXgoY2hhcHRlci5tYXhUYXNrcyAtIGNoYXB0ZXIudGFza3NMZWZ0LCAwKSkucmVwbGFjZSgnQG1heCcsIGNoYXB0ZXIubWF4VGFza3MpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHNlY3Rpb25TdWJoZWFkZXIuaW5uZXJIVE1MID0gdGhpcy5sMTBuLm5vSW50ZXJhY3Rpb25zO1xuICAgIH1cblxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoc2VjdGlvblN1YmhlYWRlcik7XG5cbiAgICBjb25zdCBzZWN0aW9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICBpZiAoIHNlY3Rpb25zLmxlbmd0aCApIHtcbiAgICAgIHNlY3Rpb25zLm1hcChzZWN0aW9uID0+IHNlY3Rpb25zQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlY3Rpb24pKTtcbiAgICB9XG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChzZWN0aW9uc0NvbnRhaW5lcik7XG5cbiAgICByZXR1cm4gd3JhcHBlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgdGhlIGRyb3Bkb3duIG1lbnUgdG8gZmlsdGVyIHNlY3Rpb25zIGJ5IGludGVyYWN0aW9uc1xuICAgKlxuICAgKiBAcmV0dXJuIHtIVE1MRGl2RWxlbWVudH1cbiAgICovXG4gIGNyZWF0ZUZpbHRlckRyb3Bkb3duKCkge1xuICAgIGNvbnN0IGNyZWF0ZUVsZW1lbnQgPSAodGV4dCwgdmFsdWUpICA9PiB7XG4gICAgICBjb25zdCBsaXN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgIGxpc3RFbGVtZW50LnJvbGUgPSBcIm1lbnVpdGVtXCI7XG5cbiAgICAgIGNvbnN0IGFjdGlvbkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBhY3Rpb25CdXR0b24udGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgICAgYWN0aW9uQnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgICAgYWN0aW9uQnV0dG9uLm9uY2xpY2sgPSBldmVudCA9PiB7XG4gICAgICAgIHRoaXMuc2V0RmlsdGVyKHZhbHVlKTtcbiAgICAgICAgY29udGFpbmVyLnJlbW92ZUF0dHJpYnV0ZSgnYWN0aXZlJyk7XG4gICAgICAgIHNlbGVjdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBcImZhbHNlXCIpO1xuICAgICAgICBidXR0b25UZXh0LnRleHRDb250ZW50ID0gZXZlbnQuY3VycmVudFRhcmdldC5pbm5lckhUTUw7XG4gICAgICB9O1xuICAgICAgbGlzdEVsZW1lbnQuYXBwZW5kQ2hpbGQoYWN0aW9uQnV0dG9uKTtcbiAgICAgIHJldHVybiBsaXN0RWxlbWVudDtcbiAgICB9O1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1kcm9wZG93bicpO1xuXG4gICAgY29uc3Qgc2VsZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBzZWxlY3RCdXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWhhc3BvcHVwJywgXCJ0cnVlXCIpO1xuICAgIHNlbGVjdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBcImZhbHNlXCIpO1xuICAgIHNlbGVjdEJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgc2VsZWN0QnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBpZiAoY29udGFpbmVyLmhhc0F0dHJpYnV0ZSgnYWN0aXZlJykpIHtcbiAgICAgICAgY29udGFpbmVyLnJlbW92ZUF0dHJpYnV0ZSgnYWN0aXZlJyk7XG4gICAgICAgIHNlbGVjdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBcImZhbHNlXCIpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2FjdGl2ZScsIFwiXCIpO1xuICAgICAgICBzZWxlY3RCdXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgXCJ0cnVlXCIpO1xuICAgICAgICBzZWxlY3RCdXR0b24uZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgYnV0dG9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGJ1dHRvblRleHQudGV4dENvbnRlbnQgPSB0aGlzLmwxMG4uYWxsSW50ZXJhY3Rpb25zO1xuICAgIHNlbGVjdEJ1dHRvbi5hcHBlbmRDaGlsZChidXR0b25UZXh0KTtcblxuICAgIGNvbnN0IGNhcmV0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGNhcmV0SWNvbi5jbGFzc0xpc3QuYWRkKCdoNXAtaW50ZXJhY3RpdmUtYm9vay1zdW1tYXJ5LWRyb3Bkb3duLWljb24nKTtcbiAgICBjYXJldEljb24uY2xhc3NMaXN0LmFkZCgnaWNvbi1leHBhbmRlZCcpO1xuICAgIGNhcmV0SWNvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgXCJ0cnVlXCIpO1xuICAgIHNlbGVjdEJ1dHRvbi5hcHBlbmRDaGlsZChjYXJldEljb24pO1xuXG4gICAgY29uc3QgZHJvcGRvd25NZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIGRyb3Bkb3duTWVudS5yb2xlID0gXCJtZW51XCI7XG4gICAgZHJvcGRvd25NZW51LmNsYXNzTGlzdC5hZGQoJ2g1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktZHJvcGRvd24tbWVudScpO1xuXG4gICAgY29uc3QgYWxsSW50ZXJhY3Rpb25zID0gY3JlYXRlRWxlbWVudCh0aGlzLmwxMG4uYWxsSW50ZXJhY3Rpb25zLCB0aGlzLmZpbHRlckFjdGlvbkFsbCk7XG4gICAgY29uc3QgdW5hbnN3ZXJlZEludGVyYWN0aW9ucyA9IGNyZWF0ZUVsZW1lbnQodGhpcy5sMTBuLnVuYW5zd2VyZWRJbnRlcmFjdGlvbnMsIHRoaXMuZmlsdGVyQWN0aW9uVW5hbnN3ZXJlZCk7XG4gICAgZHJvcGRvd25NZW51LmFwcGVuZENoaWxkKGFsbEludGVyYWN0aW9ucyk7XG4gICAgZHJvcGRvd25NZW51LmFwcGVuZENoaWxkKHVuYW5zd2VyZWRJbnRlcmFjdGlvbnMpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNlbGVjdEJ1dHRvbik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRyb3Bkb3duTWVudSk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCB0aGUgY29udGFpbmVyIGZvciB0aGUgbGlzdCBvZiBjaGFwdGVycyBhbmQgc2VjdGlvbnNcbiAgICovXG4gIGFkZFN1bW1hcnlPdmVydmlldygpIHtcbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1saXN0Jyk7XG4gICAgY29uc3Qgc3VtbWFyeUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBzdW1tYXJ5SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2g1cC1pbnRlcmFjdGl2ZS1ib29rLXN1bW1hcnktb3ZlcnZpZXctaGVhZGVyJyk7XG5cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgaGVhZGVyLmlubmVySFRNTCA9IHRoaXMubDEwbi5zdW1tYXJ5SGVhZGVyO1xuXG4gICAgc3VtbWFyeUhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIHN1bW1hcnlIZWFkZXIuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVGaWx0ZXJEcm9wZG93bigpKTtcblxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoc3VtbWFyeUhlYWRlcik7XG5cbiAgICBjb25zdCBzdW1tYXJ5TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvbFwiKTtcbiAgICBzdW1tYXJ5TGlzdC5jbGFzc0xpc3QuYWRkKCdoNXAtaW50ZXJhY3RpdmUtYm9vay1zdW1tYXJ5LW92ZXJ2aWV3LWxpc3QnKTtcbiAgICBmb3IgKCBjb25zdCBjaGFwdGVyIG9mIHRoaXMuY2hhcHRlcnMpIHtcbiAgICAgIHN1bW1hcnlMaXN0LmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlQ2hhcHRlck92ZXJ2aWV3KGNoYXB0ZXIpKTtcbiAgICB9XG4gICAgY29uc3QgZW1wdHlTdW1tYXJ5TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGVtcHR5U3VtbWFyeUxpc3QuY2xhc3NMaXN0LmFkZCgnaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1vdmVydmlldy1saXN0LWVtcHR5Jyk7XG4gICAgZW1wdHlTdW1tYXJ5TGlzdC5jbGFzc0xpc3QuYWRkKCdoNXAtaW50ZXJhY3RpdmUtYm9vay1zdW1tYXJ5LXRvcC1zZWN0aW9uJyk7XG4gICAgZW1wdHlTdW1tYXJ5TGlzdC5jbGFzc0xpc3QuYWRkKCdoNXAtaW50ZXJhY3RpdmUtYm9vay1zdW1tYXJ5LWJvdHRvbS1zZWN0aW9uJyk7XG4gICAgZW1wdHlTdW1tYXJ5TGlzdC5pbm5lckhUTUwgPSB0aGlzLmwxMG4ubm9JbnRlcmFjdGlvbnM7XG4gICAgc3VtbWFyeUxpc3QuYXBwZW5kQ2hpbGQoZW1wdHlTdW1tYXJ5TGlzdCk7XG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChzdW1tYXJ5TGlzdCk7XG5cbiAgICB0aGlzLndyYXBwZXIuYXBwZW5kQ2hpbGQod3JhcHBlcik7XG4gIH1cblxuICAvKipcbiAgICogQWRkIHRoZSBzY29yZSBiYXIgZm9yIHRoZSBib29rXG4gICAqL1xuICBhZGRTY29yZUJhcigpIHtcbiAgICBjb25zdCBzY29yZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2NvcmViYXIuY2xhc3NMaXN0LmFkZCgnaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1zY29yZS1iYXInKTtcblxuICAgIGNvbnN0IHNjb3JlQmFyID0gSDVQLkpvdWJlbFVJLmNyZWF0ZVNjb3JlQmFyKHRoaXMucGFyZW50LmdldE1heFNjb3JlKCkpO1xuICAgIHNjb3JlQmFyLnNldFNjb3JlKHRoaXMucGFyZW50LmdldFNjb3JlKCkpO1xuICAgIHNjb3JlQmFyLmFwcGVuZFRvKHNjb3JlYmFyKTtcbiAgICB0aGlzLndyYXBwZXIuYXBwZW5kQ2hpbGQoc2NvcmViYXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBhIGNvbnRhaW5lciB0byBkaXNwbGF5IHdoZW4gbm8gaW50ZXJhY3Rpb25zIGFyZSBtYWRlIGluIHRoZSBib29rXG4gICAqL1xuICBub0NoYXB0ZXJJbnRlcmFjdGlvbnMoKSB7XG4gICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKCdoNXAtaW50ZXJhY3RpdmUtYm9vay1zdW1tYXJ5LW5vLWNoYXB0ZXItaW50ZXJhY3Rpb25zJyk7XG4gICAgY29uc3QgYm9sZFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgYm9sZFRleHQuaW5uZXJIVE1MID0gdGhpcy5sMTBuLm5vQ2hhcHRlckludGVyYWN0aW9uQm9sZFRleHQ7XG5cbiAgICBjb25zdCBub3JtYWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG5vcm1hbFRleHQuY2xhc3NMaXN0LmFkZCgnaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1uby1pbml0aWFsaXplZC1jaGFwdGVycycpO1xuICAgIG5vcm1hbFRleHQuaW5uZXJIVE1MID0gdGhpcy5sMTBuLm5vQ2hhcHRlckludGVyYWN0aW9uVGV4dDtcblxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoYm9sZFRleHQpO1xuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQobm9ybWFsVGV4dCk7XG5cbiAgICB0aGlzLndyYXBwZXIuYXBwZW5kQ2hpbGQod3JhcHBlcik7XG4gIH1cblxuICAvKipcbiAgICogQWRkIHRoZSBzdW1tYXJ5IHBhZ2UgdG8gYSBjb250YWluZXJcbiAgICpcbiAgICogQHBhcmFtIHtqUXVlcnl9IGNvbnRhaW5lclxuICAgKiBAcmV0dXJuIHtqUXVlcnl9XG4gICAqL1xuICBhZGRTdW1tYXJ5UGFnZShjb250YWluZXIpIHtcbiAgICB0aGlzLndyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLndyYXBwZXIuY2xhc3NMaXN0LmFkZCgnaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1wYWdlJyk7XG5cbiAgICBpZiAoIHRoaXMuY2hhcHRlcnMuZmlsdGVyKGNoYXB0ZXIgPT4gY2hhcHRlci5pc0luaXRpYWxpemVkKS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmFkZFByb2dyZXNzSW5kaWNhdG9ycygpO1xuICAgICAgdGhpcy5hZGRBY3Rpb25CdXR0b25zKCk7XG4gICAgICB0aGlzLmFkZFN1bW1hcnlPdmVydmlldygpO1xuICAgICAgdGhpcy5hZGRTY29yZUJhcigpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMubm9DaGFwdGVySW50ZXJhY3Rpb25zKCk7XG4gICAgfVxuXG4gICAgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaDVwLWludGVyYWN0aXZlLWJvb2stc3VtbWFyeS1mb290ZXInKSkuZm9yRWFjaChlbGVtZW50ID0+IGVsZW1lbnQucmVtb3ZlKCkpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZCh0aGlzLndyYXBwZXIpO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdW1tYXJ5OyIsIi8qKiBDbGFzcyByZXByZXNlbnRpbmcgVVJMIHJlbGF0ZWQgZnVuY3Rpb25zICovXG5jbGFzcyBVUkxUb29scyB7XG4gIC8qKlxuICAgKiBFeHRyYWN0IGZyYWdtZW50cyBmcm9tIGJyb3dzZXIgVVJMLlxuICAgKlxuICAgKiBAcmV0dXJuIHtvYmplY3R9IEZyYWdtZW50cy5cbiAgICovXG4gIHN0YXRpYyBleHRyYWN0RnJhZ21lbnRzRnJvbVVSTCh2YWxpZGF0ZSwgaGFzaFdpbmRvdykge1xuICAgIGlmICghaGFzaFdpbmRvdy5sb2NhdGlvbi5oYXNoKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgLy8gQ29udmVydCBmcmFnbWVudCBzdHJpbmcgdG8gb2JqZWN0IHdpdGggcHJvcGVydGllc1xuICAgIGNvbnN0IGZyYWdtZW50cyA9IHt9O1xuICAgIGhhc2hXaW5kb3cubG9jYXRpb24uaGFzaC5yZXBsYWNlKCcjJywgJycpLnNwbGl0KCcmJylcbiAgICAgIC5mb3JFYWNoKGZyYWdtZW50ID0+IHtcbiAgICAgICAgaWYgKGZyYWdtZW50LmluZGV4T2YoJz0nKSA9PT0gLTEpIHtcbiAgICAgICAgICByZXR1cm47IC8vIFNraXAgaWYgaW5jb21wbGV0ZSBwYWlyXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYXJnUGFpciA9IGZyYWdtZW50LnNwbGl0KCc9Jyk7XG4gICAgICAgIGZyYWdtZW50c1thcmdQYWlyWzBdXSA9IGFyZ1BhaXJbMV07XG4gICAgICB9KTtcblxuICAgIC8vIE9wdGlvbmFsbHkgdmFsaWRhdGUgYW5kIGlnbm9yZSBmcmFnbWVudHNcbiAgICBpZiAodHlwZW9mIHZhbGlkYXRlID09PSAnZnVuY3Rpb24nICYmICF2YWxpZGF0ZShmcmFnbWVudHMpKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYWdtZW50cztcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGUgZnJhZ21lbnRzIHN0cmluZyBmcm9tIGZyYWdtZW50cyBvYmplY3QuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBmcmFnbWVudHMgRnJhZ21lbnRzLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9IEZyYWdtZW50cyBzdHJpbmcuXG4gICAqL1xuICBzdGF0aWMgY3JlYXRlRnJhZ21lbnRzU3RyaW5nKGZyYWdtZW50cykge1xuICAgIGxldCBwYXJ0cyA9IFtdO1xuICAgIGZvciAoY29uc3QgZnJhZ21lbnQgaW4gZnJhZ21lbnRzKSB7XG4gICAgICBwYXJ0cy5wdXNoKGAke2ZyYWdtZW50fT0ke2ZyYWdtZW50c1tmcmFnbWVudF19YCk7XG4gICAgfVxuICAgIHJldHVybiBgIyR7cGFydHMuam9pbignJicpfWA7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lIHdoZXRoZXIgdHdvIGZyYWdtZW50IG9iamVjdHMgYXJlIGVxdWFsLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZnJhZ21lbnQxIEZyYWdtZW50IDEuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBmcmFnbWVudDIgRnJhZ21lbnQgMi5cbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gW2xpbWl0VG9dIEtleXMgdG8gbGltaXQgZXF1YWxpdHkgY2hlY2sgdG8uXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUsIGlmIGZyYWdtZW50cyBhcmUgZXF1YWwuXG4gICAqL1xuICBzdGF0aWMgYXJlRnJhZ21lbnRzRXF1YWwoZnJhZ21lbnQxLCBmcmFnbWVudDIsIGxpbWl0VG8gPSBbXSkge1xuICAgIGZvciAoY29uc3Qga2V5IGluIGZyYWdtZW50MSkge1xuICAgICAgaWYgKGZyYWdtZW50MS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGlmIChsaW1pdFRvLmxlbmd0aCA+IDAgJiYgbGltaXRUby5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFmcmFnbWVudDJba2V5XSB8fCBmcmFnbWVudDFba2V5XS50b1N0cmluZygpICE9PSBmcmFnbWVudDJba2V5XS50b1N0cmluZygpKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBVUkxUb29scztcbiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIm1vZHVsZS5leHBvcnRzID0gSDVQLmpRdWVyeTsiXSwic291cmNlUm9vdCI6IiJ9