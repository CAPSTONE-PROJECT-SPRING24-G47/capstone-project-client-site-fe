import React, { createContext, useState } from 'react';

export const FormContext = createContext();
export const FormProvider = ({ children }) => {
  const [isError, setIsError] = useState(false);
  const handleIsError = () => {
    setIsError(true);
  };
  const value = { isError, handleIsError };
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};
