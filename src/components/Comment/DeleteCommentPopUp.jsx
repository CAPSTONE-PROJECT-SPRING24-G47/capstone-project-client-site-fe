import React, { useContext, useEffect, useState } from 'react';
import { CommentContext } from '../../Contexts/CommentContext';

const DeleteCommentPopUp = ({ setIsConfirm }) => {
  const { setIsDeletePopUp } = useContext(CommentContext);

  return (
    <div className="fixed inset-0 z-[99] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-[#03121A] opacity-50 backdrop-blur-[20px]"
        onClick={() => setIsDeletePopUp(false)}
      />
      <div className="z-[99] flex flex-col gap-10 rounded-xl bg-bg-secondary-color p-9">
        <h5 className="text-3xl font-semibold">
          Bạn có chắc muốn xóa đánh giá này?
        </h5>
        <div className="flex items-center justify-end gap-5 text-2xl font-medium">
          <button
            className="w-2/6 rounded-xl bg-accent-color py-px text-bg-color"
            onClick={() => {
              setIsConfirm(true);
              setIsDeletePopUp(false);
            }}
          >
            Xác nhận
          </button>
          <button
            className="w-1/6 rounded-xl bg-bg-color py-px text-accent-color"
            onClick={() => setIsDeletePopUp(false)}
          >
            Hủy
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteCommentPopUp;
