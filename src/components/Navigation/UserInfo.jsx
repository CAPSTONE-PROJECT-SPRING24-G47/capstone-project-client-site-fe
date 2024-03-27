import ArrowDownMiniIcon from '../UserProfile/Icons/ArrowDownMiniIcon';
import { fetchUserFromLocalStorage } from '../../utils/fetchUserFromLocalStorage';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import UserMenuDropDown from './UserMenuDropDown';

const buttonAnimate = {
  rest: { scale: 1 },
  pressed: { scale: 0.97 },
};

const UserInfo = () => {
  const dropMenupRef = useRef(null);
  const [isDropMenu, setIsDropMenu] = useState(false);
  const user = fetchUserFromLocalStorage();
  const name = `${user.firstName} ${user.lastName}`;
  const nameTruncated = truncateString(name, 20);

  const handleIsDropMenu = () => {
    setIsDropMenu((state) => !state);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!dropMenupRef.current.contains(e.target)) {
        setIsDropMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropMenupRef]);

  return (
    <div className="relative" ref={dropMenupRef}>
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
          className="h-auto max-w-[45px] rounded-full"
          src={`${user.signedUrl ? user.signedUrl : 'https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1114445501.jpg'}`}
        ></img>
        <div className="hidden items-center justify-center gap-2 md:flex">
          <p className="text-md text-center font-bold">{nameTruncated}</p>
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
