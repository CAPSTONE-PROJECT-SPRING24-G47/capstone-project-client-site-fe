import React, { useState } from 'react';
import OutstandingItem from './OutstandingItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import ButtonSwiperNext from './ButtonSwiperNext';
import ButtonSwiperPrev from './ButtonSwiperPrev';

const OutstandingSection = ({ data, type }) => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  const handleSwipeNext = () => {
    swiperInstance.slideNext();
  };
  const handleSwipePrev = () => {
    swiperInstance.slidePrev();
  };

  return (
    <div className={`mb-8 rounded-md p-8 font-sans`}>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="border-l-4 border-accent-color pl-2 text-4xl font-bold">
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
        <ButtonSwiperPrev handleSwipePrev={handleSwipePrev} />
        <Swiper
          allowTouchMove={false}
          onSwiper={(swiper) => setSwiperInstance(swiper)}
          slidesPerView={4}
          slidesPerGroup={4}
          slidesPerGroupSkip={0}
          spaceBetween={30}
          className="mySwiper"
        >
          <div>
            {data.map((activity, index) => (
              <SwiperSlide key={index}>
                <OutstandingItem
                  image={activity.image}
                  name={activity.name}
                  location={activity.location}
                  count={activity.count}
                />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
        <ButtonSwiperNext handleSwipeNext={handleSwipeNext} />
      </div>
    </div>
  );
};

export default OutstandingSection;
