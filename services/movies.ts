import { redirect } from "next/dist/server/api-utils";

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
export const getMovieById = async (id: string) => {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    redirect: "follow" as RequestRedirect,
  };
  const url = `http://localhost:8000/api/movies/${id}`;
  const response = await fetch(url, requestOptions);
  const data = await response.json();
  return data.data;
};
