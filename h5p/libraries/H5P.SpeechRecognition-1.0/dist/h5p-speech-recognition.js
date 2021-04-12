(function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{enumerable:!0,get:d})},b.r=function(a){'undefined'!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:'Module'}),Object.defineProperty(a,'__esModule',{value:!0})},b.t=function(a,c){if(1&c&&(a=b(a)),8&c)return a;if(4&c&&'object'==typeof a&&a&&a.__esModule)return a;var d=Object.create(null);if(b.r(d),Object.defineProperty(d,'default',{enumerable:!0,value:a}),2&c&&'string'!=typeof a)for(var e in a)b.d(d,e,function(b){return a[b]}.bind(null,e));return d},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s=2)})([function(){},function(a,b){'use strict';function c(a){'@babel/helpers - typeof';return c='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&'function'==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?'symbol':typeof a},c(a)}var d,f,e='function'==typeof Symbol&&'symbol'==c(Symbol.iterator)?function(a){return c(a)}:function(a){return a&&'function'==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?'symbol':c(a)};//! annyang
//! version : 2.6.1
//! author  : Tal Ater @TalAter
//! license : MIT
//! https://www.TalAter.com/annyang/
//! annyang
//! version : 2.6.1
//! author  : Tal Ater @TalAter
//! license : MIT
//! https://www.TalAter.com/annyang/
!function(c,e){d=[],f=function(){return c.annyang=e(c)}.apply(b,d),!(f!==void 0&&(a.exports=f))}('undefined'==typeof window?void 0:window,function(j,q){var i,r=j.SpeechRecognition||j.webkitSpeechRecognition||j.mozSpeechRecognition||j.msSpeechRecognition||j.oSpeechRecognition;if(!r)return null;var t,a,z=[],s={start:[],error:[],end:[],soundstart:[],result:[],resultMatch:[],resultNoMatch:[],errorNetwork:[],errorPermissionBlocked:[],errorPermissionDenied:[]},c=0,f=0,l=!1,d='font-weight: bold; color: #00f;',p=!1,n=!1,m=/\s*\((.*?)\)\s*/g,h=/(\(\?:[^)]+\))\?/g,u=/(\(\?)?:\w+/g,b=/\*\w+/g,v=/[\-{}\[\]+?.,\\\^$|#]/g,w=function(a){for(var b=arguments.length,c=Array(1<b?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];a.forEach(function(a){a.callback.apply(a.context,c)})},y=function(){return t!==q},A=function(a,b){-1!==a.indexOf('%c')||b?console.log(a,b||d):console.log(a)},k=function(){y()||i.init({},!1)},x=function(a,b,c){z.push({command:a,callback:b,originalPhrase:c}),l&&A('Command successfully loaded: %c'+c,d)},B=function(b){var e;w(s.result,b);for(var f=0;f<b.length;f++){e=b[f].trim(),l&&A('Speech recognized: %c'+e,d);for(var g=0,h=z.length;g<h;g++){var j=z[g],i=j.command.exec(e);if(i){var a=i.slice(1);return l&&(A('command matched: %c'+j.originalPhrase,d),a.length&&A('with parameters',a)),j.callback.apply(this,a),void w(s.resultMatch,e,j.originalPhrase,b)}}}w(s.resultNoMatch,b)};return i={init:function(b){var d=!(1<arguments.length&&arguments[1]!==q)||arguments[1];t&&t.abort&&t.abort(),(t=new r).maxAlternatives=5,t.continuous='http:'===j.location.protocol,t.lang='en-US',t.onstart=function(){n=!0,w(s.start)},t.onsoundstart=function(){w(s.soundstart)},t.onerror=function(b){switch(w(s.error,b),b.error){case'network':w(s.errorNetwork,b);break;case'not-allowed':case'service-not-allowed':a=!1,200>new Date().getTime()-c?w(s.errorPermissionBlocked,b):w(s.errorPermissionDenied,b);}},t.onend=function(){if(n=!1,w(s.end),a){var b=new Date().getTime()-c;0==(f+=1)%10&&l&&A('Speech Recognition is repeatedly stopping and starting. See http://is.gd/annyang_restarts for tips.'),1e3>b?setTimeout(function(){i.start({paused:p})},1e3-b):i.start({paused:p})}},t.onresult=function(a){if(p)return l&&A('Speech heard, but annyang is paused'),!1;for(var b=a.results[a.resultIndex],c=[],d=0;d<b.length;d++)c[d]=b[d].transcript;B(c)},d&&(z=[]),b.length&&this.addCommands(b)},start:function(b){k(),p=(b=b||{}).paused!==q&&!!b.paused,a=b.autoRestart===q||!!b.autoRestart,b.continuous!==q&&(t.continuous=!!b.continuous),c=new Date().getTime();try{t.start()}catch(a){l&&A(a.message)}},abort:function(){a=!1,f=0,y()&&t.abort()},pause:function(){p=!0},resume:function(){i.start()},debug:function(){var a=!(0<arguments.length&&arguments[0]!==q)||arguments[0];l=!!a},setLanguage:function(a){k(),t.lang=a},addCommands:function(a){var c,f;for(var g in k(),a)if(a.hasOwnProperty(g))if('function'==typeof(c=j[a[g]]||a[g]))x((f=(f=g).replace(v,'\\$&').replace(m,'(?:$1)?').replace(u,function(a,b){return b?a:'([^\\s]+)'}).replace(b,'(.*?)').replace(h,'\\s*$1?\\s*'),new RegExp('^'+f+'$','i')),c,g);else{if(!('object'===(void 0===c?'undefined':e(c))&&c.regexp instanceof RegExp)){l&&A('Can not register command: %c'+g,d);continue}x(new RegExp(c.regexp.source,'i'),c.callback,g)}},removeCommands:function(a){a===q?z=[]:(a=Array.isArray(a)?a:[a],z=z.filter(function(b){for(var c=0;c<a.length;c++)if(a[c]===b.originalPhrase)return!1;return!0}))},addCallback:function(a,b,c){var d=j[b]||b;'function'==typeof d&&s[a]!==q&&s[a].push({callback:d,context:c||this})},removeCallback:function(a,b){var c=function(a){return a.callback!==b};for(var d in s)s.hasOwnProperty(d)&&(a!==q&&a!==d||(s[d]=b===q?[]:s[d].filter(c)))},isListening:function(){return n&&!p},getSpeechRecognizer:function(){return t},trigger:function(a){i.isListening()?(Array.isArray(a)||(a=[a]),B(a)):l&&A(n?'Speech heard, but annyang is paused':'Cannot trigger while annyang is aborted')}}})},function(a,b,c){'use strict';function d(a){'@babel/helpers - typeof';return d='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&'function'==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?'symbol':typeof a},d(a)}c.r(b);var e=c(0),f=c(1),g=function(){function a(){}return a.extend=function(){for(var a=1;a<arguments.length;a++)for(var b in arguments[a])arguments[a].hasOwnProperty(b)&&('object'===d(arguments[0][b])&&'object'===d(arguments[a][b])?this.extend(arguments[0][b],arguments[a][b]):arguments[0][b]=arguments[a][b]);return arguments[0]},a}(),h=g,i=function(){function a(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};this.params=h.extend({showLabel:!0,l10n:{active:'Listening ...',inactive:'Push to speak',noMicrophoneAccess:'No microphone access'}},a),this.callbacks=b,this.callbacks.onClick=this.callbacks.onClick||function(){},this.button=H5P.JoubelUI.createButton({class:'h5p-speech-recognition-button',click:this.callbacks.onClick}).get(0),this.setLabel(this.params.l10n.inactive)}var b=a.prototype;return b.getDOM=function(){return this.button},b.setLabel=function(a){this.button.innerText=this.params.showLabel?a:'',this.button.title=a},b.setActive=function(){this.button.classList.add('h5p-speech-recognition-listening'),this.setLabel(this.params.l10n.active)},b.setInactive=function(){this.button.classList.remove('h5p-speech-recognition-listening'),this.setLabel(this.params.l10n.inactive)},b.enable=function(){this.button.classList.remove('h5p-speech-recognition-disabled'),this.button.disabled=!1},b.disable=function(){this.button.classList.add('h5p-speech-recognition-disabled'),this.button.disabled=!0},b.hide=function(){this.button.classList.add('h5p-speech-recognition-none')},b.show=function(){this.button.classList.remove('h5p-speech-recognition-none')},a}(),j=function(){function a(){var b=this,c=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},d=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};this.params=h.extend({commands:[],language:'en-US',listenMode:a.LISTEN_MODE_BUTTON,showLabel:!0,l10n:{listening:'Listening ...',noMicrophoneAccess:'No microphone access',pushToSpeak:'Push to speak'}},c),this.callbacks=d||{},this.callbacks.onResult=this.callbacks.onResult||function(){},this.params.commands=this.params.commands.reduce(function(a,b){return a[b]=function(){},a},{}),this.params.listenMode===a.LISTEN_MODE_BUTTON&&(this.button=new i({showLabel:this.params.showLabel,l10n:{active:this.params.l10n.listening,inactive:this.params.l10n.pushToSpeak,noMicrophoneAccess:this.params.noMicrophoneAccess}},{onClick:function(){b.handleButtonClicked()}}),this.button.disable()),this.checkMicrophoneSupport()}var b=a.prototype;return b.checkMicrophoneSupport=function(){var a=this;return window.navigator.mediaDevices&&window.navigator.mediaDevices.getUserMedia?void window.navigator.mediaDevices.getUserMedia({audio:!0}).then(function(){a.handleMicrophoneAvailable()})['catch'](function(b){a.handleMicrophoneNotAvailable(b)}):void this.handleMicrophoneNotAvailable('The document may not be loaded securely, or your browser may not support a microphone.')},b.handleMicrophoneNotAvailable=function(a){this.button&&(this.button.getDOM().classList.add('h5p-speech-recognition-no-microphone'),this.button.setLabel(this.params.l10n.noMicrophoneAccess)),console.warn('H5P.SpeechRecognition:',a)},b.handleMicrophoneAvailable=function(){this.params.listenMode===a.LISTEN_MODE_BUTTON&&this.button.enable(),(this.params.listenMode===a.LISTEN_MODE_CONTINUOUS||this.params.listenMode===a.LISTEN_MODE_ONCE)&&this.start()},b.start=function(){return window.annyang?void(this.annyang=window.annyang,this.listening=!0,this.button&&this.button.setActive(),this.annyang.setLanguage(this.params.language),this.annyang.addCommands(this.params.commands),this.handleResultMatchHandler=this.handleResultMatch.bind(this),this.annyang.addCallback('resultMatch',this.handleResultMatchHandler),this.handleResultNoMatchHandler=this.handleResultNoMatch.bind(this),this.annyang.addCallback('resultNoMatch',this.handleResultNoMatchHandler),this.handleErrorHandler=this.handleError.bind(this),this.annyang.addCallback('errorNetwork',this.handleErrorHandler),this.annyang.addCallback('errorPermissionBlocked',this.handleErrorHandler),this.annyang.addCallback('errorPermissionDenied',this.handleErrorHandler),this.annyang.start()):void console.warn('Annyang is missing.')},b.stop=function(){this.listening=!1,this.button&&this.button.setInactive(),this.annyang.removeCommands(),this.annyang.removeCallback('resultMatch',this.handleResultMatchHandler),this.annyang.removeCallback('resultNoMatch',this.handleResultNoMatchHandler),this.annyang.removeCallback('errorNetwork',this.handleErrorHandler),this.annyang.removeCallback('errorPermissionBlocked',this.handleErrorHandler),this.annyang.removeCallback('errorPermissionDenied',this.handleErrorHandler),this.annyang.abort()},b.isListening=function(){return this.listening},b.getButtonDOM=function(){return this.button.getDOM()},b.enableButton=function(){this.button.enable()},b.disableButton=function(){this.button.disable()},b.handleButtonClicked=function(){this.isListening()?(this.button.setInactive(),this.stop()):(this.button.setActive(),this.start())},b.handleResultMatch=function(a,b,c){this.reportResults({command:b,match:!0,phrases:c,said:a}),this.checkStop()},b.handleResultNoMatch=function(a){this.reportResults({match:!1,phrases:a}),this.checkStop()},b.handleError=function(a){console.warn('H5P.SpeechRecognition:',a.error),this.stop()},b.reportResults=function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};a=h.extend({command:null,match:null,phrases:[],said:1===a.phrases.length?a.phrases[0]:null},a),this.callbacks.onResult(a)},b.checkStop=function(){(this.params.listenMode===a.LISTEN_MODE_BUTTON||this.params.listenMode===a.LISTEN_MODE_ONCE)&&this.stop()},a}();j.LISTEN_MODE_BUTTON=0,j.LISTEN_MODE_CONTINUOUS=1,j.LISTEN_MODE_ONCE=2,H5P=H5P||{},H5P.SpeechRecognition=j}]);