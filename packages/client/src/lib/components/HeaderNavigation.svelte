<script lang="ts">
	import { user } from '$lib/stores';
</script>

<nav class="flex items-center gap-2 xl:gap-10">
	<!-- Public links-->
	<div class="flex tracking-tighter">
		<p class="mr-6 text-lg lg:text-2xl"><a href="/">BrubeckScan</a></p>
	</div>
	<a
		class="lg:text-md hidden text-sm text-slate-500 transition duration-150 ease-in hover:text-slate-800 sm:flex"
		href="/network">Network</a
	>

	<!-- Authenticated links -->
	{#if $user}
		<a
			class="lg:text-md hidden text-sm text-slate-500 transition duration-150 ease-in hover:text-slate-800 sm:flex"
			href="/favorites">Favorites</a
		>
	{/if}
	<a
		class="lg:text-md hidden text-sm text-slate-500 transition duration-150 ease-in hover:text-slate-800 sm:flex"
		href="/api">API</a
	>
</nav>
