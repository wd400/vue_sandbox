(window.webpackJsonp=window.webpackJsonp||[]).push([[16,12],{400:function(t,e,n){"use strict";n.r(e);n(42),n(22);var o={props:{reportType:{type:String,required:!0},id:{type:Number,required:!0},cellId:{type:Number,required:!1},callback:{required:!0}},data:function(){return{detail:null,select:null,items:[{state:this.$t("advertising"),abbr:1},{state:this.$t("spam"),abbr:2},{state:this.$t("other"),abbr:3}]}},methods:{sendReport:function(){var t=this;if(null==this.select)this.$notifier.showMessage({content:this.$t("error"),color:"error"});else{var e="report".concat(this.reportType,"/").concat(this.id);"cell"==this.reportType&&(e+="/".concat(this.cellId)),this.$axios.post(e,{reason:this.select.abbr,detail:this.detail}).then((function(e){t.$notifier.showMessage({content:t.$t("done"),color:"info"}),t.callback()})).catch((function(e){t.$notifier.showMessage({content:t.$t("error"),color:"error"})}))}}}},r=n(74),l=n(83),c=n.n(l),d=n(392),h=n(376),v=n(487),m=n(440),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-select",{attrs:{items:t.items,"item-text":"state","item-value":"abbr",label:t.$t("reason"),"persistent-hint":"","return-object":"","single-line":""},model:{value:t.select,callback:function(e){t.select=e},expression:"select"}}),t._v(" "),n("v-textarea",{attrs:{counter:"",maxlength:"100",label:t.$t("details"),outlined:"","full-width":!0,required:""},model:{value:t.detail,callback:function(e){t.detail=e},expression:"detail"}}),t._v(" "),n("v-btn",{on:{click:function(e){return t.sendReport()}}},[n("v-icon",[t._v("mdi-send")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VIcon:h.a,VSelect:v.a,VTextarea:m.a})},405:function(t,e,n){var content=n(406);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("12a190a6",content,!0,{sourceMap:!1})},406:function(t,e,n){var o=n(30)(!1);o.push([t.i,".v-input--checkbox.v-input--indeterminate.v-input--is-disabled{opacity:.6}.v-input--checkbox.v-input--dense{margin-top:4px}",""]),t.exports=o},407:function(t,e,n){var content=n(408);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("2e2bc7da",content,!0,{sourceMap:!1})},408:function(t,e,n){var o=n(30)(!1);o.push([t.i,'.theme--light.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:rgba(0,0,0,.26)!important}.theme--dark.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:hsla(0,0%,100%,.3)!important}.v-input--selection-controls{margin-top:16px;padding-top:4px}.v-input--selection-controls>.v-input__append-outer,.v-input--selection-controls>.v-input__prepend-outer{margin-top:0;margin-bottom:0}.v-input--selection-controls:not(.v-input--hide-details)>.v-input__slot{margin-bottom:12px}.v-input--selection-controls .v-input__slot,.v-input--selection-controls .v-radio{cursor:pointer}.v-input--selection-controls .v-input__slot>.v-label,.v-input--selection-controls .v-radio>.v-label{align-items:center;display:inline-flex;flex:1 1 auto;height:auto}.v-input--selection-controls__input{color:inherit;display:inline-flex;flex:0 0 auto;height:24px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);transition-property:transform;width:24px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__input .v-icon{width:100%}.v-application--is-ltr .v-input--selection-controls__input{margin-right:8px}.v-application--is-rtl .v-input--selection-controls__input{margin-left:8px}.v-input--selection-controls__input input[role=checkbox],.v-input--selection-controls__input input[role=radio],.v-input--selection-controls__input input[role=switch]{position:absolute;opacity:0;width:100%;height:100%;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__input+.v-label{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__ripple{border-radius:50%;cursor:pointer;height:34px;position:absolute;transition:inherit;width:34px;left:-12px;top:calc(50% - 24px);margin:7px}.v-input--selection-controls__ripple:before{border-radius:inherit;bottom:0;content:"";position:absolute;opacity:.2;left:0;right:0;top:0;transform-origin:center center;transform:scale(.2);transition:inherit}.v-input--selection-controls__ripple>.v-ripple__container{transform:scale(1.2)}.v-input--selection-controls.v-input--dense .v-input--selection-controls__ripple{width:28px;height:28px;left:-9px}.v-input--selection-controls.v-input--dense:not(.v-input--switch) .v-input--selection-controls__ripple{top:calc(50% - 21px)}.v-input--selection-controls.v-input{flex:0 1 auto}.v-input--selection-controls.v-input--is-focused .v-input--selection-controls__ripple:before,.v-input--selection-controls .v-radio--is-focused .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2)}.v-input--selection-controls__input:hover .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2);transition:none}',""]),t.exports=o},421:function(t,e,n){"use strict";n.r(e);n(42),n(22);var o={props:{boardId:{type:Number,required:!0},cellId:{type:Number,required:!1},callback:{required:!0}},data:function(){return{suggestion:"",isAnonym:!1}},methods:{sendSuggestion:function(){var t=this;this.$axios.post("/makesuggestion/".concat(this.boardId,"/").concat(this.cellId),{anonym:this.isAnonym,suggestion:this.suggestion}).then((function(e){t.$notifier.showMessage({content:t.$t("done"),color:"info"}),t.callback()})).catch((function(e){t.$notifier.showMessage({content:t.$t("error"),color:"error"})}))}}},r=n(74),l=n(83),c=n.n(l),d=n(392),h=n(432),v=n(376),m=n(440),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-textarea",{attrs:{counter:"",maxlength:"100",label:t.$t("suggestion"),outlined:"","full-width":!0,required:""},model:{value:t.suggestion,callback:function(e){t.suggestion=e},expression:"suggestion"}}),t._v(" "),n("v-checkbox",{attrs:{label:t.$t("anonym")},model:{value:t.isAnonym,callback:function(e){t.isAnonym=e},expression:"isAnonym"}}),t._v(" "),n("v-btn",{on:{click:function(e){return t.sendSuggestion()}}},[n("v-icon",[t._v("mdi-send")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VCheckbox:h.a,VIcon:v.a,VTextarea:m.a})},432:function(t,e,n){"use strict";n(12),n(8),n(15),n(20),n(16),n(21);var o=n(85),r=n(2),l=(n(13),n(65),n(405),n(407),n(375)),c=n(398),d=n(186),h=n(0).a.extend({name:"rippleable",directives:{ripple:d.a},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var data=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(data.staticClass="v-input--selection-controls__ripple",data.directives=data.directives||[],data.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",data)):null}}}),v=n(409),m=n(27);function f(t){t.preventDefault()}var _=Object(m.a)(c.a,h,v.a).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,input=this.internalValue;return this.isMultiple?!!Array.isArray(input)&&input.some((function(n){return t.valueComparator(n,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,input):Boolean(input):this.valueComparator(input,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var label=c.a.options.methods.genLabel.call(this);return label?(label.data.on={click:f},label):label},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:f},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,input=this.internalValue;if(this.isMultiple){Array.isArray(input)||(input=[]);var n=input.length;(input=input.filter((function(n){return!t.valueComparator(n,e)}))).length===n&&input.push(e)}else input=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(input,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(input,e)?null:e:!input;this.validate(!0,input),this.internalValue=input,this.hasColor=input}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}}),x=["title"];function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function k(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=_.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return k(k({},c.a.options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){var t=this.attrs$,e=(t.title,Object(o.a)(t,x));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(l.a,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",k(k({},e),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}})},441:function(t,e,n){"use strict";n.r(e);n(42);var o={props:{xml:{type:String,required:!0},editmode:{type:Boolean,required:!0},boardId:{type:Number,required:!0},gotoCell:{type:Object,required:!0}},data:function(){return{loaded:!1,showReport:!1,reportCell:null,cellId:null,showSuggestion:!1}},methods:{closeSuggestion:function(){this.showSuggestion=!1},cellReported:function(){this.showReport=!1},saveCallback:function(t){var e=this;this.$axios.post("/updateboardcontent/"+this.boardId,{xml:t}).then((function(t){e.$notifier.showMessage({content:e.$t("saved"),color:"info"})})).catch((function(t){e.$notifier.showMessage({content:e.$t("error"),color:"error"})}))},reportCallback:function(t){this.cellId=parseInt(t),this.showReport=!0},suggestCallback:function(t){this.cellId=parseInt(t),this.showSuggestion=!0}},created:function(){var t=document.createElement("script");t.src="/mxgraph/mxClient.js";var e,n=this.xml,o=this.editmode,r=this.saveCallback,l=this.reportCallback,c=this.suggestCallback,d=this.$auth.loggedIn,h=this.gotoCell;e=this.editmode?"/mxgraph/examples/editors/config/diagrameditor.xml":"/mxgraph/examples/editors/config/simplediagrameditor.xml",t.onload=function(){var t=document.createElement("script");t.src="/mxgraph/examples/editors/js/app.js",document.head.appendChild(t),t.onload=function(){createEditor(e,n,o,r,l,c,h,d)}},document.head.appendChild(t)}},r=n(74),l=n(83),c=n.n(l),d=n(392),h=n(376),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("body",[n("div",{staticStyle:{"background-color":"white"},attrs:{id:"page"}},[n("div",{staticStyle:{width:"100%","padding-top":"8px","padding-bottom":"8px","padding-left":"16px"},attrs:{id:"mainActions"}},[t.editmode?n("v-btn",{attrs:{"x-small":"",id:"OrganicLayout"}},[t._v(t._s(t.$t("organic_layout")))]):t._e(),t._v(" "),t.editmode?n("v-btn",{attrs:{"x-small":"",id:"cut"}},[t._v(t._s(t.$t("cut")))]):t._e(),t._v(" "),t.editmode?n("v-btn",{attrs:{"x-small":"",id:"copy"}},[t._v(t._s(t.$t("copy")))]):t._e(),t._v(" "),t.editmode?n("v-btn",{attrs:{"x-small":"",id:"paste"}},[t._v(t._s(t.$t("paste")))]):t._e(),t._v(" "),t.editmode?n("v-btn",{attrs:{"x-small":"",id:"delete"}},[t._v(t._s(t.$t("delete")))]):t._e(),t._v(" "),t.editmode?n("v-btn",{attrs:{"x-small":"",id:"undo"}},[t._v(t._s(t.$t("undo")))]):t._e(),t._v(" "),t.editmode?n("v-btn",{attrs:{"x-small":"",id:"redo"}},[t._v(t._s(t.$t("redo")))]):t._e(),t._v(" "),n("v-btn",{attrs:{"x-small":"",id:"print"}},[t._v(t._s(t.$t("print")))]),t._v(" "),n("v-btn",{attrs:{"x-small":"",id:"show"}},[t._v(t._s(t.$t("show")))])],1),t._v(" "),n("table",{attrs:{border:"0",width:"width:100%"}},[n("tr",[n("td",{staticStyle:{width:"16px"},attrs:{id:"toolbar",valign:"top"}}),t._v(" "),n("td",{staticStyle:{"border-width":"1px","border-style":"solid","border-color":"black"},attrs:{valign:"top"}},[n("div",{staticStyle:{"z-index":"1",position:"absolute",overflow:"hidden",width:"160px",height:"120px",background:"transparent","border-style":"solid","border-color":"lightgray"},attrs:{id:"outlineContainer"}}),t._v(" "),n("div",{staticStyle:{position:"relative",height:"580px",width:"784px",overflow:"hidden",cursor:"default"},attrs:{id:"graph",tabindex:"-1"}},[n("center",{staticStyle:{"padding-top":"230px"},attrs:{id:"splash"}},[n("img",{attrs:{src:"/images/loading.gif"}})])],1)])])]),t._v(" "),n("div",{staticStyle:{"padding-left":"16px"}},[n("v-btn",{attrs:{"x-small":"",id:"zoomIn"}},[t._v(t._s(t.$t("zoomIn")))]),t._v(" "),n("v-btn",{attrs:{"x-small":"",id:"zoomOut"}},[t._v(t._s(t.$t("zoomOut")))]),t._v(" "),n("v-btn",{attrs:{"x-small":"",id:"actualSize"}},[t._v(t._s(t.$t("actualSize")))]),t._v(" "),n("v-btn",{attrs:{"x-small":"",id:"fit"}},[t._v(t._s(t.$t("fit")))]),t._v(" "),t.editmode?n("v-btn",{attrs:{id:"saveid"}},[n("v-icon",[t._v("mdi-content-save")])],1):t._e()],1)]),t._v(" "),t.showSuggestion?n("div",{attrs:{gotoCell:t.gotoCell}},[n("v-btn",{on:{click:function(e){t.showSuggestion=!1}}},[n("v-icon",[t._v("mdi-close")])],1),t._v(" "),n("Suggest",{attrs:{callback:t.closeSuggestion,cellId:t.cellId,boardId:t.boardId}})],1):t._e(),t._v(" "),t.showReport?n("div",[n("v-btn",{on:{click:function(e){t.showReport=!1}}},[n("v-icon",[t._v("mdi-close")])],1),t._v(" "),n("Report",{attrs:{callback:t.cellReported,reportType:"cell",cellId:t.cellId,id:t.boardId}})],1):t._e()])}),[],!1,null,null,null);e.default=component.exports;c()(component,{Suggest:n(421).default,Report:n(400).default}),c()(component,{VBtn:d.a,VIcon:h.a})}}]);