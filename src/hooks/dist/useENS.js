"use strict";
exports.__esModule = true;
var utils_1 = require("../utils");
var useENSAddress_1 = require("./useENSAddress");
var useENSName_1 = require("./useENSName");
/**
 * Given a name or address, does a lookup to resolve to an address and name
 * @param nameOrAddress ENS name or address
 */
function useENS(nameOrAddress) {
    var validated = utils_1.isAddress(nameOrAddress);
    var reverseLookup = useENSName_1["default"](validated ? validated : undefined);
    var lookup = useENSAddress_1["default"](nameOrAddress);
    return {
        loading: reverseLookup.loading || lookup.loading,
        address: validated ? validated : lookup.address,
        name: reverseLookup.ENSName ? reverseLookup.ENSName : !validated && lookup.address ? nameOrAddress || null : null
    };
}
exports["default"] = useENS;
