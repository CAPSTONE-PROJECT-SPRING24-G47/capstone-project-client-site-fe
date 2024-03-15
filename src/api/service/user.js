import { getAUser } from '..';

export const getUser = async (userId) => {
  try {
    console.log(userId);
    const res = await getAUser(userId);
    console.log(res);
    return res;
  } catch (error) {
    console.error(
      'Get user failed:',
      error.response ? error.response.data : error.message
    );
  }
};
