import React from 'react';

const SearchLocationBar = ({ setSearchLocation }) => {
  const handleSearchLocation = (e) => {
    setSearchLocation((prevState) => ({
      ...prevState,
      value: e.target.value,
    }));
  };

  return (
    <input
      onChange={handleSearchLocation}
      type="text"
      className="w-full rounded-lg bg-bg-color p-2 outline-none ring-[1px] focus:ring-[2px] focus:ring-accent-color"
      placeholder="Tìm vùng, tỉnh, thành phố"
    />
  );
};

export default SearchLocationBar;
