// api.ts
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://your-api-endpoint.com', // Replace with your API endpoint
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
