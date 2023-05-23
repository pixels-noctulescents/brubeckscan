<script lang="ts">
	import TopBar from './TopBar.svelte';
	import Connect from '$lib/components/Connect.svelte';
	import HeaderNavigation from './HeaderNavigation.svelte';
	import { navigating } from '$app/stores';
	import { fade } from 'svelte/transition';
	import MobileNavigation from '$lib/components/Header/MobileNavigation.svelte';
</script>

<div class="sticky top-0 z-50 flex w-full flex-wrap items-center justify-center">
	<header
		class="z-50 flex w-full flex-col items-center bg-slate-100 bg-opacity-20 text-neutral-900 dark:bg-neutral-900 dark:bg-opacity-20 dark:text-neutral-200"
	>
		<TopBar />
		<div class="flex h-16 w-full items-center justify-between px-5 py-2 xl:px-32">
			<HeaderNavigation />
			<Connect />
		</div>
	</header>
	<div class="flex w-full sm:hidden">
		<MobileNavigation />
	</div>
	{#if $navigating != null}
		<div in:fade class="h-1 w-full bg-orange-500 bg-opacity-50" />
	{:else}
		<div in:fade class="h-1 w-full bg-orange-500 bg-opacity-0" />
	{/if}
</div>

<style>
	header {
		backdrop-filter: blur(10px);
	}
</style>
