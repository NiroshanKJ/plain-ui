import React, { createContext, useContext, useEffect, useState, } from "react";
import { ThemeProvider } from "styled-components";
var PlainUIContext = createContext(undefined);
export var PlainUIProvider = function (_a) {
    var children = _a.children, theme = _a.theme;
    var _b = useState(false), dark = _b[0], setDark = _b[1];
    var _c = useState(theme.light), selectedTheme = _c[0], setSelectedTheme = _c[1];
    var setDarkMode = function (dark) { return setDark(dark); };
    useEffect(function () {
        setSelectedTheme(dark ? theme.dark : theme.light);
    }, [dark]);
    return (React.createElement(PlainUIContext.Provider, { value: { dark: dark, theme: selectedTheme, setDarkMode: setDarkMode } },
        React.createElement(ThemeProvider, { theme: selectedTheme }, children)));
};
export var usePlainUIContext = function () {
    var context = useContext(PlainUIContext);
    if (!context) {
        throw new Error("usePlainUIContext must be used within a PlainUIProvider");
    }
    return context;
};
