import React, { Fragment, useContext } from 'react';
import { NavContext } from '../Contexts/NavContext';

const Navbar = () => {
  const { handlePopUp, handleIsLogin, handleIsSignUp } = useContext(NavContext);

  return (
    <>
      <div>VJIT</div>
      <div>
        <button
          onClick={() => {
            handlePopUp(), handleIsLogin();
          }}
        >
          Đăng nhập
        </button>
        <button
          onClick={() => {
            handlePopUp(), handleIsSignUp();
          }}
        >
          Đăng ký
        </button>
      </div>
    </>
  );
};

export default Navbar;
