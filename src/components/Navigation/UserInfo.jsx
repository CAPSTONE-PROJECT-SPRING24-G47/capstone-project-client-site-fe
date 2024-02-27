import ArrowDownMiniIcon from '../UserProfile/Icons/ArrowDownMiniIcon';
import { fetchUserFromLocalStorage } from '../../utils/fetchUserFromLocalStorage';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import UserMenuDropDown from './UserMenuDropDown';

const buttonAnimate = {
  rest: { scale: 1 },
  pressed: { scale: 0.97 },
};

const UserInfo = () => {
  const [isDropMenu, setIsDropMenu] = useState(false);
  const user = fetchUserFromLocalStorage();
  const name = `${user.firstName} ${user.lastName}`;
  const nameTruncated = truncateString(name, 20);

  const handleIsDropMenu = () => {
    setIsDropMenu((state) => !state);
  };

  return (
    <div className="relative">
      <motion.div
        animate={isDropMenu ? 'open' : 'closed'}
        variants={buttonAnimate}
        initial="rest"
        whileHover="hover"
        whileTap="pressed"
        onClick={handleIsDropMenu}
        className="flex cursor-pointer select-none items-center justify-center gap-4 rounded-3xl px-2 py-1 hover:bg-[#0000000d]"
      >
        <img
          className="h-[45px] w-[45px] rounded-full"
          src={`${user.pictureProfile ? user.pictureProfile : 'https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1114445501.jpg'}`}
        ></img>
        <div className="flex items-center justify-center gap-2">
          <p className="text-center text-lg font-bold">{nameTruncated}</p>
          <ArrowDownMiniIcon
            variants={{
              open: { rotate: 180 },
              closed: { rotate: 0 },
            }}
            transition={{ duration: 0.2 }}
          />
        </div>
      </motion.div>
      <AnimatePresence>{isDropMenu && <UserMenuDropDown />}</AnimatePresence>
    </div>
  );
};

const truncateString = (str, maxLength) => {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength - 3) + '...';
};

export default UserInfo;
