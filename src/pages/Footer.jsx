import React from "react";
import logoImage from "../assets/logoFooter.png";

const Footer = () => {
  return (
    <div className="mb-10">
      <div className="flex">
        {/* Logo */}
        <div className="mr-60">
          <img src={logoImage} alt="logoImage" className="w-4/5" />
          <span className="text-[#7398D5] text-xl font-bold pl-5">VJITradvisor</span>
        </div>

        {/* About Us */}
        <div className="mr-60">
          <h4 className="text-lg font-bold mb-1">Giới thiệu chung</h4>
          <p className="text-sm">Về chúng tôi</p>
          <p className="text-sm">Liên hệ.</p>
        </div>

        {/* Links */}
        <div className="">
          <h4 className="text-lg font-bold mb-1">Điều khoản sử dụng</h4>
          <p className="text-sm">Điều khoản chung</p>
          <p className="text-sm">Chính sách bảo mật</p>
        </div>
      </div>



    </div>
  );
};

export default Footer;
