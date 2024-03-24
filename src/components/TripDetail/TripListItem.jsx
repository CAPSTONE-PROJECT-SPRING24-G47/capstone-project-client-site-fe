import React from 'react';
import Place from './Place';
import AddIcon from './Icons/AddIcon';

const TripListItem = ({
  setDayNum,
  tripDay,
  setTripDays,
  isUpdateMode,
  setIsAddPopup,
  handleIsAction,
}) => {
  const restaurantsLength = tripDay.restaurants.restaurantsForDay.length;
  const attractionsLength = tripDay.attractions.attractionsForDay.length;
  const totalLength = restaurantsLength + attractionsLength;

  return (
    <div className="flex flex-col gap-7">
      {(tripDay.filterType === 'restaurants' ||
        tripDay.filterType === 'attractions' ||
        tripDay.filterType === '') && (
        <>
          <div className="flex items-center justify-center gap-5">
            <div className="h-[1px] w-[30%] bg-black" />
            <div className="text-2xl font-semibold text-black">
              Ngày {tripDay.dayNum}
            </div>
            <div className="h-[1px] w-[30%] bg-black" />
          </div>
          {tripDay.restaurants.restaurantsForDay.length === 0 &&
            tripDay.attractions.attractionsForDay.length === 0 && (
              <div className="flex items-center justify-center rounded-lg bg-bg-color p-5 text-lg font-medium">
                Thêm nhà hàng, địa điểm giải trí bạn muốn
              </div>
            )}
          {tripDay.restaurants?.restaurantsForDay?.map((res, index) => (
            <Place
              data={res}
              tripDay={tripDay}
              setTripDays={setTripDays}
              type={tripDay.restaurants.type}
              index={index}
              key={index}
              length={totalLength}
              isUpdateMode={isUpdateMode}
              handleIsAction={handleIsAction}
            />
          ))}
          {tripDay.attractions?.attractionsForDay?.map((attraction, index) => (
            <Place
              data={attraction}
              tripDay={tripDay}
              setTripDays={setTripDays}
              type={tripDay.attractions.type}
              index={index + tripDay.restaurants.restaurantsForDay.length}
              key={index}
              length={totalLength}
              isUpdateMode={isUpdateMode}
              handleIsAction={handleIsAction}
            />
          ))}
        </>
      )}

      {isUpdateMode && (
        <div
          onClick={() => {
            setIsAddPopup(true);
            setDayNum(tripDay.dayNum);
          }}
          className="flex items-center justify-center"
        >
          <AddIcon height={70} width={70} strokeWidth={2} />
        </div>
      )}
    </div>
  );
};

export default TripListItem;
