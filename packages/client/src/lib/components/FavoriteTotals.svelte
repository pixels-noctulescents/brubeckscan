<script lang="ts">
	import { overview } from '$lib/stores';
	import Module from './Module.svelte';
	import FavoriteDoughnut from '$lib/components/FavoriteDoughnut.svelte';
	import TokenData from './TokenData.svelte';
</script>

{#if $overview}
	<div class="flex w-full flex-wrap items-stretch gap-8 md:max-w-screen-lg lg:flex-none ">
		<div class="w-full lg:w-1/2 lg:flex-grow">
			<Module>
				<div class="flex grow flex-col justify-between">
					<h2 class="mb-4 text-4xl tracking-tight">Totals</h2>
					<div class="flex flex-row justify-between">
						<p class="text-lg text-gray-600">Nodes</p>
						<p class="text-lg">{$overview.totals.nodes}</p>
					</div>
					<div class="flex flex-row justify-between">
						<p class="text-lg text-gray-600">To be received</p>
						<p class="text-lg">
							<TokenData value={$overview.totals.toBeReceived} />
						</p>
					</div>
					<div class="flex flex-row justify-between">
						<p class="text-lg text-gray-600">Staked</p>
						<p class="text-lg">
							<TokenData value={$overview.totals.staked} />
						</p>
					</div>
					<div class="flex flex-row justify-between">
						<p class="text-lg text-gray-600">Sent</p>
						<p class="text-lg">
							<TokenData value={$overview.totals.sent} />
						</p>
					</div>
					<div class="flex flex-row justify-between">
						<p class="text-lg text-gray-600">Total rewards</p>
						<p class="text-lg">
							<TokenData value={$overview.totals.rewards} />
						</p>
					</div>
				</div>
			</Module>
		</div>
		<div class="flex w-full lg:w-52">
			<FavoriteDoughnut />
		</div>
	</div>
{/if}
