<script lang="ts">
    import type { BrubeckNetworkStats } from "@brubeckscan/common/types/networkStats";
    import NetworkStats from "$lib/components/NetworkStats.svelte";
    import NetworkGraphs from "$lib/components/NetworkGraphs.svelte";
    import NetworkAverages from "$lib/components/NetworkAverages.svelte";

    export let data;

    const network: BrubeckNetworkStats = data.network;
</script>

<div class="flex flex-col w-full gap-10 max-w-screen-lg pt-20 pb-40">
    <div class="flex w-full gap-8 items-stretch">
        <NetworkStats stats={network.stats}/>
        <NetworkAverages averages={network.averages}/>
    </div>
    <div>
        <NetworkGraphs codes={network.lastRewards}/>
    </div>
</div>