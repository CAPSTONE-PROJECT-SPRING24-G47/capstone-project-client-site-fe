import React, { createContext, useState } from 'react';

export const NavContext = createContext();
export const NavProvider = ({ children }) => {
  const [isPopUp, setIsPopUp] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isVerify, setIsVerify] = useState(false);
  const [isResetPwdVerify, setIsResetPwdVerify] = useState(false);
  const [isResetPwd, setIsResetPwd] = useState(false);

  const handlePopUp = () => {
    setIsPopUp((isPopUp) => !isPopUp);
  };
  const handleIsLogin = () => {
    setIsResetPwdVerify(false);
    setIsResetPwd(false);

    setIsLogin(true);
  };
  const handleIsSignUp = () => {
    setIsVerify(false);
    setIsResetPwdVerify(false);
    setIsResetPwd(false);

    setIsLogin(false);
  };
  const handleIsVerify = () => {
    setIsVerify(true);
  };
  const handleIsResetPwdVerify = () => {
    setIsResetPwdVerify(true);
  };
  const handleIsResetPwd = () => {
    setIsResetPwd(true);
  };

  const handleChangeForm = () => {
    setIsVerify(false);
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
    isResetPwdVerify,
    isResetPwd,
    handlePopUp,
    handleIsLogin,
    handleIsSignUp,
    handleChangeForm,
    handleIsVerify,
    handleIsResetPwdVerify,
    handleIsResetPwd,
  };
  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
};
