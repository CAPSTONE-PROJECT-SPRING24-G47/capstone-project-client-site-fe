import React, { useEffect, useState } from 'react';
import { fetchUserFromLocalStorage } from '../../utils/fetchUserFromLocalStorage';

const AuthorSection = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userLS = fetchUserFromLocalStorage();
    if (userLS) {
      setUser(userLS);
    }
  }, []);
  return (
    <>
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
          id=""
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
    </>
  );
};

export default AuthorSection;
