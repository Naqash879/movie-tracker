"use client";
import "./globals.css";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <div className="w-full min-h-screen px-4 lg:px-10">
      <SearchBar />

      <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-6">
        <div className="flex-1">
          <h2 className="text-[22px] font-bold mb-3">Currently Watching</h2>
          <div className="flex gap-4 overflow-x-auto max-w-full">
            <div className="flex gap-4 flex-nowrap">
              <img
                className="w-[158px] h-[234px] lg:w-[177px] lg:h-[263px] rounded-2xl flex-shrink-0"
                src="/images/Component1.png"
                alt=""
              />
              <img
                className="w-[158px] h-[234px] lg:w-[177px] lg:h-[263px] rounded-2xl flex-shrink-0"
                src="/images/Component2.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:flex-col sm:items-start">
          <h2 className="text-[22px] font-bold mb-3 text-left">
            Suggested To Watch
          </h2>
          <div className="overflow-x-auto w-full">
            <div className="flex gap-4 flex-wrap">
              <img
                className="w-[158px] h-[234px] lg:w-[177px] lg:h-[263px] rounded-2xl flex-shrink-0"
                src="/images/Component1.png"
                alt=""
              />
              <img
                className="w-[158px] h-[234px] lg:w-[177px] lg:h-[263px] rounded-2xl flex-shrink-0"
                src="/images/Component2.png"
                alt=""
              />
              <img
                className="w-[158px] h-[234px] lg:w-[177px] lg:h-[263px] rounded-2xl flex-shrink-0"
                src="/images/Component3.png"
                alt=""
              />
              <img
                className="w-[158px] h-[234px] lg:w-[177px] lg:h-[263px] rounded-2xl flex-shrink-0"
                src="/images/Component4.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
