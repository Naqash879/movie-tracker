"use client";
import InputField from "./InputField";
import { addMovie } from "@/services/movies";
import toast from "react-hot-toast";
import React, { useState } from "react";
import FormButton from "@/components/FormButton";
import { handleError } from "@/services/axios";

function AddMovie() {
  const [movieName, setMovieName] = useState("");
  const [movieDescription, setMovieDescription] = useState("");
  const [moviePosterURL, setMoviePosterURL] = useState("");
  const [movieTrailerURL, setMovieTrailerURL] = useState("");
  const [movieRating, setMovieRating] = useState<number>(0);
  const [movieReviews, setMovieReviews] = useState<number>(0);

  const movieAdd = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    movieName.trim();
    movieDescription.trim();
    moviePosterURL.trim();
    movieTrailerURL.trim();
    const res = await addMovie(
      movieName,
      movieDescription,
      moviePosterURL,
      movieTrailerURL,
      movieRating,
      movieReviews
    );

    if (res.success) {
      toast.success("Movie Added Successfully");
      setMovieName("");
      setMovieDescription("");
      setMoviePosterURL("");
      setMovieTrailerURL("");
      setMovieRating(0);
      setMovieReviews(0);
    } else {
      const error = handleError(res.error);
      toast.error(error.message);
    }
  };
  return (
    <div className=" mt-4 flex flex-col items-center shadow-3xl  sm:mt-9 absolute left-0 right-0 mx-auto w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[30%] bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl">Add Movie </h1>
      <form className="flex flex-col w-full" onSubmit={movieAdd}>
        <InputField
          placeholder="Movie Title"
          type="text"
          name={movieName}
          value={movieName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setMovieName(e.target.value)
          }
        />
        <InputField
          placeholder="Movie Description"
          type="text"
          name={movieDescription}
          value={movieDescription}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setMovieDescription(e.target.value)
          }
        />
        <InputField
          placeholder="Movie PosterURL"
          type="url"
          name={moviePosterURL}
          value={moviePosterURL}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setMoviePosterURL(e.target.value)
          }
        />
        <InputField
          placeholder="Movie TrailerURL"
          type="url"
          name={movieTrailerURL}
          value={movieTrailerURL}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setMovieTrailerURL(e.target.value)
          }
        />
        <InputField
          placeholder="Movie Rating"
          type="number"
          name={movieRating.toString()}
          value={movieRating}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setMovieRating(Number(e.target.value))
          }
        />
        <InputField
          placeholder="Movie Reviews"
          type="number"
          name={movieReviews.toString()}
          value={movieReviews}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setMovieReviews(Number(e.target.value))
          }
        />
        <FormButton>Add Movie</FormButton>
      </form>
    </div>
  );
}
export default AddMovie;
