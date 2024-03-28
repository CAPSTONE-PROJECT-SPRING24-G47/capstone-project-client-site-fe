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

export const getAccommodations = () => API.get('/accommodations');

export const getAccommodation = (id) => API.get(`/accommodations/${id}`);

export const createAccommodation = (data) => API.post('/accommodations', data);

export const getAccommodationCategoryDetail = (id) =>
  API.get(`/accommodation-category/${id}`);

export const createAccommodationComment = (data) =>
  API.post('/accommodation-comment', data);

export const getAccommodationCommentNumber = (id) =>
  API.get(
    `/accommodation-comment/${id}/get-number-of-comment-by-accommodationId`
  );

export const getAccommodationComments = (id, page) =>
  API.get(
    `/accommodation-comment/${id}/get-comment-by-accommodationId?pageIndex=${page}`
  );

export const getAccommodationCommentBy2Id = (data) =>
  API.get(
    `/accommodation-comment/get-comment-by-userId-and-accId?userId=${data.getAll('userId')}&accommodationId=${data.getAll('accommodationId')}`
  );

export const getAccommodationComment = (id) =>
  API.get(`/accommodation-comment/${id}`);

export const deleteAccommodationComment = (id) =>
  API.delete(`/accommodation-comment/${id}`);

export const updateAccommodationComment = (id, data) =>
  API.put(`/accommodation-comment/${id}`, data);

//restaurant
export const getRestaurants = () => API.get('/restaurants');

export const getRestaurant = (id) => API.get(`/restaurants/${id}`);

export const createRestaurant = (data) => API.post('/restaurants', data);

export const getRestaurantCategories = () => API.get('/restaurant-category');

export const getRestaurantCategoryDetail = (id) =>
  API.get(`/restaurant-category/${id}`);

export const getRestaurantComment = (id) =>
  API.get(`/restaurant-comment/${id}`);

export const getRestaurantComments = (id, page) =>
  API.get(
    `/restaurant-comment/${id}/get-comment-by-restaurantId?pageIndex=${page}`
  );

export const getRestaurantCommentNumber = (id) =>
  API.get(`/restaurant-comment/${id}/get-number-of-comment-by-restaurantId`);

export const createRestaurantComment = (data) =>
  API.post('/restaurant-comment', data);

export const deleteRestaurantComment = (id) =>
  API.delete(`/restaurant-comment/${id}`);

export const updateRestaurantComment = (id, data) =>
  API.put(`/restaurant-comment/${id}`, data);

export const getRestaurantCommentBy2Id = (data) =>
  API.get(
    `/restaurant-comment/get-comment-by-userId-and-resId?userId=${data.getAll('userId')}&restaurantId=${data.getAll('restaurantId')}`
  );

//tourist attraction
export const getTouristAttractionCategories = () =>
  API.get(`/touristattraction-category`);

export const getTouristAttractionCategoryDetail = (id) =>
  API.get(`/touristattraction-category/${id}`);

export const getTouristAttractions = () => API.get('/tourist-attractions');

export const getTouristAttraction = (id) =>
  API.get(`/tourist-attractions/${id}`);

export const createTouristAttraction = (data) =>
  API.post('/tourist-attractions', data);

export const getTouristAttractionComments = (id, page) =>
  API.get(
    `/touristattraction-comment/${id}/get-comment-by-touristAttractionId?pageIndex=${page}`
  );

export const getTouristAttractionComment = (id) =>
  API.get(`/touristattraction-comment/${id}`);

export const createTouristAttractionComment = (data) =>
  API.post('/touristattraction-comment', data);

export const updateTouristAttractionComment = (id, data) =>
  API.put(`/touristattraction-comment/${id}`, data);

export const deleteTAComment = (id) =>
  API.delete(`/touristattraction-comment/${id}`);

export const getTACommentNumber = (id) =>
  API.get(
    `/touristattraction-comment/${id}/get-number-of-comment-by-touristAttractionId`
  );

export const getTACommentBy2Id = (data) =>
  API.get(
    `/touristattraction-comment/get-comment-by-userId-and-taId?userId=${data.getAll('userId')}&touristAttractionId=${data.getAll('touristAttractionId')}`
  );

//user
export const updateUser = (id, data) =>
  API.put(`/users/${id}/update-profile`, data);

export const getUsers = () => API.get('/users');

export const getUser = (id) => API.get(`/users/${id}`);

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
