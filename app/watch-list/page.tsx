"use client";
import ProjectImages from "@/components/ProjectImages";
import SearchBar from "@/components/SearchBar";
import { Movie } from "@/utils/data";
import AuthGuard from "@/components/AuthGuard";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { getWatchList } from "@/services/watchList";
import { useMovies } from "@/context/MovieContext";

export default function WishList() {
  const { movies, setMovies } = useMovies();

  useEffect(() => {
    const fetchCheckList = async () => {
      try {
        const checkListMovies = await getWatchList();
        if (!checkListMovies || checkListMovies.length === 0) {
          toast.error("No movies found in wishlist");
          setMovies([]);
          return;
        } else {
          setMovies(checkListMovies.data);
        }
      } catch (error) {
        toast.error("Error fetching wishlist movies");
        setMovies([]);
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
              {movies.map((watchList: Movie) => (
                <ProjectImages
                  key={watchList.id}
                  id={String(watchList.movieId)}
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
