import React from 'react';
import { motion } from 'framer-motion';
import OptionPopupItem from './OptionPopupItem';
import UpdateIcon from './Icons/UpdateIcon';
import ShareIcon from './Icons/ShareIcon';
import DeleteIcon from './Icons/DeleteIcon';

const OptionPopup = () => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: -10 }}
      animate={{ opacity: 1, translateY: 0 }}
      exit={{ opacity: 0, translateY: -10 }}
      transition={{ ease: 'linear', duration: 0.1 }}
      className="absolute right-[50px] top-0 z-[99] flex w-[140px] flex-col items-center justify-start overflow-hidden rounded-lg bg-bg-color font-semibold text-text-color shadow-md sm:right-0 sm:top-[40px] sm:w-[160px]"
    >
      <OptionPopupItem text={'Chỉnh sửa'} svg={<UpdateIcon />} />
      <OptionPopupItem text={'Chia sẻ'} svg={<ShareIcon />} />
      <OptionPopupItem text={'Xóa'} svg={<DeleteIcon />} isDelete={true} />
    </motion.div>
  );
};

export default OptionPopup;
