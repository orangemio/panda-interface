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
exports.__esModule = true;
exports.NetworkConnector = void 0;
var abstract_connector_1 = require("@web3-react/abstract-connector");
var tiny_invariant_1 = require("tiny-invariant");
var RequestError = /** @class */ (function (_super) {
    __extends(RequestError, _super);
    function RequestError(message, code, data) {
        var _this = _super.call(this, message) || this;
        _this.code = code;
        _this.data = data;
        return _this;
    }
    return RequestError;
}(Error));
var MiniRpcProvider = /** @class */ (function () {
    function MiniRpcProvider(chainId, url, batchWaitTimeMs) {
        var _this = this;
        this.isMetaMask = false;
        this.nextId = 1;
        this.batchTimeoutId = null;
        this.batch = [];
        this.clearBatch = function () { return __awaiter(_this, void 0, void 0, function () {
            var batch, response, error_1, json, error_2, byKey, _i, json_1, result, _a, resolve, reject, method;
            var _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        console.debug('Clearing batch', this.batch);
                        batch = this.batch;
                        this.batch = [];
                        this.batchTimeoutId = null;
                        _e.label = 1;
                    case 1:
                        _e.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, fetch(this.url, {
                                method: 'POST',
                                headers: { 'content-type': 'application/json', accept: 'application/json' },
                                body: JSON.stringify(batch.map(function (item) { return item.request; }))
                            })];
                    case 2:
                        response = _e.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _e.sent();
                        batch.forEach(function (_a) {
                            var reject = _a.reject;
                            return reject(new Error('Failed to send batch call'));
                        });
                        return [2 /*return*/];
                    case 4:
                        if (!response.ok) {
                            batch.forEach(function (_a) {
                                var reject = _a.reject;
                                return reject(new RequestError(response.status + ": " + response.statusText, -32000));
                            });
                            return [2 /*return*/];
                        }
                        _e.label = 5;
                    case 5:
                        _e.trys.push([5, 7, , 8]);
                        return [4 /*yield*/, response.json()];
                    case 6:
                        json = _e.sent();
                        return [3 /*break*/, 8];
                    case 7:
                        error_2 = _e.sent();
                        batch.forEach(function (_a) {
                            var reject = _a.reject;
                            return reject(new Error('Failed to parse JSON response'));
                        });
                        return [2 /*return*/];
                    case 8:
                        byKey = batch.reduce(function (memo, current) {
                            memo[current.request.id] = current;
                            return memo;
                        }, {});
                        for (_i = 0, json_1 = json; _i < json_1.length; _i++) {
                            result = json_1[_i];
                            _a = byKey[result.id], resolve = _a.resolve, reject = _a.reject, method = _a.request.method;
                            if (resolve && reject) {
                                if ('error' in result) {
                                    reject(new RequestError((_b = result === null || result === void 0 ? void 0 : result.error) === null || _b === void 0 ? void 0 : _b.message, (_c = result === null || result === void 0 ? void 0 : result.error) === null || _c === void 0 ? void 0 : _c.code, (_d = result === null || result === void 0 ? void 0 : result.error) === null || _d === void 0 ? void 0 : _d.data));
                                }
                                else if ('result' in result) {
                                    resolve(result.result);
                                }
                                else {
                                    reject(new RequestError("Received unexpected JSON-RPC response to " + method + " request.", -32000, result));
                                }
                            }
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        this.sendAsync = function (request, callback) {
            _this.request(request.method, request.params)
                .then(function (result) { return callback(null, { jsonrpc: '2.0', id: request.id, result: result }); })["catch"](function (error) { return callback(error, null); });
        };
        this.request = function (method, params) { return __awaiter(_this, void 0, Promise, function () {
            var promise;
            var _this = this;
            var _a;
            return __generator(this, function (_b) {
                if (typeof method !== 'string') {
                    return [2 /*return*/, this.request(method.method, method.params)];
                }
                if (method === 'eth_chainId') {
                    return [2 /*return*/, "0x" + this.chainId.toString(16)];
                }
                promise = new Promise(function (resolve, reject) {
                    _this.batch.push({
                        request: {
                            jsonrpc: '2.0',
                            id: _this.nextId++,
                            method: method,
                            params: params
                        },
                        resolve: resolve,
                        reject: reject
                    });
                });
                this.batchTimeoutId = (_a = this.batchTimeoutId) !== null && _a !== void 0 ? _a : setTimeout(this.clearBatch, this.batchWaitTimeMs);
                return [2 /*return*/, promise];
            });
        }); };
        this.chainId = chainId;
        this.url = url;
        var parsed = new URL(url);
        this.host = parsed.host;
        this.path = parsed.pathname;
        // how long to wait to batch calls
        this.batchWaitTimeMs = batchWaitTimeMs !== null && batchWaitTimeMs !== void 0 ? batchWaitTimeMs : 50;
    }
    return MiniRpcProvider;
}());
var NetworkConnector = /** @class */ (function (_super) {
    __extends(NetworkConnector, _super);
    function NetworkConnector(_a) {
        var urls = _a.urls, defaultChainId = _a.defaultChainId;
        var _this = this;
        tiny_invariant_1["default"](defaultChainId || Object.keys(urls).length === 1, 'defaultChainId is a required argument with >1 url');
        _this = _super.call(this, { supportedChainIds: Object.keys(urls).map(function (k) { return Number(k); }) }) || this;
        _this.currentChainId = defaultChainId || Number(Object.keys(urls)[0]);
        _this.providers = Object.keys(urls).reduce(function (accumulator, chainId) {
            accumulator[Number(chainId)] = new MiniRpcProvider(Number(chainId), urls[Number(chainId)]);
            return accumulator;
        }, {});
        return _this;
    }
    Object.defineProperty(NetworkConnector.prototype, "provider", {
        get: function () {
            return this.providers[this.currentChainId];
        },
        enumerable: false,
        configurable: true
    });
    NetworkConnector.prototype.activate = function () {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, { provider: this.providers[this.currentChainId], chainId: this.currentChainId, account: null }];
            });
        });
    };
    NetworkConnector.prototype.getProvider = function () {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.providers[this.currentChainId]];
            });
        });
    };
    NetworkConnector.prototype.getChainId = function () {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.currentChainId];
            });
        });
    };
    NetworkConnector.prototype.getAccount = function () {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, null];
            });
        });
    };
    NetworkConnector.prototype.deactivate = function () {
        return;
    };
    return NetworkConnector;
}(abstract_connector_1.AbstractConnector));
exports.NetworkConnector = NetworkConnector;
