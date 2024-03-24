import React from 'react';
import errorImage from '../../assets/error-image.png';
import RestaurantIcon from './Icons/RestaurantIcon';
import AttractionIcon from './Icons/AttractionIcon';
import DeleteIcon from './Icons/DeleteIcon';
import AccommodationIcon from './Icons/AccommodationIcon';

const Place = ({
  tripDay,
  setTripDays,
  data,
  type,
  index,
  length,
  isUpdateMode,
  accomodationsList,
}) => {
  const handleDeletePlace = async () => {
    if ('restaurantId' in data) {
      const restaurantIdToDelete = data.restaurantId;

      const updatedRestaurants = tripDay.restaurants.restaurantsForDay.map(
        (restaurant) => {
          if (restaurant.restaurantId === restaurantIdToDelete) {
            return {
              ...restaurant,
              isDelete: restaurant.isDelete ? false : true,
            };
          }
          return restaurant;
        }
      );

      const updatedTripDay = {
        ...tripDay,
        restaurants: {
          ...tripDay.restaurants,
          restaurantsForDay: updatedRestaurants,
        },
      };

      setTripDays((prevTripDays) => {
        return prevTripDays.map((prevTripDay) => {
          if (prevTripDay.dayNum === tripDay.dayNum) {
            return updatedTripDay;
          }
          return prevTripDay;
        });
      });
    } else if ('touristAttractionId' in data) {
      const attractionIdToDelete = data.touristAttractionId;

      const updatedAttractions = tripDay.attractions.attractionsForDay.map(
        (attraction) => {
          if (attraction.touristAttractionId === attractionIdToDelete) {
            return {
              ...attraction,
              isDelete: attraction.isDelete ? false : true,
            };
          }
          return attraction;
        }
      );

      const updatedTripDay = {
        ...tripDay,
        attractions: {
          ...tripDay.attractions,
          attractionsForDay: updatedAttractions,
        },
      };

      setTripDays((prevTripDays) => {
        return prevTripDays.map((prevTripDay) => {
          if (prevTripDay.dayNum === tripDay.dayNum) {
            return updatedTripDay;
          }
          return prevTripDay;
        });
      });
    } else if ('accommodationId' in data) {
      const accommodationIdToDelete = data.accommodationId;

      const updatedAccommodation = accomodationsList.map((accommodation) => {
        if (accommodation.accommodationId === accommodationIdToDelete) {
          return {
            ...accommodation,
            isDelete: accommodation.isDelete ? false : true,
          };
        }
        return accommodation;
      });

      const updatedTripDay = {
        ...tripDay,
        accommodations: {
          accommodations: updatedAccommodation,
        },
      };

      setTripDays((prevTripDays) => {
        return prevTripDays.map((prevTripDay) => {
          if (prevTripDay.dayNum === tripDay.dayNum) {
            return updatedTripDay;
          }
          return prevTripDay;
        });
      });
    }
  };
  return (
    <div className="relative flex w-full justify-between gap-5">
      {isUpdateMode && (
        <div
          onClick={handleDeletePlace}
          className="absolute right-2 top-2 h-fit w-fit cursor-pointer select-none"
        >
          <DeleteIcon />
        </div>
      )}
      <div className="flex flex-col items-center gap-4">
        <div className="flex size-10 items-center justify-center rounded-full bg-accent-color bg-opacity-75 p-3">
          {index + 1}
        </div>
        {index !== length - 1 && <div className="h-full w-[0.5px] bg-black" />}
      </div>
      <div
        className={`mb-10 flex w-full items-center gap-4 rounded-xl bg-bg-color ${data.isDelete ? 'ring-2 ring-sub-color' : ''}`}
      >
        <div className="h-[230px] w-[50%] overflow-hidden rounded-l-xl text-2xl font-bold">
          <img
            className="h-full w-full object-cover"
            src={
              type === 'restaurants'
                ? data.restaurantPhotos === 'null'
                  ? errorImage
                  : data.restaurantPhotos
                : type === 'accommodations'
                  ? data.accommodationPhotos === 'null'
                    ? errorImage
                    : data.accommodationPhotos
                  : data.touristAttractionPhotos === 'null'
                    ? errorImage
                    : data.touristAttractionPhotos
            }
          />
        </div>
        <div className="flex h-full w-[50%] flex-col justify-start gap-3 px-5 py-8 text-xl font-medium">
          <div className="text-xl font-bold">
            {type === 'restaurants'
              ? data.restaurantName
              : type === 'attraction'
                ? data.touristAttractionName
                : data.accommodationName}
          </div>
          <div className="flex items-start gap-3">
            {type === 'restaurants' ? (
              <RestaurantIcon />
            ) : type === 'attraction' ? (
              <AttractionIcon />
            ) : (
              <AccommodationIcon />
            )}
            <div className="text-[17px]">
              {type === 'restaurants'
                ? 'Nhà hàng'
                : type === 'attraction'
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

            <div className="text-[17px]">
              {type === 'restaurants'
                ? data.restaurantAddress
                : type === 'attraction'
                  ? data.touristAttractionAddress
                  : data.accommodationAddress}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Place;
