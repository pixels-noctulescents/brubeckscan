<script lang="ts">
  import Node from "./_Favorite.svelte";
  import { favorites } from "$lib/stores/favorites";
</script>

<div>
  {#if $favorites}
    {#each $favorites as favorite}
      <Node {favorite} />
    {/each}
  {/if}
</div>

<style lang="scss">
  div {
    border-radius: 8px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
</style>
