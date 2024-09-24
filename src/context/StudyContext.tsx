import React, { createContext } from 'react'
import { studies } from '../data'

export const StudyContext = createContext(null)

export const StudyProvider = ({ children }: { children: React.ReactNode }) => {

  return (
    <StudyContext.Provider value={{ studies }}>
      {children}
    </StudyContext.Provider>
  )
}