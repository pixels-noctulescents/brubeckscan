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

  const lastClaim = data[0].claimedRewardCodes.reverse()[0];

  const claimedRewardCodes = data[0].claimedRewardCodes.slice(0, 100);

  const status = await getStatus(claimedRewardCodes);

  // Build the actual node
  const node: Node = {
    address: address,
    status: status,
    staked: Math.round(+data[3]?.stakedDATA) || 0,
    rewards: Math.round(data[1].DATA) || 0,
    sent: Math.round(+totalDATASent) || 0,
    toBeReceived: Math.round(data[1].DATA - totalDATASent),
    lastClaim: lastClaim || null,
    polygonScanURL: `${constants.POLYGONSCAN_BASE}${address}`,
    payouts: data[2]?.erc20Transfers,
    claimCount: +data[0].claimCount,
    claimPercentage: +data[0].claimPercentage,
    claimedRewardCodes: claimedRewardCodes,
  };

  return node;
}

export function formatNetworkStats(data: Array<any>): NetworkStats {
  const averages = getAverages(data[1].lastRewards);

  const stats = {
    stats: {
      "24APR": data[0]["24h-APR"],
      "24APY": data[0]["24h-APY"],
      SPOTAPR: data[0]["spot-APR"],
      SPOTAPY: data[0]["spot-APY"],
      "24DATASTAKED": data[0]["24h-data-staked"],
      SPOTDATASTAKED: data[0]["spot-data-staked"],
    },
    averages: averages,
    lastRewards: data[1].lastRewards,
  };

  return stats;
}

function getAverages(codes: NetworkRewardCode[]) {
  let totalTopologySize = 0;
  let totalReceivedClaims = 0;
  let totalMeanPropagationDelay = 0;

  codes.map((code) => {
    totalTopologySize += code.topologySize;
    totalReceivedClaims += code.receivedClaims;
    totalMeanPropagationDelay += code.meanPropagationDelay;
  })

  let averageTopologySize = totalTopologySize / codes.length;
  let averageReceivedClaims = totalReceivedClaims / codes.length;
  let averageMeanPropagationDelay = totalMeanPropagationDelay / codes.length;

  return {
    averageTopologySize,
    averageReceivedClaims,
    averageMeanPropagationDelay,
  }
}