<script lang="ts">
  import Icon from "@iconify/svelte";
  import { enhance } from "$app/forms";
  import { format } from "$lib/utils/format";
  import type { DatabaseNode, Node } from "@brubeckscan/common/types";
  import { nodeService } from "$lib/services/node";
  import { streamrNetwork } from "$lib/stores/streamrNetwork";
  import { Shadow } from "svelte-loading-spinners";
  import MdDelete from "svelte-icons/md/MdDelete.svelte";

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
  <td>
    <div class="dataContainer">
      <p>{node.name}</p>
    </div>
  </td>
  <!-- Address -->
  <td title={node.address}>
    <div class="dataContainer">
      <div class="dualContainer">
        <p>{format.ethAddress(node.address)}</p>
        <div style:display="flex">
          <a
            href={`https://polygonscan.com/address/${node.address}`}
            title="Search this address on Polygonscan"
            target="_blank"
            rel="noreferrer"
            style:display="flex"
          >
            <Icon icon="cryptocurrency-color:matic" width="26" />
          </a>
        </div>
      </div>
    </div>
  </td>
  {#await promise}
    <td colspan="7">
      <div class="loader">
        <Shadow size="15" color="#FF3E00" unit="px" duration="1s" />
      </div>
    </td>
  {:then nodeData}
    {#if nodeData}
      <td>
        <div class="dataContainer">
          {#if getStatus(nodeData) === true}
            <p class="ok">OK</p>
          {:else}
            <p class="ko">KO</p>
          {/if}
        </div>
      </td>
      <td>
        <div class="dataContainer">
          <p>{format.dataTokenAmount(nodeData.dataStaked)}</p>
        </div>
      </td>
      <td>
        <div class="dataContainer">
          <p>{format.dataTokenAmount(nodeData.totalRewardsInData)}</p>
        </div>
      </td>
      <td>
        <div class="dataContainer">
          <p>{format.dataTokenAmount(nodeData.dataSent)}</p>
        </div>
      </td>
      <td>
        <div class="dataContainer">
          <p>{format.dataTokenAmount(nodeData.dataToBeReceived)}</p>
        </div>
      </td>
      <td>
        <div class="dataContainer">
          <p>{format.percentage(nodeData.claimPercentage)}</p>
        </div>
      </td>
      <!-- Actions -->
      <td>
        <div class="dataContainer">
          <form method="POST" action="?/remove" use:enhance>
            <input type="hidden" bind:value={node.id} name="nodeId" />
            <button type="submit">
              <div class="icon">
                <MdDelete />
              </div>
            </button>
          </form>
        </div>
      </td>
    {/if}
  {/await}
</tr>

<style lang="scss">
  form {
    height: 100%;
    display: flex;
  }
  tr {
    transition-duration: 0.3s;
    height: 100%;
  }

  tr:hover {
    background-color: rgb(236, 236, 236);
  }

  tr:not(:last-child) {
    border-bottom: 1px solid lightgray;
  }

  td {
    padding: 20px;
    text-align: center;
    height: 100%;
  }

  .dataContainer {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    form {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .dualContainer {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
  .icon {
    transition-duration: 0.3s;
    width: 26px;
    color: lightgray;
    display: flex;
    align-items: center;
    height: 100%;
    &:hover {
      color: rgb(32, 32, 32);
      cursor: pointer;
    }
  }
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
</style>
