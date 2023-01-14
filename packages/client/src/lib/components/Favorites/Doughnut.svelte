<script lang="ts">
	import { onMount } from 'svelte';
	import { favoritesTotals } from '$lib/stores';
	import Chart from 'chart.js/auto';
	import Module from '$lib/components/Module.svelte';

	let canvas: HTMLCanvasElement;

	onMount(async () => {
		const config = generateGraphConfig();
		const chart = new Chart(canvas, config);

		favoritesTotals.subscribe((favoritesTotals) => {
			if (favoritesTotals) {
				const data = [favoritesTotals.nodesOk, favoritesTotals.nodesKo];
				chart.data.datasets[0].data = data;
				chart.update();
			}
		});
	});

	function generateGraphConfig() {
		const data = {
			labels: ['ok', 'ko'],
			datasets: [
				{
					label: 'nodes',
					backgroundColor: ['lightgreen', 'red'],
					data: [0, 0]
				}
			]
		};
		const config: any = {
			type: 'doughnut',
			data: data,
			options: {
				plugins: {
					legend: {
						display: false
					}
				},
				responsive: true,
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
</script>

<Module>
	<div class="flex w-full flex-col items-center justify-center">
		<div class="flex w-40 items-center justify-center">
			<canvas bind:this={canvas} />
		</div>
	</div>
</Module>
