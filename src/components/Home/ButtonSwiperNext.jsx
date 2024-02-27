import React from 'react';

const ButtonSwiperNext = ({ handleSwipeNext }) => {
  return (
    <div
      className="cursor-pointer select-none"
      onClick={() => {
        handleSwipeNext();
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#7398D5"
        className="h-10 w-10"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    </div>
  );
};

export default ButtonSwiperNext;
