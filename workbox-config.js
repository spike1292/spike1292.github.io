module.exports = {
    globDirectory: "_site/",
    globPatterns: [
        "assets/images/favicon/manifest.json",
        "assets/images/henk.jpg",
        "**/*.{html,js,css}"
    ],
    globIgnores: ["assets/js/workbox-v3.1.0/**/*"],
    swDest: "_site/service-worker.js",
    swSrc: "service-worker.template.js",
    modifyUrlPrefix: {
        // Remove a '/dist' prefix from the URLs:
        "": "/"
    }
};
