import axios from 'axios';

const API = axios.create({ baseURL: 'https://localhost:7056/api' });

export const signUp = (signUpData) => API.post(`/auth/signup`);
export const signIn = (signInData) => API.post(`/auth/signin`);
