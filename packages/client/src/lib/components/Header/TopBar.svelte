<script lang="ts">
	import Marquee from 'svelte-fast-marquee';
	import ThemeSwitcher from '../ThemeSwitcher.svelte';
	import Prices from '../Prices.svelte';
	import HeaderNetworkStats from './HeaderNetworkStats.svelte';

	let width: number;

	$: speed = width > 1200 ? 30 : 20;
</script>

<svelte:window bind:innerWidth={width} />

<div class="flex w-full gap-2 bg-black p-2 px-5 text-white xl:px-32">
	<Marquee {speed}>
		<div class="flex justify-between gap-6 px-4">
			<Prices />
			<HeaderNetworkStats />
		</div>
	</Marquee>
	<ThemeSwitcher />
</div>

<style>
</style>
