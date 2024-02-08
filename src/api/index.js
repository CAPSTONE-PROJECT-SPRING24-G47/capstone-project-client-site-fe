import axios from 'axios';

const API = axios.create({ baseURL: 'https://localhost:7056/api' });

export const signUp = (signUpData) => API.post(`/auth/signup`, signUpData);
export const signIn = (signInData) => API.post(`/auth/signin`, signInData);

export const verify = (verifyData) =>
  API.post(`/auth/signup/verify`, verifyData);

export const resetPasswordVerify = (email) =>
  API.post(`/auth/reset-password/verify`, email);

export const resetPassword = (resetPwdData) =>
  API.post(`/auth/reset-password`, resetPwdData);
