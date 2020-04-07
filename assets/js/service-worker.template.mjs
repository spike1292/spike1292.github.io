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
import { setCacheNameDetails, skipWaiting, clientsClaim } from "workbox-core";
import { registerRoute } from "workbox-routing";
import { precacheAndRoute, cleanupOutdatedCaches } from "workbox-precaching";
import { CacheFirst, StaleWhileRevalidate } from "workbox-strategies";
import { ExpirationPlugin } from "workbox-expiration";
import { BroadcastUpdatePlugin } from "workbox-broadcast-update";
import * as googleAnalytics from "workbox-google-analytics";

setCacheNameDetails({ prefix: "blog" });
precacheAndRoute(self.__WB_MANIFEST);
cleanupOutdatedCaches();

registerRoute(
    /assets\/images/,
    new CacheFirst({
        cacheName: "blog-images",
        plugins: [
            new ExpirationPlugin({
                maxEntries: 10,
                purgeOnQuotaError: true,
            }),
        ],
    }),
    "GET"
);
registerRoute(
    /^https:\/\/.*\.cloudfront\.net\/.*/,
    new StaleWhileRevalidate({
        cacheName: "cloudfront/js",
        plugins: [
            new BroadcastUpdatePlugin({
                channelName: "cloudfront-updates",
            }),
        ],
    }),
    "GET"
);
registerRoute(
    /assets\/js/,
    new StaleWhileRevalidate({
        cacheName: "local/js",
        plugins: [
            new BroadcastUpdatePlugin({
                channelName: "js-updates",
            }),
        ],
    }),
    "GET"
);

googleAnalytics.initialize({
    parameterOverrides: {
        cd1: "offline",
    },
    hitFilter: (params) => {
        const queueTimeInSeconds = Math.round(params.get("qt") / 1000);
        params.set("cm1", queueTimeInSeconds);
    },
});

// Handle skip waiting from app
self.addEventListener("message", (event) => {
    if (event.data && event.data.type === "SKIP_WAITING") {
        skipWaiting();
    }
});

// Updating SW lifecycle to update the app after user triggered refresh
skipWaiting();
clientsClaim();
