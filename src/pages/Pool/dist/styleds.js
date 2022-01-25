"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Dots = exports.MaxButton = exports.ClickableText = exports.Wrapper = void 0;
var rebass_1 = require("rebass");
var styled_components_1 = require("styled-components");
exports.Wrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
exports.ClickableText = styled_components_1["default"](rebass_1.Text)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  :hover {\n    cursor: pointer;\n  }\n  color: ", ";\n"], ["\n  :hover {\n    cursor: pointer;\n  }\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.primary1;
});
exports.MaxButton = styled_components_1["default"].button(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  padding: 0.5rem 1rem;\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 0.5rem;\n  font-size: 1rem;\n  ", ";\n  font-weight: 500;\n  cursor: pointer;\n  margin: 0.25rem;\n  overflow: hidden;\n  color: ", ";\n  :hover {\n    border: 1px solid ", ";\n  }\n  :focus {\n    border: 1px solid ", ";\n    outline: none;\n  }\n"], ["\n  padding: 0.5rem 1rem;\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 0.5rem;\n  font-size: 1rem;\n  ",
    ";\n  font-weight: 500;\n  cursor: pointer;\n  margin: 0.25rem;\n  overflow: hidden;\n  color: ", ";\n  :hover {\n    border: 1px solid ", ";\n  }\n  :focus {\n    border: 1px solid ", ";\n    outline: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.primary5;
}, function (_a) {
    var theme = _a.theme;
    return theme.primary5;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaWidth.upToSmall(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    padding: 0.25rem 0.5rem;\n  "], ["\n    padding: 0.25rem 0.5rem;\n  "])));
}, function (_a) {
    var theme = _a.theme;
    return theme.primary1;
}, function (_a) {
    var theme = _a.theme;
    return theme.primary1;
}, function (_a) {
    var theme = _a.theme;
    return theme.primary1;
});
exports.Dots = styled_components_1["default"].span(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  &::after {\n    display: inline-block;\n    animation: ellipsis 1.25s infinite;\n    content: '.';\n    width: 1em;\n    text-align: left;\n  }\n  @keyframes ellipsis {\n    0% {\n      content: '.';\n    }\n    33% {\n      content: '..';\n    }\n    66% {\n      content: '...';\n    }\n  }\n"], ["\n  &::after {\n    display: inline-block;\n    animation: ellipsis 1.25s infinite;\n    content: '.';\n    width: 1em;\n    text-align: left;\n  }\n  @keyframes ellipsis {\n    0% {\n      content: '.';\n    }\n    33% {\n      content: '..';\n    }\n    66% {\n      content: '...';\n    }\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
