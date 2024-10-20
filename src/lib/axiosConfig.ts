import axios from "axios";

// Update the baseURL globally based on the environment
axios.defaults.baseURL =
  process.env.NODE_ENV === "production"
    ? "https://api.production.com" // Production URL
    : "http://localhost:8000"; // Development URL

// Set a global request timeout
axios.defaults.timeout = 10000; // 10 seconds

// Set default headers
axios.defaults.headers.common["Content-Type"] = "application/json";

export default axios;
