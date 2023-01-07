<script lang="ts">
  import Prices from "./Prices.svelte";
  import NetworkStatus from "./NetworkStatus.svelte";
  import LatestRewardCode from "./LatestRewardCode.svelte";
  import ThemeSelector from "./ThemeSelector.svelte";
</script>

<div class="container topbar">
  <Prices />
  <LatestRewardCode />
  <NetworkStatus />
  <ThemeSelector />
</div>

<style lang="scss">
  .container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 40px;
    font-size: 10px;
    transition-duration: 0.3s;
  }
</style>
