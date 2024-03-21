import React, { useRef } from 'react';
import TripListItem from './TripListItem';

const TripList = ({
  setDayNum,
  tripDays,
  setTripDays,
  tripListRef,
  isUpdateMode,
  setIsAddPopup,
  handleIsAction,
}) => {
  return (
    <div className="flex flex-col gap-10" ref={tripListRef}>
      {tripDays.map((tripDay, i) => (
        <TripListItem
          key={i}
          setIsAddPopup={setIsAddPopup}
          tripDay={tripDay}
          isUpdateMode={isUpdateMode}
          handleIsAction={handleIsAction}
          setTripDays={setTripDays}
          setDayNum={setDayNum}
        />
      ))}
    </div>
  );
};

export default TripList;
