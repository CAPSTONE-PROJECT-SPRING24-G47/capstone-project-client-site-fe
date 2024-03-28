import {
  createAccommodationComment,
  deleteAccommodationComment,
  getAccommodation,
  getAccommodationCategories,
  getAccommodationCategoryDetail,
  getAccommodationComment,
  getAccommodationCommentBy2Id,
  getAccommodationCommentNumber,
  getAccommodationComments,
  getAccommodations,
  updateAccommodationComment,
} from '..';

//Lấy list category
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

//lấy các accommodation
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

//lấy thông tin chi tiết accommodation
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

//Lấy thông tin chi tiết category
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

export const getListAccommodationComment = async (id, page) => {
  try {
    const res = await getAccommodationComments(id, page);
    return res.data;
  } catch (error) {
    console.error(
      'Get accommodation comment failed:',
      error.response ? error.response.data : error.message
    );
  }
};

export const getAccommodationCommentNumberById = async (id) => {
  try {
    const res = await getAccommodationCommentNumber(id);
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

//Lấy comment xem user đã đánh giá chưa
export const getAccommodationCommentDetailBy2Id = async (data) => {
  try {
    const res = await getAccommodationCommentBy2Id(data);
    return res.data;
  } catch (error) {
    console.error(
      'Get Accommodation comment failed:',
      error.response ? error.response.data : error.message
    );
  }
};
