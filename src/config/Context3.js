import React, { createContext, useState } from 'react';

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [loginInfo, setLoginInfo] = useState(null);
  const [selectedProvider, setSelectedProvider] = useState(null);

  return (
    <Context.Provider value={{ loginInfo, setLoginInfo, selectedProvider, setSelectedProvider }}>
      {children}
    </Context.Provider>
  );
};
