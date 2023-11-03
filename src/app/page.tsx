import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import Chat from "@/components/chat/chat";
import Login from "@/components/login/login";
import Sidebar from "@/components/sidebar/sidebar";

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const metadata = user?.user_metadata;
  const { data: channels } = await supabase.from("channels").select();

  return (
    <>
      <div className="flex overflow-y-hidden">
        {session ? (
          <>
            <Sidebar user={metadata} channels={channels || []} />
            <Chat />
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
