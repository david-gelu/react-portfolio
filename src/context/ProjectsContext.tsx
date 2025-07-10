import React, { createContext, useEffect, useState } from 'react'
import { dataProjects } from '../data'
import { DataProjects } from '../types';



interface ProjectsContextType {
  dataProjects: DataProjects[];
}

export const ProjectsContext = createContext<ProjectsContextType | null>(null)

export const ProjectsProvider = ({ children }: { children: React.ReactNode }) => {

  const [projects, setProjects] = useState<DataProjects[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectsData = await dataProjects;
        if (projectsData) setProjects(projectsData);
        else console.error("No projects data found");
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, [projects]);

  return (
    <ProjectsContext.Provider value={{ dataProjects: projects }}>
      {children}
    </ProjectsContext.Provider>
  )
}