(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{"+gvn":function(t,e,r){"use strict";r.r(e);var o={extends:r("WK6j").a,data:function(){return{formData:{name:"",email:"",username:"",password:"",passwordConfirmation:""},registrationPending:!1,registrationPendingMessage:$t("auth.register.pending_activation_message")}},methods:{submit:function(){var t=this;this.isLoading=!0;this.$route.query;this.$gaEvent("engagement","register","Normal"),this.Register(this.formData).then((function(e){t.$toasted.success(e.message,t.$toastConfig),"activated"===e.registrationStatus?t.$router.push(t.withQuery({name:"login"})):(t.registrationPending=!0,t.registrationPendingMessage=e.message),t.isLoading=!1})).catch((function(e){t.isLoading=!1,t.formErrors=formUtil.handleErrors(e)}))}},created:function(){this.$route.query.hasOwnProperty("registered")&&(this.registrationPending=!!this.$route.query.hasOwnProperty("registered"))}},s=r("KHd+"),a=Object(s.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"guest-page"},[r("box",{attrs:{width:"xxl"}},[r("animated-loader",{attrs:{"is-loading":t.isLoading,"loader-color":t.vars.loaderColor}}),t._v(" "),t.registrationPending?[r("guest-header",[r("h4",{staticClass:"text-primary"},[t._v(t._s(t.$t("auth.register.completed")))])]),t._v(" "),r("div",{staticClass:"text-muted"},[r("h6",{staticClass:"text-muted text-center"},[t._v(t._s(t.registrationPendingMessage))])]),t._v(" "),r("div",{staticClass:"row mt-4"},[r("div",{staticClass:"col-md-12 text-center"},[r("router-link",{staticClass:"text-primary m-l-5",attrs:{to:t.withQuery({name:"login"})}},[r("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.$t("auth.login.page_title")))])])],1)])]:[r("guest-header",[r("h5",[t._v(t._s(t.$t("auth.register.page_title")))])]),t._v(" "),r("section",{attrs:{role:"main"}},[r("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[r("base-input",{staticClass:"mb-3",attrs:{"auto-focus":"",label:t.$t("auth.register.props.name"),type:"text",name:"name","addon-left-icon":"far fa-id-badge",error:t.formErrors.name},on:{"update:error":function(e){return t.$set(t.formErrors,"name",e)}},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}}),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6"},[r("base-input",{staticClass:"mb-3",attrs:{label:t.$t("auth.register.props.email"),type:"text",name:"email","addon-left-icon":"fas fa-envelope",error:t.formErrors.email},on:{"update:error":function(e){return t.$set(t.formErrors,"email",e)}},model:{value:t.formData.email,callback:function(e){t.$set(t.formData,"email",e)},expression:"formData.email"}})],1),t._v(" "),r("div",{staticClass:"col-md-6"},[r("base-input",{staticClass:"mb-3",attrs:{label:t.$t("auth.register.props.username"),type:"text",name:"username","addon-left-icon":"fas fa-user",error:t.formErrors.username},on:{"update:error":function(e){return t.$set(t.formErrors,"username",e)}},model:{value:t.formData.username,callback:function(e){t.$set(t.formData,"username",e)},expression:"formData.username"}})],1),t._v(" "),r("div",{staticClass:"col-md-6"},[r("base-input",{staticClass:"mb-3",attrs:{label:t.$t("auth.register.props.password"),type:"password",name:"password","addon-left-icon":"fas fa-key",error:t.formErrors.password},on:{"update:error":function(e){return t.$set(t.formErrors,"password",e)}},model:{value:t.formData.password,callback:function(e){t.$set(t.formData,"password",e)},expression:"formData.password"}})],1),t._v(" "),r("div",{staticClass:"col-md-6"},[r("base-input",{staticClass:"mb-3",attrs:{label:t.$t("auth.register.props.confirm_password"),type:"password",name:"passwordConfirmation","addon-left-icon":"fas fa-key",error:t.formErrors.passwordConfirmation},on:{"update:error":function(e){return t.$set(t.formErrors,"passwordConfirmation",e)}},model:{value:t.formData.passwordConfirmation,callback:function(e){t.$set(t.formData,"passwordConfirmation",e)},expression:"formData.passwordConfirmation"}})],1)]),t._v(" "),t.configs&&t.configs.auth&&t.configs.auth.registrationTerms?r("div",{staticClass:"pt-4 pb-2 text-muted text-center"},[t._v("\n                        "+t._s(t.$t("auth.register.registration_terms_label"))+" "),r("a",{attrs:{href:"/pages/terms",target:"_blank"}},[t._v(t._s(t.$t("auth.register.registration_terms_label_tos")))]),t._v(" "+t._s(t.$t("auth.register.registration_terms_label_and"))+" "),r("a",{attrs:{href:"/pages/privacy",target:"_blank"}},[t._v(t._s(t.$t("auth.register.registration_terms_label_privacy")))]),t._v(".\n                    ")]):t._e(),t._v(" "),r("div",{staticClass:"text-center mt-4"},[r("base-button",{staticClass:"my-4 text-lg",attrs:{type:"submit",design:"primary",block:""}},[t._v(t._s(t.$t("auth.register.register")))])],1),t._v(" "),r("div",{staticClass:"row mt-4"},[r("div",{staticClass:"col-md-12 text-center"},[r("router-link",{staticClass:"text-primary m-l-5",attrs:{to:t.withQuery({name:"login"})}},[r("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.$t("auth.register.already_have_account")))])])],1)]),t._v(" "),t.showLocaleSwitcher?r("div",{staticClass:"row mt-4"},[r("div",{staticClass:"col-md-12 text-center"},[r("base-dropdown",{attrs:{tag:"div",direction:"up","menu-classes":"show-dropdown-up"}},[r("base-button",{staticClass:"text-uppercase",attrs:{slot:"title",type:"button",design:"light",block:"","data-toggle":"dropdown",role:"button",size:"sm"},slot:"title"},[r("span",{staticClass:"nav-link-inner--text"},[t._v(t._s(t.selectedLocale))]),t._v(" "),r("i",{staticClass:"fas fa-chevron-up m-l-5"})]),t._v(" "),t._l(t.configs.system.locales,(function(e){return r("button",{key:e.uuid,staticClass:"dropdown-item",attrs:{type:"button"},on:{click:function(r){return t.switchLocale(e)}}},[t._v(t._s(e.name)+" ("+t._s(e.locale)+")")])}))],2)],1)]):t._e()],1)])]],2),t._v(" "),t.configs.system?r("guest-footer",{attrs:{"footer-credit":t.configs.system.footerCredit,version:t.configs.system.version}}):t._e()],1)}),[],!1,null,"6435b3ea",null);e.default=a.exports},CJTH:function(t,e,r){"use strict";var o={props:["footerCredit","version"]},s=(r("b9rR"),r("KHd+")),a=Object(s.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"guest-footer mt-2"},[e("p",{staticClass:"text-center text-white mb-0 py-3"},[this._v(this._s(this.footerCredit)+" "+this._s(this.$t("product.version"))+" "+this._s(this.version))])])}),[],!1,null,"739170b9",null);e.a=a.exports},DzPO:function(t,e,r){(e=t.exports=r("I1BE")(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Muli:300,400,600,700,800,900);",""]),e.push([t.i,".centered-box[data-v-7eb15e32]{flex-direction:column;width:90vw;margin:0 auto}.centered-box[data-v-7eb15e32],.powered-logo[data-v-7eb15e32]{display:flex;justify-content:center}.powered-logo[data-v-7eb15e32]{align-items:center;font-size:.8rem}.powered-logo span[data-v-7eb15e32]{line-height:10px}.powered-logo img[data-v-7eb15e32]{width:80px;margin-left:8px}@media (min-width:768px){.centered-box[data-v-7eb15e32]{width:400px}.centered-box.width-sm[data-v-7eb15e32]{width:350px}.centered-box.width-md[data-v-7eb15e32]{width:450px}.centered-box.width-xl[data-v-7eb15e32]{width:500px}.centered-box.width-xxl[data-v-7eb15e32]{width:550px}.centered-box.width-xxxl[data-v-7eb15e32]{width:600px}}",""])},WK6j:function(t,e,r){"use strict";var o=r("L2JU"),s=r("kUDz"),a=r("l7An"),i=r("CJTH");function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}e.a={components:{Box:s.a,GuestHeader:a.a,GuestFooter:i.a},data:function(){return{formData:{},formErrors:{},initialFormData:null,initianLength:0,emptyFormData:null,preRequisite:{},isLoading:!0,icons:{facebook:"fab fa-facebook-f",twitter:"fab fa-twitter",github:"fab fa-github",google:"fab fa-google"},btns:{facebook:"btn-facebook",twitter:"btn-twitter",github:"btn-github",google:"btn-google-plus"}}},computed:c(c(c({},Object(o.c)("config",["configs","vars"])),Object(o.c)("user",["twoFactorSet","hasRole"])),{},{selectedLocale:function(){var t=getQueryStringByParam("locale");return t||this.configs.system.locale},showLocaleSwitcher:function(){return this.configs.system.locales&&this.configs.system.locales.length>1}}),methods:c(c(c({},Object(o.b)("config",["GetConfig"])),Object(o.b)("user",["Register","SetCSRF","Logout","Login","LoginUsingOtp","ResetTwoFactorSet","RequestReset","ValidateResetPassword","ResetPassword","CheckTwoFactorCode"])),{},{withQuery:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=this.$route.query,s="";return t.hasOwnProperty("query")||(t.query={}),t.query.locale=o&&o.locale?o.locale:void 0,o&&o.locale&&(s="".concat(s,"?locale=").concat(o.locale)),!o||!o.ref||r&&r.hasOwnProperty("removeRef")&&r.removeRef||(t.query.ref=o.ref,s="?".concat(s,"&ref=").concat(o.ref),s="?".concat(s,"&ref=").concat(o.ref)),s="".concat(t.name).concat(s),e?s:t},switchLocale:function(t){var e=window.location.href;window.location.href=updateQueryStringParam(e,"locale",t.locale)}}),mounted:function(){this.initialFormData=_.cloneDeep(this.formData),this.isLoading=!1},beforeDestroy:function(){delete this.formData,delete this.formErrors,delete this.preRequisite}}},b9rR:function(t,e,r){"use strict";r("pk0X")},bdEB:function(t,e,r){"use strict";var o=r("L2JU");function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var n={props:{tag:{type:String,default:"a"},place:{type:String,default:"normal"},size:{type:String,default:"normal"},appLogo:{type:Boolean,default:!1},inline:{type:Boolean,default:!1},link:{type:String,default:""},assets:{type:Object}},data:function(){return{appLogoText:window.kmenv.name}},computed:a(a({},Object(o.c)("config",["configs","uiConfigs"])),{},{computedUrl:function(){return"a"===this.tag&&(""!==this.link?this.link:"/")},orgLogo:function(){if(this.appLogo||!this.configs.assets&&!this.assets)return"navbar"===this.place||"sidebar"===this.place||"dark"===this.place?"/images/logo-light.png":"/images/logo.png";var t=this.assets&&this.assets.logo?this.assets.logo:this.configs.assets.logo?this.configs.assets.logo:"/images/logo.png";return(this.assets&&this.assets.logoLight||this.configs.assets.logoLight)&&("navbar"===this.place&&this.uiConfigs.topNavbarLogoLight||"sidebar"===this.place&&this.uiConfigs.leftSidebarLogoLight||"dark"===this.place)&&(t=this.assets&&this.assets.logoLight?this.assets.logoLight:this.configs.assets.logoLight),t},appTitle:function(){return this.configs.basic?this.configs.basic.orgName:window.kmenv.name}})},c=r("KHd+"),l=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r(t.tag,{tag:"component",class:["logo",t.place+"-logo",t.size+"-logo",t.orgLogo?"org-logo":"app-logo",t.inline?"inline-logo":""],attrs:{href:t.computedUrl}},[t.orgLogo?r("img",{staticClass:"logo-icon",attrs:{src:t.orgLogo,alt:t.appTitle}}):[r("span",{staticClass:"logo-text",attrs:{title:t.appTitle}},[t._v(t._s(t.appLogoText))])]],2)}),[],!1,null,null,null);e.a=l.exports},fOGa:function(t,e,r){"use strict";r("j/38")},"j/38":function(t,e,r){var o=r("DzPO");"string"==typeof o&&(o=[[t.i,o,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};r("aET+")(o,s);o.locals&&(t.exports=o.locals)},kUDz:function(t,e,r){"use strict";var o=r("bdEB"),s=r("L2JU");function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var c={props:{width:{type:String,default:"normal"}},components:{AppLogo:o.a},data:function(){return{}},computed:i(i({},Object(s.c)("config",["configs"])),{},{orgLogo:function(){return this.configs.image&&this.configs.image.logo?this.configs.image.logo:null}})},l=(r("fOGa"),r("KHd+")),u=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:["centered-box justify-content-center mt-4","width-"+t.width]},[r("card",{staticClass:"border-0",attrs:{type:"white",shadow:"","header-classes":"bg-white","body-classes":"px-lg-4 py-lg-4"}},[t._t("default"),t._v(" "),this.orgLogo?r("div",{staticClass:"powered-logo text-center"},[r("span",{staticClass:"text-muted mr-1"},[t._v(t._s(t.$t("general.powered_by"))+" ")]),t._v(" "),r("app-logo",{attrs:{"app-logo":"",inline:""}})],1):t._e()],2)],1)}),[],!1,null,"7eb15e32",null).exports,f={props:{name:{type:String,default:"CenteredBox"},width:{type:String,default:"normal"}},components:{CenteredBox:u}},p=Object(l.a)(f,(function(){var t=this.$createElement;return(this._self._c||t)(this.name,{tag:"component",attrs:{width:this.width}},[this._t("default")],2)}),[],!1,null,"ebb852f4",null);e.a=p.exports},l7An:function(t,e,r){"use strict";var o=r("bdEB"),s=r("L2JU");function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var n={components:{AppLogo:o.a},data:function(){return{}},computed:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},Object(s.c)("config",["configs"]))},c=r("KHd+"),l=Object(c.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"guest-header text-center mb-4"},[e("div",{staticClass:"logo-wrapper text-center mb-4 pb-2"},[e("app-logo")],1),this._v(" "),this._t("default")],2)}),[],!1,null,null,null);e.a=l.exports},pk0X:function(t,e,r){var o=r("x134");"string"==typeof o&&(o=[[t.i,o,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};r("aET+")(o,s);o.locals&&(t.exports=o.locals)},x134:function(t,e,r){(t.exports=r("I1BE")(!1)).push([t.i,".guest-footer p[data-v-739170b9]{opacity:.3}",""])}}]);
//# sourceMappingURL=register.js.map?id=2535dc96cb6d82f53088