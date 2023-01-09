import type { Node } from "@brubeckscan/common/types";

export function getEmptyNode() {
    let node: Node = {
        address: "",
        polygonScanURL: "",
        dataStaked: 0,
        totalRewardsInData: 0,
        dataSent: 0,
        dataToBeReceived: 0,
        payouts: [],
        claimCount: 0,
        claimPercentage: 0,
        claimedRewardCodes: [],
        status: false,
    };

    return node;
}