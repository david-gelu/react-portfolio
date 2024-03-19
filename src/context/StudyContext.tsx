import React, { createContext } from 'react'
import { itSchoolStudy, freeCodeCampStudy, udemyStudy, mongoStudy } from '../data'

export const StudyContext = createContext(null)

export const StudyProvider = ({ children }: { children: React.ReactNode }) => {

  return (
    <StudyContext.Provider value={{ itSchoolStudy, freeCodeCampStudy, udemyStudy, mongoStudy }}>
      {children}
    </StudyContext.Provider>
  )
}