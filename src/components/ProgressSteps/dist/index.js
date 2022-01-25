"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var Row_1 = require("../Row");
var Column_1 = require("../Column");
var polished_1 = require("polished");
var Wrapper = styled_components_1["default"](Column_1.AutoColumn)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-top: 1.25rem;\n"], ["\n  margin-top: 1.25rem;\n"])));
var Grouping = styled_components_1["default"](Row_1.RowBetween)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 50%;\n"], ["\n  width: 50%;\n"])));
var Circle = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  min-width: 20px;\n  min-height: 20px;\n  background-color: ", ";\n  border-radius: 50%;\n  color: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  line-height: 8px;\n  font-size: 12px;\n"], ["\n  min-width: 20px;\n  min-height: 20px;\n  background-color: ",
    ";\n  border-radius: 50%;\n  color: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  line-height: 8px;\n  font-size: 12px;\n"])), function (_a) {
    var theme = _a.theme, confirmed = _a.confirmed, disabled = _a.disabled;
    return disabled ? theme.bg4 : confirmed ? theme.green1 : theme.primary1;
}, function (_a) {
    var theme = _a.theme;
    return theme.white;
});
var CircleRow = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  width: calc(100% - 20px);\n  display: flex;\n  align-items: center;\n"], ["\n  width: calc(100% - 20px);\n  display: flex;\n  align-items: center;\n"])));
var Connector = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  width: 100%;\n  height: 2px;\n  background-color: ;\n  background: linear-gradient(\n    90deg,\n    ", " 0%,\n    ", " 80%\n  );\n  opacity: 0.6;\n"], ["\n  width: 100%;\n  height: 2px;\n  background-color: ;\n  background: linear-gradient(\n    90deg,\n    ", " 0%,\n    ", " 80%\n  );\n  opacity: 0.6;\n"])), function (_a) {
    var theme = _a.theme, prevConfirmed = _a.prevConfirmed;
    return polished_1.transparentize(0.5, prevConfirmed ? theme.green1 : theme.primary1);
}, function (_a) {
    var theme = _a.theme, prevConfirmed = _a.prevConfirmed;
    return (prevConfirmed ? theme.primary1 : theme.bg4);
});
/**
 * Based on array of steps, create a step counter of circles.
 * A circle can be enabled, disabled, or confirmed. States are derived
 * from previous step.
 *
 * An extra circle is added to represent the ability to swap, add, or remove.
 * This step will never be marked as complete (because no 'txn done' state in body ui).
 *
 * @param steps  array of booleans where true means step is complete
 */
function ProgressCircles(_a) {
    var steps = _a.steps;
    return (react_1["default"].createElement(Wrapper, { justify: 'center' },
        react_1["default"].createElement(Grouping, null,
            steps.map(function (step, i) {
                return (react_1["default"].createElement(CircleRow, { key: i },
                    react_1["default"].createElement(Circle, { confirmed: step, disabled: !steps[i - 1] && i !== 0 }, step ? '✓' : i + 1),
                    react_1["default"].createElement(Connector, { prevConfirmed: step })));
            }),
            react_1["default"].createElement(Circle, { disabled: !steps[steps.length - 1] }, steps.length + 1))));
}
exports["default"] = ProgressCircles;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
