import React, { createContext } from 'react'
import { LinkData } from 'src/types'

const linkData: LinkData[] = [
  { id: 'main', icon: 'fa-house-user' },
  { id: 'projects', icon: 'fa-laptop-code' },
  { id: 'about', icon: 'fa-address-card' },
  { id: 'jobs', icon: 'fa-briefcase' },
  { id: 'study', icon: 'fa-graduation-cap' },
]

export const NavBarContext = createContext(null)

export const NavBarProvider = ({ children }: { children: React.ReactNode }) => {

  return (
    <NavBarContext.Provider value={{ linkData }}>
      {children}
    </NavBarContext.Provider>
  )
}