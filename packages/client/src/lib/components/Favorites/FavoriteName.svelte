<script lang="ts">
	import type { DFavorite } from '@brubeckscan/common/types/db';
	import send from '$lib/send';
	import { user } from '$lib/stores';
	import NotificationService from '$lib/services/Notification';
	import Icon from '@iconify/svelte';

	export let favorite: DFavorite;

	let isEditing = false;
	let name = favorite.name;

	async function update() {
		try {
			const response = await send(`favorites/${favorite.id}`, 'POST', { name });
			if (response) {
				user.update((user) => {
					if (user) {
						const indexToUpdate = user.Favorite.findIndex((storeItem) => {
							return storeItem.id === favorite.id;
						});

						if (indexToUpdate) {
							user.Favorite[indexToUpdate].name = name;
						}
					}
					return user;
				});

				favorite.name = name;
				isEditing = false;

				return NotificationService.push('Updated', 'ok');
			} else {
				return NotificationService.push('Update failed', 'ko');
			}
		} catch (e) {
			console.log(e);
		}
	}
</script>

<form class="flex items-center justify-between text-2xl" on:submit|preventDefault={update}>
	<div>
		{#if isEditing}
			<input
				required
				class="bg-slate-400 text-white"
				type="text"
				bind:value={name}
				placeholder="Change node name"
			/>
		{:else}
			<p>{favorite.name}</p>
		{/if}
	</div>
	<div>
		{#if isEditing}
			<button type="submit">
				<Icon icon="material-symbols:save-as" width="24" />
			</button>
			<button on:click={() => (isEditing = false)}>
				<Icon icon="material-symbols:edit-off" width="24" />
			</button>
		{:else}
			<button on:click={() => (isEditing = true)}>
				<Icon icon="material-symbols:edit" width="24" />
			</button>
		{/if}
	</div>
</form>
