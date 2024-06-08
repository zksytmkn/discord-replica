import { Channels } from "@/types/supabase";

import { IcBaselineHelp } from "@/components/icones/icBaselineHelp";
import { IcBaselineNotifications } from "@/components/icones/icBaselineNotifications";
import { IcBaselinePeopleAlt } from "@/components/icones/icBaselinePeopleAlt";
import { IcBaselinePushPin } from "@/components/icones/icBaselinePushPin";
import { IcBaselineSend } from "@/components/icones/icBaselineSend";
import { Input } from "@/components/ui/input";

type Props = {
  channel: Channels | null;
};

export default function ChatHeader(props: Props) {
  const { channel } = props;

  return (
    <div className="flex w-full items-center justify-between py-2">
      <div className="pl-4">
        <h3 className="text-white">
          <span className="pr-2 text-[#7b7c85]">#</span>
          {channel ? channel.name : "No channel selected"}
        </h3>
      </div>
      <div className="hidden lg:inline-block">
        <div className="flex items-center gap-3 pr-4 text-[#7b7c85]">
          <IcBaselineNotifications className="cursor-pointer" />
          <IcBaselinePushPin className="cursor-pointer" />
          <IcBaselinePeopleAlt className="cursor-pointer" />
          <Input className="bg-transparent text-white" type="text" placeholder="検索" />
          <IcBaselineSend className="cursor-pointer" />
          <IcBaselineHelp className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
