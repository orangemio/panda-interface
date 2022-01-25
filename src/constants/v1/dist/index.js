"use strict";
var _a;
exports.__esModule = true;
exports.V1_EXCHANGE_ABI = exports.V1_EXCHANGE_INTERFACE = exports.V1_FACTORY_ABI = exports.V1_FACTORY_INTERFACE = exports.V1_FACTORY_ADDRESSES = void 0;
var abi_1 = require("@ethersproject/abi");
var sdk_1 = require("@uniswap/sdk");
var v1_exchange_json_1 = require("./v1_exchange.json");
exports.V1_EXCHANGE_ABI = v1_exchange_json_1["default"];
var v1_factory_json_1 = require("./v1_factory.json");
exports.V1_FACTORY_ABI = v1_factory_json_1["default"];
var V1_FACTORY_ADDRESSES = (_a = {},
    _a[sdk_1.ChainId.MAINNET] = '0xc0a47dFe034B400B47bDaD5FecDa2621de6c4d95',
    _a[sdk_1.ChainId.ROPSTEN] = '0x9c83dCE8CA20E9aAF9D3efc003b2ea62aBC08351',
    _a[sdk_1.ChainId.RINKEBY] = '0xf5D915570BC477f9B8D6C0E980aA81757A3AaC36',
    _a[sdk_1.ChainId.GÖRLI] = '0x6Ce570d02D73d4c384b46135E87f8C592A8c86dA',
    _a[sdk_1.ChainId.KOVAN] = '0xD3E51Ef092B2845f10401a0159B2B96e8B6c3D30',
    //TODO
    _a[sdk_1.ChainId.BSC] = '0xD3E51Ef092B2845f10401a0159B2B96e8B6c3D30',
    _a[sdk_1.ChainId.HUOBI] = '0xD3E51Ef092B2845f10401a0159B2B96e8B6c3D30',
    _a[sdk_1.ChainId.BSCT] = '0xD3E51Ef092B2845f10401a0159B2B96e8B6c3D30',
    _a);
exports.V1_FACTORY_ADDRESSES = V1_FACTORY_ADDRESSES;
var V1_FACTORY_INTERFACE = new abi_1.Interface(v1_factory_json_1["default"]);
exports.V1_FACTORY_INTERFACE = V1_FACTORY_INTERFACE;
var V1_EXCHANGE_INTERFACE = new abi_1.Interface(v1_exchange_json_1["default"]);
exports.V1_EXCHANGE_INTERFACE = V1_EXCHANGE_INTERFACE;
