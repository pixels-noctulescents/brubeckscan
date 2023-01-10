<script lang="ts">
  import Prices from "./Prices.svelte";
  import Connect from "$lib/components/common/Connect.svelte";
</script>

<div class="container">
  <Prices />
  <Connect />
</div>

<style>
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
