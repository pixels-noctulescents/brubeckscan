<script lang="ts">
	import '../app.css';
	import Title from '$lib/components/Title.svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import AppInfo from '$lib/components/AppInfo.svelte';
	import type { LayoutData } from './$types';
	import { page } from '$app/stores';

	export let data: LayoutData;
</script>

<div class="bg-neutral-100">
	<div class="flex min-h-screen flex-col items-center justify-between">
		{#if data.network}
			<Header network={data.network} />
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
</div>
