import { constants } from "../configs/constants";
import NetworkManager from "../managers/NetworkManager";
import type { RewardCode } from "@brubeckscan/common/types";
import type Node from "@brubeckscan/common/types/node";

async function getStatus(codes: RewardCode[]): Promise<boolean> {
  const networkData = await NetworkManager.getNetworkStats();

  if (!codes.length) return false;

  if (!networkData) return false;

  if (networkData.lastRewards[0].code === codes[0].id || codes[1].id) {
    return true;
  }

  return false;
}

export async function formatNodeStats(data: any, address: string): Promise<Node> {
  const totalDATASent: number = data[2]?.erc20Transfers.reduce(
    (previous: any, current: any) => {
      return previous + +current.value;
    },
    0
  );

  const firstClaim = data[0].claimedRewardCodes[0];
  const lastClaim = data[0].claimedRewardCodes.at(-1);

  const claimedRewardCodes = data[0].claimedRewardCodes.slice(-10).reverse();

  const status = await getStatus(claimedRewardCodes);

  // Build the actual node
  const node: Node = {
    address: address,
    status: status,
    staked: Math.round(+data[3]?.stakedDATA) || 0,
    toBeReceived: Math.round(data[1].DATA - totalDATASent),
    sent: Math.round(+totalDATASent) || 0,
    rewards: Math.round(data[1].DATA) || 0,
    firstClaim: firstClaim || null,
    lastClaim: lastClaim || null,
    claimCount: +data[0].claimCount,
    claimPercentage: +data[0].claimPercentage,
    payouts: data[2]?.erc20Transfers,
    claimedRewardCodes: claimedRewardCodes,
    polygonScanURL: `${constants.POLYGONSCAN_BASE}${address}`,
    identiconURL: `${constants.IDENTICON_BASE}${address}`,
  };

  return node;
}