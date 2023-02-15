import React, { createContext } from 'react'
import { work } from '../data'

export const WorkContext = createContext(null)

export const WorkProvider = ({ children }: { children: React.ReactNode }) => {

  return (
    <WorkContext.Provider value={{ work }}>
      {children}
    </WorkContext.Provider>
  )
}