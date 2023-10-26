import Chat from "@/components/chat/chat";
import Login from "@/components/login/login";
import Sidebar from "@/components/sidebar/sidebar";

export default function Home() {
  const user = null;

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
