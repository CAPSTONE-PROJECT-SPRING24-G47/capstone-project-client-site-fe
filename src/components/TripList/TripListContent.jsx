import React from 'react';
import TripItem from './TripItem';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const buttonAnimate = {
  rest: { scale: 1 },
  pressed: { scale: 0.97 },
};

const TripListContent = () => {
  return (
    <div className="flex flex-col  gap-10 p-16">
      {/* 2 Buttons */}
      <motion.div
        variants={buttonAnimate}
        initial="rest"
        whileTap="pressed"
        className=" flex w-full flex-col items-center justify-center gap-5"
      >
        <Link
          to={'/trip-builder'}
          className=" cursor-pointer rounded-xl border-2 border-primary-color px-10 py-3 text-center text-base font-bold text-primary-color transition-colors duration-75 hover:bg-primary-color hover:text-bg-color sm:w-[40%] sm:text-lg md:w-[30%] md:text-xl lg:px-5 lg:py-7"
        >
          TẠO CHUYẾN ĐI
        </Link>
      </motion.div>
      {/* Trip List */}
      <div className="flex flex-col items-center justify-center gap-8">
        <TripItem />
        <TripItem />
      </div>
    </div>
  );
};

export default TripListContent;
