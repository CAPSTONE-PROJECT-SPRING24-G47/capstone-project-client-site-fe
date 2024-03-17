import {
  createTouristAttractionComment,
  deleteTAComment,
  getTouristAttraction,
  getTouristAttractionCategories,
  getTouristAttractionCategoryDetail,
  getTouristAttractionComments,
  getTouristAttractions,
} from '..';

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

export const getListTouristAttractionCategoryDetail = async (id) => {
  try {
    const res = await getTouristAttractionCategoryDetail(id);
    return res.data;
  } catch (error) {
    console.error(
      'Get TouristAttraction category failed:',
      error.response ? error.response.data : error.message
    );
  }
};

export const getListTouristAttraction = async () => {
  try {
    const res = await getTouristAttractions();
    return res.data;
  } catch (error) {
    console.error(
      'Get tourist attraction failed:',
      error.response ? error.response.data : error.message
    );
  }
};

export const getTouristAttractionDetail = async (id) => {
  try {
    const res = await getTouristAttraction(id);
    return res.data;
  } catch (error) {
    console.error(
      'Get tourist attraction failed:',
      error.response ? error.response.data : error.message
    );
  }
};

export const getListTouristAttractionComment = async (id) => {
  try {
    const res = await getTouristAttractionComments(id);
    return res.data;
  } catch (error) {
    console.error(
      'Get TouristAttraction comment failed:',
      error.response ? error.response.data : error.message
    );
  }
};

export const addTouristAttractionComment = async (data) => {
  try {
    const res = await createTouristAttractionComment(data);

    return res.data;
  } catch (error) {
    console.error(
      'Add TouristAttraction failed:',
      error.response ? error.response.data : error.message
    );
  }
};

export const deleteTACommentDetail = async (id) => {
  try {
    const res = await deleteTAComment(id);
    return res.data;
  } catch (error) {
    console.error(
      'Get comment failed:',
      error.response ? error.response.data : error.message
    );
  }
};
