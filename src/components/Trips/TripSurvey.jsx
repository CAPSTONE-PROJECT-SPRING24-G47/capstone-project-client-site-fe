import React, { useEffect, useState } from 'react';
import autoImage from '../../assets/trip_builder_auto.jpg';
import { motion } from 'framer-motion';
import TripSurveySearchBar from './TripSurveySearchBar';
import PrevArrowIcon from './Icons/PrevArrowIcon';
import NextArrowIcon from './Icons/NextArrowIcon';
import Calendar from './Calendar';
import BudgetInput from './BudgetInput';
import Rectangle from './Rectangle';
import PriceLevelRectangle from './PriceLevelRectangle';
import CategoryRectangle from './CategoryRectangle';
import ErrorPopup from './ErrorPopup';
import { getSearchResult } from '../../api/services/search';
import SearchResult from './SearchResult';

const searchMode = [
  { typeNum: 1, name: 'Vùng', property: 'RegionName', type: 'Regions' },
  { typeNum: 2, name: 'Tỉnh', property: 'PrefectureName', type: 'Prefectures' },
  { typeNum: 3, name: 'Thành phố', property: 'CityName', type: 'Cities' },
];
const goingWithData = ['Một mình', 'Người yêu', 'Gia đình', 'Bạn bè'];
const priceLevelData = [
  { text: 'Giá thấp', price: '2.000.000VND/người đổ xuống' },
  { text: 'Trung bình', price: '2.000.000VND - 4.000.000VND/người' },
  { text: 'Giá cao', price: '4.000.000VND/người đổ lên' },
];

