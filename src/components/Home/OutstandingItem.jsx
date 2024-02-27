import React from 'react';

const OutstandingItem = ({ image, count, name, location }) => {
  return (
    <div className="activity-item my-4 select-none rounded-md bg-bg-color p-4 transition duration-300 hover:shadow-lg">
      <img src={image} className="mb-4 h-40 w-full rounded-md object-cover" />
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
        <div className="flex justify-end">
          <div className="inline-block rounded-full bg-[#7398D5] px-4 py-1 text-lg text-white hover:bg-white hover:font-bold hover:text-accent-color focus:outline-none">
            Xem chi tiết
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutstandingItem;
