import { signUp, signIn } from './index';

export async function performSignUp(signUpData) {
  try {
    await signUp(signUpData);
    console.log('Sign-up successful');
  } catch (error) {
    console.error(
      'Sign-up failed:',
      error.response ? error.response.data : error.message
    );
  }
}

export async function performSignIn(signInData) {
  try {
    await signIn(signInData);
    console.log('Sign-in successful');
  } catch (error) {
    console.error(
      'Sign-in failed:',
      error.response ? error.response.data : error.message
    );
  }
}
