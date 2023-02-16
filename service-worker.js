/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/1999/11/11/关于呆头儿子和抠脚大汗的故事一/index.html","4d659b28d1e65b5897f25b815294d7fb"],["/2000/02/14/关于呆头儿子和抠脚大汗的故事二/index.html","74ee969c033fbc78b339458331f8b41e"],["/2019/11/03/hello-world/index.html","21761e74d8832c983c65d36c16168c3d"],["/2019/11/07/blog访问速度优化一github和腾讯云开发者平台双线部署/index.html","56d5541cd5c74952f9be22d87dbc06b5"],["/2019/11/10/blog访问速度优化二开启CDN加速访问/index.html","96198a75aed3cda41d2cff75fc593d05"],["/2019/11/11/Linux内核-内核线程的创建/index.html","1c10126eb27c95dd6309138ec333e494"],["/2019/11/12/Linux内核-工作者线程/index.html","a2c976619e2e875b92a2587e331ffdb2"],["/2019/11/13/Linux内核-完成变量/index.html","059ac1a238cf7c4ba334768eb554727a"],["/2019/12/01/计算机组成原理-组成原理实验/index.html","fb784a2555466e76df0ad434a31b12b5"],["/2019/12/03/Linux内核-基于Binder机制的Linux进程间通信方法/index.html","feca0ca15dc2fa2f1a8c9fc397c03672"],["/2019/12/13/Linux内核-kfifo队列/index.html","0b380b609842c1a59965ad44696ae9a1"],["/2020/01/08/Linux内核-实现多客户端/index.html","d56125a6e8038970d3dbc3a18e5a9bbd"],["/2020/02/08/blog访问速度优化三对象存储/index.html","03622990d89c323abe691ce9cac7d7f5"],["/2020/02/10/Qt实现简易图像处理软件/index.html","47371ef50320416fbeb883c319e72a26"],["/2020/04/25/Postman接口测试工具使用总结/index.html","f58bf02c53bd9ad73f0d30b398f55ec4"],["/2020/06/05/软件测试-单元测试报告/index.html","1183e3fadab8d62fb17ec510733336f8"],["/2020/06/07/软件测试-系统测试/index.html","49ea0c87bbf498e3f51a271c4dcbd1f8"],["/2020/08/17/blog访问问题--coding平台上传出错/index.html","fbc6dcf08e88536b215e36818297307b"],["/2021/02/06/LeetCode-简单难度总结一/index.html","2d36f71713faa7b24f8f8f0c9c88a412"],["/2021/03/03/java_抽象类构造方法问题/index.html","615d7cf144ab47d70b2a015c99b5de9f"],["/2021/03/10/java_Lambda表达式/index.html","753ddec1b5c1ddcd1714f7d56133a64b"],["/2021/03/15/java_多线程编程_线程不安全集合/index.html","b5bdc5ab6e526d8114160c3e7519efe2"],["/2021/03/22/SQL语句总结/index.html","64b97b51cb9af3497fbd3d6f3ca89f95"],["/2021/04/06/阿里面试题整理/index.html","80397cda32a1037128949477a5f12229"],["/2021/06/23/个性化开发总结_Tom/index.html","04b34a426377d492de87abeb9ee6fa1e"],["/2021/09/06/Oracle数据库安装以及数据泵还原/index.html","0276cf82ded90c32425569d0c820fa67"],["/2021/10/26/单点登录一——原理/index.html","53ef2dc414cee45303a740b9af5e17d4"],["/2021/10/27/单点登录二——CAS/index.html","8b4d5ed86d96e11fb4edf4f38d2de53d"],["/2021/11/04/单点登录三——CAS Clietn源码解析/index.html","87e661efa7b5e5f4f1e9a45237e132e0"],["/about/index.html","b5ba32be25407bdef399c50bc532cb2c"],["/archives/1999/11/index.html","e00bf81c594d3df05e0bd1f855993b9c"],["/archives/1999/index.html","2be4974d0fedbb8a8977cce34ce60c65"],["/archives/2000/02/index.html","26db03b7239163e5b2e7536508e2593b"],["/archives/2000/index.html","77b5c2defaba05042edcc0386261b408"],["/archives/2019/11/index.html","30ba62484aa2b378173d9ba9536656b7"],["/archives/2019/12/index.html","81da7423cd33b85a9662bde1e6e9d5f1"],["/archives/2019/index.html","2203301f6e9374002807a8958579559d"],["/archives/2020/01/index.html","d6525a483309f39c14131830d969b9b9"],["/archives/2020/02/index.html","50a2c1f8b5967cd06e88ab75e4a4cbd4"],["/archives/2020/04/index.html","c5a10081b105e6c2ca82e2f76c5b5698"],["/archives/2020/06/index.html","4bc669a02e1c7b868efde951708ab496"],["/archives/2020/08/index.html","5bab4f8a19a4508abad2c215c6641b70"],["/archives/2020/index.html","c50a2955fbe8ffd772adda457bdb0749"],["/archives/2021/02/index.html","95c376287b404012b19717780e00589e"],["/archives/2021/03/index.html","23ae08293ae9d0b7a8a7396387aa7ff3"],["/archives/2021/04/index.html","48eafb206f6e89f83fe9dba065f32f2d"],["/archives/2021/06/index.html","34a9f7ccc34c17a6a9f7156e180896c3"],["/archives/2021/09/index.html","04de3318b1799ccbff4ce9d23b67509b"],["/archives/2021/10/index.html","9876617f89ae4ecc5220e419040e5957"],["/archives/2021/11/index.html","a12f94b9ce95b35e4d311788004f3614"],["/archives/2021/index.html","33cdb81ec38861106de17d3f66d718ab"],["/archives/2021/page/2/index.html","7d292ed8a9032870edf8855f166531dd"],["/archives/index.html","2f4c850238e6556b888b56d645399817"],["/archives/page/2/index.html","02c6ce6a27f52b0168e001fcad2b47f2"],["/archives/page/3/index.html","eb0651a939368d363623a5a4ce00a684"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/LeetCode算法题/index.html","de8ba601a99e8f3aa1cb73aefbb02ecd"],["/categories/Qt/index.html","6294f8e3ad7a32ee996a51728a537237"],["/categories/SQL/index.html","6d95923ce01aded41053ffe6e1d8cf44"],["/categories/hexo加速优化/index.html","3433c0416c995dfed1ad776ff9f55cf5"],["/categories/hexo无法访问/index.html","82f30e4ef672e2508fc3369da4e72bc6"],["/categories/index.html","9f432da9be0e179b071cf9ebb077ceca"],["/categories/java/index.html","ed6f029668e6d26179d62a84c9161f71"],["/categories/linux内核分析/index.html","05f37e05a820bd3d622e7a3264e9f8af"],["/categories/oracle数据库/index.html","ee368e632688d8f14396b2377ccc4374"],["/categories/单点登录/index.html","7eba05491da23f0b82c62c80888ed88f"],["/categories/呆头/index.html","a9bc1d7c845e656601d78a5b23d21bbe"],["/categories/易通个性化开发/index.html","edbc513056e46fba758e028d8da3726b"],["/categories/测试/index.html","b1ee950e34ad81f975d2cf684ef0dcf1"],["/categories/组成原理/index.html","aee800b5479c3dbb4b401303d4608404"],["/categories/软件测试/index.html","d9367d3e692607ac36c8da4b673d9bb8"],["/categories/面试/index.html","9950394aece0b4bafe4aca5c5243f377"],["/css/fonts/fontawesome-webfont.eot","8b27bc96115c2d24350f0d09e6a9433f"],["/css/fonts/fontawesome-webfont.svg","b526f0637e912fae979bcfe9f0c9bd74"],["/css/fonts/fontawesome-webfont.ttf","dcb26c7239d850266941e80370e207c1"],["/css/fonts/fontawesome-webfont.woff","3293616ec0c605c7c2db25829a0a509e"],["/css/images/banner.jpg","0394d7ba5b310b5037d2a139bef63fa4"],["/css/style.css","e67a267d2af2a8b53715207a13c08176"],["/fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["/fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/fancybox/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/fancybox/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/fancybox/helpers/jquery.fancybox-buttons.js","f12190546a9cc3cf28c99ce3839c35ae"],["/fancybox/helpers/jquery.fancybox-media.js","a43c71c37d726096a48b0d6d654dc25c"],["/fancybox/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/fancybox/helpers/jquery.fancybox-thumbs.js","b3d9cb05b56033141ae6f6358df2763f"],["/fancybox/jquery.fancybox.css","fd7de7df5125265bbd78984d637cf90d"],["/fancybox/jquery.fancybox.js","627b3fae16845d1942d3cd4270098111"],["/fancybox/jquery.fancybox.pack.js","b6d0034563763b4bb7da451d54301c9f"],["/index.html","44219edcdd7ba2b0dedae387b1b66fff"],["/js/script.js","568ed7f5b3c89db1ffcf20f2f63036f1"],["/link/index.html","671ce3d3bb76d40fd3e15af00a3550bf"],["/movies/index.html","00d7da5c0381cf58ced54507a8bd50e1"],["/music/index.html","7469b42424328910dfcab4b0085b6e2f"],["/page/2/index.html","b536c193014b4984681bde3232757b8f"],["/page/3/index.html","5173e6f1a77a7055baa0b8713801664a"],["/tags/Binder/index.html","36ad9ee0c956e41eff237a523fcc81d5"],["/tags/C/index.html","f0ed042e7e8d873cfb019f01f218a7d3"],["/tags/CDN/index.html","60af8cfda86548f311c389959483d880"],["/tags/C语言/index.html","16ec0abe510c69b30276e2c9e6847cb7"],["/tags/C语言，工作者线程/index.html","653215ef8ef0dceb0f7272ff2a72721b"],["/tags/C语言，工作者线程，完成变量/index.html","8250bc00ffd4e6da50696e521e60f096"],["/tags/IDEA/index.html","ee011ba9017f2891d98c1a798d5b4aee"],["/tags/ISE/index.html","9ceb8c2480ea6e7c2de8b477699db51f"],["/tags/Junit/index.html","ec3d49a2fb6dfbebf7e7569357b8a00d"],["/tags/LeetCode/index.html","0f6227216a673985280b2b14856cbc45"],["/tags/Linux/index.html","41c1d4039ae4aade684f28de2c6aadbd"],["/tags/MySQL/index.html","76d72b3512437e61a9911faf56cecd90"],["/tags/Postman/index.html","d66498523761387cc23607a0ad5b9147"],["/tags/Qcreator/index.html","826d8b6f3f714a9c5b7cb0c13b9bd3df"],["/tags/Qt/index.html","6e2f35ccc52b01edbd6ac1cbe4c78fd0"],["/tags/SQL/index.html","d3171e7f47d2686bc76204fdb95b1ad3"],["/tags/abstract/index.html","da108dc04efd99118d5f5354a3db5353"],["/tags/coding/index.html","be9660c0adc332b75b7cc48f17f58293"],["/tags/eclips/index.html","e5a5e4d17588d9d9794d8b65c358e475"],["/tags/github/index.html","0b3129162d3dccee936f4453452f15e7"],["/tags/hexo/index.html","6ed5c294fd85a3376a8625ab140899ef"],["/tags/index.html","26dbc9762f0165c098257c3db1ddc590"],["/tags/java/index.html","76ace4e99a70eb353d1215b21bbeb9de"],["/tags/kfifo/index.html","5bda48ca89a2f5ae806c3fd000c152be"],["/tags/lambda表达式/index.html","c892e8c09ba3e79742128b1a4e6000da"],["/tags/linux内核/index.html","8a2f5d5184db24723f60b5f5e6edf199"],["/tags/loadrunner/index.html","9748ecf6c9553fcbd1e397f6aa53b9d8"],["/tags/oracle/index.html","e3f307f2cf463d6b656640001f7edef7"],["/tags/ssm-java/index.html","bc058e03a3a2ebfffb97c065064fec85"],["/tags/verilog，指令，Composition-principle/index.html","373f26f254d0ba0ea7e29a8a763ca4b0"],["/tags/七牛云/index.html","98faef0a926fad8eba680e091dae1546"],["/tags/内核线程/index.html","e602a32c0f1bc00963faa382784f56d8"],["/tags/内核线程创建/index.html","210a5b470ab6310dd38b536d79a6d29a"],["/tags/函数式接口/index.html","574982d759e53fad6346ae6bef636e05"],["/tags/加速优化/index.html","88ce17cdf8be246b4d5a2fbe0f849322"],["/tags/单点登录/index.html","391b4e954c2419fdf037c01b9ee048aa"],["/tags/同步/index.html","fe0fea8ce82f601d89f02e569a035d6f"],["/tags/呆头/index.html","76c1241d05d52640815792167e523dca"],["/tags/图像处理算法/index.html","92f2d3630dc6e5b2b2c7888fd76a174a"],["/tags/图床/index.html","cbc912e974d2f8f2b7f771557a1a2448"],["/tags/多客户端/index.html","5cc59b065a927e5068cca85342ace18c"],["/tags/抽象类/index.html","7dba570a4919fd84035729c1d2e057ce"],["/tags/接口测试/index.html","b23c023e2531dbf1db2c7078d85246db"],["/tags/数据库/index.html","b097b04aa89bf7337cd400570f63412e"],["/tags/数据泵/index.html","6a79151d8e3b9bfb18d70fcbaae80cee"],["/tags/最短路径算法/index.html","beaafd1d8b4ef93dad59159733a626c6"],["/tags/移动内核/index.html","08fe1d425df0f34fac8379efa54c438f"],["/tags/简单难度/index.html","6c22a015cab07fb2d1ba6ff773f768d1"],["/tags/算法/index.html","b91271ea1725ec3168c550f5c455d802"],["/tags/线程/index.html","8e462fbc02201f502a873caaebffb9a2"],["/tags/组成原理/index.html","f00166671f705c6985c1f5aa3aa2b78b"],["/tags/腾讯开发者平台/index.html","81bef934eb0e4eec481a0f6f1768606d"],["/tags/软件测试/index.html","010e69d0bfadc0b9a51e7b36c5a7a9cd"],["/tags/进程间通信/index.html","849e9079773a61fb547674534223e4c1"],["/tags/进程间通信实现/index.html","b36276381a80539fa42c00ec0c762990"],["/tags/队列/index.html","018480abc94660bd4aafbebfc24076d0"],["/tags/静态资源存储/index.html","6eea62cd24a4b732adaf254f89cef5cc"],["/tags/面试/index.html","e545e5c37f6bdae8871f9d4bef99147a"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get("/*", toolbox.cacheFirst, {});




