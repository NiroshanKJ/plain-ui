"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeProvider = exports.useTheme = exports.ThemeContext = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var DefaultTheme_json_1 = __importDefault(require("./DefaultTheme.json"));
var helper_1 = require("./helper");
exports.ThemeContext = (0, react_1.createContext)(undefined);
var useTheme = function () {
    var context = (0, react_1.useContext)(exports.ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};
exports.useTheme = useTheme;
var ThemeProvider = function (_a) {
    var children = _a.children;
    debugger;
    var _b = (0, react_1.useState)(false), darkMode = _b[0], setDarkMode = _b[1];
    var _c = (0, react_1.useState)(DefaultTheme_json_1.default), theme = _c[0], setTheme = _c[1];
    (0, react_1.useEffect)(function () {
        debugger;
        // const themeData = updateTheme(theme, darkMode);
        var themeData = (0, helper_1.getTheme)(DefaultTheme_json_1.default);
        console.log(themeData, "themeData");
        (0, helper_1.updateTheme)(themeData.theme, themeData.darkMode);
        setTheme(themeData.theme);
        setDarkMode(themeData.darkMode);
    }, []);
    var toggleDarkMode = function () {
        setDarkMode(function (prevDarkMode) {
            var darkMode = !prevDarkMode;
            (0, helper_1.updateTheme)(theme, darkMode);
            return darkMode;
        });
    };
    var themeContextValue = {
        darkMode: darkMode,
        toggleDarkMode: toggleDarkMode,
        theme: theme,
    };
    return ((0, jsx_runtime_1.jsx)(exports.ThemeContext.Provider, { value: themeContextValue, children: children }));
};
exports.ThemeProvider = ThemeProvider;
