import { writable } from "svelte/store";
import type { Favorite, FavoritesTotals } from "@brubeckscan/common/types";

export const favorites = writable<Favorite[]>();

export const totals = writable<FavoritesTotals>({
    totalDataSent: 0,
    totalDataToBeReceived: 0,
    totalRewards: 0,
    totalDataStaked: 0,
    statuses: []
});