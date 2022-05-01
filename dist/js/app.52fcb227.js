(()=>{"use strict";var e={9249:(e,t,r)=>{function n(){function e(){"dark"===localStorage.theme||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}function t(){localStorage.theme="dark",e()}function r(){localStorage.theme="light",e()}function n(){localStorage.removeItem("theme"),e()}return{updateTheme:e,turnDark:t,turnLight:r,turnSystemTheme:n}}r.d(t,{v:()=>n})},6098:(e,t,r)=>{r.d(t,{u:()=>n});r(3710);var n={date:function(e){var t=new Date(e||"");return e?t.toLocaleString("en-US",{weekday:"short",month:"short",day:"2-digit"}):""}}},2482:(e,t,r)=>{r(8862),Storage.prototype._setItem=Storage.prototype.setItem,Storage.prototype.setItem=function(e,t){this._setItem(e,JSON.stringify(t))},Storage.prototype._getItem=Storage.prototype.getItem,Storage.prototype.getItem=function(e){var t=this._getItem(e);try{return JSON.parse(t)}catch(r){return t}},Storage.prototype.hasKey=function(e){return null!==this._getItem(e)}},9216:(e,t,r)=>{r(6992),r(8674),r(9601),r(7727),r(2482);var n=r(5405),o=r(3396),a=r(9249);const i=(0,o.aZ)({setup:function(e){return(0,a.v)().updateTheme(),function(e,t){var r=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(r)}}}),s=i,u=s;var c=r(3909),l=r(6098),d={install:function(e){e.config.globalProperties.$routeNames=c.kr,e.config.globalProperties.$filters=l.u}},h=r(8534),f=(r(6133),r(5431));if("serviceWorker"in navigator){var p=!1;(0,f.z)("".concat("/","service-worker.js"),{updated:function(e){return(0,h.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:console.log("New content is available; please refresh."),e&&e.waiting&&window.confirm("Do you really want to leave?")&&e.waiting.postMessage({type:"SKIP_WAITING"});case 2:case"end":return t.stop()}}),t)})))()}}),navigator.serviceWorker.addEventListener("controllerchange",(function(){p||(p=!0,window.location.reload())}))}var m=(0,n.ri)(u);m.use(c.Nd).use(d),c.Nd.isReady().then((function(){m.mount("#app")}))},3909:(e,t,r)=>{r.d(t,{kr:()=>o,Nd:()=>u});r(1539),r(8783),r(3948);var n=r(678),o={rootPage:"index",home:"home",favorites:"favorites"},a=r(8534),i=(r(6133),function(){var e=(0,a.Z)(regeneratorRuntime.mark((function e(t,r,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n();case 1:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}()),s=[{path:"/:pathMatch(.*)*",redirect:"/"},{path:"/",name:o.rootPage,component:function(){return r.e(689).then(r.bind(r,8689))},children:[{path:"",name:o.home,component:function(){return r.e(538).then(r.bind(r,7538))}},{path:"favorites",name:o.favorites,component:function(){return r.e(668).then(r.bind(r,1668))}}]}],u=(0,n.p7)({history:(0,n.PO)("/"),routes:s});u.beforeEach(i)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={id:n,loaded:!1,exports:{}};return e[n](a,a.exports,r),a.loaded=!0,a.exports}r.m=e,(()=>{var e=[];r.O=(t,n,o,a)=>{if(!n){var i=1/0;for(l=0;l<e.length;l++){for(var[n,o,a]=e[l],s=!0,u=0;u<n.length;u++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](n[u])))?n.splice(u--,1):(s=!1,a<i&&(i=a));if(s){e.splice(l--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[n,o,a]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+e+"."+{538:"260812f5",668:"9e3fc478",689:"5be3319e"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+e+".0124901b.css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="weather_test:";r.l=(n,o,a,i)=>{if(e[n])e[n].push(o);else{var s,u;if(void 0!==a)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+a){s=d;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",t+a),s.src=n),e[n]=[o];var h=(t,r)=>{s.onerror=s.onload=null,clearTimeout(f);var o=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((e=>e(r))),t)return t(r)},f=setTimeout(h.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=h.bind(null,s.onerror),s.onload=h.bind(null,s.onload),u&&document.head.appendChild(s)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e)})(),(()=>{r.p="/"})(),(()=>{var e=(e,t,r,n)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=a=>{if(o.onerror=o.onload=null,"load"===a.type)r();else{var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=s,o.parentNode.removeChild(o),n(u)}};return o.onerror=o.onload=a,o.href=t,document.head.appendChild(o),o},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=r[n],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){o=i[n],a=o.getAttribute("data-href");if(a===e||a===t)return o}},n=n=>new Promise(((o,a)=>{var i=r.miniCssF(n),s=r.p+i;if(t(i,s))return o();e(n,s,o,a)})),o={143:0};r.f.miniCss=(e,t)=>{var r={689:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=n(e).then((()=>{o[e]=0}),(t=>{throw delete o[e],t})))}})(),(()=>{var e={143:0};r.f.j=(t,n)=>{var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var a=new Promise(((r,n)=>o=e[t]=[r,n]));n.push(o[2]=a);var i=r.p+r.u(t),s=new Error,u=n=>{if(r.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,o[1](s)}};r.l(i,u,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,n)=>{var o,a,[i,s,u]=n,c=0;if(i.some((t=>0!==e[t]))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(u)var l=u(r)}for(t&&t(n);c<i.length;c++)a=i[c],r.o(e,a)&&e[a]&&e[a][0](),e[i[c]]=0;return r.O(l)},n=self["webpackChunkweather_test"]=self["webpackChunkweather_test"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[998],(()=>r(9216)));n=r.O(n)})();
//# sourceMappingURL=app.52fcb227.js.map