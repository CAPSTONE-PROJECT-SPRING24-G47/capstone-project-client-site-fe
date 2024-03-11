import React from 'react';

const Rectangle = ({
  text,
  goingWithOption,
  setGoingWithOption,
  index,
  setIsChildrenVisible,
}) => {
  const handleSelect = () => {
    setGoingWithOption((prevState) => ({
      ...prevState,
      type: text,
      typeNum: index,
      isChildren: index === 0 || index === 1 ? false : true,
    }));
  };

  return (
    <div
      onClick={() => {
        setIsChildrenVisible(index !== 0 && index !== 1 ? true : false);
        handleSelect();
      }}
      className={`cursor-pointer select-none rounded-xl bg-bg-color p-6 text-[33px] font-semibold ${goingWithOption.typeNum === index ? 'opacity-[100%]' : 'opacity-[65%]'}`}
    >
      {text}
    </div>
  );
};

export default Rectangle;
