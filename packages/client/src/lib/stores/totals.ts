import { writable } from "svelte/store";
import type { TotalsTable } from "@brubeckscan/common/types";

export const totals = writable<TotalsTable>({
  totalDataSent: 0,
  totalDataStaked: 0,
  totalRewards: 0,
  totalDataToBeReceived: 0,
});
