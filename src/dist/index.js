"use strict";
exports.__esModule = true;
var core_1 = require("@web3-react/core");
require("inter-ui");
var react_1 = require("react");
var react_device_detect_1 = require("react-device-detect");
var react_dom_1 = require("react-dom");
var react_ga_1 = require("react-ga");
var react_redux_1 = require("react-redux");
var constants_1 = require("./constants");
require("./i18n");
var App_1 = require("./pages/App");
var state_1 = require("./state");
var updater_1 = require("./state/application/updater");
var updater_2 = require("./state/lists/updater");
var updater_3 = require("./state/multicall/updater");
var updater_4 = require("./state/transactions/updater");
var updater_5 = require("./state/user/updater");
var theme_1 = require("./theme");
var getLibrary_1 = require("./utils/getLibrary");
var Web3ProviderNetwork = core_1.createWeb3ReactRoot(constants_1.NetworkContextName);
if ('ethereum' in window) {
    ;
    window.ethereum.autoRefreshOnNetworkChange = false;
}
var GOOGLE_ANALYTICS_ID = process.env.REACT_APP_GOOGLE_ANALYTICS_ID;
if (typeof GOOGLE_ANALYTICS_ID === 'string') {
    react_ga_1["default"].initialize(GOOGLE_ANALYTICS_ID);
    react_ga_1["default"].set({
        customBrowserType: !react_device_detect_1.isMobile ? 'desktop' : 'web3' in window || 'ethereum' in window ? 'mobileWeb3' : 'mobileRegular'
    });
}
else {
    react_ga_1["default"].initialize('test', { testMode: true, debug: true });
}
window.addEventListener('error', function (error) {
    react_ga_1["default"].exception({
        description: error.message + " @ " + error.filename + ":" + error.lineno + ":" + error.colno,
        fatal: true
    });
});
function Updaters() {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(updater_2["default"], null),
        react_1["default"].createElement(updater_5["default"], null),
        react_1["default"].createElement(updater_1["default"], null),
        react_1["default"].createElement(updater_4["default"], null),
        react_1["default"].createElement(updater_3["default"], null)));
}
react_dom_1["default"].render(react_1["default"].createElement(react_1.StrictMode, null,
    react_1["default"].createElement(theme_1.FixedGlobalStyle, null),
    react_1["default"].createElement(core_1.Web3ReactProvider, { getLibrary: getLibrary_1["default"] },
        react_1["default"].createElement(Web3ProviderNetwork, { getLibrary: getLibrary_1["default"] },
            react_1["default"].createElement(react_redux_1.Provider, { store: state_1["default"] },
                react_1["default"].createElement(Updaters, null),
                react_1["default"].createElement(theme_1["default"], null,
                    react_1["default"].createElement(theme_1.ThemedGlobalStyle, null),
                    react_1["default"].createElement(App_1["default"], null)))))), document.getElementById('root'));
