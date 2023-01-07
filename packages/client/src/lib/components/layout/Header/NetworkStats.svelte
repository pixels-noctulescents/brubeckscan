<script lang="ts">
  import { network } from "$lib/stores/network";
  import { usersCount } from "$lib/stores/usersCount";
</script>

<div>
  <p>Latest reward code | {$network.lastRewards[0].code}</p>
  <p>Users | {$usersCount}</p>
</div>

<style lang="scss">
  div {
    display: flex;
    gap: 20px;
  }
</style>
