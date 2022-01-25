"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var useHttpLocations_1 = require("../../hooks/useHttpLocations");
var Logo_1 = require("../Logo");
var StyledListLogo = styled_components_1["default"](Logo_1["default"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n"], ["\n  width: ", ";\n  height: ", ";\n"])), function (_a) {
    var size = _a.size;
    return size;
}, function (_a) {
    var size = _a.size;
    return size;
});
function ListLogo(_a) {
    var logoURI = _a.logoURI, style = _a.style, _b = _a.size, size = _b === void 0 ? '24px' : _b, alt = _a.alt;
    var srcs = useHttpLocations_1["default"](logoURI);
    return react_1["default"].createElement(StyledListLogo, { alt: alt, size: size, srcs: srcs, style: style });
}
exports["default"] = ListLogo;
var templateObject_1;
