<script lang="ts">
  import type { Node, DatabaseNode } from "@brubeckscan/common/types";
  import { PUBLIC_API_BASE_URL } from "$env/static/public";
  import { Jumper } from "svelte-loading-spinners";

  export let node: DatabaseNode;

  async function getNodeStats() {
    const response = await fetch(
      `${PUBLIC_API_BASE_URL}/api/nodes/stats/${node.address}`
    );

    const data = await response.json();

    const nodeData: Node = data.data.node;

    return nodeData;
  }

  let promise = getNodeStats();
</script>

<tr>
  <td>{node.name}</td>
  <td>{node.address}</td>
  {#await promise}
    <td><Jumper size="20" color="#FF3E00" unit="px" duration="1s" /></td>
  {:then data}
    <td>{data.dataStaked}</td>
    <td>{data.dataSent}</td>
    <td>{data.polygonScanURL}</td>
    <td>{data.claimPercentage}</td>
  {/await}
</tr>

<style lang="scss">
  td {
    height: 100px;
  }
</style>
