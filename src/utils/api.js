import axios from 'axios';
import axiosRetry from 'axios-retry';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 45000, // 45 seconds timeout (Render cold starts can take 30-50s)
});

// Setup resilient polling for Serverless/Cloud instance cold-starts & transient errors
axiosRetry(api, {
  retries: 3, // Retry up to 3 times
  retryDelay: (retryCount) => {
    return retryCount * 3000; // Wait 3s, then 6s, then 9s between attempts
  },
  retryCondition: (error) => {
    // Retry if connection dropped (ERR_TIMED_OUT), aborts, or server gives 5xx Gateway errors
    return axiosRetry.isNetworkOrIdempotentRequestError(error) || error.code === 'ECONNABORTED' || (error.response && error.response.status >= 500);
  },
});

// Add a request interceptor to attach the token
api.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem('userInfo'));
    if (user && user.token) {
      config.headers.Authorization = `Bearer ${user.token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
