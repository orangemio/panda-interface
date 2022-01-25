"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_ga_1 = require("react-ga");
// fires a GA pageview every time the route changes
function GoogleAnalyticsReporter(_a) {
    var _b = _a.location, pathname = _b.pathname, search = _b.search;
    react_1.useEffect(function () {
        react_ga_1["default"].pageview("" + pathname + search);
    }, [pathname, search]);
    return null;
}
exports["default"] = GoogleAnalyticsReporter;
