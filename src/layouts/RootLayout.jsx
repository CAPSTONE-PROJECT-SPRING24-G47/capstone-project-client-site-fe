import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { Wrapper } from '../components/Auth';
import { NavContext } from '../Contexts/NavContext';
import Navbar from '../components/Navigation/Navbar';
import Footer from '../components/Footer';

const RootLayout = () => {
  const { isPopUp } = useContext(NavContext);

  return (
    <div>
      <Navbar />
      <main className="relative">
        {isPopUp && <Wrapper />}
        <Outlet />
      </main>
      <footer className="bg-bg-color">
        <div className="w-full">
          <Footer />
        </div>
      </footer>
    </div>
  );
};

export default RootLayout;
