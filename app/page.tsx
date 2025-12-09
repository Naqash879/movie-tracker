"use client";
import "./globals.css";
import SearchBar from "@/components/SearchBar";
import ProjectImages from "@/components/ProjectImages";
import { useState, useEffect } from "react";
import { currentlyWatching, Movie, suggestedToWatch } from "@/utils/data";
import AuthGuard from "@/components/AuthGuard";
import { getMovies, deteteMovieById } from "@/services/movies";
import { useCallback } from "react";
import toast from "react-hot-toast";
import FormButton from "@/components/FormButton";
import UpdateMovie from "@/components/UpdateMovie";
import { useMovies } from "@/context/MovieContext";
import { useUpdateForm } from "@/context/UpdateFormContext";

export default function Home() {
  const [currentlyWatchingList] = useState<Movie[]>(currentlyWatching);
  const [suggestedToWatchList] = useState<Movie[]>(suggestedToWatch);
  const { showUpdateForm, setShowUpdateForm } = useUpdateForm();
  const [selectedMovieId, setSelectedMovieId] = useState<number | null>(null);

  const { movies, setMovies } = useMovies();
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await getMovies();

        if (!movies || movies.length === 0) {
          toast.error("Failed to fetch movies.");
        } else {
          const allMovies = movies.data;
          setMovies(allMovies);
        }
      } catch (error) {
        toast.error("Failed to fetch movies.");
      }
    };
    fetchMovies();
  }, []);
  const handleDeleteMovie = useCallback(
    async (id: number | string | undefined) => {
      const res = await deteteMovieById(Number(id));
      if (res.success) {
        toast.success(res.message);
        setMovies((prev) => prev.filter((movie) => movie.id !== id));
      } else {
        toast.error(res.error);
      }
    },
    [setMovies]
  );

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
        <div className="mt-6 sm:mt-10 w-full">
          <h2 className="text-[20px] font-bold mb-3">Previously Watched</h2>

          <div className="flex flex-wrap gap-4 sm:flex-wrap">
            {movies.map((prev) => (
              <div className="flex flex-col" key={prev.id}>
                <p className="text-lg">id:{prev.id}</p>
                <ProjectImages
                  id={String(prev.id)}
                  src={prev.posterURL}
                  alt={prev.alt}
                />

                <FormButton
                  className="bg-amber-700 rounded-2xl mt-2 text-amber-100"
                  onClick={() => handleDeleteMovie(prev.id)}
                >
                  Delete
                </FormButton>

                <FormButton
                  className="bg-green-700 rounded-2xl mt-2 text-amber-100"
                  onClick={() => {
                    setSelectedMovieId(Number(prev.id));
                    setShowUpdateForm((pre) => !pre);
                  }}
                >
                  Update
                </FormButton>

                {selectedMovieId === prev.id && showUpdateForm && (
                  <UpdateMovie
                    props={{
                      id: prev.id,
                      name: prev.name,
                      description: prev.description,
                      posterURL: prev.posterURL,
                      trailerURL: prev.trailerURL,
                      rating: prev.rating,
                      reviewCount: prev.reviewCount,
                      src: prev.posterURL,
                      alt: prev.alt,
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </AuthGuard>
  );
}
