"use strict";
exports.__esModule = true;
var sdk_1 = require("@uniswap/sdk");
var react_1 = require("react");
var react_feather_1 = require("react-feather");
var rebass_1 = require("rebass");
var styled_components_1 = require("styled-components");
var actions_1 = require("../../state/swap/actions");
var theme_1 = require("../../theme");
var Button_1 = require("../Button");
var utils_1 = require("../../utils");
var prices_1 = require("../../utils/prices");
var Column_1 = require("../Column");
var CurrencyLogo_1 = require("../CurrencyLogo");
var Row_1 = require("../Row");
var styleds_1 = require("./styleds");
function SwapModalHeader(_a) {
    var _b, _c;
    var trade = _a.trade, allowedSlippage = _a.allowedSlippage, recipient = _a.recipient, showAcceptChanges = _a.showAcceptChanges, onAcceptChanges = _a.onAcceptChanges;
    var slippageAdjustedAmounts = react_1.useMemo(function () { return prices_1.computeSlippageAdjustedAmounts(trade, allowedSlippage); }, [
        trade,
        allowedSlippage
    ]);
    var priceImpactWithoutFee = react_1.useMemo(function () { return prices_1.computeTradePriceBreakdown(trade); }, [trade]).priceImpactWithoutFee;
    var priceImpactSeverity = prices_1.warningSeverity(priceImpactWithoutFee);
    var theme = react_1.useContext(styled_components_1.ThemeContext);
    return (react_1["default"].createElement(Column_1.AutoColumn, { gap: 'md', style: { marginTop: '20px' } },
        react_1["default"].createElement(Row_1.RowBetween, { align: "flex-end" },
            react_1["default"].createElement(Row_1.RowFixed, { gap: '0px' },
                react_1["default"].createElement(CurrencyLogo_1["default"], { currency: trade.inputAmount.currency, size: '24px', style: { marginRight: '12px' } }),
                react_1["default"].createElement(styleds_1.TruncatedText, { fontSize: 24, fontWeight: 500, color: showAcceptChanges && trade.tradeType === sdk_1.TradeType.EXACT_OUTPUT ? theme.primary1 : '' }, trade.inputAmount.toSignificant(6))),
            react_1["default"].createElement(Row_1.RowFixed, { gap: '0px' },
                react_1["default"].createElement(rebass_1.Text, { fontSize: 24, fontWeight: 500, style: { marginLeft: '10px' } }, trade.inputAmount.currency.symbol))),
        react_1["default"].createElement(Row_1.RowFixed, null,
            react_1["default"].createElement(react_feather_1.ArrowDown, { size: "16", color: theme.text2, style: { marginLeft: '4px', minWidth: '16px' } })),
        react_1["default"].createElement(Row_1.RowBetween, { align: "flex-end" },
            react_1["default"].createElement(Row_1.RowFixed, { gap: '0px' },
                react_1["default"].createElement(CurrencyLogo_1["default"], { currency: trade.outputAmount.currency, size: '24px', style: { marginRight: '12px' } }),
                react_1["default"].createElement(styleds_1.TruncatedText, { fontSize: 24, fontWeight: 500, color: priceImpactSeverity > 2
                        ? theme.red1
                        : showAcceptChanges && trade.tradeType === sdk_1.TradeType.EXACT_INPUT
                            ? theme.primary1
                            : '' }, trade.outputAmount.toSignificant(6))),
            react_1["default"].createElement(Row_1.RowFixed, { gap: '0px' },
                react_1["default"].createElement(rebass_1.Text, { fontSize: 24, fontWeight: 500, style: { marginLeft: '10px' } }, trade.outputAmount.currency.symbol))),
        showAcceptChanges ? (react_1["default"].createElement(styleds_1.SwapShowAcceptChanges, { justify: "flex-start", gap: '0px' },
            react_1["default"].createElement(Row_1.RowBetween, null,
                react_1["default"].createElement(Row_1.RowFixed, null,
                    react_1["default"].createElement(react_feather_1.AlertTriangle, { size: 20, style: { marginRight: '8px', minWidth: 24 } }),
                    react_1["default"].createElement(theme_1.TYPE.main, { color: theme.primary1 }, " Price Updated")),
                react_1["default"].createElement(Button_1.ButtonPrimary, { style: { padding: '.5rem', width: 'fit-content', fontSize: '0.825rem', borderRadius: '12px' }, onClick: onAcceptChanges }, "Accept")))) : null,
        react_1["default"].createElement(Column_1.AutoColumn, { justify: "flex-start", gap: "sm", style: { padding: '12px 0 0 0px' } }, trade.tradeType === sdk_1.TradeType.EXACT_INPUT ? (react_1["default"].createElement(theme_1.TYPE.italic, { textAlign: "left", style: { width: '100%' } }, "Output is estimated. You will receive at least ",
            react_1["default"].createElement("b", null, (_b = slippageAdjustedAmounts[actions_1.Field.OUTPUT]) === null || _b === void 0 ? void 0 :
                _b.toSignificant(6),
                " ",
                trade.outputAmount.currency.symbol),
            ' or the transaction will revert.')) : (react_1["default"].createElement(theme_1.TYPE.italic, { textAlign: "left", style: { width: '100%' } }, "Input is estimated. You will sell at most ",
            react_1["default"].createElement("b", null, (_c = slippageAdjustedAmounts[actions_1.Field.INPUT]) === null || _c === void 0 ? void 0 :
                _c.toSignificant(6),
                " ",
                trade.inputAmount.currency.symbol),
            ' or the transaction will revert.'))),
        recipient !== null ? (react_1["default"].createElement(Column_1.AutoColumn, { justify: "flex-start", gap: "sm", style: { padding: '12px 0 0 0px' } },
            react_1["default"].createElement(theme_1.TYPE.main, null,
                "Output will be sent to",
                ' ',
                react_1["default"].createElement("b", { title: recipient }, utils_1.isAddress(recipient) ? utils_1.shortenAddress(recipient) : recipient)))) : null));
}
exports["default"] = SwapModalHeader;
