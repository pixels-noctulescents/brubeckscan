<script lang="ts">
    import type { Network } from "@brubeckscan/common/types";
    import NetworkStats from "$lib/components/NetworkStats.svelte";
    import NetworkGraphs from "$lib/components/NetworkGraphs.svelte";
    import NetworkAverages from "$lib/components/NetworkAverages.svelte";

    export let data;

    const network: Network = data.network;
</script>

<div class="flex flex-col w-full gap-10">
    <div class="flex w-full gap-8 items-stretch">
        <NetworkStats stats={network.stats}/>
        <NetworkAverages averages={network.averages}/>
    </div>
    <div>
        <NetworkGraphs codes={network.lastRewards}/>
    </div>
</div>