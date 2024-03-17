import React, { createContext, useState } from 'react';

export const CommentContext = createContext();
export const CommentProvider = ({ children }) => {
  const [isDeletePopUp, setIsDeletePopUp] = useState(false);
  const [dataId, setDataId] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);

  const value = {
    dataId,
    setDataId,
    isDeletePopUp,
    setIsDeletePopUp,
    isConfirm,
    setIsConfirm,
  };

  return (
    <CommentContext.Provider value={value}>{children}</CommentContext.Provider>
  );
};
