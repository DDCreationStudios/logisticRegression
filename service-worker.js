"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/logisticRegression/index.html","b0ec2520327ecd8ec8ff713c04fa8f09"],["/logisticRegression/static/css/main.be03bf36.css","227fe4ca241329aad2073deca926ee2b"],["/logisticRegression/static/js/main.49adeadf.js","5b02d126501844ad0c69e84f72bd975d"],["/logisticRegression/static/media/Roboto-Bold.c0f1e4a4.woff2","c0f1e4a4fdfb8048c72e86aadb2a247d"],["/logisticRegression/static/media/Roboto-Bold.eed9aab5.woff","eed9aab5449cc9c8430d7d258108f602"],["/logisticRegression/static/media/Roboto-Light.3c37aa69.woff2","3c37aa69cd77e6a53a067170fa8fe2e9"],["/logisticRegression/static/media/Roboto-Light.ea36cd9a.woff","ea36cd9a0e9eee97012a67b8a4570d7b"],["/logisticRegression/static/media/Roboto-Medium.1561b424.woff2","1561b424aaef2f704bbd89155b3ce514"],["/logisticRegression/static/media/Roboto-Medium.cf4d60bc.woff","cf4d60bc0b1d4b2314085919a00e1724"],["/logisticRegression/static/media/Roboto-Regular.3cf6adf6.woff","3cf6adf61054c328b1b0ddcd8f9ce24d"],["/logisticRegression/static/media/Roboto-Regular.5136cbe6.woff2","5136cbe62a63604402f2fedb97f246f8"],["/logisticRegression/static/media/Roboto-Thin.1f35e6a1.woff2","1f35e6a11d27d2e10d28946d42332dc5"],["/logisticRegression/static/media/Roboto-Thin.44b78f14.woff","44b78f142603eb69f593ed4002ed7a4a"],["/logisticRegression/static/media/logo.5d5d9eef.svg","5d5d9eefa31e5e13a6610d9fa7a283bb"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL("/logisticRegression/index.html",self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});