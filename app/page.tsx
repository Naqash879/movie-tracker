"use client";
import "./globals.css";
import SearchBar from "@/components/SearchBar";

function Home() {
  return (
    <div className="w-screen h-screen">
      <SearchBar />
      <div className="main ml-20 mt-12 ">
        <span className="font-semibold text-black">Current Watching</span>
        <div className="flex mt-3">
          <div className="columns-2 gap-6">
            <img
              className="w-[177px] h-[263px] rounded-3xl"
              src="/images/Component1.png"
              alt="component1"
            />
            <img
              className="w-[177px] h-[263px] rounded-3xl"
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
