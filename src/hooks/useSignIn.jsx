import { useContext } from 'react';
import { signIn } from '../api/index';
import { FormContext } from '../Contexts/FormContext';

const useSignIn = () => {
  const { setResponse, response } = useContext(FormContext);

  const performSignIn = async (SignInData) => {
    try {
      const res = await signIn(SignInData);
      setResponse(res.data);
    } catch (error) {
      console.error(
        'Sign-in failed:',
        error.response ? error.response.data : error.message
      );
    }
  };
  // console.log('Sign-in successful. ', response?.isSuccess);

  return { performSignIn };
};

export default useSignIn;
