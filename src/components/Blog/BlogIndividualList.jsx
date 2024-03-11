import React from 'react';
import HeadingBlogList from './HeadingBlogList';
import ClockIcon from '../Icons/ClockIcon';
import { Link } from 'react-router-dom';
import RightArrowIcon from '../Icons/RightArrowIcon';
import FilterIcon from '../Icons/FilterIcon';

const BlogIndividualList = () => {
  return (
    <div className="bg-bg-color">
      <HeadingBlogList title={'Blog của tôi'} />
      {/* list */}
      <div className="flex flex-col gap-12 px-40 py-20">
        <div className="flex">
          <Link
            to={`../blog-create`}
            className="flex w-32 justify-center rounded-xl bg-primary-color px-2 py-1 text-xl font-semibold text-bg-color hover:bg-primary-color/80"
          >
            Thêm mới
          </Link>
          <button className="flex w-full items-center justify-end gap-1 font-bold">
            <FilterIcon />
            <div>Sắp xếp theo</div>
          </button>
        </div>
        {/* item */}
        <div className="flex gap-20">
          <div className="h-44 w-1/4 rounded-xl bg-blogBackground"></div>
          <div>
            <h3 className="py-3 text-2xl font-bold">
              Có bức ảnh nào nhìn vào khiến người ta cười không ngừng được
              không?
            </h3>
            <p className="pb-3">
              Có mấy bức ảnh trông vào nhìn rất kì kiểu như là chắc phải có thế
              lực nào đó chụp chứ không nhìn nó trông rất buồn cười.....
            </p>
            <div className="flex justify-between">
              <div className="flex items-center gap-1">
                <ClockIcon />
                upload date
              </div>
              <Link
                to={'../blog-detail'}
                className="flex items-center justify-end gap-px text-lg font-normal text-primary-color"
              >
                Xem chi tiết
                <RightArrowIcon />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex gap-20">
          <div className="h-44 w-1/4 rounded-xl bg-blogBackground"></div>
          <div>
            <h3 className="py-3 text-2xl font-bold">
              Có bức ảnh nào nhìn vào khiến người ta cười không ngừng được
              không?
            </h3>
            <p className="pb-3">
              Có mấy bức ảnh trông vào nhìn rất kì kiểu như là chắc phải có thế
              lực nào đó chụp chứ không nhìn nó trông rất buồn cười.....
            </p>
            <div className="flex justify-between">
              <div className="flex items-center gap-1">
                <ClockIcon />
                upload date
              </div>
              <Link
                to={''}
                className="flex items-center justify-end gap-px text-lg font-normal text-primary-color"
              >
                Xem chi tiết
                <RightArrowIcon />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex gap-20">
          <div className="h-44 w-1/4 rounded-xl bg-blogBackground"></div>
          <div>
            <h3 className="py-3 text-2xl font-bold">
              Có bức ảnh nào nhìn vào khiến người ta cười không ngừng được
              không?
            </h3>
            <p className="pb-3">
              Có mấy bức ảnh trông vào nhìn rất kì kiểu như là chắc phải có thế
              lực nào đó chụp chứ không nhìn nó trông rất buồn cười.....
            </p>
            <div className="flex justify-between">
              <div className="flex items-center gap-1">
                <ClockIcon />
                upload date
              </div>
              <Link
                to={''}
                className="flex items-center justify-end gap-px text-lg font-normal text-primary-color"
              >
                Xem chi tiết
                <RightArrowIcon />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex gap-20">
          <div className="h-44 w-1/4 rounded-xl bg-blogBackground"></div>
          <div>
            <h3 className="py-3 text-2xl font-bold">
              Có bức ảnh nào nhìn vào khiến người ta cười không ngừng được
              không?
            </h3>
            <p className="pb-3">
              Có mấy bức ảnh trông vào nhìn rất kì kiểu như là chắc phải có thế
              lực nào đó chụp chứ không nhìn nó trông rất buồn cười.....
            </p>
            <div className="flex justify-between">
              <div className="flex items-center gap-1">
                <ClockIcon />
                upload date
              </div>
              <Link
                to={''}
                className="flex items-center justify-end gap-px text-lg font-normal text-primary-color"
              >
                Xem chi tiết
                <RightArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogIndividualList;
