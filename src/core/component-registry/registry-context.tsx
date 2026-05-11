// src/core/component-registry/registry-context.tsx

import { createContext, useContext } from "react";
import type { FC } from "react";
import { componentRegistry } from "./ComponentRegistry";

const RegistryContext = createContext(componentRegistry);

export const useComponentRegistry = () => useContext(RegistryContext);

export const RegistryProvider: FC<any> = ({ children }) => {
  return (
    <RegistryContext.Provider value={componentRegistry}>
      {children}
    </RegistryContext.Provider>
  );
};