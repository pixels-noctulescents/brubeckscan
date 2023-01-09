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
  status: boolean;
}

export interface Payout {
  value: string;
  timestamp: string;
}

export interface ClaimedRewardCode {
  id: string;
  claimTime: string;
}

export interface Favorite {
  id: string;
  address: string;
  createdAt: string;
  updatedAt: string;
  userAddress: string;
  name: string;
}

export interface User {
  address: string;
  mainColor: string;
  theme: "dark" | "light";
  Favorite: Favorite[]
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

export interface FavoritesTotals {
  totalDataStaked: number;
  totalRewards: number;
  totalDataToBeReceived: number;
  totalDataSent: number;
  statuses: boolean[];
}

export type ButtonType = "neutral" | "action" | "alert";
