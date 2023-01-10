<script lang="ts">
  import Prices from "./Prices.svelte";
</script>

<div class="container">
  <Prices />
</div>

<style lang="scss">
  .container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 40px;
    font-size: 10px;
    transition-duration: 0.3s;
  }
</style>
