import React, { useContext } from 'react';
import { AuthForm, FormSide } from './index';
import { NavContext } from '../../Contexts/NavContext';

const Wrapper = () => {
  const { isPopUp, isLogin, handlePopUp } = useContext(NavContext);
  return (
    <>
      {isPopUp && (
        <>
          <div className="absolute inset-0 bg-[#03121A] opacity-50 backdrop-blur-[20px]" />
          <div
            className={`relative flex w-fit ${isLogin ? '' : 'flex-row-reverse'} z-20 overflow-hidden rounded-2xl`}
          >
            <button
              className="bg absolute right-3 top-3 z-[99] rounded-bl-lg rounded-tr-lg bg-secondary-color p-1 text-bg-color"
              onClick={handlePopUp}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
            <AuthForm />
            <FormSide />
          </div>
        </>
      )}
    </>
  );
};

export default Wrapper;
