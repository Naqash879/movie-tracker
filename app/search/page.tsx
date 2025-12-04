"use client";
import ProjectImages from "@/components/ProjectImages";
import SearchBar from "@/components/SearchBar";
import { Movie } from "@/utils/data";
import AuthGuard from "@/components/AuthGuard";
import { getMovies } from "@/services/movies";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useMovies } from "@/context/MovieContext";

export default function SearchData() {
  const searchParams = useSearchParams();
  const searchValue = searchParams?.get("searchValue") || "";

  const { movies, setMovies } = useMovies();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await getMovies();

        if (!movies || movies.length === 0) {
          toast.error("No movies found");
          setMovies([]);
          return;
        }

        const filteredMovies = movies.data.filter((movie: Movie) =>
          (movie.name ? movie.name : "").toLowerCase().includes(searchValue)
        );

        if (filteredMovies.length === 0) {
          toast.error("Searched movie not found");
          setMovies([]);
        } else {
          setMovies(filteredMovies);
        }
      } catch (error) {
        toast.error("Error fetching movies");
        setMovies([]);
      }
    };

    if (searchValue) fetchMovies();
  }, [searchValue]);
  return (
    <AuthGuard>
      <div className="w-screen px-5 h-screen sm:px-5 md:px-5 lg:px-20 ">
        <SearchBar />
        <div>
          <p className="hidden sm:block text-[15px] font-bold mt-15">
            Showing Search result for:
            <span className="text-lg text-gray-400">{searchValue}</span>
          </p>
          <div className="flex mt-5 sm:mt-3">
            <div className="flex flex-wrap gap-4 md:flex-wrap">
              {movies.map((search) => (
                <ProjectImages
                  key={search.id}
                  id={search.id}
                  src={search.posterURL}
                  alt={search.name}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </AuthGuard>
  );
}
