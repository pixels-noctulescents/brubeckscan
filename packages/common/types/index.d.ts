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

export interface DatabaseNode {
  id: string;
  address: string;
  createdAt: string;
  updatedAt: string;
  userAddress: string;
  name: string;
}

export interface UserStore {
  address: string;
  nodes: DatabaseNode[];
}

export interface RealTimePrices {
  BTCUSDT: number;
  DATAUSDT: number;
  EURUSDT: number;
}
