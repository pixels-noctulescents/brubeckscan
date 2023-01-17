<script lang="ts">
	import type { NetworkRewardCode } from '@brubeckscan/common/types/networkStats';
	import Module from '$lib/components/Module.svelte';
	import { onMount } from 'svelte';
	import Chart from 'chart.js/auto';

	export let codes: NetworkRewardCode[];

	let canvas: HTMLCanvasElement;

	const labels = codes.map((item) => item.code);
	const topologySize = codes.map((item) => item.topologySize);
	const receivedClaims = codes.map((item) => item.receivedClaims);

	function generateGraphConfig() {
		const data = {
			labels: labels.reverse(),
			datasets: [
				{
					label: 'topologySize',
					backgroundColor: 'white',
					borderColor: '#F9781F',
					borderWidth: 1,
					data: topologySize.reverse()
				},
				{
					label: 'receivedClaims',
					backgroundColor: 'white',
					borderColor: '#A3A3A3',
					borderWidth: 1,
					data: receivedClaims.reverse()
				}
			]
		};
		const config: any = {
			type: 'line',
			data: data,
			plugins: {
				legend: {
					display: false
				}
			},
			options: {
				plugins: {
					legend: {
						display: false
					}
				},
				scales: {
					x: {
						ticks: {
							display: false
						},
						grid: {
							display: false
						},
						border: {
							display: false
						}
					},
					y: {
						ticks: {
							display: false
						},
						grid: {
							display: false
						},
						border: {
							display: false
						}
					}
				}
			}
		};
		return config;
	}
	onMount(async () => {
		const config = generateGraphConfig();
		const chart = new Chart(canvas, config);
		return chart;
	});
</script>

<h3 class="mb-4  text-xl text-neutral-900 dark:text-neutral-100">
	<span class="text-orange-500">Topology size</span> &
	<span class="text-neutral-400">received claims</span>
	over the last 100 rewards codes
</h3>
<div class="w-full">
	<Module>
		<div class="flex w-full flex-col">
			<canvas bind:this={canvas} />
		</div>
	</Module>
</div>
