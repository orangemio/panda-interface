"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var styled_components_1 = require("styled-components");
var GoogleAnalyticsReporter_1 = require("../components/analytics/GoogleAnalyticsReporter");
var Header_1 = require("../components/Header");
var Popups_1 = require("../components/Popups");
var Web3ReactManager_1 = require("../components/Web3ReactManager");
var DarkModeQueryParamReader_1 = require("../theme/DarkModeQueryParamReader");
var AddLiquidity_1 = require("./AddLiquidity");
var redirects_1 = require("./AddLiquidity/redirects");
var MigrateV1_1 = require("./MigrateV1");
var MigrateV1Exchange_1 = require("./MigrateV1/MigrateV1Exchange");
var RemoveV1Exchange_1 = require("./MigrateV1/RemoveV1Exchange");
var Pool_1 = require("./Pool");
var PoolFinder_1 = require("./PoolFinder");
var RemoveLiquidity_1 = require("./RemoveLiquidity");
var redirects_2 = require("./RemoveLiquidity/redirects");
var Swap_1 = require("./Swap");
var redirects_3 = require("./Swap/redirects");
var AppWrapper = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-flow: column;\n  align-items: flex-start;\n  overflow-x: hidden;\n"], ["\n  display: flex;\n  flex-flow: column;\n  align-items: flex-start;\n  overflow-x: hidden;\n"])));
var HeaderWrapper = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n  width: 100%;\n  justify-content: space-between;\n"], ["\n  ", "\n  width: 100%;\n  justify-content: space-between;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.flexRowNoWrap;
});
var BodyWrapper = styled_components_1["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-top: 160px;\n  align-items: center;\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  z-index: 10;\n\n  ", ";\n\n  z-index: 1;\n"], ["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-top: 160px;\n  align-items: center;\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  z-index: 10;\n\n  ",
    ";\n\n  z-index: 1;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaWidth.upToExtraSmall(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      padding: 16px;\n  "], ["\n      padding: 16px;\n  "])));
});
var Marginer = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  margin-top: 5rem;\n"], ["\n  margin-top: 5rem;\n"])));
function App() {
    return (react_1["default"].createElement(react_1.Suspense, { fallback: null },
        react_1["default"].createElement(react_router_dom_1.HashRouter, null,
            react_1["default"].createElement(react_router_dom_1.Route, { component: GoogleAnalyticsReporter_1["default"] }),
            react_1["default"].createElement(react_router_dom_1.Route, { component: DarkModeQueryParamReader_1["default"] }),
            react_1["default"].createElement(AppWrapper, null,
                react_1["default"].createElement(HeaderWrapper, null,
                    react_1["default"].createElement(Header_1["default"], null)),
                react_1["default"].createElement(BodyWrapper, null,
                    react_1["default"].createElement(Popups_1["default"], null),
                    react_1["default"].createElement(Web3ReactManager_1["default"], null,
                        react_1["default"].createElement(react_router_dom_1.Switch, null,
                            react_1["default"].createElement(react_router_dom_1.Route, { exact: true, strict: true, path: "/swap", component: Swap_1["default"] }),
                            react_1["default"].createElement(react_router_dom_1.Route, { exact: true, strict: true, path: "/swap/:outputCurrency", component: redirects_3.RedirectToSwap }),
                            react_1["default"].createElement(react_router_dom_1.Route, { exact: true, strict: true, path: "/send", component: redirects_3.RedirectPathToSwapOnly }),
                            react_1["default"].createElement(react_router_dom_1.Route, { exact: true, strict: true, path: "/find", component: PoolFinder_1["default"] }),
                            react_1["default"].createElement(react_router_dom_1.Route, { exact: true, strict: true, path: "/pool", component: Pool_1["default"] }),
                            react_1["default"].createElement(react_router_dom_1.Route, { exact: true, strict: true, path: "/create", component: redirects_1.RedirectToAddLiquidity }),
                            react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: "/add", component: AddLiquidity_1["default"] }),
                            react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: "/add/:currencyIdA", component: redirects_1.RedirectOldAddLiquidityPathStructure }),
                            react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: "/add/:currencyIdA/:currencyIdB", component: redirects_1.RedirectDuplicateTokenIds }),
                            react_1["default"].createElement(react_router_dom_1.Route, { exact: true, strict: true, path: "/remove/v1/:address", component: RemoveV1Exchange_1["default"] }),
                            react_1["default"].createElement(react_router_dom_1.Route, { exact: true, strict: true, path: "/remove/:tokens", component: redirects_2.RedirectOldRemoveLiquidityPathStructure }),
                            react_1["default"].createElement(react_router_dom_1.Route, { exact: true, strict: true, path: "/remove/:currencyIdA/:currencyIdB", component: RemoveLiquidity_1["default"] }),
                            react_1["default"].createElement(react_router_dom_1.Route, { exact: true, strict: true, path: "/migrate/v1", component: MigrateV1_1["default"] }),
                            react_1["default"].createElement(react_router_dom_1.Route, { exact: true, strict: true, path: "/migrate/v1/:address", component: MigrateV1Exchange_1["default"] }),
                            react_1["default"].createElement(react_router_dom_1.Route, { component: redirects_3.RedirectPathToSwapOnly }))),
                    react_1["default"].createElement(Marginer, null))))));
}
exports["default"] = App;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
