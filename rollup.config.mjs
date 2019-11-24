import babel from "rollup-plugin-babel";
import compiler from "@ampproject/rollup-plugin-closure-compiler";
import resolve from "rollup-plugin-node-resolve";

// The version of Chromium used by Samsung Internet 6.x.
const BROWSER_TARGET = {
    browsers: ["chrome >= 56"]
};

export default [
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
                            modules: false
                        }
                    ]
                ]
            }),
            compiler()
        ],
        output: {
            file: "assets/js/sw-register.js",
            format: "iife"
        }
    },
    {
        input: "assets/js/service-worker.template.js",
        plugins: [
            resolve(),
            babel({
                presets: [
                    [
                        "@babel/preset-env",
                        {
                            targets: BROWSER_TARGET,
                            modules: false
                        }
                    ]
                ]
            }),
            compiler()
        ],
        output: {
            file: "assets/js/service-worker.optimized.js",
            format: "iife"
        }
    }
];
