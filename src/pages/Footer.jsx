import React from "react";
import logoImage from "../assets/logoFooter.png";  

const Footer = () => {
  return (
    <div className="relative h-full text-black max-w-full">
      <div className="mx-auto flex">
        {/* Logo */}
        <div className="flex-none">
          <img src={logoImage} alt="logoImage" className="h-16 w-auto object-cover" />
        </div>

        {/* About Us */}
        <div className="flex-1 p-4">
          <h4 className="text-lg font-bold mb-2">Về chúng tôi</h4>
          <p className="text-sm">Thông tin về chúng tôi</p>
          <p className="text-sm">Liên hệ.</p>
        </div>

        {/* Links */}
        <div className="flex-1 p-4">
          <h4 className="text-lg font-bold mb-2">Liên kết</h4>
          <p className="text-sm">Điều khoản chung</p>
          <p className="text-sm">Chính sách bảo mật</p>
        </div>
      </div>

      {/* Bottom Footer */}
      {/* <div className="bottomFooter h-20 flex items-center justify-center border-t-2 border-gray-300">
        <p className="text-sm">Powered by SEP490-G47</p>
      </div> */}
      
    </div>
  );
};

export default Footer;
