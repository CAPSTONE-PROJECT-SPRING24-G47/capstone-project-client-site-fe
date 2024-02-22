import React from 'react';

const OutstandingItem = ({ image, index, count, name, location }) => {
  return (
    <div className="activity-item ml-4 mr-4 rounded-md bg-bg-color p-4 transition duration-300 hover:shadow-2xl">
      <img
        src={image}
        alt={`Restaurant ${index + 1}`}
        className="mb-4 h-40 w-full rounded-md object-cover"
      />
      <div className="flex flex-col">
        <div className="mb-2 flex items-center">
          <span className="mr-2 text-4xl font-semibold">{count}</span>
          <div className="h-0.5 w-32 flex-none bg-[#7398D5]"></div>
        </div>
        <p className="residence-textitem text-left text-sm text-gray-600">
          {name}
        </p>
        <p className="residence-textitem text-left text-sm text-gray-600">
          {location}
        </p>
        <button className="form-button ml-32 mt-4 rounded-full bg-[#7398D5] text-2xl text-white hover:bg-white hover:font-bold hover:text-accent-color focus:outline-none">
          Xem chi tiết
        </button>
      </div>
    </div>
  );
};

export default OutstandingItem;
