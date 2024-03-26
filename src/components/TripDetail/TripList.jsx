import React from 'react';
import TripListItem from './TripListItem';
import { useSearchParams } from 'react-router-dom';
import Place from './Place';
import AddIcon from './Icons/AddIcon';

const TripList = ({
  setDayNum,
  tripDays,
  setTripDays,
  tripListRef,
  isUpdateMode,
  setIsAddPopup,
  handleIsAction,
  handleMouseOver,
}) => {
  const [params, _setParams] = useSearchParams();
  const accommodations = tripDays[0]?.accommodations?.accommodations;

  return (
    <div className="flex flex-col gap-10" ref={tripListRef}>
      {(+params.get('filter') === 0 ||
        +params.get('filter') === 1 ||
        +params.get('filter') === 3 ||
        +params.get('filter') === 4) &&
        tripDays.map((tripDay, i) => (
          <TripListItem
            key={i}
            setIsAddPopup={setIsAddPopup}
            tripDay={tripDay}
            isUpdateMode={isUpdateMode}
            handleIsAction={handleIsAction}
            setTripDays={setTripDays}
            setDayNum={setDayNum}
            handleMouseOver={handleMouseOver}
          />
        ))}

      {+params.get('filter') === 2 && (
        <>
          {accommodations?.map((accommodation, index) => (
            <Place
              data={accommodation}
              accomodationsList={accommodations}
              tripDay={tripDays[0]}
              setTripDays={setTripDays}
              type={tripDays[0]?.filterType}
              index={index}
              key={index}
              length={accommodations.length}
              isUpdateMode={isUpdateMode}
              handleIsAction={handleIsAction}
              handleMouseOver={handleMouseOver}
            />
          ))}
          {isUpdateMode && (
            <div
              onClick={() => {
                setIsAddPopup(true);
              }}
              className="flex items-center justify-center"
            >
              <AddIcon height={70} width={70} strokeWidth={2} />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default TripList;
