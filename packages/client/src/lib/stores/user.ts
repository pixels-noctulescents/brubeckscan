import { writable } from "svelte/store";
import type { Node } from "@brubeckscan/common/types";

export const user = writable({
  address: null,
  nodes: [],
});

export const isConnected = writable(false);

export const nodesData = writable<Node[]>([]);
