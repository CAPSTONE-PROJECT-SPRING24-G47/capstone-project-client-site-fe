import { useContext } from 'react';
import { signIn } from '../api/index';
import { FormContext } from '../Contexts/FormContext';
import { UserContext } from '../Contexts/UserContext';

const useSignIn = () => {
  const { setResponse } = useContext(FormContext);
  const { setUser } = useContext(UserContext);

  const performSignIn = async (SignInData) => {
    try {
      const res = await signIn(SignInData);
      setUser(res.data.data[0]);
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
