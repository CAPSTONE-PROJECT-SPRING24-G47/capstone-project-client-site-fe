import React, { Fragment, useContext } from 'react';
import { NavContext } from '../Contexts/NavContext';

const Navbar = () => {
  const { handlePopUp, handleIsLogin, handleIsSignUp } = useContext(NavContext);

  return (
    <div className="fixed left-0 right-0 top-0 flex justify-between px-5 py-4">
      <div className="flex flex-col items-center justify-center text-4xl font-bold text-bg-color">
        <svg
          width="150"
          height="27"
          viewBox="0 0 301 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-secondary-color"
        >
          <g clip-path="url(#clip0_496_1980)">
            <path
              d="M199.849 23.4197C194.362 20.9721 188.942 18.3692 183.387 16.1159C166.099 8.94104 147.568 5.24139 128.851 5.22817C112.524 5.32529 97.2852 9.61822 82.7358 16.8832C72.6445 21.8948 51.6558 32.3455 51.6558 32.3455C69.409 30.931 87.2564 31.2042 104.958 33.1613C134.387 36.4053 163.826 53.6645 163.728 53.849C132.58 43.1652 112.252 38.4838 76.4227 38.4838C64.4666 38.4838 52.5105 38.6489 40.5738 38.2701C22.0423 38.2507 8.27001 30.5293 0.5 25.5176C9.08138 27.6367 17.8847 28.7257 26.7238 28.7616C50.3058 28.7616 88.8159 0.371911 122.499 0.371911C140.69 0.255361 158.688 1.87735 175.413 9.76391C183.843 13.746 191.924 18.5052 200.131 22.8855L199.849 23.4197Z"
              // fill="#8DCADC"
            />
            <path
              d="M300.5 46.1372C297.645 44.622 294.828 43.0097 291.943 41.6111C279.691 35.7091 266.673 31.5507 253.268 29.2568C241.586 27.2048 229.702 26.5527 217.866 27.3143C200.131 28.4701 182.406 29.927 164.7 28.8586C154.434 28.237 144.206 26.8287 133.969 25.7797C130.415 25.4107 126.86 25.061 123.286 24.7017L123.169 25.4398C125.665 26.178 128.122 27.1395 130.638 27.6251C141.827 29.7813 152.977 32.4814 164.233 33.6857C175.811 34.8609 187.544 34.657 199.14 34.657C208.124 34.5987 217.118 33.3652 226.092 33.4041C236.242 33.4041 246.411 33.948 256.512 34.9872C268.795 36.3784 280.837 39.3997 292.322 43.9713C294.974 44.9911 297.654 45.8555 300.325 46.7976L300.5 46.1372Z"
              // fill="#7398D5"
            />
          </g>
          <defs>
            <clipPath id="clip0_496_1980">
              <rect
                width="300"
                height="53.483"
                fill="white"
                transform="translate(0.5 0.366211)"
              />
            </clipPath>
          </defs>
        </svg>

        <span className="text-xl">VJITradvisor</span>
      </div>
      <div>
        <button
          className="mr-4 rounded-3xl border border-accent-color px-4 py-1 font-semibold text-bg-color shadow-lg  hover:opacity-80"
          onClick={() => {
            handlePopUp(), handleIsLogin();
          }}
        >
          Đăng nhập
        </button>
        <button
          className="rounded-3xl border border-bg-color bg-bg-color px-4 py-1 font-semibold text-accent-color shadow-lg hover:opacity-80"
          onClick={() => {
            handlePopUp(), handleIsSignUp();
          }}
        >
          Đăng ký
        </button>
      </div>
    </div>
  );
};

export default Navbar;