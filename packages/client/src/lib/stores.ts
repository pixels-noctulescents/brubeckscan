import { writable } from 'svelte/store';
import type { RealTimePrices } from '@brubeckscan/common/types/sockets';
import type { DUser } from '@brubeckscan/common/types/db';
import type { FavoritesOverview, FavoritesTotals } from '@brubeckscan/common/types/favoritesOverview';
import type { BrubeckNodeStats } from '@brubeckscan/common/types/node';
import type { Notification } from "@brubeckscan/common/types/notification";

export const usersCount = writable<number>(0);
export const prices = writable<RealTimePrices>({
	BTCUSDT: 0,
	DATAUSDT: 0,
	EURUSDT: 0
});

// User relative stores
export const user = writable<DUser | undefined>(undefined);
export const userOnNetwork = writable<BrubeckNodeStats | undefined>(undefined);
export const hasEthereumProvider = writable<boolean | undefined>(undefined);
export const currentTheme = writable<'light' | 'dark'>('light');

export const favoritesTotals = writable<FavoritesTotals>({
	nodes: 0,
	sent: 0,
	staked: 0,
	rewards: 0,
	statuses: 0,
	toBeReceived: 0,
	nodesOk: 0,
	nodesKo: 0,
});

export const notifications = writable<Notification[]>([]);
export const selectedCurrency = writable<"data" | "usdt" | "eur">("data")