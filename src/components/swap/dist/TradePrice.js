"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("react");
var react_feather_1 = require("react-feather");
var rebass_1 = require("rebass");
var styled_components_1 = require("styled-components");
var styleds_1 = require("./styleds");
function TradePrice(_a) {
    var _b, _c, _d, _e, _f;
    var price = _a.price, showInverted = _a.showInverted, setShowInverted = _a.setShowInverted;
    var theme = react_2.useContext(styled_components_1.ThemeContext);
    var formattedPrice = showInverted ? price === null || price === void 0 ? void 0 : price.toSignificant(6) : (_b = price === null || price === void 0 ? void 0 : price.invert()) === null || _b === void 0 ? void 0 : _b.toSignificant(6);
    var show = Boolean((price === null || price === void 0 ? void 0 : price.baseCurrency) && (price === null || price === void 0 ? void 0 : price.quoteCurrency));
    var label = showInverted
        ? ((_c = price === null || price === void 0 ? void 0 : price.quoteCurrency) === null || _c === void 0 ? void 0 : _c.symbol) + " per " + ((_d = price === null || price === void 0 ? void 0 : price.baseCurrency) === null || _d === void 0 ? void 0 : _d.symbol)
        : ((_e = price === null || price === void 0 ? void 0 : price.baseCurrency) === null || _e === void 0 ? void 0 : _e.symbol) + " per " + ((_f = price === null || price === void 0 ? void 0 : price.quoteCurrency) === null || _f === void 0 ? void 0 : _f.symbol);
    return (react_1["default"].createElement(rebass_1.Text, { fontWeight: 500, fontSize: 14, color: theme.text2, style: { justifyContent: 'center', alignItems: 'center', display: 'flex' } }, show ? (react_1["default"].createElement(react_1["default"].Fragment, null, formattedPrice !== null && formattedPrice !== void 0 ? formattedPrice : '-',
        " ",
        label,
        react_1["default"].createElement(styleds_1.StyledBalanceMaxMini, { onClick: function () { return setShowInverted(!showInverted); } },
            react_1["default"].createElement(react_feather_1.Repeat, { size: 14 })))) : ('-')));
}
exports["default"] = TradePrice;
