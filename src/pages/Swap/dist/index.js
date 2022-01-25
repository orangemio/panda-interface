"use strict";
exports.__esModule = true;
var sdk_1 = require("@uniswap/sdk");
var react_1 = require("react");
var react_feather_1 = require("react-feather");
var react_ga_1 = require("react-ga");
var rebass_1 = require("rebass");
var styled_components_1 = require("styled-components");
var AddressInputPanel_1 = require("../../components/AddressInputPanel");
var Button_1 = require("../../components/Button");
var Card_1 = require("../../components/Card");
var Column_1 = require("../../components/Column");
var ConfirmSwapModal_1 = require("../../components/swap/ConfirmSwapModal");
var CurrencyInputPanel_1 = require("../../components/CurrencyInputPanel");
var NavigationTabs_1 = require("../../components/NavigationTabs");
var Row_1 = require("../../components/Row");
var AdvancedSwapDetailsDropdown_1 = require("../../components/swap/AdvancedSwapDetailsDropdown");
var BetterTradeLink_1 = require("../../components/swap/BetterTradeLink");
var confirmPriceImpactWithoutFee_1 = require("../../components/swap/confirmPriceImpactWithoutFee");
var styleds_1 = require("../../components/swap/styleds");
var TradePrice_1 = require("../../components/swap/TradePrice");
var TokenWarningModal_1 = require("../../components/TokenWarningModal");
var ProgressSteps_1 = require("../../components/ProgressSteps");
var constants_1 = require("../../constants");
var V1_1 = require("../../data/V1");
var hooks_1 = require("../../hooks");
var Tokens_1 = require("../../hooks/Tokens");
var useApproveCallback_1 = require("../../hooks/useApproveCallback");
var useENSAddress_1 = require("../../hooks/useENSAddress");
var useSwapCallback_1 = require("../../hooks/useSwapCallback");
var useToggledVersion_1 = require("../../hooks/useToggledVersion");
var useWrapCallback_1 = require("../../hooks/useWrapCallback");
var hooks_2 = require("../../state/application/hooks");
var actions_1 = require("../../state/swap/actions");
var hooks_3 = require("../../state/swap/hooks");
var hooks_4 = require("../../state/user/hooks");
var theme_1 = require("../../theme");
var maxAmountSpend_1 = require("../../utils/maxAmountSpend");
var prices_1 = require("../../utils/prices");
var AppBody_1 = require("../AppBody");
var styleds_2 = require("../Pool/styleds");
var Loader_1 = require("../../components/Loader");
function Swap() {
    var _a, _b, _c, _d;
    var _e, _f, _g, _h, _j, _k, _l;
    var loadedUrlParams = hooks_3.useDefaultsFromURLSearch();
    // token warning stuff
    var _m = [
        Tokens_1.useCurrency(loadedUrlParams === null || loadedUrlParams === void 0 ? void 0 : loadedUrlParams.inputCurrencyId),
        Tokens_1.useCurrency(loadedUrlParams === null || loadedUrlParams === void 0 ? void 0 : loadedUrlParams.outputCurrencyId)
    ], loadedInputCurrency = _m[0], loadedOutputCurrency = _m[1];
    var _o = react_1.useState(false), dismissTokenWarning = _o[0], setDismissTokenWarning = _o[1];
    var urlLoadedTokens = react_1.useMemo(function () { var _a, _b; return (_b = (_a = [loadedInputCurrency, loadedOutputCurrency]) === null || _a === void 0 ? void 0 : _a.filter(function (c) { return c instanceof sdk_1.Token; })) !== null && _b !== void 0 ? _b : []; }, [loadedInputCurrency, loadedOutputCurrency]);
    var handleConfirmTokenWarning = react_1.useCallback(function () {
        setDismissTokenWarning(true);
    }, []);
    var account = hooks_1.useActiveWeb3React().account;
    var theme = react_1.useContext(styled_components_1.ThemeContext);
    // toggle wallet when disconnected
    var toggleWalletModal = hooks_2.useWalletModalToggle();
    // for expert mode
    var toggleSettings = hooks_2.useToggleSettingsMenu();
    var isExpertMode = hooks_4.useExpertModeManager()[0];
    // get custom setting values for user
    var deadline = hooks_4.useUserDeadline()[0];
    var allowedSlippage = hooks_4.useUserSlippageTolerance()[0];
    // swap state
    var _p = hooks_3.useSwapState(), independentField = _p.independentField, typedValue = _p.typedValue, recipient = _p.recipient;
    var _q = hooks_3.useDerivedSwapInfo(), v1Trade = _q.v1Trade, v2Trade = _q.v2Trade, currencyBalances = _q.currencyBalances, parsedAmount = _q.parsedAmount, currencies = _q.currencies, swapInputError = _q.inputError;
    var _r = useWrapCallback_1["default"](currencies[actions_1.Field.INPUT], currencies[actions_1.Field.OUTPUT], typedValue), wrapType = _r.wrapType, onWrap = _r.execute, wrapInputError = _r.inputError;
    var showWrap = wrapType !== useWrapCallback_1.WrapType.NOT_APPLICABLE;
    var recipientAddress = useENSAddress_1["default"](recipient).address;
    var toggledVersion = useToggledVersion_1["default"]();
    var trade = showWrap
        ? undefined
        : (_a = {},
            _a[useToggledVersion_1.Version.v1] = v1Trade,
            _a[useToggledVersion_1.Version.v2] = v2Trade,
            _a)[toggledVersion];
    var betterTradeLinkVersion = toggledVersion === useToggledVersion_1.Version.v2 && V1_1.isTradeBetter(v2Trade, v1Trade, constants_1.BETTER_TRADE_LINK_THRESHOLD)
        ? useToggledVersion_1.Version.v1
        : toggledVersion === useToggledVersion_1.Version.v1 && V1_1.isTradeBetter(v1Trade, v2Trade)
            ? useToggledVersion_1.Version.v2
            : undefined;
    var parsedAmounts = showWrap
        ? (_b = {},
            _b[actions_1.Field.INPUT] = parsedAmount,
            _b[actions_1.Field.OUTPUT] = parsedAmount,
            _b) : (_c = {},
        _c[actions_1.Field.INPUT] = independentField === actions_1.Field.INPUT ? parsedAmount : trade === null || trade === void 0 ? void 0 : trade.inputAmount,
        _c[actions_1.Field.OUTPUT] = independentField === actions_1.Field.OUTPUT ? parsedAmount : trade === null || trade === void 0 ? void 0 : trade.outputAmount,
        _c);
    var _s = hooks_3.useSwapActionHandlers(), onSwitchTokens = _s.onSwitchTokens, onCurrencySelection = _s.onCurrencySelection, onUserInput = _s.onUserInput, onChangeRecipient = _s.onChangeRecipient;
    var isValid = !swapInputError;
    var dependentField = independentField === actions_1.Field.INPUT ? actions_1.Field.OUTPUT : actions_1.Field.INPUT;
    var handleTypeInput = react_1.useCallback(function (value) {
        onUserInput(actions_1.Field.INPUT, value);
    }, [onUserInput]);
    var handleTypeOutput = react_1.useCallback(function (value) {
        onUserInput(actions_1.Field.OUTPUT, value);
    }, [onUserInput]);
    // modal and loading
    var _t = react_1.useState({
        showConfirm: false,
        tradeToConfirm: undefined,
        attemptingTxn: false,
        swapErrorMessage: undefined,
        txHash: undefined
    }), _u = _t[0], showConfirm = _u.showConfirm, tradeToConfirm = _u.tradeToConfirm, swapErrorMessage = _u.swapErrorMessage, attemptingTxn = _u.attemptingTxn, txHash = _u.txHash, setSwapState = _t[1];
    var formattedAmounts = (_d = {},
        _d[independentField] = typedValue,
        _d[dependentField] = showWrap
            ? (_f = (_e = parsedAmounts[independentField]) === null || _e === void 0 ? void 0 : _e.toExact()) !== null && _f !== void 0 ? _f : '' : (_h = (_g = parsedAmounts[dependentField]) === null || _g === void 0 ? void 0 : _g.toSignificant(6)) !== null && _h !== void 0 ? _h : '',
        _d);
    var route = trade === null || trade === void 0 ? void 0 : trade.route;
    var userHasSpecifiedInputOutput = Boolean(currencies[actions_1.Field.INPUT] && currencies[actions_1.Field.OUTPUT] && ((_j = parsedAmounts[independentField]) === null || _j === void 0 ? void 0 : _j.greaterThan(sdk_1.JSBI.BigInt(0))));
    var noRoute = !route;
    // check whether the user has approved the router on the input token
    var _v = useApproveCallback_1.useApproveCallbackFromTrade(trade, allowedSlippage), approval = _v[0], approveCallback = _v[1];
    // check if user has gone through approval process, used to show two step buttons, reset on token change
    var _w = react_1.useState(false), approvalSubmitted = _w[0], setApprovalSubmitted = _w[1];
    // mark when a user has submitted an approval, reset onTokenSelection for input field
    react_1.useEffect(function () {
        if (approval === useApproveCallback_1.ApprovalState.PENDING) {
            setApprovalSubmitted(true);
        }
    }, [approval, approvalSubmitted]);
    var maxAmountInput = maxAmountSpend_1.maxAmountSpend(currencyBalances[actions_1.Field.INPUT]);
    var atMaxAmountInput = Boolean(maxAmountInput && ((_k = parsedAmounts[actions_1.Field.INPUT]) === null || _k === void 0 ? void 0 : _k.equalTo(maxAmountInput)));
    // the callback to execute the swap
    var _x = useSwapCallback_1.useSwapCallback(trade, allowedSlippage, deadline, recipient), swapCallback = _x.callback, swapCallbackError = _x.error;
    console.log('🍣', swapCallback, trade, allowedSlippage, deadline, recipient);
    var priceImpactWithoutFee = prices_1.computeTradePriceBreakdown(trade).priceImpactWithoutFee;
    var handleSwap = react_1.useCallback(function () {
        if (priceImpactWithoutFee && !confirmPriceImpactWithoutFee_1["default"](priceImpactWithoutFee)) {
            return;
        }
        if (!swapCallback) {
            return;
        }
        setSwapState({ attemptingTxn: true, tradeToConfirm: tradeToConfirm, showConfirm: showConfirm, swapErrorMessage: undefined, txHash: undefined });
        swapCallback()
            .then(function (hash) {
            var _a, _b, _c, _d;
            setSwapState({ attemptingTxn: false, tradeToConfirm: tradeToConfirm, showConfirm: showConfirm, swapErrorMessage: undefined, txHash: hash });
            react_ga_1["default"].event({
                category: 'Swap',
                action: recipient === null
                    ? 'Swap w/o Send'
                    : (recipientAddress !== null && recipientAddress !== void 0 ? recipientAddress : recipient) === account
                        ? 'Swap w/o Send + recipient'
                        : 'Swap w/ Send',
                label: [
                    (_b = (_a = trade === null || trade === void 0 ? void 0 : trade.inputAmount) === null || _a === void 0 ? void 0 : _a.currency) === null || _b === void 0 ? void 0 : _b.symbol,
                    (_d = (_c = trade === null || trade === void 0 ? void 0 : trade.outputAmount) === null || _c === void 0 ? void 0 : _c.currency) === null || _d === void 0 ? void 0 : _d.symbol,
                    V1_1.getTradeVersion(trade)
                ].join('/')
            });
        })["catch"](function (error) {
            setSwapState({
                attemptingTxn: false,
                tradeToConfirm: tradeToConfirm,
                showConfirm: showConfirm,
                swapErrorMessage: error.message,
                txHash: undefined
            });
        });
    }, [tradeToConfirm, account, priceImpactWithoutFee, recipient, recipientAddress, showConfirm, swapCallback, trade]);
    // errors
    var _y = react_1.useState(false), showInverted = _y[0], setShowInverted = _y[1];
    // warnings on slippage
    var priceImpactSeverity = prices_1.warningSeverity(priceImpactWithoutFee);
    // show approve flow when: no error on inputs, not approved or pending, or approved in current session
    // never show if price impact is above threshold in non expert mode
    var showApproveFlow = !swapInputError &&
        (approval === useApproveCallback_1.ApprovalState.NOT_APPROVED ||
            approval === useApproveCallback_1.ApprovalState.PENDING ||
            (approvalSubmitted && approval === useApproveCallback_1.ApprovalState.APPROVED)) &&
        !(priceImpactSeverity > 3 && !isExpertMode);
    var handleConfirmDismiss = react_1.useCallback(function () {
        setSwapState({ showConfirm: false, tradeToConfirm: tradeToConfirm, attemptingTxn: attemptingTxn, swapErrorMessage: swapErrorMessage, txHash: txHash });
        // if there was a tx hash, we want to clear the input
        if (txHash) {
            onUserInput(actions_1.Field.INPUT, '');
        }
    }, [attemptingTxn, onUserInput, swapErrorMessage, tradeToConfirm, txHash]);
    var handleAcceptChanges = react_1.useCallback(function () {
        setSwapState({ tradeToConfirm: trade, swapErrorMessage: swapErrorMessage, txHash: txHash, attemptingTxn: attemptingTxn, showConfirm: showConfirm });
    }, [attemptingTxn, showConfirm, swapErrorMessage, trade, txHash]);
    var handleInputSelect = react_1.useCallback(function (inputCurrency) {
        setApprovalSubmitted(false); // reset 2 step UI for approvals
        onCurrencySelection(actions_1.Field.INPUT, inputCurrency);
    }, [onCurrencySelection]);
    var handleMaxInput = react_1.useCallback(function () {
        maxAmountInput && onUserInput(actions_1.Field.INPUT, maxAmountInput.toExact());
    }, [maxAmountInput, onUserInput]);
    var handleOutputSelect = react_1.useCallback(function (outputCurrency) { return onCurrencySelection(actions_1.Field.OUTPUT, outputCurrency); }, [
        onCurrencySelection
    ]);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(TokenWarningModal_1["default"], { isOpen: urlLoadedTokens.length > 0 && !dismissTokenWarning, tokens: urlLoadedTokens, onConfirm: handleConfirmTokenWarning }),
        react_1["default"].createElement(AppBody_1["default"], null,
            react_1["default"].createElement(NavigationTabs_1.SwapPoolTabs, { active: 'swap' }),
            react_1["default"].createElement(styleds_1.Wrapper, { id: "swap-page" },
                react_1["default"].createElement(ConfirmSwapModal_1["default"], { isOpen: showConfirm, trade: trade, originalTrade: tradeToConfirm, onAcceptChanges: handleAcceptChanges, attemptingTxn: attemptingTxn, txHash: txHash, recipient: recipient, allowedSlippage: allowedSlippage, onConfirm: handleSwap, swapErrorMessage: swapErrorMessage, onDismiss: handleConfirmDismiss }),
                react_1["default"].createElement(Column_1.AutoColumn, { gap: 'md' },
                    react_1["default"].createElement(CurrencyInputPanel_1["default"], { label: independentField === actions_1.Field.OUTPUT && !showWrap && trade ? 'From (estimated)' : 'From', value: formattedAmounts[actions_1.Field.INPUT], showMaxButton: !atMaxAmountInput, currency: currencies[actions_1.Field.INPUT], onUserInput: handleTypeInput, onMax: handleMaxInput, onCurrencySelect: handleInputSelect, otherCurrency: currencies[actions_1.Field.OUTPUT], id: "swap-currency-input" }),
                    react_1["default"].createElement(Column_1.AutoColumn, { justify: "space-between" },
                        react_1["default"].createElement(Row_1.AutoRow, { justify: isExpertMode ? 'space-between' : 'center', style: { padding: '0 1rem' } },
                            react_1["default"].createElement(styleds_1.ArrowWrapper, { clickable: true },
                                react_1["default"].createElement(react_feather_1.ArrowDown, { size: "16", onClick: function () {
                                        setApprovalSubmitted(false); // reset 2 step UI for approvals
                                        onSwitchTokens();
                                    }, color: currencies[actions_1.Field.INPUT] && currencies[actions_1.Field.OUTPUT] ? theme.primary1 : theme.text2 })),
                            recipient === null && !showWrap && isExpertMode ? (react_1["default"].createElement(theme_1.LinkStyledButton, { id: "add-recipient-button", onClick: function () { return onChangeRecipient(''); } }, "+ Add a send (optional)")) : null)),
                    react_1["default"].createElement(CurrencyInputPanel_1["default"], { value: formattedAmounts[actions_1.Field.OUTPUT], onUserInput: handleTypeOutput, label: independentField === actions_1.Field.INPUT && !showWrap && trade ? 'To (estimated)' : 'To', showMaxButton: false, currency: currencies[actions_1.Field.OUTPUT], onCurrencySelect: handleOutputSelect, otherCurrency: currencies[actions_1.Field.INPUT], id: "swap-currency-output" }),
                    recipient !== null && !showWrap ? (react_1["default"].createElement(react_1["default"].Fragment, null,
                        react_1["default"].createElement(Row_1.AutoRow, { justify: "space-between", style: { padding: '0 1rem' } },
                            react_1["default"].createElement(styleds_1.ArrowWrapper, { clickable: false },
                                react_1["default"].createElement(react_feather_1.ArrowDown, { size: "16", color: theme.text2 })),
                            react_1["default"].createElement(theme_1.LinkStyledButton, { id: "remove-recipient-button", onClick: function () { return onChangeRecipient(null); } }, "- Remove send")),
                        react_1["default"].createElement(AddressInputPanel_1["default"], { id: "recipient", value: recipient, onChange: onChangeRecipient }))) : null,
                    showWrap ? null : (react_1["default"].createElement(Card_1["default"], { padding: '.25rem .75rem 0 .75rem', borderRadius: '20px' },
                        react_1["default"].createElement(Column_1.AutoColumn, { gap: "4px" },
                            Boolean(trade) && (react_1["default"].createElement(Row_1.RowBetween, { align: "center" },
                                react_1["default"].createElement(rebass_1.Text, { fontWeight: 500, fontSize: 14, color: theme.text2 }, "Price"),
                                react_1["default"].createElement(TradePrice_1["default"], { price: trade === null || trade === void 0 ? void 0 : trade.executionPrice, showInverted: showInverted, setShowInverted: setShowInverted }))),
                            allowedSlippage !== constants_1.INITIAL_ALLOWED_SLIPPAGE && (react_1["default"].createElement(Row_1.RowBetween, { align: "center" },
                                react_1["default"].createElement(styleds_2.ClickableText, { fontWeight: 500, fontSize: 14, color: theme.text2, onClick: toggleSettings }, "Slippage Tolerance"),
                                react_1["default"].createElement(styleds_2.ClickableText, { fontWeight: 500, fontSize: 14, color: theme.text2, onClick: toggleSettings },
                                    allowedSlippage / 100,
                                    "%"))))))),
                react_1["default"].createElement(styleds_1.BottomGrouping, null,
                    !account ? (react_1["default"].createElement(Button_1.ButtonLight, { onClick: toggleWalletModal }, "Connect Wallet")) : showWrap ? (react_1["default"].createElement(Button_1.ButtonPrimary, { disabled: Boolean(wrapInputError), onClick: onWrap }, wrapInputError !== null && wrapInputError !== void 0 ? wrapInputError : (wrapType === useWrapCallback_1.WrapType.WRAP ? 'Wrap' : wrapType === useWrapCallback_1.WrapType.UNWRAP ? 'Unwrap' : null))) : noRoute && userHasSpecifiedInputOutput ? (react_1["default"].createElement(Card_1.GreyCard, { style: { textAlign: 'center' } },
                        react_1["default"].createElement(theme_1.TYPE.main, { mb: "4px" }, "Insufficient liquidity for this trade."))) : showApproveFlow ? (react_1["default"].createElement(Row_1.RowBetween, null,
                        react_1["default"].createElement(Button_1.ButtonConfirmed, { onClick: approveCallback, disabled: approval !== useApproveCallback_1.ApprovalState.NOT_APPROVED || approvalSubmitted, width: "48%", altDisabledStyle: approval === useApproveCallback_1.ApprovalState.PENDING, confirmed: approval === useApproveCallback_1.ApprovalState.APPROVED }, approval === useApproveCallback_1.ApprovalState.PENDING ? (react_1["default"].createElement(Row_1.AutoRow, { gap: "6px", justify: "center" },
                            "Approving ",
                            react_1["default"].createElement(Loader_1["default"], { stroke: "white" }))) : approvalSubmitted && approval === useApproveCallback_1.ApprovalState.APPROVED ? ('Approved') : ('Approve ' + ((_l = currencies[actions_1.Field.INPUT]) === null || _l === void 0 ? void 0 : _l.symbol))),
                        react_1["default"].createElement(Button_1.ButtonError, { onClick: function () {
                                if (isExpertMode) {
                                    handleSwap();
                                }
                                else {
                                    setSwapState({
                                        tradeToConfirm: trade,
                                        attemptingTxn: false,
                                        swapErrorMessage: undefined,
                                        showConfirm: true,
                                        txHash: undefined
                                    });
                                }
                            }, width: "48%", id: "swap-button", disabled: !isValid || approval !== useApproveCallback_1.ApprovalState.APPROVED || (priceImpactSeverity > 3 && !isExpertMode), error: isValid && priceImpactSeverity > 2 },
                            react_1["default"].createElement(rebass_1.Text, { fontSize: 16, fontWeight: 500 }, priceImpactSeverity > 3 && !isExpertMode
                                ? "Price Impact High"
                                : "Swap" + (priceImpactSeverity > 2 ? ' Anyway' : ''))))) : (react_1["default"].createElement(Button_1.ButtonError, { onClick: function () {
                            if (isExpertMode) {
                                handleSwap();
                            }
                            else {
                                setSwapState({
                                    tradeToConfirm: trade,
                                    attemptingTxn: false,
                                    swapErrorMessage: undefined,
                                    showConfirm: true,
                                    txHash: undefined
                                });
                            }
                        }, id: "swap-button", disabled: !isValid || (priceImpactSeverity > 3 && !isExpertMode) || !!swapCallbackError, error: isValid && priceImpactSeverity > 2 && !swapCallbackError },
                        react_1["default"].createElement(rebass_1.Text, { fontSize: 20, fontWeight: 500 }, swapInputError
                            ? swapInputError
                            : priceImpactSeverity > 3 && !isExpertMode
                                ? "Price Impact Too High"
                                : "Swap" + (priceImpactSeverity > 2 ? ' Anyway' : '')))),
                    showApproveFlow && react_1["default"].createElement(ProgressSteps_1["default"], { steps: [approval === useApproveCallback_1.ApprovalState.APPROVED] }),
                    isExpertMode && swapErrorMessage ? react_1["default"].createElement(styleds_1.SwapCallbackError, { error: swapErrorMessage }) : null,
                    betterTradeLinkVersion && react_1["default"].createElement(BetterTradeLink_1["default"], { version: betterTradeLinkVersion })))),
        react_1["default"].createElement(AdvancedSwapDetailsDropdown_1["default"], { trade: trade })));
}
exports["default"] = Swap;
