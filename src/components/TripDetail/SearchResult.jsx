import React from 'react';

const SearchResult = ({
  searchResult,
  searchLocation,
  handleChooseLocation,
}) => {
  return (
    <div className="no-scrollbar absolute top-[45px] z-50 max-h-[300px] w-full overflow-y-scroll rounded-lg rounded-b-xl bg-bg-color ring-[1px] ring-accent-color">
      {searchResult?.map((item) => (
        <div
          id="clickme"
          onClick={handleChooseLocation}
          regionId={item?.regionId ? item?.regionId : null}
          prefectureId={item?.prefectureId ? item?.prefectureId : null}
          cityId={item?.cityId ? item?.cityId : null}
          name={
            searchLocation.typeNum === 1
              ? `Vùng ${item?.regionName}`
              : searchLocation.typeNum === 2
                ? `Tỉnh ${item?.prefectureName}`
                : searchLocation.typeNum === 3
                  ? `Thành phố ${item?.cityName}`
                  : ''
          }
          className="flex w-full cursor-pointer items-center gap-5 px-5 py-1 text-text-color hover:bg-text-color hover:bg-opacity-5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.3"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>
          <div className="flex flex-col items-start">
            {searchLocation.typeNum === 1 && (
              <>
                <div className="text-[16px] font-bold">
                  Vùng {item?.regionName}
                </div>
              </>
            )}
            {searchLocation.typeNum === 2 && (
              <>
                <div className="text-[16px] font-bold">
                  Tỉnh {item?.prefectureName}
                </div>
                <div className="text-[14px] font-medium">
                  Vùng {item?.regionName}
                </div>
              </>
            )}
            {searchLocation.typeNum === 3 && (
              <>
                <div className="text-[16px] font-bold">
                  Thành phố {item?.cityName}
                </div>
                <div className="text-[14px] font-medium">
                  Tỉnh {item?.prefectureName}
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResult;
