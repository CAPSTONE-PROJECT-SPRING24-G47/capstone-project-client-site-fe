import React, { useContext } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
import { NavContext } from '../../Contexts/NavContext';
import { ArrowDownIcon } from './index';

const FormSide = () => {
  const { isLogin, handleChangeForm } = useContext(NavContext);

  return (
    <div className=" flex h-full flex-col items-center justify-center  bg-[#8DCADC] bg-opacity-10 px-6 text-bg-color backdrop-blur-[20px]">
      <div className="mb-6 mt-3 text-center text-4xl font-semibold">
        {isLogin ? 'Chào mừng quay trở lại' : 'Chào mừng bạn'}
      </div>

      <div className="mt-2 h-20 text-3xl font-light">
        {isLogin ? 'Đăng nhập để tiếp tục' : 'Đăng ký để khám phá'}
      </div>
      <div className="mb-4 mt-4 text-center text-2xl font-light">
        {isLogin
          ? 'Chưa có tài khoản? Đăng ký tại đây'
          : 'Đã có tài khoản? Đăng nhập tại đây'}
      </div>
      <ArrowDownIcon />

      <button
        onClick={handleChangeForm}
        className="mt-1 h-10 w-1/2 rounded-2xl bg-bg-color font-semibold text-accent-color transition-all ease-in-out hover:mt-0 hover:opacity-80 active:mt-1"
      >
        {`${isLogin ? 'Đăng ký' : 'Đăng nhập'} `}
      </button>
    </div>
  );
};

export default FormSide;
