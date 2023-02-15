import React, { createContext } from 'react'
import { itSchoolStudy, freeCodeCampStudy, udemyStudy } from '../data'

export const StudyContext = createContext(null)

export const StudyProvider = ({ children }: { children: React.ReactNode }) => {

  return (
    <StudyContext.Provider value={{ itSchoolStudy, freeCodeCampStudy, udemyStudy }}>
      {children}
    </StudyContext.Provider>
  )
}