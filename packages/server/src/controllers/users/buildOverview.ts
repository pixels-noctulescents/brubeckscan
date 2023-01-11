import { Favorite } from "@prisma/client";
import { getNodeStats } from "../nodes/getNodeStats";
import type { FavoritesTotals } from "@brubeckscan/common/types";

export async function buildOverview(favorites: Favorite[]) {
    let totals: FavoritesTotals = {
        nodes: 0,
        toBeReceived: 0,
        staked: 0,
        sent: 0,
        rewards: 0,
        statuses: 0
    }

    const nodes = await Promise.all(favorites.map(async (favorite) => {
        const stats = await getNodeStats(favorite.address);
        if (stats) {
            totals.sent += stats.sent;
            totals.staked += stats.staked;
            totals.toBeReceived += stats.toBeReceived;
            totals.rewards += stats.rewards;
        }
        return { db: favorite, stats };
    }))

    const ok = nodes.filter((item) => {
        return item.stats?.status
    })

    const percentage = ok.length / favorites.length * 100;

    totals.statuses = Math.round(percentage) || 0;
    totals.nodes = favorites.length;

    const overview = {
        totals,
        favorites: nodes
    }

    return overview;
}