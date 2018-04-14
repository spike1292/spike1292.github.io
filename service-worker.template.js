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
workbox.precaching.precacheAndRoute([]);

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
