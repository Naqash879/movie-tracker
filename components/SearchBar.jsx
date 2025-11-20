import { useState } from "react";
import { FaSearch, FaPlus } from "react-icons/fa";

export default function SearchBar() {
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const [value, setValue] = useState("");

  const handleSearchClick = () => {
    setOpenSearchBar((prev) => !prev);
  };

  return (
    <div className="w-full md:w-[1240px] px-4 mt-4 ">
      <div className="flex items-center justify-between md:hidden border-2 border-amber-50">
        <h1 className="-ml-4 text-xl font-semibold shrink-0">Movie Tracker</h1>
        <div className="flex items-right gap-3">
          <button
            onClick={handleSearchClick}
            className="w-10 h-10 rounded-full flex items-center justify-center
             bg-gray-400 cursor-not-allowed"
          >
            <FaSearch className="text-black" />
          </button>

          <button className="w-10 h-10 bg-[#D9D9D9] rounded-full flex items-center justify-center">
            <FaPlus className="text-black" />
          </button>
        </div>
      </div>

      {openSearchBar && (
        <div className="mt-4 md:hidden">
          <div className="relative">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none" />
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Search a movie or a series"
              className="w-full bg-[#D9D9D9] rounded-full py-3 pl-12 pr-4 focus:outline-none"
            />
          </div>
        </div>
      )}

      <div className="hidden md:flex ">
        <h1 className="md:-ml-2 md:mt-13  text-2xl font-semibold tracking-wide shrink-0">
          Movie Tracker
        </h1>
        <form className="relative md:mt-10 md:ml-104 md:w-[630px] md:h-[57px] ">
          {value.length === 0 && (
            <FaSearch className="absolute left-49 md:mt-5  text-gray-500 " />
          )}
          <input
            className="w-full rounded-4xl bg-[#D9D9D9] placeholder:text-black placeholder:text-center focus:outline-none p-4"
            placeholder="Search a movie or a series"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
}
