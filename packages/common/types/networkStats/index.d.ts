export interface BrubeckNetworkStats {
    stats: Stats;
    lastRewards: NetworkRewardCode[];
    averages: Averages
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

export interface Averages {
    averageTopologySize: number
    averageReceivedClaims: number
    averageMeanPropagationDelay: number
}

export type History = TvlSnapshot[];

export interface TvlSnapshot {
    id: number
    createdAt: string
    dailyAPR: number
    dailyAPY: number
    spotAPR: number
    spotAPY: number
    dailyDataStaked: number
    spotDataStaked: number
}