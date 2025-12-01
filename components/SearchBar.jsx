"use client";
import { useState } from "react";
import { FaSearch, FaPlus } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import InputField from "./InputField";
import FormButton from "./FormButton";
import { addMovie } from "@/services/movies";

function SearchBar() {
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const [value, setValue] = useState("");
  const [movieName, setMovieName] = useState("");
  const [movieDescription, setMovieDescription] = useState("");
  const [moviePosterURL, setMoviePosterURL] = useState("");
  const [movieTrailerURL, setMovieTrailerURL] = useState("");
  const [movieRating, setMovieRating] = useState();
  const [movieReviews, setMovieReviews] = useState();
  const [addMovieButton, setAddMovieButton] = useState(false);
  const router = useRouter();
  movieName.trim();
  movieDescription.trim();
  moviePosterURL.trim();
  movieTrailerURL.trim();

  const handleSearchClick = () => {
    setOpenSearchBar((prev) => !prev);
  };
  const handleLogout = () => {
    Cookies.remove("user");
    router.push("/login");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      router.push(`/search?searchValue=${value}`);
    }
  };
  const handleAddMovieButton = () => {
    setAddMovieButton((prev) => (prev = !prev));
  };
  const movieAdd = async (e) => {
    e.preventDefault();

    setAddMovieButton((prev) => !prev);

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
    <div className="w-full  px-4 mt-4 relative">
      <div className="flex items-center justify-between sm:hidden ">
        <h1 className="-ml-4 text-xl font-semibold shrink-0">Movie Tracker</h1>
        <div className="flex items-right gap-3">
          <button
            onClick={handleSearchClick}
            className="w-10 h-10 rounded-full flex items-center justify-center
             bg-gray-400 cursor-not-allowed"
          >
            <FaSearch className="text-black" />
          </button>

          <button className="w-10 h-10 sm:flex bg-[#D9D9D9] rounded-full flex items-center justify-center">
            <FaPlus className="text-black" />
          </button>
        </div>
      </div>

      {openSearchBar && (
        <div className="flex-1 flex -ml-3 md:hidden">
          <div className="flex gap-3 bg-[#D9D9D9] w-[650px] h-[57px] rounded-xl mt-2">
            <input
              type="text"
              placeholder="🔍︎ Search a movie or a series"
              className="w-full text-center text-black outline-none bg-transparent placeholder:text-black"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>
        </div>
      )}
      <div className="hidden sm:flex md:flex-row items-center gap-4 ">
        <div className="w-full md:w-auto flex sm:items-start sm:justify-baseline  md:justify-start">
          <h1 className="text-2xl font-semibold tracking-wide shrink-0">
            Movie Tracker
          </h1>
        </div>

        <div className="flex sm:items-start sm:justify-baseline sm:mr-4  md:items-center md:justify-baseline md:w-[630px]  lg:flex-1 lg:items-center lg:justify-center ">
          <div
            className="flex gap-3 bg-[#D9D9D9] sm:w-[350px]  xl:w-[630px]
      h-[57px]  rounded-xl px-4 shrink-0"
          >
            <input
              type="text"
              placeholder="🔍︎ Search a movie or a series"
              className="w-full text-center text-black outline-none bg-transparent placeholder:text-black"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>

          <button
            className="w-10 h-10 ml-3 sm:flex bg-[#D9D9D9] rounded-full flex items-center justify-center"
            onClick={handleAddMovieButton}
          >
            <FaPlus className="text-black" />
          </button>
        </div>
        <div className="flex">
          <button
            className="bg-red-600 text-white p-4 rounded-2xl"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
      {addMovieButton && (
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
      )}
    </div>
  );
}
export default SearchBar;
