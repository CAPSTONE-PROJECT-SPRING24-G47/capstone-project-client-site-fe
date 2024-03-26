import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TripSurvey from '../components/Trips/TripSurvey';
import TripSelection from '../components/Trips/TripSelection';
import autoImage from '../assets/compressed-images/trip_builder_auto-min.jpg';
import manualImage from '../assets/compressed-images/trip_builder_manual-min.jpeg';
import PrevArrowIcon from '../components/Trips/Icons/PrevArrowIcon';
import { getListAccommodationCategories } from '../api/services/accommodation';
import { getListRestaurantCategories } from '../api/services/restaurant';
import { getListTACategories } from '../api/services/touristAttraction';
import LocationPopup from '../components/Trips/LocationPopup';
import { fetchUserFromLocalStorage } from '../utils/fetchUserFromLocalStorage';
import { createTrip } from '../api/services/trip';
import { FormContext } from '../Contexts/FormContext';
import TripLoading from '../components/Trips/TripLoading';
import TripSurveyForManual from '../components/Trips/TripSurveyForManual';

const millisecondsInADay = 1000 * 60 * 60 * 24;

const TripBuilder = () => {
  const user = fetchUserFromLocalStorage();
  const { setIsLoading, isLoading } = useContext(FormContext);
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);
  // const [isTripAuto, setIsTripAuto] = useState(false);
  const [isLocationPopup, setIsLocationPopup] = useState(false);
  const [isTripSelection, setIsTripSelection] = useState(true);
  const [mode, setMode] = useState('auto');
  const [progress, setProgress] = useState(1);
  const [accommodationCategories, setAccommodationCategories] = useState([]);
  const [restaurantCategories, setRestaurantCategories] = useState([]);
  const [touristAttractionCategories, setTouristAttractionCategories] =
    useState([]);

  //data tổng
  const [surveyData, setSurveyData] = useState({
    userId: user.userId,
    title: '',
    description: '',
    startDate: '2024-03-10T02:49:25.736Z',
    endDate: '2024-03-10T02:49:25.736Z',
    duration: 0,
    isPublic: true,
    restaurantPriceLevel: 'string',
    accommodationPriceLevel: 'string',
    trip_Locations: [],
    touristAttractionCategories: [],
    restaurantCategories: [],
    accommodationCategories: [],
  });

  //data
  const [location, setLocation] = useState([]);
  const [date, setDate] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  });
  const [duration, setDuration] = useState(null);
  const [accommodationOption, setAccommodationOption] = useState({
    type: 'accommodation',
    priceLevelNum: 1,
    priceLevel: 'Trung bình',
    categories: [],
  });

  const [restaurantOption, setRestaurantOption] = useState({
    type: 'restaurant',
    priceLevelNum: 1,
    priceLevel: 'Trung bình',
    categories: [],
  });

  const [touristAttractionOption, setTouristAttractionOption] = useState({
    type: 'touristAttraction',
    categories: [],
  });

  const handleChangeDate = (ranges) => {
    setDate(ranges.selection);
  };

  const handleSubmit = async () => {
    console.log(surveyData);

    const response = await createTrip(surveyData);
    if (response) {
      if (response.isSuccess) {
        setIsLoading(false);
        navigate(`/trip/${response.data[0].tripId}`);
      } else {
        setIsError(true);
      }
    }
    console.log(response);
  };

  useEffect(() => {
    setDuration((date.endDate - date.startDate) / millisecondsInADay + 1);
  }, [date]);

  useEffect(() => {
    async function fetchData() {
      const response = await getListAccommodationCategories();
      if (response) setAccommodationCategories(response);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await getListRestaurantCategories();
      if (response) setRestaurantCategories(response);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await getListTACategories();
      if (response) setTouristAttractionCategories(response);
    }
    fetchData();
  }, []);

  useEffect(() => {
    setSurveyData((prevState) => ({
      ...prevState,
      title: `Chuyến đi Nhật Bản ${duration} ngày`,
      startDate: date.startDate,
      endDate: date.endDate,
      duration,
      isPublic: true,
      restaurantPriceLevel: restaurantOption.priceLevel,
      accommodationPriceLevel: accommodationOption.priceLevel,
      trip_Locations: location,
      touristAttractionCategories: [...touristAttractionOption.categories],
      restaurantCategories: [...restaurantOption.categories],
      accommodationCategories: [...accommodationOption.categories],
    }));
  }, [
    location,
    date,
    duration,
    accommodationOption,
    restaurantOption,
    touristAttractionOption,
  ]);

  return (
    <div className="relative h-screen overflow-hidden bg-bg-color">
      {!isLoading && (
        <>
          <div className="relative py-5 text-center text-xl font-semibold">
            <Link
              to={'/'}
              className="absolute top-0 ml-3 flex h-full w-fit items-center justify-center"
            >
              <PrevArrowIcon colorFill={'#8DCADC'} className={'h-10 w-10'} />
            </Link>

            {mode === 'auto' && (
              <p
                onClick={() => {
                  if (!isTripSelection) setIsLocationPopup(true);
                }}
                className={`${!isTripSelection && 'cursor-pointer'}`}
              >
                {isTripSelection
                  ? 'CHỌN CÁCH LÊN KẾ HOẠCH CỦA BẠN'
                  : location.length !== 0
                    ? `Điểm đến: ${location.length === 1 ? location[0].name : ''} 
                ${location.length === 2 ? `${location[0].name}, ${location[1].name}` : ''} 
                ${location.length > 2 ? `${location[0].name}, ${location[1].name} (+${location.length - 2})` : ''}`
                    : 'Lựa chọn cho mình một điểm đến'}
              </p>
            )}

            {mode === 'manual' && <p>TẠO CHUYẾN ĐI THỦ CÔNG</p>}
          </div>
          {isLocationPopup && (
            <>
              <div
                onClick={() => setIsLocationPopup(false)}
                className="absolute top-0 z-20 h-screen w-full bg-[#03121A] opacity-50"
              />
              <LocationPopup location={location} setLocation={setLocation} />
            </>
          )}
          {isTripSelection && (
            <div className="flex h-full w-full gap-4">
              <TripSelection
                setIsTripSelection={setIsTripSelection}
                btnText={'Tạo chuyến đi\ntự động'}
                img={autoImage}
                description={
                  'Cùng bạn tạo lịch trình với công cụ của chúng tôi'
                }
                isAuto={true}
                setMode={setMode}
                // setIsTripAuto={setIsTripAuto}
              />
              <TripSelection
                setIsTripSelection={setIsTripSelection}
                btnText={'Tạo chuyến đi\nthủ công'}
                img={manualImage}
                description={'Tạo lịch trình với các địa điểm bạn yêu thích'}
                isAuto={false}
                setMode={setMode}
                // setIsTripAuto={setIsTripAuto}
              />
            </div>
          )}
          {!isTripSelection && mode === 'auto' && progress === 1 && (
            <TripSurvey
              title={'Bạn muốn đi đâu?'}
              progress={progress}
              setProgress={setProgress}
              setLocation={setLocation}
              location={location}
            />
          )}
          {!isTripSelection && mode === 'auto' && progress === 2 && (
            <TripSurvey
              title={'Bạn dự định đi trong bao lâu?'}
              progress={progress}
              setProgress={setProgress}
              date={date}
              handleChangeDate={handleChangeDate}
              duration={duration}
            />
          )}
          {!isTripSelection && mode === 'auto' && progress === 3 && (
            <TripSurvey
              title={'Về nơi ở'}
              progress={progress}
              setProgress={setProgress}
              accommodationOption={accommodationOption}
              setAccommodationOption={setAccommodationOption}
              accommodationCategories={accommodationCategories}
            />
          )}
          {!isTripSelection && mode === 'auto' && progress === 4 && (
            <TripSurvey
              title={'Về nhà hàng'}
              progress={progress}
              setProgress={setProgress}
              restaurantOption={restaurantOption}
              setRestaurantOption={setRestaurantOption}
              restaurantCategories={restaurantCategories}
            />
          )}
          {!isTripSelection && mode === 'auto' && progress === 5 && (
            <TripSurvey
              title={'Về địa điểm giải trí'}
              progress={progress}
              setProgress={setProgress}
              touristAttractionOption={touristAttractionOption}
              setTouristAttractionOption={setTouristAttractionOption}
              touristAttractionCategories={touristAttractionCategories}
              handleSubmit={handleSubmit}
            />
          )}
          {!isTripSelection && mode === 'manual' && (
            <TripSurveyForManual
              setIsError={setIsError}
              setIsLoading={setIsLoading}
            />
          )}
        </>
      )}
      {isLoading && (
        <TripLoading
          isError={isError}
          setIsError={setIsError}
          setIsTripSelection={setIsTripSelection}
          setIsLoading={setIsLoading}
        />
      )}
    </div>
  );
};

export default TripBuilder;
