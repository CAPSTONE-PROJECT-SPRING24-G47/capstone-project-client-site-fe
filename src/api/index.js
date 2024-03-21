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

//trip
export const addTrip = (tripData) => API.post(`/trip`, tripData);

export const getTrip = (id) => API.get(`/trip/${id}`);

export const updateTrip = (id, data) => API.put(`/trip/${id}`, data);

export const deleteTripAcc = (id) => API.delete(`/trip-accommodation/${id}`);

export const deleteTripRes = (id) => API.delete(`/trip-restaurant/${id}`);

export const deleteTripTA = (id) =>
  API.delete(`/trip-tourist-attraction/${id}`);

export const addTripAcc = (data) => API.post(`/trip-accommodation`, data);

export const addTripRes = (data) => API.post(`/trip-restaurant`, data);

export const addTripTA = (data) => API.post(`/trip-tourist-attraction`, data);
