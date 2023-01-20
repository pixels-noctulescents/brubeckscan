<script lang="ts">
	import Chart from 'chart.js/auto';
	import { onMount } from 'svelte';
	import type { History } from '@brubeckscan/common/types/networkStats';

	export let history: History;

	let canvas: HTMLCanvasElement;

	let labels = history.map((item) => new Date(item.createdAt).toLocaleString());
	let values = history.map((item) => item.spotDataStaked);

	function generateGraphConfig() {
		const data = {
			labels: labels.reverse(),
			datasets: [
				{
					label: 'TVL in DATA',
					backgroundColor: 'transparent',
					borderColor: '#F9781F',
					borderWidth: 5,
					data: values.reverse()
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

<div
	class="flex min-h-screen w-full flex-col items-center bg-slate-200 py-40 text-slate-500 dark:bg-neutral-800 dark:text-white"
>
	<h3 class="w-full max-w-screen-lg text-xl ">Total value locked (TVL) history</h3>
	<canvas bind:this={canvas} />
</div>

<style>
	div {
		background: rgb(229, 229, 229);
	}
</style>
