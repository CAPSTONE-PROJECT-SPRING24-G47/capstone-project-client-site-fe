import React from 'react';

const FormattedDate = ({ date }) => {
  const createdAt = new Date(date);
  const year = createdAt.getFullYear();
  let month = createdAt.getMonth() + 1; // Months start at 0
  let day = createdAt.getDate();

  const formattedDate = day + '-' + month + '-' + year;

  return <div>{formattedDate}</div>;
};

export default FormattedDate;
