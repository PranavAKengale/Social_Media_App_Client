import axios from "axios";

const API = axios.create({ baseURL: 'https://social-media-ncjn.onrender.com' });

export const logIn = (formData)=> { return API.post('/auth/login',formData)}
export const signUp = (formData) =>{return API.post('/auth/register', formData)}
