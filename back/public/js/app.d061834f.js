(function(e){function t(t){for(var r,a,i=t[0],u=t[1],c=t[2],l=0,d=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(d.length)d.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(s.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o={app:0},s=[];function i(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"a4944be0"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={about:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"a7a0b6f7"}[e]+".css",o=u.p+r,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var c=s[i],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){c=d[i],l=c.getAttribute("data-href");if(l===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete a[e],f.parentNode.removeChild(f),n(s)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=s);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var d=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var f=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"14cf":function(e,t,n){"use strict";n("a477")},"180e":function(e,t,n){"use strict";n("b8a4")},1934:function(e,t,n){},2920:function(e,t,n){"use strict";n("1934")},"34a6":function(e,t,n){},"361c":function(e,t,n){},3856:function(e,t,n){e.exports=n.p+"img/info_icon.98e4edb6.png"},"3a9b2":function(e,t,n){"use strict";n("361c")},"3b25":function(e,t,n){},"4bad":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],s={created:function(){this.getAutologinFromLocalStorage(),this.storeUserInfos()},methods:{getAutologinFromLocalStorage:function(){var e=localStorage.getItem("autologin");e&&this.$store.dispatch("setAutologin",e)},storeUserInfos:function(){this.$store.dispatch("setUser",this.$msal.data.user)}}},i=s,u=(n("5c0b"),n("2877")),c=Object(u["a"])(i,a,o,!1,null,null,null),l=c.exports,d=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("TheHeaderBar"),n("main",[n("TheRoadblocks"),n("TheHUB")],1)],1)},p=[],h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hub"},[n("h2",[e._v("HUB")]),n("section",[n("TheHUBAside",{on:{"get-experimentations":function(t){return e.getHUB(!0)}}}),e.hub?n("VPannel",{attrs:{title:"HUB",unit:"xps",needed:e.hub.needed,validated:e.hub.validated,inProgress:e.hub.inProgress,failed:0}}):n("VPannelSkeleton")],1)])},v=[],m=n("5530"),g=n("1da1"),b=(n("96cf"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pannel-skeleton"},[n("div",{staticClass:"title-container"},[n("VueSkeletonLoader",{attrs:{type:"rect",width:100,height:16,rounded:!0}})],1),n("div",{staticClass:"needed"},[n("VueSkeletonLoader",{attrs:{type:"circle",size:20,rounded:!0}}),n("VueSkeletonLoader",{attrs:{type:"rect",width:100,height:16,rounded:!0}})],1),n("VueSkeletonLoader",{attrs:{type:"rect",width:250,height:20,rounded:!0}}),n("div",{staticClass:"infos"},[n("VueSkeletonLoader",{attrs:{type:"rect",width:50,height:16,rounded:!0}}),n("VueSkeletonLoader",{attrs:{type:"rect",width:250,height:16,rounded:!0}})],1),n("div",{staticClass:"infos"},[n("VueSkeletonLoader",{attrs:{type:"rect",width:50,height:16,rounded:!0}}),n("VueSkeletonLoader",{attrs:{type:"rect",width:250,height:16,rounded:!0}})],1),n("div",{staticClass:"infos"},[n("VueSkeletonLoader",{attrs:{type:"rect",width:50,height:16,rounded:!0}}),n("VueSkeletonLoader",{attrs:{type:"rect",width:250,height:16,rounded:!0}})],1)],1)}),_=[],y=n("a012"),k={components:{VueSkeletonLoader:y["a"]}},x=k,w=(n("3a9b2"),Object(u["a"])(x,b,_,!1,null,"70549ff5",null)),P=w.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pannel"},[n("div",{staticClass:"title-container"},[n("h3",[e._v(e._s(e.title))])]),n("div",{staticClass:"needed-container"},[n("h3",[e._v(e._s(e.needed))]),n("span",[e._v(e._s(e.unitText))])]),n("VProgressBar",{attrs:{needed:e.needed,validated:e.validated,inProgress:e.inProgress}}),n("VPannelInfos",{attrs:{validated:e.validated,inProgress:e.inProgress,failed:e.failed}})],1)},C=[],$=(n("a9e3"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pannel-infos"},[n("div",[n("p",[e._v("Aquis")]),n("div",[n("span",[e._v(e._s(e.validated))]),n("div",{staticClass:"circle green"})])]),n("div",[n("p",[e._v("En cours")]),n("div",[n("span",[e._v(e._s(e.inProgress))]),n("div",{staticClass:"circle orange"})])]),n("div",[n("p",[e._v("En échec")]),n("div",[n("span",[e._v(e._s(e.failed))]),n("div",{staticClass:"circle red"})])])])}),O=[],j={props:{validated:{type:Number,default:0},inProgress:{type:Number,default:0},failed:{type:Number,default:0}}},E=j,L=(n("cac8"),Object(u["a"])(E,$,O,!1,null,"a1cb5272",null)),V=L.exports,A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"progress-bar"},[n("div",{staticClass:"validated",style:"width: "+e.validatedWidth+"%;"}),n("div",{staticClass:"in-progress",style:"width: "+e.inProgressWidth+"%;"})])},N=[],U={props:{needed:{type:Number,default:0},validated:{type:Number,default:0},inProgress:{type:Number,default:0}},computed:{validatedWidth:function(){return 100*this.validated/this.needed},inProgressWidth:function(){return 100*this.inProgress/this.needed+this.validatedWidth}}},B=U,I=(n("fd29"),Object(u["a"])(B,A,N,!1,null,"dc173ff0",null)),T=I.exports,H={components:{VProgressBar:T,VPannelInfos:V},props:{title:{type:String,default:""},unit:{type:String,default:"crédits"},needed:{type:Number,default:0},validated:{type:Number,default:0},inProgress:{type:Number,default:0},failed:{type:Number,default:0}},computed:{unitText:function(){return this.unit+" requis"}}},R=H,M=(n("a0e0"),Object(u["a"])(R,S,C,!1,null,"06f0c652",null)),q=M.exports,z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("aside",[n("div",{staticClass:"info"},[e._m(0),e.showMore?n("p",[e._v("Avec l'api de l'intra il est facile d'obtenir les crédits des talks et des workshops. Par contre pour les expérimentations et les projets HUB l'opération prend plus de temps. Pour une meilleure expérience nous avons décider de ne mettre que les talks et workshops par défaut. Mais vous avez la possibilité de forcer le calcul des xps avec expérimentations et projets HUB inclus.")]):e._e(),n("span",{on:{click:e.toggleMoreInfos}},[e._v("En savoir plus")])]),n("div",{staticClass:"action-container"},[n("VButton",{attrs:{text:"Recalculer avec les expérimentations",textSize:16},nativeOn:{click:function(t){return e.$emit("get-experimentations")}}}),n("span",[e._v("~Environ 2min")])],1)])},W=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"basic-infos"},[r("img",{attrs:{src:n("3856"),alt:"info icon"}}),r("p",[e._v("Par défaut les expérimentations ne sont pas incluses")])])}],F=n("af5a"),G={components:{VButton:F["a"]},data:function(){return{showMore:!1}},methods:{toggleMoreInfos:function(){this.showMore=!this.showMore}}},D=G,J=(n("6b1d"),Object(u["a"])(D,z,W,!1,null,"9469fb88",null)),K=J.exports,Q=n("d41e"),X={components:{TheHUBAside:K,VPannel:q,VPannelSkeleton:P},data:function(){return{hub:void 0}},created:function(){this.getHUB(!1)},methods:{getHUB:function(e){var t=this;return Object(g["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t.$store.state.autologin){n.next=2;break}return n.abrupt("return");case 2:return t.hub=void 0,r={params:Object(m["a"])({user_email:t.$store.state.user.userName,autologin:t.$store.state.autologin},e&&{getExperiences:!0})},n.next=6,Object(Q["axiosGet"])("/hub",r);case 6:a=n.sent,a[0]&&(t.hub=a[0].data);case 8:case"end":return n.stop()}}),n)})))()}}},Y=X,Z=(n("e4b5"),Object(u["a"])(Y,h,v,!1,null,"a586990e",null)),ee=Z.exports,te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"roadblocks"},[n("h2",[e._v("roadblocks")]),e.roadblocks?n("section",e._l(e.roadblocks,(function(e){return n("VPannel",{key:e.title,attrs:{title:e.title,needed:e.needed,validated:e.validated,inProgress:e.inProgress,failed:e.failed}})})),1):n("section",e._l(e.skeletonRoadblocks,(function(e){return n("VPannelSkeleton",{key:e})})),1)])},ne=[],re={components:{VPannel:q,VPannelSkeleton:P},data:function(){return{roadblocks:void 0,skeletonRoadblocks:[1,2,3,4]}},created:function(){this.getRoadblocks()},methods:{getRoadblocks:function(){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.$store.state.autologin){t.next=2;break}return t.abrupt("return");case 2:return n={params:{user_email:e.$store.state.user.userName,autologin:e.$store.state.autologin}},t.next=5,Object(Q["axiosGet"])("/roadblocks",n);case 5:r=t.sent,r[0]&&(e.roadblocks=r[0].data);case 7:case"end":return t.stop()}}),t)})))()}}},ae=re,oe=(n("8a01"),Object(u["a"])(ae,te,ne,!1,null,"2e1bf3d0",null)),se=oe.exports,ie=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("span",{staticClass:"logout",on:{click:e.logout}},[e._v("logout")]),n("h1",[e._v("Epydesk")]),n("span",{staticClass:"email"},[e._v(e._s(e.userEmail))])])},ue=[],ce={computed:{userEmail:function(){return this.$store.state.user.userName}},methods:{logout:function(){this.$msal.signOut()}}},le=ce,de=(n("14cf"),Object(u["a"])(le,ie,ue,!1,null,"050e2ce2",null)),fe=de.exports,pe={name:"Home",components:{TheRoadblocks:se,TheHeaderBar:fe,TheHUB:ee},created:function(){this.redirectIfNotLoggedIn(),this.storeUserInfos(),this.redirectIfNoAutologin()},methods:{redirectIfNoAutologin:function(){!this.$store.state.autologin&&this.$msal.isAuthenticated()&&this.$router.push({name:"Autologin"})},redirectIfNotLoggedIn:function(){this.$msal.isAuthenticated()||this.$router.push({name:"Login"})},storeUserInfos:function(){this.$store.dispatch("setUser",this.$msal.data.user)}}},he=pe,ve=(n("180e"),Object(u["a"])(he,f,p,!1,null,"8092cd48",null)),me=ve.exports,ge=n("2f62");r["a"].use(ge["a"]);var be=new ge["a"].Store({state:{user:null,autologin:null},mutations:{setUser:function(e,t){e.user=t},setAutologin:function(e,t){e.autologin=t}},actions:{setUser:function(e,t){var n=e.commit;n("setUser",t)},setAutologin:function(e,t){var n=e.commit;n("setAutologin",t)}},modules:{}});r["a"].use(d["a"]);var _e=[{path:"/",name:"Home",component:me,meta:{requiresAuth:!0,requiresAutologin:!0}},{path:"/login",name:"Login",component:function(){return n.e("about").then(n.bind(null,"48ca"))}},{path:"/autologin",name:"Autologin",component:function(){return n.e("about").then(n.bind(null,"5ea5"))}}],ye=new d["a"]({mode:"history",base:"/",routes:_e}),ke=ye,xe=n("5a75"),we=n.n(xe);r["a"].use(we.a,{auth:{clientId:"b10a57a8-bf93-469a-874d-de3198034678",tenantId:"901cb4ca-b862-4029-9306-e5cd0f6d9f86",redirectUri:"https://epydesk.herokuapp.com/"}}),r["a"].config.productionTip=!1,new r["a"]({router:ke,store:be,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"6b1d":function(e,t,n){"use strict";n("34a6")},"8a01":function(e,t,n){"use strict";n("3b25")},"9c0c":function(e,t,n){},a0e0:function(e,t,n){"use strict";n("abc6")},a477:function(e,t,n){},abc6:function(e,t,n){},af5a:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{style:"font-size: "+e.textSize+"px;"},[e.isLoading?n("ClipLoader",{attrs:{size:"24px",color:"white"}}):n("span",[e._v(e._s(e.text)+" ")])],1)},a=[],o=(n("a9e3"),n("da7a")),s={components:{ClipLoader:o["a"]},props:{text:{type:String,default:""},textSize:{type:Number,default:28},isLoading:{type:Boolean,default:!1}}},i=s,u=(n("2920"),n("2877")),c=Object(u["a"])(i,r,a,!1,null,"dfd3aae0",null);t["a"]=c.exports},b354:function(e,t,n){},b8a4:function(e,t,n){},cac8:function(e,t,n){"use strict";n("b354")},ce85:function(e,t,n){},d41e:function(e,t,n){var r=n("c973").default;n("96cf");var a=n("bc3a"),o="";e.exports={axiosGet:function(e,t){return r(regeneratorRuntime.mark((function n(){var r,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,r=o+e,n.next=4,a.get(r,t);case 4:return s=n.sent,n.abrupt("return",[s,null]);case 8:return n.prev=8,n.t0=n["catch"](0),n.abrupt("return",[null,n.t0]);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))()}}},e4b5:function(e,t,n){"use strict";n("4bad")},fd29:function(e,t,n){"use strict";n("ce85")}});
//# sourceMappingURL=app.d061834f.js.map