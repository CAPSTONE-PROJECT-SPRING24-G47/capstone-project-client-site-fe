import React from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const Calendar = ({ date, handleChangeDate }) => {
  return (
    <div className="overflow-hidden rounded-xl text-text-color">
      <DateRangePicker
        onChange={handleChangeDate}
        moveRangeOnFirstSelection={false}
        showMonthAndYearPickers={false}
        rangeColors={['#8DCADC']}
        months={2}
        ranges={[date]}
        direction="horizontal"
        preventSnapRefocus={true}
        staticRanges={[]}
        inputRanges={[]}
        calendarFocus="backwards"
      />
    </div>
  );
};

export default Calendar;
