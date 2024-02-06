import React, { useContext, useEffect, useState } from 'react';
import { NavContext } from '../../Contexts/NavContext';
import { performSignIn, performSignUp } from '../../api/AuthService';
import Input from './Input';
import { verify } from '../../api';

const AuthForm = () => {
  const { isLogin, handleChangeForm, handleIsVerify, isVerify } =
    useContext(NavContext);

  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [verifyCode, setVerifyCode] = useState('');
  const [isError, setIsError] = useState(false);

  const [signInData, setSignInData] = useState(null);
  const [signUpData, setSignUpData] = useState(null);

  const checkIsError = (newError) => {
    setIsError(newError);
  };
  useEffect(() => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setSignInData(null);
    setSignUpData(null);
  }, [handleChangeForm]);

  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleLastNameChange = (e) => setLastName(e.target.value);
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);
  const handleVerifyCodeChange = (e) => setVerifyCode(e.target.value);

  const handleSubmitSignInData = () => {
    setSignInData({
      email,
      password,
    });
  };
  const handleSubmitSignUpData = () => {
    setSignUpData({
      firstName,
      lastName,
      email,
      password,
    });
  };

  useEffect(() => {
    if (signUpData) {
      performSignUp(signUpData);
    } else if (signInData) {
      performSignIn(signInData);
    }
  }, [signUpData, signInData]);

  function handleSubmitClick(e) {
    if (isLogin) handleSubmitSignInData();
    else {
      handleSubmitSignUpData();
      handleIsVerify;
    }
  }

  return (
    <form className="w-[440px] flex-1 bg-bg-color px-6 py-10 text-center">
      <h1 className="mb-2 p-4 text-4xl font-bold">
        {!isVerify ? (isLogin ? 'Đăng nhập' : 'Đăng ký') : 'Xác nhận'}
      </h1>

      <div className="flex flex-col gap-4 py-2">
        {isVerify && (
          <>
            <Input
              id={'verifyCode'}
              label={'Mã xác nhận'}
              type={'text'}
              value={verifyCode}
              onChange={handleVerifyCodeChange}
              // checkIsError={checkIsError}
            />
          </>
        )}
        {!isLogin && (
          <>
            <div className="flex gap-3">
              <Input
                id={'lastName'}
                label={'Họ'}
                type={'text'}
                value={lastName}
                onChange={handleLastNameChange}
                checkIsError={checkIsError}
              />
              <Input
                id={'firstName'}
                label={'Tên'}
                type={'text'}
                value={firstName}
                onChange={handleFirstNameChange}
                checkIsError={checkIsError}
              />
            </div>
          </>
        )}
        <Input
          id={'email'}
          label={'Email'}
          type={'text'}
          value={email}
          onChange={handleEmailChange}
          checkIsError={checkIsError}
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
        <Input
          id={'password'}
          label={'Mật khẩu'}
          type={'password'}
          value={password}
          onChange={handlePasswordChange}
          checkIsError={checkIsError}
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

        {!isLogin && (
          <Input
            id={'confirmPassword'}
            label={'Nhập lại mật khẩu'}
            type={'password'}
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            checkIsError={checkIsError}
            originalPassword={password}
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
        )}
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

      <button
        type="button"
        onClick={handleSubmitClick}
        disabled={
          isError ||
          (isLogin
            ? !email || !password
            : !email ||
              !password ||
              !lastName ||
              !firstName ||
              !confirmPassword)
            ? true
            : false
        }
        className={`hover:scale-10 my-4 h-11 w-full rounded-2xl bg-secondary-color font-semibold text-bg-color hover:bg-gradient-to-b hover:from-secondary-color hover:to-accent-color disabled:bg-secondary-color/70 disabled:hover:bg-none`}
      >
        {!isVerify ? (isLogin ? 'Đăng nhập' : 'Đăng ký') : 'Xác nhận'}
      </button>
      {isLogin && (
        <button
          type="button"
          className="mb-4 font-light hover:text-secondary-color"
        >
          Quên mật khẩu?
        </button>
      )}
      <div className="mb-2 flex items-center justify-center gap-1">
        <div className="h-px w-full bg-text-color"></div>
        <div className="font-light">Hoặc</div>
        <div className="h-px w-full bg-text-color"></div>
      </div>
      <button
        type="button"
        className="rounded-full transition ease-in-out hover:shadow-lg"
      >
        <svg
          width="51"
          height="45"
          viewBox="0 0 51 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="0.5"
            width="49.625"
            height="44"
            rx="22"
            stroke="#7398D5"
          />
          <path
            d="M11.6625 16.8875C12.9625 14.8166 14.9568 13.0756 17.4226 11.8593C19.8883 10.643 22.7282 9.99927 25.625 10C29.8359 10 33.3734 11.2388 36.0781 13.2563L31.5984 16.8413C29.9781 15.6025 27.9188 14.9713 25.625 14.9713C21.5547 14.9713 18.1094 17.1713 16.8828 20.125C16.5703 20.875 16.3922 21.675 16.3922 22.5C16.3922 23.325 16.5703 24.125 16.8828 24.875C18.1109 27.83 21.5547 30.0288 25.625 30.0288C27.7266 30.0288 29.5156 29.585 30.9156 28.835C31.7272 28.4075 32.4221 27.8528 32.9581 27.2044C33.4942 26.556 33.8603 25.8273 34.0344 25.0625H25.625V20.2275H40.3406C40.525 21.045 40.625 21.8975 40.625 22.7838C40.625 26.5913 38.9219 29.7962 35.9656 31.9712C33.3813 33.8813 29.8438 35 25.625 35C23.5729 35.0007 21.5407 34.6778 19.6446 34.0498C17.7485 33.4219 16.0257 32.5012 14.5746 31.3403C13.1235 30.1794 11.9726 28.8012 11.1877 27.2843C10.4028 25.7675 9.99918 24.1417 10 22.5C10 20.4825 10.6031 18.575 11.6625 16.8875Z"
            fill="#7398D5"
          />
        </svg>
      </button>
    </form>
  );
};

export default AuthForm;
