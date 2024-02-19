import { useContext } from 'react';
import { FormContext } from '../Contexts/FormContext';
import { forgetPasswordVerify } from '../api';

const useSendEmailForgetPwd = () => {
  const { setResponse, setIsLoading } = useContext(FormContext);

  async function sendEmailForgetPwd(email) {
    try {
      const res = await forgetPasswordVerify(email);

      if (res) setIsLoading(false);

      setResponse(res.data);
      console.log('Send email successful. ', res);
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
