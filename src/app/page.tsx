import Chat from "@/components/chat/chat";
import Sidebar from "@/components/sidebar/sidebar";

export default function Home() {
  return (
    <>
      <div className="flex overflow-y-hidden">
        {/* sidebar */}
        <Sidebar />

        {/* chat */}
        <Chat />
      </div>
    </>
  );
}
