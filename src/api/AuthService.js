import { signUp, signIn } from './index';

export async function performSignUp(signUpData) {
  try {
    const res = await signUp(signUpData);
    console.log('Sign-up successful ', res.data);
  } catch (error) {
    console.error(
      'Sign-up failed:',
      error.response ? error.response.data : error.message
    );
  }
}

export async function performSignIn(signInData) {
  try {
    const res = await signIn(signInData);
    console.log('Sign-in successful ', res.data);
  } catch (error) {
    console.error(
      'Sign-in failed:',
      error.response ? error.response.data : error.message
    );
  }
}
