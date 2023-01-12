<script lang="ts">
    import type { NetworkRewardCode } from "@brubeckscan/common/types";
    import Module from "./Module.svelte";
    import { onMount } from "svelte";
    import Chart from "chart.js/auto";
    
    export let codes: NetworkRewardCode[];

    const GRAPH_ID = "topologyChart";

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
                    borderColor: "lightblue",
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
        const element: any = document.getElementById(GRAPH_ID);
        const chart = new Chart(element, config);
    });
</script>

<div class="w-full">
    <Module>
        <canvas id={GRAPH_ID} />
    </Module>
</div>