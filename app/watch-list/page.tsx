"use client";
import ProjectImages from "@/components/ProjectImages";
import SearchBar from "@/components/SearchBar";
import { Movie } from "@/utils/data";
import AuthGuard from "@/components/AuthGuard";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { getWatchList } from "@/services/watchList";

export default function WishList() {
  const [dynamicWatchListDataState, setdynamicWatchListDataState] = useState<
    Movie[]
  >([]);

  useEffect(() => {
    const fetchCheckList = async () => {
      try {
        const checkListMovies = await getWatchList();
        if (!checkListMovies || checkListMovies.length === 0) {
          toast.error("No movies found in wishlist");
          setdynamicWatchListDataState([]);
          return;
        } else {
          toast.success("movies found in wishlist");
          setdynamicWatchListDataState(checkListMovies.data);
        }
      } catch (error) {
        toast.error("Error fetching wishlist movies");
        setdynamicWatchListDataState([]);
      }
    };
    fetchCheckList();
  }, []);
  return (
    <AuthGuard>
      <div className="w-screen px-5 h-screen sm:px-5 md:px-5 lg:px-20 ">
        <SearchBar />
        <div>
          <div className="flex mt-5 sm:mt-3">
            <div className="flex flex-wrap gap-4 md:flex-wrap">
              {dynamicWatchListDataState.map((watchList: Movie) => (
                <ProjectImages
                  key={watchList.id}
                  id={watchList.movieId}
                  src={watchList.posterURL}
                  alt={watchList.name}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </AuthGuard>
  );
}
