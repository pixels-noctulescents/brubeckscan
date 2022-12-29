<script lang="ts">
  import { prices } from "$lib/stores/prices";
</script>

<div class="container">
  <div class="prices">
    <div>BTC | {$prices.BTCUSDT || "/"} USDT</div>
    <div>DATA | {$prices.DATAUSDT || "/"} USDT</div>
  </div>
</div>

<style lang="scss">
  .container {
    background-color: rgb(32, 32, 32);
    padding: 10px 40px;
    color: whitesmoke;
    font-size: 12px;
  }

  .prices {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
</style>
