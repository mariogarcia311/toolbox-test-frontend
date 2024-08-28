import axios from "axios";
import { environment } from "../../config/environment";

const { externalApi } = environment;

const filesApiClient = axios.create({
  baseURL: externalApi.url,
  timeout: 5000,
});

filesApiClient.interceptors.request.use(
  (config) => {
    const token = externalApi.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default filesApiClient;
