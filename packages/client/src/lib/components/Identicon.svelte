<script lang="ts">
	export let address: string;

	const src = `https://api.dicebear.com/5.x/identicon/svg?seed=${address}`;
	const alt = 'A unique identicon';
</script>

<div class="w-5">
	<img class="w-full" {src} {alt} />
</div>
