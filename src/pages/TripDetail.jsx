import React, { useContext, useEffect, useState } from 'react';
import TripNavigation from '../components/TripDetail/TripNavigation';
import TripContent from '../components/TripDetail/TripContent';
import { useParams } from 'react-router-dom';
import { getTripById } from '../api/services/trip';
import Loading from '../components/Loading';
import EditTripPopup from '../components/TripDetail/EditTripPopup';
import AddPopup from '../components/TripDetail/AddPopup';
import { AddPlaceContext } from '../Contexts/AddPlaceContext';

const TripDetail = () => {
  const { id } = useParams();
  const { placeId } = useContext(AddPlaceContext);
  console.log(placeId);
  const [trip, setTrip] = useState(null);
  const [tripDays, setTripDays] = useState([]);
  const [isPopupEdit, setIsPopupEdit] = useState(false);
  const [isAddPopup, setIsAddPopup] = useState(false);
  const [dayNum, setDayNum] = useState(null);
  const [action, setAction] = useState(false);

  const handleIsAction = () => {
    setAction((state) => !state);
    setTrip(null);
  };

  useEffect(() => {
    const groupByDay = () => {
      const days = [];
      const attractionsPerDay = 3;
      const restaurantsPerDay = 2;

      const attractions = trip.trip_TouristAttractions;
      const restaurants = trip.trip_Restaurants;

      for (let i = 0; i < trip.duration; i++) {
        const attractionsForDay = attractions.slice(
          i * attractionsPerDay,
          (i + 1) * attractionsPerDay
        );

        const restaurantsForDay = restaurants.slice(
          i * restaurantsPerDay,
          (i + 1) * restaurantsPerDay
        );

        days.push({
          dayNum: i + 1,
          attractions: { type: 'attraction', attractionsForDay },
          restaurants: { type: 'restaurants', restaurantsForDay },
        });
      }

      setTripDays(days);
    };

    if (trip) {
      groupByDay();
    }
  }, [trip]);

  useEffect(() => {
    async function fetchData() {
      const response = await getTripById(id);
      if (response) {
        if (response.isSuccess) {
          setTrip(response.data[0]);
        }
      }
    }
    fetchData();
  }, [action]);

  return (
    <div className="relative flex flex-col gap-10 bg-bg-secondary-color">
      {trip && (
        <>
          {isPopupEdit && (
            <>
              <div className="fixed inset-x-0 z-30 h-screen w-full bg-[#03121A] opacity-50" />
              <EditTripPopup
                setIsPopupEdit={setIsPopupEdit}
                trip={trip}
                handleIsAction={handleIsAction}
              />
            </>
          )}
          {isAddPopup && (
            <>
              <div className="fixed inset-x-0 z-30 h-screen w-full bg-[#03121A] opacity-50" />
              <AddPopup
                dayNum={dayNum}
                tripDays={tripDays}
                setTripDays={setTripDays}
                setIsAddPopup={setIsAddPopup}
                trip={trip}
                handleIsAction={handleIsAction}
              />
            </>
          )}
          <TripNavigation />
          <TripContent
            setDayNum={setDayNum}
            tripDays={tripDays}
            setTripDays={setTripDays}
            trip={trip}
            setIsPopupEdit={setIsPopupEdit}
            setIsAddPopup={setIsAddPopup}
            handleIsAction={handleIsAction}
          />
        </>
      )}
      {!trip && (
        <div className="flex h-screen items-center justify-center">
          <Loading />
        </div>
      )}
    </div>
  );
};

export default TripDetail;
