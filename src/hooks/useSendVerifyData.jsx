import { useContext } from 'react';
import { FormContext } from '../Contexts/FormContext';
import { verify } from '../api';

const useSendVerifyData = () => {
  const { setResponse, setIsLoading } = useContext(FormContext);

  async function sendVerifyData(verifyData) {
    try {
      const res = await verify(verifyData);

      if (res) setIsLoading(false);

      setResponse(res.data);
      console.log('Send verify data successful. ', res);
    } catch (error) {
      console.error(
        'Verify failed:',
        error.response ? error.response.data : error.message
      );
    }
  }
  return { sendVerifyData };
};

export default useSendVerifyData;
