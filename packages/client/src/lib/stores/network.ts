import { writable } from "svelte/store";
import type { NetworkStats } from "@brubeckscan/common/types";

export const network = writable<NetworkStats>();
