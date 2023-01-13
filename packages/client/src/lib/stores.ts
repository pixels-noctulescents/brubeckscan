import { writable } from "svelte/store";
import type { RealTimePrices } from "@brubeckscan/common/types";
import type { User } from "@brubeckscan/common/types";
import type { FavoritesOverview } from "@brubeckscan/common/types";
import type BrubeckNodeStats from "@brubeckscan/common/types/node";

export const usersCount = writable<number>(0);
export const prices = writable<RealTimePrices>({
    BTCUSDT: 0,
    DATAUSDT: 0,
    EURUSDT: 0,
});

// User relative stores
export const user = writable<User | undefined>(undefined);
export const userOnNetwork = writable<BrubeckNodeStats | undefined>(undefined);
export const hasEthereumProvider = writable<boolean | undefined>(undefined);
export const currentTheme = writable<"light" | "dark">("light");
export const overview = writable<FavoritesOverview | undefined>()