import React, { Fragment, useContext } from 'react';
import { NavContext } from '../Contexts/NavContext';

const Navbar = () => {
  const { handlePopUp, handleIsLogin, handleIsSignUp } = useContext(NavContext);

  return (
    <div className="fixed left-0 right-0 top-0 flex justify-between px-5 py-4">
      <div className="text-4xl font-bold text-bg-color">VJIT</div>
      <div>
        <button
          className="mr-3 rounded-lg   border border-accent-color px-4 py-2"
          onClick={() => {
            handlePopUp(), handleIsLogin();
          }}
        >
          Đăng nhập
        </button>
        <button
          className="rounded-lg bg-bg-color px-4 py-2"
          onClick={() => {
            handlePopUp(), handleIsSignUp();
          }}
        >
          Đăng ký
        </button>
      </div>
    </div>
  );
};

export default Navbar;
