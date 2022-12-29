<script lang="ts">
  import type { DatabaseNode } from "@brubeckscan/common/types";
  export let node: DatabaseNode;
</script>

<tr>
  <td>{node.name}</td>
  <td>{node.address}</td>
  <td />
  <td />
  <td />
  <td />
  <td />
</tr>

<style lang="scss">
  td {
    padding: 20px;
    text-align: center;
  }

  tr {
    transition-duration: 0.3s;
  }

  tr:hover {
    background-color: rgb(236, 236, 236);
  }

  tr:not(:last-child) {
    border-bottom: 1px solid lightgray;
  }
</style>
