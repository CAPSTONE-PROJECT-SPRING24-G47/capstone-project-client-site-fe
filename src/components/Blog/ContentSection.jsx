import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const ContentSection = () => {
  return (
    <>
      {/* title */}
      <div className="pb-7">
        <h1 className="mb-5 text-3xl font-bold">Tiêu đề</h1>
        <Editor />
        ;
        <input
          type="text"
          placeholder="Nhập tiêu đề blog của bạn"
          className="w-full rounded-lg bg-bg-color px-1 py-2"
        />
      </div>
      {/* noi dung */}
      <div>
        <h1 className="mb-5 text-3xl font-bold">Nội dung</h1>
        <textarea
          name=""
          id="comment"
          // cols="30"
          // rows="10"
          placeholder="Nhập nội dung"
          className={`h-screen w-full resize-none rounded-lg bg-bg-color px-2 py-2`}
        ></textarea>
      </div>
    </>
  );
};

export default ContentSection;
