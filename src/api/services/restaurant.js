import {
  createRestaurantComment,
  deleteRestaurantComment,
  getRestaurant,
  getRestaurantCategories,
  getRestaurantCategoryDetail,
  getRestaurantComment,
  getRestaurantCommentBy2Id,
  getRestaurantCommentNumber,
  getRestaurantComments,
  getRestaurants,
  updateRestaurantComment,
} from '..';

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

export const getListRestaurants = async () => {
  try {
    const res = await getRestaurants();
    return res.data;
  } catch (error) {
    console.error(
      'Get restaurant failed:',
      error.response ? error.response.data : error.message
    );
  }
};

export const getRestaurantDetail = async (id) => {
  try {
    const res = await getRestaurant(id);
    return res.data;
  } catch (error) {
    console.error(
      'Get restaurant failed:',
      error.response ? error.response.data : error.message
    );
  }
};

export const getListRestaurantCategoryDetail = async (id) => {
  try {
    const res = await getRestaurantCategoryDetail(id);
    return res.data;
  } catch (error) {
    console.error(
      'Get restaurant category failed:',
      error.response ? error.response.data : error.message
    );
  }
};

export const getRestaurantCommentDetail = async (id) => {
  try {
    const res = await getRestaurantComment(id);
    return res.data;
  } catch (error) {
    console.error(
      'Get restaurant comment failed:',
      error.response ? error.response.data : error.message
    );
  }
};

export const getListRestaurantComment = async (id, page) => {
  try {
    const res = await getRestaurantComments(id, page);
    return res.data;
  } catch (error) {
    console.error(
      'Get restaurant comment failed:',
      error.response ? error.response.data : error.message
    );
  }
};

export const deleteRestaurantCommentDetail = async (id) => {
  try {
    const res = await deleteRestaurantComment(id);
    return res.data;
  } catch (error) {
    console.error(
      'Get restaurant failed:',
      error.response ? error.response.data : error.message
    );
  }
};

export const addRestaurantComment = async (data) => {
  try {
    const res = await createRestaurantComment(data);

    return res.data;
  } catch (error) {
    console.error(
      'Add restaurant failed:',
      error.response ? error.response.data : error.message
    );
  }
};

export const updateRestaurantCommentDetail = async (id, data) => {
  try {
    const res = await updateRestaurantComment(id, data);

    return res.data;
  } catch (error) {
    console.error(
      'Add restaurant failed:',
      error.response ? error.response.data : error.message
    );
  }
};

export const getRestaurantCommentNumberById = async (id) => {
  try {
    const res = await getRestaurantCommentNumber(id);
    return res.data;
  } catch (error) {
    console.error(
      'Get Restaurant comment failed:',
      error.response ? error.response.data : error.message
    );
  }
};

//Lấy comment xem user đã đánh giá chưa
export const getRestaurantCommentDetailBy2Id = async (data) => {
  try {
    const res = await getRestaurantCommentBy2Id(data);
    return res.data;
  } catch (error) {
    console.error(
      'Get restaurant comment failed:',
      error.response ? error.response.data : error.message
    );
  }
};
