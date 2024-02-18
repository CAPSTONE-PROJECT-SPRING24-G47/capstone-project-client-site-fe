import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import useGoogleAuth from '../../hooks/useGoogleAuth';

const GoogleButton = () => {
  const { googleAuth } = useGoogleAuth();
  const handleSuccess = (credentialResponse) => {
    const data = jwtDecode(credentialResponse.credential);
    googleAuth({
      lastName: data.family_name ? data.family_name : '',
      firstName: data.given_name ? data.given_name : '',
      email: data.email,
      pictureProfile: data.picture,
    });
  };
  const handleError = () => {
    console.log('Google login failed');
  };

  return (
    <div>
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={handleError}
        text="continue_with"
        size="large"
        shape="pill"
        width={'999px'}
      />
    </div>
  );
};

export default GoogleButton;
