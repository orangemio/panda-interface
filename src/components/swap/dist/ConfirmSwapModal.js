"use strict";
exports.__esModule = true;
var sdk_1 = require("@uniswap/sdk");
var react_1 = require("react");
var TransactionConfirmationModal_1 = require("../TransactionConfirmationModal");
var SwapModalFooter_1 = require("./SwapModalFooter");
var SwapModalHeader_1 = require("./SwapModalHeader");
/**
 * Returns true if the trade requires a confirmation of details before we can submit it
 * @param tradeA trade A
 * @param tradeB trade B
 */
function tradeMeaningfullyDiffers(tradeA, tradeB) {
    return (tradeA.tradeType !== tradeB.tradeType ||
        !sdk_1.currencyEquals(tradeA.inputAmount.currency, tradeB.inputAmount.currency) ||
        !tradeA.inputAmount.equalTo(tradeB.inputAmount) ||
        !sdk_1.currencyEquals(tradeA.outputAmount.currency, tradeB.outputAmount.currency) ||
        !tradeA.outputAmount.equalTo(tradeB.outputAmount));
}
function ConfirmSwapModal(_a) {
    var _b, _c, _d, _e, _f, _g;
    var trade = _a.trade, originalTrade = _a.originalTrade, onAcceptChanges = _a.onAcceptChanges, allowedSlippage = _a.allowedSlippage, onConfirm = _a.onConfirm, onDismiss = _a.onDismiss, recipient = _a.recipient, swapErrorMessage = _a.swapErrorMessage, isOpen = _a.isOpen, attemptingTxn = _a.attemptingTxn, txHash = _a.txHash;
    var showAcceptChanges = react_1.useMemo(function () { return Boolean(trade && originalTrade && tradeMeaningfullyDiffers(trade, originalTrade)); }, [originalTrade, trade]);
    var modalHeader = react_1.useCallback(function () {
        return trade ? (react_1["default"].createElement(SwapModalHeader_1["default"], { trade: trade, allowedSlippage: allowedSlippage, recipient: recipient, showAcceptChanges: showAcceptChanges, onAcceptChanges: onAcceptChanges })) : null;
    }, [allowedSlippage, onAcceptChanges, recipient, showAcceptChanges, trade]);
    var modalBottom = react_1.useCallback(function () {
        return trade ? (react_1["default"].createElement(SwapModalFooter_1["default"], { onConfirm: onConfirm, trade: trade, disabledConfirm: showAcceptChanges, swapErrorMessage: swapErrorMessage, allowedSlippage: allowedSlippage })) : null;
    }, [allowedSlippage, onConfirm, showAcceptChanges, swapErrorMessage, trade]);
    // text to show while loading
    var pendingText = "Swapping " + ((_b = trade === null || trade === void 0 ? void 0 : trade.inputAmount) === null || _b === void 0 ? void 0 : _b.toSignificant(6)) + " " + ((_d = (_c = trade === null || trade === void 0 ? void 0 : trade.inputAmount) === null || _c === void 0 ? void 0 : _c.currency) === null || _d === void 0 ? void 0 : _d.symbol) + " for " + ((_e = trade === null || trade === void 0 ? void 0 : trade.outputAmount) === null || _e === void 0 ? void 0 : _e.toSignificant(6)) + " " + ((_g = (_f = trade === null || trade === void 0 ? void 0 : trade.outputAmount) === null || _f === void 0 ? void 0 : _f.currency) === null || _g === void 0 ? void 0 : _g.symbol);
    var confirmationContent = react_1.useCallback(function () {
        return swapErrorMessage ? (react_1["default"].createElement(TransactionConfirmationModal_1.TransactionErrorContent, { onDismiss: onDismiss, message: swapErrorMessage })) : (react_1["default"].createElement(TransactionConfirmationModal_1.ConfirmationModalContent, { title: "Confirm Swap", onDismiss: onDismiss, topContent: modalHeader, bottomContent: modalBottom }));
    }, [onDismiss, modalBottom, modalHeader, swapErrorMessage]);
    return (react_1["default"].createElement(TransactionConfirmationModal_1["default"], { isOpen: isOpen, onDismiss: onDismiss, attemptingTxn: attemptingTxn, hash: txHash, content: confirmationContent, pendingText: pendingText }));
}
exports["default"] = ConfirmSwapModal;
