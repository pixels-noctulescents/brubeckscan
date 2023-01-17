<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import send from '$lib/send';
	import type { DFavorite } from '@brubeckscan/common/types/db';
	import type { BrubeckNodeStats } from '@brubeckscan/common/types/node';
	import { user, favoritesTotals } from '$lib/stores';
	import NotificationService from '$lib/services/Notification';
	import Module from '$lib/components/Module.svelte';
	import BrubeckNodeStatsComponent from './BrubeckNodeStats.svelte';
	import FavoriteName from './FavoriteName.svelte';
	import Icon from '@iconify/svelte';

	export let favorite: DFavorite;

	let stats: BrubeckNodeStats;

	async function remove() {
		const response = await send(`favorites/${favorite.id}`, 'DELETE');

		if (response.status === 'success') {
			user.update((user) => {
				if (user) {
					user.Favorite = user?.Favorite.filter((item) => {
						return item.id != favorite.id;
					});
					NotificationService.push('Deleted', 'ok');
					return user;
				}
			});
		} else {
			NotificationService.push('Delete failed', 'ko');
		}
	}

	onMount(async () => {
		const response = await send(`nodes/stats/${favorite.address}`);
		if (response) {
			stats = response.data.node;
			favoritesTotals.update((totals) => {
				totals.nodes += 1;
				totals.sent += stats.sent;
				totals.rewards += stats.rewards;
				totals.staked += stats.staked;
				totals.toBeReceived += stats.toBeReceived;
				stats.status ? (totals.nodesOk += 1) : (totals.nodesKo += 1);
				return totals;
			});
		}
	});

	onDestroy(async () => {
		favoritesTotals.update((totals) => {
			totals.nodes -= 1;
			totals.sent -= stats.sent;
			totals.rewards -= stats.rewards;
			totals.staked -= stats.staked;
			totals.toBeReceived -= stats.toBeReceived;
			stats.status ? (totals.nodesOk -= 1) : (totals.nodesKo -= 1);
			return totals;
		});
	});
</script>

<div class="flex w-full flex-col">
	<Module>
		<div class="flex w-full flex-col">
			<div class="flex">
				<a href={`nodes/${favorite.address}`}>
					<Icon icon="material-symbols:search" width="24" />
				</a>
				<button on:click={remove}>
					<Icon icon="material-symbols:delete-outline" width="24" />
				</button>
			</div>
			<FavoriteName {favorite} />
			<div>
				<BrubeckNodeStatsComponent {stats} />
			</div>
		</div>
	</Module>
</div>
