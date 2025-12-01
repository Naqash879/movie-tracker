import Cookies from "js-cookie";
export const watchList = async (movieId: number, user: number) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const raw = JSON.stringify({
    userId: user,
    movieId: movieId,
  });
  const requestOptions: RequestInit = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  const response = await fetch(
    "http://localhost:8000/api/watchlist/",
    requestOptions
  );
  return response.json();
};

export const getWatchList = async () => {
  const userString = Cookies.get("user");

  if (!userString) return { success: false, message: "User not logged in" };

  const requestOptions: RequestInit = {
    method: "GET",
    redirect: "follow",
  };

  const response = await fetch(
    `http://localhost:8000/api/watchlist/user/${userString}/`,
    requestOptions
  );

  return response.json();
};
