import ChatHeader from "@/components/chat/chatHeader";
import ChatMessage from "@/components/chat/chatMessage";
import { IcBaselineAddCircleOutline } from "@/components/icones/icBaselineAddCircleOutline";
import { IcBaselineEmojiEmotions } from "@/components/icones/icBaselineEmojiEmotions";
import { IcBaselineGif } from "@/components/icones/icBaselineGif";
import { IcOutlineCardGiftcard } from "@/components/icones/icOutlineCardGiftcard";

export default function Chat() {
  return (
    <div className="flex flex-col grow bg-[#33363d]">
      {/* chatHeader */}
      <ChatHeader />
      {/* chatMessage */}
      <div className="grow">
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
        <ChatMessage />
      </div>
      {/* chatInput */}
      <div className="flex items-center justify-between p-4 bg-[#474b53] rounded m-5 text-[lightgray]">
        <IcBaselineAddCircleOutline />
        <form className="grow">
          <input
            className="p-4 bg-[transparent] border-none outline-none text-[white] text-lg w-full"
            type="text"
            placeholder="#Udemyへメッセージを送信"
          />
          <button className="hidden" type="submit">
            送信
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
