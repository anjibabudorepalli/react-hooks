import { createContext, useState, useMemo } from "react";

export const CounterContext = createContext(null);

export function CounterProvider({ children }) {
  return (
    <CounterContext.Provider value={contextValue}>
      {children}
    </CounterContext.Provider>
  );
}
