import React, { useContext, useEffect, useRef, useState } from 'react';
import TripNavigation from '../components/TripDetail/TripNavigation';
import TripContent from '../components/TripDetail/TripContent';
import { useParams, useSearchParams } from 'react-router-dom';
import {
  deleteTripAccById,
  deleteTripResById,
  deleteTripTAById,
  getTripById,
} from '../api/services/trip';
import Loading from '../components/Loading';
import EditTripPopup from '../components/TripDetail/EditTripPopup';
import AddPopup from '../components/TripDetail/AddPopup';
import SmallUpdateCircle from '../components/TripDetail/SmallUpdateCircle';
import SmallUpdatePopup from '../components/TripDetail/SmallUpdatePopup';
import { AlertContext } from '../Contexts/AlertContext';

const TripDetail = () => {
  const { id } = useParams();
  const { setIsShow, setAlertData } = useContext(AlertContext);
  const [params, _setParams] = useSearchParams();
  const [trip, setTrip] = useState(null);
  const tripListRef = useRef(null);
  const [tripDays, setTripDays] = useState([]);
  const [isPopupEdit, setIsPopupEdit] = useState(false);
  const [isAddPopup, setIsAddPopup] = useState(false);
  const [dayNum, setDayNum] = useState(null);
  const [action, setAction] = useState(false);
  const [showSmallUpdateCircle, setShowSmallUpdateCircle] = useState(false);
  const [showSmallUpdatePopup, setShowSmallUpdatePopup] = useState(false);
  const [isUpdateMode, setIsUpdateMode] = useState(false);

  const handleIsAction = () => {
    setAction((state) => !state);
    setTrip(null);
  };

  useEffect(() => {
    const groupByDay = () => {
      const days = [];

      const attractions = trip.trip_TouristAttractions;
      const restaurants = trip.trip_Restaurants;
      const accommodations = trip.trip_Accommodations;

      console.log(+params.get('filter'));
      if (+params.get('filter') === 1 || +params.get('filter') === 0) {
        for (let i = 0; i < trip.duration; i++) {
          const attractionsForDay = attractions.filter(
            (attraction) => attraction.suggestedDay === i + 1
          );

          const restaurantsForDay = restaurants.filter(
            (restaurant) => restaurant.suggestedDay === i + 1
          );

          days.push({
            filterType: '',
            dayNum: i + 1,
            attractions: { type: 'attraction', attractionsForDay },
            restaurants: { type: 'restaurants', restaurantsForDay },
          });
        }
      } else if (+params.get('filter') === 2) {
        for (let i = 0; i < trip.duration; i++) {
          days.push({
            filterType: 'accommodations',
            dayNum: i + 1,
            attractions: { type: 'attraction', attractionsForDay: [] },
            restaurants: { type: 'restaurants', restaurantsForDay: [] },
            accommodations: { type: 'accommodations', accommodations },
          });
        }
      } else if (+params.get('filter') === 3) {
        for (let i = 0; i < trip.duration; i++) {
          const restaurantsForDay = restaurants.filter(
            (restaurant) => restaurant.suggestedDay === i + 1
          );

          days.push({
            filterType: 'restaurants',
            dayNum: i + 1,
            attractions: { type: 'attraction', attractionsForDay: [] },
            restaurants: { type: 'restaurants', restaurantsForDay },
          });
        }
      } else if (+params.get('filter') === 4) {
        for (let i = 0; i < trip.duration; i++) {
          const attractionsForDay = attractions.filter(
            (attraction) => attraction.suggestedDay === i + 1
          );

          days.push({
            filterType: 'attractions',
            dayNum: i + 1,
            attractions: { type: 'attraction', attractionsForDay },
            restaurants: { type: 'restaurants', restaurantsForDay: [] },
          });
        }
      }

      setTripDays(days);
    };

    if (trip) {
      groupByDay();
    }
  }, [trip, params]);

  const resetIsDeleteProperties = () => {
    const updatedTripDays = tripDays.map((tripDay) => ({
      ...tripDay,
      restaurants: {
        ...tripDay.restaurants,
        restaurantsForDay: tripDay.restaurants.restaurantsForDay.map(
          (restaurant) => ({
            ...restaurant,
            isDelete: false,
          })
        ),
      },
      attractions: {
        ...tripDay.attractions,
        attractionsForDay: tripDay.attractions.attractionsForDay.map(
          (attraction) => ({
            ...attraction,
            isDelete: false,
          })
        ),
      },
      accommodations: {
        accommodations: tripDay.accommodations?.accommodations?.map(
          (accommodation) => ({
            ...accommodation,
            isDelete: false,
          })
        ),
      },
    }));

    setTripDays(updatedTripDays);
  };
  console.log();

  const handleDeletePlace = async () => {
    const deletedRestaurants = [];
    const deletedAttractions = [];
    const deletedAccommodations = [];

    tripDays.forEach((day) => {
      if (day.restaurants) {
        day.restaurants.restaurantsForDay.forEach((restaurant) => {
          if (restaurant.isDelete) {
            deletedRestaurants.push(restaurant);
          }
        });
      }

      if (day.attractions) {
        day.attractions.attractionsForDay.forEach((attraction) => {
          if (attraction.isDelete) {
            deletedAttractions.push(attraction);
          }
        });
      }
    });

    if (tripDays[0].accommodations) {
      tripDays[0].accommodations?.accommodations.forEach((acc) => {
        if (acc.isDelete) {
          deletedAccommodations.push(acc);
        }
      });
    }
    if (
      deletedRestaurants.length === 0 &&
      deletedAttractions.length === 0 &&
      deletedAccommodations.length === 0
    ) {
      setIsUpdateMode(false);
      return;
    } else {
      deletedRestaurants.forEach(async (restaurant) => {
        const response = await deleteTripResById(restaurant.id);
        if (response) {
          if (response.isSuccess) {
            setIsShow(true);
            setAlertData({
              message: response.message,
              textColor: 'text-white',
              backGroundColor: 'bg-primary-color',
            });
          }
          handleIsAction();
        }
      });

      deletedAttractions.forEach(async (attraction) => {
        const response = await deleteTripTAById(attraction.id);
        if (response) {
          if (response.isSuccess) {
            setIsShow(true);
            setAlertData({
              message: response.message,
              textColor: 'text-white',
              backGroundColor: 'bg-primary-color',
            });
          }
          handleIsAction();
        }
      });

      deletedAccommodations.forEach(async (acc) => {
        const response = await deleteTripAccById(acc.id);
        if (response) {
          if (response.isSuccess) {
            setIsShow(true);
            setAlertData({
              message: response.message,
              textColor: 'text-white',
              backGroundColor: 'bg-primary-color',
            });
          }
          handleIsAction();
        }
      });
    }
  };

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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setShowSmallUpdateCircle(true);
      } else {
        setShowSmallUpdateCircle(false);
        setShowSmallUpdatePopup(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
                setIsAddPopup={setIsAddPopup}
                trip={trip}
                handleIsAction={handleIsAction}
              />
            </>
          )}
          <TripNavigation />
          <TripContent
            tripListRef={tripListRef}
            setDayNum={setDayNum}
            tripDays={tripDays}
            setTripDays={setTripDays}
            trip={trip}
            setIsPopupEdit={setIsPopupEdit}
            setIsAddPopup={setIsAddPopup}
            handleIsAction={handleIsAction}
            isUpdateMode={isUpdateMode}
            setIsUpdateMode={setIsUpdateMode}
            resetIsDeleteProperties={resetIsDeleteProperties}
            handleDeletePlace={handleDeletePlace}
          />
        </>
      )}
      {!trip && (
        <div className="flex h-screen items-center justify-center">
          <Loading />
        </div>
      )}
      {showSmallUpdatePopup && (
        <SmallUpdatePopup
          tripDays={tripDays}
          tripListRef={tripListRef}
          isUpdateMode={isUpdateMode}
          setIsUpdateMode={setIsUpdateMode}
          resetIsDeleteProperties={resetIsDeleteProperties}
          handleDeletePlace={handleDeletePlace}
        />
      )}
      {showSmallUpdateCircle && (
        <SmallUpdateCircle setShowSmallUpdatePopup={setShowSmallUpdatePopup} />
      )}
    </div>
  );
};

export default TripDetail;
