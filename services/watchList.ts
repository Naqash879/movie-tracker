import axios from "axios";
import Cookies from "js-cookie";

export const watchList = async (movieId: number, userId: number) => {
  try {
    const response = await axios.post("http://localhost:8000/api/watchlist/", {
      userId: userId,
      movieId: movieId,
    });
    return response.data;
  } catch (error: any) {
    return error.response?.data;
  }
};

export const getWatchList = async () => {
  const userString = Cookies.get("user");

  if (!userString) return { success: false, message: "User not logged in" };

  const response = await axios.get(
    `http://localhost:8000/api/watchlist/user/${userString}/`
  );

  return response.data;
};
