<script lang="ts">
  import Node from "./_Node.svelte";
  import { user } from "$lib/stores/user";
</script>

<div>
  {#if $user}
    {#each $user.nodes as node}
      <Node {node} />
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
