import { constants } from "../configs/constants";
import { getStats } from "../controllers/networks/getStats";
import type { Node, NetworkRewardCode, RewardCode, NetworkStats } from "@brubeckscan/common/types";

async function getStatus(codes: RewardCode[]): Promise<boolean> {
  const networkData = await getStats();

  if (!codes.length) return false;

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

  // Take only the latest 2 codes
  const firstClaim = data[0].claimedRewardCodes[0];
  const lastClaim = data[0].claimedRewardCodes.at(-1);

  const claimedRewardCodes = data[0].claimedRewardCodes
    .slice(Math.max(data[0].claimedRewardCodes.length - 2, 0))
    .reverse();

  const status = await getStatus(claimedRewardCodes);

  // Build the actual node
  const node: Node = {
    address: address,
    status: status,
    dataStaked: Math.round(+data[3]?.stakedDATA) || 0,
    totalRewardsInData: Math.round(data[1].DATA) || 0,
    dataSent: Math.round(+totalDATASent) || 0,
    dataToBeReceived: Math.round(data[1].DATA - totalDATASent),
    firstClaim: firstClaim || null,
    lastClaim: lastClaim || null,
    payouts: data[2]?.erc20Transfers,
    claimCount: +data[0].claimCount,
    claimPercentage: +data[0].claimPercentage,
    claimedRewardCodes: claimedRewardCodes,
    polygonScanURL: `${constants.POLYGONSCAN_BASE}${address}`,
  };

  return node;
}

export function formatNetworkStats(data: Array<any>): NetworkStats {
  const stats = {
    stats: {
      "24APR": data[0]["24h-APR"],
      "24APY": data[0]["24h-APY"],
      SPOTAPR: data[0]["spot-APR"],
      SPOTAPY: data[0]["spot-APY"],
      "24DATASTAKED": data[0]["24h-data-staked"],
      SPOTDATASTAKED: data[0]["spot-data-staked"],
    },
    lastRewards: data[1].lastRewards,
  };

  return stats;
}
