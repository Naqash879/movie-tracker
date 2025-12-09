"use client";
import { Movie } from "@/utils/data";
import { createContext, useContext, useState, ReactNode } from "react";
import { IMovieContext } from "@/utils/data";

export const MovieContext = createContext<IMovieContext | undefined>(undefined);

export function MovieProvider({ children }: { children: ReactNode }) {
  const [movies, setMovies] = useState<Movie[]>([]);

  return (
    <MovieContext.Provider value={{ movies, setMovies }}>
      {children}
    </MovieContext.Provider>
  );
}

export function useMovies() {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error("useMovies must be used inside MovieProvider");
  }
  return context;
}
