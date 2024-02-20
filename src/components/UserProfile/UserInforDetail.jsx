import { useState } from 'react';

const UserProfileDetail = ({
  img,
  userName,
  firstName,
  lastName,
  email,
  passWord,
  createDay,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisible = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  // Chuyển đổi createDay thành một đối tượng Date
  const formattedCreateDay = new Date(createDay);

  // Lấy thông tin ngày, tháng, năm từ đối tượng Date
  const day = formattedCreateDay.getDate();
  const month = formattedCreateDay.getMonth() + 1;
  const year = formattedCreateDay.getFullYear();

  return (
    <div>
      <div className="mt-11 text-center">
        <div className="relative inline-block">
          <img className="mx-auto size-40" alt="User avatar" src={img} />
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -right-2 -top-2"
          >
            <rect width="30" height="30" rx="15" fill="white" />
            <path
              d="M15 11.25C12.4112 11.25 10.3125 13.3487 10.3125 15.9375C10.3125 18.5263 12.4112 20.625 15 20.625C17.5888 20.625 19.6875 18.5263 19.6875 15.9375C19.6875 13.3487 17.5888 11.25 15 11.25Z"
              fill="#7398D5"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.6804 3.83891C12.7795 3.77989 13.8863 3.75 15 3.75C16.1137 3.75 17.2205 3.77989 18.3196 3.83891C19.5292 3.90386 20.6068 4.57015 21.2352 5.5773L22.2618 7.22232C22.5606 7.70124 23.0681 8.02664 23.6494 8.10926C24.1311 8.17772 24.6111 8.25181 25.0891 8.33147C26.8789 8.62972 28.125 10.1973 28.125 11.9675V22.5C28.125 24.5711 26.4461 26.25 24.375 26.25H5.625C3.55393 26.25 1.875 24.5711 1.875 22.5V11.9675C1.875 10.1973 3.12107 8.62971 4.9109 8.33146C5.38895 8.2518 5.86887 8.17771 6.3506 8.10925C6.93195 8.02663 7.4394 7.70123 7.73826 7.22231L8.76477 5.5773C9.39325 4.57015 10.4708 3.90386 11.6804 3.83891ZM8.4375 15.9375C8.4375 12.3131 11.3756 9.375 15 9.375C18.6244 9.375 21.5625 12.3131 21.5625 15.9375C21.5625 19.5619 18.6244 22.5 15 22.5C11.3756 22.5 8.4375 19.5619 8.4375 15.9375ZM23.4375 14.0625C23.9553 14.0625 24.375 13.6428 24.375 13.125C24.375 12.6072 23.9553 12.1875 23.4375 12.1875C22.9197 12.1875 22.5 12.6072 22.5 13.125C22.5 13.6428 22.9197 14.0625 23.4375 14.0625Z"
              fill="#7398D5"
            />
          </svg>
        </div>

        <p className="mt-4">
          Hi, {firstName} {lastName}
        </p>
      </div>
      <div className="mt-12 flex-col gap-14">
        <h1 className="inline-block border-b-2 border-b-secondary-color text-4xl">
          Thông tin tài khoản
        </h1>
        <div className="text-2xl">
          <div className="mt-8 flex gap-36">
            <p>Họ và tên đệm: {firstName}</p>
            <p>Tên: {lastName}</p>
          </div>
          <p className="mt-8">Email: {email}</p>
          <p className="mt-8">Ngày tham gia: {`${day}/${month}/${year}`}</p>
        </div>
        <div className="mt-8 flex justify-center">
          <div className="group inline-block rounded-full bg-accent-color text-bg-secondary-color hover:bg-bg-color">
            <button className="p-4">
              <p className="group-hover:text-accent-color">
                THAY ĐỔI THÔNG TIN
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileDetail;
