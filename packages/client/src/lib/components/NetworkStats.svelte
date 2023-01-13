<script lang="ts">
    import type { Stats } from "@brubeckscan/common/types/networkStats";
    
    import Module from "./Module.svelte";

    export let stats: Stats;
</script>

<div class="flex w-1/2">
    <Module>
        <div class="flex flex-col w-full justify-between text-lg">
            <h3 class="text-3xl mb-6">APY / APR</h3>
            <div class="flex justify-between">
                <p class="text-gray-600">Spot APY</p>
                <p>{stats.SPOTAPY} %</p>
            </div>
            <div class="flex justify-between">
                <p class="text-gray-600">24H APY</p>
                <p>{stats["24APY"]} %</p>
            </div>
            <div class="flex justify-between">
                <p class="text-gray-600">Spot APR</p>
                <p>{stats.SPOTAPR} %</p>
            </div>
            <div class="flex justify-between">
                <p class="text-gray-600">24H APR</p>
                <p>{stats["24APR"]} %</p>
            </div>
        </div>
    </Module>
</div>