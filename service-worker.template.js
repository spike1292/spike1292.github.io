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
importScripts("/assets/js/workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({
    modulePathPrefix: "/assets/js/workbox-v4.3.1/",
    debug: true
});

workbox.core.setCacheNameDetails({ prefix: "blog" });

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */

// workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute([]);
workbox.precaching.cleanupOutdatedCaches();

workbox.routing.registerRoute(
    /assets\/images/,
    new workbox.strategies.CacheFirst({
        cacheName: "blog-images",
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 10,
                purgeOnQuotaError: true
            })
        ]
    }),
    "GET"
);
workbox.routing.registerRoute(
    /^https:\/\/.*\.cloudfront\.net\/.*/,
    new workbox.strategies.StaleWhileRevalidate({ cacheName: "cloudfront/js" }),
    "GET"
);
workbox.routing.registerRoute(
    /assets\/js/,
    new workbox.strategies.StaleWhileRevalidate({ cacheName: "local/js" }),
    "GET"
);

// workbox.core.skipWaiting();
// workbox.core.clientsClaim();
