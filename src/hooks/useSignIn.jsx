import { useContext } from 'react';
import { signIn } from '../api/index';
import { FormContext } from '../Contexts/FormContext';

const useSignIn = () => {
  const { setResponse } = useContext(FormContext);

  const performSignIn = async (SignInData) => {
    try {
      const res = await signIn(SignInData);
      setResponse(res.data);
      console.log('Sign-in successful. ', res);
    } catch (error) {
      console.error(
        'Sign-in failed:',
        error.response ? error.response.data : error.message
      );
    }
  };
  return { performSignIn };
};

export default useSignIn;
