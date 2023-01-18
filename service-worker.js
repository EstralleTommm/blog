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

var precacheConfig = [["/1999/11/11/关于呆头儿子和抠脚大汗的故事一/index.html","21e084db735ebe6fd97bea5f32e85e80"],["/2000/02/14/关于呆头儿子和抠脚大汗的故事二/index.html","c34b5985552befb25f7690253a7c55f6"],["/2019/11/03/hello-world/index.html","56e787df4fa3a5649343b292cc100608"],["/2019/11/07/blog访问速度优化一github和腾讯云开发者平台双线部署/index.html","939fdbc93b9f5830d4df4e8396bc41a9"],["/2019/11/10/blog访问速度优化二开启CDN加速访问/index.html","6560955c601f62e6388dea7872a1c64f"],["/2019/11/11/Linux内核-内核线程的创建/index.html","87b4e5d3080729092aaebdc48eb3b548"],["/2019/11/12/Linux内核-工作者线程/index.html","364b122d6c951ccf9f5b1c1af910fb91"],["/2019/11/13/Linux内核-完成变量/index.html","31eb736f5a3a08213e4d7081d1d87db5"],["/2019/12/01/计算机组成原理-组成原理实验/index.html","ed29e9db5ba0ba9bc6dcd0bce8b51d91"],["/2019/12/03/Linux内核-基于Binder机制的Linux进程间通信方法/index.html","d3d6c83829924227faf7eed7a6cce220"],["/2019/12/13/Linux内核-kfifo队列/index.html","9f37a15c28df959d27dda480856cc884"],["/2020/01/08/Linux内核-实现多客户端/index.html","96835e99816bce241d89320a5506281f"],["/2020/02/08/blog访问速度优化三对象存储/index.html","bcd78f21c314d12b2f347a29db722adf"],["/2020/02/10/Qt实现简易图像处理软件/index.html","a79c6e4fa4deab50f9df6be7405008bc"],["/2020/04/25/Postman接口测试工具使用总结/index.html","00c2d46afb60ee65c4a8d5800385d91e"],["/2020/06/05/软件测试-单元测试报告/index.html","1e8faf5857088492af1fe4d6761cd8b9"],["/2020/06/07/软件测试-系统测试/index.html","e7e8fb13c76e48ea02350ebc4408f010"],["/2020/08/17/blog访问问题--coding平台上传出错/index.html","531970168ea98ca9103b68fe31cc24b7"],["/2021/02/06/LeetCode-简单难度总结一/index.html","bbe7af6c81d4ff28db5223ef293dc8c0"],["/2021/03/03/java_抽象类构造方法问题/index.html","cefb3526d44ac9c4d7fd984f4e67e2a2"],["/2021/03/10/java_Lambda表达式/index.html","4ad98c9b290f59a1d8dcf8b99cb9e65a"],["/2021/03/15/java_多线程编程_线程不安全集合/index.html","23636149d19e96a60f48f4d6b32546e7"],["/2021/03/22/SQL语句总结/index.html","c66b166f461a03dbb603e5026a936d1a"],["/2021/04/06/阿里面试题整理/index.html","1b77bd4ae63976f081682d6c3f5cf3d0"],["/2021/06/23/个性化开发总结_Tom/index.html","18d8a6e53a64cadb5319fd4dbcda7c1b"],["/2021/09/06/Oracle数据库安装以及数据泵还原/index.html","b93560b9b6fbe2e6212e10c5797c4376"],["/2021/10/26/单点登录一——原理/index.html","5f295929ed22fdc3d6aa39fc7eced415"],["/2021/10/27/单点登录二——CAS/index.html","aed542881e1f124ecbed289fe04019b4"],["/2021/11/04/单点登录三——CAS Clietn源码解析/index.html","fbdbf92a5e26fe5fa9190dfe43bf5845"],["/about/index.html","73ab8d9544477cd4214a137e59fd33ff"],["/archives/1999/11/index.html","669b5b81438dd8aa719eff3b84213678"],["/archives/1999/index.html","a4df83a04ff180e0542145f7fd85477f"],["/archives/2000/02/index.html","9b66da2bdd1b5e493a9ae6e9e803de6c"],["/archives/2000/index.html","b193fdadabc6962c31834546a16cedbb"],["/archives/2019/11/index.html","bd3c2cc02edbbfea5269cef3785053e3"],["/archives/2019/12/index.html","3ea6b0ded211532b5ed5397fc790b694"],["/archives/2019/index.html","23cc1f6b567afd00210eacefe0156071"],["/archives/2020/01/index.html","cac43e13b2df887e844e812b4907785c"],["/archives/2020/02/index.html","b84289471bd42b569b14a1b621f96c70"],["/archives/2020/04/index.html","3224f4a083dc3aa1c4e5fa7fd387be94"],["/archives/2020/06/index.html","3d1cb932b71a017be4d494ff83b599b6"],["/archives/2020/08/index.html","c183674880b54316c219dcf9c6988a53"],["/archives/2020/index.html","4c81bd3778d4b817912ae80cef27cc0a"],["/archives/2021/02/index.html","18b0bffa7377d1943ac5beaedbffd909"],["/archives/2021/03/index.html","777ad91e9b5afe2ace81f6ba8b0f8ba2"],["/archives/2021/04/index.html","6026f6163288d1941c7c006efe20d9ad"],["/archives/2021/06/index.html","feb2e90efd236708a601470e3b0364d1"],["/archives/2021/09/index.html","ed3b25b61c018917c63073767db899a1"],["/archives/2021/10/index.html","7f110741379bfe9712ade401ef4f5eac"],["/archives/2021/11/index.html","20d1df0181cc5ee62b97dc91345fc2ed"],["/archives/2021/index.html","d994ead419383f30a3cb2bba27d6b8aa"],["/archives/2021/page/2/index.html","03a7a10e0e4ee7da94d619bbd1b040e1"],["/archives/index.html","9b9c076677a94b2a269604d27684eb57"],["/archives/page/2/index.html","bcb02c5c93c5a9ebf86e6d2eae02c8b1"],["/archives/page/3/index.html","4e2e85ca2f722b5537d2d15c29998fdf"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/LeetCode算法题/index.html","7190d8c7a3fb5ba2d9d1375ad8eb1ba8"],["/categories/Qt/index.html","657fd30be1ebecde9d4ccf09acf01fa4"],["/categories/SQL/index.html","21eb04f7e4fa2da520e3bafa7d30ed9d"],["/categories/hexo加速优化/index.html","83de81a67447200c4dc59a93db718c61"],["/categories/hexo无法访问/index.html","86f9d904a45e9de1efa32a7821475779"],["/categories/index.html","428f6d271deb15193c39d864d368e702"],["/categories/java/index.html","2f57ff1b19ff0895855cf1b9a8bb72b2"],["/categories/linux内核分析/index.html","a517e859006b93118f461b7c51b1fdde"],["/categories/oracle数据库/index.html","14a9c7b0d25214c08e76054fbd56e4bb"],["/categories/单点登录/index.html","cb2b3301c25a065867634f55b37b7aa2"],["/categories/呆头/index.html","39cd56866654e549abd8c691dca89be5"],["/categories/易通个性化开发/index.html","401f581fbd0a8e510d633cae4cdbb0af"],["/categories/测试/index.html","39161d2ca5e54bc28a2b3853621ef092"],["/categories/组成原理/index.html","9bf3ded041be5c5f8b139ba68c24198d"],["/categories/软件测试/index.html","16ad92986941c59e2df3da9a38cefbb7"],["/categories/面试/index.html","f3c6ac8b8734ebce7d8966f6311a9b8a"],["/css/index.css","df952d8c89c4e6821e2b95979d35958f"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/alipay.jpg","49b5d91eabc8f6051cd1b1e89cfd7532"],["/img/avatar.png","9eee8b7f139e0b0ddad209d66d3577a3"],["/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/head.jpg","bd4a14111cb12ab5fb35127814e883b7"],["/img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/img/index1.jpg","f60095f878428c295f7308563a856e42"],["/img/index2.jpg","aeab7082bd254245581048f7834f6d2f"],["/img/index3.jpg","94b8ccaeddc4649c5243f6e34edb05ad"],["/img/index4.jpg","f6fd5f80c1c72dfca93ce3a00efeb6cc"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/img/wechat.jpg","1d299b46676932b6013ffa28412b3cdf"],["/index.html","6a10d26c8f4ad2a338808fb9daa79dd3"],["/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["/js/main.js","56c8284ed9006ea7de88e32e5f30dd86"],["/js/main_es5.js","446934272beca3b762f68d25c7cb6d11"],["/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","a7429b085c6360ce2be7db53cc0c1070"],["/js/utils.js","21a500d09ad2501bb1d83879273d85a1"],["/link/index.html","ca178ad5641fff7872a92e370530ef19"],["/movies/index.html","a414abdd85a0aff13609bf6f7be8ea5e"],["/music/index.html","e704a190b88b1da8c722b1287abe8282"],["/page/2/index.html","0fe97365d5ab5ac474fbb27f9e47f54b"],["/page/3/index.html","a86908e446a41f5e101bdcb34b87ee39"],["/tags/Binder/index.html","29c1a98b7357f89013833bb4f4a07a8e"],["/tags/C/index.html","08ebe68686b308b6690bb5425944a796"],["/tags/CDN/index.html","950618c8b50638762e6fbb3f1295ec7e"],["/tags/C语言/index.html","86d64bc5b7ff436f46e273222670e686"],["/tags/C语言，工作者线程/index.html","7b8eebd0feb0531dc5384d1423e58377"],["/tags/C语言，工作者线程，完成变量/index.html","9a558fe6c3e0a715e25966f44e64f3d3"],["/tags/IDEA/index.html","ed5e1b22ac9b42be1f4d7c1d24235723"],["/tags/ISE/index.html","9684681683601f503519408ff252da87"],["/tags/Junit/index.html","af539a47e4f7aea0263c5a2f2403970f"],["/tags/LeetCode/index.html","17aabd0dcb2ba67a218cb978414c03ff"],["/tags/Linux/index.html","43405338efdc7499d76409155cabe7ad"],["/tags/MySQL/index.html","5808716ceb4c0b6c64ea5f54a54c4481"],["/tags/Postman/index.html","f98e9ebbc91525d2a61df0047c669e84"],["/tags/Qcreator/index.html","1d157cb58fe8f6f75c07d5950bc64e1f"],["/tags/Qt/index.html","c6dfb8cbb1910d8109ebc5cbfe966468"],["/tags/SQL/index.html","20a3737291942ab767282ca46e47f601"],["/tags/abstract/index.html","c5a54f5ab8d0744d71af9c03cfb0cd53"],["/tags/coding/index.html","81d248826800ebe21923bbd8f9f0dde8"],["/tags/eclips/index.html","6821ec2aec927233ae907f62a27ff777"],["/tags/github/index.html","f46a8b8dfe84db9658710801f3d1376e"],["/tags/hexo/index.html","de5f510339d1a59c1862ef860ebb9e17"],["/tags/index.html","f3d7810ee14f5b8bc4ed466290af1505"],["/tags/java/index.html","54620ac7bc5c4fe16122b9b754dcbe2b"],["/tags/kfifo/index.html","9799a23c99c6ac871750ad1bf63d08c5"],["/tags/lambda表达式/index.html","76c168ec0fc23b9cbfe50b8ea87c53ec"],["/tags/linux内核/index.html","0712189eb94ffa6365c3e7b165beeb5c"],["/tags/loadrunner/index.html","efff2c3ad60cbaebdb77531b11b786ed"],["/tags/oracle/index.html","16c918441454275849caa9ec0af11079"],["/tags/ssm-java/index.html","c44ed8086d7ac770ec07fba99e160c8b"],["/tags/verilog，指令，Composition-principle/index.html","93de40c596def24cb63bfa632389ee5a"],["/tags/七牛云/index.html","e562fbe0df8beb7db7f098de03d249b9"],["/tags/内核线程/index.html","9c48852223bdac05ed273055791a8a45"],["/tags/内核线程创建/index.html","c3db0e01e3bc0defb711f2c9cc850229"],["/tags/函数式接口/index.html","f33d0b0d6ba6b5804f561f53baa1050b"],["/tags/加速优化/index.html","7904b43e010463f63562886f49e2f467"],["/tags/单点登录/index.html","b4dcb03e165e50a34c5178e68f0fe42a"],["/tags/同步/index.html","3523e729b612c640cf53adf024345a65"],["/tags/呆头/index.html","edd90e6aa9b01c47368ee36736b2f2af"],["/tags/图像处理算法/index.html","b1feef83a9ad35e3b1b06c7927d63b9d"],["/tags/图床/index.html","577ab11ac4e30f2072c7eb060b7b5b80"],["/tags/多客户端/index.html","25aa427e6a04c5416c771c405c3531cc"],["/tags/抽象类/index.html","6be696f69d8cf56337f99e6299ad702d"],["/tags/接口测试/index.html","7bb24cb6599c4f36830b515909f856e6"],["/tags/数据库/index.html","0963a3c2948816ee1893818e015a84a8"],["/tags/数据泵/index.html","daeb0519cc7336a85eda2e50db1162c1"],["/tags/最短路径算法/index.html","12e006ee5f38796fca5210f945d99f44"],["/tags/移动内核/index.html","e66b9140fa74f5c199660399580fc3fc"],["/tags/简单难度/index.html","81bcd650f3d96c7771366b865d06d3a3"],["/tags/算法/index.html","a964a0cc2c425cded2387c24739cf69c"],["/tags/线程/index.html","ac4408769b45a1e8e565e5d2b58d96f4"],["/tags/组成原理/index.html","91c06b52cd365b3fd960f7f8b13a4fb1"],["/tags/腾讯开发者平台/index.html","5cc2647c6c895d4db72713fd2c34ef70"],["/tags/软件测试/index.html","09703c7d45bf1749339120bbd9fc331b"],["/tags/进程间通信/index.html","de5546af5df11adcff8d5366126160ec"],["/tags/进程间通信实现/index.html","fb18f3969beb1f6223ed3457238795a5"],["/tags/队列/index.html","29c3e4350dc215fed1a9325ea927b14f"],["/tags/静态资源存储/index.html","3e35ac33223f2fbafce48006d88fc4b4"],["/tags/面试/index.html","f46cf3cfcd7a5281e31cc2761c1c8c59"]];
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




