import React, { useEffect } from 'react';
import avatarImage from '../../assets/trip_builder_manual_1.jpeg';
import { Link, useParams } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import ReactPaginate from 'react-paginate';
import { useState } from 'react';

import ReactStars from 'react-rating-stars-component';
import { getListUsers } from '../../api/services/user';
import { useContext } from 'react';
import { CommentContext } from '../../Contexts/CommentContext';
import DeleteCommentPopUp from '../../components/Comment/DeleteCommentPopUp';
import {
  deleteAccommodationCommentDetail,
  getAccommodationDetail,
  getListAccommodationCategoryDetail,
  getListAccommodationComment,
} from '../../api/services/accommodation';
import 'react-image-gallery/styles/css/image-gallery.css';

const AccommodationDetail = () => {
  const { id } = useParams();
  const userData = JSON.parse(localStorage.getItem('user'));
  const {
    isDeletePopUp,
    setIsDeletePopUp,
    dataId,
    setDataId,
    isConfirm,
    setIsConfirm,
  } = useContext(CommentContext);
  const [detailData, setDetailData] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [listCategoryDetail, setListCategoryDetail] = useState([]);
  const [accommodationData, setAccommodationData] = useState(null);
  const [commentData, setCommentData] = useState([]);
  const [listUsers, setListUsers] = useState(null);
  const [toggleDelete, setToggleDelete] = useState(false);
  const [images, setImages] = useState(null);

  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  //Lấy user
  useEffect(() => {
    async function fetchData() {
      const response = await getListUsers();
      if (response) {
        setListUsers(response);
      }
    }
    fetchData();
  }, []);
  function getUserFullName(userId) {
    if (!listUsers) return ''; // Tránh lỗi khi listUsers chưa được cập nhật từ API

    const user = listUsers.find((user) => user.userId === userId);
    return user ? user.firstName + ' ' + user.lastName : ''; // Trả về tên đầy đủ của người dùng hoặc chuỗi rỗng nếu không tìm thấy
  }

  //Get data (restaurant, accommodation, TA)

  useEffect(() => {
    async function fetchData() {
      const response = await getAccommodationDetail(id);
      if (response) {
        const accommodation = response.data[0];
        console.log(accommodation);

        setAccommodationData(accommodation);
      }
    }
    fetchData();
  }, [id]);

  console.log(images);

  //Get comment
  useEffect(() => {
    async function fetchData() {
      const response = await getListAccommodationComment(id);
      const comment = response.data.reverse();
      console.log(response);
      if (response) {
        setCommentData(comment);
      }

      setIsConfirm(false);
    }
    fetchData();
  }, [id, toggleDelete]);

  //Set form data để hiện detail
  useEffect(() => {
    setDetailData({
      name: accommodationData?.accommodationName ?? '',
      description: accommodationData?.accommodationDescription ?? '',
      address: accommodationData?.accommodationAddress ?? '',
      phone: accommodationData?.accommodationPhone ?? null,
      website: accommodationData?.accommodationWebsite ?? '',
      price: accommodationData?.priceRange,
    });
  }, [accommodationData]);

  //Set image để hiển thị
  useEffect(() => {
    if (accommodationData && accommodationData?.accommodationPhotos) {
      const photoUrls = accommodationData?.accommodationPhotos.map((photo) => ({
        original: photo.signedUrl, // Đường dẫn ảnh gốc
        thumbnail: photo.signedUrl, // Đường dẫn ảnh thumbnail
      }));
      setImages(photoUrls);
    }
  }, [accommodationData]);

  //Get category
  useEffect(() => {
    async function fetchData() {
      const response = await getListAccommodationCategoryDetail(id);
      console.log(response);
      if (response) {
        setListCategoryDetail(
          response.data.map((category) => ({
            categoryName: category?.accommodationCategoryName || '',
          }))
        );
      }
    }
    fetchData();
  }, []);

  const FormatDate = (date) => {
    // Chuyển đổi createDay thành một đối tượng Date
    const formattedCreateDay = new Date(date);

    // Lấy thông tin ngày, tháng, năm từ đối tượng Date
    const day = formattedCreateDay.getDate();
    const month = formattedCreateDay.getMonth() + 1;
    const year = formattedCreateDay.getFullYear();
    return day + '/' + month + '/' + year;
  };

  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 5;

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = commentData.reverse().slice(itemOffset, endOffset);
  const pageCount = Math.ceil(commentData.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % commentData.length;
    setItemOffset(newOffset);
  };

  function Comment({ currentItems }) {
    return (
      <div className="w-[80%]">
        {currentItems &&
          currentItems.map((item) => (
            <div className="mt-12 flex w-[100%] flex-row border-b-2 border-dotted border-black/25 pb-4">
              <img
                src={avatarImage}
                className="ml-[12%] h-[100px] w-[100px] rounded-full"
              ></img>
              <div className="pl-4">
                <div className="flex flex-row justify-between">
                  <p className="text-3xl font-bold">
                    {getUserFullName(item.userId)}
                  </p>
                  {userData.userId == item.userId && (
                    <div className="mr-[12%] flex flex-row gap-2">
                      <Link
                        to={`/updateAccommodationReview/${id}/${item.accommodationCommentId}`}
                      >
                        <button className="border-r-2 border-primary-color pr-2 text-primary-color">
                          Sửa
                        </button>
                      </Link>
                      <button
                        className="pb-3 text-sub-color"
                        onClick={() => {
                          setIsDeletePopUp(true);
                          setDataId(item.accommodationCommentId);
                        }}
                      >
                        Xóa
                      </button>
                    </div>
                  )}
                </div>
                <div className="flex flex-row">
                  <ReactStars
                    count={5}
                    value={item.stars} // Giá trị của rating
                    edit={false} // Không cho phép chỉnh sửa
                    color="#F1FBF3"
                    size={20}
                    a11y={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#48C75E"
                    classNames="border-r-2 border-black/25"
                  />
                  <div className="flex flex-row pl-2 pt-1">
                    <svg
                      width="10"
                      height="11"
                      viewBox="0 0 10 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-1 mt-2"
                    >
                      <path
                        d="M5 3V5.5H6.875M8.75 5.5C8.75 7.57107 7.07107 9.25 5 9.25C2.92893 9.25 1.25 7.57107 1.25 5.5C1.25 3.42893 2.92893 1.75 5 1.75C7.07107 1.75 8.75 3.42893 8.75 5.5Z"
                        stroke="#0F172A"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p>{FormatDate(item.createdAt)}</p>
                  </div>
                </div>
                <p className="w-[full] min-w-[960px] break-all font-bold">
                  {item.commentContent}
                </p>

                <div className="flex w-[full] flex-row gap-4 rounded-tr-lg">
                  <div className=" h-[150px] w-[25%]  bg-gray-300 text-center ">
                    <p className="py-auto">Ảnh</p>
                  </div>
                  <div className=" h-[150px] w-[25%] bg-gray-300 text-center">
                    <p className="py-auto">Ảnh</p>
                  </div>
                  <div className=" h-[150px] w-[25%] bg-gray-300 text-center">
                    <p className="py-auto">Ảnh</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    );
  }

  const handleDeleteComment = async () => {
    let response;

    try {
      if (isConfirm) {
        response = await deleteAccommodationCommentDetail(dataId);
        if (response.isSuccess) {
          setToggleDelete((state) => !state);
        }
        console.log(response);
      }
    } catch (error) {
      console.error('Error update status:', error);
    }
  };

  useEffect(() => {
    handleDeleteComment();
  }, [isConfirm]);

  return (
    <>
      {isDeletePopUp && <DeleteCommentPopUp setIsConfirm={setIsConfirm} />}
      <div className="bg-bg-color">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="pl-2"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM22.5 17.5C23.3284 17.5 24 16.8284 24 16C24 15.1716 23.3284 14.5 22.5 14.5H13.3198L17.5207 10.5992C18.1277 10.0355 18.1629 9.08639 17.5992 8.47932C17.0355 7.87226 16.0864 7.83711 15.4793 8.40081L8.47932 14.9008C8.17367 15.1846 8 15.5829 8 16C8 16.4171 8.17367 16.8154 8.47932 17.0992L15.4793 23.5992C16.0864 24.1629 17.0355 24.1277 17.5992 23.5207C18.1629 22.9136 18.1277 21.9645 17.5207 21.4008L13.3198 17.5H22.5Z"
            fill="#8DCADC"
          />
        </svg>
        {/*Ảnh địa điểm*/}
        <div className="flex items-center justify-center">
          <div className="relative w-[80%]">
            <div>
              <div className="relative flex flex-row">
                <p className="text-4xl font-bold">{detailData.name}</p>
                <svg
                  wwidth="32"
                  height="30"
                  viewBox="0 0 32 30"
                  fill={isChecked ? '#DB2731' : 'none'}
                  stroke={isChecked ? '#DB2731' : '#8DCADC'}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute right-0 top-2 cursor-pointer"
                  onClick={handleClick}
                >
                  <path
                    d="M31 8.75C31 4.60786 27.5022 1.25 23.1875 1.25C19.9615 1.25 17.1921 3.12713 16 5.8057C14.8079 3.12713 12.0385 1.25 8.8125 1.25C4.49778 1.25 1 4.60786 1 8.75C1 20.7843 16 28.75 16 28.75C16 28.75 31 20.7843 31 8.75Z"
                    stroke="#8DCADC"
                    stroke-opacity="0.7"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

              <div className="flex flex-row gap-2 p-2">
                <p className="font-bold">Rating</p>
                <p className="font-bold">{detailData.address}</p>
              </div>
            </div>

            {images && (
              <div>
                <ImageGallery
                  items={images}
                  infinite={true}
                  showFullscreenButton={true}
                  showBullets={true}
                  showIndex={true}
                  slideOnThumbnailOver={true}
                />
              </div>
            )}
          </div>
        </div>

        {/*Mô tả địa điểm*/}
        <div className="mt-12 flex flex-col items-center justify-center">
          <p className="-ml-[64%] mb-8 border-l-4 border-black pl-4 text-3xl font-bold">
            Mô tả địa điểm
          </p>
          <div className="h-[auto] w-[80%] text-left">
            <p className=" pl-2 text-2xl font-bold">{detailData.description}</p>

            {detailData.price && (
              <p className="pl-2 pt-5 font-bold">
                Mức giá: {detailData.price}VND
              </p>
            )}

            <div className="flex flex-row gap-3 pl-2 pt-4">
              {listCategoryDetail.slice(0, 7).map((category) => (
                <p className="w-fit bg-gray-300 px-4 py-1 text-sm font-bold">
                  {category.categoryName}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/*Địa chỉ + thông tin liên hệ điểm*/}
        <div className="mt-12 flex flex-col items-center justify-center">
          <p className="-ml-[53%] mb-8 border-l-4 border-black pl-4 text-3xl font-bold">
            Địa chỉ và thông tin liên hệ
          </p>
          <div className="flex h-[400px] w-[80%] flex-row">
            <div className="mr-5 h-[400px] w-[65%] border-4 border-black text-center">
              <p className="font-bold">Maps</p>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex flex-row gap-4">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 2.5C10.1625 2.5 6.25 6.4125 6.25 11.25C6.25 17.8125 15 27.5 15 27.5C15 27.5 23.75 17.8125 23.75 11.25C23.75 6.4125 19.8375 2.5 15 2.5ZM15 14.375C13.275 14.375 11.875 12.975 11.875 11.25C11.875 9.525 13.275 8.125 15 8.125C16.725 8.125 18.125 9.525 18.125 11.25C18.125 12.975 16.725 14.375 15 14.375Z"
                    fill="black"
                  />
                </svg>
                <p className="font-bold">{detailData.address}</p>
              </div>
              {detailData.phone && (
                <div className="flex flex-row gap-4">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3 5.25C3 4.00736 4.00736 3 5.25 3H6.97256C8.02713 3 8.94021 3.73245 9.16898 4.76191L10.2433 9.59635C10.5016 10.7586 9.80975 11.9208 8.665 12.2479L7.26581 12.6476C6.64965 12.8237 6.30161 13.48 6.54594 14.0724C8.29501 18.3131 11.6869 21.705 15.9276 23.4541C16.52 23.6984 17.1763 23.3504 17.3524 22.7342L17.7521 21.335C18.0792 20.1902 19.2414 19.4984 20.4036 19.7567L25.2381 20.831C26.2676 21.0598 27 21.9729 27 23.0274V24.75C27 25.9926 25.9926 27 24.75 27H22.5C20.7772 27 19.1049 26.7763 17.5114 26.3558C10.75 24.5714 5.42861 19.25 3.64424 12.4886C3.2237 10.8951 3 9.22283 3 7.5V5.25Z"
                      fill="#0F172A"
                    />
                  </svg>
                  <p className="font-bold">{detailData.phone}</p>
                </div>
              )}

              <div className="flex flex-row gap-4">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.1518 15.9395C27.1755 15.6294 27.1875 15.316 27.1875 14.9998C27.1875 13.0946 26.7503 11.2915 25.9708 9.68531C24.4245 11.1532 22.5839 12.3142 20.5467 13.0705C20.5986 13.7068 20.625 14.3502 20.625 14.9998C20.625 16.3763 20.5063 17.7251 20.2787 19.0365C22.7703 18.4095 25.0897 17.3489 27.1518 15.9395Z"
                    fill="#0F172A"
                  />
                  <path
                    d="M18.2929 19.4374C18.5925 18.0053 18.75 16.5209 18.75 14.9998C18.75 14.5393 18.7356 14.0822 18.7071 13.6289C17.5176 13.9123 16.2763 14.0623 15 14.0623C13.7237 14.0623 12.4824 13.9123 11.2929 13.6289C11.2644 14.0822 11.25 14.5393 11.25 14.9998C11.25 16.5209 11.4075 18.0053 11.7071 19.4374C12.7807 19.602 13.8804 19.6873 15 19.6873C16.1196 19.6873 17.2193 19.602 18.2929 19.4374Z"
                    fill="#0F172A"
                  />
                  <path
                    d="M12.2153 21.3986C13.1285 21.5067 14.0577 21.5623 15 21.5623C15.9423 21.5623 16.8715 21.5067 17.7847 21.3986C17.1425 23.4681 16.1969 25.4042 15 27.1549C13.8031 25.4042 12.8575 23.4681 12.2153 21.3986Z"
                    fill="#0F172A"
                  />
                  <path
                    d="M9.72132 19.0365C9.49366 17.7251 9.375 16.3763 9.375 14.9998C9.375 14.3502 9.40143 13.7068 9.45327 13.0705C7.41607 12.3142 5.57549 11.1532 4.02916 9.68531C3.24967 11.2915 2.8125 13.0946 2.8125 14.9998C2.8125 15.316 2.82454 15.6294 2.84819 15.9395C4.91032 17.3489 7.22967 18.4095 9.72132 19.0365Z"
                    fill="#0F172A"
                  />
                  <path
                    d="M26.6951 18.4405C25.4255 22.7629 21.8247 26.088 17.347 26.9615C18.43 25.1402 19.2732 23.1597 19.8331 21.0634C22.2829 20.5499 24.592 19.6537 26.6951 18.4405Z"
                    fill="#0F172A"
                  />
                  <path
                    d="M3.30494 18.4405C5.40803 19.6537 7.71715 20.5499 10.1669 21.0634C10.7268 23.1597 11.57 25.1402 12.653 26.9615C8.17534 26.088 4.57455 22.7629 3.30494 18.4405Z"
                    fill="#0F172A"
                  />
                  <path
                    d="M17.347 3.03807C20.4989 3.65294 23.2164 5.48263 24.9921 8.01987C23.6689 9.35593 22.0796 10.428 20.3104 11.1501C19.8276 8.2284 18.8044 5.48903 17.347 3.03807Z"
                    fill="#0F172A"
                  />
                  <path
                    d="M15 2.84473C16.7858 5.45672 18.0121 8.48159 18.5062 11.7467C17.3854 12.0343 16.2106 12.1873 15 12.1873C13.7894 12.1873 12.6146 12.0343 11.4938 11.7467C11.9879 8.48159 13.2142 5.45672 15 2.84473Z"
                    fill="#0F172A"
                  />
                  <path
                    d="M12.653 3.03807C11.1956 5.48903 10.1724 8.2284 9.68964 11.1501C7.92036 10.428 6.33111 9.35593 5.00793 8.01987C6.78361 5.48263 9.50106 3.65294 12.653 3.03807Z"
                    fill="#0F172A"
                  />
                </svg>
                <a className="font-bold" href={detailData.website}>
                  {detailData.website}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/*Đánh giá*/}
        <div className="mt-12 flex flex-col items-center justify-center pb-32">
          <div className="relative mb-20 w-full">
            <div className="absolute left-[10%] top-0 mb-8">
              <p className=" mb-4 border-l-4 border-black pl-4 text-3xl font-bold">
                Đánh giá
              </p>
              <p className="font-bold">Sắp xếp theo</p>
            </div>

            <Link to={`/accommodationReview/${id}`}>
              <button className="absolute right-[10%] top-0 rounded-[15px] bg-primary-color p-2 text-2xl font-bold text-white hover:bg-gray-100 hover:text-primary-color">
                Viết đánh giá
              </button>
            </Link>
          </div>

          <Comment currentItems={currentItems} />
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
            className="mt-12 flex flex-row gap-6"
            containerClassName="flex"
            previousLinkClassName="px-4 bg-secondary-color text-white rounded"
            nextLinkClassName="px-4 bg-secondary-color text-white rounded"
            breakLinkClassName="text-gray-500"
            pageLinkClassName=" px-4 border-2 border-secondary-color font-bold text-gray-800 rounded transition-colors duration-300 ease-in-out hover:bg-secondary-color hover:text-white"
            activeClassName="bg-secondary-color text-white"
          />
        </div>
      </div>
    </>
  );
};

export default AccommodationDetail;
