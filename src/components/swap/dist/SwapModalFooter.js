"use strict";
exports.__esModule = true;
var sdk_1 = require("@uniswap/sdk");
var react_1 = require("react");
var react_feather_1 = require("react-feather");
var rebass_1 = require("rebass");
var styled_components_1 = require("styled-components");
var actions_1 = require("../../state/swap/actions");
var theme_1 = require("../../theme");
var prices_1 = require("../../utils/prices");
var Button_1 = require("../Button");
var Column_1 = require("../Column");
var QuestionHelper_1 = require("../QuestionHelper");
var Row_1 = require("../Row");
var FormattedPriceImpact_1 = require("./FormattedPriceImpact");
var styleds_1 = require("./styleds");
function SwapModalFooter(_a) {
    var _b, _c, _d, _e;
    var trade = _a.trade, onConfirm = _a.onConfirm, allowedSlippage = _a.allowedSlippage, swapErrorMessage = _a.swapErrorMessage, disabledConfirm = _a.disabledConfirm;
    var _f = react_1.useState(false), showInverted = _f[0], setShowInverted = _f[1];
    var theme = react_1.useContext(styled_components_1.ThemeContext);
    var slippageAdjustedAmounts = react_1.useMemo(function () { return prices_1.computeSlippageAdjustedAmounts(trade, allowedSlippage); }, [
        allowedSlippage,
        trade
    ]);
    var _g = react_1.useMemo(function () { return prices_1.computeTradePriceBreakdown(trade); }, [trade]), priceImpactWithoutFee = _g.priceImpactWithoutFee, realizedLPFee = _g.realizedLPFee;
    var severity = prices_1.warningSeverity(priceImpactWithoutFee);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(Column_1.AutoColumn, { gap: "0px" },
            react_1["default"].createElement(Row_1.RowBetween, { align: "center" },
                react_1["default"].createElement(rebass_1.Text, { fontWeight: 400, fontSize: 14, color: theme.text2 }, "Price"),
                react_1["default"].createElement(rebass_1.Text, { fontWeight: 500, fontSize: 14, color: theme.text1, style: {
                        justifyContent: 'center',
                        alignItems: 'center',
                        display: 'flex',
                        textAlign: 'right',
                        paddingLeft: '10px'
                    } },
                    prices_1.formatExecutionPrice(trade, showInverted),
                    react_1["default"].createElement(styleds_1.StyledBalanceMaxMini, { onClick: function () { return setShowInverted(!showInverted); } },
                        react_1["default"].createElement(react_feather_1.Repeat, { size: 14 })))),
            react_1["default"].createElement(Row_1.RowBetween, null,
                react_1["default"].createElement(Row_1.RowFixed, null,
                    react_1["default"].createElement(theme_1.TYPE.black, { fontSize: 14, fontWeight: 400, color: theme.text2 }, trade.tradeType === sdk_1.TradeType.EXACT_INPUT ? 'Minimum received' : 'Maximum sold'),
                    react_1["default"].createElement(QuestionHelper_1["default"], { text: "Your transaction will revert if there is a large, unfavorable price movement before it is confirmed." })),
                react_1["default"].createElement(Row_1.RowFixed, null,
                    react_1["default"].createElement(theme_1.TYPE.black, { fontSize: 14 }, trade.tradeType === sdk_1.TradeType.EXACT_INPUT
                        ? (_c = (_b = slippageAdjustedAmounts[actions_1.Field.OUTPUT]) === null || _b === void 0 ? void 0 : _b.toSignificant(4)) !== null && _c !== void 0 ? _c : '-' : (_e = (_d = slippageAdjustedAmounts[actions_1.Field.INPUT]) === null || _d === void 0 ? void 0 : _d.toSignificant(4)) !== null && _e !== void 0 ? _e : '-'),
                    react_1["default"].createElement(theme_1.TYPE.black, { fontSize: 14, marginLeft: '4px' }, trade.tradeType === sdk_1.TradeType.EXACT_INPUT
                        ? trade.outputAmount.currency.symbol
                        : trade.inputAmount.currency.symbol))),
            react_1["default"].createElement(Row_1.RowBetween, null,
                react_1["default"].createElement(Row_1.RowFixed, null,
                    react_1["default"].createElement(theme_1.TYPE.black, { color: theme.text2, fontSize: 14, fontWeight: 400 }, "Price Impact"),
                    react_1["default"].createElement(QuestionHelper_1["default"], { text: "The difference between the market price and your price due to trade size." })),
                react_1["default"].createElement(FormattedPriceImpact_1["default"], { priceImpact: priceImpactWithoutFee })),
            react_1["default"].createElement(Row_1.RowBetween, null,
                react_1["default"].createElement(Row_1.RowFixed, null,
                    react_1["default"].createElement(theme_1.TYPE.black, { fontSize: 14, fontWeight: 400, color: theme.text2 }, "Liquidity Provider Fee"),
                    react_1["default"].createElement(QuestionHelper_1["default"], { text: "A portion of each trade (0.30%) goes to liquidity providers as a protocol incentive." })),
                react_1["default"].createElement(theme_1.TYPE.black, { fontSize: 14 }, realizedLPFee ? (realizedLPFee === null || realizedLPFee === void 0 ? void 0 : realizedLPFee.toSignificant(6)) + ' ' + trade.inputAmount.currency.symbol : '-'))),
        react_1["default"].createElement(Row_1.AutoRow, null,
            react_1["default"].createElement(Button_1.ButtonError, { onClick: onConfirm, disabled: disabledConfirm, error: severity > 2, style: { margin: '10px 0 0 0' }, id: "confirm-swap-or-send" },
                react_1["default"].createElement(rebass_1.Text, { fontSize: 20, fontWeight: 500 }, severity > 2 ? 'Swap Anyway' : 'Confirm Swap')),
            swapErrorMessage ? react_1["default"].createElement(styleds_1.SwapCallbackError, { error: swapErrorMessage }) : null)));
}
exports["default"] = SwapModalFooter;
