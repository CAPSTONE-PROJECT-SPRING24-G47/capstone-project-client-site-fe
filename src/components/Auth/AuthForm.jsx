import React, { useContext, useEffect, useState } from 'react';
import { NavContext } from '../../Contexts/NavContext';
import {
  performSignIn,
  performSignUp,
  sendVerifyData,
  sendEmailForgetPwd,
  handleForgetPwdData,
} from '../../api/AuthService';
import { EyeOpenIcon, EmailIcon, Input } from './index';
import GoogleButton from './GoogleButton';
import { FormContext } from '../../Contexts/FormContext';
import SuccessIconBig from './Icons/SuccessIconBig';

const AuthForm = () => {
  const {
    isLogin,
    handleIsVerify,
    isVerify,
    isVerifySuccess,
    handleIsVerifySuccess,
    handleIsForgetPwdVerify,
    isForgetPwdVerify,
    isResetPwd,
    handleIsResetPwd,
    isForgetPwd,
    handleIsForgetPwd,
    handleIsSignUp,
    handleIsLogin,
  } = useContext(NavContext);
  const { isError } = useContext(FormContext);

  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [verificationCode, setVerificationCode] = useState('');

  const [signInData, setSignInData] = useState(null);
  const [signUpData, setSignUpData] = useState(null);
  const [verifyData, setVerifyData] = useState(null);
  const [forgetPwdData, setForgetPwdData] = useState(null);

  useEffect(() => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setSignInData(null);
    setSignUpData(null);
    setVerifyData(null);
  }, [isLogin]);

  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleLastNameChange = (e) => setLastName(e.target.value);
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);
  const handleVerificationCodeChange = (e) =>
    setVerificationCode(e.target.value);

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

  const handleSubmitVerifyData = () => {
    setVerifyData({
      firstName,
      lastName,
      email,
      password,
      verificationCode,
    });
  };

  const handleSubmitForgetPwdData = () => {
    setForgetPwdData({
      email,
      verificationCode,
      password,
    });
  };
  function handleSubmitClick(e) {
    e.preventDefault();
    if (isVerify) {
      handleSubmitVerifyData();
      handleIsVerifySuccess();
    } else if (isForgetPwdVerify) {
      sendEmailForgetPwd(email);
      handleIsForgetPwd();
    } else if (isForgetPwd) {
      handleSubmitForgetPwdData();
      handleIsResetPwd();
    } else {
      if (isLogin) handleSubmitSignInData();
      else {
        handleSubmitSignUpData();
        handleIsVerify();
      }
    }
  }

  useEffect(() => {
    if (signUpData) {
      performSignUp(signUpData);
    } else if (signInData) {
      performSignIn(signInData);
    }
  }, [signUpData, signInData]);

  useEffect(() => {
    if (verifyData) sendVerifyData(verifyData);
  }, [verifyData]);

  useEffect(() => {
    if (forgetPwdData) handleForgetPwdData(forgetPwdData);
  }, [forgetPwdData]);

  function handleSendCodeAgain(e) {
    e.preventDefault();
    handleSubmitSignUpData();
  }

  return (
    <form
      className={`w-[460px] flex-1 bg-bg-color px-8 py-10 text-center ${isVerify || isForgetPwdVerify || isForgetPwd || isResetPwd ? 'py-32' : isLogin ? 'py-20' : ''} ${isVerifySuccess ? 'py-40' : ''}`}
    >
      {isVerifySuccess && (
        <div className="flex-col items-center justify-center">
          <>
            <SuccessIconBig />
          </>
          <h2 className="mt-8 text-2xl font-semibold">
            Chúc mừng bạn đã thành công!
          </h2>
          <h5 className="mb-4 text-xl font-medium">
            Bấm <span className="text-accent-color">Tiếp tục</span> để đăng nhập
          </h5>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleIsLogin();
            }}
            className="h-11 w-1/2 rounded-2xl bg-secondary-color font-semibold text-bg-color hover:bg-gradient-to-b hover:from-secondary-color hover:to-accent-color"
          >
            Tiếp tục
          </button>
        </div>
      )}
      {!isVerifySuccess && (
        <>
          <h1
            className={`${isVerify ? 'pb-0' : 'mb-2'} p-4 text-4xl font-bold`}
          >
            {!isResetPwd
              ? !isForgetPwdVerify && !isForgetPwd
                ? !isVerify
                  ? isLogin
                    ? 'Đăng nhập'
                    : 'Đăng ký'
                  : 'Mã Xác nhận'
                : 'Quên mật khẩu'
              : 'Thiết lập mật khẩu'}
          </h1>
          {(isVerify || isForgetPwdVerify || (isForgetPwd && !isResetPwd)) && (
            <div className="font-semibold">
              {!isForgetPwdVerify && !isForgetPwd && (
                <h2 className="pb-8">đã được gửi tới {email}</h2>
              )}
              <p className="mb-1 text-start text-sm">
                {!isForgetPwd
                  ? !isForgetPwdVerify
                    ? 'Nhập mã xác nhận để hoàn tất đăng ký'
                    : 'Nhập email để thiết lập lại mật khẩu'
                  : `Nhập mã xác nhận vừa được gửi tới ${email}`}
              </p>
            </div>
          )}

          <div className="flex flex-col gap-4 py-2">
            {(isVerify || isForgetPwd) && (
              <>
                <Input
                  id={'verificationCode'}
                  label={'Mã xác nhận'}
                  type={'text'}
                  value={verificationCode}
                  onChange={handleVerificationCodeChange}
                />
              </>
            )}
            {!isVerify && (
              <>
                {!isLogin && (
                  <>
                    <div className="flex justify-between gap-3">
                      <Input
                        id={'lastName'}
                        label={'Họ'}
                        type={'text'}
                        value={lastName}
                        onChange={handleLastNameChange}
                      />
                      <Input
                        id={'firstName'}
                        label={'Tên'}
                        type={'text'}
                        value={firstName}
                        onChange={handleFirstNameChange}
                      />
                    </div>
                  </>
                )}
                {!isForgetPwd && !isResetPwd && (
                  <Input
                    id={'email'}
                    label={'Email'}
                    type={'text'}
                    value={email}
                    onChange={handleEmailChange}
                    svg={<EmailIcon />}
                  />
                )}
                <>
                  {((!isForgetPwdVerify && !isForgetPwd) || isResetPwd) && (
                    <>
                      <Input
                        id={'password'}
                        label={'Mật khẩu'}
                        type={'password'}
                        value={password}
                        onChange={handlePasswordChange}
                        svg={<EyeOpenIcon />}
                      />

                      {(!isLogin || isResetPwd) && (
                        <Input
                          id={'confirmPassword'}
                          label={'Nhập lại mật khẩu'}
                          type={'password'}
                          value={confirmPassword}
                          onChange={handleConfirmPasswordChange}
                          originalPassword={password}
                          svg={<EyeOpenIcon />}
                        />
                      )}
                    </>
                  )}
                </>
              </>
            )}
          </div>
          {isLogin && !isForgetPwdVerify && !isForgetPwd && !isResetPwd && (
            <div className="text-md flex justify-between py-0 text-start text-secondary-color">
              <div className="group">
                <input
                  type="checkbox"
                  className="mr-1 rounded-2xl accent-accent-color"
                />
                <span className="">Ghi nhớ đăng nhập</span>
              </div>
              <button
                type="button"
                className="rounded-lg px-1 hover:bg-secondary-color/20"
                onClick={handleIsForgetPwdVerify}
              >
                Quên mật khẩu?
              </button>
            </div>
          )}

          <button
            type="button"
            onClick={handleSubmitClick}
            disabled={
              isError ||
              (!isForgetPwdVerify
                ? !isVerify && !isForgetPwd
                  ? isLogin
                    ? !email || !password
                    : !email ||
                      !password ||
                      !lastName ||
                      !firstName ||
                      !confirmPassword
                  : !verificationCode
                : !email)
            }
            className={`hover:scale-10 mb-2 mt-8 h-11 w-full rounded-2xl bg-secondary-color font-semibold text-bg-color hover:bg-gradient-to-b hover:from-secondary-color hover:to-accent-color disabled:bg-secondary-color/70 disabled:hover:bg-none`}
          >
            {!isVerify && !isForgetPwd && !isResetPwd
              ? !isForgetPwdVerify
                ? isLogin
                  ? 'Đăng nhập'
                  : 'Đăng ký'
                : 'Gửi mã xác nhận'
              : 'Xác nhận'}
          </button>

          {!isVerify && !isForgetPwdVerify && !isForgetPwd && !isResetPwd && (
            <>
              <div className="mb-2 flex items-center justify-center gap-1">
                <div className="h-px w-full bg-text-color"></div>
                <div className="font-light">Hoặc</div>
                <div className="h-px w-full bg-text-color"></div>
              </div>
              {/* Google button */}
              <div className="flex items-center justify-center">
                <GoogleButton />
              </div>
            </>
          )}
          {isVerify && (
            <div className="flex justify-between text-accent-color">
              <button
                onClick={handleIsSignUp}
                type="button"
                className="hover:text-secondary-color"
              >
                Điều chỉnh email
              </button>
              <button
                onClick={handleSendCodeAgain}
                className="hover:text-secondary-color"
              >
                Gửi lại mã
              </button>
            </div>
          )}
        </>
      )}
    </form>
  );
};

export default AuthForm;
