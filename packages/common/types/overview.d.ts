export interface Overview {
    totals: Totals
    favorites: Favorite[]
}

interface Totals {
    nodes: number
    toBeReceived: number
    staked: number
    sent: number
    rewards: number
    statuses: number
}

interface Favorite {
    db: Db
    stats: Stats
}

interface Db {
    id: string
    address: string
    createdAt: string
    updatedAt: string
    userAddress: string
    name: string
}

interface Stats {
    address: string
    status: boolean
    dataStaked: number
    totalRewardsInData: number
    dataSent: number
    dataToBeReceived: number
    firstClaim?: FirstClaim
    lastClaim?: LastClaim
    payouts: Payout[]
    claimCount: number
    claimPercentage: number
    claimedRewardCodes: ClaimedRewardCode[]
    polygonScanURL: string
}

interface FirstClaim {
    id: string
    claimTime: string
}

interface LastClaim {
    id: string
    claimTime: string
}

interface Payout {
    value: string
    timestamp: string
}

interface ClaimedRewardCode {
    id: string
    claimTime: string
}