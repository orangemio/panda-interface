"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var sdk_1 = require("@uniswap/sdk");
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var binance_logo_webp_1 = require("../../assets/images/binance-logo.webp");
var useHttpLocations_1 = require("../../hooks/useHttpLocations");
var hooks_1 = require("../../state/lists/hooks");
var Logo_1 = require("../Logo");
var getTokenLogoURL = function (address) {
    return "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/" + address + "/logo.png";
};
var StyledEthereumLogo = styled_components_1["default"].img(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);\n  border-radius: 24px;\n"], ["\n  width: ", ";\n  height: ", ";\n  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);\n  border-radius: 24px;\n"])), function (_a) {
    var size = _a.size;
    return size;
}, function (_a) {
    var size = _a.size;
    return size;
});
var StyledLogo = styled_components_1["default"](Logo_1["default"])(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n"], ["\n  width: ", ";\n  height: ", ";\n"])), function (_a) {
    var size = _a.size;
    return size;
}, function (_a) {
    var size = _a.size;
    return size;
});
function CurrencyLogo(_a) {
    var _b;
    var currency = _a.currency, _c = _a.size, size = _c === void 0 ? '24px' : _c, style = _a.style;
    var uriLocations = useHttpLocations_1["default"](currency instanceof hooks_1.WrappedTokenInfo ? currency.logoURI : undefined);
    var srcs = react_1.useMemo(function () {
        if (currency === sdk_1.ETHER)
            return [];
        if (currency instanceof sdk_1.Token) {
            if (currency instanceof hooks_1.WrappedTokenInfo) {
                return __spreadArrays(uriLocations, [getTokenLogoURL(currency.address)]);
            }
            return [getTokenLogoURL(currency.address)];
        }
        return [];
    }, [currency, uriLocations]);
    if (currency === sdk_1.ETHER) {
        return react_1["default"].createElement(StyledEthereumLogo, { src: binance_logo_webp_1["default"], size: size, style: style });
    }
    return react_1["default"].createElement(StyledLogo, { size: size, srcs: srcs, alt: ((_b = currency === null || currency === void 0 ? void 0 : currency.symbol) !== null && _b !== void 0 ? _b : 'token') + " logo", style: style });
}
exports["default"] = CurrencyLogo;
var templateObject_1, templateObject_2;
