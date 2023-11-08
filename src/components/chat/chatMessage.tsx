import { Messages } from "@/types/supabase";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Props = {
  message: Messages;
};

export default function ChatMessage(props: Props) {
  const { message } = props;

  return (
    <div className="mb-4 flex items-center p-4 text-white">
      <Avatar>
        <AvatarImage src={message.user?.avatar_url ?? ""} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="py-5 pl-2 pr-5">
        <h4>
          {message.user?.name || "unknown"}
          <span className="ml-5 text-base text-[#7b7c85]">{new Date(message.created_at).toLocaleString()}</span>
        </h4>
        <p>{message.message}</p>
      </div>
    </div>
  );
}
