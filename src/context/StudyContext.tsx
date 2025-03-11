import React, { createContext, useContext } from 'react';
import { Study } from '../types'
import { studies } from '../data'

const StudyContext = createContext<Study[] | null>(null);

export const StudyProvider = ({ children }: { children: React.ReactNode }) => {

  return (
    <StudyContext.Provider value={studies}>
      {children}
    </StudyContext.Provider>
  );
};

export const useStudy = () => useContext(StudyContext);