<script lang="ts">
</script>

<div
	class="flex w-full rounded-md  bg-white bg-opacity-50 p-6 shadow-sm transition duration-150 ease-in dark:border-white dark:bg-neutral-900 dark:text-white"
>
	<slot />
</div>

<style>
	div {
		backdrop-filter: blur(10px);
	}
</style>
