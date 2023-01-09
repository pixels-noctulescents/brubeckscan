<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { scale, fade } from "svelte/transition";
  import type { Favorite, Node } from "@brubeckscan/common/types";
  import NodeService from "$lib/services/node";
  import FavoriteService from "$lib/services/favorite";
  import { network } from "$lib/stores/network";
  import { totals } from "$lib/stores/favorites";
  import Remove from "./Remove.svelte";
  import Loader from "./Loader.svelte";
  import { format } from "$lib/utils/format";

  export let favorite: Favorite;

  let loading = false;

  let node: Node = NodeService.getEmptyNode();

  onMount(async () => {
    try {
      loading = true;
      const stats = await NodeService.fetchStats(favorite.address);
      if (stats) {
        node = stats;
        node.status = FavoriteService.getStatus(
          $network.lastRewards,
          node.claimedRewardCodes
        );
        totals.update((item) => {
          if (node.status) {
            item.statuses = [...item.statuses, true];
          }
          item.totalDataSent += node.dataSent;
          item.totalDataStaked += node.dataStaked;
          item.totalDataToBeReceived += node.dataToBeReceived;
          item.totalRewards += node.totalRewardsInData;
          return item;
        });
      }
      loading = false;
    } catch (e) {
      console.log(e);
    }
  });

  onDestroy(() => {
    totals.update((item) => {
      if (node.status) {
        if (item.statuses.length) {
          item.statuses = item.statuses.splice(1);
        }
      }
      item.totalDataSent -= node.dataSent;
      item.totalDataStaked -= node.dataStaked;
      item.totalDataToBeReceived -= node.dataToBeReceived;
      item.totalRewards -= node.totalRewardsInData;
      return item;
    });
  });
</script>

<!-- Component -->
<div in:scale class="module responsive container">
  <div class="row">
    <img
      src={`https://avatars.dicebear.com/api/identicon/${favorite.address}.svg`}
      alt="A generated icon"
      class="icon"
    />
    <div><Remove {favorite} /></div>
  </div>
  <div class="row">
    <div>{favorite.name}</div>
    <div in:scale>
      {#if loading}
        <Loader />
      {:else if node.status}
        <p class="ok">OK</p>
      {:else}
        <p class="ko">KO</p>
      {/if}
    </div>
  </div>
  <div class="row">
    <div class="stats">
      <div class="stat">
        <div class="label">Address</div>
        <div class="value">
          <div>{favorite.address}</div>
        </div>
      </div>
      <div class="stat">
        <div class="label">Latest claim</div>
        <div class="value">
          {#if loading}
            <Loader />
          {:else if node.claimedRewardCodes.length}
            {format.getFromNow(node.claimedRewardCodes[0].claimTime)}
          {/if}
        </div>
      </div>
      <div class="stat">
        <div class="label">To Be Received</div>
        <div class="value">
          {#if loading}
            <Loader />
          {:else}
            {format.numberWithSpaces(node.dataToBeReceived)} DATA
          {/if}
        </div>
      </div>
      <div class="stat">
        <div class="label">Staked</div>
        <div class="value">
          {#if loading}
            <Loader />
          {:else}
            {format.numberWithSpaces(node.dataStaked)} DATA
          {/if}
        </div>
      </div>
      <div class="stat">
        <div class="label">Sent</div>
        <div class="value">
          {#if loading}
            <Loader />
          {:else}
            {format.numberWithSpaces(node.dataSent)} DATA
          {/if}
        </div>
      </div>
      <div class="stat">
        <div class="label">Total rewards</div>
        <div class="value">
          {#if loading}
            <Loader />
          {:else}
            {format.numberWithSpaces(node.totalRewardsInData)} DATA
          {/if}
        </div>
      </div>
      <div class="stat">
        <div class="label">Latest code</div>
        <div class="value">
          {#if loading}
            <Loader />
          {:else if node?.claimedRewardCodes[0]}
            {node.claimedRewardCodes[0].id}
          {/if}
        </div>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: space-between;
    width: calc(50% - 5px);
    .row {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .stats {
        width: 100%;
        display: flex;
        flex-direction: column;
        .stat {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      }
    }
  }
  .icon {
    width: 20px;
  }
</style>
