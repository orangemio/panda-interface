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
exports.__esModule = true;
exports.RedirectDuplicateTokenIds = exports.RedirectOldAddLiquidityPathStructure = exports.RedirectToAddLiquidity = void 0;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var index_1 = require("./index");
function RedirectToAddLiquidity() {
    return react_1["default"].createElement(react_router_dom_1.Redirect, { to: "/add/" });
}
exports.RedirectToAddLiquidity = RedirectToAddLiquidity;
var OLD_PATH_STRUCTURE = /^(0x[a-fA-F0-9]{40})-(0x[a-fA-F0-9]{40})$/;
function RedirectOldAddLiquidityPathStructure(props) {
    var currencyIdA = props.match.params.currencyIdA;
    var match = currencyIdA.match(OLD_PATH_STRUCTURE);
    if (match === null || match === void 0 ? void 0 : match.length) {
        return react_1["default"].createElement(react_router_dom_1.Redirect, { to: "/add/" + match[1] + "/" + match[2] });
    }
    return react_1["default"].createElement(index_1["default"], __assign({}, props));
}
exports.RedirectOldAddLiquidityPathStructure = RedirectOldAddLiquidityPathStructure;
function RedirectDuplicateTokenIds(props) {
    var _a = props.match.params, currencyIdA = _a.currencyIdA, currencyIdB = _a.currencyIdB;
    if (currencyIdA.toLowerCase() === currencyIdB.toLowerCase()) {
        return react_1["default"].createElement(react_router_dom_1.Redirect, { to: "/add/" + currencyIdA });
    }
    return react_1["default"].createElement(index_1["default"], __assign({}, props));
}
exports.RedirectDuplicateTokenIds = RedirectDuplicateTokenIds;
