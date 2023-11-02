import { useAtom } from "jotai";
import { channelAtom } from "@/state/channel";
import { Channel } from "@/types/channel";

type Props = {
  channel: Channel;
};

export default function SidebarChannel(props: Props) {
  const { channel } = props;
  const [, setChannel] = useAtom(channelAtom);

  return (
    <div className="pl-5 mt-1" onClick={() => setChannel(channel)}>
      <h4 className="text-[#7b7c85] flex items-center p-1 cursor-pointer hover:text-white hover:bg-[#33363d] hover:rounded-md">
        <span className="text-xl pr-2">#</span>
        {channel.name}
      </h4>
    </div>
  );
}
