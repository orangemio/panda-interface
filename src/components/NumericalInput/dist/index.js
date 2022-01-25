"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
exports.Input = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var utils_1 = require("../../utils");
var StyledInput = styled_components_1["default"].input(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: ", ";\n  width: 0;\n  position: relative;\n  font-weight: 500;\n  outline: none;\n  border: none;\n  flex: 1 1 auto;\n  background-color: ", ";\n  font-size: ", ";\n  text-align: ", ";\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 0px;\n  -webkit-appearance: textfield;\n\n  ::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  [type='number'] {\n    -moz-appearance: textfield;\n  }\n\n  ::-webkit-outer-spin-button,\n  ::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n  }\n\n  ::placeholder {\n    color: ", ";\n  }\n"], ["\n  color: ", ";\n  width: 0;\n  position: relative;\n  font-weight: 500;\n  outline: none;\n  border: none;\n  flex: 1 1 auto;\n  background-color: ", ";\n  font-size: ", ";\n  text-align: ", ";\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 0px;\n  -webkit-appearance: textfield;\n\n  ::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  [type='number'] {\n    -moz-appearance: textfield;\n  }\n\n  ::-webkit-outer-spin-button,\n  ::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n  }\n\n  ::placeholder {\n    color: ", ";\n  }\n"])), function (_a) {
    var error = _a.error, theme = _a.theme;
    return (error ? theme.red1 : theme.text1);
}, function (_a) {
    var theme = _a.theme;
    return theme.bg1;
}, function (_a) {
    var fontSize = _a.fontSize;
    return fontSize !== null && fontSize !== void 0 ? fontSize : '24px';
}, function (_a) {
    var align = _a.align;
    return align && align;
}, function (_a) {
    var theme = _a.theme;
    return theme.text4;
});
var inputRegex = RegExp("^\\d*(?:\\\\[.])?\\d*$"); // match escaped "." characters via in a non-capturing group
exports.Input = react_1["default"].memo(function InnerInput(_a) {
    var value = _a.value, onUserInput = _a.onUserInput, placeholder = _a.placeholder, rest = __rest(_a, ["value", "onUserInput", "placeholder"]);
    var enforcer = function (nextUserInput) {
        if (nextUserInput === '' || inputRegex.test(utils_1.escapeRegExp(nextUserInput))) {
            onUserInput(nextUserInput);
        }
    };
    return (react_1["default"].createElement(StyledInput, __assign({}, rest, { value: value, onChange: function (event) {
            // replace commas with periods, because uniswap exclusively uses period as the decimal separator
            enforcer(event.target.value.replace(/,/g, '.'));
        }, 
        // universal input options
        inputMode: "decimal", title: "Token Amount", autoComplete: "off", autoCorrect: "off", 
        // text-specific options
        type: "text", pattern: "^[0-9]*[.,]?[0-9]*$", placeholder: placeholder || '0.0', minLength: 1, maxLength: 79, spellCheck: "false" })));
});
exports["default"] = exports.Input;
var templateObject_1;
// const inputRegex = RegExp(`^\\d*(?:\\\\[.])?\\d*$`) // match escaped "." characters via in a non-capturing group
