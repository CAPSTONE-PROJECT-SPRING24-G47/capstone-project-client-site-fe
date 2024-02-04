import React, { useContext } from 'react';
import { AuthForm, FormSide } from './index';
import { NavContext } from '../../Contexts/NavContext';
import { motion } from 'framer-motion';

const Wrapper = () => {
  const { isPopUp, isLogin, handlePopUp } = useContext(NavContext);

  return (
    <>
      {isPopUp && (
        <>
          <div className="absolute inset-0 bg-[#03121A] opacity-50 backdrop-blur-[20px]" />
          <motion.div
            layout
            transition={{ ease: 'easeInOut', duration: 0.3 }}
            className={`relative ${isLogin ? '' : 'flex-row-reverse'} z-20 flex w-fit overflow-hidden rounded-2xl`}
          >
            <button
              className="bg absolute right-3 top-3 z-[99] rounded-bl-lg rounded-tr-lg bg-secondary-color p-1 text-bg-color transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-lg"
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

            <>
              <motion.div
                initial={{ opacity: 0, x: '-100%' }}
                animate={{ opacity: 1, x: '0%' }}
                exit={{ opacity: 0, x: '100%' }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <AuthForm />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: '0%' }}
                exit={{ opacity: 0, x: '-100%' }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <FormSide />
              </motion.div>
            </>
          </motion.div>
        </>
      )}
    </>
  );
};

export default Wrapper;
