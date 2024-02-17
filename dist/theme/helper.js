"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTheme = exports.updateTheme = void 0;
var updateTheme = function (theme, darkMode) {
    if (darkMode === void 0) { darkMode = false; }
    console.log("🚀 ~ updateTheme ~ theme:", theme);
    localStorage.setItem("themeData", JSON.stringify({ theme: theme, darkMode: darkMode }));
    var type = darkMode ? "dark" : "light";
    document.documentElement.style.setProperty("--bg-primary", theme[type].variant.primary);
};
exports.updateTheme = updateTheme;
var getTheme = function (defaultTheme) {
    var themeData = localStorage.getItem("themeData");
    var parsedTheme = JSON.parse(themeData);
    debugger;
    if (themeData === "undefind" || !parsedTheme.theme) {
        localStorage.setItem("themeData", JSON.stringify({ theme: defaultTheme, darkMode: false }));
        return { theme: defaultTheme, darkMode: false };
    }
    return parsedTheme;
};
exports.getTheme = getTheme;
