"use client";
import { useState } from "react";
import { FaSearch, FaPlus } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import AddMovie from "@/components/AddMovie";

function SearchBar() {
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const [value, setValue] = useState("");
  const [addMovieButton, setAddMovieButton] = useState(false);
  const router = useRouter();

  const handleSearchClick = () => {
    setOpenSearchBar((prev) => !prev);
  };
  const handleLogout = () => {
    Cookies.remove("user");
    router.push("/login");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      router.push(`/search?searchValue=${value}`);
    }
  };
  const handleAddMovieButton = () => {
    setAddMovieButton((prev) => (prev = !prev));
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
      {addMovieButton && <AddMovie />}
    </div>
  );
}
export default SearchBar;
