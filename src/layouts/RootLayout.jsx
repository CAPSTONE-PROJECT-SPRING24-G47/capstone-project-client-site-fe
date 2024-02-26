import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { Wrapper } from '../components/Auth';
import { NavContext } from '../Contexts/NavContext';
import Navbar from '../components/Navigation/Navbar';

const RootLayout = () => {
  const { isPopUp } = useContext(NavContext);

  return (
    <div>
      <Navbar />
      <main className="relative">
        {isPopUp && <Wrapper />}
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
