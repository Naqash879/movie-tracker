"use client";
import MovieTrailer from "@/components/MovieTrailer";
export default function flexBox() {
  return (
    <div className="flex  flex-col">
      <h1 className="text-4xl font-bold mb-4 flex justify-center">
        Flexbox Example
      </h1>
      {/* Main Page */}
      <div
        className="flex flex-wrap justify-between 
    mx-3
    "
      >
        <div
          className="flex flex-col md:w-1/4
          p-4 gap-2"
        >
          <div className="flex justify-baseline">
            <h2 className="text-2xl text-black font-bold">
              Currently Watching
            </h2>
          </div>
          <div className="flex flex-row gap-3">
            <div className="flex justify-baseline flex-1 ">
              <img
                src={"/images/Component1.png"}
                alt="icon"
                className="w-8 h-8 mr-2 w-full h-auto"
              />
            </div>
            <div className="flex flex-1 ">
              <img
                src={"/images/Component1.png"}
                alt="icon"
                className="w-8 h-8 mr-2 w-full h-auto"
              />
            </div>
          </div>
        </div>
        <div
          className="flex flex-col w-full justify-end  md:w-1/2
           p-4  gap-2"
        >
          <div className="flex justify-baseline">
            <h2 className="text-2xl text-black font-bold">
              Previously Watching
            </h2>
          </div>
          <div className="flex flex-row gap-3">
            <div className="flex justify-baseline flex-1 ">
              <img
                src={"/images/Component1.png"}
                alt="icon"
                className="w-8 h-8 mr-2 w-full h-auto"
              />
            </div>
            <div className="flex flex-1 ">
              <img
                src={"/images/Component1.png"}
                alt="icon"
                className="w-8 h-8 mr-2 w-full h-auto"
              />
            </div>
            <div className="flex flex-1 ">
              <img
                src={"/images/Component1.png"}
                alt="icon"
                className="w-8 h-8 mr-2 w-full h-auto"
              />
            </div>
            <div className="flex flex-1 ">
              <img
                src={"/images/Component1.png"}
                alt="icon"
                className="w-8 h-8 mr-2 w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Movie Detail page */}
      <div className=" p-4 mx-3 flex flex-col gap-2">
        <div className="flex justify-between items-center mx-3">
          <h2 className="text-2xl font-bold  shrink-0">The Grey Man</h2>
          <button className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-[170px] lg:p-2  bg-gray-200 text-black rounded-3xl shrink-0">
            ⛉ Add to WatchList
          </button>
        </div>
        <div className=" flex flex-col-reverse  gap-2 sm:flex-wrap  md:flex-row justify-around  flex-wrap md:flex  ">
          <div className="flex sm:flex-col md:flex-1 md:flex-row flex-wrap w-full">
            <img
              src={"/images/Component1.png"}
              alt="icon"
              className=" mx-auto w-[300px] h-[391px] md:w-[149px] md:h-[250px] md:mx-0 lg:w-1/3 lg:h-[350px]"
            />
            <div className="flex flex-1 w-full md:w-[200px] ">
              <div className="flex flex-col p-4">
                <div className="flex gap-2">
                  <button className="px-4 py-1 bg-gray-200 rounded-4xl text-black border border-black-600">
                    Action
                  </button>
                  <button className="px-4 py-1 bg-gray-200 rounded-4xl text-black border border-black-600">
                    Sci-Fi
                  </button>
                </div>
                <div className="w-full md:w-full md:h-[107px] lg:w-1/1 lg:h-[200px] overflow-hidden mt-2  shrink-1">
                  <p className="text-lg ">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industrys
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
                <div className="flex mt-8">
                  <p className="text-lg text-black shrink-0">IMDB Rating</p>
                  <span
                    className="py-6 ml-4  text-sm text-gray-600
                "
                  >
                    Reviews
                  </span>
                  <p className="text-lg shrink-0">
                    ⭐ 9/
                    <span className="text-sm text-gray-400">10</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex md:flex-1 w-full justify-end">
            <MovieTrailer
              className="rounded-lg w-full h-[250px] md:w-[321px] md:h-[250px]  lg:w-[491px] lg:h-[350px]"
              src="https://www.youtube.com/watch?v=32M1al-Y6Ag&t=608s"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
