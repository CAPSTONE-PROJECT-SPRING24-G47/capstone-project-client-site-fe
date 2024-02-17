import React, { useContext } from 'react';
import { FormContext } from '../Contexts/FormContext';
import { forgetPasswordVerify } from '../api';

const useSendEmailForgetPwd = () => {
  const { setResponse } = useContext(FormContext);

  async function sendEmailForgetPwd(email) {
    try {
      const res = await forgetPasswordVerify(email);
      setResponse(res);
    } catch (error) {
      console.error(
        'Send failed:',
        error.response ? error.response.data : error.message
      );
    }
  }
  return { sendEmailForgetPwd };
};

export default useSendEmailForgetPwd;
