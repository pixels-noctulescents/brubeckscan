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
			labels: labels.reverse().slice(-100),
			datasets: [
				{
					label: 'TVL in DATA',
					backgroundColor: 'transparent',
					borderColor: '#F9781F',
					borderWidth: 2,
					pointBackgroundColor: 'transparent',
					pointHitRadius: 0,
					pointBorderWidth: 1,
					data: values.reverse().slice(-100)
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
	class="flex min-h-screen w-full flex-col items-center justify-center px-4 text-slate-500 dark:text-white lg:px-0 lg:py-40"
>
	<h3 class="w-full max-w-screen-lg text-3xl">Total value locked (TVL) history</h3>
	<h4 class="mb-6 w-full max-w-screen-lg text-2xl text-neutral-400 md:mb-0">updated hourly</h4>
	<div class="w-full p-0 lg:p-6">
		<canvas bind:this={canvas} />
	</div>
</div>
