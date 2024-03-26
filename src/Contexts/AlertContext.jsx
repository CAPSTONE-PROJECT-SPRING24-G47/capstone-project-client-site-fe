import React, { createContext, useState } from 'react';

export const AlertContext = createContext();
export const AlertProvider = ({ children }) => {
  const [isShow, setIsShow] = useState(false);
  const [alertData, setAlertData] = useState({
    message: '',
    textColor: '',
    backGroundColor: '',
  });

  const value = {
    isShow,
    setIsShow,
    alertData,
    setAlertData,
  };
  return (
    <AlertContext.Provider value={value}>{children}</AlertContext.Provider>
  );
};
