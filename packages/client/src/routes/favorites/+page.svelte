<script lang="ts">
  import type { PageData, ActionData } from "./$types";
  import { enhance } from "$app/forms";
  import { user } from "$lib/stores";
  import Title from "$lib/components/common/Title.svelte";
  import Totals from "$lib/components/Favorites/Total.svelte";
  import Favorite from "$lib/components/Favorites/Favorite.svelte";
  import { fade } from "svelte/transition";

  export let data: PageData;
  export let form: ActionData;

  const title = "Favorites";
  const subTitle = "Manage your nodes and keep track of your rewards";
</script>

<svelte:head>
  <title>BrubeckScan | Favorites</title>
</svelte:head>

{#if $user}
  <div class="page">
    <!-- Title -->
    <Title {title} {subTitle} />
    <!-- Content -->
    <div class="responsive">
      <div class="module add">
        <!-- Form message -->

        <!-- Add form -->
        <form method="POST" use:enhance>
          <input type="hidden" name="userAddress" value={$user.address} />
          <input
            type="hidden"
            name="name"
            value={`Node ${data.overview.favorites.length + 1}`}
          />
          <input
            type="text"
            name="favoriteAddress"
            placeholder="Enter a node address"
            required={true}
          />
          <!-- Message -->
          {#if form}
            <div class="messages" in:fade>
              {#if form.error}
                <p class="ko">{form.error}</p>
              {/if}
              {#if form.success}
                <p class="ok">{form.message}</p>
              {/if}
            </div>
          {/if}
          <!-- Button -->
          <button formaction="?/saveFavorite">Add</button>
        </form>
      </div>

      <!-- Totals -->
      <Totals totals={data.overview.totals} />

      <!-- Favorites -->
      <div class="favorites">
        {#each data.overview.favorites as favorite (favorite.db.id)}
          <Favorite {favorite} />
        {/each}
      </div>
    </div>
  </div>
{/if}

<style lang="scss">
  .add {
    display: flex;
    justify-content: space-between;
    position: sticky;
    top: 125px;
    left: 0;
    display: flex;
    width: 100%;
    z-index: 2;
    form {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: 50px;
      input {
        font-size: 22px;
        flex-grow: 1;
        border-color: rgb(17, 10, 10);
      }
    }
  }
  .page {
    position: relative;
  }
  .responsive {
    gap: 20px;
    display: flex;
    flex-direction: column;
  }
  .favorites {
    display: flex;
    flex-direction: row;
    gap: 20px;
    flex-wrap: wrap;
    padding-bottom: 200px;
  }
</style>
