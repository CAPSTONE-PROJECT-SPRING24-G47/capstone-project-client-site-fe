import React from 'react';
import blogBackground from '../../assets/blogBackground.jpg';

const OutstandingBlog = () => {
  return (
    <div className="outstanding-blox bg-blogBackground flex w-full rounded-md bg-cover bg-center bg-no-repeat font-sans shadow-md">
      {/* Blog Section */}
      <div className=" h-[100%] w-[60%] flex-col rounded-e-full bg-white text-center ">
        <div className="mt-[12%]">
          <h2 className="mb-4 text-6xl font-bold">Blog</h2>
          <div className="textblog">
            <p className="text-4xl font-bold">
              Trải nghiệm chân thực về Nhật Bản
            </p>
            <p className="text-xl font-bold">
              Chia sẻ trải nghiệm cá nhân và khám phá những trải nghiệm chân
              thực từ những người khác về Nhật Bản
            </p>
          </div>
          <button className="mt-4 rounded-3xl bg-primary-color px-10 py-2 text-2xl font-bold text-white hover:bg-white hover:text-primary-color focus:outline-none">
            Khám phá
          </button>
        </div>
      </div>
    </div>
  );
};

export default OutstandingBlog;
