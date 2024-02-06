import React, { createContext, useState } from 'react';

export const NavContext = createContext();
export const NavProvider = ({ children }) => {
  const [isPopUp, setIsPopUp] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isVerify, setIsVerify] = useState(false);

  const handlePopUp = () => {
    setIsPopUp((isPopUp) => !isPopUp);
  };
  const handleIsLogin = () => {
    setIsLogin(true);
  };
  const handleIsSignUp = () => {
    setIsLogin(false);
  };
  const handleIsVerify = () => {
    setIsVerify(true);
  };

  const handleChangeForm = () => {
    if (isLogin) {
      handleIsSignUp();
    } else {
      handleIsLogin();
    }
  };
  const value = {
    isPopUp,
    isLogin,
    isVerify,
    handlePopUp,
    handleIsLogin,
    handleIsSignUp,
    handleChangeForm,
    handleIsVerify,
  };
  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
};
