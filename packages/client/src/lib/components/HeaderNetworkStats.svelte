<script lang="ts">
    import { prices } from "$lib/stores";
    import type { BrubeckNetworkStats} from "@brubeckscan/common/types/networkStats";
    import { format } from "@brubeckscan/common/utils";

    export let network: BrubeckNetworkStats;
</script>

<div class="text-[9px] gap-2 flex lg:text-xs lg:gap-4">
    <p>{format.numberWithSpaces(Math.round(network?.stats.SPOTDATASTAKED * $prices.DATAUSDT))} USDT Locked</p>
    <p>APY {network?.stats["SPOTAPY"]}%</p>
    <p>{network?.lastRewards[0].topologySize} nodes</p>
</div>