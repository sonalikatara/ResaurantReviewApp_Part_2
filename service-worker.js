!function(e){var t={};function s(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=t,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(i,n,function(t){return e[t]}.bind(null,n));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=0)}([function(e,t){importScripts("/js/idb.js");var s="1",i=["/","/index.html","/restaurant.html","/css/styles.css","/images/1-200_small.jpg","/images/2-200_small.jpg","/images/3-200_small.jpg","/images/4-200_small.jpg","/images/5-200_small.jpg","/images/6-200_small.jpg","/images/7-200_small.jpg","/images/8-200_small.jpg","/images/9-200_small.jpg","/images/10-200_small.jpg","/images/1-400_mid.jpg","/images/2-400_mid.jpg","/images/3-400_mid.jpg","/images/4-400_mid.jpg","/images/5-400_mid.jpg","/images/6-400_mid.jpg","/images/7-400_mid.jpg","/images/8-400_mid.jpg","/images/9-400_mid.jpg","/images/10-400_mid.jpg","/images/1-100pc_big.jpg","/images/2-100pc_big.jpg","/images/3-100pc_big.jpg","/images/4-100pc_big.jpg","/images/5-100pc_big.jpg","/images/6-100pc_big.jpg","/images/7-100pc_big.jpg","/images/8-100pc_big.jpg","/images/9-100pc_big.jpg","/images/10-100pc_big.jpg","/images/1-100pc_big.webp","/images/2-100pc_big.webp","/images/3-100pc_big.webp","/images/4-100pc_big.webp","/images/5-100pc_big.webp","/images/7-100pc_big.webp","/images/8-100pc_big.webp","/images/9-100pc_big.webp","/images/10-100pc_big.webp","/images/1-400_mid.webp","/images/3-400_mid.webp","/images/5-400_mid.webp","/images/7-400_mid.webp","/images/9-400_mid.webp","/images/10-400_mid.webp","/js/dbhelper.js","/js/main.js","/js/restaurant_info.js"];String.prototype.startsWith||(String.prototype.startsWith=function(e,t){return t=t||0,this.substr(t,e.length)===e});let n=idb.open("restraurant_db",1);self.addEventListener("install",e=>{e.waitUntil(caches.keys().then(e=>{Promise.all(e.filter(e=>e.startsWith("reviews-v"))).then(e=>(e.forEach((t,i)=>{s=parseInt(t.substr(t.indexOf("-v")+2)),e[i]=s}),s=(Math.max.apply(Math,e)+1).toString())).then(e=>{console.log("installing version_num:"+e),caches.open("reviews-v"+e).then(e=>{e.addAll(i)})}).then(()=>{console.log("SW installed")})}))}),self.addEventListener("fetch",e=>{console.log("Fetching"),"POST"==e.request.method?(e.request.json().then(t=>{n.then(s=>{var i=s.transaction("reviews_get","readwrite"),n=i.objectStore("reviews_store");n.index("store_request");return n.add({store_request:e.request,store_response:t}),i.complete}).then(e=>{console.log("db write success:",e)})}),e.waitUntil(caches.keys().then(e=>{Promise.all(e.filter(e=>e.startsWith("reviews-v"))).then(e=>(e.forEach((t,i)=>{s=parseInt(t.substr(t.indexOf("-v")+2)),e[i]=s}),s=Math.max.apply(Math,e).toString())).then(function(){console.log("fetch version_num:"+s)})})),e.respondWith(caches.open("reviews-v"+s).then(t=>{t.match(e.request).then(t=>{if(t)return t;n.then(t=>{return t.transaction("reviews_get").objectStore("reviews_store").index("store_request").get(e.request)}).then(e=>new Response(e)).catch(e=>new Response("<h1>No Response</h1>",{status:404,statusText:"Resource Not Found",headers:new Headers({"Content-Type":"text/html"})}))})}))):e.respondWith(fetch(e.request).then(e=>e).catch(e=>console.log("Error:",e)))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(e=>{Promise.all(e.filter(e=>e.startsWith("reviews-v"))).then(e=>(e.forEach((t,i)=>{s=parseInt(t.substr(t.indexOf("-v")+2)),e[i]=s}),s=Math.max.apply(Math,e).toString())).then(e=>{console.log("activating version_num:"+e),caches.keys().then(t=>t.filter(t=>{t.startsWith("reviews-v")&&t.endsWith(e)})).then(e=>Promise.all(e.map(e=>e.delete(e)))).then(()=>{console.log("SW activated.")})})}))})}]);
//# sourceMappingURL=service-worker.js.map