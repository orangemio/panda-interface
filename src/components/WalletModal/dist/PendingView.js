"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var Option_1 = require("./Option");
var constants_1 = require("../../constants");
var connectors_1 = require("../../connectors");
var polished_1 = require("polished");
var Loader_1 = require("../Loader");
var PendingSection = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", ";\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  & > * {\n    width: 100%;\n  }\n"], ["\n  ", ";\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  & > * {\n    width: 100%;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.flexColumnNoWrap;
});
var StyledLoader = styled_components_1["default"](Loader_1["default"])(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-right: 1rem;\n"], ["\n  margin-right: 1rem;\n"])));
var LoadingMessage = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", ";\n  align-items: center;\n  justify-content: flex-start;\n  border-radius: 12px;\n  margin-bottom: 20px;\n  color: ", ";\n  border: 1px solid ", ";\n\n  & > * {\n    padding: 1rem;\n  }\n"], ["\n  ", ";\n  align-items: center;\n  justify-content: flex-start;\n  border-radius: 12px;\n  margin-bottom: 20px;\n  color: ", ";\n  border: 1px solid ", ";\n\n  & > * {\n    padding: 1rem;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.flexRowNoWrap;
}, function (_a) {
    var theme = _a.theme, error = _a.error;
    return (error ? theme.red1 : 'inherit');
}, function (_a) {
    var theme = _a.theme, error = _a.error;
    return (error ? theme.red1 : theme.text4);
});
var ErrorGroup = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", ";\n  align-items: center;\n  justify-content: flex-start;\n"], ["\n  ", ";\n  align-items: center;\n  justify-content: flex-start;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.flexRowNoWrap;
});
var ErrorButton = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  border-radius: 8px;\n  font-size: 12px;\n  color: ", ";\n  background-color: ", ";\n  margin-left: 1rem;\n  padding: 0.5rem;\n  font-weight: 600;\n  user-select: none;\n\n  &:hover {\n    cursor: pointer;\n    background-color: ", ";\n  }\n"], ["\n  border-radius: 8px;\n  font-size: 12px;\n  color: ", ";\n  background-color: ", ";\n  margin-left: 1rem;\n  padding: 0.5rem;\n  font-weight: 600;\n  user-select: none;\n\n  &:hover {\n    cursor: pointer;\n    background-color: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.text1;
}, function (_a) {
    var theme = _a.theme;
    return theme.bg4;
}, function (_a) {
    var theme = _a.theme;
    return polished_1.darken(0.1, theme.text4);
});
var LoadingWrapper = styled_components_1["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  ", ";\n  align-items: center;\n  justify-content: center;\n"], ["\n  ", ";\n  align-items: center;\n  justify-content: center;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.flexRowNoWrap;
});
function PendingView(_a) {
    var _b;
    var connector = _a.connector, _c = _a.error, error = _c === void 0 ? false : _c, setPendingError = _a.setPendingError, tryActivation = _a.tryActivation;
    var isMetamask = (_b = window === null || window === void 0 ? void 0 : window.ethereum) === null || _b === void 0 ? void 0 : _b.isMetaMask;
    return (react_1["default"].createElement(PendingSection, null,
        react_1["default"].createElement(LoadingMessage, { error: error },
            react_1["default"].createElement(LoadingWrapper, null, error ? (react_1["default"].createElement(ErrorGroup, null,
                react_1["default"].createElement("div", null, "Error connecting."),
                react_1["default"].createElement(ErrorButton, { onClick: function () {
                        setPendingError(false);
                        connector && tryActivation(connector);
                    } }, "Try Again"))) : (react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement(StyledLoader, null),
                "Initializing...")))),
        Object.keys(constants_1.SUPPORTED_WALLETS).map(function (key) {
            var option = constants_1.SUPPORTED_WALLETS[key];
            if (option.connector === connector) {
                if (option.connector === connectors_1.injected) {
                    if (isMetamask && option.name !== 'MetaMask') {
                        return null;
                    }
                    if (!isMetamask && option.name === 'MetaMask') {
                        return null;
                    }
                }
                return (react_1["default"].createElement(Option_1["default"], { id: "connect-" + key, key: key, clickable: false, color: option.color, header: option.name, subheader: option.description, icon: require('../../assets/images/' + option.iconName) }));
            }
            return null;
        })));
}
exports["default"] = PendingView;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
