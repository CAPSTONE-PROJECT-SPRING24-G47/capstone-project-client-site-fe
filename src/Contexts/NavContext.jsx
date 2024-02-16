import React, { createContext, useState } from 'react';

export const NavContext = createContext();
export const NavProvider = ({ children }) => {
  const [isPopUp, setIsPopUp] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isVerify, setIsVerify] = useState(false);
  const [isVerifySuccess, setIsVerifySuccess] = useState(false);
  const [isForgetPwdVerify, setIsForgetPwdVerify] = useState(false);
  const [isForgetPwd, setIsForgetPwd] = useState(false);
  const [isResetPwd, setIsResetPwd] = useState(false);

  const handlePopUp = () => {
    setIsPopUp((isPopUp) => !isPopUp);
  };
  const handleIsLogin = () => {
    setIsForgetPwdVerify(false);
    setIsForgetPwd(false);
    setIsResetPwd(false);
    setIsVerifySuccess(false);

    setIsLogin(true);
  };
  const handleIsSignUp = () => {
    setIsVerify(false);
    setIsForgetPwdVerify(false);
    setIsForgetPwd(false);
    setIsResetPwd(false);

    setIsLogin(false);
  };
  const handleIsVerify = () => {
    setIsVerify(true);
  };
  const handleIsVerifySuccess = () => {
    setIsVerify(false);
    setIsVerifySuccess(true);
  };
  const handleIsForgetPwdVerify = () => {
    setIsForgetPwdVerify(true);
  };
  const handleIsForgetPwd = () => {
    setIsForgetPwdVerify(false);
    setIsForgetPwd(true);
  };
  const handleIsResetPwd = () => {
    setIsForgetPwd(false);
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
    isForgetPwdVerify,
    isResetPwd,
    isForgetPwd,
    isVerifySuccess,
    handlePopUp,
    handleIsLogin,
    handleIsSignUp,
    handleChangeForm,
    handleIsVerify,
    handleIsForgetPwdVerify,
    handleIsResetPwd,
    handleIsForgetPwd,
    handleIsVerifySuccess,
  };
  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
};
