import axios from 'axios';

const instance = axios.create();

// Add a request interceptor
instance.interceptors.request.use((config) => {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

  export default instance;