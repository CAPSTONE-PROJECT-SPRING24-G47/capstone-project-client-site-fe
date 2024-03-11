import React from 'react';
// ${goingWithOption.typeNum === index ? 'opacity-[100%]' : 'opacity-[50%]'}
const PriceLevelRectangle = ({
  text,
  index,
  price,
  setAccommodationOption,
  accommodationOption,
  setRestaurantOption,
  restaurantOption,
  mode,
}) => {
  const optionObj = restaurantOption || accommodationOption;

  const handleSelect = () => {
    if (mode === 5) {
      setAccommodationOption((prevState) => ({
        ...prevState,
        priceLevelNum: index,
        priceLevel: text,
      }));
    } else if (mode === 6) {
      setRestaurantOption((prevState) => ({
        ...prevState,
        priceLevelNum: index,
        priceLevel: text,
      }));
    }
  };

  return (
    <div
      onClick={handleSelect}
      className={`cursor-pointer select-none rounded-xl bg-bg-color p-6 text-[28px] font-semibold ${optionObj.priceLevelNum === index ? 'opacity-[100%]' : 'opacity-[65%]'}`}
    >
      <p>{text}</p>
      <p className="text-base font-normal">{price}</p>
    </div>
  );
};

export default PriceLevelRectangle;
