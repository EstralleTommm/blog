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

var precacheConfig = [["/1999/11/11/关于呆头儿子和抠脚大汗的故事一/index.html","d24b643a6d7db89220b650733f1e791f"],["/2000/02/14/关于呆头儿子和抠脚大汗的故事二/index.html","14ae558a1d67e73d07d5376af1a5ba2b"],["/2019/11/03/hello-world/index.html","72384b06d76a7393c602629e22d0ef6c"],["/2019/11/07/blog访问速度优化一github和腾讯云开发者平台双线部署/index.html","fea1c8a62fa288c19a7022876eedda24"],["/2019/11/10/blog访问速度优化二开启CDN加速访问/index.html","4b05a0ebd0da531ad242f1f25ad31b07"],["/2019/11/11/Linux内核-内核线程的创建/index.html","b3e147f2bbaf0caaf627c96f6c06b0d1"],["/2019/11/12/Linux内核-工作者线程/index.html","7ee818dba678ab1bee17a8f6768701a0"],["/2019/11/13/Linux内核-完成变量/index.html","8b98c7119b1acc159e6773ee1ace7139"],["/2019/12/01/计算机组成原理-组成原理实验/index.html","091317d336fb108c52f6f3fc583cddda"],["/2019/12/03/Linux内核-基于Binder机制的Linux进程间通信方法/index.html","4dabea4bf48437a19b1c9db1cf71949e"],["/2019/12/13/Linux内核-kfifo队列/index.html","880fa78279ca66411cead31bad7aa0ef"],["/2020/01/08/Linux内核-实现多客户端/index.html","5a21a5a089c67597699cf9d6e4e246c7"],["/2020/02/08/blog访问速度优化三对象存储/index.html","0eb0c0edaec76b0940b88a044d99bcbc"],["/2020/02/10/Qt实现简易图像处理软件/index.html","60c7ba3edd2dc17f11b05ecb2003d969"],["/2020/04/25/Postman接口测试工具使用总结/index.html","1a14991b109cb45ea05554164f5e55e1"],["/2020/06/05/软件测试-单元测试报告/index.html","55288fbbb908ee5fb3f6b17461ea8466"],["/2020/06/07/软件测试-系统测试/index.html","d1fd030e1482a71905bd1e7c29db6cf0"],["/2020/08/17/blog访问问题--coding平台上传出错/index.html","7d5514076af02edd1c41f3f66428cbc1"],["/2021/02/06/LeetCode-简单难度总结一/index.html","05bb791f08564f6d1cbdd3824c41c060"],["/2021/03/03/java_抽象类构造方法问题/index.html","feae9a6522bfe74ecb04bc6d3f3d59d1"],["/2021/03/10/java_Lambda表达式/index.html","27deeb8fe7d3d46a39aeea33640ce873"],["/2021/03/15/java_多线程编程_线程不安全集合/index.html","cb1e5b7dc742f2cd20aeead8102a8c66"],["/2021/03/22/SQL语句总结/index.html","fb34728be99e7f3ce29ebb558390fa5b"],["/2021/04/06/阿里面试题整理/index.html","f79b40a02a533afdf9ec6e77e713d3b9"],["/2021/06/23/个性化开发总结_Tom/index.html","7237c76ef2dffc76fb1ca35c289f37f8"],["/2021/09/06/Oracle数据库安装以及数据泵还原/index.html","a50307aa4afdcd258f38eee4b60921f3"],["/2021/10/26/单点登录一——原理/index.html","866763347f3879957a7227e992c1bce6"],["/2021/10/27/单点登录二——CAS/index.html","8e7702bedf43113a6b67e8d25d63e65a"],["/2021/11/04/单点登录三——CAS Clietn源码解析/index.html","f639958117ac90d16414c4fb79a558f6"],["/about/index.html","97748e335073c96d345f1721533feae6"],["/archives/1999/11/index.html","2d0359469ad6054643b72536788a87cf"],["/archives/1999/index.html","bd72fdea12ca897e07243e52df30424d"],["/archives/2000/02/index.html","38b0f44a2e11542d15008a4203ec6991"],["/archives/2000/index.html","967a02adbef9ad4176f46f0d47b8905f"],["/archives/2019/11/index.html","257bf92963eb567c62e5aa23ae8a5866"],["/archives/2019/12/index.html","8df5eb6e4f56d676017dab4c7a1b90bb"],["/archives/2019/index.html","9946081b0788344affc89a87d82921a0"],["/archives/2020/01/index.html","9c7f0604f1aae2e085dc81a7f897ca59"],["/archives/2020/02/index.html","5504685e330f1aa0a31a497738c32b06"],["/archives/2020/04/index.html","c1110309c880771495fefcc8137860f7"],["/archives/2020/06/index.html","801e997f4f858fc53d683007789d6fc7"],["/archives/2020/08/index.html","c91cf47c76c888e9cdf0281d10666d7e"],["/archives/2020/index.html","5a0a5748f76b3129df04d9a9b231b5e2"],["/archives/2021/02/index.html","4935270850195fd4d32914ed6a7a3b5d"],["/archives/2021/03/index.html","4a4ed7b3ad01c38c5c1620d699307f1e"],["/archives/2021/04/index.html","b3ed5397a87c7961b64ffed1a4340c5e"],["/archives/2021/06/index.html","ce52955e03778e5ff531a01fcc3aa786"],["/archives/2021/09/index.html","3c65c2d1d7d11a52dfbef5d76db5287d"],["/archives/2021/10/index.html","bb804873c812e7b8abc37de9302f17d1"],["/archives/2021/11/index.html","73f4d6d2268f496478032fe2ca995638"],["/archives/2021/index.html","469428ed598e6fa0d90a84ac020b72a0"],["/archives/2021/page/2/index.html","b39012900ba66adf9beb2e7b2d01c36d"],["/archives/index.html","bd34de20bb94cc0b19d4bcc569e93ff8"],["/archives/page/2/index.html","637dc55677c922fce330c4407a0cc0de"],["/archives/page/3/index.html","ed85cafd3f129fb2ac726188d4db0e26"],["/assets/css/APlayer.min.css","41261cec5af2bcc3ae7f92f35324d9cd"],["/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidupush.js","d41d8cd98f00b204e9800998ecf8427e"],["/categories/LeetCode算法题/index.html","792ab363035b2b700070a8d46775e6af"],["/categories/Qt/index.html","b275e72b899dff736e3239419cd9df03"],["/categories/SQL/index.html","5722abe593688781f8b95e55aa8ddd4a"],["/categories/hexo加速优化/index.html","bbe007a799ba04ef3c6eccdece87ad6e"],["/categories/hexo无法访问/index.html","f82ca2fde29314d63aa50733155c6b79"],["/categories/index.html","887e546b34ac1c52b43216c51c232f19"],["/categories/java/index.html","ee536046970382151da49d315cfc6cca"],["/categories/linux内核分析/index.html","fcbd618e5061a394cc6dcf0c30e8035c"],["/categories/oracle数据库/index.html","7e13b71a462470cd9eecddc42adfd03b"],["/categories/单点登录/index.html","1e0ba843b31ffb02fd9550e1359e6494"],["/categories/呆头/index.html","b321be960d065318f540d5b5928b3eee"],["/categories/易通个性化开发/index.html","d6a8461fcb42bbececdac23060d75f12"],["/categories/测试/index.html","cf78cc6753c2550cdfb0386fa4aca05d"],["/categories/组成原理/index.html","9a5c272c8ec498c1405f655012c99dda"],["/categories/软件测试/index.html","50506f13f11853047c38e87b1dc27448"],["/categories/面试/index.html","abd98c7aee5a2ee92160ad9e33a142ca"],["/css/index.css","883c501aa05affe872ccbe913c6b48b1"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/alipay.jpg","49b5d91eabc8f6051cd1b1e89cfd7532"],["/img/avatar.png","9eee8b7f139e0b0ddad209d66d3577a3"],["/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/head.jpg","bd4a14111cb12ab5fb35127814e883b7"],["/img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/img/index1.jpg","f60095f878428c295f7308563a856e42"],["/img/index2.jpg","aeab7082bd254245581048f7834f6d2f"],["/img/index3.jpg","94b8ccaeddc4649c5243f6e34edb05ad"],["/img/index4.jpg","f6fd5f80c1c72dfca93ce3a00efeb6cc"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/img/wechat.jpg","1d299b46676932b6013ffa28412b3cdf"],["/index.html","00a4e081784436a81d427ce9452dca61"],["/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["/js/main.js","56c8284ed9006ea7de88e32e5f30dd86"],["/js/main_es5.js","446934272beca3b762f68d25c7cb6d11"],["/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","a7429b085c6360ce2be7db53cc0c1070"],["/js/utils.js","21a500d09ad2501bb1d83879273d85a1"],["/link/index.html","04eb33d20beecd34482211763f1f70d0"],["/movies/index.html","fa852b497287903890d286fcf149495b"],["/music/index.html","e3e970b6a1a6a659e2d0ce2c138757a1"],["/page/2/index.html","796aa0f5b83f687fa7a78bbe23eacd41"],["/page/3/index.html","e68723affb13ee33001c9eb4278eb8ec"],["/tags/Binder/index.html","2d7e552d46e86e455bbf4a2525fde42f"],["/tags/C/index.html","154d2e8bd28f2dbb041a56394be8bcad"],["/tags/CDN/index.html","165f9b3b22816e87cd64abb3c252191b"],["/tags/C语言/index.html","9a7fbc2ed6a36111c298cb8b888574a4"],["/tags/C语言，工作者线程/index.html","5b82a7d4e506d5bc69046a64b34608ce"],["/tags/C语言，工作者线程，完成变量/index.html","c15262991f9e5de751089b9072e79b26"],["/tags/IDEA/index.html","e2ec13a96486d8b001570409b17cc1fd"],["/tags/ISE/index.html","f0c0773a8266410d9261b7687025be62"],["/tags/Junit/index.html","b91fcd2e03d9620dc3263a198832353a"],["/tags/LeetCode/index.html","240d1461ac94fb3dee7f544010bcb404"],["/tags/Linux/index.html","677cd3b5e172505eb5fa2a62a3bf215d"],["/tags/MySQL/index.html","8fa2528d7529de5fc9305805ccce98dc"],["/tags/Postman/index.html","5aa344dc789e32a198dc018d8786dc92"],["/tags/Qcreator/index.html","fa238db6d283df2cb267865ecbb2b4c0"],["/tags/Qt/index.html","cd31d6fea4c8fbcef09372d176ecdfa4"],["/tags/SQL/index.html","06e9204733d24c6314d803e2840d6627"],["/tags/abstract/index.html","656df89754b732f09fe18f9d71d2650f"],["/tags/coding/index.html","b4128a134274fd02a26b913559ba7cc6"],["/tags/eclips/index.html","adf3c72c3c5952df9a658c8198cb5a4a"],["/tags/github/index.html","49562970e0cc7f88e3363e3fd899c4fb"],["/tags/hexo/index.html","0571bbd420f44dd6f4bec9d903f9a74b"],["/tags/index.html","aaf90eaafb4376fde05fde8c01913f2b"],["/tags/java/index.html","410627eef69c818fff1cb34f3396a903"],["/tags/kfifo/index.html","0779be674b54ac476219a9755a5353be"],["/tags/lambda表达式/index.html","f435eca7d29b02458f4b2551b84159ca"],["/tags/linux内核/index.html","1151d4b71b67ad37375945c1387d031f"],["/tags/loadrunner/index.html","f5dc6049dbd0df130b86409034ba4276"],["/tags/oracle/index.html","64c87b1e3111128edcb940f76209359f"],["/tags/ssm-java/index.html","45fb62caf074d9b297742188cfcec183"],["/tags/verilog，指令，Composition-principle/index.html","ab65675e356f840a8e549f08620302bd"],["/tags/七牛云/index.html","4fe0fece239bbde5247115ccb9b88a55"],["/tags/内核线程/index.html","b5591d1d6858362f55d17af733e57a0f"],["/tags/内核线程创建/index.html","7203603755edd92af262b9f9a625bda0"],["/tags/函数式接口/index.html","185ed86a7ee9585eae53078740cbe645"],["/tags/加速优化/index.html","805355e1104aa7c4dd7990118f215276"],["/tags/单点登录/index.html","c692648a00a426e09fa95332c16ef1ca"],["/tags/同步/index.html","ef7b3c7c859ba58135c4db258b149f15"],["/tags/呆头/index.html","67b0bbc7c0eeeb2bfdbc4ae231458285"],["/tags/图像处理算法/index.html","1765ad7f4888696cf0f81e04132aa28f"],["/tags/图床/index.html","0dcb8e89411ad9f8f5c1698c0174c643"],["/tags/多客户端/index.html","12ae2dc876b9a36d63f4e7bea7015ae8"],["/tags/抽象类/index.html","8dab520d071104fca9795d05cc95197d"],["/tags/接口测试/index.html","8d3af7f215f472e102244fc881eb5a37"],["/tags/数据库/index.html","6dd1f0ddc6814a6ac7cb205ed8216f89"],["/tags/数据泵/index.html","a34c057c898afec4d824ad2b48adac47"],["/tags/最短路径算法/index.html","0847ea4dc76b9c1a9075fec7157af68e"],["/tags/移动内核/index.html","32967c4d0914682d965c16da3a872595"],["/tags/简单难度/index.html","91be8239482cbf72dfd2739ab1ba54ad"],["/tags/算法/index.html","71929a0405e5bf5a4089c3aa96087159"],["/tags/线程/index.html","6a555c1dc177f0c48cba0d469a49f0c3"],["/tags/组成原理/index.html","f5bb6cf429249b7f15dfe49f941d2d7a"],["/tags/腾讯开发者平台/index.html","a3c7d21d6e913d66115e259b7ec35035"],["/tags/软件测试/index.html","1a68775483b37294cc54e6bace1c557e"],["/tags/进程间通信/index.html","1ce50f0a108a88d039071d99b2ff9cae"],["/tags/进程间通信实现/index.html","531ebd68e85ca8accca1e047f5ab823d"],["/tags/队列/index.html","c31743fa9cd913b8996141f44b29c88b"],["/tags/静态资源存储/index.html","b20c9cb40a1069ba35e2750be4e69198"],["/tags/面试/index.html","8d4dd34103c1a9db5d3f6696fa18c379"]];
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




