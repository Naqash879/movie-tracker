"use client";
import SearchBar from "@/components/SearchBar";
import IframMovieTrial from "@/components/IframMovieTrial";
function MovieDetail() {
  return (
    <div className="w-screen h-screen  px-20">
      <SearchBar />
      <h1 className=" text-3xl font-bold mt-10 shrink-0">The Grey Man</h1>
      <div className="flex flex-col mt-3 sm:hidden w-full ">
        <div className="flex relative px-5">
          <IframMovieTrial className="w-full h-[300px] rounded-lg" />
          <div className="flex items-start justify-baseline absolute bottom-0 translate-y-10 left-4 ">
            <img
              src="/images/component1.png "
              className="w-[104px] h-[150px] rounded-2xl mx-auto  shadow-lg  ml-5"
            />
          </div>
        </div>
        <div className="flex gap-4 mt-17">
          <button className="px-4 py-1 bg-gray-200 rounded-4xl text-black border border-black-600">
            Action
          </button>
          <button className="px-4 py-1 bg-gray-200 rounded-4xl text-black border border-black-600">
            Sci-Fi
          </button>
        </div>
        <div>
          <div className="w-full h-auto mt-8">
            <p className="text-lg">
              A thief who steals corporate secrets through the use of
              dream-sharing technology is given the inverse task of planting an
              idea into the mind of a C.E.O., but his tragic past may doom the
              project and his team to disaster.
            </p>
          </div>
          <div className="flex mt-8">
            <p className="text-lg text-black">IMDB Rating</p>
            <span
              className="py-6 ml-4  text-sm text-gray-600
                "
            >
              8k Reviews
            </span>
          </div>
          <p className="text-lg">
            ⭐ 9.1/<span className="text-sm text-gray-400">10</span>
          </p>
        </div>
      </div>
      <div className="hidden sm:flex sm:flex-wrap sm:flex-col sm:mt-3 md:flex-col lg:flex-row  ">
        <div className="flex flex-1 sm:flex-row  md:flex-row  gap-6">
          <div className="shrink-0">
            <img
              className="w-[196px] h-[291px] object-cover rounded-2xl"
              src="/images/component1.png"
            />
          </div>
          <div className="flex flex-col gap-4 mt-5 ">
            <div className="flex gap-4">
              <button className="px-4 py-1 bg-gray-200 rounded-4xl text-black border border-black-600">
                Action
              </button>
              <button className="px-4 py-1 bg-gray-200 rounded-4xl text-black border border-black-600">
                Sci-Fi
              </button>
            </div>
            <div className="w-[413px]">
              <p className="text-lg break-words">
                A thief who steals corporate secrets through the use of
                dream-sharing technology is given the inverse task of planting
                an idea into the mind of a C.E.O., but his tragic past may doom
                the project and his team to disaster.
              </p>
            </div>
            <div>
              <div className="flex items-center">
                <p className="text-lg text-black">IMDB Rating</p>
                <span className="p-6 ml-4 text-sm text-gray-600">
                  8k Reviews
                </span>
              </div>
              <p className="text-lg">
                ⭐ 9.1/<span className="text-sm text-gray-400">10</span>
              </p>
            </div>
          </div>

          <div className="flex flex-1  h-[300px] items-end justify-end">
            <IframMovieTrial className="w-[521px] h-[300px] rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default MovieDetail;
