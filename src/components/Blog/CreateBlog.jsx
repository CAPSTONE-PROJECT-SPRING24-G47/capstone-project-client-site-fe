import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BackIcon } from '../Auth';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { fetchUserFromLocalStorage } from '../../utils/fetchUserFromLocalStorage';
import { addBlog } from '../../api/service/blog';

const CreateBlog = () => {
  const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'], // toggled buttons
    // ['blockquote', 'code-block'],
    ['link', 'image'],

    [{ align: [] }],

    // [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: 'ordered' }, { list: 'bullet' }],

    [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
    // [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    // [{ font: [] }],

    ['snow'], // remove formatting button
  ];
  const modules = {
    toolbar: toolbarOptions,
  };

  const [title, setTitle] = useState('');
  const [blogContent, setBlogContent] = useState('');
  const [user, setUser] = useState(null);
  const [blogCategoryId, setBlogCategoryId] = useState();
  // const [listCategories, setListCategories] = useState([]);
  // const [options, setOptions] = useState([]);
  const [blogData, setBlogData] = useState(null);
  const [response, setResponse] = useState();

  const handleBlogCategoryIdChange = (e) => {
    setBlogCategoryId(e.target.value);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleBlogContentChange = (content) => {
    setBlogContent(content);
  };

  const handleSubmitBlogData = () => {
    setBlogData({
      userId: user?.userId,
      title,
      blogContent,
      blogPhotos: [
        {
          photoURL: 'photo1',
        },
        {
          photoURL: 'photo3',
        },
        {
          photoURL: 'photo5',
        },
      ],
      blog_BlogCatagories: [{ blogCategoryId }],
    });
  };

  // useEffect(() => {
  //   const updatedOptions = listCategories.map((category) => ({
  //     value: category.blogCategoryId,
  //     label: category.blogCategoryName,
  //   }));
  //   setOptions(updatedOptions);
  // }, [listCategories]);

  useEffect(() => {
    const userLS = fetchUserFromLocalStorage();
    if (userLS) {
      setUser(userLS);
    }
  }, []);

  useEffect(() => {
    async function fetchData() {
      if (blogData) {
        const res = await addBlog(blogData);
        console.log('>>>response: ', res);
        setResponse(res);
        // if (response) {
        //   // setIsChangeSuccess(true);
        // }
      }
    }
    fetchData();
  }, [blogData]);
  // console.log(blogCategoryId);
  // console.log(blogContent.replace(/<[^>]*>/g, ''));
  // console.log(blogContent);

  return (
    <div className="bg-bg-color px-3 py-10">
      <Link to={`../blog`}>
        <BackIcon />
      </Link>
      <div className="my-5 flex w-full justify-center gap-14">
        {/* content */}
        <section className="relative w-9/12 rounded-xl bg-bg-secondary-color px-7 pb-7 pt-12">
          {/* title */}
          <div className="pb-7">
            <h1 className="mb-5 text-3xl font-bold">Tiêu đề</h1>

            <input
              type="text"
              value={title}
              onChange={handleTitleChange}
              placeholder="Nhập tiêu đề blog của bạn"
              className="w-full rounded-lg bg-bg-color px-1 py-2"
            />
          </div>
          {/* noi dung */}
          <div>
            <h1 className="mb-5 text-3xl font-bold">Nội dung</h1>
            <div
              className={`h-screen w-full rounded-lg border-none bg-bg-color px-2 py-2`}
            >
              <ReactQuill
                modules={modules}
                // theme="snow"
                value={blogContent}
                onChange={handleBlogContentChange}
                className={`h-full pb-11`}
              />
            </div>
          </div>

          <div className=" flex w-full justify-end">
            <Link
              // to={!title || !blogContent || !user || !response ? `` : `/blogs`}
              onClick={handleSubmitBlogData}
              className="mt-4 rounded-xl bg-secondary-color px-2 py-1 text-xl font-bold text-bg-color hover:bg-secondary-color/80"
            >
              Đăng
            </Link>
          </div>
        </section>
        {/* Author */}
        <section className="flex w-2/12 flex-col items-center gap-7 rounded-xl bg-bg-secondary-color px-3 py-12">
          {/* author's name */}
          <div className="w-full">
            <h1 className="mb-7 text-xl font-bold">Tác giả</h1>
            <input
              type="text"
              value={user?.lastName + ' ' + user?.firstName}
              className="w-full rounded-lg bg-bg-color px-2 py-2 text-center font-bold"
            />
          </div>
          {/* danh muc */}
          <div className="mb-14 w-full">
            <h1 className="mb-7 text-xl font-bold">Danh mục</h1>
            <select
              name=""
              id="blogCategoryId"
              value={blogCategoryId}
              onChange={handleBlogCategoryIdChange}
              className="w-full rounded-lg bg-secondary-color px-1 py-2 opacity-90"
            >
              <option value={0}>Chọn</option>
              <option value={1}>Chỗ ở</option>
              <option value={2}>Nhà hàng</option>
              <option value={3}>Trải nghiệm</option>
            </select>
          </div>
          {/* picture */}
          <div className="w-full">
            <h1 className="mb-7 text-lg font-bold">Ảnh bìa</h1>
            <div className="flex h-32 w-full items-center justify-center rounded-xl bg-bg-color">
              <button className="w-1/2 bg-text-color/10 px-3 py-1 text-lg font-bold">
                Thêm +
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CreateBlog;