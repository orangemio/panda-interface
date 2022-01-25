"use strict";
exports.__esModule = true;
exports.filterTokens = void 0;
var utils_1 = require("../../utils");
function filterTokens(tokens, search) {
    if (search.length === 0)
        return tokens;
    var searchingAddress = utils_1.isAddress(search);
    if (searchingAddress) {
        return tokens.filter(function (token) { return token.address === searchingAddress; });
    }
    var lowerSearchParts = search
        .toLowerCase()
        .split(/\s+/)
        .filter(function (s) { return s.length > 0; });
    if (lowerSearchParts.length === 0) {
        return tokens;
    }
    var matchesSearch = function (s) {
        var sParts = s
            .toLowerCase()
            .split(/\s+/)
            .filter(function (s) { return s.length > 0; });
        return lowerSearchParts.every(function (p) { return p.length === 0 || sParts.some(function (sp) { return sp.startsWith(p) || sp.endsWith(p); }); });
    };
    return tokens.filter(function (token) {
        var symbol = token.symbol, name = token.name;
        return (symbol && matchesSearch(symbol)) || (name && matchesSearch(name));
    });
}
exports.filterTokens = filterTokens;
