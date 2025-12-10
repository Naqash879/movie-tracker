"use client";
import InputField from "./InputField";
import { updateMovie } from "@/services/movies";
import toast from "react-hot-toast";
import React, { useState } from "react";
import FormButton from "@/components/FormButton";
import { UpdateMovieProps, Movie } from "@/utils/data";
import { useUpdateForm } from "@/context/UpdateFormContext";
import { useMovies } from "@/context/MovieContext";

function UpdateMovie({ props }: { props: UpdateMovieProps }) {
  const { setShowUpdateForm } = useUpdateForm();
  const { setMovies } = useMovies();
  const [name, setName] = useState<string>(props.name ?? "");
  const [description, setDescription] = useState<string>(
    props.description ?? ""
  );
  const [posterURL, setPosterURL] = useState<string>(props.posterURL ?? "");
  const [trailerURL, setTrailerURL] = useState<string>(props.trailerURL ?? "");

  const [rating, setRating] = useState<number>(props.rating ?? 0);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedDescription = description.trim();
    const trimmedPoster = posterURL.trim();
    const trimmedTrailer = trailerURL.trim();
    const res = await updateMovie(
      props.id,
      trimmedName,
      trimmedDescription,
      trimmedPoster,
      trimmedTrailer,
      rating
    );
    console.log(res);
    if (res.success) {
      toast.success(res.message);
      const updatedMovie: Movie = {
        id: props.id,
        name: trimmedName,
        description: trimmedDescription,
        posterURL: trimmedPoster,
        trailerURL: trimmedTrailer,
        rating: rating,
        reviewCount: props.reviewCount,
        alt: props.alt,
        src: props.src,
      };

      setMovies((prev) =>
        prev.map((movie) => (movie.id === props.id ? updatedMovie : movie))
      );
      setShowUpdateForm((pre) => !pre);
    } else {
      return toast.error(res.error);
    }
  };

  return (
    <div className="mt-4 flex flex-col items-center shadow-3xl sm:mt-9 absolute left-0 right-0 mx-auto w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[30%] bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl">Update Movie</h1>

      <form className="flex flex-col w-full" onSubmit={handleSubmit}>
        <InputField
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <InputField
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <InputField
          type="url"
          value={posterURL}
          onChange={(e) => setPosterURL(e.target.value)}
        />

        <InputField
          type="url"
          value={trailerURL}
          onChange={(e) => setTrailerURL(e.target.value)}
        />

        <InputField
          type="number"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
        />
        <FormButton type="submit">Update Movie</FormButton>
      </form>
    </div>
  );
}
export default UpdateMovie;
