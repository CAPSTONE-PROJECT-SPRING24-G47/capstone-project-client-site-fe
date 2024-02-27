import React, { useState } from 'react';
import OutstandingItem from './OutstandingItem';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const OutstandingSection = ({ activities, type }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevActivity = () => {
    setCurrentIndex((prev) => (prev === 0 ? activities.length - 1 : prev - 1));
  };

  const nextActivity = () => {
    setCurrentIndex((prev) => (prev === activities.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className={`outstanding-section mb-8 rounded-md p-8 font-sans ${type}`}
    >
      <div className="mb-6 flex items-center justify-between">
        <h2 className="ml-24 border-l-4 border-accent-color pl-2 text-4xl font-bold">
          {type}
        </h2>
        <div className="mt-4 flex text-right hover:text-base hover:font-bold hover:text-accent-color">
          <p className="cursor-pointer text-[#7398D5] ">Xem tất cả</p>
          <svg
            className="ml-1 mt-1.5"
            width="14"
            height="13"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M-2.62268e-07 6.5C-2.80374e-07 6.08579 0.335786 5.75 0.75 5.75L11.3879 5.75L7.23017 1.79062C6.93159 1.50353 6.92228 1.02875 7.20937 0.730167C7.49647 0.431589 7.97125 0.422279 8.26983 0.709374L13.7698 5.95937C13.9169 6.10078 14 6.29599 14 6.5C14 6.70401 13.9169 6.89922 13.7698 7.04062L8.26983 12.2906C7.97125 12.5777 7.49647 12.5684 7.20938 12.2698C6.92228 11.9713 6.93159 11.4965 7.23017 11.2094L11.3879 7.25L0.75 7.25C0.335786 7.25 -2.44163e-07 6.91421 -2.62268e-07 6.5Z"
              fill="#7398D5"
            />
          </svg>
        </div>
      </div>

      <div className="flex items-center">
        <button
          className="p-2 text-[#7398D5] hover:underline"
          onClick={prevActivity}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.75 15L13.75 20M13.75 20L18.75 25M13.75 20H26.25M35 20C35 28.2843 28.2843 35 20 35C11.7157 35 5 28.2843 5 20C5 11.7157 11.7157 5 20 5C28.2843 5 35 11.7157 35 20Z"
              stroke="#7398D5"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <div className=" ml-5 flex flex-grow flex-nowrap overflow-x-auto">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {activities
              .slice(currentIndex, currentIndex + 4)
              .map((activity, index) => (
                <SwiperSlide
                  key={index}
                  className="relative mr-3 flex-shrink-0"
                >
                  <OutstandingItem
                    image={activity.image}
                    index={index}
                    name={activity.name}
                    location={activity.location}
                    count={activity.count}
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
        <button
          className="p-2 text-[#7398D5] hover:underline"
          onClick={nextActivity}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.25 21L22.25 16M22.25 16L17.25 11M22.25 16L9.75 16M31 16C31 24.2843 24.2843 31 16 31C7.71573 31 1 24.2843 1 16C1 7.71573 7.71573 1 16 1C24.2843 1 31 7.71573 31 16Z"
              stroke="#7398D5"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          {/* Đặt icon tiến ở đây */}
        </button>
      </div>

      <style jsx>{`
        .outstanding-section {
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

export default OutstandingSection;
