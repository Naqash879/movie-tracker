"use client";
import ProjectImages from "@/components/ProjectImages";
import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import { DynamicSearchData, Movie } from "@/utils/data";
export default function SearchData() {
  const [DynamicSearchDataState] = useState<Movie[]>(DynamicSearchData);
  return (
    <div className="w-screen px-5 h-screen sm:px-5 md:px-5 lg:px-20 ">
      <SearchBar />
      <div>
        <p className="hidden sm:block text-[15px] font-bold mt-15">
          Showing Search result for:
          <span className="text-lg text-gray-400"> Incap</span>
        </p>
        <div className="flex mt-5 sm:mt-3">
          <div className="flex flex-wrap gap-4 md:flex-wrap">
            {DynamicSearchDataState.map((search) => (
              <ProjectImages
                key={search.id}
                src={search.src}
                alt={search.alt}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
