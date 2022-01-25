"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var CurrencyLogo_1 = require("../CurrencyLogo");
var Wrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  margin-right: ", ";\n"], ["\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  margin-right: ", ";\n"])), function (_a) {
    var sizeraw = _a.sizeraw, margin = _a.margin;
    return margin && (sizeraw / 3 + 8).toString() + 'px';
});
var HigherLogo = styled_components_1["default"](CurrencyLogo_1["default"])(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  z-index: 2;\n"], ["\n  z-index: 2;\n"])));
var CoveredLogo = styled_components_1["default"](CurrencyLogo_1["default"])(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: absolute;\n  left: ", ";\n"], ["\n  position: absolute;\n  left: ", ";\n"])), function (_a) {
    var sizeraw = _a.sizeraw;
    return (sizeraw / 2).toString() + 'px';
});
function DoubleCurrencyLogo(_a) {
    var currency0 = _a.currency0, currency1 = _a.currency1, _b = _a.size, size = _b === void 0 ? 16 : _b, _c = _a.margin, margin = _c === void 0 ? false : _c;
    return (react_1["default"].createElement(Wrapper, { sizeraw: size, margin: margin },
        currency0 && react_1["default"].createElement(HigherLogo, { currency: currency0, size: size.toString() + 'px' }),
        currency1 && react_1["default"].createElement(CoveredLogo, { currency: currency1, size: size.toString() + 'px', sizeraw: size })));
}
exports["default"] = DoubleCurrencyLogo;
var templateObject_1, templateObject_2, templateObject_3;
