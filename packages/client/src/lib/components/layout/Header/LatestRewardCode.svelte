<script lang="ts">
  import { network } from "$lib/stores/network";
</script>

<div class="container">
  <p>{$network.lastRewards[0].code}</p>
</div>

<style lang="scss">
  .container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 50px;
  }
</style>
