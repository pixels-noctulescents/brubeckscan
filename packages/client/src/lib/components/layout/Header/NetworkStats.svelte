<script lang="ts">
  import { network } from "$lib/stores/network";
  import { app } from "$lib/stores/app";
</script>

<div>
  <p>Latest reward code | {$network.lastRewards[0].code}</p>
  <p>Users | {$app.activeConnections}</p>
</div>

<style lang="scss">
  div {
    display: flex;
    gap: 20px;
  }
</style>
