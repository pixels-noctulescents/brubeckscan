import { getNodeStats } from "../controllers/node/getNodeStats";
import type { DFavorite } from "@brubeckscan/common/types/db";
import type { FavoritesTotals, FavoritesOverview, FavoritesOverviewNode } from "@brubeckscan/common/types/favoritesOverview";

const UserManager = () => { };

UserManager.getOverview = async (favorites: DFavorite[]): Promise<FavoritesOverview> => {
    let totals: FavoritesTotals = {
        nodes: 0,
        toBeReceived: 0,
        staked: 0,
        sent: 0,
        rewards: 0,
        statuses: 0
    }

    const nodes: FavoritesOverviewNode[] = await Promise.all(favorites.map(async (favorite) => {
        const stats = await getNodeStats(favorite.address);
        totals.sent += stats.sent;
        totals.staked += stats.staked;
        totals.toBeReceived += stats.toBeReceived;
        totals.rewards += stats.rewards;

        const node: FavoritesOverviewNode = {
            db: favorite,
            stats: stats
        }

        return node;
    }))

    const ok = nodes.filter((item) => {
        return item.stats.status
    })

    const percentage = ok.length / favorites.length * 100;

    totals.statuses = Math.round(percentage) || 0;
    totals.nodes = favorites.length;

    const overview: FavoritesOverview = {
        totals,
        favorites: nodes
    }

    return overview;
}

export default UserManager;