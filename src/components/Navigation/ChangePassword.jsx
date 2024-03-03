import React from 'react';

const ChangePassword = () => {
  const buttonAnimate = {
    rest: { scale: 1 },
    pressed: { scale: 0.97 },
  };

  const [isDropMenu, setIsDropMenu] = useState(false);
  // const user = fetchUserFromLocalStorage();
  // const name = `${user.firstName} ${user.lastName}`;
  // const nameTruncated = truncateString(name, 20);

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
        <div className="flex items-center justify-center gap-2">
          {/* <p className="text-md text-center font-bold">{nameTruncated}</p> */}
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

export default ChangePassword;
