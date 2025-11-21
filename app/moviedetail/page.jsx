"use client";
import SearchBar from "@/components/SearchBar";
import { useState } from "react";
import { previouslyWatched } from "@/utils/data";
import ProjectImages from "@/components/ProjectImages";
function MovieDetail() {
  const [previouslyWatchedState] = useState(previouslyWatched);
  return (
    <div className="w-screen px-5 h-screen sm:px-5 sm:w-screen lg:px-20 md:px-5">
      <SearchBar />
      <h1 className=" text-3xl font-bold mt-10 shrink-0">The Grey Man</h1>
      <div className="flex flex-col mt-3 sm:hidden w-full ">
        <div className="w-ful h-[300px] rounded-2xl overflow-hidden px-5">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/BmllggGO4pM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <img
          src="/images/component1.png "
          className="w-[104px] h-[150px] rounded-2xl mx-auto -mt-16 shadow-lg  -mt-30 ml-5"
        />
        <div className="flex gap-4 mt-5">
          <button className="px-4 py-1 bg-gray-200 rounded-4xl text-black border border-black-600">
            Action
          </button>
          <button className="px-4 py-1 bg-gray-200 rounded-4xl text-black border border-black-600">
            Sci-Fi
          </button>
        </div>
        <div>
          <div className="w-full h-auto mt-10">
            <p>
              A thief who steals corporate secrets through the use of
              dream-sharing technology is given the inverse task of planting an
              idea into the mind of a C.E.O., but his tragic past may doom the
              project and his team to disaster.
            </p>
          </div>
          <div className="flex mt-10">
            <p className="text-[18px] text-black">IMDB Rating</p>
            <span
              className="translate-y-5 translate-x-3  text-[15px] text-gray-600
                "
            >
              8k Reviews
            </span>
          </div>
          <p className="text-[15px]">
            ⭐ 9.1/<span className="text-[12px] text-gray-400">10</span>
          </p>
        </div>
      </div>
      <div className="hidden sm:flex sm:flex-wrap sm:flex-col sm:mt-3 md:flex-col lg:flex-row  ">
        <div className="flex flex-1 sm:flex-row  md:flex-row  gap-6">
          <div className="shrink-0">
            <img
              className="sm:w-[250px] md:w-[300px]  md:h-auto lg:w-[196px] h-[291px] object-cover rounded-2xl "
              src="/images/component1.png"
            />
          </div>
          <div className="flex flex-col gap-4 mt-5 flex-1 min-w-0">
            <div className="flex gap-4">
              <button className="px-4 py-1 bg-gray-200 rounded-4xl text-black border border-black-600">
                Action
              </button>
              <button className="px-4 py-1 bg-gray-200 rounded-4xl text-black border border-black-600">
                Sci-Fi
              </button>
            </div>
            <div className="w-full">
              <p className="text-sm break-words">
                A thief who steals corporate secrets through the use of
                dream-sharing technology is given the inverse task of planting
                an idea into the mind of a C.E.O., but his tragic past may doom
                the project and his team to disaster.
              </p>
            </div>

            <div>
              <div className="flex items-center">
                <p className="text-[18px] text-black">IMDB Rating</p>
                <span className="ml-3 text-[15px] text-gray-600">
                  8k Reviews
                </span>
              </div>
              <p className="text-[15px]">
                ⭐ 9.1/<span className="text-[12px] text-gray-400">10</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1  flex sm:items-start  sm:justify-baseline  md:items-end  md:justify-end">
          <iframe
            className=" sm:w-full sm:h-[350px] sm:mt-5  md:w-full  md:h-[391px] md:mt-5 lg:w-[400px] lg:h-[291px]  lg:mt-0  rounded-lg"
            src="https://www.youtube.com/embed/BmllggGO4pM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="w-full flex flex-wrap md:w-full mt-6 sm:mt-10 md:overflow-x-auto">
        <h2 className="text-[20px] font-bold mb-3">Previously Watched</h2>

        <div className="flex w-full gap-4 flex-wrap md:flex-nowrap md:cursor-grab md:active:cursor-grabbing">
          {previouslyWatchedState.map((prev) => (
            <ProjectImages key={prev.id} src={prev.src} alt={prev.alt} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default MovieDetail;
