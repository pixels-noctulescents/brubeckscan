import { writable } from "svelte/store";
import type { RealTimePrices } from "@brubeckscan/common/types/sockets";
import type { DUser } from "@brubeckscan/common/types/db";
import type { FavoritesOverview } from "@brubeckscan/common/types/favoritesOverview";
import type { BrubeckNodeStats } from "@brubeckscan/common/types/node";

export const usersCount = writable<number>(0);
export const prices = writable<RealTimePrices>({
    BTCUSDT: 0,
    DATAUSDT: 0,
    EURUSDT: 0,
});

// User relative stores
export const user = writable<DUser | undefined>(undefined);
export const userOnNetwork = writable<BrubeckNodeStats | undefined>(undefined);
export const hasEthereumProvider = writable<boolean | undefined>(undefined);
export const currentTheme = writable<"light" | "dark">("light");
export const overview = writable<FavoritesOverview | undefined>()