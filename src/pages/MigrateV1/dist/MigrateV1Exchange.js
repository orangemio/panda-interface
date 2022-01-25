"use strict";
exports.__esModule = true;
exports.V1LiquidityInfo = void 0;
var constants_1 = require("@ethersproject/constants");
var sdk_1 = require("@uniswap/sdk");
var react_1 = require("react");
var react_ga_1 = require("react-ga");
var react_router_1 = require("react-router");
var rebass_1 = require("rebass");
var Button_1 = require("../../components/Button");
var Card_1 = require("../../components/Card");
var Column_1 = require("../../components/Column");
var CurrencyLogo_1 = require("../../components/CurrencyLogo");
var QuestionHelper_1 = require("../../components/QuestionHelper");
var Row_1 = require("../../components/Row");
var styleds_1 = require("../../components/swap/styleds");
var constants_2 = require("../../constants");
var migrator_1 = require("../../constants/abis/migrator");
var Reserves_1 = require("../../data/Reserves");
var TotalSupply_1 = require("../../data/TotalSupply");
var hooks_1 = require("../../hooks");
var Tokens_1 = require("../../hooks/Tokens");
var useApproveCallback_1 = require("../../hooks/useApproveCallback");
var useContract_1 = require("../../hooks/useContract");
var hooks_2 = require("../../state/multicall/hooks");
var hooks_3 = require("../../state/transactions/hooks");
var hooks_4 = require("../../state/wallet/hooks");
var theme_1 = require("../../theme");
var utils_1 = require("../../utils");
var AppBody_1 = require("../AppBody");
var EmptyState_1 = require("./EmptyState");
var POOL_CURRENCY_AMOUNT_MIN = new sdk_1.Fraction(sdk_1.JSBI.BigInt(1), sdk_1.JSBI.BigInt(1000000));
var WEI_DENOM = sdk_1.JSBI.exponentiate(sdk_1.JSBI.BigInt(10), sdk_1.JSBI.BigInt(18));
var ZERO = sdk_1.JSBI.BigInt(0);
var ONE = sdk_1.JSBI.BigInt(1);
var ZERO_FRACTION = new sdk_1.Fraction(ZERO, ONE);
var ALLOWED_OUTPUT_MIN_PERCENT = new sdk_1.Percent(sdk_1.JSBI.BigInt(10000 - constants_2.INITIAL_ALLOWED_SLIPPAGE), sdk_1.JSBI.BigInt(10000));
function FormattedPoolCurrencyAmount(_a) {
    var currencyAmount = _a.currencyAmount;
    return (react_1["default"].createElement(react_1["default"].Fragment, null, currencyAmount.equalTo(sdk_1.JSBI.BigInt(0))
        ? '0'
        : currencyAmount.greaterThan(POOL_CURRENCY_AMOUNT_MIN)
            ? currencyAmount.toSignificant(4)
            : "<" + POOL_CURRENCY_AMOUNT_MIN.toSignificant(1)));
}
function V1LiquidityInfo(_a) {
    var token = _a.token, liquidityTokenAmount = _a.liquidityTokenAmount, tokenWorth = _a.tokenWorth, ethWorth = _a.ethWorth;
    var chainId = hooks_1.useActiveWeb3React().chainId;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(Row_1.AutoRow, { style: { justifyContent: 'flex-start', width: 'fit-content' } },
            react_1["default"].createElement(CurrencyLogo_1["default"], { size: "24px", currency: token }),
            react_1["default"].createElement("div", { style: { marginLeft: '.75rem' } },
                react_1["default"].createElement(theme_1.TYPE.mediumHeader, null,
                    react_1["default"].createElement(FormattedPoolCurrencyAmount, { currencyAmount: liquidityTokenAmount }),
                    ' ',
                    chainId && token.equals(sdk_1.WETH[chainId]) ? 'WETH' : token.symbol,
                    "/ETH"))),
        react_1["default"].createElement(Row_1.RowBetween, { my: "1rem" },
            react_1["default"].createElement(rebass_1.Text, { fontSize: 16, fontWeight: 500 },
                "Pooled ",
                chainId && token.equals(sdk_1.WETH[chainId]) ? 'WETH' : token.symbol,
                ":"),
            react_1["default"].createElement(Row_1.RowFixed, null,
                react_1["default"].createElement(rebass_1.Text, { fontSize: 16, fontWeight: 500, marginLeft: '6px' }, tokenWorth.toSignificant(4)),
                react_1["default"].createElement(CurrencyLogo_1["default"], { size: "20px", style: { marginLeft: '8px' }, currency: token }))),
        react_1["default"].createElement(Row_1.RowBetween, { mb: "1rem" },
            react_1["default"].createElement(rebass_1.Text, { fontSize: 16, fontWeight: 500 }, "Pooled ETH:"),
            react_1["default"].createElement(Row_1.RowFixed, null,
                react_1["default"].createElement(rebass_1.Text, { fontSize: 16, fontWeight: 500, marginLeft: '6px' },
                    react_1["default"].createElement(FormattedPoolCurrencyAmount, { currencyAmount: ethWorth })),
                react_1["default"].createElement(CurrencyLogo_1["default"], { size: "20px", style: { marginLeft: '8px' }, currency: sdk_1.Currency.ETHER })))));
}
exports.V1LiquidityInfo = V1LiquidityInfo;
function V1PairMigration(_a) {
    var _b, _c, _d, _e;
    var liquidityTokenAmount = _a.liquidityTokenAmount, token = _a.token;
    var _f = hooks_1.useActiveWeb3React(), account = _f.account, chainId = _f.chainId;
    var totalSupply = TotalSupply_1.useTotalSupply(liquidityTokenAmount.token);
    var exchangeETHBalance = (_b = hooks_4.useETHBalances([liquidityTokenAmount.token.address])) === null || _b === void 0 ? void 0 : _b[liquidityTokenAmount.token.address];
    var exchangeTokenBalance = hooks_4.useTokenBalance(liquidityTokenAmount.token.address, token);
    var _g = Reserves_1.usePair(chainId ? sdk_1.WETH[chainId] : undefined, token), v2PairState = _g[0], v2Pair = _g[1];
    var isFirstLiquidityProvider = v2PairState === Reserves_1.PairState.NOT_EXISTS;
    var v2SpotPrice = chainId && v2Pair ? v2Pair.reserveOf(token).divide(v2Pair.reserveOf(sdk_1.WETH[chainId])) : undefined;
    var _h = react_1.useState(false), confirmingMigration = _h[0], setConfirmingMigration = _h[1];
    var _j = react_1.useState(null), pendingMigrationHash = _j[0], setPendingMigrationHash = _j[1];
    var shareFraction = totalSupply ? new sdk_1.Percent(liquidityTokenAmount.raw, totalSupply.raw) : ZERO_FRACTION;
    var ethWorth = exchangeETHBalance
        ? sdk_1.CurrencyAmount.ether(exchangeETHBalance.multiply(shareFraction).multiply(WEI_DENOM).quotient)
        : sdk_1.CurrencyAmount.ether(ZERO);
    var tokenWorth = exchangeTokenBalance
        ? new sdk_1.TokenAmount(token, shareFraction.multiply(exchangeTokenBalance.raw).quotient)
        : new sdk_1.TokenAmount(token, ZERO);
    var _k = useApproveCallback_1.useApproveCallback(liquidityTokenAmount, migrator_1.MIGRATOR_ADDRESS), approval = _k[0], approve = _k[1];
    var v1SpotPrice = exchangeTokenBalance && exchangeETHBalance
        ? exchangeTokenBalance.divide(new sdk_1.Fraction(exchangeETHBalance.raw, WEI_DENOM))
        : null;
    var priceDifferenceFraction = v1SpotPrice && v2SpotPrice
        ? v1SpotPrice
            .divide(v2SpotPrice)
            .multiply('100')
            .subtract('100')
        : undefined;
    var priceDifferenceAbs = (priceDifferenceFraction === null || priceDifferenceFraction === void 0 ? void 0 : priceDifferenceFraction.lessThan(ZERO)) ? priceDifferenceFraction === null || priceDifferenceFraction === void 0 ? void 0 : priceDifferenceFraction.multiply('-1') : priceDifferenceFraction;
    var minAmountETH = v2SpotPrice && tokenWorth
        ? tokenWorth
            .divide(v2SpotPrice)
            .multiply(WEI_DENOM)
            .multiply(ALLOWED_OUTPUT_MIN_PERCENT).quotient
        : ethWorth === null || ethWorth === void 0 ? void 0 : ethWorth.numerator;
    var minAmountToken = v2SpotPrice && ethWorth
        ? ethWorth
            .multiply(v2SpotPrice)
            .multiply(sdk_1.JSBI.exponentiate(sdk_1.JSBI.BigInt(10), sdk_1.JSBI.BigInt(token.decimals)))
            .multiply(ALLOWED_OUTPUT_MIN_PERCENT).quotient
        : tokenWorth === null || tokenWorth === void 0 ? void 0 : tokenWorth.numerator;
    var addTransaction = hooks_3.useTransactionAdder();
    var isMigrationPending = hooks_3.useIsTransactionPending(pendingMigrationHash !== null && pendingMigrationHash !== void 0 ? pendingMigrationHash : undefined);
    var migrator = useContract_1.useV2MigratorContract();
    var migrate = react_1.useCallback(function () {
        if (!minAmountToken || !minAmountETH || !migrator)
            return;
        setConfirmingMigration(true);
        migrator
            .migrate(token.address, minAmountToken.toString(), minAmountETH.toString(), account, Math.floor(new Date().getTime() / 1000) + constants_2.DEFAULT_DEADLINE_FROM_NOW)
            .then(function (response) {
            react_ga_1["default"].event({
                category: 'Migrate',
                action: 'V1->V2',
                label: token === null || token === void 0 ? void 0 : token.symbol
            });
            addTransaction(response, {
                summary: "Migrate " + token.symbol + " liquidity to V2"
            });
            setPendingMigrationHash(response.hash);
        })["catch"](function () {
            setConfirmingMigration(false);
        });
    }, [minAmountToken, minAmountETH, migrator, token, account, addTransaction]);
    var noLiquidityTokens = !!liquidityTokenAmount && liquidityTokenAmount.equalTo(ZERO);
    var largePriceDifference = !!priceDifferenceAbs && !priceDifferenceAbs.lessThan(sdk_1.JSBI.BigInt(5));
    var isSuccessfullyMigrated = !!pendingMigrationHash && noLiquidityTokens;
    return (react_1["default"].createElement(Column_1.AutoColumn, { gap: "20px" },
        react_1["default"].createElement(theme_1.TYPE.body, { my: 9, style: { fontWeight: 400 } },
            "This tool will safely migrate your V1 liquidity to V2 with minimal price risk. The process is completely trustless thanks to the",
            ' ',
            chainId && (react_1["default"].createElement(theme_1.ExternalLink, { href: utils_1.getEtherscanLink(chainId, migrator_1.MIGRATOR_ADDRESS, 'address') },
                react_1["default"].createElement(theme_1.TYPE.blue, { display: "inline" }, "Uniswap migration contract\u2197"))),
            "."),
        !isFirstLiquidityProvider && largePriceDifference ? (react_1["default"].createElement(Card_1.YellowCard, null,
            react_1["default"].createElement(theme_1.TYPE.body, { style: { marginBottom: 8, fontWeight: 400 } },
                "It",
                "'",
                "s best to deposit liquidity into PandaSwap LP Token at a price you believe is correct. If the V2 price seems incorrect, you can either make a swap to move the price or wait for someone else to do so."),
            react_1["default"].createElement(Column_1.AutoColumn, { gap: "8px" },
                react_1["default"].createElement(Row_1.RowBetween, null,
                    react_1["default"].createElement(theme_1.TYPE.body, null, "V1 Price:"),
                    react_1["default"].createElement(theme_1.TYPE.black, null, v1SpotPrice === null || v1SpotPrice === void 0 ? void 0 :
                        v1SpotPrice.toSignificant(6),
                        " ",
                        token.symbol,
                        "/ETH")),
                react_1["default"].createElement(Row_1.RowBetween, null,
                    react_1["default"].createElement("div", null),
                    react_1["default"].createElement(theme_1.TYPE.black, null, (_c = v1SpotPrice === null || v1SpotPrice === void 0 ? void 0 : v1SpotPrice.invert()) === null || _c === void 0 ? void 0 :
                        _c.toSignificant(6),
                        " ETH/",
                        token.symbol)),
                react_1["default"].createElement(Row_1.RowBetween, null,
                    react_1["default"].createElement(theme_1.TYPE.body, null, "V2 Price:"),
                    react_1["default"].createElement(theme_1.TYPE.black, null, v2SpotPrice === null || v2SpotPrice === void 0 ? void 0 :
                        v2SpotPrice.toSignificant(6),
                        " ",
                        token.symbol,
                        "/ETH")),
                react_1["default"].createElement(Row_1.RowBetween, null,
                    react_1["default"].createElement("div", null),
                    react_1["default"].createElement(theme_1.TYPE.black, null, (_d = v2SpotPrice === null || v2SpotPrice === void 0 ? void 0 : v2SpotPrice.invert()) === null || _d === void 0 ? void 0 :
                        _d.toSignificant(6),
                        " ETH/",
                        token.symbol)),
                react_1["default"].createElement(Row_1.RowBetween, null,
                    react_1["default"].createElement(theme_1.TYPE.body, { color: "inherit" }, "Price Difference:"),
                    react_1["default"].createElement(theme_1.TYPE.black, { color: "inherit" }, priceDifferenceAbs === null || priceDifferenceAbs === void 0 ? void 0 :
                        priceDifferenceAbs.toSignificant(4),
                        "%"))))) : null,
        isFirstLiquidityProvider && (react_1["default"].createElement(Card_1.PinkCard, null,
            react_1["default"].createElement(theme_1.TYPE.body, { style: { marginBottom: 8, fontWeight: 400 } }, "You are the first liquidity provider for this pair on PandaSwap LP Token. Your liquidity will be migrated at the current V1 price. Your transaction cost also includes the gas to create the pool."),
            react_1["default"].createElement(Column_1.AutoColumn, { gap: "8px" },
                react_1["default"].createElement(Row_1.RowBetween, null,
                    react_1["default"].createElement(theme_1.TYPE.body, null, "V1 Price:"),
                    react_1["default"].createElement(theme_1.TYPE.black, null, v1SpotPrice === null || v1SpotPrice === void 0 ? void 0 :
                        v1SpotPrice.toSignificant(6),
                        " ",
                        token.symbol,
                        "/ETH")),
                react_1["default"].createElement(Row_1.RowBetween, null,
                    react_1["default"].createElement("div", null),
                    react_1["default"].createElement(theme_1.TYPE.black, null, (_e = v1SpotPrice === null || v1SpotPrice === void 0 ? void 0 : v1SpotPrice.invert()) === null || _e === void 0 ? void 0 :
                        _e.toSignificant(6),
                        " ETH/",
                        token.symbol))))),
        react_1["default"].createElement(Card_1.LightCard, null,
            react_1["default"].createElement(V1LiquidityInfo, { token: token, liquidityTokenAmount: liquidityTokenAmount, tokenWorth: tokenWorth, ethWorth: ethWorth }),
            react_1["default"].createElement("div", { style: { display: 'flex', marginTop: '1rem' } },
                react_1["default"].createElement(Column_1.AutoColumn, { gap: "12px", style: { flex: '1', marginRight: 12 } },
                    react_1["default"].createElement(Button_1.ButtonConfirmed, { confirmed: approval === useApproveCallback_1.ApprovalState.APPROVED, disabled: approval !== useApproveCallback_1.ApprovalState.NOT_APPROVED, onClick: approve }, approval === useApproveCallback_1.ApprovalState.PENDING ? (react_1["default"].createElement(styleds_1.Dots, null, "Approving")) : approval === useApproveCallback_1.ApprovalState.APPROVED ? ('Approved') : ('Approve'))),
                react_1["default"].createElement(Column_1.AutoColumn, { gap: "12px", style: { flex: '1' } },
                    react_1["default"].createElement(Button_1.ButtonConfirmed, { confirmed: isSuccessfullyMigrated, disabled: isSuccessfullyMigrated ||
                            noLiquidityTokens ||
                            isMigrationPending ||
                            approval !== useApproveCallback_1.ApprovalState.APPROVED ||
                            confirmingMigration, onClick: migrate }, isSuccessfullyMigrated ? 'Success' : isMigrationPending ? react_1["default"].createElement(styleds_1.Dots, null, "Migrating") : 'Migrate')))),
        react_1["default"].createElement(theme_1.TYPE.darkGray, { style: { textAlign: 'center' } }, "Your Uniswap V1 " + token.symbol + "/ETH liquidity will become PandaSwap LP Token " + token.symbol + "/ETH liquidity.")));
}
function MigrateV1Exchange(_a) {
    var _b, _c;
    var history = _a.history, address = _a.match.params.address;
    var validatedAddress = utils_1.isAddress(address);
    var _d = hooks_1.useActiveWeb3React(), chainId = _d.chainId, account = _d.account;
    var exchangeContract = useContract_1.useV1ExchangeContract(validatedAddress ? validatedAddress : undefined);
    var tokenAddress = (_c = (_b = hooks_2.useSingleCallResult(exchangeContract, 'tokenAddress', undefined, hooks_2.NEVER_RELOAD)) === null || _b === void 0 ? void 0 : _b.result) === null || _c === void 0 ? void 0 : _c[0];
    var token = Tokens_1.useToken(tokenAddress);
    var liquidityToken = react_1.useMemo(function () {
        return validatedAddress && chainId && token
            ? new sdk_1.Token(chainId, validatedAddress, 18, "UNI-V1-" + token.symbol, 'Uniswap V1')
            : undefined;
    }, [chainId, validatedAddress, token]);
    var userLiquidityBalance = hooks_4.useTokenBalance(account !== null && account !== void 0 ? account : undefined, liquidityToken);
    // redirect for invalid url params
    if (!validatedAddress || tokenAddress === constants_1.AddressZero) {
        console.error('Invalid address in path', address);
        return react_1["default"].createElement(react_router_1.Redirect, { to: "/migrate/v1" });
    }
    return (react_1["default"].createElement(AppBody_1.BodyWrapper, { style: { padding: 24 } },
        react_1["default"].createElement(Column_1.AutoColumn, { gap: "16px" },
            react_1["default"].createElement(Row_1.AutoRow, { style: { alignItems: 'center', justifyContent: 'space-between' }, gap: "8px" },
                react_1["default"].createElement(theme_1.BackArrow, { to: "/migrate/v1" }),
                react_1["default"].createElement(theme_1.TYPE.mediumHeader, null, "Migrate V1 Liquidity"),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement(QuestionHelper_1["default"], { text: "Migrate your liquidity tokens from Uniswap V1 to PandaSwap LP Token." }))),
            !account ? (react_1["default"].createElement(theme_1.TYPE.largeHeader, null, "You must connect an account.")) : validatedAddress && chainId && (token === null || token === void 0 ? void 0 : token.equals(sdk_1.WETH[chainId])) ? (react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement(theme_1.TYPE.body, { my: 9, style: { fontWeight: 400 } }, "Because PandaSwap LP Token uses WETH under the hood, your Uniswap V1 WETH/ETH liquidity cannot be migrated. You may want to remove your liquidity instead."),
                react_1["default"].createElement(Button_1.ButtonConfirmed, { onClick: function () {
                        history.push("/remove/v1/" + validatedAddress);
                    } }, "Remove"))) : userLiquidityBalance && token ? (react_1["default"].createElement(V1PairMigration, { liquidityTokenAmount: userLiquidityBalance, token: token })) : (react_1["default"].createElement(EmptyState_1.EmptyState, { message: "Loading..." })))));
}
exports["default"] = MigrateV1Exchange;
