import { writable } from "svelte/store";
import type { RealTimePrices } from "@brubeckscan/common/types";
import type { User } from "@brubeckscan/common/types";
import type { Overview } from "@brubeckscan/common/types";


export const brubeckStats = writable();
export const usersCount = writable<number>(0);
export const prices = writable<RealTimePrices>({
    BTCUSDT: 0,
    DATAUSDT: 0,
    EURUSDT: 0,
});

// User relative stores
export const user = writable<User | undefined>(undefined);
export const hasEthereumProvider = writable<boolean | undefined>(undefined);
export const currentTheme = writable<"light" | "dark">("light");
export const overview = writable<Overview | undefined>()