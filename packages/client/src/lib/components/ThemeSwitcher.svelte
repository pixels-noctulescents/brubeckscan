<script lang="ts">
	import Button from './Button.svelte';
	import UserService from '$lib/services/User';
	import { user, selectedTheme } from '$lib/stores';
	import Icon from '@iconify/svelte';
	import NotificationService from '$lib/services/Notification';

	async function select() {
		if ($selectedTheme === 'dark') {
			selectedTheme.set('light');
			if ($user) {
				await UserService.update(`${$user.address}`, {
					theme: 'light'
				});
				return NotificationService.push('Preference updated', 'ok');
			}
		} else {
			selectedTheme.set('dark');
			if ($user) {
				await UserService.update(`${$user.address}`, {
					theme: 'dark'
				});
				return NotificationService.push('Preference updated', 'ok');
			}
		}
	}
</script>

<div class="flex items-center">
	<Button handle={select}>
		{#if $selectedTheme === 'dark'}
			<Icon icon="ph:sun" width="18" />
		{:else}
			<Icon icon="ph:moon" width="18" />
		{/if}
	</Button>
</div>
