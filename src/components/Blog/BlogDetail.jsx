import React, { useEffect, useState } from 'react';
import ClockIcon from '../Icons/ClockIcon';
import SolidUserIcon from '../Icons/SolidUserIcon';
import RightArrowIcon from '../Icons/RightArrowIcon';
import { fetchUserFromLocalStorage } from '../../utils/fetchUserFromLocalStorage';
import WrenchIcon from '../Icons/WrenchIcon';
import { Link, useParams } from 'react-router-dom';
import {
  getBlog,
  getListBlogs,
  getRelatedBlogs,
} from '../../api/services/blog';
import FormattedDate from '../FormattedDate';
import { useContext } from 'react';
import { BlogContext } from '../../Contexts/BlogContext';
import {
  addBlogComment,
  deleteBlogComment,
  getListBlogComments,
  getListBlogCommentsByBlogId,
  updateBlogComment,
} from '../../api/services/comment';
import { getUser } from '../../api/services/user';
import SuccessIconBig from '../Auth/Icons/SuccessIconBig';
import { getUsers } from '../../api';
import { AlertContext } from '../../Contexts/AlertContext';

const BlogDetail = () => {
  const { setIsShow, setAlertData } = useContext(AlertContext);

  const { blogId } = useParams();

  // const lastBlogId = limitBlog[limitBlog.length - 1];
  // console.log(limitBlog);

  const [user, setUser] = useState(null);
  const [listUsers, setListUsers] = useState([]);
  const [blog, setBlog] = useState(null);
  const [commentContent, setCommentContent] = useState('');
  const [comment, setComment] = useState(null);
  const [listComments, setListComments] = useState([]);
  const [isConfirm, setIsConfirm] = useState(false);
  const [isPopUp, setIsPopUp] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [commentId, setCommentId] = useState(-1);
  const [toggleAddComment, setToggleAddComment] = useState(false);
  const [toggleUpdateComment, setToggleUpdateComment] = useState(false);
  const [isUpdateComment, setIsUpdateComment] = useState(false);
  const [updateCommentContent, setUpdateCommentContent] = useState('');
  const [updateComment, setUpdateComment] = useState(null);
  const [relateBlogs, setRelateBlogs] = useState([]);
  // console.log(blog);
  const handleCommentContentChange = (e) => {
    setCommentContent(e.target.value);
  };

  const handleUpdateCommentContentChange = (e) => {
    setUpdateCommentContent(e.target.value);
  };

  const handleSubmitData = (e) => {
    setComment({
      userId: user?.userId,
      blogId,
      commentContent,
    });
  };

  const handleSubmitUpdateComment = (e) => {
    setUpdateComment({
      userId: user?.userId,
      blogId,
      commentContent: updateCommentContent,
    });
  };
  console.log(updateComment);
  useEffect(() => {
    const userLS = fetchUserFromLocalStorage();
    if (userLS) {
      setUser(userLS);
    }
  }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await getBlog(blogId);
      // console.log(response);
      if (response) {
        setBlog(response.data[0]);
      }
    }
    fetchData();
  }, [blogId]);

  useEffect(() => {
    async function fetchData() {
      if (user) {
        if (comment) {
          const res = await addBlogComment(comment);
          // console.log('>>>response: ', res);
          if (res) {
            setIsShow(true);
            setAlertData({
              message: 'Thêm bình luận thành công',
              textColor: 'text-white',
              backGroundColor: 'bg-primary-color',
            });
            setToggleAddComment((state) => !state);
            setCommentContent('');
          }
        }
      } else {
        console.log('Đăng nhập đã');
      }
    }
    fetchData();
  }, [comment]);

  useEffect(() => {
    async function fetchData() {
      if (updateComment) {
        const res = await updateBlogComment(commentId, updateComment);
        console.log('>>>response: ', res);
        if (res) {
          setIsShow(true);
          setAlertData({
            message: 'Sửa bình luận thành công',
            textColor: 'text-white',
            backGroundColor: 'bg-primary-color',
          });
          setToggleUpdateComment((state) => !state);
          setIsUpdateComment(false);
        }
      }
    }
    fetchData();
  }, [updateComment]);

  useEffect(() => {
    async function fetchData() {
      const res = await getListBlogCommentsByBlogId(blogId);
      setListComments(res);
    }
    fetchData();
  }, [toggleAddComment, toggleUpdateComment]);
  // console.log(listComments);

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
    // console.log(contents);
  }, [blog]);

  useEffect(() => {
    async function fetchData() {
      const response = await getUsers();
      // console.log(response.data);
      if (response) {
        setListUsers(response.data);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await getRelatedBlogs(blogId);
      console.log(response);
      // if (response) {
      //   setRelateBlogs(response.data);
      // }
    }
    fetchData();
  }, [blogId]);
  // console.log(relateBlogs);
  function getUserFullName(userId) {
    if (!listUsers) return ''; // Tránh lỗi khi listUsers chưa được cập nhật từ API

    const user = listUsers.find((user) => user.userId === userId);
    return user ? user.firstName + ' ' + user.lastName : ''; // Trả về tên đầy đủ của người dùng hoặc chuỗi rỗng nếu không tìm thấy
  }

  function getUserPicture(userId) {
    if (!listUsers) return ''; // Tránh lỗi khi listUsers chưa được cập nhật từ API

    const user = listUsers.find((user) => user.userId === userId);
    return user?.pictureProfile; // Trả về tên đầy đủ của người dùng hoặc chuỗi rỗng nếu không tìm thấy
  }

  useEffect(() => {
    async function fetchData() {
      if (isConfirm && commentId != -1) {
        const response = await deleteBlogComment(commentId);
        console.log(response);
        setIsSuccess(true);
      }
    }
    fetchData();
  }, [isConfirm]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [blogId]);

  return (
    <div className="relative h-full bg-bg-color px-10 py-7">
      {isUpdateComment && (
        <div className="fixed inset-0 z-[99] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-[#03121A] opacity-50 backdrop-blur-[20px]"
            onClick={() => setIsUpdateComment(false)}
          />
          <div className="z-[99] flex w-1/2 flex-col rounded-xl bg-bg-secondary-color p-7">
            <h5 className="mb-7 text-3xl font-semibold">Sửa bình luận</h5>
            <textarea
              name=""
              id="commentContent"
              value={updateCommentContent}
              onChange={handleUpdateCommentContentChange}
              // cols="30"
              // rows="10"
              placeholder="...."
              className={`mb-5 h-16 w-full resize-none border-[0.5px] border-text-color/30 bg-bg-color p-1 outline-none`}
            ></textarea>
            <div className="flex items-center justify-end gap-5 text-2xl font-medium">
              <button
                className="w-1/5 rounded-xl bg-accent-color px-1 py-px text-center text-bg-color"
                onClick={(e) => {
                  // e.preventDefault();
                  handleSubmitUpdateComment();
                }}
              >
                Sửa
              </button>
              <button
                className="w-1/6 rounded-xl bg-bg-color py-px text-accent-color"
                onClick={() => setIsUpdateComment(false)}
              >
                Hủy
              </button>
            </div>
          </div>
        </div>
      )}
      {isPopUp && (
        <div className="fixed inset-0 z-[99] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-[#03121A] opacity-50 backdrop-blur-[20px]"
            onClick={() => setIsPopUp(false)}
          />
          {!isSuccess && (
            <div className="z-[99] flex flex-col gap-10 rounded-xl bg-bg-secondary-color p-9">
              <h5 className="text-3xl font-semibold">
                Bạn có chắc muốn xóa Blog này không?
              </h5>
              <div className="flex items-center justify-end gap-5 text-2xl font-medium">
                <button
                  className="w-1/5 rounded-xl bg-accent-color px-1 py-px text-center text-bg-color"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsConfirm(true);
                    // setIsPopUp(false);
                  }}
                >
                  Xác nhận
                </button>
                <button
                  className="w-1/6 rounded-xl bg-bg-color py-px text-accent-color"
                  onClick={() => setIsPopUp(false)}
                >
                  Hủy
                </button>
              </div>
            </div>
          )}
          {isSuccess && (
            <div className="z-50 flex h-[360px] w-96 flex-col items-center justify-center gap-10 rounded-xl bg-bg-color">
              <>
                <SuccessIconBig />
              </>
              <h2 className="mt-3 text-2xl font-semibold">
                Chúc mừng bạn đã thành công!
              </h2>
              <button
                type="submit"
                onClick={() => {
                  window.location.reload(true);
                }}
                className="flex h-11 w-1/2 items-center justify-center rounded-2xl bg-secondary-color font-semibold text-bg-color hover:bg-gradient-to-b hover:from-secondary-color hover:to-accent-color"
              >
                Tiếp tục
              </button>
            </div>
          )}
        </div>
      )}
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
            <div className="py-3 text-text-color/50">Báo vi phạm</div>
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
                      src={`${getUserPicture(comment.userId) ? getUserPicture(comment.userId) : 'https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1114445501.jpg'}`}
                    ></img>
                    <div
                      className={`0 mb-11 h-fit w-full whitespace-pre-line break-all border-b-[1px] border-text-color/20 pb-[2px] pl-0 ${user?.userId === blog?.userId ? 'bg-bg-secondary-color' : 'bg-bg-color'} px-2`}
                    >
                      <div className="flex justify-between">
                        <div className="text-xl font-semibold">
                          {getUserFullName(comment.userId)}
                        </div>
                        {user?.userId === comment?.userId && (
                          <div className="flex gap-1">
                            <button
                              onClick={() => {
                                setCommentId(comment.blogCommentId);
                                setUpdateCommentContent(comment.commentContent);
                                setIsUpdateComment(true);
                              }}
                              className="text-primary-color"
                            >
                              Sửa
                            </button>
                            <div>|</div>
                            <button
                              onClick={() => {
                                setCommentId(comment.blogCommentId);
                                setIsPopUp(true);
                              }}
                              className="text-sub-color"
                            >
                              Xóa
                            </button>
                          </div>
                        )}
                      </div>
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
