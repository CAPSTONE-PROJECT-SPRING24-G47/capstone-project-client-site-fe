import React, { useContext, useEffect } from 'react';
import { AlertContext } from '../Contexts/AlertContext';
import { motion } from 'framer-motion';

const Alert = () => {
  const { alertData, setIsShow, setAlertData } = useContext(AlertContext);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsShow(false);
    }, 3000);

    // Clean up the timeout when component unmounts or when alert data changes
    return () => clearTimeout(timeout);
  }, [alertData, setIsShow, setAlertData]);

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 50 }}
      animate={{ opacity: 1, translateY: 0 }}
      exit={{ opacity: 0, translateY: 50 }}
      transition={{
        duration: 0.1,
        ease: 'linear',
        type: 'spring',
        stiffness: 120,
      }}
      onClick={() => {
        setIsShow(false);
      }}
      className={`fixed bottom-[5%] left-[2%] z-50 cursor-pointer font-semibold ${alertData.textColor} ${alertData.backGroundColor}  rounded-lg px-4 py-3 text-lg`}
    >
      {alertData.message}
    </motion.div>
  );
};

export default Alert;
