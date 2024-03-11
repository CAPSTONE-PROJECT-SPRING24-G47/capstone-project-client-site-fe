import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SakuraIcon from './Icons/SakuraIcon';
import ClownIcon from './Icons/ClownIcon';
import TsunamiIcon from './Icons/TsunamiIcon';
import OnigiriIcon from './Icons/OnigiriIcon';
import { useNavigate } from 'react-router-dom';

const variants = {
  hover: { width: '200%' },
  visible: { translateX: 0, translateY: 0, opacity: 1 },
};

const TripSelection = ({
  setIsTripSelection,
  btnText,
  description,
  img,
  isAuto,
  setMode,
}) => {
  const [isHover, setIsHover] = useState(false);
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ width: '100%' }}
      variants={variants}
      whileHover="hover"
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}
      className={`relative h-full w-full overflow-hidden rounded-t-3xl text-white `}
    >
      <img
        src={img}
        alt="autoImage"
        className="absolute h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[#03121A] opacity-[10%]" />
      {isHover && isAuto && (
        <>
          <div className="absolute inset-0 bg-secondary-color opacity-[80%]" />

          {/* Bottom left */}
          <motion.div
            variants={variants}
            initial={{ translateX: -100, translateY: 100 }}
            animate="visible"
            transition={{
              duration: 0.3,
              type: 'spring',
              stiffness: 120,
            }}
            className="absolute -bottom-12 -left-14 h-[300px] w-[300px] rounded-full bg-secondary-color"
          />
          <motion.div
            variants={variants}
            initial={{ translateX: -100, translateY: 100 }}
            animate="visible"
            transition={{
              duration: 0.3,
              type: 'spring',
              stiffness: 120,
              delay: 0.1,
            }}
            className="absolute -bottom-10 -left-10 h-[250px] w-[250px] rounded-full bg-bg-color"
          />
          <ClownIcon />

          {/* Top right */}
          <motion.div
            variants={variants}
            initial={{ translateX: 100, translateY: -100, rotate: 40 }}
            animate="visible"
            transition={{
              duration: 0.2,
              type: 'spring',
              stiffness: 120,
            }}
            className="absolute -right-20 -top-10 h-[200px] w-[200px] rounded-2xl bg-bg-color"
          />
          <SakuraIcon />
        </>
      )}
      {isHover && !isAuto && (
        <>
          <div className="absolute inset-0 bg-[#DB2731] opacity-[80%]" />

          <TsunamiIcon />

          <motion.div
            variants={variants}
            initial={{ translateX: 130, translateY: -130, rotate: 40 }}
            animate="visible"
            transition={{
              duration: 0.2,
              type: 'spring',
              stiffness: 120,
              delay: 0.1,
            }}
            className="absolute -right-36 -top-24 h-[300px] w-[300px] rounded-full bg-bg-color"
          />
          <motion.div
            variants={variants}
            initial={{ translateX: 130, translateY: -130, rotate: 40 }}
            animate="visible"
            transition={{
              duration: 0.2,
              type: 'spring',
              stiffness: 120,
              delay: 0.2,
            }}
            className="absolute -right-20 -top-10 h-[200px] w-[200px] rounded-full bg-[#db2730d7]"
          />
          <OnigiriIcon />
        </>
      )}
      <div className="absolute inset-x-0 top-[35%] flex flex-col items-center justify-center gap-10 text-center">
        <motion.div
          initial={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.3, type: 'spring', stiffness: 120 }}
          className={`w-[320px] cursor-pointer rounded-xl px-4 py-3 text-3xl font-bold uppercase tracking-wide transition duration-[0.1] ease-linear
            ${isAuto && !isHover && 'bg-secondary-color'} 
            ${isAuto && isHover && 'bg-bg-color text-secondary-color'} 
            ${!isAuto && !isHover && 'bg-[#DB2731]'} 
            ${!isAuto && isHover && 'bg-bg-color text-[#DB2731]'} 
          `}
          onClick={() => {
            setIsTripSelection(false);
            if (isAuto) {
              setMode('auto');
            } else {
              navigate('/trip-builder-manual');
            }
          }}
        >
          {btnText}
        </motion.div>
        {isHover && (
          <motion.div
            variants={variants}
            initial={{ opacity: 0, translateY: -30 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.3, type: 'spring', stiffness: 120 }}
            className="text-2xl font-semibold"
          >
            {description}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default TripSelection;
