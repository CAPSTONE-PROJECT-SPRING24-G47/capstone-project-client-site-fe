import React, { useContext } from 'react';
import { BlogContext } from '../../Contexts/BlogContext';

const ActionPopUp = () => {
  const { isPopUp } = useContext(BlogContext);
  return (
    <div className="fixed inset-0 z-[99] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-[#03121A] opacity-50 backdrop-blur-[20px]"
        onClick={() => isPopUp(false)}
      />
    </div>
  );
};

export default ActionPopUp;
