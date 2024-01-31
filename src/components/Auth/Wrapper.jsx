import React, { useContext } from 'react';
import { AuthForm, FormSide } from './index';
import { NavContext } from '../../Contexts/NavContext';

const Wrapper = () => {
  const { isPopUp, isLogin, handlePopUp } = useContext(NavContext);
  return (
    <>
      {isPopUp && (
        <div
          className={`relative flex w-fit ${isLogin ? '' : 'flex-row-reverse'} overflow-hidden rounded-2xl`}
        >
          <button
            className="absolute right-2 top-2 text-bg-color"
            onClick={handlePopUp}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="z-[99] h-6 w-6 text-text-color"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
          <>
            <AuthForm />

            <FormSide />
          </>
        </div>
      )}
    </>
  );
};

export default Wrapper;
