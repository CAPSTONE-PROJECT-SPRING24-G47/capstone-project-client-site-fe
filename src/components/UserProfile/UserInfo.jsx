import { Link } from 'react-router-dom';
import ArrowDownMiniIcon from './Icons/ArrowDownMiniIcon';

const UserInfo = () => {
  return (
    <Link
      to="profile"
      className="flex cursor-pointer items-center justify-center gap-4 rounded-3xl px-2 py-1 hover:bg-[#0000000d]"
    >
      <img
        className="h-[45px] w-[45px] rounded-full"
        src="https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1114445501.jpg"
      ></img>
      <div className="flex items-center justify-center gap-2">
        <p className="text-center text-xl font-bold">name</p>
        <ArrowDownMiniIcon />
      </div>
    </Link>
  );
};

export default UserInfo;
