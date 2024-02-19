import React, { createContext, useState } from 'react';

export const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isGoogleAuth, setIsGoogleAuth] = useState(false);

  const value = {
    isGoogleAuth,
    user,
    setUser,
    setIsGoogleAuth,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
