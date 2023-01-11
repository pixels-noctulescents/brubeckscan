export interface Overview {
    totals: Totals
    favorites: Favorite[]
}

export interface Totals {
    nodes: number
    toBeReceived: number
    staked: number
    sent: number
    rewards: number
    statuses: number
}

export interface Favorite {
    db: Db
    stats: Stats
}

export interface Db {
    id: string
    address: string
    createdAt: string
    updatedAt: string
    userAddress: string
    name: string
}

export interface Stats {
    address: string
    status: boolean
    staked: number
    rewards: number
    sent: number
    toBeReceived: number
    lastClaim: LastClaim
    payouts: Payout[]
    claimCount: number
    claimPercentage: number
    claimedRewardCodes: ClaimedRewardCode[]
    polygonScanURL: string
}

export interface LastClaim {
    id: string
    claimTime: string
}

export interface Payout {
    value: string
    timestamp: string
}

export interface ClaimedRewardCode {
    id: string
    claimTime: string
}