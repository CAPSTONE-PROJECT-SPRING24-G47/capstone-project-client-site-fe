import React, { useEffect, useState } from 'react';
import HeadingBlogList from './HeadingBlogList';
import ClockIcon from '../Icons/ClockIcon';
import { Link } from 'react-router-dom';
import RightArrowIcon from '../Icons/RightArrowIcon';
import FilterIcon from '../Icons/FilterIcon';
import { getListBlogs } from '../../api/service/blog';
import { fetchUserFromLocalStorage } from '../../utils/fetchUserFromLocalStorage';
import FormattedDate from '../FormattedDate';

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
        setListBlogs(response.data);
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
        {listBlogs?.map((blog, index) => {
          return (
            blog.userId === user.userId && (
              <div className="flex gap-20">
                <div className="h-44 w-1/4 rounded-xl bg-blogBackground"></div>
                <div className="w-2/3">
                  <h3 className="pb-3 text-2xl font-bold">{blog.title}</h3>
                  <p
                    className="pb-3"
                    dangerouslySetInnerHTML={{
                      __html: blog.blogContent.substr(0, 140) + '...',
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
