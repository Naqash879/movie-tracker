"use client";
import "./globals.css";
import SearchBar from "@/components/SearchBar";

function Home() {
  return (
    <div className="w-screen h-screen">
      {<SearchBar />}
      <div className="mt-10 md:mt-20 main md:ml-15">
        <span className="text-[20px] text-black ml-4 md:ml-5">
          Currently Watching
        </span>
        <div className="flex mt-0.5 gap-4 sm:mt-4">
          <div className="pl-[20px]">
            <img
              className="w-[158px] h-[234px] md:w-[177px] md:h-[263px] rounded-2xl"
              src="/images/Component1.png"
              alt="component1"
            />
          </div>
          <div className="">
            <img
              className="w-[158px] h-[234px] md:w-[177px] md:h-[263px] rounded-2xl"
              src="/images/Component2.png"
              alt="component2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
