import React from 'react';
import { useSearchParams } from 'react-router-dom';

const TripNavigationItem = ({ text, typeNum }) => {
  const [params, setParams] = useSearchParams();

  return (
    <div
      onClick={() => {
        setParams({ filter: typeNum });
      }}
      className={`cursor-pointer text-center hover:font-bold ${+params.get('filter') === typeNum ? 'font-bold' : ''}`}
    >
      {text}
    </div>
  );
};

export default TripNavigationItem;
