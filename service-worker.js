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

var precacheConfig = [["/1999/11/11/关于呆头儿子和抠脚大汗的故事一/index.html","be76491316ec241b730d5421205dd80c"],["/2000/02/14/关于呆头儿子和抠脚大汗的故事二/index.html","21323e28fc88894584e16185cdbf1089"],["/2019/11/03/hello-world/index.html","b56acd6db58ebf4c8caa389a2a4fb13d"],["/2019/11/07/blog访问速度优化一github和腾讯云开发者平台双线部署/index.html","a7dbe06a714a3afc7d7475e2fb8b4137"],["/2019/11/10/blog访问速度优化二开启CDN加速访问/index.html","f3e66925ca78e14b0ee7fa4737bd2880"],["/2019/11/11/Linux内核-内核线程的创建/index.html","a6c710b2c14028c76c9b9e73031c2914"],["/2019/11/12/Linux内核-工作者线程/index.html","9339db9fe2ae1eec1ab3dd8de5924de6"],["/2019/11/13/Linux内核-完成变量/index.html","8ab833824e7121765035cee61a079e74"],["/2019/12/01/计算机组成原理-组成原理实验/index.html","9bc829947cc0390aa833b6af3cb41741"],["/2019/12/03/Linux内核-基于Binder机制的Linux进程间通信方法/index.html","2e0c1fd50adbdb8465cc6a7e3733fb2c"],["/2019/12/13/Linux内核-kfifo队列/index.html","9a3eccc6c2ee7d95e5e44249daf5eecb"],["/2020/01/08/Linux内核-实现多客户端/index.html","3d7ff782ff0437674e1f9b6061fcce6e"],["/2020/02/08/blog访问速度优化三对象存储/index.html","f5249592f53dbd7d7430f135e283e670"],["/2020/02/10/Qt实现简易图像处理软件/index.html","75d7cf38e54c476880f1eac81c3ca3f7"],["/2020/04/25/Postman接口测试工具使用总结/index.html","9afb952db619070e82b44c5f57203f00"],["/2020/06/05/软件测试-单元测试报告/index.html","445769542407600af027ac2ba4308c1a"],["/2020/06/07/软件测试-系统测试/index.html","a42f2aacf81ecf7a5b9cf90500b22956"],["/2020/08/17/blog访问问题--coding平台上传出错/index.html","9d6082aba563c88f42726662344b2480"],["/2021/02/06/LeetCode-简单难度总结一/index.html","ce824b57611b55646d92739e7a947deb"],["/2021/03/03/java_抽象类构造方法问题/index.html","3877406ca3231750b0a7be8b46046f9e"],["/2021/03/10/java_Lambda表达式/index.html","d71bb4a4b58568986cfc3f68431fa973"],["/2021/03/15/java_多线程编程_线程不安全集合/index.html","f988e0ba6fc83b4aea7b61647db95025"],["/2021/03/22/SQL语句总结/index.html","aada7719695b1e3f342efc9b8145f5be"],["/2021/04/06/阿里面试题整理/index.html","16dbfaadfed57a97730e9ab730df532b"],["/2021/06/23/个性化开发总结_Tom/index.html","28dd09bc40800065d1b1abc7a2951660"],["/2021/09/06/Oracle数据库安装以及数据泵还原/index.html","dc46820a8496e8880fc75f12038de9c7"],["/2021/10/26/单点登录一——原理/index.html","7356c187c1cd131f00a3ecb2d72a5bc5"],["/2021/10/27/单点登录二——CAS/index.html","77d88e6a48d30cfce58dc8125fe42eef"],["/2021/11/04/单点登录三——CAS Clietn源码解析/index.html","8e1ddb26dee82bb26ee4ef21d2d44eed"],["/about/index.html","696b13ec3ea7477253a04dc7144a7ead"],["/archives/1999/11/index.html","9a5ff14f3c49829e52df9e3280ebde4d"],["/archives/1999/index.html","a9d252de1f08a9a52af55ba80fdf9a64"],["/archives/2000/02/index.html","77b2f2b5e71f6e4c407fc62eefb2d1cb"],["/archives/2000/index.html","3d9e9105ae097533e0eec3778df5500c"],["/archives/2019/11/index.html","0540747146d0d67943c1056a0b6d23e0"],["/archives/2019/12/index.html","3f4bf4b1013af2b1dac76c6d8ee2a8f8"],["/archives/2019/index.html","1e42eaf73a737c1c69c218439c4184a8"],["/archives/2020/01/index.html","9f73399d3767631907e93959241cede2"],["/archives/2020/02/index.html","ec6ae97761522336f21ffc28b11c57d8"],["/archives/2020/04/index.html","1cfbb9ba0498549b586a71efbed1bfd1"],["/archives/2020/06/index.html","30219e809db2f5cf264ac50123afd77d"],["/archives/2020/08/index.html","e3f298d21281b97401cd11e56eb4e79f"],["/archives/2020/index.html","1a578e57188dc542410e4d189d83446b"],["/archives/2021/02/index.html","898e70ea2afc60d3770d9015c347d210"],["/archives/2021/03/index.html","5865741860900b217a11d50903b32317"],["/archives/2021/04/index.html","a453a392cb4d367edd01f1bcdf9b15c1"],["/archives/2021/06/index.html","90b735d462f3998c7b234885db01eca7"],["/archives/2021/09/index.html","0db051e8dc4e939f7a50ad9ca24d1d52"],["/archives/2021/10/index.html","a5bcfa2aaf576c7439e678a23ae4da66"],["/archives/2021/11/index.html","99d6ad6ac62840f4347cddca79bc985c"],["/archives/2021/index.html","2bce2b31d8d179fcb24f360f0af6518c"],["/archives/2021/page/2/index.html","1ab4b7cea1310a64d7484cb74196d534"],["/archives/index.html","a44f66e9b3099254f0303bb1b3661459"],["/archives/page/2/index.html","9b17cad6a2fd129febb689dbe4d845fe"],["/archives/page/3/index.html","0a916026efa38e84f4eecc7f57e0b567"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/LeetCode算法题/index.html","07da9b3a4bd51121da8bb3b738acd56f"],["/categories/Qt/index.html","d2812cb2e6bac47157ca1b321ee34653"],["/categories/SQL/index.html","b9e6d355420ef62a14e09ef74c2c5f5f"],["/categories/hexo加速优化/index.html","78a55c6e3e7c3ec9de04c0e4fce52b9b"],["/categories/hexo无法访问/index.html","23b0840cc857df5a85621db61bbddb48"],["/categories/index.html","cda6de8d34f5095bf3fe571031e38fc0"],["/categories/java/index.html","011521ba585b0bfb6014ab4deb27c9ca"],["/categories/linux内核分析/index.html","ee6c8b4a21a368b2ffc29d4ed6b9a825"],["/categories/oracle数据库/index.html","f6a13a25e6ed80fdd14663ac82715cc0"],["/categories/单点登录/index.html","7770575d86a8922e8ffb68bb71e85b02"],["/categories/呆头/index.html","d1550c40bb1b9ec90e56de43de52979f"],["/categories/易通个性化开发/index.html","95fd854d9876451d0250e5f4885423d3"],["/categories/测试/index.html","6d7669d9de612113b8b3130d72cc8069"],["/categories/组成原理/index.html","3e6f28beef5e19c27cb8dd351b0db624"],["/categories/软件测试/index.html","e5357179376631c1b99aa7b251666282"],["/categories/面试/index.html","184b3512fa094a023043adf5cbd81e82"],["/css/index.css","df952d8c89c4e6821e2b95979d35958f"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","23cf82ba04680b72d5616d74aa3f5550"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/alipay.jpg","49b5d91eabc8f6051cd1b1e89cfd7532"],["/img/avatar.png","9eee8b7f139e0b0ddad209d66d3577a3"],["/img/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/head.jpg","bd4a14111cb12ab5fb35127814e883b7"],["/img/icp.png","d0289dc0a46fc5b15b3363ffa78cf6c7"],["/img/index1.jpg","f60095f878428c295f7308563a856e42"],["/img/index2.jpg","aeab7082bd254245581048f7834f6d2f"],["/img/index3.jpg","94b8ccaeddc4649c5243f6e34edb05ad"],["/img/index4.jpg","f6fd5f80c1c72dfca93ce3a00efeb6cc"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/img/wechat.jpg","1d299b46676932b6013ffa28412b3cdf"],["/index.html","32c8e526d7e015776ac40958326645a1"],["/js/baidupush.js","7d26211fa55bebac2e0c0abeee05a267"],["/js/main.js","56c8284ed9006ea7de88e32e5f30dd86"],["/js/main_es5.js","446934272beca3b762f68d25c7cb6d11"],["/js/runtimeshow.js","a8d2f008a6f735fe2c8a29875df8ed6a"],["/js/search/algolia.js","93b52ab1abbba62970449df5b33d96b6"],["/js/search/local-search.js","d6333fa2d57a0d2e41c3a7edfc136208"],["/js/third-party/ClickShowText.js","4e11459d913a1168fdf65aaf2b53aa58"],["/js/third-party/activate-power-mode.js","2345780cb71f6e17a20d9ca2283accda"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","f91a3ea9c8a24813daf9e1e94714863a"],["/js/third-party/click_heart.js","11dae39d38c22606ac76522e2d18704d"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["/js/tw_cn.js","a7429b085c6360ce2be7db53cc0c1070"],["/js/utils.js","21a500d09ad2501bb1d83879273d85a1"],["/link/index.html","8922d32259c81d8da617623d498ffc75"],["/movies/index.html","268a3f3b9ce75d37934bf7ee0f96d045"],["/music/index.html","ca8b200ddcc57db636ab9e127554eeb9"],["/page/2/index.html","6b25fcebdd4cc6e251ab9d7ef64a33ca"],["/page/3/index.html","957f7045d23420d814a93d68f8bd8c0b"],["/tags/Binder/index.html","0f532654763507c98bc80ea6ea994f8b"],["/tags/C/index.html","11e478c04469e3d7e2ab3adebc07178b"],["/tags/CDN/index.html","fc2a4c8daf45101ceb796ff80d2264f2"],["/tags/C语言/index.html","c85af61912e2eb5bbd531b3efe61e3fc"],["/tags/C语言，工作者线程/index.html","d9c7fdb7220c25d9cb61fd35ec145f6f"],["/tags/C语言，工作者线程，完成变量/index.html","d33bc9ebf1bd678d41112a6273ad730c"],["/tags/IDEA/index.html","61c611f988fa0d9f0dc90d4d949945bc"],["/tags/ISE/index.html","61bdf740983d2398f320900232f6599d"],["/tags/Junit/index.html","376a70bb5b5bd1f3a35f580352875783"],["/tags/LeetCode/index.html","0f7cba22fc4ee7a7a7c6e78221e3d6b0"],["/tags/Linux/index.html","d883b2fe498de998565ecfd8e74918a2"],["/tags/MySQL/index.html","459bf30d62fb6ccf803bc921bdc76800"],["/tags/Postman/index.html","a9b3929fca264ebc44b373a90adfc20e"],["/tags/Qcreator/index.html","4bf127713b2c3e44b4aa7535bba8f4eb"],["/tags/Qt/index.html","78f777478011fa79de640ed48b25e37d"],["/tags/SQL/index.html","e952ebf6aec5ff35755d7ec25ad178a3"],["/tags/abstract/index.html","d9d62da8444786f19996193a0c46bb85"],["/tags/coding/index.html","28e5eae48f185a0868db843ec9d3bd7a"],["/tags/eclips/index.html","957ddccd48490d358ec491b152f1efd3"],["/tags/github/index.html","7e4b0305eefdfc6497d7066b24ab4edf"],["/tags/hexo/index.html","61c8f862fbeb070307d7a18a0a0acfc7"],["/tags/index.html","63bcded5f3eb24eeb7fd648a9ccf0776"],["/tags/java/index.html","2b9292352d336ef16513c05e894de7a9"],["/tags/kfifo/index.html","24d6b39dbdd450955e3bd3bc4956a09e"],["/tags/lambda表达式/index.html","70a6f63e91bd8a075a05ee314ebd88c1"],["/tags/linux内核/index.html","839ad1d713df8d6554406899d5785236"],["/tags/loadrunner/index.html","4e7d127d6465294983d13973d73000e4"],["/tags/oracle/index.html","a64c1b318af82e0e30ec571538fcded7"],["/tags/ssm-java/index.html","d375ee5d194cd82ddd51a611654cc38e"],["/tags/verilog，指令，Composition-principle/index.html","c921ad4d5d5742e217f2f1bec35b34a8"],["/tags/七牛云/index.html","df3e560c41f2dea7376cc2a66882b0e7"],["/tags/内核线程/index.html","0777dc7129a4e44c16ca84f6d4840189"],["/tags/内核线程创建/index.html","4721437d595629c1c7fce3ef61de78d9"],["/tags/函数式接口/index.html","1b221034a624bdefa0c5fbcc19c4e2af"],["/tags/加速优化/index.html","4396eadf519cf701cbd2a87e1bc8d1dd"],["/tags/单点登录/index.html","8e58a124d47bb4dd68fb88e0ed6d2b91"],["/tags/同步/index.html","075ea6ad99f047010cccc4902406e0a9"],["/tags/呆头/index.html","392c050f3a8bb8899e2e3e37766b0465"],["/tags/图像处理算法/index.html","50c07ca184c702fcefb7e65f4b78dd3b"],["/tags/图床/index.html","11019e167b1b829a3d7d0635f976bd56"],["/tags/多客户端/index.html","1ad76a3a79bd18fbebcf81c29ba2cb10"],["/tags/抽象类/index.html","8a3810b524745fce971e3a695194f268"],["/tags/接口测试/index.html","43156b983284fc97dec860e957ce7968"],["/tags/数据库/index.html","806472b4de1e0e4e1be20a0dc02dfd44"],["/tags/数据泵/index.html","efc99e8895da9b3acb62347561fc6917"],["/tags/最短路径算法/index.html","026761ca8c847c37f6bbd07557adede4"],["/tags/移动内核/index.html","50fb52bb19daee6cd069f1f200edbcb6"],["/tags/简单难度/index.html","0715ef3ae0b74ce28e13cc6851320068"],["/tags/算法/index.html","0af93d8cd7634dcca499a2bc2ed84605"],["/tags/线程/index.html","05954455375b16829e36e731ade314f0"],["/tags/组成原理/index.html","e833c5117c3383ca3b92a5eccf1ab27a"],["/tags/腾讯开发者平台/index.html","da3638d7c7e1ec8d5ea5de1aa498253e"],["/tags/软件测试/index.html","05fa6872d65640a7b073a178cbc67a41"],["/tags/进程间通信/index.html","c4a05ba0ca5cf915903dc85efa5d65a4"],["/tags/进程间通信实现/index.html","5a7ce96971ad878016bfbf646fce9546"],["/tags/队列/index.html","a2bf15d0197aa476d58d5e97c6dc0e3e"],["/tags/静态资源存储/index.html","15b5cab23c3c4e408a9cbbbd1527700d"],["/tags/面试/index.html","6662f6788ad8f942596b8b137ed5a15a"]];
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




