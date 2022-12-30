import { constants } from "../configs/constants";
import type { Node } from "@brubeckscan/common/types";

export function formatNodeStats(data: any, address: string): Node {
  const totalDATASent: number = data[2]?.erc20Transfers.reduce(
    (previous: any, current: any) => {
      return previous + +current.value;
    },
    0
  );

  const node: Node = {
    address: address,
    polygonScanURL: `${constants.POLYGONSCAN_BASE}${address}`,
    dataStaked: +data[3]?.stakedDATA || 0,
    totalRewardsInData: data[1].DATA || 0,
    dataSent: +totalDATASent || 0,
    dataToBeReceived: data[1].DATA - totalDATASent,
    payouts: data[2]?.erc20Transfers,
    claimCount: +data[0].claimCount,
    claimPercentage: +data[0].claimPercentage,
    claimedRewardCodes: data[0].claimedRewardCodes
      .slice(Math.max(data[0].claimedRewardCodes.length - 100, 0))
      .reverse(),
  };

  return node;
}

export function formatNetworkStats(data: Array<any>) {
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
