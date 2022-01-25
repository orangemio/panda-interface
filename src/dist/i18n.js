"use strict";
exports.__esModule = true;
var i18next_1 = require("i18next");
var react_i18next_1 = require("react-i18next");
var i18next_xhr_backend_1 = require("i18next-xhr-backend");
var i18next_browser_languagedetector_1 = require("i18next-browser-languagedetector");
i18next_1["default"]
    .use(i18next_xhr_backend_1["default"])
    .use(i18next_browser_languagedetector_1["default"])
    .use(react_i18next_1.initReactI18next)
    .init({
    backend: {
        loadPath: "./locales/{{lng}}.json"
    },
    react: {
        useSuspense: true
    },
    fallbackLng: 'en',
    preload: ['en'],
    keySeparator: false,
    interpolation: { escapeValue: false }
});
exports["default"] = i18next_1["default"];
