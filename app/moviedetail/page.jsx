"use client";
import SearchBar from "@/components/SearchBar";
function MovieDetail() {
  return (
    <div className="w-screen h-screen border-2 border-amber-500 px-20">
      <SearchBar />
      <h1 className="text-3xl font-bold mt-10">The Grey Man</h1>
      <div className="flex border-2 border-b-blue-400 ">
        <div className="flex flex-1 md:flex-row flex-col gap-6">
          <div>
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
            <div>
              <p className="max-w-[413px]">
                A thief who steals corporate secrets through the use of
                dream-sharing technology is given the inverse task of planting
                an idea into the mind of a C.E.O., but his tragic past may doom
                the project and his team to disaster.
              </p>
            </div>
            <div>
              <div className="flex">
                <p className="text-[18px] text-black">IMDP Rating</p>
                <span>8k Reviews</span>
              </div>
              <span>9.1/10</span>
            </div>
          </div>

          <div className="flex-1 border-2 border-purple-400 h-[300px]"></div>
        </div>
      </div>
    </div>
  );
}
export default MovieDetail;
