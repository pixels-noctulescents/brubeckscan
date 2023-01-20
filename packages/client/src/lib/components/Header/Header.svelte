<script lang="ts">
	import Prices from '$lib/components/Prices.svelte';
	import Connect from '$lib/components/Connect.svelte';
	import HeaderNavigation from './HeaderNavigation.svelte';
	import NetworkStats from './HeaderNetworkStats.svelte';
	import type { BrubeckNetworkStats } from '@brubeckscan/common/types/networkStats';
	import { navigating } from '$app/stores';
	import { fade } from 'svelte/transition';
	import MobileNavigation from '$lib/components/Header/MobileNavigation.svelte';
	import ThemeSwitcher from '../ThemeSwitcher.svelte';

	export let network: BrubeckNetworkStats;
</script>

<div
	class="sticky top-0 z-50 flex w-full flex-wrap items-center justify-center dark:bg-neutral-900"
>
	<header
		class="z-50 flex w-full flex-col items-center bg-slate-100 bg-opacity-90 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-200"
	>
		<div
			class="flex w-full items-center justify-between bg-neutral-200 bg-opacity-90 px-5 py-2 dark:bg-black dark:text-neutral-200 sm:flex xl:px-32"
		>
			<Prices />
			<NetworkStats {network} />
		</div>
		<div class="flex h-16 w-full items-center justify-between px-5 py-2 xl:px-32">
			<HeaderNavigation />
			<Connect />
		</div>
		{#if $navigating != null}
			<div in:fade class="h-1 w-full bg-orange-500 bg-opacity-50" />
		{:else}
			<div in:fade class="h-1 w-full bg-orange-500 bg-opacity-0" />
		{/if}
	</header>
	<div class="flex w-full sm:hidden">
		<MobileNavigation />
	</div>
</div>

<style>
	header {
		backdrop-filter: blur(10px);
	}
</style>
