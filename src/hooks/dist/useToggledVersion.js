"use strict";
exports.__esModule = true;
exports.DEFAULT_VERSION = exports.Version = void 0;
var useParsedQueryString_1 = require("./useParsedQueryString");
var Version;
(function (Version) {
    Version["v1"] = "v1";
    Version["v2"] = "v2";
})(Version = exports.Version || (exports.Version = {}));
exports.DEFAULT_VERSION = Version.v2;
function useToggledVersion() {
    var use = useParsedQueryString_1["default"]().use;
    if (!use || typeof use !== 'string')
        return Version.v2;
    if (use.toLowerCase() === 'v1')
        return Version.v1;
    return exports.DEFAULT_VERSION;
}
exports["default"] = useToggledVersion;
