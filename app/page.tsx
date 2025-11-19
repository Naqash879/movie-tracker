"use client";
import "./globals.css";
import SearchBar from "@/components/SearchBar";
import ProjectImages from "@/components/ProjectImages";

export default function Home() {
  return (
    <div className="w-[376px] md:w-screen min-h-screen px-4 lg:px-10">
      <SearchBar />

      <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-6 w-full">
        <div className="flex-1">
          <h2 className="text-[20px] font-bold mb-3">Currently Watching</h2>
          <div className="flex gap-4 overflow-x-auto max-w-full">
            <div className="flex gap-4 flex-nowrap flex-shrink-0">
              <ProjectImages src="/images/component1.png" alt="Component1" />
              <ProjectImages src="/images/component2.png" alt="Component2" />
            </div>
          </div>
        </div>
        <div className="hidden md:flex-1 md:flex md:flex-col md:items-start w-full">
          <h2 className="text-[20px] font-bold mb-3 text-left">
            Suggested To Watch
          </h2>
          <div className="flex gap-4 md:flex-wrap">
            <ProjectImages src="/images/component1.png" alt="Component1" />
            <ProjectImages src="/images/component2.png" alt="Component2" />
            <ProjectImages src="/images/component3.png" alt="Component3" />
            <ProjectImages src="/images/component4.png" alt="Component4" />
          </div>
        </div>
      </div>
      <div className="w-[400px] md:w-full mt-6 sm:mt-10">
        <h2 className="text-[20px] font-bold mb-3">Previously Watched</h2>

        <div className="flex w-full gap-4 flex-wrap md:flex-nowrap md:overflow-x-auto md:scrollbar-none md:cursor-grab md:active:cursor-grabbing">
          <ProjectImages src="/images/component1.png" alt="Component1" />
          <ProjectImages src="/images/component1.png" alt="Component1" />
          <ProjectImages src="/images/component1.png" alt="Component1" />
          <ProjectImages src="/images/component2.png" alt="Component2" />
          <ProjectImages src="/images/component3.png" alt="Component3" />
          <ProjectImages src="/images/component4.png" alt="Component4" />
          <ProjectImages src="/images/component5.png" alt="Component5" />
          <ProjectImages src="/images/component6.png" alt="Component6" />
          <ProjectImages src="/images/component7.png" alt="Component7" />
          <ProjectImages src="/images/component3.png" alt="Component3" />
          <ProjectImages src="/images/component4.png" alt="Component4" />
          <ProjectImages src="/images/component5.png" alt="Component5" />
        </div>
      </div>
    </div>
  );
}
