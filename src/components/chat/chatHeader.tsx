import { IcBaselineHelp } from "@/components/icones/icBaselineHelp";
import { IcBaselineNotifications } from "@/components/icones/icBaselineNotifications";
import { IcBaselinePeopleAlt } from "@/components/icones/icBaselinePeopleAlt";
import { IcBaselinePushPin } from "@/components/icones/icBaselinePushPin";
import { IcBaselineSearch } from "@/components/icones/IcBaselineSearch";
import { IcBaselineSend } from "@/components/icones/icBaselineSend";

export default function ChatHeader() {
  return (
    <div className="flex items-center justify-between w-full pt-2">
      <div className="pl-4">
        <h3 className="text-[white]">
          <span className="text-[#7b7c85] pr-2">#</span>
          Udemy
        </h3>
      </div>

      <div className="pr-4 flex items-center gap-3 text-[#7b7c85]">
        <IcBaselineNotifications className="cursor-pointer" />
        <IcBaselinePushPin className="cursor-pointer" />
        <IcBaselinePeopleAlt className="cursor-pointer" />
        <div className="flex items-center bg-[#282831] p-1 rounded">
          <input className="bg-[transparent] outline-none text-[white]" type="text" placeholder="検索" />
          <IcBaselineSearch className="cursor-pointer" />
        </div>
        <IcBaselineSend className="cursor-pointer" />
        <IcBaselineHelp className="cursor-pointer" />
      </div>
    </div>
  );
}
