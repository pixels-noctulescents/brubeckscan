<script lang="ts">
	import { format } from '@brubeckscan/common/utils';
	import { prices } from '$lib/stores';
	import { selectedCurrency } from '$lib/stores';
	import token from '$lib/assets/img/streamr/token.svg';
	import Icon from '@iconify/svelte';

	export let value: number = 0;

	const alt = 'The DATA token icon';

	$: convertedValue = getConvertedValue(value, $selectedCurrency);

	function getConvertedValue(value: number, currency: string): number {
		if (currency === 'data') return value;
		if (currency === 'usdt') return value * $prices.DATAUSDT;
		if (currency === 'eur') return (value * $prices.DATAUSDT) / $prices.EURUSDT;
		return value;
	}
</script>

<div class="flex items-center justify-center gap-2">
	<p class="text-md flex items-center font-mono font-bold text-neutral-700 dark:text-neutral-200">
		{format.numberWithSpaces(Math.round(convertedValue * 100) / 100)}
	</p>
	{#if $selectedCurrency === 'data'}
		<img class="w-5" src={token} {alt} />
	{:else if $selectedCurrency === 'eur'}
		<div class="text-blue-600">
			<Icon icon="ri:money-euro-circle-fill" />
		</div>
	{:else if $selectedCurrency === 'usdt'}
		<Icon icon="cryptocurrency-color:usdt" />
	{/if}
</div>
