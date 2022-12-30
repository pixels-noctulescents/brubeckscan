<script lang="ts">
  import Icon from "@iconify/svelte";
  import { format } from "$lib/utils/format";
  import type { DatabaseNode, Node } from "@brubeckscan/common/types";
  import { nodeService } from "$lib/services/node";
  import { streamrNetwork } from "$lib/stores/streamrNetwork";
  import { Shadow } from "svelte-loading-spinners";

  export let node: DatabaseNode;

  const promise = nodeService.getNodeStats(node.address);

  function getStatus(nodeData: Node) {
    const latestNetworkCode = $streamrNetwork.lastRewards[0].code;
    const latestNodeCode = nodeData.claimedRewardCodes[0]?.id;
    return latestNetworkCode === latestNodeCode;
  }
</script>

<tr>
  <!-- Name -->
  <td>{node.name}</td>
  <!-- Address -->
  <td title={node.address}>
    <div class="flex">
      <p>{format.ethAddress(node.address)}</p>
      <div>
        <a
          href={`https://polygonscan.com/address/${node.address}`}
          title="Search this address on Polygonscan"
          target="_blank"
          rel="noreferrer"
        >
          <Icon icon="cryptocurrency-color:matic" width="26" />
        </a>
      </div>
    </div>
  </td>
  {#await promise}
    <td colspan="7">
      <div class="loader">
        <Shadow size="15" color="#FF3E00" unit="px" duration="1s" />
      </div>
    </td>
    <!-- <td />
    <td />
    <td />
    <td />
    <td />
    <td /> -->
  {:then nodeData}
    {#if nodeData}
      <td>
        {#if getStatus(nodeData) === true}
          <p class="ok">OK</p>
        {:else}
          <p class="ko">KO</p>
        {/if}
      </td>
      <td>{format.dataTokenAmount(nodeData.dataStaked)}</td>
      <td>{format.dataTokenAmount(nodeData.totalRewardsInData)}</td>
      <td>{format.dataTokenAmount(nodeData.dataSent)}</td>
      <td>{format.dataTokenAmount(nodeData.dataToBeReceived)}</td>
      <td>{format.percentage(nodeData.claimPercentage)}</td>
      <td />
    {/if}
  {/await}
</tr>

<style lang="scss">
  .loader {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .ok {
    color: lightgreen;
    font-weight: bold;
  }
  .ko {
    color: rgb(255, 64, 64);
    font-weight: bold;
  }
  .flex {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
  td {
    padding: 20px;
    text-align: center;
  }

  tr {
    transition-duration: 0.3s;
  }

  tr:hover {
    background-color: rgb(236, 236, 236);
  }

  tr:not(:last-child) {
    border-bottom: 1px solid lightgray;
  }
</style>
