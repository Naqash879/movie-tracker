"use client";
import Cookies from "js-cookie";
import { useState } from "react";
import { watchList } from "@/services/watchList";
import { IWatchList } from "@/utils/data";
import toast from "react-hot-toast";
function WatchList({ movieId }: IWatchList) {
  const [isWatchListed, setIsWatchListed] = useState(false);

  const handleAddToWatchList = async () => {
    const userString = Cookies.get("user");
    const user = Number(userString);

    if (!user) {
      toast.error("User not logged in");
      return;
    }

    const data = await watchList(movieId, user);

    if (data.success) {
      setIsWatchListed((prev) => !prev);
      toast.success("Added to WatchList Successfully");
    } else {
      toast.error(data.message || "Failed to Add to WatchList");
    }
  };
  return (
    <button
      className="w-[249px] h-[57px] p-4 bg-gray-200 text-black rounded-3xl shrink-0"
      onClick={handleAddToWatchList}
    >
      {isWatchListed ? "⛉" : "⛊"} Add to WatchList
    </button>
  );
}
export default WatchList;
