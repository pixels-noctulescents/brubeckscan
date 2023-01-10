<script lang="ts">
  import { prices } from "$lib/stores";
</script>

<div class="prices">
  <div>BTC | {$prices.BTCUSDT || "/"} USDT</div>
  <div>DATA | {$prices.DATAUSDT || "/"} USDT</div>
</div>

<style lang="scss">
  .prices {
    display: flex;
    flex-direction: row;
    gap: 20px;
    width: 300px;
  }
</style>
