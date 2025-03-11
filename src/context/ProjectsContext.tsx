import React, { createContext, useEffect, useState } from 'react'
import { dataProjects } from '../data'

interface Project {
  key: string;
  imgUrl: any;
  imgDesc: string;
  projectLink: string;
  projectGit: string;
  teh: string[];
}

interface ProjectsContextType {
  dataProjects: Project[];
}

export const ProjectsContext = createContext<ProjectsContextType | null>(null)

export const ProjectsProvider = ({ children }: { children: React.ReactNode }) => {

  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectsData = await dataProjects;
        console.log('projectsData:', projectsData);
        if (projectsData) {
          setProjects(projectsData);
        }
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