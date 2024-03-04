import { useContext, useState } from 'react';
import { NavContext } from '../../Contexts/NavContext';
import useInputValidation from '../../hooks/useInputValidation';
import { ErrorIcon, EyeCloseIcon } from '../Auth';

const Input = ({ id, label, type, svg, value, onChange, originalPassword }) => {
  const { handleChangeForm, isVerify, isForgetPwd, isResetPwd } =
    useContext(NavContext);
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [error, validateInput] = useInputValidation(
    id,
    label,
    value,
    originalPassword
  );

  const togglePasswordVisible = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="relative">
      <div className="flex items-center gap-10">
        <label id="lastName" className="w-2/5 text-xl">
          {label}
        </label>
        <input
          id={id}
          value={value}
          // autoComplete={id == 'confirmPassword' ? { originalPassword } : ''}
          className={`${error ? 'mt-6 border-sub-color' : ''} w-1/2 border-b border-slate-500 bg-bg-secondary-color px-px font-medium outline-none`}
          type={isPasswordVisible ? 'text' : type}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            setIsFocused(false);
            validateInput();
          }}
          onChange={onChange}
          placeholder="Nhập"
        />
        {error && (
          <div className="group absolute bottom-11 right-6 flex items-end ">
            <span className="z-[99] select-none rounded-md bg-red-100 px-2 text-base font-normal text-sub-color opacity-0 transition-all duration-75 hover:opacity-100 group-hover:opacity-100">
              {error}
            </span>
            <span>
              <ErrorIcon />
            </span>
          </div>
        )}

        <button
          type="button"
          className="absolute bottom-[2px] right-6"
          onClick={togglePasswordVisible}
        >
          {isPasswordVisible ? <EyeCloseIcon /> : svg}
        </button>
      </div>
    </div>
  );
};

export default Input;

{
  /* <input
      placeholder="Nhập"
      className="w-3/5 border-b border-slate-500 bg-bg-secondary-color px-px font-medium outline-none"
      value={value}
      onChange={onChange}
    /> */
}
