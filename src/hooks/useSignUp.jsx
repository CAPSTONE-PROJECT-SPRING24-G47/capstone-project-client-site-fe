import { useContext } from 'react';
import { signUp } from '../api/index';
import { FormContext } from '../Contexts/FormContext';

const useSignUp = () => {
  const { setResponse, response } = useContext(FormContext);

  const performSignUp = async (signUpData) => {
    try {
      const res = await signUp(signUpData);
      setResponse(res);
    } catch (error) {
      console.error(
        'Sign-up failed:',
        error.response ? error.response.data : error.message
      );
    }
  };
  // console.log('Sign-up successful. ', response);

  return { performSignUp };
};

export default useSignUp;
