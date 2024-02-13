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

        <div className="">
          <div className="mb-0 h-[430px] justify-center text-center text-[350px] font-extrabold text-secondary-color">
            404
          </div>
          <div className="text-[50px] font-bold">KHÔNG TÌM THẤY TRANG</div>
          <div className="text-center text-[30px]">
            Trang không tồn tại hoặc đã bị xóa
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound404;
