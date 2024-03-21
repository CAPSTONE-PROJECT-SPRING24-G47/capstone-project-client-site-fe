import React from 'react';

const AddIcon = ({ width, height, strokeWidth }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer"
    >
      <path
        d="M40 30V50M50 40H30M70 40C70 56.5685 56.5685 70 40 70C23.4315 70 10 56.5685 10 40C10 23.4315 23.4315 10 40 10C56.5685 10 70 23.4315 70 40Z"
        stroke="#48C75E"
        strokeOpacity="0.7"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default AddIcon;
