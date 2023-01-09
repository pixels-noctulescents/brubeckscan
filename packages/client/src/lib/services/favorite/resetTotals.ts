import { totals } from "$lib/stores/favorites";

export function resetTotals() {
    totals.set({
        totalDataSent: 0,
        totalDataStaked: 0,
        totalDataToBeReceived: 0,
        totalRewards: 0,
        statuses: []
    })
}