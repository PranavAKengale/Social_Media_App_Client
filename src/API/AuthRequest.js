import axios from "axios";

const API = axios.create({ baseURL: 'https://social-media-app-server-flax.vercel.app' });

export const logIn = (formData)=> { return API.post('/auth/login',formData)}
export const signUp = (formData) =>{return API.post('/auth/register', formData)}