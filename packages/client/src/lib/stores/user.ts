import { writable } from "svelte/store";
import type { Node, UserStore } from "@brubeckscan/common/types";

export const user = writable<UserStore | null>(null);
export const nodesData = writable<Node[]>();
export const isConnected = writable<boolean>(false);
