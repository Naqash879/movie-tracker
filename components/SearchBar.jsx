import { FaSearch } from "react-icons/fa";
import { useState } from "react";
export default function SearchBar() {
  const [value, setValue] = useState("");
  return (
    <div className="flex ">
      <h1 className="md:ml-20 md:mt-16  text-2xl font-semibold tracking-wide">
        Movie Maker
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
  );
}
