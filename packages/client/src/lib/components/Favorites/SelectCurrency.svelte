<script lang="ts">
	import { selectedCurrency } from '$lib/stores';
	import Icon from '@iconify/svelte';
	import token from '$lib/assets/img/streamr/token.svg';

	const alt = 'The DATA token icon';
</script>

<div class="flex gap-2 ">
	<button
		class="rounded-md border border-neutral-300 p-2 text-neutral-300 transition duration-150
        ease-in hover:cursor-pointer
        hover:border-neutral-800"
		on:click={() => ($selectedCurrency = 'data')}
	>
		<img class="w-5" src={token} {alt} />
	</button>
	<button
		class="rounded-md border border-neutral-300 p-2  transition duration-150
        ease-in hover:cursor-pointer
        hover:border-neutral-800"
		on:click={() => ($selectedCurrency = 'usdt')}
	>
		<Icon icon="cryptocurrency-color:usdt" width="20px" />
	</button>
	<button
		class="rounded-md border border-neutral-300 p-2 text-blue-600 transition duration-150
        ease-in hover:cursor-pointer
        hover:border-neutral-800"
		on:click={() => ($selectedCurrency = 'eur')}
	>
		<Icon icon="ri:money-euro-circle-fill" width="20px" />
	</button>
</div>
