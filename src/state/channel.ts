import { atom } from "jotai";
import { Channel } from "@/types/channel";

export const channelAtom = atom<Channel | null>(null);
