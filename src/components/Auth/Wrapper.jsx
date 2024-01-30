import React, { useContext } from 'react';
import { AuthForm, FormSide } from './index';
import { NavContext } from '../../Contexts/NavContext';

const Wrapper = () => {
  const { isPopUp, isLogin } = useContext(NavContext);
  return (
    <div className={`relative flex w-fit ${isLogin ? '' : 'flex-row-reverse'}`}>
      <button className="absolute right-0 top-0">x</button>
      {isPopUp && (
        <>
          <AuthForm /> <FormSide />
        </>
      )}
    </div>
  );
};

export default Wrapper;
