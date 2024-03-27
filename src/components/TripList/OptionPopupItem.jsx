import React from 'react';

const OptionPopupItem = ({ text, svg, isDelete }) => {
  return (
    <div
      className={`flex w-full cursor-pointer justify-end gap-3 p-2 text-sm hover:bg-[#E8F3E3] sm:text-base ${isDelete ? 'text-sub-color' : ''}`}
    >
      <div>{text}</div>
      <div>{svg}</div>
    </div>
  );
};

export default OptionPopupItem;
