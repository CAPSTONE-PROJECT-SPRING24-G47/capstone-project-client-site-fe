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
    <div className="outstanding-residence p-8 rounded-md shadow-md mb-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-5xl font-bold">Nơi ở nổi bật</h2>
        <div className="flex items-center">
          <button className="mr-2" onClick={prevResidence}>&lt;</button>
          <button className="text-blue-500 cursor-pointer hover:underline" onClick={nextResidence}>&gt;</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {residences.slice(currentResidence, currentResidence + 4).map((residence, index) => (
          <div key={index} className="residence-item bg-gray-100 p-4 rounded-md hover:shadow-md transition duration-300">
            <img src={residence.image} alt={`Residence ${index + 1}`} className="w-full h-40 object-cover mb-4 rounded-md" />
            <div className="flex flex-col">
              <div className="flex items-center mb-2">
                <span className="text-4xl font-semibold mr-2">{residence.count}</span>
                <div className="flex-none w-32 h-0.5 bg-blue-500"></div>
              </div>
              <p className="residence-textitem text-sm text-gray-600 text-left">{residence.name}</p>
              <p className="residence-textitem text-sm text-gray-600 text-left">{residence.location}</p>
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
        .residence-item {
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

export default Outstandingresidence;