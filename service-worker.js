/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "03b19526adb4fefbc0c87d4d0a9245b6"
  },
  {
    "url": "about/index.html",
    "revision": "00e6b959d62a55e771c4e830378fa3ea"
  },
  {
    "url": "assets/css/0.styles.a1997505.css",
    "revision": "d5470d58413452a5ccfbab3f0f8a3b71"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/03051.68b4fe81.jpg",
    "revision": "68b4fe8108edbf08be6157e5ee29a689"
  },
  {
    "url": "assets/img/03052.5d9395a5.jpg",
    "revision": "5d9395a5734873a15bd4f89902e9ea31"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.d4588b42.js",
    "revision": "d6fe070730a481e161c2ed2a6e15c5b5"
  },
  {
    "url": "assets/js/10.ed4a3d6f.js",
    "revision": "63ed70a160fc4fc925c023a59933ebfb"
  },
  {
    "url": "assets/js/11.4a6f804a.js",
    "revision": "31a217390e048ab192a992e320d5ed27"
  },
  {
    "url": "assets/js/12.13ff92e5.js",
    "revision": "f2a1cfcf8661c4f692bf35806fd2603a"
  },
  {
    "url": "assets/js/13.6871b386.js",
    "revision": "9fa45c793e0a9753b6a42249db5bf5f9"
  },
  {
    "url": "assets/js/14.abb34363.js",
    "revision": "a7015426334d377892c6f1acdf7d28d6"
  },
  {
    "url": "assets/js/15.3a7aece1.js",
    "revision": "5dc1968243acca52c4fa674d5448c3e1"
  },
  {
    "url": "assets/js/16.c3180514.js",
    "revision": "2703680d2a0b8c39968893fc600335c6"
  },
  {
    "url": "assets/js/17.849baac7.js",
    "revision": "4ab00403fa3b27dd50657e8e79eabf8f"
  },
  {
    "url": "assets/js/18.cfb77031.js",
    "revision": "f7c86d16c1f81635a104159789b2286b"
  },
  {
    "url": "assets/js/19.5c897d46.js",
    "revision": "95e54d0f2a82aab36648c73d47f087c5"
  },
  {
    "url": "assets/js/20.05669a92.js",
    "revision": "d2a0feec18fb0af8ac08a834a014112f"
  },
  {
    "url": "assets/js/21.11fc860c.js",
    "revision": "a56693763830dd20ef09650f0295bbf2"
  },
  {
    "url": "assets/js/22.eaf5a667.js",
    "revision": "4ef4671dec24b5f59e66d367759c8424"
  },
  {
    "url": "assets/js/3.f7c31d13.js",
    "revision": "d5e85bc196a052f3cb52a63e124de21d"
  },
  {
    "url": "assets/js/4.ddc62527.js",
    "revision": "cf4b47c17fbcff4bd256f78a89d5c84c"
  },
  {
    "url": "assets/js/5.2ef6a860.js",
    "revision": "5df7689b4ab39329afb81c27dad5eb39"
  },
  {
    "url": "assets/js/6.f81ca6b6.js",
    "revision": "c1c0bf55b0b7b081871a3687535ced3b"
  },
  {
    "url": "assets/js/7.951a7ccf.js",
    "revision": "0a046ce14a5cf854d82ba8b39044b743"
  },
  {
    "url": "assets/js/8.d7153750.js",
    "revision": "db5f8fd166ce5455469a1c6925195ffc"
  },
  {
    "url": "assets/js/9.b0e218da.js",
    "revision": "f72c44cb4dbd8425f006eff3fb151d7c"
  },
  {
    "url": "assets/js/app.1e7ea3cf.js",
    "revision": "a973d23540f847ddcf6372c65e0da890"
  },
  {
    "url": "author.jpg",
    "revision": "936904db8684b7242dcef4e82fe93b78"
  },
  {
    "url": "bg.jpg",
    "revision": "a46c2b7dd8f7288488667047e60aa7e2"
  },
  {
    "url": "categories/index.html",
    "revision": "d8f255f462d2c2545562f61b09d3ee9c"
  },
  {
    "url": "categories/mood/index.html",
    "revision": "3fb5e5fe55bf5e7e36d5f8c337c4f03f"
  },
  {
    "url": "categories/share/index.html",
    "revision": "52c2cda8cc3725c3021dd2c39f990ad7"
  },
  {
    "url": "demo.png",
    "revision": "69a66907d17347fc620cce912ad8b857"
  },
  {
    "url": "icons/cat128.png",
    "revision": "a5c5942bcb1a10affff8c4029383fa79"
  },
  {
    "url": "icons/cat16.png",
    "revision": "1aec0693ff6e320c0adedf185806b1ab"
  },
  {
    "url": "icons/cat48.png",
    "revision": "231db9fe2dd479a3aac7da8194bb9fd5"
  },
  {
    "url": "icons/LatteAndCat.png",
    "revision": "a5c5942bcb1a10affff8c4029383fa79"
  },
  {
    "url": "icons/LatteAndCat.svg",
    "revision": "8e2d868e240a4e9b1520fd83ad4b3ad3"
  },
  {
    "url": "index.html",
    "revision": "f77cfcc560d02f4da1d674baff99d264"
  },
  {
    "url": "mood/230224.html",
    "revision": "aa1f20305e35d01fc817c19fd12cbf1c"
  },
  {
    "url": "mood/230225.html",
    "revision": "d7750622cee42cd86a4f57fa331713fe"
  },
  {
    "url": "note/index.html",
    "revision": "dc0144b3596aa440972114c439025962"
  },
  {
    "url": "other/230410.html",
    "revision": "0cac2278b1b3c618ffd6d1f3065ef69f"
  },
  {
    "url": "other/progress.html",
    "revision": "0d485ccb8e3c719eef00ec5a54dfe935"
  },
  {
    "url": "share/220924.html",
    "revision": "76b337596b0a3c952b3eab3a69efaa23"
  },
  {
    "url": "share/230304.html",
    "revision": "aeb831a582c6f1a71e32584754dabcf5"
  },
  {
    "url": "share/230630.html",
    "revision": "58952d47a7381911fbb91ca7d0aad708"
  },
  {
    "url": "star.png",
    "revision": "f839cadd169727f31a195d0b53d05807"
  },
  {
    "url": "tag/index.html",
    "revision": "267e34f49744756f7d3b9497fd747e59"
  },
  {
    "url": "tag/保研/index.html",
    "revision": "17cc54e45a626c3f4a4b39d454ed7097"
  },
  {
    "url": "tag/杂想/index.html",
    "revision": "836871169eac5cdf6a06a93f5a01659b"
  },
  {
    "url": "tag/胡说/index.html",
    "revision": "1a98a63161b4cfa05dd0bf63a84dbea9"
  },
  {
    "url": "tag/记录/index.html",
    "revision": "4bf415a448afdbfa9ec2add4e0fe2936"
  },
  {
    "url": "timeline/index.html",
    "revision": "2725f0d0378d89ca71653db6d2e1d7c3"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
