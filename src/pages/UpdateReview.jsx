import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import {
  addRestaurantComment,
  getRestaurantCommentDetail,
  getRestaurantDetail,
  updateRestaurantCommentDetail,
} from '../api/services/restaurant';
import {
  addAccommodationComment,
  getAccommodationCommentDetail,
  getAccommodationDetail,
  updateAccommodationCommentDetail,
} from '../api/services/accommodation';
import {
  addTouristAttractionComment,
  getTACommentDetail,
  getTouristAttractionDetail,
  updateTACommentDetail,
} from '../api/services/touristAttraction';
import ReactStars from 'react-rating-stars-component';
import ImageUploader from 'react-images-upload';
import { AlertContext } from '../Contexts/AlertContext';
import StarRatings from 'react-star-ratings';
import { FaStar } from 'react-icons/fa';

const UpdateReview = () => {
  const userData = JSON.parse(localStorage.getItem('user'));
  const { setIsShow, setAlertData } = useContext(AlertContext);
  const { id, commentId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const parts = pathname.split('/');
  const locationTypeReview = parts[1];
  const [deletePhotoIds, setDeletePhotoIds] = useState([]);
  const [photoStatus, setPhotoStatus] = useState({});
  const [detailData, setDetailData] = useState([]);
  const [restaurantData, setRestaurantData] = useState(null);
  const [accommodationData, setAccommodationData] = useState(null);
  const [touristAttractionData, setTouristAttractionData] = useState(null);
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [formdata, setFormdata] = useState({
    stars: rating ?? 0,
    commentContent: '',
    userId: userData.userId,
    restaurantId: id,
    accommodationId: id,
    touristAttractionId: id,
    photos: [],
  });
  const handleBack = () => {
    if (locationTypeReview === 'updateRestaurantReview') {
      navigate(`/RestaurantDetail/${id}`);
    }
    if (locationTypeReview === 'updateAccommodationReview') {
      navigate(`/AccommodationDetail/${id}`);
    }
    if (locationTypeReview === 'updateTouristAttractionReview') {
      navigate(`/TouristAttractionDetail/${id}`);
    }
  };

  //Get data (restaurant, accommodation, TA)
  useEffect(() => {
    if (locationTypeReview === 'updateRestaurantReview') {
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
    if (locationTypeReview === 'updateAccommodationReview') {
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
    if (locationTypeReview === 'updateTouristAttractionReview') {
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
    if (locationTypeReview === 'updateRestaurantReview') {
      setDetailData({
        name: restaurantData?.restaurantName ?? '',
        description: restaurantData?.restaurantDescription ?? '',
        address: restaurantData?.restaurantAddress ?? '',
        menu: restaurantData?.restaurantMenu ?? '',
        phone: restaurantData?.restaurantPhone ?? null,
        website: restaurantData?.restaurantWebsite ?? '',
        price: restaurantData?.priceRange,
      });
    }
    if (locationTypeReview === 'updateAccommodationReview') {
      setDetailData({
        name: accommodationData?.accommodationName ?? '',
        description: accommodationData?.accommodationDescription ?? '',
        address: accommodationData?.accommodationAddress ?? '',
        phone: accommodationData?.accommodationPhone ?? null,
        website: accommodationData?.accommodationWebsite ?? '',
        price: accommodationData?.priceRange,
      });
    }
    if (locationTypeReview === 'updateTouristAttractionReview') {
      setDetailData({
        name: touristAttractionData?.touristAttractionName ?? '',
        description: touristAttractionData?.touristAttractionDescription ?? '',
        address: touristAttractionData?.touristAttractionAddress ?? '',
        phone: touristAttractionData?.touristAttractionPhone ?? null,
        website: touristAttractionData?.touristAttractionWebsite ?? '',
        price: touristAttractionData?.priceRange,
      });
    }
  }, [restaurantData, accommodationData, touristAttractionData]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //Get comment detail
  useEffect(() => {
    if (locationTypeReview === 'updateRestaurantReview') {
      async function fetchData() {
        const response = await getRestaurantCommentDetail(commentId);
        if (response) {
          const comment = response.data[0];
          setFormdata({
            stars: comment.stars,
            commentContent: comment.commentContent,
            userId: userData.userId,
            restaurantId: comment.restaurantId,
            restaurantCommentPhotos: comment.restaurantCommentPhotos,
            photos: comment.restaurantCommentPhotos,
          });
          setRating(comment.stars);
        }
      }
      fetchData();
    }
  }, [commentId]);
  useEffect(() => {
    if (locationTypeReview === 'updateAccommodationReview') {
      async function fetchData() {
        const response = await getAccommodationCommentDetail(commentId);
        if (response) {
          const comment = response.data[0];
          setFormdata({
            stars: comment.stars,
            commentContent: comment.commentContent,
            userId: userData.userId,
            accommodationId: comment.accommodationId,
            accommodationCommentPhotos: comment.accommodationCommentPhotos,
            photos: comment.accommodationCommentPhotos,
          });
          setRating(comment.stars);
        }
      }
      fetchData();
    }
  }, [commentId]);
  useEffect(() => {
    if (locationTypeReview === 'updateTouristAttractionReview') {
      async function fetchData() {
        const response = await getTACommentDetail(commentId);
        if (response) {
          const comment = response.data[0];
          setFormdata({
            stars: comment.stars,
            commentContent: comment.commentContent,
            userId: userData.userId,
            touristAttractionId: comment.touristAttractionId,
            touristAttractionCommentPhotos:
              comment.touristAttractionCommentPhotos,
            photos: comment.touristAttractionCommentPhotos,
          });
          setRating(comment.stars);
        }
      }
      fetchData();
    }
  }, [commentId]);

  //Hàm update
  const handleUpdateComment = async () => {
    const updateComment = new FormData();
    if (locationTypeReview === 'updateRestaurantReview') {
      try {
        updateComment.append('userId', formdata.userId);
        updateComment.append('restaurantId', formdata.restaurantId);
        updateComment.append('stars', rating);
        if (
          formdata.commentContent !== null &&
          formdata.commentContent !== undefined &&
          formdata.commentContent.trim() !== ''
        ) {
          updateComment.append('commentContent', formdata.commentContent);
        }
        updateComment.append('deletePhotos', deletePhotoIds);
        formdata.photos.forEach((file) => {
          updateComment.append(`photos`, file);
        });
        const response = await updateRestaurantCommentDetail(
          commentId,
          updateComment
        );
        console.log(response);
        if (response.isSuccess) {
          setIsShow(true);
          setAlertData({
            message: 'Cập nhật đánh giá thành công',
            textColor: 'text-white',
            backGroundColor: 'bg-primary-color',
          });
          navigate(`/RestaurantDetail/${id}`);
        }
        console.log(response);
      } catch (error) {
        console.error('Error while update comment:', error);
      }
    }
    if (locationTypeReview === 'updateAccommodationReview') {
      try {
        updateComment.append('userId', formdata.userId);
        updateComment.append('accommodationId', formdata.accommodationId);
        updateComment.append('stars', rating);
        if (
          formdata.commentContent !== null &&
          formdata.commentContent !== undefined &&
          formdata.commentContent.trim() !== ''
        ) {
          updateComment.append('commentContent', formdata.commentContent);
        }
        updateComment.append('deletePhotos', deletePhotoIds);
        formdata.photos.forEach((file) => {
          updateComment.append(`photos`, file);
        });
        const response = await updateAccommodationCommentDetail(
          commentId,
          updateComment
        );
        if (response.isSuccess) {
          setIsShow(true);
          setAlertData({
            message: 'Cập nhật đánh giá thành công',
            textColor: 'text-white',
            backGroundColor: 'bg-primary-color',
          });
          navigate(`/AccommodationDetail/${id}`);
        }
        console.log(response);
      } catch (error) {
        console.error('Error while update comment:', error);
      }
    }
    if (locationTypeReview === 'updateTouristAttractionReview') {
      try {
        updateComment.append('userId', formdata.userId);
        updateComment.append(
          'touristAttractionId',
          formdata.touristAttractionId
        );
        updateComment.append('stars', rating);
        if (
          formdata.commentContent !== null &&
          formdata.commentContent !== undefined &&
          formdata.commentContent.trim() !== ''
        ) {
          updateComment.append('commentContent', formdata.commentContent);
        }
        updateComment.append('deletePhotos', deletePhotoIds);
        formdata.photos.forEach((file) => {
          updateComment.append(`photos`, file);
        });
        const response = await updateTACommentDetail(commentId, updateComment);
        if (response.isSuccess) {
          setIsShow(true);
          setAlertData({
            message: 'Cập nhật đánh giá thành công',
            textColor: 'text-white',
            backGroundColor: 'bg-primary-color',
          });
          navigate(`/TouristAttractionDetail/${id}`);
        }
        console.log(response);
      } catch (error) {
        console.error('Error while update comment:', error);
      }
    }
    console.log(formdata);
  };

  const toggleDeletePhoto = (photoId) => {
    // Kiểm tra xem photoId đã tồn tại trong mảng deletePhotoIds chưa
    const index = deletePhotoIds.indexOf(photoId);
    console.log(photoId);
    if (index === -1) {
      // Nếu chưa tồn tại, thêm photoId vào mảng
      setDeletePhotoIds([...deletePhotoIds, photoId]);
      // Cập nhật trạng thái của ảnh, đánh dấu ảnh đã được chọn
      setPhotoStatus((prevState) => ({
        ...prevState,
        [photoId]: true,
      }));
    } else {
      // Nếu đã tồn tại, xóa photoId khỏi mảng
      const newDeletePhotoIds = [...deletePhotoIds];
      newDeletePhotoIds.splice(index, 1);
      setDeletePhotoIds(newDeletePhotoIds);
      // Cập nhật trạng thái của ảnh, đánh dấu ảnh không được chọn
      setPhotoStatus((prevState) => ({
        ...prevState,
        [photoId]: false,
      }));
    }
  };

  const handleImageUpload = (pictureFiles) => {
    console.log(pictureFiles);
    setFormdata({ ...formdata, photos: pictureFiles });
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
          CHỈNH SỬA ĐÁNH GIÁ CỦA BẠN
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
            className="h-[200px] min-h-[200px] w-full rounded-[10px] bg-[#c8d8ca] px-4 py-2 text-2xl"
            onChange={(e) =>
              setFormdata({
                ...formdata,
                commentContent: e.target.value !== null ? e.target.value : null,
              })
            }
            value={formdata.commentContent ?? null}
          ></textarea>

          <p className="mb-4 text-2xl font-bold">Thêm ảnh</p>
          <div className="mb-12 flex h-auto w-[100%] flex-col items-center justify-center rounded-[10px]">
            <div className="grid grid-cols-2">
              {formdata.accommodationCommentPhotos ? (
                formdata.accommodationCommentPhotos.map((photo) => (
                  <img
                    src={photo.signedUrl}
                    onClick={() => toggleDeletePhoto(photo.id)}
                    className={`cursor-pointer ${photoStatus[photo.id] ? 'opacity-50' : ''} p-[10px]`}
                    alt={`Photo ${photo.id}`}
                  />
                ))
              ) : formdata.restaurantCommentPhotos ? (
                formdata.restaurantCommentPhotos.map((photo) => (
                  <img
                    src={photo.signedUrl}
                    onClick={() => toggleDeletePhoto(photo.id)}
                    className={`cursor-pointer ${photoStatus[photo.id] ? 'opacity-50' : ''} p-[10px]`}
                    alt={`Photo ${photo.id}`}
                  />
                ))
              ) : formdata.touristAttractionCommentPhotos ? (
                formdata.touristAttractionCommentPhotos.map((photo) => (
                  <img
                    src={photo.signedUrl}
                    onClick={() => toggleDeletePhoto(photo.id)}
                    className={`cursor-pointer ${photoStatus[photo.id] ? 'opacity-50' : ''} p-[10px]`}
                    alt={`Photo ${photo.id}`}
                  />
                ))
              ) : (
                <div></div>
              )}
            </div>
            <ImageUploader
              withIcon={false}
              onChange={handleImageUpload}
              imgExtension={['.jpg', '.gif', '.png', '.gif']}
              maxFileSize={5242880}
              label="Chọn ảnh"
              className=" h-fit font-bold"
              buttonText="Thêm ảnh"
              withPreview={true}
              fileContainerStyle={{
                background: '#F1FBF3',
              }}
              withLabel={false}
            />
          </div>
          <div className="flex w-full items-center justify-center pb-4">
            <button
              className="rounded-[15px] bg-primary-color p-2 text-2xl font-bold text-white hover:bg-bg-color hover:text-primary-color"
              onClick={() => handleUpdateComment()}
            >
              Lưu đánh giá
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateReview;
