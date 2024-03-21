import React from 'react';
import TripDayItem from './TripDayItem';

const TripDayList = ({ tripDays, scrollToDay }) => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {tripDays.map((item) => (
        <TripDayItem dayNum={item.dayNum} scrollToDay={scrollToDay} />
      ))}
    </div>
  );
};

export default TripDayList;
