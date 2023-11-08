"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { channelAtom } from "@/state/channel";
import { Channels, Database } from "@/types/supabase";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { UserMetadata } from "@supabase/supabase-js";
import { useHydrateAtoms } from "jotai/utils";

import { IcBaselineGroupAdd } from "@/components/icones/icBaselineGroupAdd";
import { IcBaselineHeadphones } from "@/components/icones/icBaselineHeadphones";
import { IcBaselineMic } from "@/components/icones/icBaselineMic";
import { IcRoundSettings } from "@/components/icones/icRoundSettings";
import { RadixIconsPlus } from "@/components/icones/radixIconsPlus";
import SidebarChannel from "@/components/sidebar/sidebarChannel";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Sidebar({
  user,
  channels: initialChannels,
}: {
  user: UserMetadata | undefined;
  channels: Channels[];
}) {
  useHydrateAtoms([[channelAtom, initialChannels[0]]]);

  const supabase = createClientComponentClient<Database>();
  const router = useRouter();
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  const [channels, setChannels] = useState<Channels[]>(initialChannels);
  const addChannel = async () => {
    let channelName = prompt("Create a new channel");
    if (channelName) {
      const { data } = await supabase.from("channels").insert({ name: channelName }).select();
      setChannels(data ? [...channels, ...data] : channels);
    }
  };

  return (
    <div className="flex">
      {/* sidebarLeft */}
      <div className="flex flex-col items-center bg-[#1a1c20] px-4 py-2">
        <div className="my-2 p-1">
          <img className="w-12" src="./discord.png" alt="" />
        </div>
        <div className="my-2 hidden rounded-full bg-[#33363d] p-1 sm:inline-block">
          <img className="w-12" src="./react.png" alt="" />
        </div>
        <div className="my-2 hidden p-1 sm:inline-block">
          <img className="w-12" src="./next.png" alt="" />
        </div>
        <div className="my-2 hidden p-1 sm:inline-block">
          <img className="w-12" src="./supabase.png" alt="" />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger className="my-2 p-1 sm:hidden">
            <IcBaselineGroupAdd className="h-5 w-5 text-white" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel className="flex items-center justify-between">
              Channels
              <RadixIconsPlus className="cursor-pointer" onClick={addChannel} />
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="max-h-36 w-60 overflow-auto">
              <DropdownMenuItem className="flex flex-col items-start">
                {channels?.map((channel) => <SidebarChannel channel={channel} key={channel.id} />)}
              </DropdownMenuItem>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Profile</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-[#686a6e]">{user?.name || "unknown"}</DropdownMenuItem>
            <DropdownMenuItem className="text-[#686a6e]">
              {`#${user?.provider_id ? user.provider_id.substring(0, 4) : "#unknown"}`}
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleSignOut}>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {/* sidebarRight */}
      <div className="relative hidden w-72 grow bg-[#2b2d33] sm:inline-block">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="p-5 text-[#ffffff]">
            <AccordionTrigger>Discord</AccordionTrigger>
            <AccordionContent>
              {/* sidebarChannels */}
              <div className="mt-1 flex items-center justify-between text-white">
                Channels
                <RadixIconsPlus className="cursor-pointer" onClick={addChannel} />
              </div>
              {channels?.map((channel) => <SidebarChannel channel={channel} key={channel.id} />)}
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="p-3">
          <div className="absolute bottom-0 flex w-11/12 items-center justify-between border-t border-solid border-[#686a6e] py-2">
            <div className="flex items-center">
              <Avatar onClick={handleSignOut}>
                <AvatarImage src={user?.avatar_url} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="ml-1">
                <h4 className="font-medium text-white">{user?.name || "unknown"}</h4>
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
