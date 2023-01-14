<script lang="ts">
	import Links from '$lib/components/FooterLinks.svelte';
	import Socials from './FooterSocials.svelte';
</script>

<div
	class="flex w-full items-center justify-center bg-neutral-200 p-8 py-10 text-neutral-900 xl:py-20"
>
	<footer class="flex w-full flex-col gap-10 xl:max-w-screen-lg">
		<Links />
		<Socials />
	</footer>
</div>
