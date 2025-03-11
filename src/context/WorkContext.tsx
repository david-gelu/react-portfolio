import React, { createContext, useContext } from 'react';
import { Work } from '../types'
import { work } from '../data'

export const WorkContext = createContext<Work[]>(work);

export const WorkProvider = ({ children }: { children: React.ReactNode }) => {


  return (
    <WorkContext.Provider value={work}>
      {children}
    </WorkContext.Provider>
  );
};
