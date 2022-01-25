"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var core_1 = require("@web3-react/core");
var styled_components_1 = require("styled-components");
var react_i18next_1 = require("react-i18next");
var connectors_1 = require("../../connectors");
var hooks_1 = require("../../hooks");
var constants_1 = require("../../constants");
var Loader_1 = require("../Loader");
var MessageWrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 20rem;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 20rem;\n"])));
var Message = styled_components_1["default"].h2(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.secondary1;
});
function Web3ReactManager(_a) {
    var children = _a.children;
    var t = react_i18next_1.useTranslation().t;
    var active = core_1.useWeb3React().active;
    var _b = core_1.useWeb3React(constants_1.NetworkContextName), networkActive = _b.active, networkError = _b.error, activateNetwork = _b.activate;
    // try to eagerly connect to an injected provider, if it exists and has granted access already
    var triedEager = hooks_1.useEagerConnect();
    // after eagerly trying injected, if the network connect ever isn't active or in an error state, activate itd
    react_1.useEffect(function () {
        if (triedEager && !networkActive && !networkError && !active) {
            activateNetwork(connectors_1.network);
        }
    }, [triedEager, networkActive, networkError, activateNetwork, active]);
    // when there's no account connected, react to logins (broadly speaking) on the injected provider, if it exists
    hooks_1.useInactiveListener(!triedEager);
    // handle delayed loader state
    var _c = react_1.useState(false), showLoader = _c[0], setShowLoader = _c[1];
    react_1.useEffect(function () {
        var timeout = setTimeout(function () {
            setShowLoader(true);
        }, 600);
        return function () {
            clearTimeout(timeout);
        };
    }, []);
    // on page load, do nothing until we've tried to connect to the injected connector
    if (!triedEager) {
        return null;
    }
    // if the account context isn't active, and there's an error on the network context, it's an irrecoverable error
    if (!active && networkError) {
        return (react_1["default"].createElement(MessageWrapper, null,
            react_1["default"].createElement(Message, null, t('unknownError'))));
    }
    // if neither context is active, spin
    if (!active && !networkActive) {
        return showLoader ? (react_1["default"].createElement(MessageWrapper, null,
            react_1["default"].createElement(Loader_1["default"], null))) : null;
    }
    return children;
}
exports["default"] = Web3ReactManager;
var templateObject_1, templateObject_2;
