import axios, { AxiosError, AxiosInstance } from "axios";
import Cookies from "js-cookie";

class AxiosService {
  private static instance: AxiosInstance;
  private constructor() {}

  public static getInstance(): AxiosInstance {
    if (!AxiosService.instance) {
      AxiosService.instance = axios.create({
        baseURL: "http://localhost:8000/",
        headers: {
          "Content-Type": "application/json",
        },
      });
      AxiosService.instance.interceptors.request.use((config) => {
        const token = Cookies.get("token");
        if (token) {
          config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
      });
    }

    return AxiosService.instance;
  }
}

export const handleError = (error: unknown) => {
  console.error(error);
  if (error instanceof AxiosError) {
    return {
      success: false,
      message: error.response?.data.message || error.message,
    };
  }

  if (error instanceof Error) {
    return {
      success: false,
      message: error.message,
    };
  }

  return {
    success: false,
    message: "Something went wrong",
  };
};

export default AxiosService.getInstance();
