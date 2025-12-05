"use client";
import Cookies from "js-cookie";
import { useState } from "react";
import { watchList } from "@/services/watchList";
import toast from "react-hot-toast";
import { IWatchList, IWatchState } from "@/utils/data";

function WatchList({ movieId }: IWatchList) {
  const user = Number(Cookies.get("user") || 0);

  const [isWatchListed, setIsWatchListed] = useState<IWatchState[]>(() => {
    const stored = Cookies.get("watchListMovies");
    return stored ? JSON.parse(stored) : [];
  });
  const isActive = isWatchListed.some(
    (item) => item.watchListMovieId === movieId && item.currentUser === user
  );

  const handleAddToWatchList = async () => {
    if (!user) {
      toast.error("User not logged in");
      return;
    }

    if (isActive) {
      toast.error("Already in WatchList");
      return;
    }

    const res = await watchList(movieId, user);

    if (res.success) {
      const newItem = {
        watchListMovieId: movieId,
        currentUser: user,
      };

      const updatedList = [...isWatchListed, newItem];
      Cookies.set("watchListMovies", JSON.stringify(updatedList));

      setIsWatchListed(updatedList);

      toast.success("Added to WatchList");
    } else {
      toast.error(res.message || "Failed to Add to WatchList");
    }
  };

  return (
    <button
      className="w-[249px] h-[57px] p-4 bg-gray-200 text-black rounded-3xl shrink-0"
      onClick={handleAddToWatchList}
    >
      {isActive ? "⛊ Added" : "⛉ Add to WatchList"}
    </button>
  );
}

export default WatchList;
