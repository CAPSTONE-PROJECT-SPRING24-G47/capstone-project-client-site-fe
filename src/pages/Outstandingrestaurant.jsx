import React, { useState } from 'react';
import restaurant1 from '../assets/restaurant1.png';

const Outstandingrestaurant = () => {
  const [currentRestaurant, setCurrentRestaurant] = useState(0);

  const restaurants = [
    {
      image: restaurant1,
      count: 1,
      name: 'Sushi Paradise',
      location: 'Tokyo',
    },
    {
      image: restaurant1,
      count: 2,
      name: 'Raménami',
      location: 'Tokyo',
    },
    {
      image: restaurant1,
      count: 3,
      name: 'Tempura Delight',
      location: 'Tokyo',
    },
    {
      image: restaurant1,
      count: 4,
      name: 'Teppanyaki Fusion',
      location: 'Tokyo',
    },
    {
      image: restaurant1,
      count: 5,
      name: 'Kyushu Jangara Ramen',
      location: 'Tokyo',
    },
    {
      image: restaurant1,
      count: 6,
      name: 'Kyushu Jangara Ramen',
      location: 'Tokyo',
    },
    {
      image: restaurant1,
      count: 7,
      name: 'Kyushu Jangara Ramen',
      location: 'Tokyo',
    },
    {
      image: restaurant1,
      count: 8,
      name: 'Kyushu Jangara Ramen',
      location: 'Tokyo',
    },
    {
      image: restaurant1,
      count: 9,
      name: 'Kyushu Jangara Ramen',
      location: 'Tokyo',
    },
    {
      image: restaurant1,
      count: 10,
      name: 'Kyushu Jangara Ramen',
      location: 'Tokyo',
    },
    {
      image: restaurant1,
      count: 11,
      name: 'Kyushu Jangara Ramen',
      location: 'Tokyo',
    },
  ];

  const prevRestaurant = () => {
    setCurrentRestaurant((prev) => (prev === 0 ? restaurants.length - 1 : prev - 1));
  };

  const nextRestaurant = () => {
    setCurrentRestaurant((prev) => (prev === restaurants.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="outstanding-restaurant mb-8 rounded-md p-8 font-sans shadow-md">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="pl-14 text-4xl font-bold">Nhà hàng nổi bật</h2>
        <div className="mt-4 text-right">
          <p className="cursor-pointer text-[#7398D5] hover:underline">Xem tất cả</p>
        </div>
      </div>

      <div className="flex items-center">
        {/* Nút lùi */}
        <button className="text-[#7398D5] hover:underline p-2" onClick={prevRestaurant}>&lt;</button>

        {/* Hiển thị các nhà hàng */}
        <div className=" ml-5 flex-grow flex flex-nowrap overflow-x-auto">
          {restaurants.slice(currentRestaurant, currentRestaurant + 4).map((restaurant, index) => (
            <div key={index} className="flex-shrink-0 relative mr-3">
              <div className="activity-item rounded-md bg-gray-100 p-4 transition duration-300 hover:shadow-md">
                <img
                  src={restaurant.image}
                  alt={`Restaurant ${index + 1}`}
                  className="mb-4 h-40 w-full rounded-md object-cover"
                />
                <div className="flex flex-col">
                  <div className="mb-2 flex items-center">
                    <span className="mr-2 text-4xl font-semibold">
                      {restaurant.count}
                    </span>
                    <div className="h-0.5 w-32 flex-none bg-[#7398D5]"></div>
                  </div>
                  <p className="residence-textitem text-left text-sm text-gray-600">
                    {restaurant.name}
                  </p>
                  <p className="residence-textitem text-left text-sm text-gray-600">
                    {restaurant.location}
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
        <button className="text-[#7398D5] hover:underline p-2" onClick={nextRestaurant}>&gt;</button>
      </div>

      <style jsx>{`
      .outstanding-restaurant{
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

export default Outstandingrestaurant;