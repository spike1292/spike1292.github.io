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
importScripts("/assets/js/workbox-v3.1.0/workbox-sw.js");
workbox.setConfig({ modulePathPrefix: "/assets/js/workbox-v3.1.0/" });

workbox.core.setCacheNameDetails({ prefix: "blog" });

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute([
  {
    "url": "/assets/images/favicon/manifest.json",
    "revision": "6536a789eaca6158e7f9f05b634dc313"
  },
  {
    "url": "/assets/images/henk.jpg",
    "revision": "1eff3f0c92695155cda18b040f5fa966"
  },
  {
    "url": "/404.html",
    "revision": "2c1de859b461095840a7442dae936a9f"
  },
  {
    "url": "/about/index.html",
    "revision": "cc0c16452c2952c6f2507d0d5d21d0a8"
  },
  {
    "url": "/assets/js/ga.js",
    "revision": "ac709c6121c42cf79f2ca881b268fcfb"
  },
  {
    "url": "/assets/js/sw-register.js",
    "revision": "da66ce9787c4698cefd33ccda07b6f68"
  },
  {
    "url": "/blog/index.html",
    "revision": "8ee4b40ccb985162fc9f3facf61fa015"
  },
  {
    "url": "/index.html",
    "revision": "49628de9bfa54d93f0e22eaa50229998"
  },
  {
    "url": "/projects/index.html",
    "revision": "9ebea9919c97ecd3bfc888e0ca59a253"
  },
  {
    "url": "/tags/index.html",
    "revision": "4578824cf2d0ca1d479574f3045ec346"
  }
]);

workbox.routing.registerRoute(
    /assets\/images/,
    workbox.strategies.cacheFirst({
        plugins: [new workbox.expiration.Plugin({ maxEntries: 10 })]
    }),
    "GET"
);
workbox.routing.registerRoute(
    /^https:\/\/.*\.cloudfront\.net\/.*/,
    workbox.strategies.staleWhileRevalidate(),
    "GET"
);
