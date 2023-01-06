<script lang="ts">
  import { network } from "$lib/stores/network";
  import { prices } from "$lib/stores/prices";

  $: dataStaked = $network.stats.SPOTDATASTAKED * $prices.DATAUSDT;
</script>

<div>
  <p>APY | {$network.stats["24APY"]} %</p>
  <p>
    VALUE LOCKED | {Math.round(Math.round(dataStaked) / 10000) / 100}M USDT
  </p>
</div>

<style lang="scss">
  div {
    display: flex;
    gap: 20px;
  }
</style>
