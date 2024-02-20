import React, { useCallback, useContext, useEffect } from 'react';
import { NavContext } from '../Contexts/NavContext';
import { Link, useLocation } from 'react-router-dom';
import useTriggerScroll from '../hooks/useTriggerScroll';
import UserInfo from './UserProfile/UserInfo';
import { UserContext } from '../Contexts/UserContext';
import NotificationIcon from './UserProfile/Icons/NotificationIcon';
import { FormContext } from '../Contexts/FormContext';
import LogoIcon from '../assets/LogoIcon';

const buttonsInfor = [
  {
    title: 'Trang chủ',
    path: '/',
  },
  {
    title: 'Khám phá',
    path: '/explore',
  },
  {
    title: 'Kế hoạch',
    path: '/trip-plan',
  },
];

const Navbar = () => {
  const { handlePopUp, handleIsLogin, handleIsSignUp, setIsPopUp } =
    useContext(NavContext);
  const { user, setUser } = useContext(UserContext);
  const isTrigged = useTriggerScroll(20);
  const location = useLocation();
  const isHomePagePath = location.pathname == '/';

  const handleSignOut = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  useEffect(() => {
    if (user) setIsPopUp(false);
  }, [user]);

  return (
    <div
      className={`${isHomePagePath && isTrigged ? 'bg-bg-color text-text-color' : 'text-bg-color'} ${isHomePagePath ? 'fixed left-0 right-0' : 'sticky top-0 bg-bg-color text-text-color'} top-0 z-[90] flex items-center justify-between px-5 py-2 shadow-sm`}
    >
      {/* Logo */}
      <div className="flex flex-col items-center justify-center text-4xl font-bold">
        <LogoIcon />
        <span
          className={`${isHomePagePath && isTrigged && 'text-accent-color'} ${!isHomePagePath && 'text-accent-color'} text-xl`}
        >
          VJITradvisor
        </span>
      </div>

      <div className="flex gap-14">
        {/* Nút chuyển page */}
        <div className="text-md flex items-center justify-center gap-14 font-semibold ">
          {buttonsInfor.map((button, index) => (
            <div key={index}>
              <Link to={button.path}>{button.title}</Link>
            </div>
          ))}
        </div>

        {/* Nút đăng ký, đăng nhập / nút user profile, đăng xuất */}
        <div className="text-md flex items-center justify-center gap-5">
          {user ? (
            <div className="flex items-center justify-center gap-4">
              <NotificationIcon
                color={isHomePagePath ? '#FFFFFF' : '#7398D5'}
              />
              <UserInfo />
              <button onClick={handleSignOut}>Đăng xuất</button>
            </div>
          ) : (
            <>
              <div>
                <button
                  className={`${isHomePagePath && isTrigged && 'text-accent-color'} ${!isHomePagePath && 'text-accent-color'} rounded-3xl px-4 py-1 font-semibold ring-2 ring-inset ring-accent-color hover:opacity-80`}
                  onClick={() => {
                    handlePopUp(), handleIsLogin();
                  }}
                >
                  Đăng nhập
                </button>
              </div>
              <div>
                <button
                  className={`${isHomePagePath && isTrigged && 'bg-accent-color text-bg-color'} ${isHomePagePath && !isTrigged && 'border-bg-color bg-bg-color text-accent-color'} ${!isHomePagePath && 'bg-accent-color text-bg-color'} rounded-3xl px-4 py-1 font-semibold ring-2 hover:opacity-80`}
                  onClick={() => {
                    handlePopUp(), handleIsSignUp();
                  }}
                >
                  Đăng ký
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
