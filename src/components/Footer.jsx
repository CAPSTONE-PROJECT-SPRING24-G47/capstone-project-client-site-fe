import React from 'react';
import logoImage from '../assets/logoFooter.png';
import LogoIcon from '../assets/LogoIcon';

const Footer = () => {
  return (
    <div className="w-full">
      <div className="h-[2px] bg-secondary-color"></div>
      <div className="mb-10 mt-4 flex w-full items-center justify-around">
        {/* Logo */}
        <div className="flex items-center justify-center text-4xl font-bold">
          <LogoIcon />
          <span className={`text-xl text-accent-color`}>VJITradvisor</span>
        </div>

        {/* About Us */}
        <div className="">
          <h4 className="mb-1 text-lg font-bold">Giới thiệu chung</h4>
          <p className="text-sm">Về chúng tôi</p>
          <p className="text-sm">Liên hệ.</p>
        </div>

        {/* Links */}
        <div className="">
          <h4 className="mb-1 text-lg font-bold">Điều khoản sử dụng</h4>
          <p className="text-sm">Điều khoản chung</p>
          <p className="text-sm">Chính sách bảo mật</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
