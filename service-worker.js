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

var precacheConfig = [["/1999/11/11/关于呆头儿子和抠脚大汗的故事一/index.html","ee72c0a857b9bb85605ce8209a686011"],["/2000/02/14/关于呆头儿子和抠脚大汗的故事二/index.html","d39577390e28f0bbebcccdbad560735f"],["/2019/11/03/hello-world/index.html","06a2cb7260bce2ac444118b7fe95f1ba"],["/2019/11/07/blog访问速度优化一github和腾讯云开发者平台双线部署/index.html","33680b56b0b418ea90f3ea26c885c099"],["/2019/11/10/blog访问速度优化二开启CDN加速访问/index.html","7cfc0d63d15a3d51012bb484add7fb13"],["/2019/11/11/Linux内核-内核线程的创建/index.html","62d3c749bd974d2b8377b927f3093d28"],["/2019/11/12/Linux内核-工作者线程/index.html","0c4cbe524d5e07afb2351567aeec71e7"],["/2019/11/13/Linux内核-完成变量/index.html","1fb8e1aaa8d7a1e0d9b063a2a2cf3167"],["/2019/12/01/计算机组成原理-组成原理实验/index.html","9f8d867643ceab3396eb2896d8987595"],["/2019/12/03/Linux内核-基于Binder机制的Linux进程间通信方法/index.html","9d67420d62da485723f02a364503bfb5"],["/2019/12/13/Linux内核-kfifo队列/index.html","defc4c97986673c8a40209201452a0b5"],["/2020/01/08/Linux内核-实现多客户端/index.html","9e99b64148ee89364392bb503e974912"],["/2020/02/08/blog访问速度优化三对象存储/index.html","7b376ebbf4f2d3867480580031b9caa3"],["/2020/02/10/Qt实现简易图像处理软件/index.html","cbe730b6b76fa1d2ce75eac9a5944581"],["/2020/04/25/Postman接口测试工具使用总结/index.html","b338c369ea6eb4daaf987dc585c1acd7"],["/2020/06/05/软件测试-单元测试报告/index.html","e46aaba08de3f84ae035e5ca25d9dafe"],["/2020/06/07/软件测试-系统测试/index.html","014ccd5aa1cd348cf271b0993904961c"],["/2020/08/17/blog访问问题--coding平台上传出错/index.html","ef9cb0c7b4d25db1b178a70a3fd2fc8a"],["/2021/02/06/LeetCode-简单难度总结一/index.html","f5041ee4ad1e6447822937c26214b31d"],["/2021/03/03/java_抽象类构造方法问题/index.html","2c749ac4c2a09c9c411a8b467388e86c"],["/2021/03/10/java_Lambda表达式/index.html","2169701d42e45ce5b26f273d3264ac02"],["/2021/03/15/java_多线程编程_线程不安全集合/index.html","d3a4a40923832692743aa49a3980f121"],["/2021/03/22/SQL语句总结/index.html","f6acd1beec89f55f250cb277d80fe518"],["/2021/04/06/阿里面试题整理/index.html","2975d1c775d879435424c26caa6755db"],["/2021/06/23/个性化开发总结_Tom/index.html","95b3e09bbb16400429831580079d9862"],["/2021/09/06/Oracle数据库安装以及数据泵还原/index.html","30cb71c4371ff2969768064f449fecfb"],["/about/index.html","ceb2efe7e621359dbc6db87587e809cf"],["/archives/1999/11/index.html","b5ef5dee6d8f4915266c8f177e3cc89f"],["/archives/1999/index.html","1372693323bc8ba9772df505546cdfdc"],["/archives/2000/02/index.html","7439baf906de922f81eed154249a80e7"],["/archives/2000/index.html","365cdb8576ef3526163d55c1b36c0e53"],["/archives/2019/11/index.html","eb68e5149765f44b92c9c4eb0ad2d82a"],["/archives/2019/12/index.html","55e051c6715eb3386792acdb348bdcd4"],["/archives/2019/index.html","e6ef1039172acc5ac9b8e5a2ec0702ca"],["/archives/2020/01/index.html","b8e0f81f04343a5e4f89f683c3e6e974"],["/archives/2020/02/index.html","3ddfa6a19c799ecf760ad5a0a6b60a28"],["/archives/2020/04/index.html","a68692f0ac25bc9716116ec2c57bbc3b"],["/archives/2020/06/index.html","0d889422f47571e8f717775916ad36d2"],["/archives/2020/08/index.html","7fd54c442336959f72ca444e73a8040d"],["/archives/2020/index.html","8efe98c506b1b06acd8a4e718011372e"],["/archives/2021/02/index.html","52f443174fb42653cde9cc20ea74d2be"],["/archives/2021/03/index.html","9c433900b227850b21c2a2e46a3534cd"],["/archives/2021/04/index.html","846608e2f56506d941af58c65dc93165"],["/archives/2021/06/index.html","d1d63cee7b29c0fbb30a546a88c061f0"],["/archives/2021/09/index.html","257da03613ba4851a486a91a3fab97ca"],["/archives/2021/index.html","39f55d322a4bb300f8b3d007f74c1af8"],["/archives/index.html","2766bd3c10e89ef0fc359c355f06aeab"],["/archives/page/2/index.html","ea0ca7348e23938e3f70d3b0227f8242"],["/archives/page/3/index.html","aef6b7f5f6364f331cee6e469ba064ab"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/LeetCode算法题/index.html","058041e8d0cd5a10c0099d82642663ba"],["/categories/Qt/index.html","16cfcf5bf0a2f66dd20bb886462e9722"],["/categories/SQL/index.html","d85cc37a830e20f7c0d33d6679240042"],["/categories/hexo加速优化/index.html","c33fef8877c2c335a983cfdae1e5b3b2"],["/categories/hexo无法访问/index.html","3744cc63e3f3011d1b5394fd2c309bb7"],["/categories/index.html","1bba998921f5023e2a50a98ff1ecf3b9"],["/categories/java/index.html","f566efcdeb690d0e2ce5d8782a1c98d4"],["/categories/linux内核分析/index.html","18085b2007cea1eb012da599a687e57a"],["/categories/oracle数据库/index.html","6de1c20f6a9d7c85f68bad361562a648"],["/categories/呆头/index.html","1a251292e73e62761a8c4cd402b42d03"],["/categories/易通个性化开发/index.html","b0ea58e1ba3405434a69c430d2eb739b"],["/categories/测试/index.html","2ad9f9ad7cf5555c9a05a0017ba8c8c0"],["/categories/组成原理/index.html","fb30975f173be5bf468e8201d3fe65e3"],["/categories/软件测试/index.html","42b11a4fcc122137b1726c67aa523e39"],["/categories/面试/index.html","e6ef53ba10afe13d9244c1cef07e0550"],["/css/index.css","df952d8c89c4e6821e2b95979d35958f"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/alipay.jpg","49b5d91eabc8f6051cd1b1e89cfd7532"],["/img/avatar.png","9eee8b7f139e0b0ddad209d66d3577a3"],["/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/head.jpg","bd4a14111cb12ab5fb35127814e883b7"],["/img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/img/index1.jpg","f60095f878428c295f7308563a856e42"],["/img/index2.jpg","aeab7082bd254245581048f7834f6d2f"],["/img/index3.jpg","94b8ccaeddc4649c5243f6e34edb05ad"],["/img/index4.jpg","f6fd5f80c1c72dfca93ce3a00efeb6cc"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/img/wechat.jpg","1d299b46676932b6013ffa28412b3cdf"],["/index.html","56e4015cf8ea1a68a5caef0ddb91710c"],["/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["/js/main.js","56c8284ed9006ea7de88e32e5f30dd86"],["/js/main_es5.js","446934272beca3b762f68d25c7cb6d11"],["/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","a7429b085c6360ce2be7db53cc0c1070"],["/js/utils.js","21a500d09ad2501bb1d83879273d85a1"],["/link/index.html","7556544f357a0029ef101ecb847c467d"],["/movies/index.html","1973a1770db686ed3caba1a14fbc2bb9"],["/music/index.html","157f95c7332061ae426019fa22aa22e4"],["/page/2/index.html","7a0136bcf30ed4a59e8e52c203d99a18"],["/page/3/index.html","00e01a743ab3a247e7818c93b8de2413"],["/tags/Binder/index.html","12bdd3b0cca965f9b14d9ec1c9b1dfa4"],["/tags/C/index.html","1a5b12bb11c3d2a87337f1a1a0a6815e"],["/tags/CDN/index.html","e02db21600b2b68999956edce7391694"],["/tags/C语言/index.html","070f8ccead8758e30911ba139e63f7ed"],["/tags/C语言，工作者线程/index.html","d02e2f4d4d06db05d0b998a496e93d14"],["/tags/C语言，工作者线程，完成变量/index.html","f70f9ed4c5b40a513173c157e81671f1"],["/tags/IDEA/index.html","e70256b0dbd12a513c82eb933d2ba199"],["/tags/ISE/index.html","1b976395a2d3f5ddb0603e1dd757ed44"],["/tags/Junit/index.html","8ace2dbc251388248fad4feeda5e7a26"],["/tags/LeetCode/index.html","2cda8d243db1d492258237e4b06a65e1"],["/tags/Linux/index.html","16fd7ea22ca0d6e65ceec195c876769f"],["/tags/MySQL/index.html","68671ea493b110fc61d8fc8b98b4fca7"],["/tags/Postman/index.html","951144f195e831b89f9a7b1376da8c65"],["/tags/Qcreator/index.html","9debae04043889d22a1de5f129cf7c65"],["/tags/Qt/index.html","49c8e5cd8c490c355ae79e3622bae422"],["/tags/SQL/index.html","917de5c3e271242bc35fbee13f8557cd"],["/tags/abstract/index.html","badca61e76bb42399460f0d8f6041296"],["/tags/coding/index.html","32f5779993386edd05478b4e4a20c08a"],["/tags/eclips/index.html","5a1d7c27674fe6e6152ec4e774192c40"],["/tags/github/index.html","483ff53bb62a0e48746f398887b12de6"],["/tags/hexo/index.html","ea86b683af36b21e1623bd98c98c4963"],["/tags/index.html","d42acddd322802b9021e581bfc42ace9"],["/tags/java/index.html","87a3911ca7eeecb0e62c9442b10265ab"],["/tags/kfifo/index.html","dfef062a969734d2bc7ff36d75588a8b"],["/tags/lambda表达式/index.html","dd080e8e9cd80db8dbae9dd127774992"],["/tags/linux内核/index.html","07d1691afc0c47104a2e7b5ac960ac78"],["/tags/loadrunner/index.html","d036f0a672e73473525b23e989b63a0b"],["/tags/oracle/index.html","a8c51d79ab92faac6fbe29c83781f997"],["/tags/ssm-java/index.html","274ffa116b4b2ad72968292da2e2f4c1"],["/tags/verilog，指令，Composition-principle/index.html","3b001d56bf600bc78f09bb5ce2cc9445"],["/tags/七牛云/index.html","7342c16fda1872219c2244e3fcff0d80"],["/tags/内核线程/index.html","64fa1fa2e40e15b8face18e0420886de"],["/tags/内核线程创建/index.html","ce300710cfcc11bd95b66c5b131d91db"],["/tags/函数式接口/index.html","a86368e374b71a9e4c252be73b9b5b1c"],["/tags/加速优化/index.html","acd6e2a6f75d6d001e139208f60fc301"],["/tags/同步/index.html","a71760700712c39b9202336a34d4b109"],["/tags/呆头/index.html","db29fc5211cd06c252d462a17e824fe8"],["/tags/图像处理算法/index.html","d0bc39c5422630da33b47b864554245b"],["/tags/图床/index.html","0c106dc71823dfabfab5d5659881d6f0"],["/tags/多客户端/index.html","e76c640b7abc3139243d9127e53e76b2"],["/tags/抽象类/index.html","54daa31273bb8cd29c155a4a0c497d22"],["/tags/接口测试/index.html","a8e2cd10f4ec706a492f3fa4eae059e8"],["/tags/数据库/index.html","119a94e49906e0719439ed9ac63f801b"],["/tags/数据泵/index.html","9a415dcbcfd439c1a57481da8f9b3dfa"],["/tags/最短路径算法/index.html","60baf90ac00dfc5a428381b0b319a35d"],["/tags/移动内核/index.html","58a1dfea7f84fb7722f16f1705ba43bf"],["/tags/简单难度/index.html","53928896b5b1c89b05fa52d1c9e774d3"],["/tags/算法/index.html","cbc621304f642482b5903304955cd988"],["/tags/线程/index.html","db7c6143f45d831996a5a34746914a1b"],["/tags/组成原理/index.html","5488bc6cdf6e307c9c40b438c4e31ab5"],["/tags/腾讯开发者平台/index.html","a819aa9c0667fb56f65576dac4ee4a75"],["/tags/软件测试/index.html","1774931b5c9d8facf07dc54e210bc8a7"],["/tags/进程间通信/index.html","1103a7c61ace8a129a4b7c104249c3c0"],["/tags/进程间通信实现/index.html","62dcc405afe1935993ba8395d557dab1"],["/tags/队列/index.html","8d77edeeb519eccd1f88f0373e56391e"],["/tags/静态资源存储/index.html","a32bbb1f94a31fbf38691f1782880a4b"],["/tags/面试/index.html","76fa6f28b64dcfe4063b8aeb0206f496"]];
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




