import { writable } from "svelte/store";
import type { RealTimePrices } from "@brubeckscan/common/types";
import type { User } from "@brubeckscan/common/types";

export const prices = writable<RealTimePrices>({
    BTCUSDT: 0,
    DATAUSDT: 0,
    EURUSDT: 0,
});

export const user = writable<User | null>(null);
export const hasEthereumProvider = writable<boolean>(false)
export const usersCount = writable<number>(0);
export const currentTheme = writable<"light" | "dark">("light");