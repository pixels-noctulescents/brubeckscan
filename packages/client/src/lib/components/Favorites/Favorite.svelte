<script lang="ts">
  import { fade } from "svelte/transition";
  import type { Favorite } from "@brubeckscan/common/types/overview";
  import Remove from "./Remove.svelte";
  import { format } from "$lib/utils/format";
  export let favorite: Favorite;
</script>

<div class="module responsive container" in:fade>
  <div class="row">
    <div class="name">
      <div>
        <img
          src={`https://avatars.dicebear.com/api/identicon/${favorite.db.address}.svg`}
          alt="A generated icon"
          class="icon {favorite.stats.status ? '' : 'gray'}"
        />
      </div>
    </div>
    <div class="actions">
      <Remove id={favorite.db.id} />
      <button>Extend</button>
    </div>
  </div>
  <div class="row">
    <h4>{favorite.db.name}</h4>
    <div>
      {#if favorite.stats.status}
        <p class="ok">OK</p>
      {:else}
        <p class="ko">KO</p>
      {/if}
    </div>
    <div>
      {favorite.db.address}
    </div>
  </div>
  <div class="row">
    {#if favorite.stats.lastClaim}
      <p>Last claim {format.getFromNow(favorite.stats.lastClaim.claimTime)}</p>
    {/if}
    <p>
      TBR | {format.numberWithSpaces(favorite.stats.dataToBeReceived)} DATA
    </p>
    <p>Staked | {format.numberWithSpaces(favorite.stats.dataStaked)} DATA</p>
    <p>Sent | {format.numberWithSpaces(favorite.stats.dataSent)} DATA</p>
  </div>
</div>

<style lang="scss">
  .icon {
    width: 30px;
    &.gray {
      filter: grayscale(1);
    }
  }
  .container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: space-between;
    .actions {
      display: flex;
      gap: 20px;
    }
    .row {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
</style>
