import React from 'react';
import TripNavigationItem from './TripNavigationItem';

const tripNavigationItems = [
  { typeNum: 1, text: 'Tổng quan' },
  { typeNum: 2, text: 'Nơi ở' },
  { typeNum: 3, text: 'Nhà hàng' },
  { typeNum: 4, text: 'Địa điểm giải trí' },
];

const TripNavigation = () => {
  return (
    <div className="sticky top-[69px] z-20 flex justify-between border-b-[1px] border-accent-color border-opacity-50 bg-bg-secondary-color px-40 py-2 text-lg font-medium">
      {tripNavigationItems.map((item) => (
        <TripNavigationItem text={item.text} />
      ))}
    </div>
  );
};

export default TripNavigation;
