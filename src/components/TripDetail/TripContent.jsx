import React, { useState } from 'react';
import TripDayList from './TripDayList';
import TripInfor from './TripInfor';
import TripList from './TripList';
import { useSearchParams } from 'react-router-dom';
import GGMapContainter from '../Map/GGMapContainter';

const TripContent = ({
  setDayNum,
  tripDays,
  setTripDays,
  trip,
  setIsPopupEdit,
  setIsAddPopup,
  handleIsAction,
  tripListRef,
  isUpdateMode,
  setIsUpdateMode,
  resetIsDeleteProperties,
  handleDeletePlace,
}) => {
  const [params, _setParams] = useSearchParams();
  const [latLng, setLatLng] = useState({ lat: 0, lng: 0 });

  const scrollToDay = (dayNum) => {
    const index = tripDays.findIndex((day) => day.dayNum === dayNum);
    if (index !== -1) {
      const tripListItem = tripListRef.current.childNodes[index];
      tripListItem.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  const handleMouseOver = (e) => {
    e.stopPropagation();
    const lat = parseFloat(e.currentTarget.getAttribute('lat'));
    const lng = parseFloat(e.currentTarget.getAttribute('lng'));
    setLatLng({ lat, lng });
  };

  return (
    <div className="flex w-full justify-between gap-10 px-24 pb-12">
      <div className="flex w-full flex-col gap-10">
        {/* Ngày và nút sửa */}
        <div
          className={`flex h-fit w-full items-center justify-between gap-10`}
        >
          {+params.get('filter') !== 2 && (
            <div className="w-[70%]">
              <TripDayList tripDays={tripDays} scrollToDay={scrollToDay} />
            </div>
          )}
          {+params.get('filter') === 2 && (
            <div className="text-2xl font-bold">
              Những nơi ở phù hợp với bạn
            </div>
          )}
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
        {(+params.get('filter') === 1 || +params.get('filter') === 0) && (
          <TripInfor trip={trip} setIsPopupEdit={setIsPopupEdit} />
        )}

        {/* List các ngày */}
        <TripList
          setIsAddPopup={setIsAddPopup}
          tripDays={tripDays}
          setTripDays={setTripDays}
          tripListRef={tripListRef}
          isUpdateMode={isUpdateMode}
          handleIsAction={handleIsAction}
          setDayNum={setDayNum}
          handleMouseOver={handleMouseOver}
        />
      </div>
      <div className="sticky top-[110px] flex h-[550px] w-[850px] items-center justify-center overflow-hidden rounded-lg bg-bg-color">
        <GGMapContainter tripDays={tripDays} latLng={latLng} />
      </div>
    </div>
  );
};

export default TripContent;
