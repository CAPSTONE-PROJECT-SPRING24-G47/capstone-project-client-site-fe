import React, { useContext, useEffect, useState } from 'react';
import Input from './Input';
import { fetchUserFromLocalStorage } from '../../utils/fetchUserFromLocalStorage';
import { EyeOpenIcon } from '../Auth';
import { FormContext } from '../../Contexts/FormContext';
import { motion } from 'framer-motion';
import Loading from '../Loading';
import { changePassword } from '../../api/service/profile';

const ChangePasswordDetail = () => {
  const { isError, isLoading, setIsLoading } = useContext(FormContext);

  const [currentPwd, setCurrentPwd] = useState('');
  const [newPwd, setNewPwd] = useState('');
  const [confirmNewPwd, setConfirmNewPwd] = useState('');

  // const [isChangeSuccess, setIsChangeSuccess] = useState(false);
  const [changePwdData, setChangePwdData] = useState(null);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const userLS = fetchUserFromLocalStorage();
    if (userLS) {
      setUser(userLS);
    }
  }, []);

  const handleCurrentPwdChange = (e) => {
    setCurrentPwd(e.target.value);
  };
  const handleNewPwdChange = (e) => {
    setNewPwd(e.target.value);
  };
  const handleConfirmNewPwdChange = (e) => {
    setConfirmNewPwd(e.target.value);
  };

  const handleSubmitChangePwdData = () => {
    setChangePwdData({
      currentPwd,
      newPwd,
      confirmNewPwd,
    });
  };
  useEffect(() => {
    async function fetchData() {
      if (newPwd) {
        const response = await changePassword(user.userId, newPwd);
        if (response) {
          // setIsChangeSuccess(true);
        }
      }
    }
    fetchData();
  }, [newPwd]);
  return (
    <div>
      <div className="text-center">
        <div className="relative inline-block">
          <img
            className="mx-auto size-32 rounded-md"
            alt="User avatar"
            src={
              user?.pictureProfile
                ? user?.pictureProfile
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
        </div>

        <p className="mt-2 font-semibold">
          Hi, {user?.firstName} {user?.lastName}
        </p>
      </div>
      <div className="flex w-3/5 flex-col pb-3 pt-12 font-bold">
        <h1 className=" pb-2 text-5xl">Thay đổi mật khẩu</h1>
        <p className="ml-[10px] h-[1.5px] w-[63%] bg-accent-color"></p>
        <div className="flex flex-col justify-center gap-8 py-12">
          <Input
            id={'currentPwd'}
            value={currentPwd}
            onChange={handleCurrentPwdChange}
            label={'Mật khẩu hiện tại'}
            svg={<EyeOpenIcon />}
          />

          <Input
            id={'newPwd'}
            value={newPwd}
            onChange={handleNewPwdChange}
            label={'Mật khẩu mới'}
            svg={<EyeOpenIcon />}
          />

          <Input
            id={'confirmNewPwd'}
            value={confirmNewPwd}
            onChange={handleConfirmNewPwdChange}
            label={'Nhập lại mật khẩu mới'}
            svg={<EyeOpenIcon />}
            originalPassword={newPwd}
          />
        </div>
      </div>
      <div className="flex w-full items-center justify-center">
        <motion.button
          type="button"
          disabled={isError || !currentPwd || !newPwd || !confirmNewPwd}
          onClick={() => {
            handleSubmitChangePwdData();
          }}
          className="mb-10 w-1/4 rounded-full bg-accent-color py-3 text-2xl text-bg-color hover:bg-accent-color/80 disabled:bg-accent-color/70"
        >
          <motion.p layout transition={{ ease: 'linear', duration: 0.1 }}>
            Thay đổi mật khẩu
          </motion.p>
          {isLoading && <Loading />}
        </motion.button>
      </div>
    </div>
  );
};

export default ChangePasswordDetail;
