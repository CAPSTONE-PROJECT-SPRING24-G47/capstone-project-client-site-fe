import React, { createContext, useState } from 'react';

export const BlogContext = createContext();
export const BlogProvider = ({ children }) => {
  const [limitBlog, setLimitBlog] = useState([]);

  const value = {
    limitBlog,
    setLimitBlog,
  };
  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};
