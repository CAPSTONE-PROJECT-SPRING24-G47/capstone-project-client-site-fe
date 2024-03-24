import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { Wrapper } from '../components/Auth';
import { NavContext } from '../Contexts/NavContext';
import Navbar from '../components/Navigation/Navbar';
import Footer from '../components/Footer';
import { AlertContext } from '../Contexts/AlertContext';
import { AnimatePresence } from 'framer-motion';

import Alert from '../components/Alert';

const RootLayout = () => {
  const { isPopUp } = useContext(NavContext);
  const { isShow } = useContext(AlertContext);

  return (
    <div>
      <Navbar />
      <main className="relative">
        {isPopUp && <Wrapper />}
        <AnimatePresence>{isShow && <Alert />}</AnimatePresence>
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
