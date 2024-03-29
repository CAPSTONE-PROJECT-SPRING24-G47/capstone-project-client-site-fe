import { useContext } from 'react';
import { signUp } from '../api/index';
import { FormContext } from '../Contexts/FormContext';

const useSignUp = () => {
  const { setResponse, setIsLoading } = useContext(FormContext);

  const performSignUp = async (signUpData) => {
    try {
      const res = await signUp(signUpData);

      if (res) setIsLoading(false);

      setResponse(res.data);
      console.log('Sign-up successful. ', res);
    } catch (error) {
      console.error(
        'Sign-up failed:',
        error.response ? error.response.data : error.message
      );
    }
  };

  return { performSignUp };
};

export default useSignUp;
