import { constants } from "../configs/constants";

export function formatNodeStats(data: any, address: string) {
  const totalDATASent: number = data[2]?.erc20Transfers.reduce(
    (previous: any, current: any) => {
      return previous + +current.value;
    },
    0
  );

  const node = {
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
