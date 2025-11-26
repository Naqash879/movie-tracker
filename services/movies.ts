export const getMovies = async () => {
  const requestOptions = {
    headers: { "Content-Type": "application/json" },
    method: "GET",
  };
  const url = "http://localhost:8000/api/movies";
  const response = await fetch(url, requestOptions);
  const data = await response.json();
  return data;
};
