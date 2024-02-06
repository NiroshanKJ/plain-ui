import React, { createContext, useContext, useState } from "react";
import { getFirstKeyInObject, prepareTheme } from "../helpers";
var PlainUIContext = createContext(undefined);
export var PlainUIProvider = function (_a) {
    var children = _a.children, themes = _a.themes;
    console.log("renders");
    var themeState = prepareTheme(themes, getFirstKeyInObject(themes));
    var _b = useState(themeState), theme = _b[0], setTheme = _b[1];
    var setCurrentTheme = function (themeName) {
        var themeState = prepareTheme(themes, themeName);
        setTheme(themeState);
    };
    return (React.createElement(PlainUIContext.Provider, { value: {
            theme: theme.theme,
            setTheme: setCurrentTheme,
        } },
        React.createElement("div", { style: theme.themeStyle }, children)));
};
export var usePlainUI = function () {
    var context = useContext(PlainUIContext);
    if (!context)
        throw new Error("usePlainUI must be used within a PlainUIProvider to access the Plain UI context.");
    return context;
};
