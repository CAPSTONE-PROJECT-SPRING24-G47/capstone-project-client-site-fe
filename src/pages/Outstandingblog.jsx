import React from 'react';
import outstandingblog from '../assets/outstandingblog.png';

const Outstandingblox = () => {
  return (
    <div className="outstanding-blox rounded-md shadow-md mb-32 mt-32 flex font-sans ">
      {/* Blog Section */}
      <div className=" flex-1 text-center">
        <h2 className="text-5xl font-bold mb-4">Blog</h2>
        <div className='textblog text-left pl-20'>
          <p className="text-2xl font-bold">
            Trải nghiệm chân thực về Nhật Bản
          </p>
          <p className="text-sm">
            Chia sẻ trải nghiệm cá nhân và khám phá những trải nghiệm chân thực từ những người khác về Nhật Bản
          </p>
        </div>
        <button className="text-2xl font-bold mt-4 bg-[#48C75E] text-white px-10 py-2 rounded-3xl hover:bg-green-600 focus:outline-none">
          Khám phá
        </button>
      </div>

      {/* Activity Image Section */}
      <div className="activity-section flex-1 ml-8 relative overflow-hidden">
        <div className="image-wrapper relative h-full w-full ">
          <img src={outstandingblog} alt="blogImnage" className="w-full" />
        </div>
      </div>
      <style jsx>{`
        .outstanding-blox{
          max-width: 1180px;
        }
      `}</style>

    </div>
  );
};

export default Outstandingblox;
