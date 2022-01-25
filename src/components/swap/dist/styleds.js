"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.SwapShowAcceptChanges = exports.SwapCallbackError = exports.Dots = exports.TruncatedText = exports.StyledBalanceMaxMini = exports.ErrorText = exports.BottomGrouping = exports.SectionBreak = exports.ArrowWrapper = exports.Wrapper = void 0;
var polished_1 = require("polished");
var react_1 = require("react");
var react_feather_1 = require("react-feather");
var styled_components_1 = require("styled-components");
var rebass_1 = require("rebass");
var Column_1 = require("../Column");
exports.Wrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
exports.ArrowWrapper = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  padding: 2px;\n\n  ", "\n"], ["\n  padding: 2px;\n\n  ",
    "\n"])), function (_a) {
    var clickable = _a.clickable;
    return clickable
        ? styled_components_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n          :hover {\n            cursor: pointer;\n            opacity: 0.8;\n          }\n        "], ["\n          :hover {\n            cursor: pointer;\n            opacity: 0.8;\n          }\n        "]))) : null;
});
exports.SectionBreak = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  height: 1px;\n  width: 100%;\n  background-color: ", ";\n"], ["\n  height: 1px;\n  width: 100%;\n  background-color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.bg3;
});
exports.BottomGrouping = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  margin-top: 1rem;\n"], ["\n  margin-top: 1rem;\n"])));
exports.ErrorText = styled_components_1["default"](rebass_1.Text)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  color: ", ";\n"], ["\n  color: ",
    ";\n"])), function (_a) {
    var theme = _a.theme, severity = _a.severity;
    return severity === 3 || severity === 4
        ? theme.red1
        : severity === 2
            ? theme.yellow2
            : severity === 1
                ? theme.text1
                : theme.green1;
});
exports.StyledBalanceMaxMini = styled_components_1["default"].button(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  height: 22px;\n  width: 22px;\n  background-color: ", ";\n  border: none;\n  border-radius: 50%;\n  padding: 0.2rem;\n  font-size: 0.875rem;\n  font-weight: 400;\n  margin-left: 0.4rem;\n  cursor: pointer;\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  float: right;\n\n  :hover {\n    background-color: ", ";\n  }\n  :focus {\n    background-color: ", ";\n    outline: none;\n  }\n"], ["\n  height: 22px;\n  width: 22px;\n  background-color: ", ";\n  border: none;\n  border-radius: 50%;\n  padding: 0.2rem;\n  font-size: 0.875rem;\n  font-weight: 400;\n  margin-left: 0.4rem;\n  cursor: pointer;\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  float: right;\n\n  :hover {\n    background-color: ", ";\n  }\n  :focus {\n    background-color: ", ";\n    outline: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.bg2;
}, function (_a) {
    var theme = _a.theme;
    return theme.text2;
}, function (_a) {
    var theme = _a.theme;
    return theme.bg3;
}, function (_a) {
    var theme = _a.theme;
    return theme.bg3;
});
exports.TruncatedText = styled_components_1["default"](rebass_1.Text)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  text-overflow: ellipsis;\n  width: 220px;\n  overflow: hidden;\n"], ["\n  text-overflow: ellipsis;\n  width: 220px;\n  overflow: hidden;\n"
    // styles
])));
// styles
exports.Dots = styled_components_1["default"].span(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  &::after {\n    display: inline-block;\n    animation: ellipsis 1.25s infinite;\n    content: '.';\n    width: 1em;\n    text-align: left;\n  }\n  @keyframes ellipsis {\n    0% {\n      content: '.';\n    }\n    33% {\n      content: '..';\n    }\n    66% {\n      content: '...';\n    }\n  }\n"], ["\n  &::after {\n    display: inline-block;\n    animation: ellipsis 1.25s infinite;\n    content: '.';\n    width: 1em;\n    text-align: left;\n  }\n  @keyframes ellipsis {\n    0% {\n      content: '.';\n    }\n    33% {\n      content: '..';\n    }\n    66% {\n      content: '...';\n    }\n  }\n"])));
var SwapCallbackErrorInner = styled_components_1["default"].div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 1rem;\n  display: flex;\n  align-items: center;\n  font-size: 0.825rem;\n  width: 100%;\n  padding: 3rem 1.25rem 1rem 1rem;\n  margin-top: -2rem;\n  color: ", ";\n  z-index: -1;\n  p {\n    padding: 0;\n    margin: 0;\n    font-weight: 500;\n  }\n"], ["\n  background-color: ", ";\n  border-radius: 1rem;\n  display: flex;\n  align-items: center;\n  font-size: 0.825rem;\n  width: 100%;\n  padding: 3rem 1.25rem 1rem 1rem;\n  margin-top: -2rem;\n  color: ", ";\n  z-index: -1;\n  p {\n    padding: 0;\n    margin: 0;\n    font-weight: 500;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return polished_1.transparentize(0.9, theme.red1);
}, function (_a) {
    var theme = _a.theme;
    return theme.red1;
});
var SwapCallbackErrorInnerAlertTriangle = styled_components_1["default"].div(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  background-color: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 12px;\n  border-radius: 12px;\n  min-width: 48px;\n  height: 48px;\n"], ["\n  background-color: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 12px;\n  border-radius: 12px;\n  min-width: 48px;\n  height: 48px;\n"])), function (_a) {
    var theme = _a.theme;
    return polished_1.transparentize(0.9, theme.red1);
});
function SwapCallbackError(_a) {
    var error = _a.error;
    return (react_1["default"].createElement(SwapCallbackErrorInner, null,
        react_1["default"].createElement(SwapCallbackErrorInnerAlertTriangle, null,
            react_1["default"].createElement(react_feather_1.AlertTriangle, { size: 24 })),
        react_1["default"].createElement("p", null, error)));
}
exports.SwapCallbackError = SwapCallbackError;
exports.SwapShowAcceptChanges = styled_components_1["default"](Column_1.AutoColumn)(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  background-color: ", ";\n  color: ", ";\n  padding: 0.5rem;\n  border-radius: 12px;\n  margin-top: 8px;\n"], ["\n  background-color: ", ";\n  color: ", ";\n  padding: 0.5rem;\n  border-radius: 12px;\n  margin-top: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return polished_1.transparentize(0.9, theme.primary1);
}, function (_a) {
    var theme = _a.theme;
    return theme.primary1;
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12;
