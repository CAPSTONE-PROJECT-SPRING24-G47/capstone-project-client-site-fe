import React, { createContext, useState } from 'react';

export const NavContext = createContext();
export const NavProvider = ({ children }) => {
  const [isPopUp, setIsPopUp] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const handlePopUp = () => {
    setIsPopUp((isPopUp) => !isPopUp);
  };
  const handleIsLogin = () => {
    setIsLogin(true);
  };
  const handleIsSignUp = () => {
    setIsLogin(false);
  };

  const value = {
    isPopUp,
    isLogin,
    handlePopUp,
    handleIsLogin,
    handleIsSignUp,
  };
  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
};
