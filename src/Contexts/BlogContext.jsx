import React, { createContext, useState } from 'react';

export const BlogContext = createContext();
export const BlogProvider = ({ children }) => {
  const [limitBlog, setLimitBlog] = useState([]);
  const [isPopUp, setIsPopUp] = useState(false);

  const value = {
    limitBlog,
    setLimitBlog,
    isPopUp,
    setIsPopUp,
  };
  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};
