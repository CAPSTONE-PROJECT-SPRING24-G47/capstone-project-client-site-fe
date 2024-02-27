import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../Contexts/UserContext';

const UserMenuDropDownItem = ({ text, svg, path, isLogOut = false }) => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <div
      onClick={() => {
        navigate(path);
        if (isLogOut) handleSignOut();
      }}
      className="flex w-full cursor-pointer justify-end gap-3 p-3 hover:bg-[#E8F3E3]"
    >
      <div>{text}</div>
      <div>{svg}</div>
    </div>
  );
};

export default UserMenuDropDownItem;
