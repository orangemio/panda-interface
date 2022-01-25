"use strict";
exports.__esModule = true;
var react_1 = require("react");
var constants_1 = require("../../constants");
var prices_1 = require("../../utils/prices");
var styleds_1 = require("./styleds");
/**
 * Formatted version of price impact text with warning colors
 */
function FormattedPriceImpact(_a) {
    var priceImpact = _a.priceImpact;
    return (react_1["default"].createElement(styleds_1.ErrorText, { fontWeight: 500, fontSize: 14, severity: prices_1.warningSeverity(priceImpact) }, priceImpact ? (priceImpact.lessThan(constants_1.ONE_BIPS) ? '<0.01%' : priceImpact.toFixed(2) + "%") : '-'));
}
exports["default"] = FormattedPriceImpact;
