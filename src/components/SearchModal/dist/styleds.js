"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.SeparatorDark = exports.Separator = exports.SearchInput = exports.MenuItem = exports.PaddedColumn = exports.FadedSpan = exports.ModalInfo = void 0;
var styled_components_1 = require("styled-components");
var Column_1 = require("../Column");
var Row_1 = require("../Row");
exports.ModalInfo = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n  align-items: center;\n  padding: 1rem 1rem;\n  margin: 0.25rem 0.5rem;\n  justify-content: center;\n  flex: 1;\n  user-select: none;\n"], ["\n  ", "\n  align-items: center;\n  padding: 1rem 1rem;\n  margin: 0.25rem 0.5rem;\n  justify-content: center;\n  flex: 1;\n  user-select: none;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.flexRowNoWrap;
});
exports.FadedSpan = styled_components_1["default"](Row_1.RowFixed)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: ", ";\n  font-size: 14px;\n"], ["\n  color: ", ";\n  font-size: 14px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.primary1;
});
exports.PaddedColumn = styled_components_1["default"](Column_1.AutoColumn)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  padding: 20px;\n  padding-bottom: 12px;\n"], ["\n  padding: 20px;\n  padding-bottom: 12px;\n"])));
exports.MenuItem = styled_components_1["default"](Row_1.RowBetween)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  padding: 4px 20px;\n  height: 56px;\n  display: grid;\n  grid-template-columns: auto minmax(auto, 1fr) auto minmax(0, 72px);\n  grid-gap: 16px;\n  cursor: ", ";\n  pointer-events: ", ";\n  :hover {\n    background-color: ", ";\n  }\n  opacity: ", ";\n"], ["\n  padding: 4px 20px;\n  height: 56px;\n  display: grid;\n  grid-template-columns: auto minmax(auto, 1fr) auto minmax(0, 72px);\n  grid-gap: 16px;\n  cursor: ", ";\n  pointer-events: ", ";\n  :hover {\n    background-color: ", ";\n  }\n  opacity: ", ";\n"])), function (_a) {
    var disabled = _a.disabled;
    return !disabled && 'pointer';
}, function (_a) {
    var disabled = _a.disabled;
    return disabled && 'none';
}, function (_a) {
    var theme = _a.theme, disabled = _a.disabled;
    return !disabled && theme.bg2;
}, function (_a) {
    var disabled = _a.disabled, selected = _a.selected;
    return (disabled || selected ? 0.5 : 1);
});
exports.SearchInput = styled_components_1["default"].input(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  padding: 16px;\n  align-items: center;\n  width: 100%;\n  white-space: nowrap;\n  background: none;\n  border: none;\n  outline: none;\n  border-radius: 20px;\n  color: ", ";\n  border-style: solid;\n  border: 1px solid ", ";\n  -webkit-appearance: none;\n\n  font-size: 18px;\n\n  ::placeholder {\n    color: ", ";\n  }\n  transition: border 100ms;\n  :focus {\n    border: 1px solid ", ";\n    outline: none;\n  }\n"], ["\n  position: relative;\n  display: flex;\n  padding: 16px;\n  align-items: center;\n  width: 100%;\n  white-space: nowrap;\n  background: none;\n  border: none;\n  outline: none;\n  border-radius: 20px;\n  color: ", ";\n  border-style: solid;\n  border: 1px solid ", ";\n  -webkit-appearance: none;\n\n  font-size: 18px;\n\n  ::placeholder {\n    color: ", ";\n  }\n  transition: border 100ms;\n  :focus {\n    border: 1px solid ", ";\n    outline: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.text1;
}, function (_a) {
    var theme = _a.theme;
    return theme.bg3;
}, function (_a) {
    var theme = _a.theme;
    return theme.text3;
}, function (_a) {
    var theme = _a.theme;
    return theme.primary1;
});
exports.Separator = styled_components_1["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  width: 100%;\n  height: 1px;\n  background-color: ", ";\n"], ["\n  width: 100%;\n  height: 1px;\n  background-color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.bg2;
});
exports.SeparatorDark = styled_components_1["default"].div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  width: 100%;\n  height: 1px;\n  background-color: ", ";\n"], ["\n  width: 100%;\n  height: 1px;\n  background-color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.bg3;
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
