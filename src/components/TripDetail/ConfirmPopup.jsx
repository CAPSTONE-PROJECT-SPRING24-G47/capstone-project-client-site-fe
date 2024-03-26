import React from 'react';

const ConfirmPopup = ({
  content,
  setIsDiff,
  setIsConfirmPopup,
  setIsPopupEdit,
}) => {
  return (
    <div className="fixed left-[50%] top-[50%] z-50 flex max-w-[420px] -translate-x-[50%] -translate-y-[50%] flex-col gap-5 rounded-xl bg-bg-color p-5">
      <div className="text-xl font-semibold text-text-color">{content}</div>
      <div className="flex justify-end gap-4">
        <div
          onClick={() => {
            setIsDiff(false);
            setIsConfirmPopup(false);
            setIsPopupEdit(false);
          }}
          className="cursor-pointer rounded-lg bg-sub-color px-3 py-2 text-lg font-semibold text-white hover:bg-sub-color/90"
        >
          Thoát
        </div>
        <div
          onClick={() => {
            setIsConfirmPopup(false);
          }}
          className="cursor-pointer rounded-lg bg-accent-color px-3 py-2 text-lg font-semibold text-white hover:bg-accent-color/90"
        >
          Tiếp tục ở lại
        </div>
      </div>
    </div>
  );
};

export default ConfirmPopup;
