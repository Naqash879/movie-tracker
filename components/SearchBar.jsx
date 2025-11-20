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
      <div className="flex items-center justify-between md:hidden ">
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
      <div className="hidden md:flex items-center md:w-full py-6 px-4">
        <div className="flex-1 -ml-8">
          <h1 className="text-2xl font-semibold tracking-wide">
            Movie Tracker
          </h1>
        </div>
        <div className="flex-1"></div>
        <div className="flex-1 flex ">
          <div
            className="flex gap-3 bg-[#D9D9D9] w-full xl:w-[630px]
      h-[57px]  rounded-xl px-4 shrink-0"
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
        <div className="flex-1"></div>
      </div>
    </div>
  );
}
