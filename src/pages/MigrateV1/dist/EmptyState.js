"use strict";
exports.__esModule = true;
exports.EmptyState = void 0;
var react_1 = require("react");
var Column_1 = require("../../components/Column");
var theme_1 = require("../../theme");
function EmptyState(_a) {
    var message = _a.message;
    return (react_1["default"].createElement(Column_1.AutoColumn, { style: { minHeight: 200, justifyContent: 'center', alignItems: 'center' } },
        react_1["default"].createElement(theme_1.TYPE.body, null, message)));
}
exports.EmptyState = EmptyState;
