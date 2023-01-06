<script lang="ts">
  import type { Node } from "@brubeckscan/common/types";
  import { format } from "$lib/utils/format";
  import { network } from "$lib/stores/network";

  export let nodeData: Node;

  function getStatus(nodeData: Node) {
    const latestNetworkCode = $network.lastRewards[0].code;
    const latestNodeCode = nodeData.claimedRewardCodes[0]?.id;
    return latestNetworkCode === latestNodeCode;
  }
</script>

<td>
  <div>
    {#if getStatus(nodeData) === true}
      <p class="ok">OK</p>
    {:else}
      <p class="ko">KO</p>
    {/if}
  </div>
</td>
<td>
  <div>
    <p>{format.dataTokenAmount(nodeData.dataStaked)}</p>
  </div>
</td>
<td>
  <div>
    <p>{format.dataTokenAmount(nodeData.totalRewardsInData)}</p>
  </div>
</td>
<td>
  <div>
    <p>{format.dataTokenAmount(nodeData.dataSent)}</p>
  </div>
</td>
<td>
  <div>
    <p>{format.dataTokenAmount(nodeData.dataToBeReceived)}</p>
  </div>
</td>
<td>
  <div>
    <p>{format.percentage(nodeData.claimPercentage)}</p>
  </div>
</td>

<style lang="scss">
  div {
    display: flex;
    justify-content: center;
    height: 100%;
    align-items: center;
  }

  .ok {
    color: green;
  }

  .ko {
    color: red;
  }
</style>
