import { getAccommodationCategories } from '..';

export const getListAccommodationCategories = async () => {
  try {
    const res = await getAccommodationCategories();
    return res.data;
  } catch (error) {
    console.error(
      'Get list accommodation categories failed:',
      error.response ? error.response.data : error.message
    );
  }
};
