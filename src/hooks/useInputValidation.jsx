import { useContext, useEffect, useState } from 'react';
import { FormContext } from '../Contexts/FormContext';

//name: only alphabet character
const NAME_REGEX = /^[\p{L} ]{3,20}$/u;
//pwd: at least 6 characters, at least one uppercase letter, at least one lowercase letter, at least one digit and at least 1 special character
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{6,}$/;
//email: example: abc@abc.com
const EMAIL_REGEX = /^(?![0-9])[^@\s]+@[^\s@]+\.[^\s@]+$/;

const useInputValidation = (
  id,
  label,
  value,
  originalPassword,
  isLogin,
  isSignUp,
  handleChangeForm,
  isResetPwd
) => {
  const [error, setError] = useState('');
  const { setIsError } = useContext(FormContext);
  useEffect(() => {
    setError('');
  }, [handleChangeForm]);

  useEffect(() => {
    error.length !== 0 ? setIsError(true) : setIsError(false);
  }, [error]);

  const validateInput = () => {
    let validationFunction = '';

    if (id === 'lastName') {
      validationFunction = validateName;
    } else if (id === 'firstName') {
      validationFunction = validateName;
    } else if (id === 'email' && isSignUp) {
      validationFunction = validateEmail;
    } else if ((id === 'password' && isSignUp) || isResetPwd) {
      validationFunction = validatePassword;
    } else if (id === 'confirmPassword') {
      validationFunction = validateConfirmPassword;
    }
    if (validationFunction !== '') {
      if (id === 'password') {
        setError(
          validationFunction(value)
            ? ''
            : `${label} cần phải có từ 6 kí tự trở lên, bao gồm 1 ký tự viết hoa, 1 kí tự viết thường, 1 kí tự số, 1 kí tự đặc biệt`
        );
      } else if (id === 'confirmPassword')
        setError(validationFunction(value) ? '' : `${label} không khớp`);
      else setError(validationFunction(value) ? '' : `${label} không hợp lệ. `);
    }
  };

  const validateName = (name) => NAME_REGEX.test(name);
  const validateEmail = (email) => EMAIL_REGEX.test(email);
  const validatePassword = (password) => PASSWORD_REGEX.test(password);
  const validateConfirmPassword = (confirmPassword) =>
    confirmPassword === originalPassword;

  return [error, validateInput];
};

export default useInputValidation;
