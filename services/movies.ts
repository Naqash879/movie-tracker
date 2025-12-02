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
    const response = await axiosInstance.post("api/movies", {
      name: movieName,
      trailerURL: movieTrailerURL,
      description: movieDescription,
      rating: movieRating,
      posterURL: moviePosterURL,
      reviews: movieReviews,
    });

    console.log("Response:", response.data);
    return response.data;
  } catch (error: any) {
    console.error("Add Movie Error:", error.response?.data || error.message);
    return { success: false, message: "Something went wrong", error };
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
