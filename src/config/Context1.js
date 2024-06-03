import React, { createContext, useState } from 'react';

export const Context1 = createContext();

export const ContextProvider = ({ children }) => {
  const [loginInfo, setLoginInfo] = useState({
   
  });
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [selectedProviderAddrees, setSelectedProviderAddrees] = useState(null);
  const [selectedByUsername, setSelectedByUsername] = useState(null);

  return (
    <Context1.Provider value={{ loginInfo, setLoginInfo, selectedProvider, setSelectedProvider, selectedByUsername, 
     setSelectedByUsername,selectedProviderAddrees ,setSelectedProviderAddrees}}>
      {children}
    </Context1.Provider>
  );
};
