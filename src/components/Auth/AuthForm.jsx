import React, { useContext, useEffect, useState } from 'react';
import { NavContext } from '../../Contexts/NavContext';
import { performSignIn, performSignUp } from '../../api/AuthService';
import Input from './Input';

const AuthForm = () => {
  const { isLogin, handleChangeForm } = useContext(NavContext);

  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isError, setIsError] = useState(false);

  const checkIsError = (newError) => {
    setIsError(newError);
  };
  useEffect(() => {
    setEmail('');
    setPassword('');
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

  const [signInData, setSignInData] = useState({
    email: '',
    password: '',
    googleToken: null,
  });
  const [signUpData, setSignUpData] = useState({
    lastName: '',
    firstName: '',
    email: '',
    password: '',
    googleToken: null,
  });
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
  async function handleSignUp() {
    await handleSubmitSignUpData();
    await performSignUp(signUpData);
  }

  async function handleSignIn(e) {
    await handleSubmitSignInData();
    await performSignIn(signInData);
  }

  function handleSubmitClick(e) {
    e.preventDefault();
    isLogin ? handleSignIn() : handleSignUp();
  }
  console.log(signUpData);
  // useEffect(() => {
  //   // API call when signUpData changes
  //   if (signUpData) {
  //     console.log(signUpData);
  //   }
  // }, [signUpData]);

  // useEffect(() => {
  //   // API call when signInData changes
  //   if (signInData) {
  //     console.log(signInData);
  //   }
  // }, [signInData]);
  return (
    <form className="w-[440px] flex-1 bg-bg-color px-6 py-10 text-center">
      <h1 className="mb-2 p-4 text-4xl font-bold">
        {isLogin ? 'Đăng nhập' : 'Đăng ký tài khoản'}
      </h1>

      <div className="flex flex-col gap-4 py-2">
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
        {isLogin ? 'Đăng nhập' : 'Đăng ký'}
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
        className="hover:-translate-y-110 rounded-lg transition ease-in-out hover:shadow-lg"
      >
        Google
      </button>
    </form>
  );
};

export default AuthForm;
