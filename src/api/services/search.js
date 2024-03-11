import { search } from '..';

export const getSearchResult = async (searchData) => {
  try {
    const res = await search(searchData);
    return res.data;
  } catch (error) {
    console.error(
      'Get search result failed:',
      error.response ? error.response.data : error.message
    );
  }
};
