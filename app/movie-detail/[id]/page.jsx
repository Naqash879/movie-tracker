import SearchBar from "@/components/SearchBar";
import MovieTrailer from "@/components/MovieTrailer";
import AuthGuard from "@/components/AuthGuard";
import { getMovieById } from "@/services/movies";
import WatchList from "@/components/WatchList";
const MovieDetail = async ({ params }) => {
  const { id } = await params;
  const data = await getMovieById(id);

  return (
    <AuthGuard>
      <div className="w-screen h-screen  px-20">
        <SearchBar />
        <h1 className=" text-3xl font-bold mt-10 shrink-0">{data?.name}</h1>
        <div className="hidden md:flex items-end justify-end ">
          <WatchList movieId={data?.id} />
        </div>
        <div className="flex flex-col mt-3 sm:hidden w-full ">
          <div className="flex relative px-5">
            <MovieTrailer
              className="w-full h-[300px] rounded-lg"
              src={data?.trailerURL}
            />
            <div className="flex items-start justify-baseline absolute bottom-0 translate-y-10 left-4 ">
              <img
                src={data?.posterURL}
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
            <div className="w-full h-auto mt-8 ">
              <p className="text-lg ">{data?.description}</p>
            </div>
            <div className="flex mt-8">
              <p className="text-lg text-black">IMDB Rating</p>
              <span
                className="py-6 ml-4  text-sm text-gray-600
                "
              >
                {data?.reviewCount} Reviews
              </span>
            </div>
            <p className="text-lg">
              ⭐ {data?.reviewCount}/
              <span className="text-sm text-gray-400">10</span>
            </p>
          </div>
        </div>
        <div className="hidden sm:flex sm:flex-wrap sm:flex-col sm:mt-3 md:flex-col lg:flex-row  ">
          <div className="flex flex-1 sm:flex-row  md:flex-row  gap-6">
            <div className="shrink-0">
              <img
                className="w-[196px] h-[291px] object-cover rounded-2xl"
                src={data?.posterURL}
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
                <p className="text-lg wrap-break-word line-clamp-4">
                  {data?.description}
                </p>
              </div>
              <div>
                <div className="flex items-center">
                  <p className="text-lg text-black">IMDB Rating</p>
                  <span className="pt-10 ml-4 text-sm text-gray-600">
                    {data?.reviewCount} Reviews
                  </span>
                </div>
                <p className="text-lg">
                  ⭐ {data?.rating}/
                  <span className="text-sm text-gray-400">10</span>
                </p>
              </div>
            </div>

            <div className="flex flex-1  h-[300px] items-end justify-end">
              <MovieTrailer
                className="w-[521px] h-[300px] rounded-lg"
                src={data?.trailerURL}
              />
            </div>
          </div>
        </div>
      </div>
    </AuthGuard>
  );
};
export default MovieDetail;
