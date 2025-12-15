"use client";
import RadixModal from "@/components/RadixUI/RadixModal";
import RadixDropDown from "@/components/RadixUI/RadixDropDown";
import RadixTabs from "@/components/RadixUI/RadixTabs";
import ToolTip from "@/components/RadixUI/Tooltip";
import RadixAllComponents from "@/components/RadixUI/RadixAllComponents";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen space-x-5">
      <RadixAllComponents />
      {/* <RadixModal />
      <RadixDropDown />
      <RadixTabs />
      <ToolTip /> */}
    </div>
  );
}
