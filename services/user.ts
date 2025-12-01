import axios from "axios";

export const register = async (
  firstName: string,
  lastName: string,
  email: string,
  password: string
) => {
  try {
    const response = await axios.post("http://localhost:8000/api/users", {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    });

    return response.data;
  } catch (error) {
    return { success: "Fail", message: error.response?.data || error.message };
  }
};

export const login = async (email: string, password: string) => {
  try {
    const url = "http://localhost:8000/api/users/login";

    const response = await axios.post(
      url,
      {
        email: email,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response;
  } catch (error) {
    return { success: false, message: error.response?.data || error.message };
  }
};
