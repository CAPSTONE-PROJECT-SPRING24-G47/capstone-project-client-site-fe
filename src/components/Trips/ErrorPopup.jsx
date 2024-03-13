import React from 'react';
import { motion } from 'framer-motion';

const ErrorPopup = ({ duration, text, type }) => {
  const subText = type === 2 ? `(hiện tại: ${duration} ngày)` : '';
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
      className="absolute inset-x-0 top-3 flex justify-center"
    >
      <div className="h-fit w-fit rounded-lg bg-bg-color p-2 font-semibold text-sub-color">
        {`${text} ${subText}`}
      </div>
    </motion.div>
  );
};

export default ErrorPopup;
