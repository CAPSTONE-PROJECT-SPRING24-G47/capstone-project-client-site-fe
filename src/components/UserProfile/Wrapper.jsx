import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Content from './Content';

const Wrapper = () => {
  return (
    <div className="flex flex-col bg-bg-color font-semibold">
      <Navbar />
      <div className="flex h-svh gap-10">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
};

export default Wrapper;
