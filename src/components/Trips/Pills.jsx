import React from 'react';

const Pills = ({ text, handleRemoveLocation, location }) => {
  return (
    <span className="flex items-center justify-center gap-2 rounded-full bg-secondary-color px-3 py-1 text-[15px]">
      <p>{text}</p>
      <span
        regionId={location?.regionId ? location?.regionId : null}
        prefectureId={location?.prefectureId ? location?.prefectureId : null}
        cityId={location?.cityId ? location?.cityId : null}
        onClick={handleRemoveLocation}
        className="cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="h-5 w-5"
        >
          <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
        </svg>
      </span>
    </span>
  );
};

export default Pills;
