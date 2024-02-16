import React, { createContext, useState } from 'react';

export const FormContext = createContext();
export const FormProvider = ({ children }) => {
  const [isError, setIsError] = useState(false);

  const value = {
    isError,
    setIsError,
  };
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};
