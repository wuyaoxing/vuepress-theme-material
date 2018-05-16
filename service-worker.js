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
    "revision": "0eb650d0fe22f0e9ff11d70ba48d6b3b"
  },
  {
    "url": "articles/deploy.html",
    "revision": "70f15cdabb6a21a1a651afce9867abb1"
  },
  {
    "url": "articles/getting-started.html",
    "revision": "14b5314498a9d6adfe0a1e1e0abd20ea"
  },
  {
    "url": "articles/index.html",
    "revision": "eac5ba212a64f0b5132073c937d69681"
  },
  {
    "url": "articles/markdown.html",
    "revision": "c3c7cfa2f65f1db3c0f5cf57631982d1"
  },
  {
    "url": "articles/npm安装-删除-发布-更新-撤销发布包.html",
    "revision": "c66eb945a76fd3273728f5114fe1bf05"
  },
  {
    "url": "articles/requestAnimationFrame.html",
    "revision": "810c1634fe84b4c607e5b89ce1b12ca9"
  },
  {
    "url": "articles/using-vue.html",
    "revision": "254248fd294cb092d3451711f81df9d5"
  },
  {
    "url": "articles/vuepress-theme-material.html",
    "revision": "3707367a313d1225b1444ad1c4315a61"
  },
  {
    "url": "assets/css/0.styles.1e4ac3ea.css",
    "revision": "e5ce5424aaa0c558ff19e8ab2427a7c0"
  },
  {
    "url": "assets/js/1.6e0a6e76.js",
    "revision": "1fdeb83831814d952aaa083fbc765f0d"
  },
  {
    "url": "assets/js/10.8cadd1e6.js",
    "revision": "fa2c79c4a66b51627c2a865ec97e15b5"
  },
  {
    "url": "assets/js/11.52a179ad.js",
    "revision": "abefe2158690a237ccf873cec620fa73"
  },
  {
    "url": "assets/js/12.91b73af2.js",
    "revision": "b41cadf5e814519aba2fd39c5ec05484"
  },
  {
    "url": "assets/js/2.e5d60052.js",
    "revision": "1d93c9dec7d50a5e08926052c43382e5"
  },
  {
    "url": "assets/js/3.fe83ecb2.js",
    "revision": "ce01c724081293cd9cfc1f53b51122ea"
  },
  {
    "url": "assets/js/4.02c2141f.js",
    "revision": "013edf4ebc6e05145ab761e6c3e9fcc7"
  },
  {
    "url": "assets/js/5.09d521be.js",
    "revision": "20c27f06cd4deb1ab2e5a39de8ad0459"
  },
  {
    "url": "assets/js/6.44169d46.js",
    "revision": "045eb001248a0ccfe2e0e42fa5ce278c"
  },
  {
    "url": "assets/js/7.8abcb68f.js",
    "revision": "7cee667a137affa6cdcb5c3aa259bf47"
  },
  {
    "url": "assets/js/8.e5914329.js",
    "revision": "8b890fc92ea9ca7a1221fae15deecc2a"
  },
  {
    "url": "assets/js/9.6ef1309f.js",
    "revision": "6045d90f2046aba153ce3a2742ea8c91"
  },
  {
    "url": "assets/js/app.dbad28eb.js",
    "revision": "1b39abb211f7c9d17282434566b85cab"
  },
  {
    "url": "bg.jpg",
    "revision": "c4665c24cb58b5dbe7e4647c22a76f16"
  },
  {
    "url": "index.html",
    "revision": "da4baba1f06de56f3fe8ed6c3656a329"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
