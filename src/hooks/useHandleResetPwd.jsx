import React, { useContext } from 'react';
import { FormContext } from '../Contexts/FormContext';
import { resetPassword } from '../api';

const useHandleResetPwd = () => {
  const { setResponse } = useContext(FormContext);
  async function handleResetPwd(resetPwdData) {
    try {
      const res = await resetPassword(resetPwdData);
      setResponse(res);
    } catch (error) {
      console.error(
        'Reset failed:',
        error.response ? error.response.data : error.message
      );
    }
  }
  return { handleResetPwd };
};

export default useHandleResetPwd;
