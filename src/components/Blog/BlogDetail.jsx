import React, { useEffect, useState } from 'react';
import ClockIcon from '../Icons/ClockIcon';
import SolidUserIcon from '../Icons/SolidUserIcon';
import PrevIcon from '../Icons/PrevIcon';
import NextIcon from '../Icons/NextIcon';
import LikeIcon from '../Icons/LikeIcon';
import RightArrowIcon from '../Icons/RightArrowIcon';
import { fetchUserFromLocalStorage } from '../../utils/fetchUserFromLocalStorage';
import WrenchIcon from '../Icons/WrenchIcon';
import { Link } from 'react-router-dom';

const BlogDetail = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userLS = fetchUserFromLocalStorage();
    if (userLS) {
      setUser(userLS);
    }
  }, []);

  return (
    <div className="relative h-full bg-bg-color px-10 py-7">
      <div className="absolute right-8 top-14 rounded-full bg-primary-color p-1 font-semibold">
        Hoạt động
      </div>
      {/* category */}
      <div className="py-7 text-text-color/40">Category Category Category</div>
      <div className="flex justify-center gap-20">
        {/* blog */}
        <section className={`${user ? 'w-full' : 'w-2/3'}`}>
          {/* title */}
          <h1 className=" text-4xl font-bold">
            Có bức ảnh nào nhìn vào khiến người ta cười không ngừng được không?
          </h1>
          <div className="flex gap-7 py-5">
            <div className="flex items-center justify-center">
              <ClockIcon />
              upload date
            </div>
            {!user && (
              <div className="flex items-center justify-center">
                <SolidUserIcon />
                upload user
              </div>
            )}
          </div>
          {/* blog content */}
          <div className="flex flex-col gap-7 border-y-[1px] border-text-color/20 py-7 text-lg">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
              quisquam voluptate molestias facilis inventore aliquid
              reprehenderit nobis architecto totam necessitatibus saepe ab
              explicabo qui quam error, praesentium perferendis deserunt. Minima
              consequuntur tenetur expedita aut, officiis doloremque nesciunt
              facere quasi quisquam quod deleniti! Expedita nisi praesentium
              ipsa illum, assumenda deserunt, laboriosam quae incidunt eius
              perferendis ipsum laborum, corporis aut fuga repellat ratione
              asperiores sed rem. Officiis, eius quo? Aperiam ut hic nobis
              excepturi. Velit optio consequuntur atque assumenda, est sed
              placeat magni, officiis modi beatae hic. Eos commodi quo
              recusandae ad veritatis odio consequatur ipsa tempore architecto
              amet iste, animi dicta deserunt quibusdam obcaecati sit nemo non
              dolorem. Delectus esse quis voluptatum sunt doloribus quia sint,
              illum ipsa nam natus, quas adipisci veniam vel soluta fugit
              necessitatibus, molestiae earum repudiandae? Expedita, consectetur
              harum cupiditate maxime similique cumque adipisci laudantium
              repellendus provident veniam. Dicta vel asperiores inventore
              consequatur, a dolores praesentium? Provident.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
              quisquam voluptate molestias facilis inventore aliquid
              reprehenderit nobis architecto totam necessitatibus saepe ab
              explicabo qui quam error, praesentium perferendis deserunt. Minima
              consequuntur tenetur expedita aut, officiis doloremque nesciunt
              facere quasi quisquam quod deleniti! Expedita nisi praesentium
              ipsa illum, assumenda deserunt, laboriosam quae incidunt eius
              perferendis ipsum laborum, corporis aut fuga repellat ratione
              asperiores sed rem. Officiis, eius quo? Aperiam ut hic nobis
              excepturi. Velit optio consequuntur atque assumenda, est sed
              placeat magni, officiis modi beatae hic. Eos commodi quo
              recusandae ad veritatis odio consequatur ipsa tempore architecto
              amet iste, animi dicta deserunt quibusdam obcaecati sit nemo non
              dolorem. Delectus esse quis voluptatum sunt doloribus quia sint,
              illum ipsa nam natus, quas adipisci veniam vel soluta fugit
              necessitatibus, molestiae earum repudiandae? Expedita, consectetur
              harum cupiditate maxime similique cumque adipisci laudantium
              repellendus provident veniam. Dicta vel asperiores inventore
              consequatur, a dolores praesentium? Provident.
            </p>
          </div>
          {/* share + like/ Sửa, xóa */}
          {user ? (
            <Link to={`/blog-update`} className="flex gap-1 pt-5">
              <WrenchIcon />
              SỬA/XÓA
            </Link>
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
            className={`my-8 flex justify-between gap-10 py-2 ${user ? 'bg-bg-secondary-color' : ''}`}
          >
            {/* prev blog */}
            <button className="flex items-center">
              <PrevIcon />
              <div className="flex flex-col gap-2 text-start">
                <h4 className="text-xl">Bài trước</h4>
                <div className="font-bold">
                  Có bức ảnh nào nhìn vào khiến người ta cười không ngừng được
                  không?
                </div>
              </div>
            </button>
            {/* next blog */}
            <button className="flex flex-row-reverse items-center">
              <NextIcon />
              <div className="flex flex-col gap-2 text-end">
                <h4 className="text-xl">Bài sau</h4>
                <div className="font-bold">
                  Có bức ảnh nào nhìn vào khiến người ta cười không ngừng được
                  không?
                </div>
              </div>
            </button>
          </div>
          {/* comment section */}
          <div className={`${user ? 'bg-bg-secondary-color px-12' : ''}`}>
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
                  className={`h-16 w-3/4 resize-none border-[1px] border-text-color/40 ${user ? 'bg-bg-secondary-color' : 'bg-bg-color'} px-2`}
                ></textarea>
              </div>
              {/* comment */}
              <div className="flex gap-5">
                <img src="../../assets/fuji.jpg" alt="abc" />
                <div
                  className={`h-16 w-3/4 ${user ? 'bg-bg-secondary-color' : 'bg-bg-color'} px-2`}
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
        {!user && (
          <section className="w-1/3">
            <h1 className=" text-4xl font-bold">Các bài viết tương tự</h1>
            {/* cac blog tuong tu */}
            <div className="border-b-[1px] border-text-color/20 pb-5 pt-7 font-bold">
              <h2 className="text-3xl">Tiêu đề</h2>
              <h3 className="text-2xl">Tác giả</h3>
              {/* category */}
              <div className="flex flex-col gap-2 py-4 font-normal">
                <div>CATEGORY</div>
                <div>CATEGORY</div>
                <div>CATEGORY</div>
              </div>
              <button className="flex w-full items-center justify-end gap-px text-lg font-normal text-primary-color">
                Xem chi tiết
                <RightArrowIcon />
              </button>
            </div>
            <div className="border-b-[1px] border-text-color/20 pb-5 pt-7 font-bold">
              <h2 className="text-3xl">Tiêu đề</h2>
              <h3 className="text-2xl">Tác giả</h3>
              {/* category */}
              <div className="flex flex-col gap-2 py-4 font-normal">
                <div>CATEGORY</div>
                <div>CATEGORY</div>
                <div>CATEGORY</div>
              </div>
              <button className="flex w-full items-center justify-end gap-px text-lg font-normal text-primary-color">
                Xem chi tiết
                <RightArrowIcon />
              </button>
            </div>
            <div className="border-b-[1px] border-text-color/20 pb-5 pt-7 font-bold">
              <h2 className="text-3xl">Tiêu đề</h2>
              <h3 className="text-2xl">Tác giả</h3>
              {/* category */}
              <div className="flex flex-col gap-2 py-4 font-normal">
                <div>CATEGORY</div>
                <div>CATEGORY</div>
                <div>CATEGORY</div>
              </div>
              <button className="flex w-full items-center justify-end gap-px text-lg font-normal text-primary-color">
                Xem chi tiết
                <RightArrowIcon />
              </button>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default BlogDetail;
