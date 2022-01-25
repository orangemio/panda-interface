"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var bytes_1 = require("@ethersproject/bytes");
var sdk_1 = require("@uniswap/sdk");
var react_1 = require("react");
var react_feather_1 = require("react-feather");
var react_ga_1 = require("react-ga");
var rebass_1 = require("rebass");
var styled_components_1 = require("styled-components");
var Button_1 = require("../../components/Button");
var Card_1 = require("../../components/Card");
var Column_1 = require("../../components/Column");
var TransactionConfirmationModal_1 = require("../../components/TransactionConfirmationModal");
var CurrencyInputPanel_1 = require("../../components/CurrencyInputPanel");
var DoubleLogo_1 = require("../../components/DoubleLogo");
var NavigationTabs_1 = require("../../components/NavigationTabs");
var PositionCard_1 = require("../../components/PositionCard");
var Row_1 = require("../../components/Row");
var Slider_1 = require("../../components/Slider");
var CurrencyLogo_1 = require("../../components/CurrencyLogo");
var constants_1 = require("../../constants");
var hooks_1 = require("../../hooks");
var Tokens_1 = require("../../hooks/Tokens");
var useContract_1 = require("../../hooks/useContract");
var hooks_2 = require("../../state/transactions/hooks");
var theme_1 = require("../../theme");
var utils_1 = require("../../utils");
var currencyId_1 = require("../../utils/currencyId");
var useDebouncedChangeHandler_1 = require("../../utils/useDebouncedChangeHandler");
var wrappedCurrency_1 = require("../../utils/wrappedCurrency");
var AppBody_1 = require("../AppBody");
var styleds_1 = require("../Pool/styleds");
var useApproveCallback_1 = require("../../hooks/useApproveCallback");
var styleds_2 = require("../../components/swap/styleds");
var hooks_3 = require("../../state/burn/hooks");
var hooks_4 = require("../../state/burn/hooks");
var actions_1 = require("../../state/burn/actions");
var hooks_5 = require("../../state/application/hooks");
var hooks_6 = require("../../state/user/hooks");
var bignumber_1 = require("@ethersproject/bignumber");
function RemoveLiquidity(_a) {
    var _b;
    var _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
    var history = _a.history, _q = _a.match.params, currencyIdA = _q.currencyIdA, currencyIdB = _q.currencyIdB;
    var _r = [(_c = Tokens_1.useCurrency(currencyIdA)) !== null && _c !== void 0 ? _c : undefined, (_d = Tokens_1.useCurrency(currencyIdB)) !== null && _d !== void 0 ? _d : undefined], currencyA = _r[0], currencyB = _r[1];
    var _s = hooks_1.useActiveWeb3React(), account = _s.account, chainId = _s.chainId, library = _s.library;
    var _t = react_1.useMemo(function () { return [wrappedCurrency_1.wrappedCurrency(currencyA, chainId), wrappedCurrency_1.wrappedCurrency(currencyB, chainId)]; }, [
        currencyA,
        currencyB,
        chainId
    ]), tokenA = _t[0], tokenB = _t[1];
    var theme = react_1.useContext(styled_components_1.ThemeContext);
    // toggle wallet when disconnected
    var toggleWalletModal = hooks_5.useWalletModalToggle();
    // burn state
    var _u = hooks_4.useBurnState(), independentField = _u.independentField, typedValue = _u.typedValue;
    var _v = hooks_4.useDerivedBurnInfo(currencyA !== null && currencyA !== void 0 ? currencyA : undefined, currencyB !== null && currencyB !== void 0 ? currencyB : undefined), pair = _v.pair, parsedAmounts = _v.parsedAmounts, error = _v.error;
    var _onUserInput = hooks_3.useBurnActionHandlers().onUserInput;
    var isValid = !error;
    // modal and loading
    var _w = react_1.useState(false), showConfirm = _w[0], setShowConfirm = _w[1];
    var _x = react_1.useState(false), showDetailed = _x[0], setShowDetailed = _x[1];
    var _y = react_1.useState(false), attemptingTxn = _y[0], setAttemptingTxn = _y[1]; // clicked confirm
    // txn values
    var _z = react_1.useState(''), txHash = _z[0], setTxHash = _z[1];
    var deadline = hooks_6.useUserDeadline()[0];
    var allowedSlippage = hooks_6.useUserSlippageTolerance()[0];
    var formattedAmounts = (_b = {},
        _b[actions_1.Field.LIQUIDITY_PERCENT] = parsedAmounts[actions_1.Field.LIQUIDITY_PERCENT].equalTo('0')
            ? '0'
            : parsedAmounts[actions_1.Field.LIQUIDITY_PERCENT].lessThan(new sdk_1.Percent('1', '100'))
                ? '<1'
                : parsedAmounts[actions_1.Field.LIQUIDITY_PERCENT].toFixed(0),
        _b[actions_1.Field.LIQUIDITY] = independentField === actions_1.Field.LIQUIDITY ? typedValue : (_f = (_e = parsedAmounts[actions_1.Field.LIQUIDITY]) === null || _e === void 0 ? void 0 : _e.toSignificant(6)) !== null && _f !== void 0 ? _f : '',
        _b[actions_1.Field.CURRENCY_A] = independentField === actions_1.Field.CURRENCY_A ? typedValue : (_h = (_g = parsedAmounts[actions_1.Field.CURRENCY_A]) === null || _g === void 0 ? void 0 : _g.toSignificant(6)) !== null && _h !== void 0 ? _h : '',
        _b[actions_1.Field.CURRENCY_B] = independentField === actions_1.Field.CURRENCY_B ? typedValue : (_k = (_j = parsedAmounts[actions_1.Field.CURRENCY_B]) === null || _j === void 0 ? void 0 : _j.toSignificant(6)) !== null && _k !== void 0 ? _k : '',
        _b);
    var atMaxAmount = (_l = parsedAmounts[actions_1.Field.LIQUIDITY_PERCENT]) === null || _l === void 0 ? void 0 : _l.equalTo(new sdk_1.Percent('1'));
    // pair contract
    var pairContract = useContract_1.usePairContract((_m = pair === null || pair === void 0 ? void 0 : pair.liquidityToken) === null || _m === void 0 ? void 0 : _m.address);
    // allowance handling
    var _0 = react_1.useState(null), signatureData = _0[0], setSignatureData = _0[1];
    var _1 = useApproveCallback_1.useApproveCallback(parsedAmounts[actions_1.Field.LIQUIDITY], constants_1.ROUTER_ADDRESS), approval = _1[0], approveCallback = _1[1];
    function onAttemptToApprove() {
        return __awaiter(this, void 0, void 0, function () {
            var liquidityAmount, nonce, deadlineForSignature, EIP712Domain, domain, Permit, message, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!pairContract || !pair || !library)
                            throw new Error('missing dependencies');
                        liquidityAmount = parsedAmounts[actions_1.Field.LIQUIDITY];
                        if (!liquidityAmount)
                            throw new Error('missing liquidity amount');
                        return [4 /*yield*/, pairContract.nonces(account)];
                    case 1:
                        nonce = _a.sent();
                        deadlineForSignature = Math.ceil(Date.now() / 1000) + deadline;
                        EIP712Domain = [
                            { name: 'name', type: 'string' },
                            { name: 'version', type: 'string' },
                            { name: 'chainId', type: 'uint256' },
                            { name: 'verifyingContract', type: 'address' }
                        ];
                        domain = {
                            name: 'PandaSwap LP Token',
                            version: '1',
                            chainId: chainId,
                            verifyingContract: pair.liquidityToken.address
                        };
                        Permit = [
                            { name: 'owner', type: 'address' },
                            { name: 'spender', type: 'address' },
                            { name: 'value', type: 'uint256' },
                            { name: 'nonce', type: 'uint256' },
                            { name: 'deadline', type: 'uint256' }
                        ];
                        message = {
                            owner: account,
                            spender: constants_1.ROUTER_ADDRESS,
                            value: liquidityAmount.raw.toString(),
                            nonce: nonce.toHexString(),
                            deadline: deadlineForSignature
                        };
                        data = JSON.stringify({
                            types: {
                                EIP712Domain: EIP712Domain,
                                Permit: Permit
                            },
                            domain: domain,
                            primaryType: 'Permit',
                            message: message
                        });
                        library
                            .send('eth_signTypedData_v4', [account, data])
                            .then(bytes_1.splitSignature)
                            .then(function (signature) {
                            setSignatureData({
                                v: signature.v,
                                r: signature.r,
                                s: signature.s,
                                deadline: deadlineForSignature
                            });
                        })["catch"](function (error) {
                            // for all errors other than 4001 (EIP-1193 user rejected request), fall back to manual approve
                            if ((error === null || error === void 0 ? void 0 : error.code) !== 4001) {
                                approveCallback();
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    }
    // wrapped onUserInput to clear signatures
    var onUserInput = react_1.useCallback(function (field, typedValue) {
        setSignatureData(null);
        return _onUserInput(field, typedValue);
    }, [_onUserInput]);
    var onLiquidityInput = react_1.useCallback(function (typedValue) { return onUserInput(actions_1.Field.LIQUIDITY, typedValue); }, [
        onUserInput
    ]);
    var onCurrencyAInput = react_1.useCallback(function (typedValue) { return onUserInput(actions_1.Field.CURRENCY_A, typedValue); }, [
        onUserInput
    ]);
    var onCurrencyBInput = react_1.useCallback(function (typedValue) { return onUserInput(actions_1.Field.CURRENCY_B, typedValue); }, [
        onUserInput
    ]);
    // tx sending
    var addTransaction = hooks_2.useTransactionAdder();
    function onRemove() {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, currencyAmountA, _c, currencyAmountB, router, amountsMin, liquidityAmount, currencyBIsETH, oneCurrencyIsETH, deadlineFromNow, methodNames, args, safeGasEstimates, indexOfSuccessfulEstimation, methodName, safeGasEstimate;
            var _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        if (!chainId || !library || !account)
                            throw new Error('missing dependencies');
                        _a = parsedAmounts, _b = actions_1.Field.CURRENCY_A, currencyAmountA = _a[_b], _c = actions_1.Field.CURRENCY_B, currencyAmountB = _a[_c];
                        if (!currencyAmountA || !currencyAmountB) {
                            throw new Error('missing currency amounts');
                        }
                        router = utils_1.getRouterContract(chainId, library, account);
                        amountsMin = (_d = {},
                            _d[actions_1.Field.CURRENCY_A] = utils_1.calculateSlippageAmount(currencyAmountA, allowedSlippage)[0],
                            _d[actions_1.Field.CURRENCY_B] = utils_1.calculateSlippageAmount(currencyAmountB, allowedSlippage)[0],
                            _d);
                        if (!currencyA || !currencyB)
                            throw new Error('missing tokens');
                        liquidityAmount = parsedAmounts[actions_1.Field.LIQUIDITY];
                        if (!liquidityAmount)
                            throw new Error('missing liquidity amount');
                        currencyBIsETH = currencyB === sdk_1.ETHER;
                        oneCurrencyIsETH = currencyA === sdk_1.ETHER || currencyBIsETH;
                        deadlineFromNow = Math.ceil(Date.now() / 1000) + deadline;
                        if (!tokenA || !tokenB)
                            throw new Error('could not wrap');
                        // we have approval, use normal remove liquidity
                        if (approval === useApproveCallback_1.ApprovalState.APPROVED) {
                            // removeLiquidityETH
                            if (oneCurrencyIsETH) {
                                methodNames = ['removeLiquidityETH', 'removeLiquidityETHSupportingFeeOnTransferTokens'];
                                args = [
                                    currencyBIsETH ? tokenA.address : tokenB.address,
                                    liquidityAmount.raw.toString(),
                                    amountsMin[currencyBIsETH ? actions_1.Field.CURRENCY_A : actions_1.Field.CURRENCY_B].toString(),
                                    amountsMin[currencyBIsETH ? actions_1.Field.CURRENCY_B : actions_1.Field.CURRENCY_A].toString(),
                                    account,
                                    deadlineFromNow
                                ];
                            }
                            // removeLiquidity
                            else {
                                methodNames = ['removeLiquidity'];
                                args = [
                                    tokenA.address,
                                    tokenB.address,
                                    liquidityAmount.raw.toString(),
                                    amountsMin[actions_1.Field.CURRENCY_A].toString(),
                                    amountsMin[actions_1.Field.CURRENCY_B].toString(),
                                    account,
                                    deadlineFromNow
                                ];
                            }
                        }
                        // we have a signataure, use permit versions of remove liquidity
                        else if (signatureData !== null) {
                            // removeLiquidityETHWithPermit
                            if (oneCurrencyIsETH) {
                                methodNames = ['removeLiquidityETHWithPermit', 'removeLiquidityETHWithPermitSupportingFeeOnTransferTokens'];
                                args = [
                                    currencyBIsETH ? tokenA.address : tokenB.address,
                                    liquidityAmount.raw.toString(),
                                    amountsMin[currencyBIsETH ? actions_1.Field.CURRENCY_A : actions_1.Field.CURRENCY_B].toString(),
                                    amountsMin[currencyBIsETH ? actions_1.Field.CURRENCY_B : actions_1.Field.CURRENCY_A].toString(),
                                    account,
                                    signatureData.deadline,
                                    false,
                                    signatureData.v,
                                    signatureData.r,
                                    signatureData.s
                                ];
                            }
                            // removeLiquidityETHWithPermit
                            else {
                                methodNames = ['removeLiquidityWithPermit'];
                                args = [
                                    tokenA.address,
                                    tokenB.address,
                                    liquidityAmount.raw.toString(),
                                    amountsMin[actions_1.Field.CURRENCY_A].toString(),
                                    amountsMin[actions_1.Field.CURRENCY_B].toString(),
                                    account,
                                    signatureData.deadline,
                                    false,
                                    signatureData.v,
                                    signatureData.r,
                                    signatureData.s
                                ];
                            }
                        }
                        else {
                            throw new Error('Attempting to confirm without approval or a signature. Please contact support.');
                        }
                        return [4 /*yield*/, Promise.all(methodNames.map(function (methodName) {
                                var _a;
                                return (_a = router.estimateGas)[methodName].apply(_a, args).then(utils_1.calculateGasMargin)["catch"](function (error) {
                                    console.error("estimateGas failed", methodName, args, error);
                                    return undefined;
                                });
                            }))];
                    case 1:
                        safeGasEstimates = _e.sent();
                        indexOfSuccessfulEstimation = safeGasEstimates.findIndex(function (safeGasEstimate) {
                            return bignumber_1.BigNumber.isBigNumber(safeGasEstimate);
                        });
                        if (!(indexOfSuccessfulEstimation === -1)) return [3 /*break*/, 2];
                        console.error('This transaction would fail. Please contact support.');
                        return [3 /*break*/, 4];
                    case 2:
                        methodName = methodNames[indexOfSuccessfulEstimation];
                        safeGasEstimate = safeGasEstimates[indexOfSuccessfulEstimation];
                        setAttemptingTxn(true);
                        return [4 /*yield*/, router[methodName].apply(router, __spreadArrays(args, [{
                                    gasLimit: safeGasEstimate
                                }])).then(function (response) {
                                var _a, _b;
                                setAttemptingTxn(false);
                                addTransaction(response, {
                                    summary: 'Remove ' + ((_a = parsedAmounts[actions_1.Field.CURRENCY_A]) === null || _a === void 0 ? void 0 : _a.toSignificant(3)) +
                                        ' ' + (currencyA === null || currencyA === void 0 ? void 0 : currencyA.symbol) +
                                        ' and ' + ((_b = parsedAmounts[actions_1.Field.CURRENCY_B]) === null || _b === void 0 ? void 0 : _b.toSignificant(3)) +
                                        ' ' + (currencyB === null || currencyB === void 0 ? void 0 : currencyB.symbol)
                                });
                                setTxHash(response.hash);
                                react_ga_1["default"].event({
                                    category: 'Liquidity',
                                    action: 'Remove',
                                    label: [currencyA === null || currencyA === void 0 ? void 0 : currencyA.symbol, currencyB === null || currencyB === void 0 ? void 0 : currencyB.symbol].join('/')
                                });
                            })["catch"](function (error) {
                                setAttemptingTxn(false);
                                // we only care if the error is something _other_ than the user rejected the tx
                                console.error(error);
                            })];
                    case 3:
                        _e.sent();
                        _e.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    }
    function modalHeader() {
        var _a, _b;
        return (react_1["default"].createElement(Column_1.AutoColumn, { gap: 'md', style: { marginTop: '20px' } },
            react_1["default"].createElement(Row_1.RowBetween, { align: "flex-end" },
                react_1["default"].createElement(rebass_1.Text, { fontSize: 24, fontWeight: 500 }, (_a = parsedAmounts[actions_1.Field.CURRENCY_A]) === null || _a === void 0 ? void 0 : _a.toSignificant(6)),
                react_1["default"].createElement(Row_1.RowFixed, { gap: "4px" },
                    react_1["default"].createElement(CurrencyLogo_1["default"], { currency: currencyA, size: '24px' }),
                    react_1["default"].createElement(rebass_1.Text, { fontSize: 24, fontWeight: 500, style: { marginLeft: '10px' } }, currencyA === null || currencyA === void 0 ? void 0 : currencyA.symbol))),
            react_1["default"].createElement(Row_1.RowFixed, null,
                react_1["default"].createElement(react_feather_1.Plus, { size: "16", color: theme.text2 })),
            react_1["default"].createElement(Row_1.RowBetween, { align: "flex-end" },
                react_1["default"].createElement(rebass_1.Text, { fontSize: 24, fontWeight: 500 }, (_b = parsedAmounts[actions_1.Field.CURRENCY_B]) === null || _b === void 0 ? void 0 : _b.toSignificant(6)),
                react_1["default"].createElement(Row_1.RowFixed, { gap: "4px" },
                    react_1["default"].createElement(CurrencyLogo_1["default"], { currency: currencyB, size: '24px' }),
                    react_1["default"].createElement(rebass_1.Text, { fontSize: 24, fontWeight: 500, style: { marginLeft: '10px' } }, currencyB === null || currencyB === void 0 ? void 0 : currencyB.symbol))),
            react_1["default"].createElement(theme_1.TYPE.italic, { fontSize: 12, color: theme.text2, textAlign: "left", padding: '12px 0 0 0' }, "Output is estimated. If the price changes by more than " + allowedSlippage /
                100 + "% your transaction will revert.")));
    }
    function modalBottom() {
        var _a;
        return (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(Row_1.RowBetween, null,
                react_1["default"].createElement(rebass_1.Text, { color: theme.text2, fontWeight: 500, fontSize: 16 },
                    'UNI ' + (currencyA === null || currencyA === void 0 ? void 0 : currencyA.symbol) + '/' + (currencyB === null || currencyB === void 0 ? void 0 : currencyB.symbol),
                    " Burned"),
                react_1["default"].createElement(Row_1.RowFixed, null,
                    react_1["default"].createElement(DoubleLogo_1["default"], { currency0: currencyA, currency1: currencyB, margin: true }),
                    react_1["default"].createElement(rebass_1.Text, { fontWeight: 500, fontSize: 16 }, (_a = parsedAmounts[actions_1.Field.LIQUIDITY]) === null || _a === void 0 ? void 0 : _a.toSignificant(6)))),
            pair && (react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement(Row_1.RowBetween, null,
                    react_1["default"].createElement(rebass_1.Text, { color: theme.text2, fontWeight: 500, fontSize: 16 }, "Price"),
                    react_1["default"].createElement(rebass_1.Text, { fontWeight: 500, fontSize: 16, color: theme.text1 },
                        "1 ", currencyA === null || currencyA === void 0 ? void 0 :
                        currencyA.symbol,
                        " = ",
                        tokenA ? pair.priceOf(tokenA).toSignificant(6) : '-',
                        " ", currencyB === null || currencyB === void 0 ? void 0 :
                        currencyB.symbol)),
                react_1["default"].createElement(Row_1.RowBetween, null,
                    react_1["default"].createElement("div", null),
                    react_1["default"].createElement(rebass_1.Text, { fontWeight: 500, fontSize: 16, color: theme.text1 },
                        "1 ", currencyB === null || currencyB === void 0 ? void 0 :
                        currencyB.symbol,
                        " = ",
                        tokenB ? pair.priceOf(tokenB).toSignificant(6) : '-',
                        " ", currencyA === null || currencyA === void 0 ? void 0 :
                        currencyA.symbol)))),
            react_1["default"].createElement(Button_1.ButtonPrimary, { disabled: !(approval === useApproveCallback_1.ApprovalState.APPROVED || signatureData !== null), onClick: onRemove },
                react_1["default"].createElement(rebass_1.Text, { fontWeight: 500, fontSize: 20 }, "Confirm"))));
    }
    var pendingText = "Removing " + ((_o = parsedAmounts[actions_1.Field.CURRENCY_A]) === null || _o === void 0 ? void 0 : _o.toSignificant(6)) + " " + (currencyA === null || currencyA === void 0 ? void 0 : currencyA.symbol) + " and " + ((_p = parsedAmounts[actions_1.Field.CURRENCY_B]) === null || _p === void 0 ? void 0 : _p.toSignificant(6)) + " " + (currencyB === null || currencyB === void 0 ? void 0 : currencyB.symbol);
    var liquidityPercentChangeCallback = react_1.useCallback(function (value) {
        onUserInput(actions_1.Field.LIQUIDITY_PERCENT, value.toString());
    }, [onUserInput]);
    var oneCurrencyIsETH = currencyA === sdk_1.ETHER || currencyB === sdk_1.ETHER;
    var oneCurrencyIsWETH = Boolean(chainId &&
        ((currencyA && sdk_1.currencyEquals(sdk_1.WETH[chainId], currencyA)) ||
            (currencyB && sdk_1.currencyEquals(sdk_1.WETH[chainId], currencyB))));
    var handleSelectCurrencyA = react_1.useCallback(function (currency) {
        if (currencyIdB && currencyId_1.currencyId(currency) === currencyIdB) {
            history.push("/remove/" + currencyId_1.currencyId(currency) + "/" + currencyIdA);
        }
        else {
            history.push("/remove/" + currencyId_1.currencyId(currency) + "/" + currencyIdB);
        }
    }, [currencyIdA, currencyIdB, history]);
    var handleSelectCurrencyB = react_1.useCallback(function (currency) {
        if (currencyIdA && currencyId_1.currencyId(currency) === currencyIdA) {
            history.push("/remove/" + currencyIdB + "/" + currencyId_1.currencyId(currency));
        }
        else {
            history.push("/remove/" + currencyIdA + "/" + currencyId_1.currencyId(currency));
        }
    }, [currencyIdA, currencyIdB, history]);
    var handleDismissConfirmation = react_1.useCallback(function () {
        setShowConfirm(false);
        setSignatureData(null); // important that we clear signature data to avoid bad sigs
        // if there was a tx hash, we want to clear the input
        if (txHash) {
            onUserInput(actions_1.Field.LIQUIDITY_PERCENT, '0');
        }
        setTxHash('');
    }, [onUserInput, txHash]);
    var _2 = useDebouncedChangeHandler_1["default"](Number.parseInt(parsedAmounts[actions_1.Field.LIQUIDITY_PERCENT].toFixed(0)), liquidityPercentChangeCallback), innerLiquidityPercentage = _2[0], setInnerLiquidityPercentage = _2[1];
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(AppBody_1["default"], null,
            react_1["default"].createElement(NavigationTabs_1.AddRemoveTabs, { adding: false }),
            react_1["default"].createElement(styleds_1.Wrapper, null,
                react_1["default"].createElement(TransactionConfirmationModal_1["default"], { isOpen: showConfirm, onDismiss: handleDismissConfirmation, attemptingTxn: attemptingTxn, hash: txHash ? txHash : '', content: function () { return (react_1["default"].createElement(TransactionConfirmationModal_1.ConfirmationModalContent, { title: 'You will receive', onDismiss: handleDismissConfirmation, topContent: modalHeader, bottomContent: modalBottom })); }, pendingText: pendingText }),
                react_1["default"].createElement(Column_1.AutoColumn, { gap: "md" },
                    react_1["default"].createElement(Card_1.LightCard, null,
                        react_1["default"].createElement(Column_1.AutoColumn, { gap: "20px" },
                            react_1["default"].createElement(Row_1.RowBetween, null,
                                react_1["default"].createElement(rebass_1.Text, { fontWeight: 500 }, "Amount"),
                                react_1["default"].createElement(styleds_1.ClickableText, { fontWeight: 500, onClick: function () {
                                        setShowDetailed(!showDetailed);
                                    } }, showDetailed ? 'Simple' : 'Detailed')),
                            react_1["default"].createElement(Row_1["default"], { style: { alignItems: 'flex-end' } },
                                react_1["default"].createElement(rebass_1.Text, { fontSize: 72, fontWeight: 500 },
                                    formattedAmounts[actions_1.Field.LIQUIDITY_PERCENT],
                                    "%")),
                            !showDetailed && (react_1["default"].createElement(react_1["default"].Fragment, null,
                                react_1["default"].createElement(Slider_1["default"], { value: innerLiquidityPercentage, onChange: setInnerLiquidityPercentage }),
                                react_1["default"].createElement(Row_1.RowBetween, null,
                                    react_1["default"].createElement(styleds_1.MaxButton, { onClick: function () { return onUserInput(actions_1.Field.LIQUIDITY_PERCENT, '25'); }, width: "20%" }, "25%"),
                                    react_1["default"].createElement(styleds_1.MaxButton, { onClick: function () { return onUserInput(actions_1.Field.LIQUIDITY_PERCENT, '50'); }, width: "20%" }, "50%"),
                                    react_1["default"].createElement(styleds_1.MaxButton, { onClick: function () { return onUserInput(actions_1.Field.LIQUIDITY_PERCENT, '75'); }, width: "20%" }, "75%"),
                                    react_1["default"].createElement(styleds_1.MaxButton, { onClick: function () { return onUserInput(actions_1.Field.LIQUIDITY_PERCENT, '100'); }, width: "20%" }, "Max")))))),
                    !showDetailed && (react_1["default"].createElement(react_1["default"].Fragment, null,
                        react_1["default"].createElement(Column_1.ColumnCenter, null,
                            react_1["default"].createElement(react_feather_1.ArrowDown, { size: "16", color: theme.text2 })),
                        react_1["default"].createElement(Card_1.LightCard, null,
                            react_1["default"].createElement(Column_1.AutoColumn, { gap: "10px" },
                                react_1["default"].createElement(Row_1.RowBetween, null,
                                    react_1["default"].createElement(rebass_1.Text, { fontSize: 24, fontWeight: 500 }, formattedAmounts[actions_1.Field.CURRENCY_A] || '-'),
                                    react_1["default"].createElement(Row_1.RowFixed, null,
                                        react_1["default"].createElement(CurrencyLogo_1["default"], { currency: currencyA, style: { marginRight: '12px' } }),
                                        react_1["default"].createElement(rebass_1.Text, { fontSize: 24, fontWeight: 500, id: "remove-liquidity-tokena-symbol" }, currencyA === null || currencyA === void 0 ? void 0 : currencyA.symbol))),
                                react_1["default"].createElement(Row_1.RowBetween, null,
                                    react_1["default"].createElement(rebass_1.Text, { fontSize: 24, fontWeight: 500 }, formattedAmounts[actions_1.Field.CURRENCY_B] || '-'),
                                    react_1["default"].createElement(Row_1.RowFixed, null,
                                        react_1["default"].createElement(CurrencyLogo_1["default"], { currency: currencyB, style: { marginRight: '12px' } }),
                                        react_1["default"].createElement(rebass_1.Text, { fontSize: 24, fontWeight: 500, id: "remove-liquidity-tokenb-symbol" }, currencyB === null || currencyB === void 0 ? void 0 : currencyB.symbol))),
                                chainId && (oneCurrencyIsWETH || oneCurrencyIsETH) ? (react_1["default"].createElement(Row_1.RowBetween, { style: { justifyContent: 'flex-end' } }, oneCurrencyIsETH ? (react_1["default"].createElement(theme_1.StyledInternalLink, { to: "/remove/" + (currencyA === sdk_1.ETHER ? sdk_1.WETH[chainId].address : currencyIdA) + "/" + (currencyB === sdk_1.ETHER ? sdk_1.WETH[chainId].address : currencyIdB) }, "Receive WETH")) : oneCurrencyIsWETH ? (react_1["default"].createElement(theme_1.StyledInternalLink, { to: "/remove/" + (currencyA && sdk_1.currencyEquals(currencyA, sdk_1.WETH[chainId]) ? 'ETH' : currencyIdA) + "/" + (currencyB && sdk_1.currencyEquals(currencyB, sdk_1.WETH[chainId]) ? 'ETH' : currencyIdB) }, "Receive ETH")) : null)) : null)))),
                    showDetailed && (react_1["default"].createElement(react_1["default"].Fragment, null,
                        react_1["default"].createElement(CurrencyInputPanel_1["default"], { value: formattedAmounts[actions_1.Field.LIQUIDITY], onUserInput: onLiquidityInput, onMax: function () {
                                onUserInput(actions_1.Field.LIQUIDITY_PERCENT, '100');
                            }, showMaxButton: !atMaxAmount, disableCurrencySelect: true, currency: pair === null || pair === void 0 ? void 0 : pair.liquidityToken, pair: pair, id: "liquidity-amount" }),
                        react_1["default"].createElement(Column_1.ColumnCenter, null,
                            react_1["default"].createElement(react_feather_1.ArrowDown, { size: "16", color: theme.text2 })),
                        react_1["default"].createElement(CurrencyInputPanel_1["default"], { hideBalance: true, value: formattedAmounts[actions_1.Field.CURRENCY_A], onUserInput: onCurrencyAInput, onMax: function () { return onUserInput(actions_1.Field.LIQUIDITY_PERCENT, '100'); }, showMaxButton: !atMaxAmount, currency: currencyA, label: 'Output', onCurrencySelect: handleSelectCurrencyA, id: "remove-liquidity-tokena" }),
                        react_1["default"].createElement(Column_1.ColumnCenter, null,
                            react_1["default"].createElement(react_feather_1.Plus, { size: "16", color: theme.text2 })),
                        react_1["default"].createElement(CurrencyInputPanel_1["default"], { hideBalance: true, value: formattedAmounts[actions_1.Field.CURRENCY_B], onUserInput: onCurrencyBInput, onMax: function () { return onUserInput(actions_1.Field.LIQUIDITY_PERCENT, '100'); }, showMaxButton: !atMaxAmount, currency: currencyB, label: 'Output', onCurrencySelect: handleSelectCurrencyB, id: "remove-liquidity-tokenb" }))),
                    pair && (react_1["default"].createElement("div", { style: { padding: '10px 20px' } },
                        react_1["default"].createElement(Row_1.RowBetween, null,
                            "Price:",
                            react_1["default"].createElement("div", null,
                                "1 ", currencyA === null || currencyA === void 0 ? void 0 :
                                currencyA.symbol,
                                " = ",
                                tokenA ? pair.priceOf(tokenA).toSignificant(6) : '-',
                                " ", currencyB === null || currencyB === void 0 ? void 0 :
                                currencyB.symbol)),
                        react_1["default"].createElement(Row_1.RowBetween, null,
                            react_1["default"].createElement("div", null),
                            react_1["default"].createElement("div", null,
                                "1 ", currencyB === null || currencyB === void 0 ? void 0 :
                                currencyB.symbol,
                                " = ",
                                tokenB ? pair.priceOf(tokenB).toSignificant(6) : '-',
                                " ", currencyA === null || currencyA === void 0 ? void 0 :
                                currencyA.symbol)))),
                    react_1["default"].createElement("div", { style: { position: 'relative' } }, !account ? (react_1["default"].createElement(Button_1.ButtonLight, { onClick: toggleWalletModal }, "Connect Wallet")) : (react_1["default"].createElement(Row_1.RowBetween, null,
                        react_1["default"].createElement(Button_1.ButtonConfirmed, { onClick: onAttemptToApprove, confirmed: approval === useApproveCallback_1.ApprovalState.APPROVED || signatureData !== null, disabled: approval !== useApproveCallback_1.ApprovalState.NOT_APPROVED || signatureData !== null, mr: "0.5rem", fontWeight: 500, fontSize: 16 }, approval === useApproveCallback_1.ApprovalState.PENDING ? (react_1["default"].createElement(styleds_2.Dots, null, "Approving")) : approval === useApproveCallback_1.ApprovalState.APPROVED || signatureData !== null ? ('Approved') : ('Approve')),
                        react_1["default"].createElement(Button_1.ButtonError, { onClick: function () {
                                setShowConfirm(true);
                            }, disabled: !isValid || (signatureData === null && approval !== useApproveCallback_1.ApprovalState.APPROVED), error: !isValid && !!parsedAmounts[actions_1.Field.CURRENCY_A] && !!parsedAmounts[actions_1.Field.CURRENCY_B] },
                            react_1["default"].createElement(rebass_1.Text, { fontSize: 16, fontWeight: 500 }, error || 'Remove')))))))),
        pair ? (react_1["default"].createElement(Column_1.AutoColumn, { style: { minWidth: '20rem', marginTop: '1rem' } },
            react_1["default"].createElement(PositionCard_1.MinimalPositionCard, { showUnwrapped: oneCurrencyIsWETH, pair: pair }))) : null));
}
exports["default"] = RemoveLiquidity;
