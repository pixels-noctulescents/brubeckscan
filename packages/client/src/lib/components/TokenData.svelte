<script lang="ts">
	import { format } from '@brubeckscan/common/utils';
	import token from '$lib/assets/img/streamr/token.svg';

	export let value: number = 0;

	const alt = 'The DATA token icon';
</script>

<div class="flex items-center justify-center gap-2">
	<p class="text-md flex items-center font-mono text-neutral-700">
		{format.numberWithSpaces(value)}
	</p>
	<img class="w-5" src={token} {alt} />
</div>
