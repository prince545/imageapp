import React, { createContext, useState } from "react";

// 1) Create the context
export const AppContext = createContext();

// 2) Create the Provider component
export const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const value = {
    user,
    setUser,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};
