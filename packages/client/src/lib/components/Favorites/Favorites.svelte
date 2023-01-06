<script lang="ts">
  import AddNode from "./_AddNode.svelte";
  import Pool from "./Pool.svelte";
</script>

<div>
  <AddNode />
  <Pool />
</div>

<style lang="scss">
  div {
    max-width: 1200px;
    width: 100%;
    gap: 40px;
    display: flex;
    flex-direction: column;
  }
</style>
