"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var ToggleElement = styled_components_1["default"].span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 0.25rem 0.5rem;\n  border-radius: 14px;\n  background: ", ";\n  color: ", ";\n  font-size: 0.825rem;\n  font-weight: 400;\n"], ["\n  padding: 0.25rem 0.5rem;\n  border-radius: 14px;\n  background: ", ";\n  color: ", ";\n  font-size: 0.825rem;\n  font-weight: 400;\n"])), function (_a) {
    var theme = _a.theme, isActive = _a.isActive, isOnSwitch = _a.isOnSwitch;
    return (isActive ? (isOnSwitch ? theme.primary1 : theme.text4) : 'none');
}, function (_a) {
    var theme = _a.theme, isActive = _a.isActive, isOnSwitch = _a.isOnSwitch;
    return (isActive ? (isOnSwitch ? theme.white : theme.text2) : theme.text3);
});
var StyledToggle = styled_components_1["default"].button(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  border-radius: 16px;\n  border: 1px solid ", ";\n  display: flex;\n  width: fit-content;\n  cursor: pointer;\n  outline: none;\n  padding: 0;\n  background-color: transparent;\n"], ["\n  border-radius: 16px;\n  border: 1px solid ", ";\n  display: flex;\n  width: fit-content;\n  cursor: pointer;\n  outline: none;\n  padding: 0;\n  background-color: transparent;\n"])), function (_a) {
    var theme = _a.theme, isActive = _a.isActive;
    return (isActive ? theme.primary5 : theme.text4);
});
function Toggle(_a) {
    var id = _a.id, isActive = _a.isActive, toggle = _a.toggle;
    return (react_1["default"].createElement(StyledToggle, { id: id, isActive: isActive, onClick: toggle },
        react_1["default"].createElement(ToggleElement, { isActive: isActive, isOnSwitch: true }, "On"),
        react_1["default"].createElement(ToggleElement, { isActive: !isActive, isOnSwitch: false }, "Off")));
}
exports["default"] = Toggle;
var templateObject_1, templateObject_2;
