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
  createdAt: string;
  updatedAt: string;
}

export interface RealTimePrices {
  BTCUSDT: number;
  DATAUSDT: number;
  EURUSDT: number;
}

export interface NetworkStats {
  stats: Stats;
  lastRewards: RewardCode[];
}

export interface Stats {
  "24APR": number;
  "24APY": number;
  SPOTAPR: number;
  SPOTAPY: number;
  "24DATASTAKED": number;
  SPOTDATASTAKED: number;
}

export interface RewardCode {
  code: string;
  topologySize: number;
  receivedClaims: number;
  meanPropagationDelay: number;
}

export interface TotalsTable {
  totalDataStaked: number;
  totalRewards: number;
  totalDataToBeReceived: number;
  totalDataSent: number;
}
