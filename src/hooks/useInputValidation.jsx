import { useEffect, useState } from 'react';

//name: only alphabet character
const NAME_REGEX = /^[a-zA-Z ]{3,20}$/;
//pwd: at least 6 characters, at least one uppercase letter, at least one lowercase letter, at least one digit and at least 1 special character
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{6,}$/;
//email: example: abc@abc.com
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const useInputValidation = (
  id,
  label,
  value,
  originalPassword,
  isLogin,
  checkIsError,
  handleChangeForm
) => {
  const [error, setError] = useState('');

  useEffect(() => {
    setError('');
  }, [handleChangeForm]);

  error ? checkIsError : !checkIsError;

  const validateInput = () => {
    let validationFunction = '';

    if (id === 'lastName') {
      validationFunction = validateName;
    } else if (id === 'firstName') {
      validationFunction = validateName;
    } else if (id === 'email' && !isLogin) {
      validationFunction = validateEmail;
    } else if (id === 'password' && !isLogin) {
      validationFunction = validatePassword;
    } else if (id === 'confirmPassword') {
      validationFunction = validateConfirmPassword;
    }
    if (validationFunction !== '') {
      if (id === 'password') {
        setError(
          validationFunction(value)
            ? ''
            : `${label} cần phải có ít nhất một ký tự viết hoa, viết thường, số, ký tự đặc biệt và phải trên 6 ký tự`
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
