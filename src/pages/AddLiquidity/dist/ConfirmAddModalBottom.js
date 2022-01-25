"use strict";
exports.__esModule = true;
exports.ConfirmAddModalBottom = void 0;
var react_1 = require("react");
var rebass_1 = require("rebass");
var Button_1 = require("../../components/Button");
var Row_1 = require("../../components/Row");
var CurrencyLogo_1 = require("../../components/CurrencyLogo");
var actions_1 = require("../../state/mint/actions");
var theme_1 = require("../../theme");
function ConfirmAddModalBottom(_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j;
    var noLiquidity = _a.noLiquidity, price = _a.price, currencies = _a.currencies, parsedAmounts = _a.parsedAmounts, poolTokenPercentage = _a.poolTokenPercentage, onAdd = _a.onAdd;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(Row_1.RowBetween, null,
            react_1["default"].createElement(theme_1.TYPE.body, null, (_b = currencies[actions_1.Field.CURRENCY_A]) === null || _b === void 0 ? void 0 :
                _b.symbol,
                " Deposited"),
            react_1["default"].createElement(Row_1.RowFixed, null,
                react_1["default"].createElement(CurrencyLogo_1["default"], { currency: currencies[actions_1.Field.CURRENCY_A], style: { marginRight: '8px' } }),
                react_1["default"].createElement(theme_1.TYPE.body, null, (_c = parsedAmounts[actions_1.Field.CURRENCY_A]) === null || _c === void 0 ? void 0 : _c.toSignificant(6)))),
        react_1["default"].createElement(Row_1.RowBetween, null,
            react_1["default"].createElement(theme_1.TYPE.body, null, (_d = currencies[actions_1.Field.CURRENCY_B]) === null || _d === void 0 ? void 0 :
                _d.symbol,
                " Deposited"),
            react_1["default"].createElement(Row_1.RowFixed, null,
                react_1["default"].createElement(CurrencyLogo_1["default"], { currency: currencies[actions_1.Field.CURRENCY_B], style: { marginRight: '8px' } }),
                react_1["default"].createElement(theme_1.TYPE.body, null, (_e = parsedAmounts[actions_1.Field.CURRENCY_B]) === null || _e === void 0 ? void 0 : _e.toSignificant(6)))),
        react_1["default"].createElement(Row_1.RowBetween, null,
            react_1["default"].createElement(theme_1.TYPE.body, null, "Rates"),
            react_1["default"].createElement(theme_1.TYPE.body, null, "1 " + ((_f = currencies[actions_1.Field.CURRENCY_A]) === null || _f === void 0 ? void 0 : _f.symbol) + " = " + (price === null || price === void 0 ? void 0 : price.toSignificant(4)) + " " + ((_g = currencies[actions_1.Field.CURRENCY_B]) === null || _g === void 0 ? void 0 : _g.symbol))),
        react_1["default"].createElement(Row_1.RowBetween, { style: { justifyContent: 'flex-end' } },
            react_1["default"].createElement(theme_1.TYPE.body, null, "1 " + ((_h = currencies[actions_1.Field.CURRENCY_B]) === null || _h === void 0 ? void 0 : _h.symbol) + " = " + (price === null || price === void 0 ? void 0 : price.invert().toSignificant(4)) + " " + ((_j = currencies[actions_1.Field.CURRENCY_A]) === null || _j === void 0 ? void 0 : _j.symbol))),
        react_1["default"].createElement(Row_1.RowBetween, null,
            react_1["default"].createElement(theme_1.TYPE.body, null, "Share of Pool:"),
            react_1["default"].createElement(theme_1.TYPE.body, null,
                noLiquidity ? '100' : poolTokenPercentage === null || poolTokenPercentage === void 0 ? void 0 : poolTokenPercentage.toSignificant(4),
                "%")),
        react_1["default"].createElement(Button_1.ButtonPrimary, { style: { margin: '20px 0 0 0' }, onClick: onAdd },
            react_1["default"].createElement(rebass_1.Text, { fontWeight: 500, fontSize: 20 }, noLiquidity ? 'Create Pool & Supply' : 'Confirm Supply'))));
}
exports.ConfirmAddModalBottom = ConfirmAddModalBottom;
