import React from 'react';
import bannedAccountImage from '../assets/bannedAccount.png';

const BannedAccount = () => {
  return (
    <>
      <div className="bg-bg-color pt-5">
        <img
          className="m-auto w-[480px] justify-center"
          src={bannedAccountImage}
          alt="notfound"
        />
        <div className="flex flex-col items-center pb-32">
          <div className="text-center text-[60px] font-extrabold text-text-color">
            Tài khoản bị hạn chế
          </div>
          <div className="text-center font-extrabold text-text-color">
            Liên hệ với chúng tôi để biết thêm chi tiết
          </div>
        </div>
      </div>
    </>
  );
};

export default BannedAccount;
