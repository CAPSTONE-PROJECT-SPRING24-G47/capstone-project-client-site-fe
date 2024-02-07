import { useContext, useState } from 'react';
import { NavContext } from '../../Contexts/NavContext';
import { EyeCloseIcon, ErrorIcon } from './index';
import useInputValidation from '../../hooks/useInputValidation';

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
  const { isLogin, handleChangeForm, isVerify } = useContext(NavContext);
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [error, validateInput] = useInputValidation(
    id,
    label,
    value,
    originalPassword,
    isLogin,
    checkIsError,
    handleChangeForm
  );

  const togglePasswordVisible = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div>
      <label className="relative">
        <input
          id={id}
          value={value}
          autoComplete={id == 'confirmPassword' ? { originalPassword } : ''}
          className={` h-12 w-full ${error ? 'mt-6 border-sub-color' : ''} rounded-md border-2 border-secondary-color bg-bg-color px-2`}
          type={isPasswordVisible ? 'text' : type}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            setIsFocused(false);
            validateInput();
          }}
          onChange={onChange}
          maxLength={isVerify ? '7' : ''}
        />
        {error && (
          <div className="group absolute bottom-11 right-1 flex items-end ">
            <span className="z-[99] select-none rounded-md bg-red-100 px-1 pt-1 text-sm text-sub-color opacity-0 transition-all duration-75 hover:opacity-100 group-hover:opacity-100">
              {error}
            </span>
            <span>
              <ErrorIcon />
            </span>
          </div>
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
            {isPasswordVisible ? <EyeCloseIcon /> : svg}
          </button>
        ) : (
          <span className="absolute bottom-[0.1px] right-3">{svg}</span>
        )}
      </label>
    </div>
  );
};

export default Input;
