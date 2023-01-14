<script lang="ts">
	import Module from '$lib/components/Module.svelte';
	import type { PageData } from './$types';
	import Icon from '@iconify/svelte';

	export let data: PageData;

	const apiEndpoint = 'https://brubeckscan.app/api/nodes/';
</script>

<div class="flex w-full flex-col items-center px-8 pt-20 pb-40 lg:px-0">
	<div class="w-full max-w-screen-lg">
		<Module>
			<div class="flex w-full flex-col gap-4">
				<div class="flex flex-col gap-4 text-2xl">
					<h3 class="text-3xl">Format</h3>
					<a class="text-md" href="https://github.com/omniti-labs/jsend">JSend</a>
					<h3 class="text-3xl">Request</h3>
					<div
						class="flex items-center gap-4 rounded-md bg-slate-700 p-4 font-mono text-sm text-white"
					>
						<p class="text-green-400">GET</p>
						<div class="flex w-full">
							<p class="text-blue-300">{apiEndpoint}<span>[nodeEthereumAddress]</span></p>
						</div>
					</div>
				</div>
				<div />
				<div class="flex flex-col gap-4">
					<h3 class="flex items-center gap-2 text-3xl">
						Response
						<div>
							<a
								href="https://github.com/adamphivo/brubeckAPI/blob/main/packages/common/types/node/index.d.ts"
							>
								<Icon icon="logos:typescript-icon" width="26" />
							</a>
						</div>
					</h3>
					<div class="flex w-full gap-4">
						<div class="flex w-full">
							<pre
								class="w-full rounded-md bg-slate-700 p-4 font-mono text-[10px] text-white">{@html JSON.stringify(
									data.response,
									undefined,
									2
								)}</pre>
						</div>
					</div>
				</div>
			</div>
		</Module>
	</div>
</div>
