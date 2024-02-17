import React from 'react';
import PropTypes from 'prop-types';
import { FaUtensils, FaBed, FaStar } from 'react-icons/fa';

const Searchbar = ({ onSearch }) => {
  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    onSearch(searchTerm);
  };

  return (
    <div className="mt-4 mb-8 bg-[#F1FBF3] ">
      <div className='px-20 rounded-full pb-5 border border-gray-300'>
        <div className='flex'>
          <div className='mr-60 inline-block tẽ'>
            <FaUtensils />
            <span>Nhà hàng</span>
          </div>
          <div className='mr-60 ml-32 inline-block'>
            <FaBed />
            <span>Nơi ở</span>
          </div>
          <div className='ml-32 inline-block'>
            <FaStar />
            <span>Hoạt động giải trí</span>
          </div>
        </div>
        <div className="relative flex items-center bg-gray-200 rounded-full overflow-hidden shadow-md">
          <input
            type="text"
            placeholder=""
            className=" border-[#E8F3EA] bg-gray-200 px-80 py-2 my-3 "
            onChange={handleSearch}
          />
          <button
            className="rounded-3xl text-xl font-bold bg-[#7398D5] text-white mx-2 px-7 py-2 hover:bg-[#8DCADC] focus:outline-none focus:shadow-outline-blue"
            onClick={() => onSearch('')}
          >
            Tìm kiếm
          </button>
        </div>
      </div>
    </div>
  );
};

Searchbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Searchbar;
