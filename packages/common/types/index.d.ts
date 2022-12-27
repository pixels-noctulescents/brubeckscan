export interface Node {
  address: string;
  polygonScanURL: string;
  dataStaked: number;
  totalRewardsInData: number;
  dataSent: number;
  dataToBeReceived: number;
  payouts: Payout[];
  claimCount: number;
  claimPercentage: number;
  claimedRewardCodes: ClaimedRewardCode[];
}

export interface Payout {
  value: string;
  timestamp: string;
}

export interface ClaimedRewardCode {
  id: string;
  claimTime: string;
}
