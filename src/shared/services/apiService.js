import axios from "axios";

const apiService = axios.create({
  baseURL: "https://localhost:44319/api", // Base URL for your API
  timeout: 10000, // Request timeout (optional)
});

// Add a request interceptor for attaching the token
apiService.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor for handling errors globally
apiService.interceptors.response.use(
  (response) => response,
  (error) => {
    handleApiError(error);
    return Promise.reject(error);
  }
);
const handleApiError = (error) => {
  if (error.response) {
    // Server responded with a status other than 2xx
    console.error(
      "Response Error:",
      error.response.data.message || error.message
    );
  } else if (error.request) {
    // Request was made, but no response received
    console.error("Request Error:", error.request);
  } else {
    // Something else happened
    console.error("Error:", error.message);
  }
};

export default apiService;
