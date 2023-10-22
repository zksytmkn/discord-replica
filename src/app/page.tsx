import Chat from "@/components/chat/chat";
import Login from "@/components/login/login";
import Sidebar from "@/components/sidebar/sidebar";
import { userAtom } from "@/state/user";
import { useAtom } from "jotai";

export default function Home() {
  const [{ user }] = useAtom(userAtom);

  return (
    <>
      <div className="flex overflow-y-hidden">
        {user ? (
          <>
            <Sidebar />
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
