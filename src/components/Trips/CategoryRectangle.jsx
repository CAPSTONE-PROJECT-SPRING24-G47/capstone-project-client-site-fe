import React from 'react';

const CategoryRectangle = ({
  text,
  id,
  setAccommodationOption,
  accommodationOption,
  setRestaurantOption,
  restaurantOption,
  touristAttractionOption,
  setTouristAttractionOption,
  mode,
}) => {
  const optionObj =
    restaurantOption || accommodationOption || touristAttractionOption;

  const handleSelect = () => {
    if (mode === 5) {
      const isSelected = accommodationOption.categories.includes(id);

      if (isSelected) {
        setAccommodationOption((prevState) => ({
          ...prevState,
          categories: prevState.categories.filter(
            (category) => category !== id
          ),
        }));
      } else {
        setAccommodationOption((prevState) => ({
          ...prevState,
          categories: [...prevState.categories, id],
        }));
      }
    } else if (mode === 6) {
      const isSelected = restaurantOption.categories.includes(id);

      if (isSelected) {
        setRestaurantOption((prevState) => ({
          ...prevState,
          categories: prevState.categories.filter(
            (category) => category !== id
          ),
        }));
      } else {
        setRestaurantOption((prevState) => ({
          ...prevState,
          categories: [...prevState.categories, id],
        }));
      }
    } else if (mode === 7) {
      const isSelected = touristAttractionOption.categories.includes(id);

      if (isSelected) {
        setTouristAttractionOption((prevState) => ({
          ...prevState,
          categories: prevState.categories.filter(
            (category) => category !== id
          ),
        }));
      } else {
        setTouristAttractionOption((prevState) => ({
          ...prevState,
          categories: [...prevState.categories, id],
        }));
      }
    }
  };

  return (
    <div
      onClick={handleSelect}
      className={`w-full cursor-pointer select-none rounded-xl  p-3 text-[17px] font-semibold ${optionObj.categories.includes(id) ? 'bg-secondary-color' : 'bg-bg-secondary-color'}`}
    >
      {text}
    </div>
  );
};

export default CategoryRectangle;
