import {
  createBlog,
  createBlogComment,
  deleteABlog,
  getABlog,
  getBlogCategories,
  getBlogs,
} from '..';

export const addBlog = async (data) => {
  try {
    const res = await createBlog(data);
    // console.log(res);
    return res;
  } catch (error) {
    console.error(
      'Create blog failed:',
      error.response ? error.response.data : error.message
    );
  }
};

export const getListBlogs = async () => {
  try {
    const res = await getBlogs();
    // console.log(res);
    return res;
  } catch (error) {
    console.error(
      'Get list blog failed:',
      error.response ? error.response.data : error.message
    );
  }
};
export const getListBlogCategories = async () => {
  try {
    const res = await getBlogCategories();
    // console.log(res);
    return res.data;
  } catch (error) {
    console.error(
      'Get list blog category failed:',
      error.response ? error.response.data : error.message
    );
  }
};

export const getBlog = async (blogId) => {
  try {
    const res = await getABlog(blogId);
    // console.log(res);
    return res.data;
  } catch (error) {
    console.error(
      'Create blog failed:',
      error.response ? error.response.data : error.message
    );
  }
};

export const deleteBlog = async (blogId) => {
  try {
    const res = await deleteABlog(blogId);
    // console.log(res);
    return res;
  } catch (error) {
    console.error(
      'Create blog failed:',
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
