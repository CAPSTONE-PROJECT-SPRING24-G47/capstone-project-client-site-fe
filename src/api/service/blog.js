import { createBlog, deleteABlog, getABlog, getBlogs } from '..';

export const addBlog = async (data) => {
  try {
    const res = await createBlog(data);
    console.log(res);
    return res;
  } catch (error) {
    console.error(
      'Create blog failed:',
      error.response ? error.response.data : error.message
    );
  }
};

export const getListBlogs = async (blogId) => {
  try {
    const res = await getBlogs(blogId);
    console.log(res);
    return res;
  } catch (error) {
    console.error(
      'Create blog failed:',
      error.response ? error.response.data : error.message
    );
  }
};

export const getBlog = async (blogId) => {
  try {
    const res = await getABlog(blogId);
    console.log(res);
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
    console.log(res);
    return res;
  } catch (error) {
    console.error(
      'Create blog failed:',
      error.response ? error.response.data : error.message
    );
  }
};
