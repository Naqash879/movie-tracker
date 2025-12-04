import axiosInstance, { handleError } from "@/services/axios";

export const register = async (
  firstName: string,
  lastName: string,
  email: string,
  password: string
) => {
  try {
    const response = await axiosInstance.post("api/users", {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    });

    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

export const login = async (email: string, password: string) => {
  try {
    const url = "api/users/login";

    const response = await axiosInstance.post(url, {
      email: email,
      password: password,
    });

    return response.data;
  } catch (error) {
    return handleError(error);
  }
};
