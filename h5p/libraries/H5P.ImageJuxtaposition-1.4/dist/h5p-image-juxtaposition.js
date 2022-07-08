!function(){"use strict";var t=function(){function t(t,e){this.params=t,this.callbackLoaded=e,this.loaded=!1,this.buildDOM()}var e=t.prototype;return e.getDOM=function(){return this.imageDOM},e.getDimensions=function(){return this.isLoaded?{width:this.image.naturalWidth,height:this.image.naturalHeight,ratio:this.image.naturalWidth/this.image.naturalHeight}:{width:0,height:0,ratio:1}},e.update=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];!0===e?this.imageDOM.classList.add("transition"):this.imageDOM.classList.remove("transition"),"horizontal"===this.params.mode?this.imageDOM.style.width="".concat(t,"%"):this.imageDOM.style.height="".concat(t,"%")},e.buildDOM=function(){var t=this;if(this.imageDOM=document.createElement("div"),this.imageDOM.className="h5p-image-juxtaposition-image h5p-image-juxtaposition-".concat(this.params.position),this.imageDOM.setAttribute("draggable","false"),this.image=new Image,this.image.onload=function(){t.image.setAttribute("width",""),t.image.setAttribute("height",""),t.isLoaded=!0,t.callbackLoaded()},this.image.src=this.params.image.src,this.image.alt=this.params.image.alt||"",this.image.title=this.params.image.title||"",this.label=this.params.label||!1,this.image.setAttribute("draggable","false"),this.image.setAttribute("unselectable","on"),this.image.setAttribute("onselectstart","return false;"),this.image.setAttribute("onmousedown","return false;"),this.image.setAttribute("aria-hidden","true"),this.imageDOM.appendChild(this.image),this.params.label&&""!==this.params.label){var e=document.createElement("div");e.className="h5p-image-juxtaposition-label",e.setAttribute("unselectable","on"),e.setAttribute("onselectstart","return false;"),e.setAttribute("onmousedown","return false;"),e.setAttribute("aria-hidden","true"),e.innerHTML=this.params.label,this.imageDOM.appendChild(e)}},t}(),e=t,a=function(){function t(t,e){var a=this;this.params=t,this.callbackUpdate=e,this.controller=document.createElement("div"),this.controller.className="h5p-image-juxtaposition-controller",this.controller.style.backgroundColor=this.params.color,this.controller.setAttribute("draggable","false"),this.controller.setAttribute("tabindex",0),this.controller.setAttribute("role","slider"),this.controller.setAttribute("aria-valuemin",0),this.controller.setAttribute("aria-valuemax",100),this.controller.setAttribute("aria-orientation",this.params.mode);var i=document.createElement("div");i.className="h5p-image-juxtaposition-control",i.style.backgroundColor=this.params.color,i.setAttribute("draggable","false"),i.appendChild(this.controller);var s=document.createElement("div");s.className="h5p-image-juxtaposition-arrow h5p-image-juxtaposition-left",s.style.borderColor="horizontal"===this.params.mode?"transparent ".concat(this.params.color," transparent transparent"):"transparent transparent ".concat(this.params.color," transparent"),s.setAttribute("draggable","false");var n=document.createElement("div");n.className="h5p-image-juxtaposition-arrow h5p-image-juxtaposition-right",n.style.borderColor="horizontal"===this.params.mode?"transparent transparent transparent ".concat(this.params.color):"".concat(this.params.color," transparent transparent transparent"),n.setAttribute("draggable","false"),this.handle=document.createElement("div"),this.handle.className="h5p-image-juxtaposition-handle",this.handle.setAttribute("draggable","false"),this.handle.appendChild(s),this.handle.appendChild(i),this.handle.appendChild(n),this.handle.addEventListener("keydown",(function(t){t=t||window.event;var e=parseFloat(a.handle.style.left||a.handle.style.top);if(t.code)!t.shiftKey||"ArrowLeft"!==t.code&&"ArrowUp"!==t.code?!t.shiftKey||"ArrowRight"!==t.code&&"ArrowDown"!==t.code?"Home"===t.code||"ArrowLeft"===t.code||"ArrowUp"===t.code?(t.preventDefault(),a.callbackUpdate(0)):"End"!==t.code&&"ArrowRight"!==t.code&&"ArrowDown"!==t.code||(t.preventDefault(),a.callbackUpdate(100)):(t.preventDefault(),a.callbackUpdate(Math.min(e+1,100))):(t.preventDefault(),a.callbackUpdate(Math.max(0,e-1)));else{var i=t.which||t.keyCode;!t.shiftKey||39!==i&&40!==i?!t.shiftKey||37!==i&&38!==i?35===i||39===i||40===i?(t.preventDefault(),a.callbackUpdate(100)):36!==i&&37!==i&&38!==i||(t.preventDefault(),a.callbackUpdate(0)):(t.preventDefault(),a.callbackUpdate(Math.max(0,e-1))):(t.preventDefault(),a.callbackUpdate(Math.max(0,e+1)))}}))}var e=t.prototype;return e.getDOM=function(){return this.handle},e.update=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];!0===e?this.handle.classList.add("transition"):this.handle.classList.remove("transition"),this.controller.setAttribute("aria-valuenow",parseInt(t)),"horizontal"===this.params.mode?this.handle.style.left="".concat(t,"%"):this.handle.style.top="".concat(t,"%"),this.setAriaValueText(t)},e.setAriaValueText=function(t){var e=this;"number"!=typeof t&&(t="horizontal"===this.params.mode?parseFloat(this.handle.style.left):parseFloat(this.handle.style.top));var a=parseInt(t,10)>=50?this.params.ariaValueTextBefore:this.params.ariaValueTextAfter;this.controller.setAttribute("aria-valuetext",""),clearTimeout(this.updateReadTimeout),this.updateReadTimeout=setTimeout((function(){e.controller.setAttribute("aria-valuetext",a)}),10)},e.focus=function(){var t=this;setTimeout((function(){t.controller.blur(),t.controller.focus()}),100)},t}(),i=a,s=function(){function t(t,e){this.params=t,this.callbackLoaded=e,this.isSliding=!1,this.imagesLoaded=0,this.buildDOM()}var a=t.prototype;return a.buildDOM=function(){var t=this;this.slider=document.createElement("div"),this.slider.className="h5p-image-juxtaposition-slider",this.slider.classList.add("h5p-image-juxtaposition-"+this.params.mode),this.slider.setAttribute("draggable","false"),this.params.container.appendChild(this.slider),this.firstImage=new e({image:this.params.images[0],label:this.params.images[0].label,mode:this.params.mode,position:"left"},(function(){t.imagesLoaded++,t.handleImageLoaded()})),this.slider.appendChild(this.firstImage.getDOM()),this.secondImage=new e({image:this.params.images[1],label:this.params.images[1].label,mode:this.params.mode,position:"right"},(function(){t.imagesLoaded++,t.handleImageLoaded()})),this.slider.appendChild(this.secondImage.getDOM()),this.handle=new i({ariaValueTextAfter:this.buildAriaValueText(this.params.images[1].label,this.params.images[1].alt),ariaValueTextBefore:this.buildAriaValueText(this.params.images[0].label,this.params.images[0].alt),color:this.params.color,mode:this.params.mode},(function(e){t.update(e)})),this.slider.appendChild(this.handle.getDOM())},a.update=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=this.extractPosition(t).toFixed(2),i=100-a;a<0||a>100||i<0||i>100||(this.firstImage.update(a,e),this.secondImage.update(i,e),this.handle.update(a,e),e&&"img"===t.target.tagName.toLowerCase()&&this.handle.focus())},a.resize=function(t){var e,a,i=0;t?this.imageRatio<=t.width/t.height?(a=(e=t.height)*this.imageRatio,i=(t.width-a)/2,a="".concat(a,"px")):(e=(a=t.width)/this.imageRatio,a="".concat(a,"px")):(e=(a=window.innerWidth-2)/this.imageRatio,a="100%"),this.params.container&&(this.params.container.style.width=a,this.params.container.style.height="".concat(e,"px"),this.params.container.style.paddingLeft="".concat(i,"px"))},a.handleImageLoaded=function(){if(!(this.imagesLoaded<2)){var t=[this.firstImage.getDimensions(),this.secondImage.getDimensions()];t[0].ratio,t[1].ratio,this.imageRatio=t[0].ratio,this.params.container.style.width=t[0].width,this.addEventListeners(),this.update(this.params.startingPosition,!1),this.callbackLoaded()}},a.buildAriaValueText=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return""===t?e:"".concat(t,". ").concat(e)},a.extractPosition=function(t){if("string"==typeof t||"number"==typeof t)return parseInt(t,10);var e=this.slider.getBoundingClientRect(),a={top:e.top+document.body.scrollTop,left:e.left+document.body.scrollLeft},i="horizontal"===this.params.mode?this.slider.offsetWidth:this.slider.offsetHeight;return(("horizontal"===this.params.mode?this.getPageX(t):this.getPageY(t))-("horizontal"===this.params.mode?a.left:a.top))/i*100},a.getPageX=function(t){return t.pageX?t.pageX:t.touches?t.touches[0].pageX:t.clientX+document.body.scrollLeft+document.documentElement.scrollLeft},a.getPageY=function(t){return t.pageY?t.pageY:t.touches?t.touches[0].pageY:t.clientY+document.body.scrollTop+document.documentElement.scrollTop},a.addEventListeners=function(){var t=this;this.slider.addEventListener("mousedown",(function(e){e=e||window.event,t.update(e,!0),t.isSliding=!0})),window.addEventListener("mousemove",(function(e){(e=e||window.event).preventDefault(),!0===t.isSliding&&t.update(e,!1)})),this.slider.addEventListener("touchstart",(function(e){(e=e||window.event).preventDefault(),e.stopPropagation(),t.update(e,!0)})),this.slider.addEventListener("touchmove",(function(e){(e=e||window.event).preventDefault(),e.stopPropagation(),t.update(e,!1)})),window.addEventListener("mouseup",(function(e){(e=e||window.event).preventDefault(),e.stopPropagation(),t.isSliding=!1}))},t}(),n=s,r=function(){function t(t){this.classNameBase=t,this.container=document.createElement("div"),this.container.classList.add("".concat(this.classNameBase,"-container")),this.spinnerElement=document.createElement("div"),this.spinnerElement.classList.add(t);var e=document.createElement("div");e.classList.add("".concat(this.classNameBase,"-circle-head")),this.spinnerElement.appendChild(e);var a=document.createElement("div");a.classList.add("".concat(this.classNameBase,"-circle-neck-upper")),this.spinnerElement.appendChild(a);var i=document.createElement("div");i.classList.add("".concat(this.classNameBase,"-circle-neck-lower")),this.spinnerElement.appendChild(i);var s=document.createElement("div");s.classList.add("".concat(this.classNameBase,"-circle-body")),this.spinnerElement.appendChild(s),this.container.appendChild(this.spinnerElement)}var e=t.prototype;return e.getDOM=function(){return this.container},e.show=function(){this.container.classList.remove("".concat(this.classNameBase,"-none"))},e.hide=function(){this.container.classList.add("".concat(this.classNameBase,"-none"))},t}();function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}var l=function(){function t(){}return t.extend=function(){for(var t=1;t<arguments.length;t++)for(var e in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],e)&&("object"===o(arguments[0][e])&&"object"===o(arguments[t][e])?this.extend(arguments[0][e],arguments[t][e]):arguments[0][e]=arguments[t][e]);return arguments[0]},t}(),h=l;function c(t,e){return c=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},c(t,e)}var d=function(t){var e,a;function i(e,a,i){var s;return(s=t.call(this,"image-juxtaposition")||this).params=h.extend({title:"",taskDescription:"",imageBefore:{imageBefore:void 0,labelBefore:""},imageAfter:{imageAfter:void 0,labelAfter:""},behavior:{startingPosition:50,sliderOrientation:"horizontal",sliderColor:"#f3f3f3"}},e),s.contentId=a,s.contentData=i,Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(t){var e=this;do{if(e.matches(t))return e;e=e.parentElement||e.parentNode}while(null!==e&&1===e.nodeType);return null}),s.on("exitFullScreen",(function(){s.trigger("resize")})),s}a=t,(e=i).prototype=Object.create(a.prototype),e.prototype.constructor=e,c(e,a);var s=i.prototype;return s.registerDomElements=function(){var t=this,e=document.createElement("div");if(e.classList.add("h5p-image-juxtaposition-container"),this.spinner=new r("h5p-image-juxtaposition-spinner"),e.appendChild(this.spinner.getDOM()),this.params.taskDescription&&(this.taskDescription=document.createElement("div"),this.taskDescription.classList.add("h5p-image-juxtaposition-task-description"),this.taskDescription.classList.add("h5p-image-juxtaposition-task-description-none"),this.taskDescription.innerHTML=this.params.taskDescription,e.appendChild(this.taskDescription)),this.params.imageBefore.imageBefore.params.file&&this.params.imageBefore.imageBefore.params.file.path&&this.params.imageAfter.imageAfter.params.file&&this.params.imageAfter.imageAfter.params.file.path){var a=document.createElement("div");a.classList.add("h5p-image-juxtaposition-juxtapose"),e.appendChild(a),this.slider=new n({container:a,images:[{src:H5P.getPath(this.params.imageBefore.imageBefore.params.file.path,this.contentId),alt:this.params.imageBefore.imageBefore.params.alt,title:this.params.imageBefore.imageBefore.params.title,label:this.params.imageBefore.labelBefore},{src:H5P.getPath(this.params.imageAfter.imageAfter.params.file.path,this.contentId),alt:this.params.imageAfter.imageAfter.params.alt,title:this.params.imageAfter.imageAfter.params.title,label:this.params.imageAfter.labelAfter}],startingPosition:this.params.behavior.startingPosition+"%",mode:this.params.behavior.sliderOrientation,color:this.params.behavior.sliderColor},(function(){t.handleLoaded()})),this.on("resize",(function(){t.containerH5P=e.closest(".h5p-image-juxtaposition"),setTimeout((function(){t.setDimensions(t.containerH5P.classList.contains("h5p-fullscreen")||t.containerH5P.classList.contains("h5p-semi-fullscreen"))}),0)}))}else{var i=document.createElement("div");i.classList.add("h5p-image-juxtaposition-missing-images"),i.innerHTML="I really need two background images :)",e.appendChild(i),this.spinner.hide()}this.setContent(e)},s.setDimensions=function(t){var e=0;if(this.taskDescription){var a=window.getComputedStyle(this.taskDescription),i=parseFloat(a.marginTop)+parseFloat(a.marginBottom);e=Math.ceil(this.taskDescription.offsetHeight+i)}var s=t?{height:window.innerHeight-e,width:window.innerWidth}:void 0;if(!s){var n=this.isRoot()&&H5P.KLDisplay&&H5P.KLDisplay.computeDisplayLimitsKLL?H5P.KLDisplay.computeDisplayLimitsKLL(this.containerH5P):null;n&&(s={height:n.height-e,width:n.width})}this.slider.resize(s)},s.handleLoaded=function(){this.spinner.hide(),this.taskDescription&&this.taskDescription.classList.remove("h5p-image-juxtaposition-task-description-none"),this.trigger("resize")},s.getTitle=function(){var t;return this.contentData&&this.contentData.metadata&&(t=this.contentData.metadata.title),t=t||i.DEFAULT_DESCRIPTION,H5P.createTitle(t)},i}(H5P.Question);d.DEFAULT_DESCRIPTION="Image Juxtaposition";var m=d;H5P=H5P||{},H5P.ImageJuxtaposition=m}();