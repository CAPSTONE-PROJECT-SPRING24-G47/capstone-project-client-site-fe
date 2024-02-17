import React, { useState } from 'react';
import residenceImage from '../assets/restaurant1.png';

const Outstandingresidence = () => {
  const [currentResidence, setCurrentResidence] = useState(0);

  const residences = [
    {
      image: residenceImage,
      count: 1,
      name: 'Kyushu Jangara Ramen',
      location: 'Tokyo',
    },
    {
      image: residenceImage,
      count: 2,
      name: 'Kyushu Jangara Ramen',
      location: 'Tokyo',
    },
    {
      image: residenceImage,
      count: 3,
      name: 'Kyushu Jangara Ramen',
      location: 'Tokyo',
    },
    {
      image: residenceImage,
      count: 4,
      name: 'Kyushu Jangara Ramen',
      location: 'Tokyo',
    },
    {
      image: residenceImage,
      count: 5,
      name: 'a',
      location: 'Tokyo',
    },
    {
      image: residenceImage,
      count: 6,
      name: 'Kyushu Jangara Ramen',
      location: 'Tokyo',
    },
    {
      image: residenceImage,
      count: 7,
      name: 'Kyushu Jangara Ramen',
      location: 'Tokyo',
    },
    {
      image: residenceImage,
      count: 8,
      name: 'Kyushu Jangara Ramen',
      location: 'Tokyo',
    },
  ];

  const prevResidence = () => {
    setCurrentResidence((prev) => (prev === 0 ? residences.length - 1 : prev - 1));
  };

  const nextResidence = () => {
    setCurrentResidence((prev) => (prev === residences.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="outstanding-residence mb-8 rounded-md p-8 font-sans shadow-md">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="pl-14 text-4xl font-bold">Nơi ở nổi bật</h2>
        <div className="mt-4 text-right">
          <p className="cursor-pointer text-[#7398D5] hover:underline">Xem tất cả</p>
        </div>
      </div>

      <div className="flex items-center">
        {/* Nút lùi */}
        <button className="text-[#7398D5] hover:underline p-2" onClick={prevResidence}>&lt;</button>

        {/* Hiển thị các nhà ở */}
        <div className="ml-5 flex-grow flex flex-nowrap overflow-x-auto">
          {residences.slice(currentResidence, currentResidence + 4).map((residence, index) => (
            <div key={index} className="flex-shrink-0 relative mr-3">
              <div className="activity-item rounded-md bg-gray-100 p-4 transition duration-300 hover:shadow-md">
                <img
                  src={residence.image}
                  alt={`Residence ${index + 1}`}
                  className="mb-4 h-40 w-full rounded-md object-cover"
                />
                <div className="flex flex-col">
                  <div className="mb-2 flex items-center">
                    <span className="mr-2 text-4xl font-semibold">
                      {residence.count}
                    </span>
                    <div className="h-0.5 w-32 flex-none bg-[#7398D5]"></div>
                  </div>
                  <p className="residence-textitem text-left text-sm text-gray-600">
                    {residence.name}
                  </p>
                  <p className="residence-textitem text-left text-sm text-gray-600">
                    {residence.location}
                  </p>
                  <button className="ml-32 form-button mt-4 rounded-xl bg-[#7398D5] text-white hover:bg-[#8DCADC] focus:outline-none ">
                    Xem chi tiết
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Nút tiến */}
        <button className="text-[#7398D5] hover:underline p-2" onClick={nextResidence}>&gt;</button>
      </div>

      <style jsx>{`
        .outstanding-residence{
          min-width: 1180px;
        }
        .activity-item {
          max-width: 250px;
          max-height: 400px;
          overflow: hidden; // Ẩn nội dung vượt quá giới hạn.
          position: relative;
        }
        .residence-textitem {
          max-height: 20px;
          overflow: hidden; // Ẩn nội dung vượt quá giới hạn.
        }
        .form-button {
          width: 100px;
          font-size: 14px;
        }
      `}</style>
    </div>
  );
};

export default Outstandingresidence;