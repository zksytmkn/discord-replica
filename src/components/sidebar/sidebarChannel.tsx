import { channelAtom } from "@/state/channel";
import { Channels } from "@/types/supabase";
import { useAtom } from "jotai";

type Props = {
  channel: Channels;
};

export default function SidebarChannel(props: Props) {
  const { channel } = props;
  const [, setChannel] = useAtom(channelAtom);

  return (
    <div className="mt-1 pl-5" onClick={() => setChannel(channel)}>
      <h4 className="flex cursor-pointer items-center p-1 text-[#7b7c85] hover:rounded-md hover:bg-[#33363d] hover:text-white">
        <span className="pr-2 text-xl">#</span>
        {channel.name}
      </h4>
    </div>
  );
}
