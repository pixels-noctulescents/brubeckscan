<script lang="ts">
	import { page } from '$app/stores';

	const links = [
		{ label: 'Network', url: '/network' },
		{ label: 'Favorites', url: '/favorites' },
		{ label: 'API', url: '/api' }
	];
</script>

<nav class="flex items-center gap-2 xl:gap-10">
	<!-- Logo -->
	<div class="flex tracking-tighter">
		<p class="mr-6 text-lg lg:text-2xl"><a href="/">BrubeckScan</a></p>
	</div>

	<!-- Links -->
	{#each links as link}
		<a
			class="lg:text-md hidden text-sm text-slate-500 transition duration-150 ease-in hover:text-slate-800 sm:flex"
			href={link.url}
		>
			<span class={link.url === $page.route.id ? 'text-black' : ''}>{link.label}</span>
		</a>
	{/each}
</nav>
