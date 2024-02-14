import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import notFoundImage from '../assets/notfound.png';

const NotFound404 = () => {
  return (
    <>
      <div className="flex bg-bg-color">
        <img
          className="h-[717px] w-[800px]"
          src={notFoundImage}
          alt="notfound"
        />

        <div className="flex flex-col items-center">
          <div className="mb-0 h-[350px] text-center text-[300px] font-extrabold text-secondary-color">
            404
          </div>
          <div className=" text-center text-[30px] font-bold">
            KHÔNG TÌM THẤY TRANG
          </div>
          <div className="text-center text-[15px]">
            Trang không tồn tại hoặc đã bị xóa
          </div>
          <button className="justify-center">
            <div className="hover:bg-secondary-color-color mt-3 justify-center rounded-[50px]  bg-secondary-color/70 px-5  py-2 text-center text-[25px] font-extrabold text-text-color shadow-xl hover:bg-secondary-color hover:text-bg-color">
              Trở về trang chủ
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default NotFound404;
