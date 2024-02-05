import { useContext, useState } from 'react';
import { NavContext } from '../../Contexts/NavContext';

//name: only alphabet character
const NAME_REGEX = /^[a-zA-Z]{3,20}$/;
//pwd: at least 6 characters, at least one uppercase letter, at least one lowercase letter, at least one digit and at least 1 special character
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{6,}$/;
//email: example: abc@abc.com
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Input = ({
  id,
  label,
  type,
  svg,
  value,
  onChange,
  checkIsError,
  originalPassword,
}) => {
  const { isLogin } = useContext(NavContext);
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [error, setError] = useState('');

  const handleIsError = (e) => {
    checkIsError(e);
  };

  error ? handleIsError(true) : handleIsError(false);

  const togglePasswordVisible = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const validateInput = () => {
    let validationFunction;

    if (id === 'lastName') {
      validationFunction = validateName;
    } else if (id === 'firstName') {
      validationFunction = validateName;
    } else if (id === 'email') {
      validationFunction = validateEmail;
    } else if (id === 'password' && !isLogin) {
      validationFunction = validatePassword;
    } else if (id === 'confirmPassword') {
      validationFunction = validateConfirmPassword;
    }

    setError(validationFunction(value) ? '' : `${label} không hợp lệ`);
  };

  const validateName = (name) => NAME_REGEX.test(name);
  const validateEmail = (email) => EMAIL_REGEX.test(email);
  const validatePassword = (password) => PASSWORD_REGEX.test(password);
  const validateConfirmPassword = (confirmPassword) =>
    confirmPassword === originalPassword;
  return (
    <div>
      <label className="relative">
        <input
          id={id}
          value={value}
          className={`h-12 w-full ${error ? 'mt-4 border-sub-color' : ''} rounded-md border-2 border-secondary-color bg-bg-color px-2`}
          type={isPasswordVisible ? 'text' : type}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            setIsFocused(false);
            validateInput();
          }}
          onChange={onChange}
        />
        {error && (
          <span className="absolute bottom-10 right-2 text-xs text-sub-color">
            {error}
          </span>
        )}
        <span
          className={`absolute left-3 ${isFocused || value ? 'bottom-[22px]' : 'bottom-[0.1px]'} bg-bg-color px-px text-text-color transition-all duration-150 ease-in-out`}
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

export default Input;
