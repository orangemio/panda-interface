"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var react_feather_1 = require("react-feather");
var styled_components_1 = require("styled-components");
var Tooltip_1 = require("../Tooltip");
var QuestionWrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.2rem;\n  border: none;\n  background: none;\n  outline: none;\n  cursor: default;\n  border-radius: 36px;\n  background-color: ", ";\n  color: ", ";\n\n  :hover,\n  :focus {\n    opacity: 0.7;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.2rem;\n  border: none;\n  background: none;\n  outline: none;\n  cursor: default;\n  border-radius: 36px;\n  background-color: ", ";\n  color: ", ";\n\n  :hover,\n  :focus {\n    opacity: 0.7;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.bg2;
}, function (_a) {
    var theme = _a.theme;
    return theme.text2;
});
function QuestionHelper(_a) {
    var text = _a.text;
    var _b = react_1.useState(false), show = _b[0], setShow = _b[1];
    var open = react_1.useCallback(function () { return setShow(true); }, [setShow]);
    var close = react_1.useCallback(function () { return setShow(false); }, [setShow]);
    return (react_1["default"].createElement("span", { style: { marginLeft: 4 } },
        react_1["default"].createElement(Tooltip_1["default"], { text: text, show: show },
            react_1["default"].createElement(QuestionWrapper, { onClick: open, onMouseEnter: open, onMouseLeave: close },
                react_1["default"].createElement(react_feather_1.HelpCircle, { size: 16 })))));
}
exports["default"] = QuestionHelper;
var templateObject_1;
