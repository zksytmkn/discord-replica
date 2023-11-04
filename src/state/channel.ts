import { Channels } from "@/types/supabase";
import { atom } from "jotai";

export const channelAtom = atom<Channels | null>(null);
