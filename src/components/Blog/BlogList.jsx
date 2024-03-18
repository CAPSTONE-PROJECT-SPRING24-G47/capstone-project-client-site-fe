import React, { useContext, useEffect, useState } from 'react';
import { fetchUserFromLocalStorage } from '../../utils/fetchUserFromLocalStorage';
import FilterIcon from '../Icons/FilterIcon';
import ClockIcon from '../Icons/ClockIcon';
import SolidUserIcon from '../Icons/SolidUserIcon';
import HeadingBlogList from './HeadingBlogList';
import { getListBlogs } from '../../api/service/blog';
import { Link } from 'react-router-dom';
import FormattedDate from '../FormattedDate';
import GetAuthor from './GetAuthor';
import { BlogContext } from '../../Contexts/BlogContext';
import FindIcon from '../Icons/FindIcon';
import Pagination from '../Pagination';

const BlogList = () => {
  const { setLimitBlog } = useContext(BlogContext);

  const [user, setUser] = useState(null);
  const [listBlogs, setListBlogs] = useState([]);

  const blogDataPerPage = 12; // Số lượng nhà hàng trên mỗi trang
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(listBlogs.length / blogDataPerPage);

  // Tính toán chỉ mục của dữ liệu nhà hàng trên trang hiện tại
  const indexOfLastBlog = currentPage * blogDataPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogDataPerPage;
  const currentBlogData = listBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

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
          {/* <FilterIcon /> */}
          {/* <div>Sắp xếp theo</div> */}
        </button>
        <div className="relative flex w-full items-center justify-end text-lg font-bold">
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
        {/* list blog */}
        <div className="grid grid-cols-3 gap-20 py-9">
          {/* listUsers?.map((user, index) => {
                    return user.roleId !== 1 && <UserTableData user={user} />;
                  }) */}
          {currentBlogData?.map((blog) => {
            return (
              <Link to={`../blog/${blog.blogId}`} className="">
                {/* <img src="../../assets/2_rx7.jpg" alt="abc" /> */}
                <div className="h-44 w-full rounded-xl bg-blogBackground"></div>
                <div className="mt-2 flex gap-2 text-sm uppercase">
                  {blog.blog_BlogCatagories.map((category) => {
                    return (
                      <div className="rounded-lg bg-primary-color/50 px-1">
                        {category.blogCategoryName + ' '}
                      </div>
                    );
                  })}
                </div>
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
                    {blog?.user.lastName + ' ' + blog?.user.firstName}
                    {/* {user?.lastName + ' ' + user?.firstName} */}
                  </div>
                  {/* )} */}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default BlogList;