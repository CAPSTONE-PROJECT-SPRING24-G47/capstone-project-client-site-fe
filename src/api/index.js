import axios from 'axios';

const API = axios.create({ baseURL: 'https://localhost:7056/api' });

export const signUp = (signUpData) => API.post(`/auth/signup`, signUpData);
export const signIn = (signInData) => API.post(`/auth/signin`, signInData);

export const verify = (verifyData) =>
  API.post(`/auth/signup/verify`, verifyData);

export const forgetPasswordVerify = (email) =>
  API.post(`/auth/reset-password/verify`, email);

export const forgetPassword = (forgetPwdData) =>
  API.post(`/auth/reset-password/code`, forgetPwdData);

export const resetPassword = (resetPwdData) =>
  API.post(`/auth/reset-password`, resetPwdData);

export const googleSignIn = (data) => API.post(`/auth/google-auth`, data);

//accommodation
export const getAccommodationCategories = () =>
  API.get(`/accommodation-category`);

//restaurant
export const getRestaurantCategories = () => API.get(`/restaurant-category`);

//tourist attraction
export const getTouristAttractionCategories = () =>
  API.get(`/touristattraction-category`);

//search
export const search = (searchData) => API.post(`/search`, searchData);
