import React, { useEffect, useRef, useState } from 'react';
import OptionPopup from './OptionPopup';

const TripItem = () => {
  const [isOptionPopup, setIsOptionPopup] = useState(false);

  const optionPopupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!optionPopupRef.current.contains(e.target)) {
        setIsOptionPopup(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [optionPopupRef]);

  return (
    <div
      onClick={() => {}}
      className="relative flex w-full cursor-pointer flex-col gap-5 rounded-xl border-[1px] border-black p-5 transition-shadow duration-150 hover:shadow-md md:w-[80%] lg:w-[70%]"
    >
      <div className="absolute right-[10px] top-[10px]" ref={optionPopupRef}>
        {/* Popup */}
        {isOptionPopup && <OptionPopup />}
        {/* Icon ... */}
        <div
          onClick={(e) => {
            e.stopPropagation();
            setIsOptionPopup((state) => !state);
          }}
          className=" flex h-fit w-fit cursor-pointer items-center justify-center rounded-full p-1 hover:bg-black/10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <div className="text-lg font-bold sm:text-xl md:text-2xl">
          Tên chuyến đi
        </div>
        <div className="flex gap-5 text-sm sm:text-base md:text-lg">
          <div>duration</div>
          <div>location</div>
        </div>
      </div>

      <div className="flex justify-between text-sm sm:text-base md:text-lg">
        <div>Ngày tạo chuyến đi: 12/12/2025</div>
      </div>
    </div>
  );
};

export default TripItem;
