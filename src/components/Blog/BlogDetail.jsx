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
import { addBlogComment, getBlog } from '../../api/service/blog';
import FormattedDate from '../FormattedDate';
import { useContext } from 'react';
import { BlogContext } from '../../Contexts/BlogContext';
import { getListBlogComments } from '../../api/service/comment';
import { getUser } from '../../api/service/user';

const BlogDetail = () => {
  // const { limitBlog } = useContext(BlogContext);

  const { blogId } = useParams();

  // const lastBlogId = limitBlog[limitBlog.length - 1];
  // console.log(limitBlog);

  const [user, setUser] = useState(null);
  const [commentedUser, setCommentedUser] = useState(null);
  const [blog, setBlog] = useState(null);
  const [commentContent, setCommentContent] = useState('');
  const [comment, setComment] = useState(null);
  const [listComments, setListComments] = useState([]);
  const [blogLink, setBlogLink] = useState('');
  console.log(blog);
  const handleCommentContentChange = (e) => {
    setCommentContent(e.target.value);
  };

  // {
  //   "userId": 5,
  //   "blogId": 2,
  //   "commentContentContent": "string"
  // }

  const handleSubmitData = (e) => {
    setComment({
      userId: user?.userId,
      blogId,
      // stars: 5,
      commentContent,
    });
  };

  useEffect(() => {
    const userLS = fetchUserFromLocalStorage();
    if (userLS) {
      setUser(userLS);
    }
  }, []);

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
    async function fetchData() {
      if (user) {
        if (comment) {
          const res = await addBlogComment(comment);
          console.log('>>>response: ', res);
        }
      } else {
        console.log('Đăng nhập đã');
      }
    }
    fetchData();
  }, [comment]);

  useEffect(() => {
    async function fetchData() {
      const res = await getListBlogComments();
      // console.log('>>>response: ', res);
      setListComments(res.data);
    }
    fetchData();
  }, []);

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await getUser(comment?.userId);

  //     if (response) {
  //       setCommentedUser(response?.data?.data[0]);
  //     }
  //   }
  //   fetchData();
  // }, []);

  useEffect(() => {
    var htmlString = blog?.blogContent;
    // Parse HTML string
    var parser = new DOMParser();
    var doc = parser.parseFromString(htmlString, 'text/html');

    // Get individual elements
    var elements = doc.body.children;

    // Convert NodeList to array for easy manipulation
    var elementsArray = Array.from(elements);

    // Extract content of each element
    var contents = elementsArray.map(function (element) {
      return element.outerHTML;
    });

    // Display the contents
    console.log(contents);
  }, [blog]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [blogId]);
  return (
    <div className="relative h-full bg-bg-color px-10 py-7">
      <div className="absolute right-8 top-14 rounded-full bg-primary-color p-1 font-semibold">
        Hoạt động
      </div>
      {/* category */}
      <div className="flex gap-1 py-7 text-text-color">
        {blog?.blog_BlogCatagories.map((category) => {
          return (
            <div className="w-fit rounded-lg bg-secondary-color/50 px-1">
              {category.blogCategoryName}
            </div>
          );
        })}
      </div>
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
              {blog?.user.lastName + ' ' + blog?.user.firstName}
            </button>
          </div>
          {/* blog content */}
          <div className="flex w-full flex-col items-center justify-center gap-7 border-y-[1px] border-text-color/20 py-7 text-lg">
            <p dangerouslySetInnerHTML={{ __html: blog?.blogContent }}>
              {/* <img src={`${''}`} alt="" /> */}
            </p>
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
              {/* <div className="flex flex-col gap-3 border-b-[1px] border-text-color/20 py-3">
                <div>Chia sẻ</div>
                <div className="rounded-lg bg-secondary-color/50 text-center">
                  social
                </div>
                <button className="flex w-fit gap-1 rounded-lg border-[1px] border-text-color/50 bg-bg-secondary-color px-[2px] py-1">
                  <LikeIcon />
                  Thích
                </button>
              </div> */}
              <div className="py-3 text-text-color/50">Báo vi phạm</div>
            </>
          )}
          {/* prev/next blog button */}
          {/* comment section */}
          <div
            className={`${user?.userId === blog?.userId ? 'bg-bg-secondary-color px-12' : ''}`}
          >
            <h1 className="py-10 text-4xl font-bold">
              Bình luận về bài viết này
            </h1>
            <div className="ml-5">
              {/* comment content */}
              <div className="flex flex-col">
                <div className="mb-3 flex gap-6">
                  <img
                    className="h-[45px] w-[45px] rounded-full"
                    src={`${user?.pictureProfile ? user?.pictureProfile : 'https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1114445501.jpg'}`}
                  ></img>
                  <textarea
                    name=""
                    id="commentContent"
                    value={commentContent}
                    onChange={handleCommentContentChange}
                    // cols="30"
                    // rows="10"
                    placeholder="Để lại bình luận của bạn"
                    className={`h-16 w-full resize-none border-[1px] border-text-color/40 ${user?.userId === blog?.userId ? 'bg-bg-secondary-color' : 'bg-bg-color'} p-1`}
                  ></textarea>
                </div>
                <button
                  onClick={handleSubmitData}
                  type="submit"
                  className="mb-5 self-end rounded-lg bg-primary-color/30 px-1 hover:bg-primary-color/70"
                >
                  Đăng
                </button>
              </div>
              {/* comment by user */}
              {listComments?.map((comment) => {
                return (
                  <div className="flex gap-5">
                    <img
                      className="h-[45px] w-[45px] rounded-full"
                      src={`${user?.pictureProfile ? user?.pictureProfile : 'https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1114445501.jpg'}`}
                    ></img>
                    <div
                      className={`h-16 w-full whitespace-pre-line break-all ${user?.userId === blog?.userId ? 'bg-bg-secondary-color' : 'bg-bg-color'} px-2`}
                    >
                      {comment.commentContent}
                    </div>
                  </div>
                );
              })}
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
