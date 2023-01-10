<script lang="ts">
  import type { Totals } from "@brubeckscan/common/types/overview";
  import { format } from "$lib/utils/format";

  export let totals: Totals;
</script>

{#if totals.nodes != 0}
  <div class="module">
    <h3>Total</h3>
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
{/if}

<style lang="scss">
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h3 {
    font-size: 4.4rem;
  }
</style>
