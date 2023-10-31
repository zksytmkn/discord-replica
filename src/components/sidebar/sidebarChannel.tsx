import { Channel } from "@/types/channel";

type Props = {
  id: number;
  channel: Channel;
};

export default function SidebarChannel(props: Props) {
  const { id, channel } = props;

  return (
    <div className="pl-5 mt-1">
      <h4 className="text-[#7b7c85] flex items-center p-1 cursor-pointer hover:text-white hover:bg-[#33363d] hover:rounded-md">
        <span className="text-xl pr-2">#</span>
        {channel.name}
      </h4>
    </div>
  );
}
