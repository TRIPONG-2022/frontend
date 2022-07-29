import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
});

instance.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers.Authorization = localStorage.getItem(
      'Authorization',
    ) as string;
  }
  return config;
});

instance.interceptors.response.use((response) => {
  if (response.headers['authorization']) {
    localStorage.setItem('Authorization', response.headers['authorization']);
  }
  return response;
});
export default instance;
