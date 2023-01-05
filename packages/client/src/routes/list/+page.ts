import { totals } from "$lib/stores/totals";
import type { PageLoad } from "./$types";

export const load = (async ({ params, fetch }) => {
  // Reset total stores
  totals.set({
    totalDataSent: 0,
    totalDataStaked: 0,
    totalDataToBeReceived: 0,
    totalRewards: 0,
  });
  return {};
}) satisfies PageLoad;
