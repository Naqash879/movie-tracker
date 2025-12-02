import axios, { AxiosInstance } from "axios";

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

export default AxiosService.getInstance();
