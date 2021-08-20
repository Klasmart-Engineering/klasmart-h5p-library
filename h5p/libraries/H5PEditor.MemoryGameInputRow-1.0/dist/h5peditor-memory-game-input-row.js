!function(){"use strict";function e(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function t(e,r){return(t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,r)}var r=function(r){var i,n;function a(t,i,n,a){var d;(d=r.call(this)||this).parent=t,d.field=i,d.params=n||{},d.setValue=a,d.field.inputrow=d.field.inputrow||{},d.changes=[],d.passReadies=!0,d.numberCards=0,d.list,d.numberOverride;var s=d.getTopField(e(d));s.ready((function(){d.numberOverride=d.findField("behaviour/numCardsToUse",s),d.numberOverride.$input.change((function(){d.handleCardsNumberChanged()})),d.list=d.findField("cards",s),d.list.on("addedItem",(function(){d.handleCardsNumberChanged()})),d.list.on("removedItem",(function(){d.handleCardsNumberChanged()})),d.squareSelector=d.findField("behaviour/useGrid",s),d.squareSelector.$input.change((function(){d.handleSquareSelectorChanged()})),d.handleSquareSelectorChanged(),d.handleCardsNumberChanged()})),d.$container=H5P.jQuery("<fieldset>",{class:"field group field-name-".concat(d.field.name," h5peditor-memory-game-input-row expanded")});var o=document.createElement("div");o.classList.add("title"),o.innerText=d.field.label,d.$container.get(0).appendChild(o);var l=document.createElement("div");if(l.classList.add("h5peditor-memory-game-input-row-content"),d.$container.get(0).appendChild(l),d.field.description){var u=document.createElement("div");u.classList.add("h5peditor-field-description"),u.innerText=d.field.description,l.appendChild(u)}var c=document.createElement("div");return c.classList.add("h5peditor-memory-game-input-row-row"),l.appendChild(c),d.$errors=H5P.jQuery("<div>",{class:"h5p-errors"}),l.appendChild(d.$errors.get(0)),d.children=[],d.field.fields.forEach((function(t){d.params[t.name]=d.params[t.name]||t.default;var r=new H5PEditor.widgets[t.type](e(d),t,d.params[t.name],(function(e,t){d.handleChanged(e,t)}));r.appendTo(c),d.$errors.append(r.$errors),"number"===r.field.type&&((d.field.inputrow.HTML5NumberField||r.field.inputRow&&r.field.inputrow.HTML5NumberField)&&(r.$input.get(0).setAttribute("type","number"),r.field.min&&r.$input.get(0).setAttribute("min",r.field.min),r.field.max&&r.$input.get(0).setAttribute("max",r.field.max),r.field.step&&r.$input.get(0).setAttribute("step",r.field.step),!d.params[r.field.name]&&r.field.default&&r.$input.get(0).setAttribute("value",r.field.default)),(d.field.inputrow.changedOnEnter||r.field.inputrow&&r.field.inputrow.changedOnEnter)&&r.$input.get(0).addEventListener("keydown",(function(e){"Enter"===e.key&&r.$input.change()}))),"none"===r.field.widget&&(r.$item.get(0).style.display="none"),d.children.push(r)})),d.memoryError=document.createElement("div"),d.memoryError.classList.add("h5p-errors"),d.$errors.get(0).append(d.memoryError),d.setValue(d.field,d.params),d}n=r,(i=a).prototype=Object.create(n.prototype),i.prototype.constructor=i,t(i,n);var d=a.prototype;return d.appendTo=function(e){this.$container.appendTo(e)},d.validate=function(){if(this.memoryError.innerHTML="",!this.children.every((function(e){return!1!==e.validate()})))return!1;try{var e=Object.keys(this.params),t=Object.values(this.params);if(2*this.numberCards/t[0]%1!=0||2*this.numberCards/t[1]%1!=0)throw H5PEditor.t("H5PEditor.MemoryGameInputRow","rowColumnsNotPossible",{":rows":this.field.fields[0].label||e[0],":columns":this.field.fields[1].label||e[1]})}catch(e){this.memoryError.innerHTML=H5PEditor.createError(e)}return""===this.memoryError.innerHTML},d.remove=function(){this.$container.remove()},d.getTopField=function(e){return e.parent?this.getTopField(e.parent):e},d.findField=function(e,t){if("string"==typeof e&&(e=e.split("/")),".."===e[0])return e.splice(0,1),this.findField(e,t.parent);if(t.children)for(var r=0;r<t.children.length;r++)if(t.children[r].field.name===e[0]||t.children[r]instanceof H5PEditor.List&&t.children[r].getName()===e[0])return e.splice(0,1),e.length?this.findField(e,t.children[r]):t.children[r];return!1},d.handleCardsNumberChanged=function(){var e=this.numberOverride.$input.val()||0,t=this.list.getValue().length;this.numberCards=e<3||e>t?t:e,this.validate()},d.handleChanged=function(e,t){var r=this;if(this.params[e.name]=t,this.setValue(this.field,this.params),this.children.forEach((function(e){""!==e.$input.val()&&(r.squareSelector.$input.get(0).checked=!1)})),2*this.numberCards/this.params.rows!==this.params.columns)if("rows"===e.name){var i=2*this.numberCards/t;i%1==0&&this.children[1].$input.val(i).change()}else{var n=2*this.numberCards/t;n%1==0&&this.children[0].$input.val(n).change()}this.validate(),this.trigger("changed",this.params),this.changes.forEach((function(e){e(r.params)}))},d.handleSquareSelectorChanged=function(){this.squareSelector.$input.get(0).checked&&this.children.forEach((function(e){e.$input.val("")}))},a}(H5P.EventDispatcher);H5PEditor=H5PEditor||{},H5PEditor.widgets.memorygameinputrow=r}();