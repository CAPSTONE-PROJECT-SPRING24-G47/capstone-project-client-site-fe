import { getUsers, updateUser } from '..';

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

export const updateUserDetail = async (id, data) => {
  try {
    const res = await updateUser(id, data);

    return res.data;
  } catch (error) {
    console.error(
      'update user failed:',
      error.response ? error.response.data : error.message
    );
  }
};
