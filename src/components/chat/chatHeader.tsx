import { IcBaselineHelp } from "@/components/icones/icBaselineHelp";
import { IcBaselineNotifications } from "@/components/icones/icBaselineNotifications";
import { IcBaselinePeopleAlt } from "@/components/icones/icBaselinePeopleAlt";
import { IcBaselinePushPin } from "@/components/icones/icBaselinePushPin";
import { IcBaselineSend } from "@/components/icones/icBaselineSend";
import { Input } from "@/components/ui/input";

export default function ChatHeader() {
  return (
    <div className="flex items-center justify-between w-full pt-2">
      <div className="pl-4">
        <h3 className="text-white">
          <span className="text-[#7b7c85] pr-2">#</span>
          Udemy
        </h3>
      </div>

      <div className="pr-4 flex items-center gap-3 text-[#7b7c85]">
        <IcBaselineNotifications className="cursor-pointer" />
        <IcBaselinePushPin className="cursor-pointer" />
        <IcBaselinePeopleAlt className="cursor-pointer" />
        <Input className="bg-transparent text-white" type="text" placeholder="検索" />
        <IcBaselineSend className="cursor-pointer" />
        <IcBaselineHelp className="cursor-pointer" />
      </div>
    </div>
  );
}