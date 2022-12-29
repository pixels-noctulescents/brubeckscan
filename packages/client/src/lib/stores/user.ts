import { writable } from "svelte/store";
import type { Node, UserStore } from "@brubeckscan/common/types";

export const user = writable<UserStore>();

export const isConnected = writable<boolean>(false);

export const nodesData = writable<Node[]>();
