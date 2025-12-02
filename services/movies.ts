import axiosInstance from "@/services/axios";

export const addMovie = async (
  movieName: string,
  movieDescription: string,
  moviePosterURL: string,
  movieTrailerURL: string,
  movieRating: number,
  movieReviews: number
) => {
  try {
    const response = await axiosInstance.post(
      "api/movies",
      {
        name: movieName,
        trailerURL: movieTrailerURL,
        description: movieDescription,
        rating: Number(movieRating),
        posterURL: moviePosterURL,
        reviews: Number(movieReviews),
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    return response.data;
  } catch (error: any) {
    return { success: false, error: error.response?.data };
  }
};

export const getMovies = async () => {
  const response = await axiosInstance.get("api/movies");
  return response.data;
};
export const getMovieById = async (id: number) => {
  const response = await axiosInstance.get(`api/movies/?${id}`);
  return response.data.data;
};
