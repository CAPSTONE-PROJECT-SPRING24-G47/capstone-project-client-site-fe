import axios from 'axios';

const API = axios.create({ baseURL: 'https://localhost:7056/api' });

export const signUp = (signUpData) => API.post(`/auth/signup`, signUpData);
export const signIn = (signInData) => API.post(`/auth/signin`, signInData);

export async function performSignUp(signUpData) {
  try {
    const signUpResponse = await signUp(signUpData);
    console.log('Sign-up successful:', signUpResponse.data);
    alert('ye');
  } catch (error) {
    console.error(
      'Sign-up failed:',
      error.response ? error.response.data : error.message
    );
  }
}

export async function performSignIn(signInData) {
  try {
    const signInResponse = await signIn(signInData);
    console.log('Sign-in successful:', signInResponse.data);
    alert('no');
  } catch (error) {
    console.error(
      'Sign-in failed:',
      error.response ? error.response.data : error.message
    );
  }
}
