import React, { useContext } from 'react';
import { FormContext } from '../Contexts/FormContext';
import { googleSignIn } from '../api';

const useGoogleAuth = () => {
  const { setResponse } = useContext(FormContext);
  const googleAuth = async (data) => {
    try {
      const res = await googleSignIn(data);
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
