import { Users } from "@/types/supabase";
import { atom } from "jotai";

export const userAtom = atom<Users | null>(null);
