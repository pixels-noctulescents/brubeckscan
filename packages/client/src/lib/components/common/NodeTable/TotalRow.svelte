<script lang="ts">
  import { totals } from "$lib/stores/totals";
  import { user } from "$lib/stores/user";
</script>

<tr>
  <td class="name">Totals</td>
  <td>{$user.nodes.length} nodes</td>
  <td />
  <td>{Math.round($totals.totalDataStaked)}</td>
  <td>{Math.round($totals.totalRewards)}</td>
  <td>{Math.round($totals.totalDataSent)}</td>
  <td>{Math.round($totals.totalDataToBeReceived)}</td>
  <td />
  <td />
</tr>

<style lang="scss">
  td {
    text-align: center;
  }
  tr {
    background-color: rgb(51, 51, 51);
    color: white;
  }
</style>
