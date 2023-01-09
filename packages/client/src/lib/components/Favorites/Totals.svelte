<script lang="ts">
  import { format } from "$lib/utils/format";
  import { totals, favorites } from "$lib/stores/favorites";

  let favoriteLength = 0;

  favorites.subscribe((user) => {
    favoriteLength = user.length;
    return user;
  });

  $: percentageOK = Math.round(
    ($totals.statuses.length / $favorites.length) * 100
  );
</script>

<div class="module">
  <h3>Totals</h3>
  <p>TBR | {format.numberWithSpaces($totals.totalDataToBeReceived)} DATA</p>
  <p>
    {$totals.statuses.length} / {favoriteLength} | {percentageOK}%
  </p>
  {#if !$favorites.length}
    <p>?</p>
  {:else if $totals.statuses.length === favoriteLength}
    <p class="ok">OK</p>
  {:else}
    <p class="ko">KO</p>
  {/if}
  <p>Staked | {format.numberWithSpaces($totals.totalDataStaked)} DATA</p>
  <p>Sent | {format.numberWithSpaces($totals.totalDataSent)} DATA</p>
  <p>Rewards | {format.numberWithSpaces($totals.totalRewards)} DATA</p>
</div>

<style lang="scss">
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
