import React, { useRef, useState } from 'react';
import TripDayList from './TripDayList';
import TripInfor from './TripInfor';
import TripList from './TripList';
import { deleteTripResById, deleteTripTAById } from '../../api/services/trip';

const TripContent = ({
  setDayNum,
  tripDays,
  setTripDays,
  trip,
  setIsPopupEdit,
  setIsAddPopup,
  handleIsAction,
}) => {
  const tripListRef = useRef(null);
  const [isUpdateMode, setIsUpdateMode] = useState(false);

  const scrollToDay = (dayNum) => {
    const index = tripDays.findIndex((day) => day.dayNum === dayNum);
    if (index !== -1) {
      const tripListItem = tripListRef.current.childNodes[index];
      tripListItem.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  const resetIsDeleteProperties = () => {
    const updatedTripDays = tripDays.map((tripDay) => ({
      ...tripDay,
      restaurants: {
        ...tripDay.restaurants,
        restaurantsForDay: tripDay.restaurants.restaurantsForDay.map(
          (restaurant) => ({
            ...restaurant,
            isDelete: false,
          })
        ),
      },
      attractions: {
        ...tripDay.attractions,
        attractionsForDay: tripDay.attractions.attractionsForDay.map(
          (attraction) => ({
            ...attraction,
            isDelete: false,
          })
        ),
      },
    }));

    setTripDays(updatedTripDays);
  };

  const handleDeletePlace = async () => {
    const deletedRestaurants = [];
    const deletedAttractions = [];

    tripDays.forEach((day) => {
      if (day.restaurants) {
        day.restaurants.restaurantsForDay.forEach((restaurant) => {
          if (restaurant.isDelete) {
            deletedRestaurants.push(restaurant);
          }
        });
      }

      if (day.attractions) {
        day.attractions.attractionsForDay.forEach((attraction) => {
          if (attraction.isDelete) {
            deletedAttractions.push(attraction);
          }
        });
      }
    });

    if (deletedRestaurants.length === 0 && deletedAttractions.length === 0) {
      setIsUpdateMode(false);
      return;
    } else {
      deletedRestaurants.forEach(async (restaurant) => {
        const response = await deleteTripResById(restaurant.id);
        if (response) handleIsAction();
      });

      deletedAttractions.forEach(async (attraction) => {
        const response = await deleteTripTAById(attraction.id);
        if (response) handleIsAction();
      });
    }
  };

  return (
    <div className="flex w-full justify-between gap-10 px-24">
      <div className="flex w-full flex-col gap-5">
        {/* Ngày và nút sửa */}
        <div className="flex h-fit w-full items-center justify-between gap-10">
          <div className="w-[70%]">
            <TripDayList tripDays={tripDays} scrollToDay={scrollToDay} />
          </div>
          {isUpdateMode ? (
            <div className="flex w-fit gap-2">
              <div
                onClick={() => {
                  resetIsDeleteProperties();
                  setIsUpdateMode(false);
                }}
                className="flex h-fit w-fit cursor-pointer items-center justify-center rounded-lg border-[1px]  border-accent-color px-4 py-2 text-lg font-semibold text-accent-color transition-colors duration-75 hover:bg-accent-color hover:text-bg-secondary-color"
              >
                Hủy
              </div>
              <div
                onClick={handleDeletePlace}
                className="flex h-fit cursor-pointer items-center justify-center rounded-lg border-[1px] border-sub-color px-4 py-2 text-lg font-semibold text-sub-color transition-colors duration-75 hover:bg-sub-color hover:text-bg-secondary-color"
              >
                Xóa
              </div>
            </div>
          ) : (
            <div
              onClick={() => setIsUpdateMode(true)}
              className="flex h-fit w-fit cursor-pointer items-center justify-center rounded-lg border-[1px] border-accent-color px-4 py-2 text-lg font-semibold text-accent-color transition-colors duration-75 hover:bg-accent-color hover:text-bg-secondary-color"
            >
              Sửa
            </div>
          )}
        </div>

        {/* Thông tin Trip */}
        <TripInfor trip={trip} setIsPopupEdit={setIsPopupEdit} />

        {/* List các ngày */}
        <TripList
          setIsAddPopup={setIsAddPopup}
          tripDays={tripDays}
          setTripDays={setTripDays}
          tripListRef={tripListRef}
          isUpdateMode={isUpdateMode}
          handleIsAction={handleIsAction}
          setDayNum={setDayNum}
        />
      </div>
      <div className="flex h-[900px] w-[700px] items-center justify-center rounded-lg bg-bg-color">
        <p>Map</p>
      </div>
    </div>
  );
};

export default TripContent;
