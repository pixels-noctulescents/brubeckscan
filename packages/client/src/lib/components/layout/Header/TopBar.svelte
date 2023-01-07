<script lang="ts">
  import Prices from "./Prices.svelte";
  import NetworkStatus from "./NetworkStatus.svelte";
  import LatestRewardCode from "./LatestRewardCode.svelte";
</script>

<div class="container">
  <Prices />
  <LatestRewardCode />
  <NetworkStatus />
</div>

<style lang="scss">
  .container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--dark);
    padding: 10px 40px;
    color: whitesmoke;
    font-size: 10px;
  }
</style>
