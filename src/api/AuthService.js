import { signUp, signIn, verify } from './index';

export async function performSignUp(signUpData) {
  console.log(signUpData);

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
  console.log(signInData);
  try {
    const res = await signIn(signInData);
    console.log('Sign-in successful ', res);
  } catch (error) {
    console.error(
      'Sign-in failed:',
      error.response ? error.response.data : error.message
    );
  }
}

export async function sendVerifyData(verifyData) {
  console.log(verifyData);
  try {
    const res = await verify(verifyData);
    console.log('Send successful ', res);
  } catch (error) {
    console.error(
      'Verify failed:',
      error.response ? error.response.data : error.message
    );
  }
}
