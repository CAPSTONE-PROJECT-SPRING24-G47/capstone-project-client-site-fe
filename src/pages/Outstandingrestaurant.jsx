import React, { useState } from 'react';
import restaurant1 from '../assets/restaurant1.png';

const Outstandingrestaurant = () => {
  const [currentRestaurant, setCurrentRestaurant] = useState(0);

  const restaurants = [
    {
      image: restaurant1,
      count: 1,
      name: 'Sushi Paradise',
      location : 'Tokyo',
    },
    {
      image: restaurant1,
      count: 2,
      name: 'Raménami',
      location : 'Tokyo',
    },
    {
      image: restaurant1,
      count: 3,
      name: 'Tempura Delight',
      location : 'Tokyo',
    },
    {
      image: restaurant1,
      count: 4,
      name: 'Teppanyaki Fusion',
      location : 'Tokyo',
    },
    {
      image: restaurant1,
      count: 5,
      name: 'Kyushu Jangara Ramen',
      location : 'Tokyo',
    },
    {
      image: restaurant1,
      count: 6,
      name: 'Kyushu Jangara Ramen',
      location : 'Tokyo',
    },
    {
      image: restaurant1,
      count: 7,
      name: 'Kyushu Jangara Ramen',
      location : 'Tokyo',
    },
    {
      image: restaurant1,
      count: 8,
      name: 'Kyushu Jangara Ramen',
      location : 'Tokyo',
    },
    {
      image: restaurant1,
      count: 9,
      name: 'Kyushu Jangara Ramen',
      location : 'Tokyo',
    },
    {
      image: restaurant1,
      count: 10,
      name: 'Kyushu Jangara Ramen',
      location : 'Tokyo',
    },
    {
      image: restaurant1,
      count: 11,
      name: 'Kyushu Jangara Ramen',
      location : 'Tokyo',
    },
  ];

  const prevRestaurant = () => {
    setCurrentRestaurant((prev) => (prev === 0 ? restaurants.length - 1 : prev - 1));
  };

  const nextRestaurant = () => {
    setCurrentRestaurant((prev) => (prev === restaurants.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="outstanding-restaurant p-8 rounded-md shadow-md mb-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-5xl font-bold">Nhà hàng nổi bật</h2>
        <div className="flex items-center">
          <button className="mr-2" onClick={prevRestaurant}>&lt;</button>
          <button className="text-blue-500 cursor-pointer hover:underline" onClick={nextRestaurant}>&gt;</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {restaurants.slice(currentRestaurant, currentRestaurant + 4).map((restaurant, index) => (
          <div key={index} className="restaurant-item bg-gray-100 p-4 rounded-md hover:shadow-md transition duration-300">
            <img src={restaurant.image} alt={`Restaurant ${index + 1}`} className="w-full h-40 object-cover mb-4 rounded-md" />
            <div className="flex flex-col">
              <div className="flex items-center mb-2">
                <span className="text-4xl font-semibold mr-2">{restaurant.count}</span>
                <div className="flex-none w-32 h-0.5 bg-blue-500"></div>
              </div>
              <p className="residence-textitem text-sm text-gray-600 text-left"> {restaurant.name}</p>
              <p className="residence-textitem text-sm text-gray-600 text-left">{restaurant.location}</p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
                Xem chi tiết
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-right mt-4">
        <p className="text-blue-500 cursor-pointer hover:underline">Xem tất cả</p>
      </div>
      <style jsx>{`
        .restaurant-item {
            max-width: 250px; 
            max-height: 400px; 
            overflow: hidden; // Ẩn nội dung vượt quá giới hạn.
        }
        .residence-textitem {
            max-height: 20px; 
            overflow: hidden; // Ẩn nội dung vượt quá giới hạn.
        }
      `}</style>
    </div>
  );
};

export default Outstandingrestaurant;