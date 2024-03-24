import React, { useContext, useEffect, useState } from 'react';
import Calendar from '../TripDetail/Calendar';
import CloseIcon from '../Auth/Icons/CloseIcon';
import SearchLocationBar from './SearchLocationBar';
import { getSearchResult } from '../../api/services/search';
import SearchResult from './SearchResult';
import { updateTripById } from '../../api/services/trip';
import CategoryRectangle from './CategoryRectangle';
import { getListAccommodationCategories } from '../../api/services/accommodation';
import { getListRestaurantCategories } from '../../api/services/restaurant';
import { getListTACategories } from '../../api/services/touristAttraction';
import { fetchUserFromLocalStorage } from '../../utils/fetchUserFromLocalStorage';
import LocationPopup from './LocationPopup';
import { AlertContext } from '../../Contexts/AlertContext';

const millisecondsInADay = 1000 * 60 * 60 * 24;
const priceLevelData = [
  { text: 'Giá thấp', price: '2.000.000VND/người đổ xuống' },
  { text: 'Trung bình', price: '2.000.000VND - 4.000.000VND/người' },
  { text: 'Giá cao', price: '4.000.000VND/người đổ lên' },
];

const locationTypeData = [
  { typeNum: 1, locationName: 'Vùng', property: 'RegionName', type: 'Regions' },
  {
    typeNum: 2,
    locationName: 'Tỉnh',
    property: 'PrefectureName',
    type: 'Prefectures',
  },
  {
    typeNum: 3,
    locationName: 'Thành phố',
    property: 'CityName',
    type: 'Cities',
  },
];

