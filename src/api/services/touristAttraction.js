import {
  createTouristAttractionComment,
  deleteTAComment,
  getTACommentBy2Id,
  getTACommentNumber,
  getTouristAttraction,
  getTouristAttractionCategories,
  getTouristAttractionCategoryDetail,
  getTouristAttractionComment,
  getTouristAttractionComments,
  getTouristAttractions,
  updateTouristAttractionComment,
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

export const getListTouristAttractionComment = async (id, page) => {
  try {
    const res = await getTouristAttractionComments(id, page);
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

export const updateTACommentDetail = async (id, data) => {
  try {
    const res = await updateTouristAttractionComment(id, data);

    return res.data;
  } catch (error) {
    console.error(
      'Add Accommodation failed:',
      error.response ? error.response.data : error.message
    );
  }
};

export const getTACommentDetail = async (id) => {
  try {
    const res = await getTouristAttractionComment(id);
    return res.data;
  } catch (error) {
    console.error(
      'Get TA comment failed:',
      error.response ? error.response.data : error.message
    );
  }
};

export const getTACommentNumberById = async (id) => {
  try {
    const res = await getTACommentNumber(id);
    return res.data;
  } catch (error) {
    console.error(
      'Get TA comment failed:',
      error.response ? error.response.data : error.message
    );
  }
};

//Lấy comment xem user đã đánh giá chưa
export const getTACommentDetailBy2Id = async (data) => {
  try {
    const res = await getTACommentBy2Id(data);
    return res.data;
  } catch (error) {
    console.error(
      'Get TA comment failed:',
      error.response ? error.response.data : error.message
    );
  }
};
