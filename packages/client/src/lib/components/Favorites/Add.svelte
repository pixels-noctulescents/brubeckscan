<script lang="ts">
	import Icon from '@iconify/svelte';
	import { user } from '$lib/stores';
	import Module from '$lib/components/Module.svelte';
	import send from '$lib/send';
	import NotificationService from '$lib/services/Notification';
	import validator from 'validator';

	let address = '';

	const placeholder = 'Enter a node address to save it';

	async function add() {
		const cleanInput = address.toLowerCase().trim();

		if (!validator.isEthereumAddress(cleanInput)) {
			return NotificationService.push('Invalid ethereum address', 'ko');
		}
		if ($user) {
			const newFavorite = {
				favoriteAddress: cleanInput,
				userAddress: $user.address,
				favoriteName: `Node ${$user.Favorite.length + 1}`
			};

			const response = await send(`favorites`, 'POST', newFavorite);

			if (response.status === 'success') {
				user.update((user) => {
					if (user) {
						user.Favorite = [...user.Favorite, response.data.favorite];
					}
					NotificationService.push('Saved', 'ok');
					address = '';
					return user;
				});
			} else {
				NotificationService.push('Failed to save', 'ko');
			}
		}
	}
</script>

<div class="sticky top-0 flex w-full">
	<Module>
		<form on:submit|preventDefault={add} class="flex w-full justify-between">
			<input
				class="w-full dark:bg-transparent dark:text-white"
				bind:value={address}
				{placeholder}
				required
			/>
			<button>
				<Icon
					icon="material-symbols:add"
					width="40"
					class="text-neutral-300 transition duration-100 ease-in hover:text-neutral-900"
					type="submit"
				/>
			</button>
		</form>
	</Module>
</div>
