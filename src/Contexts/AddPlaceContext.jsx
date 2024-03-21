import React, { createContext, useState } from 'react';

export const AddPlaceContext = createContext();
export const AddPlaceProvider = ({ children }) => {
  const [placeId, setPlaceId] = useState(null);

  const value = {
    placeId,
    setPlaceId,
  };
  return (
    <AddPlaceContext.Provider value={value}>
      {children}
    </AddPlaceContext.Provider>
  );
};
