import { useEffect, useState } from 'react';
import { fetchUserFromLocalStorage } from '../../utils/fetchUserFromLocalStorage';
import { getUserDetail, updateUserDetail } from '../../api/services/user';
import { useContext } from 'react';
import { AlertContext } from '../../Contexts/AlertContext';

const UserProfileDetail = () => {
  const user = fetchUserFromLocalStorage();
  const [userDetail, setUserDetail] = useState(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [imgSrc2, setImgSrc2] = useState(null);
  const [isUpdate, setIsUpdate] = useState(false);
  const { setIsShow, setAlertData } = useContext(AlertContext);
  const [updateUser, setUpdateUser] = useState({
    signedUrl: user?.signedUrl,
    firstName: user?.firstName,
    lastName: user?.lastName,
    roleId: user?.roleId,
    photo: user?.pictureProfile,
  });

  // Chuyển đổi createDay thành một đối tượng Date
  const formattedCreateDay = new Date(user?.createdAt);

  // Lấy thông tin ngày, tháng, năm từ đối tượng Date
  const day = formattedCreateDay.getDate();
  const month = formattedCreateDay.getMonth() + 1;
  const year = formattedCreateDay.getFullYear();

  const handleImageUpload = (event) => {
    const selectedFile = event.target.files[0]; // Lấy tệp được chọn từ sự kiện
    const reader = new FileReader(); // Tạo một đối tượng FileReader

    setImgSrc(selectedFile);

    console.log(selectedFile);

    reader.onload = () => {
      // Xử lý khi tệp được đọc thành công
      setImgSrc2(reader.result);
    };

    // console.log(imgSrc);

    // Đọc tệp được chọn dưới dạng URL
    reader.readAsDataURL(selectedFile);
  };

  useEffect(() => {
    setUpdateUser({
      ...updateUser,
      photo: imgSrc,
    });
  }, [imgSrc]);

  //Lấy user
  useEffect(() => {
    async function fetchData() {
      const response = await getUserDetail(user.userId);
      console.log(response);
      if (response) {
        setUserDetail(response.data[0]);
      }
    }
    fetchData();
  }, [isUpdate]);

  console.log(userDetail);

  useEffect(() => {
    if (userDetail) {
      localStorage.setItem('user', JSON.stringify(userDetail));
    }
  }, [userDetail]);

  const handleUpdateUser = async () => {
    console.log(updateUser);

    try {
      const formData = new FormData();
      formData.append('roleId', updateUser.roleId);
      formData.append('lastName', updateUser.lastName);
      formData.append('firstName', updateUser.firstName);
      formData.append('photo', imgSrc);
      const response = await updateUserDetail(user.userId, formData);
      if (response) {
        setIsUpdate(false);
        setIsShow(true);
        setAlertData({
          message: 'Cập nhật thông tin thành công',
          textColor: 'text-white',
          backGroundColor: 'bg-primary-color',
        });
      }
    } catch (error) {
      console.error('Error while updating user:', error);
    }

    console.log(updateUser);
  };

  return (
    <div>
      <div className="text-center">
        {!isUpdate ? (
          <div>
            <img
              className="mx-auto size-32 rounded-md"
              alt="User avatar"
              src={
                user?.signedUrl
                  ? user?.signedUrl
                  : 'https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1114445501.jpg'
              }
            />
          </div>
        ) : (
          <label for="fileInput" className="relative inline-block">
            <img
              className="mx-auto size-32 rounded-md"
              alt="User avatar"
              src={
                imgSrc2
                  ? imgSrc2
                  : user?.signedUrl
                    ? user?.signedUrl
                    : 'https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1114445501.jpg'
              }
            />
            <div className="absolute -right-2 -top-2 rounded-full bg-white p-1">
              <svg
                width="20"
                height="20"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
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
            <input
              id="fileInput"
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleImageUpload}
            ></input>
          </label>
        )}

        <p className="mt-2 font-semibold">
          Hi, {user?.firstName} {user?.lastName}
        </p>
      </div>
      <div className="mt-12 flex-col gap-14">
        <h1 className="inline-block border-b-2 border-b-secondary-color pb-2 text-3xl font-semibold">
          Thông tin tài khoản
        </h1>
        <div className="text-xl">
          {!isUpdate ? (
            <div className="mt-8 flex gap-36">
              <p>
                <span className="font-semibold">Họ:</span> {user?.firstName}
              </p>
              <p>
                <span className="font-semibold">Tên:</span> {user?.lastName}
              </p>
            </div>
          ) : (
            <div className="mt-8 flex gap-36">
              <div>
                <label className="font-bold">Họ: </label>
                <input
                  type="text"
                  value={updateUser?.firstName}
                  onChange={(e) => {
                    setUpdateUser({ ...updateUser, firstName: e.target.value });
                  }}
                  className="border-1 border-black"
                ></input>
              </div>
              <div>
                <label className="font-bold">Tên: </label>
                <input
                  type="text"
                  value={updateUser?.lastName}
                  onChange={(e) => {
                    setUpdateUser({ ...updateUser, lastName: e.target.value });
                  }}
                ></input>
              </div>
            </div>
          )}
        </div>

        <p className="mt-8">
          <span className="font-semibold">Email: </span>
          {user?.email}
        </p>
        <p className="mt-8">
          <span className="font-semibold">Ngày tham gia:</span>{' '}
          {`${day}/${month}/${year}`}
        </p>
      </div>
      <div className="mt-8 flex justify-center font-semibold">
        <div className="group inline-block rounded-full bg-accent-color text-bg-secondary-color hover:bg-bg-color">
          {!isUpdate ? (
            <button className="p-4" onClick={() => setIsUpdate(true)}>
              <p className="group-hover:text-accent-color">
                THAY ĐỔI THÔNG TIN
              </p>
            </button>
          ) : (
            <button className="p-4" onClick={() => handleUpdateUser()}>
              <p className="group-hover:text-accent-color">LƯU THÔNG TIN</p>
            </button> // Đây là một div trống
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfileDetail;
