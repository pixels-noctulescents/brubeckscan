<script lang="ts">
  import { prices } from "$lib/stores";
</script>

<div class="flex items-center gap-4 text-xs">
  <div>BTC | {$prices.BTCUSDT || "?"} USDT</div>
  <div>DATA | {$prices.DATAUSDT || "?"} USDT</div>
</div>
