<script lang="ts">
	export let handle: any = () => {};
	export let formaction = '';

	let disabled = false;

	async function main() {
		try {
			disabled = true;
			await handle();
			disabled = false;
		} catch (e) {
			console.log(e);
		}
	}
</script>

<button {disabled} {formaction} on:click={main}>
	<slot />
</button>
