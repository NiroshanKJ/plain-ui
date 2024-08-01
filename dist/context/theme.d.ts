import React, { ReactNode } from "react";
interface PlainUIContextType {
    dark: boolean;
    setDark: (dark: boolean) => void;
}
export declare const PlainUIProvider: React.FC<{
    children: ReactNode;
}>;
export declare const usePlainUI: () => PlainUIContextType;
export {};
//# sourceMappingURL=theme.d.ts.map