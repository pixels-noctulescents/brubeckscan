import { writable } from "svelte/store";
import type { User } from "@brubeckscan/common/types";

export const user = writable<User>();
export const isConnected = writable<boolean>(false);
