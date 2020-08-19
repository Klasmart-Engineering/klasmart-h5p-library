/*! For license information please see lr.js.LICENSE.txt */
!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};t.__esModule=!0,n(r(1)).default.init("8acm62/kidsloop-live-prod",{mergeIframes:window.self!==window.parent})},function(e,t,r){var n;n=function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}({"./node_modules/webpack/buildin/global.js":function(e,t){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(r=window)}e.exports=r},"./packages/@apphub:logrocket-console/src/index.js":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=r("./packages/@apphub:logrocket-console/src/registerConsole.js"),i=(n=o)&&n.__esModule?n:{default:n};t.default=i.default},"./packages/@apphub:logrocket-console/src/registerConsole.js":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=function(e){var t=[];return["log","warn","info","error","debug"].forEach((function(r){t.push((0,u.default)(console,r,(function(){for(var t=arguments.length,o=Array(t),i=0;i<t;i++)o[i]=arguments[i];e.addEvent("lr.core.LogEvent",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=t.isEnabled;return"object"===(void 0===i?"undefined":n(i))&&!1===i[r]||!1===i?null:("error"===r&&t.shouldAggregateConsoleErrors&&a.Capture.captureMessage(e,o[0],{},!0),{logLevel:r.toUpperCase(),args:o})}))})))})),function(){t.forEach((function(e){return e()}))}};var o,i=r("./packages/@apphub:logrocket-utils/src/enhanceFunc.js"),u=(o=i)&&o.__esModule?o:{default:o},a=r("./packages/@apphub:logrocket-exceptions/src/index.js")},"./packages/@apphub:logrocket-exceptions/src/Capture.js":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.captureMessage=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o={exceptionType:n?"CONSOLE":"MESSAGE",message:t,browserHref:window.location.href};c(o,r),e.addEvent("lr.core.Exception",(function(){return o}))},t.captureException=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,u=n||o.default.computeStackTrace(t),a={exceptionType:"WINDOW",errorType:u.name,message:u.message,browserHref:window.location.href};c(a,r);var s={_stackTrace:(0,i.default)(u)};e.addEvent("lr.core.Exception",(function(){return a}),s)};var o=u(r("./packages/@apphub:logrocket-utils/src/TraceKit.js")),i=u(r("./packages/@apphub:logrocket-exceptions/src/stackTraceFromError.js"));function u(e){return e&&e.__esModule?e:{default:e}}function a(e){return/boolean|number|string/.test(void 0===e?"undefined":n(e))}function c(e,t){if(t){var r=["level","logger"],n=Array.isArray(r),o=0;for(r=n?r:r[Symbol.iterator]();;){var i;if(n){if(o>=r.length)break;i=r[o++]}else{if((o=r.next()).done)break;i=o.value}var u=i,c=t[u];a(c)&&(e[u]=c.toString())}var s=["tags","extra"],l=Array.isArray(s),f=0;for(s=l?s:s[Symbol.iterator]();;){var d;if(l){if(f>=s.length)break;d=s[f++]}else{if((f=s.next()).done)break;d=f.value}var p=d,g=t[p]||{},v={},h=Object.keys(g),y=Array.isArray(h),b=0;for(h=y?h:h[Symbol.iterator]();;){var _;if(y){if(b>=h.length)break;_=h[b++]}else{if((b=h.next()).done)break;_=b.value}var k=_,m=g[k];a(m)&&(v[k.toString()]=m.toString())}e[p]=v}}}},"./packages/@apphub:logrocket-exceptions/src/index.js":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Capture=t.registerExceptions=void 0;var n,o=r("./packages/@apphub:logrocket-exceptions/src/registerExceptions.js"),i=(n=o)&&n.__esModule?n:{default:n},u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r("./packages/@apphub:logrocket-exceptions/src/Capture.js"));t.registerExceptions=i.default,t.Capture=u},"./packages/@apphub:logrocket-exceptions/src/raven/raven.js":function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n,o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r("./packages/@apphub:logrocket-utils/src/TraceKit.js"),u=(n=i)&&n.__esModule?n:{default:n},a=Object.prototype;function c(e){return void 0===e}function s(e){return"function"==typeof e}function l(e,t){return a.hasOwnProperty.call(e,t)}function f(e,t,r,n){var o=e[t];e[t]=r(o),n&&n.push([e,t,o])}var d="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},p=(d.document,function(){function e(t){var r=t.captureException;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._errorHandler=this._errorHandler.bind(this),this._ignoreOnError=0,this._wrappedBuiltIns=[],this.captureException=r,u.default.report.subscribe(this._errorHandler),this._instrumentTryCatch()}return o(e,[{key:"uninstall",value:function(){var e;for(u.default.report.unsubscribe(this._errorHandler);this._wrappedBuiltIns.length;){var t=(e=this._wrappedBuiltIns.shift())[0],r=e[1],n=e[2];t[r]=n}}},{key:"_errorHandler",value:function(e){this._ignoreOnError||this.captureException(e)}},{key:"_ignoreNextOnError",value:function(){var e=this;this._ignoreOnError+=1,setTimeout((function(){e._ignoreOnError-=1}))}},{key:"context",value:function(e,t,r){return s(e)&&(r=t||[],t=e,e=void 0),this.wrap(e,t).apply(this,r)}},{key:"wrap",value:function(e,t,r){var n=this;if(c(t)&&!s(e))return e;if(s(e)&&(t=e,e=void 0),!s(t))return t;try{if(t.__lr__)return t;if(t.__lr_wrapper__)return t.__lr_wrapper__}catch(e){return t}function o(){var o=[],i=arguments.length,a=!e||e&&!1!==e.deep;for(r&&s(r)&&r.apply(this,arguments);i--;)o[i]=a?n.wrap(e,arguments[i]):arguments[i];try{return t.apply(this,o)}catch(t){throw n._ignoreNextOnError(),n.captureException(u.default.computeStackTrace(t),e),t}}for(var i in t)l(t,i)&&(o[i]=t[i]);return o.prototype=t.prototype,t.__lr_wrapper__=o,o.__lr__=!0,o.__inner__=t,o}},{key:"_instrumentTryCatch",value:function(){var e=this,t=e._wrappedBuiltIns;function r(t){return function(r,n){for(var o=new Array(arguments.length),i=0;i<o.length;++i)o[i]=arguments[i];var u=o[0];return s(u)&&(o[0]=e.wrap(u)),t.apply?t.apply(this,o):t(o[0],o[1])}}function n(r){var n=d[r]&&d[r].prototype;n&&n.hasOwnProperty&&n.hasOwnProperty("addEventListener")&&(f(n,"addEventListener",(function(t){return function(r,n,o,i){try{n&&n.handleEvent&&(n.handleEvent=e.wrap(n.handleEvent))}catch(e){}return t.call(this,r,e.wrap(n,void 0,void 0),o,i)}}),t),f(n,"removeEventListener",(function(e){return function(t,r,n,o){try{r=r&&(r.__lr_wrapper__?r.__lr_wrapper__:r)}catch(e){}return e.call(this,t,r,n,o)}}),t))}f(d,"setTimeout",r,t),f(d,"setInterval",r,t),d.requestAnimationFrame&&f(d,"requestAnimationFrame",(function(t){return function(r){return t(e.wrap(r))}}),t);for(var o=["EventTarget","Window","Node","ApplicationCache","AudioTrackList","ChannelMergerNode","CryptoOperation","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","KeyOperation","MediaController","MessagePort","ModalWindow","Notification","SVGElementInstance","Screen","TextTrack","TextTrackCue","TextTrackList","WebSocket","WebSocketWorker","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload"],i=0;i<o.length;i++)n(o[i]);var u=d.jQuery||d.$;u&&u.fn&&u.fn.ready&&f(u.fn,"ready",(function(t){return function(r){return t.call(this,e.wrap(r))}}),t)}}]),e}());t.default=p}).call(this,r("./node_modules/webpack/buildin/global.js"))},"./packages/@apphub:logrocket-exceptions/src/registerExceptions.js":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=new i.default({captureException:function(t){u.captureException(e,null,null,t)}}),r=function(t){e.addEvent("lr.core.Exception",(function(){return{exceptionType:"UNHANDLED_REJECTION",message:t.reason||"Unhandled Promise rejection"}}))};return window.addEventListener("unhandledrejection",r),function(){window.removeEventListener("unhandledrejection",r),t.uninstall()}};var n,o=r("./packages/@apphub:logrocket-exceptions/src/raven/raven.js"),i=(n=o)&&n.__esModule?n:{default:n},u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r("./packages/@apphub:logrocket-exceptions/src/Capture.js"))},"./packages/@apphub:logrocket-exceptions/src/stackTraceFromError.js":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(e){return null===e?void 0:e}return e.stack?e.stack.map((function(e){return{lineNumber:t(e.line),columnNumber:t(e.column),fileName:t(e.url),functionName:t(e.func)}})):void 0}},"./packages/@apphub:logrocket-network/src/fetchIntercept.js":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("./packages/@apphub:logrocket-network/src/registerXHR.js");function o(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}var i=[];function u(e,t){for(var r=arguments.length,u=Array(r>2?r-2:0),a=2;a<r;a++)u[a-2]=arguments[a];var c=i.reduce((function(e,t){return[t].concat(e)}),[]),s=Promise.resolve(u);return c.forEach((function(e){var r=e.request,n=e.requestError;(r||n)&&(s=s.then((function(e){return r.apply(void 0,[t].concat(o(e)))}),(function(e){return n.apply(void 0,[t].concat(o(e)))})))})),s=s.then((function(t){(0,n.setActive)(!1);var r=void 0,i=void 0;try{r=e.apply(void 0,o(t))}catch(e){i=e}if((0,n.setActive)(!0),i)throw i;return r})),c.forEach((function(e){var r=e.response,n=e.responseError;(r||n)&&(s=s.then((function(e){return r(t,e)}),(function(e){return n&&n(t,e)})))})),s}var a=!1;t.default={register:function(e){return a||(a=!0,function(e){if(e.fetch&&e.Promise){var t,r,n=e.fetch.polyfill;e.fetch=(t=e.fetch,r=0,function(){for(var e=arguments.length,n=Array(e),o=0;o<e;o++)n[o]=arguments[o];return u.apply(void 0,[t,r++].concat(n))}),n&&(e.fetch.polyfill=n)}}(window)),i.push(e),function(){var t=i.indexOf(e);t>=0&&i.splice(t,1)}},clear:function(){i=[]}}},"./packages/@apphub:logrocket-network/src/index.js":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=function(e){var t={},r=function(e){var t=e;if("object"===(void 0===e?"undefined":n(e))&&null!=e){var r=Object.getPrototypeOf(e);r!==Object.prototype&&null!==r||(t=JSON.stringify(e))}return t&&t.length&&t.length>4096e3&&"string"==typeof t?t.substring(0,1e3)+" ... LogRocket truncating to first 1000 characters.\n      Keep data under 4MB to prevent truncation. https://docs.logrocket.com/reference#network":e},a=function(n,o){var i=o.method;e.addEvent("lr.network.RequestEvent",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.isEnabled,c=void 0===a||a,s=e.requestSanitizer,l=void 0===s?function(e){return e}:s;if(!c)return null;var f=null;try{f=l(o)}catch(e){console.error(e)}if(f){var d=document.createElement("a");return d.href=f.url,{reqId:n,url:d.href,headers:(0,u.default)(f.headers,(function(e){return""+e})),body:r(f.body),method:i,referrer:f.referrer||void 0,mode:f.mode||void 0,credentials:f.credentials||void 0}}return t[n]=!0,null}))},c=function(n,o){var i=o.method,a=o.status;e.addEvent("lr.network.ResponseEvent",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},c=e.isEnabled,s=void 0===c||c,l=e.responseSanitizer,f=void 0===l?function(e){return e}:l;if(!s)return null;if(t[n])return delete t[n],null;var d=null;try{d=f(o)}catch(e){console.error(e)}return d?{reqId:n,status:d.status,headers:(0,u.default)(d.headers,(function(e){return""+e})),body:r(d.body),method:i}:{reqId:n,status:a,headers:{},body:null,method:i}}))},s=function(e){return!0===t[e]},l=(0,o.default)({addRequest:a,addResponse:c,isIgnored:s}),f=(0,i.default)({addRequest:a,addResponse:c,isIgnored:s,shouldCloneResponse:e._shouldCloneResponse});return function(){l(),f()}};var o=a(r("./packages/@apphub:logrocket-network/src/registerFetch.js")),i=a(r("./packages/@apphub:logrocket-network/src/registerXHR.js")),u=a(r("./packages/@apphub:logrocket-utils/src/mapValues.js"));function a(e){return e&&e.__esModule?e:{default:e}}},"./packages/@apphub:logrocket-network/src/registerFetch.js":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};t.default=function(e){var t=e.addRequest,r=e.addResponse,o=e.isIgnored,u={};return i.default.register({request:function(e){for(var r=arguments.length,o=Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];var a=void 0;if("undefined"!=typeof Request&&o[0]instanceof Request){var s=void 0;try{s=o[0].clone().text()}catch(e){s=Promise.resolve("LogRocket fetch error: "+e.message)}a=s.then((function(e){return n({},c(o[0]),{body:e})}),(function(e){return n({},c(o[0]),{body:"LogRocket fetch error: "+e.message})}))}else a=Promise.resolve(n({},c(o[1]),{url:""+o[0],body:(o[1]||{}).body}));return a.then((function(r){return u[e]=r.method,t("fetch-"+e,r),o}))},requestError:function(e,t){return Promise.reject(t)},response:function(e,t){var n=void 0;if(o("fetch-"+e))return t;try{n=t.clone().text()}catch(e){n=Promise.resolve("LogRocket fetch error: "+e.message)}return n.then((function(n){var o={url:t.url,status:t.status,headers:a(t.headers),body:n,method:u[e]};return delete u[e],r("fetch-"+e,o),t}))},responseError:function(e,t){return r("fetch-"+e,{url:void 0,status:0,headers:{},body:""+t}),Promise.reject(t)}})};var o=u(r("./packages/@apphub:logrocket-utils/src/mapValues.js")),i=u(r("./packages/@apphub:logrocket-network/src/fetchIntercept.js"));function u(e){return e&&e.__esModule?e:{default:e}}var a=function(e){return(0,o.default)(function(e){if(null==e||"function"!=typeof e.forEach)return e;var t={};return e.forEach((function(e,r){t[r]?t[r]=t[r]+","+e:t[r]=""+e})),t}(e),(function(e){return""+e}))};function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{url:e.url,headers:a(e.headers),method:e.method&&e.method.toUpperCase(),referrer:e.referrer||void 0,mode:e.mode||void 0,credentials:e.credentials||void 0}}},"./packages/@apphub:logrocket-network/src/registerXHR.js":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setActive=function(e){u=e},t.default=function(e){var t=e.addRequest,r=e.addResponse,i=e.isIgnored,c=e.shouldCloneResponse,s=void 0!==c&&c,l=XMLHttpRequest,f=new WeakMap,d=!1;return window._lrXMLHttpRequest=XMLHttpRequest,XMLHttpRequest=function(e,c){var p=new l(e,c);if(!u)return p;f.set(p,{xhrId:++a,headers:{}}),(0,o.default)(p,"open",(function(e,t){if(!d){var r=f.get(p);r.method=e,r.url=t}})),(0,o.default)(p,"send",(function(e){if(!d){var r=f.get(p);if(r){var o={url:r.url,method:r.method&&r.method.toUpperCase(),headers:(0,n.default)(r.headers||{},(function(e){return e.join(", ")})),body:e};t("xhr-"+r.xhrId,o)}}})),(0,o.default)(p,"setRequestHeader",(function(e,t){if(!d){var r=f.get(p);r&&(r.headers=r.headers||{},r.headers[e]=r.headers[e]||[],r.headers[e].push(t))}}));var g={readystatechange:function(){if(!d&&4===p.readyState){var e=f.get(p);if(!e)return;if(i("xhr-"+e.xhrId))return;var t=p.getAllResponseHeaders().split(/[\r\n]+/).reduce((function(e,t){var r=e,n=t.split(": ");if(n.length>0){var o=n.shift(),i=n.join(": ");e[o]?r[o]+=", "+i:r[o]=i}return r}),{}),n=void 0;try{switch(p.responseType){case"json":n=s?JSON.parse(JSON.stringify(p.response)):p.response;break;case"arraybuffer":case"blob":n=p.response;break;case"document":n=p.responseXML;break;case"text":case"":n=p.responseText;break;default:n=""}}catch(e){n="LogRocket: Error accessing response."}var o={url:e.url,status:p.status,headers:t,body:n,method:(e.method||"").toUpperCase()};r("xhr-"+e.xhrId,o)}}};return Object.keys(g).forEach((function(e){p.addEventListener(e,g[e])})),p},XMLHttpRequest.prototype=l.prototype,["UNSENT","OPENED","HEADERS_RECEIVED","LOADING","DONE"].forEach((function(e){XMLHttpRequest[e]=l[e]})),function(){d=!0,XMLHttpRequest=l}};var n=i(r("./packages/@apphub:logrocket-utils/src/mapValues.js")),o=i(r("./packages/@apphub:logrocket-utils/src/enhanceFunc.js"));function i(e){return e&&e.__esModule?e:{default:e}}var u=!0,a=0},"./packages/@apphub:logrocket-redux/src/createEnhancer.js":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.stateSanitizer,o=void 0===r?function(e){return e}:r,i=t.actionSanitizer,c=void 0===i?function(e){return e}:i;return function(t){return function(r,i,s){var l=t(r,i,s),f=l.dispatch,d=a++;return e.addEvent("lr.redux.InitialState",(function(){var e=void 0;try{e=o(l.getState())}catch(e){console.error(e.toString())}return{state:e,storeId:d}})),n({},l,{dispatch:function(t){var r=(0,u.default)(),n=void 0,i=void 0;try{i=f(t)}catch(e){n=e}finally{var a=(0,u.default)()-r;e.addEvent("lr.redux.ReduxAction",(function(){var e=null,r=null;try{e=o(l.getState()),r=c(t)}catch(e){console.error(e.toString())}return e&&r?{storeId:d,action:r,duration:a,stateDelta:e}:null}))}if(n)throw n;return i}})}}};var o,i=r("./packages/@apphub:now/src/index.js"),u=(o=i)&&o.__esModule?o:{default:o},a=0},"./packages/@apphub:logrocket-redux/src/createMiddleware.js":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.stateSanitizer,n=void 0===r?function(e){return e}:r,o=t.actionSanitizer,a=void 0===o?function(e){return e}:o;return function(t){var r=u++;return e.addEvent("lr.redux.InitialState",(function(){var e=void 0;try{e=n(t.getState())}catch(e){console.error(e.toString())}return{state:e,storeId:r}})),function(o){return function(u){var c=(0,i.default)(),s=void 0,l=void 0;try{l=o(u)}catch(e){s=e}finally{var f=(0,i.default)()-c;e.addEvent("lr.redux.ReduxAction",(function(){var e=null,o=null;try{e=n(t.getState()),o=a(u)}catch(e){console.error(e.toString())}return e&&o?{storeId:r,action:o,duration:f,stateDelta:e}:null}))}if(s)throw s;return l}}}};var n,o=r("./packages/@apphub:now/src/index.js"),i=(n=o)&&n.__esModule?n:{default:n},u=0},"./packages/@apphub:logrocket-redux/src/index.js":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createEnhancer=t.createMiddleware=void 0;var n=i(r("./packages/@apphub:logrocket-redux/src/createEnhancer.js")),o=i(r("./packages/@apphub:logrocket-redux/src/createMiddleware.js"));function i(e){return e&&e.__esModule?e:{default:e}}t.createMiddleware=o.default,t.createEnhancer=n.default},"./packages/@apphub:logrocket-utils/src/TraceKit.js":function(e,t,r){"use strict";(function(t){var r={collectWindowErrors:!0,debug:!1},n="undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},o=[].slice,i="?",u=/^(?:Uncaught (?:exception: )?)?((?:Eval|Internal|Range|Reference|Syntax|Type|URI)Error): ?(.*)$/;function a(){return"undefined"==typeof document||void 0===document.location?"":document.location.href}r.report=function(){var e,t,c=[],s=null,l=null,f=null;function d(e,t){var n=null;if(!t||r.collectWindowErrors){for(var i in c)if(c.hasOwnProperty(i))try{c[i].apply(null,[e].concat(o.call(arguments,2)))}catch(e){n=e}if(n)throw n}}function p(t,n,o,c,s){if(f)r.computeStackTrace.augmentStackTraceWithInitialElement(f,n,o,t),g();else if(s)d(r.computeStackTrace(s),!0);else{var l,p={url:n,line:o,column:c},v=void 0,h=t;"[object String]"==={}.toString.call(t)&&(l=t.match(u))&&(v=l[1],h=l[2]),p.func=i,d({name:v,message:h,url:a(),stack:[p]},!0)}return!!e&&e.apply(this,arguments)}function g(){var e=f,t=s;s=null,f=null,l=null,d.apply(null,[e,!1].concat(t))}function v(e,t){var n=o.call(arguments,1);if(f){if(l===e)return;g()}var i=r.computeStackTrace(e);if(f=i,l=e,s=n,setTimeout((function(){l===e&&g()}),i.incomplete?2e3:0),!1!==t)throw e}return v.subscribe=function(r){t||(e=n.onerror,n.onerror=p,t=!0),c.push(r)},v.unsubscribe=function(e){for(var t=c.length-1;t>=0;--t)c[t]===e&&c.splice(t,1)},v.uninstall=function(){t&&(n.onerror=e,t=!1,e=void 0),c=[]},v}(),r.computeStackTrace=function(){function e(e){if(void 0!==e.stack&&e.stack){for(var t,r,n=/^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|<anonymous>).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,o=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|resource|\[native).*?)(?::(\d+))?(?::(\d+))?\s*$/i,u=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,c=e.stack.split("\n"),s=[],l=(/^(.*) is undefined$/.exec(e.message),0),f=c.length;l<f;++l){if(t=n.exec(c[l])){var d=t[2]&&-1!==t[2].indexOf("native");r={url:d?null:t[2],func:t[1]||i,args:d?[t[2]]:[],line:t[3]?+t[3]:null,column:t[4]?+t[4]:null}}else if(t=u.exec(c[l]))r={url:t[2],func:t[1]||i,args:[],line:+t[3],column:t[4]?+t[4]:null};else{if(!(t=o.exec(c[l])))continue;r={url:t[3],func:t[1]||i,args:t[2]?t[2].split(","):[],line:t[4]?+t[4]:null,column:t[5]?+t[5]:null}}!r.func&&r.line&&(r.func=i),s.push(r)}return s.length?(s[0].column||void 0===e.columnNumber||(s[0].column=e.columnNumber+1),{name:e.name,message:e.message,url:a(),stack:s}):null}}function t(e,t,r,n){var o={url:t,line:r};if(o.url&&o.line){if(e.incomplete=!1,o.func||(o.func=i),e.stack.length>0&&e.stack[0].url===o.url){if(e.stack[0].line===o.line)return!1;if(!e.stack[0].line&&e.stack[0].func===o.func)return e.stack[0].line=o.line,!1}return e.stack.unshift(o),e.partial=!0,!0}return e.incomplete=!0,!1}function n(e,u){for(var c,s,l=/function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i,f=[],d={},p=!1,g=n.caller;g&&!p;g=g.caller)if(g!==o&&g!==r.report){if(s={url:null,func:i,line:null,column:null},g.name?s.func=g.name:(c=l.exec(g.toString()))&&(s.func=c[1]),void 0===s.func)try{s.func=c.input.substring(0,c.input.indexOf("{"))}catch(e){}d[""+g]?p=!0:d[""+g]=!0,f.push(s)}u&&f.splice(0,u);var v={name:e.name,message:e.message,url:a(),stack:f};return t(v,e.sourceURL||e.fileName,e.line||e.lineNumber,e.message||e.description),v}function o(t,o){var i=null;o=null==o?0:+o;try{if(i=e(t))return i}catch(e){if(r.debug)throw e}try{if(i=n(t,o+1))return i}catch(e){if(r.debug)throw e}return{name:t.name,message:t.message,url:a()}}return o.augmentStackTraceWithInitialElement=t,o.computeStackTraceFromStackProp=e,o}(),e.exports=r}).call(this,r("./node_modules/webpack/buildin/global.js"))},"./packages/@apphub:logrocket-utils/src/enhanceFunc.js":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r){var n=e[t];return e[t]=function(){for(var e=void 0,t=arguments.length,o=Array(t),i=0;i<t;i++)o[i]=arguments[i];return n&&(e=n.apply(this,o)),r.apply(this,o),e},function(){e[t]=n}}},"./packages/@apphub:logrocket-utils/src/mapValues.js":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(null==e)return{};var r={};return Object.keys(e).forEach((function(n){r[n]=t(e[n])})),r}},"./packages/@apphub:now/src/index.js":function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r=Date.now.bind(Date),n=r();t.default="undefined"!=typeof performance&&performance.now?performance.now.bind(performance):function(){return r()-n},e.exports=t.default},"./packages/logrocket/src/LogRocket.js":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MAX_QUEUE_SIZE=void 0;var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=s(r("./packages/@apphub:logrocket-network/src/index.js")),u=r("./packages/@apphub:logrocket-exceptions/src/index.js"),a=s(r("./packages/@apphub:logrocket-console/src/index.js")),c=r("./packages/@apphub:logrocket-redux/src/index.js");function s(e){return e&&e.__esModule?e:{default:e}}function l(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}var f=t.MAX_QUEUE_SIZE=1e3,d=function(){function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._buffer=[],["log","info","warn","error","debug"].forEach((function(e){t[e]=function(){for(var r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];t.addEvent("lr.core.LogEvent",(function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return"error"===e&&r.shouldAggregateConsoleErrors&&u.Capture.captureMessage(t,n[0],{},!0),{logLevel:e.toUpperCase(),args:n}}),{shouldCaptureStackTrace:!0})}})),this._isInitialized=!1,this._installed=[]}return n(e,[{key:"addEvent",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=Date.now();this._run((function(i){i.addEvent(e,t,o({},r,{timeOverride:n}))}))}},{key:"onLogger",value:function(e){for(this._logger=e;this._buffer.length>0;)this._buffer.shift()(this._logger)}},{key:"_run",value:function(e){if(!this._isDisabled)if(this._logger)e(this._logger);else{if(this._buffer.length>=f)return this._isDisabled=!0,console.warn("LogRocket: script did not load. Check that you have a valid network connection."),void this.uninstall();this._buffer.push(e.bind(this))}}},{key:"init",value:function(e,t){this._isInitialized||(this._installed.push((0,u.registerExceptions)(this)),this._installed.push((0,i.default)(this)),this._installed.push((0,a.default)(this)),this._isInitialized=!0,this._run((function(r){r.init(e,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ingestServer,r=l(e,["ingestServer"]);return t?o({serverURL:t+"/i",statsURL:t+"/s"},r):r}(t))})))}},{key:"start",value:function(){this._run((function(e){e.start()}))}},{key:"uninstall",value:function(){this._installed.forEach((function(e){return e()})),this._buffer=[],this._run((function(e){e.uninstall()}))}},{key:"identify",value:function(e,t){this._run((function(r){r.identify(e,t)}))}},{key:"startNewSession",value:function(){this._run((function(e){e.startNewSession()}))}},{key:"track",value:function(e){this._run((function(t){t.track(e)}))}},{key:"getSessionURL",value:function(e){if("function"!=typeof e)throw new Error("LogRocket: must pass callback to getSessionURL()");this._run((function(t){t.getSessionURL?t.getSessionURL(e):e(t.recordingURL)}))}},{key:"getVersion",value:function(e){this._run((function(t){e(t.version)}))}},{key:"captureMessage",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};u.Capture.captureMessage(this,e,t)}},{key:"captureException",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};u.Capture.captureException(this,e,t)}},{key:"reduxEnhancer",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,c.createEnhancer)(this,e)}},{key:"reduxMiddleware",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,c.createMiddleware)(this,e)}},{key:"version",get:function(){return this._logger&&this._logger.version}},{key:"sessionURL",get:function(){return this._logger&&this._logger.recordingURL}},{key:"recordingURL",get:function(){return this._logger&&this._logger.recordingURL}},{key:"recordingID",get:function(){return this._logger&&this._logger.recordingID}},{key:"threadID",get:function(){return this._logger&&this._logger.threadID}},{key:"tabID",get:function(){return this._logger&&this._logger.tabID}}]),e}();t.default=d},"./packages/logrocket/src/makeLogRocket.js":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};if("undefined"!=typeof navigator&&"ReactNative"===navigator.product)throw new Error(u);if("undefined"!=typeof window){if(window._disableLogRocket)return a();if(window.MutationObserver&&window.WeakMap){window._lrMutationObserver=window.MutationObserver;var t=new i.default;return e(t),t}}return a()};var n,o=r("./packages/logrocket/src/LogRocket.js"),i=(n=o)&&n.__esModule?n:{default:n},u="LogRocket does not yet support React Native.",a=function(){return{init:function(){},uninstall:function(){},log:function(){},info:function(){},warn:function(){},error:function(){},debug:function(){},addEvent:function(){},identify:function(){},start:function(){},get threadID(){return null},get recordingID(){return null},get recordingURL(){return null},reduxEnhancer:function(){return function(e){return function(){return e.apply(void 0,arguments)}}},reduxMiddleware:function(){return function(){return function(e){return function(t){return e(t)}}}},track:function(){},getSessionURL:function(){},getVersion:function(){},startNewSession:function(){},onLogger:function(){},setClock:function(){},captureMessage:function(){},captureException:function(){}}};e.exports=t.default},"./packages/logrocket/src/module-npm.js":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=r("./packages/logrocket/src/setup.js"),i=(0,((n=o)&&n.__esModule?n:{default:n}).default)();t.default=i,e.exports=t.default},"./packages/logrocket/src/setup.js":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.enterpriseServer,r=e.sdkVersion,n=void 0===r?"1.0.11":r,o=u(e,["enterpriseServer","sdkVersion"]),c="https://cdn.logrocket.io",s=void 0;if("script"===n)try{var l=document.currentScript,f=l.src.match(/^(https?:\/\/([^\\]+))\/.+$/),d=f&&f[2];d&&a[d]&&(c=f&&f[1],s=a[d])}catch(e){}else c="https://cdn.lr-ingest.io",s="https://r.lr-ingest.io";var p=o.sdkServer||t,g=o.ingestServer||t||s,v=(0,i.default)((function(){var e=document.createElement("script");g&&(void 0===window.__SDKCONFIG__&&(window.__SDKCONFIG__={}),window.__SDKCONFIG__.serverURL=g+"/i",window.__SDKCONFIG__.statsURL=g+"/s"),p?e.src=p+"/logger.min.js":window.__SDKCONFIG__&&window.__SDKCONFIG__.loggerURL?e.src=window.__SDKCONFIG__.loggerURL:window._lrAsyncScript?e.src=window._lrAsyncScript:e.src=c+"/logger-1.min.js",e.async=!0,document.head.appendChild(e),e.onload=function(){"function"==typeof window._LRLogger?v.onLogger(new window._LRLogger({sdkVersion:n})):(console.warn("LogRocket: script execution has been blocked by a product or service."),v.uninstall())},e.onerror=function(){console.warn("LogRocket: script could not load. Check that you have a valid network connection."),v.uninstall()}}));return v};var n,o=r("./packages/logrocket/src/makeLogRocket.js"),i=(n=o)&&n.__esModule?n:{default:n};function u(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}var a={"cdn.logrocket.io":"https://r.logrocket.io","cdn.lr-ingest.io":"https://r.lr-ingest.io","cdn-staging.logrocket.io":"https://staging-i.logrocket.io","cdn-staging.lr-ingest.io":"https://staging-i.lr-ingest.io"};e.exports=t.default},0:function(e,t,r){e.exports=r("./packages/logrocket/src/module-npm.js")}})},e.exports=n()}]);