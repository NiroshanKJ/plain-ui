import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of the context value
interface PlainUIContextType {
  dark: boolean;
  setDark: (dark: boolean) => void;
}

const PlainUIContext = createContext<PlainUIContextType | undefined>(undefined);

export const PlainUIProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [dark, setDark] = useState<boolean>(false);

  return (
    <PlainUIContext.Provider value={{ dark, setDark }}>
      {children}
    </PlainUIContext.Provider>
  );
};

export const usePlainUI = (): PlainUIContextType => {
  const context = useContext(PlainUIContext);
  if (context === undefined) {
    throw new Error("usePlainUI must be used within a PlainUIProvider");
  }
  return context;
};
