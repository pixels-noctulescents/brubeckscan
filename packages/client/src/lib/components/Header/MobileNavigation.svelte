<script lang="ts">
	import Icon from '@iconify/svelte';
	import { user } from '$lib/stores';
</script>

<div class="flex w-full items-center justify-evenly bg-slate-400 p-2 dark:bg-neutral-900">
	<div>
		<a href="/" class="text-white">
			<Icon icon="material-symbols:home" width="30" />
		</a>
	</div>
	{#if $user}
		<div>
			<a href="/favorites" class="text-white">
				<Icon icon="mdi:folder-favorite" width="30" />
			</a>
		</div>
	{/if}
	<div>
		<a href="/network" class="text-white">
			<Icon icon="ic:sharp-network-check" width="30" />
		</a>
	</div>
	<div>
		<a href="/api" class="text-white">
			<Icon icon="ant-design:api-filled" width="30" />
		</a>
	</div>
</div>
