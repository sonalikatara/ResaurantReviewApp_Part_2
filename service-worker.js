!function(e){var t={};function n(i){if(t[i])return t[i].exports;var s=t[i]={i:i,l:!1,exports:{}};return e[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(i,s,function(t){return e[t]}.bind(null,s));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){importScripts("/js/idb.js");var n="1",i=["/","/index.html","/restaurant.html","/css/styles.css","/images/1-200_small.jpg","/images/2-200_small.jpg","/images/3-200_small.jpg","/images/4-200_small.jpg","/images/5-200_small.jpg","/images/6-200_small.jpg","/images/7-200_small.jpg","/images/8-200_small.jpg","/images/9-200_small.jpg","/images/10-200_small.jpg","/images/1-400_mid.jpg","/images/2-400_mid.jpg","/images/3-400_mid.jpg","/images/4-400_mid.jpg","/images/5-400_mid.jpg","/images/6-400_mid.jpg","/images/7-400_mid.jpg","/images/8-400_mid.jpg","/images/9-400_mid.jpg","/images/10-400_mid.jpg","/images/1-100pc_big.jpg","/images/2-100pc_big.jpg","/images/3-100pc_big.jpg","/images/4-100pc_big.jpg","/images/5-100pc_big.jpg","/images/6-100pc_big.jpg","/images/7-100pc_big.jpg","/images/8-100pc_big.jpg","/images/9-100pc_big.jpg","/images/10-100pc_big.jpg","/js/dbhelper.js","/js/main.js","/js/restaurant_info.js"];String.prototype.startsWith||(String.prototype.startsWith=function(e,t){return t=t||0,this.substr(t,e.length)===e});var s=idb.open("restraurant_db",2,function(e){e.createObjectStore("reviews_store",{keyPath:"id"})});self.addEventListener("install",function(e){e.waitUntil(caches.keys().then(function(e){return Promise.all(e.filter(function(e){return e.startsWith("reviews-v")}))}).then(function(){console.log("install version_num:"+n)})),console.log("SW installing"),e.waitUntil(caches.open("reviews-v"+n).then(function(e){return e.addAll(i)}).then(function(){console.log("SW installed")}))}),self.addEventListener("fetch",function(e){console.log("Fetching"),e.waitUntil(caches.keys().then(function(e){return Promise.all(e.filter(function(e){return e.startsWith("reviews-v")}))}).then(function(){console.log("fetch version_num:"+n)})),e.respondWith(caches.match(e.request).then(function(t){var i=fetch(e.request).then(function(t){var i=t.clone();return console.log("fetched from network.",e.request.url),caches.open("reviews-v"+n).then(function(t){t.put(e.request,i),e.request.json().then(e=>{s.then(function(t){t.transaction("reviews_store","readwrite").objectStore("reviews_store").add(e)})}).then(e=>{console.log("db success for: "+e)}).catch(e=>{console.log("db fail for: "+e)})}).then(function(){console.log("Response cached.",e.request.url)}),t},r).catch(r);return console.log("fetched from",t?"cache":"network",e.request.url),t||i;function r(){return console.log("Fetch failed."),new Response("<h1>No Response</h1>",{status:404,statusText:"Resource Not Found",headers:new Headers({"Content-Type":"text/html"})})}}))}),self.addEventListener("activate",function(e){console.log("Activating SW"),e.waitUntil(caches.keys().then(function(e){return Promise.all(e.filter(function(e){return e.startsWith("reviews-v")}))}).then(function(){console.log("activate version_num:"+n)})),e.waitUntil(caches.keys().then(function(e){return Promise.all(e.filter(function(e){return e.startsWith("reviews-v")&&!e.endsWith(n)}).map(function(e){return e.delete(e)}))}).then(function(){console.log("SW activated.")}))})}]);