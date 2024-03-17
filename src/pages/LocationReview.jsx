import React, { useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';
import { useEffect } from 'react';
import {
  addRestaurantComment,
  getRestaurantDetail,
} from '../api/services/restaurant';
import {
  addAccommodationComment,
  getAccommodationDetail,
} from '../api/services/accommodation';
import {
  addTouristAttractionComment,
  getTouristAttractionDetail,
} from '../api/services/touristAttraction';

const LocationReview = () => {
  const userData = JSON.parse(localStorage.getItem('user'));
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
    async function fetchData() {
      const response = await getRestaurantDetail(id);
      if (response) {
        const restaurant = response.data[0];
        setRestaurantData(restaurant);
      }
    }
    fetchData();
  }, [id]);

  useEffect(() => {
    async function fetchData() {
      const response = await getAccommodationDetail(id);
      if (response) {
        const accommodation = response.data[0];
        setAccommodationData(accommodation);
      }
    }
    fetchData();
  }, [id]);

  useEffect(() => {
    async function fetchData() {
      const response = await getTouristAttractionDetail(id);
      if (response) {
        const TAttraction = response.data[0];
        setTouristAttractionData(TAttraction);
      }
    }
    fetchData();
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
      });
      console.log(detailData);
    }
    if (locationTypeReview === 'accommodationReview') {
      setDetailData({
        name: accommodationData?.accommodationName ?? '',
        description: accommodationData?.accommodationDescription ?? '',
        address: accommodationData?.accommodationAddress ?? '',
        phone: accommodationData?.accommodationPhone ?? null,
        website: accommodationData?.accommodationWebsite ?? '',
        price: accommodationData?.priceRange,
      });
      console.log(detailData);
    }
    if (locationTypeReview === 'touristAttractionReview') {
      setDetailData({
        name: touristAttractionData?.touristAttractionName ?? '',
        description: touristAttractionData?.touristAttractionDescription ?? '',
        address: touristAttractionData?.touristAttractionAddress ?? '',
        phone: touristAttractionData?.touristAttractionPhone ?? null,
        website: touristAttractionData?.touristAttractionWebsite ?? '',
        price: touristAttractionData?.priceRange,
      });
      console.log(detailData);
    }
  }, [restaurantData, accommodationData, touristAttractionData]);
  const [formdata, setFormdata] = useState({
    stars: 0,
    commentContent: null,
    userId: userData.userId,
    restaurantId: id,
    accommodationId: id,
    touristAttractionId: id,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAddComment = async (event) => {
    event.preventDefault();
    if (locationTypeReview === 'restaurantReview') {
      try {
        const response = await addRestaurantComment(formdata);
        if (response.isSuccess) {
          navigate(`/RestaurantDetail/${id}`);
        }
        console.log(response);
      } catch (error) {
        console.error('Error while adding comment:', error);
      }
    }
    if (locationTypeReview === 'accommodationReview') {
      try {
        const response = await addAccommodationComment(formdata);
        if (response.isSuccess) {
          navigate(`/AccommodationDetail/${id}`);
        }
        console.log(response);
      } catch (error) {
        console.error('Error while adding comment:', error);
      }
    }
    if (locationTypeReview === 'touristAttractionReview') {
      try {
        const response = await addTouristAttractionComment(formdata);
        if (response.isSuccess) {
          navigate(`/TouristAttractionDetail/${id}`);
        }
        console.log(response);
      } catch (error) {
        console.error('Error while adding comment:', error);
      }
    }
    console.log(formdata);
  };

  const ratingChanged = (newRating) => {
    setFormdata({
      ...formdata,
      stars: Number(newRating),
    });
    console.log(newRating);
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
          {/* <img src="" alt="" /> */}
          <div className="h-[250px] w-[250px] bg-white"></div>
          <p className="text-3xl font-bold">{detailData.name}</p>
          <p>{detailData.address}</p>
        </div>
        <div className=" w-[35%] items-center justify-items-center">
          <p className="text-2xl font-bold">Đánh giá trải nghiệm của bạn</p>
          <ReactStars
            count={5}
            onChange={ratingChanged}
            color="#8DCADC"
            size={50}
            a11y={true}
            emptyIcon={<i className="far fa-star"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#48C75E"
          />
          <p className="mb-4 text-2xl font-bold">Chia sẻ trải nghiệm của bạn</p>
          <textarea
            required
            className="h-[200px] w-full rounded-[10px] bg-[#c8d8ca] px-4 py-2 text-2xl"
            onChange={(e) =>
              setFormdata({
                ...formdata,
                commentContent: e.target.value,
              })
            }
          ></textarea>

          <p className="mb-4 text-2xl font-bold">Thêm ảnh</p>
          <div className="mb-12 flex h-[200px] w-[100%] items-center justify-center rounded-[10px] bg-[#c8d8ca]">
            <label
              for="fileInput"
              className="custom-file-upload rounded-[10px] bg-white px-4 py-2 text-2xl font-bold"
            >
              Thêm +
            </label>
            <input id="fileInput" type="file" className="hidden" />
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
