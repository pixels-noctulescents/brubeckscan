<script lang="ts">
  import { network } from "$lib/stores/network";
  import { prices } from "$lib/stores/prices";
  import { usersCount } from "$lib/stores/usersCount";

  $: dataStaked = $network.stats.SPOTDATASTAKED * $prices.DATAUSDT;
</script>

<div>
  <p>{$network.stats.SPOTAPY} % | APY</p>
  <p>
    {Math.round(Math.round(dataStaked) / 10000) / 100}M USDT | VALUE LOCKED
  </p>
  <p>{$network.stats.SPOTDATASTAKED} | DATA STAKED</p>
  <p>{$usersCount} | USERS</p>
</div>

<style lang="scss">
  div {
    display: flex;
    gap: 20px;
  }
</style>
