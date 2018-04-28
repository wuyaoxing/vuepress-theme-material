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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.1.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "99ed31a511417f936ecbe718d38186c4"
  },
  {
    "url": "articles/assets.html",
    "revision": "4b17eb636aeb286d93c8ff44a1c5ea51"
  },
  {
    "url": "articles/basic-config.html",
    "revision": "fca54d1118a334e196e0e47f1db356e3"
  },
  {
    "url": "articles/custom-themes.html",
    "revision": "8951b2936bf7732b2bab9791864fde75"
  },
  {
    "url": "articles/deploy.html",
    "revision": "1f36b9f700a74d59652f2b50680f77d3"
  },
  {
    "url": "articles/getting-started.html",
    "revision": "9bea9172cfab88a772cd39aad08caaaf"
  },
  {
    "url": "articles/i18n.html",
    "revision": "b07e71d03e3152ffb6e38854636c15b5"
  },
  {
    "url": "articles/index.html",
    "revision": "805dab5fd42d77d9f48bdd46110b733a"
  },
  {
    "url": "articles/markdown.html",
    "revision": "bf288e554f536a6d32c16d72923c0bf6"
  },
  {
    "url": "articles/using-vue.html",
    "revision": "9b141c0d97f7ac2523733e340021c0e9"
  },
  {
    "url": "assets/css/0.styles.96e265fe.css",
    "revision": "fbf4475934dd5968c3818e28dcd231ad"
  },
  {
    "url": "assets/js/1.b43959cc.js",
    "revision": "48d83fa32875da7c5e4b606d72fe561a"
  },
  {
    "url": "assets/js/10.a17eb637.js",
    "revision": "c7ccbd4c4903ecb380b343975d63e3dd"
  },
  {
    "url": "assets/js/11.8d16f63b.js",
    "revision": "5aa902a2366bc101e94fbef03dae7670"
  },
  {
    "url": "assets/js/12.951ed4f5.js",
    "revision": "70060def52bc0f1eff70f24998ffe092"
  },
  {
    "url": "assets/js/13.7979dbc5.js",
    "revision": "a500df7e0edf506f8ddfc8bebc054582"
  },
  {
    "url": "assets/js/2.ba15cbd9.js",
    "revision": "ef825e7d29fc0f2cfa92f5c7223ea8f2"
  },
  {
    "url": "assets/js/3.2032ee04.js",
    "revision": "d4a38878619c3e9cb39a5ecfb9e2c6e4"
  },
  {
    "url": "assets/js/4.e4de4f3e.js",
    "revision": "e25f9e3e1eb0ce016f9496b31d8fb462"
  },
  {
    "url": "assets/js/5.5cda0f20.js",
    "revision": "706a4e2b36d52ec64fc4241996a3013d"
  },
  {
    "url": "assets/js/6.d643b33d.js",
    "revision": "ded8fbab76f2666230fa1fe91c3e2c54"
  },
  {
    "url": "assets/js/7.d7ea1e6a.js",
    "revision": "8de6b0fe5e7f67e456c4768479332249"
  },
  {
    "url": "assets/js/8.35d8f993.js",
    "revision": "b46e7a0d26beb572cbe36b14410dc181"
  },
  {
    "url": "assets/js/9.f080a484.js",
    "revision": "e39b18e49361e5f7a53353e33e1a3d58"
  },
  {
    "url": "assets/js/app.5558983f.js",
    "revision": "27b049754aa89329dcdf45fa1fcbf6e1"
  },
  {
    "url": "avatar.jpg",
    "revision": "c4665c24cb58b5dbe7e4647c22a76f16"
  },
  {
    "url": "index.html",
    "revision": "9d3a7513143f6f67293b75b62334db38"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
