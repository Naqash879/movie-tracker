import axiosInstance from "@/services/axios";

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
  } catch (error: any) {
    return { success: "Fail", message: error.response?.data.message || error.message };
  }
};

export const login = async (email: string, password: string) => {
  try {
    const url = "api/users/login";

    const response = await axiosInstance.post(url, {
      email: email,
      password: password,
    });

    return response;
  } catch (error: any) {
    return { success: false, message: error.response?.data.message || error.message };
  }
};
