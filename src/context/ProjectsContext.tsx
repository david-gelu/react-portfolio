import React, { createContext } from 'react'
import { dataProjects } from '../data'

export const ProjectsContext = createContext(null)

export const ProjectsProvider = ({ children }: { children: React.ReactNode }) => {

  return (
    <ProjectsContext.Provider value={{ dataProjects }}>
      {children}
    </ProjectsContext.Provider>
  )
}