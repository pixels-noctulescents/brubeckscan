<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import Title from '$lib/components/Title.svelte';
	import Header from '$lib/components/Header/Header.svelte';
	import Footer from '$lib/components/Footer/Footer.svelte';
	import AppInfo from '$lib/components/Footer/AppInfo.svelte';
	import Notifications from '$lib/components/Notifications/Notifications.svelte';
	import type { LayoutData } from './$types';
	import { page } from '$app/stores';
	import { brubeckNetworkStats } from '$lib/stores';
	import { selectedTheme } from '$lib/stores';

	onMount(() => {
		if (data.network) {
			brubeckNetworkStats.set(data.network);
		}
	});

	export let data: LayoutData;
</script>

<div class={$selectedTheme === 'dark' ? 'dark' : ''}>
	<div
		class="flex min-h-screen flex-col items-center justify-between bg-neutral-200 dark:bg-neutral-800"
	>
		{#if data.network}
			<Header />
		{/if}
		<main class="flex min-h-[600px] w-full grow flex-col items-center">
			{#if $page.route.id != '/'}
				<div class="flex w-full justify-center">
					<Title />
				</div>
			{/if}
			<div class="flex w-full flex-col items-center xl:px-0">
				<slot />
			</div>
		</main>
		<Footer />
	</div>
	{#if data.latestRelease}
		<AppInfo latestRelease={data.latestRelease} />
	{/if}
	<Notifications />
</div>
