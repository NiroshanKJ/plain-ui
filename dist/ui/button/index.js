"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Button = ({ children, type = "primary", onClick = () => { }, }) => {
    return (0, jsx_runtime_1.jsx)("button", { onClick: onClick, children: children });
};
exports.Button = Button;
//# sourceMappingURL=index.js.map