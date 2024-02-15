// GoogleMap.jsx

import React from "react";
import fujiImage from '../assets/fuji.jpg';
const GoogleMap = () => {
  return (
    <div className="flex mt-20">
        {/* Bên phải: Tiêu đề và Giới thiệu về vùng */}
      <div className=" w-1/2 pl-20 pr-3">
        <h1 className="text-2xl font-bold mb-4 text-center">Các vùng của Nhật Bản</h1>
        <img src={fujiImage} alt="fuji" className="" />
        <p>
          Với độ đa dạng văn hóa và lịch sử, Nhật Bản được chia thành nhiều
          vùng địa lý độc đáo. Mỗi vùng mang đến những trải nghiệm khác nhau,
          từ văn hóa ẩm thực đến danh lam thắng cảnh nổi tiếng. Hãy khám phá
          những vùng này để hiểu rõ hơn về đất nước mặt trời mọc!
        </p>
      </div>
      {/* Bên trái: Google Map */}
      <div className="flex pr-20 w-1/2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104995.01637375672!2d135.40363591547268!3d34.6775703755677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e6553406e2e1%3A0xc55bc16ee46a2fe7!2sOsaka%2C%20Japan!5e0!3m2!1sen!2s!4v1707195134996!5m2!1sen!2s"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      
    </div>
  );
};

export default GoogleMap;
