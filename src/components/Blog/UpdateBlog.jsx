import React, { useState } from 'react';
import { BackIcon } from '../Auth';
import { Link } from 'react-router-dom';
import AuthorSection from './AuthorSection';
import ContentSection from './ContentSection';

const UpdateBlog = () => {
  return (
    <div className="bg-bg-color px-3 py-10">
      <Link to={`../blog-detail`}>
        <BackIcon />
      </Link>
      <div className="my-5 flex w-full justify-center gap-14">
        {/* content */}
        <section className="relative w-9/12 rounded-xl bg-bg-secondary-color px-7 pb-7 pt-12">
          <button className="absolute right-8 top-5 rounded-xl bg-sub-color px-2 py-1 text-xl text-bg-color hover:bg-sub-color/80">
            Xóa
          </button>
          <ContentSection />
          <div className="mt-4 font-medium">
            Chỉnh sửa lần cuối: 23:31 06/03/2024
          </div>
        </section>
        {/* Author */}
        <section className="flex w-2/12 flex-col items-center gap-7 rounded-xl bg-bg-secondary-color px-3 py-12">
          <AuthorSection />
          <button className="w-3/5 rounded-xl bg-secondary-color p-1 text-2xl text-bg-color hover:bg-secondary-color/80">
            Cập nhật
          </button>
        </section>
      </div>
    </div>
  );
};

export default UpdateBlog;
