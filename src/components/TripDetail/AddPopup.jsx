import React, { useEffect, useState } from 'react';
import CloseIcon from '../Auth/Icons/CloseIcon';
import { getSearchResult } from '../../api/services/search';
import SearchPlaceResult from './SearchPlaceResult';
import { useSearchParams } from 'react-router-dom';

const placeTypeData = [
  { typeNum: 1, name: 'Nơi ở' },
  { typeNum: 2, name: 'Nhà hàng' },
  { typeNum: 3, name: 'Địa điểm giải trí' },
];

const AddPopup = ({
  dayNum,
  setIsAddPopup,
  trip,
  handleIsAction,
  tripDays,
}) => {
  const [dayChoose, setDayChoose] = useState(dayNum);
  const [searchData, setSearchData] = useState({
    value: '',
    type: 'Accommodations',
    property: 'AccommodationName',
  });
  const [searchResult, setSearchResult] = useState([]);

  const handleSearchPlace = (e) => {
    setSearchData((prevState) => ({
      ...prevState,
      value: e.target.value,
    }));
  };

  const handleChangeDay = (e) => {
    setDayChoose(+e.target.value);
  };

  const handleChooseMode = (e) => {
    let mode = { type: '', property: '' };
    if (+e.target.value === 1) {
      mode = { type: 'Accommodations', property: 'AccommodationName' };
    } else if (+e.target.value === 2) {
      mode = { type: 'Restaurants', property: 'RestaurantName' };
    } else if (+e.target.value === 3) {
      mode = { type: 'TouristAttractions', property: 'TouristAttractionName' };
    }
    setSearchData((prevState) => ({
      ...prevState,
      ...mode,
    }));
  };

  const handleChildClick = (e) => {
    e.stopPropagation();
  };

  useEffect(() => {
    async function fetchData() {
      const response = await getSearchResult(searchData);
      if (!Array.isArray(response) || searchData.value === '') {
        setSearchResult([]);
        return;
      }
      if (response) setSearchResult(response);
    }
    fetchData();
  }, [searchData]);

  return (
    <div
      onClick={() => setIsAddPopup(false)}
      className="fixed z-40 flex h-full w-full items-center justify-center"
    >
      <div
        onClick={handleChildClick}
        className="no-scrollbar relative mb-14 flex h-[550px] w-[60%] flex-col gap-7 overflow-y-scroll rounded-xl bg-bg-secondary-color px-7 py-10"
      >
        <div
          onClick={() => setIsAddPopup(false)}
          className="absolute right-3 top-3 z-[99] cursor-pointer rounded-bl-lg rounded-tr-lg bg-secondary-color p-1 text-bg-color"
        >
          <CloseIcon />
        </div>
        <div className="flex items-center justify-start gap-7">
          <div className="text-2xl font-bold">Thêm địa điểm mới</div>
          <select
            disabled={searchData.type === 'Accommodations'}
            onChange={handleChangeDay}
            className="h-full rounded-lg bg-bg-color p-2 text-sm outline-none ring-[1px] ring-secondary-color focus:ring-[2px] focus:ring-secondary-color"
          >
            {tripDays.map((item) => (
              <option value={item.dayNum} selected={item.dayNum === dayNum}>
                <div>Ngày {item.dayNum}</div>
              </option>
            ))}
          </select>
        </div>

        <div className="flex w-full flex-col gap-7 px-8">
          <div className="flex w-full items-center justify-center gap-3 rounded-lg">
            <select
              onChange={handleChooseMode}
              className="h-full rounded-lg bg-bg-color p-3 outline-none ring-[1px] ring-secondary-color focus:ring-[2px] focus:ring-secondary-color"
            >
              {placeTypeData.map((item) => (
                <option value={item.typeNum} selected={item.typeNum === 1}>
                  <div>{item.name}</div>
                </option>
              ))}
            </select>
            <div className="flex w-full items-center justify-center rounded-lg bg-secondary-color">
              <input
                onChange={handleSearchPlace}
                placeholder="Tìm kiếm địa điểm"
                id="search-input"
                type="text"
                className="w-full rounded-lg bg-transparent p-3 text-text-color outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col">
            {searchResult.map((data) => (
              <SearchPlaceResult
                data={data}
                trip={trip}
                handleIsAction={handleIsAction}
                dayChoose={dayChoose}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPopup;
