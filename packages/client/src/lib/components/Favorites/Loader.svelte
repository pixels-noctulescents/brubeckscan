<script lang="ts">
  import { scale } from "svelte/transition";
</script>

<div in:scale>
  <p>...</p>
</div>

<style lang="scss">
  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
