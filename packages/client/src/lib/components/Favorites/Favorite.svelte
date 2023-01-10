<script lang="ts">
  import { fade } from "svelte/transition";
  import type { Favorite } from "@brubeckscan/common/types/overview";
  import Remove from "./Remove.svelte";
  import { format } from "$lib/utils/format";
  import { enhance } from "$app/forms";

  export let favorite: Favorite;

  let newName = favorite.db.name;

  let isEditing: boolean = false;
</script>

<div class="module responsive container" in:fade>
  <div class="row">
    <div class="name">
      {#if isEditing}
        <input type="text" bind:value={newName} />
      {:else}
        <h4>{favorite.db.name}</h4>
      {/if}
    </div>
    <div class="actions">
      <Remove id={favorite.db.id} />
      {#if isEditing}
        <div>
          <form use:enhance method="POST" on:submit={() => (isEditing = false)}>
            <input type="hidden" value={newName} name="name" />
            <input type="hidden" value={favorite.db.id} name="id" />
            <button formaction="?/updateFavoriteName">Save</button>
          </form>
        </div>
      {/if}
      {#if !isEditing}
        <button on:click={() => (isEditing = !isEditing)}>Edit</button>
      {/if}
      <button>Extend</button>
    </div>
  </div>
  <div class="row">
    <div>
      <img
        src={`https://avatars.dicebear.com/api/identicon/${favorite.db.address}.svg`}
        alt="A generated icon"
        class="icon {favorite.stats.status ? '' : 'gray'}"
      />
    </div>
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

  input {
    font-size: 1.777rem;
  }
</style>
