<script lang="ts">
    import { onMount } from "svelte";
    import { overview } from "$lib/stores";
    import Chart from "chart.js/auto";
    import Module from "./Module.svelte";
    
    const GRAPH_ID = "profileDoughnut";

    onMount(async () => {
        const config = generateGraphConfig();
        const element: any = document.getElementById(GRAPH_ID);
        const chart = new Chart(element, config);
        overview.subscribe((overview) => {
            if(overview){
                const data = [overview.totals.statuses, 100 - overview.totals.statuses]
                chart.data.datasets[0].data = data;
                chart.update();
            }
        })
    });

    function generateGraphConfig() {
        const data = {
            labels: ["ok", "ko"],
            datasets: [
                {
                    label: "test",
                    backgroundColor: ["lightgreen", "red"],
                    data: [0,0],
                },
            ],
        };
        const config: any = {
            type: "doughnut",
            data: data,
            options: {
                plugins: {
                    legend: {
                        display: false,
                    }
                },
                responsive: true,
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
</script>

<Module>
    <div class="w-full flex items-center">
        <canvas id={GRAPH_ID} />
    </div>
</Module>