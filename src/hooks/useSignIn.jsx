import { useContext } from 'react';
import { signIn } from '../api/index';
import { FormContext } from '../Contexts/FormContext';
import { UserContext } from '../Contexts/UserContext';

const useSignIn = () => {
  const { setResponse, setIsLoading } = useContext(FormContext);
  const { setUser } = useContext(UserContext);

  const performSignIn = async (SignInData) => {
    try {
      const res = await signIn(SignInData);

      if (res) setIsLoading(false);

      const user = res.data.data ? res.data.data[0] : null;
      user && localStorage.setItem('user', JSON.stringify(user));

      setUser(user);
      setResponse(res.data);
      console.log(res.data.data ? res.data.data[0] : null);
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
