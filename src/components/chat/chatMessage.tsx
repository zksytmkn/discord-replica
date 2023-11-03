import { Message } from "@/types/message";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Props = {
  message: Message;
};

export default function ChatMessage(props: Props) {
  const { message } = props;

  return (
    <div className="flex items-center p-4 text-white mb-4">
      <Avatar>
        <AvatarImage src="./nekomaru.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="py-5 pr-5 pl-2">
        <h4>
          nakamoto
          <span className="text-[#7b7c85] ml-5 text-base">{new Date(message.created_at).toLocaleString()}</span>
        </h4>
        <p>{message.message}</p>
      </div>
    </div>
  );
}
