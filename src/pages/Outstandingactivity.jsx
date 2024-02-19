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
        <div className="mt-4 text-right flex hover:font-bold hover:text-base hover:text-accent-color">
          <p className="cursor-pointer text-[#7398D5] ">Xem tất cả</p>
          <svg className='mt-1.5 ml-1' width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M-2.62268e-07 6.5C-2.80374e-07 6.08579 0.335786 5.75 0.75 5.75L11.3879 5.75L7.23017 1.79062C6.93159 1.50353 6.92228 1.02875 7.20937 0.730167C7.49647 0.431589 7.97125 0.422279 8.26983 0.709374L13.7698 5.95937C13.9169 6.10078 14 6.29599 14 6.5C14 6.70401 13.9169 6.89922 13.7698 7.04062L8.26983 12.2906C7.97125 12.5777 7.49647 12.5684 7.20938 12.2698C6.92228 11.9713 6.93159 11.4965 7.23017 11.2094L11.3879 7.25L0.75 7.25C0.335786 7.25 -2.44163e-07 6.91421 -2.62268e-07 6.5Z" fill="#7398D5" />
          </svg>
        </div>
      </div>

      <div className="flex items-center">
        {/* Nút lùi */}
        <button className="text-[#7398D5] hover:underline p-2" onClick={prevActivity}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.75 15L13.75 20M13.75 20L18.75 25M13.75 20H26.25M35 20C35 28.2843 28.2843 35 20 35C11.7157 35 5 28.2843 5 20C5 11.7157 11.7157 5 20 5C28.2843 5 35 11.7157 35 20Z" stroke="#7398D5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

        </button>
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
                  <button className=" ml-32 form-button mt-4 rounded-xl bg-accent-color text-white hover:bg-white hover:font-bold hover:text-accent-color focus:outline-none ">
                    Xem chi tiết
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Nút tiến */}
        <button className="text-[#7398D5] hover:underline p-2" onClick={nextActivity}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.25 21L22.25 16M22.25 16L17.25 11M22.25 16L9.75 16M31 16C31 24.2843 24.2843 31 16 31C7.71573 31 1 24.2843 1 16C1 7.71573 7.71573 1 16 1C24.2843 1 31 7.71573 31 16Z" stroke="#7398D5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>

      <style jsx>{`
      .outstanding-activity{
        min-width: 1240px;
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