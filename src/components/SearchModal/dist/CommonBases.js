"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var rebass_1 = require("rebass");
var sdk_1 = require("@uniswap/sdk");
var styled_components_1 = require("styled-components");
var constants_1 = require("../../constants");
var Column_1 = require("../Column");
var QuestionHelper_1 = require("../QuestionHelper");
var Row_1 = require("../Row");
var CurrencyLogo_1 = require("../CurrencyLogo");
var BaseWrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border: 1px solid ", ";\n  border-radius: 10px;\n  display: flex;\n  padding: 6px;\n\n  align-items: center;\n  :hover {\n    cursor: ", ";\n    background-color: ", ";\n  }\n\n  background-color: ", ";\n  opacity: ", ";\n"], ["\n  border: 1px solid ", ";\n  border-radius: 10px;\n  display: flex;\n  padding: 6px;\n\n  align-items: center;\n  :hover {\n    cursor: ", ";\n    background-color: ", ";\n  }\n\n  background-color: ", ";\n  opacity: ", ";\n"])), function (_a) {
    var theme = _a.theme, disable = _a.disable;
    return (disable ? 'transparent' : theme.bg3);
}, function (_a) {
    var disable = _a.disable;
    return !disable && 'pointer';
}, function (_a) {
    var theme = _a.theme, disable = _a.disable;
    return !disable && theme.bg2;
}, function (_a) {
    var theme = _a.theme, disable = _a.disable;
    return disable && theme.bg3;
}, function (_a) {
    var disable = _a.disable;
    return disable && '0.4';
});
function CommonBases(_a) {
    var chainId = _a.chainId, onSelect = _a.onSelect, selectedCurrency = _a.selectedCurrency;
    return (react_1["default"].createElement(Column_1.AutoColumn, { gap: "md" },
        react_1["default"].createElement(Row_1.AutoRow, null,
            react_1["default"].createElement(rebass_1.Text, { fontWeight: 500, fontSize: 14 }, "Common bases"),
            react_1["default"].createElement(QuestionHelper_1["default"], { text: "These tokens are commonly paired with other tokens." })),
        react_1["default"].createElement(Row_1.AutoRow, { gap: "4px" },
            react_1["default"].createElement(BaseWrapper, { onClick: function () {
                    if (!selectedCurrency || !sdk_1.currencyEquals(selectedCurrency, sdk_1.ETHER)) {
                        onSelect(sdk_1.ETHER);
                    }
                }, disable: selectedCurrency === sdk_1.ETHER },
                react_1["default"].createElement(CurrencyLogo_1["default"], { currency: sdk_1.ETHER, style: { marginRight: 8 } }),
                react_1["default"].createElement(rebass_1.Text, { fontWeight: 500, fontSize: 16 }, "ETH")),
            (chainId ? constants_1.SUGGESTED_BASES[chainId] : []).map(function (token) {
                var selected = selectedCurrency instanceof sdk_1.Token && selectedCurrency.address === token.address;
                return (react_1["default"].createElement(BaseWrapper, { onClick: function () { return !selected && onSelect(token); }, disable: selected, key: token.address },
                    react_1["default"].createElement(CurrencyLogo_1["default"], { currency: token, style: { marginRight: 8 } }),
                    react_1["default"].createElement(rebass_1.Text, { fontWeight: 500, fontSize: 16 }, token.symbol)));
            }))));
}
exports["default"] = CommonBases;
var templateObject_1;
