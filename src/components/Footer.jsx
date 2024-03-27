import React from 'react';
import LogoIcon from '../assets/LogoIcon';

const Footer = () => {
  return (
    <div className="w-full">
      <div className="h-[2px] bg-secondary-color"></div>
      <div className="flex w-full items-center justify-around pb-10 pt-4">
        {/* Logo */}
        <div className="flex items-center justify-center text-4xl font-bold">
          <LogoIcon />
          <span
            className={`hidden text-base text-accent-color sm:block md:text-lg lg:text-xl`}
          >
            VJITradvisor
          </span>
        </div>

        {/* About Us */}
        <div>
          <h4 className="mb-1 text-base font-bold md:text-lg">
            Giới thiệu chung
          </h4>
          <p className="text-sm">Về chúng tôi</p>
          <p className="text-sm">Liên hệ.</p>
        </div>

        {/* Links */}
        <div>
          <h4 className="mb-1 text-base font-bold md:text-lg">
            Điều khoản sử dụng
          </h4>
          <p className="text-sm">Điều khoản chung</p>
          <p className="text-sm">Chính sách bảo mật</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
