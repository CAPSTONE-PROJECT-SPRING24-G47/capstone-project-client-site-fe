import { createBlog } from '..';

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
