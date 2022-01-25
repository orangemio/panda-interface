"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.BodyWrapper = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
exports.BodyWrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  max-width: 420px;\n  width: 100%;\n  background: ", ";\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),\n    0px 24px 32px rgba(0, 0, 0, 0.01);\n  border-radius: 30px;\n  padding: 1rem;\n"], ["\n  position: relative;\n  max-width: 420px;\n  width: 100%;\n  background: ", ";\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),\n    0px 24px 32px rgba(0, 0, 0, 0.01);\n  border-radius: 30px;\n  padding: 1rem;\n"
    /**
     * The styled container element that wraps the content of most pages and the tabs.
     */
])), function (_a) {
    var theme = _a.theme;
    return theme.bg1;
});
/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
function AppBody(_a) {
    var children = _a.children;
    return react_1["default"].createElement(exports.BodyWrapper, null, children);
}
exports["default"] = AppBody;
var templateObject_1;
