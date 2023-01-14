<script lang="ts">
	import { user, userOnNetwork, hasEthereumProvider } from '$lib/stores';
	import Icon from '@iconify/svelte';
	import Button from '$lib/components/Button.svelte';
	import Identicon from '$lib/components/Identicon.svelte';
	import TokenData from '$lib/components/TokenData.svelte';

	const metamaskURL = 'https://metamask.io/download/';

	async function handleConnect() {
		try {
			await (window as any).ethereum.request({
				method: 'eth_requestAccounts'
			});
		} catch (e) {
			console.log(e);
		}
	}
</script>

{#if $hasEthereumProvider != undefined}
	{#if !$user && $hasEthereumProvider}
		<div>
			<Button handle={handleConnect}>
				<div
					class="flex items-center gap-2 rounded-md border-2 border-slate-300 px-2 py-1 transition duration-150 ease-in hover:bg-white hover:shadow-sm"
				>
					<p>Connect</p>
					<Icon icon="logos:metamask-icon" width="15" />
				</div>
			</Button>
		</div>
	{:else if !$user && !$hasEthereumProvider}
		<div class="px-2 py-1">
			<a href={metamaskURL} target="_blank" rel="noreferrer">Get Metamask</a>
		</div>
	{:else if $user}
		<div class="flex items-center gap-4 py-1 text-blue-200">
			<TokenData value={$userOnNetwork?.staked} />
			<p class="text-slate-300">|</p>
			<Identicon address={$user.address} />
		</div>
	{/if}
{/if}
