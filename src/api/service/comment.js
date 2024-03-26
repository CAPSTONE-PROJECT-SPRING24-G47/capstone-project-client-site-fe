import {
  createBlogComment,
  deleteBlogComment,
  getBlogComments,
  getCommentByBlogId,
  getCommentsByBlogId,
} from '..';

export const getListBlogComments = async () => {
  try {
    const res = await getBlogComments();
    // console.log(res);
    return res;
  } catch (error) {
    console.error(
      'get blog comment failed:',
      error.response ? error.response.data : error.message
    );
  }
};

export const getListBlogCommentsByBlogId = async (blogId) => {
  try {
    const res = await getCommentsByBlogId(blogId);
    console.log(res);
    return res.data.data;
  } catch (error) {
    console.error(
      'get blogs comment by blogCommentId failed:',
      error.response ? error.response.data : error.message
    );
  }
};

export const getBlogCommentByBlogId = async (blogId) => {
  try {
    const res = await getCommentByBlogId(blogId);
    console.log(res);
    return res;
  } catch (error) {
    console.error(
      'get blog comment by blogCommentId failed:',
      error.response ? error.response.data : error.message
    );
  }
};

export const addBlogComment = async (data) => {
  try {
    const res = await createBlogComment(data);
    // console.log(res);
    return res;
  } catch (error) {
    console.error(
      'Add comment failed:',
      error.response ? error.response.data : error.message
    );
  }
};

export const deleteComment = async (commentId) => {
  try {
    const res = await deleteBlogComment(commentId);
    console.log(res);
    return res;
  } catch (error) {
    console.error(
      'Delete blog comment failed:',
      error.response ? error.response.data : error.message
    );
  }
};
