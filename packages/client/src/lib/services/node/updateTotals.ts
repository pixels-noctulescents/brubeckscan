import { totals } from "$lib/stores/totals";
import type { Node } from "@brubeckscan/common/types";

export function updateTotals(node: Node) {
  totals.update((t) => {
    t.totalDataStaked += node.dataStaked;
    t.totalDataSent += node.dataSent;
    t.totalDataToBeReceived += node.dataToBeReceived;
    t.totalRewards += node.totalRewardsInData;
    return t;
  });
}
