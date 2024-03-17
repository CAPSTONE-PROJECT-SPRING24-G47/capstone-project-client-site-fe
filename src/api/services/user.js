import { getUsers } from '..';

export const getListUsers = async () => {
  try {
    const res = await getUsers();
    return res.data;
  } catch (error) {
    console.error(
      'Get user failed:',
      error.response ? error.response.data : error.message
    );
  }
};
