import React from 'react';
import TripListContent from '../components/TripList/TripListContent';
import fujiImg from '../assets/fuji.jpg';

const TripSelfList = () => {
  return (
    <div className="bg-bg-color">
      <div className="relative flex h-[200px] items-center justify-center overflow-hidden md:h-[250px]">
        <img
          src={fujiImg}
          className="h-[250px] w-full object-cover object-bottom"
        />
        <div className="absolute top-0 h-full w-full bg-[#03121A] opacity-60" />

        <div className="absolute flex h-[60%] w-[50%] items-center justify-center rounded-xl border-[3px] border-bg-color md:w-[45%] md:border-4 lg:w-[45%] lg:border-4">
          <div className="text-[25px] font-bold text-bg-color md:text-[35px] lg:text-[40px]">
            Chuyến đi của tôi
          </div>
        </div>
      </div>
      <TripListContent />
    </div>
  );
};

export default TripSelfList;
