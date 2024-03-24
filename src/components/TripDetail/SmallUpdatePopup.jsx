import React from 'react';
import TripDayItem from './TripDayItem';

const SmallUpdatePopup = ({
  tripDays,
  tripListRef,
  isUpdateMode,
  setIsUpdateMode,
  resetIsDeleteProperties,
  handleDeletePlace,
}) => {
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
    <div className="fixed bottom-[14%] right-[6%] z-10 flex w-[400px] flex-col justify-center gap-6 rounded-xl bg-bg-color p-5 shadow-md">
      <div className="no-scrollbar flex max-h-[200px] flex-wrap items-center gap-3 overflow-y-scroll rounded-lg px-5 py-3 ring-1 ring-accent-color">
        {tripDays.map((item, index) => (
          <TripDayItem
            key={index}
            dayNum={item.dayNum}
            scrollToDay={scrollToDay}
          />
        ))}
      </div>

      {isUpdateMode ? (
        <div className="flex w-full justify-end gap-2">
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
        <div className="flex w-full justify-end ">
          <div
            onClick={() => setIsUpdateMode(true)}
            className="flex h-fit w-fit cursor-pointer items-center justify-center rounded-lg border-[1px] border-accent-color px-4 py-2 text-lg font-semibold text-accent-color transition-colors duration-75 hover:bg-accent-color hover:text-bg-secondary-color"
          >
            Sửa
          </div>
        </div>
      )}
    </div>
  );
};

export default SmallUpdatePopup;
