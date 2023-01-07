import { writable } from "svelte/store";
import type { Favorite } from "@brubeckscan/common/types";

export const favorites = writable<Favorite[]>();
