<script lang="ts">
	import Links from '$lib/components/Footer/FooterLinks.svelte';
	import Socials from '$lib/components/Footer/FooterSocials.svelte';
</script>

<div
	class="flex w-full items-center justify-center bg-neutral-300 p-8 text-neutral-900 dark:bg-neutral-900 dark:text-white sm:py-10 md:py-20"
>
	<footer class="flex w-full flex-col items-center gap-10 xl:max-w-screen-lg">
		<Links />
		<Socials />
	</footer>
</div>
