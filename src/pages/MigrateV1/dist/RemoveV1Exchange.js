"use strict";
exports.__esModule = true;
var sdk_1 = require("@uniswap/sdk");
var react_1 = require("react");
var react_ga_1 = require("react-ga");
var react_router_1 = require("react-router");
var Button_1 = require("../../components/Button");
var Card_1 = require("../../components/Card");
var Column_1 = require("../../components/Column");
var QuestionHelper_1 = require("../../components/QuestionHelper");
var Row_1 = require("../../components/Row");
var constants_1 = require("../../constants");
var hooks_1 = require("../../hooks");
var Tokens_1 = require("../../hooks/Tokens");
var useContract_1 = require("../../hooks/useContract");
var hooks_2 = require("../../state/multicall/hooks");
var hooks_3 = require("../../state/transactions/hooks");
var hooks_4 = require("../../state/wallet/hooks");
var theme_1 = require("../../theme");
var utils_1 = require("../../utils");
var AppBody_1 = require("../AppBody");
var EmptyState_1 = require("./EmptyState");
var MigrateV1Exchange_1 = require("./MigrateV1Exchange");
var constants_2 = require("@ethersproject/constants");
var styleds_1 = require("../../components/swap/styleds");
var TotalSupply_1 = require("../../data/TotalSupply");
var WEI_DENOM = sdk_1.JSBI.exponentiate(sdk_1.JSBI.BigInt(10), sdk_1.JSBI.BigInt(18));
var ZERO = sdk_1.JSBI.BigInt(0);
var ONE = sdk_1.JSBI.BigInt(1);
var ZERO_FRACTION = new sdk_1.Fraction(ZERO, ONE);
function V1PairRemoval(_a) {
    var _b;
    var exchangeContract = _a.exchangeContract, liquidityTokenAmount = _a.liquidityTokenAmount, token = _a.token;
    var chainId = hooks_1.useActiveWeb3React().chainId;
    var totalSupply = TotalSupply_1.useTotalSupply(liquidityTokenAmount.token);
    var exchangeETHBalance = (_b = hooks_4.useETHBalances([liquidityTokenAmount.token.address])) === null || _b === void 0 ? void 0 : _b[liquidityTokenAmount.token.address];
    var exchangeTokenBalance = hooks_4.useTokenBalance(liquidityTokenAmount.token.address, token);
    var _c = react_1.useState(false), confirmingRemoval = _c[0], setConfirmingRemoval = _c[1];
    var _d = react_1.useState(null), pendingRemovalHash = _d[0], setPendingRemovalHash = _d[1];
    var shareFraction = totalSupply ? new sdk_1.Percent(liquidityTokenAmount.raw, totalSupply.raw) : ZERO_FRACTION;
    var ethWorth = exchangeETHBalance
        ? sdk_1.CurrencyAmount.ether(exchangeETHBalance.multiply(shareFraction).multiply(WEI_DENOM).quotient)
        : sdk_1.CurrencyAmount.ether(ZERO);
    var tokenWorth = exchangeTokenBalance
        ? new sdk_1.TokenAmount(token, shareFraction.multiply(exchangeTokenBalance.raw).quotient)
        : new sdk_1.TokenAmount(token, ZERO);
    var addTransaction = hooks_3.useTransactionAdder();
    var isRemovalPending = hooks_3.useIsTransactionPending(pendingRemovalHash !== null && pendingRemovalHash !== void 0 ? pendingRemovalHash : undefined);
    var remove = react_1.useCallback(function () {
        if (!liquidityTokenAmount)
            return;
        setConfirmingRemoval(true);
        exchangeContract
            .removeLiquidity(liquidityTokenAmount.raw.toString(), 1, // min_eth, this is safe because we're removing liquidity
        1, // min_tokens, this is safe because we're removing liquidity
        Math.floor(new Date().getTime() / 1000) + constants_1.DEFAULT_DEADLINE_FROM_NOW)
            .then(function (response) {
            react_ga_1["default"].event({
                category: 'Remove',
                action: 'V1',
                label: token === null || token === void 0 ? void 0 : token.symbol
            });
            addTransaction(response, {
                summary: "Remove " + (chainId && token.equals(sdk_1.WETH[chainId]) ? 'WETH' : token.symbol) + "/ETH V1 liquidity"
            });
            setPendingRemovalHash(response.hash);
        })["catch"](function (error) {
            console.error(error);
            setConfirmingRemoval(false);
        });
    }, [exchangeContract, liquidityTokenAmount, token, chainId, addTransaction]);
    var noLiquidityTokens = !!liquidityTokenAmount && liquidityTokenAmount.equalTo(ZERO);
    var isSuccessfullyRemoved = !!pendingRemovalHash && noLiquidityTokens;
    return (react_1["default"].createElement(Column_1.AutoColumn, { gap: "20px" },
        react_1["default"].createElement(theme_1.TYPE.body, { my: 9, style: { fontWeight: 400 } }, "This tool will remove your V1 liquidity and send the underlying assets to your wallet."),
        react_1["default"].createElement(Card_1.LightCard, null,
            react_1["default"].createElement(MigrateV1Exchange_1.V1LiquidityInfo, { token: token, liquidityTokenAmount: liquidityTokenAmount, tokenWorth: tokenWorth, ethWorth: ethWorth }),
            react_1["default"].createElement("div", { style: { display: 'flex', marginTop: '1rem' } },
                react_1["default"].createElement(Button_1.ButtonConfirmed, { confirmed: isSuccessfullyRemoved, disabled: isSuccessfullyRemoved || noLiquidityTokens || isRemovalPending || confirmingRemoval, onClick: remove }, isSuccessfullyRemoved ? 'Success' : isRemovalPending ? react_1["default"].createElement(styleds_1.Dots, null, "Removing") : 'Remove'))),
        react_1["default"].createElement(theme_1.TYPE.darkGray, { style: { textAlign: 'center' } }, "Your Uniswap V1 " + (chainId && token.equals(sdk_1.WETH[chainId]) ? 'WETH' : token.symbol) + "/ETH liquidity will be redeemed for underlying assets.")));
}
function RemoveV1Exchange(_a) {
    var _b, _c;
    var address = _a.match.params.address;
    var validatedAddress = utils_1.isAddress(address);
    var _d = hooks_1.useActiveWeb3React(), chainId = _d.chainId, account = _d.account;
    var exchangeContract = useContract_1.useV1ExchangeContract(validatedAddress ? validatedAddress : undefined, true);
    var tokenAddress = (_c = (_b = hooks_2.useSingleCallResult(exchangeContract, 'tokenAddress', undefined, hooks_2.NEVER_RELOAD)) === null || _b === void 0 ? void 0 : _b.result) === null || _c === void 0 ? void 0 : _c[0];
    var token = Tokens_1.useToken(tokenAddress);
    var liquidityToken = react_1.useMemo(function () {
        return validatedAddress && chainId && token
            ? new sdk_1.Token(chainId, validatedAddress, 18, "UNI-V1-" + token.symbol, 'Uniswap V1')
            : undefined;
    }, [chainId, validatedAddress, token]);
    var userLiquidityBalance = hooks_4.useTokenBalance(account !== null && account !== void 0 ? account : undefined, liquidityToken);
    // redirect for invalid url params
    if (!validatedAddress || tokenAddress === constants_2.AddressZero) {
        console.error('Invalid address in path', address);
        return react_1["default"].createElement(react_router_1.Redirect, { to: "/migrate/v1" });
    }
    return (react_1["default"].createElement(AppBody_1.BodyWrapper, { style: { padding: 24 }, id: "remove-v1-exchange" },
        react_1["default"].createElement(Column_1.AutoColumn, { gap: "16px" },
            react_1["default"].createElement(Row_1.AutoRow, { style: { alignItems: 'center', justifyContent: 'space-between' }, gap: "8px" },
                react_1["default"].createElement(theme_1.BackArrow, { to: "/migrate/v1" }),
                react_1["default"].createElement(theme_1.TYPE.mediumHeader, null, "Remove V1 Liquidity"),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement(QuestionHelper_1["default"], { text: "Remove your Uniswap V1 liquidity tokens." }))),
            !account ? (react_1["default"].createElement(theme_1.TYPE.largeHeader, null, "You must connect an account.")) : userLiquidityBalance && token && exchangeContract ? (react_1["default"].createElement(V1PairRemoval, { exchangeContract: exchangeContract, liquidityTokenAmount: userLiquidityBalance, token: token })) : (react_1["default"].createElement(EmptyState_1.EmptyState, { message: "Loading..." })))));
}
exports["default"] = RemoveV1Exchange;
