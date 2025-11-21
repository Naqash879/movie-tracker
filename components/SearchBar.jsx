import { useState } from "react";
import { FaSearch, FaPlus } from "react-icons/fa";

export default function SearchBar() {
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const [value, setValue] = useState("");

  const handleSearchClick = () => {
    setOpenSearchBar((prev) => !prev);
  };

  return (
    <div className="w-full px-4 mt-4 ">
      <div className="sm:hidden flex items-center justify-between  ">
        <h1 className="-ml-2 text-xl font-semibold shrink-0">Movie Tracker</h1>
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
        <div className="flex-1 flex -ml-3 md:hidden">
          <div className="flex gap-3 bg-[#D9D9D9] w-[650px] h-[57px] rounded-xl mt-2">
            <input
              type="text"
              placeholder="🔍︎ Search a movie or a series"
              className="w-full text-center text-black outline-none bg-transparent placeholder:text-black"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
        </div>
      )}
      <div className="hidden sm:flex md:flex-row items-center gap-4">
        <div className="w-full md:w-auto flex justify-center md:justify-start">
          <h1 className="text-2xl font-semibold tracking-wide">
            Movie Tracker
          </h1>
        </div>

        <div className="w-full md:flex-1 flex justify-center md:justify-end">
          <div
            className="flex gap-3 bg-[#D9D9D9] w-full sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[630px]
        h-[57px] rounded-xl px-4"
          >
            <input
              type="text"
              placeholder="🔍︎ Search a movie or a series"
              className="w-full text-center text-black outline-none bg-transparent placeholder:text-black"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
