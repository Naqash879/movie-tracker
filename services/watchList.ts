import axiosInstance from "@/services/axios";
import Cookies from "js-cookie";

export const watchList = async (movieId: number, userId: number) => {
  try {
    const response = await axiosInstance.post("api/watchlist/", {
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

  const response = await axiosInstance.get(`user/${userString}/`);

  return response.data;
};
