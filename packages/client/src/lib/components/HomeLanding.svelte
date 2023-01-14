<script lang="ts">
	import Module from './Module.svelte';
	import Icon from '@iconify/svelte';
	import validator from 'validator';
	import { goto } from '$app/navigation';
	import { slide } from 'svelte/transition';
	import streamrLogo from '$lib/assets/img/streamr/logo.svg';

	let address: string;
	let invalid: boolean = false;

	async function handleSearch() {
		if (!validator.isEthereumAddress(address)) {
			invalid = true;
		} else {
			await goto(`nodes/${address}`);
		}
	}
</script>

<article
	class="flex  h-landing w-full flex-col items-center gap-20 bg-neutral-200 bg-contain p-8 pt-40 sm:p-40 md:bg-cover"
>
	<section
		in:slide
		class="text-md flex items-center gap-2 rounded-md p-10 text-slate-500 md:text-xl"
	>
		<span>BrubeckScan aggregates data to help you manage Streamr nodes</span>
	</section>

	<div class="flex w-full max-w-screen-lg">
		<Module>
			<div in:slide class="flex w-full justify-between gap-20">
				<input
					class="w-full bg-transparent text-xl"
					bind:value={address}
					placeholder="Enter a node address"
				/>
				<button on:click={handleSearch}>
					<div class="w-10 text-gray-300 transition duration-150 ease-in hover:text-slate-700">
						<Icon icon="material-symbols:search" width="32" />
					</div>
				</button>
			</div>
		</Module>
	</div>
	{#if invalid}
		<p class="rounded-md bg-neutral-50 p-5 text-xl text-slate-500">
			Please enter a valid ethereum address
		</p>
	{/if}
</article>

<style>
	section {
		z-index: 2;
		background-color: rgba(240, 248, 255, 0.664);
		backdrop-filter: blur(10px);
	}
	article {
		background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1200' height='600' preserveAspectRatio='none' viewBox='0 0 1200 600'%3e%3cg mask='url(%26quot%3b%23SvgjsMask22476%26quot%3b)' fill='none'%3e%3crect width='240.48' height='240.48' clip-path='url(%26quot%3b%23SvgjsClipPath22477%26quot%3b)' x='561.33' y='274.58' fill='url(%23SvgjsPattern22478)' transform='rotate(276.79%2c 681.57%2c 394.82)'%3e%3c/rect%3e%3crect width='348' height='348' clip-path='url(%26quot%3b%23SvgjsClipPath22479%26quot%3b)' x='486.5' y='50.59' fill='url(%23SvgjsPattern22480)' transform='rotate(125.82%2c 660.5%2c 224.59)'%3e%3c/rect%3e%3crect width='130.32' height='130.32' clip-path='url(%26quot%3b%23SvgjsClipPath22481%26quot%3b)' x='843.14' y='204.86' fill='url(%23SvgjsPattern22482)' transform='rotate(268.78%2c 908.3%2c 270.02)'%3e%3c/rect%3e%3ccircle r='50' cx='916' cy='377.39' stroke='%23e73635' stroke-width='1.45'%3e%3c/circle%3e%3crect width='132' height='132' clip-path='url(%26quot%3b%23SvgjsClipPath22483%26quot%3b)' x='332.98' y='-33' fill='url(%23SvgjsPattern22484)' transform='rotate(217.85%2c 398.98%2c 33)'%3e%3c/rect%3e%3crect width='180' height='180' clip-path='url(%26quot%3b%23SvgjsClipPath22485%26quot%3b)' x='515.33' y='257.4' fill='url(%23SvgjsPattern22486)' transform='rotate(69.08%2c 605.33%2c 347.4)'%3e%3c/rect%3e%3cpath d='M1155.32 10.06a5.6 5.6 0 1 0 10.45 4.02 5.6 5.6 0 1 0-10.45-4.02zM1170.25 15.81a5.6 5.6 0 1 0 10.45 4.02 5.6 5.6 0 1 0-10.45-4.02zM1185.18 21.56a5.6 5.6 0 1 0 10.45 4.03 5.6 5.6 0 1 0-10.45-4.03zM1200.11 27.31a5.6 5.6 0 1 0 10.45 4.03 5.6 5.6 0 1 0-10.45-4.03zM1119.7 13.48a5.6 5.6 0 1 0 10.45 4.03 5.6 5.6 0 1 0-10.45-4.03zM1134.63 19.23a5.6 5.6 0 1 0 10.46 4.03 5.6 5.6 0 1 0-10.46-4.03zM1149.56 24.99a5.6 5.6 0 1 0 10.46 4.02 5.6 5.6 0 1 0-10.46-4.02zM1164.49 30.74a5.6 5.6 0 1 0 10.46 4.02 5.6 5.6 0 1 0-10.46-4.02z' fill='rgba(209%2c 62%2c 26%2c 1)'%3e%3c/path%3e%3ccircle r='50' cx='519.62' cy='500.78' stroke='rgba(255%2c 133%2c 64%2c 1)' stroke-width='2.92' stroke-dasharray='3%2c 2'%3e%3c/circle%3e%3ccircle r='98.60397273872319' cx='1013.74' cy='20.97' fill='rgba(209%2c 62%2c 26%2c 1)'%3e%3c/circle%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask22476'%3e%3crect width='1200' height='600' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cpattern x='0' y='0' width='240.48' height='13.36' patternUnits='userSpaceOnUse' id='SvgjsPattern22478'%3e%3crect width='240.48' height='6.68' x='0' y='0' fill='rgba(255%2c 133%2c 64%2c 1)'%3e%3c/rect%3e%3crect width='240.48' height='6.68' x='0' y='6.68' fill='rgba(0%2c 0%2c 0%2c 0)'%3e%3c/rect%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath22477'%3e%3ccircle r='60.12' cx='681.57' cy='394.82'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='348' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern22480'%3e%3crect width='348' height='3' x='0' y='0' fill='%23e73635'%3e%3c/rect%3e%3crect width='348' height='3' x='0' y='3' fill='rgba(0%2c 0%2c 0%2c 0)'%3e%3c/rect%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath22479'%3e%3ccircle r='87' cx='660.5' cy='224.59'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='130.32' height='10.86' patternUnits='userSpaceOnUse' id='SvgjsPattern22482'%3e%3crect width='130.32' height='5.43' x='0' y='0' fill='%23e73635'%3e%3c/rect%3e%3crect width='130.32' height='5.43' x='0' y='5.43' fill='rgba(0%2c 0%2c 0%2c 0)'%3e%3c/rect%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath22481'%3e%3ccircle r='32.58' cx='908.3' cy='270.02'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='132' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern22484'%3e%3crect width='132' height='3' x='0' y='0' fill='%23e73635'%3e%3c/rect%3e%3crect width='132' height='3' x='0' y='3' fill='rgba(0%2c 0%2c 0%2c 0)'%3e%3c/rect%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath22483'%3e%3ccircle r='33' cx='398.98' cy='33'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='6' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern22486'%3e%3cpath d='M0 6L3 0L6 6' stroke='rgba(255%2c 133%2c 64%2c 1)' fill='none'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath22485'%3e%3ccircle r='45' cx='605.33' cy='347.4'%3e%3c/circle%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
	}
</style>
