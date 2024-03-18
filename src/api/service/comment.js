import { getBlogComments } from '..';

export const getListBlogComments = async () => {
  try {
    const res = await getBlogComments();
    console.log(res);
    return res;
  } catch (error) {
    console.error(
      'get blog comment failed:',
      error.response ? error.response.data : error.message
    );
  }
};
