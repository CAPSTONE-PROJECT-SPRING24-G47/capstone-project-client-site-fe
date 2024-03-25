import React from 'react';
import TripDayItem from './TripDayItem';

const TripDayList = ({ tripDays, scrollToDay }) => {
  return (
    <div className="no-scrollbar flex max-h-[120px] flex-wrap items-center gap-3 overflow-y-scroll rounded-xl px-5 py-3 ring-1 ring-accent-color ">
      {tripDays.map((item, index) => (
        <TripDayItem
          key={index}
          dayNum={item.dayNum}
          scrollToDay={scrollToDay}
        />
      ))}
    </div>
  );
};

export default TripDayList;
