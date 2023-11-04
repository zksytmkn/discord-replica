"use client";

import { useEffect, useState } from "react";

import { channelAtom } from "@/state/channel";
import { userAtom } from "@/state/user";
import { Database, Messages, Users } from "@/types/supabase";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useAtom } from "jotai";
import { useHydrateAtoms } from "jotai/utils";

import ChatHeader from "@/components/chat/chatHeader";
import ChatMessage from "@/components/chat/chatMessage";
import { IcBaselineAddCircleOutline } from "@/components/icones/icBaselineAddCircleOutline";
import { IcBaselineEmojiEmotions } from "@/components/icones/icBaselineEmojiEmotions";
import { IcBaselineGif } from "@/components/icones/icBaselineGif";
import { IcOutlineCardGiftcard } from "@/components/icones/icOutlineCardGiftcard";

export default function Chat({
  authUser,
  messages: initialMessages,
}: {
  authUser: Users | null;
  messages: Messages[] | [];
}) {
  useHydrateAtoms([[userAtom, authUser]]);

  const supabase = createClientComponentClient<Database>();
  const [channel] = useAtom(channelAtom);
  const [user] = useAtom(userAtom);

  const [messages, setMessages] = useState<Messages[]>(initialMessages);
  const [inputText, setInputText] = useState<string>("");

  useEffect(() => {
    const getMessages = async () => {
      const { data } = await supabase
        .from("messages")
        .select(`id, created_at, message, channel_id, user:users (id, name, avatar_url)`)
        .match({ channel_id: channel ? channel?.id : null });
      setMessages(data ? data : []);
    };

    getMessages();
  }, [channel]);

  const sendMessage = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (inputText) {
      const { data } = await supabase
        .from("messages")
        .insert({ message: inputText, channel_id: channel?.id, user_id: user?.id })
        .select();
      setMessages(data ? [...messages, ...data] : messages);
      setInputText("");
    }
  };

  return (
    <div className="flex flex-col grow bg-[#33363d]">
      {/* chatHeader */}
      <ChatHeader channel={channel} />
      {/* chatMessage */}
      <div className="grow">
        {messages?.map((message) => (
          <ChatMessage message={message} key={message.id} />
        ))}
      </div>
      {/* chatInput */}
      <div className="flex items-center justify-between p-4 bg-[#474b53] rounded m-5 text-[lightgray]">
        <IcBaselineAddCircleOutline />
        <form className="grow">
          <input
            className="p-4 bg-transparent border-none outline-none text-white text-lg w-full"
            type="text"
            placeholder={channel?.name ? `Send a message to #${channel.name}` : ""}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputText(e.target.value)}
            value={inputText}
            disabled={Boolean(!channel?.id)}
          />
          <button className="hidden" type="submit" onClick={(e: React.MouseEvent<HTMLElement>) => sendMessage(e)}>
            Send
          </button>
        </form>

        <div className="flex gap-1">
          <IcOutlineCardGiftcard />
          <IcBaselineGif />
          <IcBaselineEmojiEmotions />
        </div>
      </div>
    </div>
  );
}
