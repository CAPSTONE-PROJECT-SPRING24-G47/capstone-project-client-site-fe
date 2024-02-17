import { useContext } from 'react';
import { googleSignIn } from './index';
import { FormContext } from '../Contexts/FormContext';

// export async function sendVerifyData(verifyData) {
//   const { handleResponse } = useContext(FormContext);
//   // console.log(verifyData);
//   try {
//     const res = await verify(verifyData);
//     handleResponse(res);
//     console.log('Send successful. ', res);
//   } catch (error) {
//     console.error(
//       'Verify failed:',
//       error.response ? error.response.data : error.message
//     );
//   }
// }

// export async function sendEmailForgetPwd(email) {
//   const { handleResponse } = useContext(FormContext);
//   try {
//     const res = await forgetPasswordVerify(email);
//     handleResponse(res);
//     console.log('Send successful. ', res);
//   } catch (error) {
//     console.error(
//       'Send failed:',
//       error.response ? error.response.data : error.message
//     );
//   }
// }
// export async function handleForgetPwdData(forgetPwdData) {
//   const { handleResponse } = useContext(FormContext);
//   try {
//     const res = await forgetPassword(forgetPwdData);
//     handleResponse(res);
//     console.log('Send successful. ', res);
//   } catch (error) {
//     console.error(
//       'Verify failed:',
//       error.response ? error.response.data : error.message
//     );
//   }
// }
// export async function handleResetPwd(resetPwdData) {
//   const { handleResponse } = useContext(FormContext);
//   try {
//     const res = await resetPassword(resetPwdData);
//     handleResponse(res);
//     console.log('Reset successful. ', res);
//   } catch (error) {
//     console.error(
//       'Reset failed:',
//       error.response ? error.response.data : error.message
//     );
//   }
// }

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
