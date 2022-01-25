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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var _a, _b, _c, _d, _e, _f, _g;
exports.__esModule = true;
exports.BETTER_TRADE_LINK_THRESHOLD = exports.MIN_ETH = exports.BLOCKED_PRICE_IMPACT_NON_EXPERT = exports.PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN = exports.ALLOWED_PRICE_IMPACT_HIGH = exports.ALLOWED_PRICE_IMPACT_MEDIUM = exports.ALLOWED_PRICE_IMPACT_LOW = exports.BIPS_BASE = exports.ONE_BIPS = exports.DEFAULT_DEADLINE_FROM_NOW = exports.INITIAL_ALLOWED_SLIPPAGE = exports.NetworkContextName = exports.SUPPORTED_WALLETS = exports.PINNED_PAIRS = exports.BASES_TO_TRACK_LIQUIDITY_FOR = exports.SUGGESTED_BASES = exports.CUSTOM_BASES = exports.BASES_TO_CHECK_TRADES_AGAINST = exports.AMPL = exports.MKR = exports.COMP = exports.USDT = exports.USDC = exports.DAI = exports.ROUTER_ADDRESS = void 0;
var sdk_1 = require("@uniswap/sdk");
// import { fortmatic, injected, portis, walletconnect, walletlink } from '../connectors'
var connectors_1 = require("../connectors");
//Router
//export const ROUTER_ADDRESS = '0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F'
//BSC MAINNET
// export const ROUTER_ADDRESS = '0x267bAbbE93B9E9499aCA9938Dd46922590428643'
// BSC TESTNET
// export const ROUTER_ADDRESS = '0x5731054c2022A6567Ee9D970579d7bc05B5dF123'
//HUOBI TESTNET
exports.ROUTER_ADDRESS = '0xb62bF4837B1556Fbd1c94772629690aa305eA1d1';
exports.DAI = new sdk_1.Token(sdk_1.ChainId.MAINNET, '0x6B175474E89094C44Da98b954EedeAC495271d0F', 18, 'DAI', 'Dai Stablecoin');
exports.USDC = new sdk_1.Token(sdk_1.ChainId.MAINNET, '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', 6, 'USDC', 'USD//C');
exports.USDT = new sdk_1.Token(sdk_1.ChainId.MAINNET, '0xdAC17F958D2ee523a2206206994597C13D831ec7', 6, 'USDT', 'Tether USD');
exports.COMP = new sdk_1.Token(sdk_1.ChainId.MAINNET, '0xc00e94Cb662C3520282E6f5717214004A7f26888', 18, 'COMP', 'Compound');
exports.MKR = new sdk_1.Token(sdk_1.ChainId.MAINNET, '0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2', 18, 'MKR', 'Maker');
exports.AMPL = new sdk_1.Token(sdk_1.ChainId.MAINNET, '0xD46bA6D942050d489DBd938a2C909A5d5039A161', 9, 'AMPL', 'Ampleforth');
var WETH_ONLY = (_a = {},
    _a[sdk_1.ChainId.MAINNET] = [sdk_1.WETH[sdk_1.ChainId.MAINNET]],
    _a[sdk_1.ChainId.ROPSTEN] = [sdk_1.WETH[sdk_1.ChainId.ROPSTEN]],
    _a[sdk_1.ChainId.RINKEBY] = [sdk_1.WETH[sdk_1.ChainId.RINKEBY]],
    _a[sdk_1.ChainId.GÖRLI] = [sdk_1.WETH[sdk_1.ChainId.GÖRLI]],
    _a[sdk_1.ChainId.BSCT] = [sdk_1.WETH[sdk_1.ChainId.BSCT]],
    _a[sdk_1.ChainId.BSC] = [sdk_1.WETH[sdk_1.ChainId.BSC]],
    _a[sdk_1.ChainId.HUOBI] = [sdk_1.WETH[sdk_1.ChainId.HUOBI]],
    _a[sdk_1.ChainId.KOVAN] = [sdk_1.WETH[sdk_1.ChainId.KOVAN]],
    _a);
// used to construct intermediary pairs for trading
exports.BASES_TO_CHECK_TRADES_AGAINST = __assign(__assign({}, WETH_ONLY), (_b = {}, _b[sdk_1.ChainId.MAINNET] = __spreadArrays(WETH_ONLY[sdk_1.ChainId.MAINNET], [exports.DAI, exports.USDC, exports.USDT, exports.COMP, exports.MKR]), _b));
/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 */
exports.CUSTOM_BASES = (_c = {},
    _c[sdk_1.ChainId.MAINNET] = (_d = {},
        _d[exports.AMPL.address] = [exports.DAI, sdk_1.WETH[sdk_1.ChainId.MAINNET]],
        _d),
    _c);
