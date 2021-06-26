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

var precacheConfig = [["/1999/11/11/关于呆头儿子和抠脚大汗的故事一/index.html","c6d687da73d59b7ec936ed16bf464c60"],["/2000/02/14/关于呆头儿子和抠脚大汗的故事二/index.html","6b824321bfe2ba476df44b5c7c26babb"],["/2019/11/03/hello-world/index.html","1cfa072200e7bc63c90ddf232160ff18"],["/2019/11/07/blog访问速度优化一github和腾讯云开发者平台双线部署/index.html","ddff8c8d8b9e21a657307392ad1ef9c2"],["/2019/11/10/blog访问速度优化二开启CDN加速访问/index.html","44c734a92759a081eac6323c622fe152"],["/2019/11/11/Linux内核-内核线程的创建/index.html","c786429d5df9896930d0e2d98949c9a0"],["/2019/11/12/Linux内核-工作者线程/index.html","b5fe3b215c5612fe3c188cf230718120"],["/2019/11/13/Linux内核-完成变量/index.html","331338d4f82d8e60c26eeac2acfcad0b"],["/2019/12/01/计算机组成原理-组成原理实验/index.html","3a16f2afc26b318c4e21a5b16f4a1e38"],["/2019/12/03/Linux内核-基于Binder机制的Linux进程间通信方法/index.html","cc43613fed9b647f2875c8cd5c2b987d"],["/2019/12/13/Linux内核-kfifo队列/index.html","c0b1d4cfd57ec1e8f8014b88a56548d3"],["/2020/01/08/Linux内核-实现多客户端/index.html","a640717a21a7fca8777aea8fa32e084a"],["/2020/02/08/blog访问速度优化三对象存储/index.html","b46a9644d174f007fd9242d384f6b785"],["/2020/02/10/Qt实现简易图像处理软件/index.html","b5d13b1b0cff85639ba760ac0537dfcc"],["/2020/04/25/Postman接口测试工具使用总结/index.html","be91b199628052d5ea8413aea77d61ce"],["/2020/06/05/软件测试-单元测试报告/index.html","a91250ccb3d672c5ab56fd0822354f71"],["/2020/06/07/软件测试-系统测试/index.html","f6427fce7d290a6a43a29e99d3158263"],["/2020/08/17/blog访问问题--coding平台上传出错/index.html","3515151a8eb7fd9a7472a0fe1cd8278c"],["/2021/02/06/LeetCode-简单难度总结一/index.html","936305e32657d5057bde172f81f7659f"],["/2021/03/03/java_抽象类构造方法问题/index.html","6f9416e44c310f82843e14b9dd2c8838"],["/2021/03/10/java_Lambda表达式/index.html","518c02a10b352a229ae961653b04be21"],["/2021/03/15/java_多线程编程_线程不安全集合/index.html","b6f32109bc708a58885734d4964af704"],["/2021/03/22/SQL语句总结/index.html","2be5724c4f6a38191ec8d40547c09fc4"],["/2021/04/06/阿里面试题整理/index.html","9e96e414139476ada943db893f1b9042"],["/2021/06/23/个性化开发总结_Tom/index.html","04a6cf845974632c3e918fbc534d58b6"],["/about/index.html","a1ad35f91cf2489cc73ad2e5e1c3e76b"],["/archives/1999/11/index.html","13c24495ad54568c4168e36569677861"],["/archives/1999/index.html","623e7688c512c51fc7baa5047f4dde16"],["/archives/2000/02/index.html","b64503ef71f9f0ba266d5624765b7b82"],["/archives/2000/index.html","3ff19b0267b76079a1b484714e17a8e2"],["/archives/2019/11/index.html","1d2d0b1b74ef95391c5aa2077698da7b"],["/archives/2019/12/index.html","cab227abdbafcd117ca68be3570ec65f"],["/archives/2019/index.html","80166361128cb8f28e82c7ac9f99c305"],["/archives/2020/01/index.html","e61b1d248e1f54d7c512d280a94bc41f"],["/archives/2020/02/index.html","7e69072b50cd7c258b929623bea32a1d"],["/archives/2020/04/index.html","bcfd4188eed51240e0aae67cf6393070"],["/archives/2020/06/index.html","e2326c7214fb58553a9067bd4e754ee6"],["/archives/2020/08/index.html","eb598cb499692a206ea4113c81106dd6"],["/archives/2020/index.html","f51400bc0a32876168d275506d72c07a"],["/archives/2021/02/index.html","9a2fc3b6eaa094a9fd8f02188d2534d1"],["/archives/2021/03/index.html","b5781df67a8c8d88c2d1337d472735be"],["/archives/2021/04/index.html","e4fe1379fd21d33752c5b3d179e988f2"],["/archives/2021/06/index.html","e97c5d9979776964c68c10593855e21d"],["/archives/2021/index.html","93c06d8ad3d68423a0dfc67bfa77c352"],["/archives/index.html","d5c52e909d51f0511e6271a8e83a8883"],["/archives/page/2/index.html","548e6d89d1ee0f319d5677c09849eaf3"],["/archives/page/3/index.html","8cd519097617c2aef8913676c702cffa"],["/assets/css/APlayer.min.css","41261cec5af2bcc3ae7f92f35324d9cd"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidupush.js","656f4c5f42f3faa3fae346509fac7592"],["/categories/LeetCode算法题/index.html","3c5000a04996f514d7340ece306248ef"],["/categories/Qt/index.html","5eba05649846a8ff7fc752c9cac3d49e"],["/categories/SQL/index.html","b38adfadaf60124da1fe219ccbd18f33"],["/categories/hexo加速优化/index.html","ecab9f9cba9a2e572fa8f1069ac6345b"],["/categories/hexo无法访问/index.html","603d5f0bb5e9ec261e211ed70e8b908d"],["/categories/index.html","5c5c965ef2cf95b88fe9f32ae0805010"],["/categories/java/index.html","a4b8c51abb61a1e560ebf8572fcf5bd1"],["/categories/linux内核分析/index.html","7d4796a00bcd477a640c99612fcba4ba"],["/categories/呆头/index.html","da12273b7f5c65efc4a3f7b032578744"],["/categories/易通个性化开发/index.html","351d24ff05b7bebf3fc131f2b7de1ed5"],["/categories/测试/index.html","5939a859afd0bdb779031b1083a585ea"],["/categories/组成原理/index.html","048089cfb5d16b4201199152fa887da7"],["/categories/软件测试/index.html","652452f102ac25d3f9d8dc7504d9b459"],["/categories/面试/index.html","a9e8145ba78967e61e7a5d0f0b620658"],["/css/index.css","883c501aa05affe872ccbe913c6b48b1"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/alipay.jpg","49b5d91eabc8f6051cd1b1e89cfd7532"],["/img/avatar.png","9eee8b7f139e0b0ddad209d66d3577a3"],["/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/head.jpg","bd4a14111cb12ab5fb35127814e883b7"],["/img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/img/index1.jpg","f60095f878428c295f7308563a856e42"],["/img/index2.jpg","aeab7082bd254245581048f7834f6d2f"],["/img/index3.jpg","94b8ccaeddc4649c5243f6e34edb05ad"],["/img/index4.jpg","f6fd5f80c1c72dfca93ce3a00efeb6cc"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/img/wechat.jpg","1d299b46676932b6013ffa28412b3cdf"],["/index.html","a005c9684f10dbabbbe0adc08ee5887e"],["/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["/js/main.js","446934272beca3b762f68d25c7cb6d11"],["/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","a7429b085c6360ce2be7db53cc0c1070"],["/js/utils.js","21a500d09ad2501bb1d83879273d85a1"],["/link/index.html","59f17a0507415955854a2e9e3adbe6bb"],["/main.js","eef68021d4215c79d0e072b56829df14"],["/movies/index.html","b72834fb66df1b54e54345ba4cb05d8b"],["/music/index.html","95e5200fb9a4b324a8df126a10935f2f"],["/page/2/index.html","5497e3a84625ad823904ce0b8234b391"],["/page/3/index.html","142f2a0adbbb9b962f9d90570901cf4c"],["/runtimeshow.js","d6d19caf4e917eb50d6f536e5627c3a9"],["/search/algolia.js","c874a637eff9f57654e39f5550a66236"],["/search/local-search.js","4b62dd087d5f6d7c1f83b55ecd417140"],["/tags/Binder/index.html","d6b208b69c944433f2872fcae4d9fd72"],["/tags/C/index.html","11d04ee2b24ac0e22187e2a0693331ec"],["/tags/CDN/index.html","815e5136e3d20102c992cb99da65814e"],["/tags/C语言/index.html","9ba7576cdc4f40a8d299f0c824060ab7"],["/tags/C语言，工作者线程/index.html","e31ddcf786e7d11ab72b02db78d5fae2"],["/tags/C语言，工作者线程，完成变量/index.html","694693cc55c4d12dbc14ef9aad18d6b1"],["/tags/IDEA/index.html","fa6bfe4c23b5390c790b411158a33601"],["/tags/ISE/index.html","ca58fc0d90743b3560faff5249b82a6d"],["/tags/Junit/index.html","45d3881dea2a59609eeaaba8196a31f0"],["/tags/LeetCode/index.html","603297aa811ef72d231df909ad4245eb"],["/tags/Linux/index.html","7a50ae17e779c86f16d136f47f1a75c4"],["/tags/MySQL/index.html","9bd82a24dbfda20abc921824095a154c"],["/tags/Postman/index.html","70cd11b10b7c5fc934c653edefe299b0"],["/tags/Qcreator/index.html","0398200ab5301a8b3a1234544dccf176"],["/tags/Qt/index.html","178d716e4696b24dfb69111e81d86e34"],["/tags/SQL/index.html","9dc6ce49cd5ca97c3a46038fc381d0d1"],["/tags/abstract/index.html","23e016bd4f585431d4a7a8b11461e11f"],["/tags/coding/index.html","018fffcbb9f391a0fe2baa350a614427"],["/tags/eclips/index.html","4bb4a61a004e132a21c6ca634907b004"],["/tags/github/index.html","086f3adff79ea778f79713714aafdb0e"],["/tags/hexo/index.html","a11ac775ebfec5dc2877ce44a6f88eef"],["/tags/index.html","574a8efce17c7a05b734a62f99c694d3"],["/tags/java/index.html","8adf8fe23e0b0cbba477b317d7638036"],["/tags/kfifo/index.html","78ba55a5708d7b6757a0336993ed7735"],["/tags/lambda表达式/index.html","6255dbad5ff77d862545081e8370db97"],["/tags/linux内核/index.html","f2d099f5b6e6fb66fbe900d08749bff6"],["/tags/loadrunner/index.html","283a557daf68659681c7110163a3004e"],["/tags/ssm-java/index.html","1fb1317da6633e7d0ace7d13f55ae7f0"],["/tags/verilog，指令，Composition-principle/index.html","54f79b573535809d22891e915228f7cf"],["/tags/七牛云/index.html","1efdd1ddd8a29d1b79aa53a018ca4c88"],["/tags/内核线程/index.html","30e2776cbac9cd6893769659222f7513"],["/tags/内核线程创建/index.html","80991f2e35692ef07867d470080395e4"],["/tags/函数式接口/index.html","45d7d0f569600fcb4b9d26ddd7fb7c6a"],["/tags/加速优化/index.html","7ee95ca3bb0743758674c5dcb0ab1ada"],["/tags/同步/index.html","017415947fad1d042e6cff06cee7166b"],["/tags/呆头/index.html","0a56a9e1f0c38aca2ffec271b2604b67"],["/tags/图像处理算法/index.html","0c549b0c81d523477ed9136ce35fc0d7"],["/tags/图床/index.html","5eb2c84e26a23ed1d480d7b30ee9a563"],["/tags/多客户端/index.html","83b8f7e1b744d36a23673a33b72c725d"],["/tags/抽象类/index.html","4a0af7cf277338f89cc8f7a7150e62e6"],["/tags/接口测试/index.html","8d238b6fb0f7acdd850b588bdc56c3e3"],["/tags/数据库/index.html","88a6989b278327bf4241f97ea8b2e8c7"],["/tags/最短路径算法/index.html","5910d73ebfcf925db08059bf61b572f8"],["/tags/移动内核/index.html","e848df637e30249c714b6c8964592e80"],["/tags/简单难度/index.html","272b2614e31f2e1912d46aee2a452a6a"],["/tags/算法/index.html","0d83a2b9a5ffa65dfe1440a4ee064e1b"],["/tags/线程/index.html","eeade42900a17f8732a94cd4829f35ad"],["/tags/组成原理/index.html","85dc74f356020da25b62add4a52cbf7a"],["/tags/腾讯开发者平台/index.html","635c87f4810e9c89a689b6e85fc99471"],["/tags/软件测试/index.html","eba6952f3006765b2f8a0bf5b84a3f8c"],["/tags/进程间通信/index.html","d875508a0026d153591790a9890a390a"],["/tags/进程间通信实现/index.html","3932effa05b0f11dd1b3fd08034e8887"],["/tags/队列/index.html","97b4820e0b5d1df5e8f6d11aa6ee98be"],["/tags/静态资源存储/index.html","421f46924d5eafcd64b5c8177dbe6163"],["/tags/面试/index.html","f19d6040d798ff601587cb8b733435bd"],["/third-party/ClickShowText.js","f3489798d7b1b56caa4e89319c06e81e"],["/third-party/activate-power-mode.js","e9b995d4395ba726d5b604b7c4938807"],["/third-party/anime.min.js","c632f7e20905bd928af09a23d3c79910"],["/third-party/canvas-nest.js","e6e4329d3d00d80c5f5c5cbb1b228675"],["/third-party/canvas-ribbon.js","7afc0227ab14e508881b54788d7ca208"],["/third-party/click_heart.js","0889f76cedeb3159312c90dc103e698e"],["/third-party/fireworks.js","f6da66de730cc068efd0d0b0a9ec64ae"],["/third-party/jquery.fancybox.min.js","4fcc6b927c45bd3c2090600a99c5b4d1"],["/third-party/jquery.min.js","99d802afc18d09e53295e8871f28cdf6"],["/third-party/piao.js","57cc981210804f8be8186005e5bf17e6"],["/tw_cn.js","434768102b1966cb997f6911acc28ed5"],["/utils.js","566013dec45b2f5fadaab35caa011fde"]];
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




