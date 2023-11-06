"use client";

import { Database } from "@/types/supabase";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

export default function Login() {
  const supabase = createClientComponentClient<Database>();

  return (
    <div className="flex flex-col justify-center items-center w-full gap-8">
      <img className="object-cover h-[150px]" src="./discord.png" alt="" />
      <Auth
        supabaseClient={supabase}
        appearance={{
          theme: ThemeSupa,
        }}
        providers={["github", "google"]}
        redirectTo="http://localhost:3000/auth/callback"
        onlyThirdPartyProviders={true}
      />
    </div>
  );
}
