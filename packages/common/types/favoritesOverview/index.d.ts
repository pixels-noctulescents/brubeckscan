import type { BrubeckNodeStats } from "../node";
import type { DFavorite } from "../db";

export interface FavoritesOverview {
    totals: FavoritesTotals,
    favorites: FavoritesOverviewNode[]
}

interface FavoritesTotals {
    nodes: number,
    nodesOk: number;
    nodesKo: number;
    staked: number;
    rewards: number;
    toBeReceived: number;
    sent: number;
    statuses: number;
}

export interface FavoritesOverviewNode {
    db: DFavorite,
    stats: BrubeckNodeStats,
}