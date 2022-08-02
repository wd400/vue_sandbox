(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{179:function(t,n,o){"use strict";o.r(n);var e={methods:{Fshow:function(){this.show=!1}},data:function(){return{show:!1,message:"",color:""}},created:function(){var t=this;this.$store.subscribe((function(n,o){"snackbar/showMessage"===n.type&&(t.message=o.snackbar.content,t.color=o.snackbar.color,t.show=!0)}))}},r=o(74),c=o(83),l=o.n(c),f=o(391),h=o(386),component=Object(r.a)(e,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("v-snackbar",{attrs:{color:t.color,timeout:"3000"},scopedSlots:t._u([{key:"action",fn:function(n){var e=n.attrs;return[o("v-btn",t._b({attrs:{text:""},on:{click:function(n){return t.Fshow()}}},"v-btn",e,!1),[t._v("Close")])]}}]),model:{value:t.show,callback:function(n){t.show=n},expression:"show"}},[t._v("\n\n  "+t._s(t.message)+"\n  ")])}),[],!1,null,null,null);n.default=component.exports;l()(component,{VBtn:f.a,VSnackbar:h.a})},184:function(t,n,o){"use strict";n.a=function(t,n){t.app;var o=t.store;n("notifier",{showMessage:function(t){var n=t.content,content=void 0===n?"":n,e=t.color,r=void 0===e?"":e;o.commit("snackbar/showMessage",{content:content,color:r})}})}},231:function(t,n,o){var content=o(304);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(31).default)("2d33dd58",content,!0,{sourceMap:!1})},251:function(t,n,o){"use strict";o(11),o(60);var e={components:{Snackbar:o(179).default},data:function(){return{drawer:!1,fixed:!1,items:[{icon:"mdi-apps",title:"Welcome",to:"/"},{icon:"mdi-chart-bubble",title:"Inspire",to:"/inspire"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Vuetify.js"}},mounted:function(){var t=localStorage.getItem("useDarkTheme");t&&(this.$vuetify.theme.dark="true"==t)},methods:{toggleTheme:function(){this.$vuetify.theme.dark=!this.$vuetify.theme.dark,localStorage.setItem("useDarkTheme",this.$vuetify.theme.dark.toString())},gotoRandom:function(){this.$router.push("/newrandom")},gotoRegister:function(){this.$router.push("/register")},gotoLogin:function(){this.$router.push("/login")},logout:function(){this.$auth.logout()},gotoMe:function(){this.$router.push("/user/me")},gotoSearch:function(){this.$router.push("/search")},gotoSettings:function(){this.$router.push("/settings")}}},r=o(74),c=o(83),l=o.n(c),f=o(385),h=o(390),v=o(391),d=o(387),m=o(377),_=o(388),k=o(389),component=Object(r.a)(e,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("v-app",[o("v-app-bar",{attrs:{fixed:"",app:"",dense:""}},[o("v-btn",{attrs:{small:"",text:""},on:{click:function(n){return t.gotoSearch()}}},[t._v(t._s(t.$t("search")))]),t._v(" "),o("v-btn",{attrs:{small:"",text:""},on:{click:function(n){return t.gotoRandom()}}},[t._v(t._s(t.$t("random")))]),t._v(" "),t.$auth.loggedIn?o("div",[o("v-btn",{attrs:{small:"",text:""},on:{click:function(n){return t.gotoMe()}}},[t._v(t._s(t.$t("me")))])],1):t._e(),t._v(" "),o("v-spacer"),t._v(" "),o("v-btn",{attrs:{icon:""},on:{click:function(n){return t.toggleTheme()}}},[o("v-icon",[t._v("mdi-theme-light-dark")])],1),t._v(" "),t.$auth.loggedIn?o("div",[o("v-btn",{attrs:{icon:""},on:{click:function(n){return t.gotoSettings()}}},[o("v-icon",[t._v("mdi-account-cog")])],1),t._v(" "),o("v-btn",{attrs:{small:"",text:""},on:{click:function(n){return t.logout()}}},[t._v(t._s(t.$t("logout")))])],1):o("div",[o("v-btn",{attrs:{small:"",text:""},on:{click:function(n){return t.gotoLogin()}}},[t._v(t._s(t.$t("login")))]),t._v(" "),o("v-btn",{attrs:{small:"",text:""},on:{click:function(n){return t.gotoRegister()}}},[t._v(t._s(t.$t("register")))])],1)],1),t._v(" "),o("v-main",[o("v-container",{class:{"mx-0":"/board/"==t.$route.fullPath.substring(0,7)||"/random/"==t.$route.fullPath.substring(0,8)}},[o("Nuxt")],1)],1),t._v(" "),o("Snackbar")],1)}),[],!1,null,null,null);n.a=component.exports;l()(component,{Snackbar:o(179).default}),l()(component,{VApp:f.a,VAppBar:h.a,VBtn:v.a,VContainer:d.a,VIcon:m.a,VMain:_.a,VSpacer:k.a})},275:function(t,n,o){o(276),t.exports=o(277)},303:function(t,n,o){"use strict";o(231)},304:function(t,n,o){var e=o(30)(!1);e.push([t.i,"h1[data-v-2782ff49]{font-size:20px}",""]),t.exports=e},349:function(t,n,o){"use strict";o.r(n),o.d(n,"state",(function(){return e})),o.d(n,"mutations",(function(){return r}));var e=function(){return{content:"",color:""}},r={showMessage:function(t,n){t.content=n.content,t.color=n.color}}},374:function(t,n){function o(t){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}o.keys=function(){return[]},o.resolve=o,t.exports=o,o.id=374},81:function(t,n,o){"use strict";var e={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},r=(o(303),o(74)),c=o(83),l=o.n(c),f=o(385),component=Object(r.a)(e,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("v-app",[404===t.error.statusCode?o("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):o("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),o("NuxtLink",{attrs:{to:t.$router.push("/")}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"2782ff49",null);n.a=component.exports;l()(component,{VApp:f.a})}},[[275,25,6,26]]]);