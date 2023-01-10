<script lang="ts">
  import type { Totals } from "@brubeckscan/common/types/overview";
  import { format } from "$lib/utils/format";

  export let totals: Totals;
</script>

{#if totals.nodes != 0}
  <div class="module container">
    <div class="data">
      <p>Total</p>
      <p>{totals.nodes} nodes</p>
      <p>{totals.statuses}% UP</p>
      {#if totals.statuses === 100}
        <p class="ok">OK</p>
      {:else}
        <p class="ko">KO</p>
      {/if}
      <p>TBR | {format.numberWithSpaces(totals.toBeReceived)} DATA</p>
      <p>Staked | {format.numberWithSpaces(totals.staked)} DATA</p>
      <p>Sent | {format.numberWithSpaces(totals.sent)} DATA</p>
      <p>Rewards | {format.numberWithSpaces(totals.rewards)} DATA</p>
    </div>
  </div>
{/if}

<style>
  .container {
    display: flex;
  }
  .container .data {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
  }
</style>
