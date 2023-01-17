<script lang="ts">
	// import { spring } from 'svelte/motion';
	import { favoritesTotals, user } from '$lib/stores';
	import Module from '$lib/components/Module.svelte';
	import TokenData from '$lib/components/TokenData.svelte';
	import { Jumper } from 'svelte-loading-spinners';
</script>

{#if $user}
	<div class="w-full">
		<div class="flex w-full flex-wrap items-stretch gap-8 md:max-w-screen-lg lg:flex-none ">
			<div class="w-full lg:w-1/2 lg:flex-grow">
				<Module>
					<div class="flex grow flex-col justify-between">
						<h2 class="mb-4 text-4xl tracking-tight">Totals</h2>
						<div class="flex flex-row justify-between">
							<p class="text-lg text-gray-600">To be received</p>
							{#if $favoritesTotals.nodes === $user.Favorite.length}
								<p class="text-lg">
									<TokenData value={Math.round($favoritesTotals.toBeReceived * 100) / 100} />
								</p>
							{:else}
								<Jumper size="20" color="#FF3E00" unit="px" duration="1s" />
							{/if}
						</div>
						<div class="flex flex-row justify-between">
							<p class="text-lg text-gray-600">Staked</p>
							{#if $favoritesTotals.nodes === $user.Favorite.length}
								<p class="text-lg">
									<TokenData value={Math.round($favoritesTotals.staked * 100) / 100} />
								</p>
							{:else}
								<Jumper size="20" color="#FF3E00" unit="px" duration="1s" />
							{/if}
						</div>
						<div class="flex flex-row justify-between">
							<p class="text-lg text-gray-600">Sent</p>
							{#if $favoritesTotals.nodes === $user.Favorite.length}
								<p class="text-lg">
									<TokenData value={Math.round($favoritesTotals.sent * 100) / 100} />
								</p>
							{:else}
								<Jumper size="20" color="#FF3E00" unit="px" duration="1s" />
							{/if}
						</div>
						<div class="flex flex-row justify-between">
							<p class="text-lg text-gray-600">Rewards</p>
							{#if $favoritesTotals.nodes === $user.Favorite.length}
								<p class="text-lg">
									<TokenData value={Math.round($favoritesTotals.rewards * 100) / 100} />
								</p>
							{:else}
								<Jumper size="20" color="#FF3E00" unit="px" duration="1s" />
							{/if}
						</div>
					</div>
				</Module>
			</div>
		</div>
	</div>
{/if}
