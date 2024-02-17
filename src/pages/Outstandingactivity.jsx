import React, { useState } from 'react';
import activity1 from '../assets/activity1.png';

const Outstandingactivity = () => {
  const [currentActivity, setCurrentActivity] = useState(0);

  const activities = [
    {
      image: activity1,
      count: 1,
      name: 'Tokyo Disney Resort',
      location: 'Chiba',
    },
    {
      image: activity1,
      count: 2,
      name: 'Tokyo Disney Resort',
      location: 'Chiba',
    },
    {
      image: activity1,
      count: 3,
      name: 'Tokyo Disney Resort',
      location: 'Chiba',
    },
    {
      image: activity1,
      count: 4,
      name: 'Tokyo Disney Resort',
      location: 'Chiba',
    },
    // Additional activities
    {
      image: activity1,
      count: 5,
      name: 'Tokyo Disney Resort',
      location: 'Chiba',
    },
    {
      image: activity1,
      count: 6,
      name: 'Tokyo Disney Resort',
      location: 'Chiba',
    },
    {
      image: activity1,
      count: 7,
      name: 'Tokyo Disney Resort',
      location: 'Chiba',
    },
    {
      image: activity1,
      count: 8,
      name: 'Tokyo Disney Resort',
      location: 'Chiba',
    },
    {
      image: activity1,
      count: 9,
      name: 'Tokyo Disney Resort',
      location: 'Chiba',
    },
    {
      image: activity1,
      count: 10,
      name: 'Tokyo Disney Resort',
      location: 'Chiba',
    },
    {
      image: activity1,
      count: 11,
      name: 'Tokyo Disney Resort',
      location: 'Chiba',
    },
  ];

  const prevActivity = () => {
    setCurrentActivity((prev) =>
      prev === 0 ? activities.length - 1 : prev - 1
    );
  };

  const nextActivity = () => {
    setCurrentActivity((prev) =>
      prev === activities.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="outstanding-activity mb-8 rounded-md p-8 font-sans shadow-md">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="pl-14 text-4xl font-bold">Hoạt động giải trí nổi bật</h2>
        <div className="mt-4 text-right">
          <p className="cursor-pointer text-[#7398D5] hover:underline"> Xem tất cả</p>
        </div>
      </div>

      <div className="flex items-center">
        {/* Nút lùi */}
        <button className="text-[#7398D5] hover:underline p-2" onClick={prevActivity}>&lt;</button>

        {/* Hiển thị các hoạt động */}
        <div className=" ml-5 flex-grow flex flex-nowrap overflow-x-auto">
          {activities.slice(currentActivity, currentActivity + 4).map((activity, index) => (
            <div key={index} className="flex-shrink-0 relative mr-3">
              <div className="activity-item rounded-md bg-gray-100 p-4 transition duration-300 hover:shadow-md">
                <img
                  src={activity.image}
                  alt={`Activity ${index + 1}`}
                  className="mb-4 h-40 w-full rounded-md object-cover"
                />
                <div className="flex flex-col">
                  <div className="mb-2 flex items-center">
                    <span className="mr-2 text-4xl font-semibold">
                      {activity.count}
                    </span>
                    <div className="h-0.5 w-32 flex-none bg-[#7398D5]"></div>
                  </div>
                  <p className="residence-textitem text-left text-sm text-gray-600">
                    {activity.name}
                  </p>
                  <p className="residence-textitem text-left text-sm text-gray-600">
                    {activity.location}
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
        <button className="text-[#7398D5] hover:underline p-2" onClick={nextActivity}>&gt;</button>
      </div>

      <style jsx>{`
      .outstanding-activity{
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

export default Outstandingactivity;
