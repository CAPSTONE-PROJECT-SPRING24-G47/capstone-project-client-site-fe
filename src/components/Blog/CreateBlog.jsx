import React from 'react';
import { Link } from 'react-router-dom';
import { BackIcon } from '../Auth';
import ContentSection from './ContentSection';
import AuthorSection from './AuthorSection';

const CreateBlog = () => {
  return (
    <div className="bg-bg-color px-3 py-10">
      <Link to={`../blog-detail`}>
        <BackIcon />
      </Link>
      <div className="my-5 flex w-full justify-center gap-14">
        {/* content */}
        <section className="relative w-9/12 rounded-xl bg-bg-secondary-color px-7 pb-7 pt-12">
          <ContentSection />
          <div className=" flex w-full justify-end">
            <button className="mt-4 rounded-xl bg-secondary-color px-2 py-1 text-xl font-bold text-bg-color hover:bg-secondary-color/80">
              Đăng
            </button>
          </div>
        </section>
        {/* Author */}
        <section className="flex w-2/12 flex-col items-center gap-7 rounded-xl bg-bg-secondary-color px-3 py-12">
          <AuthorSection />
        </section>
      </div>
    </div>
  );
};

export default CreateBlog;
