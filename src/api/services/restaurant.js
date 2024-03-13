import { getRestaurantCategories } from '..';

export const getListRestaurantCategories = async () => {
  try {
    const res = await getRestaurantCategories();
    return res.data;
  } catch (error) {
    console.error(
      'Get list restaurant categories failed:',
      error.response ? error.response.data : error.message
    );
  }
};
