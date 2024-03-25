import React, { useContext } from 'react';
import errorImage from '../../assets/error-image.png';
import RestaurantIcon from './Icons/RestaurantIcon';
import AttractionIcon from './Icons/AttractionIcon';
import AccommodationIcon from './Icons/AccommodationIcon';
import AddIcon from './Icons/AddIcon';
import {
  addTripAccById,
  addTripResById,
  addTripTAById,
} from '../../api/services/trip';
import { AlertContext } from '../../Contexts/AlertContext';

const SearchPlaceResult = ({ data, trip, handleIsAction, dayChoose }) => {
  const { setIsShow, setAlertData } = useContext(AlertContext);

  let placeName;
  let placeAddress;
  let type;
  let placeId;
  if ('restaurantId' in data) {
    placeId = data.restaurantId;
    placeName = data.restaurantName;
    placeAddress = data.restaurantAddress;
    type = 'restaurants';
  } else if ('accommodationId' in data) {
    placeId = data.accommodationId;
    placeName = data.accommodationName;
    placeAddress = data.accommodationAddress;
    type = 'accommodations';
  } else if ('touristAttractionId' in data) {
    placeId = data.touristAttractionId;
    placeName = data.touristAttractionName;
    placeAddress = data.touristAttractionAddress;
    type = 'touristAttractions';
  }

  const handleAdd = async () => {
    if (type === 'restaurants') {
      const response = await addTripResById({
        tripId: trip.tripId,
        restaurantId: placeId,
        suggestedDay: dayChoose,
      });

      if (response) {
        if (response.isSuccess) {
          setIsShow(true);
          setAlertData({
            message: response.message,
            textColor: 'text-white',
            backGroundColor: 'bg-primary-color',
          });
        } else {
          setIsShow(true);
          setAlertData({
            message: response.message,
            textColor: 'text-white',
            backGroundColor: 'bg-sub-color',
          });
        }
        handleIsAction();
      }
    } else if (type === 'accommodations') {
      const response = await addTripAccById({
        tripId: trip.tripId,
        accommodationId: placeId,
      });

      if (response) {
        if (response.isSuccess) {
          setIsShow(true);
          setAlertData({
            message: response.message,
            textColor: 'text-white',
            backGroundColor: 'bg-primary-color',
          });
        } else {
          setIsShow(true);
          setAlertData({
            message: response.message,
            textColor: 'text-white',
            backGroundColor: 'bg-sub-color',
          });
        }
        handleIsAction();
      }
    } else if (type === 'touristAttractions') {
      const response = await addTripTAById({
        tripId: trip.tripId,
        touristAttractionId: placeId,
        suggestedDay: dayChoose,
      });

      if (response) {
        if (response.isSuccess) {
          setIsShow(true);
          setAlertData({
            message: response.message,
            textColor: 'text-white',
            backGroundColor: 'bg-primary-color',
          });
        } else {
          setIsShow(true);
          setAlertData({
            message: response.message,
            textColor: 'text-white',
            backGroundColor: 'bg-sub-color',
          });
        }
        handleIsAction();
      }
    }
  };

  return (
    <div className="relative flex w-full justify-between gap-5">
      <div
        onClick={handleAdd}
        className="absolute right-2 top-2 h-fit w-fit cursor-pointer select-none"
      >
        <AddIcon height={30} width={30} strokeWidth={4} />
      </div>
      <div
        className={`mb-10 flex w-full items-center gap-4 rounded-xl bg-bg-color shadow-sm`}
      >
        <div className="h-[230px] w-[45%] overflow-hidden rounded-l-xl">
          <img
            className="h-full w-full object-cover"
            src={data.photoUrl !== 'null' ? data.photoUrl : errorImage}
          />
        </div>
        <div className="flex h-full w-[50%] flex-col justify-start gap-3 px-5 py-8 text-xl font-medium">
          <div className="text-lg font-bold">{placeName}</div>
          <div className="flex items-start gap-3">
            {type === 'restaurants' ? (
              <RestaurantIcon />
            ) : type === 'touristAttractions' ? (
              <AttractionIcon />
            ) : (
              <AccommodationIcon />
            )}
            <div className="text-[14px]">
              {type === 'restaurants'
                ? 'Nhà hàng'
                : type === 'touristAttractions'
                  ? 'Địa điểm giải trí'
                  : 'Nơi ở'}
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.3"
                stroke="currentColor"
                className="h-7 w-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
            </div>

            <div className="text-[14px]">{placeAddress}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPlaceResult;
