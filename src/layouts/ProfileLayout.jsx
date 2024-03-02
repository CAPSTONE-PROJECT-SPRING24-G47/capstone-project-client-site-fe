import React from 'react';
import Sidebar from '../components/UserProfile/Sidebar';
import { Outlet } from 'react-router-dom';

const ProfileLayout = () => {
  return (
    <div className="flex h-full w-full gap-10 bg-bg-color p-5">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default ProfileLayout;
