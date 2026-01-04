import React, { createContext } from 'react';
import { Studies } from '../types'
import { studies } from '../data'

export const StudyContext = createContext<Studies | null>(null);

export const StudyProvider = ({ children }: { children: React.ReactNode }) => {

  return (
    <StudyContext.Provider value={studies}>
      {children}
    </StudyContext.Provider>
  );
};
