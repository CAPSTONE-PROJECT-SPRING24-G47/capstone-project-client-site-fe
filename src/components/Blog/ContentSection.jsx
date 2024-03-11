import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const ContentSection = () => {
  const [content, setContent] = useState('');

  const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'], // toggled buttons
    // ['blockquote', 'code-block'],
    ['link', 'image'],

    [{ align: [] }],

    // [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: 'ordered' }, { list: 'bullet' }],
    // [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
    // [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
    // [{ direction: 'rtl' }], // text direction

    [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
    // [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    // [{ font: [] }],

    ['bubble'], // remove formatting button
  ];
  const modules = {
    toolbar: toolbarOptions,
  };

  return (
    <>
      {/* title */}
      <div className="pb-7">
        <h1 className="mb-5 text-3xl font-bold">Tiêu đề</h1>

        <input
          type="text"
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
            value={content}
            onChange={setContent}
            className={`h-full pb-11`}
          />
        </div>
        {/* <textarea
          name=""
          id="comment"
          // cols="30"
          // rows="10"
          placeholder="Nhập nội dung"
          className={`h-screen w-full resize-none rounded-lg bg-bg-color px-2 py-2`}
        ></textarea> */}
      </div>
    </>
  );
};

export default ContentSection;
