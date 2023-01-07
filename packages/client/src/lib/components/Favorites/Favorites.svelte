<script lang="ts">
  import Add from "./_Add.svelte";
  import Pool from "./Pool.svelte";
</script>

<div>
  <Add />
  <Pool />
</div>

<style lang="scss">
  div {
    max-width: 1200px;
    width: 100%;
    min-height: 50vh;
    gap: 40px;
    display: flex;
    flex-direction: column;
  }
</style>
