import type { Overview } from "./overview";

export default Overview;

export interface Node {
  address: string;
  polygonScanURL: string;
  dataStaked: number;
  totalRewardsInData: number;
  dataSent: number;
  dataToBeReceived: number;
  payouts: Payout[];
  firstClaim: RewardCode | null;
  lastClaim: RewardCode | null;
  claimCount: number;
  claimPercentage: number;
  claimedRewardCodes: RewardCode[];
  status: boolean;
}

export interface Payout {
  value: string;
  timestamp: string;
}

export interface RewardCode {
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
  lastRewards: NetworkRewardCode[];
}

export interface Stats {
  "24APR": number;
  "24APY": number;
  SPOTAPR: number;
  SPOTAPY: number;
  "24DATASTAKED": number;
  SPOTDATASTAKED: number;
}

export interface NetworkRewardCode {
  code: string;
  topologySize: number;
  receivedClaims: number;
  meanPropagationDelay: number;
}

export interface FavoritesTotals {
  nodes: number,
  staked: number;
  rewards: number;
  toBeReceived: number;
  sent: number;
  statuses: number;
}

export type ButtonType = "neutral" | "action" | "alert";
