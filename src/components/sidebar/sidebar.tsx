"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { UserMetadata } from "@supabase/supabase-js";
import { Channel } from "@/types/channel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IcBaselineHeadphones } from "@/components/icones/icBaselineHeadphones";
import { IcBaselineMic } from "@/components/icones/icBaselineMic";
import { IcRoundSettings } from "@/components/icones/icRoundSettings";
import { RadixIconsChevronDown } from "@/components/icones/radixIconsChevronDown";
import { RadixIconsPlus } from "@/components/icones/radixIconsPlus";
import SidebarChannel from "@/components/sidebar/sidebarChannel";

export default function Sidebar({ user }: { user: UserMetadata | undefined }) {
  const supabase = createClientComponentClient();
  const router = useRouter();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  const [channels, setChannels] = useState<Channel[]>([]);
  useEffect(() => {
    const fetchChannels = async () => {
      const { data } = await supabase.from("channels").select();
      setChannels(data || []);
    };

    fetchChannels();
  }, []);

  const addChannel = async () => {
    let channelName = prompt("Create a new channel");
    if (channelName) {
      const { data } = await supabase.from("channels").insert({ name: channelName }).select();
      setChannels((data ? [...channels, ...data] : channels) || []);
    }
  };

  return (
    <div className="flex flex-0.3 h-screen">
      {/* sidebarLeft */}
      <div className="flex flex-col items-center bg-[#1a1c20] py-2 px-4">
        <div className="my-2 p-1">
          <img className="w-12" src="./discord.png" alt="" />
        </div>
        <div className="w-15 h-15 bg-[#33363d] rounded-full my-2 p-1">
          <img className="w-12" src="./react.png" alt="" />
        </div>
      </div>
      {/* sidebarRight */}
      <div className="bg-[#2b2d33] w-72 relative grow">
        <div className="text-[#ffffff] flex items-center justify-between p-5">
          <h1>Discord</h1>
          <RadixIconsChevronDown />
        </div>

        {/* sidebarChannels */}
        <div className="p-3">
          <div className="text-white flex justify-between items-center mt-1">
            <div className="flex items-center">
              <RadixIconsChevronDown />
              <h4>プログラミングチャンネル</h4>
            </div>
            <RadixIconsPlus className="cursor-pointer" onClick={addChannel} />
          </div>

          <div className="sidebarChennelList">
            {channels.map((channel) => (
              <SidebarChannel id={channel.id} channel={channel} key={channel.id} />
            ))}
          </div>

          <div className="absolute bottom-0 flex items-center justify-between w-11/12 py-2 border-t border-solid border-[#686a6e] ml-">
            <div className="flex items-center">
              <Avatar onClick={handleSignOut}>
                <AvatarImage src={user?.avatar_url} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="ml-1">
                <h4 className="text-white font-medium">{user?.name || "unknown"}</h4>
                <span className="text-[#686a6e]">
                  {`#${user?.provider_id ? user.provider_id.substring(0, 4) : "#unknown"}`}
                </span>
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
