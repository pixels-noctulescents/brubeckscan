<script lang="ts">
	import { prices } from '$lib/stores';
	import type { BrubeckNetworkStats } from '@brubeckscan/common/types/networkStats';
	import { format } from '@brubeckscan/common/utils';
	import ThemeSwitcher from '../ThemeSwitcher.svelte';

	export let network: BrubeckNetworkStats;
</script>

<div class="flex gap-2 text-[9px] lg:gap-4 lg:text-xs">
	<p>
		{format.numberWithSpaces(Math.round(network?.stats.SPOTDATASTAKED * $prices.DATAUSDT))} USDT Locked
	</p>
	<p>APY {network?.stats['SPOTAPY']}%</p>
	<p>{network?.lastRewards[0].topologySize} nodes</p>
	<ThemeSwitcher />
</div>
