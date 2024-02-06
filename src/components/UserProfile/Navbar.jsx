import UserInfo from './UserInfo';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between border border-b-secondary-color bg-bg-color">
      <div className="ml-4 flex flex-col items-center justify-center text-4xl font-bold text-black">
        <svg
          width="150"
          height="25.5"
          viewBox="0 0 300 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className=" fill-secondary-color"
        >
          <g clip-path="url(#clip0_486_1850)">
            <path d="M199.349 23.0535C193.862 20.6059 188.442 18.003 182.887 15.7497C165.599 8.57483 147.068 4.87518 128.351 4.86195C112.024 4.95908 96.7852 9.25201 82.2358 16.517C72.1445 21.5286 51.1558 31.9793 51.1558 31.9793C68.909 30.5648 86.7564 30.838 104.458 32.7951C133.887 36.0391 163.326 53.2982 163.228 53.4828C132.08 42.799 111.752 38.1176 75.9227 38.1176C63.9666 38.1176 52.0105 38.2827 40.0738 37.9039C21.5423 37.8845 7.77001 30.163 0 25.1514C8.58138 27.2705 17.3847 28.3595 26.2238 28.3954C49.8058 28.3954 88.3159 0.00569988 121.999 0.00569988C140.19 -0.11085 158.188 1.51114 174.913 9.3977C183.343 13.3798 191.424 18.139 199.631 22.5193L199.349 23.0535Z" />
            <path d="M300 45.771C297.144 44.2558 294.328 42.6435 291.443 41.2449C279.191 35.3429 266.173 31.1845 252.768 28.8906C241.086 26.8386 229.202 26.1865 217.366 26.9481C199.631 28.1039 181.906 29.5608 164.2 28.4924C153.934 27.8708 143.706 26.4625 133.469 25.4135C129.914 25.0445 126.36 24.6948 122.785 24.3354L122.669 25.0736C125.165 25.8118 127.622 26.7733 130.138 27.2589C141.327 29.4151 152.477 32.1152 163.733 33.3195C175.311 34.4947 187.043 34.2908 198.64 34.2908C207.624 34.2325 216.618 32.999 225.592 33.0379C235.742 33.0379 245.911 33.5818 256.012 34.621C268.295 36.0122 280.337 39.0334 291.822 43.6051C294.474 44.6249 297.154 45.4893 299.825 46.4314L300 45.771Z" />
          </g>
          <defs>
            <clipPath id="clip0_486_1850">
              <rect width="300" height="53.483" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <span>VJIT</span>
      </div>

      <div className="relative flex flex-grow items-center justify-center">
        <span className="absolute left-56">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </span>
        <input
          className="w-full max-w-xs rounded-lg bg-[#BFE2E7] px-4 py-2 text-black focus:border-blue-500 focus:outline-none"
          type="text"
          placeholder="   Tìm kiếm ..."
        />
      </div>
      <div className="flex flex-row gap-24 font-bold">
        <button>
          <span>Khám phá</span>
        </button>
        <button>
          <span>Kế hoạch</span>
        </button>
      </div>
      <div className="ml-32 mr-24">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.7614 28.4695C27.919 28.095 30.9639 27.3526 33.8519 26.2865C31.4572 23.6284 29.9997 20.1094 29.9997 16.25V15.082C29.9999 15.0547 30 15.0274 30 15C30 9.47715 25.5228 5 20 5C14.4772 5 10 9.47715 10 15L9.99967 16.25C9.99967 20.1094 8.54212 23.6284 6.14746 26.2865C9.03567 27.3527 12.0807 28.0951 15.2386 28.4696M24.7614 28.4695C23.2 28.6547 21.6109 28.75 19.9997 28.75C18.3886 28.75 16.7998 28.6548 15.2386 28.4696M24.7614 28.4695C24.9163 28.9519 25 29.4662 25 30C25 32.7614 22.7614 35 20 35C17.2386 35 15 32.7614 15 30C15 29.4662 15.0837 28.9519 15.2386 28.4696"
            stroke="#7398D5"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div>
        <UserInfo />
      </div>
    </div>
  );
};

export default Navbar;
