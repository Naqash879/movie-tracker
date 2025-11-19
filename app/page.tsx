"use client";
import "./globals.css";
import SearchBar from "@/components/SearchBar";
import ProjectImages from "@/components/ProjectImages";

export default function Home() {
  return (
    <div className="w-full min-h-screen px-4 lg:px-10">
      <SearchBar />

      <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-6">
        <div className="flex-1">
          <h2 className="text-[20px] font-bold mb-3">Currently Watching</h2>
          <div className="flex gap-4 overflow-x-auto max-w-full">
            <div className="flex gap-4 flex-nowrap">
              <ProjectImages src="/images/Component1.png" alt="Component1" />
              <ProjectImages src="/images/Component2.png" alt="Component2" />
            </div>
          </div>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:flex-col sm:items-start">
          <h2 className="text-[20px] font-bold mb-3 text-left">
            Suggested To Watch
          </h2>
          <div className="flex gap-4 flex-wrap sm:flex-nowrap sm:overflow-x-auto w-full">
            <div className="flex gap-4 flex-wrap sm:flex-nowrap w-max ">
              <ProjectImages src="/images/Component1.png" alt="Component1" />
              <ProjectImages src="/images/Component2.png" alt="Component2" />
              <ProjectImages src="/images/Component3.png" alt="Component3" />
              <ProjectImages src="/images/Component4.png" alt="Component4" />
              <ProjectImages src="/images/Component5.png" alt="Component5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
