import React, { createContext } from 'react';
import { softSkills } from '../data'

export const SoftSkilsContext = createContext<string[] | null>(null);

export const SoftSkillsProvider = ({ children }: { children: React.ReactNode }) => {

  return (
    <SoftSkilsContext.Provider value={softSkills}>
      {children}
    </SoftSkilsContext.Provider>
  );
};
