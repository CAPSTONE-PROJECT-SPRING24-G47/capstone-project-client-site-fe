import React from 'react';
import blogBackground from '../../assets/blogBackground.jpg';
import { Link } from 'react-router-dom';

const OutstandingBlog = () => {
  return (
    <div className="flex w-full rounded-md bg-blogBackground bg-cover bg-center bg-no-repeat font-sans">
      {/* Blog Section */}
      <div className="w-3/5 rounded-e-full bg-bg-color px-10 py-20 text-center shadow-none">
        <h2 className="text-6xl font-semibold">Blog</h2>
        <div className="my-10 flex flex-col gap-5 text-start">
          <p className="text-4xl font-light">
            Trải nghiệm chân thực về Nhật Bản
          </p>
          <p className="text-xl">
            Chia sẻ trải nghiệm cá nhân và khám phá những trải nghiệm chân thực
            từ những người khác về Nhật Bản
          </p>
        </div>
        <Link
          to={`/blog-list`}
          className="rounded-full bg-primary-color px-16 py-4 text-4xl font-light text-white hover:bg-white hover:text-primary-color focus:outline-none"
        >
          Khám phá
        </Link>
      </div>
      {/* <div className="w-full bg-blogBackground shadow-lg"></div> */}
    </div>
  );
};

export default OutstandingBlog;
