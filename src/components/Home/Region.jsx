// Region.jsx
import React from 'react';
import regionImage from '../../assets/regions.png';
import anh1 from '../../assets/anh1.jpg';
import anh2 from '../../assets/anh2.jpg';
import anh3 from '../../assets/anh3.jpg';
import anh4 from '../../assets/anh4.jpg';
import anh5 from '../../assets/anh5.jpg';
import anh6 from '../../assets/anh6.jpg';
import anh7 from '../../assets/anh7.jpg';
import anh8 from '../../assets/anh8.jpg';
import ImageList from './ImageList';

const Region = () => {
  const regionStyle = {
    backgroundImage: `url(${regionImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '600px',
    borderRadius: '25px',
  };

  const images = [anh1, anh2, anh3, anh4, anh5, anh6, anh7, anh8, anh1, anh3];

  return (
    <div className="mb-10 mt-10 flex">
      <div className="relative ml-36 flex w-4/5 overflow-hidden rounded-3xl border border-gray-300 bg-[#ededed]">
        {/* Bên trái: Tiêu đề và Giới thiệu về vùng */}
        <div className="w-1/2 bg-opacity-80 pl-10">
          <div className="w-4/5 pt-3">
            <h1 className="mb-4 text-3xl font-bold">Các vùng của Nhật Bản</h1>
            <ImageList images={images} />
            <div className=" bg-[#282828] pb-3 pl-2 pt-2 text-sm text-white">
              <h4 className="mb-1">Tohoku</h4>
              <p className="mb-1">Aomori| Akita| Iwate | Miyagi | Fukushima</p>
              <p className="mb-1">
                Với độ đa dạng văn hóa và lịch sử, Nhật Bản được chia thành
                nhiều vùng địa lý độc đáo. Mỗi vùng mang đến những trải nghiệm
                khác nhau, từ văn hóa ẩm thực đến danh lam thắng cảnh nổi tiếng.
                Hãy khám phá những vùng này để hiểu rõ hơn về đất nước mặt trời
                mọc!
              </p>
            </div>
          </div>
        </div>
        {/* Bên phải: Region */}
        <div className="w-1/2" style={regionStyle}></div>
      </div>
    </div>
  );
};

export default Region;
