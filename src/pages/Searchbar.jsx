import React from 'react';
import PropTypes from 'prop-types';

const Searchbar = ({ onSearch }) => {
  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    onSearch(searchTerm);
  };

  return (
    <div className="flex items-center justify-center mt-4 mb-8">
      <div className="relative flex items-center bg-white rounded-md overflow-hidden shadow-md">
        <select className="border-r border-gray-300 px-3 py-2 focus:outline-none focus:border-blue-500">
          <option value="restaurant">Nhà hàng</option>
          <option value="accommodation">Nơi ở</option>
          <option value="entertainment">Hoạt động giải trí</option>
        </select>
        <input
          type="text"
          placeholder="Tìm kiếm"
          className="border-r border-gray-300 px-80 py-2 flex-1 focus:outline-none focus:border-blue-500"
          onChange={handleSearch}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          onClick={() => onSearch('')}
        >
          Tìm kiếm
        </button>
      </div>
    </div>
  );
};

Searchbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Searchbar;
