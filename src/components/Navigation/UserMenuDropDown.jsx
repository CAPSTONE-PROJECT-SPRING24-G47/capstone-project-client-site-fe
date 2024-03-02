import React from 'react';
import UserMenuDropDownItem from './UserMenuDropDownItem';
import UserIcon from '../Icons/UserIcon';
import LogOutIcon from '../Icons/LogOutIcon';
import { motion } from 'framer-motion';

//bg-opacity-10 backdrop-blur-[20px]
const UserMenuDropDown = () => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: -10 }}
      animate={{ opacity: 1, translateY: 0 }}
      exit={{ opacity: 0, translateY: -10 }}
      transition={{ ease: 'linear', duration: 0.1 }}
      className="absolute -bottom-28 right-0 z-[99] flex w-[200px] flex-col items-center justify-start overflow-hidden rounded-lg bg-bg-color font-semibold text-text-color shadow-md"
    >
      <UserMenuDropDownItem
        text={'Thông tin cá nhân'}
        svg={<UserIcon />}
        path={'profile/information'}
      />
      <UserMenuDropDownItem
        text={'Đăng xuất'}
        svg={<LogOutIcon />}
        path={'/'}
        isLogOut={true}
      />
    </motion.div>
  );
};

export default UserMenuDropDown;
