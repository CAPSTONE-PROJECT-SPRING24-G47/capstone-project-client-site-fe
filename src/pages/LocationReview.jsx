import React, { useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';
import { useEffect } from 'react';
import {
  addRestaurantComment,
  getRestaurantCommentDetailBy2Id,
  getRestaurantDetail,
} from '../api/services/restaurant';
import {
  addAccommodationComment,
  getAccommodationCommentDetailBy2Id,
  getAccommodationDetail,
} from '../api/services/accommodation';
import {
  addTouristAttractionComment,
  getTACommentDetailBy2Id,
  getTouristAttractionDetail,
} from '../api/services/touristAttraction';
import { useContext } from 'react';
import { AlertContext } from '../Contexts/AlertContext';
import ImageUploader from 'react-images-upload';
import { FaStar } from 'react-icons/fa';

const LocationReview = () => {
  const userData = JSON.parse(localStorage.getItem('user'));
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const parts = pathname.split('/');
  const locationTypeReview = parts[1];
  const [detailData, setDetailData] = useState([]);
  const [restaurantData, setRestaurantData] = useState(null);
  const [accommodationData, setAccommodationData] = useState(null);
  const [touristAttractionData, setTouristAttractionData] = useState(null);
  const { setIsShow, setAlertData } = useContext(AlertContext);
  const [userReviewed, setUserReviewed] = useState(false);
  const handleBack = () => {
    if (locationTypeReview === 'restaurantReview') {
      navigate(`/RestaurantDetail/${id}`);
    }
    if (locationTypeReview === 'accommodationReview') {
      navigate(`/AccommodationDetail/${id}`);
    }
    if (locationTypeReview === 'touristAttractionReview') {
      navigate(`/TouristAttractionDetail/${id}`);
    }
  };

  //Get data (restaurant, accommodation, TA)
  useEffect(() => {
    if (locationTypeReview === 'restaurantReview') {
      async function fetchData() {
        const response = await getRestaurantDetail(id);
        if (response) {
          const restaurant = response.data[0];
          setRestaurantData(restaurant);
        }
      }
      fetchData();
    }
  }, [id]);

  useEffect(() => {
    if (locationTypeReview === 'accommodationReview') {
      async function fetchData() {
        const response = await getAccommodationDetail(id);
        if (response) {
          const accommodation = response.data[0];
          setAccommodationData(accommodation);
        }
      }
      fetchData();
    }
  }, [id]);

  useEffect(() => {
    if (locationTypeReview === 'touristAttractionReview') {
      async function fetchData() {
        const response = await getTouristAttractionDetail(id);
        if (response) {
          const TAttraction = response.data[0];
          setTouristAttractionData(TAttraction);
        }
      }
      fetchData();
    }
  }, [id]);
  //Set form data để hiện detail
  useEffect(() => {
    if (locationTypeReview === 'restaurantReview') {
      setDetailData({
        name: restaurantData?.restaurantName ?? '',
        description: restaurantData?.restaurantDescription ?? '',
        address: restaurantData?.restaurantAddress ?? '',
        menu: restaurantData?.restaurantMenu ?? '',
        phone: restaurantData?.restaurantPhone ?? null,
        website: restaurantData?.restaurantWebsite ?? '',
        price: restaurantData?.priceRange,
        photo: restaurantData?.restaurantPhotos[0].signedUrl,
      });
    }
    if (locationTypeReview === 'accommodationReview') {
      setDetailData({
        id: accommodationData?.accommodationId,
        name: accommodationData?.accommodationName ?? '',
        description: accommodationData?.accommodationDescription ?? '',
        address: accommodationData?.accommodationAddress ?? '',
        phone: accommodationData?.accommodationPhone ?? null,
        website: accommodationData?.accommodationWebsite ?? '',
        price: accommodationData?.priceRange,
        photo: accommodationData?.accommodationPhotos[0].signedUrl,
      });
    }
    if (locationTypeReview === 'touristAttractionReview') {
      setDetailData({
        name: touristAttractionData?.touristAttractionName ?? '',
        description: touristAttractionData?.touristAttractionDescription ?? '',
        address: touristAttractionData?.touristAttractionAddress ?? '',
        phone: touristAttractionData?.touristAttractionPhone ?? null,
        website: touristAttractionData?.touristAttractionWebsite ?? '',
        price: touristAttractionData?.priceRange,
        photo: touristAttractionData?.touristAttractionPhotos[0].signedUrl,
      });
    }
  }, [restaurantData, accommodationData, touristAttractionData]);
  const [formdata, setFormdata] = useState({
    stars: 0,
    commentContent: null,
    photos: [],
    userId: userData.userId,
    restaurantId: id,
    accommodationId: id,
    touristAttractionId: id,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //Kiểm tra xem user đã gửi đánh giá chưa

  useEffect(() => {
    // Gọi API để kiểm tra xem người dùng đã gửi đánh giá cho địa điểm hiện tại chưa
    // Ví dụ: gọi API để lấy thông tin đánh giá của người dùng cho địa điểm với id là `id`

    if (locationTypeReview === 'restaurantReview') {
      try {
        async function fetchData() {
          const data = new FormData();
          data.append('restaurantId', id);
          data.append('userId', userData.userId);
          const response = await getRestaurantCommentDetailBy2Id(data);
          if (response.data.length !== 0) {
            setUserReviewed(true);
            setUserCommentId(response.data[0].restaurantCommentId);
          }
        }
        fetchData();
      } catch (error) {
        console.error('Error checking user review:', error);
      }
    }
    if (locationTypeReview === 'accommodationReview') {
      try {
        async function fetchData() {
          const data = new FormData();
          data.append('accommodationId', id);
          data.append('userId', userData.userId);
          const response = await getAccommodationCommentDetailBy2Id(data);
          if (response.data.length !== 0) {
            setUserReviewed(true);
          }
        }
        fetchData();
      } catch (error) {
        console.error('Error checking user review:', error);
      }
    }
    if (locationTypeReview === 'touristAttractionReview') {
      try {
        async function fetchData() {
          const data = new FormData();
          data.append('touristAttractionId', id);
          data.append('userId', userData.userId);
          const response = await getTACommentDetailBy2Id(data);
          if (response.data.length !== 0) {
            setUserReviewed(true);
          }
        }
        fetchData();
      } catch (error) {
        console.error('Error checking user review:', error);
      }
    }
  }, []);

  useEffect(() => {
    if (userReviewed) {
      // Điều hướng người dùng đến trang chi tiết của địa điểm
      if (locationTypeReview === 'restaurantReview') {
        setIsShow(true);
        setAlertData({
          message: 'Bạn đã đánh giá địa điểm này rồi',
          textColor: 'text-white',
          backGroundColor: 'bg-sub-color',
        });
        navigate(`/RestaurantDetail/${id}`);
        setUserReviewed(false);
      }
      if (locationTypeReview === 'accommodationReview') {
        setIsShow(true);
        setAlertData({
          message: 'Bạn đã đánh giá địa điểm này rồi',
          textColor: 'text-white',
          backGroundColor: 'bg-sub-color',
        });
        navigate(`/AccommodationDetail/${id}`);
        setUserReviewed(false);
      }
      if (locationTypeReview === 'touristAttractionReview') {
        setIsShow(true);
        setAlertData({
          message: 'Bạn đã đánh giá địa điểm này rồi',
          textColor: 'text-white',
          backGroundColor: 'bg-sub-color',
        });
        navigate(`/TouristAttractionDetail/${id}`);
        setUserReviewed(false);
      }
    }
  }, [userReviewed]);

  //Upload ảnh
  const handleImageUpload = (pictureFiles) => {
    console.log(pictureFiles);
    setFormdata((prevFormData) => ({
      ...prevFormData,
      photos: pictureFiles,
    }));
  };

  const handleAddComment = async (event) => {
    event.preventDefault();

    if (rating === 0) {
      // Nếu chưa chọn đánh giá, hiển thị thông báo cho người dùng
      setIsShow(true);
      setAlertData({
        message: 'Vui lòng đánh giá địa điểm này',
        textColor: 'text-white',
        backGroundColor: 'bg-sub-color',
      });
    } else {
      if (locationTypeReview === 'restaurantReview') {
        try {
          console.log(formdata);
          const newReview = new FormData();
          newReview.append('UserId', formdata.userId);
          newReview.append('RestaurantId', formdata.restaurantId);
          newReview.append('Stars', rating);
          if (
            formdata.commentContent !== null &&
            formdata.commentContent !== undefined &&
            formdata.commentContent.trim() !== ''
          ) {
            newReview.append('CommentContent', formdata.commentContent);
          }
          formdata.photos.forEach((photo) => {
            newReview.append('Photos', photo);
          });
          const response = await addRestaurantComment(newReview);
          if (response.isSuccess) {
            setIsShow(true);
            setAlertData({
              message: 'Đánh giá thành công',
              textColor: 'text-white',
              backGroundColor: 'bg-primary-color',
            });
            navigate(`/RestaurantDetail/${id}`);
          }
          console.log(response);
        } catch (error) {
          console.error('Error while adding comment:', error);
        }
      }
      if (locationTypeReview === 'accommodationReview') {
        try {
          const newReview = new FormData();
          newReview.append('UserId', formdata.userId);
          newReview.append('AccommodationId', formdata.accommodationId);
          newReview.append('Stars', rating);
          if (
            formdata.commentContent !== null &&
            formdata.commentContent !== undefined &&
            formdata.commentContent.trim() !== ''
          ) {
            newReview.append('CommentContent', formdata.commentContent);
          }
          formdata.photos.forEach((photo) => {
            newReview.append('Photos', photo);
          });
          console.log(formdata);
          const response = await addAccommodationComment(newReview);

          if (response.isSuccess) {
            setIsShow(true);
            setAlertData({
              message: 'Đánh giá thành công',
              textColor: 'text-white',
              backGroundColor: 'bg-primary-color',
            });
            navigate(`/AccommodationDetail/${id}`);
          }
          console.log(response);
        } catch (error) {
          console.error('Error while adding comment:', error);
        }
      }
      if (locationTypeReview === 'touristAttractionReview') {
        try {
          const newReview = new FormData();
          newReview.append('userId', formdata.userId);
          newReview.append('touristAttractionId', formdata.touristAttractionId);
          newReview.append('stars', rating);
          if (
            formdata.commentContent !== null &&
            formdata.commentContent !== undefined &&
            formdata.commentContent.trim() !== ''
          ) {
            newReview.append('commentContent', formdata.commentContent);
          }
          formdata.photos.forEach((photo) => {
            newReview.append('photos', photo);
          });
          const response = await addTouristAttractionComment(newReview);
          if (response.isSuccess) {
            setIsShow(true);
            setAlertData({
              message: 'Đánh giá thành công',
              textColor: 'text-white',
              backGroundColor: 'bg-primary-color',
            });
            navigate(`/TouristAttractionDetail/${id}`);
          }
          console.log(response);
        } catch (error) {
          console.error('Error while adding comment:', error);
        }
      }
    }
  };

  return (
    <div className=" bg-bg-color">
      <div className="pl-4 pt-4">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={handleBack}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM22.5 17.5C23.3284 17.5 24 16.8284 24 16C24 15.1716 23.3284 14.5 22.5 14.5H13.3198L17.5207 10.5992C18.1277 10.0355 18.1629 9.08639 17.5992 8.47932C17.0355 7.87226 16.0864 7.83711 15.4793 8.40081L8.47932 14.9008C8.17367 15.1846 8 15.5829 8 16C8 16.4171 8.17367 16.8154 8.47932 17.0992L15.4793 23.5992C16.0864 24.1629 17.0355 24.1277 17.5992 23.5207C18.1629 22.9136 18.1277 21.9645 17.5207 21.4008L13.3198 17.5H22.5Z"
            fill="#8DCADC"
          />
        </svg>
        <p className="ml-[4%] mt-[1%] text-4xl font-bold">
          CHIA SẺ TRẢI NGHIỆM CỦA BẠN
        </p>
      </div>

      <div className="mt-12 flex flex-row">
        <div className="flex w-[50%] flex-col items-center justify-start gap-3">
          <img src={detailData.photo} alt="" className="h-[250px] w-[250px]" />
          <p className="text-3xl font-bold">{detailData.name}</p>
          <p className="font-bold">{detailData.address}</p>
        </div>
        <div className=" w-[35%] items-center justify-items-center">
          <p className="text-2xl font-bold">Đánh giá trải nghiệm của bạn</p>
          <div className="flex flex-row">
            {[...Array(5)].map((star, index) => {
              const currentRating = index + 1;
              return (
                <label key={index}>
                  <input
                    type="radio"
                    name="rating"
                    value={currentRating}
                    onClick={() => setRating(currentRating)}
                    className="hidden"
                  />
                  <FaStar
                    size={50}
                    className="cursor-pointer"
                    color={
                      currentRating <= (hover || rating)
                        ? '#48C75E'
                        : 'rgba(141, 202, 220, 0.3)'
                    }
                    onMouseEnter={() => setHover(currentRating)}
                    onMouseLeave={() => setHover(null)}
                  />
                </label>
              );
            })}
          </div>
          <p className="mb-4 text-2xl font-bold">Chia sẻ trải nghiệm của bạn</p>
          <textarea
            required
            className="h-[200px] w-full rounded-[10px] bg-[#e8f3ea] px-4 py-2 text-2xl"
            onChange={(e) =>
              setFormdata({
                ...formdata,
                commentContent: e.target.value,
              })
            }
          ></textarea>

          <p className="mb-4 text-2xl font-bold">Thêm ảnh</p>
          <div className="mb-12 flex h-auto w-[100%] items-center justify-center rounded-[10px]">
            <ImageUploader
              withIcon={true}
              onChange={handleImageUpload}
              imgExtension={['.jpg', '.gif', '.png', '.gif']}
              maxFileSize={5242880}
              label="Chọn ảnh"
              className=" h-fit w-full font-bold"
              buttonText="Thêm ảnh"
              withPreview={true}
              fileContainerStyle={{
                background: '#F1FBF3',
              }}
            />
          </div>
          <div className="flex w-full items-center justify-center pb-4">
            <button
              className="rounded-[15px] bg-primary-color p-2 text-2xl font-bold text-white hover:bg-bg-color hover:text-primary-color"
              onClick={handleAddComment}
            >
              Viết đánh giá
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationReview;
