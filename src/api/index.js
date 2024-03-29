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

export const getAUser = (userId) => API.get(`/users/${userId}`);

export const changePwd = (userId, password) =>
  API.post(`users/${userId}/change-password?newPass=${password}`);

//blog
export const createBlog = (data) => API.post(`/blogs`, data);
export const getBlogs = () => API.get('/blogs');
export const getABlog = (blogId) => API.get(`/blogs/${blogId}`);
export const deleteABlog = (blogId) => API.delete(`/blogs/${blogId}`);
export const getBlogCategories = () => API.get('/blog-category');

//blog comment
export const createBlogComment = (data) => API.post(`/blog-comment`, data);
export const getBlogComments = () => API.get('/blog-comment');
export const getCommentByBlogId = (blogId) =>
  API.get(`/blog-comment/${blogId}`);
export const getCommentsByBlogId = (blogId) =>
  API.get(`/blog-comment/${blogId}/get-comment-by-blogId`);
export const deleteBlgComment = (commentId) =>
  API.delete(`/blog-comment/${commentId}`);
export const updateBlgComment = (commentId, data) =>
  API.put(`/blog-comment/${commentId}`, data);

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

export const getAccommodationComments = (id) =>
  API.get(`/accommodation-comment/${id}/get-comment-by-accommodationId`);

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

export const getRestaurantComments = (id) =>
  API.get(`/restaurant-comment/${id}/get-comment-by-restaurantId`);

export const createRestaurantComment = (data) =>
  API.post('/restaurant-comment', data);

export const deleteRestaurantComment = (id) =>
  API.delete(`/restaurant-comment/${id}`);

export const updateRestaurantComment = (id, data) =>
  API.put(`/restaurant-comment/${id}`, data);

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

export const getTouristAttractionComments = (id) =>
  API.get(
    `/touristattraction-comment/${id}/get-comment-by-touristAttractionId`
  );

export const getTouristAttractionComment = (id) =>
  API.get(`/touristattraction-comment/${id}`);

export const createTouristAttractionComment = (data) =>
  API.post('/touristattraction-comment', data);

export const updateTouristAttractionComment = (id, data) =>
  API.put(`/touristattraction-comment/${id}`, data);

export const deleteTAComment = (id) =>
  API.delete(`/touristattraction-comment/${id}`);

//user
export const updateUser = (id, data) =>
  API.put(`/users/${id}/update-profile`, data);

export const getUsers = () => API.get('/users');

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
