"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var QuestionHelper_1 = require("../QuestionHelper");
var theme_1 = require("../../theme");
var Column_1 = require("../Column");
var Row_1 = require("../Row");
var polished_1 = require("polished");
var SlippageError;
(function (SlippageError) {
    SlippageError["InvalidInput"] = "InvalidInput";
    SlippageError["RiskyLow"] = "RiskyLow";
    SlippageError["RiskyHigh"] = "RiskyHigh";
})(SlippageError || (SlippageError = {}));
var DeadlineError;
(function (DeadlineError) {
    DeadlineError["InvalidInput"] = "InvalidInput";
})(DeadlineError || (DeadlineError = {}));
var FancyButton = styled_components_1["default"].button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: ", ";\n  align-items: center;\n  height: 2rem;\n  border-radius: 36px;\n  font-size: 12px;\n  width: auto;\n  min-width: 3rem;\n  border: 1px solid ", ";\n  outline: none;\n  background: ", ";\n  :hover {\n    border: 1px solid ", ";\n  }\n  :focus {\n    border: 1px solid ", ";\n  }\n"], ["\n  color: ", ";\n  align-items: center;\n  height: 2rem;\n  border-radius: 36px;\n  font-size: 12px;\n  width: auto;\n  min-width: 3rem;\n  border: 1px solid ", ";\n  outline: none;\n  background: ", ";\n  :hover {\n    border: 1px solid ", ";\n  }\n  :focus {\n    border: 1px solid ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.text1;
}, function (_a) {
    var theme = _a.theme;
    return theme.bg3;
}, function (_a) {
    var theme = _a.theme;
    return theme.bg1;
}, function (_a) {
    var theme = _a.theme;
    return theme.bg4;
}, function (_a) {
    var theme = _a.theme;
    return theme.primary1;
});
var Option = styled_components_1["default"](FancyButton)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-right: 8px;\n  :hover {\n    cursor: pointer;\n  }\n  background-color: ", ";\n  color: ", ";\n"], ["\n  margin-right: 8px;\n  :hover {\n    cursor: pointer;\n  }\n  background-color: ", ";\n  color: ", ";\n"])), function (_a) {
    var active = _a.active, theme = _a.theme;
    return active && theme.primary1;
}, function (_a) {
    var active = _a.active, theme = _a.theme;
    return (active ? theme.white : theme.text1);
});
var Input = styled_components_1["default"].input(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  background: ", ";\n  font-size: 16px;\n  width: auto;\n  outline: none;\n  &::-webkit-outer-spin-button,\n  &::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n  }\n  color: ", ";\n  text-align: right;\n"], ["\n  background: ", ";\n  font-size: 16px;\n  width: auto;\n  outline: none;\n  &::-webkit-outer-spin-button,\n  &::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n  }\n  color: ", ";\n  text-align: right;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.bg1;
}, function (_a) {
    var theme = _a.theme, color = _a.color;
    return (color === 'red' ? theme.red1 : theme.text1);
});
var OptionCustom = styled_components_1["default"](FancyButton)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  height: 2rem;\n  position: relative;\n  padding: 0 0.75rem;\n  flex: 1;\n  border: ", ";\n  :hover {\n    border: ", ";\n  }\n\n  input {\n    width: 100%;\n    height: 100%;\n    border: 0px;\n    border-radius: 2rem;\n  }\n"], ["\n  height: 2rem;\n  position: relative;\n  padding: 0 0.75rem;\n  flex: 1;\n  border: ", ";\n  :hover {\n    border: ",
    ";\n  }\n\n  input {\n    width: 100%;\n    height: 100%;\n    border: 0px;\n    border-radius: 2rem;\n  }\n"])), function (_a) {
    var theme = _a.theme, active = _a.active, warning = _a.warning;
    return active && "1px solid " + (warning ? theme.red1 : theme.primary1);
}, function (_a) {
    var theme = _a.theme, active = _a.active, warning = _a.warning;
    return active && "1px solid " + (warning ? polished_1.darken(0.1, theme.red1) : polished_1.darken(0.1, theme.primary1));
});
var SlippageEmojiContainer = styled_components_1["default"].span(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  color: #f3841e;\n  ", "\n"], ["\n  color: #f3841e;\n  ",
    "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaWidth.upToSmall(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    display: none;  \n  "], ["\n    display: none;  \n  "])));
});
function SlippageTabs(_a) {
    var rawSlippage = _a.rawSlippage, setRawSlippage = _a.setRawSlippage, deadline = _a.deadline, setDeadline = _a.setDeadline;
    var theme = react_1.useContext(styled_components_1.ThemeContext);
    var inputRef = react_1.useRef();
    var _b = react_1.useState(''), slippageInput = _b[0], setSlippageInput = _b[1];
    var _c = react_1.useState(''), deadlineInput = _c[0], setDeadlineInput = _c[1];
    var slippageInputIsValid = slippageInput === '' || (rawSlippage / 100).toFixed(2) === Number.parseFloat(slippageInput).toFixed(2);
    var deadlineInputIsValid = deadlineInput === '' || (deadline / 60).toString() === deadlineInput;
    var slippageError;
    if (slippageInput !== '' && !slippageInputIsValid) {
        slippageError = SlippageError.InvalidInput;
    }
    else if (slippageInputIsValid && rawSlippage < 50) {
        slippageError = SlippageError.RiskyLow;
    }
    else if (slippageInputIsValid && rawSlippage > 500) {
        slippageError = SlippageError.RiskyHigh;
    }
    else {
        slippageError = undefined;
    }
    var deadlineError;
    if (deadlineInput !== '' && !deadlineInputIsValid) {
        deadlineError = DeadlineError.InvalidInput;
    }
    else {
        deadlineError = undefined;
    }
    function parseCustomSlippage(value) {
        setSlippageInput(value);
        try {
            var valueAsIntFromRoundedFloat = Number.parseInt((Number.parseFloat(value) * 100).toString());
            if (!Number.isNaN(valueAsIntFromRoundedFloat) && valueAsIntFromRoundedFloat < 5000) {
                setRawSlippage(valueAsIntFromRoundedFloat);
            }
        }
        catch (_a) { }
    }
    function parseCustomDeadline(value) {
        setDeadlineInput(value);
        try {
            var valueAsInt = Number.parseInt(value) * 60;
            if (!Number.isNaN(valueAsInt) && valueAsInt > 0) {
                setDeadline(valueAsInt);
            }
        }
        catch (_a) { }
    }
    return (react_1["default"].createElement(Column_1.AutoColumn, { gap: "md" },
        react_1["default"].createElement(Column_1.AutoColumn, { gap: "sm" },
            react_1["default"].createElement(Row_1.RowFixed, null,
                react_1["default"].createElement(theme_1.TYPE.black, { fontWeight: 400, fontSize: 14, color: theme.text2 }, "Slippage tolerance"),
                react_1["default"].createElement(QuestionHelper_1["default"], { text: "Your transaction will revert if the price changes unfavorably by more than this percentage." })),
            react_1["default"].createElement(Row_1.RowBetween, null,
                react_1["default"].createElement(Option, { onClick: function () {
                        setSlippageInput('');
                        setRawSlippage(10);
                    }, active: rawSlippage === 10 }, "0.1%"),
                react_1["default"].createElement(Option, { onClick: function () {
                        setSlippageInput('');
                        setRawSlippage(50);
                    }, active: rawSlippage === 50 }, "0.5%"),
                react_1["default"].createElement(Option, { onClick: function () {
                        setSlippageInput('');
                        setRawSlippage(100);
                    }, active: rawSlippage === 100 }, "1%"),
                react_1["default"].createElement(OptionCustom, { active: ![10, 50, 100].includes(rawSlippage), warning: !slippageInputIsValid, tabIndex: -1 },
                    react_1["default"].createElement(Row_1.RowBetween, null,
                        !!slippageInput &&
                            (slippageError === SlippageError.RiskyLow || slippageError === SlippageError.RiskyHigh) ? (react_1["default"].createElement(SlippageEmojiContainer, null,
                            react_1["default"].createElement("span", { role: "img", "aria-label": "warning" }, "\u26A0\uFE0F"))) : null,
                        react_1["default"].createElement(Input, { ref: inputRef, placeholder: (rawSlippage / 100).toFixed(2), value: slippageInput, onBlur: function () {
                                parseCustomSlippage((rawSlippage / 100).toFixed(2));
                            }, onChange: function (e) { return parseCustomSlippage(e.target.value); }, color: !slippageInputIsValid ? 'red' : '' }),
                        "%"))),
            !!slippageError && (react_1["default"].createElement(Row_1.RowBetween, { style: {
                    fontSize: '14px',
                    paddingTop: '7px',
                    color: slippageError === SlippageError.InvalidInput ? 'red' : '#F3841E'
                } }, slippageError === SlippageError.InvalidInput
                ? 'Enter a valid slippage percentage'
                : slippageError === SlippageError.RiskyLow
                    ? 'Your transaction may fail'
                    : 'Your transaction may be frontrun'))),
        react_1["default"].createElement(Column_1.AutoColumn, { gap: "sm" },
            react_1["default"].createElement(Row_1.RowFixed, null,
                react_1["default"].createElement(theme_1.TYPE.black, { fontSize: 14, fontWeight: 400, color: theme.text2 }, "Transaction deadline"),
                react_1["default"].createElement(QuestionHelper_1["default"], { text: "Your transaction will revert if it is pending for more than this long." })),
            react_1["default"].createElement(Row_1.RowFixed, null,
                react_1["default"].createElement(OptionCustom, { style: { width: '80px' }, tabIndex: -1 },
                    react_1["default"].createElement(Input, { color: !!deadlineError ? 'red' : undefined, onBlur: function () {
                            parseCustomDeadline((deadline / 60).toString());
                        }, placeholder: (deadline / 60).toString(), value: deadlineInput, onChange: function (e) { return parseCustomDeadline(e.target.value); } })),
                react_1["default"].createElement(theme_1.TYPE.body, { style: { paddingLeft: '8px' }, fontSize: 14 }, "minutes")))));
}
exports["default"] = SlippageTabs;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
