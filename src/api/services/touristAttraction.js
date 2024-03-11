import { getTouristAttractionCategories } from '..';

export const getListTACategories = async () => {
  try {
    const res = await getTouristAttractionCategories();
    return res.data;
  } catch (error) {
    console.error(
      'Get list tourist attraction categories failed:',
      error.response ? error.response.data : error.message
    );
  }
};
