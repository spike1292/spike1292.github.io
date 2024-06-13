import compiler from "@ampproject/rollup-plugin-closure-compiler";
import resolve from "@rollup/plugin-node-resolve";
import babel from "rollup-plugin-babel";
import replace from "@rollup/plugin-replace";

// The version of Chromium used by Samsung Internet 6.x.
const BROWSER_TARGET = {
    browsers: ["chrome >= 56"],
};

export default [
    {
        input: "assets/js/lazy-load.mjs",
        plugins: [
            resolve(),
            babel({
                presets: [
                    [
                        "@babel/preset-env",
                        {
                            targets: BROWSER_TARGET,
                            modules: false,
                        },
                    ],
                ],
            }),
            compiler(),
        ],
        output: [
            {
                file: "assets/js/lazy-load.js",
                format: "iife",
            },
            {
                file: "_site/assets/js/lazy-load.js",
                format: "iife",
            },
        ],
    },
    {
        input: "assets/js/sw-register.mjs",
        plugins: [
            resolve(),
            babel({
                presets: [
                    [
                        "@babel/preset-env",
                        {
                            targets: BROWSER_TARGET,
                            modules: false,
                        },
                    ],
                ],
            }),
            compiler(),
        ],
        output: [
            {
                file: "assets/js/sw-register.js",
                format: "iife",
            },
            {
                file: "_site/assets/js/sw-register.js",
                format: "iife",
            },
        ],
    },
    {
        input: "assets/js/service-worker.template.mjs",
        plugins: [
            resolve(),
            replace({
                "process.env.NODE_ENV": JSON.stringify("production"),
            }),
            babel({
                presets: [
                    [
                        "@babel/preset-env",
                        {
                            targets: BROWSER_TARGET,
                            modules: false,
                        },
                    ],
                ],
            }),
            compiler(),
        ],
        output: {
            file: "_build/service-worker.js",
            format: "iife",
        },
    },
];
