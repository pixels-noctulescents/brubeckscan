<script lang="ts">
  import { prices } from "$lib/stores";
</script>

<div class="prices">
  <div>BTC | {$prices.BTCUSDT || "/"} USDT</div>
  <div>DATA | {$prices.DATAUSDT || "/"} USDT</div>
</div>

<style>
  .prices {
    display: flex;
    align-items: center;
    gap: 20px;
    font-size: 12px;
  }
</style>
