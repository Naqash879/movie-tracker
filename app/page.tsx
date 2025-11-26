"use client";
import "./globals.css";
import SearchBar from "@/components/SearchBar";
import ProjectImages from "@/components/ProjectImages";
import { useState, useEffect } from "react";
import { currentlyWatching, Movie, suggestedToWatch } from "@/utils/data";
import AuthGuard from "@/components/AuthGuard";
import { getMovies } from "@/services/movies";
import toast from "react-hot-toast";

export default function Home() {
  const [currentlyWatchingList] = useState<Movie[]>(currentlyWatching);
  const [suggestedToWatchList] = useState<Movie[]>(suggestedToWatch);
  const [previouslyWatchedList, setPreviouslyWatchedList] = useState<Movie[]>(
    []
  );
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await getMovies();

        if (!movies || movies.length === 0) {
          toast.error("Failed to fetch movies.");
        } else {
          const allMovies = movies.data;
          setPreviouslyWatchedList(allMovies);
        }
      } catch (error) {
        toast.error("Failed to fetch movies.");
      }
    };
    fetchMovies();
  }, []);
  return (
    <AuthGuard>
      <div className="w-[376px] md:w-screen min-h-screen px-4 lg:px-10">
        <SearchBar />

        <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-6 w-full">
          <div className="flex-1">
            <h2 className="text-[20px] font-bold mb-3">Currently Watching</h2>
            <div className="flex gap-4 max-w-full">
              <div className="flex gap-4 flex-nowrap shrink-0">
                {currentlyWatchingList.map((curr) => (
                  <ProjectImages key={curr.id} src={curr.src} alt={curr.alt} />
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:flex-1 md:flex md:flex-col md:items-start w-full">
            <h2 className="text-[20px] font-bold mb-3 text-left">
              Suggested To Watch
            </h2>
            <div className="flex gap-4 md:flex-wrap">
              {suggestedToWatchList.map((sugg) => (
                <ProjectImages key={sugg.id} src={sugg.src} alt={sugg.alt} />
              ))}
            </div>
          </div>
        </div>
        <div className="w-[400px] md:w-full mt-6 sm:mt-10 md:flex-wrap">
          <h2 className="text-[20px] font-bold mb-3">Previously Watched</h2>

          <div className="flex gap-4 md:flex-wrap">
            {previouslyWatchedList.map((prev) => (
              <ProjectImages
                key={prev.id}
                id={prev.id}
                src={prev.posterURL}
                alt={prev.alt}
              />
            ))}
          </div>
        </div>
      </div>
    </AuthGuard>
  );
}
