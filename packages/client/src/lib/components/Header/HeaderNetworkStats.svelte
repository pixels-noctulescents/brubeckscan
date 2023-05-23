<script lang="ts">
	import { format } from '@brubeckscan/common/utils';
	import { brubeckNetworkStats } from '$lib/stores';
</script>

<div class="flex gap-4 text-sm lg:gap-4 lg:text-xs">
	<p title="Total value locked (TVL) in DATA">
		TVL | {format.numberWithSpaces(Math.round($brubeckNetworkStats?.stats.SPOTDATASTAKED))} DATA
	</p>
	<p>APY | {$brubeckNetworkStats?.stats['SPOTAPY']}%</p>
	<p>{$brubeckNetworkStats?.lastRewards[0].topologySize} nodes</p>
</div>
