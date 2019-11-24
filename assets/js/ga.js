---
# this ensures Jekyll reads the file to be transformed
---

"use strict";
(function() {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
        dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "{{ site.analytics-google }}", {
        dimension1: "online",
        dimension2: "{{ site.env.BRANCH }}"
    });
})();
