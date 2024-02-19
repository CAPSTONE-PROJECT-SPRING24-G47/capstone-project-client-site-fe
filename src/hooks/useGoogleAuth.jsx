import React, { useContext } from 'react';
import { FormContext } from '../Contexts/FormContext';
import { googleSignIn } from '../api';
import { UserContext } from '../Contexts/UserContext';

const useGoogleAuth = () => {
  const { setResponse } = useContext(FormContext);
  const { setUser } = useContext(UserContext);

  const googleAuth = async (data) => {
    try {
      const res = await googleSignIn(data);
      const user = res.data?.data[0];
      localStorage.setItem('user', JSON.stringify(user));
      setUser(user);
      setResponse(res.data);
      console.log(res);
    } catch (error) {
      console.error(
        'Google sign-in failed:',
        error.response ? error.response.data : error.message
      );
    }
  };
  return { googleAuth };
};

export default useGoogleAuth;
