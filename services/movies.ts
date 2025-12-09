import axios from "@/services/axios";
import axiosInstance, { handleError } from "@/services/axios";

export const addMovie = async (
  movieName: string,
  movieDescription: string,
  moviePosterURL: string,
  movieTrailerURL: string,
  movieRating: number,
  movieReviews: number
) => {
  try {
    const response = await axiosInstance.post("api/movies", {
      name: movieName,
      trailerURL: movieTrailerURL,
      description: movieDescription,
      rating: movieRating,
      posterURL: moviePosterURL,
      reviews: movieReviews,
    });

    return response.data;
  } catch (error) {
    return handleError(error);
  }
};

export const getMovies = async () => {
  const response = await axiosInstance.get("api/movies");
  return response.data;
};
export const getMovieById = async (id: number) => {
  const response = await axiosInstance.get(`api/movies/${id}`);
  return response.data.data;
};
export const deteteMovieById = async (id: number) => {
  try {
    const res = await axios.delete(`/api/movies/${id}`);
    return {
      res: res.data,
      message: res.data.message,
      success: true,
    };
  } catch (error) {
    const errors = handleError(error);
    return { error: errors.message };
  }
};
export const updateMovie = async (
  id?: number,
  name?: string,
  description?: string,
  posterURL?: string,
  trailerURL?: string,
  rating?: number | string | undefined
) => {
  try {
    const res = await axios.put(`api/movies/${id}`, {
      id: id,
      name: name,
      trailerURL: trailerURL,
      description: description,
      rating: rating,
      posterURL: posterURL,
    });
    return { success: true, respones: res.data, message: res.data.message };
  } catch (error) {
    const errors = handleError(error);
    return { error: errors.message };
  }
};
