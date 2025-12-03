"use client";
import InputField from "./InputField";
import { addMovie } from "@/services/movies";
import toast from "react-hot-toast";
import { useState } from "react";
import FormButton from "@/components/FormButton";

function AddMovie() {
  const [movieName, setMovieName] = useState("");
  const [movieDescription, setMovieDescription] = useState("");
  const [moviePosterURL, setMoviePosterURL] = useState("");
  const [movieTrailerURL, setMovieTrailerURL] = useState("");
  const [movieRating, setMovieRating] = useState();
  const [movieReviews, setMovieReviews] = useState();

  const movieAdd = async (e) => {
    e.preventDefault();
    setAddMovieButton((prev) => !prev);
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
      setMovieRating("");
      setMovieReviews("");
    } else {
      toast.error("Movie Not Added");
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
          onChange={(e) => setMovieName(e.target.value)}
        />
        <InputField
          placeholder="Movie Description"
          type="text"
          name={movieDescription}
          value={movieDescription}
          onChange={(e) => setMovieDescription(e.target.value)}
        />
        <InputField
          placeholder="Movie PosterURL"
          type="url"
          name={moviePosterURL}
          value={moviePosterURL}
          onChange={(e) => setMoviePosterURL(e.target.value)}
        />
        <InputField
          placeholder="Movie TrailerURL"
          type="url"
          name={movieTrailerURL}
          value={movieTrailerURL}
          onChange={(e) => setMovieTrailerURL(e.target.value)}
        />
        <InputField
          placeholder="Movie Rating"
          type="number"
          name={movieRating}
          value={movieRating}
          onChange={(e) => setMovieRating(e.target.value)}
        />
        <InputField
          placeholder="Movie Reviews"
          type="number"
          name={movieReviews}
          value={movieReviews}
          onChange={(e) => setMovieReviews(e.target.value)}
        />
        <FormButton>Add Movie</FormButton>
      </form>
    </div>
  );
}
export default AddMovie;
