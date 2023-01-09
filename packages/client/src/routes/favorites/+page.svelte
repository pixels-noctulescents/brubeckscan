<script lang="ts">
  import { onMount } from "svelte";
  import { favorites } from "$lib/stores/favorites";
  import Title from "$lib/components/common/Title.svelte";
  import Add from "$lib/components/Favorites/Add.svelte";
  import Totals from "$lib/components/Favorites/Totals.svelte";
  import Favorite from "$lib/components/Favorites/Favorite.svelte";
  import FavoriteService from "$lib/services/favorite";

  const title = "Favorites";
  const subTitle = "Manage your nodes and keep track of your rewards";

  onMount(() => {
    FavoriteService.resetTotals();
  });
</script>

<svelte:head>
  <title>BrubeckScan | Favorites</title>
</svelte:head>

<div class="page">
  <Title {title} {subTitle} />
  <div class="responsive">
    <Add />
    <Totals />
    <div class="favorites">
      {#if $favorites}
        {#each $favorites as favorite (favorite.id)}
          <Favorite {favorite} />
        {/each}
      {/if}
    </div>
  </div>
</div>

<style lang="scss">
  .responsive {
    gap: 20px;
    display: flex;
    flex-direction: column;
  }
  .favorites {
    display: flex;
    flex-direction: row;
    gap: 10px;
    flex-wrap: wrap;
  }
</style>
