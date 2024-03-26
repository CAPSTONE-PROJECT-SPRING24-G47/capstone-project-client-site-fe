import React from 'react';
import Pills from './Pills';

const LocationPopup = ({ location, setLocation }) => {
  const listRegions = location.filter((item) => item?.name?.includes('Vùng'));
  const listPrefectures = location.filter((item) =>
    item?.name?.includes('Tỉnh')
  );
  const listCities = location.filter((item) =>
    item?.name?.includes('Thành phố')
  );
  console.log(listCities);

  const handleRemoveLocation = (e) => {
    const spanElement = e.target.closest('span');
    const regionId =
      spanElement.getAttribute('regionId') !== null
        ? +spanElement.getAttribute('regionId')
        : null;
    const prefectureId = spanElement.getAttribute('prefectureId')
      ? +spanElement.getAttribute('prefectureId')
      : null;
    const cityId = spanElement.getAttribute('cityId')
      ? +spanElement.getAttribute('cityId')
      : null;

    const updatedLocation = location.filter((item) => {
      return !(
        item.regionId === regionId &&
        item.prefectureId === prefectureId &&
        item.cityId === cityId
      );
    });
    setLocation(updatedLocation);
  };

  return (
    <div className="no-scrollbar fixed inset-x-0 top-[20%] z-50 mx-auto flex max-h-[450px] w-[60%] flex-col gap-4 overflow-y-scroll rounded-xl bg-bg-color px-6 py-4 text-xl font-semibold shadow-md">
      <div className="flex flex-col gap-3">
        <p>Vùng đã chọn</p>
        <div className="flex flex-wrap gap-3 rounded-xl border-[1px] border-secondary-color p-3">
          {listRegions.length !== 0 ? (
            listRegions?.map((item, index) => (
              <Pills
                key={index}
                text={item.name}
                handleRemoveLocation={handleRemoveLocation}
                location={item}
              />
            ))
          ) : (
            <p className="text-[17px] font-normal">
              Không có vùng nào được chọn
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <p>Tỉnh đã chọn</p>
        <div className="flex flex-wrap gap-3 rounded-xl border-[1px] border-secondary-color p-3">
          {listPrefectures.length !== 0 ? (
            listPrefectures?.map((item, index) => (
              <Pills
                key={index}
                text={item.name}
                handleRemoveLocation={handleRemoveLocation}
                location={item}
              />
            ))
          ) : (
            <p className="text-[17px] font-normal">
              Không có tỉnh nào được chọn
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <p>Thành phố đã chọn</p>
        <div className="flex flex-wrap gap-3 rounded-xl border-[1px] border-secondary-color p-3">
          {listCities.length !== 0 ? (
            listCities?.map((item, index) => (
              <Pills
                key={index}
                text={item.name}
                handleRemoveLocation={handleRemoveLocation}
                location={item}
              />
            ))
          ) : (
            <p className="text-[17px] font-normal">
              Không có thành phố nào được chọn
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LocationPopup;
