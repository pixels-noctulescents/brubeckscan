import type { BrubeckNodeStats } from "@brubeckscan/common/types/node";

const generate = () => { };

generate.emptyNode = (): BrubeckNodeStats => {
  const node: BrubeckNodeStats = {
    address: "",
    polygonScanURL: "",
    identiconURL: "",
    staked: 0,
    rewards: 0,
    sent: 0,
    toBeReceived: 0,
    firstClaim: null,
    lastClaim: null,
    payouts: [],
    claimCount: 0,
    claimPercentage: 0,
    claimedRewardCodes: [],
    status: false,
  };

  return node;
}

export { generate };
