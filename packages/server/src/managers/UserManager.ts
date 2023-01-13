import type { DFavorite } from "@brubeckscan/common/types/db";
import type { FavoritesTotals, FavoritesOverview, FavoritesOverviewNode } from "@brubeckscan/common/types/favoritesOverview";
import NetworkManager from "./NetworkManager";
import NodeManager from "./Node/NodeManager";

const UserManager = () => { };

UserManager.getOverview = async (favorites: DFavorite[]): Promise<FavoritesOverview | undefined> => {
    const networkStats = await NetworkManager.getNetworkStats();

    let totals: FavoritesTotals = {
        nodes: 0,
        toBeReceived: 0,
        staked: 0,
        sent: 0,
        rewards: 0,
        statuses: 0
    }

    let tempOkNode = 0;

    if (!networkStats) return undefined;

    const nodes: FavoritesOverviewNode[] = await Promise.all(favorites.map(async (favorite) => {
        const manager = new NodeManager(favorite.address, networkStats);
        const stats = await manager.getStats();
        totals.sent += stats.sent;
        totals.staked += stats.staked;
        totals.toBeReceived += stats.toBeReceived;
        totals.rewards += stats.rewards;
        if (stats.status) {
            tempOkNode += 1;
        }


        const node: FavoritesOverviewNode = {
            db: favorite,
            stats: stats
        }

        return node;
    }))

    const percentage = tempOkNode / favorites.length * 100;

    totals.statuses = Math.round(percentage) || 0;
    totals.nodes = favorites.length;

    const overview: FavoritesOverview = {
        totals,
        favorites: nodes
    }

    return overview;
}

export default UserManager;