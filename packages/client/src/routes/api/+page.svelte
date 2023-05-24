<script lang="ts">
	import Module from '$lib/components/Module.svelte';
	import type { PageData } from './$types';
	import Icon from '@iconify/svelte';

	export let data: PageData;

	const apiEndpoint = 'https://brubeckscan.app/api/nodes/';
</script>

<svelte:head>
	<title>BrubeckScan | API</title>
</svelte:head>

<div class="flex w-full flex-col items-center px-4 pb-40 pt-20 lg:px-0">
	<div class="w-full max-w-screen-lg">
		<Module>
			<div class="flex w-full flex-col gap-4">
				<div class="flex flex-col gap-4 text-2xl">
					<p class="text-lg">BrubeckScan provides a single API endpoint providing various data.</p>
					<h3 class="text-2xl">Format</h3>
					<a class="text-lg" href="https://github.com/omniti-labs/jsend">JSend</a>
					<h3 class="text-2xl">Endpoint</h3>
					<div
						class="flex items-center gap-4 rounded-md bg-neutral-700 p-4 font-mono text-sm text-white"
					>
						<p class="text-green-400">GET</p>
						<div class="flex w-full">
							<p class="text-blue-300">{apiEndpoint}<span>[nodeEthereumAddress]</span></p>
						</div>
					</div>
				</div>
				<div />
				<div class="flex flex-col gap-4">
					<h3 class="flex items-center gap-2 text-2xl">
						<a
							href="https://github.com/adamphivo/brubeckAPI/blob/main/packages/common/types/node/index.d.ts"
							class="flex gap-2"
						>
							<span>Response</span>
							<Icon icon="logos:typescript-icon" width="26" />
						</a>
					</h3>
				</div>
			</div>
		</Module>
	</div>
</div>
