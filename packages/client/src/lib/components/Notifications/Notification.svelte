<script lang="ts">
	import Module from '$lib/components/Module.svelte';
	import NotificationService from '$lib/services/Notification';
	import { scale } from 'svelte/transition';
	import { onMount } from 'svelte';

	export let message: string = '';
	export let status: string = '';
	export let id: string = '';

	onMount(() => {
		setTimeout(() => {
			close();
		}, 3000);
	});

	function close() {
		NotificationService.pop(id);
	}
</script>

<div class="flex w-full max-w-xs" in:scale out:scale>
	<Module>
		<div
			on:click={close}
			on:keydown={close}
			class="flex w-full items-center justify-between gap-2 text-xs hover:cursor-pointer"
		>
			<p class={status}>{message}</p>
		</div>
	</Module>
</div>
