<script lang="ts">
    import type { NetworkRewardCode } from "@brubeckscan/common/types/networkStats";
    import Module from "./Module.svelte";
    import { onMount } from "svelte";
    import Chart from "chart.js/auto";
    
    export let codes: NetworkRewardCode[];

    let canvas: HTMLCanvasElement;

    const labels = codes.map((item) => item.code);
    const topologySize = codes.map( item => item.topologySize);
    const receivedClaims = codes.map(item => item.receivedClaims);

    function generateGraphConfig() {
        const data = {
            labels: labels.reverse(),
            datasets: [
                {
                    label: "topologySize",
                    backgroundColor: "white",
                    borderColor: "#FF8540",
                    borderWidth: 1,
                    data: topologySize.reverse(),
                },
                {
                    label: "receivedClaims",
                    backgroundColor: "white",
                    borderColor: "lightgrey",
                    borderWidth: 1,
                    data: receivedClaims.reverse(),
                },
            ],
        };
        const config: any = {
            type: "line",
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
                            display: false,
                        },
                        grid: {
                            display: false
                        },
                        border: {
                            display: false,
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
                },
            },
        };
        return config;
    }
    onMount(async () => {
        const config = generateGraphConfig();
        const chart = new Chart(canvas, config);
        return chart;
    });
</script>

<div class="w-full">
    <Module>
        <div class="w-full flex flex-col">
            <h3 class="text-3xl  text-neutral-900">Topology size & received claims</h3>
            <canvas bind:this={canvas}/>
        </div>
    </Module>
</div>