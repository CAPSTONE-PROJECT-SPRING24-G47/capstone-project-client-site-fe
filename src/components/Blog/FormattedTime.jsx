import React from 'react';

const FormattedTime = ({ time }) => {
  const createdAt = new Date(time);
  const hours = createdAt.getHours();
  const minutes = createdAt.getMinutes();
  const year = createdAt.getFullYear();
  let month = createdAt.getMonth() + 1; // Months start at 0
  let day = createdAt.getDate();

  const formattedTime =
    'Được tạo lúc: ' +
    hours +
    ':' +
    minutes +
    ' ' +
    day +
    '/' +
    month +
    '/' +
    year;

  return <div>{formattedTime}</div>;
};

export default FormattedTime;
