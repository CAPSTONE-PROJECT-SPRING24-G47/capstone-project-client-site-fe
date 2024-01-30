import React from 'react';

const AuthForm = ({ title, isVisible, buttonText }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div>
        <input type="text" placeholder="Tên đăng nhập" />
      </div>
      <div>
        <input type="password" placeholder="Password" />
      </div>
      {isVisible && (
        <div>
          <input type="checkbox" /> <span>Ghi nhớ đăng nhập</span>
        </div>
      )}
      <button>{buttonText}</button>
      {isVisible && <div>Quên mật khẩu?</div>}
      <div className="flex items-center justify-center gap-1">
        <div className="h-px w-full bg-text-color"></div>
        <div className="">Hoặc</div>
        <div className="h-px w-full bg-text-color"></div>
      </div>
      <div className="text-center">Google</div>
    </div>
  );
};

export default AuthForm;
