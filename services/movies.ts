import axios from "axios";

export const addMovie = async (
  movieName: string,
  movieDescription: string,
  moviePosterURL: string,
  movieTrailerURL: string,
  movieRating: number,
  movieReviews: number
) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/api/movies",
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
    console.log("API ERROR:", error.response?.data);
    return { success: false, error: error.response?.data };
  }
};

export const getMovies = async () => {
  const url = "http://localhost:8000/api/movies";
  const response = await axios.get(url);
  return response.data;
};
export const getMovieById = async (id: string) => {
  const url = `http://localhost:8000/api/movies/${id}`;
  const response = await axios.get(url);
  return response.data.data;
};
