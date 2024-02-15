import React, { useState } from 'react';
import activity1 from '../assets/activity1.png';

const Outstandingactivity = () => {
  const [currentActivity, setCurrentActivity] = useState(0);

  const activities = [
    {
      image: activity1,
      count: 1,
      name : 'Tokyo Disney Resort',
      location: 'Chiba',
    },
    {
      image: activity1,
      count: 2,
      name : 'Tokyo Disney Resort',
      location: 'Chiba',
    },
    {
      image: activity1,
      count: 3,
      name : 'Tokyo Disney Resort',
      location: 'Chiba',
    },
    {
      image: activity1,
      count: 4,
      name : 'Tokyo Disney Resort',
      location: 'Chiba',
    },
    // Additional activities
    {
      image: activity1,
      count: 5,
      name : 'Tokyo Disney Resort',
      location: 'Chiba',
    },
    {
      image: activity1,
      count: 6,
      name : 'Tokyo Disney Resort',
      location: 'Chiba',
    },
    {
      image: activity1,
      count: 7,
      name : 'Tokyo Disney Resort',
      location: 'Chiba',
    },
    {
      image: activity1,
      count: 8,
      name : 'Tokyo Disney Resort',
      location: 'Chiba',
    },
    {
      image: activity1,
      count: 9,
      name : 'Tokyo Disney Resort',
      location: 'Chiba',
    },
    {
      image: activity1,
      count: 10,
      name : 'Tokyo Disney Resort',
      location: 'Chiba',
    },
    {
      image: activity1,
      count: 11,
      name : 'Tokyo Disney Resort',
      location: 'Chiba',
    },
  ];

  const prevActivity = () => {
    setCurrentActivity((prev) => (prev === 0 ? activities.length - 1 : prev - 1));
  };

  const nextActivity = () => {
    setCurrentActivity((prev) => (prev === activities.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="outstanding-activity p-8 rounded-md shadow-md mb-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-5xl font-bold">Hoạt động giải trí nổi bật</h2>
        <div className="flex items-center">
          <button className="mr-2" onClick={prevActivity}>&lt;</button>
          <button className="text-blue-500 cursor-pointer hover:underline" onClick={nextActivity}>&gt;</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {activities.slice(currentActivity, currentActivity + 4).map((activity, index) => (
          <div key={index} className="activity-item bg-gray-100 p-4 rounded-md hover:shadow-md transition duration-300">
            <img src={activity.image} alt={`Activity ${index + 1}`} className="w-full h-40 object-cover mb-4 rounded-md" />
            <div className="flex flex-col">
              <div className="flex items-center mb-2">
                <span className="text-4xl font-semibold mr-2">{activity.count}</span>
                <div className="flex-none w-32 h-0.5 bg-blue-500"></div>
              </div>
              <p className="residence-textitem text-sm text-gray-600 text-left">Địa điểm: {activity.name}</p>
              <p className="residence-textitem text-sm text-gray-600 text-left">Địa điểm: {activity.location}</p>
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
        .activity-item {
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

export default Outstandingactivity;