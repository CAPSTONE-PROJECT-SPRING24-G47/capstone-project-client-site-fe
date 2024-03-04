import { changePwd } from '..';

export const changePassword = async (userId, password) => {
  console.log(userId);
  try {
    const res = await changePwd(userId, password);
    return res.data;
  } catch (error) {
    console.error(
      'Change-password failed:',
      error.response ? error.response.data : error.message
    );
  }
};
