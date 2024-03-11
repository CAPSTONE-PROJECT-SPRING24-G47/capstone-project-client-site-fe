import React, { useEffect, useState } from 'react';
import { fetchUserFromLocalStorage } from '../../utils/fetchUserFromLocalStorage';
import FilterIcon from '../Icons/FilterIcon';
import ClockIcon from '../Icons/ClockIcon';
import SolidUserIcon from '../Icons/SolidUserIcon';
import HeadingBlogList from './HeadingBlogList';

const BlogList = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userLS = fetchUserFromLocalStorage();
    if (userLS) {
      setUser(userLS);
    }
  }, []);
  return (
    <div className="bg-bg-color">
      <HeadingBlogList title={'Trải nghiệm chân thực về Nhật Bản'} />
      <div className="mx-20 mt-20">
        <button className="flex w-full items-center justify-end gap-1 font-bold">
          <FilterIcon />
          <div>Sắp xếp theo</div>
        </button>
        {/* list blog */}
        <div className="grid grid-cols-3 gap-20 py-9">
          <div className="">
            {/* <img src="../../assets/2_rx7.jpg" alt="abc" /> */}
            <div className="h-44 w-full rounded-xl bg-blogBackground"></div>
            <div className="mt-1">Category</div>
            <h3 className="py-3 text-2xl font-bold">
              Có bức ảnh nào nhìn vào khiến người ta cười không ngừng được
              không?
            </h3>
            <p className="pb-3">
              Có mấy bức ảnh trông vào nhìn rất kì kiểu như là chắc phải có thế
              lực nào đó chụp ....
            </p>
            <div className="flex gap-7">
              <div className="flex items-center justify-center">
                <ClockIcon />
                upload date
              </div>
              {!user && (
                <div className="flex items-center justify-center">
                  <SolidUserIcon />
                  upload user
                </div>
              )}
            </div>
          </div>
          <div className="">
            {/* <img src="../../assets/2_rx7.jpg" alt="abc" /> */}
            <div className="h-44 w-full rounded-xl bg-blogBackground"></div>
            <div className="mt-1">Category</div>
            <h3 className="py-3 text-2xl font-bold">
              Có bức ảnh nào nhìn vào khiến người ta cười không ngừng được
              không?
            </h3>
            <p className="pb-3">
              Có mấy bức ảnh trông vào nhìn rất kì kiểu như là chắc phải có thế
              lực nào đó chụp ....
            </p>
            <div className="flex gap-7">
              <div className="flex items-center justify-center">
                <ClockIcon />
                upload date
              </div>
              {!user && (
                <div className="flex items-center justify-center">
                  <SolidUserIcon />
                  upload user
                </div>
              )}
            </div>
          </div>{' '}
          <div className="">
            {/* <img src="../../assets/2_rx7.jpg" alt="abc" /> */}
            <div className="h-44 w-full rounded-xl bg-blogBackground"></div>
            <div className="mt-1">Category</div>
            <h3 className="py-3 text-2xl font-bold">
              Có bức ảnh nào nhìn vào khiến người ta cười không ngừng được
              không?
            </h3>
            <p className="pb-3">
              Có mấy bức ảnh trông vào nhìn rất kì kiểu như là chắc phải có thế
              lực nào đó chụp ....
            </p>
            <div className="flex gap-7">
              <div className="flex items-center justify-center">
                <ClockIcon />
                upload date
              </div>
              {!user && (
                <div className="flex items-center justify-center">
                  <SolidUserIcon />
                  upload user
                </div>
              )}
            </div>
          </div>{' '}
          <div className="">
            {/* <img src="../../assets/2_rx7.jpg" alt="abc" /> */}
            <div className="h-44 w-full rounded-xl bg-blogBackground"></div>
            <div className="mt-1">Category</div>
            <h3 className="py-3 text-2xl font-bold">
              Có bức ảnh nào nhìn vào khiến người ta cười không ngừng được
              không?
            </h3>
            <p className="pb-3">
              Có mấy bức ảnh trông vào nhìn rất kì kiểu như là chắc phải có thế
              lực nào đó chụp ....
            </p>
            <div className="flex gap-7">
              <div className="flex items-center justify-center">
                <ClockIcon />
                upload date
              </div>
              {!user && (
                <div className="flex items-center justify-center">
                  <SolidUserIcon />
                  upload user
                </div>
              )}
            </div>
          </div>{' '}
          <div className="">
            {/* <img src="../../assets/2_rx7.jpg" alt="abc" /> */}
            <div className="h-44 w-full rounded-xl bg-blogBackground"></div>
            <div className="mt-1">Category</div>
            <h3 className="py-3 text-2xl font-bold">
              Có bức ảnh nào nhìn vào khiến người ta cười không ngừng được
              không?
            </h3>
            <p className="pb-3">
              Có mấy bức ảnh trông vào nhìn rất kì kiểu như là chắc phải có thế
              lực nào đó chụp ....
            </p>
            <div className="flex gap-7">
              <div className="flex items-center justify-center">
                <ClockIcon />
                upload date
              </div>
              {!user && (
                <div className="flex items-center justify-center">
                  <SolidUserIcon />
                  upload user
                </div>
              )}
            </div>
          </div>{' '}
          <div className="">
            {/* <img src="../../assets/2_rx7.jpg" alt="abc" /> */}
            <div className="h-44 w-full rounded-xl bg-blogBackground"></div>
            <div className="mt-1">Category</div>
            <h3 className="py-3 text-2xl font-bold">
              Có bức ảnh nào nhìn vào khiến người ta cười không ngừng được
              không?
            </h3>
            <p className="pb-3">
              Có mấy bức ảnh trông vào nhìn rất kì kiểu như là chắc phải có thế
              lực nào đó chụp ....
            </p>
            <div className="flex gap-7">
              <div className="flex items-center justify-center">
                <ClockIcon />
                upload date
              </div>
              {!user && (
                <div className="flex items-center justify-center">
                  <SolidUserIcon />
                  upload user
                </div>
              )}
            </div>
          </div>{' '}
          <div className="">
            {/* <img src="../../assets/2_rx7.jpg" alt="abc" /> */}
            <div className="h-44 w-full rounded-xl bg-blogBackground"></div>
            <div className="mt-1">Category</div>
            <h3 className="py-3 text-2xl font-bold">
              Có bức ảnh nào nhìn vào khiến người ta cười không ngừng được
              không?
            </h3>
            <p className="pb-3">
              Có mấy bức ảnh trông vào nhìn rất kì kiểu như là chắc phải có thế
              lực nào đó chụp ....
            </p>
            <div className="flex gap-7">
              <div className="flex items-center justify-center">
                <ClockIcon />
                upload date
              </div>
              {!user && (
                <div className="flex items-center justify-center">
                  <SolidUserIcon />
                  upload user
                </div>
              )}
            </div>
          </div>{' '}
          <div className="">
            {/* <img src="../../assets/2_rx7.jpg" alt="abc" /> */}
            <div className="h-44 w-full rounded-xl bg-blogBackground"></div>
            <div className="mt-1">Category</div>
            <h3 className="py-3 text-2xl font-bold">
              Có bức ảnh nào nhìn vào khiến người ta cười không ngừng được
              không?
            </h3>
            <p className="pb-3">
              Có mấy bức ảnh trông vào nhìn rất kì kiểu như là chắc phải có thế
              lực nào đó chụp ....
            </p>
            <div className="flex gap-7">
              <div className="flex items-center justify-center">
                <ClockIcon />
                upload date
              </div>
              {!user && (
                <div className="flex items-center justify-center">
                  <SolidUserIcon />
                  upload user
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
