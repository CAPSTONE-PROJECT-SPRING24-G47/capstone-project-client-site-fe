import React from 'react';
import { DateRangePicker } from 'react-date-range';
import { motion } from 'framer-motion';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const Calendar = ({ date, handleChangeDate }) => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: -20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.1, type: 'spring', stiffness: 120 }}
      viewport={{ once: true }}
      className="overflow-hidden rounded-xl text-text-color"
    >
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
    </motion.div>
  );
};

export default Calendar;
