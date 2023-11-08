"use client";

import { Database } from "@/types/supabase";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

export default function Login() {
  const supabase = createClientComponentClient<Database>();

  return (
    <div className="flex w-full flex-col items-center justify-center gap-8">
      <img className="h-[150px] object-cover" src="./discord.png" alt="" />
      <Auth
        supabaseClient={supabase}
        appearance={{
          theme: ThemeSupa,
        }}
        providers={["github", "google"]}
        redirectTo={`${process.env.NEXT_PUBLIC_BASE_URL}/auth/callback`}
        onlyThirdPartyProviders={true}
      />
    </div>
  );
}
