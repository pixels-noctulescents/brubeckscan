import type BrubeckNodeStats from "./node";

export interface User {
  address: string;
  mainColor: string;
  theme: "dark" | "light";
  Favorite: Favorite[]
  createdAt: string;
  updatedAt: string;
}

interface RewardCode {
  id: string;
  claimTime: string;
}

export interface Favorite {
  id: string
  address: string
  createdAt: Date
  updatedAt: Date
  userAddress: string | null
  name: string
}

export interface FavoritesOverview {
  totals: FavoritesTotals,
  favorites: FavoritesOverviewNode[]
}

interface FavoritesTotals {
  nodes: number,
  staked: number;
  rewards: number;
  toBeReceived: number;
  sent: number;
  statuses: number;
}

export interface FavoritesOverviewNode {
  db: Favorite,
  stats: BrubeckNodeStats,
}

export interface RealTimePrices {
  BTCUSDT: number;
  DATAUSDT: number;
  EURUSDT: number;
}

export interface Network {
  stats: Stats;
  lastRewards: NetworkRewardCode[];
  averages: Averages
}


export interface Averages {
  averageTopologySize: number
  averageReceivedClaims: number
  averageMeanPropagationDelay: number
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
