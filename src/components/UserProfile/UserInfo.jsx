import { Link } from 'react-router-dom';
import ArrowDownMiniIcon from './Icons/ArrowDownMiniIcon';
import { fetchUserFromLocalStorage } from '../../utils/fetchUserFromLocalStorage';

const UserInfo = () => {
  const user = fetchUserFromLocalStorage();
  const name = `${user.firstName} ${user.lastName}`;
  const nameTruncated = truncateString(name, 20);

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
        <p className="text-center text-lg font-bold">{nameTruncated}</p>
        <ArrowDownMiniIcon />
      </div>
    </Link>
  );
};

const truncateString = (str, maxLength) => {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength - 3) + '...';
};

export default UserInfo;
