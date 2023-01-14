<script lang="ts">
	import Icon from '@iconify/svelte';
	import { format } from '@brubeckscan/common/utils';
	import TokenData from '$lib/components/TokenData.svelte';
	import type { BrubeckNodeStats } from '@brubeckscan/common/types/node';

	export let stats: BrubeckNodeStats;

	let isAddressCopied = false;

	function copyToClipboard() {
		navigator.clipboard.writeText(stats.address);
		isAddressCopied = true;
		setTimeout(() => {
			isAddressCopied = false;
		}, 1000);
	}
</script>

{#if stats}
	<div class="flex items-center justify-between">
		<p>{format.ethAddress(stats.address)}</p>
		{#if !isAddressCopied}
			<button on:click={copyToClipboard}>
				<Icon icon="material-symbols:content-copy-rounded" width="24" />
			</button>
		{:else}
			<p>Copied</p>
		{/if}
	</div>
	<div class="flex items-center justify-between">
		<p>Status</p>
		{#if stats.status}
			<p class="text-green-400">OK</p>
		{:else}
			<p class="text-red-500">KO</p>
		{/if}
	</div>
	<div class="flex items-center justify-between">
		<p>To be received</p>
		<TokenData value={stats.toBeReceived} />
	</div>
	<div class="flex items-center justify-between">
		<p>Staked</p>
		<TokenData value={stats.staked} />
	</div>
	<div class="flex items-center justify-between">
		<p>Sent</p>
		<TokenData value={stats.sent} />
	</div>
	<div class="flex items-center justify-between">
		<p>Rewards</p>
		<TokenData value={stats.rewards} />
	</div>
{/if}
