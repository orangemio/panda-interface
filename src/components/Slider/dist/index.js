"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var StyledRangeInput = styled_components_1["default"].input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\n  width: 100%; /* Specific width is required for Firefox. */\n  background: transparent; /* Otherwise white in Chrome */\n  cursor: pointer;\n\n  &:focus {\n    outline: none;\n  }\n\n  &::-moz-focus-outer {\n    border: 0;\n  }\n\n  &::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    height: ", "px;\n    width: ", "px;\n    background-color: #565a69;\n    border-radius: 100%;\n    border: none;\n    transform: translateY(-50%);\n    color: ", ";\n\n    &:hover,\n    &:focus {\n      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),\n        0px 24px 32px rgba(0, 0, 0, 0.04);\n    }\n  }\n\n  &::-moz-range-thumb {\n    height: ", "px;\n    width: ", "px;\n    background-color: #565a69;\n    border-radius: 100%;\n    border: none;\n    color: ", ";\n\n    &:hover,\n    &:focus {\n      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),\n        0px 24px 32px rgba(0, 0, 0, 0.04);\n    }\n  }\n\n  &::-ms-thumb {\n    height: ", "px;\n    width: ", "px;\n    background-color: #565a69;\n    border-radius: 100%;\n    color: ", ";\n\n    &:hover,\n    &:focus {\n      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),\n        0px 24px 32px rgba(0, 0, 0, 0.04);\n    }\n  }\n\n  &::-webkit-slider-runnable-track {\n    background: linear-gradient(90deg, ", ", ", ");\n    height: 2px;\n  }\n\n  &::-moz-range-track {\n    background: linear-gradient(90deg, ", ", ", ");\n    height: 2px;\n  }\n\n  &::-ms-track {\n    width: 100%;\n    border-color: transparent;\n    color: transparent;\n\n    background: ", ";\n    height: 2px;\n  }\n  &::-ms-fill-lower {\n    background: ", ";\n  }\n  &::-ms-fill-upper {\n    background: ", ";\n  }\n"], ["\n  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\n  width: 100%; /* Specific width is required for Firefox. */\n  background: transparent; /* Otherwise white in Chrome */\n  cursor: pointer;\n\n  &:focus {\n    outline: none;\n  }\n\n  &::-moz-focus-outer {\n    border: 0;\n  }\n\n  &::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    height: ", "px;\n    width: ", "px;\n    background-color: #565a69;\n    border-radius: 100%;\n    border: none;\n    transform: translateY(-50%);\n    color: ", ";\n\n    &:hover,\n    &:focus {\n      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),\n        0px 24px 32px rgba(0, 0, 0, 0.04);\n    }\n  }\n\n  &::-moz-range-thumb {\n    height: ", "px;\n    width: ", "px;\n    background-color: #565a69;\n    border-radius: 100%;\n    border: none;\n    color: ", ";\n\n    &:hover,\n    &:focus {\n      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),\n        0px 24px 32px rgba(0, 0, 0, 0.04);\n    }\n  }\n\n  &::-ms-thumb {\n    height: ", "px;\n    width: ", "px;\n    background-color: #565a69;\n    border-radius: 100%;\n    color: ", ";\n\n    &:hover,\n    &:focus {\n      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),\n        0px 24px 32px rgba(0, 0, 0, 0.04);\n    }\n  }\n\n  &::-webkit-slider-runnable-track {\n    background: linear-gradient(90deg, ", ", ", ");\n    height: 2px;\n  }\n\n  &::-moz-range-track {\n    background: linear-gradient(90deg, ", ", ", ");\n    height: 2px;\n  }\n\n  &::-ms-track {\n    width: 100%;\n    border-color: transparent;\n    color: transparent;\n\n    background: ", ";\n    height: 2px;\n  }\n  &::-ms-fill-lower {\n    background: ", ";\n  }\n  &::-ms-fill-upper {\n    background: ", ";\n  }\n"])), function (_a) {
    var size = _a.size;
    return size;
}, function (_a) {
    var size = _a.size;
    return size;
}, function (_a) {
    var theme = _a.theme;
    return theme.bg1;
}, function (_a) {
    var size = _a.size;
    return size;
}, function (_a) {
    var size = _a.size;
    return size;
}, function (_a) {
    var theme = _a.theme;
    return theme.bg1;
}, function (_a) {
    var size = _a.size;
    return size;
}, function (_a) {
    var size = _a.size;
    return size;
}, function (_a) {
    var theme = _a.theme;
    return theme.bg1;
}, function (_a) {
    var theme = _a.theme;
    return theme.bg5;
}, function (_a) {
    var theme = _a.theme;
    return theme.bg3;
}, function (_a) {
    var theme = _a.theme;
    return theme.bg5;
}, function (_a) {
    var theme = _a.theme;
    return theme.bg3;
}, function (_a) {
    var theme = _a.theme;
    return theme.bg5;
}, function (_a) {
    var theme = _a.theme;
    return theme.bg5;
}, function (_a) {
    var theme = _a.theme;
    return theme.bg3;
});
function Slider(_a) {
    var value = _a.value, onChange = _a.onChange, _b = _a.min, min = _b === void 0 ? 0 : _b, _c = _a.step, step = _c === void 0 ? 1 : _c, _d = _a.max, max = _d === void 0 ? 100 : _d, _e = _a.size, size = _e === void 0 ? 28 : _e;
    var changeCallback = react_1.useCallback(function (e) {
        onChange(parseInt(e.target.value));
    }, [onChange]);
    return (react_1["default"].createElement(StyledRangeInput, { size: size, type: "range", value: value, style: { width: '90%', marginLeft: 15, marginRight: 15, padding: '15px 0' }, onChange: changeCallback, "aria-labelledby": "input slider", step: step, min: min, max: max }));
}
exports["default"] = Slider;
var templateObject_1;
