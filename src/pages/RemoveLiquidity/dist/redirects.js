"use strict";
exports.__esModule = true;
exports.RedirectOldRemoveLiquidityPathStructure = void 0;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var OLD_PATH_STRUCTURE = /^(0x[a-fA-F0-9]{40})-(0x[a-fA-F0-9]{40})$/;
function RedirectOldRemoveLiquidityPathStructure(_a) {
    var tokens = _a.match.params.tokens;
    if (!OLD_PATH_STRUCTURE.test(tokens)) {
        return react_1["default"].createElement(react_router_dom_1.Redirect, { to: "/pool" });
    }
    var _b = tokens.split('-'), currency0 = _b[0], currency1 = _b[1];
    return react_1["default"].createElement(react_router_dom_1.Redirect, { to: "/remove/" + currency0 + "/" + currency1 });
}
exports.RedirectOldRemoveLiquidityPathStructure = RedirectOldRemoveLiquidityPathStructure;
