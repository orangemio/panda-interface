"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var bignumber_1 = require("@ethersproject/bignumber");
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
var constants_1 = require("../../constants");
var Reserves_1 = require("../../data/Reserves");
var hooks_1 = require("../../hooks");
var Tokens_1 = require("../../hooks/Tokens");
var useApproveCallback_1 = require("../../hooks/useApproveCallback");
var hooks_2 = require("../../state/application/hooks");
var actions_1 = require("../../state/mint/actions");
var hooks_3 = require("../../state/mint/hooks");
var hooks_4 = require("../../state/transactions/hooks");
var hooks_5 = require("../../state/user/hooks");
var theme_1 = require("../../theme");
var utils_1 = require("../../utils");
var maxAmountSpend_1 = require("../../utils/maxAmountSpend");
var wrappedCurrency_1 = require("../../utils/wrappedCurrency");
var AppBody_1 = require("../AppBody");
var styleds_1 = require("../Pool/styleds");
var ConfirmAddModalBottom_1 = require("./ConfirmAddModalBottom");
var currencyId_1 = require("../../utils/currencyId");
var PoolPriceBar_1 = require("./PoolPriceBar");
function AddLiquidity(_a) {
    var _b;
    var _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    var _o = _a.match.params, currencyIdA = _o.currencyIdA, currencyIdB = _o.currencyIdB, history = _a.history;
    var _p = hooks_1.useActiveWeb3React(), account = _p.account, chainId = _p.chainId, library = _p.library;
    var theme = react_1.useContext(styled_components_1.ThemeContext);
    var currencyA = Tokens_1.useCurrency(currencyIdA);
    var currencyB = Tokens_1.useCurrency(currencyIdB);
    var oneCurrencyIsWETH = Boolean(chainId &&
        ((currencyA && sdk_1.currencyEquals(currencyA, sdk_1.WETH[chainId])) ||
            (currencyB && sdk_1.currencyEquals(currencyB, sdk_1.WETH[chainId]))));
    var toggleWalletModal = hooks_2.useWalletModalToggle(); // toggle wallet when disconnected
    var expertMode = hooks_5.useIsExpertMode();
    // mint state
    var _q = hooks_3.useMintState(), independentField = _q.independentField, typedValue = _q.typedValue, otherTypedValue = _q.otherTypedValue;
    var _r = hooks_3.useDerivedMintInfo(currencyA !== null && currencyA !== void 0 ? currencyA : undefined, currencyB !== null && currencyB !== void 0 ? currencyB : undefined), dependentField = _r.dependentField, currencies = _r.currencies, pair = _r.pair, pairState = _r.pairState, currencyBalances = _r.currencyBalances, parsedAmounts = _r.parsedAmounts, price = _r.price, noLiquidity = _r.noLiquidity, liquidityMinted = _r.liquidityMinted, poolTokenPercentage = _r.poolTokenPercentage, error = _r.error;
    var _s = hooks_3.useMintActionHandlers(noLiquidity), onFieldAInput = _s.onFieldAInput, onFieldBInput = _s.onFieldBInput;
    var isValid = !error;
    // modal and loading
    var _t = react_1.useState(false), showConfirm = _t[0], setShowConfirm = _t[1];
    var _u = react_1.useState(false), attemptingTxn = _u[0], setAttemptingTxn = _u[1]; // clicked confirm
    // txn values
    var deadline = hooks_5.useUserDeadline()[0]; // custom from users settings
    var allowedSlippage = hooks_5.useUserSlippageTolerance()[0]; // custom from users
    var _v = react_1.useState(''), txHash = _v[0], setTxHash = _v[1];
    // get formatted amounts
    var formattedAmounts = (_b = {},
        _b[independentField] = typedValue,
        _b[dependentField] = noLiquidity ? otherTypedValue : (_d = (_c = parsedAmounts[dependentField]) === null || _c === void 0 ? void 0 : _c.toSignificant(6)) !== null && _d !== void 0 ? _d : '',
        _b);
    // get the max amounts user can add
    var maxAmounts = [actions_1.Field.CURRENCY_A, actions_1.Field.CURRENCY_B].reduce(function (accumulator, field) {
        var _a;
        return __assign(__assign({}, accumulator), (_a = {}, _a[field] = maxAmountSpend_1.maxAmountSpend(currencyBalances[field]), _a));
    }, {});
    var atMaxAmounts = [actions_1.Field.CURRENCY_A, actions_1.Field.CURRENCY_B].reduce(function (accumulator, field) {
        var _a;
        var _b, _c;
        return __assign(__assign({}, accumulator), (_a = {}, _a[field] = (_b = maxAmounts[field]) === null || _b === void 0 ? void 0 : _b.equalTo((_c = parsedAmounts[field]) !== null && _c !== void 0 ? _c : '0'), _a));
    }, {});
    // check whether the user has approved the router on the tokens
    var _w = useApproveCallback_1.useApproveCallback(parsedAmounts[actions_1.Field.CURRENCY_A], constants_1.ROUTER_ADDRESS), approvalA = _w[0], approveACallback = _w[1];
    var _x = useApproveCallback_1.useApproveCallback(parsedAmounts[actions_1.Field.CURRENCY_B], constants_1.ROUTER_ADDRESS), approvalB = _x[0], approveBCallback = _x[1];
    var addTransaction = hooks_4.useTransactionAdder();
    function onAdd() {
        var _a, _b, _c, _d, _e, _f;
        return __awaiter(this, void 0, void 0, function () {
            var router, _g, _h, parsedAmountA, _j, parsedAmountB, amountsMin, deadlineFromNow, estimate, method, args, value, tokenBIsETH;
            var _k;
            return __generator(this, function (_l) {
                switch (_l.label) {
                    case 0:
                        if (!chainId || !library || !account)
                            return [2 /*return*/];
                        router = utils_1.getRouterContract(chainId, library, account);
                        _g = parsedAmounts, _h = actions_1.Field.CURRENCY_A, parsedAmountA = _g[_h], _j = actions_1.Field.CURRENCY_B, parsedAmountB = _g[_j];
                        if (!parsedAmountA || !parsedAmountB || !currencyA || !currencyB) {
                            return [2 /*return*/];
                        }
                        amountsMin = (_k = {},
                            _k[actions_1.Field.CURRENCY_A] = utils_1.calculateSlippageAmount(parsedAmountA, noLiquidity ? 0 : allowedSlippage)[0],
                            _k[actions_1.Field.CURRENCY_B] = utils_1.calculateSlippageAmount(parsedAmountB, noLiquidity ? 0 : allowedSlippage)[0],
                            _k);
                        deadlineFromNow = Math.ceil(Date.now() / 1000) + deadline;
                        if (currencyA === sdk_1.ETHER || currencyB === sdk_1.ETHER) {
                            tokenBIsETH = currencyB === sdk_1.ETHER;
                            estimate = router.estimateGas.addLiquidityETH;
                            method = router.addLiquidityETH;
                            args = [
                                (_b = (_a = wrappedCurrency_1.wrappedCurrency(tokenBIsETH ? currencyA : currencyB, chainId)) === null || _a === void 0 ? void 0 : _a.address) !== null && _b !== void 0 ? _b : '',
                                (tokenBIsETH ? parsedAmountA : parsedAmountB).raw.toString(),
                                amountsMin[tokenBIsETH ? actions_1.Field.CURRENCY_A : actions_1.Field.CURRENCY_B].toString(),
                                amountsMin[tokenBIsETH ? actions_1.Field.CURRENCY_B : actions_1.Field.CURRENCY_A].toString(),
                                account,
                                deadlineFromNow
                            ];
                            value = bignumber_1.BigNumber.from((tokenBIsETH ? parsedAmountB : parsedAmountA).raw.toString());
                        }
                        else {
                            estimate = router.estimateGas.addLiquidity;
                            method = router.addLiquidity;
                            args = [
                                (_d = (_c = wrappedCurrency_1.wrappedCurrency(currencyA, chainId)) === null || _c === void 0 ? void 0 : _c.address) !== null && _d !== void 0 ? _d : '',
                                (_f = (_e = wrappedCurrency_1.wrappedCurrency(currencyB, chainId)) === null || _e === void 0 ? void 0 : _e.address) !== null && _f !== void 0 ? _f : '',
                                parsedAmountA.raw.toString(),
                                parsedAmountB.raw.toString(),
                                amountsMin[actions_1.Field.CURRENCY_A].toString(),
                                amountsMin[actions_1.Field.CURRENCY_B].toString(),
                                account,
                                deadlineFromNow
                            ];
                            console.log(args);
                            value = null;
                        }
                        setAttemptingTxn(true);
                        return [4 /*yield*/, estimate.apply(void 0, __spreadArrays(args, [value ? { value: value } : {}])).then(function (estimatedGasLimit) {
                                return method.apply(void 0, __spreadArrays(args, [__assign(__assign({}, (value ? { value: value } : {})), { gasLimit: utils_1.calculateGasMargin(estimatedGasLimit) })])).then(function (response) {
                                    var _a, _b, _c, _d, _e, _f;
                                    setAttemptingTxn(false);
                                    addTransaction(response, {
                                        summary: 'Add ' + ((_a = parsedAmounts[actions_1.Field.CURRENCY_A]) === null || _a === void 0 ? void 0 : _a.toSignificant(3)) +
                                            ' ' + ((_b = currencies[actions_1.Field.CURRENCY_A]) === null || _b === void 0 ? void 0 : _b.symbol) +
                                            ' and ' + ((_c = parsedAmounts[actions_1.Field.CURRENCY_B]) === null || _c === void 0 ? void 0 : _c.toSignificant(3)) +
                                            ' ' + ((_d = currencies[actions_1.Field.CURRENCY_B]) === null || _d === void 0 ? void 0 : _d.symbol)
                                    });
                                    setTxHash(response.hash);
                                    react_ga_1["default"].event({
                                        category: 'Liquidity',
                                        action: 'Add',
                                        label: [(_e = currencies[actions_1.Field.CURRENCY_A]) === null || _e === void 0 ? void 0 : _e.symbol, (_f = currencies[actions_1.Field.CURRENCY_B]) === null || _f === void 0 ? void 0 : _f.symbol].join('/')
                                    });
                                });
                            })["catch"](function (error) {
                                setAttemptingTxn(false);
                                // we only care if the error is something _other_ than the user rejected the tx
                                if ((error === null || error === void 0 ? void 0 : error.code) !== 4001) {
                                    console.error(error);
                                }
                            })];
                    case 1:
                        _l.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    var modalHeader = function () {
        var _a, _b, _c, _d;
        return noLiquidity ? (react_1["default"].createElement(Column_1.AutoColumn, { gap: "20px" },
            react_1["default"].createElement(Card_1.LightCard, { mt: "20px", borderRadius: "20px" },
                react_1["default"].createElement(Row_1.RowFlat, null,
                    react_1["default"].createElement(rebass_1.Text, { fontSize: "48px", fontWeight: 500, lineHeight: "42px", marginRight: 10 }, ((_a = currencies[actions_1.Field.CURRENCY_A]) === null || _a === void 0 ? void 0 : _a.symbol) + '/' + ((_b = currencies[actions_1.Field.CURRENCY_B]) === null || _b === void 0 ? void 0 : _b.symbol)),
                    react_1["default"].createElement(DoubleLogo_1["default"], { currency0: currencies[actions_1.Field.CURRENCY_A], currency1: currencies[actions_1.Field.CURRENCY_B], size: 30 }))))) : (react_1["default"].createElement(Column_1.AutoColumn, { gap: "20px" },
            react_1["default"].createElement(Row_1.RowFlat, { style: { marginTop: '20px' } },
                react_1["default"].createElement(rebass_1.Text, { fontSize: "48px", fontWeight: 500, lineHeight: "42px", marginRight: 10 }, liquidityMinted === null || liquidityMinted === void 0 ? void 0 : liquidityMinted.toSignificant(6)),
                react_1["default"].createElement(DoubleLogo_1["default"], { currency0: currencies[actions_1.Field.CURRENCY_A], currency1: currencies[actions_1.Field.CURRENCY_B], size: 30 })),
            react_1["default"].createElement(Row_1["default"], null,
                react_1["default"].createElement(rebass_1.Text, { fontSize: "24px" }, ((_c = currencies[actions_1.Field.CURRENCY_A]) === null || _c === void 0 ? void 0 : _c.symbol) + '/' + ((_d = currencies[actions_1.Field.CURRENCY_B]) === null || _d === void 0 ? void 0 : _d.symbol) + ' Pool Tokens')),
            react_1["default"].createElement(theme_1.TYPE.italic, { fontSize: 12, textAlign: "left", padding: '8px 0 0 0 ' }, "Output is estimated. If the price changes by more than " + allowedSlippage /
                100 + "% your transaction will revert.")));
    };
    var modalBottom = function () {
        return (react_1["default"].createElement(ConfirmAddModalBottom_1.ConfirmAddModalBottom, { price: price, currencies: currencies, parsedAmounts: parsedAmounts, noLiquidity: noLiquidity, onAdd: onAdd, poolTokenPercentage: poolTokenPercentage }));
    };
    var pendingText = "Supplying " + ((_e = parsedAmounts[actions_1.Field.CURRENCY_A]) === null || _e === void 0 ? void 0 : _e.toSignificant(6)) + " " + ((_f = currencies[actions_1.Field.CURRENCY_A]) === null || _f === void 0 ? void 0 : _f.symbol) + " and " + ((_g = parsedAmounts[actions_1.Field.CURRENCY_B]) === null || _g === void 0 ? void 0 : _g.toSignificant(6)) + " " + ((_h = currencies[actions_1.Field.CURRENCY_B]) === null || _h === void 0 ? void 0 : _h.symbol);
    var handleCurrencyASelect = react_1.useCallback(function (currencyA) {
        var newCurrencyIdA = currencyId_1.currencyId(currencyA);
        if (newCurrencyIdA === currencyIdB) {
            history.push("/add/" + currencyIdB + "/" + currencyIdA);
        }
        else {
            history.push("/add/" + newCurrencyIdA + "/" + currencyIdB);
        }
    }, [currencyIdB, history, currencyIdA]);
    var handleCurrencyBSelect = react_1.useCallback(function (currencyB) {
        var newCurrencyIdB = currencyId_1.currencyId(currencyB);
        if (currencyIdA === newCurrencyIdB) {
            if (currencyIdB) {
                history.push("/add/" + currencyIdB + "/" + newCurrencyIdB);
            }
            else {
                history.push("/add/" + newCurrencyIdB);
            }
        }
        else {
            history.push("/add/" + (currencyIdA ? currencyIdA : 'ETH') + "/" + newCurrencyIdB);
        }
    }, [currencyIdA, history, currencyIdB]);
    var handleDismissConfirmation = react_1.useCallback(function () {
        setShowConfirm(false);
        // if there was a tx hash, we want to clear the input
        if (txHash) {
            onFieldAInput('');
        }
        setTxHash('');
    }, [onFieldAInput, txHash]);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(AppBody_1["default"], null,
            react_1["default"].createElement(NavigationTabs_1.AddRemoveTabs, { adding: true }),
            react_1["default"].createElement(styleds_1.Wrapper, null,
                react_1["default"].createElement(TransactionConfirmationModal_1["default"], { isOpen: showConfirm, onDismiss: handleDismissConfirmation, attemptingTxn: attemptingTxn, hash: txHash, content: function () { return (react_1["default"].createElement(TransactionConfirmationModal_1.ConfirmationModalContent, { title: noLiquidity ? 'You are creating a pool' : 'You will receive', onDismiss: handleDismissConfirmation, topContent: modalHeader, bottomContent: modalBottom })); }, pendingText: pendingText }),
                react_1["default"].createElement(Column_1.AutoColumn, { gap: "20px" },
                    noLiquidity && (react_1["default"].createElement(Column_1.ColumnCenter, null,
                        react_1["default"].createElement(Card_1.BlueCard, null,
                            react_1["default"].createElement(Column_1.AutoColumn, { gap: "10px" },
                                react_1["default"].createElement(theme_1.TYPE.link, { fontWeight: 600, color: 'primaryText1' }, "You are the first liquidity provider."),
                                react_1["default"].createElement(theme_1.TYPE.link, { fontWeight: 400, color: 'primaryText1' }, "The ratio of tokens you add will set the price of this pool."),
                                react_1["default"].createElement(theme_1.TYPE.link, { fontWeight: 400, color: 'primaryText1' }, "Once you are happy with the rate click supply to review."))))),
                    react_1["default"].createElement(CurrencyInputPanel_1["default"], { value: formattedAmounts[actions_1.Field.CURRENCY_A], onUserInput: onFieldAInput, onMax: function () {
                            var _a, _b;
                            onFieldAInput((_b = (_a = maxAmounts[actions_1.Field.CURRENCY_A]) === null || _a === void 0 ? void 0 : _a.toExact()) !== null && _b !== void 0 ? _b : '');
                        }, onCurrencySelect: handleCurrencyASelect, showMaxButton: !atMaxAmounts[actions_1.Field.CURRENCY_A], currency: currencies[actions_1.Field.CURRENCY_A], id: "add-liquidity-input-tokena", showCommonBases: true }),
                    react_1["default"].createElement(Column_1.ColumnCenter, null,
                        react_1["default"].createElement(react_feather_1.Plus, { size: "16", color: theme.text2 })),
                    react_1["default"].createElement(CurrencyInputPanel_1["default"], { value: formattedAmounts[actions_1.Field.CURRENCY_B], onUserInput: onFieldBInput, onCurrencySelect: handleCurrencyBSelect, onMax: function () {
                            var _a, _b;
                            onFieldBInput((_b = (_a = maxAmounts[actions_1.Field.CURRENCY_B]) === null || _a === void 0 ? void 0 : _a.toExact()) !== null && _b !== void 0 ? _b : '');
                        }, showMaxButton: !atMaxAmounts[actions_1.Field.CURRENCY_B], currency: currencies[actions_1.Field.CURRENCY_B], id: "add-liquidity-input-tokenb", showCommonBases: true }),
                    currencies[actions_1.Field.CURRENCY_A] && currencies[actions_1.Field.CURRENCY_B] && pairState !== Reserves_1.PairState.INVALID && (react_1["default"].createElement(react_1["default"].Fragment, null,
                        react_1["default"].createElement(Card_1.GreyCard, { padding: "0px", borderRadius: '20px' },
                            react_1["default"].createElement(Row_1.RowBetween, { padding: "1rem" },
                                react_1["default"].createElement(theme_1.TYPE.subHeader, { fontWeight: 500, fontSize: 14 },
                                    noLiquidity ? 'Initial prices' : 'Prices',
                                    " and pool share")),
                            ' ',
                            react_1["default"].createElement(Card_1.LightCard, { padding: "1rem", borderRadius: '20px' },
                                react_1["default"].createElement(PoolPriceBar_1.PoolPriceBar, { currencies: currencies, poolTokenPercentage: poolTokenPercentage, noLiquidity: noLiquidity, price: price }))))),
                    !account ? (react_1["default"].createElement(Button_1.ButtonLight, { onClick: toggleWalletModal }, "Connect Wallet")) : (react_1["default"].createElement(Column_1.AutoColumn, { gap: 'md' },
                        (approvalA === useApproveCallback_1.ApprovalState.NOT_APPROVED ||
                            approvalA === useApproveCallback_1.ApprovalState.PENDING ||
                            approvalB === useApproveCallback_1.ApprovalState.NOT_APPROVED ||
                            approvalB === useApproveCallback_1.ApprovalState.PENDING) &&
                            isValid && (react_1["default"].createElement(Row_1.RowBetween, null,
                            approvalA !== useApproveCallback_1.ApprovalState.APPROVED && (react_1["default"].createElement(Button_1.ButtonPrimary, { onClick: approveACallback, disabled: approvalA === useApproveCallback_1.ApprovalState.PENDING, width: approvalB !== useApproveCallback_1.ApprovalState.APPROVED ? '48%' : '100%' }, approvalA === useApproveCallback_1.ApprovalState.PENDING ? (react_1["default"].createElement(styleds_1.Dots, null,
                                "Approving ", (_j = currencies[actions_1.Field.CURRENCY_A]) === null || _j === void 0 ? void 0 :
                                _j.symbol)) : ('Approve ' + ((_k = currencies[actions_1.Field.CURRENCY_A]) === null || _k === void 0 ? void 0 : _k.symbol)))),
                            approvalB !== useApproveCallback_1.ApprovalState.APPROVED && (react_1["default"].createElement(Button_1.ButtonPrimary, { onClick: approveBCallback, disabled: approvalB === useApproveCallback_1.ApprovalState.PENDING, width: approvalA !== useApproveCallback_1.ApprovalState.APPROVED ? '48%' : '100%' }, approvalB === useApproveCallback_1.ApprovalState.PENDING ? (react_1["default"].createElement(styleds_1.Dots, null,
                                "Approving ", (_l = currencies[actions_1.Field.CURRENCY_B]) === null || _l === void 0 ? void 0 :
                                _l.symbol)) : ('Approve ' + ((_m = currencies[actions_1.Field.CURRENCY_B]) === null || _m === void 0 ? void 0 : _m.symbol)))))),
                        react_1["default"].createElement(Button_1.ButtonError, { onClick: function () {
                                expertMode ? onAdd() : setShowConfirm(true);
                            }, disabled: !isValid || approvalA !== useApproveCallback_1.ApprovalState.APPROVED || approvalB !== useApproveCallback_1.ApprovalState.APPROVED, error: !isValid && !!parsedAmounts[actions_1.Field.CURRENCY_A] && !!parsedAmounts[actions_1.Field.CURRENCY_B] },
                            react_1["default"].createElement(rebass_1.Text, { fontSize: 20, fontWeight: 500 }, error !== null && error !== void 0 ? error : 'Supply'))))))),
        pair && !noLiquidity && pairState !== Reserves_1.PairState.INVALID ? (react_1["default"].createElement(Column_1.AutoColumn, { style: { minWidth: '20rem', marginTop: '1rem' } },
            react_1["default"].createElement(PositionCard_1.MinimalPositionCard, { showUnwrapped: oneCurrencyIsWETH, pair: pair }))) : null));
}
exports["default"] = AddLiquidity;
