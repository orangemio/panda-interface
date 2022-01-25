"use strict";
var _a;
exports.__esModule = true;
exports.MULTICALL_NETWORKS = exports.MULTICALL_ABI = void 0;
var sdk_1 = require("@uniswap/sdk");
var abi_json_1 = require("./abi.json");
exports.MULTICALL_ABI = abi_json_1["default"];
var MULTICALL_NETWORKS = (_a = {},
    _a[sdk_1.ChainId.MAINNET] = '0xeefBa1e63905eF1D7ACbA5a8513c70307C1cE441',
    _a[sdk_1.ChainId.ROPSTEN] = '0x53C43764255c17BD724F74c4eF150724AC50a3ed',
    _a[sdk_1.ChainId.KOVAN] = '0x2cc8688C5f75E365aaEEb4ea8D6a480405A48D2A',
    _a[sdk_1.ChainId.RINKEBY] = '0x42Ad527de7d4e9d9d011aC45B31D8551f8Fe9821',
    _a[sdk_1.ChainId.GÖRLI] = '0x77dCa2C955b15e9dE4dbBCf1246B4B85b651e50e',
    _a[sdk_1.ChainId.BSC] = '0x5c5bda4006518f108Ffa878C7DEEAdD9F454D6b1',
    _a[sdk_1.ChainId.HUOBI] = '0xa8776DF78769Cb95a8b301Dbf7E3a5CFe51644A9',
    _a[sdk_1.ChainId.BSCT] = '0xA76E13368AdC181e1061caA9586CEA0313Cc5fec',
    _a);
exports.MULTICALL_NETWORKS = MULTICALL_NETWORKS;
