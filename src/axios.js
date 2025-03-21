import axios from 'axios'
import { configManager } from './config'

const axiosInstance = axios.create({
  baseURL: configManager.config.apiUrl,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Add request interceptor if needed
axiosInstance.interceptors.request.use(
  (config) => {
    // You can add auth token here if needed
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// Add response interceptor if needed
axiosInstance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    // Handle errors globally
    console.error('API Error:', error)
    return Promise.reject(error)
  },
)

export default axiosInstance