const EditTripPopup = ({ setIsPopupEdit, trip, handleIsAction }) => {
  const user = fetchUserFromLocalStorage();
  const { setIsShow, setAlertData } = useContext(AlertContext);

  const accCategoriesId = trip.accommodationCategories
    .split(',')
    .map((category) => parseInt(category));
  const resCategoriesId = trip.restaurantCategories
    .split(',')
    .map((category) => parseInt(category));
  const taCategoriesId = trip.touristAttractionCategories
    .split(',')
    .map((category) => parseInt(category));
  const [searchResult, setSearchResult] = useState([]);
  const [accommodationCategories, setAccommodationCategories] = useState([]);
  const [restaurantCategories, setRestaurantCategories] = useState([]);
  const [touristAttractionCategories, setTouristAttractionCategories] =
    useState([]);
  const [searchAccCategories, setSearchAccCategories] = useState('');
  const [searchResCategories, setSearchResCategories] = useState('');
  const [searchTACategories, setSearchTACategories] = useState('');

  //data
  const [isLocationPopup, setIsLocationPopup] = useState(false);
  const [title, setTitle] = useState(trip.title);
  const [searchLocation, setSearchLocation] = useState({
    typeNum: 3,
    name: 'Thành phố',
    property: 'CityName',
    type: 'Cities',
    value: '',
  });
  const [location, setLocation] = useState([...trip.trip_Locations]);
  const [accommodationPriceLevel, setAccommodationPriceLevel] = useState(
    trip.accommodationPriceLevel
  );
  const [restaurantPriceLevel, setRestaurantPriceLevel] = useState(
    trip.restaurantPriceLevel
  );
  const [description, setDescription] = useState(trip.description);
  const [isPublic, setIsPublic] = useState(trip.isPublic);
  const [date, setDate] = useState({
    startDate: new Date(trip.startDate),
    endDate: new Date(trip.endDate),
    key: 'selection',
  });
  const [duration, setDuration] = useState(trip.duration);
  const [accommodationOption, setAccommodationOption] = useState({
    type: 'accommodation',
    categories: [...accCategoriesId],
  });

  const [restaurantOption, setRestaurantOption] = useState({
    type: 'restaurant',
    categories: [...resCategoriesId],
  });

  const [touristAttractionOption, setTouristAttractionOption] = useState({
    type: 'touristAttraction',
    categories: [...taCategoriesId],
  });

  //data tổng
  const [updateData, setUpdateData] = useState({
    userId: user.userId,
    title: trip.title,
    description: trip.description,
    startDate: trip.startDate,
    endDate: trip.endDate,
    duration: trip.duration,
    isPublic: trip.isPublic,
    accommodationPriceLevel: trip.accommodationPriceLevel,
    restaurantPriceLevel: trip.restaurantPriceLevel,
    trip_Locations: trip.location,
    accommodationCategories: accommodationOption.categories,
    restaurantCategories: restaurantOption.categories,
    touristAttractionCategories: touristAttractionOption.categories,
  });

  const handleChangeDate = (ranges) => {
    setDate(ranges.selection);
  };

  const handleChildClick = (e) => {
    e.stopPropagation();
  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleChangeRestaurantPriceLevel = (e) => {
    setRestaurantPriceLevel(e.target.value);
  };

  const handleChangeAccommodationPriceLevel = (e) => {
    setAccommodationPriceLevel(e.target.value);
  };

  const handleChangeIsPublic = (e) => {
    setIsPublic(Boolean(+e.target.value));
  };

  const handleSubmit = async () => {
    console.log(updateData);
    const response = await updateTripById(trip.tripId, updateData);
    if (response) {
      if (response.isSuccess) {
        setIsShow(true);
        setAlertData({
          message: response.message,
          textColor: 'text-white',
          backGroundColor: 'bg-primary-color',
        });
      } else {
        setIsShow(true);
        setAlertData({
          message: response.message,
          textColor: 'text-[#f08c00]',
          backGroundColor: 'bg-[#ffe066]',
        });
      }
      setIsPopupEdit(false);
      handleIsAction();
    }
  };

  const handleSearchModeChange = (e) => {
    const selectedOption = e.target.selectedOptions[0];

    setSearchLocation((prevState) => ({
      ...prevState,
      typeNum: +e.target.value,
      property: selectedOption.getAttribute('property'),
      type: selectedOption.getAttribute('type'),
    }));
  };

  const handleChooseLocation = (e) => {
    const newLocation = {
      regionId:
        e.target.closest('div#clickme').getAttribute('regionId') !== null
          ? +e.target.closest('div#clickme').getAttribute('regionId')
          : null,
      prefectureId:
        e.target.closest('div#clickme').getAttribute('prefectureId') !== null
          ? +e.target.closest('div#clickme').getAttribute('prefectureId')
          : null,
      cityId:
        e.target.closest('div#clickme').getAttribute('cityId') !== null
          ? +e.target.closest('div#clickme').getAttribute('cityId')
          : null,
      locationName: e.target.closest('div#clickme').getAttribute('name'),
    };

    const isLocationExist = location.some(
      (loc) =>
        loc.regionId === newLocation.regionId &&
        loc.prefectureId === newLocation.prefectureId &&
        loc.cityId === newLocation.cityId
    );

    if (!isLocationExist) {
      setLocation((prevState) => [...prevState, newLocation]);
    }
  };

  useEffect(() => {
    setDuration((date.endDate - date.startDate) / millisecondsInADay + 1);
  }, [date]);

  useEffect(() => {
    async function fetchData() {
      const response = await getSearchResult(searchLocation);
      if (!Array.isArray(response) || searchLocation.value === '') {
        setSearchResult([]);
        return;
      }
      if (response) setSearchResult(response);
    }
    fetchData();
  }, [searchLocation]);

  //Lấy và lọc categories - START
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

  const handleSearchAccCategories = (e) => {
    setSearchAccCategories(e.target.value);
  };

  const handleSearchResCategories = (e) => {
    setSearchResCategories(e.target.value);
  };

  const handleSearchTACategories = (e) => {
    setSearchTACategories(e.target.value);
  };

  const filteredAccCategories = accommodationCategories?.filter((category) =>
    category.accommodationCategoryName
      .toLowerCase()
      .includes(searchAccCategories.toLowerCase())
  );

  const filteredResCategories = restaurantCategories?.filter((category) =>
    category.restaurantCategoryName
      .toLowerCase()
      .includes(searchResCategories.toLowerCase())
  );

  const filteredTACategories = touristAttractionCategories?.filter((category) =>
    category.touristAttractionCategoryName
      .toLowerCase()
      .includes(searchTACategories.toLowerCase())
  );
  //Lấy và lọc categories - END

  useEffect(() => {
    setUpdateData((prevState) => ({
      ...prevState,
      title: title,
      description: description,
      startDate: date.startDate,
      endDate: date.endDate,
      duration: duration,
      isPublic: isPublic,
      accommodationPriceLevel: accommodationPriceLevel,
      restaurantPriceLevel: restaurantPriceLevel,
      trip_Locations: location,
      accommodationCategories: accommodationOption.categories,
      restaurantCategories: restaurantOption.categories,
      touristAttractionCategories: touristAttractionOption.categories,
    }));
  }, [
    title,
    description,
    isPublic,
    accommodationPriceLevel,
    restaurantPriceLevel,
    location,
    date,
    duration,
    accommodationOption,
    restaurantOption,
    touristAttractionOption,
  ]);

  return (
    <>
      {isLocationPopup && (
        <>
          <div
            onClick={() => setIsLocationPopup(false)}
            className="fixed inset-x-0 z-[45] h-screen w-full bg-[#03121A] opacity-50"
          />
          <LocationPopup location={location} setLocation={setLocation} />
        </>
      )}
      <div
        onClick={() => setIsPopupEdit(false)}
        className="fixed z-40 flex h-full w-full items-center justify-center"
      >
        <div
          onClick={handleChildClick}
          className="no-scrollbar relative mb-14 flex max-h-[550px] w-[75%] flex-col gap-5 overflow-y-scroll rounded-xl bg-bg-color px-7 py-8"
        >
          <div
            onClick={() => setIsPopupEdit(false)}
            className="absolute right-3 top-3 z-[99] cursor-pointer rounded-bl-lg rounded-tr-lg bg-secondary-color p-1 text-bg-color"
          >
            <CloseIcon />
          </div>
          <div className="text-2xl font-bold">Thông tin chuyến đi</div>
          <div className="flex flex-col gap-2">
            <label className="text-lg font-semibold">Tên chuyến đi</label>
            <input
              onChange={handleChangeTitle}
              value={title !== null ? title : trip.title}
              type="text"
              className="rounded-lg bg-bg-color p-2 outline-none ring-[1px] focus:ring-[2px] focus:ring-accent-color"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-lg font-semibold">Điểm đến</label>
            <div
              onClick={() => setIsLocationPopup(true)}
              className="w-fit cursor-pointer hover:font-semibold hover:underline hover:underline-offset-2"
            >
              Thành phố Sapporo, thành phố Funabashi, thành phố Oita, và 5 điểm
              đến khác
            </div>
            <div className="flex gap-2">
              <select
                onChange={handleSearchModeChange}
                className="w-[20%] rounded-lg bg-bg-color p-2 outline-none ring-[1px] focus:ring-[2px] focus:ring-accent-color"
              >
                {locationTypeData.map((item) => (
                  <option
                    value={item.typeNum}
                    property={item.property}
                    type={item.type}
                    selected={item.locationName === 'Thành phố'}
                  >
                    <div>{item.locationName}</div>
                  </option>
                ))}
              </select>
              <div className="relative w-[80%]">
                <SearchLocationBar setSearchLocation={setSearchLocation} />
                {searchResult.length !== 0 && (
                  <SearchResult
                    searchResult={searchResult}
                    searchLocation={searchLocation}
                    handleChooseLocation={handleChooseLocation}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-lg font-semibold">
              Thời gian: {duration} ngày
            </label>
            <div className="flex justify-center">
              <Calendar date={date} handleChangeDate={handleChangeDate} />
            </div>
          </div>
          <div className="flex justify-between gap-10">
            <div className="flex w-1/2 flex-col gap-2">
              <label className="text-lg font-semibold">
                Nhu cầu mức giá nơi ở
              </label>
              <select
                onChange={handleChangeAccommodationPriceLevel}
                className="rounded-lg bg-bg-color p-2 outline-none ring-[1px] focus:ring-[2px] focus:ring-accent-color"
              >
                {priceLevelData.map((item) => (
                  <option
                    value={item.text}
                    selected={trip.accommodationPriceLevel === item.text}
                  >
                    <div>{item.text}</div>
                  </option>
                ))}
              </select>
            </div>

            <div className="flex w-1/2 flex-col gap-2">
              <label className="text-lg font-semibold">
                Nhu cầu mức giá nhà hàng
              </label>
              <select
                onChange={handleChangeRestaurantPriceLevel}
                className="rounded-lg bg-bg-color p-2 outline-none ring-[1px] focus:ring-[2px] focus:ring-accent-color"
              >
                {priceLevelData.map((item) => (
                  <option
                    value={item.text}
                    selected={trip.restaurantPriceLevel === item.text}
                  >
                    <div>{item.text}</div>
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex gap-10">
            <div className="flex w-full flex-col gap-3">
              <label className="text-lg font-semibold">Tiện ích về chỗ ở</label>
              <div className="flex h-fit items-start bg-bg-color">
                <input
                  onChange={handleSearchAccCategories}
                  type="text"
                  placeholder="Tìm tiện ích"
                  className="flex-1 select-none rounded-lg bg-bg-color px-4 py-2 outline-none ring-[1px] focus:ring-[2px] focus:ring-accent-color"
                />
              </div>
              <div className="no-scrollbar relative flex h-[380px] flex-wrap items-start justify-start gap-5 overflow-y-scroll rounded-xl bg-bg-color p-5 ring-[1px] ring-accent-color">
                {filteredAccCategories.map((data) => (
                  <CategoryRectangle
                    id={data.accommodationCategoryId}
                    text={data.accommodationCategoryName}
                    setAccommodationOption={setAccommodationOption}
                    accommodationOption={accommodationOption}
                    mode={3}
                  />
                ))}
              </div>
            </div>
            <div className="flex w-full flex-col gap-3">
              <label className="text-lg font-semibold">
                Ẩm thực, kiểu nhà hàng
              </label>
              <div className="flex h-fit items-start bg-bg-color">
                <input
                  onChange={handleSearchResCategories}
                  type="text"
                  placeholder="Tìm kiểu nhà hàng"
                  className="flex-1 select-none rounded-lg bg-bg-color px-4 py-2 outline-none ring-[1px] focus:ring-[2px] focus:ring-accent-color"
                />
              </div>
              <div className="no-scrollbar relative flex h-[380px] flex-wrap items-start justify-start gap-5 overflow-y-scroll rounded-xl bg-bg-color p-5 ring-[1px] ring-accent-color">
                {filteredResCategories.map((data) => (
                  <CategoryRectangle
                    id={data.restaurantCategoryId}
                    text={data.restaurantCategoryName}
                    setRestaurantOption={setRestaurantOption}
                    restaurantOption={restaurantOption}
                    mode={4}
                  />
                ))}
              </div>
            </div>
            <div className="flex w-full flex-col gap-3">
              <label className="text-lg font-semibold">
                Kiểu hoạt động giải trí
              </label>
              <div className="flex h-fit items-start bg-bg-color">
                <input
                  onChange={handleSearchTACategories}
                  type="text"
                  placeholder="Tìm kiểu hoạt động giải trí"
                  className="flex-1 select-none rounded-lg bg-bg-color px-4 py-2 outline-none ring-[1px] focus:ring-[2px] focus:ring-accent-color"
                />
              </div>
              <div className="no-scrollbar relative flex h-[380px] flex-wrap items-start justify-start gap-5 overflow-y-scroll rounded-xl bg-bg-color p-5 ring-[1px] ring-accent-color">
                {filteredTACategories.map((data) => (
                  <CategoryRectangle
                    id={data.touristAttractionCategoryId}
                    text={data.touristAttractionCategoryName}
                    setTouristAttractionOption={setTouristAttractionOption}
                    touristAttractionOption={touristAttractionOption}
                    mode={5}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-lg font-semibold">Mô tả chuyến đi</label>
            <textarea
              onChange={handleChangeDescription}
              value={description !== null ? description : trip.description}
              type="text"
              className="rounded-lg bg-bg-color p-2 outline-none ring-[1px] focus:ring-[2px] focus:ring-accent-color"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-lg font-semibold">Chia sẻ</label>
            <div className="flex items-center gap-3">
              <input
                id="public"
                name="visibility"
                type="radio"
                value={1}
                className="bg-accent-color"
                checked={
                  isPublic !== null ? isPublic === true : trip.isPublic === true
                }
                onChange={handleChangeIsPublic}
              />
              <label
                for="public"
                className="flex h-full flex-col justify-start font-semibold"
              >
                <p>Công khai</p>
                <p>Mọi có thể thấy thông tin chuyến đi của bạn</p>
              </label>
            </div>
            <div className="flex items-center gap-3">
              <input
                id="private"
                name="visibility"
                type="radio"
                value={0}
                className="bg-accent-color"
                checked={
                  isPublic !== null
                    ? isPublic === false
                    : trip.isPublic === false
                }
                onChange={handleChangeIsPublic}
              />
              <label
                for="private"
                className="flex h-full flex-col justify-start font-semibold"
              >
                <p>Riêng tư</p>
                <p>Chỉ mình bạn thấy thông tin chuyến đi</p>
              </label>
            </div>
          </div>
          <div className="flex justify-center">
            <div
              onClick={handleSubmit}
              className="cursor-pointer rounded-lg bg-accent-color bg-opacity-75 px-5 py-2 text-[20px] font-semibold text-white"
            >
              Lưu
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditTripPopup;