// used for display in the default list when adding liquidity
exports.SUGGESTED_BASES = __assign(__assign({}, WETH_ONLY), (_e = {}, _e[sdk_1.ChainId.MAINNET] = __spreadArrays(WETH_ONLY[sdk_1.ChainId.MAINNET], [exports.DAI, exports.USDC, exports.USDT]), _e));
// used to construct the list of all pairs we consider by default in the frontend
exports.BASES_TO_TRACK_LIQUIDITY_FOR = __assign(__assign({}, WETH_ONLY), (_f = {}, _f[sdk_1.ChainId.MAINNET] = __spreadArrays(WETH_ONLY[sdk_1.ChainId.MAINNET], [exports.DAI, exports.USDC, exports.USDT]), _f));
exports.PINNED_PAIRS = (_g = {},
    _g[sdk_1.ChainId.MAINNET] = [
        [
            new sdk_1.Token(sdk_1.ChainId.MAINNET, '0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643', 8, 'cDAI', 'Compound Dai'),
            new sdk_1.Token(sdk_1.ChainId.MAINNET, '0x39AA39c021dfbaE8faC545936693aC917d5E7563', 8, 'cUSDC', 'Compound USD Coin')
        ],
        [exports.USDC, exports.USDT],
        [exports.DAI, exports.USDT]
    ],
    _g);
exports.SUPPORTED_WALLETS = {
    INJECTED: {
        connector: connectors_1.injected,
        name: 'Injected',
        iconName: 'arrow-right.svg',
        description: 'Injected web3 provider.',
        href: null,
        color: '#010101',
        primary: true
    },
    METAMASK: {
        connector: connectors_1.injected,
        name: 'MetaMask',
        iconName: 'metamask.png',
        description: 'Easy-to-use browser extension.',
        href: null,
        color: '#E8831D'
    },
    WALLET_CONNECT: {
        connector: connectors_1.walletconnect,
        name: 'WalletConnect',
        iconName: 'walletConnectIcon.svg',
        description: 'Connect to Trust Wallet, Rainbow Wallet and more...',
        href: null,
        color: '#4196FC',
        mobile: true
    }
    // WALLET_LINK: {
    //   connector: walletlink,
    //   name: 'Coinbase Wallet',
    //   iconName: 'coinbaseWalletIcon.svg',
    //   description: 'Use Coinbase Wallet app on mobile device',
    //   href: null,
    //   color: '#315CF5'
    // },
    // COINBASE_LINK: {
    //   name: 'Open in Coinbase Wallet',
    //   iconName: 'coinbaseWalletIcon.svg',
    //   description: 'Open in Coinbase Wallet app.',
    //   href: 'https://go.cb-w.com/mtUDhEZPy1',
    //   color: '#315CF5',
    //   mobile: true,
    //   mobileOnly: true
    // },
    // FORTMATIC: {
    //   connector: fortmatic,
    //   name: 'Fortmatic',
    //   iconName: 'fortmaticIcon.png',
    //   description: 'Login using Fortmatic hosted wallet',
    //   href: null,
    //   color: '#6748FF',
    //   mobile: true
    // },
    // Portis: {
    //   connector: portis,
    //   name: 'Portis',
    //   iconName: 'portisIcon.png',
    //   description: 'Login using Portis hosted wallet',
    //   href: null,
    //   color: '#4A6C9B',
    //   mobile: true
    // }
};
exports.NetworkContextName = 'NETWORK';
// default allowed slippage, in bips
exports.INITIAL_ALLOWED_SLIPPAGE = 50;
// 20 minutes, denominated in seconds
exports.DEFAULT_DEADLINE_FROM_NOW = 60 * 20;
// one basis point
exports.ONE_BIPS = new sdk_1.Percent(sdk_1.JSBI.BigInt(1), sdk_1.JSBI.BigInt(10000));
exports.BIPS_BASE = sdk_1.JSBI.BigInt(10000);
// used for warning states
exports.ALLOWED_PRICE_IMPACT_LOW = new sdk_1.Percent(sdk_1.JSBI.BigInt(100), exports.BIPS_BASE); // 1%
exports.ALLOWED_PRICE_IMPACT_MEDIUM = new sdk_1.Percent(sdk_1.JSBI.BigInt(300), exports.BIPS_BASE); // 3%
exports.ALLOWED_PRICE_IMPACT_HIGH = new sdk_1.Percent(sdk_1.JSBI.BigInt(500), exports.BIPS_BASE); // 5%
// if the price slippage exceeds this number, force the user to type 'confirm' to execute
exports.PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN = new sdk_1.Percent(sdk_1.JSBI.BigInt(1000), exports.BIPS_BASE); // 10%
// for non expert mode disable swaps above this
exports.BLOCKED_PRICE_IMPACT_NON_EXPERT = new sdk_1.Percent(sdk_1.JSBI.BigInt(1500), exports.BIPS_BASE); // 15%
// used to ensure the user doesn't send so much ETH so they end up with <.01
exports.MIN_ETH = sdk_1.JSBI.exponentiate(sdk_1.JSBI.BigInt(10), sdk_1.JSBI.BigInt(16)); // .01 ETH
exports.BETTER_TRADE_LINK_THRESHOLD = new sdk_1.Percent(sdk_1.JSBI.BigInt(75), sdk_1.JSBI.BigInt(10000));