const TripSurvey = ({
  title,
  progress,
  setProgress,
  setLocation,
  date,
  duration,
  handleChangeDate,
  budget,
  setBudget,
  goingWithOption,
  setGoingWithOption,
  setIsChildrenVisible,
  isChildrenVisible,
  accommodationOption,
  setAccommodationOption,
  accommodationCategories,
  restaurantOption,
  setRestaurantOption,
  restaurantCategories,
  touristAttractionOption,
  setTouristAttractionOption,
  touristAttractionCategories,
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const [searchLocation, setSearchLocation] = useState({
    typeNum: 3,
    name: 'Thành phố',
    property: 'CityName',
    type: 'Cities',
    value: '',
  });
  const [searchResult, setSearchResult] = useState([]);
  const [error, setError] = useState({ isError: false, type: 0, message: '' });
  //for 5
  const [searchAccCategories, setSearchAccCategories] = useState('');
  const [searchResCategories, setSearchResCategories] = useState('');
  const [searchTACategories, setSearchTACategories] = useState('');

  const handleChooseLocation = (e) => {
    setLocation((prevState) => ({
      ...prevState,
      regionId: +e.target.getAttribute('regionId'),
      prefectureId: +e.target.getAttribute('prefectureId'),
      cityId: +e.target.getAttribute('cityId'),
      name: e.target.getAttribute('name'),
    }));
    if (!error.isError) setProgress((state) => ++state);
  };

  const handleSearchModeChange = (e) => {
    setSearchLocation((prevState) => ({
      ...prevState,
      typeNum: +e.target.id,
      property: e.target.getAttribute('property'),
      type: e.target.getAttribute('type'),
    }));
  };
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
    category.touristAttactionCategoryName
      .toLowerCase()
      .includes(searchTACategories.toLowerCase())
  );

  //for 4
  const handleSelectChildren = (e) => {
    setGoingWithOption((prevState) => ({
      ...prevState,
      isChildren: +e.target.id ? true : false,
    }));
  };

  useEffect(() => {
    if (duration > 10) {
      setError((prevState) => ({
        ...prevState,
        type: 2,
        isError: true,
        message: 'Khoảng thời gian tối đa cho một chuyến hành trình là 10 ngày',
      }));
    } else {
      setError((prevState) => ({
        ...prevState,
        type: 0,
        isError: false,
        message: '',
      }));
    }
  }, [duration]);

  useEffect(() => {
    if (budget?.minPrice > budget?.maxPrice) {
      setError((prevState) => ({
        ...prevState,
        type: 3,
        isError: true,
        message: 'Giá tối thiểu không được lớn hơn giá tối đa',
      }));
    } else if (budget?.minPrice === 0 || budget?.maxPrice === 0) {
      setError((prevState) => ({
        ...prevState,
        type: 3,
        isError: true,
        message: 'Ngân sách phải lớn hơn 0',
      }));
    } else {
      setError((prevState) => ({
        ...prevState,
        type: 0,
        isError: false,
        message: '',
      }));
    }
  }, [budget]);

  useEffect(() => {
    if (accommodationOption?.categories.length < 2) {
      setError((prevState) => ({
        ...prevState,
        type: 5,
        isError: true,
        message: 'Chọn tối thiểu 2 tiện ích',
      }));
    } else {
      setError((prevState) => ({
        ...prevState,
        type: 0,
        isError: false,
        message: '',
      }));
    }
  }, [accommodationOption]);

  useEffect(() => {
    if (restaurantOption?.categories.length < 2) {
      setError((prevState) => ({
        ...prevState,
        type: 6,
        isError: true,
        message: 'Chọn tối thiểu 2 danh mục',
      }));
    } else {
      setError((prevState) => ({
        ...prevState,
        type: 0,
        isError: false,
        message: '',
      }));
    }
  }, [restaurantOption]);

  useEffect(() => {
    if (touristAttractionOption?.categories.length < 2) {
      setError((prevState) => ({
        ...prevState,
        type: 7,
        isError: true,
        message: 'Chọn tối thiểu 2 danh mục',
      }));
    } else {
      setError((prevState) => ({
        ...prevState,
        type: 0,
        isError: false,
        message: '',
      }));
    }
  }, [touristAttractionOption]);

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
  }, [searchLocation, isFocus]);

  return (
    <div className="relative h-full w-full overflow-hidden rounded-t-3xl text-white">
      <img
        src={autoImage}
        alt="autoImage"
        className="absolute h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[#03121A] opacity-[50%]" />
      {error.isError && error.type === 2 && (
        <ErrorPopup
          text={error.message}
          type={error.type}
          duration={duration}
        />
      )}
      {error.isError && error.type === 3 && <ErrorPopup text={error.message} />}
      {error.isError && error.type === 5 && <ErrorPopup text={error.message} />}
      {error.isError && error.type === 6 && <ErrorPopup text={error.message} />}
      {error.isError && error.type === 7 && <ErrorPopup text={error.message} />}
      <div className="absolute inset-x-0 top-[7%] flex flex-col items-center justify-center gap-10 text-center">
        <motion.div
          initial={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.3, type: 'spring', stiffness: 120 }}
          viewport={{ once: true }}
          className="text-[40px] font-bold uppercase tracking-wide"
        >
          {title}
        </motion.div>
        {progress === 1 && (
          <motion.div
            initial={{ translateY: -20 }}
            animate={{ translateY: 0 }}
            transition={{ duration: 0.1, type: 'spring', stiffness: 120 }}
            viewport={{ once: true }}
            className="flex w-full flex-col items-center justify-center gap-7"
          >
            <div className="flex items-center justify-center gap-24 text-lg">
              {searchMode.map((item) => (
                <label
                  onClick={handleSearchModeChange}
                  key={item.typeNum}
                  id={item.typeNum}
                  className={`w-[150px] cursor-pointer select-none rounded-lg bg-bg-color px-2 py-1 font-medium text-text-color ${searchLocation.typeNum === item.typeNum ? 'opacity-100' : 'opacity-70'}`}
                  for="search-input"
                  property={item.property}
                  type={item.type}
                >
                  {item.name}
                </label>
              ))}
            </div>
            <div className="flex w-full flex-col items-center">
              <TripSurveySearchBar
                searchLocation={searchLocation}
                setSearchLocation={setSearchLocation}
                searchResult={searchResult}
                isFocus={isFocus}
                setIsFocus={setIsFocus}
              />
              {searchResult.length !== 0 && (
                <SearchResult
                  searchResult={searchResult}
                  searchLocation={searchLocation}
                  handleChooseLocation={handleChooseLocation}
                />
              )}
            </div>
          </motion.div>
        )}
        {progress === 2 && (
          <>
            <Calendar date={date} handleChangeDate={handleChangeDate} />
          </>
        )}
        {progress === 3 && (
          <motion.div
            initial={{ opacity: 0, translateY: -20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.1, type: 'spring', stiffness: 120 }}
            viewport={{ once: true }}
            className="flex w-full flex-col items-center justify-center gap-5 text-text-color"
          >
            <div className="text-[25px] font-semibold text-bg-color">
              Nhập khoảng chi phí cho ngân sách của bạn
            </div>
            <div className="flex w-full justify-center gap-10">
              <BudgetInput
                placeholder={'Giá thấp nhất'}
                setBudget={setBudget}
                budget={budget}
                type={'min'}
              />
              <BudgetInput
                placeholder={'Giá cao nhất'}
                setBudget={setBudget}
                budget={budget}
                type={'max'}
              />
            </div>
          </motion.div>
        )}
        {progress === 4 && (
          <motion.div
            initial={{ opacity: 0, translateY: -20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.1, type: 'spring', stiffness: 120 }}
            viewport={{ once: true }}
            className="flex w-full flex-col items-center justify-center gap-10 text-text-color"
          >
            <div className="grid w-fit grid-cols-2 grid-rows-2 gap-x-20 gap-y-10">
              {goingWithData.map((text, index) => (
                <Rectangle
                  key={index}
                  text={text}
                  index={index}
                  goingWithOption={goingWithOption}
                  setGoingWithOption={setGoingWithOption}
                  setIsChildrenVisible={setIsChildrenVisible}
                />
              ))}
            </div>
            {isChildrenVisible && (
              <div className="flex items-center justify-center gap-5 text-[25px] font-semibold text-bg-color">
                <p>Có trẻ em đi cùng bạn không?</p>
                <div className="flex items-center justify-center gap-4">
                  <div
                    onClick={handleSelectChildren}
                    className={`w-[130px] cursor-pointer rounded-full bg-bg-color py-2 text-text-color ${goingWithOption.isChildren ? 'opacity-[100%]' : 'opacity-[50%]'}`}
                    id="1"
                  >
                    Có
                  </div>
                  <div
                    onClick={handleSelectChildren}
                    className={`w-[130px] cursor-pointer rounded-full bg-bg-color py-2 text-text-color ${!goingWithOption.isChildren ? 'opacity-[100%]' : 'opacity-[50%]'}`}
                    id="0"
                  >
                    Không
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        )}
        {progress === 5 && (
          <motion.div
            initial={{ opacity: 0, translateY: -20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.1, type: 'spring', stiffness: 120 }}
            viewport={{ once: true }}
            className="flex w-full items-start justify-center gap-20 text-text-color"
          >
            <div className="flex flex-col gap-5">
              <div className="text-[25px] font-semibold text-bg-color">
                Nhu cầu về mức giá chỗ ở của bạn
              </div>
              <div className="flex flex-col gap-5">
                {priceLevelData.map((data, index) => (
                  <PriceLevelRectangle
                    text={data.text}
                    price={data.price}
                    index={index}
                    mode={5}
                    setAccommodationOption={setAccommodationOption}
                    accommodationOption={accommodationOption}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="text-[25px] font-semibold text-bg-color">
                Tiện ích về nơi ở bạn mong muốn
              </div>
              <div className="relative grid h-[380px] w-[550px] grid-cols-2 items-start justify-center gap-5 overflow-y-scroll rounded-xl bg-bg-color p-5">
                <div className="col-span-2 flex h-full items-start bg-bg-color">
                  <input
                    onChange={handleSearchAccCategories}
                    type="text"
                    placeholder="Tìm tiện ích"
                    className="flex-1 select-none rounded-xl bg-bg-color px-4 py-2 outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
                {filteredAccCategories.map((data) => (
                  <CategoryRectangle
                    id={data.accommodationCategoryId}
                    text={data.accommodationCategoryName}
                    setAccommodationOption={setAccommodationOption}
                    accommodationOption={accommodationOption}
                    mode={5}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
        {progress === 6 && (
          <motion.div
            initial={{ opacity: 0, translateY: -20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.1, type: 'spring', stiffness: 120 }}
            viewport={{ once: true }}
            className="flex w-full items-start justify-center gap-20 text-text-color"
          >
            <div className="flex flex-col gap-5">
              <div className="text-[25px] font-semibold text-bg-color">
                Nhu cầu về mức giá nhà hàng của bạn
              </div>
              <div className="flex flex-col gap-5">
                {priceLevelData.map((data, index) => (
                  <PriceLevelRectangle
                    text={data.text}
                    price={data.price}
                    index={index}
                    mode={6}
                    setRestaurantOption={setRestaurantOption}
                    restaurantOption={restaurantOption}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="text-[25px] font-semibold text-bg-color">
                Ẩm thực, kiểu nhà hàng bạn mong muốn
              </div>
              <div className="relative grid h-[380px] w-[550px] grid-cols-2 items-start justify-center gap-5 overflow-y-scroll rounded-xl bg-bg-color p-5">
                <div className="col-span-2 flex h-full items-start bg-bg-color">
                  <input
                    onChange={handleSearchResCategories}
                    type="text"
                    placeholder="Tìm ẩm thực, kiểu nhà hàng"
                    className="flex-1 select-none rounded-xl bg-bg-color px-4 py-2 outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
                {filteredResCategories.map((data) => (
                  <CategoryRectangle
                    id={data.restaurantCategoryId}
                    text={data.restaurantCategoryName}
                    setRestaurantOption={setRestaurantOption}
                    restaurantOption={restaurantOption}
                    mode={6}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
        {progress === 7 && (
          <motion.div
            initial={{ opacity: 0, translateY: -20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.1, type: 'spring', stiffness: 120 }}
            viewport={{ once: true }}
            className="flex w-full items-start justify-center gap-20 text-text-color"
          >
            <div className="flex flex-col gap-5">
              <div className="text-[25px] font-semibold text-bg-color">
                Những yêu cầu của bạn về địa điểm giải trí
              </div>
              <div className="relative grid h-[380px] w-[550px] grid-cols-2 items-start justify-center gap-5 overflow-y-scroll rounded-xl bg-bg-color p-5">
                <div className="col-span-2 flex h-full items-start bg-bg-color">
                  <input
                    onChange={handleSearchTACategories}
                    type="text"
                    placeholder="Tìm yêu cầu"
                    className="flex-1 select-none rounded-xl bg-bg-color px-4 py-2 outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
                {filteredTACategories.map((data) => (
                  <CategoryRectangle
                    id={data.touristAttractionCategoryId}
                    text={data.touristAttactionCategoryName}
                    touristAttractionOption={touristAttractionOption}
                    setTouristAttractionOption={setTouristAttractionOption}
                    mode={7}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Arrow back, next, submit */}
      {progress !== 1 && (
        <motion.div
          initial={{ opacity: 0.3 }}
          whileHover={{
            opacity: 1,
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            width: '140px',
          }}
          transition={{ duration: 0.1 }}
          onClick={() => {
            if (!error.isError) setProgress((state) => --state);
          }}
          className="absolute inset-y-0 left-0 flex w-fit cursor-pointer select-none items-center justify-center px-4"
        >
          <PrevArrowIcon colorFill={'#FFFFFF'} className={'h-14 w-14'} />
        </motion.div>
      )}

      {progress !== 7 && (
        <motion.div
          initial={{ opacity: 0.3 }}
          whileHover={{
            opacity: 1,
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            width: '140px',
          }}
          transition={{ duration: 0.1 }}
          onClick={() => {
            if (!error.isError) setProgress((state) => ++state);
          }}
          className="absolute inset-y-0 right-0 flex w-fit cursor-pointer select-none items-center justify-center px-4"
        >
          <NextArrowIcon colorFill={'#FFFFFF'} className={'h-14 w-14'} />
        </motion.div>
      )}

      {progress === 7 && (
        <motion.div
          initial={{ opacity: 0.3 }}
          whileHover={{
            opacity: 1,
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            width: '250px',
          }}
          transition={{ duration: 0.1 }}
          onClick={() => {}}
          className="absolute inset-y-0 right-0 flex w-[200px] cursor-pointer select-none items-center justify-center px-4"
        >
          <div className="flex items-center justify-center">
            <p className="text-center text-[30px] font-semibold">
              Tạo chuyến hành trình
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default TripSurvey;
