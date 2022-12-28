<script lang="ts">
  import { user } from "$lib/stores/user";
  import Row from "./Row.svelte";
</script>

<div>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Address</th>
        <th>DataStaked</th>
        <th>DataSent</th>
        <th>PolygonScan</th>
        <th>claimPercentage</th>
      </tr>
    </thead>
    <tbody>
      {#each $user.nodes as node}
        <Row {node} />
      {/each}
    </tbody>
  </table>
</div>

<style lang="scss">
  table {
    width: 100%;
  }
</style>
