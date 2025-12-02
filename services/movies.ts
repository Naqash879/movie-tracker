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
  const response = await axiosInstance.get("api/movies");
  return response.data;
};
export const getMovieById = async (id: number) => {
  const response = await axiosInstance.get(`api/movies/?${id}`);
  return response.data.data;
};
