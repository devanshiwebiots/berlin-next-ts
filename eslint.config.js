 
const {
    defineConfig,
} = require("eslint/config");

const js = require("@eslint/js");

const {
    FlatCompat,
} = require("@eslint/eslintrc");

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

module.exports = defineConfig([{
    extends: "next/core-web-vitals",

    rules: {
        "@next/next/no-img-element": "off",
        "react-hooks/exhaustive-deps": "off",
    },
}]);