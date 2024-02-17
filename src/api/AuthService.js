import { useContext } from 'react';
import { googleSignIn } from './index';
import { FormContext } from '../Contexts/FormContext';

export async function googleAuth(data) {
  const { handleResponse } = useContext(FormContext);
  try {
    console.log(data);
    const res = await googleSignIn(data);
    handleResponse(res);
    console.log('Send successful. ', res);
  } catch (error) {
    console.error(
      'Google sign-in failed:',
      error.response ? error.response.data : error.message
    );
  }
}
