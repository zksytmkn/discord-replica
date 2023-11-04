import { Messages } from "@/types/supabase";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Props = {
  message: Messages;
};

export default function ChatMessage(props: Props) {
  const { message } = props;

  return (
    <div className="flex items-center p-4 text-white mb-4">
      <Avatar>
        <AvatarImage src={message.user?.avatar_url ?? ""} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="py-5 pr-5 pl-2">
        <h4>
          {message.user?.name || "unknown"}
          <span className="text-[#7b7c85] ml-5 text-base">{new Date(message.created_at).toLocaleString()}</span>
        </h4>
        <p>{message.message}</p>
      </div>
    </div>
  );
}
