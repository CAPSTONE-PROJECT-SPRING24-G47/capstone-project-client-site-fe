import React, { useContext } from 'react';
import { NavContext } from '../../Contexts/NavContext';

const AuthForm = () => {
  const { isLogin } = useContext(NavContext);
  return (
    <form className="w-[440px] flex-1 bg-bg-color px-6 py-10 text-center">
      <h1 className="mb-2 p-4 text-4xl font-bold">
        {isLogin ? 'Đăng nhập' : 'Đăng ký tài khoản'}
      </h1>

      <div className="flex flex-col gap-4 py-2">
        {!isLogin && (
          <div>
            <input
              className="h-12 w-full rounded-md border-2 border-secondary-color bg-bg-color px-2 "
              type="text"
              placeholder="E-mail"
            />
          </div>
        )}
        <div className="">
          <input
            className="h-12 w-full  rounded-md border-2 border-secondary-color bg-bg-color px-2"
            type="text"
            placeholder="Tên đăng nhập"
          />
        </div>
        <div>
          <input
            className={`bg-bg-color ${isLogin ? '' : 'mb-10'} h-12 w-full rounded-md border-2 border-secondary-color  px-2 focus:placeholder:-translate-y-6`}
            type="password"
            placeholder="Password"
          />
        </div>
      </div>

      {isLogin && (
        <div className="py-2 text-start text-xs">
          <input
            type="checkbox"
            className=" mr-1 rounded-2xl accent-secondary-color"
          />
          <span>Ghi nhớ đăng nhập</span>
        </div>
      )}

      <button className="hover:scale-10 my-4 h-11 w-full rounded-2xl bg-secondary-color font-semibold text-bg-color hover:opacity-85">
        {isLogin ? 'Đăng nhập' : 'Đăng ký'}
      </button>
      {isLogin && (
        <button className="mb-4 font-light hover:text-secondary-color">
          Quên mật khẩu?
        </button>
      )}
      <div className="mb-2 flex items-center justify-center gap-1">
        <div className="h-px w-full bg-text-color"></div>
        <div className="font-light">Hoặc</div>
        <div className="h-px w-full bg-text-color"></div>
      </div>
      <button className="hover:-translate-y-110 rounded-lg transition delay-150 duration-200 ease-in-out hover:shadow-lg">
        Google
      </button>
    </form>
  );
};

export default AuthForm;
