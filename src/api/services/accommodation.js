import {
  createAccommodationComment,
  deleteAccommodationComment,
  getAccommodation,
  getAccommodationCategories,
  getAccommodationCategoryDetail,
  getAccommodationComment,
  getAccommodationComments,
  getAccommodations,
  updateAccommodationComment,
} from '..';

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

export const getListAccommodation = async () => {
  try {
    const res = await getAccommodations();
    return res.data;
  } catch (error) {
    console.error(
      'Get accommodation failed:',
      error.response ? error.response.data : error.message
    );
  }
};

export const getAccommodationDetail = async (id) => {
  try {
    const res = await getAccommodation(id);
    return res.data;
  } catch (error) {
    console.error(
      'Get accommodation failed:',
      error.response ? error.response.data : error.message
    );
  }
};

export const getListAccommodationCategoryDetail = async (id) => {
  try {
    const res = await getAccommodationCategoryDetail(id);
    return res.data;
  } catch (error) {
    console.error(
      'Get restaurant category failed:',
      error.response ? error.response.data : error.message
    );
  }
};

export const getListAccommodationComment = async (id) => {
  try {
    const res = await getAccommodationComments(id);
    return res.data;
  } catch (error) {
    console.error(
      'Get accommodation comment failed:',
      error.response ? error.response.data : error.message
    );
  }
};

export const addAccommodationComment = async (data) => {
  try {
    const res = await createAccommodationComment(data);

    return res.data;
  } catch (error) {
    console.error(
      'Add Accommodation failed:',
      error.response ? error.response.data : error.message
    );
  }
};

export const deleteAccommodationCommentDetail = async (id) => {
  try {
    const res = await deleteAccommodationComment(id);
    return res.data;
  } catch (error) {
    console.error(
      'Get restaurant failed:',
      error.response ? error.response.data : error.message
    );
  }
};

export const updateAccommodationCommentDetail = async (id, data) => {
  try {
    const res = await updateAccommodationComment(id, data);

    return res.data;
  } catch (error) {
    console.error(
      'Update Accommodation failed:',
      error.response ? error.response.data : error.message
    );
  }
};

export const getAccommodationCommentDetail = async (id) => {
  try {
    const res = await getAccommodationComment(id);
    return res.data;
  } catch (error) {
    console.error(
      'Get Accommodation comment failed:',
      error.response ? error.response.data : error.message
    );
  }
};
