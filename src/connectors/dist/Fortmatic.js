"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var _a;
exports.__esModule = true;
exports.FortmaticConnector = exports.OVERLAY_READY = void 0;
var sdk_1 = require("@uniswap/sdk");
var fortmatic_connector_1 = require("@web3-react/fortmatic-connector");
exports.OVERLAY_READY = 'OVERLAY_READY';
var CHAIN_ID_NETWORK_ARGUMENT = (_a = {},
    _a[sdk_1.ChainId.MAINNET] = undefined,
    _a[sdk_1.ChainId.ROPSTEN] = 'ropsten',
    _a[sdk_1.ChainId.RINKEBY] = 'rinkeby',
    _a[sdk_1.ChainId.KOVAN] = 'kovan',
    _a[sdk_1.ChainId.HUOBI] = 'Huobi',
    _a[sdk_1.ChainId.BSCT] = 'bsc testnet',
    _a);
var FortmaticConnector = /** @class */ (function (_super) {
    __extends(FortmaticConnector, _super);
    function FortmaticConnector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FortmaticConnector.prototype.activate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var Fortmatic, _a, apiKey, chainId, provider, pollForOverlayReady, account;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!!this.fortmatic) return [3 /*break*/, 2];
                        return [4 /*yield*/, Promise.resolve().then(function () { return require('fortmatic'); })];
                    case 1:
                        Fortmatic = (_b.sent())["default"];
                        _a = this, apiKey = _a.apiKey, chainId = _a.chainId;
                        if (chainId in CHAIN_ID_NETWORK_ARGUMENT) {
                            this.fortmatic = new Fortmatic(apiKey, CHAIN_ID_NETWORK_ARGUMENT[chainId]);
                        }
                        else {
                            throw new Error("Unsupported network ID: " + chainId);
                        }
                        _b.label = 2;
                    case 2:
                        provider = this.fortmatic.getProvider();
                        pollForOverlayReady = new Promise(function (resolve) {
                            var interval = setInterval(function () {
                                if (provider.overlayReady) {
                                    clearInterval(interval);
                                    _this.emit(exports.OVERLAY_READY);
                                    resolve();
                                }
                            }, 200);
                        });
                        return [4 /*yield*/, Promise.all([
                                provider.enable().then(function (accounts) { return accounts[0]; }),
                                pollForOverlayReady
                            ])];
                    case 3:
                        account = (_b.sent())[0];
                        return [2 /*return*/, { provider: this.fortmatic.getProvider(), chainId: this.chainId, account: account }];
                }
            });
        });
    };
    return FortmaticConnector;
}(fortmatic_connector_1.FortmaticConnector));
exports.FortmaticConnector = FortmaticConnector;
