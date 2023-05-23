<script lang="ts">
	import { prices } from '$lib/stores';
	import { format } from '@brubeckscan/common/utils';
</script>

<div class="flex items-center gap-2 text-sm lg:gap-4 lg:text-xs">
	<div>BTC | {format.numberWithSpaces(Math.round($prices.BTCUSDT)) || '?'} USDT</div>
	<div>DATA | {$prices.DATAUSDT || '?'} USDT</div>
</div>
