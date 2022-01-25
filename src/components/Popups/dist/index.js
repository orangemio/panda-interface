"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var hooks_1 = require("../../state/application/hooks");
var Column_1 = require("../Column");
var PopupItem_1 = require("./PopupItem");
var MobilePopupWrapper = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n  max-width: 100%;\n  height: ", ";\n  margin: ", ";\n  margin-bottom: ", "};\n\n  display: none;\n  ", ";\n"], ["\n  position: relative;\n  max-width: 100%;\n  height: ", ";\n  margin: ", ";\n  margin-bottom: ", "};\n\n  display: none;\n  ",
    ";\n"])), function (_a) {
    var height = _a.height;
    return height;
}, function (_a) {
    var height = _a.height;
    return (height ? '0 auto;' : 0);
}, function (_a) {
    var height = _a.height;
    return (height ? '20px' : 0);
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaWidth.upToSmall(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: block;\n  "], ["\n    display: block;\n  "])));
});
var MobilePopupInner = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  height: 99%;\n  overflow-x: auto;\n  overflow-y: hidden;\n  display: flex;\n  flex-direction: row;\n  -webkit-overflow-scrolling: touch;\n  ::-webkit-scrollbar {\n    display: none;\n  }\n"], ["\n  height: 99%;\n  overflow-x: auto;\n  overflow-y: hidden;\n  display: flex;\n  flex-direction: row;\n  -webkit-overflow-scrolling: touch;\n  ::-webkit-scrollbar {\n    display: none;\n  }\n"])));
var FixedPopupColumn = styled_components_1["default"](Column_1.AutoColumn)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: fixed;\n  top: 64px;\n  right: 1rem;\n  max-width: 355px !important;\n  width: 100%;\n  z-index: 2;\n\n  ", ";\n"], ["\n  position: fixed;\n  top: 64px;\n  right: 1rem;\n  max-width: 355px !important;\n  width: 100%;\n  z-index: 2;\n\n  ",
    ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaWidth.upToSmall(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    display: none;\n  "], ["\n    display: none;\n  "])));
});
function Popups() {
    // get all popups
    var activePopups = hooks_1.useActivePopups();
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(FixedPopupColumn, { gap: "20px" }, activePopups.map(function (item) { return (react_1["default"].createElement(PopupItem_1["default"], { key: item.key, content: item.content, popKey: item.key, removeAfterMs: item.removeAfterMs })); })),
        react_1["default"].createElement(MobilePopupWrapper, { height: (activePopups === null || activePopups === void 0 ? void 0 : activePopups.length) > 0 ? 'fit-content' : 0 },
            react_1["default"].createElement(MobilePopupInner, null, activePopups // reverse so new items up front
                .slice(0)
                .reverse()
                .map(function (item) { return (react_1["default"].createElement(PopupItem_1["default"], { key: item.key, content: item.content, popKey: item.key, removeAfterMs: item.removeAfterMs })); })))));
}
exports["default"] = Popups;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
