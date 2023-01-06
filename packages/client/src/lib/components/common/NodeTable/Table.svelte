<script lang="ts">
  import { user } from "$lib/stores/user";
  import Row from "./Row.svelte";
  import TotalRow from "./TotalRow.svelte";
</script>

<h3>My nodes <span>({$user.nodes.length})</span></h3>
<div>
  <table>
    <thead>
      <tr>
        <th style:width="20%">Name</th>
        <th>Address</th>
        <th>Status</th>
        <th>Staked</th>
        <th>Rewards</th>
        <th>Sent</th>
        <th>To Be Received</th>
        <th>Claim</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <TotalRow />
      {#each $user.nodes as node}
        <Row {node} />
      {/each}
    </tbody>
  </table>
</div>

<style lang="scss">
  span {
    color: lightgray;
    font-size: 16px;
  }
  div {
    width: 100%;
    box-shadow: 1px 1px 32px rgb(228, 228, 228);
  }

  table {
    width: 100%;
    background-color: white;
    border-radius: 8px;

    thead {
      background-color: rgb(32, 32, 32);
      color: whitesmoke;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      border-bottom: 1px solid lightgray;
      tr {
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
      }
    }

    th {
      text-align: center;
      padding: 25px;
    }
  }
</style>
