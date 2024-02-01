import React, { useContext } from 'react';
import { NavContext } from '../../Contexts/NavContext';

const FormSide = () => {
  const { isLogin, handleIsLogin, handleIsSignUp } = useContext(NavContext);

  const handleChangeForm = () => {
    if (isLogin) {
      handleIsSignUp();
    } else {
      handleIsLogin();
    }
  };

  return (
    <div className=" flex w-[440px] flex-1 flex-col items-center justify-center  bg-[#8DCADC] bg-opacity-10 px-6 text-bg-color backdrop-blur-[20px]">
      <div className="mb-6 mt-3 text-4xl font-semibold">
        {isLogin ? 'Chào mừng quay trở lại' : 'Chào mừng bạn'}
      </div>

      <div className="mt-3 h-20 text-3xl font-light">
        {isLogin ? 'Đăng nhập để tiếp tục' : 'Đăng ký để khám phá'}
      </div>
      <div className="mt-4 text-2xl font-light">
        {isLogin
          ? 'Chưa có tài khoản? Đăng ký tại đây'
          : 'Đã có tài khoản? Đăng nhập tại đây'}
      </div>
      <button
        onClick={handleChangeForm}
        className="mt-6 h-10 w-1/2 rounded-2xl bg-bg-color font-semibold text-accent-color"
      >
        {`${isLogin ? 'Đăng ký' : 'Đăng nhập'} `}
      </button>
    </div>
  );
};

export default FormSide;
