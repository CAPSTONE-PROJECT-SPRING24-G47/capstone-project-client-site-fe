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

export const createBlogComment = (data) => API.post(`/blog-comment`, data);

export const createBlog = (data) => API.post(`/blogs`, data);

export const getBlogCategories = () => API.get('/blog-category');
export const getBlogs = () => API.get('/blogs');
export const getABlog = (blogId) => API.get(`/blogs/${blogId}`);
export const deleteABlog = (blogId) => API.delete(`/blogs/${blogId}`);

export const getBlogComments = () => API.get('/blog-comment');
