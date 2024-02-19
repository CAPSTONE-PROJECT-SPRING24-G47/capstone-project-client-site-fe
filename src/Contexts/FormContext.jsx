import React, { createContext, useState } from 'react';

export const FormContext = createContext();
export const FormProvider = ({ children }) => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const value = {
    isError,
    setIsError,
    response,
    setResponse,
    isLoading,
    setIsLoading,
  };
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};
