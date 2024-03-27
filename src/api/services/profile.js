import { changePwd } from '..';

export const changePassword = async (userId, password) => {
  try {
    console.log(userId);
    const res = await changePwd(userId, password);
    console.log(res);
    return res;
  } catch (error) {
    console.error(
      'Change-password failed:',
      error.response ? error.response.data : error.message
    );
  }
};
