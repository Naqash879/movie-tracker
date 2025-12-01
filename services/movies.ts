import { init } from "next/dist/compiled/webpack/webpack";
import { redirect } from "next/dist/server/api-utils";

export const addMovie = async (
  movieName: string,
  movieDescription: string,
  moviePosterURL: string,
  movieTrailerURL: string,
  movieRating: number,
  movieReviews: number
) => {
  try {
    const myHeaders = {
      "Content-Type": "application/json",
    };

    const body = JSON.stringify({
      name: movieName,
      trailerURL: movieTrailerURL,
      description: movieDescription,
      rating: movieRating,
      posterURL: moviePosterURL,
      reviews: movieReviews,
    });

    const response = await fetch("http://localhost:8000/api/movies/", {
      method: "POST",
      headers: myHeaders,
      body: body,
    });

    if (!response.ok) {
      const error = await response.text();
      console.log("Error Response:", error);
      return { success: false, message: "API Error", error };
    }

    return await response.json();
  } catch (error) {
    console.log("Add Movie Error:", error);
    return { success: false, message: "Something went wrong", error };
  }
};

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
