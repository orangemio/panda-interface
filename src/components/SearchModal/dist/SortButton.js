"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.FilterWrapper = void 0;
var react_1 = require("react");
var rebass_1 = require("rebass");
var styled_components_1 = require("styled-components");
var Row_1 = require("../Row");
exports.FilterWrapper = styled_components_1["default"](Row_1.RowFixed)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 8px;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 8px;\n  user-select: none;\n  & > * {\n    user-select: none;\n  }\n  :hover {\n    cursor: pointer;\n  }\n"], ["\n  padding: 8px;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 8px;\n  user-select: none;\n  & > * {\n    user-select: none;\n  }\n  :hover {\n    cursor: pointer;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.bg2;
}, function (_a) {
    var theme = _a.theme;
    return theme.text1;
});
function SortButton(_a) {
    var toggleSortOrder = _a.toggleSortOrder, ascending = _a.ascending;
    return (react_1["default"].createElement(exports.FilterWrapper, { onClick: toggleSortOrder },
        react_1["default"].createElement(rebass_1.Text, { fontSize: 14, fontWeight: 500 }, ascending ? '↑' : '↓')));
}
exports["default"] = SortButton;
var templateObject_1;
