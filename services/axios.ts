import axios, { AxiosError, AxiosInstance } from "axios";

class AxiosService {
  private static instance: AxiosInstance;
  private constructor() {}

  public static getInstance(): AxiosInstance {
    if (!AxiosService.instance) {
      AxiosService.instance = axios.create({
        baseURL: "http://localhost:8000/",
        headers: { "Content-Type": "application/json" },
      });
    }
    return AxiosService.instance;
  }
}

export const handleError = (error: unknown) => {
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
