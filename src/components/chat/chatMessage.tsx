import { IcBaselineAccountCircle } from "@/components/icones/icBaselineAccountCircle";

export default function ChatMessage() {
  return (
    <div className="flex items-center p-4 text-[white] mb-4">
      <IcBaselineAccountCircle />
      <div className="py-5 pr-5 pl-2">
        <h4>
          nakamoto
          <span className="text-[#7b7c85] ml-5 text-base">2023/10/07</span>
        </h4>
        <p>メッセージ本文</p>
      </div>
    </div>
  );
}
