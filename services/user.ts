export const register = async (
  firstName: string,
  lastName: string,
  email: string,
  password: string
) => {
  const url = "http://localhost:8000/api/users";

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      firstName,
      lastName,
      email,
      password,
    }),
  };

  const response = await fetch(url, requestOptions);
  const data = await response.json();

  return data;
};

export const login = async (email: string, password: string) => {
  try {
    const url = "http://localhost:8000/api/users/login";
    const requiredOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    };
    const response = await fetch(url, requiredOptions);
    const data = await response.json();
    if (!response.ok) {
      return {
        success: false,
        message: data.error || `Server Error: ${response.status}`,
      };
    }
    return {
      success: data.success || false,
      message: data.message || "Something went wrong",
      user: data || null,
    };
  } catch (error) {
    return {
      success: false,
      message: error || "Network Error",
    };
  }
};
