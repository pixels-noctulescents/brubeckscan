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
        <th>Status</th>
        <th>DataStaked</th>
        <th>totalRewardsInData</th>
        <th>dataSent</th>
        <th>dataToBeReceived</th>
        <th>claimPercentage</th>
        <th>Actions</th>
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
  div {
    width: 100%;
  }
  table {
    width: 100%;
    background-color: white;
    border-radius: 8px;

    thead {
      border-bottom: 1px solid lightgray;
      background-color: rgb(32, 32, 32);
      color: whitesmoke;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      tr {
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
      }
    }

    th {
      padding: 20px;
      text-align: center;
    }
  }
</style>
