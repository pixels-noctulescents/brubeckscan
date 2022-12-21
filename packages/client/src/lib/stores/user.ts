import { writable } from "svelte/store";

export const user = writable({
  address: null,
  nodes: [],
});

export const isConnected = writable(false);
