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
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: "cloudfront/js",
        plugins: [
            new workbox.broadcastUpdate.Plugin({
                channelName: "cloudfront-updates"
            })
        ]
    }),
    "GET"
);
workbox.routing.registerRoute(
    /assets\/js/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: "local/js",
        plugins: [
            new workbox.broadcastUpdate.Plugin({
                channelName: "js-updates"
            })
        ]
    }),
    "GET"
);

workbox.googleAnalytics.initialize({
    parameterOverrides: {
        cd1: "offline"
    },
    hitFilter: params => {
        const queueTimeInSeconds = Math.round(params.get("qt") / 1000);
        params.set("cm1", queueTimeInSeconds);
    }
});

// Handle skip waiting from app
self.addEventListener("message", event => {
    if (event.data && event.data.type === "SKIP_WAITING") {
        workbox.core.skipWaiting();
    }
});

// Updating SW lifecycle to update the app after user triggered refresh
workbox.core.skipWaiting();
workbox.core.clientsClaim();
