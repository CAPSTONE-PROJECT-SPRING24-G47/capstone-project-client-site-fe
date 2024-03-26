export const isDiffirent = (trip, updateTrip) => {
  const isAccommodationCategoriesDiff = arraysEqual(
    trip.accommodationCategories.length !== 0
      ? trip.accommodationCategories
          .split(',')
          .map((category) => parseInt(category))
      : [],
    updateTrip.accommodationCategories
  );

  const isRestaurantCategoriesDiff = arraysEqual(
    trip.restaurantCategories.length !== 0
      ? trip.restaurantCategories
          .split(',')
          .map((category) => parseInt(category))
      : [],
    updateTrip.restaurantCategories
  );
  const isTouristAttractionCategoriesDiff = arraysEqual(
    trip.touristAttractionCategories.length !== 0
      ? trip.touristAttractionCategories
          .split(',')
          .map((category) => parseInt(category))
      : [],
    updateTrip.touristAttractionCategories
  );

  const isAccommodationPriceLevelDiff =
    trip.accommodationPriceLevel === updateTrip.accommodationPriceLevel;
  const isRestaurantPriceLevelDiff =
    trip.restaurantPriceLevel === updateTrip.restaurantPriceLevel;
  const isTitleDiff = trip.title === updateTrip.title;
  const isDescriptionDiff = trip.description === updateTrip.description;
  const isDurationDiff = trip.duration === updateTrip.duration;
  const isStartDateDiff =
    new Date(updateTrip.startDate).getDate() ===
    new Date(trip.startDate).getDate();
  const isEndDateDiff =
    new Date(updateTrip.endDate).getDate() === new Date(trip.endDate).getDate();
  const isPublicDiff = trip.isPublic === updateTrip.isPublic;

  const isDiff =
    isAccommodationCategoriesDiff &&
    isRestaurantCategoriesDiff &&
    isTouristAttractionCategoriesDiff &&
    isAccommodationPriceLevelDiff &&
    isRestaurantPriceLevelDiff &&
    isTitleDiff &&
    isDescriptionDiff &&
    isDurationDiff &&
    isStartDateDiff &&
    isEndDateDiff &&
    isPublicDiff;

  console.log({
    isAccommodationCategoriesDiff,
    isRestaurantCategoriesDiff,
    isTouristAttractionCategoriesDiff,
    isAccommodationPriceLevelDiff,
    isRestaurantPriceLevelDiff,
    isTitleDiff,
    isDescriptionDiff,
    isDurationDiff,
    isStartDateDiff,
    isEndDateDiff,
    isPublicDiff,
  });

  return !isDiff;
};

function arraysEqual(arr1, arr2) {
  let c = 0;
  if (arr1.length != arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    for (let x = 0; x < arr2.length; x++)
      if (arr1[i] == arr2[x]) {
        c++;
      }
  }
  if (c != arr1.length) {
    return false;
  }
  return true;
}
