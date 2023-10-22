import { Button } from "@/components/ui/button";

export default function Login() {
  const signIn = () => {};

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen gap-8">
      <img className="object-cover h-[150px]" src="./discord.png" alt="" />
      <Button
        className="w-[200px] bg-[#738adb] color-[#eff2f5] font-extrabold hover:bg-black hover:color-[#738adb]"
        onClick={signIn}
      >
        ログイン
      </Button>
    </div>
  );
}
