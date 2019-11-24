module.exports = {
    globDirectory: "_site/",
    globPatterns: [
        "assets/images/favicon/manifest.json",
        "assets/images/henk.jpg",
        "**/*.{html,js,css}"
    ],
    globIgnores: [
        "assets/js/workbox-v3.1.0/**/*",
        "assets/js/workbox-v4.3.1/**/*"
    ],
    swDest: "_site/service-worker.js",
    swSrc: "assets/js/service-worker.optimized.js",
    modifyURLPrefix: {
        // Remove a '/dist' prefix from the URLs:
        "": "/"
    }
};
