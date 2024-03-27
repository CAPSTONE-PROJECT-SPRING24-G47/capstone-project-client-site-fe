import React, { useEffect, useState } from 'react';
import HeadingBlogList from './HeadingBlogList';
import ClockIcon from '../Icons/ClockIcon';
import { Link } from 'react-router-dom';
import RightArrowIcon from '../Icons/RightArrowIcon';
import FilterIcon from '../Icons/FilterIcon';
import { getListBlogs } from '../../api/services/blog';
import { fetchUserFromLocalStorage } from '../../utils/fetchUserFromLocalStorage';
import FormattedDate from '../FormattedDate';
import FindIcon from '../Icons/FindIcon';

const BlogIndividualList = () => {
  const [user, setUser] = useState(null);
  const [listBlogs, setListBlogs] = useState([]);
  // const [blogContent, setBlogContent] = useState('');

  // const handleBlogContentChange = (content) => {
  //   setBlogContent(content);
  // };

  useEffect(() => {
    const userLS = fetchUserFromLocalStorage();
    if (userLS) {
      setUser(userLS);
    }
  }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await getListBlogs();

      if (response) {
        setListBlogs(response.data.reverse());
      }
    }
    fetchData();
  }, []);

  return (
    <div className="bg-bg-color">
      <HeadingBlogList title={'Blog của tôi'} />
      {/* list */}
      <div className="flex flex-col gap-12 px-40 py-20">
        <div className="flex">
          <Link
            to={`/blog-create`}
            className="flex w-32 items-center justify-center rounded-xl bg-primary-color px-2 py-0 text-xl font-semibold text-bg-color hover:bg-primary-color/80"
          >
            Thêm mới
          </Link>
          <div className="relative flex w-full items-center justify-end text-lg font-medium">
            <select className="rounded-s-xl bg-secondary-color/70 py-[8.1px]">
              <option value="" className="font-medium">
                Tất cả
              </option>
              <option value="title" className="font-medium">
                Tiêu đề
              </option>
              <option value="category" className="font-medium">
                Danh mục
              </option>
              <option value="createdAt" className="font-medium">
                Ngày tạo
              </option>
              <option value="name" className="font-medium">
                Tên
              </option>
            </select>
            <input
              type="text"
              className="rounded-e-xl bg-secondary-color/70 py-[9px] pl-3 pr-9 leading-4 placeholder:text-text-color"
              placeholder="Tìm kiếm"
            />
            <FindIcon />
          </div>
        </div>
        {/* item */}
        {listBlogs?.map((blog, index) => {
          return (
            blog.userId === user.userId && (
              <div className="flex gap-20">
                {/* <div className="h-44 w-1/4 rounded-xl bg-blogBackground"></div> */}
                <div className="h-44 w-1/3 rounded-xl">
                  <img
                    src={blog.photo}
                    alt="Cover_image"
                    className="h-full w-full rounded-lg object-cover"
                    // height={100}
                    // width={200}
                  />
                </div>
                <div className="w-2/3">
                  <h3
                    className={`pb-3 text-2xl font-bold ${blog.title.length > 69 ? '' : 'pb-8'}`}
                    dangerouslySetInnerHTML={{
                      __html:
                        blog.title.length > 69
                          ? blog.title.substr(0, 70) + '...'
                          : blog.title.substr(0, 70),
                    }}
                  ></h3>
                  <p
                    className="pb-3"
                    dangerouslySetInnerHTML={{
                      __html:
                        blog.blogContent.length > 139
                          ? blog.blogContent.substr(0, 140) + '...'
                          : blog.blogContent.substr(0, 140),
                    }}
                  ></p>
                  <div className="flex justify-between">
                    <div className="flex items-center gap-1">
                      <ClockIcon />
                      {<FormattedDate date={blog.createdAt} />}
                    </div>
                    <Link
                      to={`../blog/${blog.blogId}`}
                      className="flex items-center justify-end gap-px text-lg font-normal text-primary-color"
                    >
                      Xem chi tiết
                      <RightArrowIcon />
                    </Link>
                  </div>
                </div>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};

export default BlogIndividualList;
