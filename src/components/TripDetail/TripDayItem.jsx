import React from 'react';

const TripDayItem = ({ dayNum, scrollToDay }) => {
  return (
    <div
      onClick={() => scrollToDay(dayNum, 100)}
      className="h-full w-fit cursor-pointer rounded-lg bg-accent-color bg-opacity-75 px-4 py-2 text-center"
    >
      {`Ngày ${dayNum}`}
    </div>
  );
};

export default TripDayItem;
