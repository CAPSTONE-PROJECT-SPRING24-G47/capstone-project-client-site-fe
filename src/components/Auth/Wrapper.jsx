import React, { useContext } from 'react';
import { AuthForm, BackIcon, CloseIcon, FormSide } from './index';
import { NavContext } from '../../Contexts/NavContext';
import { motion } from 'framer-motion';

const Wrapper = () => {
  const { isLogin, isResetPwdVerify, handlePopUp, handleIsLogin } =
    useContext(NavContext);

  return (
    <div className="fixed inset-0 z-[99] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-[#03121A] opacity-50 backdrop-blur-[20px]"
        onClick={handlePopUp}
      />
      <motion.div
        layout
        transition={{ ease: 'easeInOut', duration: 0.3 }}
        className={`relative ${isLogin ? '' : 'flex-row-reverse'} z-50 flex w-fit overflow-hidden rounded-2xl`}
      >
        <>
          {isResetPwdVerify && (
            <button
              className="bg absolute left-3 top-3 z-[99] rounded-full p-1 text-bg-color transition ease-in-out hover:-translate-y-1 hover:scale-110"
              onClick={handleIsLogin}
            >
              <BackIcon />
            </button>
          )}
          <button
            className="bg absolute right-3 top-3 z-[99] rounded-bl-lg rounded-tr-lg bg-secondary-color p-1 text-bg-color transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:shadow-lg"
            onClick={handlePopUp}
          >
            <CloseIcon />
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
            {!isResetPwdVerify && (
              <motion.div
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: '0%' }}
                exit={{ opacity: 0, x: '-100%' }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <FormSide />
              </motion.div>
            )}
          </>
        </>
      </motion.div>
    </div>
  );
};

export default Wrapper;
