import React, { createContext } from "react";
import { LinkData } from "../types"
import { linkData } from "../data"
type NavBarContextType = {
  linkData: LinkData[];
}
export const NavBarContext = createContext<NavBarContextType>({ linkData: linkData });

export const NavBarProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <NavBarContext.Provider value={{ linkData }}>
      {children}
    </NavBarContext.Provider>
  );
}