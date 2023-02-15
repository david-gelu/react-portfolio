import React, { createContext } from 'react'
import { linkData } from '../data'

export const NavBarContext = createContext(null)

export const NavBarProvider = ({ children }: { children: React.ReactNode }) => {

  return (
    <NavBarContext.Provider value={{ linkData }}>
      {children}
    </NavBarContext.Provider>
  )
}