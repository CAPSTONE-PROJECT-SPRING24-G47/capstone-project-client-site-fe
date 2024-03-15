import React, { useContext, useEffect, useState } from 'react';
import { fetchUserFromLocalStorage } from '../../utils/fetchUserFromLocalStorage';
import FilterIcon from '../Icons/FilterIcon';
import ClockIcon from '../Icons/ClockIcon';
import SolidUserIcon from '../Icons/SolidUserIcon';
import HeadingBlogList from './HeadingBlogList';
import { getListBlogs } from '../../api/service/blog';
import { Link } from 'react-router-dom';
import FormattedDate from '../FormattedDate';
import { getUser } from '../../api/service/user';
import GetAuthor from './GetAuthor';
import { BlogContext } from '../../Contexts/BlogContext';

const BlogList = () => {
  const { setLimitBlog } = useContext(BlogContext);

  const [user, setUser] = useState(null);
  const [listBlogs, setListBlogs] = useState([]);

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

  useEffect(() => {
    if (listBlogs) {
      const blogIdArr = listBlogs?.map((blog) => {
        return blog.blogId;
      });
      setLimitBlog(blogIdArr);
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
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
          {/* listUsers?.map((user, index) => {
                    return user.roleId !== 1 && <UserTableData user={user} />;
                  }) */}
          {listBlogs?.map((blog, index) => {
            return (
              <Link to={`../blog/${blog.blogId}`} className="">
                {/* <img src="../../assets/2_rx7.jpg" alt="abc" /> */}
                <div className="h-44 w-full rounded-xl bg-blogBackground"></div>
                <div className="mt-2 uppercase">Chỗ ở</div>
                <h3 className="py-2 text-2xl font-bold">{blog.title}</h3>
                <p className="pb-3">{blog.content}</p>
                <div className="flex gap-7">
                  <div className="flex items-center justify-center gap-1">
                    <ClockIcon />
                    {<FormattedDate date={blog.createdAt} />}
                  </div>
                  {/* {!user && ( */}
                  <div className="flex items-center justify-center gap-1">
                    <SolidUserIcon />
                    <GetAuthor userId={blog.userId} />
                    {/* {user?.lastName + ' ' + user?.firstName} */}
                  </div>
                  {/* )} */}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
