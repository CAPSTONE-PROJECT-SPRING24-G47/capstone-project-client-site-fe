import React, { useContext, useState } from 'react';
import { NavContext } from '../../Contexts/NavContext';

const AuthForm = () => {
  const { isLogin } = useContext(NavContext);

  const FloatingLabelInput = ({ label, type, svg }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisible = () => {
      setIsPasswordVisible(!isPasswordVisible);
    };

    return (
      <div>
        <label className="relative">
          <input
            className="h-12 w-full rounded-md border-2 border-secondary-color bg-bg-color px-2"
            type={isPasswordVisible ? 'text' : type}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={(e) => setInputValue(e.target.value)}
            required
          />
          <span
            className={`absolute left-3 ${isFocused || inputValue ? 'bottom-[22px]' : 'bottom-[0.1px]'} bg-bg-color text-gray-400 transition-all duration-150 ease-in-out`}
          >
            {label}
          </span>
          {type === 'password' ? (
            <button
              type="button"
              className="absolute bottom-[0.1px] right-3"
              onClick={togglePasswordVisible}
            >
              {isPasswordVisible ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="h-6 w-6"
                >
                  <path d="M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-18-18ZM22.676 12.553a11.249 11.249 0 0 1-2.631 4.31l-3.099-3.099a5.25 5.25 0 0 0-6.71-6.71L7.759 4.577a11.217 11.217 0 0 1 4.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113Z" />
                  <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0 1 15.75 12ZM12.53 15.713l-4.243-4.244a3.75 3.75 0 0 0 4.244 4.243Z" />
                  <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 0 0-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 0 1 6.75 12Z" />
                </svg>
              ) : (
                svg
              )}
            </button>
          ) : (
            <span className="absolute bottom-[0.1px] right-3">{svg}</span>
          )}
        </label>
      </div>
    );
  };

  return (
    <form className="w-[440px] flex-1 bg-bg-color px-6 py-10 text-center">
      <h1 className="mb-2 p-4 text-4xl font-bold">
        {isLogin ? 'Đăng nhập' : 'Đăng ký tài khoản'}
      </h1>

      <div className="flex flex-col gap-4 py-2">
        {!isLogin && (
          <>
            <div className="flex gap-3">
              <FloatingLabelInput label={'Họ'} type={'text'} svg={null} />
              <FloatingLabelInput label={'Tên'} type={'text'} svg={null} />
            </div>
            <div>
              <FloatingLabelInput
                label={'Email'}
                type={'text'}
                svg={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="h-6 w-6"
                  >
                    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                  </svg>
                }
              />
            </div>
          </>
        )}
        <FloatingLabelInput
          label={'Username'}
          type={'text'}
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="h-6 w-6"
            >
              <path
                fill-rule="evenodd"
                d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                clip-rule="evenodd"
              />
            </svg>
          }
        />
        <FloatingLabelInput
          label={'Password'}
          type={'password'}
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="h-6 w-6"
            >
              <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
              <path
                fill-rule="evenodd"
                d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z"
                clip-rule="evenodd"
              />
            </svg>
          }
        />
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

      <button className="hover:scale-10 my-4 h-11 w-full rounded-2xl bg-secondary-color font-semibold text-bg-color hover:bg-gradient-to-b hover:from-secondary-color hover:to-accent-color">
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
      <button className="hover:-translate-y-110 rounded-lg transition ease-in-out hover:shadow-lg">
        Google
      </button>
    </form>
  );
};

export default AuthForm;
