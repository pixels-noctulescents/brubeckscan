<script lang="ts">
	import { notifications } from '$lib/stores';
	import Notification from './Notification.svelte';
</script>

<div class="w-50 fixed bottom-10 right-8 flex flex-col items-end gap-1">
	{#each $notifications as notification (notification.id)}
		<Notification
			status={notification.status}
			message={notification.message}
			id={notification.id}
		/>
	{/each}
</div>
