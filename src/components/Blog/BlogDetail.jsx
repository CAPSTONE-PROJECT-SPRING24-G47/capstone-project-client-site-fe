import React, { useEffect, useState } from 'react';
import ClockIcon from '../Icons/ClockIcon';
import SolidUserIcon from '../Icons/SolidUserIcon';
import PrevIcon from '../Icons/PrevIcon';
import NextIcon from '../Icons/NextIcon';
import LikeIcon from '../Icons/LikeIcon';
import RightArrowIcon from '../Icons/RightArrowIcon';
import { fetchUserFromLocalStorage } from '../../utils/fetchUserFromLocalStorage';
import WrenchIcon from '../Icons/WrenchIcon';
import { Link, useParams } from 'react-router-dom';
import { getBlog } from '../../api/service/blog';
import GetAuthor from './GetAuthor';
import FormattedDate from '../FormattedDate';

const BlogDetail = () => {
  const [user, setUser] = useState(null);
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const userLS = fetchUserFromLocalStorage();
    if (userLS) {
      setUser(userLS);
    }
  }, []);

  const { blogId } = useParams();

  useEffect(() => {
    async function fetchData() {
      const response = await getBlog(blogId);
      console.log(response);
      if (response) {
        setBlog(response.data[0]);
      }
    }
    fetchData();
  }, [blogId]);
  // console.log(blog?.userId);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [blogId]);
  return (
    <div className="relative h-full bg-bg-color px-10 py-7">
      <div className="absolute right-8 top-14 rounded-full bg-primary-color p-1 font-semibold">
        Hoạt động
      </div>
      {/* category */}
      <div className="py-7 text-text-color/40">Category Category Category</div>
      <div className="flex justify-center gap-20">
        {/* blog */}
        <section
          className={`${user?.userId == blog?.userId ? 'w-full' : 'w-5/6'}`}
        >
          {/* title */}
          <h1 className=" text-4xl font-bold">{blog?.title}</h1>
          <div className="flex gap-7 py-5">
            <div className="flex items-center justify-center gap-1">
              <ClockIcon />
              {<FormattedDate date={blog?.createdAt} />}
            </div>
            <button className="flex items-center justify-center gap-1">
              <SolidUserIcon />
              <GetAuthor userId={blog?.userId} />
              {/* {user?.lastName + ' ' + user?.firstName} */}
            </button>
          </div>
          {/* blog content */}
          <div className="flex w-full flex-col items-center justify-center gap-7 border-y-[1px] border-text-color/20 py-7 text-lg">
            <p dangerouslySetInnerHTML={{ __html: blog?.blogContent }}></p>
          </div>
          {/* share + like/ Sửa, xóa */}
          {user?.userId === blog?.userId ? (
            <div className="flex justify-between">
              <Link to={`/blog-update/${blogId}`} className="flex gap-1 pt-5">
                <WrenchIcon />
                SỬA/XÓA
              </Link>
              {/* <Link to={`/blog-create`} className="flex gap-1 pt-5">
                <WrenchIcon />
                THÊM
              </Link> */}
            </div>
          ) : (
            <>
              <div className="flex flex-col gap-3 border-b-[1px] border-text-color/20 py-3">
                <div>Chia sẻ</div>
                <div className="rounded-lg bg-secondary-color/50 text-center">
                  social
                </div>
                <button className="flex w-fit gap-1 rounded-lg border-[1px] border-text-color/50 bg-bg-secondary-color px-[2px] py-1">
                  <LikeIcon />
                  Thích
                </button>
              </div>
              <div className="py-3 text-text-color/50">Báo vi phạm</div>
            </>
          )}
          {/* prev/next blog button */}
          <div
            className={`my-8 flex justify-between gap-10 py-2 ${user?.userId === blog?.userId ? 'bg-bg-secondary-color' : ''}`}
          >
            {/* prev blog */}
            {/* chua xong */}
            {blogId > 0 && (
              <Link
                to={`/blog/${parseInt(blogId) - 1}`}
                className="flex items-center"
              >
                <PrevIcon />
                <div className="flex flex-col gap-2 text-start">
                  <h4 className="text-xl">Bài trước</h4>
                  <div className="font-bold">
                    Có bức ảnh nào nhìn vào khiến người ta cười không ngừng được
                    không?
                  </div>
                </div>
              </Link>
            )}
            {/* next blog */}
            <Link
              to={`/blog/${parseInt(blogId) + 1}`}
              className="flex flex-row-reverse items-center"
              // onClick={window.location.reload()}
            >
              <NextIcon />
              <div className="flex flex-col gap-2 text-end">
                <h4 className="text-xl">Bài sau</h4>
                <div className="font-bold">
                  Có bức ảnh nào nhìn vào khiến người ta cười không ngừng được
                  không?
                </div>
              </div>
            </Link>
          </div>
          {/* comment section */}
          <div
            className={`${user?.userId === blog?.userId ? 'bg-bg-secondary-color px-12' : ''} `}
          >
            <h1 className="py-10 text-4xl font-bold">
              Bình luận về bài viết này
            </h1>
            <div className="ml-5">
              {/* comment textarea */}
              <div className="mb-5 flex gap-6">
                <img src="../../assets/fuji.jpg" alt="abc" />
                <textarea
                  name=""
                  id="comment"
                  // cols="30"
                  // rows="10"
                  placeholder="Để lại bình luận của bạn"
                  className={`h-16 w-full resize-none border-[1px] border-text-color/40 ${user?.userId === blog?.userId ? 'bg-bg-secondary-color' : 'bg-bg-color'} p-1`}
                ></textarea>
              </div>
              {/* comment */}
              <div className="flex gap-5">
                <img src="../../assets/fuji.jpg" alt="abc" />
                <div
                  className={`h-16 w-full ${user?.userId === blog?.userId ? 'bg-bg-secondary-color' : 'bg-bg-color'} px-2`}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium voluptatum blanditiis sit doloremque eius officia
                  aliquam dolores labore at, quae hic est quia consequuntur
                  dignissimos cumque corporis necessitatibus molestias odio!
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* blog tuong tu */}
        {user?.userId !== blog?.userId && (
          <section className="w-1/6">
            <h1 className=" text-xl font-bold leading-10">
              Các bài viết tương tự
            </h1>
            {/* cac blog tuong tu */}
            <div className="border-b-[1px] border-text-color/20 pb-5 pt-7 font-bold">
              <h2 className="text-lg">Tiêu đề</h2>
              <h3 className="text-sm">Tác giả</h3>
              {/* category */}
              <div className="flex flex-col gap-2 py-4 text-xs font-normal">
                <div>CATEGORY</div>
                <div>CATEGORY</div>
                <div>CATEGORY</div>
              </div>
              <Link
                to={''}
                className="flex w-full items-center justify-end gap-px text-xs font-normal text-primary-color"
              >
                Xem chi tiết
                <RightArrowIcon />
              </Link>
            </div>
            <div className="border-b-[1px] border-text-color/20 pb-5 pt-7 font-bold">
              <h2 className="text-lg">Tiêu đề</h2>
              <h3 className="text-sm">Tác giả</h3>
              {/* category */}
              <div className="flex flex-col gap-2 py-4 text-xs font-normal">
                <div>CATEGORY</div>
                <div>CATEGORY</div>
                <div>CATEGORY</div>
              </div>
              <Link
                to={''}
                className="flex w-full items-center justify-end gap-px text-xs font-normal text-primary-color"
              >
                Xem chi tiết
                <RightArrowIcon />
              </Link>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default BlogDetail;
