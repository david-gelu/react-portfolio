import React, { createContext, useState } from 'react';

type appType = {
  finishedTyping: () => void;
  isFinishedTyping: boolean;
  shouldShowOtherComponents: boolean;
}

export const AppContext = createContext<appType | null>(null);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isFinishedTyping, setIsFinishedTyping] = useState(false);
  const [shouldShowOtherComponents, setShouldShowOtherComponents] = useState(false);

  const finishedTyping = () => {
    setShouldShowOtherComponents(true);

    setTimeout(() => {
      setIsFinishedTyping(true);
    }, 500);
  };

  return (
    <AppContext.Provider value={{ finishedTyping, isFinishedTyping, shouldShowOtherComponents }}>
      {children}
    </AppContext.Provider>
  );
};