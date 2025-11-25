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
