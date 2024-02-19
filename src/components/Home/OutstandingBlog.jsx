import React from 'react';
import outstandingblog from '../../assets/outstandingblog.png';

const OutstandingBlog = () => {
  return (
    <div className="outstanding-blox my-24 flex rounded-md font-sans shadow-md ">
      {/* Blog Section */}
      <div className=" flex-1 text-center">
        <h2 className="mb-4 text-5xl font-bold">Blog</h2>
        <div className="textblog pl-20 text-left">
          <p className="text-2xl font-bold">
            Trải nghiệm chân thực về Nhật Bản
          </p>
          <p className="text-sm">
            Chia sẻ trải nghiệm cá nhân và khám phá những trải nghiệm chân thực
            từ những người khác về Nhật Bản
          </p>
        </div>
        <button className="mt-4 rounded-3xl bg-primary-color px-10 py-2 text-2xl font-bold text-white hover:bg-white hover:text-primary-color focus:outline-none">
          Khám phá
        </button>
      </div>

      {/* Activity Image Section */}
      <div className="activity-section relative ml-8 flex-1 overflow-hidden">
        <div className="image-wrapper relative h-full w-full ">
          <img src={outstandingblog} alt="blogImnage" className="w-full" />
        </div>
      </div>
      <style jsx>{`
        .outstanding-blox {
          max-width: 1240px;
        }
      `}</style>
    </div>
  );
};

export default OutstandingBlog;
