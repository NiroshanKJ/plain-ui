"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePlainUI = exports.PlainUIProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const PlainUIContext = (0, react_1.createContext)(undefined);
const PlainUIProvider = ({ children, }) => {
    const [dark, setDark] = (0, react_1.useState)(false);
    return ((0, jsx_runtime_1.jsx)(PlainUIContext.Provider, { value: { dark, setDark }, children: children }));
};
exports.PlainUIProvider = PlainUIProvider;
const usePlainUI = () => {
    const context = (0, react_1.useContext)(PlainUIContext);
    if (context === undefined) {
        throw new Error("usePlainUI must be used within a PlainUIProvider");
    }
    return context;
};
exports.usePlainUI = usePlainUI;
//# sourceMappingURL=theme.js.map