import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TripSurveySearchBar = ({
  setSearchLocation,
  searchLocation,
  searchResult,
  isFocus,
  setIsFocus,
}) => {
  const handleSearchLocation = (e) => {
    setSearchLocation((prevState) => ({
      ...prevState,
      value: e.target.value,
    }));
  };

  return (
    <motion.div
      className={`flex w-full justify-center text-lg text-text-color ${isFocus ? 'opacity-[100%]' : 'opacity-[70%]'}`}
    >
      <div
        className={`relative flex w-1/2 items-center overflow-hidden bg-bg-color px-5 py-2 ${searchResult.length === 0 ? 'rounded-xl' : 'rounded-t-xl'}`}
      >
        <label for="search-input" className="flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-12 w-12"
          >
            <path d="M8.25 10.875a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0Z" />
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.125 4.5a4.125 4.125 0 1 0 2.338 7.524l2.007 2.006a.75.75 0 1 0 1.06-1.06l-2.006-2.007a4.125 4.125 0 0 0-3.399-6.463Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
        <input
          id="search-input"
          type="text"
          placeholder="Nhập vùng, tỉnh hoặc thành phố"
          autoFocus="true"
          value={searchLocation.value}
          onChange={handleSearchLocation}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          className="my-2 flex-1 select-none bg-bg-color px-4 py-1 outline-none"
        />
      </div>
    </motion.div>
  );
};

export default TripSurveySearchBar;
