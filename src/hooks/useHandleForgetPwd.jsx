import React, { useContext } from 'react';
import { FormContext } from '../Contexts/FormContext';
import { forgetPassword } from '../api';

const useHandleForgetPwd = () => {
  const { setResponse, setIsLoading } = useContext(FormContext);
  async function handleForgetPwdData(forgetPwdData) {
    try {
      const res = await forgetPassword(forgetPwdData);

      if (res) setIsLoading(false);

      setResponse(res.data);
      console.log('Send forget pwd data successful. ', res);
    } catch (error) {
      console.error(
        'Verify failed:',
        error.response ? error.response.data : error.message
      );
    }
  }
  return { handleForgetPwdData };
};

export default useHandleForgetPwd;
