"use strict";
exports.__esModule = true;
exports.PoolPriceBar = void 0;
var react_1 = require("react");
var rebass_1 = require("rebass");
var styled_components_1 = require("styled-components");
var Column_1 = require("../../components/Column");
var Row_1 = require("../../components/Row");
var constants_1 = require("../../constants");
var actions_1 = require("../../state/mint/actions");
var theme_1 = require("../../theme");
function PoolPriceBar(_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j;
    var currencies = _a.currencies, noLiquidity = _a.noLiquidity, poolTokenPercentage = _a.poolTokenPercentage, price = _a.price;
    var theme = react_1.useContext(styled_components_1.ThemeContext);
    return (react_1["default"].createElement(Column_1.AutoColumn, { gap: "md" },
        react_1["default"].createElement(Row_1.AutoRow, { justify: "space-around", gap: "4px" },
            react_1["default"].createElement(Column_1.AutoColumn, { justify: "center" },
                react_1["default"].createElement(theme_1.TYPE.black, null, (_b = price === null || price === void 0 ? void 0 : price.toSignificant(6)) !== null && _b !== void 0 ? _b : '-'),
                react_1["default"].createElement(rebass_1.Text, { fontWeight: 500, fontSize: 14, color: theme.text2, pt: 1 }, (_c = currencies[actions_1.Field.CURRENCY_B]) === null || _c === void 0 ? void 0 :
                    _c.symbol,
                    " per ", (_d = currencies[actions_1.Field.CURRENCY_A]) === null || _d === void 0 ? void 0 :
                    _d.symbol)),
            react_1["default"].createElement(Column_1.AutoColumn, { justify: "center" },
                react_1["default"].createElement(theme_1.TYPE.black, null, (_f = (_e = price === null || price === void 0 ? void 0 : price.invert()) === null || _e === void 0 ? void 0 : _e.toSignificant(6)) !== null && _f !== void 0 ? _f : '-'),
                react_1["default"].createElement(rebass_1.Text, { fontWeight: 500, fontSize: 14, color: theme.text2, pt: 1 }, (_g = currencies[actions_1.Field.CURRENCY_A]) === null || _g === void 0 ? void 0 :
                    _g.symbol,
                    " per ", (_h = currencies[actions_1.Field.CURRENCY_B]) === null || _h === void 0 ? void 0 :
                    _h.symbol)),
            react_1["default"].createElement(Column_1.AutoColumn, { justify: "center" },
                react_1["default"].createElement(theme_1.TYPE.black, null,
                    noLiquidity && price
                        ? '100'
                        : (_j = ((poolTokenPercentage === null || poolTokenPercentage === void 0 ? void 0 : poolTokenPercentage.lessThan(constants_1.ONE_BIPS)) ? '<0.01' : poolTokenPercentage === null || poolTokenPercentage === void 0 ? void 0 : poolTokenPercentage.toFixed(2))) !== null && _j !== void 0 ? _j : '0',
                    "%"),
                react_1["default"].createElement(rebass_1.Text, { fontWeight: 500, fontSize: 14, color: theme.text2, pt: 1 }, "Share of Pool")))));
}
exports.PoolPriceBar = PoolPriceBar;
