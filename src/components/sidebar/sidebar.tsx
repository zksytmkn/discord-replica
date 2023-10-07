import { IcBaselineHeadphones } from "@/components/icones/icBaselineHeadphones";
import { IcBaselineMic } from "@/components/icones/icBaselineMic";
import { IcRoundSettings } from "@/components/icones/icRoundSettings";
import { RadixIconsChevronDown } from "@/components/icones/radixIconsChevronDown";
import { RadixIconsPlus } from "@/components/icones/radixIconsPlus";
import SidebarChannel from "@/components/sidebar/sidebarChannel";

export default function Sidebar() {
  return (
    // Move to home later
    <div className="flex flex-0.35 h-screen bg-[#33363d]">
      {/* sidebarLeft */}
      <div className="flex flex-col items-center bg-[#1a1c20] py-2 px-4">
        <div className="w-15 h-15 bg-[#33363d] rounded-full my-2 p-1">
          <img className="w-12" src="./react.png" alt="" />
        </div>
        <div className="w-15 h-15 bg-[#33363d] rounded-full my-2 p-1">
          <img className="w-12" src="./react.png" alt="" />
        </div>
      </div>
      {/* sidebarRight */}
      <div className="bg-[#2b2d33] w-72 relative">
        <div className="text-[#ffffff] flex items-center justify-between p-5">
          <h1>Discord</h1>
          <RadixIconsChevronDown />
        </div>

        {/* sidebarChannels */}
        <div className="p-3">
          <div className="text-[white] flex justify-between items-center mt-1">
            <div className="flex items-center">
              <RadixIconsChevronDown />
              <h4>プログラミングチャンネル</h4>
            </div>
            <RadixIconsPlus className="cursor-pointer" />
          </div>

          <div className="sidebarChennelList">
            <SidebarChannel />
            <SidebarChannel />
            <SidebarChannel />
            <SidebarChannel />
          </div>

          <div className="absolute bottom-0 flex items-center justify-between w-11/12 py-2 border-t border-solid border-[#686a6e] ml-">
            <div className="flex items-center">
              <img className="w-14" src="./nekomaru.png" alt="" />
              <div className="ml-1">
                <h4 className="text-[white] font-medium">nakamoto</h4>
                <span className="text-[#686a6e]">#8142</span>
              </div>
            </div>

            <div className="flex items-center text-[#686a6e]">
              <IcBaselineMic />
              <IcBaselineHeadphones />
              <IcRoundSettings />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
