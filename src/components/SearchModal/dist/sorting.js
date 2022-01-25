"use strict";
exports.__esModule = true;
exports.useTokenComparator = void 0;
var react_1 = require("react");
var hooks_1 = require("../../state/wallet/hooks");
// compare two token amounts with highest one coming first
function balanceComparator(balanceA, balanceB) {
    if (balanceA && balanceB) {
        return balanceA.greaterThan(balanceB) ? -1 : balanceA.equalTo(balanceB) ? 0 : 1;
    }
    else if (balanceA && balanceA.greaterThan('0')) {
        return -1;
    }
    else if (balanceB && balanceB.greaterThan('0')) {
        return 1;
    }
    return 0;
}
function getTokenComparator(balances) {
    return function sortTokens(tokenA, tokenB) {
        // -1 = a is first
        // 1 = b is first
        // sort by balances
        var balanceA = balances[tokenA.address];
        var balanceB = balances[tokenB.address];
        var balanceComp = balanceComparator(balanceA, balanceB);
        if (balanceComp !== 0)
            return balanceComp;
        if (tokenA.symbol && tokenB.symbol) {
            // sort by symbol
            return tokenA.symbol.toLowerCase() < tokenB.symbol.toLowerCase() ? -1 : 1;
        }
        else {
            return tokenA.symbol ? -1 : tokenB.symbol ? -1 : 0;
        }
    };
}
function useTokenComparator(inverted) {
    var balances = hooks_1.useAllTokenBalances();
    var comparator = react_1.useMemo(function () { return getTokenComparator(balances !== null && balances !== void 0 ? balances : {}); }, [balances]);
    return react_1.useMemo(function () {
        if (inverted) {
            return function (tokenA, tokenB) { return comparator(tokenA, tokenB) * -1; };
        }
        else {
            return comparator;
        }
    }, [inverted, comparator]);
}
exports.useTokenComparator = useTokenComparator;
