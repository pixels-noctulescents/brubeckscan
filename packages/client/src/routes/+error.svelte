<script>
	import { page } from '$app/stores';
	import Module from '$lib/components/Module.svelte';
	import src from '$lib/assets/img/streamr/illustrations/Node.png';
</script>

<svelte:head>
	<title>BrubeckScan | Error</title>
</svelte:head>

<div class="mb-30 container flex w-full max-w-screen-lg flex-col">
	<Module>
		<div class="mb-30 flex w-full flex-col items-center gap-10 p-10">
			<a class="text-2xl" href="/">Go back</a>
			<img {src} alt="test" class="w-32" />
			<h1 class="text-2xl"><p class="text-blue-300">{$page.status}</p></h1>
			<h2 class="text-2xl"><p class="text-slate-400">{$page?.error?.message}</p></h2>
		</div>
	</Module>
</div>

<style>
	.container {
		min-height: 70vh;
	}
</style>
