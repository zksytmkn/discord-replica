import { cookies } from "next/headers";

import { Database } from "@/types/supabase";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import Chat from "@/components/chat/chat";
import Login from "@/components/login/login";
import Sidebar from "@/components/sidebar/sidebar";

export default async function Home() {
  const cookieStore = cookies();
  const supabase = createServerComponentClient<Database>({ cookies: () => cookieStore });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  const metadata = user?.user_metadata;

  const { data: authUser } = await supabase
    .from("users")
    .select()
    .match({ id: user ? user?.id : null })
    .single();

  const { data: channels } = await supabase.from("channels").select();

  const { data: messages } = await supabase
    .from("messages")
    .select(`id, created_at, message, channel_id, user:users (id, name, avatar_url)`)
    .match({ channel_id: channels ? channels[0].id : null });

  return (
    <>
      <div className="flex min-h-screen">
        {session ? (
          <>
            <Sidebar user={metadata} channels={channels || []} />
            <Chat authUser={authUser} messages={messages || []} />
          </>
        ) : (
          <>
            <Login />
          </>
        )}
      </div>
    </>
  );
}
