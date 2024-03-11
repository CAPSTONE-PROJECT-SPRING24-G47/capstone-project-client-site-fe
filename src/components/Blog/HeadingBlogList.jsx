import React from 'react';

const HeadingBlogList = ({ title }) => {
  return (
    <div
      className={`relative flex h-72 w-full ${title === 'Trải nghiệm chân thực về Nhật Bản' ? 'items-center justify-center' : 'items-end justify-start pb-7 pl-16'}  bg-blogBackground bg-cover bg-center bg-no-repeat`}
    >
      <div className="absolute inset-0 bg-text-color/30 backdrop-blur-sm" />
      <h1 className="z-[99] text-4xl font-bold text-bg-color">{title}</h1>
    </div>
  );
};

export default HeadingBlogList;
