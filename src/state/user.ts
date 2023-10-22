import { atom } from "jotai";
import { User } from "@/types/user";

export const userAtom = atom<User>({
  user: null,
});

export const loginAtom = atom<null, [User], void>(null, (_, set, update) => {
  set(userAtom, update);
});

export const logoutAtom = atom<null, [], void>(null, (_, set) => {
  set(userAtom, { user: null });
});
