import React from 'react';
import TripDayList from './TripDayList';
import TripInfor from './TripInfor';
import TripList from './TripList';
import { useSearchParams } from 'react-router-dom';

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

  const scrollToDay = (dayNum) => {
    const index = tripDays.findIndex((day) => day.dayNum === dayNum);
    if (index !== -1) {
      const tripListItem = tripListRef.current.childNodes[index];
      tripListItem.scrollIntoView({
        behavior: 'smooth',
      });
    }
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
            <div className="text-2xl font-bold">Danh sách chỗ ở</div>
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
        {+params.get('filter') === 1 && (
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
        />
      </div>
      <div className="flex h-[900px] w-[700px] items-center justify-center rounded-lg bg-bg-color">
        <p>Map</p>
      </div>
    </div>
  );
};

export default TripContent;
