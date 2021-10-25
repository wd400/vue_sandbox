(window.webpackJsonp=window.webpackJsonp||[]).push([[23,11],{393:function(t,e,n){"use strict";n(21);e.a={required:function(t){return function(e){return e&&e.length>0||"You must input a ".concat(t)}},minLength:function(t,e){return function(n){return n&&n.length>=e||"".concat(t," must be at least ").concat(e," characters")}},maxLength:function(t,e){return function(n){return n&&n.length<=e||"".concat(t," must be less than ").concat(e," characters")}},emailFormat:function(){var t=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,24})+$/;return function(e){return e&&t.test(e)||"Must be a valid email"}}}},396:function(t,e,n){"use strict";n.r(e);n(11),n(8),n(15),n(19),n(16),n(20);var r=n(2),o=(n(21),n(393));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={props:{destination:{type:Object,required:!0},title:{type:String,default:null},needed:{type:Boolean,default:!0}},data:function(){return l(l({show:!1},o.a),{},{rules:[]})},methods:{getTitle:function(){var t;return null!==(t=this.title)&&void 0!==t?t:this.$t("password")}},created:function(){this.rules=[this.minLength("password",8)],this.needed&&this.rules.concat(this.required("password"))}},f=n(74),v=n(83),w=n.n(v),h=n(421),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-text-field",{attrs:{type:t.show?"text":"password","append-icon":t.show?"mdi-eye":"mdi-eye-off",label:t.getTitle(),rules:t.rules},on:{"click:append":function(e){t.show=!t.show}},model:{value:t.destination.password,callback:function(e){t.$set(t.destination,"password",e)},expression:"destination.password"}})}),[],!1,null,null,null);e.default=component.exports;w()(component,{VTextField:h.a})},487:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{payload:{password:""},newPseudo:"",newMail:"",newPasswordRef:{password:""}}},created:function(){this.$auth.loggedIn||this.$router.push("/login")},methods:{savePseudo:function(){this._updateUserMetadata("renameuser",this.newPseudo)},saveMail:function(){this._updateUserMetadata("changemail",this.newMail)},savePassword:function(){this._updateUserMetadata("changepassword",this.newPasswordRef.password)},deleteAccount:function(){var t=this;this.$axios.post("/deleteaccount",{password:this.payload.password}).then((function(e){t.$notifier.showMessage({content:t.$t("done"),color:"info"}),t.$auth.logout(),t.$router.push("/")})).catch((function(e){t.$notifier.showMessage({content:t.$t("error"),color:"error"})}))},_updateUserMetadata:function(t,data){var e=this;this.$axios.post("/"+t,{data:data,password:this.payload.password}).then((function(t){e.$notifier.showMessage({content:e.$t("done"),color:"info"})})).catch((function(t){e.$notifier.showMessage({content:e.$t("error"),color:"error"})}))}}},o=n(74),c=n(83),l=n.n(c),d=n(391),f=(n(191),n(196)),v=Object(f.a)("flex"),w=n(375),h=Object(f.a)("layout"),x=n(421),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("br"),t._v(" "),n("v-layout",{attrs:{column:"",wrap:""}},[n("v-layout",{attrs:{row:"","justify-center":"","align-center":""}},[n("v-flex",{attrs:{xs2:"",md3:""}},[n("h3",[t._v(t._s(t.$t("rename_user")))])]),t._v(" "),n("v-flex",{attrs:{xs2:"",md3:""}},[n("v-text-field",{attrs:{counter:"",maxlength:"35",label:t.$t("new_pseudo")},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.saveTitle.apply(null,arguments)}},model:{value:t.newPseudo,callback:function(e){t.newPseudo=e},expression:"newPseudo"}})],1),t._v(" "),n("v-flex",{attrs:{xs2:"",md3:""}},[n("v-btn",{attrs:{icon:""},on:{click:function(e){return t.savePseudo()}}},[n("v-icon",[t._v("mdi-content-save")])],1)],1)],1),t._v(" "),n("v-layout",{attrs:{row:"","justify-center":"","align-center":""}},[n("v-flex",{attrs:{xs2:"",md3:""}},[n("h3",[t._v(t._s(t.$t("change_mail")))])]),t._v(" "),n("v-flex",{attrs:{xs2:"",md3:""}},[n("v-text-field",{attrs:{counter:"",maxlength:"35",label:t.$t("new_mail")},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.saveTitle.apply(null,arguments)}},model:{value:t.newMail,callback:function(e){t.newMail=e},expression:"newMail"}})],1),t._v(" "),n("v-flex",{attrs:{xs2:"",md3:""}},[n("v-btn",{attrs:{icon:""},on:{click:function(e){return t.saveMail()}}},[n("v-icon",[t._v("mdi-content-save")])],1)],1)],1),t._v(" "),n("v-layout",{attrs:{row:"","justify-center":"","align-center":""}},[n("v-flex",{attrs:{xs2:"",md3:""}},[n("h3",[t._v(t._s(t.$t("change_password")))])]),t._v(" "),n("v-flex",{attrs:{xs2:"",md3:""}},[n("PasswordField",{attrs:{needed:!1,title:t.$t("new_password"),destination:t.newPasswordRef}})],1),t._v(" "),n("v-flex",{attrs:{xs2:"",md3:""}},[n("v-btn",{attrs:{icon:""},on:{click:function(e){return t.savePassword()}}},[n("v-icon",[t._v("mdi-content-save")])],1)],1)],1),t._v(" "),n("v-layout",{attrs:{row:"","justify-center":"","align-center":""}},[n("v-flex",{attrs:{xs2:"",md3:""}},[n("h3",[t._v(t._s(t.$t("delete_account")))])]),t._v(" "),n("v-flex",{attrs:{xs2:"",md3:""}}),t._v(" "),n("v-flex",{attrs:{xs2:"",md3:""}},[n("v-btn",{attrs:{icon:""},on:{click:function(e){return t.deleteAccount()}}},[n("v-icon",[t._v("mdi-account-remove")])],1)],1)],1),t._v(" "),n("v-layout",{attrs:{row:"","justify-center":""}},[n("v-flex",{attrs:{xs2:"",md3:""}}),t._v(" "),n("v-flex",{attrs:{xs2:"",md3:""}}),t._v(" "),n("v-flex",{attrs:{xs2:"",md3:""}},[n("PasswordField",{attrs:{title:t.$t("current_password"),destination:t.payload}})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{PasswordField:n(396).default}),l()(component,{VBtn:d.a,VFlex:v,VIcon:w.a,VLayout:h,VTextField:x.a})}}]);